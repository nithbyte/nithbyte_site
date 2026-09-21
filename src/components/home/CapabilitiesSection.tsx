"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import SectionHeader from "../ui/SectionHeader";
import { ArrowUpRight, CheckCircle2, Terminal, Cpu, Globe, Smartphone, ShoppingBag, TrendingUp, Sparkles } from "lucide-react";

interface CapabilityItem {
  id: string;
  tag: string;
  title: string;
  serviceSlug: string;
  icon: any;
  summary: string;
  nodes: string[];
  techSpecs: string[];
  details: string;
}

const CAPABILITIES: CapabilityItem[] = [
  {
    id: "build",
    tag: "BUILD",
    title: "Web Platforms & Custom Software",
    serviceSlug: "web-development",
    icon: Globe,
    summary: "Engineered web architectures, bespoke software systems, and robust cloud APIs.",
    nodes: ["Next.js Full-Stack", "Headless Architecture", "Custom Business OS", "Microservices API", "Performance Tuning"],
    techSpecs: ["Sub-second TTFB", "TypeScript Strict", "Automated CI/CD"],
    details: "We build uncompromising digital foundations with Next.js, TypeScript, and distributed cloud backends that scale without architectural debt."
  },
  {
    id: "connect",
    tag: "CONNECT",
    title: "Mobile Applications",
    serviceSlug: "mobile-apps",
    icon: Smartphone,
    summary: "Native and cross-platform mobile apps with fluid gestures and offline resilience.",
    nodes: ["iOS & Android", "React Native", "Offline-First Sync", "Hardware Sensors", "Push Architecture"],
    techSpecs: ["60fps Animations", "Biometric Auth", "Store Lifecycle"],
    details: "Tactile mobile experiences crafted for touch ergonomics, background sync, and immediate responsiveness."
  },
  {
    id: "sell",
    tag: "SELL",
    title: "Modern E-commerce",
    serviceSlug: "e-commerce",
    icon: ShoppingBag,
    summary: "High-conversion headless digital storefronts and unified inventory sync engines.",
    nodes: ["Headless Storefronts", "Multi-Gateway Checkout", "Real-Time Inventory", "Omnichannel POS Sync", "Algolia Search"],
    techSpecs: ["1-Click Checkout", "Global Currencies", "Zero Cart Lag"],
    details: "Eliminating checkout latency and conversion drop-offs with ultra-fast commerce architectures and instant inventory orchestration."
  },
  {
    id: "grow",
    tag: "GROW",
    title: "Digital Marketing & CRO",
    serviceSlug: "digital-marketing",
    icon: TrendingUp,
    summary: "Scientific organic search authority, conversion funnels, and server-side tracking.",
    nodes: ["Technical SEO", "Conversion Rate Optimization", "Server-Side GA4", "Lead Funnel Systems", "Retention Flows"],
    techSpecs: ["Structured Schema", "Attribution Modeling", "A/B Testing"],
    details: "Systematic acquisition engines that compound over time, combining semantic structured data with conversion optimization."
  },
  {
    id: "intelligence",
    tag: "INTELLIGENCE",
    title: "AI & Workflow Automation",
    serviceSlug: "ai-automation",
    icon: Sparkles,
    summary: "Domain-specific AI copilots, semantic RAG systems, and zero-touch business pipelines.",
    nodes: ["Custom AI Copilots", "Vector Search / RAG", "Workflow Pipelines", "Lead Qualification", "Document Synthesis"],
    techSpecs: ["Zero Hallucination Guardrails", "API Tool Calling", "Private Tenant Sandboxes"],
    details: "Transforming manual operational bottlenecks into autonomous 24/7 pipelines using state-of-the-art LLMs and vector indices."
  }
];

