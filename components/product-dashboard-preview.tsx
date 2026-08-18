"use client";

import React, { useState } from "react";
import {
  CheckCircle2,
  AlertTriangle,
  Clock,
  Code2,
  ArrowRight,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const ProductDashboardPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"overview" | "gaps" | "project">("overview");

  const scrollToRoadmap = () => {
    const el = document.getElementById("roadmap");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-lg overflow-hidden transition-colors duration-200">
      {/* Top Application Bar */}
      <div className="bg-zinc-950 text-white px-4 sm:px-6 py-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-zinc-800">
        <div className="flex items-center space-x-3">
          <div className="flex space-x-1.5" aria-hidden="true">
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
          </div>
          <span className="h-4 w-px bg-zinc-800 hidden sm:inline-block" aria-hidden="true" />
          <span className="font-mono text-xs text-zinc-400 font-semibold tracking-wider uppercase truncate">
            PathPilot Workspace
          </span>
        </div>

        {/* Tab Controls (Horizontally scrollable on mobile) */}
        <div
          role="tablist"
          aria-label="Dashboard views"
          className="flex items-center bg-zinc-900 p-1 rounded-lg border border-zinc-800 text-xs font-medium max-w-full overflow-x-auto no-scrollbar w-full sm:w-auto"
        >
          <button
            id="tab-overview"
            role="tab"
            aria-selected={activeTab === "overview"}
            aria-controls="panel-overview"
            onClick={() => setActiveTab("overview")}
            className={`px-3 py-1.5 rounded-md transition-all whitespace-nowrap min-h-[36px] flex-1 sm:flex-none text-center focus-ring ${
              activeTab === "overview"
                ? "bg-zinc-800 text-white font-semibold"
                : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            Readiness Overview
          </button>
          <button
            id="tab-gaps"
            role="tab"
            aria-selected={activeTab === "gaps"}
            aria-controls="panel-gaps"
            onClick={() => setActiveTab("gaps")}
            className={`px-3 py-1.5 rounded-md transition-all whitespace-nowrap min-h-[36px] flex-1 sm:flex-none text-center focus-ring ${
              activeTab === "gaps"
                ? "bg-zinc-800 text-white font-semibold"
                : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            Skill Gaps
          </button>
          <button
            id="tab-project"
            role="tab"
            aria-selected={activeTab === "project"}
            aria-controls="panel-project"
            onClick={() => setActiveTab("project")}
            className={`px-3 py-1.5 rounded-md transition-all whitespace-nowrap min-h-[36px] flex-1 sm:flex-none text-center focus-ring ${
              activeTab === "project"
                ? "bg-zinc-800 text-white font-semibold"
                : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            Capstone Spec
          </button>
        </div>
      </div>

      {/* Main Interactive Dashboard View */}
      <div className="p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8 bg-[#FAFAFA] dark:bg-zinc-950/80">
        {/* Header Summary Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 items-stretch">
          {/* Target Role & Readiness Score Widget */}
          <div className="md:col-span-7 bg-white dark:bg-zinc-900 p-5 sm:p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-xs flex flex-col justify-between space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="space-y-1">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  CAREER TARGET
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 dark:text-zinc-50 tracking-tight flex items-center space-x-2">
                  <span>ML Engineer</span>
                  <Badge variant="emerald" className="text-xs font-mono dark:bg-emerald-950/60 dark:border-emerald-800 dark:text-emerald-300">
                    High Demand
                  </Badge>
                </h3>
              </div>

              <div className="text-left sm:text-right">
                <span className="text-xs font-mono font-semibold text-zinc-500 dark:text-zinc-400 uppercase block">
                  READINESS
                </span>
                <span className="text-3xl sm:text-4xl font-bold font-mono text-zinc-950 dark:text-zinc-50">
                  78%
                </span>
              </div>
            </div>

            {/* Overall Progress Gauge Bar */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs text-zinc-600 dark:text-zinc-400 font-medium">
                <span>Current Standing</span>
                <span className="text-emerald-700 dark:text-emerald-400 font-semibold font-mono">
                  Market Ready at 85%
                </span>
              </div>
              <div
                role="progressbar"
                aria-valuenow={78}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label="Market readiness score 78%"
                className="h-2.5 w-full bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden p-0.5 border border-zinc-200 dark:border-zinc-700"
              >
                <div className="h-full bg-emerald-600 dark:bg-emerald-500 rounded-full w-[78%] transition-all duration-500" />
              </div>
            </div>
          </div>

          {/* Quick Metrics Cards */}
          <div className="md:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white dark:bg-zinc-900 p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-xs flex flex-col justify-between space-y-2">
              <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase font-medium">
                STRONG SKILLS
              </span>
              <span className="text-2xl sm:text-3xl font-bold text-emerald-600 dark:text-emerald-400 font-mono">
                3 / 3
              </span>
              <span className="text-xs text-zinc-600 dark:text-zinc-400 font-medium truncate">
                Python, ML, NLP
              </span>
            </div>

            <div className="bg-white dark:bg-zinc-900 p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-xs flex flex-col justify-between space-y-2">
              <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase font-medium">
                DEVELOP NEXT
              </span>
              <span className="text-2xl sm:text-3xl font-bold text-amber-600 dark:text-amber-400 font-mono">
                3 Gaps
              </span>
              <span className="text-xs text-zinc-600 dark:text-zinc-400 font-medium truncate">
                MLOps, Cloud, System Design
              </span>
            </div>
          </div>
        </div>

        {/* Tab Content Panels */}
        {activeTab === "overview" && (
          <div
            id="panel-overview"
            role="tabpanel"
            aria-labelledby="tab-overview"
            className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 transition-all duration-200"
          >
            {/* Skill Matrix Columns */}
            <div className="md:col-span-6 bg-white dark:bg-zinc-900 p-5 sm:p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-zinc-100 dark:border-zinc-800">
                <h4 className="text-sm font-bold text-zinc-950 dark:text-zinc-100 flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" aria-hidden="true" />
                  <span>Strong Skills (Verified)</span>
                </h4>
                <Badge variant="secondary" className="text-[11px] font-mono shrink-0 dark:bg-zinc-800 dark:text-zinc-300">
                  3 Skills
                </Badge>
              </div>

              <ul className="space-y-2.5">
                <li className="flex flex-col sm:flex-row sm:items-center justify-between text-sm p-2.5 rounded-lg bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-100 dark:border-zinc-800 gap-1.5">
                  <span className="font-semibold text-zinc-900 dark:text-zinc-100">Python</span>
                  <span className="font-mono text-xs font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/70 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800/70 self-start sm:self-auto">
                    92% • Expert
                  </span>
                </li>
                <li className="flex flex-col sm:flex-row sm:items-center justify-between text-sm p-2.5 rounded-lg bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-100 dark:border-zinc-800 gap-1.5">
                  <span className="font-semibold text-zinc-900 dark:text-zinc-100">Machine Learning</span>
                  <span className="font-mono text-xs font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/70 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800/70 self-start sm:self-auto">
                    81% • Proficient
                  </span>
                </li>
                <li className="flex flex-col sm:flex-row sm:items-center justify-between text-sm p-2.5 rounded-lg bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-100 dark:border-zinc-800 gap-1.5">
                  <span className="font-semibold text-zinc-900 dark:text-zinc-100">NLP</span>
                  <span className="font-mono text-xs font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/70 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800/70 self-start sm:self-auto">
                    74% • Proficient
                  </span>
                </li>
              </ul>
            </div>

            {/* Develop Next Columns */}
            <div className="md:col-span-6 bg-white dark:bg-zinc-900 p-5 sm:p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-zinc-100 dark:border-zinc-800">
                <h4 className="text-sm font-bold text-zinc-950 dark:text-zinc-100 flex items-center space-x-2">
                  <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0" aria-hidden="true" />
                  <span>Develop Next (Skill Gaps)</span>
                </h4>
                <Badge variant="amber" className="text-[11px] font-mono shrink-0 dark:bg-amber-950/60 dark:border-amber-800 dark:text-amber-300">
                  Action Required
                </Badge>
              </div>

              <ul className="space-y-2.5">
                <li className="flex flex-col sm:flex-row sm:items-center justify-between text-sm p-2.5 rounded-lg bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-800/50 gap-1.5">
                  <span className="font-semibold text-zinc-900 dark:text-zinc-100">MLOps</span>
                  <span className="font-mono text-xs font-bold text-amber-800 dark:text-amber-300 bg-amber-100 dark:bg-amber-950/80 px-2 py-0.5 rounded border border-amber-300 dark:border-amber-800 self-start sm:self-auto">
                    43% • Priority Gap
                  </span>
                </li>
                <li className="flex flex-col sm:flex-row sm:items-center justify-between text-sm p-2.5 rounded-lg bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-100 dark:border-zinc-800 gap-1.5">
                  <span className="font-semibold text-zinc-900 dark:text-zinc-100">Cloud Deployment</span>
                  <span className="font-mono text-xs font-bold text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded self-start sm:self-auto">
                    55% • In Progress
                  </span>
                </li>
                <li className="flex flex-col sm:flex-row sm:items-center justify-between text-sm p-2.5 rounded-lg bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-100 dark:border-zinc-800 gap-1.5">
                  <span className="font-semibold text-zinc-900 dark:text-zinc-100">System Design</span>
                  <span className="font-mono text-xs font-bold text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded self-start sm:self-auto">
                    60% • In Progress
                  </span>
                </li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === "gaps" && (
          <div
            id="panel-gaps"
            role="tabpanel"
            aria-labelledby="tab-gaps"
            className="bg-white dark:bg-zinc-900 p-5 sm:p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-xs space-y-4 transition-all duration-200"
          >
            <h4 className="text-base font-bold text-zinc-950 dark:text-zinc-50">
              Detailed Skill Gap Analysis
            </h4>
            <div className="space-y-3 text-sm text-zinc-600 dark:text-zinc-300">
              <div className="p-4 rounded-lg bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200/70 dark:border-zinc-800 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between font-semibold text-zinc-900 dark:text-zinc-100 gap-1">
                  <span>MLOps & Pipeline Automation (Highest Priority)</span>
                  <span className="text-amber-600 dark:text-amber-400 font-mono text-xs">43% Match</span>
                </div>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  Target roles expect containerized model serving, Prometheus/Grafana monitoring, and automated retraining pipelines.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200/70 dark:border-zinc-800 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between font-semibold text-zinc-900 dark:text-zinc-100 gap-1">
                  <span>Cloud Deployment & Docker</span>
                  <span className="text-zinc-700 dark:text-zinc-400 font-mono text-xs">55% Match</span>
                </div>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  Demonstrating automated deployment via Docker and cloud endpoints directly validates production engineering competency.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "project" && (
          <div
            id="panel-project"
            role="tabpanel"
            aria-labelledby="tab-project"
            className="bg-white dark:bg-zinc-900 p-5 sm:p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-xs space-y-4 transition-all duration-200"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-zinc-100 dark:border-zinc-800">
              <h4 className="text-base font-bold text-zinc-950 dark:text-zinc-50 flex items-center space-x-2">
                <Code2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" aria-hidden="true" />
                <span>Recommended Capstone Spec</span>
              </h4>
              <Badge variant="emerald" className="text-xs font-mono self-start sm:self-auto dark:bg-emerald-950/60 dark:border-emerald-800 dark:text-emerald-300">
                Production Grade
              </Badge>
            </div>

            <div className="space-y-2">
              <h5 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-zinc-100">
                Deploy an NLP API with monitoring
              </h5>
              <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                Build a high-throughput FastAPI inference server wrapping a HuggingFace Transformer model, package it in Docker, stream latency logs to Prometheus, and deploy to Cloud Run.
              </p>
            </div>
          </div>
        )}

        {/* Recommended Capstone Footer Callout */}
        <div className="bg-zinc-950 dark:bg-zinc-900 text-white p-5 sm:p-6 rounded-xl border border-zinc-800 shadow-md flex flex-col md:flex-row md:items-center justify-between gap-5">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="dark" className="text-[11px] uppercase tracking-wider text-emerald-400">
                RECOMMENDED PROJECT
              </Badge>
              <span className="text-xs text-zinc-400 font-mono flex items-center">
                <Clock className="w-3.5 h-3.5 mr-1 shrink-0" aria-hidden="true" />
                Effort: <strong className="text-white ml-1 font-semibold">2–3 weeks</strong>
              </span>
            </div>

            <h4 className="text-lg sm:text-xl font-bold text-white tracking-tight">
              Deploy an NLP API with monitoring
            </h4>
            <p className="text-xs text-zinc-400">
              Targets your <strong>MLOps (43%)</strong> and <strong>Cloud Deployment (55%)</strong> gaps directly.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={scrollToRoadmap}
              className="w-full md:w-auto inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-emerald-600 text-white font-medium text-sm hover:bg-emerald-500 transition-colors shadow-xs group focus-ring min-h-[44px]"
            >
              <span>Explore Project Spec</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
