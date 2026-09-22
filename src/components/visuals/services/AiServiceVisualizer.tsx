"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Cpu, FileText, Database, Bot, Play, CheckCircle, Sparkles, Terminal } from "lucide-react";

export default function AiServiceVisualizer() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const STAGES = [
    {
      id: "01",
      name: "Context & Raw Data",
      subtitle: "Ingesting private PDFs, documents, CRM logs, and API feeds.",
      icon: FileText,
      tech: ["Unstructured Parsing", "Chunking", "Metadata Tagging"],
    },
    {
      id: "02",
      name: "Vector Embeddings & RAG",
      subtitle: "High-dimensional vector storage with pgvector / Pinecone.",
      icon: Database,
      tech: ["text-embedding-3", "Cosine Similarity", "Hybrid Search"],
    },
    {
      id: "03",
      name: "Agentic Reasoning & Tools",
      subtitle: "Context-aware LLM orchestration with autonomous function calling.",
      icon: Bot,
      tech: ["Function Execution", "Deterministic Guardrails", "Multi-Step Logic"],
    },
    {
      id: "04",
      name: "Structured Output & Action",
      subtitle: "Triggering database mutations, webhook alerts, and validated JSON.",
      icon: Play,
      tech: ["Type-Safe JSON", "Automated Webhooks", "Telemetry Audit"],
    },
  ];

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
              INTERACTIVE SYSTEM BLUEPRINT // 04
            </span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-nb-black dark:text-nb-white tracking-tight">
            Agentic AI & Retrieval-Augmented Generation Pipeline
          </h3>
        </div>
        <span className="font-mono-tech text-xs text-nb-muted">
          SELECT NODE TO INSPECT AI LAYER
        </span>
      </div>

      {/* 4 Pipeline Stages */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
        {STAGES.map((st, idx) => {
          const Icon = st.icon;
          const isSelected = activeStep === idx;
          return (
            <motion.button
              key={st.id}
              type="button"
              onClick={() => setActiveStep(idx)}
              whileHover={{ y: -2 }}
              className={`p-4 rounded-2xl text-left transition-all border flex flex-col justify-between ${
                isSelected
                  ? "bg-nb-white dark:bg-nb-soft-black border-nb-orange shadow-lg shadow-nb-orange/20 ring-1 ring-nb-orange"
                  : "bg-nb-white/60 dark:bg-white/[0.03] border-black/10 dark:border-white/10 hover:border-nb-orange/40 hover:bg-white"
              }`}
            >
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className={`p-2 rounded-xl ${
                  isSelected ? "bg-nb-orange text-white" : "bg-black/5 dark:bg-white/10 text-nb-graphite dark:text-nb-off-white"
                }`}>
                  <Icon className="w-4 h-4" />
                </div>
                <span className="font-mono-tech text-[9px] px-2 py-0.5 rounded-full bg-black/5 dark:bg-white/5 text-nb-muted">
                  STAGE {st.id}
                </span>
              </div>

              <div className="space-y-1">
                <h4 className="text-xs sm:text-sm font-bold text-nb-black dark:text-nb-white">
                  {st.name}
                </h4>
                <p className="text-[11px] text-nb-graphite/70 dark:text-nb-muted line-clamp-2">
                  {st.subtitle}
                </p>
              </div>

              <div className="flex flex-wrap gap-1 mt-3 pt-2 border-t border-black/5 dark:border-white/5">
                {st.tech.map((t) => (
                  <span key={t} className="font-mono-tech text-[8px] px-1.5 py-0.5 rounded bg-black/5 dark:bg-white/5 text-nb-muted">
                    {t}
                  </span>
                ))}
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Live AI Execution Terminal Simulator */}
      <div className="p-5 rounded-2xl bg-nb-black text-nb-off-white border border-white/10 relative z-10 font-mono-tech text-xs space-y-3">
        <div className="flex items-center justify-between border-b border-white/10 pb-2 text-[10px]">
          <div className="flex items-center gap-2 text-nb-orange font-bold">
            <Terminal className="w-3.5 h-3.5" />
            <span>AGENTIC EXECUTION TELEMETRY</span>
          </div>
          <span className="text-nb-muted">LATENCY: ~320ms • ZERO HALLUCINATION GUARD</span>
        </div>

        <div className="space-y-1 text-nb-off-white/80 text-[11px]">
          <p className="text-nb-muted">&gt; [Vector Search]: Retrieved 4 grounded chunks from internal knowledge index.</p>
          <p className="text-nb-muted">&gt; [Tool Dispatch]: Invoking query_inventory_status(sku=&quot;NB-EDGE-90&quot;)...</p>
          <p className="text-nb-orange font-bold">&gt; [Agent Resolution]: Validated schema response generated. Webhook transmitted to CRM.</p>
        </div>
      </div>
    </div>
  );
}
