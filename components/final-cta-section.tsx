import React from "react";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";

export const FinalCtaSection: React.FC = () => {
  return (
    <section id="cta" aria-labelledby="cta-heading" className="py-16 sm:py-24 bg-white border-b border-zinc-200/80">
      <Container>
        <div className="relative rounded-2xl bg-zinc-950 text-white p-6 sm:p-10 lg:p-14 overflow-hidden shadow-xl border border-zinc-800">
          <div className="relative z-10 max-w-2xl mx-auto text-center space-y-5 sm:space-y-6">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center space-x-2">
              <Badge
                variant="dark"
                className="px-3 py-1 text-xs font-mono tracking-wider uppercase text-emerald-400 border-zinc-800 flex items-center space-x-1.5"
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
            <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed max-w-xl mx-auto">
              Build a clearer path from what you know today to what you want to become.
            </p>

            {/* Primary Action Button */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="#roadmap"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 h-12 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-base shadow-sm group transition-all focus-ring min-h-[48px]"
              >
                <span>Build my roadmap</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform text-emerald-200" aria-hidden="true" />
              </a>
            </div>

            {/* Value Tagline */}
            <div className="pt-2 flex items-center justify-center space-x-2 text-xs text-zinc-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" aria-hidden="true" />
              <span>Free interactive preview • No registration required</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
