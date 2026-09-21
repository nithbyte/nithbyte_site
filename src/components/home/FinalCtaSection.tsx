"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MagneticButton from "../interactions/MagneticButton";
import OrangeSignal from "../interactions/OrangeSignal";
import { Sparkles, Terminal, ArrowUpRight } from "lucide-react";

type ActiveConcept = "IDEA" | "PROBLEM" | "AMBITION";

const CONCEPTS: Record<ActiveConcept, { definition: string; response: string; signalText: string }> = {
  IDEA: {
    definition: "A visionary product concept waiting for its first production architecture.",
    response: "We turn abstract intent into market-ready Next.js products.",
    signalText: "SIGNAL: TRANSLATING CONCEPT → CODE"
  },
  PROBLEM: {
    definition: "A high-friction operational bottleneck or outdated digital infrastructure.",
    response: "We re-architect systems with type-safe precision and autonomous workflows.",
    signalText: "SIGNAL: OPTIMIZING LATENCY & FRICTION"
  },
  AMBITION: {
    definition: "The drive to launch an international-grade digital platform that stands apart.",
    response: "We engineer bespoke digital experiences that define categories.",
    signalText: "SIGNAL: SCALING GLOBAL AMBITION"
  }
};

export default function FinalCtaSection() {
  const [activeConcept, setActiveConcept] = useState<ActiveConcept>("IDEA");

  const data = CONCEPTS[activeConcept];

  return (
    <section className="py-24 sm:py-36 bg-nb-black text-nb-off-white relative overflow-hidden">
      {/* Dynamic Ambient Background Glow */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-nb-orange/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 text-center space-y-12">
        {/* Signal Status Line */}
        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-xs font-mono-tech text-nb-orange">
          <OrangeSignal variant="beacon" />
          <span>{data.signalText}</span>
        </div>

        {/* Dynamic Interactive Headline */}
        <div className="space-y-4 max-w-4xl mx-auto">
          <p className="text-sm font-mono-tech uppercase tracking-widest text-nb-muted">
            FINAL SYSTEM PROMPT
          </p>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tighter text-nb-white leading-tight">
            Have an{" "}
            {(["IDEA", "PROBLEM", "AMBITION"] as ActiveConcept[]).map((concept, idx) => (
              <span key={concept}>
                <button
                  onClick={() => setActiveConcept(concept)}
                  onMouseEnter={() => setActiveConcept(concept)}
                  className={`underline decoration-2 underline-offset-8 transition-all duration-200 cursor-pointer ${
                    activeConcept === concept
                      ? "text-nb-orange decoration-nb-orange scale-105 inline-block"
                      : "text-nb-white/50 decoration-white/20 hover:text-white"
                  }`}
                >
                  {concept}
                </button>
                {idx < 2 ? <span className="text-nb-muted mx-2 sm:mx-3 font-normal font-mono-tech text-3xl">/</span> : " "}
              </span>
            ))}
            <br />
            worth building?
          </h2>
        </div>

        {/* Dynamic Concept Explanation Box */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeConcept}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="p-6 rounded-2xl bg-nb-soft-black border border-white/10 max-w-xl mx-auto space-y-2 font-mono-tech text-xs"
          >
            <p className="text-nb-off-white font-bold">{data.definition}</p>
            <p className="text-nb-orange">{data.response}</p>
          </motion.div>
        </AnimatePresence>

        {/* Final CTA Action */}
        <div className="space-y-6 pt-4">
          <p className="text-xl sm:text-2xl font-light text-nb-off-white/90">
            Let&apos;s find its code.
          </p>

          <div className="flex justify-center">
            <MagneticButton
              href="/contact"
              variant="primary"
              size="lg"
              cursorLabel="LET'S BUILD"
              className="px-10 py-5 text-lg shadow-2xl shadow-nb-orange/40"
            >
              Start a Project
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
}
