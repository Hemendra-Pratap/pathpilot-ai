"use client";

import React, { useState, useRef } from "react";
import { Compass } from "lucide-react";
import { Container } from "@/components/ui/container";
import { EngineerModeModal } from "./engineer-mode-modal";

export const Footer: React.FC = () => {
  const [isEngineerModeOpen, setIsEngineerModeOpen] = useState(false);
  const clickTimestamps = useRef<number[]>([]);

  const handleVersionClick = () => {
    const now = Date.now();
    const recentClicks = [...clickTimestamps.current, now].filter(
      (timestamp) => now - timestamp <= 2000
    );
    clickTimestamps.current = recentClicks;

    if (recentClicks.length >= 5) {
      clickTimestamps.current = [];
      setIsEngineerModeOpen(true);
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <footer className="bg-[#11110F] text-[#B7B0A4] border-t border-[#34312B] py-12 text-sm">
        <Container className="space-y-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo & Tagline */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-[#181714] border border-[#34312B] flex items-center justify-center text-white">
                <Compass className="w-4 h-4 text-[#A4AF91]" aria-hidden="true" />
              </div>
              <span className="font-bold text-base text-[#F5F1E8] tracking-tight">PathPilot</span>
            </div>

            {/* Footer Navigation Links */}
            <nav className="flex flex-wrap justify-center gap-6 text-xs sm:text-sm font-medium text-[#B7B0A4]" aria-label="Footer Navigation">
              <button
                onClick={() => scrollToSection("product")}
                className="hover:text-white transition-colors focus-ring rounded px-1"
              >
                Product
              </button>
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="hover:text-white transition-colors focus-ring rounded px-1"
              >
                How it works
              </button>
              <button
                onClick={() => scrollToSection("roadmap")}
                className="hover:text-white transition-colors focus-ring rounded px-1"
              >
                Roadmaps
              </button>
              <button
                onClick={() => scrollToSection("problem")}
                className="hover:text-white transition-colors focus-ring rounded px-1"
              >
                Resources
              </button>
            </nav>
          </div>

          <div className="pt-8 border-t border-[#34312B] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6B665E]">
            <p>© {new Date().getFullYear()} PathPilot. All rights reserved.</p>

            {/* Tiny v1.0 label - Easter Egg Trigger (5 clicks within 2s) */}
            <button
              onClick={handleVersionClick}
              type="button"
              className="text-[#6B665E] hover:text-[#B7B0A4] font-mono text-[11px] transition-colors focus:outline-none focus:text-[#F5F1E8] cursor-default"
              aria-label="Application version v1.0"
            >
              v1.0
            </button>
          </div>
        </Container>
      </footer>

      {/* Engineer Mode Easter Egg Modal */}
      <EngineerModeModal
        isOpen={isEngineerModeOpen}
        onClose={() => setIsEngineerModeOpen(false)}
      />
    </>
  );
};
