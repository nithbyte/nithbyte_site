"use client";

import React from "react";
import MagneticButton from "@/components/interactions/MagneticButton";
import OrangeSignal from "@/components/interactions/OrangeSignal";
import SignalBadge from "@/components/ui/SignalBadge";
import { ArrowUpRight, Sparkles } from "lucide-react";

interface ProductCtaSectionProps {
  productName: string;
  productSlug: string;
}

export default function ProductCtaSection({ productName, productSlug }: ProductCtaSectionProps) {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 sm:px-8 py-20 border-t border-black/10 dark:border-white/10">
      <div className="p-8 sm:p-16 rounded-3xl bg-nb-black text-nb-off-white border border-white/10 text-center relative overflow-hidden shadow-2xl space-y-8">
        {/* Decorative Grid & Glow */}
        <div className="absolute inset-0 bg-blueprint-grid opacity-10 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-nb-orange/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
          <div className="flex justify-center">
            <SignalBadge label="COMMERCIAL ENGAGEMENT" tag={productName.toUpperCase()} />
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
            Ready to Transform Your Business?
          </h2>

          <p className="text-base sm:text-xl text-nb-muted font-light leading-relaxed">
            Let&apos;s explore how this NITHBYTE solution can support your business operations with tailored configurations, high security, and dedicated onboarding.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <MagneticButton
              href={`/contact?type=demo&product=${productSlug}`}
              variant="primary"
              size="lg"
              cursorLabel="SCHEDULE"
            >
              Request a Demo
            </MagneticButton>

            <MagneticButton
              href="/contact"
              variant="outline"
              size="lg"
              cursorLabel="CONTACT"
              className="text-white border-white/20 hover:border-nb-orange hover:bg-nb-orange hover:text-white"
            >
              Contact NITHBYTE
            </MagneticButton>
          </div>
        </div>

        <div className="relative z-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs font-mono-tech text-nb-muted gap-2">
          <div className="flex items-center gap-2">
            <OrangeSignal variant="pulse" />
            <span>NITHBYTE Software Solutions • Built for Business Velocity</span>
          </div>
          <span>Direct Inquiries: nithbyte@gmail.com</span>
        </div>
      </div>
    </section>
  );
}
