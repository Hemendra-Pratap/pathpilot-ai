import React from "react";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { ProblemSection } from "@/components/problem-section";
import { ProductShowcaseSection } from "@/components/product-showcase-section";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { RoadmapSection } from "@/components/roadmap-section";
import { FinalCtaSection } from "@/components/final-cta-section";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA]">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ProblemSection />
        <ProductShowcaseSection />
        <HowItWorksSection />
        <RoadmapSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
}
