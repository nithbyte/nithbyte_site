"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { TrendingUp, BarChart3, Target, Share2, Layers, CheckCircle2 } from "lucide-react";

export default function MarketingServiceVisualizer() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const PILLARS = [
    {
      title: "Server-Side Tracking",
      tag: "ATTRIBUTION",
      desc: "Meta CAPI, GA4, and PostHog server-side events for 100% data fidelity without ad-blocker loss.",
      icon: Target,
      kpi: "+34% Attribution Accuracy",
    },
    {
      title: "Sub-Second Landing Pages",
      tag: "CONVERSION",
      desc: "Static edge page variants generated for Google Ads and SEO with instant first paint.",
      icon: TrendingUp,
      kpi: "Lighthouse 99 Performance",
    },
    {
      title: "A/B Variant Engine",
      tag: "OPTIMIZATION",
      desc: "Statistical hypothesis testing on copy, layout, and CTA hooks with automated traffic routing.",
      icon: BarChart3,
      kpi: "+2.4x Conversion Lift",
    },
    {
      title: "Organic Growth Loops",
      tag: "RETENTION",
      desc: "Programmatic SEO landing page generation and automated customer referral hooks.",
      icon: Share2,
      kpi: "Compounding Traffic",
    },
  ];

  return (
    <div className="w-full my-8 p-6 sm:p-8 rounded-3xl bg-nb-off-white dark:bg-nb-black border border-black/10 dark:border-white/10 shadow-xl space-y-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-blueprint-grid opacity-15 pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-nb-orange/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-black/10 dark:border-white/10 pb-4 relative z-10">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-nb-orange shadow-sm shadow-nb-orange" />
            <span className="font-mono-tech text-[10px] text-nb-orange font-bold uppercase tracking-widest">
              INTERACTIVE SYSTEM BLUEPRINT // 05
            </span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-nb-black dark:text-nb-white tracking-tight">
            Data-Driven Acquisition & Attribution Growth Matrix
          </h3>
        </div>
        <span className="font-mono-tech text-xs text-nb-muted">
          SELECT GROWTH ENGINE
        </span>
      </div>

      {/* 4 Pillars */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
        {PILLARS.map((p, idx) => {
          const Icon = p.icon;
          const isSelected = activeTab === idx;
          return (
            <motion.button
              key={p.title}
              type="button"
              onClick={() => setActiveTab(idx)}
              whileHover={{ y: -2 }}
              className={`p-4 rounded-2xl text-left transition-all border flex flex-col justify-between ${
                isSelected
                  ? "bg-nb-white dark:bg-nb-soft-black border-nb-orange shadow-lg shadow-nb-orange/20 ring-1 ring-nb-orange"
                  : "bg-nb-white/60 dark:bg-white/[0.03] border-black/10 dark:border-white/10 hover:border-nb-orange/40 hover:bg-white"
              }`}
            >
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className={`p-2 rounded-xl ${
                  isSelected ? "bg-nb-orange text-white" : "bg-black/5 dark:bg-white/10 text-nb-graphite dark:text-nb-off-white"
                }`}>
                  <Icon className="w-4 h-4" />
                </div>
                <span className="font-mono-tech text-[9px] px-2 py-0.5 rounded-full bg-nb-orange/10 text-nb-orange font-bold">
                  {p.tag}
                </span>
              </div>

              <div className="space-y-1">
                <h4 className="text-xs sm:text-sm font-bold text-nb-black dark:text-nb-white">
                  {p.title}
                </h4>
                <p className="text-[11px] text-nb-graphite/70 dark:text-nb-muted line-clamp-2">
                  {p.desc}
                </p>
              </div>

              <div className="mt-3 pt-2 border-t border-black/5 dark:border-white/5 flex items-center justify-between">
                <span className="font-mono-tech text-[9px] text-nb-muted">IMPACT:</span>
                <span className="font-mono-tech text-[10px] text-nb-orange font-bold">
                  {p.kpi}
                </span>
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Metric Visual Box */}
      <div className="p-5 rounded-2xl bg-nb-white dark:bg-nb-soft-black border border-black/10 dark:border-white/10 relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1">
          <span className="text-xs font-mono-tech text-nb-orange font-bold uppercase">
            ACTIVE GROWTH SYSTEM: {PILLARS[activeTab].title}
          </span>
          <p className="text-xs text-nb-graphite/90 dark:text-nb-off-white/90">
            {PILLARS[activeTab].desc}
          </p>
        </div>

        <div className="px-4 py-2 rounded-xl bg-nb-orange/10 border border-nb-orange/30 font-mono-tech text-xs text-nb-orange font-bold whitespace-nowrap">
          {PILLARS[activeTab].kpi}
        </div>
      </div>
    </div>
  );
}
