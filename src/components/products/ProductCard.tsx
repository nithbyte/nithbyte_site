"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Laptop, Smartphone, Sparkles, CheckCircle2, Shield } from "lucide-react";
import MagneticButton from "../interactions/MagneticButton";
import OrangeSignal from "../interactions/OrangeSignal";
import { ProductItem } from "@/data/products";
import ProductVisualizer from "./mockups/ProductVisualizer";

interface ProductCardProps {
  product: ProductItem;
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      id={product.slug}
      className="p-6 sm:p-10 rounded-3xl bg-nb-black text-nb-off-white border border-white/10 hover:border-nb-orange/40 transition-all duration-300 shadow-2xl relative overflow-hidden group space-y-8"
    >
      {/* Background Micro Grid */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-nb-orange/5 rounded-full blur-3xl pointer-events-none group-hover:bg-nb-orange/10 transition-colors duration-500" />

      {/* Card Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6 relative z-10">
        <div className="flex items-center gap-3.5 font-mono-tech text-xs">
          {/* Typographic Identity Mark */}
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-nb-orange to-nb-deep-orange text-white font-extrabold flex items-center justify-center font-mono-tech text-base shadow-lg shadow-nb-orange/30 shrink-0">
            {product.name.slice(0, 2).toUpperCase()}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-white font-bold text-xl font-sans tracking-tight">{product.name}</span>
              <span className="text-nb-muted">/</span>
              <span className="text-nb-orange font-bold font-mono-tech text-xs">{product.code}</span>
            </div>
            <p className="text-xs text-nb-muted font-mono-tech mt-0.5">{product.category}</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* Application Type Badge */}
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-nb-off-white font-mono-tech text-xs">
            {product.appType.includes("Web") && <Laptop className="w-3.5 h-3.5 text-nb-orange" />}
            {product.appType.includes("Mobile") && <Smartphone className="w-3.5 h-3.5 text-nb-orange" />}
            <span>{product.appType}</span>
          </span>
          <span className="px-3 py-1.5 rounded-full bg-nb-orange/20 text-nb-orange border border-nb-orange/30 font-mono-tech text-xs font-bold uppercase tracking-wider">
            SAAS PLATFORM
          </span>
        </div>
      </div>

      {/* Product Overview & Quick Specs Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
        {/* Left Column: Narrative & Modules */}
        <div className="lg:col-span-7 space-y-5">
          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl font-bold text-nb-white tracking-tight">
              {product.tagline}
            </h3>
            <p className="text-sm sm:text-base text-nb-muted leading-relaxed">
              {product.shortDesc}
            </p>
          </div>

          {/* Key Capabilities Bullet Points */}
          <div className="space-y-2.5 font-mono-tech text-xs pt-1">
            <span className="text-nb-orange font-bold uppercase tracking-wider block text-[11px]">
              CORE PLATFORM MODULES:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {product.modules.map((mod) => (
                <div
                  key={mod.id}
                  className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-start gap-2.5 text-nb-off-white"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-nb-orange mt-1.5 shrink-0" />
                  <div>
                    <p className="font-bold text-white text-xs">{mod.title}</p>
                    <p className="text-[11px] text-nb-muted line-clamp-1 mt-0.5">{mod.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-3 flex flex-wrap items-center gap-3">
            <MagneticButton
              href={`/products/${product.slug}`}
              variant="primary"
              size="md"
              cursorLabel="EXPLORE"
            >
              Explore {product.name}
            </MagneticButton>

            <MagneticButton
              href={`/contact?type=demo&product=${product.slug}`}
              variant="outline"
              size="md"
              cursorLabel="SCHEDULE"
              className="text-white border-white/20 hover:border-nb-orange hover:bg-nb-orange hover:text-white"
            >
              Request Demo
            </MagneticButton>
          </div>
        </div>

        {/* Right Column: Platform Specifications */}
        <div className="lg:col-span-5 p-6 rounded-3xl bg-nb-soft-black border border-white/10 space-y-4 font-mono-tech shadow-xl">
          <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
            <span className="text-nb-orange font-bold uppercase tracking-wider">PLATFORM SPECS</span>
            <OrangeSignal variant="pulse" />
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs">
            {product.stats.map((s) => (
              <div key={s.label} className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1">
                <span className="text-[10px] text-nb-muted uppercase tracking-wider block">{s.label}</span>
                <p className="text-white font-bold text-xs truncate">{s.value}</p>
              </div>
            ))}
          </div>

          <div className="pt-2 border-t border-white/10 text-[11px] text-nb-muted flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-nb-orange shrink-0" />
              Enterprise Architecture
            </span>
            <span className="text-emerald-400 font-semibold">Ready to Deploy</span>
          </div>
        </div>
      </div>

      {/* Embedded Full-Width Interactive Visualizer Showcase */}
      <div className="relative z-10 pt-2">
        <ProductVisualizer slug={product.slug} defaultView="desktop" />
      </div>
    </motion.div>
  );
}
