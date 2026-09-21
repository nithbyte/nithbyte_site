import React from "react";
import type { Metadata } from "next";
import SignalBadge from "@/components/ui/SignalBadge";

export const metadata: Metadata = {
  title: "Privacy Policy — NithByte",
  description: "Privacy policy and data governance practices at NithByte.",
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
            NithByte respects your privacy. When you contact us through our website or send inquiries to our direct email (nithbyte@gmail.com), we only collect the information you explicitly provide (such as your name, email address, company name, and project specifications).
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-nb-black dark:text-nb-white font-display">2. Use of Information</h2>
          <p>
            Any information submitted is used solely to respond to your inquiries, prepare engineering estimates, and facilitate professional communications regarding potential client engagements. We do not sell, rent, or trade your personal data to third parties.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-nb-black dark:text-nb-white font-display">3. Cookies and Analytics</h2>
          <p>
            Our website is designed to be lightweight and respectful of your privacy. Any telemetry or analytics utilized is privacy-focused, non-invasive, and used strictly to improve site performance and user experience.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-nb-black dark:text-nb-white font-display">4. Inquiries & Data Rights</h2>
          <p>
            For any questions regarding your data or to request data removal, please contact our team directly at{" "}
            <a href="mailto:nithbyte@gmail.com" className="text-nb-orange font-bold hover:underline">
              nithbyte@gmail.com
            </a>.
          </p>
        </section>
      </div>
    </div>
  );
}
