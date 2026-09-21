import React from "react";
import OrangeSignal from "../interactions/OrangeSignal";

interface SignalBadgeProps {
  label: string;
  tag?: string;
  pulse?: boolean;
  className?: string;
  dark?: boolean;
}

export default function SignalBadge({
  label,
  tag,
  pulse = true,
  className = "",
  dark = false,
}: SignalBadgeProps) {
  return (
    <div
      className={`inline-flex items-center gap-2.5 px-3 py-1 rounded-full border text-xs font-mono-tech uppercase tracking-widest select-none transition-colors ${
        dark
          ? "bg-nb-soft-black text-nb-off-white border-white/10"
          : "bg-nb-white/80 dark:bg-nb-soft-black backdrop-blur-sm text-nb-black dark:text-nb-off-white border-black/10 dark:border-white/10 shadow-sm"
      } ${className}`}
    >
      {pulse ? <OrangeSignal variant="pulse" /> : <OrangeSignal variant="dot" />}
      {tag && <span className="text-nb-orange font-semibold">{tag}</span>}
      {tag && <span className="text-nb-muted">/</span>}
      <span className={dark ? "text-nb-off-white" : "text-nb-graphite dark:text-nb-off-white"}>{label}</span>
    </div>
  );
}
