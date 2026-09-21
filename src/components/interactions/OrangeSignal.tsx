"use client";

import React from "react";
import { motion } from "framer-motion";

interface OrangeSignalProps {
  variant?: "dot" | "pulse" | "line" | "beacon" | "node";
  label?: string;
  className?: string;
}

export default function OrangeSignal({
  variant = "dot",
  label,
  className = "",
}: OrangeSignalProps) {
  if (variant === "pulse") {
    return (
      <span className={`inline-flex items-center gap-2 font-mono-tech text-xs text-nb-muted ${className}`}>
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-nb-orange opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-nb-orange shadow-sm shadow-nb-orange/80" />
        </span>
        {label && <span className="uppercase tracking-widest text-[11px] text-nb-muted">{label}</span>}
      </span>
    );
  }

  if (variant === "line") {
    return (
      <div className={`relative w-full h-[1px] bg-gradient-to-r from-transparent via-nb-orange/30 to-transparent overflow-hidden ${className}`}>
        <motion.div
          animate={{ x: ["-100%", "200%"] }}
          transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-transparent via-nb-orange to-transparent opacity-80"
        />
      </div>
    );
  }

  if (variant === "beacon") {
    return (
      <div className={`relative inline-flex items-center justify-center ${className}`}>
        <div className="absolute w-6 h-6 rounded-full bg-nb-orange/20 animate-ping" />
        <div className="w-2.5 h-2.5 rounded-full bg-nb-orange shadow-md shadow-nb-orange" />
      </div>
    );
  }

  // Default dot
  return (
    <span className={`inline-block w-2 h-2 rounded-full bg-nb-orange shadow-sm shadow-nb-orange/60 ${className}`} />
  );
}
