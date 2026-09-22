"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Lightbulb, Compass, Code2, Layers, Cpu, Rocket, ArrowRight } from "lucide-react";

export default function PhilosophyFlowDiagram() {
  const [activeNode, setActiveNode] = useState<number>(0);

  const PHASES = [
    {
      num: "01",
      title: "Domain Deconstruction",
      desc: "Isolating business entities, permissions, and latency constraints.",
      icon: Compass,
      tags: ["First Principles", "Scope Modeling"],
    },
    {
      num: "02",
      title: "Intentional Ergonomics",
      desc: "Crafting zero-bloat UI design tokens and thumb-friendly gestures.",
      icon: Lightbulb,
      tags: ["Tactile UX", "Tailwind Design Tokens"],
    },
    {
      num: "03",
      title: "Type-Safe Engineering",
      desc: "Writing modular TypeScript, Server Components, and clean schemas.",
      icon: Code2,
      tags: ["Next.js", "PostgreSQL", "Strict Types"],
    },
    {
      num: "04",
      title: "Intelligent Guardrails",
      desc: "Embedding deterministic AI tools, RAG vectors, and background pipelines.",
      icon: Cpu,
      tags: ["Zero-Hallucination", "LLM Workflows"],
    },
    {
      num: "05",
      title: "Modular Evolution",
      desc: "Deploying production-ready cloud systems built for indefinite scale.",
      icon: Rocket,
      tags: ["Global Edge", "99.9% Uptime"],
    },
  ];

  return (
    <div className="w-full my-12 p-6 sm:p-8 rounded-3xl bg-nb-white dark:bg-nb-soft-black border border-black/10 dark:border-white/10 shadow-xl space-y-6 relative overflow-hidden font-sans">
      <div className="absolute inset-0 bg-blueprint-grid opacity-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-nb-orange/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-black/10 dark:border-white/10 pb-4 relative z-10">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-nb-orange shadow-sm shadow-nb-orange" />
          <span className="font-mono-tech text-[10px] text-nb-orange font-bold uppercase tracking-widest">
            ENGINEERING METHODOLOGY // VECTOR MATRIX
          </span>
        </div>
        <span className="font-mono-tech text-[10px] text-nb-muted">
          FROM RAW INTENT TO PRODUCTION SOFTWARE
        </span>
      </div>

      {/* 5-Step Visual Flowchart */}
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3 relative z-10">
        {PHASES.map((phase, idx) => {
          const Icon = phase.icon;
          const isSelected = activeNode === idx;
          return (
            <motion.button
              key={phase.num}
              type="button"
              onClick={() => setActiveNode(idx)}
              whileHover={{ y: -2 }}
              className={`p-4 rounded-2xl text-left transition-all border flex flex-col justify-between ${
                isSelected
                  ? "bg-nb-off-white dark:bg-black border-nb-orange shadow-md shadow-nb-orange/20 ring-1 ring-nb-orange"
                  : "bg-black/[0.02] dark:bg-white/[0.02] border-black/10 dark:border-white/10 hover:border-nb-orange/40 hover:bg-black/[0.04]"
              }`}
            >
              <div className="flex items-center justify-between gap-1 mb-2">
                <div className={`p-2 rounded-xl ${
                  isSelected ? "bg-nb-orange text-white" : "bg-black/5 dark:bg-white/10 text-nb-graphite dark:text-nb-off-white"
                }`}>
                  <Icon className="w-4 h-4" />
                </div>
                <span className="font-mono-tech text-[10px] text-nb-orange font-bold">
                  {phase.num}
                </span>
              </div>

              <div className="space-y-1">
                <h4 className="text-xs sm:text-sm font-bold text-nb-black dark:text-nb-white tracking-tight">
                  {phase.title}
                </h4>
                <p className="text-[11px] text-nb-graphite/70 dark:text-nb-muted line-clamp-2 leading-tight">
                  {phase.desc}
                </p>
              </div>

              <div className="flex flex-wrap gap-1 mt-3 pt-2 border-t border-black/5 dark:border-white/5">
                {phase.tags.map((t) => (
                  <span key={t} className="font-mono-tech text-[8px] px-1.5 py-0.5 rounded bg-black/5 dark:bg-white/5 text-nb-muted">
                    {t}
                  </span>
                ))}
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Selected Node Summary Box */}
      <div className="p-4 rounded-xl bg-nb-off-white dark:bg-black border border-black/10 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs relative z-10">
        <div className="flex items-center gap-3">
          <span className="font-mono-tech text-nb-orange font-bold">
            STAGE {PHASES[activeNode].num}:
          </span>
          <span className="text-nb-black dark:text-nb-white font-medium">
            {PHASES[activeNode].desc}
          </span>
        </div>
        <span className="font-mono-tech text-[10px] text-nb-muted">
          CONTINUOUS VERIFICATION & SLA
        </span>
      </div>
    </div>
  );
}
