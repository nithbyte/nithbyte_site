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
    title: "I have a product idea",
    subtitle: "Architecture & concept discovery",
    prompt: "I have an idea for a digital product. Can you guide me through shaping the architecture?",
    icon: Lightbulb,
  },
  {
    id: "capabilities",
    title: "Explore capabilities",
    subtitle: "Core engineering disciplines",
    prompt: "What are NithByte's core engineering disciplines and capabilities?",
    icon: Layers,
  },
  {
    id: "website",
    title: "Web application / platform",
    subtitle: "Next.js & full-stack software",
    prompt: "I need a high-performance web platform or custom software build. How does NithByte approach this?",
    icon: Globe,
  },
  {
    id: "mobile",
    title: "Mobile app engineering",
    subtitle: "iOS & Android solutions",
    prompt: "I need an iOS & Android mobile application with offline-first synchronization.",
    icon: Smartphone,
  },
  {
    id: "ecommerce",
    title: "E-commerce & storefronts",
    subtitle: "Headless commerce architecture",
    prompt: "I need a fast headless e-commerce storefront with global multi-gateway checkout.",
    icon: ShoppingBag,
  },
  {
    id: "ai",
    title: "AI & workflow automation",
    subtitle: "Custom copilots & intelligence",
    prompt: "I want to integrate custom AI copilots and workflow automation into my business.",
    icon: Sparkles,
  },
];

export default function QuickActions({ onSelect, disabled }: QuickActionsProps) {
  return (
    <div className="space-y-2.5 pt-2">
      <div className="flex items-center gap-2 px-1">
        <span className="w-1.5 h-1.5 rounded-full bg-nb-orange animate-pulse" />
        <span className="text-[11px] font-mono-tech uppercase text-nb-muted tracking-wider">
          Suggested Prompt Pathways:
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {ACTIONS.map((action) => {
          const Icon = action.icon;
          return (
            <motion.button
              key={action.id}
              onClick={() => onSelect(action.prompt)}
              disabled={disabled}
              whileHover={disabled ? {} : { scale: 1.01, y: -1 }}
              whileTap={disabled ? {} : { scale: 0.98 }}
              className="p-3 rounded-2xl bg-white/5 border border-white/10 hover:border-nb-orange/60 hover:bg-white/10 transition-all text-left group flex items-start gap-3 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
            >
              <span className="p-2 rounded-xl bg-white/5 text-nb-orange group-hover:bg-nb-orange group-hover:text-white transition-colors flex-shrink-0 mt-0.5 border border-white/5">
                <Icon className="w-4 h-4" />
              </span>
              <div className="flex-1 min-w-0 space-y-0.5">
                <p className="text-xs font-mono-tech text-nb-off-white font-semibold group-hover:text-white leading-snug whitespace-normal">
                  {action.title}
                </p>
                <p className="text-[10px] font-mono-tech text-nb-muted group-hover:text-nb-off-white/80 leading-tight whitespace-normal">
                  {action.subtitle}
                </p>
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
