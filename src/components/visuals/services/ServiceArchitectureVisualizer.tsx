"use client";

import React from "react";
import WebServiceVisualizer from "./WebServiceVisualizer";
import MobileServiceVisualizer from "./MobileServiceVisualizer";
import EcommerceServiceVisualizer from "./EcommerceServiceVisualizer";
import AiServiceVisualizer from "./AiServiceVisualizer";
import MarketingServiceVisualizer from "./MarketingServiceVisualizer";

interface ServiceArchitectureVisualizerProps {
  slug: string;
}

export default function ServiceArchitectureVisualizer({ slug }: ServiceArchitectureVisualizerProps) {
  switch (slug) {
    case "web-development":
      return <WebServiceVisualizer />;
    case "mobile-apps":
      return <MobileServiceVisualizer />;
    case "e-commerce":
      return <EcommerceServiceVisualizer />;
    case "ai-automation":
      return <AiServiceVisualizer />;
    case "digital-marketing":
      return <MarketingServiceVisualizer />;
    default:
      return <WebServiceVisualizer />;
  }
}
