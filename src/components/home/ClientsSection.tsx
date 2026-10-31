"use client";

import React from "react";
import SectionHeader from "../ui/SectionHeader";
import RoundCarousel, { RoundCarouselImage } from "../ui/RoundCarousel";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const DEFAULT_CLIENTS: RoundCarouselImage[] = [
  {
    name: "ALPS Cafe",
    category: "Specialty Cafe & Roastery",
    src: "/images/clients/alps-cafe-trimmed.png",
    alt: "ALPS Cafe — Brew, Bite, Belong",
  },
  {
    name: "Kovel Designs",
    category: "Architecture & Atelier",
    src: "/images/clients/kovel-designs-trimmed.png",
    alt: "Kovel Designs — Architecture & Interior Design",
  },
  {
    name: "Manamm",
    category: "Fine Dining & Hospitality",
    src: "/images/clients/manamm.png",
    alt: "Manamm — Culinary Enterprise",
  },
  {
    name: "Ze Bancairo",
    category: "School of Banking & FinTech",
    src: "/images/clients/ze-bancairo.png",
    alt: "Ze Bancairo School of Banking",
  },
  {
    name: "Suma Beauty Care",
    category: "Herbal Salon & Wellness",
    src: "/images/clients/suma-beautycare-trimmed.png",
    alt: "Suma Herbal Beauty Care",
  },
  {
    name: "iStudy Hub",
    category: "EdTech & Learning Platform",
    src: "/images/clients/istudyhub.png",
    alt: "iStudy Hub — Modern Learning Platform",
  },
  {
    name: "Suma Hair Elixir",
    category: "D2C Organic Haircare",
    src: "/images/clients/suma-hair-elixir-trimmed.png",
    alt: "Suma Hair Elixir — Herbal Formulation",
  },
  {
    name: "Adonai",
    category: "Corporate & Enterprise",
    src: "/images/clients/adonai-trimmed.png",
    alt: "Adonai",
  },
  {
    name: "Wintercoat",
    category: "Paint & Surface Chemicals",
    src: "/images/clients/wintercoat-trimmed.png",
    alt: "Wintercoat Paint & Chemicals",
  },
  {
    name: "Arches Pharmaceuticals",
    category: "Healthcare & Pharmaceuticals",
    src: "/images/clients/arches-trimmed.png",
    alt: "Arches Pharmaceuticals",
  },
];

interface ClientsSectionProps {
  className?: string;
  images?: RoundCarouselImage[];
}

export default function ClientsSection({
  className = "",
  images = DEFAULT_CLIENTS,
}: ClientsSectionProps) {
  return (
    <section
      className={`py-16 sm:py-24 bg-nb-black text-nb-off-white relative border-b border-white/10 overflow-hidden ${className}`}
    >
      {/* Background Ambience & Radial Glow */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-nb-orange/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 mb-2 sm:mb-4">
        <SectionHeader
          badgeLabel="CLIENT NETWORK"
          badgeTag="TRUSTED ECOSYSTEM"
          title="Powering ambitious businesses & visionary brands."
          description="From local institutions and specialty ateliers to multi-territory distribution networks, our software and digital platforms engineer tangible growth."
          dark
          className="!mb-0"
        />
      </div>

      {/* 3D Round Carousel Viewport with Fade Overlays */}
      <div className="relative w-full h-[320px] sm:h-[360px] -mt-2 sm:-mt-4 overflow-hidden">
        {/* Left Edge Gradient Fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-48 bg-gradient-to-r from-nb-black via-nb-black/80 to-transparent z-20" />

        {/* Right Edge Gradient Fade */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-48 bg-gradient-to-l from-nb-black via-nb-black/80 to-transparent z-20" />

        {/* The Carousel */}
        <div className="w-full h-full relative z-10">
          <RoundCarousel images={images} background="transparent" />
        </div>
      </div>

      {/* Bottom Telemetry Bar */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 mt-6 sm:mt-8">
        <div className="p-4 sm:p-5 rounded-2xl bg-nb-soft-black/80 border border-white/10 flex flex-wrap items-center justify-between gap-4 font-mono-tech text-xs text-nb-muted">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-white font-bold">CLIENT PLATFORMS ACTIVE</span>
            <span>{"//"}</span>
            <span className="text-nb-orange">100% OPERATIONAL SLA</span>
          </div>

          <div className="flex items-center gap-6 text-[11px]">
            <span>SUB-SECOND TTFB</span>
            <span className="hidden sm:inline">ZERO DOWNTIME UPGRADES</span>
            <Link
              href="/work"
              className="inline-flex items-center gap-1.5 text-nb-orange hover:text-white transition-colors font-bold"
            >
              <span>Explore Case Studies</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

