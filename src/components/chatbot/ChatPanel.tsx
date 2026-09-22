"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";
import { ChatMessage, ProjectBriefData } from "@/lib/ai/types";

interface ChatPanelProps {
  isOpen: boolean;
  onClose: () => void;
  onReset: () => void;
  messages: ChatMessage[];
  isLoading: boolean;
  isThinking: boolean;
  onSendMessage: (msg: string) => void;
  onQuickAction: (prompt: string) => void;
  onRetry?: () => void;
}

export default function ChatPanel({
  isOpen,
  onClose,
  onReset,
  messages,
  isLoading,
  isThinking,
  onSendMessage,
  onQuickAction,
  onRetry,
}: ChatPanelProps) {
  // Listen for Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Mobile Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 sm:hidden"
          />

          {/* Chat Window Panel */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            role="dialog"
            aria-modal="true"
            aria-label="NithByte AI Chat Assistant"
            className="fixed bottom-0 sm:bottom-6 right-0 sm:right-6 z-50 w-full sm:w-[460px] h-[92vh] sm:h-[680px] max-h-[92vh] bg-nb-black border border-white/15 sm:rounded-3xl rounded-t-3xl shadow-2xl flex flex-col overflow-hidden text-nb-off-white"
          >
            {/* Header */}
            <ChatHeader onClose={onClose} onReset={onReset} />

            {/* Messages Body */}
            <ChatMessages
              messages={messages}
              isLoading={isLoading}
              isThinking={isThinking}
              onQuickAction={onQuickAction}
              onRetry={onRetry}
              onCloseChat={onClose}
            />

            {/* Input Footer */}
            <ChatInput onSend={onSendMessage} isLoading={isLoading} />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
