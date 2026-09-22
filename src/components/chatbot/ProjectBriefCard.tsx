"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Check, Copy, ArrowRight, FileText, Sparkles, Layers, Cpu } from "lucide-react";
import { ProjectBriefData } from "@/lib/ai/types";

interface ProjectBriefCardProps {
  brief: ProjectBriefData;
  onCloseChat?: () => void;
}

export default function ProjectBriefCard({ brief, onCloseChat }: ProjectBriefCardProps) {
  const [copied, setCopied] = useState(false);
  const router = useRouter();

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

  const handleStartProject = (e: React.MouseEvent) => {
    e.preventDefault();

    // Map project type to contact form options
    let mappedType = "Web Platform / Next.js";
    const pt = (brief.projectType + " " + brief.platforms.join(" ")).toLowerCase();
    if (pt.includes("commerce") || pt.includes("store") || pt.includes("shop")) {
      mappedType = "E-commerce";
    } else if (pt.includes("mobile") || pt.includes("ios") || pt.includes("android") || pt.includes("app")) {
      mappedType = "Mobile Application";
    } else if (pt.includes("ai") || pt.includes("automation") || pt.includes("copilot") || pt.includes("intelligence")) {
      mappedType = "AI & Automation";
    } else if (pt.includes("saas") || pt.includes("product")) {
      mappedType = "SaaS / Digital Product";
    } else if (pt.includes("custom software") || pt.includes("internal")) {
      mappedType = "Custom Software";
    }

    // Map project stage
    let mappedStage = "Early Concept / Idea";
    const st = (brief.stage || "").toLowerCase();
    if (st.includes("plan") || st.includes("architecture")) {
      mappedStage = "Architecture Planning";
    } else if (st.includes("refresh") || st.includes("redesign") || st.includes("existing")) {
      mappedStage = "Existing Product Refresh";
    } else if (st.includes("scale") || st.includes("optimization")) {
      mappedStage = "Scaling & Optimization";
    } else if (st.includes("build") || st.includes("ground-up")) {
      mappedStage = "Full Ground-Up Build";
    }

    // Format rich description with synthesized bullet points
    const descriptionText = [
      `[NITHBYTE AI SYNTHESIZED PROJECT BRIEF]`,
      `• Project Type: ${brief.projectType}`,
      `• Business Domain: ${brief.businessType}`,
      `• Current Stage: ${brief.stage}`,
      `• Target Platforms: ${brief.platforms.join(", ")}`,
      brief.aiRequirement ? `• AI / Automation: ${brief.aiRequirement}` : null,
      brief.commerceRequirement ? `• Commerce / Payments: ${brief.commerceRequirement}` : null,
      brief.potentialCapabilities?.length ? `• Potential Capabilities: ${brief.potentialCapabilities.join(", ")}` : null,
    ].filter(Boolean).join("\n");

    const briefPayload = {
      projectType: mappedType,
      projectStage: mappedStage,
      description: descriptionText,
    };

    // Save to sessionStorage so it persists across page changes
    try {
      sessionStorage.setItem("nithbyte_active_project_brief", JSON.stringify(briefPayload));
    } catch {
      // ignore
    }

    // Dispatch global event for instant form update if user is already on /contact
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("nithbyte_apply_brief", { detail: briefPayload }));
    }

    // Close chatbot panel
    onCloseChat?.();

    // Navigate to /contact or scroll directly to form
    if (typeof window !== "undefined" && window.location.pathname === "/contact") {
      const formEl = document.getElementById("enquiry-form") || document.querySelector("form");
      if (formEl) {
        formEl.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push(`/contact?type=${encodeURIComponent(mappedType)}&stage=${encodeURIComponent(mappedStage)}`);
    }
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
        <button
          onClick={handleStartProject}
          className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-nb-orange text-white font-mono-tech text-xs font-bold hover:bg-nb-deep-orange transition-colors shadow-lg shadow-nb-orange/20 cursor-pointer"
        >
          <span>Start This Project</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
        <button
          onClick={handleCopy}
          className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-mono-tech text-xs font-semibold border border-white/10 transition-colors cursor-pointer"
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
