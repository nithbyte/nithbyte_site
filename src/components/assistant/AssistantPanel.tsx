"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChatMessage,
  ChatOption,
  GuidedDiscoveryAnswers,
  ProjectBrief,
  ServicePillar,
} from "./types";
import {
  createInitialState,
  generateProjectBrief,
  generateSolutionStages,
  GUIDED_QUESTIONS,
  INITIAL_MESSAGES,
  INITIAL_OPTIONS,
  processUserQuery,
  SERVICE_PILLARS,
} from "./chatEngine";
import MessageBubble from "./MessageBubble";
import {
  ArrowRight,
  Bot,
  Maximize2,
  Minimize2,
  RefreshCw,
  Send,
  Sparkles,
  Terminal,
  X,
} from "lucide-react";
import { useRouter } from "next/navigation";

interface AssistantPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AssistantPanel({ isOpen, onClose }: AssistantPanelProps) {
  const router = useRouter();
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState("");
  const [guidedStep, setGuidedStep] = useState<number>(0); // 0 = not in guided flow, 1..8 = questions
  const [guidedAnswers, setGuidedAnswers] = useState<GuidedDiscoveryAnswers>({});
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-scroll when messages change or typing changes
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      // Auto-focus input on open
      setTimeout(() => {
        textareaRef.current?.focus();
      }, 300);
    }
  }, [isOpen, messages, isTyping]);

  const handleReset = () => {
    setMessages([
      {
        id: `reset-${Date.now()}`,
        sender: "system",
        timestamp: "NOW",
        text: "Conversation reset to initial state.",
      },
      ...INITIAL_MESSAGES,
    ]);
    setGuidedStep(0);
    setGuidedAnswers({});
    setInputValue("");
    setIsTyping(false);
  };

  const simulateAssistantResponse = (newMsgs: ChatMessage[], delay = 450) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [...prev, ...newMsgs]);
    }, delay);
  };

  const handleOptionSelect = (option: ChatOption) => {
    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: "user",
      timestamp: "NOW",
      text: option.label,
    };
    setMessages((prev) => [...prev, userMsg]);

    // Handle "I have an idea" Flow start
    if (option.id === "idea") {
      setGuidedStep(1);
      setGuidedAnswers({});
      const q1 = GUIDED_QUESTIONS[0];
      simulateAssistantResponse([
        {
          id: `guided-step-1`,
          sender: "assistant",
          timestamp: "NOW",
          text: `Great. Let's shape your idea with 8 quick technical qualification questions.\n\n**Question 1 of 8:**\n${q1.question}`,
          type: "options",
          options: q1.options,
        },
      ]);
      return;
    }

    // Handle "Explore your capabilities"
    if (option.id === "capabilities") {
      setGuidedStep(0);
      simulateAssistantResponse([
        {
          id: `cap-intro`,
          sender: "assistant",
          timestamp: "NOW",
          text: "NithByte designs and engineers digital systems across **5 Core Pillars**:\n\n- **BUILD** // Web Development\n- **CONNECT** // Mobile Applications\n- **SELL** // E-commerce\n- **GROW** // Digital Marketing\n- **INTELLIGENCE** // AI & Automation\n\nSelect a pillar to explore its capabilities and deliverables:",
          type: "service_discovery",
        },
      ]);
      return;
    }

    // Handle "I need a website"
    if (option.id === "need_web") {
      setGuidedStep(0);
      simulateAssistantResponse([
        {
          id: `web-intro`,
          sender: "assistant",
          timestamp: "NOW",
          text: "**Web Development & High-Performance Next.js Architectures**\n\nWe build production-grade web platforms with sub-second page delivery, modular Tailwind design systems, and robust API layers.",
          type: "service_detail",
          serviceData: SERVICE_PILLARS.build,
          options: [
            { id: "idea", label: "Customize Specs via Discovery (1 min)" },
            { id: "start_web", label: "Start Web Project Directly →" },
          ],
        },
      ]);
      return;
    }

    // Handle "I need a mobile app"
    if (option.id === "need_mobile") {
      setGuidedStep(0);
      simulateAssistantResponse([
        {
          id: `mob-intro`,
          sender: "assistant",
          timestamp: "NOW",
          text: "**Mobile Applications for iOS & Android**\n\nWe engineer responsive, gesture-rich mobile applications using React Native and Flutter with native hardware integration and offline data sync.",
          type: "service_detail",
          serviceData: SERVICE_PILLARS.connect,
          options: [
            { id: "idea", label: "Customize Specs via Discovery (1 min)" },
            { id: "start_mobile", label: "Start Mobile Project Directly →" },
          ],
        },
      ]);
      return;
    }

    // Handle "I need e-commerce"
    if (option.id === "need_commerce") {
      setGuidedStep(0);
      simulateAssistantResponse([
        {
          id: `ecom-intro`,
          sender: "assistant",
          timestamp: "NOW",
          text: "**Composable Commerce & High-Conversion Storefronts**\n\nWe build headless Shopify Plus and custom cart architectures with Stripe global payments, sub-50ms search, and automated inventory sync.",
          type: "service_detail",
          serviceData: SERVICE_PILLARS.sell,
          options: [
            { id: "idea", label: "Customize Specs via Discovery (1 min)" },
            { id: "start_commerce", label: "Start E-commerce Project Directly →" },
          ],
        },
      ]);
      return;
    }

    // Handle "I want AI / automation"
    if (option.id === "need_ai") {
      setGuidedStep(0);
      simulateAssistantResponse([
        {
          id: `ai-intro`,
          sender: "assistant",
          timestamp: "NOW",
          text: "**AI Integration, Autonomous Agents & Workflows**\n\nWe build custom LLM agents, vector knowledge retrieval (RAG), and automated webhook data pipelines to streamline team operations.",
          type: "service_detail",
          serviceData: SERVICE_PILLARS.intelligence,
          options: [
            { id: "idea", label: "Customize Specs via Discovery (1 min)" },
            { id: "start_ai", label: "Start AI Project Directly →" },
          ],
        },
      ]);
      return;
    }

    // Handle Direct Starting options
    if (
      option.id === "start_web" ||
      option.id === "start_mobile" ||
      option.id === "start_commerce" ||
      option.id === "start_ai" ||
      option.id === "contact_page" ||
      option.id === "contact_direct"
    ) {
      const typeMap: Record<string, string> = {
        start_web: "Web Platform / Next.js",
        start_mobile: "Mobile Application",
        start_commerce: "E-commerce",
        start_ai: "AI & Automation",
      };
      const projectType = typeMap[option.id] || "Digital Product";
      router.push(`/contact?type=${encodeURIComponent(projectType)}`);
      onClose();
      return;
    }

    // Handle Guided Flow steps 1 to 8
    if (guidedStep >= 1 && guidedStep <= 8) {
      const currentStep = guidedStep;
      const updatedAnswers: GuidedDiscoveryAnswers = { ...guidedAnswers };

      if (currentStep === 1) updatedAnswers.projectType = option.label;
      if (currentStep === 2) updatedAnswers.targetAudience = option.label;
      if (currentStep === 3) updatedAnswers.coreProblem = option.label;
      if (currentStep === 4) updatedAnswers.stage = option.label;
      if (currentStep === 5) updatedAnswers.platforms = [option.label];
      if (currentStep === 6) updatedAnswers.aiRequirement = option.label;
      if (currentStep === 7) updatedAnswers.commerceRequirement = option.label;
      if (currentStep === 8) updatedAnswers.existingSystem = option.label;

      setGuidedAnswers(updatedAnswers);

      if (currentStep < 8) {
        const nextStep = currentStep + 1;
        setGuidedStep(nextStep);
        const nextQ = GUIDED_QUESTIONS[nextStep - 1];
        simulateAssistantResponse([
          {
            id: `guided-step-${nextStep}`,
            sender: "assistant",
            timestamp: "NOW",
            text: `**Question ${nextStep} of 8:**\n${nextQ.question}`,
            type: "options",
            options: nextQ.options,
          },
        ]);
      } else {
        // Step 8 completed! Generate High-Level Solution Stages & Project Brief
        setGuidedStep(0);
        const stages = generateSolutionStages(updatedAnswers);
        const brief = generateProjectBrief(updatedAnswers);

        simulateAssistantResponse(
          [
            {
              id: `solution-diagram-${Date.now()}`,
              sender: "assistant",
              timestamp: "NOW",
              text: "Discovery complete! Here is your **High-Level Solution Architecture Blueprint**:",
              type: "solution_diagram",
              solutionData: {
                stages,
                currentActiveIndex: 2,
                summary: `Architecture tailored for ${brief.projectType} targeting ${brief.businessType}.`,
              },
            },
            {
              id: `project-brief-${Date.now()}`,
              sender: "assistant",
              timestamp: "NOW",
              text: "And here is your structured **NITHBYTE PROJECT BRIEF** ready for review and transmission:",
              type: "project_brief",
              briefData: brief,
            },
          ],
          600
        );
      }
      return;
    }

    // Default fallback handling
    const responses = processUserQuery(option.label, guidedAnswers);
    simulateAssistantResponse(responses);
  };

  const handleSendMessage = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const query = inputValue.trim();
    if (!query) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: "user",
      timestamp: "NOW",
      text: query,
    };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");

    // If currently in guided flow step 3 (core problem / description)
    if (guidedStep === 3) {
      const updatedAnswers = { ...guidedAnswers, coreProblem: query };
      setGuidedAnswers(updatedAnswers);
      const nextStep = 4;
      setGuidedStep(nextStep);
      const nextQ = GUIDED_QUESTIONS[nextStep - 1];
      simulateAssistantResponse([
        {
          id: `guided-step-${nextStep}`,
          sender: "assistant",
          timestamp: "NOW",
          text: `Got it. **Question ${nextStep} of 8:**\n${nextQ.question}`,
          type: "options",
          options: nextQ.options,
        },
      ]);
      return;
    }

    // Process general natural language query
    const responses = processUserQuery(query, guidedAnswers);
    simulateAssistantResponse(responses);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleStartBriefProject = () => {
    onClose();
  };

  const handleStartServiceProject = (pillar: ServicePillar) => {
    onClose();
    router.push(`/contact?type=${encodeURIComponent(pillar.title)}`);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-end justify-end pointer-events-none p-0 sm:p-6 md:p-8">
          {/* Mobile backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm sm:hidden pointer-events-auto"
          />

          {/* Assistant Expansion Panel */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.85,
              y: 40,
              clipPath: "circle(5% at 90% 90%)",
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
              clipPath: "circle(150% at 90% 90%)",
            }}
            exit={{
              opacity: 0,
              scale: 0.85,
              y: 30,
              clipPath: "circle(5% at 90% 90%)",
            }}
            transition={{
              type: "spring",
              damping: 26,
              stiffness: 260,
              mass: 0.9,
            }}
            className="relative pointer-events-auto w-full sm:w-[480px] md:w-[540px] h-[92vh] sm:h-[680px] max-h-[92vh] flex flex-col rounded-t-3xl sm:rounded-3xl bg-nb-off-white dark:bg-nb-black border border-black/10 dark:border-white/10 shadow-2xl shadow-black/40 overflow-hidden font-sans select-text"
          >
            {/* Ambient Background Grid and Orange Signal Glow */}
            <div className="absolute inset-0 bg-blueprint-grid opacity-10 pointer-events-none" />
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-nb-orange/15 rounded-full blur-3xl pointer-events-none" />

            {/* Mobile Drag/Indicator Handle */}
            <div className="w-full flex justify-center pt-2.5 pb-1 sm:hidden">
              <div className="w-12 h-1.5 rounded-full bg-black/20 dark:bg-white/20" />
            </div>

            {/* Panel Header */}
            <div className="relative z-10 px-5 py-4 border-b border-black/10 dark:border-white/10 bg-nb-white/80 dark:bg-nb-soft-black/80 backdrop-blur-md flex items-center justify-between">
              <div className="flex items-center gap-3">
                {/* Active Signal Beacon */}
                <div className="relative flex items-center justify-center">
                  <span className="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-nb-orange opacity-70" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-nb-orange shadow-md shadow-nb-orange" />
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="font-mono-tech text-sm font-bold tracking-wider text-nb-black dark:text-white">
                      NITHBYTE AI
                    </h2>
                    <span className="font-mono-tech text-[9px] px-1.5 py-0.5 rounded bg-nb-orange/10 text-nb-orange font-semibold border border-nb-orange/20">
                      LIVE // ASSISTANT
                    </span>
                  </div>
                  <p className="font-mono-tech text-[10px] text-nb-muted">
                    Where ideas find their code.
                  </p>
                </div>
              </div>

              {/* Action Buttons: Reset & Close */}
              <div className="flex items-center gap-1.5">
                <button
                  onClick={handleReset}
                  data-cursor="hover"
                  data-cursor-text="RESET"
                  title="Reset conversation"
                  className="p-2 rounded-xl text-nb-muted hover:text-nb-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
                <button
                  onClick={onClose}
                  data-cursor="hover"
                  data-cursor-text="CLOSE"
                  title="Close Assistant"
                  className="p-2 rounded-xl text-nb-muted hover:text-nb-orange hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Chat Thread Messages Area (Lenis isolated) */}
            <div
              data-lenis-prevent
              className="flex-1 overflow-y-auto px-4 sm:px-5 py-4 space-y-2 relative z-10 scrollbar-thin"
            >
              {messages.map((msg) => (
                <MessageBubble
                  key={msg.id}
                  message={msg}
                  onSelectOption={handleOptionSelect}
                  onEditBrief={() => {
                    setGuidedStep(1);
                    handleOptionSelect({ id: "idea", label: "I have an idea" });
                  }}
                  onStartBriefProject={handleStartBriefProject}
                  onStartServiceProject={handleStartServiceProject}
                />
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white dark:bg-nb-soft-black border border-black/10 dark:border-white/10 w-fit text-nb-muted text-xs font-mono-tech"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-nb-orange animate-ping" />
                  <span>Synthesizing response...</span>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Composer & Controls */}
            <div className="relative z-10 p-3 sm:p-4 border-t border-black/10 dark:border-white/10 bg-nb-white/90 dark:bg-nb-soft-black/90 backdrop-blur-md">
              <form onSubmit={handleSendMessage} className="relative flex items-end gap-2">
                <textarea
                  ref={textareaRef}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask anything or describe your project..."
                  rows={1}
                  className="w-full resize-none max-h-28 px-4 py-3 rounded-2xl bg-nb-off-white dark:bg-black/50 border border-black/10 dark:border-white/10 text-nb-black dark:text-nb-off-white text-xs sm:text-sm focus:outline-none focus:border-nb-orange transition-colors font-sans placeholder:text-nb-muted"
                />

                <button
                  type="submit"
                  disabled={!inputValue.trim()}
                  data-cursor="hover"
                  data-cursor-text="SEND"
                  aria-label="Send message"
                  className="p-3 rounded-2xl bg-nb-orange text-white hover:bg-nb-deep-orange disabled:opacity-40 disabled:hover:bg-nb-orange transition-all shadow-md shadow-nb-orange/20 flex-shrink-0"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>

              {/* Monospace Helper Footer */}
              <div className="flex items-center justify-between pt-2 px-1 text-[9px] font-mono-tech text-nb-muted">
                <span>NITHBYTE AI ENGINE // V1.0</span>
                <span className="hidden sm:inline">Press Enter ↵ to send</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
