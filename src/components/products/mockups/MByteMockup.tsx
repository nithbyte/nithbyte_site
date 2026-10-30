"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Laptop,
  Smartphone,
  Maximize2,
  Activity,
  MapPin,
  Calendar,
  CheckCircle2,
  Users
} from "lucide-react";

export default function MByteMockup({ defaultView = "desktop" }: { defaultView?: "desktop" | "mobile" }) {
  const [activeScreen, setActiveScreen] = useState<"command" | "stock" | "mobile-mr" | "mobile-visits">(
    defaultView === "mobile" ? "mobile-mr" : "command"
  );
  const [isZoomed, setIsZoomed] = useState(false);

  const screens = {
    command: {
      title: "Field Operations Command Center",
      subtitle: "Kovel Designs Operations Hub • Real-Time Telemetry, Call Compliance & Commercial Revenue",
      type: "desktop",
      src: "/images/products/mbyte/mbyte-field-ops-command.jpg",
      badge: "LIVE TELEMETRY // KOVEL DESIGNS",
      highlights: [
        "Live territory telemetry: 100% on-duty coverage, active travel tracking & in-call indicators",
        "Real-time call plan completion metric (9 of 60 calls) with 100% verified GPS compliance",
        "Commercial revenue pulse: ₹10,640 booked across 4 orders & ₹20,000 collections logged",
        "Manager Attention & Triage Board tracking below-target pacing, stockouts, and pending approvals",
      ],
    },
    stock: {
      title: "Product Presence & Stock Intelligence",
      subtitle: "Retail Shelf Audits, Formulations Telemetry & Geospatial Stock Availability Map",
      type: "desktop",
      src: "/images/products/mbyte/mbyte-stock-intelligence.jpg",
      badge: "SHELF AUDIT // GIS TELEMETRY",
      highlights: [
        "32 retail shelf audits logged with 91% aggregate availability health score",
        "Live status categorization: Available (29), Low Stock replenishment alerts (1), and Out of Stock (2)",
        "Multi-parameter telemetry filters by Product Formulation, Territory Zone, MR, and Pharmacy",
        "Geospatial GIS retail shelf stock map with interactive coordinate pins across target regions",
      ],
    },
    "mobile-mr": {
      title: "Medical Representative Workspace",
      subtitle: "Field Rep Handheld Hub • Daily Performance Targets, Beat Access & Detailing Library",
      type: "mobile",
      src: "/images/products/mbyte/mbyte-mr-workspace.jpg",
      badge: "MR MOBILE // DAILY WORKSPACE",
      highlights: [
        "Personalized MR profile card with Emp ID, assigned territory (Chennai) & performance targets",
        "Today's Field Visits card with daily call goal (10 scheduled calls) and live completion pacing",
        "One-tap direct access to Doctor Directory master catalog and assigned chemist touchpoints",
        "Integrated Visual Aids Library with 8 interactive e-detailing slide decks for in-clinic detailing",
      ],
    },
    "mobile-visits": {
      title: "Today's Visits & Daily Beat Planner",
      subtitle: "Daily Beat Schedule • Geofenced Doctor Visits, Call Reporting & DCR Submission",
      type: "mobile",
      src: "/images/products/mbyte/mbyte-todays-visits.jpg",
      badge: "MR MOBILE // BEAT SCHEDULE",
      highlights: [
        "Route-based field schedule (Central Territory Clinics) with Monthly Tour Plan (MTP) link",
        "Live visit status counters: Total (2), Completed (0), Active (0), and Pending (2)",
        "Structured Doctor Cards with tier categorization (Dr. Lekshmi V, Dermatology | Tier A)",
        "Geofenced check-in tracking, planned detailing notes, and end-of-day DCR report draft trigger",
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
            MBYTE // PHARMA CLOUD OPS & FIELD FORCE AUTOMATION
          </span>
        </div>

        {/* Screen Selector Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 bg-white/5 p-1 rounded-xl border border-white/5 font-mono-tech text-xs">
          <button
            type="button"
            onClick={() => setActiveScreen("command")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg whitespace-nowrap transition-all ${
              activeScreen === "command"
                ? "bg-nb-orange text-white font-bold shadow-md shadow-nb-orange/20"
                : "text-nb-muted hover:text-white"
            }`}
          >
            <Laptop className="w-3.5 h-3.5" />
            <span>Field Ops Command</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveScreen("stock")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg whitespace-nowrap transition-all ${
              activeScreen === "stock"
                ? "bg-nb-orange text-white font-bold shadow-md shadow-nb-orange/20"
                : "text-nb-muted hover:text-white"
            }`}
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>Stock Intelligence</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveScreen("mobile-mr")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg whitespace-nowrap transition-all ${
              activeScreen === "mobile-mr"
                ? "bg-nb-orange text-white font-bold shadow-md shadow-nb-orange/20"
                : "text-nb-muted hover:text-white"
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>MR Workspace</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveScreen("mobile-visits")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg whitespace-nowrap transition-all ${
              activeScreen === "mobile-visits"
                ? "bg-nb-orange text-white font-bold shadow-md shadow-nb-orange/20"
                : "text-nb-muted hover:text-white"
            }`}
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Today&apos;s Visits</span>
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
                  height={464}
                  className={`w-full h-auto object-contain transition-all duration-300 ${
                    isZoomed ? "max-h-[850px]" : "max-h-[580px]"
                  }`}
                  priority={activeScreen === "command"}
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
                  width={460}
                  height={1024}
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
          PRODUCTION APPLICATION SHOWCASE // MBYTE BY NITHBYTE
        </span>
        <span className="text-nb-muted/70">
          Deployed for pharmaceutical field operations • Cloud Web Console & MR Mobile App
        </span>
      </div>
    </div>
  );
}
