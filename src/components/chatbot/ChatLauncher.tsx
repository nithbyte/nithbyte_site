"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

interface ChatLauncherProps {
  onClick: () => void;
  isOpen: boolean;
}

export default function ChatLauncher({ onClick, isOpen }: ChatLauncherProps) {
  const [isHovered, setIsHovered] = useState(false);

  if (isOpen) return null;

  return (
    <motion.button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      aria-label="Open NithByte AI Assistant"
      className="fixed bottom-6 right-6 z-50 group flex items-center gap-3 px-4 py-3 rounded-full bg-nb-black text-nb-off-white border border-white/20 shadow-2xl hover:border-nb-orange/80 transition-all duration-300 select-none cursor-pointer"
    >
      {/* NithByte Orange Signal Indicator */}
      <div className="relative flex items-center justify-center w-5 h-5">
        <span className="absolute w-full h-full rounded-full bg-nb-orange opacity-40 animate-ping" />
        <span className="relative w-2.5 h-2.5 rounded-full bg-nb-orange shadow-md shadow-nb-orange/80" />
      </div>

      {/* Label & Text */}
      <div className="flex flex-col items-start text-left">
        <div className="flex items-center gap-1.5">
          <span className="font-mono-tech text-xs font-bold text-white tracking-wider">
            NITHBYTE AI
          </span>
          <span className="w-1 h-1 rounded-full bg-nb-orange hidden sm:inline-block" />
        </div>
        <span className="text-[11px] font-mono-tech text-nb-muted group-hover:text-nb-orange transition-colors flex items-center gap-1">
          {isHovered ? "ASK NITHBYTE AI" : "Where ideas find code"}
          <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
        </span>
      </div>
    </motion.button>
  );
}
