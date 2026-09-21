"use client";

import React from "react";
import Link from "next/link";
import SectionHeader from "../ui/SectionHeader";
import MagneticButton from "../interactions/MagneticButton";
import { INSIGHTS } from "@/data/insights";
import { ArrowUpRight, Clock, Calendar } from "lucide-react";

export default function InsightsSection() {
  return (
    <section className="py-24 sm:py-32 bg-nb-white relative border-b border-black/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <SectionHeader
            badgeLabel="INSIGHTS & PERSPECTIVES"
            badgeTag="PUBLIC THOUGHTS"
            title="Engineering rationale and technical perspectives."
            description="Our reflections on frontend architecture, applied machine intelligence, and modern commerce engineering."
            className="mb-0 md:mb-0"
          />
          <MagneticButton href="/insights" variant="outline" size="md" cursorLabel="READ ALL">
            View All Insights
          </MagneticButton>
        </div>

        {/* Insights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INSIGHTS.slice(0, 3).map((article) => (
            <Link
              key={article.id}
              href={`/insights/${article.slug}`}
              className="group p-8 rounded-3xl bg-nb-off-white border border-black/10 hover:border-nb-orange/50 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-lg"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between font-mono-tech text-xs">
                  <span className="px-2.5 py-0.5 rounded-full bg-nb-white border border-black/10 text-nb-orange font-bold uppercase">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-nb-muted">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-nb-black group-hover:text-nb-orange transition-colors leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-xs text-nb-graphite/80 leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-black/5 flex items-center justify-between font-mono-tech text-xs text-nb-muted">
                <span>{article.publishedAt}</span>
                <span className="flex items-center gap-1 text-nb-orange font-bold group-hover:translate-x-1 transition-transform">
                  Read Article <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
