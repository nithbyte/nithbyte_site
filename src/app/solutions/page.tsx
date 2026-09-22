import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import SignalBadge from "@/components/ui/SignalBadge";
import SectionHeader from "@/components/ui/SectionHeader";
import MagneticButton from "@/components/interactions/MagneticButton";
import { SOLUTIONS } from "@/data/solutions";
import { ArrowUpRight, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Solutions — NithByte",
  description: "Problem-to-solution engineering matrix for startups, growing companies, and enterprises.",
};

export default function SolutionsPage() {
  return (
    <div className="pt-32 pb-24 space-y-24">
      {/* Hero */}
      <section className="w-full max-w-7xl mx-auto px-6 sm:px-8">
        <div className="w-full border-b border-black/10 dark:border-white/10 pb-16">
          <div className="space-y-6 max-w-4xl">
            <SignalBadge label="PROBLEM → SOLUTION MATRIX" tag="SOLUTIONS" />
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-nb-black dark:text-nb-white leading-[1.02]">
              Start with the problem. <br />
              <span className="text-nb-orange">Engineer the resolution.</span>
            </h1>
            <p className="text-lg sm:text-2xl text-nb-graphite/90 dark:text-nb-muted font-light leading-relaxed">
              We don&apos;t just sell isolated technical services. We map the operational challenges and business hurdles you face directly to tested engineering architectures.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Matrix */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 space-y-12">
        {SOLUTIONS.map((item, idx) => (
          <div
            key={item.id}
            className="p-8 sm:p-12 rounded-3xl bg-nb-white dark:bg-nb-soft-black border border-black/10 dark:border-white/10 hover:border-nb-orange/40 transition-all shadow-sm space-y-8"
          >
            {/* Top Problem Banner */}
            <div className="p-4 rounded-2xl bg-nb-black text-nb-off-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono-tech text-xs">
              <div className="flex items-center gap-3">
                <span className="text-nb-orange font-bold">CHALLENGE 0{idx + 1}:</span>
                <span className="text-sm font-semibold text-white">&ldquo;{item.problem}&rdquo;</span>
              </div>
              <span className="px-2.5 py-1 rounded bg-white/10 text-nb-orange text-[10px] uppercase font-bold">
                {item.category}
              </span>
            </div>

            {/* Solution Details */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-6 space-y-4">
                <div className="space-y-2">
                  <h2 className="text-2xl sm:text-3xl font-bold text-nb-black dark:text-nb-white tracking-tight">
                    {item.solutionTitle}
                  </h2>
                  <p className="text-base text-nb-orange font-medium">
                    {item.tagline}
                  </p>
                </div>

                <p className="text-sm sm:text-base text-nb-graphite/80 dark:text-nb-muted leading-relaxed">
                  {item.description}
                </p>

                <div className="pt-2 flex flex-wrap gap-2 font-mono-tech text-xs">
                  <span className="text-nb-muted mr-1">STACK:</span>
                  {item.recommendedStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded bg-nb-off-white dark:bg-white/5 border border-black/5 dark:border-white/5 text-nb-black dark:text-nb-off-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Outcomes */}
              <div className="lg:col-span-6 space-y-4">
                <p className="text-xs font-mono-tech uppercase text-nb-muted tracking-wider">
                  Target Outcomes & Deliverables:
                </p>
                <div className="space-y-2.5">
                  {item.keyOutcomes.map((outcome) => (
                    <div
                      key={outcome}
                      className="p-3.5 rounded-xl bg-nb-off-white dark:bg-white/5 border border-black/5 dark:border-white/5 flex items-start gap-3 text-xs sm:text-sm text-nb-graphite dark:text-nb-off-white"
                    >
                      <CheckCircle2 className="w-4 h-4 text-nb-orange flex-shrink-0 mt-0.5" />
                      <span>{outcome}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <MagneticButton
                    href={`/contact?solution=${encodeURIComponent(item.category)}`}
                    variant="primary"
                    size="sm"
                    cursorLabel="LET'S BUILD"
                  >
                    Solve This Challenge
                  </MagneticButton>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 text-center space-y-6">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-nb-black dark:text-nb-white">
          Have a unique challenge not listed here?
        </h2>
        <p className="text-base sm:text-lg text-nb-muted max-w-xl mx-auto">
          We architect custom systems for non-standard operational workflows and novel product concepts.
        </p>
        <div className="flex justify-center pt-2">
          <MagneticButton href="/contact" variant="primary" size="lg" cursorLabel="LET'S BUILD">
            Schedule Architecture Review
          </MagneticButton>
        </div>
      </section>
    </div>
  );
}
