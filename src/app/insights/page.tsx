"use client";

import React, { useState } from "react";
import Link from "next/link";
import SignalBadge from "@/components/ui/SignalBadge";
import SectionHeader from "@/components/ui/SectionHeader";
import MagneticButton from "@/components/interactions/MagneticButton";
import { INSIGHTS, InsightArticle } from "@/data/insights";
import { ArrowUpRight, Clock, Search, Filter } from "lucide-react";

const CATEGORIES = ["All", "Engineering", "AI", "E-commerce", "Design"] as const;

export default function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredArticles = INSIGHTS.filter((article) => {
    const matchesCategory = activeCategory === "All" || article.category === activeCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-32 pb-24 space-y-24">
      {/* Hero */}
      <section className="w-full max-w-7xl mx-auto px-6 sm:px-8">
        <div className="w-full border-b border-black/10 dark:border-white/10 pb-16">
          <div className="space-y-6 max-w-4xl">
            <SignalBadge label="ENGINEERING JOURNAL" tag="INSIGHTS" />
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-nb-black dark:text-nb-white leading-[1.02]">
              Thoughts on engineering, <br />
              <span className="text-nb-orange">AI & digital systems.</span>
            </h1>
            <p className="text-lg sm:text-2xl text-nb-graphite/90 dark:text-nb-muted font-light leading-relaxed">
              Technical perspectives, architectural patterns, and practical reflections from our product engineering team.
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-nb-white dark:bg-nb-soft-black border border-black/10 dark:border-white/10 shadow-sm">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-mono-tech tracking-wider uppercase transition-colors ${
                  activeCategory === cat
                    ? "bg-nb-black text-nb-white dark:bg-nb-orange dark:text-white font-bold shadow-sm"
                    : "text-nb-graphite dark:text-nb-muted hover:bg-black/5 dark:hover:bg-white/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-nb-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search insights..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-nb-off-white dark:bg-white/5 border border-black/10 dark:border-white/10 text-nb-black dark:text-nb-off-white text-xs font-mono-tech focus:outline-none focus:border-nb-orange"
            />
          </div>
        </div>

        {/* Articles Grid */}
        {filteredArticles.length === 0 ? (
          <div className="p-12 text-center rounded-3xl bg-nb-white dark:bg-nb-soft-black border border-black/10 dark:border-white/10 space-y-3 font-mono-tech text-xs">
            <p className="text-nb-muted">No insights found matching your query.</p>
            <button
              onClick={() => {
                setActiveCategory("All");
                setSearchQuery("");
              }}
              className="text-nb-orange font-bold hover:underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredArticles.map((article) => (
              <Link
                key={article.id}
                href={`/insights/${article.slug}`}
                className="group p-8 sm:p-10 rounded-3xl bg-nb-white dark:bg-nb-soft-black border border-black/10 dark:border-white/10 hover:border-nb-orange/50 dark:hover:border-nb-orange/50 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-xl"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between font-mono-tech text-xs">
                    <span className="px-3 py-1 rounded-full bg-nb-off-white dark:bg-white/10 border border-black/10 dark:border-white/10 text-nb-orange font-bold uppercase">
                      {article.category}
                    </span>
                    <div className="flex items-center gap-1.5 text-nb-muted">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h2 className="text-2xl sm:text-3xl font-bold text-nb-black dark:text-nb-white group-hover:text-nb-orange dark:group-hover:text-nb-orange transition-colors leading-snug">
                      {article.title}
                    </h2>
                    <p className="text-sm text-nb-graphite/80 dark:text-nb-muted leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded bg-nb-off-white dark:bg-white/5 text-[10px] font-mono-tech text-nb-muted border border-black/5 dark:border-white/5"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-black/5 dark:border-white/10 flex items-center justify-between font-mono-tech text-xs text-nb-muted">
                  <span>{article.publishedAt}</span>
                  <span className="flex items-center gap-1 text-nb-orange font-bold group-hover:translate-x-1 transition-transform">
                    Read Article <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
