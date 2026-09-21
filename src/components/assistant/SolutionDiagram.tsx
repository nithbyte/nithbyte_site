"use client";

import React from "react";
import { motion } from "framer-motion";
import { SolutionFlowStage } from "./types";
import { Lightbulb, Compass, Layers, Cpu, Rocket, ChevronRight, Sparkles } from "lucide-react";

interface SolutionDiagramProps {
  stages: SolutionFlowStage[];
  summary?: string;
  onContinueToBrief?: () => void;
}

const STAGE_ICONS = {
  idea: Lightbulb,
  understand: Compass,
  solution: Layers,
  technology: Cpu,
  next_step: Rocket,
};

export default function SolutionDiagram({
  stages,
  summary,
  onContinueToBrief,
}: SolutionDiagramProps) {
  return (
    <div className="w-full my-3 p-4 sm:p-5 rounded-2xl bg-nb-black/90 dark:bg-black/95 text-nb-off-white border border-nb-orange/30 shadow-2xl relative overflow-hidden font-sans">
      {/* Blueprint Grid background & Ambient glow */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-20 pointer-events-none" />
      <div className="absolute -right-10 -top-10 w-40 h-40 bg-nb-orange/15 rounded-full blur-3xl pointer-events-none" />

      {/* Header Banner */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 pb-3.5 border-b border-white/10">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-nb-orange opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-nb-orange shadow-sm shadow-nb-orange" />
          </span>
          <span className="font-mono-tech text-[10px] text-nb-orange font-bold uppercase tracking-widest">
            SOLUTION ARCHITECTURE BLUEPRINT
          </span>
        </div>
        <span className="font-mono-tech text-[10px] text-nb-muted">
          HIGH-LEVEL SYNTHESIS
        </span>
      </div>

      {/* Pipeline Navigation / Stepper */}
      <div className="relative z-10 py-3">
        <div className="flex items-center justify-between gap-1 overflow-x-auto pb-2 scrollbar-none">
          {stages.map((stage, idx) => {
            const Icon = STAGE_ICONS[stage.step] || Layers;
            return (
              <React.Fragment key={stage.step}>
                <div className="flex items-center gap-1.5 flex-shrink-0">
                  <div className="w-6 h-6 rounded-lg bg-nb-orange/15 border border-nb-orange/40 flex items-center justify-center text-nb-orange text-xs">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-mono-tech text-[9px] uppercase tracking-wider text-nb-off-white/80">
                    {stage.step.replace("_", " ")}
                  </span>
                </div>
                {idx < stages.length - 1 && (
                  <div className="h-[1px] flex-1 min-w-[12px] bg-gradient-to-r from-nb-orange/40 to-nb-orange/10 mx-1" />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Signal Pipeline Animation (IDEA -> SOLUTION -> CODE) */}
      <div className="relative z-10 my-2 px-3 py-2 rounded-xl bg-nb-soft-black/80 border border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-mono-tech text-[10px] text-nb-muted uppercase tracking-wider">
            PIPELINE STATUS:
          </span>
          <div className="flex items-center gap-1.5 font-mono-tech text-[11px] font-bold text-nb-off-white">
            <span className="text-nb-orange">IDEA</span>
            <ChevronRight className="w-3 h-3 text-nb-muted" />
            <span className="text-nb-orange">SOLUTION</span>
            <ChevronRight className="w-3 h-3 text-nb-muted" />
            <span className="text-nb-white">CODE</span>
          </div>
        </div>

        {/* Pulsing signal track */}
        <div className="flex items-center gap-1.5">
          <motion.div
            animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-2 h-2 rounded-full bg-nb-orange shadow-md shadow-nb-orange"
          />
          <span className="font-mono-tech text-[9px] text-nb-orange font-bold uppercase tracking-wider">
            RESOLVED
          </span>
        </div>
      </div>

      {/* Structured Stages Cards */}
      <div className="relative z-10 space-y-2.5 my-3">
        {stages.map((st, i) => {
          const Icon = STAGE_ICONS[st.step] || Layers;
          return (
            <div
              key={st.step}
              className="p-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.07] border border-white/5 hover:border-nb-orange/30 transition-all duration-200 space-y-1.5"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-mono-tech text-[9px] font-bold text-nb-orange px-1.5 py-0.5 rounded bg-nb-orange/10 border border-nb-orange/20">
                    {st.label}
                  </span>
                  <h4 className="text-xs font-bold text-nb-off-white tracking-tight">
                    {st.title}
                  </h4>
                </div>
              </div>
              <p className="text-[11px] text-nb-off-white/80 leading-relaxed font-light">
                {st.desc}
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {st.techTags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono-tech text-[9px] px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-nb-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Optional CTA to Proceed to Brief */}
      {onContinueToBrief && (
        <div className="relative z-10 pt-2 border-t border-white/10">
          <button
            onClick={onContinueToBrief}
            className="w-full py-2.5 rounded-xl bg-nb-orange hover:bg-nb-deep-orange text-white font-mono-tech text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-nb-orange/25"
          >
            <span>View Full Project Brief</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}
    </div>
  );
}
