import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import SignalBadge from "@/components/ui/SignalBadge";
import SectionHeader from "@/components/ui/SectionHeader";
import MagneticButton from "@/components/interactions/MagneticButton";
import OrangeSignal from "@/components/interactions/OrangeSignal";
import { PRODUCTS } from "@/data/products";
import ProductCard from "@/components/products/ProductCard";
import {
  Boxes,
  ShieldCheck,
  Zap,
  Globe2,
  Cpu,
  Layers,
  ArrowDown,
  Sparkles,
  Server
} from "lucide-react";

export const metadata: Metadata = {
  title: "NithByte Products — Digital Platforms That Power Modern Businesses",
  description:
    "Discover powerful, industry-focused SaaS solutions developed by NITHBYTE. From pharmaceutical distribution and restaurant POS to network marketing and chit funds.",
  keywords: [
    "NithByte Products",
    "SaaS Platforms",
    "MByte Pharma",
    "DineByte Restaurant POS",
    "EvoByte MLM SaaS",
    "ChitByte Chit Fund",
    "Enterprise Software",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nithbyte.com/products",
    title: "NithByte Products — Technology That Powers Businesses",
    description:
      "Industry-focused SaaS platforms engineered for pharmaceutical distribution, restaurant operations, network marketing, and financial management.",
    siteName: "NithByte",
    images: [
      {
        url: "/images/nithbyte-logo.png",
        width: 1200,
        height: 630,
        alt: "NithByte Digital Products Showcase",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NithByte Products — Technology That Powers Businesses",
    description:
      "Industry-focused SaaS platforms engineered for pharmaceutical distribution, restaurant operations, network marketing, and financial management.",
    images: ["/images/nithbyte-logo.png"],
  },
  alternates: {
    canonical: "https://nithbyte.com/products",
  },
};

export default function ProductsPage() {
  return (
    <div className="w-full flex flex-col pt-32 pb-24 space-y-24">
      {/* =========================================================================
          SECTION 1 – HERO SECTION
         ========================================================================= */}
      <section className="w-full max-w-7xl mx-auto px-6 sm:px-8 relative overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-nb-orange/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-grid-pattern dark:bg-grid-pattern-dark opacity-15 pointer-events-none" />

        <div className="w-full border-b border-black/10 dark:border-white/10 pb-16 relative z-10">
          <div className="space-y-8 max-w-4xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <SignalBadge label="DIGITAL PRODUCTS" tag="NITHBYTE" />
              <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/50 dark:bg-white/5 border border-black/5 dark:border-white/10 text-xs font-mono-tech text-nb-muted">
                <OrangeSignal variant="pulse" /> 4 SAAS PLATFORMS DEPLOYED
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-nb-black dark:text-nb-white leading-[1.02]">
              Technology That <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-nb-orange via-nb-deep-orange to-amber-500">
                Powers Businesses.
              </span>
            </h1>

            {/* Supporting Content */}
            <p className="text-lg sm:text-2xl text-nb-graphite/90 dark:text-nb-muted font-light leading-relaxed max-w-3xl">
              Discover powerful, industry-focused SaaS solutions developed by NITHBYTE. From pharmaceutical distribution and restaurant operations to network marketing and financial management, our products help businesses simplify operations, improve efficiency and manage their growth through connected digital platforms.
            </p>

            {/* Action CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <MagneticButton
                href="#products-portfolio"
                variant="primary"
                size="lg"
                cursorLabel="VIEW SUITE"
                showArrow={false}
              >
                <span className="flex items-center gap-2">
                  Explore Our Products <ArrowDown className="w-4 h-4 animate-bounce" />
                </span>
              </MagneticButton>

              <MagneticButton
                href="/contact?type=products"
                variant="outline"
                size="lg"
                cursorLabel="LET'S TALK"
                className="dark:text-white dark:border-white/20 dark:hover:border-nb-orange dark:hover:bg-nb-orange dark:hover:text-white"
              >
                Talk to Our Team
              </MagneticButton>
            </div>

            {/* Micro Stats Bar */}
            <div className="pt-8 border-t border-black/5 dark:border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono-tech text-xs">
              <div className="space-y-1">
                <span className="text-nb-muted uppercase text-[10px] block">Architecture</span>
                <p className="font-bold text-nb-black dark:text-white">Multi-Tenant Cloud</p>
              </div>
              <div className="space-y-1">
                <span className="text-nb-muted uppercase text-[10px] block">Client Isolation</span>
                <p className="font-bold text-nb-black dark:text-white">Strict DB Partitioning</p>
              </div>
              <div className="space-y-1">
                <span className="text-nb-muted uppercase text-[10px] block">Mobile Parity</span>
                <p className="font-bold text-nb-black dark:text-white">iOS & Android Offline</p>
              </div>
              <div className="space-y-1">
                <span className="text-nb-muted uppercase text-[10px] block">Availability</span>
                <p className="font-bold text-nb-orange">99.9% Cloud SLA</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2 – PRODUCT PORTFOLIO
         ========================================================================= */}
      <section id="products-portfolio" className="w-full max-w-7xl mx-auto px-6 sm:px-8 space-y-16">
        <SectionHeader
          badgeLabel="FLAGSHIP SUITE"
          badgeTag="PORTFOLIO"
          title="Our Products"
          description="Purpose-built digital platforms designed to solve real business challenges across multiple industries."
        />

        <div className="space-y-12">
          {PRODUCTS.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 3 – ARCHITECTURAL STANDARDS
         ========================================================================= */}
      <section className="w-full max-w-7xl mx-auto px-6 sm:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-nb-white dark:bg-nb-soft-black border border-black/10 dark:border-white/10 space-y-8 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-black/10 dark:border-white/10 pb-6">
            <div className="space-y-2">
              <SignalBadge label="ENGINEERING FOUNDATION" tag="STANDARDS" />
              <h2 className="text-2xl sm:text-4xl font-bold text-nb-black dark:text-white tracking-tight">
                Built on NITHBYTE&apos;s Core Software Principles.
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-nb-muted max-w-md font-mono-tech">
              Every NITHBYTE SaaS product is engineered with enterprise durability, offline resilience, and high-frequency transaction safety.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 font-mono-tech text-xs">
            <div className="p-5 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 space-y-2">
              <div className="flex items-center gap-2 text-nb-orange font-bold">
                <Server className="w-4 h-4 text-nb-orange" />
                <span>DATA SOVEREIGNTY</span>
              </div>
              <p className="text-nb-graphite/80 dark:text-nb-muted leading-relaxed">
                Tenant-level sandboxing with row-level security ensuring your proprietary business data remains completely isolated and confidential.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 space-y-2">
              <div className="flex items-center gap-2 text-nb-orange font-bold">
                <Zap className="w-4 h-4 text-nb-orange" />
                <span>OFFLINE CONTINUITY</span>
              </div>
              <p className="text-nb-graphite/80 dark:text-nb-muted leading-relaxed">
                Local-first mobile storage allows billing counters and field representatives to record actions during connectivity blackouts with auto sync.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 space-y-2">
              <div className="flex items-center gap-2 text-nb-orange font-bold">
                <ShieldCheck className="w-4 h-4 text-nb-orange" />
                <span>AUDIT-READY LOGS</span>
              </div>
              <p className="text-nb-graphite/80 dark:text-nb-muted leading-relaxed">
                Immutable event tracking recording doctor signatures, cash hand-overs, KOT modifications, and commission payouts for governance.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 space-y-2">
              <div className="flex items-center gap-2 text-nb-orange font-bold">
                <Globe2 className="w-4 h-4 text-nb-orange" />
                <span>CLOUD SCALABILITY</span>
              </div>
              <p className="text-nb-graphite/80 dark:text-nb-muted leading-relaxed">
                Serverless microservices and distributed databases automatically scale with your outlet expansion or representative force growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4 – FINAL CONSULTATION CTA
         ========================================================================= */}
      <section className="w-full max-w-7xl mx-auto px-6 sm:px-8">
        <div className="p-8 sm:p-16 rounded-3xl bg-nb-black text-nb-off-white border border-white/10 text-center relative overflow-hidden shadow-2xl space-y-8">
          <div className="absolute inset-0 bg-blueprint-grid opacity-10 pointer-events-none" />
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-nb-orange/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
            <SignalBadge label="PRODUCT ENGAGEMENT" tag="PARTNER WITH US" />

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Looking for a tailored platform deployment?
            </h2>

            <p className="text-base sm:text-lg text-nb-muted font-light leading-relaxed">
              We partner with forward-thinking enterprises to configure, brand, and deploy our SaaS platforms for specific industrial operational workflows.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <MagneticButton
                href="/contact?type=products"
                variant="primary"
                size="lg"
                cursorLabel="CONNECT"
              >
                Schedule Platform Consultation
              </MagneticButton>

              <MagneticButton
                href="/about"
                variant="outline"
                size="lg"
                cursorLabel="ABOUT"
                className="text-white border-white/20 hover:border-nb-orange hover:bg-nb-orange hover:text-white"
              >
                About NITHBYTE
              </MagneticButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
