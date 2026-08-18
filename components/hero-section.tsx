import React from "react";
import { ArrowRight, Play, Sparkles, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { HeroDashboard } from "./hero-dashboard";

interface HeroSectionProps {
  onOpenOnboarding?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenOnboarding }) => {
  const scrollToRoadmap = () => {
    const el = document.getElementById("roadmap");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section aria-label="Hero" className="relative pt-10 pb-14 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24 bg-grid-pattern border-b border-zinc-200/60 dark:border-zinc-800/60 transition-colors duration-200">
      {/* Background Soft Mask */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white dark:from-zinc-950 dark:via-transparent dark:to-zinc-950 pointer-events-none" aria-hidden="true" />

      <Container className="relative z-10 space-y-10 sm:space-y-14">
        {/* Hero Narrative Block */}
        <div className="text-center max-w-3xl mx-auto space-y-5 sm:space-y-6">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center space-x-2">
            <Badge
              variant="emerald"
              className="px-3 py-1 text-xs font-mono tracking-wider uppercase flex items-center space-x-1.5 shadow-xs dark:bg-emerald-950/60 dark:border-emerald-800/80 dark:text-emerald-300"
            >
              <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
              <span>Career Intelligence Platform</span>
            </Badge>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 leading-[1.12]">
            Your career shouldn't be a guess.
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg lg:text-xl text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal max-w-2xl mx-auto">
            PathPilot turns your skills, projects and goals into a personalized roadmap for what to learn, build and do next.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-1">
            <button
              onClick={() => {
                if (onOpenOnboarding) {
                  onOpenOnboarding();
                } else {
                  scrollToRoadmap();
                }
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 h-11 sm:h-12 rounded-lg bg-zinc-950 hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-white text-white font-medium text-base transition-colors shadow-sm group focus-ring min-h-[44px]"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform text-zinc-300 dark:text-zinc-700" aria-hidden="true" />
            </button>

            <button
              onClick={scrollToRoadmap}
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 h-11 sm:h-12 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors border border-zinc-200 dark:border-zinc-800 focus-ring min-h-[44px]"
            >
              <Play className="w-4 h-4 mr-2 text-zinc-500 fill-zinc-500 dark:text-zinc-400 dark:fill-zinc-400" aria-hidden="true" />
              <span>Explore Roadmaps</span>
            </button>
          </div>

          {/* Guarantee / Value Tagline */}
          <div className="pt-1 flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 text-xs text-zinc-500 dark:text-zinc-400 font-medium">
            <span className="inline-flex items-center space-x-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" aria-hidden="true" />
              <span>Honest skill analysis</span>
            </span>
            <span className="hidden sm:inline text-zinc-300 dark:text-zinc-700" aria-hidden="true">•</span>
            <span>Free interactive preview</span>
            <span className="hidden sm:inline text-zinc-300 dark:text-zinc-700" aria-hidden="true">•</span>
            <span>Zero fake metrics</span>
          </div>
        </div>

        {/* Hero Product Visualization Dashboard */}
        <div id="product" className="max-w-4xl mx-auto w-full overflow-hidden">
          <HeroDashboard />
        </div>
      </Container>
    </section>
  );
};
