import React from "react";
import type { Metadata } from "next";
import SignalBadge from "@/components/ui/SignalBadge";

export const metadata: Metadata = {
  title: "Terms of Service — NithByte",
  description: "Terms of service and usage conditions for the NithByte website.",
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
            By accessing or using the NithByte website, you agree to comply with and be bound by these Terms of Service. If you do not agree, please discontinue use of this site.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-nb-black dark:text-nb-white font-display">2. Intellectual Property</h2>
          <p>
            All content, brand assets, code samples, designs, and interactive visual systems displayed on this website are the property of NithByte and are protected by applicable international intellectual property laws.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-nb-black dark:text-nb-white font-display">3. Project Engagements</h2>
          <p>
            Any client engineering engagement, deliverables, timelines, and commercial terms are governed by specific, formal statement-of-work (SOW) agreements entered into separately between NithByte and the client.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-nb-black dark:text-nb-white font-display">4. Contact & Inquiries</h2>
          <p>
            For inquiries regarding our terms, please contact us at{" "}
            <a href="mailto:nithbyte@gmail.com" className="text-nb-orange font-bold hover:underline">
              nithbyte@gmail.com
            </a>.
          </p>
        </section>
      </div>
    </div>
  );
}
