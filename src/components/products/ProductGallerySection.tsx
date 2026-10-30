"use client";

import React, { useState } from "react";
import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";
import { ProductItem } from "@/data/products";
import { Laptop, Smartphone, Maximize2, Sparkles, CheckCircle2 } from "lucide-react";
import ProductVisualizer from "./mockups/ProductVisualizer";

interface ProductGallerySectionProps {
  product: ProductItem;
}

export default function ProductGallerySection({ product }: ProductGallerySectionProps) {
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const activeItem = product.gallery[activeGalleryIndex] || product.gallery[0];

  return (
    <section className="w-full max-w-7xl mx-auto px-6 sm:px-8 py-16 border-t border-black/10 dark:border-white/10 space-y-12">
      <SectionHeader
        badgeLabel="APPLICATION GALLERY"
        badgeTag="07 INTERFACES"
        title="Explore real and simulated platform interfaces."
        description="Experience the layout, clarity, and ergonomics of our desktop web dashboards and native mobile applications."
      />

      {/* Gallery Selector Tabs */}
      <div className="flex flex-wrap items-center gap-2 font-mono-tech text-xs">
        {product.gallery.map((item, idx) => (
          <button
            key={item.id}
            type="button"
            onClick={() => {
              setActiveGalleryIndex(idx);
              setIsZoomed(false);
            }}
            className={`px-4 py-2 rounded-xl border transition-all flex items-center gap-2 ${
              activeGalleryIndex === idx
                ? "bg-nb-orange text-white border-nb-orange font-bold shadow-md shadow-nb-orange/20"
                : "bg-nb-white dark:bg-nb-soft-black border-black/10 dark:border-white/10 text-nb-graphite dark:text-nb-muted hover:border-nb-orange/40"
            }`}
          >
            {item.type === "desktop" ? <Laptop className="w-3.5 h-3.5" /> : <Smartphone className="w-3.5 h-3.5" />}
            <span>{item.title}</span>
          </button>
        ))}
      </div>

      {/* Active Preview Showcase */}
      <div className="space-y-6">
        <div className="p-4 sm:p-6 rounded-3xl bg-nb-black border border-white/10 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-white/10 text-xs font-mono-tech">
            <div>
              <span className="text-nb-orange font-bold uppercase tracking-wider">{activeItem.badge}</span>
              <h4 className="text-base sm:text-lg font-bold text-white font-sans mt-0.5">{activeItem.title}</h4>
              <p className="text-nb-muted text-xs font-sans mt-0.5">{activeItem.subtitle}</p>
            </div>

            <div className="flex items-center gap-2">
              {activeItem.image && (
                <button
                  type="button"
                  onClick={() => setIsZoomed(!isZoomed)}
                  className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-nb-off-white flex items-center gap-1.5 transition-colors"
                >
                  <Maximize2 className="w-3.5 h-3.5 text-nb-orange" />
                  <span>{isZoomed ? "Default View" : "Full View"}</span>
                </button>
              )}
              <span className="text-[10px] text-nb-muted bg-white/5 border border-white/10 px-3 py-1 rounded-full whitespace-nowrap">
                {activeItem.image ? "PRODUCTION SCREENSHOT" : "INTERACTIVE DEMO PREVIEW"}
              </span>
            </div>
          </div>

          {/* Screenshot Display or Visualizer Preview */}
          {activeItem.image ? (
            <div className="pt-2 flex justify-center items-center">
              {activeItem.type === "desktop" ? (
                /* Desktop Screenshot Frame */
                <div className="w-full rounded-2xl bg-neutral-950 border border-white/15 p-2 shadow-2xl overflow-hidden">
                  <div className="rounded-xl overflow-hidden bg-neutral-900 border border-white/10">
                    <Image
                      src={activeItem.image}
                      alt={activeItem.title}
                      width={1024}
                      height={486}
                      className={`w-full h-auto object-contain transition-all duration-300 ${
                        isZoomed ? "max-h-[900px]" : "max-h-[620px]"
                      }`}
                      priority
                    />
                  </div>
                </div>
              ) : (
                /* Mobile Phone Screenshot Frame */
                <div className="w-full max-w-sm rounded-[40px] bg-nb-soft-black border-4 border-white/20 p-3 shadow-2xl space-y-3 relative overflow-hidden">
                  <div className="w-24 h-4 bg-black rounded-full mx-auto flex items-center justify-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-nb-orange" />
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                  </div>
                  <div className="rounded-[28px] overflow-hidden bg-neutral-900 border border-white/10">
                    <Image
                      src={activeItem.image}
                      alt={activeItem.title}
                      width={340}
                      height={750}
                      className="w-full h-auto object-contain max-h-[640px]"
                    />
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="pt-2">
              <ProductVisualizer slug={product.slug} defaultView={activeItem.type} />
            </div>
          )}

          <p className="text-xs text-nb-muted font-sans pt-2">
            {activeItem.description}
          </p>
        </div>
      </div>
    </section>
  );
}
