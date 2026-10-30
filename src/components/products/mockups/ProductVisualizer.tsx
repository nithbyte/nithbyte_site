"use client";

import React from "react";
import MByteMockup from "./MByteMockup";
import DineByteMockup from "./DineByteMockup";
import EvoByteMockup from "./EvoByteMockup";
import ChitByteMockup from "./ChitByteMockup";

interface ProductVisualizerProps {
  slug: string;
  defaultView?: "desktop" | "mobile";
}

export default function ProductVisualizer({ slug, defaultView = "desktop" }: ProductVisualizerProps) {
  switch (slug) {
    case "mbyte":
      return <MByteMockup defaultView={defaultView} />;
    case "dinebyte":
      return <DineByteMockup defaultView={defaultView} />;
    case "evobyte":
      return <EvoByteMockup defaultView={defaultView} />;
    case "chitbyte":
      return <ChitByteMockup defaultView={defaultView} />;
    default:
      return <MByteMockup defaultView={defaultView} />;
  }
}

