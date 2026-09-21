"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import { Lightbulb, Layout, Code2, Sparkles, Rocket, RefreshCw, CheckCircle } from "lucide-react";

interface MethodStep {
  number: string;
  title: string;
  icon: any;
  tagline: string;
  description: string;
  visualArtifact: {
    label: string;
    items: string[];
    status: string;
  };
}

const METHOD_STEPS: MethodStep[] = [
  {
    number: "01",
    title: "THINK",
    icon: Lightbulb,
    tagline: "Distill the core value proposition and system constraints.",
    description: "We rigorously interrogate problem definitions, user journeys, and edge conditions before writing a single line of code. Clear mental models prevent wasted engineering cycles.",
    visualArtifact: {
      label: "SPECIFICATION MATRIX",
      items: ["Core Domain Logic", "User Persona Archetypes", "Entity Relationship Blueprint"],
      status: "CRYSTALLIZED"
    }
  },
  {
    number: "02",
    title: "DESIGN",
    icon: Layout,
    tagline: "Architect editorial typography, tactile ergonomics, and design tokens.",
    description: "Translating structure into fluid visual hierarchy. We craft bespoke design systems with strict spacing scales, intentional typography rhythm, and responsive gesture ergonomics.",
    visualArtifact: {
      label: "DESIGN SYSTEM TOKENS",
      items: ["Typographic Scale (Inter/Space Grotesk)", "HSL Color Primitives", "Fluid Breakpoints"],
      status: "SYSTEMATIZED"
    }
  },
  {
    number: "03",
    title: "ENGINEER",
    icon: Code2,
    tagline: "Write type-safe, modular, and performance-audited code.",
    description: "Constructing Next.js frontend layers, typed APIs, and distributed cloud services. Zero tolerance for unhandled exceptions, bloated bundle sizes, or architectural shortcuts.",
    visualArtifact: {
      label: "CODEBASE INTEGRITY",
      items: ["Strict TypeScript Mode", "Edge Hydration Engine", "Automated CI/CD Test Harness"],
      status: "COMPILED"
    }
  },
  {
    number: "04",
    title: "INTELLIGENCE",
    icon: Sparkles,
    tagline: "Embed domain AI agents and autonomous automation pipelines.",
    description: "Infusing vector search, contextual LLM copilots, and multi-step background job queues directly into operational workflows for measurable leverage.",
    visualArtifact: {
      label: "INTELLIGENCE LAYER",
      items: ["Vector Retrieval (RAG)", "Hallucination Guardrails", "Asynchronous Task Workers"],
      status: "ONLINE"
    }
  },
  {
    number: "05",
    title: "LAUNCH",
    icon: Rocket,
    tagline: "Deploy to global edge CDNs with sub-second performance delivery.",
    description: "Zero-downtime deployment pipelines, DNS routing, structured schema indexing for SEO, and live telemetry observability across worldwide regions.",
    visualArtifact: {
      label: "EDGE DEPLOYMENT",
      items: ["Global CDN Distribution", "Lighthouse 95+ Audit", "Automated Error Telemetry"],
      status: "PRODUCTION"
    }
  },
  {
    number: "06",
    title: "EVOLVE",
    icon: RefreshCw,
    tagline: "Continuously optimize, iterate, and expand digital capability.",
    description: "Digital systems are living products. We monitor user analytics, conduct conversion experiments, and scale capacity as business demands compound.",
    visualArtifact: {
      label: "LIFECYCLE TELEMETRY",
      items: ["Conversion Funnel Heatmaps", "Capacity Auto-Scaling", "Continuous Feature Releases"],
      status: "ACTIVE"
    }
  }
];

export default function MethodSection() {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const currentStep = METHOD_STEPS[activeStepIndex];

  return (
    <section className="py-24 sm:py-32 bg-nb-black text-nb-off-white relative border-b border-white/10 overflow-hidden">
      {/* Background Micro Grid */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <SectionHeader
          badgeLabel="NITHBYTE METHOD"
          badgeTag="ENGINEERING SEQUENCE"
          title="From initial spark to living digital system."
          description="Our 6-phase engineering discipline ensures every product is built with clarity, precision, and longevity."
          dark
        />

        {/* Step Navigation Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-12">
          {METHOD_STEPS.map((step, idx) => {
            const isActive = idx === activeStepIndex;
            return (
              <button
                key={step.number}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-4 rounded-xl border text-left transition-all duration-200 select-none ${
                  isActive
                    ? "bg-nb-soft-black border-nb-orange text-nb-white shadow-lg shadow-nb-orange/20"
                    : "bg-white/5 border-white/5 text-nb-muted hover:border-white/20 hover:text-nb-off-white"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-mono-tech text-nb-orange font-bold">
                    {step.number}
                  </span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-nb-orange" />}
                </div>
                <p className="font-bold text-sm tracking-tight">{step.title}</p>
              </button>
            );
          })}
        </div>

        {/* Main Step Detail Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep.number}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center p-8 sm:p-12 rounded-3xl bg-nb-soft-black border border-white/10"
          >
            {/* Left: Step Description */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-3 text-xs font-mono-tech text-nb-orange">
                <span className="px-2.5 py-1 rounded bg-nb-orange/10 border border-nb-orange/20 font-bold">
                  PHASE {currentStep.number}
                </span>
                <span>//</span>
                <span className="text-nb-off-white uppercase">{currentStep.title}</span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-bold text-nb-white tracking-tight leading-tight">
                {currentStep.tagline}
              </h3>

              <p className="text-base sm:text-lg text-nb-muted leading-relaxed">
                {currentStep.description}
              </p>

              <div className="pt-4 flex items-center gap-3">
                <button
                  disabled={activeStepIndex === 0}
                  onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                  className="px-4 py-2 rounded-full border border-white/10 text-xs font-mono-tech text-nb-off-white disabled:opacity-30 disabled:cursor-not-allowed hover:border-nb-orange"
                >
                  ← PREV PHASE
                </button>
                <button
                  disabled={activeStepIndex === METHOD_STEPS.length - 1}
                  onClick={() => setActiveStepIndex((prev) => Math.min(METHOD_STEPS.length - 1, prev + 1))}
                  className="px-4 py-2 rounded-full bg-nb-orange text-xs font-mono-tech text-nb-white font-bold disabled:opacity-30 disabled:cursor-not-allowed hover:bg-nb-deep-orange"
                >
                  NEXT PHASE →
                </button>
              </div>
            </div>

            {/* Right: Interactive Blueprint Artifact */}
            <div className="lg:col-span-6">
              <div className="p-6 rounded-2xl bg-nb-black border border-white/10 space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3 font-mono-tech text-xs">
                  <span className="text-nb-muted">{currentStep.visualArtifact.label}</span>
                  <span className="px-2 py-0.5 rounded bg-nb-orange/20 text-nb-orange text-[10px] font-bold">
                    {currentStep.visualArtifact.status}
                  </span>
                </div>

                <div className="space-y-3">
                  {currentStep.visualArtifact.items.map((item, idx) => (
                    <div
                      key={item}
                      className="p-3 rounded-lg bg-white/5 border border-white/5 flex items-center justify-between text-sm"
                    >
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-nb-orange" />
                        <span className="text-nb-off-white font-mono-tech text-xs">{item}</span>
                      </div>
                      <span className="text-[10px] font-mono-tech text-nb-muted">VERIFIED</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 text-[11px] font-mono-tech text-nb-muted border-t border-white/5 flex items-center justify-between">
                  <span>SYSTEM METRIC</span>
                  <span className="text-nb-orange">100% SPEC COMPLIANCE</span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
