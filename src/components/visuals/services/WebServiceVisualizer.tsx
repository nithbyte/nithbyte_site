"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Globe, Server, Database, Zap, Cpu, ArrowRight, ShieldCheck, Sparkles, Layers } from "lucide-react";

interface NodeProps {
  id: string;
  title: string;
  subtitle: string;
  icon: any;
  tech: string[];
  active: boolean;
  onClick: () => void;
}

function ArchitectureNode({ id, title, subtitle, icon: Icon, tech, active, onClick }: NodeProps) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ y: -2 }}
      className={`p-4 rounded-2xl text-left transition-all duration-200 border flex flex-col justify-between relative overflow-hidden ${
        active
          ? "bg-nb-white dark:bg-nb-soft-black border-nb-orange shadow-lg shadow-nb-orange/20 ring-1 ring-nb-orange"
          : "bg-nb-white/60 dark:bg-white/[0.03] border-black/10 dark:border-white/10 hover:border-nb-orange/50 hover:bg-white dark:hover:bg-white/[0.06]"
      }`}
    >
      <div className="flex items-center justify-between gap-2 mb-3">
        <div className={`p-2 rounded-xl flex items-center justify-center ${
          active ? "bg-nb-orange text-white" : "bg-black/5 dark:bg-white/10 text-nb-graphite dark:text-nb-off-white"
        }`}>
          <Icon className="w-4 h-4" />
        </div>
        <span className="font-mono-tech text-[9px] px-2 py-0.5 rounded-full bg-black/5 dark:bg-white/5 text-nb-muted">
          {id}
        </span>
      </div>

      <div className="space-y-1">
        <h4 className="text-xs sm:text-sm font-bold text-nb-black dark:text-nb-white tracking-tight">
          {title}
        </h4>
        <p className="text-[11px] text-nb-graphite/70 dark:text-nb-muted line-clamp-2">
          {subtitle}
        </p>
      </div>

      <div className="flex flex-wrap gap-1 mt-3 pt-2 border-t border-black/5 dark:border-white/5">
        {tech.map((t) => (
          <span key={t} className="font-mono-tech text-[8px] px-1.5 py-0.5 rounded bg-black/5 dark:bg-white/5 text-nb-muted">
            {t}
          </span>
        ))}
      </div>
    </motion.button>
  );
}

export default function WebServiceVisualizer() {
  const [selectedNode, setSelectedNode] = useState<number>(0);

  const NODES = [
    {
      id: "01 // EDGE",
      title: "Edge DNS & Routing",
      subtitle: "Sub-50ms request handling via global Vercel/Cloudflare Edge Network.",
      icon: Globe,
      tech: ["Edge Middleware", "Geo-Routing", "SSL / TLS 1.3"],
      details: "Inbound requests are intercepted at the closest geographical edge point. Routing logic, A/B variant assignment, and bot filtering execute in <15ms before hitting origin compute.",
    },
    {
      id: "02 // SERVER",
      title: "Next.js App Server",
      subtitle: "Server Component streaming & selective SSR hydration with TypeScript.",
      icon: Server,
      tech: ["React 18 / 19", "RSC Streaming", "Node.js"],
      details: "React Server Components (RSC) render heavy UI trees into lightweight wire format on the server. Zero JavaScript footprint is sent to the client for purely static UI components.",
    },
    {
      id: "03 // DATA",
      title: "Decoupled Data Layer",
      subtitle: "Type-safe PostgreSQL schemas, Supabase Auth, and GraphQL endpoints.",
      icon: Database,
      tech: ["PostgreSQL", "Prisma / Drizzle", "Redis Cache"],
      details: "Automated caching, connection pooling, and optimistic updates provide sub-second query roundtrips with instant rollback safety.",
    },
    {
      id: "04 // CLIENT",
      title: "Fluid UI & Hydration",
      subtitle: "GPU-accelerated micro-interactions, Tailwind tokens, and 60fps animations.",
      icon: Zap,
      tech: ["Tailwind CSS", "Framer Motion", "Lenis Scroll"],
      details: "Selective progressive hydration ensures the critical rendering path is interactive immediately while background analytics load asynchronously.",
    },
  ];

  return (
    <div className="w-full my-8 p-6 sm:p-8 rounded-3xl bg-nb-off-white dark:bg-nb-black border border-black/10 dark:border-white/10 shadow-xl space-y-6 relative overflow-hidden">
      {/* Background Graphic Grid */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-15 pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-nb-orange/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-black/10 dark:border-white/10 pb-4 relative z-10">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-nb-orange shadow-sm shadow-nb-orange" />
            <span className="font-mono-tech text-[10px] text-nb-orange font-bold uppercase tracking-widest">
              INTERACTIVE SYSTEM BLUEPRINT // 01
            </span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-nb-black dark:text-nb-white tracking-tight">
            High-Performance Web Architecture Pipeline
          </h3>
        </div>
        <span className="font-mono-tech text-xs text-nb-muted">
          CLICK NODES TO TRACE FLOW
        </span>
      </div>

      {/* Pipeline Grid & Dynamic Signals */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
        {NODES.map((node, idx) => (
          <ArchitectureNode
            key={node.id}
            {...node}
            active={selectedNode === idx}
            onClick={() => setSelectedNode(idx)}
          />
        ))}
      </div>

      {/* Live Dataflow Active Details Card */}
      <div className="p-5 rounded-2xl bg-nb-white dark:bg-nb-soft-black border border-black/10 dark:border-white/10 space-y-3 relative z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono-tech px-2 py-0.5 rounded bg-nb-orange/15 text-nb-orange font-bold">
              ACTIVE NODE // {NODES[selectedNode].id}
            </span>
            <h4 className="text-xs sm:text-sm font-bold text-nb-black dark:text-nb-white">
              {NODES[selectedNode].title}
            </h4>
          </div>

          <div className="flex items-center gap-1 font-mono-tech text-[10px] text-nb-muted">
            <Sparkles className="w-3 h-3 text-nb-orange" />
            <span>99.9% UPTIME SLA</span>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-nb-graphite/90 dark:text-nb-off-white/90 leading-relaxed font-sans">
          {NODES[selectedNode].details}
        </p>

        {/* Real-time telemetry simulation bar */}
        <div className="pt-2 border-t border-black/5 dark:border-white/5 flex flex-wrap items-center justify-between gap-3 text-[10px] font-mono-tech text-nb-muted">
          <div className="flex items-center gap-2">
            <span>PERFORMANCE:</span>
            <span className="text-green-500 font-bold">LIGHTHOUSE 98+</span>
          </div>
          <div className="flex items-center gap-2">
            <span>CORE WEB VITALS:</span>
            <span className="text-nb-orange font-bold">LCP &lt; 0.8s</span>
          </div>
          <div className="flex items-center gap-2">
            <span>EDGE LATENCY:</span>
            <span className="text-nb-black dark:text-white font-bold">&lt; 35ms</span>
          </div>
        </div>
      </div>
    </div>
  );
}
