"use client";

import React, { useEffect, useRef } from "react";
import { X, Sparkles, ArrowRight, Cpu, Layout, Server } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface OnboardingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPath: (trackId: "ai-ml" | "frontend" | "backend") => void;
}

export const OnboardingModal: React.FC<OnboardingModalProps> = ({
  isOpen,
  onClose,
  onSelectPath,
}) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Focus trap / auto-focus on open
  useEffect(() => {
    if (!isOpen) return;
    const timer = setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);
    return () => clearTimeout(timer);
  }, [isOpen]);

  // ESC key handler
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSelect = (trackId: "ai-ml" | "frontend" | "backend") => {
    onSelectPath(trackId);
    onClose();
    // Scroll to roadmap section
    const el = document.getElementById("roadmap");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/75 backdrop-blur-sm transition-opacity duration-200"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-2xl transition-all transform scale-100 font-sans"
        role="dialog"
        aria-modal="true"
        aria-labelledby="onboarding-title"
        aria-describedby="onboarding-subtitle"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-zinc-100 dark:border-zinc-800">
          <div className="space-y-1 pr-4">
            <div className="inline-flex items-center space-x-1.5">
              <Badge variant="emerald" className="text-[11px] font-mono uppercase tracking-wider">
                <Sparkles className="w-3 h-3 mr-1" aria-hidden="true" />
                Career Direction
              </Badge>
            </div>
            <h3 id="onboarding-title" className="text-xl font-bold text-zinc-950 dark:text-zinc-50 tracking-tight">
              Start with your career direction
            </h3>
            <p id="onboarding-subtitle" className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Choose a path to explore a practical development roadmap.
            </p>
          </div>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="p-1.5 text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 focus-ring transition-colors shrink-0"
            aria-label="Close dialog"
          >
            <X className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>

        {/* Path Selection Options */}
        <div className="py-5 space-y-3">
          {/* AI / ML Track Option */}
          <button
            onClick={() => handleSelect("ai-ml")}
            className="w-full group text-left p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-emerald-500 dark:hover:border-emerald-500 bg-zinc-50/50 dark:bg-zinc-800/40 hover:bg-emerald-50/30 dark:hover:bg-emerald-950/20 transition-all duration-150 focus-ring flex items-center justify-between"
          >
            <div className="flex items-center space-x-3.5 min-w-0">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 dark:bg-emerald-950/70 border border-emerald-200 dark:border-emerald-800/60 flex items-center justify-center text-emerald-700 dark:text-emerald-400 shrink-0">
                <Cpu className="w-5 h-5" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <h4 className="text-sm font-bold text-zinc-950 dark:text-zinc-100 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                  AI / ML Engineering
                </h4>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 truncate">
                  Python, ML foundations, NLP & MLOps deployment
                </p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all shrink-0 ml-2" aria-hidden="true" />
          </button>

          {/* Frontend Track Option */}
          <button
            onClick={() => handleSelect("frontend")}
            className="w-full group text-left p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-emerald-500 dark:hover:border-emerald-500 bg-zinc-50/50 dark:bg-zinc-800/40 hover:bg-emerald-50/30 dark:hover:bg-emerald-950/20 transition-all duration-150 focus-ring flex items-center justify-between"
          >
            <div className="flex items-center space-x-3.5 min-w-0">
              <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-950/70 border border-blue-200 dark:border-blue-800/60 flex items-center justify-center text-blue-700 dark:text-blue-400 shrink-0">
                <Layout className="w-5 h-5" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <h4 className="text-sm font-bold text-zinc-950 dark:text-zinc-100 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                  Frontend Architecture
                </h4>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 truncate">
                  React, Next.js App Router, performance & design systems
                </p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all shrink-0 ml-2" aria-hidden="true" />
          </button>

          {/* Backend Track Option */}
          <button
            onClick={() => handleSelect("backend")}
            className="w-full group text-left p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-emerald-500 dark:hover:border-emerald-500 bg-zinc-50/50 dark:bg-zinc-800/40 hover:bg-emerald-50/30 dark:hover:bg-emerald-950/20 transition-all duration-150 focus-ring flex items-center justify-between"
          >
            <div className="flex items-center space-x-3.5 min-w-0">
              <div className="w-10 h-10 rounded-lg bg-amber-100 dark:bg-amber-950/70 border border-amber-200 dark:border-amber-800/60 flex items-center justify-center text-amber-700 dark:text-amber-400 shrink-0">
                <Server className="w-5 h-5" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <h4 className="text-sm font-bold text-zinc-950 dark:text-zinc-100 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                  Backend Systems
                </h4>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 truncate">
                  Python, REST APIs, PostgreSQL, Docker & microservices
                </p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all shrink-0 ml-2" aria-hidden="true" />
          </button>
        </div>

        {/* Footer info */}
        <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800 text-center">
          <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
            You can switch tracks at any time in the interactive explorer.
          </p>
        </div>
      </div>
    </div>
  );
}
