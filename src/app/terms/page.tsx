import React from "react";
import type { Metadata } from "next";
import SignalBadge from "@/components/ui/SignalBadge";

export const metadata: Metadata = {
  title: "Terms of Service — NithByte",
  description: "Terms of service and usage conditions for the NithByte website.",
  alternates: {
    canonical: "https://nithbyte.com/terms",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <div className="pt-32 pb-24 max-w-4xl mx-auto px-6 sm:px-8 space-y-12">
      <div className="space-y-4 border-b border-black/10 dark:border-white/10 pb-8">
        <SignalBadge label="TERMS & CONDITIONS" tag="LEGAL" />
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-nb-black dark:text-nb-white">
          Terms of Service
        </h1>
        <p className="text-xs font-mono-tech text-nb-muted">
          LAST UPDATED: SEPTEMBER 2026 // NITHBYTE TERMS
        </p>
      </div>

      <div className="space-y-8 text-sm sm:text-base text-nb-graphite dark:text-nb-muted leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-nb-black dark:text-nb-white font-display">1. Acceptance of Terms</h2>
          <p>
            By accessing and utilizing the NithByte website and associated digital services, you agree to comply with and be bound by these terms. If you do not accept these terms, you should refrain from using our platforms.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-nb-black dark:text-nb-white font-display">2. Intellectual Property</h2>
          <p>
            All original software architectures, code demonstrations, visual blueprints, trademarks, and editorial analyses displayed on this site are the intellectual property of NithByte, protected under international copyright and intellectual property conventions.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-nb-black dark:text-nb-white font-display">3. Client Engagements & Software Delivery</h2>
          <p>
            Commercial deliverables, source code rights, maintenance guarantees, and service level agreements (SLAs) are governed exclusively by formal Statements of Work (SOW) executed between NithByte and each client organization.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-nb-black dark:text-nb-white font-display">4. Modifications to Terms</h2>
          <p>
            NithByte reserves the right to modify these terms periodically. Continued interaction with our digital platforms following updates constitutes affirmative acceptance of the revised terms.
          </p>
        </section>
      </div>
    </div>
  );
}
