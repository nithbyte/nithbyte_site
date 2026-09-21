"use client";

import React from "react";
import Link from "next/link";
import SectionHeader from "../ui/SectionHeader";
import MagneticButton from "../interactions/MagneticButton";
import { LAB_PRODUCTS } from "@/data/labs";
import { ArrowUpRight, FlaskConical, Cpu, Layers } from "lucide-react";

export default function LabsSection() {
  return (
    <section className="py-24 sm:py-32 bg-nb-black text-nb-off-white relative border-b border-white/10 overflow-hidden">
      {/* Background Micro Grid */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <SectionHeader
            badgeLabel="NITHBYTE LABS"
            badgeTag="R&D PIPELINE"
            title="Technology we're building next."
            description="Our internal engineering laboratory experimenting with composable commerce primitives and ambient enterprise intelligence."
            dark
            className="mb-0 md:mb-0"
          />
          <MagneticButton href="/labs" variant="primary" size="md" cursorLabel="ENTER LAB">
            Explore Labs
          </MagneticButton>
        </div>

        {/* Labs Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {LAB_PRODUCTS.map((lab) => (
            <div
              key={lab.id}
              className="p-8 sm:p-10 rounded-3xl bg-nb-soft-black border border-white/10 hover:border-nb-orange/50 transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4 font-mono-tech text-xs">
                  <span className="flex items-center gap-2 text-nb-orange font-bold">
                    <FlaskConical className="w-4 h-4" />
                    {lab.code}
                  </span>
                  <span className="px-2.5 py-1 rounded bg-nb-orange/10 border border-nb-orange/20 text-nb-orange font-bold text-[10px]">
                    {lab.status}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-bold text-nb-white tracking-tight">
                    {lab.title}
                  </h3>
                  <p className="text-base text-nb-off-white/90 font-light">
                    {lab.tagline}
                  </p>
                  <p className="text-xs text-nb-muted leading-relaxed">
                    {lab.description}
                  </p>
                </div>

                {/* Focus Areas */}
                <div className="space-y-2 pt-2">
                  <span className="text-[11px] font-mono-tech uppercase text-nb-muted tracking-wider">
                    Core Focus Objectives:
                  </span>
                  <div className="space-y-2">
                    {lab.focusAreas.map((f) => (
                      <div key={f.title} className="p-3 rounded-xl bg-white/5 border border-white/5">
                        <p className="text-xs font-bold text-nb-off-white font-mono-tech">
                          {f.title}
                        </p>
                        <p className="text-[11px] text-nb-muted mt-0.5">
                          {f.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Specs */}
              <div className="pt-6 mt-6 border-t border-white/10 grid grid-cols-2 gap-3 font-mono-tech text-xs">
                {lab.previewSpecs.slice(0, 2).map((spec) => (
                  <div key={spec.label} className="space-y-0.5">
                    <span className="text-[10px] text-nb-muted uppercase">{spec.label}</span>
                    <p className="text-nb-off-white font-bold">{spec.value}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
