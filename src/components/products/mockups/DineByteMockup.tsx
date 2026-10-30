"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Laptop,
  Smartphone,
  Maximize2,
  UtensilsCrossed,
  LayoutGrid,
  Sparkles,
  CheckCircle2,
  Users
} from "lucide-react";

export default function DineByteMockup({ defaultView = "desktop" }: { defaultView?: "desktop" | "mobile" }) {
  const [activeScreen, setActiveScreen] = useState<"pos" | "tables" | "mobile-tables" | "mobile-seat">(
    defaultView === "mobile" ? "mobile-tables" : "pos"
  );
  const [isZoomed, setIsZoomed] = useState(false);

  const screens = {
    pos: {
      title: "POS Billing Terminal",
      subtitle: "Ponnees Kitchen • Live Fast-Punch Billing, Itemized Cart & Instant Settlement",
      type: "desktop",
      src: "/images/products/dinebyte/dinebyte-pos-billing.jpg",
      badge: "LIVE REGISTER // PONNEES KITCHEN",
      highlights: [
        "Category sidebar: Biryani, Parotta, Starters, Curries, Tiffin",
        "Visual dish cards with food type indicator (Veg/Non-Veg) & parcel packaging fee",
        "Itemized current order cart with one-tap modifier notes and quantities",
        "Automated CGST (2.5%) + SGST (2.5%) & Hotkey Settlement (F4)",
      ],
    },
    tables: {
      title: "Dine-In & Table Floor Management",
      subtitle: "Arya Bhavan • Real-Time Table Occupancy, Section Filters & Session Lifecycle",
      type: "desktop",
      src: "/images/products/dinebyte/dinebyte-table-management.jpg",
      badge: "TABLE DASHBOARD // ARYA BHAVAN",
      highlights: [
        "Live status counters: Total Tables, Available (Green), Occupied (Orange)",
        "Section filters: Indoor, AC Hall, Outdoor, Family Dining",
        "Visual table cards with guest capacities, live bill values & ordering rounds",
        "One-tap 'Seat Guests', 'Manage Orders', and 'Settle & Close' actions",
      ],
    },
    "mobile-tables": {
      title: "Captain Handheld Table Navigator",
      subtitle: "Arya Bhavan • Table-Side Availability Radar & Quick Guest Seating",
      type: "mobile",
      src: "/images/products/dinebyte/dinebyte-mobile-tables.jpg",
      badge: "MOBILE APP // TABLE OVERVIEW",
      highlights: [
        "Live online cloud sync with head-office POS cashier",
        "Visual 4-Pax and 6-Pax table shapes with real-time occupancy badges",
        "Quick area filters (Indoor, AC Hall, Outdoor)",
        "Bottom navigation: Tables, Active Orders, and Server Profile",
      ],
    },
    "mobile-seat": {
      title: "Table-Side Guest Onboarding Modal",
      subtitle: "Party Size Quick Selector, Guest Details & Direct Order Punch",
      type: "mobile",
      src: "/images/products/dinebyte/dinebyte-mobile-seat-guests.jpg",
      badge: "MOBILE APP // SEAT GUESTS",
      highlights: [
        "Party size buttons: 1, 2, 3, 4, 6, 8 guests with single-tap assignment",
        "Optional guest name, 10-digit mobile number, and special instructions",
        "Direct routing to 'Open Table & Take Order' or 'Seat Guests (Order Later)'",
        "Instant KOT trigger synchronizing table occupancy across all cashier terminals",
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
            DINEBYTE // CLOUD RESTAURANT POS & TABLE ENGINE
          </span>
        </div>

        {/* Screen Selector Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 bg-white/5 p-1 rounded-xl border border-white/5 font-mono-tech text-xs">
          <button
            type="button"
            onClick={() => setActiveScreen("pos")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg whitespace-nowrap transition-all ${
              activeScreen === "pos"
                ? "bg-nb-orange text-white font-bold shadow-md shadow-nb-orange/20"
                : "text-nb-muted hover:text-white"
            }`}
          >
            <Laptop className="w-3.5 h-3.5" />
            <span>POS Billing</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveScreen("tables")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg whitespace-nowrap transition-all ${
              activeScreen === "tables"
                ? "bg-nb-orange text-white font-bold shadow-md shadow-nb-orange/20"
                : "text-nb-muted hover:text-white"
            }`}
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            <span>Table Management</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveScreen("mobile-tables")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg whitespace-nowrap transition-all ${
              activeScreen === "mobile-tables"
                ? "bg-nb-orange text-white font-bold shadow-md shadow-nb-orange/20"
                : "text-nb-muted hover:text-white"
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Captain App</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveScreen("mobile-seat")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg whitespace-nowrap transition-all ${
              activeScreen === "mobile-seat"
                ? "bg-nb-orange text-white font-bold shadow-md shadow-nb-orange/20"
                : "text-nb-muted hover:text-white"
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>Seat Guests Modal</span>
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
                  height={486}
                  className={`w-full h-auto object-contain transition-all duration-300 ${
                    isZoomed ? "max-h-[850px]" : "max-h-[580px]"
                  }`}
                  priority={activeScreen === "pos"}
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
                  width={340}
                  height={750}
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
          PRODUCTION APPLICATION SHOWCASE // DINEBYTE BY NITHBYTE
        </span>
        <span className="text-nb-muted/70">
          Deployed across multi-outlet restaurants • Cloud POS, KDS & Table Floor Suite
        </span>
      </div>
    </div>
  );
}
