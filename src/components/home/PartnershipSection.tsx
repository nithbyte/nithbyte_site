"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import MagneticButton from "../interactions/MagneticButton";
import {
  Palette,
  Cpu,
  ArrowUpRight,
  ExternalLink,
  Sparkles,
  Layers,
  ShieldCheck,
  Zap,
  CheckCircle2,
} from "lucide-react";

interface PartnershipSectionProps {
  className?: string;
}

export default function PartnershipSection({ className = "" }: PartnershipSectionProps) {
  const SYNERGY_POINTS = [
    {
      title: "Zero Handoff Friction",
      desc: "Brand narratives and creative assets translate directly into type-safe components without dilution.",
    },
    {
      title: "End-to-End Capability",
      desc: "Covering the full spectrum from brand identity and graphic design to cloud architecture and distributed APIs.",
    },
    {
      title: "Sub-Second Production",
      desc: "High-impact visual elegance powered by Next.js edge caching, lightweight bundles, and modern standards.",
    },
  ];

  return (
    <section
      className={`py-24 sm:py-32 bg-nb-black text-nb-off-white relative border-b border-white/10 overflow-hidden ${className}`}
    >
      {/* Background Graphic Grid & Ambient Glow */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-25 pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-nb-orange/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-nb-orange/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <SectionHeader
            badgeLabel="STRATEGIC ALLIANCE"
            badgeTag="ECOSYSTEM PARTNER"
            title="NithByte × Kovel Designs"
            description="United in digital excellence. NithByte proudly operates as the official Digital and IT Engineering Partner for Kovel Designs, uniting world-class creative brand vision with uncompromising software architecture."
            dark
            className="mb-0 md:mb-0"
          />
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://koveldesigns.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 border border-white/10 hover:border-nb-orange/50 text-xs font-mono-tech text-white hover:text-nb-orange transition-all"
            >
              <span>Visit Kovel Designs</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <MagneticButton href="/contact" variant="primary" size="md" cursorLabel="PARTNER">
              Start Collaborative Project
            </MagneticButton>
          </div>
        </div>

        {/* Dual Pillar Card Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          {/* Left Column: Kovel Designs */}
          <div className="lg:col-span-5 p-8 sm:p-10 rounded-3xl bg-nb-soft-black border border-white/10 flex flex-col justify-between space-y-6 relative overflow-hidden group hover:border-white/20 transition-all">
            <div className="space-y-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 font-mono-tech text-xs">
                <div className="flex items-center gap-2 text-nb-off-white">
                  <Palette className="w-4 h-4 text-nb-orange" />
                  <span className="font-bold tracking-wider">KOVEL DESIGNS</span>
                </div>
                <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[10px] text-nb-muted uppercase tracking-wider">
                  Creative Atelier
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Creative Direction &amp; Brand Storytelling
                </h3>
                <p className="text-sm text-nb-muted leading-relaxed font-sans">
                  Founded with a vision for bold, evocative brand identity. Kovel Designs specializes in branding, graphic identity, packaging design, and visual strategies that capture audience imagination.
                </p>
              </div>

              <div className="space-y-2 pt-2">
                <span className="text-[10px] font-mono-tech text-nb-orange font-bold uppercase tracking-widest">
                  CORE DOMAINS
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono-tech text-nb-off-white">
                  {[
                    "Brand Identity & Logo",
                    "Graphic & Visual Design",
                    "Packaging Architecture",
                    "Creative Campaign Direction",
                    "UI/UX Design Systems",
                    "Marketing Collaterals",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 p-2 rounded-xl bg-white/5 border border-white/5 text-[11px]"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-nb-orange/80" />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono-tech text-xs text-nb-muted">
              <span>FOUNDED · CHENNAI, INDIA</span>
              <span className="text-white font-semibold">EST. 2013</span>
            </div>
          </div>

          {/* Center Synergy Connector */}
          <div className="lg:col-span-2 flex flex-col items-center justify-center p-6 rounded-3xl bg-nb-soft-black/60 border border-white/10 text-center space-y-4 relative">
            <div className="w-12 h-12 rounded-2xl bg-nb-orange/20 border border-nb-orange/40 flex items-center justify-center text-nb-orange shadow-lg shadow-nb-orange/20">
              <Sparkles className="w-6 h-6 animate-pulse" />
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-mono-tech text-nb-orange font-bold tracking-widest uppercase">
                THE ALLIANCE
              </span>
              <h4 className="text-base font-bold text-white">
                Synergistic Delivery
              </h4>
              <p className="text-xs text-nb-muted leading-relaxed">
                Brand vision engineered into living software without friction.
              </p>
            </div>

            <div className="w-full pt-4 border-t border-white/10 space-y-2 font-mono-tech text-[10px] text-nb-muted">
              <div className="flex items-center justify-between px-2 py-1 rounded bg-white/5">
                <span>IDEATION</span>
                <span className="text-nb-orange">KOVEL</span>
              </div>
              <div className="flex items-center justify-between px-2 py-1 rounded bg-white/5">
                <span>ENGINEERING</span>
                <span className="text-nb-orange">NITHBYTE</span>
              </div>
              <div className="flex items-center justify-between px-2 py-1 rounded bg-white/5">
                <span>OUTCOME</span>
                <span className="text-green-400 font-bold">FLUID SCALE</span>
              </div>
            </div>
          </div>

          {/* Right Column: NithByte */}
          <div className="lg:col-span-5 p-8 sm:p-10 rounded-3xl bg-nb-soft-black border border-white/10 flex flex-col justify-between space-y-6 relative overflow-hidden group hover:border-white/20 transition-all">
            <div className="space-y-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 font-mono-tech text-xs">
                <div className="flex items-center gap-2 text-nb-off-white">
                  <Cpu className="w-4 h-4 text-nb-orange" />
                  <span className="font-bold tracking-wider">NITHBYTE</span>
                </div>
                <span className="px-2.5 py-1 rounded bg-nb-orange/20 border border-nb-orange/30 text-[10px] text-nb-orange font-bold uppercase tracking-wider">
                  Digital &amp; IT Partner
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Full-Stack Architecture &amp; System Engineering
                </h3>
                <p className="text-sm text-nb-muted leading-relaxed font-sans">
                  Powering Kovel Designs with cutting-edge technology infrastructure. NithByte designs and executes sub-second web platforms, bespoke SaaS applications, cloud backends, and autonomous workflows.
                </p>
              </div>

              <div className="space-y-2 pt-2">
                <span className="text-[10px] font-mono-tech text-nb-orange font-bold uppercase tracking-widest">
                  CORE DOMAINS
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono-tech text-nb-off-white">
                  {[
                    "Next.js Full-Stack Web",
                    "Bespoke SaaS Platforms",
                    "Headless E-Commerce",
                    "Distributed Cloud Backends",
                    "Practical AI & Copilots",
                    "Autonomous Workflows",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 p-2 rounded-xl bg-white/5 border border-white/5 text-[11px]"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-nb-orange" />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono-tech text-xs text-nb-muted">
              <span>SPECIALIZED ENGINEERING</span>
              <span className="text-nb-orange font-semibold">WHERE IDEAS FIND CODE</span>
            </div>
          </div>
        </div>

        {/* Bottom Synergy Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          {SYNERGY_POINTS.map((point, idx) => (
            <div
              key={point.title}
              className="p-6 rounded-2xl bg-nb-soft-black/80 border border-white/5 space-y-2"
            >
              <div className="flex items-center gap-2 font-mono-tech text-xs text-nb-orange font-bold">
                <CheckCircle2 className="w-4 h-4" />
                <span>0{idx + 1} {"//"} {point.title}</span>
              </div>
              <p className="text-xs sm:text-sm text-nb-muted leading-relaxed font-sans">
                {point.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

