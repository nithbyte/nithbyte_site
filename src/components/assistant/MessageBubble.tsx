"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChatMessage, ChatOption, ServicePillar } from "./types";
import SolutionDiagram from "./SolutionDiagram";
import ProjectBriefCard from "./ProjectBriefCard";
import ServiceDiscoveryCard from "./ServiceDiscoveryCard";
import { Bot, ChevronRight, Terminal, User } from "lucide-react";

interface MessageBubbleProps {
  message: ChatMessage;
  onSelectOption: (option: ChatOption) => void;
  onEditBrief?: () => void;
  onStartBriefProject?: () => void;
  onStartServiceProject?: (pillar: ServicePillar) => void;
}

export default function MessageBubble({
  message,
  onSelectOption,
  onEditBrief,
  onStartBriefProject,
  onStartServiceProject,
}: MessageBubbleProps) {
  const isUser = message.sender === "user";
  const isSystem = message.sender === "system";

  // Markdown-like text formatter (bold, lists, linebreaks)
  const formatText = (text: string) => {
    const lines = text.split("\n");
    return lines.map((line, i) => {
      // Bold handling
      const formattedParts = line.split(/(\*\*.*?\*\*)/g).map((part, partIdx) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={partIdx} className="font-semibold text-nb-orange dark:text-nb-orange">
              {part.slice(2, -2)}
            </strong>
          );
        }
        return part;
      });

      // Bullet points
      if (line.trim().startsWith("- ") || line.trim().startsWith("• ")) {
        return (
          <div key={i} className="flex items-start gap-2 my-1 pl-1">
            <span className="text-nb-orange mt-1 text-xs">•</span>
            <span className="flex-1">{formattedParts}</span>
          </div>
        );
      }

      // Numbered lists
      if (/^\d+\.\s/.test(line.trim())) {
        return (
          <div key={i} className="flex items-start gap-2 my-1 pl-1">
            <span className="text-nb-orange font-mono-tech text-xs mt-0.5">{line.match(/^\d+\./)?.[0]}</span>
            <span className="flex-1">{formattedParts}</span>
          </div>
        );
      }

      if (line.trim() === "") {
        return <div key={i} className="h-2" />;
      }

      return (
        <p key={i} className="leading-relaxed">
          {formattedParts}
        </p>
      );
    });
  };

  if (isSystem) {
    return (
      <div className="flex justify-center my-2">
        <span className="font-mono-tech text-[10px] text-nb-muted px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5">
          {message.text}
        </span>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={`flex flex-col ${isUser ? "items-end" : "items-start"} my-2.5 max-w-full`}
    >
      {/* Sender Meta Bar */}
      <div className={`flex items-center gap-1.5 mb-1 px-1 font-mono-tech text-[10px] text-nb-muted`}>
        {isUser ? (
          <>
            <span>YOU</span>
            <span>•</span>
            <span>{message.timestamp}</span>
          </>
        ) : (
          <>
            <span className="text-nb-orange font-bold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-nb-orange" />
              NITHBYTE AI
            </span>
            <span>•</span>
            <span>{message.timestamp}</span>
          </>
        )}
      </div>

      {/* Main Bubble Content */}
      <div
        className={`rounded-2xl px-4 py-3 sm:px-5 sm:py-3.5 text-sm transition-all max-w-[95%] sm:max-w-[88%] ${
          isUser
            ? "bg-nb-orange text-white rounded-tr-sm shadow-md shadow-nb-orange/20 font-sans"
            : "bg-white dark:bg-nb-soft-black text-nb-black dark:text-nb-off-white border border-black/10 dark:border-white/10 rounded-tl-sm shadow-sm"
        }`}
      >
        {message.text && <div className="space-y-1">{formatText(message.text)}</div>}

        {/* Embedded Solution Diagram */}
        {message.solutionData && (
          <SolutionDiagram
            stages={message.solutionData.stages}
            summary={message.solutionData.summary}
          />
        )}

        {/* Embedded Project Brief Card */}
        {message.briefData && (
          <ProjectBriefCard
            brief={message.briefData}
            onEditBrief={onEditBrief}
            onStartProject={onStartBriefProject}
          />
        )}

        {/* Embedded Service Discovery Component */}
        {message.type === "service_discovery" && (
          <ServiceDiscoveryCard
            onStartServiceProject={onStartServiceProject}
          />
        )}

        {/* Embedded Single Service Detail */}
        {message.type === "service_detail" && message.serviceData && (
          <ServiceDiscoveryCard
            initialPillarId={message.serviceData.id}
            onStartServiceProject={onStartServiceProject}
          />
        )}
      </div>

      {/* Interactive Options / Suggested Action Chips */}
      {message.options && message.options.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-3 max-w-full">
          {message.options.map((opt) => (
            <button
              key={opt.id}
              onClick={() => onSelectOption(opt)}
              data-cursor="hover"
              data-cursor-text="SELECT"
              className="px-3.5 py-2 rounded-xl text-xs font-mono-tech text-left bg-white dark:bg-nb-soft-black text-nb-black dark:text-nb-off-white hover:text-white dark:hover:text-white hover:bg-nb-orange dark:hover:bg-nb-orange border border-black/10 dark:border-white/10 hover:border-nb-orange dark:hover:border-nb-orange transition-all duration-150 flex items-center justify-between gap-3 shadow-sm group"
            >
              <div className="flex flex-col">
                <span className="font-semibold">{opt.label}</span>
                {opt.description && (
                  <span className="text-[10px] text-nb-muted group-hover:text-white/80 font-sans font-normal">
                    {opt.description}
                  </span>
                )}
              </div>
              <ChevronRight className="w-3.5 h-3.5 text-nb-muted group-hover:text-white transition-transform group-hover:translate-x-0.5 flex-shrink-0" />
            </button>
          ))}
        </div>
      )}
    </motion.div>
  );
}
