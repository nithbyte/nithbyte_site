"use client";

import React from "react";
import Link from "next/link";
import SectionHeader from "../ui/SectionHeader";
import MagneticButton from "../interactions/MagneticButton";
import { PRODUCTS } from "@/data/products";
import { ArrowUpRight, Laptop, Smartphone, Sparkles, Layers } from "lucide-react";

export default function LabsSection() {
  return (
    <section className="py-24 sm:py-32 bg-nb-black text-nb-off-white relative border-b border-white/10 overflow-hidden">
      {/* Background Micro Grid */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-nb-orange/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <SectionHeader
            badgeLabel="NITHBYTE PRODUCTS"
            badgeTag="SAAS PLATFORMS"
            title="Technology that powers businesses."
            description="Our suite of industry-focused digital platforms engineered for pharmaceutical distribution, restaurant operations, network marketing, and financial management."
            dark
            className="mb-0 md:mb-0"
          />
          <MagneticButton href="/products" variant="primary" size="md" cursorLabel="VIEW SUITE">
            Explore All Products
          </MagneticButton>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PRODUCTS.map((prod) => (
            <div
              key={prod.id}
              className="p-8 sm:p-10 rounded-3xl bg-nb-soft-black border border-white/10 hover:border-nb-orange/50 transition-all duration-300 flex flex-col justify-between relative group space-y-6"
            >
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4 font-mono-tech text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-xl bg-nb-orange/20 text-nb-orange font-bold flex items-center justify-center font-mono-tech text-xs border border-nb-orange/30">
                      {prod.name.slice(0, 2)}
                    </span>
                    <span className="font-bold text-white text-sm">{prod.name}</span>
                    <span className="text-nb-muted">/</span>
                    <span className="text-nb-orange font-bold">{prod.code}</span>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-nb-off-white text-[10px] font-mono-tech">
                    {prod.appType}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-nb-white tracking-tight">
                    {prod.tagline}
                  </h3>
                  <p className="text-xs sm:text-sm text-nb-muted leading-relaxed line-clamp-3">
                    {prod.shortDesc}
                  </p>
                </div>

                {/* Modules pill preview */}
                <div className="space-y-2 pt-2">
                  <span className="text-[10px] font-mono-tech uppercase text-nb-muted tracking-wider block">
                    Core Modules:
                  </span>
                  <div className="space-y-1.5 font-mono-tech text-xs">
                    {prod.modules.slice(0, 2).map((mod) => (
                      <div key={mod.id} className="p-2 rounded-xl bg-white/5 border border-white/5 flex items-center gap-2 text-[11px] text-nb-off-white">
                        <span className="w-1.5 h-1.5 rounded-full bg-nb-orange shrink-0" />
                        <span className="truncate">{mod.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Specs & Link */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] font-mono-tech text-nb-muted">
                  {prod.category}
                </span>
                <Link
                  href={`/products/${prod.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-mono-tech text-nb-orange font-bold hover:translate-x-1 transition-transform"
                >
                  Explore {prod.name} <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
