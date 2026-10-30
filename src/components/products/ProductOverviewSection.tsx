"use client";

import React from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { ProductItem } from "@/data/products";
import { CheckCircle2, Target, AlertTriangle, Lightbulb } from "lucide-react";

interface ProductOverviewSectionProps {
  product: ProductItem;
}

export default function ProductOverviewSection({ product }: ProductOverviewSectionProps) {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 sm:px-8 py-16 border-t border-black/10 dark:border-white/10 space-y-12">
      <SectionHeader
        badgeLabel="PLATFORM ARCHITECTURE"
        badgeTag="01 OVERVIEW"
        title="Purpose-built for modern operational excellence."
        description={`A closer look at how ${product.name} modernizes traditional workflows and creates tangible enterprise value.`}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: What it does & Narrative */}
        <div className="lg:col-span-7 space-y-6">
          <div className="p-8 sm:p-10 rounded-3xl bg-nb-white dark:bg-nb-black border border-black/10 dark:border-white/10 space-y-4 shadow-sm">
            <h3 className="text-2xl sm:text-3xl font-bold text-nb-black dark:text-nb-white tracking-tight">
              What is {product.name}?
            </h3>
            <p className="text-base sm:text-lg text-nb-graphite/90 dark:text-nb-muted leading-relaxed">
              {product.fullDesc}
            </p>
            <p className="text-sm sm:text-base text-nb-graphite/80 dark:text-nb-muted/90 leading-relaxed">
              By consolidating separate spreadsheets, disconnected communication channels, and paper-based tracking into an unified multi-tenant software system, {product.name} provides leadership with verifiable operational clarity and actionable growth analytics.
            </p>
          </div>

          {/* Designed For Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-nb-soft-black text-nb-off-white border border-white/10 space-y-3 font-mono-tech text-xs">
            <div className="flex items-center gap-2 text-nb-orange font-bold uppercase tracking-wider">
              <Target className="w-4 h-4 text-nb-orange" />
              <span>DESIGNED FOR INDUSTRY TEAMS</span>
            </div>
            <p className="text-sm font-sans text-nb-muted leading-relaxed">
              Engineered specifically for businesses operating in {product.category}, catering to executives, field managers, operational staff, and end consumers who demand real-time reliability.
            </p>
          </div>
        </div>

        {/* Right: Business Challenges Addressed */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-6 sm:p-8 rounded-3xl bg-nb-black text-nb-off-white border border-white/10 space-y-5">
            <div className="flex items-center gap-2 font-mono-tech text-xs text-nb-orange font-bold uppercase tracking-wider pb-2 border-b border-white/10">
              <Lightbulb className="w-4 h-4 text-nb-orange" />
              <span>CORE CHALLENGES RESOLVED</span>
            </div>

            <div className="space-y-4 text-xs font-mono-tech">
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 space-y-1">
                <span className="text-white font-bold block text-sm font-sans">Fragmented Data Silos</span>
                <p className="text-nb-muted text-xs leading-relaxed">
                  Replaces scattered local files and manual records with a single, synchronized cloud repository.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 space-y-1">
                <span className="text-white font-bold block text-sm font-sans">Lack of Field Transparency</span>
                <p className="text-nb-muted text-xs leading-relaxed">
                  Delivers real-time GPS check-ins, automated status feeds, and instant transactional validation.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 space-y-1">
                <span className="text-white font-bold block text-sm font-sans">Reconciliation Overhead</span>
                <p className="text-nb-muted text-xs leading-relaxed">
                  Automates complex calculations, collections balancing, and audit-compliant reporting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

