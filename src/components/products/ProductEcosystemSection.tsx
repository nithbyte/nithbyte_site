"use client";

import React from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { ProductItem } from "@/data/products";
import { Laptop, Smartphone, CheckCircle2, ArrowUpRight, Users, Shield } from "lucide-react";

interface ProductEcosystemSectionProps {
  product: ProductItem;
}

export default function ProductEcosystemSection({ product }: ProductEcosystemSectionProps) {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 sm:px-8 py-16 border-t border-black/10 dark:border-white/10 space-y-12">
      <SectionHeader
        badgeLabel="CONNECTED ECOSYSTEM"
        badgeTag="02 APPLICATIONS"
        title="Seamlessly connected across devices and operational roles."
        description={`The complete software suite included with ${product.name}, synchronizing web management with native mobile workflows.`}
      />

      <div className={`grid grid-cols-1 ${product.applications.length > 2 ? "lg:grid-cols-3" : "lg:grid-cols-2"} gap-8`}>
        {product.applications.map((app, idx) => (
          <div
            key={app.name}
            className="p-8 rounded-3xl bg-nb-black text-nb-off-white border border-white/10 hover:border-nb-orange/40 transition-all duration-300 shadow-xl flex flex-col justify-between space-y-6 relative overflow-hidden group"
          >
            {/* Top Glow & Badge */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-nb-orange/5 rounded-full blur-2xl group-hover:bg-nb-orange/15 transition-colors" />

            <div className="space-y-4 relative z-10">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="flex items-center gap-2 font-mono-tech text-xs text-nb-orange font-bold uppercase tracking-wider">
                  {app.type.includes("Web") ? (
                    <Laptop className="w-4 h-4 text-nb-orange" />
                  ) : (
                    <Smartphone className="w-4 h-4 text-nb-orange" />
                  )}
                  {app.type}
                </span>
                <span className="text-[10px] font-mono-tech px-2 py-0.5 rounded bg-white/10 text-nb-muted">
                  0{idx + 1}
                </span>
              </div>

              <div className="space-y-2">
                <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {app.name}
                </h4>
                <p className="text-xs sm:text-sm text-nb-muted leading-relaxed">
                  {app.description}
                </p>
              </div>

              {/* Target Audience Pill */}
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex items-center gap-2 font-mono-tech text-xs text-nb-off-white">
                <Users className="w-3.5 h-3.5 text-nb-orange shrink-0" />
                <span className="text-[11px] text-nb-muted">Users:</span>
                <span className="font-semibold text-white text-[11px] truncate">{app.targetAudience}</span>
              </div>

              {/* Feature List */}
              <div className="space-y-2 pt-2">
                <span className="text-[10px] font-mono-tech uppercase text-nb-muted tracking-wider block">
                  KEY WORKFLOW CAPABILITIES:
                </span>
                <div className="space-y-1.5 font-mono-tech text-xs">
                  {app.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-nb-off-white/90">
                      <CheckCircle2 className="w-3.5 h-3.5 text-nb-orange mt-0.5 shrink-0" />
                      <span className="text-[11px] leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Status bar */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono-tech text-nb-muted">
              <span>Cloud Sync Frequency: Instant</span>
              <span className="text-nb-orange font-bold">Standard Suite</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

