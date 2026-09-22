"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Zap, RefreshCw, Sparkles, Brain, ShieldCheck, Database, ArrowRight, Activity, Terminal } from "lucide-react";

interface LabProductVisualizerProps {
  labId: string;
}

export default function LabProductVisualizer({ labId }: LabProductVisualizerProps) {
  const [activeStep, setActiveStep] = useState(0);

  if (labId === "nb-commerce") {
    const commerceSteps = [
      {
        id: "edge",
        label: "Edge Request & Georouting",
        metric: "18ms TTFB",
        desc: "Instant geo-cached edge compute responding across worldwide POP locations.",
        icon: Zap,
        details: "V8 isolate runtime resolving tenant configs in under 20ms."
      },
      {
        id: "cart",
        label: "Stateful Checkout Orchestrator",
        metric: "0% Dropoff",
        desc: "Atomic cart transitions with Stripe, PayPal, and Apple Pay zero-lag adapters.",
        icon: ShoppingBag,
        details: "Optimistic local UI mutations with server-side rollback protection."
      },
      {
        id: "sync",
        label: "Real-Time Omnichannel Sync",
        metric: "100% Consistency",
        desc: "Sub-second webhook dissemination to ERPs, POS hardware, and warehouses.",
        icon: RefreshCw,
        details: "Event-driven Apache Kafka / Webhook queue with automatic replay on failure."
      }
    ];

    const current = commerceSteps[activeStep];

    return (
      <div className="p-6 rounded-2xl bg-nb-soft-black border border-white/10 space-y-6">
        <div className="flex items-center justify-between border-b border-white/10 pb-3 font-mono-tech text-xs">
          <span className="flex items-center gap-2 text-nb-orange font-bold">
            <Activity className="w-4 h-4 animate-pulse" />
            LIVE EXPERIMENTAL BENCHMARK PIPELINE
          </span>
          <span className="text-nb-muted">Interactive 3-Tier Edge Matrix</span>
        </div>

        {/* Step Nodes Vector Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {commerceSteps.map((step, idx) => {
            const isSelected = activeStep === idx;
            const Icon = step.icon;
            return (
              <button
                key={step.id}
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-xl border text-left transition-all relative overflow-hidden ${
                  isSelected
                    ? "bg-white/10 border-nb-orange text-white shadow-lg shadow-nb-orange/10"
                    : "bg-white/5 border-white/5 text-nb-muted hover:border-white/20 hover:text-white"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`p-2 rounded-lg ${isSelected ? "bg-nb-orange text-white" : "bg-white/5 text-nb-muted"}`}>
                    <Icon className="w-4 h-4" />
                  </span>
                  <span className="font-mono-tech text-[10px] text-nb-orange font-bold px-2 py-0.5 rounded bg-nb-orange/10">
                    {step.metric}
                  </span>
                </div>
                <p className="font-bold text-xs text-nb-off-white font-mono-tech mb-1">{step.label}</p>
                <p className="text-[11px] text-nb-muted line-clamp-2">{step.desc}</p>
              </button>
            );
          })}
        </div>

        {/* Live Vector Pipeline Output Box */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="p-4 rounded-xl bg-black/40 border border-white/10 font-mono-tech text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          >
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-nb-orange font-bold">
                <Terminal className="w-3.5 h-3.5" />
                <span>BENCHMARK TELEMETRY:</span>
              </div>
              <p className="text-nb-off-white">{current.details}</p>
            </div>
            <div className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-right whitespace-nowrap">
              <span className="text-[10px] text-nb-muted block">STATUS</span>
              <span className="text-nb-orange font-bold">ACTIVE PROTOTYPE</span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    );
  }

  // nb-intelligence
  const aiSteps = [
    {
      id: "ingest",
      label: "Enterprise Ingestion & Chunking",
      metric: "12,000 docs/s",
      desc: "Parsing PDFs, databases, Slack threads, and Notion into tokenized semantic vectors.",
      icon: Database,
      details: "Recursive chunking with hybrid semantic + BM25 keyword dense indexing."
    },
    {
      id: "reason",
      label: "Autonomous Reasoning Engine",
      metric: "Multi-Hop Agent",
      desc: "Deconstructs complex user prompts into step-by-step parallel tool invocations.",
      icon: Brain,
      details: "ReAct loop reasoning with dynamic scratchpad context window pruning."
    },
    {
      id: "guard",
      label: "Strict Output Guardrails",
      metric: "0% Hallucination",
      desc: "Automated factual citation cross-check before dispatching any final customer response.",
      icon: ShieldCheck,
      details: "Dual-model validation checking assertions against raw ingested context vectors."
    }
  ];

  const currentAi = aiSteps[activeStep];

  return (
    <div className="p-6 rounded-2xl bg-nb-soft-black border border-white/10 space-y-6">
      <div className="flex items-center justify-between border-b border-white/10 pb-3 font-mono-tech text-xs">
        <span className="flex items-center gap-2 text-nb-orange font-bold">
          <Sparkles className="w-4 h-4 animate-pulse" />
          SYNAPSE AGENTIC REASONING MATRIX
        </span>
        <span className="text-nb-muted">Interactive Neural Pipeline</span>
      </div>

      {/* Step Nodes Vector Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {aiSteps.map((step, idx) => {
          const isSelected = activeStep === idx;
          const Icon = step.icon;
          return (
            <button
              key={step.id}
              onClick={() => setActiveStep(idx)}
              className={`p-4 rounded-xl border text-left transition-all relative overflow-hidden ${
                isSelected
                  ? "bg-white/10 border-nb-orange text-white shadow-lg shadow-nb-orange/10"
                  : "bg-white/5 border-white/5 text-nb-muted hover:border-white/20 hover:text-white"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`p-2 rounded-lg ${isSelected ? "bg-nb-orange text-white" : "bg-white/5 text-nb-muted"}`}>
                  <Icon className="w-4 h-4" />
                </span>
                <span className="font-mono-tech text-[10px] text-nb-orange font-bold px-2 py-0.5 rounded bg-nb-orange/10">
                  {step.metric}
                </span>
              </div>
              <p className="font-bold text-xs text-nb-off-white font-mono-tech mb-1">{step.label}</p>
              <p className="text-[11px] text-nb-muted line-clamp-2">{step.desc}</p>
            </button>
          );
        })}
      </div>

      {/* Live Vector Pipeline Output Box */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className="p-4 rounded-xl bg-black/40 border border-white/10 font-mono-tech text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4"
        >
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-nb-orange font-bold">
              <Terminal className="w-3.5 h-3.5" />
              <span>SUBSYSTEM BENCHMARK:</span>
            </div>
            <p className="text-nb-off-white">{currentAi.details}</p>
          </div>
          <div className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-right whitespace-nowrap">
            <span className="text-[10px] text-nb-muted block">STAGE</span>
            <span className="text-nb-orange font-bold">ALPHA SANDBOX</span>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
