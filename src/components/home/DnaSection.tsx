"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import { Code, Palette, Database, Sparkles, ShoppingCart, Zap, CircleDot } from "lucide-react";

interface DnaNode {
  id: string;
  name: string;
  icon: any;
  corePrinciple: string;
  capabilities: string[];
  connections: string[];
}

const DNA_NODES: DnaNode[] = [
  {
    id: "code",
    name: "CODE",
    icon: Code,
    corePrinciple: "Type-safe, low-latency, modular engineering.",
    capabilities: ["Next.js App Router", "TypeScript Strict Mode", "Decoupled APIs"],
    connections: ["design", "data", "ai"]
  },
  {
    id: "design",
    name: "DESIGN",
    icon: Palette,
    corePrinciple: "Editorial typography, tactile ergonomics, and motion storytelling.",
    capabilities: ["Custom Design Systems", "Micro-Interactions", "Responsive Rhythm"],
    connections: ["code", "commerce"]
  },
  {
    id: "data",
    name: "DATA",
    icon: Database,
    corePrinciple: "Structured relational models and real-time state synchronization.",
    capabilities: ["PostgreSQL Schemas", "Redis Caching", "Vector Embeddings"],
    connections: ["code", "ai", "commerce"]
  },
  {
    id: "ai",
    name: "AI",
    icon: Sparkles,
    corePrinciple: "Domain-specific copilots and hallucination-free retrieval pipelines.",
    capabilities: ["Contextual RAG", "Autonomous Agents", "Evaluation Harnesses"],
    connections: ["data", "automation"]
  },
  {
    id: "commerce",
    name: "COMMERCE",
    icon: ShoppingCart,
    corePrinciple: "Sub-second checkout journeys and unified omnichannel inventory.",
    capabilities: ["Headless Storefronts", "Multi-Gateway Flows", "Real-Time Stock"],
    connections: ["design", "data", "automation"]
  },
  {
    id: "automation",
    name: "AUTOMATION",
    icon: Zap,
    corePrinciple: "Autonomous operational background workers replacing manual overhead.",
    capabilities: ["Asynchronous Webhooks", "Zero-Touch Pipelines", "Telemetry Monitoring"],
    connections: ["ai", "commerce", "code"]
  }
];

export default function DnaSection() {
  const [hoveredNodeId, setHoveredNodeId] = useState<string>("code");

  const activeNode = DNA_NODES.find((n) => n.id === hoveredNodeId) || DNA_NODES[0];

  return (
    <section className="py-24 sm:py-32 bg-nb-black text-nb-off-white relative border-b border-white/10 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <SectionHeader
          badgeLabel="SYSTEM DNA"
          badgeTag="INTERCONNECTED ARCHITECTURE"
          title="What NithByte is made of."
          description="NithByte is not a siloed agency—it is an interconnected digital engineering ecosystem where design, code, AI, and commerce reinforce one another."
          dark
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Interactive DNA Node Matrix */}
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {DNA_NODES.map((node) => {
              const isSelected = node.id === hoveredNodeId;
              const isConnected = activeNode.connections.includes(node.id) || isSelected;

              return (
                <div
                  key={node.id}
                  onMouseEnter={() => setHoveredNodeId(node.id)}
                  onClick={() => setHoveredNodeId(node.id)}
                  className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer select-none flex flex-col justify-between aspect-square ${
                    isSelected
                      ? "bg-nb-orange text-nb-white border-nb-orange shadow-xl shadow-nb-orange/20 scale-105"
                      : isConnected
                      ? "bg-nb-soft-black border-nb-orange/40 text-nb-off-white"
                      : "bg-white/5 border-white/5 text-nb-muted opacity-40 hover:opacity-100"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono-tech uppercase font-bold tracking-widest">
                      NODE
                    </span>
                    <CircleDot className={`w-3.5 h-3.5 ${isSelected ? "text-white" : "text-nb-orange"}`} />
                  </div>

                  <div className="my-auto space-y-1">
                    <node.icon className={`w-7 h-7 ${isSelected ? "text-white" : "text-nb-orange"}`} />
                    <p className="font-bold text-lg tracking-tight font-display">
                      {node.name}
                    </p>
                  </div>

                  <span className="text-[10px] font-mono-tech tracking-wider uppercase opacity-80">
                    {isSelected ? "ACTIVE FOCUS" : isConnected ? "CONNECTED" : "AVAILABLE"}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Right: Active DNA Information Panel */}
          <div className="lg:col-span-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeNode.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="p-8 sm:p-10 rounded-3xl bg-nb-soft-black border border-white/10 space-y-6"
              >
                <div className="flex items-center justify-between border-b border-white/10 pb-4 font-mono-tech text-xs">
                  <div className="flex items-center gap-2 text-nb-orange font-bold">
                    <activeNode.icon className="w-4 h-4" />
                    <span>DNA STRAND // {activeNode.name}</span>
                  </div>
                  <span className="text-nb-muted">
                    {activeNode.connections.length} SYNAPSES ACTIVE
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-bold text-nb-white tracking-tight">
                    {activeNode.name} ENGINEERING
                  </h3>
                  <p className="text-base text-nb-muted leading-relaxed">
                    {activeNode.corePrinciple}
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <span className="text-xs font-mono-tech text-nb-orange uppercase tracking-wider font-bold">
                    Integrated System Capabilities:
                  </span>
                  <div className="space-y-2">
                    {activeNode.capabilities.map((cap) => (
                      <div
                        key={cap}
                        className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between text-xs font-mono-tech text-nb-off-white"
                      >
                        <span>{cap}</span>
                        <span className="text-nb-orange">ONLINE</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 border-t border-white/5 flex items-center justify-between text-xs font-mono-tech text-nb-muted">
                  <span>CONNECTED NODES:</span>
                  <span className="text-nb-off-white uppercase font-bold">
                    {activeNode.connections.join(" • ")}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
