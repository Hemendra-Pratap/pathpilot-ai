"use client";

import React, { useState, useEffect } from "react";
import { Compass, Menu, X, ArrowRight, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";

interface NavbarProps {
  onOpenOnboarding?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenOnboarding }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Read initial theme on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const isDark = document.documentElement.classList.contains("dark");
      setTheme(isDark ? "dark" : "light");
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("pathpilot-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("pathpilot-theme", "light");
    }
  };

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Close mobile menu on Escape key
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#D9D2C5] dark:border-[#34312B] bg-[#F5F1E8]/90 dark:bg-[#11110F]/90 backdrop-blur-md transition-colors duration-200">
      <Container className="flex items-center justify-between h-16">
        {/* Logo Brand */}
        <div className="flex items-center space-x-3">
          <a
            href="#"
            className="flex items-center space-x-2 text-[#111111] dark:text-[#F5F1E8] font-bold text-lg tracking-tight focus-ring rounded-md p-1 -ml-1"
          >
            <div className="w-8 h-8 rounded-lg bg-[#111111] dark:bg-[#F5F1E8] text-white dark:text-[#11110F] flex items-center justify-center shadow-xs">
              <Compass className="w-4 h-4 text-[#A4AF91] dark:text-[#66705A]" aria-hidden="true" />
            </div>
            <span>PathPilot</span>
          </a>

          {/* Status Badge */}
          <Badge
            variant="outline"
            className="text-[11px] px-2 py-0.5 font-mono text-[#5F5A52] dark:text-[#B7B0A4] border-[#D9D2C5] dark:border-[#34312B] flex items-center space-x-1 bg-[#FBF9F4] dark:bg-[#1D1B18]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#66705A] dark:bg-[#A4AF91] animate-pulse" aria-hidden="true" />
            <span>Beta</span>
          </Badge>
        </div>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center space-x-8 text-sm font-medium text-[#5F5A52] dark:text-[#B7B0A4]"
          aria-label="Main Navigation"
        >
          <button
            onClick={() => scrollToSection("product")}
            className="hover:text-[#111111] dark:hover:text-[#F5F1E8] transition-colors focus-ring rounded px-1 py-0.5"
          >
            Product
          </button>
          <button
            onClick={() => scrollToSection("how-it-works")}
            className="hover:text-[#111111] dark:hover:text-[#F5F1E8] transition-colors focus-ring rounded px-1 py-0.5"
          >
            How it works
          </button>
          <button
            onClick={() => scrollToSection("roadmap")}
            className="hover:text-[#111111] dark:hover:text-[#F5F1E8] transition-colors focus-ring rounded px-1 py-0.5"
          >
            Roadmaps
          </button>
          <button
            onClick={() => scrollToSection("problem")}
            className="hover:text-[#111111] dark:hover:text-[#F5F1E8] transition-colors focus-ring rounded px-1 py-0.5"
          >
            Resources
          </button>
        </nav>

        {/* Desktop Controls (Theme Toggle & Get Started CTA) */}
        <div className="hidden md:flex items-center space-x-3">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-[#5F5A52] dark:text-[#B7B0A4] hover:text-[#111111] dark:hover:text-[#F5F1E8] hover:bg-[#EEE9DE] dark:hover:bg-[#181714] focus-ring transition-colors"
            aria-label={theme === "light" ? "Switch to Dark Theme" : "Switch to Light Theme"}
            title={theme === "light" ? "Switch to Dark Theme" : "Switch to Light Theme"}
          >
            {theme === "light" ? (
              <Moon className="w-4 h-4" aria-hidden="true" />
            ) : (
              <Sun className="w-4 h-4 text-[#A4AF91]" aria-hidden="true" />
            )}
          </button>

          {/* Primary CTA */}
          <Button
            onClick={() => {
              if (onOpenOnboarding) {
                onOpenOnboarding();
              } else {
                scrollToSection("roadmap");
              }
            }}
            size="sm"
            className="group text-xs sm:text-sm font-medium bg-[#111111] hover:bg-[#2A2927] dark:bg-[#F5F1E8] dark:text-[#11110F] dark:hover:bg-[#E5E0D5] text-white border border-transparent"
          >
            <span>Get Started</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
          </Button>
        </div>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center space-x-2">
          {/* Theme Toggle Mobile */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-[#5F5A52] dark:text-[#B7B0A4] hover:text-[#111111] dark:hover:text-[#F5F1E8] focus-ring"
            aria-label={theme === "light" ? "Switch to Dark Theme" : "Switch to Light Theme"}
          >
            {theme === "light" ? (
              <Moon className="w-4 h-4" aria-hidden="true" />
            ) : (
              <Sun className="w-4 h-4 text-[#A4AF91]" aria-hidden="true" />
            )}
          </button>

          <Button
            onClick={() => {
              if (onOpenOnboarding) {
                onOpenOnboarding();
              } else {
                scrollToSection("roadmap");
              }
            }}
            size="sm"
            className="text-xs px-3 h-8 bg-[#111111] dark:bg-[#F5F1E8] text-white dark:text-[#11110F]"
          >
            Get Started
          </Button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#5F5A52] dark:text-[#B7B0A4] hover:text-[#111111] dark:hover:text-[#F5F1E8] focus-ring rounded-md"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-drawer"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </Container>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="md:hidden border-t border-[#D9D2C5] dark:border-[#34312B] bg-[#FBF9F4]/95 dark:bg-[#1D1B18]/95 backdrop-blur-lg px-4 py-5 space-y-4 shadow-lg transition-colors"
        >
          <nav className="flex flex-col space-y-3 font-medium text-[#3F3B36] dark:text-[#B7B0A4]" aria-label="Mobile Navigation">
            <button
              onClick={() => scrollToSection("product")}
              className="text-left py-2 hover:text-[#111111] dark:hover:text-white border-b border-[#D9D2C5]/50 dark:border-[#34312B] focus-ring rounded px-1"
            >
              Product
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-left py-2 hover:text-[#111111] dark:hover:text-white border-b border-[#D9D2C5]/50 dark:border-[#34312B] focus-ring rounded px-1"
            >
              How it works
            </button>
            <button
              onClick={() => scrollToSection("roadmap")}
              className="text-left py-2 hover:text-[#111111] dark:hover:text-white border-b border-[#D9D2C5]/50 dark:border-[#34312B] focus-ring rounded px-1"
            >
              Roadmaps
            </button>
            <button
              onClick={() => scrollToSection("problem")}
              className="text-left py-2 hover:text-[#111111] dark:hover:text-white border-b border-[#D9D2C5]/50 dark:border-[#34312B] focus-ring rounded px-1"
            >
              Resources
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};
