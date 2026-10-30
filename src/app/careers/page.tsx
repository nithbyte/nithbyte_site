import React from "react";
import type { Metadata } from "next";
import SignalBadge from "@/components/ui/SignalBadge";
import MagneticButton from "@/components/interactions/MagneticButton";
import OrangeSignal from "@/components/interactions/OrangeSignal";
import { Terminal, Sparkles, Code2, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers — NithByte",
  description: "Join the engineering team at NithByte. Where Ideas Find Their Code.",
  alternates: {
    canonical: "https://nithbyte.com/careers",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CareersPage() {
  return (
    <div className="pt-32 pb-24 space-y-24">
      {/* Hero */}
      <section className="w-full max-w-7xl mx-auto px-6 sm:px-8">
        <div className="w-full border-b border-black/10 dark:border-white/10 pb-16">
          <div className="space-y-6 max-w-4xl">
            <SignalBadge label="TALENT & CULTURE" tag="CAREERS" />
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-nb-black dark:text-nb-white leading-[1.02]">
              Engineering culture built on <span className="text-nb-orange">craft and autonomy.</span>
            </h1>
            <p className="text-lg sm:text-2xl text-nb-graphite/90 dark:text-nb-muted font-light leading-relaxed">
              We value first-principles reasoning, high agency, and an uncompromising obsession with clean code and fluid interfaces.
            </p>
          </div>
        </div>
      </section>

      {/* Values & Open Roles */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-nb-white dark:bg-nb-soft-black border border-black/10 dark:border-white/10 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-nb-orange/15 text-nb-orange flex items-center justify-center">
              <Code2 className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-nb-black dark:text-nb-white">Ship High Quality</h3>
            <p className="text-sm text-nb-graphite/80 dark:text-nb-muted leading-relaxed">
              We care about component architecture, type safety, bundle sizes, and micro-interactions. Done right beats done quickly.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-nb-white dark:bg-nb-soft-black border border-black/10 dark:border-white/10 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-nb-orange/15 text-nb-orange flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-nb-black dark:text-nb-white">Autonomy & Agency</h3>
            <p className="text-sm text-nb-graphite/80 dark:text-nb-muted leading-relaxed">
              Engineers own problems end-to-end. You talk directly with technical decision-makers and shape technical roadmaps.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-nb-white dark:bg-nb-soft-black border border-black/10 dark:border-white/10 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-nb-orange/15 text-nb-orange flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-nb-black dark:text-nb-white">Continuous Evolution</h3>
            <p className="text-sm text-nb-graphite/80 dark:text-nb-muted leading-relaxed">
              We constantly integrate modern tooling—from Next.js Server Components and edge computing to practical AI architectures.
            </p>
          </div>
        </div>

        {/* Speculative Application Callout */}
        <div className="p-8 sm:p-12 rounded-3xl bg-nb-black text-nb-off-white text-center space-y-6">
          <span className="text-xs font-mono-tech text-nb-orange font-bold uppercase tracking-wider">
            OPEN POSITIONS & SPECULATIVE APPLICATIONS
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-nb-white">
            We are always interested in exceptional builders.
          </h2>
          <p className="text-sm sm:text-base text-nb-muted max-w-xl mx-auto">
            Whether you specialize in Next.js, full-stack TypeScript, React Native, or systems architecture, introduce yourself.
          </p>
          <div className="flex justify-center pt-2">
            <MagneticButton href="mailto:careers@nithbyte.com" variant="primary" size="lg" cursorLabel="APPLY">
              careers@nithbyte.com
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  );
}
