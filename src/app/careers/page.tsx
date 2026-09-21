import React from "react";
import type { Metadata } from "next";
import SignalBadge from "@/components/ui/SignalBadge";
import MagneticButton from "@/components/interactions/MagneticButton";
import OrangeSignal from "@/components/interactions/OrangeSignal";
import { Terminal, Sparkles, Code2, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers — NithByte",
  description: "Join the engineering team at NithByte. Where Ideas Find Their Code.",
};

export default function CareersPage() {
  return (
    <div className="pt-32 pb-24 space-y-24">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="border-b border-black/10 pb-16 space-y-6 max-w-4xl">
          <SignalBadge label="TALENT & CULTURE" tag="CAREERS" />
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-nb-black leading-[1.02]">
            Engineering culture built on <span className="text-nb-orange">craft and autonomy.</span>
          </h1>
          <p className="text-lg sm:text-2xl text-nb-graphite/90 font-light leading-relaxed">
            We value first-principles reasoning, high agency, and an uncompromising obsession with clean code and fluid interfaces.
          </p>
        </div>
      </section>

      {/* Growth Positioning & Open Applications */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-nb-white border border-black/10 shadow-sm space-y-8">
          <div className="flex items-center gap-3">
            <OrangeSignal variant="pulse" label="TEAM SCALING STATUS" />
          </div>

          <div className="space-y-4 max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-nb-black tracking-tight">
              We&apos;re growing. New opportunities will appear here.
            </h2>
            <p className="text-base text-nb-graphite leading-relaxed">
              While we may not have an active opening for every specific role right now, we are always eager to connect with exceptional frontend engineers, system architects, and AI developers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-black/5 font-mono-tech text-xs">
            <div className="p-4 rounded-xl bg-nb-off-white border border-black/5 space-y-1">
              <span className="text-nb-orange font-bold">FRONTEND ENGINEERING</span>
              <p className="text-nb-graphite/80">Next.js, TypeScript, GSAP, Framer Motion, Design Systems</p>
            </div>
            <div className="p-4 rounded-xl bg-nb-off-white border border-black/5 space-y-1">
              <span className="text-nb-orange font-bold">BACKEND & CLOUD</span>
              <p className="text-nb-graphite/80">NestJS, PostgreSQL, Redis, Docker, Microservices</p>
            </div>
            <div className="p-4 rounded-xl bg-nb-off-white border border-black/5 space-y-1">
              <span className="text-nb-orange font-bold">AI & AUTOMATION</span>
              <p className="text-nb-graphite/80">LLMs, Vector Search, LangChain, Python, Workflow Automation</p>
            </div>
          </div>

          <div className="pt-4 flex items-center gap-4">
            <a
              href="mailto:nithbyte@gmail.com?subject=Spontaneous%20Application%20—%20Engineering"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-nb-black text-white font-mono-tech text-xs font-bold hover:bg-nb-orange transition-colors"
            >
              Send Spontaneous Profile / GitHub →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
