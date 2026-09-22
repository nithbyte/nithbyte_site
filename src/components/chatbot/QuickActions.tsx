"use client";

import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Layers, Globe, Smartphone, ShoppingBag, Sparkles } from "lucide-react";

interface QuickActionsProps {
  onSelect: (prompt: string) => void;
  disabled?: boolean;
}

const ACTIONS = [
  {
    id: "idea",
    label: "I have an idea",
    prompt: "I have an idea for a digital product. Can you guide me through shaping the architecture?",
    icon: Lightbulb,
  },
  {
    id: "capabilities",
    label: "Explore capabilities",
    prompt: "What are NithByte's core engineering disciplines and capabilities?",
    icon: Layers,
  },
  {
    id: "website",
    label: "I need a website",
    prompt: "I need a high-performance web platform or custom software build. How does NithByte approach this?",
    icon: Globe,
  },
  {
    id: "mobile",
    label: "I need a mobile app",
    prompt: "I need an iOS & Android mobile application with offline-first synchronization.",
    icon: Smartphone,
  },
  {
    id: "ecommerce",
    label: "I need e-commerce",
    prompt: "I need a fast headless e-commerce storefront with global multi-gateway checkout.",
    icon: ShoppingBag,
  },
  {
    id: "ai",
    label: "I want AI / automation",
    prompt: "I want to integrate custom AI copilots and workflow automation into my business.",
    icon: Sparkles,
  },
];

export default function QuickActions({ onSelect, disabled }: QuickActionsProps) {
  return (
    <div className="space-y-2 pt-2">
      <span className="text-[11px] font-mono-tech uppercase text-nb-muted tracking-wider block">
        Suggested Prompt Pathways:
      </span>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {ACTIONS.map((action, i) => {
          const Icon = action.icon;
          return (
            <motion.button
              key={action.id}
              onClick={() => onSelect(action.prompt)}
              disabled={disabled}
              whileHover={disabled ? {} : { scale: 1.02, x: 2 }}
              whileTap={disabled ? {} : { scale: 0.98 }}
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-nb-orange/60 hover:bg-white/10 transition-all text-left group flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="p-1 rounded-md bg-white/5 text-nb-orange group-hover:bg-nb-orange group-hover:text-white transition-colors">
                <Icon className="w-3.5 h-3.5" />
              </span>
              <span className="text-xs font-mono-tech text-nb-off-white font-medium group-hover:text-white truncate">
                {action.label}
              </span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
