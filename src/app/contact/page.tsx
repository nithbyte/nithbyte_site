"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import SignalBadge from "@/components/ui/SignalBadge";
import SectionHeader from "@/components/ui/SectionHeader";
import OrangeSignal from "@/components/interactions/OrangeSignal";
import { ArrowUpRight, CheckCircle2, Mail, Send, Terminal, Sparkles, FileText, Check, Instagram, Facebook } from "lucide-react";

const PROJECT_TYPES = [
  "Web Platform / Next.js",
  "Mobile Application",
  "E-commerce",
  "AI & Automation",
  "SaaS / Digital Product",
  "Custom Software",
  "Something Else"
];

const PROJECT_STAGES = [
  "Early Concept / Idea",
  "Architecture Planning",
  "Existing Product Refresh",
  "Scaling & Optimization",
  "Full Ground-Up Build"
];

const BUDGET_RANGES = [
  "Flexible / Discovery",
  "< ₹50,000",
  "₹50,000 - ₹2,00,000",
  "₹2,00,000 - ₹5,00,000",
  "₹5,00,000+"
];

function ContactFormContent() {
  const searchParams = useSearchParams();
  const [hasImportedBrief, setHasImportedBrief] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    country: "",
    projectType: "Web Platform / Next.js",
    projectStage: "Early Concept / Idea",
    budget: "Flexible / Discovery",
    description: "",
  });

  useEffect(() => {
    const paramType = searchParams.get("type");
    const paramStage = searchParams.get("stage");
    const paramDesc = searchParams.get("description");

    if (paramType || paramStage || paramDesc) {
      setFormData((prev) => ({
        ...prev,
        projectType: paramType || prev.projectType,
        projectStage: paramStage || prev.projectStage,
        description: paramDesc || prev.description,
      }));
      setHasImportedBrief(true);
    }
  }, [searchParams]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit inquiry. Please try again.");
      }

      setIsSubmitted(true);
    } catch (err: any) {
      console.error("Submission error:", err);
      setErrorMessage(err.message || "An unexpected error occurred. You can still reach us via email.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleMailtoFallback = () => {
    const subject = encodeURIComponent(`Project Inquiry: ${formData.projectType} — ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Business Email: ${formData.email}\n` +
      `Company: ${formData.company || "N/A"}\n` +
      `Country: ${formData.country || "N/A"}\n` +
      `Project Type: ${formData.projectType}\n` +
      `Project Stage: ${formData.projectStage}\n` +
      `Budget Range: ${formData.budget}\n\n` +
      `Project Description:\n${formData.description}`
    );
    window.location.href = `mailto:nithbyte@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="pt-32 pb-24 space-y-24">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="border-b border-black/10 dark:border-white/10 pb-16 space-y-6 max-w-4xl">
          <SignalBadge label="PROJECT ENQUIRY" tag="INITIATE" />
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-nb-black dark:text-nb-white leading-[1.02]">
            Have an idea <span className="text-nb-orange">worth building?</span>
          </h1>
          <p className="text-lg sm:text-2xl text-nb-graphite/90 dark:text-nb-muted font-light leading-relaxed">
            Tell us about your product goals, technical constraints, or system requirements. Our engineering team reviews inquiries within 24 hours.
          </p>
        </div>
      </section>

      {/* Main Form & Inquiries Info */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Interactive Project Enquiry Form */}
          <div className="lg:col-span-8">
            <div className="p-8 sm:p-12 rounded-3xl bg-nb-white dark:bg-nb-soft-black border border-black/10 dark:border-white/10 shadow-sm space-y-8">
              {hasImportedBrief && (
                <div className="p-4 rounded-2xl bg-nb-orange/10 border border-nb-orange/30 flex items-center justify-between gap-3 font-mono-tech text-xs">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-nb-orange animate-pulse" />
                    <span className="font-bold text-nb-orange uppercase tracking-wider">
                      SPECIFICATION IMPORTED FROM NITHBYTE AI
                    </span>
                  </div>
                  <span className="text-[10px] text-nb-muted hidden sm:inline">
                    FORM PRE-POPULATED
                  </span>
                </div>
              )}

              {isSubmitted ? (
                <div className="py-16 text-center space-y-6">
                  <div className="w-16 h-16 rounded-full bg-nb-orange/10 border border-nb-orange/30 mx-auto flex items-center justify-center text-nb-orange">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl sm:text-3xl font-bold text-nb-black dark:text-nb-white">
                      Enquiry Successfully Transmitted
                    </h3>
                    <p className="text-sm text-nb-graphite dark:text-nb-muted max-w-md mx-auto">
                      Thank you! Your project requirements have been routed directly to the NithByte engineering team. We will review and respond within 24 business hours.
                    </p>
                  </div>
                  <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          company: "",
                          country: "",
                          projectType: "Web Platform / Next.js",
                          projectStage: "Early Concept / Idea",
                          budget: "Flexible / Discovery",
                          description: "",
                        });
                      }}
                      className="px-6 py-2.5 rounded-full bg-nb-black dark:bg-nb-orange text-white text-xs font-mono-tech uppercase font-bold hover:bg-nb-orange dark:hover:bg-nb-deep-orange transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                    <a
                      href="mailto:nithbyte@gmail.com"
                      className="px-6 py-2.5 rounded-full bg-black/5 dark:bg-white/5 text-nb-black dark:text-nb-off-white border border-black/10 dark:border-white/10 text-xs font-mono-tech hover:border-nb-orange transition-colors"
                    >
                      Direct Mail fallback
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Step 1: Personal / Company Details */}
                  <div className="space-y-4">
                    <span className="text-xs font-mono-tech text-nb-orange font-bold uppercase tracking-wider">
                      01 // YOUR DETAILS
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-mono-tech text-nb-graphite dark:text-nb-off-white font-semibold">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Alex Morgan"
                          className="w-full px-4 py-3 rounded-xl bg-nb-off-white dark:bg-white/5 border border-black/10 dark:border-white/10 text-nb-black dark:text-nb-off-white text-sm focus:outline-none focus:border-nb-orange transition-colors"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-mono-tech text-nb-graphite dark:text-nb-off-white font-semibold">
                          Business Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="alex@company.com"
                          className="w-full px-4 py-3 rounded-xl bg-nb-off-white dark:bg-white/5 border border-black/10 dark:border-white/10 text-nb-black dark:text-nb-off-white text-sm focus:outline-none focus:border-nb-orange transition-colors"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-mono-tech text-nb-graphite dark:text-nb-off-white font-semibold">
                          Company / Organization
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="e.g. Acme Corp"
                          className="w-full px-4 py-3 rounded-xl bg-nb-off-white dark:bg-white/5 border border-black/10 dark:border-white/10 text-nb-black dark:text-nb-off-white text-sm focus:outline-none focus:border-nb-orange transition-colors"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-mono-tech text-nb-graphite dark:text-nb-off-white font-semibold">
                          Country / Timezone
                        </label>
                        <input
                          type="text"
                          value={formData.country}
                          onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                          placeholder="e.g. United States / UTC-5"
                          className="w-full px-4 py-3 rounded-xl bg-nb-off-white dark:bg-white/5 border border-black/10 dark:border-white/10 text-nb-black dark:text-nb-off-white text-sm focus:outline-none focus:border-nb-orange transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Step 2: What are you building? */}
                  <div className="space-y-3 pt-4 border-t border-black/5 dark:border-white/10">
                    <span className="text-xs font-mono-tech text-nb-orange font-bold uppercase tracking-wider">
                      02 // WHAT ARE YOU BUILDING?
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {PROJECT_TYPES.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setFormData({ ...formData, projectType: type })}
                          className={`px-4 py-2.5 rounded-xl text-xs font-mono-tech transition-colors ${
                            formData.projectType === type
                              ? "bg-nb-black text-white dark:bg-nb-orange dark:text-white font-bold shadow-md shadow-black/10"
                              : "bg-nb-off-white dark:bg-white/5 text-nb-graphite dark:text-nb-off-white border border-black/10 dark:border-white/10 hover:border-nb-orange/40"
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Step 3: Project Stage */}
                  <div className="space-y-3 pt-4 border-t border-black/5 dark:border-white/10">
                    <span className="text-xs font-mono-tech text-nb-orange font-bold uppercase tracking-wider">
                      03 // CURRENT PROJECT STAGE
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {PROJECT_STAGES.map((stage) => (
                        <button
                          key={stage}
                          type="button"
                          onClick={() => setFormData({ ...formData, projectStage: stage })}
                          className={`px-4 py-2.5 rounded-xl text-xs font-mono-tech transition-colors ${
                            formData.projectStage === stage
                              ? "bg-nb-black text-white dark:bg-nb-orange dark:text-white font-bold shadow-md shadow-black/10"
                              : "bg-nb-off-white dark:bg-white/5 text-nb-graphite dark:text-nb-off-white border border-black/10 dark:border-white/10 hover:border-nb-orange/40"
                          }`}
                        >
                          {stage}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Step 4: Budget Range */}
                  <div className="space-y-3 pt-4 border-t border-black/5 dark:border-white/10">
                    <span className="text-xs font-mono-tech text-nb-orange font-bold uppercase tracking-wider">
                      04 // ESTIMATED BUDGET (OPTIONAL)
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {BUDGET_RANGES.map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setFormData({ ...formData, budget: b })}
                          className={`px-4 py-2.5 rounded-xl text-xs font-mono-tech transition-colors ${
                            formData.budget === b
                              ? "bg-nb-black text-white dark:bg-nb-orange dark:text-white font-bold shadow-md shadow-black/10"
                              : "bg-nb-off-white dark:bg-white/5 text-nb-graphite dark:text-nb-off-white border border-black/10 dark:border-white/10 hover:border-nb-orange/40"
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Step 5: Description */}
                  <div className="space-y-2 pt-4 border-t border-black/5 dark:border-white/10">
                    <span className="text-xs font-mono-tech text-nb-orange font-bold uppercase tracking-wider">
                      05 // PROJECT SCOPE & GOALS
                    </span>
                    <textarea
                      required
                      rows={4}
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Describe your product vision, key features, target timeline, or technical requirements..."
                      className="w-full px-4 py-3 rounded-xl bg-nb-off-white dark:bg-white/5 border border-black/10 dark:border-white/10 text-nb-black dark:text-nb-off-white text-sm focus:outline-none focus:border-nb-orange transition-colors"
                    />
                  </div>

                  {/* Error Notification with Fallback */}
                  {errorMessage && (
                    <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/30 text-xs font-mono-tech text-red-400 space-y-2">
                      <div className="flex items-center gap-2 font-bold">
                        <span className="w-2 h-2 rounded-full bg-red-500" />
                        <span>TRANSMISSION FAILED</span>
                      </div>
                      <p className="font-sans text-nb-off-white/90">{errorMessage}</p>
                      <button
                        type="button"
                        onClick={handleMailtoFallback}
                        className="inline-flex items-center gap-1.5 text-nb-orange underline hover:text-nb-deep-orange font-bold pt-1"
                      >
                        Click here to transmit via your mail client directly →
                      </button>
                    </div>
                  )}

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-full bg-nb-orange text-nb-white font-mono-tech font-bold tracking-wider hover:bg-nb-deep-orange disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-xl shadow-nb-orange/20 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Transmitting Architecture Spec...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Transmit Project Enquiry</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right: Direct Information Box */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-8 rounded-3xl bg-nb-black text-nb-off-white border border-white/10 space-y-6 font-mono-tech text-xs">
              <div className="flex items-center gap-2 text-nb-orange font-bold">
                <Terminal className="w-4 h-4" />
                <span>DIRECT SYSTEM ACCESS</span>
              </div>

              <div className="space-y-3">
                <span className="text-nb-muted uppercase block">DIRECT EMAIL:</span>
                <a
                  href="mailto:nithbyte@gmail.com"
                  className="text-base text-white font-bold hover:text-nb-orange transition-colors block"
                >
                  nithbyte@gmail.com
                </a>
              </div>

              <div className="space-y-3 pt-4 border-t border-white/10">
                <span className="text-nb-muted uppercase block">OFFICIAL CHANNELS:</span>
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.instagram.com/nithbyte_official"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-nb-orange hover:text-white border border-white/10 text-nb-off-white text-xs transition-colors"
                  >
                    <Instagram className="w-3.5 h-3.5" />
                    <span>Instagram</span>
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=61594737716582"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-nb-orange hover:text-white border border-white/10 text-nb-off-white text-xs transition-colors"
                  >
                    <Facebook className="w-3.5 h-3.5" />
                    <span>Facebook</span>
                  </a>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-white/10">
                <span className="text-nb-muted uppercase block">TURNAROUND SLA:</span>
                <p className="text-nb-off-white font-medium">
                  We review incoming architecture proposals and respond within 24 business hours.
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-white/10">
                <span className="text-nb-muted uppercase block">CONFIDENTIALITY:</span>
                <p className="text-nb-off-white font-medium">
                  All shared concepts, requirements, and domain logic are treated with complete NDA confidentiality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center font-mono-tech text-xs text-nb-orange">
          <span className="animate-pulse">LOADING CONTACT INTERFACE...</span>
        </div>
      }
    >
      <ContactFormContent />
    </Suspense>
  );
}

