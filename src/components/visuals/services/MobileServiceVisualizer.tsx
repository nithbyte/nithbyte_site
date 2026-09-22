"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Smartphone, WifiOff, Fingerprint, Bell, RefreshCw, Cpu, Layers, CheckCircle2 } from "lucide-react";

export default function MobileServiceVisualizer() {
  const [activeTab, setActiveTab] = useState<"offline" | "native" | "release">("offline");

  return (
    <div className="w-full my-8 p-6 sm:p-8 rounded-3xl bg-nb-off-white dark:bg-nb-black border border-black/10 dark:border-white/10 shadow-xl space-y-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-blueprint-grid opacity-15 pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-nb-orange/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-black/10 dark:border-white/10 pb-4 relative z-10">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-nb-orange shadow-sm shadow-nb-orange" />
            <span className="font-mono-tech text-[10px] text-nb-orange font-bold uppercase tracking-widest">
              INTERACTIVE SYSTEM BLUEPRINT // 02
            </span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-nb-black dark:text-nb-white tracking-tight">
            Mobile Native Bridge & Offline-First Engine
          </h3>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-1.5 bg-nb-white dark:bg-nb-soft-black p-1 rounded-2xl border border-black/5 dark:border-white/10">
          <button
            onClick={() => setActiveTab("offline")}
            className={`px-3 py-1.5 rounded-xl font-mono-tech text-xs transition-all ${
              activeTab === "offline"
                ? "bg-nb-orange text-white font-bold shadow-md shadow-nb-orange/30"
                : "text-nb-muted hover:text-nb-black dark:hover:text-white"
            }`}
          >
            Offline-First Sync
          </button>
          <button
            onClick={() => setActiveTab("native")}
            className={`px-3 py-1.5 rounded-xl font-mono-tech text-xs transition-all ${
              activeTab === "native"
                ? "bg-nb-orange text-white font-bold shadow-md shadow-nb-orange/30"
                : "text-nb-muted hover:text-nb-black dark:hover:text-white"
            }`}
          >
            Hardware Bridges
          </button>
          <button
            onClick={() => setActiveTab("release")}
            className={`px-3 py-1.5 rounded-xl font-mono-tech text-xs transition-all ${
              activeTab === "release"
                ? "bg-nb-orange text-white font-bold shadow-md shadow-nb-orange/30"
                : "text-nb-muted hover:text-nb-black dark:hover:text-white"
            }`}
          >
            Store Pipelines
          </button>
        </div>
      </div>

      {/* Interactive Visual Graphic */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">
        {/* Left: Interactive Device Frame Vector */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="w-56 sm:w-64 rounded-[36px] bg-nb-black p-3.5 border-4 border-black/20 dark:border-white/20 shadow-2xl relative overflow-hidden">
            {/* Dynamic Island / Notch */}
            <div className="w-20 h-4 bg-black rounded-full mx-auto mb-2 flex items-center justify-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-nb-orange" />
              <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
            </div>

            {/* Screen Content */}
            <div className="rounded-[24px] bg-nb-off-white dark:bg-nb-soft-black p-4 space-y-3 min-h-[300px] flex flex-col justify-between font-sans">
              <div className="space-y-2">
                <div className="flex items-center justify-between font-mono-tech text-[9px] text-nb-muted">
                  <span>9:41 AM</span>
                  <div className="flex items-center gap-1 text-nb-orange">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    <span>60 FPS</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-nb-white dark:bg-white/5 border border-black/5 dark:border-white/10 space-y-1">
                  <span className="font-mono-tech text-[8px] text-nb-orange font-bold uppercase">
                    {activeTab === "offline" ? "LOCAL SQLITE DB" : activeTab === "native" ? "HARDWARE SENSORS" : "TESTFLIGHT / CI/CD"}
                  </span>
                  <p className="text-[10px] font-bold text-nb-black dark:text-white">
                    {activeTab === "offline"
                      ? "Zero-Latency Read & Write"
                      : activeTab === "native"
                      ? "Biometrics & Push Active"
                      : "Build v1.4.2 Deployed"}
                  </p>
                </div>

                {/* Simulated UI list items */}
                <div className="space-y-1.5">
                  <div className="h-6 rounded-lg bg-black/5 dark:bg-white/5 animate-pulse" />
                  <div className="h-6 rounded-lg bg-black/5 dark:bg-white/5 animate-pulse" />
                  <div className="h-6 rounded-lg bg-black/5 dark:bg-white/5 animate-pulse" />
                </div>
              </div>

              {/* Bottom Nav Mockup */}
              <div className="pt-2 border-t border-black/5 dark:border-white/5 flex items-center justify-around text-nb-muted">
                <Smartphone className="w-4 h-4 text-nb-orange" />
                <Fingerprint className="w-4 h-4" />
                <Bell className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>

        {/* Right: Technical Explanation Nodes */}
        <div className="lg:col-span-7 space-y-3">
          {activeTab === "offline" && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-3"
            >
              <div className="p-4 rounded-2xl bg-nb-white dark:bg-nb-soft-black border border-black/10 dark:border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono-tech text-nb-orange font-bold">
                  <WifiOff className="w-4 h-4" />
                  <span>OFFLINE-FIRST SYNCHRONIZATION</span>
                </div>
                <p className="text-xs text-nb-graphite/90 dark:text-nb-off-white/90 leading-relaxed">
                  Every user action writes directly to an embedded SQLite datastore in under 5 milliseconds. When network connectivity drops, users continue seamless operations.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-nb-white dark:bg-nb-soft-black border border-black/10 dark:border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono-tech text-nb-black dark:text-white font-bold">
                  <RefreshCw className="w-4 h-4 text-nb-orange" />
                  <span>AUTOMATED CONFLICT RESOLUTION</span>
                </div>
                <p className="text-xs text-nb-graphite/90 dark:text-nb-off-white/90 leading-relaxed">
                  Upon network restoration, delta reconciliation syncs queued mutations to the cloud server with timestamp-based deterministic state resolution.
                </p>
              </div>
            </motion.div>
          )}

          {activeTab === "native" && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-3"
            >
              <div className="p-4 rounded-2xl bg-nb-white dark:bg-nb-soft-black border border-black/10 dark:border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono-tech text-nb-orange font-bold">
                  <Fingerprint className="w-4 h-4" />
                  <span>HARDWARE & BIOMETRIC BRIDGES</span>
                </div>
                <p className="text-xs text-nb-graphite/90 dark:text-nb-off-white/90 leading-relaxed">
                  Deep integration with FaceID, TouchID, Secure Enclave, camera sensors, and low-energy Bluetooth protocols with native performance parity.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-nb-white dark:bg-nb-soft-black border border-black/10 dark:border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono-tech text-nb-black dark:text-white font-bold">
                  <Bell className="w-4 h-4 text-nb-orange" />
                  <span>RICH PUSH NOTIFICATION ENGINE</span>
                </div>
                <p className="text-xs text-nb-graphite/90 dark:text-nb-off-white/90 leading-relaxed">
                  APNs & FCM payload delivery with interactive notification actions, background badge refresh, and deep-linking to specific application views.
                </p>
              </div>
            </motion.div>
          )}

          {activeTab === "release" && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-3"
            >
              <div className="p-4 rounded-2xl bg-nb-white dark:bg-nb-soft-black border border-black/10 dark:border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono-tech text-nb-orange font-bold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>AUTOMATED STORE SUBMISSIONS</span>
                </div>
                <p className="text-xs text-nb-graphite/90 dark:text-nb-off-white/90 leading-relaxed">
                  Fastlane and GitHub Actions automate code signing, TestFlight beta distribution, and Google Play Console release management for seamless updates.
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
