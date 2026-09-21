import React from "react";
import HeroSection from "@/components/home/HeroSection";
import IntroSection from "@/components/home/IntroSection";
import CapabilitiesSection from "@/components/home/CapabilitiesSection";
import SolutionBuilderSection from "@/components/home/SolutionBuilderSection";
import MethodSection from "@/components/home/MethodSection";
import BlueprintSection from "@/components/home/BlueprintSection";
import FeaturedWorkSection from "@/components/home/FeaturedWorkSection";
import DnaSection from "@/components/home/DnaSection";
import TechStackSection from "@/components/home/TechStackSection";
import LabsSection from "@/components/home/LabsSection";
import GlobalReachSection from "@/components/home/GlobalReachSection";
import InsightsSection from "@/components/home/InsightsSection";
import FinalCtaSection from "@/components/home/FinalCtaSection";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 01: Hero with generative IDEA -> CODE sequence */}
      <HeroSection />

      {/* 02: Editorial Intro with Orange Signal */}
      <IntroSection />

      {/* 03: Interactive Capabilities (BUILD, CONNECT, SELL, GROW, INTELLIGENCE) */}
      <CapabilitiesSection />

      {/* 04: Interactive Solution Synthesizer */}
      <SolutionBuilderSection />

      {/* 05: The NithByte 6-Step Method Sequence */}
      <MethodSection />

      {/* 06: Blueprint to Reality (ALPS Cafe Nagercoil) */}
      <BlueprintSection />

      {/* 07: Featured Work & Case Studies */}
      <FeaturedWorkSection />

      {/* 08: Interconnected NithByte DNA */}
      <DnaSection />

      {/* 09: Technology Ecosystem Stack */}
      <TechStackSection />

      {/* 10: NithByte Labs Preview (Commerce & Intelligence) */}
      <LabsSection />

      {/* 11: International Reach & Standards */}
      <GlobalReachSection />

      {/* 12: Engineering Insights */}
      <InsightsSection />

      {/* 13: Final Interactive Idea/Problem/Ambition CTA */}
      <FinalCtaSection />
    </div>
  );
}
