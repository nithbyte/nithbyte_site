import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import SignalBadge from "@/components/ui/SignalBadge";
import MagneticButton from "@/components/interactions/MagneticButton";
import { INSIGHTS } from "@/data/insights";
import { ArrowLeft, Clock, Calendar, Share2, Tag } from "lucide-react";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return INSIGHTS.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = INSIGHTS.find((a) => a.slug === params.slug);
  if (!article) return { title: "Insight Not Found" };

  return {
    title: `${article.title} — NithByte Insights`,
    description: article.excerpt,
  };
}

export default function InsightArticlePage({ params }: Props) {
  const article = INSIGHTS.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  return (
    <article className="pt-32 pb-24 space-y-16">
      {/* Header */}
      <section className="max-w-4xl mx-auto px-6 sm:px-8 space-y-8">
        <div className="flex items-center gap-4">
          <Link
            href="/insights"
            className="inline-flex items-center gap-1.5 text-xs font-mono-tech text-nb-muted hover:text-nb-orange transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Insights
          </Link>
          <span className="text-nb-muted">/</span>
          <SignalBadge label={article.category} tag="PERSPECTIVE" />
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-nb-black leading-[1.08]">
          {article.title}
        </h1>

        <p className="text-lg sm:text-2xl text-nb-graphite/90 font-light leading-relaxed">
          {article.subtitle}
        </p>

        <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-black/10 font-mono-tech text-xs text-nb-muted">
          <div className="flex items-center gap-4">
            <span>BY {article.author}</span>
            <span>•</span>
            <span>{article.publishedAt}</span>
          </div>
          <div className="flex items-center gap-1.5 text-nb-orange">
            <Clock className="w-3.5 h-3.5" />
            <span>{article.readTime}</span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section className="max-w-3xl mx-auto px-6 sm:px-8 space-y-10 text-base sm:text-lg text-nb-graphite/90 leading-relaxed">
        {article.content.map((section, idx) => (
          <div key={section.heading} className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-nb-black tracking-tight pt-4">
              {section.heading}
            </h2>

            {section.paragraphs.map((p, pIdx) => (
              <p key={pIdx} className="leading-relaxed">
                {p}
              </p>
            ))}

            {section.callout && (
              <div className="my-8 p-6 sm:p-8 rounded-2xl bg-nb-black text-nb-off-white border-l-4 border-nb-orange font-mono-tech text-sm leading-relaxed">
                &ldquo;{section.callout}&rdquo;
              </div>
            )}
          </div>
        ))}

        {/* Tags */}
        <div className="pt-8 border-t border-black/10 flex flex-wrap items-center gap-2">
          <Tag className="w-4 h-4 text-nb-orange mr-2" />
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full bg-nb-white border border-black/10 text-xs font-mono-tech text-nb-graphite"
            >
              #{tag}
            </span>
          ))}
        </div>
      </section>

      {/* Next Step CTA */}
      <section className="max-w-4xl mx-auto px-6 sm:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-nb-black text-nb-off-white text-center space-y-6">
          <h3 className="text-2xl sm:text-4xl font-bold text-nb-white">
            Have a project exploring these technologies?
          </h3>
          <p className="text-sm sm:text-base text-nb-muted max-w-xl mx-auto">
            Our engineering team is ready to discuss architectural approaches for your product.
          </p>
          <div className="flex justify-center pt-2">
            <MagneticButton href="/contact" variant="primary" size="lg" cursorLabel="LET'S BUILD">
              Start a Conversation
            </MagneticButton>
          </div>
        </div>
      </section>
    </article>
  );
}
