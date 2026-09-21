import React from "react";
import SignalBadge from "./SignalBadge";

interface SectionHeaderProps {
  badgeLabel: string;
  badgeTag?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}

export default function SectionHeader({
  badgeLabel,
  badgeTag,
  title,
  description,
  align = "left",
  dark = false,
  className = "",
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? "text-center max-w-3xl mx-auto" : "max-w-3xl"} ${className}`}>
      <div className={`mb-4 flex ${isCenter ? "justify-center" : "justify-start"}`}>
        <SignalBadge label={badgeLabel} tag={badgeTag} dark={dark} />
      </div>
      <h2
        className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] ${
          dark ? "text-nb-white" : "text-nb-black"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base sm:text-lg md:text-xl font-normal leading-relaxed ${
            dark ? "text-nb-muted" : "text-nb-graphite/80"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
