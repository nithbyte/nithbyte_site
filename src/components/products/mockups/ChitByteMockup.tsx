"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Laptop,
  Smartphone,
  Maximize2,
  FileSpreadsheet,
  Coins,
  Settings,
  CheckCircle2,
  Receipt
} from "lucide-react";

export default function ChitByteMockup({ defaultView = "desktop" }: { defaultView?: "desktop" | "mobile" }) {
  const [activeScreen, setActiveScreen] = useState<"dashboard" | "schemes" | "mobile-collection" | "mobile-settings">(
    defaultView === "mobile" ? "mobile-collection" : "dashboard"
  );
  const [isZoomed, setIsZoomed] = useState(false);

  const screens = {
    dashboard: {
      title: "Financial Overview & Daily Collections Dashboard",
      subtitle: "Durga Chit Fund Management System • Financial Overview, Gross Receipts & Period Filters",
      type: "desktop",
      src: "/images/products/chitbyte/chitbyte-dashboard.png",
      badge: "ADMIN CONSOLE // DURGA CHIT FUND",
      highlights: [
        "Gross collections by payment mode: Cash (₹7,000), UPI App (₹1,000), and Bank Transfer",
        "Configurable collection period filters: Today, Yesterday, This Week, This Month, and Custom range",
        "High-priority operational bar: 'Collect Payment', 'Add Customer', and 'View Dues' shortcuts",
        "Real ledger metrics tracking active enrolled subscribers (2), active running groups (1), and recent slips",
      ],
    },
    schemes: {
      title: "Chit Schemes & Savings Batches Engine",
      subtitle: "Durga Chit Fund Management System • Weekly & Monthly Savings Batches & Slot Enrollments",
      type: "desktop",
      src: "/images/products/chitbyte/chitbyte-schemes.png",
      badge: "SCHEMES ENGINE // BATCH REGISTRATION",
      highlights: [
        "Approved standard scheme templates: Diwali Weekly Chit (₹200/wk) & ₹1 Lakh Scheme (₹5,000/mo)",
        "Active batch lifecycle: 20-month duration, ₹1,00,000 stated value with Month 2 of 20 progress",
        "Live member capacity tracking: 2 of 20 slots enrolled with 18 vacant slots dynamically highlighted",
        "Single-click routing to Batch Schedules, Master Ledgers, and Owner Confirmation rules",
      ],
    },
    "mobile-collection": {
      title: "Fast Mobile Field Collection Terminal",
      subtitle: "One-Handed Daily Receipt Entry • Step-by-Step Customer Ledger Snapshot & Instant Recording",
      type: "mobile",
      src: "/images/products/chitbyte/chitbyte-mobile-collection.png",
      badge: "AGENT MOBILE // RECEIPT ENTRY",
      highlights: [
        "Step-by-step one-handed field entry: Customer selection with instant phone and code lookup",
        "Dues & ledger snapshot: Current Total Due (₹5,000) and verified previous cash payment",
        "Rapid receipt punch buttons: Full Due, 1 Month, +₹1,000, +₹2,000, and +₹5,000 presets",
        "Tender mode selector: Cash, UPI, and Bank Transfer with instant receipt generation",
      ],
    },
    "mobile-settings": {
      title: "Foreman Operations & System Configuration",
      subtitle: "Durga Chit Fund Mobile Hub • Registers, Daily Reconciliation, Auctions & Payouts",
      type: "mobile",
      src: "/images/products/chitbyte/chitbyte-mobile-settings.png",
      badge: "FOREMAN APP // SYSTEM SETTINGS",
      highlights: [
        "Foreman profile authentication: Durga Devi (Proprietor & Foreman) credential governance",
        "Daily operations & registers: Daily Reconciliation comparing software records with cash drawer & bank",
        "Chit Operations & Auctions: Auction bid recording with automated 5% foreman commission calculation",
        "Prize disbursements, guarantor documentation, and consolidated business portfolio reports",
      ],
    },
  };

  const current = screens[activeScreen];

  return (
    <div className="w-full rounded-2xl bg-nb-black border border-white/10 shadow-2xl overflow-hidden font-sans text-nb-off-white select-none">
      {/* Top Window Chrome */}
      <div className="bg-nb-soft-black px-4 py-3 border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
          <span className="ml-3 font-mono-tech text-[11px] text-nb-muted hidden sm:inline-block">
            CHITBYTE // 3-TIER DIGITAL CHIT FUND ECOSYSTEM
          </span>
        </div>

        {/* Screen Selector Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 bg-white/5 p-1 rounded-xl border border-white/5 font-mono-tech text-xs">
          <button
            type="button"
            onClick={() => setActiveScreen("dashboard")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg whitespace-nowrap transition-all ${
              activeScreen === "dashboard"
                ? "bg-nb-orange text-white font-bold shadow-md shadow-nb-orange/20"
                : "text-nb-muted hover:text-white"
            }`}
          >
            <Laptop className="w-3.5 h-3.5" />
            <span>Dashboard Overview</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveScreen("schemes")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg whitespace-nowrap transition-all ${
              activeScreen === "schemes"
                ? "bg-nb-orange text-white font-bold shadow-md shadow-nb-orange/20"
                : "text-nb-muted hover:text-white"
            }`}
          >
            <FileSpreadsheet className="w-3.5 h-3.5" />
            <span>Chit Schemes</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveScreen("mobile-collection")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg whitespace-nowrap transition-all ${
              activeScreen === "mobile-collection"
                ? "bg-nb-orange text-white font-bold shadow-md shadow-nb-orange/20"
                : "text-nb-muted hover:text-white"
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Fast Mobile Collection</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveScreen("mobile-settings")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg whitespace-nowrap transition-all ${
              activeScreen === "mobile-settings"
                ? "bg-nb-orange text-white font-bold shadow-md shadow-nb-orange/20"
                : "text-nb-muted hover:text-white"
            }`}
          >
            <Settings className="w-3.5 h-3.5" />
            <span>Operations &amp; Settings</span>
          </button>
        </div>
      </div>

      {/* Main Preview Container */}
      <div className="p-4 sm:p-6 bg-gradient-to-b from-nb-black to-nb-soft-black space-y-5">
        {/* Header Meta */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/10">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[10px] font-mono-tech px-2.5 py-0.5 rounded-full bg-nb-orange/15 text-nb-orange border border-nb-orange/30 font-bold uppercase tracking-wider">
                {current.badge}
              </span>
              <span className="text-xs font-mono-tech text-emerald-400 font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Live Production Interface
              </span>
            </div>
            <h4 className="text-base sm:text-lg font-bold text-white font-sans mt-1">
              {current.title}
            </h4>
            <p className="text-xs sm:text-sm text-nb-muted font-sans">
              {current.subtitle}
            </p>
          </div>

          <button
            type="button"
            onClick={() => setIsZoomed(!isZoomed)}
            className="self-start sm:self-auto px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono-tech text-nb-off-white flex items-center gap-1.5 transition-colors"
          >
            <Maximize2 className="w-3.5 h-3.5 text-nb-orange" />
            <span>{isZoomed ? "Default View" : "Full View"}</span>
          </button>
        </div>

        {/* Screenshot Frame */}
        <div className="w-full flex justify-center items-center">
          {current.type === "desktop" ? (
            /* Desktop Monitor Frame */
            <div className="w-full rounded-2xl bg-nb-black border-2 border-white/15 p-2 shadow-2xl relative overflow-hidden group">
              <div className="rounded-xl overflow-hidden bg-neutral-900 border border-white/10">
                <Image
                  src={current.src}
                  alt={current.title}
                  width={1024}
                  height={466}
                  className={`w-full h-auto object-contain transition-all duration-300 ${
                    isZoomed ? "max-h-[850px]" : "max-h-[580px]"
                  }`}
                  priority={activeScreen === "dashboard"}
                />
              </div>
            </div>
          ) : (
            /* Mobile Phone Frame */
            <div className="w-full max-w-sm rounded-[40px] bg-nb-soft-black border-4 border-white/20 p-3 shadow-2xl space-y-3 relative overflow-hidden">
              {/* Dynamic Island / Speaker Notch */}
              <div className="w-24 h-4 bg-black rounded-full mx-auto flex items-center justify-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-nb-orange" />
                <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
              </div>

              {/* Mobile Screen Image */}
              <div className="rounded-[28px] overflow-hidden bg-neutral-900 border border-white/10">
                <Image
                  src={current.src}
                  alt={current.title}
                  width={342}
                  height={752}
                  className="w-full h-auto object-contain max-h-[620px]"
                />
              </div>
            </div>
          )}
        </div>

        {/* Feature Highlights Grid */}
        <div className="pt-2 border-t border-white/10">
          <span className="text-[10px] font-mono-tech uppercase text-nb-orange font-bold tracking-wider block mb-2.5">
            INTERFACE CAPABILITIES SHOWN:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono-tech">
            {current.highlights.map((h, i) => (
              <div
                key={i}
                className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex items-start gap-2 text-nb-off-white"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-nb-orange mt-0.5 shrink-0" />
                <span className="text-[11px] leading-snug">{h}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Watermark Footer */}
      <div className="bg-nb-black px-4 py-2.5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-1 text-[10px] font-mono-tech text-nb-muted">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-nb-orange animate-pulse" />
          PRODUCTION APPLICATION SHOWCASE // CHITBYTE BY NITHBYTE
        </span>
        <span className="text-nb-muted/70">
          Deployed for chit fund management • Web Admin Console &amp; Mobile Collection Engine
        </span>
      </div>
    </div>
  );
}
