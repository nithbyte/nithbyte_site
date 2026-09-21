import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import SignalBadge from "@/components/ui/SignalBadge";
import SectionHeader from "@/components/ui/SectionHeader";
import MagneticButton from "@/components/interactions/MagneticButton";
import { PROJECTS } from "@/data/projects";
import { ArrowUpRight, Lock, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Work & Case Studies — NithByte",
  description: "Explore our real-world engineering case studies, active client deployments, and upcoming product platforms.",
};

export default function WorkPage() {
  return (
    <div className="pt-32 pb-24 space-y-24">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="border-b border-black/10 pb-16 space-y-6 max-w-4xl">
          <SignalBadge label="CASE STUDIES & PORTFOLIO" tag="WORK" />
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-nb-black leading-[1.02]">
            Digital products built for <span className="text-nb-orange">tangible impact.</span>
          </h1>
          <p className="text-lg sm:text-2xl text-nb-graphite/90 font-light leading-relaxed">
            We hold ourselves to rigorous engineering standards. Explore our live client platforms and upcoming product architectures.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 space-y-12">
        {PROJECTS.map((project, idx) => (
          <div
            key={project.id}
            className="p-8 sm:p-12 rounded-3xl bg-nb-white border border-black/10 hover:border-nb-orange/40 transition-all shadow-sm space-y-8"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-black/5 pb-6">
              <div className="flex items-center gap-3 font-mono-tech text-xs">
                <span className="text-xl text-nb-orange font-bold">0{idx + 1}</span>
                <span className="px-3 py-1 rounded-full bg-nb-off-white border border-black/10 font-semibold uppercase">
                  {project.category}
                </span>
              </div>
              <div className="flex items-center gap-3">
                {project.isLive ? (
                  <span className="inline-flex items-center gap-2 font-mono-tech text-xs text-green-600 font-bold">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    LIVE PRODUCTION
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 font-mono-tech text-xs text-nb-orange">
                    <Lock className="w-3.5 h-3.5" />
                    ACTIVE DEVELOPMENT
                  </span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-7 space-y-4">
                <h2 className="text-3xl sm:text-4xl font-bold text-nb-black tracking-tight">
                  {project.title}
                </h2>
                <p className="text-base sm:text-lg text-nb-orange font-medium">
                  {project.tagline}
                </p>
                <p className="text-sm sm:text-base text-nb-graphite/80 leading-relaxed">
                  {project.summary}
                </p>

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
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-black/10 text-nb-black font-mono-tech text-xs hover:border-nb-orange hover:text-nb-orange transition-colors"
                    >
                      Visit Destination <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>

              <div className="lg:col-span-5 p-6 rounded-2xl bg-nb-off-white border border-black/5 space-y-4 font-mono-tech text-xs">
                <span className="text-nb-muted uppercase tracking-wider block">
                  TECHNICAL ATTRIBUTES
                </span>
                <div className="space-y-2">
                  <div className="flex items-center justify-between py-1.5 border-b border-black/5">
                    <span className="text-nb-muted">CLIENT</span>
                    <span className="text-nb-black font-bold">{project.client}</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-black/5">
                    <span className="text-nb-muted">RELEASE</span>
                    <span className="text-nb-black font-bold">{project.year}</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-black/5">
                    <span className="text-nb-muted">STACK</span>
                    <span className="text-nb-black font-bold">{project.techStack.join(" • ")}</span>
                  </div>
                </div>

                <div className="pt-2">
                  <span className="text-nb-muted text-[10px] uppercase block mb-1.5">HIGHLIGHTS:</span>
                  <ul className="space-y-1 text-nb-graphite">
                    {project.features.map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-nb-orange" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 text-center space-y-6">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-nb-black">
          Have an upcoming project to engineer?
        </h2>
        <div className="flex justify-center pt-2">
          <MagneticButton href="/contact" variant="primary" size="lg" cursorLabel="LET'S BUILD">
            Start a Project
          </MagneticButton>
        </div>
      </section>
    </div>
  );
}
