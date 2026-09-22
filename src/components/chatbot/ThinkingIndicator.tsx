"use client";

import React from "react";
import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

export default function ThinkingIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -5 }}
      className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/5 border border-white/10 max-w-[280px] font-mono-tech text-xs text-nb-off-white"
    >
      <div className="relative flex items-center justify-center w-4 h-4">
        <span className="absolute w-full h-full rounded-full bg-nb-orange opacity-40 animate-ping" />
        <span className="w-2 h-2 rounded-full bg-nb-orange" />
      </div>
      <div className="flex items-center gap-1 text-nb-muted">
        <span>NithByte AI is thinking</span>
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
        >
          ...
        </motion.span>
      </div>
    </motion.div>
  );
}
