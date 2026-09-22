"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingBag, Search, CreditCard, Box, ArrowRight, Check, Zap, DollarSign } from "lucide-react";

export default function EcommerceServiceVisualizer() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const STEPS = [
    {
      title: "Headless Storefront",
      tag: "FRONTEND",
      desc: "Instant Next.js Edge catalog rendering with predictive page pre-fetching.",
      icon: ShoppingBag,
      stat: "< 400ms TTFB",
    },
    {
      title: "Faceted Search & AI Filter",
      tag: "DISCOVERY",
      desc: "Sub-50ms instant search across 50,000+ SKUs with typo tolerance.",
      icon: Search,
      stat: "50ms query latency",
    },
    {
      title: "1-Click Global Checkout",
      tag: "PAYMENT",
      desc: "Stripe, Apple Pay, multi-currency pricing, and tax calculation at edge.",
      icon: CreditCard,
      stat: "+28% Conversion Rate",
    },
    {
      title: "Realtime ERP & Webhook Sync",
      tag: "FULFILLMENT",
      desc: "Instant stock deduction, automated dispatch triggers, and SMS/Email tracking.",
      icon: Box,
      stat: "Zero Overselling",
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
              INTERACTIVE SYSTEM BLUEPRINT // 03
            </span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-nb-black dark:text-nb-white tracking-tight">
            Composable Commerce & High-Conversion Flow
          </h3>
        </div>
        <span className="font-mono-tech text-xs text-nb-muted">
          CLICK STAGES TO TRACE TRANSACTION
        </span>
      </div>

      {/* Pipeline Visual Stepper */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
        {STEPS.map((step, idx) => {
          const Icon = step.icon;
          const isSelected = activeStep === idx;
          return (
            <motion.button
              key={step.title}
              type="button"
              onClick={() => setActiveStep(idx)}
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
                  {step.tag}
                </span>
              </div>

              <div className="space-y-1">
                <h4 className="text-xs sm:text-sm font-bold text-nb-black dark:text-nb-white">
                  {step.title}
                </h4>
                <p className="text-[11px] text-nb-graphite/70 dark:text-nb-muted line-clamp-2">
                  {step.desc}
                </p>
              </div>

              <div className="mt-3 pt-2 border-t border-black/5 dark:border-white/5 flex items-center justify-between">
                <span className="font-mono-tech text-[9px] text-nb-muted">METRIC:</span>
                <span className="font-mono-tech text-[10px] text-nb-orange font-bold">
                  {step.stat}
                </span>
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Interactive Cart & Checkout Simulation Box */}
      <div className="p-5 rounded-2xl bg-nb-white dark:bg-nb-soft-black border border-black/10 dark:border-white/10 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-left">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-nb-orange" />
            <span className="text-xs font-mono-tech font-bold uppercase text-nb-black dark:text-white">
              FRICTIONLESS CHECKOUT BENCHMARK
            </span>
          </div>
          <p className="text-xs text-nb-muted">
            Eliminating multi-page form delays increases customer completion rate by over 28%.
          </p>
        </div>

        <div className="flex items-center gap-4 flex-wrap">
          <div className="px-3.5 py-2 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 font-mono-tech text-xs text-center">
            <span className="text-nb-muted text-[10px] block">CART SPEED</span>
            <span className="text-green-500 font-bold">INSTANT</span>
          </div>
          <div className="px-3.5 py-2 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 font-mono-tech text-xs text-center">
            <span className="text-nb-muted text-[10px] block">PAYMENT GATEWAYS</span>
            <span className="text-nb-orange font-bold">STRIPE / APPLE PAY</span>
          </div>
        </div>
      </div>
    </div>
  );
}
