/* eslint-disable */
// Delivered by Originkit · stack: nextjs · styling: tailwind
// Delivered by Originkit · stack: nextjs
"use client";

"use client";

import { FeatureRail } from "@/components/originkit/ui/hero-11/feature-rail";
import {
  GlowBackground,
  GradientOverlay,
} from "@/components/originkit/ui/hero-11/glow-background";
import { HeroContent } from "@/components/originkit/ui/hero-11/hero-content";
import { Navbar } from "@/components/originkit/ui/hero-11/navbar";
import { PortraitStage } from "@/components/originkit/ui/hero-11/portrait-stage";

export const Section18Hero = () => {
  const handleGetStarted = () => {
    window.location.href = "/contact";
  };

  const handleBookNow = () => {
    window.location.href = "/contact";
  };

  return (
    <section
      aria-label="Visionary liquid distortion hero"
      className="relative isolate min-h-svh w-full overflow-hidden bg-black"
    >
      {/*
        Stack:
          base gradient  z-0
          liquid         z-5
          gradient-2     z-10 (radial cutout over face)
          nav / copy     z-20
      */}
      <GlowBackground />
      <PortraitStage />
      <GradientOverlay />

      <div className="relative mx-auto flex min-h-svh w-full flex-col justify-between">
        <div className="pointer-events-none relative z-20 flex w-full flex-col">
          <div className="pointer-events-auto w-full">
            <Navbar />
          </div>
        </div>

        <div className="pointer-events-none relative z-20 flex flex-1 flex-col items-center justify-end pb-12 desktop-sm:pb-20">
          <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 flex flex-col items-center desktop-sm:grid desktop-sm:grid-cols-[400px_1fr_140px] desktop-sm:items-end desktop-sm:justify-items-stretch">
            <div className="pointer-events-auto desktop-sm:col-start-1 desktop-sm:justify-self-start">
              <HeroContent onGetStarted={handleGetStarted} />
            </div>

            <div className="pointer-events-auto hidden desktop-sm:col-start-3 desktop-sm:block desktop-sm:justify-self-end">
              <FeatureRail />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
