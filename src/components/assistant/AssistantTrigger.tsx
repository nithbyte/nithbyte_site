"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageSquare, Sparkles } from "lucide-react";

interface AssistantTriggerProps {
  isOpen: boolean;
  onClick: () => void;
}

export default function AssistantTrigger({
  isOpen,
  onClick,
}: AssistantTriggerProps) {
  const [isHovered, setIsHovered] = useState(false);

  if (isOpen) return null;

  return (
    <motion.button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, scale: 0.85, y: 20 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -4, 0],
      }}
      transition={{
        opacity: { duration: 0.3 },
        scale: { duration: 0.3 },
        y: { repeat: Infinity, duration: 4.5, ease: "easeInOut" },
      }}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      data-cursor="cta"
      data-cursor-text="ASK AI"
      aria-label="Open NithByte AI Assistant"
      className="fixed bottom-6 right-6 z-50 group flex items-center gap-3.5 pl-3.5 pr-4 py-2.5 rounded-full bg-nb-black text-nb-off-white border border-nb-orange/40 shadow-2xl shadow-nb-orange/15 hover:border-nb-orange hover:shadow-nb-orange/30 backdrop-blur-xl transition-all duration-300 select-none"
    >
      {/* Small Signature NithByte Orange Signal */}
      <div className="relative flex items-center justify-center">
        <motion.span
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: "easeInOut",
          }}
          className="absolute w-5 h-5 rounded-full bg-nb-orange/30"
        />
        <span className="relative inline-block w-2.5 h-2.5 rounded-full bg-nb-orange shadow-sm shadow-nb-orange" />
      </div>

      {/* Label Layout */}
      <div className="flex flex-col text-left font-mono-tech">
        <div className="flex items-center gap-1.5">
          <span className="text-[11px] font-bold text-white tracking-wider">
            NITHBYTE AI
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-nb-orange/80 animate-pulse" />
        </div>
        <div className="text-[10px] text-nb-muted transition-colors group-hover:text-nb-orange flex items-center gap-1">
          {isHovered ? (
            <motion.span
              initial={{ opacity: 0, x: -3 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-nb-orange font-bold uppercase tracking-wider text-[9px]"
            >
              ASK NITHBYTE AI
            </motion.span>
          ) : (
            <span>Ask us anything →</span>
          )}
        </div>
      </div>

      {/* Subtle indicator arrow */}
      <div className="w-6 h-6 rounded-full bg-white/5 group-hover:bg-nb-orange group-hover:text-white text-nb-muted transition-all duration-200 flex items-center justify-center flex-shrink-0">
        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
      </div>
    </motion.button>
  );
}
