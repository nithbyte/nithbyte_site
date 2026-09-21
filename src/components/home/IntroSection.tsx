"use client";

import React from "react";
import { motion } from "framer-motion";
import OrangeSignal from "../interactions/OrangeSignal";
import SignalBadge from "../ui/SignalBadge";

export default function IntroSection() {
  return (
    <section className="py-24 sm:py-32 bg-nb-white border-y border-black/10 relative overflow-hidden">
      {/* Background Micro Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-12">
          {/* Left: Signal Badge & Micro Metadata */}
          <div className="lg:w-1/3 space-y-4">
            <SignalBadge label="CORE PHILOSOPHY" tag="PURPOSE" />
            <div className="pt-2">
              <OrangeSignal variant="pulse" label="ORANGE SIGNAL INITIALIZED" />
            </div>
            <p className="text-xs font-mono-tech text-nb-muted leading-relaxed max-w-xs">
              01 // 07 <br />
              System coordinates initialized. Tracing intent to executable software.
            </p>
          </div>

          {/* Right: Editorial Typography */}
          <div className="lg:w-2/3 space-y-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-nb-black leading-[1.08]"
            >
              Technology should <span className="text-nb-orange underline decoration-nb-orange/30 underline-offset-8">move an idea</span> forward.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-lg sm:text-2xl font-light text-nb-graphite/90 leading-relaxed max-w-2xl"
            >
              NithByte designs and engineers digital experiences, commerce platforms, and intelligent solutions built around the way modern businesses actually work.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-black/10 font-mono-tech"
            >
              <div className="space-y-1">
                <span className="text-xs text-nb-orange font-bold">01 / ARCHITECTURE</span>
                <p className="text-xs text-nb-graphite">Built for resilience and instant scale.</p>
              </div>
              <div className="space-y-1">
                <span className="text-xs text-nb-orange font-bold">02 / INTERACTION</span>
                <p className="text-xs text-nb-graphite">Tactile, fluid digital storytelling.</p>
              </div>
              <div className="space-y-1">
                <span className="text-xs text-nb-orange font-bold">03 / INTELLIGENCE</span>
                <p className="text-xs text-nb-graphite">AI integrated into actual workflows.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
