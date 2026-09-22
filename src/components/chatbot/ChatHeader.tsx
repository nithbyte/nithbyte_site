"use client";

import React from "react";
import { X, RotateCcw } from "lucide-react";

interface ChatHeaderProps {
  onClose: () => void;
  onReset: () => void;
}

export default function ChatHeader({ onClose, onReset }: ChatHeaderProps) {
  return (
    <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-nb-black select-none">
      {/* Brand Identification */}
      <div className="flex items-center gap-3">
        <div className="relative flex items-center justify-center w-6 h-6">
          <span className="absolute w-full h-full rounded-full bg-nb-orange opacity-30 animate-ping" />
          <span className="w-2.5 h-2.5 rounded-full bg-nb-orange" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-bold font-mono-tech text-white tracking-wider">
              NITHBYTE AI
            </h3>
            <span className="px-1.5 py-0.5 rounded bg-white/10 text-[9px] font-mono-tech text-nb-orange uppercase font-bold">
              GEMINI
            </span>
          </div>
          <p className="text-[11px] font-mono-tech text-nb-muted">
            Where ideas find their code.
          </p>
        </div>
      </div>

      {/* Control Actions */}
      <div className="flex items-center gap-1">
        <button
          onClick={onReset}
          title="Reset conversation"
          aria-label="Reset conversation"
          className="p-2 rounded-lg text-nb-muted hover:text-white hover:bg-white/5 transition-colors"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
        <button
          onClick={onClose}
          title="Close NithByte AI"
          aria-label="Close NithByte AI"
          className="p-2 rounded-lg text-nb-muted hover:text-white hover:bg-white/5 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
