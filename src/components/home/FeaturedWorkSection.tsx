"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import MagneticButton from "../interactions/MagneticButton";
import { PROJECTS } from "@/data/projects";
import { ArrowUpRight, Lock, ExternalLink } from "lucide-react";

export default function FeaturedWorkSection() {
  return (
    <section className="py-24 sm:py-32 bg-nb-white relative border-b border-black/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <SectionHeader
            badgeLabel="SELECTED WORK"
            badgeTag="CASE STUDIES"
            title="Digital products engineered with intent."
            description="Explore our recent deployments and active client engineering architectures."
            className="mb-0 md:mb-0"
          />
          <MagneticButton href="/work" variant="outline" size="md" cursorLabel="VIEW ALL">
            View All Work
          </MagneticButton>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <Link
              key={project.id}
              href={`/work/${project.slug}`}
              data-cursor="project"
              data-cursor-text="EXPLORE ↗"
              className="group block rounded-3xl bg-nb-off-white border border-black/10 hover:border-nb-orange/50 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-xl relative flex flex-col justify-between"
            >
              {/* Card Media Preview Area */}
              <div className="relative aspect-[4/3] bg-nb-black overflow-hidden p-6 flex flex-col justify-between">
                {/* Top Status */}
                <div className="flex items-center justify-between z-10 font-mono-tech text-xs">
                  <span className="px-2.5 py-1 rounded-full bg-white/10 text-nb-off-white backdrop-blur-sm">
                    {project.category}
                  </span>
                  {project.isLive ? (
                    <span className="flex items-center gap-1.5 text-green-400 font-bold">
                      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      LIVE
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-nb-orange">
                      <Lock className="w-3 h-3" />
                      IN DEV
                    </span>
                  )}
                </div>

                {/* Simulated Visual Center */}
                <div className="my-auto text-center space-y-2 z-10">
                  <div className="w-12 h-12 rounded-2xl bg-nb-orange/10 border border-nb-orange/30 mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-nb-orange font-mono-tech font-bold text-base">
                      0{idx + 1}
                    </span>
                  </div>
                  <p className="text-sm font-mono-tech text-white/70 tracking-wider uppercase">
                    {project.client}
                  </p>
                </div>

                {/* Bottom Tech Tags */}
                <div className="flex flex-wrap gap-1.5 z-10 font-mono-tech text-[10px] text-nb-off-white">
                  {project.techStack.slice(0, 3).map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded bg-white/10">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Subtle Orange Glow on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-nb-orange/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>

              {/* Card Meta & Summary */}
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-nb-black group-hover:text-nb-orange transition-colors">
                      {project.title}
                    </h3>
                    <ArrowUpRight className="w-4 h-4 text-nb-muted group-hover:text-nb-orange group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                  <p className="text-xs font-mono-tech text-nb-muted">{project.year}</p>
                  <p className="text-xs text-nb-graphite/80 leading-relaxed line-clamp-2">
                    {project.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-black/5 flex items-center justify-between text-xs font-mono-tech text-nb-orange font-semibold">
                  <span>VIEW ARCHITECTURE</span>
                  <span>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
