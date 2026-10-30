"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Laptop,
  Smartphone,
  Maximize2,
  Share2,
  LayoutGrid,
  Users,
  ShoppingBag,
  Home,
  CheckCircle2,
  ShieldCheck
} from "lucide-react";

export default function EvoByteMockup({ defaultView = "desktop" }: { defaultView?: "desktop" | "mobile" }) {
  const [activeScreen, setActiveScreen] = useState<
    "admin-networking" | "admin-ops" | "mobile-network" | "mobile-store" | "mobile-home"
  >(defaultView === "mobile" ? "mobile-network" : "admin-networking");
  const [isZoomed, setIsZoomed] = useState(false);

  const screens = {
    "admin-networking": {
      title: "Referral & Networking Administration",
      subtitle: "MANAMM Operations • 12-Stage Career & Benefit Roadmap, Zero-Fee Compliance & Stage Audits",
      type: "desktop",
      src: "/images/products/evobyte/evobyte-networking-admin.jpg",
      badge: "ADMIN CONSOLE // MANAMM OPERATIONS",
      highlights: [
        "MANAMM Zero-Fee Networking Compliance Guard: All stage achievements strictly derive from verified purchases",
        "12-Stage Career & Benefit Roadmap: Stages 1 to 12 (Club Member ₹500 to Crown Champion ₹12,80,000)",
        "Attention Required audit feed: Members awaiting direct referral audit and stage payout approvals (Rajesh Kumar ₹2,500)",
        "Live NestJS REST API backend orchestration with instant operations refresh",
      ],
    },
    "admin-ops": {
      title: "E-Commerce & Operational Dashboard",
      subtitle: "MANAMM Operations • Catalog Provisions, Fulfillment Health & Gross Sales Volume",
      type: "desktop",
      src: "/images/products/evobyte/evobyte-operational-dashboard.png",
      badge: "OPERATIONAL DASHBOARD // MANAMM",
      highlights: [
        "Catalog scale: 7,553 total products active across provisions and partner brand lines",
        "Real-time bookings and sales: 17 customer orders, 155 registered accounts & ₹10,986 gross volume",
        "Recent Orders tracking with one-tap status verification (MNM-2026-1611, Confirmed / Success)",
        "Quick operations hub: Update Catalog & Pricing, Process Shipments, and Review Manual GPay Proofs",
      ],
    },
    "mobile-network": {
      title: "Member Networking & Community Circle",
      subtitle: "MANAMM Member App • Referral Progression, Direct Circle Invites & Milestone Tracking",
      type: "mobile",
      src: "/images/products/evobyte/evobyte-mobile-networking.jpg",
      badge: "MEMBER MOBILE // REFERRAL CIRCLE",
      highlights: [
        "Active referral code generator (MNMF3MTBD) with one-tap copy and direct WhatsApp/SMS invite sharing",
        "Current Milestone tracking: Stage 3 (125 qualifying members, 500 more to reach Stage 4 ₹10,000 benefit)",
        "Direct Referrals Summary: 126 total invited, 125 qualifying members, 1 pending delivery",
        "Visual 12-Stage structure and benefit breakdown accessible directly in-app",
      ],
    },
    "mobile-store": {
      title: "Multi-Category Member Store Directory",
      subtitle: "MANAMM Member App • Categorized Product Catalog, Aisle Search & Instant Cart Add",
      type: "mobile",
      src: "/images/products/evobyte/evobyte-mobile-store.jpg",
      badge: "MEMBER MOBILE // PRODUCT DIRECTORY",
      highlights: [
        "Department directory: Fruits & Veg (139), Dresses (46), Foodgrains (658), Dairy & Bread (188), Snacks (2325)",
        "Price and stock filters: Under ₹100, Under ₹300, and In Stock Only toggles",
        "Visual product cards with weight increments (500 gm, 1 kg) and sub-second '+ Add to Cart'",
        "Seamless bottom navigation between Home, Categories, Cart, Orders, and Profile",
      ],
    },
    "mobile-home": {
      title: "Direct Delivery Home Storefront",
      subtitle: "MANAMM Member App • Department Promotions, Farm-to-Table Selections & Smart Search",
      type: "mobile",
      src: "/images/products/evobyte/evobyte-mobile-home.jpg",
      badge: "MEMBER MOBILE // HOME FEED",
      highlights: [
        "Global product search bar for cross-department catalog discovery (oils, millets, essentials)",
        "Department promotions: Wood-Pressed & Pure Cold-Pressed Oils & Grains carousel",
        "Live store selections featuring real-time stock from verified farms and artisan collections",
        "Direct delivery address and order tracking indicators",
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
            EVOBYTE // MULTI-TENANT NETWORK MARKETING SAAS
          </span>
        </div>

        {/* Screen Selector Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 bg-white/5 p-1 rounded-xl border border-white/5 font-mono-tech text-xs">
          <button
            type="button"
            onClick={() => setActiveScreen("admin-networking")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg whitespace-nowrap transition-all ${
              activeScreen === "admin-networking"
                ? "bg-nb-orange text-white font-bold shadow-md shadow-nb-orange/20"
                : "text-nb-muted hover:text-white"
            }`}
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Networking Admin</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveScreen("admin-ops")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg whitespace-nowrap transition-all ${
              activeScreen === "admin-ops"
                ? "bg-nb-orange text-white font-bold shadow-md shadow-nb-orange/20"
                : "text-nb-muted hover:text-white"
            }`}
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            <span>Ops Dashboard</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveScreen("mobile-network")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg whitespace-nowrap transition-all ${
              activeScreen === "mobile-network"
                ? "bg-nb-orange text-white font-bold shadow-md shadow-nb-orange/20"
                : "text-nb-muted hover:text-white"
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>Member Network</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveScreen("mobile-store")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg whitespace-nowrap transition-all ${
              activeScreen === "mobile-store"
                ? "bg-nb-orange text-white font-bold shadow-md shadow-nb-orange/20"
                : "text-nb-muted hover:text-white"
            }`}
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Store Directory</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveScreen("mobile-home")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg whitespace-nowrap transition-all ${
              activeScreen === "mobile-home"
                ? "bg-nb-orange text-white font-bold shadow-md shadow-nb-orange/20"
                : "text-nb-muted hover:text-white"
            }`}
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home Feed</span>
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
                  height={469}
                  className={`w-full h-auto object-contain transition-all duration-300 ${
                    isZoomed ? "max-h-[850px]" : "max-h-[580px]"
                  }`}
                  priority={activeScreen === "admin-networking"}
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
          PRODUCTION APPLICATION SHOWCASE // EVOBYTE BY NITHBYTE
        </span>
        <span className="text-nb-muted/70">
          Deployed for multi-industry network marketing • Cloud Web Portal &amp; Member Mobile App
        </span>
      </div>
    </div>
  );
}
