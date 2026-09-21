"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";
import { Sun, Moon } from "lucide-react";

interface ThemeToggleProps {
  className?: string;
  size?: "sm" | "md";
}

export default function ThemeToggle({ className = "", size = "md" }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  const sizeClasses = size === "sm" ? "p-1.5" : "p-2";
  const iconSize = size === "sm" ? "w-3.5 h-3.5" : "w-4 h-4";

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      data-cursor="hover"
      data-cursor-text={isDark ? "LIGHT" : "DARK"}
      className={`relative inline-flex items-center justify-center rounded-full border transition-all duration-300 select-none ${
        isDark
          ? "bg-nb-soft-black text-nb-off-white border-white/15 hover:border-nb-orange/80 hover:text-nb-orange"
          : "bg-nb-white text-nb-black border-black/15 hover:border-nb-orange hover:text-nb-orange shadow-sm"
      } ${sizeClasses} ${className}`}
    >
      <motion.div
        key={theme}
        initial={{ rotate: -90, scale: 0.5, opacity: 0 }}
        animate={{ rotate: 0, scale: 1, opacity: 1 }}
        exit={{ rotate: 90, scale: 0.5, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {isDark ? <Sun className={iconSize} /> : <Moon className={iconSize} />}
      </motion.div>
    </button>
  );
}
