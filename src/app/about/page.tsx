import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import SignalBadge from "@/components/ui/SignalBadge";
import SectionHeader from "@/components/ui/SectionHeader";
import MagneticButton from "@/components/interactions/MagneticButton";
import OrangeSignal from "@/components/interactions/OrangeSignal";
import { CheckCircle2, ArrowUpRight, ShieldCheck, Terminal, Cpu, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "About — NithByte",
  description: "An independent digital product and software engineering company building high-performance web, commerce, and intelligent systems.",
};

const PILLARS = [
  {
    number: "01",
    title: "Think Deeply",
    description: "We deconstruct problem domains down to first principles before proposing solutions. Superficial assumptions lead to technical debt; deep inquiry leads to elegant systems."
  },
  {
    number: "02",
    title: "Design Intentionally",
    description: "Every pixel, spacing unit, and font size must have a distinct functional reason to exist. We reject decorative bloat in favor of tactile ergonomics and clarity."
  },
  {
    number: "03",
    title: "Engineer Carefully",
    description: "Type safety, sub-second latency, and decoupled component architecture form the bedrock of our software. We write code designed to be read, maintained, and scaled."
  },
  {
    number: "04",
    title: "Use AI Meaningfully",
    description: "Artificial intelligence should eliminate repetitive manual friction and synthesize knowledge—not generate generic fluff. We embed machine intelligence with strict guardrails."
  },
  {
    number: "05",
    title: "Build for Evolution",
    description: "Software is not a static artifact. We architect systems with modular primitives that allow teams to pivot, scale, and integrate new capabilities without rebuilding from scratch."
  }
];

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 space-y-24">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="border-b border-black/10 pb-16 space-y-6 max-w-4xl">
          <SignalBadge label="ABOUT NITHBYTE" tag="COMPANY" />
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-nb-black leading-[1.02]">
            An independent engineering company built for <span className="text-nb-orange">product longevity.</span>
          </h1>
          <p className="text-lg sm:text-2xl text-nb-graphite/90 font-light leading-relaxed">
            NithByte is a technology-driven digital solutions company that designs, builds, and grows digital products for modern international businesses.
          </p>
        </div>
      </section>

      {/* Who We Are & Positioning */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-mono-tech text-nb-orange font-bold uppercase tracking-widest">
              WHO WE ARE
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-nb-black tracking-tight">
              Where technical precision meets product intuition.
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-nb-graphite/90 leading-relaxed font-normal">
            <p>
              The digital ecosystem is saturated with generic agency templates, bloated software layers, and superficial marketing promises. NithByte was founded with a singular conviction: that modern businesses deserve high-performance digital products engineered around their actual operational logic.
            </p>
            <p>
              We operate at the intersection of full-stack engineering, tactile product design, and practical machine intelligence. Our work spans custom web applications, mobile platforms, headless commerce infrastructure, and autonomous workflow pipelines.
            </p>
            <div className="p-6 rounded-2xl bg-nb-white border border-black/10 font-mono-tech text-xs space-y-2">
              <span className="text-nb-orange font-bold">CORE IDENTITY</span>
              <p className="text-nb-graphite">
                &quot;NITH&quot; represents unified technical leadership. &quot;BYTE&quot; represents digital computing and software systems. Together, NithByte is where ideas find their code.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Philosophy / What We Believe */}
      <section className="bg-nb-black text-nb-off-white py-24 border-y border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
          <SectionHeader
            badgeLabel="CORE PHILOSOPHY"
            badgeTag="WHAT WE BELIEVE"
            title="Five principles that govern every line of code we write."
            description="We adhere to a strict engineering standard that favors clarity, speed, and durability over short-term shortcuts."
            dark
          />

          <div className="space-y-4">
            {PILLARS.map((pillar) => (
              <div
                key={pillar.number}
                className="p-8 rounded-2xl bg-nb-soft-black border border-white/10 hover:border-nb-orange/50 transition-colors grid grid-cols-1 md:grid-cols-12 gap-6 items-start"
              >
                <div className="md:col-span-2 font-mono-tech text-xl text-nb-orange font-bold">
                  {pillar.number}
                </div>
                <div className="md:col-span-4 text-xl sm:text-2xl font-bold text-nb-white tracking-tight">
                  {pillar.title}
                </div>
                <div className="md:col-span-6 text-sm sm:text-base text-nb-muted leading-relaxed">
                  {pillar.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Philosophy */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-nb-white border border-black/10 shadow-sm space-y-8">
          <SectionHeader
            badgeLabel="TECHNOLOGY PHILOSOPHY"
            badgeTag="STANDARDS"
            title="Type safety, zero lock-in, and sub-second execution."
            description="We build our products upon open, extensible foundations that empower clients rather than trapping them in proprietary ecosystems."
          />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 font-mono-tech text-xs">
            <div className="p-6 rounded-2xl bg-nb-off-white border border-black/5 space-y-2">
              <span className="text-nb-orange font-bold text-sm">STRICT STATIC TYPING</span>
              <p className="text-nb-graphite/80 leading-relaxed">
                Complete TypeScript type safety across frontend, backend, and API contracts prevents runtime bugs.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-nb-off-white border border-black/5 space-y-2">
              <span className="text-nb-orange font-bold text-sm">EDGE-NATIVE HYDRATION</span>
              <p className="text-nb-graphite/80 leading-relaxed">
                Pre-rendered HTML distributed to global CDNs guarantees lightning-fast first contentful paint.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-nb-off-white border border-black/5 space-y-2">
              <span className="text-nb-orange font-bold text-sm">ZERO DEPENDENCY BLOAT</span>
              <p className="text-nb-graphite/80 leading-relaxed">
                Carefully audited dependency trees ensure featherweight bundle sizes and ironclad security.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 text-center space-y-6">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-nb-black">
          Ready to engineer something remarkable?
        </h2>
        <p className="text-base sm:text-lg text-nb-muted max-w-xl mx-auto">
          Let&apos;s evaluate your requirements and architect a high-performance solution.
        </p>
        <div className="flex justify-center pt-2">
          <MagneticButton href="/contact" variant="primary" size="lg" cursorLabel="LET'S BUILD">
            Start a Project
          </MagneticButton>
        </div>
      </section>
    </div>
  );
}
