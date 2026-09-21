"use client";

import React from "react";
import SectionHeader from "../ui/SectionHeader";
import { Cpu, Server, Database, Cloud, Layers, Terminal, Sparkles, Workflow } from "lucide-react";

interface StackLayer {
  layer: string;
  role: string;
  technologies: {
    name: string;
    spec: string;
  }[];
}

const TECH_ECOSYSTEM: StackLayer[] = [
  {
    layer: "01 / CLIENT & EDGE LAYER",
    role: "User-facing performance, sub-second hydration, fluid transitions.",
    technologies: [
      { name: "Next.js", spec: "App Router / Server Components" },
      { name: "React", spec: "Concurrent Mode / Suspense" },
      { name: "TypeScript", spec: "Strict Static Typing" },
      { name: "Tailwind CSS", spec: "Design System Tokens" },
      { name: "GSAP / Framer", spec: "GPU-Accelerated Motion" },
    ]
  },
  {
    layer: "02 / RUNTIME & MICROSERVICES",
    role: "Type-safe APIs, authentication pipelines, asynchronous task queues.",
    technologies: [
      { name: "Node.js", spec: "Asynchronous I/O Runtime" },
      { name: "NestJS", spec: "Enterprise Architecture" },
      { name: "FastAPI", spec: "High-Performance Python" },
      { name: "GraphQL / REST", spec: "Contract-Driven APIs" },
    ]
  },
  {
    layer: "03 / INTELLIGENCE & DATA STATE",
    role: "Relational persistence, vector retrieval, and background execution.",
    technologies: [
      { name: "PostgreSQL", spec: "ACID Relational Core" },
      { name: "Prisma ORM", spec: "Type-Safe DB Client" },
      { name: "Vector Databases", spec: "Pinecone / Qdrant RAG" },
      { name: "Redis", spec: "Sub-Millisecond Cache" },
      { name: "n8n Pipelines", spec: "Autonomous Automation" },
    ]
  },
  {
    layer: "04 / CLOUD & EDGE DISTRIBUTION",
    role: "Worldwide CDN routing, containerized isolation, automated CI/CD.",
    technologies: [
      { name: "Vercel Edge", spec: "Global Edge Network" },
      { name: "Docker", spec: "Immutable Containers" },
      { name: "AWS Infrastructure", spec: "Scalable Cloud Compute" },
      { name: "GitHub Actions", spec: "Automated Test & Deploy" },
    ]
  }
];

export default function TechStackSection() {
  return (
    <section className="py-24 sm:py-32 bg-nb-off-white relative border-b border-black/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <SectionHeader
          badgeLabel="TECHNOLOGY STACK"
          badgeTag="ENGINEERING ECOSYSTEM"
          title="Architected with modern, battle-tested standards."
          description="We avoid transient hype and assemble dependable, high-throughput technologies designed for long-term maintainability."
        />

        {/* Stack Layers Architecture */}
        <div className="space-y-6">
          {TECH_ECOSYSTEM.map((layer) => (
            <div
              key={layer.layer}
              className="p-6 sm:p-8 rounded-2xl bg-nb-white border border-black/10 shadow-sm space-y-4 hover:border-nb-orange/40 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-black/5 pb-4">
                <span className="text-xs font-mono-tech text-nb-orange font-bold uppercase tracking-wider">
                  {layer.layer}
                </span>
                <span className="text-xs font-mono-tech text-nb-muted">
                  {layer.role}
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 pt-2">
                {layer.technologies.map((tech) => (
                  <div
                    key={tech.name}
                    className="p-3.5 rounded-xl bg-nb-off-white border border-black/5 hover:border-nb-orange/40 transition-all group"
                  >
                    <p className="font-bold text-sm text-nb-black group-hover:text-nb-orange transition-colors">
                      {tech.name}
                    </p>
                    <p className="text-[10px] font-mono-tech text-nb-muted mt-0.5">
                      {tech.spec}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
