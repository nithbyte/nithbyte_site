"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowUpRight } from "lucide-react";

export interface ProductSubmenuItem {
  name: string;
  code: string;
  href: string;
  badge: string;
  tagline: string;
}

export const PRODUCT_SUBMENU: ProductSubmenuItem[] = [
  {
    name: "MByte",
    code: "PROD-01",
    href: "/products/mbyte",
    badge: "MB",
    tagline: "Pharma Distribution & Field Force",
  },
  {
    name: "DineByte",
    code: "PROD-02",
    href: "/products/dinebyte",
    badge: "Di",
    tagline: "Restaurant POS & Floor Operations",
  },
  {
    name: "EvoByte",
    code: "PROD-03",
    href: "/products/evobyte",
    badge: "Ev",
    tagline: "Multi-Client MLM & Business Network",
  },
  {
    name: "ChitByte",
    code: "PROD-04",
    href: "/products/chitbyte",
    badge: "Ch",
    tagline: "Digital Chit Fund Ecosystem",
  },
];

interface ProductsNavDropdownProps {
  variant?: "auto" | "dark";
  layoutId?: string;
  onNavigate?: () => void;
}

export function ProductsNavDropdown({
  variant = "auto",
  layoutId = "nav-indicator",
  onNavigate,
}: ProductsNavDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  const isProductsActive = pathname.startsWith("/products");

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 180);
  };

  const isDark = variant === "dark";

  return (
    <div
      className={`relative ${isOpen ? "z-50" : "z-20"}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href="/products"
        onClick={() => {
          setIsOpen(false);
          onNavigate?.();
        }}
        className={`relative py-1 flex items-center gap-1.5 transition-colors duration-200 group ${
          isProductsActive
            ? isDark
              ? "text-white font-semibold"
              : "text-nb-black dark:text-nb-white font-semibold"
            : isDark
              ? "text-white/80 hover:text-nb-orange"
              : "text-nb-graphite/80 dark:text-nb-muted hover:text-nb-orange dark:hover:text-nb-orange"
        }`}
      >
        <span>Products</span>
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform duration-200 ${
            isOpen
              ? "rotate-180 text-nb-orange"
              : isDark
                ? "text-white/60 group-hover:text-nb-orange"
                : "text-nb-muted group-hover:text-nb-orange"
          }`}
        />
        {isProductsActive ? (
          <motion.div
            layoutId={layoutId}
            className="absolute -bottom-1 left-0 right-0 h-[2px] bg-nb-orange"
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
          />
        ) : (
          <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-nb-orange transition-all duration-300 group-hover:w-full" />
        )}
      </Link>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute top-full left-1/2 -translate-x-1/2 pt-2.5 w-[340px] z-[100] pointer-events-auto"
          >
            <div
              className={`rounded-2xl p-2.5 shadow-2xl backdrop-blur-2xl border ${
                isDark
                  ? "bg-nb-soft-black/95 border-white/10 text-white shadow-black/60"
                  : "bg-nb-white/95 dark:bg-nb-soft-black/95 border-black/10 dark:border-white/10 text-nb-black dark:text-white shadow-black/20"
              }`}
            >
              <div className="px-3 py-2 text-[10px] font-mono-tech uppercase tracking-widest text-nb-muted border-b border-black/5 dark:border-white/10 flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-nb-orange animate-pulse" />
                  SAAS PLATFORMS
                </span>
                <span className="text-nb-orange font-bold">4 PRODUCTS</span>
              </div>

              <div className="py-1 space-y-1">
                {PRODUCT_SUBMENU.map((item) => (
                  <Link
                    key={item.code}
                    href={item.href}
                    onClick={() => {
                      setIsOpen(false);
                      onNavigate?.();
                    }}
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition-all group/item"
                  >
                    <div className="w-9 h-9 rounded-xl bg-nb-orange/15 text-nb-orange flex items-center justify-center font-mono-tech text-xs font-bold border border-nb-orange/30 group-hover/item:bg-nb-orange group-hover/item:text-white group-hover/item:shadow-md group-hover/item:shadow-nb-orange/20 transition-all flex-shrink-0">
                      {item.badge}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold group-hover/item:text-nb-orange transition-colors">
                          {item.name}
                        </span>
                        <span className="text-[9px] font-mono-tech px-1.5 py-0.5 rounded bg-black/5 dark:bg-white/10 text-nb-muted font-semibold">
                          {item.code}
                        </span>
                      </div>
                      <p className="text-[11px] text-nb-graphite/70 dark:text-nb-muted truncate group-hover/item:text-nb-graphite dark:group-hover/item:text-nb-off-white">
                        {item.tagline}
                      </p>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-nb-muted group-hover/item:text-nb-orange opacity-0 group-hover/item:opacity-100 transition-all -translate-x-1 group-hover/item:translate-x-0" />
                  </Link>
                ))}
              </div>

              <div className="pt-1.5 border-t border-black/5 dark:border-white/10">
                <Link
                  href="/products"
                  onClick={() => {
                    setIsOpen(false);
                    onNavigate?.();
                  }}
                  className="flex items-center justify-between px-3 py-2 rounded-xl text-xs font-mono-tech text-nb-orange hover:bg-nb-orange/10 font-bold transition-colors"
                >
                  <span>Explore All Products</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface MobileProductsAccordionProps {
  number: string;
  onNavigate: () => void;
}

export function MobileProductsAccordion({
  number,
  onNavigate,
}: MobileProductsAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isProductsActive = pathname.startsWith("/products");

  return (
    <div className="border-b border-white/10">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center justify-between py-2 text-2xl font-bold tracking-tight text-nb-off-white hover:text-nb-orange transition-colors cursor-pointer select-none"
      >
        <span className="flex items-center gap-4">
          <span className="text-xs font-mono-tech text-nb-muted group-hover:text-nb-orange">
            {number}
          </span>
          <span className={isProductsActive ? "text-nb-orange" : ""}>Products</span>
        </span>
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono-tech px-2 py-0.5 rounded-full bg-nb-orange/20 text-nb-orange font-bold">
            4
          </span>
          <ChevronDown
            className={`w-5 h-5 text-nb-muted group-hover:text-nb-orange transition-transform duration-200 ${
              isOpen ? "rotate-180 text-nb-orange" : ""
            }`}
          />
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="pb-4 pl-4 sm:pl-6 space-y-2 border-l-2 border-nb-orange/30 ml-4 my-2"
          >
            {PRODUCT_SUBMENU.map((item) => (
              <Link
                key={item.code}
                href={item.href}
                onClick={onNavigate}
                className="flex items-center justify-between py-2 px-3 rounded-xl hover:bg-white/5 transition-colors group/sub"
              >
                <div className="flex items-center gap-2.5">
                  <span className="w-6 h-6 rounded-lg bg-nb-orange/20 text-nb-orange font-mono-tech text-[10px] font-bold flex items-center justify-center border border-nb-orange/30">
                    {item.badge}
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-nb-white group-hover/sub:text-nb-orange transition-colors">
                      {item.name}
                    </div>
                    <div className="text-[10px] text-nb-muted font-sans truncate">
                      {item.tagline}
                    </div>
                  </div>
                </div>
                <span className="text-[10px] font-mono-tech text-nb-muted">
                  {item.code}
                </span>
              </Link>
            ))}
            <div className="pt-1">
              <Link
                href="/products"
                onClick={onNavigate}
                className="inline-flex items-center gap-1.5 text-xs font-mono-tech text-nb-orange font-bold px-3 py-1.5 rounded-lg hover:bg-nb-orange/10 transition-colors"
              >
                <span>Explore All Products</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

