"use client";

import React, { useState, useRef } from "react";
import {
  Clock,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ROADMAP_TRACKS, RoadmapTrack } from "@/data/roadmapData";

export const RoadmapExplorer: React.FC = () => {
  const [activeTrackId, setActiveTrackId] = useState<"ai-ml" | "frontend" | "backend">("ai-ml");
  const tabListRef = useRef<HTMLDivElement>(null);

  const currentTrack: RoadmapTrack = ROADMAP_TRACKS[activeTrackId];

  // Keyboard navigation handler for WAI-ARIA Tabs
  const handleKeyDown = (e: React.KeyboardEvent, currentId: "ai-ml" | "frontend" | "backend") => {
    const tracks: ("ai-ml" | "frontend" | "backend")[] = ["ai-ml", "frontend", "backend"];
    const currentIndex = tracks.indexOf(currentId);

    if (e.key === "ArrowRight") {
      e.preventDefault();
      const nextIndex = (currentIndex + 1) % tracks.length;
      setActiveTrackId(tracks[nextIndex]);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      const prevIndex = (currentIndex - 1 + tracks.length) % tracks.length;
      setActiveTrackId(tracks[prevIndex]);
    }
  };

  return (
    <div className="w-full space-y-6 sm:space-y-8">
      {/* Track Selection Switcher (Segmented Controls) */}
      <div className="flex justify-center w-full">
        <div
          ref={tabListRef}
          role="tablist"
          aria-label="Engineering Career Paths"
          className="inline-flex items-center p-1.5 rounded-xl bg-zinc-200/70 border border-zinc-200 text-zinc-600 shadow-xs max-w-full overflow-x-auto no-scrollbar w-full sm:w-auto"
        >
          {(["ai-ml", "frontend", "backend"] as const).map((trackId) => {
            const track = ROADMAP_TRACKS[trackId];
            const isActive = activeTrackId === trackId;

            return (
              <button
                key={trackId}
                role="tab"
                id={`tab-${trackId}`}
                aria-selected={isActive}
                aria-controls={`panel-${trackId}`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActiveTrackId(trackId)}
                onKeyDown={(e) => handleKeyDown(e, trackId)}
                className={`relative px-4 sm:px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-150 focus-ring whitespace-nowrap min-h-[44px] flex-1 sm:flex-none flex items-center justify-center ${
                  isActive
                    ? "bg-white text-zinc-950 shadow-xs border border-zinc-200"
                    : "text-zinc-600 hover:text-zinc-950 hover:bg-zinc-200/50"
                }`}
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <span>{track.label}</span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" aria-hidden="true" />
                  )}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Roadmap Content Display Panel */}
      <div
        id={`panel-${activeTrackId}`}
        role="tabpanel"
        aria-labelledby={`tab-${activeTrackId}`}
        className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start transition-all duration-200"
      >
        {/* Left Column: Sequential Skill Nodes List */}
        <div className="lg:col-span-7 bg-white p-5 sm:p-7 rounded-2xl border border-zinc-200 shadow-xs space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-zinc-100 gap-2">
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-500 block">
                TARGET PATH
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
                {currentTrack.roleTitle}
              </h3>
            </div>

            <Badge variant="emerald" className="text-xs font-mono self-start sm:self-auto shrink-0">
              6 Progression Nodes
            </Badge>
          </div>

          <p className="text-sm text-zinc-600 leading-relaxed font-normal">
            {currentTrack.description}
          </p>

          {/* 6 Step Nodes Sequence */}
          <ol className="space-y-3" aria-label={`Steps for ${currentTrack.roleTitle}`}>
            {currentTrack.nodes.map((node) => (
              <li
                key={node.stepNumber}
                className="flex items-start space-x-3 sm:space-x-3.5 p-3 sm:p-3.5 rounded-xl bg-zinc-50 border border-zinc-200/70 hover:border-zinc-300 transition-colors"
              >
                <div className="shrink-0 w-7 h-7 rounded-lg bg-zinc-950 text-white font-mono text-xs font-bold flex items-center justify-center shadow-xs mt-0.5" aria-hidden="true">
                  {node.stepNumber}
                </div>

                <div className="flex-1 space-y-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="text-sm font-bold text-zinc-900 truncate">
                      {node.title}
                    </span>
                    <span
                      className={`text-[11px] font-mono font-semibold px-2 py-0.5 rounded border self-start sm:self-auto shrink-0 ${
                        node.status === "Mastered"
                          ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                          : node.status === "In Progress"
                          ? "bg-blue-50 text-blue-800 border-blue-200"
                          : node.status === "Upcoming"
                          ? "bg-zinc-100 text-zinc-700 border-zinc-200"
                          : "bg-amber-50 text-amber-800 border-amber-200"
                      }`}
                    >
                      {node.status}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-500 font-normal leading-relaxed">
                    {node.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Right Column: Capstone Portfolio Card */}
        <div className="lg:col-span-5 space-y-5">
          <div className="bg-zinc-950 text-white p-5 sm:p-7 rounded-2xl border border-zinc-800 shadow-lg space-y-5">
            <div className="space-y-2">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <Badge variant="dark" className="text-[11px] uppercase tracking-wider text-emerald-400 font-mono">
                  RECOMMENDED CAPSTONE
                </Badge>
                <span className="text-xs text-zinc-400 font-mono flex items-center">
                  <Clock className="w-3.5 h-3.5 mr-1 text-zinc-500 shrink-0" aria-hidden="true" />
                  {currentTrack.capstoneHighlight.estimatedWeeks}
                </span>
              </div>

              <h4 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                {currentTrack.capstoneHighlight.title}
              </h4>
            </div>

            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              {currentTrack.capstoneHighlight.description}
            </p>

            {/* Tech Stack Pills */}
            <div className="space-y-2 pt-3 border-t border-zinc-800">
              <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block">
                KEY SKILLS VERIFIED
              </span>
              <div className="flex flex-wrap gap-1.5">
                {currentTrack.capstoneHighlight.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs font-mono bg-zinc-900 border border-zinc-800 text-zinc-200 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Button */}
            <div className="pt-1">
              <button
                onClick={() => {
                  const el = document.getElementById("cta");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full inline-flex items-center justify-center px-4 py-3 rounded-lg bg-emerald-600 text-white font-semibold text-sm hover:bg-emerald-500 transition-colors shadow-xs group focus-ring min-h-[44px]"
              >
                <span>Build This Roadmap</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Honest Insight Callout */}
          <div className="p-5 rounded-xl bg-white border border-zinc-200 shadow-xs space-y-2">
            <div className="flex items-center space-x-2 text-xs font-semibold text-zinc-950 uppercase tracking-wider font-mono">
              <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" aria-hidden="true" />
              <span>Deterministic Ordering</span>
            </div>
            <p className="text-xs text-zinc-600 leading-relaxed">
              Notice how prerequisites build directly into production capstones. You don't skip steps; you build verifiable engineering proof.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
