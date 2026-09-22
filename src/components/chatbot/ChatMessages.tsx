"use client";

import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { RefreshCw, AlertCircle } from "lucide-react";
import { ChatMessage, ProjectBriefData } from "@/lib/ai/types";
import ThinkingIndicator from "./ThinkingIndicator";
import ProjectBriefCard from "./ProjectBriefCard";
import QuickActions from "./QuickActions";

interface ChatMessagesProps {
  messages: ChatMessage[];
  isThinking: boolean;
  isLoading: boolean;
  onQuickAction: (prompt: string) => void;
  onRetry?: () => void;
  onCloseChat?: () => void;
}

// Simple safe markdown renderer for bold, lists, and links
function FormattedContent({ content }: { content: string }) {
  let cleanContent = content;
  if (content.includes("### PROJECT BRIEF")) {
    cleanContent = content.split("### PROJECT BRIEF")[0].trim();
  }

  if (!cleanContent) return null;

  const lines = cleanContent.split("\n");

  return (
    <div className="space-y-2 text-xs sm:text-sm font-sans leading-relaxed text-nb-off-white">
      {lines.map((line, idx) => {
        const trimmed = line.trim();
        if (!trimmed) return <div key={idx} className="h-1" />;

        // Headings ### or ##
        if (trimmed.startsWith("###") || trimmed.startsWith("##")) {
          const text = trimmed.replace(/^#+\s*/, "");
          return (
            <h4 key={idx} className="font-bold font-mono-tech pt-2 text-xs uppercase tracking-wider text-nb-orange">
              {text}
            </h4>
          );
        }

        // Bullet list item
        if (trimmed.startsWith("•") || trimmed.startsWith("-") || trimmed.startsWith("*")) {
          const text = trimmed.replace(/^[•\-\*]\s*/, "");
          return (
            <div key={idx} className="flex items-start gap-2 pl-2">
              <span className="w-1.5 h-1.5 rounded-full bg-nb-orange flex-shrink-0 mt-1.5" />
              <div className="flex-1">{renderFormattedInline(text)}</div>
            </div>
          );
        }

        // Numbered list item
        const numMatch = trimmed.match(/^(\d+)\.\s*(.+)/);
        if (numMatch) {
          return (
            <div key={idx} className="flex items-start gap-2 pl-2">
              <span className="font-mono-tech text-[10px] font-bold text-nb-orange flex-shrink-0 mt-0.5">
                {numMatch[1]}.
              </span>
              <div className="flex-1">{renderFormattedInline(numMatch[2])}</div>
            </div>
          );
        }

        return <p key={idx}>{renderFormattedInline(trimmed)}</p>;
      })}
    </div>
  );
}

function renderFormattedInline(text: string): React.ReactNode {
  const parts: React.ReactNode[] = [];
  const regex = /(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*|`[^`]+`)/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    const token = match[0];
    if (token.startsWith("[") && token.includes("](")) {
      const linkMatch = token.match(/\[([^\]]+)\]\(([^)]+)\)/);
      if (linkMatch) {
        const [, label, href] = linkMatch;
        parts.push(
          <Link
            key={match.index}
            href={href}
            className="text-nb-orange hover:underline font-semibold"
          >
            {label}
          </Link>
        );
      }
    } else if (token.startsWith("**") && token.endsWith("**")) {
      parts.push(
        <strong key={match.index} className="text-white font-semibold">
          {token.slice(2, -2)}
        </strong>
      );
    } else if (token.startsWith("`") && token.endsWith("`")) {
      parts.push(
        <code
          key={match.index}
          className="px-1.5 py-0.5 rounded bg-white/10 text-nb-orange font-mono-tech text-[11px]"
        >
          {token.slice(1, -1)}
        </code>
      );
    }

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length > 0 ? parts : text;
}

export default function ChatMessages({
  messages,
  isThinking,
  isLoading,
  onQuickAction,
  onRetry,
  onCloseChat,
}: ChatMessagesProps) {
  const scrollEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isThinking]);

  return (
    <div
      data-lenis-prevent="true"
      className="flex-1 overflow-y-auto overscroll-contain p-4 sm:p-5 space-y-4 font-mono-tech scroll-smooth"
    >
      {messages.map((msg) => {
        const isUser = msg.role === "user";

        return (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex flex-col ${isUser ? "items-end" : "items-start"} space-y-2`}
          >
            {/* Sender Label */}
            <div className="flex items-center gap-1.5 text-[10px] text-nb-muted px-1">
              {!isUser && (
                <span className="w-1.5 h-1.5 rounded-full bg-nb-orange" />
              )}
              <span>{isUser ? "YOU" : "NITHBYTE AI"}</span>
            </div>

            {/* Message Bubble */}
            <div
              className={`p-4 rounded-2xl max-w-[88%] sm:max-w-[82%] text-xs sm:text-sm leading-relaxed ${
                isUser
                  ? "bg-white/10 text-white border border-white/15 rounded-tr-sm"
                  : msg.isError
                  ? "bg-red-950/40 border border-red-500/30 text-red-200 rounded-tl-sm space-y-3"
                  : "bg-nb-soft-black text-nb-off-white border border-white/10 rounded-tl-sm shadow-md"
              }`}
            >
              {msg.isError ? (
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                    <p className="text-xs">{msg.content}</p>
                  </div>
                  {onRetry && (
                    <button
                      onClick={onRetry}
                      disabled={isLoading}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-mono-tech text-xs font-bold transition-colors disabled:opacity-50"
                    >
                      <RefreshCw className="w-3 h-3 text-nb-orange" />
                      <span>Try Again</span>
                    </button>
                  )}
                </div>
              ) : (
                <FormattedContent content={msg.content} />
              )}
            </div>

            {/* Render Project Brief Card if attached to this message */}
            {msg.brief && (
              <div className="w-full pt-2">
                <ProjectBriefCard brief={msg.brief} onCloseChat={onCloseChat} />
              </div>
            )}
          </motion.div>
        );
      })}

      {/* Thinking Indicator */}
      {isThinking && <ThinkingIndicator />}

      {/* Show Quick Actions on Welcome Screen */}
      {messages.length === 1 && !isLoading && (
        <div className="pt-2">
          <QuickActions onSelect={onQuickAction} disabled={isLoading} />
        </div>
      )}

      <div ref={scrollEndRef} />
    </div>
  );
}
