"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { ProblemSection } from "@/components/problem-section";
import { ProductShowcaseSection } from "@/components/product-showcase-section";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { RoadmapSection } from "@/components/roadmap-section";
import { FinalCtaSection } from "@/components/final-cta-section";
import { Footer } from "@/components/footer";
import { OnboardingModal } from "@/components/onboarding-modal";

export default function HomePage() {
  const [isOnboardingOpen, setIsOnboardingOpen] = useState(false);
  const [activeTrackId, setActiveTrackId] = useState<"ai-ml" | "frontend" | "backend">("ai-ml");

  const handleOpenOnboarding = () => {
    setIsOnboardingOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] dark:bg-zinc-950 transition-colors duration-200">
      <Navbar onOpenOnboarding={handleOpenOnboarding} />
      <main className="flex-1">
        <HeroSection onOpenOnboarding={handleOpenOnboarding} />
        <ProblemSection />
        <ProductShowcaseSection />
        <HowItWorksSection />
        <RoadmapSection activeTrackId={activeTrackId} onTrackChange={setActiveTrackId} />
        <FinalCtaSection onOpenOnboarding={handleOpenOnboarding} />
      </main>
      <Footer />

      {/* Onboarding Dialog */}
      <OnboardingModal
        isOpen={isOnboardingOpen}
        onClose={() => setIsOnboardingOpen(false)}
        onSelectPath={(trackId) => setActiveTrackId(trackId)}
      />
    </div>
  );
}
