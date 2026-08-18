import React from "react";
import { Layers, HelpCircle, RefreshCw, Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";

interface ProblemCardProps {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ProblemCard: React.FC<ProblemCardProps> = ({
  number,
  title,
  description,
  icon,
}) => (
  <div className="group rounded-xl border border-[#D9D2C5] dark:border-[#34312B] bg-[#FBF9F4] dark:bg-[#1D1B18] p-6 sm:p-7 shadow-xs hover:border-[#66705A] dark:hover:border-[#A4AF91] transition-all duration-200 flex flex-col justify-between space-y-6 h-full">
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <span className="font-mono text-2xl font-bold text-[#D9D2C5] dark:text-[#34312B] group-hover:text-[#66705A] dark:group-hover:text-[#A4AF91] transition-colors" aria-hidden="true">
          {number}
        </span>
        <div className="w-10 h-10 rounded-lg bg-[#EEE9DE] dark:bg-[#181714] border border-[#D9D2C5] dark:border-[#34312B] flex items-center justify-center text-[#5F5A52] dark:text-[#B7B0A4] group-hover:text-[#66705A] dark:group-hover:text-[#A4AF91] group-hover:bg-[#EBECE8] dark:group-hover:bg-[#1D1B18] transition-colors shrink-0" aria-hidden="true">
          {icon}
        </div>
      </div>

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

export const ProblemSection: React.FC = () => {
  return (
    <section id="problem" aria-labelledby="problem-heading" className="py-16 sm:py-24 bg-[#EEE9DE] dark:bg-[#181714] border-y border-[#D9D2C5] dark:border-[#34312B] transition-colors duration-200">
      <Container className="space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3.5 sm:space-y-4">
          <Badge variant="secondary" className="text-xs font-mono uppercase tracking-wider">
            The Early-Career Reality
          </Badge>
          <h2 id="problem-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111111] dark:text-[#F5F1E8] leading-tight">
            The problem isn't information.<br className="hidden sm:inline" /> It's knowing what matters next.
          </h2>
        </div>

        {/* 3 Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <ProblemCard
            number="01"
            title="Too much information"
            description="Thousands of courses and roadmaps make it harder to know what actually matters."
            icon={<Layers className="w-5 h-5" aria-hidden="true" />}
          />
          <ProblemCard
            number="02"
            title="Generic advice"
            description="Career advice often ignores what you've already learned and built."
            icon={<HelpCircle className="w-5 h-5" aria-hidden="true" />}
          />
          <ProblemCard
            number="03"
            title="No feedback loop"
            description="You learn something new but don't know whether you're actually becoming more job-ready."
            icon={<RefreshCw className="w-5 h-5" aria-hidden="true" />}
          />
        </div>

        {/* Closing Highlight Pill */}
        <div className="text-center pt-2">
          <div className="inline-flex items-center space-x-2.5 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-[#111111] dark:bg-[#F5F1E8] text-white dark:text-[#11110F] font-medium text-xs sm:text-sm shadow-xs">
            <Check className="w-4 h-4 text-[#A4AF91] dark:text-[#66705A] shrink-0" aria-hidden="true" />
            <span>PathPilot turns the noise into a plan.</span>
          </div>
        </div>
      </Container>
    </section>
  );
};