export default function CapabilitiesSection() {
  const [selectedId, setSelectedId] = useState<string>("intelligence");

  const activeCap = CAPABILITIES.find((c) => c.id === selectedId) || CAPABILITIES[0];

  return (
    <section className="py-24 sm:py-32 bg-nb-off-white dark:bg-nb-black relative border-b border-black/10 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <SectionHeader
          badgeLabel="CORE CAPABILITIES"
          badgeTag="WHAT WE BUILD"
          title="Engineered for every stage of digital capability."
          description="Select a capability domain to inspect its technical nodes, architecture, and deployment specifications."
        />

        {/* Interactive Capability Selector Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 p-1.5 bg-nb-white dark:bg-nb-soft-black rounded-2xl border border-black/10 dark:border-white/10 shadow-sm mb-8">
          {CAPABILITIES.map((item) => {
            const isSelected = item.id === selectedId;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedId(item.id)}
                className={`relative py-3.5 px-4 rounded-xl text-xs font-mono-tech tracking-wider uppercase font-bold transition-all duration-200 flex items-center justify-center gap-2 select-none ${
                  isSelected
                    ? "bg-nb-black text-nb-white shadow-md shadow-black/20 dark:bg-nb-orange dark:text-white"
                    : "text-nb-graphite dark:text-nb-muted hover:text-nb-orange dark:hover:text-nb-orange hover:bg-black/5 dark:hover:bg-white/5"
                }`}
              >
                {isSelected && (
                  <motion.span
                    layoutId="cap-active-indicator"
                    className="w-2 h-2 rounded-full bg-nb-orange dark:bg-white"
                  />
                )}
                <span>{item.tag}</span>
              </button>
            );
          })}
        </div>

        {/* Detailed Interactive Capability Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCap.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="bg-nb-black text-nb-off-white rounded-3xl p-8 sm:p-12 border border-white/10 shadow-2xl relative overflow-hidden"
          >
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-nb-orange/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
              {/* Left Column: Details */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-mono-tech text-nb-orange">
                  <span>CAPABILITY DOMAIN</span>
                  <span>//</span>
                  <span className="text-white font-bold">{activeCap.tag}</span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-bold text-nb-white tracking-tight leading-tight">
                  {activeCap.title}
                </h3>

                <p className="text-base sm:text-lg text-nb-muted leading-relaxed">
                  {activeCap.details}
                </p>

                {/* Tech Specs */}
                <div className="pt-4 border-t border-white/10 flex flex-wrap gap-4 font-mono-tech text-xs">
                  {activeCap.techSpecs.map((spec) => (
                    <div key={spec} className="flex items-center gap-2 text-nb-off-white bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                      <span className="w-1.5 h-1.5 rounded-full bg-nb-orange" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <Link
                    href={`/services/${activeCap.serviceSlug}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-nb-orange text-white font-mono-tech text-sm font-semibold hover:bg-nb-deep-orange transition-colors shadow-lg shadow-nb-orange/20"
                  >
                    Deep Dive Capability <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Interactive Node Map */}
              <div className="lg:col-span-6 space-y-4">
                <div className="p-6 rounded-2xl bg-nb-soft-black border border-white/10 space-y-4">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3 font-mono-tech text-xs text-nb-muted">
                    <span className="flex items-center gap-2">
                      <Terminal className="w-4 h-4 text-nb-orange" />
                      CONNECTED SYSTEM NODES
                    </span>
                    <span className="text-nb-orange">{activeCap.nodes.length} ACTIVE</span>
                  </div>

                  <div className="space-y-2.5">
                    {activeCap.nodes.map((node, i) => (
                      <motion.div
                        key={node}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.07 }}
                        className="p-3.5 rounded-xl bg-white/5 border border-white/5 hover:border-nb-orange/40 transition-colors flex items-center justify-between group"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-mono-tech text-nb-orange font-bold">
                            0{i + 1}
                          </span>
                          <span className="text-sm font-medium text-nb-off-white group-hover:text-nb-white">
                            {node}
                          </span>
                        </div>
                        <div className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-nb-orange transition-colors" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
