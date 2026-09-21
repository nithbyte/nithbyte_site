"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import MagneticButton from "../interactions/MagneticButton";
import { Plus, Sparkles, Check, RefreshCcw, Layers, ArrowRight } from "lucide-react";

interface ModuleOption {
  id: string;
  name: string;
  short: string;
  category: string;
}

const AVAILABLE_MODULES: ModuleOption[] = [
  { id: "WEB", name: "Web Application", short: "WEB", category: "Interface" },
  { id: "MOBILE", name: "Mobile Platform", short: "MOBILE", category: "Interface" },
  { id: "AI", name: "Artificial Intelligence", short: "AI", category: "Engine" },
  { id: "COMMERCE", name: "Commerce Infrastructure", short: "COMMERCE", category: "Transaction" },
  { id: "CLOUD", name: "Cloud Microservices", short: "CLOUD", category: "Backend" },
  { id: "AUTOMATION", name: "Workflow Pipelines", short: "AUTOMATION", category: "Operations" },
];

interface CombinationResult {
  title: string;
  tagline: string;
  summary: string;
  recommendedStack: string[];
}

function getCombinationResult(selected: string[]): CombinationResult {
  const set = new Set(selected);

  if (set.has("WEB") && set.has("AI") && set.has("COMMERCE")) {
    return {
      title: "AI-Powered Autonomous Commerce Platform",
      tagline: "High-speed headless commerce driven by predictive vector search and automated support agents.",
      summary: "Combines edge-rendered Next.js storefronts with real-time LLM recommendation systems and zero-latency inventory synchronizers.",
      recommendedStack: ["Next.js", "Shopify Storefront", "Pinecone", "OpenAI", "Stripe"]
    };
  }

  if (set.has("WEB") && set.has("AI")) {
    return {
      title: "Intelligent Web Application",
      tagline: "Dynamic web interfaces equipped with embedded domain copilots and semantic knowledge retrieval.",
      summary: "Transforms passive web browsing into an interactive, context-aware digital product tailored to user intent.",
      recommendedStack: ["Next.js", "TypeScript", "LangChain", "OpenAI / Claude", "Tailwind CSS"]
    };
  }

  if (set.has("MOBILE") && set.has("AI")) {
    return {
      title: "Intelligent Mobile Ecosystem",
      tagline: "Tactile native apps with on-device / edge intelligence and continuous background synchronicity.",
      summary: "Brings smart autonomous decision routing and personalized user flows directly to mobile users with offline resilience.",
      recommendedStack: ["React Native", "FastAPI", "Vector Store", "PostgreSQL", "Firebase"]
    };
  }

  if (set.has("WEB") && set.has("COMMERCE")) {
    return {
      title: "High-Conversion Headless Storefront",
      tagline: "Sub-second digital commerce with frictionless checkout and multi-currency support.",
      summary: "Eliminates cart drop-offs through instant edge hydration, optimized product catalogs, and secure payment integrations.",
      recommendedStack: ["Next.js Commerce", "Stripe", "Redis", "PostgreSQL", "Algolia"]
    };
  }

  if (set.has("AI") && set.has("AUTOMATION")) {
    return {
      title: "Autonomous Operational Intelligence Pipeline",
      tagline: "Self-governing backend workflows that categorize data, resolve queries, and execute system actions.",
      summary: "Replaces high-friction manual data entry and multi-app copy-pasting with 24/7 autonomous background agents.",
      recommendedStack: ["n8n", "Python", "FastAPI", "PostgreSQL", "Docker"]
    };
  }

  if (set.has("CLOUD") && set.has("AUTOMATION")) {
    return {
      title: "Distributed Cloud Automation Engine",
      tagline: "Fault-tolerant microservices orchestrating complex asynchronous operational jobs.",
      summary: "Engineered for high throughput, automated failover, and real-time observability across distributed databases.",
      recommendedStack: ["NestJS", "Docker", "AWS", "Redis", "GitHub Actions"]
    };
  }

  // Generic fallback if only 1 or other combination
  if (selected.length === 1) {
    const mod = AVAILABLE_MODULES.find((m) => m.id === selected[0]);
    return {
      title: `Dedicated ${mod?.name || "System"} Foundation`,
      tagline: "Specialized engineering tailored to your primary operational requirement.",
      summary: `Select another module to synthesize a multi-capability digital architecture.`,
      recommendedStack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"]
    };
  }

  return {
    title: "Custom Integrated Digital Solution",
    tagline: "Bespoke digital architecture combining your selected technologies into a unified product.",
    summary: "Engineered specifically around your organization's business logic, user journey, and scaling roadmap.",
    recommendedStack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "Cloud Edge"]
  };
}

