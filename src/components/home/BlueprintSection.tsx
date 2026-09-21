"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import SectionHeader from "../ui/SectionHeader";
import MagneticButton from "../interactions/MagneticButton";
import { PROJECTS } from "@/data/projects";
import { ArrowUpRight, ExternalLink, Sparkles, Grid, Eye, Code, CheckCircle2 } from "lucide-react";

const STAGES = [
  { id: "grid", step: "01", name: "GRID", icon: Grid, desc: "Spatial rhythm, typography baselines, and modular bounds." },
  { id: "wireframe", step: "02", name: "WIREFRAME", icon: Eye, desc: "Customer exploration journey from culinary menu to location." },
  { id: "design", step: "03", name: "DESIGN", icon: Sparkles, desc: "Editorial visual atmosphere and responsive palette." },
  { id: "code", step: "04", name: "CODE", icon: Code, desc: "Type-safe Next.js component system and structured SEO." },
  { id: "product", step: "05", name: "PRODUCT", icon: CheckCircle2, desc: "Live, edge-deployed digital experience." },
];

export default function BlueprintSection() {
  const [activeStageIndex, setActiveStageIndex] = useState<number>(4);
  const project = PROJECTS[0]; // ALPS Cafe Nagercoil

  return (
    <section className="py-24 sm:py-32 bg-nb-off-white dark:bg-nb-black relative border-b border-black/10 dark:border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <SectionHeader
          badgeLabel="BLUEPRINT TO REALITY"
          badgeTag="CASE STUDY BREAKDOWN"
          title="How architectural precision becomes living product."
          description="Trace the structural transformation of a real-world digital experience through five distinct engineering stages."
        />

        {/* Interactive Transformation Container */}
        <div className="bg-nb-black text-nb-off-white rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
          {/* Stage Progress Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-5 border-b border-white/10 divide-x divide-white/10 bg-nb-soft-black font-mono-tech text-xs">
            {STAGES.map((s, idx) => {
              const isSelected = idx === activeStageIndex;
              return (
                <button
                  key={s.id}
                  onClick={() => setActiveStageIndex(idx)}
                  className={`p-4 text-left transition-all duration-200 select-none ${
                    isSelected
                      ? "bg-nb-black text-nb-orange border-b-2 border-nb-orange"
                      : "text-nb-muted hover:text-nb-off-white hover:bg-white/5"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-[10px] text-nb-muted">{s.step}</span>
                    {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-nb-orange" />}
                  </div>
                  <p className="font-bold text-xs tracking-wider uppercase">{s.name}</p>
                </button>
              );
            })}
          </div>

          {/* Main Blueprint Viewport */}
          <div className="p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Project Specs */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-nb-orange/10 border border-nb-orange/20 text-xs font-mono-tech text-nb-orange">
                <span>FEATURED CLIENT</span>
                <span>//</span>
                <span className="text-white font-bold">{project.title}</span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-bold text-nb-white tracking-tight leading-tight">
                {project.tagline}
              </h3>

              <p className="text-sm sm:text-base text-nb-muted leading-relaxed">
                {STAGES[activeStageIndex].desc}
              </p>

              <div className="space-y-3 pt-2 font-mono-tech text-xs">
                <div className="flex items-center justify-between py-2 border-b border-white/5">
                  <span className="text-nb-muted">STAGE ACTIVE</span>
                  <span className="text-nb-orange font-bold">
                    {STAGES[activeStageIndex].step} // {STAGES[activeStageIndex].name}
                  </span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-white/5">
                  <span className="text-nb-muted">TECH STACK</span>
                  <span className="text-nb-off-white">{project.techStack.join(" • ")}</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-white/5">
                  <span className="text-nb-muted">LIVE DESTINATION</span>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-nb-orange hover:underline flex items-center gap-1"
                  >
                    alpscafenagercoil.com <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <MagneticButton
                  href={`/work/${project.slug}`}
                  variant="primary"
                  size="md"
                  cursorLabel="EXPLORE ↗"
                >
                  Explore Case Study
                </MagneticButton>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-nb-off-white font-mono-tech text-xs hover:border-nb-orange hover:text-nb-orange transition-colors"
                  >
                    Visit Live Site <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>

            {/* Right: Stage Visualizer Simulation */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl bg-nb-soft-black border border-white/10 p-6 sm:p-8 aspect-video sm:aspect-[4/3] flex flex-col justify-between overflow-hidden shadow-2xl">
                {/* Visualizer Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3 font-mono-tech text-xs text-nb-muted z-10">
                  <span className="text-nb-orange font-bold">VIEWPORT SIMULATION</span>
                  <span>{STAGES[activeStageIndex].name}_LAYER</span>
                </div>

                {/* Simulated Content based on active stage */}
                <div className="relative flex-1 my-4 flex items-center justify-center">
                  {activeStageIndex === 0 && (
                    <div className="w-full h-full border border-dashed border-nb-orange/40 rounded-xl p-4 grid grid-cols-4 grid-rows-3 gap-3">
                      {Array.from({ length: 12 }).map((_, i) => (
                        <div key={i} className="border border-white/10 rounded flex items-center justify-center text-[10px] font-mono-tech text-nb-muted">
                          col_{i+1}
                        </div>
                      ))}
                    </div>
                  )}

                  {activeStageIndex === 1 && (
                    <div className="w-full h-full border border-white/20 rounded-xl p-4 space-y-3 font-mono-tech text-xs text-nb-muted">
                      <div className="w-1/3 h-4 bg-white/20 rounded" />
                      <div className="w-full h-16 bg-white/10 rounded border border-dashed border-white/20 flex items-center justify-center text-[11px]">
                        HERO WIREFRAME: BRAND ATMOSPHERE
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="h-12 bg-white/5 rounded border border-white/10" />
                        <div className="h-12 bg-white/5 rounded border border-white/10" />
                        <div className="h-12 bg-white/5 rounded border border-white/10" />
                      </div>
                    </div>
                  )}

                  {activeStageIndex === 2 && (
                    <div className="w-full h-full bg-[#1A1817] rounded-xl p-5 flex flex-col justify-between border border-white/15">
                      <div className="flex items-center justify-between">
                        <span className="text-nb-orange font-serif italic text-lg">ALPS Cafe</span>
                        <span className="text-[10px] font-mono-tech text-white/60">Menu • Gallery • Location</span>
                      </div>
                      <div className="space-y-1">
                        <p className="text-xl font-serif text-white">Artisanal Coffee & Culinary Warmth</p>
                        <p className="text-xs text-white/60">Nagercoil, Tamil Nadu</p>
                      </div>
                      <div className="w-24 py-1.5 rounded-full bg-nb-orange text-[10px] text-center font-bold text-white">
                        Explore Menu
                      </div>
                    </div>
                  )}

                  {activeStageIndex === 3 && (
                    <div className="w-full h-full bg-[#050505] rounded-xl p-4 font-mono-tech text-[11px] text-green-400/90 overflow-hidden border border-white/10 space-y-1">
                      <p className="text-nb-muted">// Next.js Page Architecture</p>
                      <p><span className="text-nb-orange">export default function</span> AlpsCafe() &#123;</p>
                      <p className="pl-4">return &lt;<span className="text-blue-400">AtmosphereLayout</span>&gt;</p>
                      <p className="pl-8">&lt;<span className="text-yellow-400">CulinaryMenu</span> sync=&#123;true&#125; /&gt;</p>
                      <p className="pl-8">&lt;<span className="text-yellow-400">LocalSEOData</span> location=&quot;Nagercoil&quot; /&gt;</p>
                      <p className="pl-4">&lt;/<span className="text-blue-400">AtmosphereLayout</span>&gt;;</p>
                      <p>&#125;</p>
                    </div>
                  )}

                  {activeStageIndex === 4 && (
                    <div className="w-full h-full bg-gradient-to-br from-nb-black via-nb-soft-black to-[#2A180E] rounded-xl p-5 flex flex-col justify-between border border-nb-orange/40 shadow-lg shadow-nb-orange/10">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                          <span className="text-xs font-mono-tech text-white font-bold">ALPS CAFE LIVE</span>
                        </div>
                        <span className="text-[10px] font-mono-tech text-nb-orange">PERFORMANCE 98</span>
                      </div>
                      <div className="space-y-1 my-auto">
                        <h4 className="text-xl sm:text-2xl font-bold text-white">
                          Where Taste Meets Modern Digital Presence
                        </h4>
                        <p className="text-xs text-nb-muted">
                          Fast, responsive, and tailored for culinary discovery in Nagercoil.
                        </p>
                      </div>
                      <div className="flex items-center justify-between text-[11px] font-mono-tech text-nb-off-white border-t border-white/10 pt-2">
                        <span>HTTPS ENCRYPTED</span>
                        <span className="text-nb-orange">PRODUCTION STABLE</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Footer telemetry */}
                <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[10px] font-mono-tech text-nb-muted">
                  <span>TRANSFORMATION MATRIX</span>
                  <span className="text-nb-orange">STAGE {activeStageIndex + 1} OF 5</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
