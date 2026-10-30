/* eslint-disable */
// Delivered by Originkit · stack: nextjs · styling: tailwind
"use client";

import React, { useState, type CSSProperties } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Facebook, Instagram } from "lucide-react";
import Logo from "@/components/ui/Logo";
import ThemeToggle from "@/components/theme/ThemeToggle";
import FluidTrail from "@/components/originkit/ui/hero-11/fluid-trail";
import LiquidHover from "@/components/originkit/ui/hero-11/liquid-hover";

/** Public asset URLs — use a function so preview rewriters stay stable. */
function asset(file: string) {
  return `/originkit/hero-11/${file}`;
}

const PORTRAIT_MASK = asset("portrait-mask.svg");
const BACKGROUND_MASK = asset("background-mask.svg");

/** Only mask-image inline — position/size stay in CSS for responsive breakpoints. */
const portraitMaskStyle: CSSProperties = {
  WebkitMaskImage: `url(${PORTRAIT_MASK})`,
  maskImage: `url(${PORTRAIT_MASK})`,
};

const backgroundMaskStyle: CSSProperties = {
  WebkitMaskImage: `url(${BACKGROUND_MASK})`,
  maskImage: `url(${BACKGROUND_MASK})`,
};

type LiquidDistortionHeroProps = {
  secondaryCta?: { label: string; href: string };
};

const NAV_LINKS = [
  { name: "About", href: "/about", number: "01" },
  { name: "Services", href: "/services", number: "02" },
  { name: "Solutions", href: "/solutions", number: "03" },
  { name: "Work", href: "/work", number: "04" },
  { name: "Products", href: "/products", number: "05" },
  { name: "Insights", href: "/insights", number: "06" },
];

function BackgroundArtwork() {
  return (
    <>
      <div className="ok-h11-background">
        <div className="ok-h11-maskedBackgroundLayer" style={backgroundMaskStyle}>
          <img
            alt=""
            className="ok-h11-layerImage"
            src={asset("background-layer-1.svg")}
          />
        </div>
        <div className="ok-h11-backgroundLayer ok-h11-backgroundLayer2">
          <img
            alt=""
            className="ok-h11-layerImage"
            src={asset("background-layer-2.svg")}
          />
        </div>
        <div className="ok-h11-backgroundLayer ok-h11-backgroundLayer3">
          <img
            alt=""
            className="ok-h11-layerImage"
            src={asset("background-layer-3.svg")}
          />
        </div>
        <div className="ok-h11-backgroundLayer ok-h11-backgroundLayer4">
          <img
            alt=""
            className="ok-h11-layerImage"
            src={asset("background-layer-4.svg")}
          />
        </div>
        <div className="ok-h11-backgroundLayer ok-h11-backgroundLayer5">
          <img
            alt=""
            className="ok-h11-layerImage"
            src={asset("background-layer-5.svg")}
          />
        </div>
        <div className="ok-h11-backgroundLayer ok-h11-backgroundLayer6">
          <img
            alt=""
            className="ok-h11-layerImage"
            src={asset("background-layer-6.svg")}
          />
        </div>
      </div>

      <div className="ok-h11-liquidCharacter">
        <LiquidHover imageSrc={asset("portrait-grid.png")} />
      </div>
      <div className="ok-h11-portrait" style={portraitMaskStyle}>
        <img alt="" src={asset("portrait.png")} />
      </div>
    </>
  );
}

function CapsuleButton({
  href,
  label,
  book = false,
}: {
  href: string;
  label: string;
  book?: boolean;
}) {
  return (
    <Link className="ok-h11-button group" href={href}>
      <span>{label}</span>
      <span className="ok-h11-buttonIcon transition-transform duration-300 group-hover:scale-105">
        <img
          alt=""
          height={23}
          src={asset(book ? "arrow-up-right-book.svg" : "arrow-up-right.svg")}
          width={23}
        />
      </span>
    </Link>
  );
}

/**
 * Visionary liquid-distortion hero from
 * https://github.com/moleeforx-del/visionary-liquid-distortion
 * Configured with NITHBYTE design system & navigation.
 */