export default function SolutionBuilderSection() {
  const [selectedModules, setSelectedModules] = useState<string[]>(["WEB", "AI"]);

  const toggleModule = (id: string) => {
    if (selectedModules.includes(id)) {
      if (selectedModules.length > 1) {
        setSelectedModules(selectedModules.filter((m) => m !== id));
      }
    } else {
      if (selectedModules.length < 4) {
        setSelectedModules([...selectedModules, id]);
      } else {
        setSelectedModules([...selectedModules.slice(1), id]);
      }
    }
  };

  const resetModules = () => {
    setSelectedModules(["WEB", "AI"]);
  };

  const result = getCombinationResult(selectedModules);

  return (
    <section className="py-24 sm:py-32 bg-nb-white relative border-b border-black/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <SectionHeader
          badgeLabel="SOLUTION SYNTHESIZER"
          badgeTag="BUILD YOUR SOLUTION"
          title="Compose your ideal digital architecture."
          description="Click to toggle modules into the central workspace. See how disparate technologies combine into cohesive product platforms."
        />

        {/* Module Toggle Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {AVAILABLE_MODULES.map((mod) => {
            const isSelected = selectedModules.includes(mod.id);
            return (
              <button
                key={mod.id}
                onClick={() => toggleModule(mod.id)}
                data-cursor="drag"
                data-cursor-text="COMBINE"
                className={`p-4 rounded-2xl border text-left transition-all duration-200 select-none relative group overflow-hidden ${
                  isSelected
                    ? "bg-nb-black text-nb-white border-nb-orange shadow-lg shadow-nb-orange/10 -translate-y-1"
                    : "bg-nb-off-white text-nb-black border-black/10 hover:border-nb-orange/50 hover:bg-nb-white"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono-tech uppercase text-nb-muted">
                    {mod.category}
                  </span>
                  <div
                    className={`w-5 h-5 rounded-full flex items-center justify-center transition-colors ${
                      isSelected ? "bg-nb-orange text-white" : "bg-black/10 text-transparent"
                    }`}
                  >
                    <Check className="w-3 h-3" />
                  </div>
                </div>

                <p className="font-bold text-sm tracking-tight">{mod.name}</p>
                <span className="text-xs font-mono-tech text-nb-orange font-semibold">
                  +{mod.short}
                </span>
              </button>
            );
          })}
        </div>

        {/* Central Synthesized Solution Board */}
        <div className="bg-nb-black text-nb-off-white rounded-3xl p-8 sm:p-12 border border-white/10 shadow-2xl relative overflow-hidden">
          {/* Top Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6 mb-8 font-mono-tech text-xs">
            <div className="flex items-center gap-2">
              <span className="text-nb-orange font-bold">SYNTHESIS:</span>
              <span className="text-nb-off-white">
                {selectedModules.join(" + ")}
              </span>
            </div>

            <button
              onClick={resetModules}
              className="flex items-center gap-1.5 text-nb-muted hover:text-nb-orange transition-colors"
            >
              <RefreshCcw className="w-3.5 h-3.5" />
              <span>Reset Combination</span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Solution Details */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-nb-orange/10 border border-nb-orange/30 text-xs font-mono-tech text-nb-orange">
                <Sparkles className="w-3.5 h-3.5" />
                <span>SYNTHESIZED ARCHITECTURE</span>
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-nb-white tracking-tight">
                {result.title}
              </h3>

              <p className="text-base sm:text-lg text-nb-off-white/90 font-light">
                {result.tagline}
              </p>

              <p className="text-sm text-nb-muted leading-relaxed max-w-2xl">
                {result.summary}
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-2 font-mono-tech text-xs">
                <span className="text-nb-muted mr-2">TECH STACK:</span>
                {result.recommendedStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-nb-off-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: CTA to Request this build */}
            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center pt-6 lg:pt-0 border-t lg:border-t-0 lg:border-l border-white/10 lg:pl-8 space-y-4">
              <p className="text-xs font-mono-tech text-nb-muted">
                Ready to engineer this configuration?
              </p>
              <MagneticButton
                href={`/contact?modules=${encodeURIComponent(selectedModules.join(","))}`}
                variant="primary"
                size="md"
                cursorLabel="LET'S BUILD"
              >
                Engineer This Solution
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
