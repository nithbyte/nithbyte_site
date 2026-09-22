"use client";

import React, { useState, useRef, useEffect } from "react";
import { ArrowUp, CornerDownLeft } from "lucide-react";

interface ChatInputProps {
  onSend: (message: string) => void;
  isLoading: boolean;
}

export default function ChatInput({ onSend, isLoading }: ChatInputProps) {
  const [text, setText] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (!isLoading && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [isLoading]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    const trimmed = text.trim();
    if (!trimmed || isLoading) return;
    onSend(trimmed);
    setText("");
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
    e.target.style.height = "auto";
    e.target.style.height = `${Math.min(e.target.scrollHeight, 120)}px`;
  };

  return (
    <div className="p-3 border-t border-white/10 bg-nb-black">
      <div className="relative flex items-end gap-2 p-2 rounded-2xl bg-white/5 border border-white/10 focus-within:border-nb-orange/60 transition-colors">
        <textarea
          ref={textareaRef}
          value={text}
          onChange={handleInput}
          onKeyDown={handleKeyDown}
          placeholder="Describe your project idea or ask a question..."
          disabled={isLoading}
          rows={1}
          aria-label="Your message to NithByte AI"
          className="w-full bg-transparent resize-none outline-none font-mono-tech text-xs sm:text-sm text-nb-off-white placeholder:text-nb-muted leading-relaxed px-2 py-1 max-h-[120px] disabled:opacity-50"
        />

        <button
          onClick={handleSubmit}
          disabled={!text.trim() || isLoading}
          aria-label="Send message"
          className="p-2 rounded-xl bg-nb-orange text-white hover:bg-nb-deep-orange transition-all disabled:opacity-30 disabled:cursor-not-allowed flex-shrink-0 shadow-md shadow-nb-orange/20"
        >
          <ArrowUp className="w-4 h-4 stroke-[2.5]" />
        </button>
      </div>

      <div className="flex items-center justify-between px-2 pt-2 text-[10px] font-mono-tech text-nb-muted">
        <span>NithByte AI v2.5 // Gemini</span>
        <span className="hidden sm:inline-flex items-center gap-1">
          Press <CornerDownLeft className="w-2.5 h-2.5" /> to send
        </span>
      </div>
    </div>
  );
}
