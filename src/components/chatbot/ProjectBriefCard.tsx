"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Check, Copy, ArrowRight, FileText, Sparkles, Layers, Cpu } from "lucide-react";
import { ProjectBriefData } from "@/lib/ai/types";

interface ProjectBriefCardProps {
  brief: ProjectBriefData;
  onCloseChat?: () => void;
}

export default function ProjectBriefCard({ brief, onCloseChat }: ProjectBriefCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const text = `
NITHBYTE PROJECT BRIEF
-----------------------------------------
Project Type: ${brief.projectType}
Business Domain: ${brief.businessType}
Current Stage: ${brief.stage}
Target Platforms: ${brief.platforms.join(", ")}
${brief.aiRequirement ? `AI / Automation: ${brief.aiRequirement}\n` : ""}${brief.commerceRequirement ? `Commerce / Payments: ${brief.commerceRequirement}\n` : ""}
Next Step: Start a technical consultation at https://nithbyte.com/contact
-----------------------------------------
Where Ideas Find Their Code.
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const pipelineStages = [
    { label: "IDEA", status: "DONE" },
    { label: "UNDERSTAND", status: "DONE" },
    { label: "SOLUTION", status: "ACTIVE" },
    { label: "TECHNOLOGY", status: "READY" },
    { label: "CODE", status: "NEXT" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="p-5 sm:p-6 rounded-2xl bg-nb-black border border-nb-orange/40 text-nb-off-white space-y-5 shadow-2xl relative overflow-hidden"
    >
      {/* Ambient Top Glow */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-nb-orange/10 rounded-full blur-2xl pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <div className="flex items-center gap-2">
          <FileText className="w-4 h-4 text-nb-orange" />
          <span className="font-mono-tech text-xs font-bold text-white uppercase tracking-wider">
            SYNTHESIZED PROJECT BRIEF
          </span>
        </div>
        <span className="px-2.5 py-0.5 rounded-full bg-nb-orange/20 text-nb-orange font-mono-tech text-[10px] font-bold">
          READY FOR SCOPING
        </span>
      </div>

      {/* IDEA → SOLUTION → CODE Pipeline Matrix */}
      <div className="p-3 rounded-xl bg-white/5 border border-white/5">
        <div className="flex items-center justify-between text-[10px] font-mono-tech">
          {pipelineStages.map((stage, idx) => (
            <React.Fragment key={stage.label}>
              <div className="flex flex-col items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-nb-orange" />
                <span className="text-nb-muted font-bold">{stage.label}</span>
              </div>
              {idx < pipelineStages.length - 1 && (
                <div className="h-[1px] flex-1 bg-white/20 mx-1 mb-3" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Brief Specs Table */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono-tech">
        <div className="p-3 rounded-xl bg-nb-soft-black border border-white/5 space-y-1">
          <span className="text-[10px] text-nb-muted uppercase block">PROJECT TYPE</span>
          <p className="text-white font-bold">{brief.projectType}</p>
        </div>
        <div className="p-3 rounded-xl bg-nb-soft-black border border-white/5 space-y-1">
          <span className="text-[10px] text-nb-muted uppercase block">BUSINESS DOMAIN</span>
          <p className="text-white font-bold">{brief.businessType}</p>
        </div>
        <div className="p-3 rounded-xl bg-nb-soft-black border border-white/5 space-y-1">
          <span className="text-[10px] text-nb-muted uppercase block">CURRENT STAGE</span>
          <p className="text-nb-orange font-bold">{brief.stage}</p>
        </div>
        <div className="p-3 rounded-xl bg-nb-soft-black border border-white/5 space-y-1">
          <span className="text-[10px] text-nb-muted uppercase block">TARGET PLATFORMS</span>
          <p className="text-white font-bold">{brief.platforms.join(", ")}</p>
        </div>
      </div>

      {/* Conditional AI & Commerce requirements */}
      {(brief.aiRequirement || brief.commerceRequirement) && (
        <div className="p-3 rounded-xl bg-nb-soft-black border border-white/5 text-xs font-mono-tech space-y-2">
          {brief.aiRequirement && (
            <div className="flex items-start gap-2">
              <Sparkles className="w-3.5 h-3.5 text-nb-orange flex-shrink-0 mt-0.5" />
              <p className="text-nb-muted">
                <strong className="text-white">AI / Automation:</strong> {brief.aiRequirement}
              </p>
            </div>
          )}
          {brief.commerceRequirement && (
            <div className="flex items-start gap-2">
              <Layers className="w-3.5 h-3.5 text-nb-orange flex-shrink-0 mt-0.5" />
              <p className="text-nb-muted">
                <strong className="text-white">Commerce:</strong> {brief.commerceRequirement}
              </p>
            </div>
          )}
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 pt-1">
        <Link
          href="/contact"
          onClick={onCloseChat}
          className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-nb-orange text-white font-mono-tech text-xs font-bold hover:bg-nb-deep-orange transition-colors shadow-lg shadow-nb-orange/20"
        >
          <span>Start This Project</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
        <button
          onClick={handleCopy}
          className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-mono-tech text-xs font-semibold border border-white/10 transition-colors"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-green-400" />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-nb-muted" />
              <span>Copy Brief</span>
            </>
          )}
        </button>
      </div>
    </motion.div>
  );
}
