import React from "react";
import type { Metadata } from "next";
import SignalBadge from "@/components/ui/SignalBadge";

export const metadata: Metadata = {
  title: "Privacy Policy — NithByte",
  description: "Privacy policy and data governance practices at NithByte.",
  alternates: {
    canonical: "https://nithbyte.com/privacy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-24 max-w-4xl mx-auto px-6 sm:px-8 space-y-12">
      <div className="space-y-4 border-b border-black/10 dark:border-white/10 pb-8">
        <SignalBadge label="LEGAL & DATA GOVERNANCE" tag="PRIVACY" />
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-nb-black dark:text-nb-white">
          Privacy Policy
        </h1>
        <p className="text-xs font-mono-tech text-nb-muted">
          LAST UPDATED: SEPTEMBER 2026 // NITHBYTE DATA DIRECTIVE
        </p>
      </div>

      <div className="space-y-8 text-sm sm:text-base text-nb-graphite dark:text-nb-muted leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-nb-black dark:text-nb-white font-display">1. Information Collection</h2>
          <p>
            NithByte collects minimal personal information necessary to deliver our digital products and respond to project enquiries. This includes names, email addresses, and project brief parameters submitted via our contact forms.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-nb-black dark:text-nb-white font-display">2. Use of Information</h2>
          <p>
            Information collected is strictly used to evaluate client requirements, architect technical proposals, coordinate project sprints, and communicate operational updates. We do not sell, rent, or trade your personal data to third parties.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-nb-black dark:text-nb-white font-display">3. Security & Telemetry</h2>
          <p>
            We implement industry-standard encryption, strict IAM controls, and sanitized environment boundaries. Analytics telemetry collected through our website is anonymized and used exclusively to enhance interface performance and usability.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-nb-black dark:text-nb-white font-display">4. Contact & Inquiries</h2>
          <p>
            For inquiries regarding our privacy practices or data governance policies, reach out directly to privacy@nithbyte.com.
          </p>
        </section>
      </div>
    </div>
  );
}