export function LiquidDistortionHero({
  secondaryCta = { label: "Start a Project", href: "/contact" },
}: LiquidDistortionHeroProps = {}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <section
      className="ok-h11-hero"
      data-node-id="50:5"
      aria-label="NithByte liquid distortion hero"
    >
      <BackgroundArtwork />
      <div aria-hidden="true" className="ok-h11-fluidTrail">
        <FluidTrail />
      </div>

      <header className="ok-h11-header">
        {/* Left: NithByte Logo */}
        <div className="flex items-center">
          <Logo variant="white" />
        </div>

        {/* Center: Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7 text-[15px] font-mono-tech tracking-wider" aria-label="Main navigation">
          {NAV_LINKS.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative py-1 transition-colors duration-200 group ${
                  isActive
                    ? "text-white font-semibold"
                    : "text-white/80 hover:text-nb-orange"
                }`}
              >
                <span>{item.name}</span>
                {isActive ? (
                  <motion.div
                    layoutId="hero-active-nav-line"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-nb-orange"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                ) : (
                  <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-nb-orange transition-all duration-300 group-hover:w-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right: Actions */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle size="md" />
          <CapsuleButton
            book
            href={secondaryCta.href}
            label={secondaryCta.label}
          />
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle size="sm" />
          <button
            className="p-2 text-white hover:text-nb-orange focus:outline-none transition-colors"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open navigation"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-50 bg-nb-black text-nb-white flex flex-col justify-between pt-24 pb-8 px-8 md:hidden overflow-y-auto"
          >
            <div className="space-y-6 pt-4">
              <div className="flex items-center justify-between">
                <p className="text-xs font-mono-tech text-nb-orange tracking-widest uppercase">
                  SYSTEM DIRECTORY
                </p>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-white hover:text-nb-orange"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="space-y-4">
                {NAV_LINKS.map((link, idx) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 + 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="group flex items-center justify-between py-2 border-b border-white/10 text-2xl font-bold tracking-tight text-nb-off-white hover:text-nb-orange transition-colors"
                    >
                      <span className="flex items-center gap-4">
                        <span className="text-xs font-mono-tech text-nb-muted group-hover:text-nb-orange">
                          {link.number}
                        </span>
                        {link.name}
                      </span>
                      <ArrowUpRight className="w-5 h-5 text-nb-muted group-hover:text-nb-orange group-hover:translate-x-1 transition-all" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="pt-8 space-y-6">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-4 rounded-full bg-nb-orange text-nb-white font-mono-tech font-semibold tracking-wider hover:bg-nb-deep-orange transition-colors shadow-lg shadow-nb-orange/30"
              >
                Start a Project <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Left-side Content: Main Headline & Primary CTA */}
      <div className="ok-h11-copy !w-[min(90vw,480px)] xl:!w-[560px]">
        <h1 className="font-sans font-black tracking-[-0.04em] leading-[0.92] text-4xl sm:text-5xl lg:text-[48px] xl:text-[54px] uppercase">
          <span className="block text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
            IDEAS
          </span>
          <span className="block text-white/80 drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
            NEED A PLACE
          </span>
          <span className="block text-nb-orange drop-shadow-[0_0_40px_rgba(255,106,0,0.8)] whitespace-nowrap">
            TO BECOME REAL.
          </span>
        </h1>
        {/* On mobile: show supporting description below headline */}
        <p className="block md:hidden mt-3 text-sm text-white/80 leading-relaxed font-sans font-normal">
          We design and engineer digital products, commerce experiences, and intelligent systems for ambitious international businesses.
        </p>
        <div className="pt-4 sm:pt-6">
          <CapsuleButton href="/contact" label="Get Started" />
        </div>
      </div>

      {/* Right-side Content: Mission Statement & Social Links */}
      <aside
        className="ok-h11-details !hidden md:!flex !w-[min(38vw,380px)] xl:!w-[420px] !flex-col !items-start !gap-5"
        aria-label="Company mission"
      >
        <p className="text-base sm:text-lg lg:text-[18px] xl:text-[20px] text-white/85 leading-relaxed font-sans font-normal drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
          We design and engineer digital products, commerce experiences, and intelligent systems for ambitious international businesses.
        </p>

        <div className="flex items-center gap-3 pt-1">
          <span className="inline-block w-2 h-2 rounded-full bg-nb-orange animate-pulse" />
          <span className="text-xs font-mono-tech text-nb-orange tracking-widest uppercase">
            WHERE IDEAS FIND THEIR CODE
          </span>
        </div>

        <div className="flex items-center gap-3 pt-1">
          <a
            aria-label="NithByte on Facebook"
            className="ok-h11-social group hover:border-nb-orange hover:bg-white/10 transition-colors"
            href="https://www.facebook.com/profile.php?id=61594737716582"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook className="w-3.5 h-3.5 text-white/90 group-hover:text-nb-orange transition-colors" />
          </a>
          <a
            aria-label="NithByte on Instagram"
            className="ok-h11-social group hover:border-nb-orange hover:bg-white/10 transition-colors"
            href="https://www.instagram.com/nithbyte_official"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="w-3.5 h-3.5 text-white/90 group-hover:text-nb-orange transition-colors" />
          </a>
        </div>
      </aside>
    </section>
  );
}
