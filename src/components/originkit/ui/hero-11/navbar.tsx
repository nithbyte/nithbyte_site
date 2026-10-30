/* eslint-disable */
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Logo from "@/components/ui/Logo";
import MagneticButton from "@/components/interactions/MagneticButton";
import ThemeToggle from "@/components/theme/ThemeToggle";

const NAV_LINKS = [
  { name: "About", href: "/about", number: "01" },
  { name: "Services", href: "/services", number: "02" },
  { name: "Solutions", href: "/solutions", number: "03" },
  { name: "Work", href: "/work", number: "04" },
  { name: "Products", href: "/products", number: "05" },
  { name: "Insights", href: "/insights", number: "06" },
];

export const Navbar = ({ onBookNow }: { onBookNow?: () => void } = {}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <nav aria-label="Primary" className="relative z-30 w-full pt-6 pb-4">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Logo variant="white" />
          </div>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex items-center gap-8 text-sm font-mono-tech tracking-wider">
            {NAV_LINKS.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`relative py-1 transition-colors duration-200 group ${
                      isActive
                        ? "text-white font-semibold"
                        : "text-white/80 hover:text-nb-orange"
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive ? (
                      <motion.div
                        layoutId="nav-indicator-originkit"
                        className="absolute -bottom-1 left-0 right-0 h-[2px] bg-nb-orange"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    ) : (
                      <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-nb-orange transition-all duration-300 group-hover:w-full" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle size="md" />
            <MagneticButton
              href="/contact"
              variant="primary"
              size="sm"
              cursorLabel="LET'S BUILD"
            >
              Start a Project
            </MagneticButton>
          </div>

          {/* Mobile Menu Trigger & Theme Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle size="sm" />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              className="p-2 text-white hover:text-nb-orange focus:outline-none transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Fullscreen Mobile Navigation Menu */}
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
    </>
  );
};
