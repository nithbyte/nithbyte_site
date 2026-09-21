"use client";

import React, { useState } from "react";
import SignalBadge from "@/components/ui/SignalBadge";
import SectionHeader from "@/components/ui/SectionHeader";
import OrangeSignal from "@/components/interactions/OrangeSignal";
import { ArrowUpRight, CheckCircle2, Mail, Send, Terminal, Sparkles } from "lucide-react";

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
  "< $10,000",
  "$10,000 - $25,000",
  "$25,000 - $50,000",
  "$50,000+"
];

export default function ContactPage() {
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

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Prepare mailto fallback
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

    setIsSubmitted(true);

    // Trigger mail client fallback smoothly
    window.location.href = `mailto:nithbyte@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="pt-32 pb-24 space-y-24">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="border-b border-black/10 pb-16 space-y-6 max-w-4xl">
          <SignalBadge label="PROJECT ENQUIRY" tag="INITIATE" />
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-nb-black leading-[1.02]">
            Have an idea <span className="text-nb-orange">worth building?</span>
          </h1>
          <p className="text-lg sm:text-2xl text-nb-graphite/90 font-light leading-relaxed">
            Tell us about your product goals, technical constraints, or system requirements. Our engineering team reviews inquiries within 24 hours.
          </p>
        </div>
      </section>

      {/* Main Form & Inquiries Info */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Interactive Project Enquiry Form */}
          <div className="lg:col-span-8">
            <div className="p-8 sm:p-12 rounded-3xl bg-nb-white border border-black/10 shadow-sm space-y-8">
              {isSubmitted ? (
                <div className="py-16 text-center space-y-6">
                  <div className="w-16 h-16 rounded-full bg-nb-orange/10 border border-nb-orange/30 mx-auto flex items-center justify-center text-nb-orange">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl sm:text-3xl font-bold text-nb-black">
                      Enquiry Staged for Transmission
                    </h3>
                    <p className="text-sm text-nb-graphite max-w-md mx-auto">
                      Your default mail client was triggered. You can also reach out directly to{" "}
                      <a href="mailto:nithbyte@gmail.com" className="text-nb-orange font-bold underline">
                        nithbyte@gmail.com
                      </a>
                    </p>
                  </div>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 rounded-full bg-nb-black text-white text-xs font-mono-tech uppercase font-bold hover:bg-nb-orange transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
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
                        <label className="text-xs font-mono-tech text-nb-graphite font-semibold">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Alex Morgan"
                          className="w-full px-4 py-3 rounded-xl bg-nb-off-white border border-black/10 text-sm focus:outline-none focus:border-nb-orange transition-colors"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-mono-tech text-nb-graphite font-semibold">
                          Business Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="alex@company.com"
                          className="w-full px-4 py-3 rounded-xl bg-nb-off-white border border-black/10 text-sm focus:outline-none focus:border-nb-orange transition-colors"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-mono-tech text-nb-graphite font-semibold">
                          Company / Organization
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="e.g. Acme Corp"
                          className="w-full px-4 py-3 rounded-xl bg-nb-off-white border border-black/10 text-sm focus:outline-none focus:border-nb-orange transition-colors"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-mono-tech text-nb-graphite font-semibold">
                          Country / Timezone
                        </label>
                        <input
                          type="text"
                          value={formData.country}
                          onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                          placeholder="e.g. United States / UTC-5"
                          className="w-full px-4 py-3 rounded-xl bg-nb-off-white border border-black/10 text-sm focus:outline-none focus:border-nb-orange transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Step 2: What are you building? */}
                  <div className="space-y-3 pt-4 border-t border-black/5">
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
                              ? "bg-nb-black text-white font-bold shadow-md shadow-black/10"
                              : "bg-nb-off-white text-nb-graphite border border-black/10 hover:border-nb-orange/40"
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Step 3: Project Stage */}
                  <div className="space-y-3 pt-4 border-t border-black/5">
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
                              ? "bg-nb-black text-white font-bold shadow-md shadow-black/10"
                              : "bg-nb-off-white text-nb-graphite border border-black/10 hover:border-nb-orange/40"
                          }`}
                        >
                          {stage}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Step 4: Budget Range */}
                  <div className="space-y-3 pt-4 border-t border-black/5">
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
                              ? "bg-nb-black text-white font-bold shadow-md shadow-black/10"
                              : "bg-nb-off-white text-nb-graphite border border-black/10 hover:border-nb-orange/40"
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Step 5: Description */}
                  <div className="space-y-2 pt-4 border-t border-black/5">
                    <span className="text-xs font-mono-tech text-nb-orange font-bold uppercase tracking-wider">
                      05 // PROJECT SCOPE & GOALS
                    </span>
                    <textarea
                      required
                      rows={4}
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Describe your product vision, key features, target timeline, or technical requirements..."
                      className="w-full px-4 py-3 rounded-xl bg-nb-off-white border border-black/10 text-sm focus:outline-none focus:border-nb-orange transition-colors"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full py-4 rounded-full bg-nb-orange text-nb-white font-mono-tech font-bold tracking-wider hover:bg-nb-deep-orange transition-all shadow-xl shadow-nb-orange/20 flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      Transmit Project Enquiry
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
