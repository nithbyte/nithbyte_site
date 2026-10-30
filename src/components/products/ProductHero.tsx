"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Laptop, Smartphone, Sparkles, Shield, CheckCircle2 } from "lucide-react";
import SignalBadge from "@/components/ui/SignalBadge";
import MagneticButton from "@/components/interactions/MagneticButton";
import OrangeSignal from "@/components/interactions/OrangeSignal";
import { ProductItem } from "@/data/products";
import ProductVisualizer from "./mockups/ProductVisualizer";

interface ProductHeroProps {
  product: ProductItem;
}

export default function ProductHero({ product }: ProductHeroProps) {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 sm:px-8 pt-32 pb-16 space-y-12">
      {/* Navigation Breadcrumb & Tag */}
      <div className="flex flex-wrap items-center gap-4 text-xs font-mono-tech">
        <Link
          href="/products"
          className="inline-flex items-center gap-1.5 text-nb-muted hover:text-nb-orange transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Products
        </Link>
        <span className="text-nb-muted">/</span>
        <SignalBadge label={product.code} tag="SAAS PLATFORM" />
        <span className="text-nb-muted hidden sm:inline">/</span>
        <span className="text-nb-muted hidden sm:inline truncate max-w-md">{product.category}</span>
      </div>

      {/* Main Title, Tagline & CTAs */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-nb-orange/10 border border-nb-orange/20 text-nb-orange text-xs font-mono-tech uppercase font-bold tracking-wider">
            <Sparkles className="w-3 h-3" />
            {product.category}
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-nb-black dark:text-nb-white leading-[1.02]">
            {product.name}
            <span className="block text-2xl sm:text-3xl md:text-4xl font-normal text-nb-graphite/80 dark:text-nb-muted mt-3">
              {product.tagline}
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-nb-graphite/90 dark:text-nb-muted font-light leading-relaxed max-w-3xl">
            {product.shortDesc}
          </p>

          {/* Primary Action Buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <MagneticButton
              href={`/contact?type=demo&product=${product.slug}`}
              variant="primary"
              size="lg"
              cursorLabel="SCHEDULE"
            >
              Request a Demo
            </MagneticButton>

            <MagneticButton
              href={`/contact?type=sales&product=${product.slug}`}
              variant="outline"
              size="lg"
              cursorLabel="DISCUSS"
              className="dark:text-white dark:border-white/20 dark:hover:border-nb-orange dark:hover:bg-nb-orange dark:hover:text-white"
            >
              Contact Sales
            </MagneticButton>
          </div>
        </div>

        {/* Right Stats Box */}
        <div className="lg:col-span-4 p-6 rounded-3xl bg-nb-black text-nb-off-white border border-white/10 space-y-4 font-mono-tech shadow-xl">
          <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
            <span className="text-nb-orange font-bold uppercase tracking-wider">PLATFORM SPECS</span>
            <OrangeSignal variant="pulse" />
          </div>

          <div className="space-y-3 text-xs">
            {product.stats.map((stat) => (
              <div key={stat.label} className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-0.5">
                <span className="text-[10px] text-nb-muted uppercase tracking-wider">{stat.label}</span>
                <p className="font-bold text-white text-sm">{stat.value}</p>
              </div>
            ))}
          </div>

          <div className="pt-2 border-t border-white/10 text-[11px] text-nb-muted flex items-center gap-2">
            <Shield className="w-4 h-4 text-nb-orange shrink-0" />
            <span>NITHBYTE Enterprise Architecture & SLA</span>
          </div>
        </div>
      </div>

      {/* Hero Visualizer Preview */}
      <div className="pt-4">
        <ProductVisualizer slug={product.slug} defaultView="desktop" />
      </div>
    </section>
  );
}

