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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#11110F]/80 backdrop-blur-sm transition-opacity duration-200"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md overflow-hidden rounded-2xl border border-[#D9D2C5] dark:border-[#34312B] bg-[#FBF9F4] dark:bg-[#1D1B18] p-6 shadow-2xl transition-all transform scale-100 font-sans"
        role="dialog"
        aria-modal="true"
        aria-labelledby="onboarding-title"
        aria-describedby="onboarding-subtitle"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-[#D9D2C5] dark:border-[#34312B]">
          <div className="space-y-1 pr-4">
            <div className="inline-flex items-center space-x-1.5">
              <Badge variant="emerald" className="text-[11px] font-mono uppercase tracking-wider">
                <Sparkles className="w-3 h-3 mr-1" aria-hidden="true" />
                Career Direction
              </Badge>
            </div>
            <h3 id="onboarding-title" className="text-xl font-bold text-[#111111] dark:text-[#F5F1E8] tracking-tight">
              Start with your career direction
            </h3>
            <p id="onboarding-subtitle" className="text-xs text-[#5F5A52] dark:text-[#B7B0A4] leading-relaxed">
              Choose a path to explore a practical development roadmap.
            </p>
          </div>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="p-1.5 text-[#5F5A52] hover:text-[#111111] dark:hover:text-white rounded-lg hover:bg-[#EEE9DE] dark:hover:bg-[#181714] focus-ring transition-colors shrink-0"
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
            className="w-full group text-left p-4 rounded-xl border border-[#D9D2C5] dark:border-[#34312B] hover:border-[#66705A] dark:hover:border-[#A4AF91] bg-[#EEE9DE] dark:bg-[#181714] hover:bg-[#EBECE8] dark:hover:bg-[#1D1B18] transition-all duration-150 focus-ring flex items-center justify-between"
          >
            <div className="flex items-center space-x-3.5 min-w-0">
              <div className="w-10 h-10 rounded-lg bg-[#EBECE8] dark:bg-[#1D1B18] border border-[#D9D2C5] dark:border-[#34312B] flex items-center justify-center text-[#66705A] dark:text-[#A4AF91] shrink-0">
                <Cpu className="w-5 h-5" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <h4 className="text-sm font-bold text-[#111111] dark:text-[#F5F1E8] group-hover:text-[#66705A] dark:group-hover:text-[#A4AF91] transition-colors">
                  AI / ML Engineering
                </h4>
                <p className="text-xs text-[#5F5A52] dark:text-[#B7B0A4] truncate">
                  Python, ML foundations, NLP & MLOps deployment
                </p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-[#5F5A52] group-hover:text-[#66705A] dark:group-hover:text-[#A4AF91] group-hover:translate-x-0.5 transition-all shrink-0 ml-2" aria-hidden="true" />
          </button>

          {/* Frontend Track Option */}
          <button
            onClick={() => handleSelect("frontend")}
            className="w-full group text-left p-4 rounded-xl border border-[#D9D2C5] dark:border-[#34312B] hover:border-[#66705A] dark:hover:border-[#A4AF91] bg-[#EEE9DE] dark:bg-[#181714] hover:bg-[#EBECE8] dark:hover:bg-[#1D1B18] transition-all duration-150 focus-ring flex items-center justify-between"
          >
            <div className="flex items-center space-x-3.5 min-w-0">
              <div className="w-10 h-10 rounded-lg bg-[#EBECE8] dark:bg-[#1D1B18] border border-[#D9D2C5] dark:border-[#34312B] flex items-center justify-center text-[#66705A] dark:text-[#A4AF91] shrink-0">
                <Layout className="w-5 h-5" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <h4 className="text-sm font-bold text-[#111111] dark:text-[#F5F1E8] group-hover:text-[#66705A] dark:group-hover:text-[#A4AF91] transition-colors">
                  Frontend Architecture
                </h4>
                <p className="text-xs text-[#5F5A52] dark:text-[#B7B0A4] truncate">
                  React, Next.js App Router, performance & design systems
                </p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-[#5F5A52] group-hover:text-[#66705A] dark:group-hover:text-[#A4AF91] group-hover:translate-x-0.5 transition-all shrink-0 ml-2" aria-hidden="true" />
          </button>

          {/* Backend Track Option */}
          <button
            onClick={() => handleSelect("backend")}
            className="w-full group text-left p-4 rounded-xl border border-[#D9D2C5] dark:border-[#34312B] hover:border-[#66705A] dark:hover:border-[#A4AF91] bg-[#EEE9DE] dark:bg-[#181714] hover:bg-[#EBECE8] dark:hover:bg-[#1D1B18] transition-all duration-150 focus-ring flex items-center justify-between"
          >
            <div className="flex items-center space-x-3.5 min-w-0">
              <div className="w-10 h-10 rounded-lg bg-[#EBECE8] dark:bg-[#1D1B18] border border-[#D9D2C5] dark:border-[#34312B] flex items-center justify-center text-[#66705A] dark:text-[#A4AF91] shrink-0">
                <Server className="w-5 h-5" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <h4 className="text-sm font-bold text-[#111111] dark:text-[#F5F1E8] group-hover:text-[#66705A] dark:group-hover:text-[#A4AF91] transition-colors">
                  Backend Systems
                </h4>
                <p className="text-xs text-[#5F5A52] dark:text-[#B7B0A4] truncate">
                  Python, REST APIs, PostgreSQL, Docker & microservices
                </p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-[#5F5A52] group-hover:text-[#66705A] dark:group-hover:text-[#A4AF91] group-hover:translate-x-0.5 transition-all shrink-0 ml-2" aria-hidden="true" />
          </button>
        </div>

        {/* Footer info */}
        <div className="pt-3 border-t border-[#D9D2C5] dark:border-[#34312B] text-center">
          <p className="text-[11px] text-[#5F5A52] dark:text-[#B7B0A4]">
            You can switch tracks at any time in the interactive explorer.
          </p>
        </div>
      </div>
    </div>
  );
}
