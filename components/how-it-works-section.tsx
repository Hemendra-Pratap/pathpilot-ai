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
  <div className="flex flex-col justify-between space-y-6 rounded-xl border border-zinc-200 bg-white p-6 sm:p-7 shadow-xs hover:border-zinc-300 transition-all duration-200 h-full">
    <div className="space-y-4">
      {/* Step Header */}
      <div className="flex items-center justify-between">
        <span className="font-mono text-2xl sm:text-3xl font-bold text-emerald-600" aria-hidden="true">
          {number}
        </span>
        <div className="w-10 h-10 rounded-lg bg-zinc-50 border border-zinc-200/80 flex items-center justify-center text-zinc-700 shrink-0" aria-hidden="true">
          {icon}
        </div>
      </div>

      {/* Step Content */}
      <div className="space-y-2">
        <h3 className="text-lg sm:text-xl font-bold text-zinc-950 tracking-tight">
          {title}
        </h3>
        <p className="text-sm text-zinc-600 leading-relaxed font-normal">
          {description}
        </p>
      </div>
    </div>
  </div>
);

export const HowItWorksSection: React.FC = () => {
  return (
    <section id="how-it-works" aria-labelledby="how-it-works-heading" className="py-16 sm:py-24 bg-white border-b border-zinc-200/80">
      <Container className="space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3.5 sm:space-y-4">
          <Badge variant="secondary" className="text-xs font-mono uppercase tracking-wider">
            WORKFLOW PIPELINE
          </Badge>
          <h2 id="how-it-works-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-950 leading-tight">
            From "What should I learn?"<br className="hidden sm:inline" /> to "Here's what I do next."
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 font-normal max-w-2xl mx-auto">
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
              icon={<Code className="w-5 h-5 text-emerald-600" aria-hidden="true" />}
            />
          </li>

          <li className="h-full">
            <StepCard
              number="02"
              title="Get your AI analysis"
              description="Identify strengths, gaps and the highest-impact skills to develop next."
              icon={<Cpu className="w-5 h-5 text-emerald-600" aria-hidden="true" />}
            />
          </li>

          <li className="h-full">
            <StepCard
              number="03"
              title="Follow your roadmap"
              description="Turn the analysis into projects, learning priorities and concrete next actions."
              icon={<MapPin className="w-5 h-5 text-emerald-600" aria-hidden="true" />}
            />
          </li>
        </ol>
      </Container>
    </section>
  );
};
