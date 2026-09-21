import React from "react";
import type { Metadata } from "next";
import SignalBadge from "@/components/ui/SignalBadge";
import SectionHeader from "@/components/ui/SectionHeader";
import MagneticButton from "@/components/interactions/MagneticButton";
import OrangeSignal from "@/components/interactions/OrangeSignal";
import { LAB_PRODUCTS } from "@/data/labs";
import { FlaskConical, Terminal, Cpu, Layers, Sparkles, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "NithByte Labs — Experimental Products",
  description: "R&D laboratory developing next-generation headless commerce infrastructure and enterprise AI systems.",
};

export default function LabsPage() {
  return (
    <div className="pt-32 pb-24 space-y-24">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="border-b border-black/10 dark:border-white/10 pb-16 space-y-6 max-w-4xl">
          <SignalBadge label="R&D LABORATORY" tag="LABS" />
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-nb-black dark:text-nb-white leading-[1.02]">
            Incubating the next generation of <span className="text-nb-orange">digital products.</span>
          </h1>
          <p className="text-lg sm:text-2xl text-nb-graphite/90 dark:text-nb-muted font-light leading-relaxed">
            NithByte Labs is our dedicated engineering sandbox where we design, prototype, and benchmark proprietary software products prior to commercial release.
          </p>
        </div>
      </section>

      {/* Lab Products Breakdown */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 space-y-16">
        {LAB_PRODUCTS.map((lab) => (
          <div
            key={lab.id}
            id={lab.id}
            className="p-8 sm:p-12 rounded-3xl bg-nb-black text-nb-off-white border border-white/10 shadow-2xl space-y-8 relative overflow-hidden"
          >
            {/* Top Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
              <div className="flex items-center gap-3 font-mono-tech text-xs">
                <span className="flex items-center gap-2 text-nb-orange font-bold text-base">
                  <FlaskConical className="w-5 h-5" />
                  {lab.code}
                </span>
                <span className="text-nb-muted">/</span>
                <span className="text-white font-bold">{lab.title}</span>
              </div>
              <span className="px-3 py-1 rounded bg-nb-orange/20 text-nb-orange font-mono-tech text-xs font-bold uppercase tracking-wider">
                {lab.status}
              </span>
            </div>

            {/* Content Details */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-6 space-y-4">
                <h2 className="text-3xl sm:text-4xl font-bold text-nb-white tracking-tight">
                  {lab.tagline}
                </h2>
                <p className="text-sm sm:text-base text-nb-muted leading-relaxed">
                  {lab.description}
                </p>

                {/* Architecture components */}
                <div className="pt-4 space-y-2 font-mono-tech text-xs">
                  <span className="text-nb-orange font-bold uppercase block">
                    ARCHITECTURAL SUBSYSTEMS:
                  </span>
                  <div className="space-y-1.5">
                    {lab.architecture.map((arch) => (
                      <div
                        key={arch}
                        className="p-2.5 rounded-lg bg-white/5 border border-white/5 flex items-center gap-2 text-nb-off-white"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-nb-orange" />
                        <span>{arch}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Focus Areas & Specs */}
              <div className="lg:col-span-6 space-y-6">
                <div className="space-y-3">
                  <span className="text-xs font-mono-tech uppercase text-nb-muted tracking-wider block">
                    CURRENT BENCHMARKS & OBJECTIVES:
                  </span>
                  <div className="space-y-3">
                    {lab.focusAreas.map((area) => (
                      <div key={area.title} className="p-4 rounded-xl bg-nb-soft-black border border-white/10 space-y-1">
                        <p className="text-sm font-bold text-nb-off-white font-mono-tech">
                          {area.title}
                        </p>
                        <p className="text-xs text-nb-muted leading-relaxed">
                          {area.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Specs Box */}
                <div className="p-6 rounded-2xl bg-nb-soft-black border border-white/10 grid grid-cols-2 gap-4 font-mono-tech text-xs">
                  {lab.previewSpecs.map((spec) => (
                    <div key={spec.label} className="space-y-0.5">
                      <span className="text-[10px] text-nb-muted uppercase">{spec.label}</span>
                      <p className="text-nb-off-white font-bold">{spec.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Early Access CTA */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 text-center space-y-6">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-nb-black dark:text-nb-white">
          Interested in private alpha access?
        </h2>
        <p className="text-base sm:text-lg text-nb-muted max-w-xl mx-auto">
          We partner with select enterprises to pilot upcoming Labs infrastructure in real production environments.
        </p>
        <div className="flex justify-center pt-2">
          <MagneticButton href="/contact?type=labs" variant="primary" size="lg" cursorLabel="PILOT ACCESS">
            Request Alpha Consultation
          </MagneticButton>
        </div>
      </section>
    </div>
  );
}
