"use client";

import React, { useState } from "react";
import { ServicePillar } from "./types";
import { SERVICE_PILLARS } from "./chatEngine";
import { ArrowUpRight, CheckCircle2, ChevronRight, Layers, Sparkles } from "lucide-react";

interface ServiceDiscoveryCardProps {
  initialPillarId?: string;
  onSelectCapability?: (pillar: ServicePillar) => void;
  onStartServiceProject?: (pillar: ServicePillar) => void;
}

const PILLARS_LIST: ServicePillar[] = Object.values(SERVICE_PILLARS);

export default function ServiceDiscoveryCard({
  initialPillarId = "build",
  onSelectCapability,
  onStartServiceProject,
}: ServiceDiscoveryCardProps) {
  const [activeId, setActiveId] = useState<string>(initialPillarId);
  const activePillar = SERVICE_PILLARS[activeId] || SERVICE_PILLARS.build;

  const handleSelect = (pillar: ServicePillar) => {
    setActiveId(pillar.id);
    if (onSelectCapability) {
      onSelectCapability(pillar);
    }
  };

  return (
    <div className="w-full my-3.5 p-4 sm:p-5 rounded-2xl bg-nb-black text-nb-off-white border border-white/10 shadow-2xl space-y-4 font-sans relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-nb-orange/10 rounded-full blur-2xl pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-nb-orange shadow-sm shadow-nb-orange" />
          <span className="font-mono-tech text-[10px] text-nb-orange font-bold uppercase tracking-widest">
            ENGINEERING CAPABILITIES // 5 PILLARS
          </span>
        </div>
        <span className="font-mono-tech text-[10px] text-nb-muted">
          SELECT PILLAR
        </span>
      </div>

      {/* Pillar Tabs Bar */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
        {PILLARS_LIST.map((pillar) => {
          const isSelected = pillar.id === activeId;
          return (
            <button
              key={pillar.id}
              onClick={() => handleSelect(pillar)}
              className={`px-3 py-2 rounded-xl text-xs font-mono-tech uppercase font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                isSelected
                  ? "bg-nb-orange text-white shadow-md shadow-nb-orange/30 border border-nb-orange"
                  : "bg-white/5 text-nb-muted hover:text-nb-white hover:bg-white/10 border border-white/5"
              }`}
            >
              <span className="text-[10px] opacity-75">{pillar.tag}</span>
              <span>{pillar.title.split(" ")[0]}</span>
            </button>
          );
        })}
      </div>

      {/* Active Pillar Card View */}
      <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-4">
        {/* Title & Tagline */}
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono-tech px-2 py-0.5 rounded bg-nb-orange/20 text-nb-orange font-bold">
              {activePillar.tag}
            </span>
            <h4 className="text-sm font-bold text-nb-white">
              {activePillar.title}
            </h4>
          </div>
          <p className="text-xs text-nb-off-white/80 font-light leading-relaxed">
            {activePillar.summary}
          </p>
        </div>

        {/* Capabilities Breakdown */}
        <div className="space-y-2">
          <span className="text-[10px] font-mono-tech text-nb-orange font-bold uppercase tracking-wider block">
            CORE CAPABILITIES
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {activePillar.capabilities.map((cap, i) => (
              <div
                key={i}
                className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5 space-y-1"
              >
                <span className="text-[11px] font-bold text-nb-white flex items-center gap-1.5">
                  <span className="text-nb-orange text-xs">•</span>
                  {cap.name}
                </span>
                <p className="text-[10px] text-nb-muted leading-tight">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Pills */}
        <div className="space-y-1.5 pt-1">
          <span className="text-[10px] font-mono-tech text-nb-orange font-bold uppercase tracking-wider block">
            PRODUCTION STACK
          </span>
          <div className="flex flex-wrap gap-1.5">
            {activePillar.techStack.map((tech, i) => (
              <span
                key={i}
                className="text-[10px] font-mono-tech px-2 py-0.5 rounded bg-white/5 border border-white/10 text-nb-off-white/80"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Direct CTA */}
        <div className="pt-2">
          <button
            onClick={() => onStartServiceProject?.(activePillar)}
            className="w-full py-2.5 px-4 rounded-xl bg-nb-orange hover:bg-nb-deep-orange text-white font-mono-tech text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-nb-orange/20 group"
          >
            <span>{activePillar.ctaText}</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
