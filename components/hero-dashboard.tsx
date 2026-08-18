"use client";

import React, { useEffect, useState } from "react";
import { ArrowUpRight, Sparkles, AlertCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface SkillBarProps {
  name: string;
  percentage: number;
  isGap?: boolean;
}

const SkillBar: React.FC<SkillBarProps> = ({
  name,
  percentage,
  isGap = false,
}) => {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between text-xs font-medium gap-2">
        <span className="text-[#3F3B36] dark:text-[#F5F1E8] flex items-center space-x-1.5 min-w-0 truncate">
          <span className="truncate">{name}</span>
          {isGap && (
            <span className="shrink-0 inline-flex items-center px-1.5 py-0.2 text-[10px] font-semibold text-[#8C6B2D] dark:text-[#E0BA6D] bg-[#FDF8EE] dark:bg-[#251E14] border border-[#E6D7BD] dark:border-[#4A3D28] rounded">
              Priority Gap
            </span>
          )}
        </span>
        <span className="font-mono text-[#111111] dark:text-[#F5F1E8] font-bold shrink-0">{percentage}%</span>
      </div>
      <div
        role="progressbar"
        aria-valuenow={percentage}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${name} proficiency level ${percentage}%`}
        className="h-2 w-full bg-[#EEE9DE] dark:bg-[#181714] rounded-full overflow-hidden p-0.5 border border-[#D9D2C5] dark:border-[#34312B]"
      >
        <div
          style={{ width: `${percentage}%` }}
          className={`h-full rounded-full transition-all duration-700 motion-reduce:transition-none ${
            isGap ? "bg-[#8C6B2D] dark:bg-[#E0BA6D]" : "bg-[#66705A] dark:bg-[#A4AF91]"
          }`}
        />
      </div>
    </div>
  );
};

export const HeroDashboard: React.FC = () => {
  const [score, setScore] = useState(78);

  useEffect(() => {
    setScore(78);
  }, []);

  const scrollToRoadmap = () => {
    const el = document.getElementById("roadmap");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full">
      <div className="rounded-xl border border-[#D9D2C5] dark:border-[#34312B] bg-[#FBF9F4] dark:bg-[#1D1B18] p-4 sm:p-6 lg:p-7 shadow-xs relative overflow-hidden transition-all duration-200">
        {/* Dashboard Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#D9D2C5] dark:border-[#34312B] gap-3">
          <div className="flex items-center space-x-2.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#66705A] dark:bg-[#A4AF91] shrink-0" aria-hidden="true" />
            <span className="text-xs font-mono tracking-wider font-semibold uppercase text-[#5F5A52] dark:text-[#B7B0A4] truncate">
              PATHPILOT // Career Readiness Engine
            </span>
          </div>

          <div className="flex items-center space-x-2 shrink-0">
            <Badge variant="outline" className="text-xs font-mono bg-[#EEE9DE] dark:bg-[#181714] text-[#5F5A52] dark:text-[#B7B0A4] border-[#D9D2C5] dark:border-[#34312B]">
              Target Role: <span className="font-bold text-[#111111] dark:text-[#F5F1E8] ml-1">ML ENGINEER</span>
            </Badge>
            <Badge variant="emerald" className="text-[11px] font-mono">
              Live Demo
            </Badge>
          </div>
        </div>

        {/* Main Readiness Gauge & Score Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-5 pb-5 items-center border-b border-[#D9D2C5] dark:border-[#34312B]">
          {/* Readiness Score Widget */}
          <div className="md:col-span-5 flex flex-col items-start justify-center p-4 rounded-lg bg-[#EEE9DE] dark:bg-[#181714] border border-[#D9D2C5] dark:border-[#34312B] w-full">
            <div className="flex items-center space-x-2 text-xs font-medium text-[#5F5A52] dark:text-[#B7B0A4] mb-1">
              <Sparkles className="w-3.5 h-3.5 text-[#66705A] dark:text-[#A4AF91] shrink-0" aria-hidden="true" />
              <span>Job Readiness Score</span>
            </div>

            <div className="flex items-baseline space-x-2.5 flex-wrap">
              <span className="text-4xl sm:text-5xl font-bold tracking-tight font-mono text-[#111111] dark:text-[#F5F1E8]">
                {score}%
              </span>
              <span className="text-xs font-semibold text-[#66705A] dark:text-[#A4AF91] bg-[#EBECE8] dark:bg-[#1D1B18] px-2 py-0.5 rounded-full border border-[#D9D2C5] dark:border-[#34312B]">
                Target: 85%+
              </span>
            </div>

            <p className="text-xs text-[#5F5A52] dark:text-[#B7B0A4] mt-2 leading-relaxed">
              Based on 4 target skill evaluations & deployable portfolio capstones.
            </p>
          </div>

          {/* Skill Breakdown List */}
          <div className="md:col-span-7 space-y-3">
            <SkillBar name="Python & Data Architecture" percentage={92} />
            <SkillBar name="Machine Learning Fundamentals" percentage={81} />
            <SkillBar name="NLP & LLM Applications" percentage={74} />
            <SkillBar name="MLOps & Model Deployment" percentage={43} isGap={true} />
          </div>
        </div>

        {/* Next Best Action Card */}
        <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#EBECE8]/80 dark:bg-[#181714] p-4 rounded-lg border border-[#D9D2C5] dark:border-[#34312B] mt-1">
          <div className="space-y-1 min-w-0">
            <div className="flex items-center space-x-1.5 text-xs font-semibold text-[#66705A] dark:text-[#A4AF91] uppercase tracking-wide">
              <AlertCircle className="w-3.5 h-3.5 text-[#66705A] dark:text-[#A4AF91] shrink-0" aria-hidden="true" />
              <span>Recommended Next Best Action</span>
            </div>
            <p className="text-sm font-bold text-[#111111] dark:text-[#F5F1E8] truncate">
              "Build one deployed ML API with monitoring."
            </p>
            <p className="text-xs text-[#5F5A52] dark:text-[#B7B0A4] truncate">
              Targeting MLOps (43%) gap to boost readiness score by +11%.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={scrollToRoadmap}
              className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2 rounded-md bg-[#111111] dark:bg-[#F5F1E8] text-white dark:text-[#11110F] hover:bg-[#2A2927] dark:hover:bg-[#E5E0D5] text-xs font-medium transition-colors shadow-xs group focus-ring min-h-[38px]"
            >
              <span>View Capstone Spec</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-1 text-[#A4AF91] dark:text-[#66705A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Footnote */}
        <div className="pt-3 text-center">
          <p className="text-[11px] text-[#6B665E] dark:text-[#B7B0A4] font-mono">
            Interactive product demo visualization
          </p>
        </div>
      </div>
    </div>
  );
};
