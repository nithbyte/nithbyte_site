"use client";

import React from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { ProductItem } from "@/data/products";
import {
  Layers,
  Cpu,
  CheckCircle2,
  Sliders,
  Settings,
  ShieldCheck,
  Zap,
  Boxes
} from "lucide-react";

interface ProductFeaturesSectionProps {
  product: ProductItem;
}

export default function ProductFeaturesSection({ product }: ProductFeaturesSectionProps) {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 sm:px-8 py-16 border-t border-black/10 dark:border-white/10 space-y-12">
      <SectionHeader
        badgeLabel="FEATURE MATRIX"
        badgeTag="03 MODULES"
        title="Engineered module by module for deep industrial utility."
        description="Comprehensive functional capabilities structured into focused, operational subsystems."
      />

      {/* Modules Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {product.modules.map((module, idx) => (
          <div
            key={module.id}
            className="p-8 rounded-3xl bg-nb-white dark:bg-nb-soft-black border border-black/10 dark:border-white/10 hover:border-nb-orange/40 transition-all duration-300 shadow-lg flex flex-col justify-between space-y-6 group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-2xl bg-nb-orange/10 dark:bg-nb-orange/20 border border-nb-orange/20 flex items-center justify-center text-nb-orange">
                  <Boxes className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono-tech text-nb-muted">MOD // 0{idx + 1}</span>
              </div>

              <div className="space-y-2">
                <h4 className="text-xl font-bold text-nb-black dark:text-white tracking-tight">
                  {module.title}
                </h4>
                <p className="text-xs sm:text-sm text-nb-graphite/80 dark:text-nb-muted leading-relaxed">
                  {module.description}
                </p>
              </div>

              {/* Sub-features */}
              <div className="space-y-2 pt-2 border-t border-black/5 dark:border-white/10">
                {module.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-2 text-xs font-mono-tech text-nb-graphite/90 dark:text-nb-off-white/90">
                    <span className="w-1.5 h-1.5 rounded-full bg-nb-orange mt-1.5 shrink-0" />
                    <span className="leading-snug">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-black/5 dark:border-white/10 flex items-center justify-between text-[11px] font-mono-tech text-nb-muted">
              <span>Standard API Hooks</span>
              <span className="text-nb-orange font-bold">Enabled</span>
            </div>
          </div>
        ))}
      </div>

      {/* Configurable Options (If applicable, e.g. EvoByte) */}
      {product.configurableOptions && product.configurableOptions.length > 0 && (
        <div className="mt-12 p-8 sm:p-10 rounded-3xl bg-nb-black text-nb-off-white border border-white/10 space-y-6">
          <div className="flex items-center gap-2 font-mono-tech text-xs text-nb-orange font-bold uppercase tracking-wider">
            <Sliders className="w-4 h-4 text-nb-orange" />
            <span>CONFIGURABLE BUSINESS PARAMETERS</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {product.configurableOptions.map((opt) => (
              <div key={opt.title} className="p-6 rounded-2xl bg-white/5 border border-white/5 space-y-3">
                <h5 className="text-lg font-bold text-white tracking-tight">{opt.title}</h5>
                <p className="text-xs text-nb-muted leading-relaxed font-sans">{opt.description}</p>
                <div className="space-y-1.5 pt-2 font-mono-tech text-xs">
                  {opt.items.map((it, iIdx) => (
                    <div key={iIdx} className="flex items-center gap-2 text-nb-off-white">
                      <CheckCircle2 className="w-3.5 h-3.5 text-nb-orange shrink-0" />
                      <span>{it}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

