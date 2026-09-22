import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import SignalBadge from "@/components/ui/SignalBadge";
import SectionHeader from "@/components/ui/SectionHeader";
import MagneticButton from "@/components/interactions/MagneticButton";
import { PROJECTS } from "@/data/projects";
import { ArrowUpRight, ArrowLeft, ExternalLink, CheckCircle2, Terminal } from "lucide-react";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = PROJECTS.find((p) => p.slug === params.slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} — NithByte Case Study`,
    description: project.summary,
  };
}

export default function WorkDetailPage({ params }: Props) {
  const project = PROJECTS.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="pt-32 pb-24 space-y-24">
      {/* Hero */}
      <section className="w-full max-w-7xl mx-auto px-6 sm:px-8">
        <div className="w-full border-b border-black/10 dark:border-white/10 pb-16">
          <div className="space-y-6 max-w-4xl">
            <div className="flex items-center gap-4">
              <Link
                href="/work"
                className="inline-flex items-center gap-1.5 text-xs font-mono-tech text-nb-muted hover:text-nb-orange transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" /> Back to Work
              </Link>
              <span className="text-nb-muted">/</span>
              <SignalBadge label={project.category} tag={project.year} />
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-nb-black dark:text-nb-white leading-[1.02]">
              {project.title}
            </h1>

            <p className="text-lg sm:text-2xl text-nb-orange font-light leading-relaxed">
              {project.tagline}
            </p>

            <p className="text-base sm:text-lg text-nb-graphite/80 dark:text-nb-muted leading-relaxed max-w-3xl">
              {project.summary}
            </p>

            <div className="pt-4 flex flex-wrap gap-4 font-mono-tech text-xs">
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-nb-black text-nb-white hover:bg-nb-orange transition-colors shadow-md dark:bg-nb-orange dark:hover:bg-nb-deep-orange"
                >
                  Visit Live Platform <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Challenge, Approach & Engineering */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Challenge */}
          <div className="p-8 rounded-3xl bg-nb-white dark:bg-nb-soft-black border border-black/10 dark:border-white/10 shadow-sm space-y-3">
            <span className="text-xs font-mono-tech text-nb-orange font-bold uppercase">
              01 // THE CHALLENGE
            </span>
            <h3 className="text-xl font-bold text-nb-black dark:text-nb-white">Problem Context</h3>
            <p className="text-sm text-nb-graphite/80 dark:text-nb-muted leading-relaxed">
              {project.challenge}
            </p>
          </div>

          {/* Approach */}
          <div className="p-8 rounded-3xl bg-nb-white dark:bg-nb-soft-black border border-black/10 dark:border-white/10 shadow-sm space-y-3">
            <span className="text-xs font-mono-tech text-nb-orange font-bold uppercase">
              02 // THE APPROACH
            </span>
            <h3 className="text-xl font-bold text-nb-black dark:text-nb-white">Interaction Design</h3>
            <p className="text-sm text-nb-graphite/80 dark:text-nb-muted leading-relaxed">
              {project.approach}
            </p>
          </div>

          {/* Engineering */}
          <div className="p-8 rounded-3xl bg-nb-white dark:bg-nb-soft-black border border-black/10 dark:border-white/10 shadow-sm space-y-3">
            <span className="text-xs font-mono-tech text-nb-orange font-bold uppercase">
              03 // THE ENGINEERING
            </span>
            <h3 className="text-xl font-bold text-nb-black dark:text-nb-white">Technical Execution</h3>
            <p className="text-sm text-nb-graphite/80 dark:text-nb-muted leading-relaxed">
              {project.engineering}
            </p>
          </div>
        </div>
      </section>

      {/* Blueprint Transformation Steps */}
      <section className="bg-nb-black text-nb-off-white py-24 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <SectionHeader
            badgeLabel="BLUEPRINT BREAKDOWN"
            badgeTag="STAGES"
            title="Structural progression"
            description="The step-by-step engineering timeline from geometry grid to live deployment."
            dark
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {project.blueprintSteps.map((step) => (
              <div
                key={step.stage}
                className="p-6 rounded-2xl bg-nb-soft-black border border-white/10 space-y-3 font-mono-tech"
              >
                <span className="text-xs text-nb-orange font-bold uppercase">
                  {step.stage}
                </span>
                <h4 className="text-base font-bold text-nb-white">{step.title}</h4>
                <p className="text-xs text-nb-muted leading-relaxed">{step.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features & Architecture Stack */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-nb-black dark:text-nb-white tracking-tight">
              Key Platform Features
            </h3>
            <div className="space-y-3 font-mono-tech text-xs">
              {project.features.map((feat) => (
                <div
                  key={feat}
                  className="p-4 rounded-xl bg-nb-white dark:bg-nb-soft-black border border-black/10 dark:border-white/10 flex items-center gap-3"
                >
                  <CheckCircle2 className="w-4 h-4 text-nb-orange flex-shrink-0" />
                  <span className="text-nb-black dark:text-nb-off-white font-medium">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-nb-black dark:text-nb-white tracking-tight">
              Technology Stack
            </h3>
            <div className="p-8 rounded-3xl bg-nb-white dark:bg-nb-soft-black border border-black/10 dark:border-white/10 space-y-4 font-mono-tech text-xs">
              <div className="flex items-center gap-2 text-nb-orange font-bold">
                <Terminal className="w-4 h-4" />
                <span>DEPLOYED INFRASTRUCTURE</span>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg bg-nb-off-white dark:bg-white/5 border border-black/10 dark:border-white/10 text-nb-black dark:text-nb-off-white font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 text-center space-y-6">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-nb-black dark:text-nb-white">
          Need a similar digital presence engineered?
        </h2>
        <div className="flex justify-center pt-2">
          <MagneticButton href="/contact" variant="primary" size="lg" cursorLabel="LET'S BUILD">
            Start a Project
          </MagneticButton>
        </div>
      </section>
    </div>
  );
}
