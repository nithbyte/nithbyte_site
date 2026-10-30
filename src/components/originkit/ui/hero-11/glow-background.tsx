/* eslint-disable */
"use client";

import React, { type CSSProperties } from "react";

const A = "/originkit/hero-11";

const backgroundMaskStyle: CSSProperties = {
  WebkitMaskImage: `url(${A}/background-mask.svg)`,
  maskImage: `url(${A}/background-mask.svg)`,
};

/**
 * Base atmosphere — behind portrait (z-0).
 */
export const GlowBackground = () => {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-black"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(255,107,0,0.18),transparent_70%)]" />
      <div className="ok-h11-background opacity-60">
        <div className="ok-h11-maskedBackgroundLayer" style={backgroundMaskStyle}>
          <img
            alt=""
            className="ok-h11-layerImage"
            src={`${A}/background-layer-1.svg`}
          />
        </div>
        <div className="ok-h11-backgroundLayer ok-h11-backgroundLayer2">
          <img
            alt=""
            className="ok-h11-layerImage"
            src={`${A}/background-layer-2.svg`}
          />
        </div>
        <div className="ok-h11-backgroundLayer ok-h11-backgroundLayer3">
          <img
            alt=""
            className="ok-h11-layerImage"
            src={`${A}/background-layer-3.svg`}
          />
        </div>
        <div className="ok-h11-backgroundLayer ok-h11-backgroundLayer4">
          <img
            alt=""
            className="ok-h11-layerImage"
            src={`${A}/background-layer-4.svg`}
          />
        </div>
        <div className="ok-h11-backgroundLayer ok-h11-backgroundLayer5">
          <img
            alt=""
            className="ok-h11-layerImage"
            src={`${A}/background-layer-5.svg`}
          />
        </div>
        <div className="ok-h11-backgroundLayer ok-h11-backgroundLayer6">
          <img
            alt=""
            className="ok-h11-layerImage"
            src={`${A}/background-layer-6.svg`}
          />
        </div>
      </div>
    </div>
  );
};

export const GradientOverlay = () => {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-10 overflow-hidden bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(0,0,0,0.8),transparent)]"
      aria-hidden="true"
    />
  );
};
