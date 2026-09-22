"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { ChatMessage, ProjectBriefData } from "@/lib/ai/types";

const SESSION_STORAGE_KEY = "nithbyte_chat_session_v2";

const INITIAL_WELCOME_MESSAGE: ChatMessage = {
  id: "msg-welcome-0",
  role: "assistant",
  content: "I can help you explore NithByte's engineering capabilities, shape a new project idea, or navigate to the right technical solution. Where would you like to start?",
  timestamp: Date.now(),
};

function extractBriefFromText(text: string): ProjectBriefData | null {
  if (!text.includes("### PROJECT BRIEF") && !text.includes("PROJECT BRIEF")) {
    return null;
  }

  const getField = (regex: RegExp): string => {
    const match = text.match(regex);
    return match ? match[1].replace(/\[|\]/g, "").trim() : "";
  };

  const projectType = getField(/\*\*(?:Project Type|Type):\*\*\s*([^\n\r]+)/i);
  const businessType = getField(/\*\*(?:Business Domain|Business|Industry):\*\*\s*([^\n\r]+)/i);
  const stage = getField(/\*\*(?:Current Stage|Stage):\*\*\s*([^\n\r]+)/i);
  const platformsRaw = getField(/\*\*(?:Target Platforms|Platforms|Platform):\*\*\s*([^\n\r]+)/i);
  const aiReq = getField(/\*\*(?:AI \/ Automation|AI Requirement):\*\*\s*([^\n\r]+)/i);
  const commerceReq = getField(/\*\*(?:Commerce \/ Payments|Commerce Requirement):\*\*\s*([^\n\r]+)/i);
  const potentialCaps = getField(/\*\*(?:Potential Capabilities|Capabilities):\*\*\s*([^\n\r]+)/i);

  if (!projectType && !businessType) return null;

  return {
    projectType: projectType || "Custom Solution",
    businessType: businessType || "Commercial System",
    stage: stage || "Planning",
    platforms: platformsRaw ? platformsRaw.split(/[,/]/).map((p) => p.trim()) : ["Web (Next.js)"],
    coreRequirements: [],
    aiRequirement: aiReq || undefined,
    commerceRequirement: commerceReq || undefined,
    potentialCapabilities: potentialCaps ? potentialCaps.split(/[,/]/).map((c) => c.trim()) : [],
    nextStep: "/contact",
  };
}

export function useNithByteChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_WELCOME_MESSAGE]);
  const [isLoading, setIsLoading] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [latestBrief, setLatestBrief] = useState<ProjectBriefData | null>(null);

  const abortControllerRef = useRef<AbortController | null>(null);

  // Restore session from sessionStorage on mount
  useEffect(() => {
    try {
      const saved = sessionStorage.getItem(SESSION_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          // Filter out temporary errors
          const valid = parsed.filter((m: ChatMessage) => !m.isError);
          if (valid.length > 0) {
            setMessages(valid);
            for (let i = valid.length - 1; i >= 0; i--) {
              const b = extractBriefFromText(valid[i].content);
              if (b) {
                setLatestBrief(b);
                break;
              }
            }
          }
        }
      }
    } catch {
      // sessionStorage unavailable
    }
  }, []);

  // Save session changes (filtering out transient streaming states)
  useEffect(() => {
    try {
      if (messages.length > 1 && !isLoading) {
        const toSave = messages.filter((m) => !m.isError && m.content.trim().length > 0);
        sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(toSave));
      }
    } catch {
      // Ignore sessionStorage errors
    }
  }, [messages, isLoading]);

  const sendMessage = useCallback(
    async (text: string) => {
      const trimmed = text.trim();
      if (!trimmed || isLoading) return;

      setError(null);
      const userMsg: ChatMessage = {
        id: `msg-user-${Date.now()}`,
        role: "user",
        content: trimmed,
        timestamp: Date.now(),
      };

      // Strip any previous error message from active history
      const cleanPrevMessages = messages.filter((m) => !m.isError && m.content.trim().length > 0);
      const newMessages = [...cleanPrevMessages, userMsg];
      setMessages(newMessages);
      setIsLoading(true);
      setIsThinking(true);

      const assistantMsgId = `msg-asst-${Date.now()}`;
      let accumulatedText = "";

      // Setup placeholder assistant message
      setMessages((prev) => [
        ...prev,
        {
          id: assistantMsgId,
          role: "assistant",
          content: "",
          timestamp: Date.now(),
          isStreaming: true,
        },
      ]);

      try {
        if (abortControllerRef.current) {
          abortControllerRef.current.abort();
        }
        abortControllerRef.current = new AbortController();

        // Build payload with only valid user/assistant turns
        const payloadMessages = newMessages
          .filter((m) => !m.isError && m.content.trim().length > 0)
          .map((m) => ({ role: m.role, content: m.content }));

        const response = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ messages: payloadMessages }),
          signal: abortControllerRef.current.signal,
        });

        if (!response.ok) {
          const errData = await response.json().catch(() => ({}));
          throw new Error(errData.error || "Failed to connect to NithByte AI.");
        }

        const reader = response.body?.getReader();
        if (!reader) throw new Error("No response body stream received.");

        const decoder = new TextDecoder();
        let receivedFirstChunk = false;

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          const chunk = decoder.decode(value, { stream: true });
          accumulatedText += chunk;

          if (!receivedFirstChunk && chunk.trim()) {
            receivedFirstChunk = true;
            setIsThinking(false);
          }

          setMessages((prev) =>
            prev.map((msg) =>
              msg.id === assistantMsgId ? { ...msg, content: accumulatedText } : msg
            )
          );
        }

        // Finalize streaming
        const finalBrief = extractBriefFromText(accumulatedText);
        if (finalBrief) {
          setLatestBrief(finalBrief);
        }

        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === assistantMsgId
              ? { ...msg, isStreaming: false, brief: finalBrief || undefined }
              : msg
          )
        );
      } catch (err: any) {
        if (err.name === "AbortError") return;

        setError(err?.message || "Something interrupted the connection. Please click Try Again.");
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === assistantMsgId
              ? {
                  ...msg,
                  content: "Something interrupted the connection with NithByte AI. Please try again.",
                  isStreaming: false,
                  isError: true,
                }
              : msg
          )
        );
      } finally {
        setIsLoading(false);
        setIsThinking(false);
      }
    },
    [messages, isLoading]
  );

  const retryLastMessage = useCallback(() => {
    // Find the last user message
    const lastUserMsg = [...messages].reverse().find((m) => m.role === "user");
    if (lastUserMsg) {
      sendMessage(lastUserMsg.content);
    }
  }, [messages, sendMessage]);

  const resetConversation = useCallback(() => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    setMessages([
      {
        id: `msg-welcome-${Date.now()}`,
        role: "assistant",
        content: "Conversation reset. Where would you like to start? Explore capabilities, describe an idea, or plan a system build.",
        timestamp: Date.now(),
      },
    ]);
    setError(null);
    setIsLoading(false);
    setIsThinking(false);
    setLatestBrief(null);
    try {
      sessionStorage.removeItem(SESSION_STORAGE_KEY);
      sessionStorage.removeItem("nithbyte_chat_session_v1");
    } catch {
      // Ignore
    }
  }, []);

  return {
    isOpen,
    setIsOpen,
    messages,
    isLoading,
    isThinking,
    error,
    latestBrief,
    sendMessage,
    retryLastMessage,
    resetConversation,
  };
}
