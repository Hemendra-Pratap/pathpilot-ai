import React from "react";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";

interface FinalCtaSectionProps {
  onOpenOnboarding?: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onOpenOnboarding }) => {
  const scrollToRoadmap = () => {
    const el = document.getElementById("roadmap");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="cta" aria-labelledby="cta-heading" className="py-16 sm:py-24 bg-[#F5F1E8] dark:bg-[#11110F] border-b border-[#D9D2C5] dark:border-[#34312B] transition-colors duration-200">
      <Container>
        <div className="relative rounded-2xl bg-[#111111] dark:bg-[#1D1B18] text-white p-6 sm:p-10 lg:p-14 overflow-hidden shadow-xl border border-[#2A2927] dark:border-[#34312B]">
          <div className="relative z-10 max-w-2xl mx-auto text-center space-y-5 sm:space-y-6">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center space-x-2">
              <Badge
                variant="dark"
                className="px-3 py-1 text-xs font-mono tracking-wider uppercase text-[#A4AF91] border-[#34312B] flex items-center space-x-1.5"
              >
                <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Start Your Career Blueprint</span>
              </Badge>
            </div>

            {/* Main Headline */}
            <h2 id="cta-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Know where you're going next.
            </h2>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#B7B0A4] font-normal leading-relaxed max-w-xl mx-auto">
              Build a clearer path from what you know today to what you want to become.
            </p>

            {/* Primary Action Button */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => {
                  if (onOpenOnboarding) {
                    onOpenOnboarding();
                  } else {
                    scrollToRoadmap();
                  }
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 h-12 rounded-lg bg-[#66705A] hover:bg-[#545E49] dark:bg-[#A4AF91] dark:hover:bg-[#8F9A7C] text-white dark:text-[#11110F] font-bold text-base shadow-sm group transition-all focus-ring min-h-[48px]"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform text-[#E7E9E4] dark:text-[#11110F]" aria-hidden="true" />
              </button>
            </div>

            {/* Value Tagline */}
            <div className="pt-2 flex items-center justify-center space-x-2 text-xs text-[#B7B0A4]">
              <ShieldCheck className="w-4 h-4 text-[#A4AF91] shrink-0" aria-hidden="true" />
              <span>Free interactive preview • No registration required</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
