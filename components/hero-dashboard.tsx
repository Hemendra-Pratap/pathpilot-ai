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
        <span className="text-zinc-700 dark:text-zinc-300 flex items-center space-x-1.5 min-w-0 truncate">
          <span className="truncate">{name}</span>
          {isGap && (
            <span className="shrink-0 inline-flex items-center px-1.5 py-0.2 text-[10px] font-semibold text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/70 border border-amber-200 dark:border-amber-800/80 rounded">
              Priority Gap
            </span>
          )}
        </span>
        <span className="font-mono text-zinc-900 dark:text-zinc-100 font-semibold shrink-0">{percentage}%</span>
      </div>
      <div
        role="progressbar"
        aria-valuenow={percentage}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${name} proficiency level ${percentage}%`}
        className="h-2 w-full bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden p-0.5 border border-zinc-200/60 dark:border-zinc-700/60"
      >
        <div
          style={{ width: `${percentage}%` }}
          className={`h-full rounded-full transition-all duration-700 motion-reduce:transition-none ${
            isGap ? "bg-amber-500" : "bg-emerald-600 dark:bg-emerald-500"
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
      <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-4 sm:p-6 lg:p-7 shadow-xs relative overflow-hidden transition-all duration-200">
        {/* Dashboard Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-zinc-100 dark:border-zinc-800 gap-3">
          <div className="flex items-center space-x-2.5">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" aria-hidden="true" />
            <span className="text-xs font-mono tracking-wider font-semibold uppercase text-zinc-500 dark:text-zinc-400 truncate">
              PATHPILOT // Career Readiness Engine
            </span>
          </div>

          <div className="flex items-center space-x-2 shrink-0">
            <Badge variant="outline" className="text-xs font-mono bg-zinc-50 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border-zinc-200 dark:border-zinc-700">
              Target Role: <span className="font-semibold text-zinc-950 dark:text-zinc-100 ml-1">ML ENGINEER</span>
            </Badge>
            <Badge variant="emerald" className="text-[11px] font-mono dark:bg-emerald-950/60 dark:border-emerald-800 dark:text-emerald-300">
              Live Demo
            </Badge>
          </div>
        </div>

        {/* Main Readiness Gauge & Score Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-5 pb-5 items-center border-b border-zinc-100 dark:border-zinc-800">
          {/* Readiness Score Widget */}
          <div className="md:col-span-5 flex flex-col items-start justify-center p-4 rounded-lg bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200/80 dark:border-zinc-800 w-full">
            <div className="flex items-center space-x-2 text-xs font-medium text-zinc-500 dark:text-zinc-400 mb-1">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" aria-hidden="true" />
              <span>Job Readiness Score</span>
            </div>

            <div className="flex items-baseline space-x-2.5 flex-wrap">
              <span className="text-4xl sm:text-5xl font-bold tracking-tight font-mono text-zinc-950 dark:text-zinc-50">
                {score}%
              </span>
              <span className="text-xs font-medium text-emerald-700 dark:text-emerald-300 bg-emerald-100/80 dark:bg-emerald-950/80 px-2 py-0.5 rounded-full">
                Target: 85%+
              </span>
            </div>

            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-2 leading-relaxed">
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
        <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-emerald-50/50 dark:bg-emerald-950/20 p-4 rounded-lg border border-emerald-200/60 dark:border-emerald-900/40 mt-1">
          <div className="space-y-1 min-w-0">
            <div className="flex items-center space-x-1.5 text-xs font-semibold text-emerald-900 dark:text-emerald-300 uppercase tracking-wide">
              <AlertCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" aria-hidden="true" />
              <span>Recommended Next Best Action</span>
            </div>
            <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 truncate">
              "Build one deployed ML API with monitoring."
            </p>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 truncate">
              Targeting MLOps (43%) gap to boost readiness score by +11%.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={scrollToRoadmap}
              className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2 rounded-md bg-zinc-950 dark:bg-zinc-100 text-white dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-white text-xs font-medium transition-colors shadow-xs group focus-ring min-h-[38px]"
            >
              <span>View Capstone Spec</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-1 text-emerald-400 dark:text-emerald-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Footnote */}
        <div className="pt-3 text-center">
          <p className="text-[11px] text-zinc-400 dark:text-zinc-500 font-mono">
            Interactive product demo visualization
          </p>
        </div>
      </div>
    </div>
  );
};
