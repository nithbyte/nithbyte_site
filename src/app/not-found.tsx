import React from "react";
import Link from "next/link";
import SignalBadge from "@/components/ui/SignalBadge";
import MagneticButton from "@/components/interactions/MagneticButton";
import OrangeSignal from "@/components/interactions/OrangeSignal";
import { Terminal, AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6 sm:px-8 py-32">
      <div className="max-w-xl mx-auto text-center space-y-8">
        <div className="flex justify-center">
          <SignalBadge label="ERROR 404" tag="UNRESOLVED PATH" />
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-nb-black">
            404 // UNROUTED
          </h1>
          <p className="text-lg sm:text-xl text-nb-graphite font-light">
            Looks like this path hasn&apos;t found its code yet.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-nb-white border border-black/10 font-mono-tech text-xs text-nb-muted space-y-2 max-w-sm mx-auto">
          <div className="flex items-center justify-between text-nb-orange font-bold">
            <span className="flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5" />
              TRACE ERROR:
            </span>
            <span>0x404_NULL_ROUTE</span>
          </div>
          <p className="text-left text-nb-graphite/70">
            The requested URI does not match any compiled server component or static page artifact.
          </p>
        </div>

        <div className="flex justify-center pt-2">
          <MagneticButton href="/" variant="primary" size="lg" cursorLabel="HOME">
            Return Home
          </MagneticButton>
        </div>
      </div>
    </div>
  );
}
