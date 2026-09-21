"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ProjectBrief } from "./types";
import { ArrowUpRight, Check, Copy, Edit3, FileText, Send, Sparkles } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface ProjectBriefCardProps {
  brief: ProjectBrief;
  onEditBrief?: () => void;
  onStartProject?: () => void;
}

export default function ProjectBriefCard({
  brief,
  onEditBrief,
  onStartProject,
}: ProjectBriefCardProps) {
  const router = useRouter();
  const [copied, setCopied] = useState(false);

  const formatBriefAsText = () => {
    return (
      `==================================================\n` +
      `NITHBYTE AI — STRUCTURED PROJECT BRIEF\n` +
      `Generated: ${new Date().toLocaleDateString()}\n` +
      `==================================================\n\n` +
      `PROJECT TYPE:\n${brief.projectType}\n\n` +
      `BUSINESS / AUDIENCE:\n${brief.businessType}\n\n` +
      `PROJECT STAGE:\n${brief.projectStage}\n\n` +
      `CORE OBJECTIVE / PROBLEM:\n${brief.coreProblem}\n\n` +
      `REQUIREMENTS:\n${brief.requirements.map((r) => `- ${r}`).join("\n")}\n\n` +
      `SUGGESTED CAPABILITIES:\n${brief.suggestedCapabilities.map((c) => `- ${c}`).join("\n")}\n\n` +
      `POTENTIAL TECHNOLOGY AREAS:\n${brief.potentialTech.map((t) => `- ${t}`).join("\n")}\n\n` +
      `RECOMMENDED NEXT STEP:\n${brief.nextStep}\n\n` +
      `==================================================\n` +
      `NithByte Engineering — Where ideas find their code.\n` +
      `Website: https://nithbyte.com | Email: nithbyte@gmail.com\n`
    );
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(formatBriefAsText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleStartProject = () => {
    if (onStartProject) {
      onStartProject();
    }
    // Encode brief into query parameters for the contact page
    const params = new URLSearchParams({
      type: brief.projectType,
      stage: brief.projectStage,
      description: `[Generated Project Brief via NITHBYTE AI]\n\nTarget Audience: ${brief.businessType}\nCore Problem: ${brief.coreProblem}\n\nRequirements:\n${brief.requirements.map((r) => `• ${r}`).join("\n")}\n\nSuggested Tech Stack:\n${brief.potentialTech.join(", ")}`,
    });
    router.push(`/contact?${params.toString()}`);
  };

  return (
    <div className="w-full my-3.5 p-4 sm:p-6 rounded-2xl bg-nb-black text-nb-off-white border-2 border-nb-orange/40 shadow-2xl relative overflow-hidden font-sans">
      {/* Background Micro Grid */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-15 pointer-events-none" />
      <div className="absolute top-0 right-0 w-32 h-32 bg-nb-orange/20 rounded-full blur-3xl pointer-events-none" />

      {/* Card Header */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-white/10">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-nb-orange text-white flex items-center justify-center font-bold">
            <FileText className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-mono-tech text-xs sm:text-sm font-bold tracking-wider text-nb-white flex items-center gap-2">
              <span>PROJECT BRIEF</span>
              <span className="text-[10px] text-nb-orange font-normal px-2 py-0.5 rounded-full bg-nb-orange/10 border border-nb-orange/20">
                QUALIFIED
              </span>
            </h3>
            <span className="font-mono-tech text-[10px] text-nb-muted">
              SPECIFICATION // NITHBYTE ARCHITECTURE
            </span>
          </div>
        </div>

        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-[10px] font-mono-tech text-nb-off-white/80 hover:text-nb-white transition-colors"
          title="Copy full brief to clipboard"
        >
          {copied ? (
            <>
              <Check className="w-3 h-3 text-green-400" />
              <span className="text-green-400">COPIED</span>
            </>
          ) : (
            <>
              <Copy className="w-3 h-3" />
              <span>COPY BRIEF</span>
            </>
          )}
        </button>
      </div>

      {/* Structured Brief Fields */}
      <div className="relative z-10 py-4 space-y-4 font-mono-tech text-xs">
        {/* Row 1: Project Type & Stage */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
            <span className="text-[10px] text-nb-orange font-bold uppercase tracking-wider block">
              PROJECT TYPE
            </span>
            <p className="text-sm font-bold text-nb-white">{brief.projectType}</p>
          </div>
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
            <span className="text-[10px] text-nb-orange font-bold uppercase tracking-wider block">
              PROJECT STAGE
            </span>
            <p className="text-sm font-bold text-nb-white">{brief.projectStage}</p>
          </div>
        </div>

        {/* Row 2: Target Audience */}
        <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
          <span className="text-[10px] text-nb-orange font-bold uppercase tracking-wider block">
            BUSINESS / TARGET AUDIENCE
          </span>
          <p className="text-xs text-nb-off-white">{brief.businessType}</p>
        </div>

        {/* Row 3: Core Objective / Problem */}
        <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
          <span className="text-[10px] text-nb-orange font-bold uppercase tracking-wider block">
            CORE OBJECTIVE & SCOPE
          </span>
          <p className="text-xs text-nb-off-white/90 font-sans font-normal leading-relaxed">
            {brief.coreProblem}
          </p>
        </div>

        {/* Row 4: Requirements */}
        {brief.requirements.length > 0 && (
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 space-y-2">
            <span className="text-[10px] text-nb-orange font-bold uppercase tracking-wider block">
              IDENTIFIED REQUIREMENTS
            </span>
            <ul className="space-y-1">
              {brief.requirements.map((req, i) => (
                <li key={i} className="text-xs text-nb-off-white/90 flex items-start gap-2">
                  <span className="text-nb-orange mt-0.5">•</span>
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Row 5: Suggested Capabilities */}
        <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 space-y-2">
          <span className="text-[10px] text-nb-orange font-bold uppercase tracking-wider block">
            SUGGESTED NITHBYTE CAPABILITIES
          </span>
          <div className="flex flex-wrap gap-1.5">
            {brief.suggestedCapabilities.map((cap, i) => (
              <span
                key={i}
                className="text-[10px] px-2.5 py-1 rounded-lg bg-nb-orange/15 border border-nb-orange/30 text-nb-off-white"
              >
                {cap}
              </span>
            ))}
          </div>
        </div>

        {/* Row 6: Potential Tech Areas */}
        <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 space-y-2">
          <span className="text-[10px] text-nb-orange font-bold uppercase tracking-wider block">
            POTENTIAL TECHNOLOGY AREAS
          </span>
          <div className="flex flex-wrap gap-1.5">
            {brief.potentialTech.map((tech, i) => (
              <span
                key={i}
                className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-nb-muted"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Row 7: Next Step */}
        <div className="p-3 rounded-xl bg-nb-orange/10 border border-nb-orange/30 space-y-1">
          <span className="text-[10px] text-nb-orange font-bold uppercase tracking-wider block">
            RECOMMENDED NEXT STEP
          </span>
          <p className="text-xs text-nb-white font-sans font-medium">
            {brief.nextStep}
          </p>
        </div>
      </div>

      {/* Actions */}
      <div className="relative z-10 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center gap-3">
        <button
          onClick={handleStartProject}
          className="w-full sm:flex-1 py-3.5 px-4 rounded-xl bg-nb-orange hover:bg-nb-deep-orange text-white font-mono-tech text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-nb-orange/30 group"
        >
          <span>START THIS PROJECT</span>
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>

        {onEditBrief && (
          <button
            onClick={onEditBrief}
            className="w-full sm:w-auto py-3.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-nb-off-white font-mono-tech text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
          >
            <Edit3 className="w-3.5 h-3.5 text-nb-muted" />
            <span>EDIT BRIEF</span>
          </button>
        )}
      </div>
    </div>
  );
}
