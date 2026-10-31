import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import SignalBadge from "@/components/ui/SignalBadge";
import SectionHeader from "@/components/ui/SectionHeader";
import MagneticButton from "@/components/interactions/MagneticButton";
import { PROJECTS } from "@/data/projects";
import { ArrowUpRight, Lock, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Work & Case Studies — NithByte",
  description:
    "Explore our real-world engineering case studies, active client deployments, and upcoming product platforms.",
  alternates: {
    canonical: "https://nithbyte.com/work",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nithbyte.com/work",
    title: "Work & Case Studies — NithByte",
    description:
      "Explore our real-world engineering case studies, active client deployments, and upcoming product platforms.",
    siteName: "NithByte",
    images: [
      {
        url: "/images/nithbyte-logo.png",
        width: 1200,
        height: 630,
        alt: "NithByte Work & Case Studies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Work & Case Studies — NithByte",
    description:
      "Explore our real-world engineering case studies, active client deployments, and upcoming product platforms.",
    images: ["/images/nithbyte-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const workJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://nithbyte.com",
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Work",
          "item": "https://nithbyte.com/work",
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": "https://nithbyte.com/work/#itemlist",
      "name": "NithByte Portfolio & Case Studies",
      "itemListElement": PROJECTS.map((project, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "CreativeWork",
          "name": project.title,
          "description": project.summary,
          "url": `https://nithbyte.com/work/${project.slug}`,
        },
      })),
    },
  ],
};

export default function WorkPage() {
  return (
    <div className="pt-32 pb-24 space-y-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(workJsonLd) }}
      />
      {/* Hero */}
      <section className="w-full max-w-7xl mx-auto px-6 sm:px-8">
        <div className="w-full border-b border-black/10 dark:border-white/10 pb-16">
          <div className="space-y-6 max-w-4xl">
            <SignalBadge label="CASE STUDIES & PORTFOLIO" tag="WORK" />
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-nb-black dark:text-nb-white leading-[1.02]">
              Digital products built for <span className="text-nb-orange">tangible impact.</span>
            </h1>
            <p className="text-lg sm:text-2xl text-nb-graphite/90 dark:text-nb-muted font-light leading-relaxed">
              We hold ourselves to rigorous engineering standards. Explore our live client platforms and upcoming product architectures.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 space-y-12">
        {PROJECTS.map((project, idx) => (
          <div
            key={project.id}
            className="p-8 sm:p-12 rounded-3xl bg-nb-white dark:bg-nb-soft-black border border-black/10 dark:border-white/10 hover:border-nb-orange/40 transition-all shadow-sm space-y-8"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-black/5 dark:border-white/10 pb-6">
              <div className="flex items-center gap-3">
                <span className="text-xl font-mono-tech text-nb-orange font-bold">
                  0{idx + 1}
                </span>
                <span className="px-3 py-1 rounded-full bg-nb-off-white dark:bg-white/10 border border-black/10 dark:border-white/10 font-mono-tech text-xs text-nb-graphite dark:text-nb-off-white font-semibold uppercase">
                  {project.category}
                </span>
                <span className="text-xs font-mono-tech text-nb-muted">
                  {project.year}
                </span>
              </div>

              {project.isLive ? (
                <div className="flex items-center gap-4">
                  <Link
                    href={`/work/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono-tech text-nb-orange font-bold hover:underline"
                  >
                    View Case Study <ArrowUpRight className="w-4 h-4" />
                  </Link>
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono-tech text-nb-graphite/70 dark:text-nb-muted hover:text-nb-orange transition-colors"
                    >
                      Visit Live <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              ) : (
                <span className="inline-flex items-center gap-1.5 text-xs font-mono-tech text-nb-muted">
                  <Lock className="w-3.5 h-3.5" /> Architecture Under NDA
                </span>
              )}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-6 space-y-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-nb-black dark:text-nb-white tracking-tight">
                  {project.title}
                </h2>
                <p className="text-base text-nb-orange font-mono-tech">
                  {project.tagline}
                </p>
                <p className="text-sm sm:text-base text-nb-graphite/80 dark:text-nb-muted leading-relaxed">
                  {project.summary}
                </p>

                <div className="pt-2 flex flex-wrap gap-2 font-mono-tech text-xs">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-nb-off-white dark:bg-white/5 text-nb-black dark:text-nb-off-white border border-black/5 dark:border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-6 space-y-4">
                <div className="p-6 rounded-2xl bg-nb-off-white dark:bg-white/5 border border-black/5 dark:border-white/5 space-y-2">
                  <span className="text-xs font-mono-tech text-nb-orange font-bold uppercase">
                    THE CHALLENGE
                  </span>
                  <p className="text-xs sm:text-sm text-nb-graphite/80 dark:text-nb-muted leading-relaxed">
                    {project.challenge}
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-nb-off-white dark:bg-white/5 border border-black/5 dark:border-white/5 space-y-2">
                  <span className="text-xs font-mono-tech text-nb-orange font-bold uppercase">
                    THE ENGINEERING
                  </span>
                  <p className="text-xs sm:text-sm text-nb-graphite/80 dark:text-nb-muted leading-relaxed">
                    {project.engineering}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Call to Action */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 text-center space-y-6">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-nb-black dark:text-nb-white">
          Have a vision for your next platform?
        </h2>
        <p className="text-base sm:text-lg text-nb-muted max-w-xl mx-auto">
          We partner with founders and enterprises to engineer market-defining products.
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
