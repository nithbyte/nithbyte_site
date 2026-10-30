"use client";

import React from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { ProductItem } from "@/data/products";
import { TrendingUp, Sparkles, ShieldCheck, Zap } from "lucide-react";

interface ProductBenefitsSectionProps {
  product: ProductItem;
}

export default function ProductBenefitsSection({ product }: ProductBenefitsSectionProps) {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 sm:px-8 py-16 border-t border-black/10 dark:border-white/10 space-y-12">
      <SectionHeader
        badgeLabel="BUSINESS ROI"
        badgeTag="06 VALUE & BENEFITS"
        title="Measurable advantages that compound with operational scale."
        description={`Investing in ${product.name} delivers immediate clarity, eliminates repetitive administrative overhead, and accelerates core business velocity.`}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {product.benefits.map((benefit, idx) => (
          <div
            key={benefit.title}
            className="p-8 rounded-3xl bg-nb-soft-black text-nb-off-white border border-white/10 hover:border-nb-orange/40 transition-all duration-300 shadow-xl space-y-4 flex flex-col justify-between group"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="w-9 h-9 rounded-xl bg-nb-orange/20 border border-nb-orange/30 flex items-center justify-center text-nb-orange">
                  <TrendingUp className="w-4 h-4" />
                </div>
                {benefit.highlight && (
                  <span className="px-2.5 py-0.5 rounded-full bg-nb-orange/10 border border-nb-orange/20 text-[10px] font-mono-tech text-nb-orange font-bold uppercase tracking-wider">
                    {benefit.highlight}
                  </span>
                )}
              </div>

              <h4 className="text-xl font-bold text-white tracking-tight">
                {benefit.title}
              </h4>

              <p className="text-xs sm:text-sm text-nb-muted leading-relaxed font-sans">
                {benefit.description}
              </p>
            </div>

            <div className="pt-3 border-t border-white/10 text-[10px] font-mono-tech text-nb-muted flex items-center justify-between">
              <span>Standard Benefit Metric</span>
              <span className="text-nb-orange font-bold">High Impact</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

