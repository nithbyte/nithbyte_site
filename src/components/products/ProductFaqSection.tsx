"use client";

import React, { useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { ProductItem } from "@/data/products";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ProductFaqSectionProps {
  product: ProductItem;
}

export default function ProductFaqSection({ product }: ProductFaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-6 sm:px-8 py-16 border-t border-black/10 dark:border-white/10 space-y-12">
      <SectionHeader
        badgeLabel="QUESTIONS & CLARIFICATIONS"
        badgeTag="08 FAQ"
        title="Frequently asked product questions."
        description={`Clear technical and operational details concerning ${product.name} architecture and deployment.`}
      />

      <div className="max-w-4xl mx-auto space-y-4">
        {product.faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;

          return (
            <div
              key={faq.question}
              className="rounded-2xl bg-nb-white dark:bg-nb-black border border-black/10 dark:border-white/10 overflow-hidden shadow-sm transition-colors"
            >
              <button
                type="button"
                onClick={() => toggleFaq(idx)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 select-none focus:outline-none"
              >
                <span className="text-base sm:text-lg font-bold text-nb-black dark:text-white tracking-tight flex items-center gap-3">
                  <span className="font-mono-tech text-xs text-nb-orange">Q0{idx + 1}</span>
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-nb-muted transition-transform duration-300 shrink-0 ${
                    isOpen ? "rotate-180 text-nb-orange" : ""
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-sm sm:text-base text-nb-graphite/80 dark:text-nb-muted leading-relaxed border-t border-black/5 dark:border-white/10 pt-4 font-sans">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}

