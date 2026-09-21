"use client";

import React from "react";
import SectionHeader from "../ui/SectionHeader";
import OrangeSignal from "../interactions/OrangeSignal";
import { Globe2, Radio, Compass } from "lucide-react";

const REGIONS = [
  { name: "North America", timezone: "UTC-5 / UTC-8", status: "GLOBAL SYNC" },
  { name: "Europe & UK", timezone: "UTC+0 / UTC+2", status: "GLOBAL SYNC" },
  { name: "Middle East", timezone: "UTC+3 / UTC+4", status: "GLOBAL SYNC" },
  { name: "Asia-Pacific", timezone: "UTC+8 / UTC+10", status: "GLOBAL SYNC" },
];

export default function GlobalReachSection() {
  return (
    <section className="py-24 sm:py-32 bg-nb-off-white relative border-b border-black/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <SectionHeader
          badgeLabel="GLOBAL REACH"
          badgeTag="INTERNATIONAL STANDARDS"
          title="Built here. Designed for everywhere."
          description="We engineer software and digital products adhering to strict international accessibility, security, and performance standards."
        />

        {/* Global Network Visual Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-nb-white border border-black/10 shadow-sm relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Origin & Engineering Culture */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 text-xs font-mono-tech text-nb-black">
                <Radio className="w-3.5 h-3.5 text-nb-orange animate-pulse" />
                <span>ORIGIN POINT // INDIA</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-nb-black tracking-tight leading-tight">
                Global engineering rigor with international communication standards.
              </h3>

              <p className="text-sm sm:text-base text-nb-graphite leading-relaxed">
                Whether collaborating asynchronously across multiple time zones or structuring multi-currency commerce pipelines, our architectures are engineered for worldwide deployment from day one.
              </p>

              <div className="pt-2 grid grid-cols-2 gap-4 font-mono-tech text-xs">
                <div className="p-3.5 rounded-xl bg-nb-off-white border border-black/5">
                  <span className="text-nb-muted block text-[10px]">DEPLOYMENT REGIONS</span>
                  <span className="font-bold text-nb-black">Worldwide Edge CDN</span>
                </div>
                <div className="p-3.5 rounded-xl bg-nb-off-white border border-black/5">
                  <span className="text-nb-muted block text-[10px]">COMMUNICATION</span>
                  <span className="font-bold text-nb-black">International English</span>
                </div>
              </div>
            </div>

            {/* Right: Interactive Region Matrix */}
            <div className="lg:col-span-6 space-y-3">
              {REGIONS.map((r, i) => (
                <div
                  key={r.name}
                  className="p-4 rounded-xl bg-nb-off-white border border-black/5 hover:border-nb-orange/40 transition-colors flex items-center justify-between font-mono-tech text-xs group"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-nb-orange font-bold">0{i + 1}</span>
                    <span className="font-semibold text-nb-black">{r.name}</span>
                  </div>
                  <div className="flex items-center gap-4 text-nb-muted">
                    <span>{r.timezone}</span>
                    <span className="text-[10px] text-nb-orange bg-nb-orange/10 px-2 py-0.5 rounded">
                      {r.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
