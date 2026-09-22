import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import SignalBadge from "@/components/ui/SignalBadge";
import SectionHeader from "@/components/ui/SectionHeader";
import MagneticButton from "@/components/interactions/MagneticButton";
import { SERVICES } from "@/data/services";
import { ArrowUpRight, ArrowLeft, CheckCircle2, Terminal } from "lucide-react";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = SERVICES.find((s) => s.slug === params.slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} — NithByte Capabilities`,
    description: service.shortDesc,
  };
}

export default function ServiceDetailPage({ params }: Props) {
  const service = SERVICES.find((s) => s.slug === params.slug);

  if (!service) {
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
                href="/services"
                className="inline-flex items-center gap-1.5 text-xs font-mono-tech text-nb-muted hover:text-nb-orange transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" /> Back to Services
              </Link>
              <span className="text-nb-muted">/</span>
              <SignalBadge label={service.tag} tag={`0${service.number}`} />
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-nb-black dark:text-nb-white leading-[1.02]">
              {service.heroHeadline}
            </h1>

            <p className="text-lg sm:text-2xl text-nb-graphite/90 dark:text-nb-muted font-light leading-relaxed">
              {service.fullDesc}
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <MagneticButton
                href={`/contact?service=${service.slug}`}
                variant="primary"
                size="md"
                cursorLabel="LET'S BUILD"
              >
                Request {service.title} Build
              </MagneticButton>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Breakdown */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 space-y-12">
        <SectionHeader
          badgeLabel="CAPABILITY DECOMPOSITION"
          badgeTag="SPECIFICATIONS"
          title={`What we deliver within ${service.title}`}
          description="Detailed architectural focus areas and implementation standards."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {service.capabilities.map((cap, i) => (
            <div
              key={cap.name}
              className="p-8 rounded-3xl bg-nb-white dark:bg-nb-soft-black border border-black/10 dark:border-white/10 shadow-sm space-y-3"
            >
              <div className="flex items-center justify-between font-mono-tech text-xs">
                <span className="text-nb-orange font-bold">MODULE 0{i + 1}</span>
                <span className="text-nb-muted">PRODUCTION STANDARD</span>
              </div>
              <h3 className="text-xl font-bold text-nb-black dark:text-nb-white tracking-tight">{cap.name}</h3>
              <p className="text-sm text-nb-graphite/80 dark:text-nb-muted leading-relaxed">{cap.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Sequence */}
      <section className="bg-nb-black text-nb-off-white py-24 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <SectionHeader
            badgeLabel="EXECUTION WORKFLOW"
            badgeTag="PROCESS"
            title="The engineering sequence"
            description="Our structured sprint progression from blueprint to edge deployment."
            dark
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((p) => (
              <div
                key={p.step}
                className="p-6 rounded-2xl bg-nb-soft-black border border-white/10 space-y-3"
              >
                <span className="text-xl font-mono-tech text-nb-orange font-bold">
                  {p.step}
                </span>
                <h4 className="text-lg font-bold text-nb-white">{p.title}</h4>
                <p className="text-xs text-nb-muted leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables & Technology Stack */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-nb-black dark:text-nb-white tracking-tight">
              Verified Deliverables
            </h3>
            <div className="space-y-3 font-mono-tech text-xs">
              {service.deliverables.map((del) => (
                <div
                  key={del}
                  className="p-4 rounded-xl bg-nb-white dark:bg-nb-soft-black border border-black/10 dark:border-white/10 flex items-center gap-3"
                >
                  <CheckCircle2 className="w-4 h-4 text-nb-orange flex-shrink-0" />
                  <span className="text-nb-black dark:text-nb-off-white font-medium">{del}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-nb-black dark:text-nb-white tracking-tight">
              Technology Ecosystem
            </h3>
            <div className="p-8 rounded-3xl bg-nb-white dark:bg-nb-soft-black border border-black/10 dark:border-white/10 space-y-4 font-mono-tech text-xs">
              <div className="flex items-center gap-2 text-nb-orange font-bold">
                <Terminal className="w-4 h-4" />
                <span>RECOMMENDED TOOLCHAIN</span>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                {service.techStack.map((tech) => (
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
          Ready to build with {service.title}?
        </h2>
        <div className="flex justify-center pt-2">
          <MagneticButton
            href={`/contact?service=${service.slug}`}
            variant="primary"
            size="lg"
            cursorLabel="LET'S BUILD"
          >
            Start a Project
          </MagneticButton>
        </div>
      </section>
    </div>
  );
}
