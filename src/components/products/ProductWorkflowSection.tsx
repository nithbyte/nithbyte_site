"use client";

import React from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { ProductItem } from "@/data/products";
import { ArrowRight, Workflow, CheckCircle2 } from "lucide-react";

interface ProductWorkflowSectionProps {
  product: ProductItem;
}

export default function ProductWorkflowSection({ product }: ProductWorkflowSectionProps) {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 sm:px-8 py-16 border-t border-black/10 dark:border-white/10 space-y-12">
      <SectionHeader
        badgeLabel="STEP-BY-STEP WORKFLOW"
        badgeTag="04 HOW IT WORKS"
        title="From initial setup to synchronized daily execution."
        description={`How companies configure, run, and scale operations seamlessly on the ${product.name} platform.`}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {product.workflow.map((step, idx) => (
          <div
            key={step.step}
            className="p-6 sm:p-7 rounded-3xl bg-nb-black text-nb-off-white border border-white/10 relative overflow-hidden group space-y-4 flex flex-col justify-between"
          >
            {/* Top Step Number & Badge */}
            <div className="space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="font-mono-tech text-3xl font-extrabold text-nb-orange">
                  {step.step}
                </span>
                {step.badge && (
                  <span className="px-2.5 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono-tech text-nb-muted uppercase tracking-wider">
                    {step.badge}
                  </span>
                )}
              </div>

              <h4 className="text-lg font-bold text-white tracking-tight">
                {step.title}
              </h4>

              <p className="text-xs sm:text-sm text-nb-muted leading-relaxed">
                {step.description}
              </p>
            </div>

            {/* Bottom Indicator */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono-tech text-nb-muted">
              <span>Stage {idx + 1} of 4</span>
              <CheckCircle2 className="w-3.5 h-3.5 text-nb-orange" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

