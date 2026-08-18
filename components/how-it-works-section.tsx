import React from "react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Code, Cpu, MapPin } from "lucide-react";

interface StepCardProps {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const StepCard: React.FC<StepCardProps> = ({
  number,
  title,
  description,
  icon,
}) => (
  <div className="flex flex-col justify-between space-y-6 rounded-xl border border-[#D9D2C5] dark:border-[#34312B] bg-[#FBF9F4] dark:bg-[#1D1B18] p-6 sm:p-7 shadow-xs hover:border-[#66705A] dark:hover:border-[#A4AF91] transition-all duration-200 h-full">
    <div className="space-y-4">
      {/* Step Header */}
      <div className="flex items-center justify-between">
        <span className="font-mono text-2xl sm:text-3xl font-bold text-[#66705A] dark:text-[#A4AF91]" aria-hidden="true">
          {number}
        </span>
        <div className="w-10 h-10 rounded-lg bg-[#EEE9DE] dark:bg-[#181714] border border-[#D9D2C5] dark:border-[#34312B] flex items-center justify-center text-[#66705A] dark:text-[#A4AF91] shrink-0" aria-hidden="true">
          {icon}
        </div>
      </div>

      {/* Step Content */}
      <div className="space-y-2">
        <h3 className="text-lg sm:text-xl font-bold text-[#111111] dark:text-[#F5F1E8] tracking-tight">
          {title}
        </h3>
        <p className="text-sm text-[#3F3B36] dark:text-[#B7B0A4] leading-relaxed font-normal">
          {description}
        </p>
      </div>
    </div>
  </div>
);

export const HowItWorksSection: React.FC = () => {
  return (
    <section id="how-it-works" aria-labelledby="how-it-works-heading" className="py-16 sm:py-24 bg-[#F5F1E8] dark:bg-[#11110F] border-b border-[#D9D2C5] dark:border-[#34312B] transition-colors duration-200">
      <Container className="space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3.5 sm:space-y-4">
          <Badge variant="secondary" className="text-xs font-mono uppercase tracking-wider">
            WORKFLOW PIPELINE
          </Badge>
          <h2 id="how-it-works-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111111] dark:text-[#F5F1E8] leading-tight">
            From "What should I learn?"<br className="hidden sm:inline" /> to "Here's what I do next."
          </h2>
          <p className="text-base sm:text-lg text-[#5F5A52] dark:text-[#B7B0A4] font-normal max-w-2xl mx-auto">
            Three simple steps to transform skill confusion into career execution.
          </p>
        </div>

        {/* 3 Steps Grid (Semantic Ordered List) */}
        <ol className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 list-none p-0 m-0">
          <li className="h-full">
            <StepCard
              number="01"
              title="Add your skills"
              description="Tell PathPilot what you know, what you've built and where you want to go."
              icon={<Code className="w-5 h-5 text-[#66705A] dark:text-[#A4AF91]" aria-hidden="true" />}
            />
          </li>

          <li className="h-full">
            <StepCard
              number="02"
              title="Skill-gap analysis"
              description="Identify strengths, gaps and the highest-impact skills to develop next."
              icon={<Cpu className="w-5 h-5 text-[#66705A] dark:text-[#A4AF91]" aria-hidden="true" />}
            />
          </li>

          <li className="h-full">
            <StepCard
              number="03"
              title="Follow your roadmap"
              description="Turn the analysis into projects, learning priorities and concrete next actions."
              icon={<MapPin className="w-5 h-5 text-[#66705A] dark:text-[#A4AF91]" aria-hidden="true" />}
            />
          </li>
        </ol>
      </Container>
    </section>
  );
};
