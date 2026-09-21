import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import SignalBadge from "@/components/ui/SignalBadge";
import SectionHeader from "@/components/ui/SectionHeader";
import MagneticButton from "@/components/interactions/MagneticButton";
import { SERVICES } from "@/data/services";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Services & Capabilities — NithByte",
  description: "Comprehensive software engineering, mobile development, e-commerce, AI automation, and growth marketing capabilities.",
};

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-24 space-y-24">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="border-b border-black/10 pb-16 space-y-6 max-w-4xl">
          <SignalBadge label="ENGINEERING DISCIPLINES" tag="SERVICES" />
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-nb-black leading-[1.02]">
            Capabilities engineered for <span className="text-nb-orange">modern velocity.</span>
          </h1>
          <p className="text-lg sm:text-2xl text-nb-graphite/90 font-light leading-relaxed">
            From zero-to-one product engineering to scaling high-throughput enterprise architectures, explore our primary technical service domains.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 space-y-12">
        {SERVICES.map((service) => (
          <div
            key={service.id}
            id={service.slug}
            className="p-8 sm:p-12 rounded-3xl bg-nb-white border border-black/10 hover:border-nb-orange/40 transition-all shadow-sm space-y-8"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-black/5 pb-6">
              <div className="flex items-center gap-3">
                <span className="text-xl font-mono-tech text-nb-orange font-bold">
                  {service.number}
                </span>
                <span className="px-3 py-1 rounded-full bg-nb-off-white border border-black/10 font-mono-tech text-xs text-nb-graphite font-semibold uppercase">
                  {service.tag}
                </span>
              </div>
              <Link
                href={`/services/${service.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-mono-tech text-nb-orange font-bold hover:underline"
              >
                View Full Service Architecture <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5 space-y-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-nb-black tracking-tight">
                  {service.title}
                </h2>
                <p className="text-base text-nb-graphite/80 leading-relaxed">
                  {service.fullDesc}
                </p>
                <div className="pt-2 flex flex-wrap gap-2 font-mono-tech text-xs">
                  {service.techStack.map((tech) => (
                    <span key={tech} className="px-2.5 py-1 rounded-md bg-nb-off-white text-nb-black border border-black/5">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.capabilities.map((cap) => (
                  <div key={cap.name} className="p-4 rounded-xl bg-nb-off-white border border-black/5 space-y-1">
                    <p className="font-bold text-sm text-nb-black font-mono-tech">{cap.name}</p>
                    <p className="text-xs text-nb-graphite/80 leading-relaxed">{cap.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Call to Action */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 text-center space-y-6">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-nb-black">
          Need a multi-capability build?
        </h2>
        <p className="text-base sm:text-lg text-nb-muted max-w-xl mx-auto">
          We frequently architect solutions that integrate multiple disciplines into a unified product.
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
