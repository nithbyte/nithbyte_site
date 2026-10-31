import React from "react";
import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import IntroSection from "@/components/home/IntroSection";
import ClientsSection from "@/components/home/ClientsSection";
import CapabilitiesSection from "@/components/home/CapabilitiesSection";
import SolutionBuilderSection from "@/components/home/SolutionBuilderSection";
import MethodSection from "@/components/home/MethodSection";
import BlueprintSection from "@/components/home/BlueprintSection";
import FeaturedWorkSection from "@/components/home/FeaturedWorkSection";
import DnaSection from "@/components/home/DnaSection";
import TechStackSection from "@/components/home/TechStackSection";
import PartnershipSection from "@/components/home/PartnershipSection";
import LabsSection from "@/components/home/LabsSection";
import GlobalReachSection from "@/components/home/GlobalReachSection";
import InsightsSection from "@/components/home/InsightsSection";
import FinalCtaSection from "@/components/home/FinalCtaSection";

export const metadata: Metadata = {
  title: "NithByte — Where Ideas Find Their Code | Digital Product Engineering",
  description:
    "NithByte designs and engineers digital products, SaaS platforms, e-commerce architectures, and intelligent technology solutions for modern enterprises.",
  alternates: {
    canonical: "https://nithbyte.com",
  },
};

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 01: Hero with generative IDEA -> CODE sequence */}
      <HeroSection />

      {/* 02: Editorial Intro with Orange Signal */}
      <IntroSection />

      {/* 03: Client Network 3D Ecosystem Carousel */}
      <ClientsSection />

      {/* 04: Interactive Capabilities (BUILD, CONNECT, SELL, GROW, INTELLIGENCE) */}
      <CapabilitiesSection />

      {/* 04: Interactive Solution Synthesizer */}
      <SolutionBuilderSection />

      {/* 05: The NithByte 6-Step Method Sequence */}
      <MethodSection />

      {/* 06: Blueprint to Reality (ALPS Cafe Nagercoil) */}
      <BlueprintSection />

      {/* 07: NithByte Products (SaaS Platforms) */}
      <LabsSection />

      {/* 08: Featured Work & Case Studies */}
      <FeaturedWorkSection />

      {/* 09: Interconnected NithByte DNA */}
      <DnaSection />

      {/* 10: Technology Ecosystem Stack */}
      <TechStackSection />

      {/* 11: Strategic Alliance (NithByte × Kovel Designs) */}
      <PartnershipSection />

      {/* 12: International Reach & Standards */}
      <GlobalReachSection />

      {/* 13: Engineering Journal & Perspectives */}
      <InsightsSection />

      {/* 14: Final Contact CTA */}
      <FinalCtaSection />
    </div>
  );
}
