"use client";

import React, { useState, useEffect } from "react";
import { Compass, Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    <header className="sticky top-0 z-40 w-full border-b border-zinc-200/80 bg-white/80 backdrop-blur-md transition-colors">
      <Container className="flex items-center justify-between h-16">
        {/* Logo Brand */}
        <div className="flex items-center space-x-3">
          <a
            href="#"
            className="flex items-center space-x-2 text-zinc-950 font-bold text-lg tracking-tight focus-ring rounded-md p-1 -ml-1"
          >
            <div className="w-8 h-8 rounded-lg bg-zinc-950 text-white flex items-center justify-center shadow-xs">
              <Compass className="w-4 h-4 text-emerald-400" aria-hidden="true" />
            </div>
            <span>PathPilot</span>
          </a>

          {/* Status Badge */}
          <Badge
            variant="outline"
            className="text-[11px] px-2 py-0.5 font-mono text-zinc-600 border-zinc-200 flex items-center space-x-1"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
            <span>Beta</span>
          </Badge>
        </div>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center space-x-8 text-sm font-medium text-zinc-600"
          aria-label="Main Navigation"
        >
          <button
            onClick={() => scrollToSection("product")}
            className="hover:text-zinc-950 transition-colors focus-ring rounded px-1 py-0.5"
          >
            Product
          </button>
          <button
            onClick={() => scrollToSection("how-it-works")}
            className="hover:text-zinc-950 transition-colors focus-ring rounded px-1 py-0.5"
          >
            How it works
          </button>
          <button
            onClick={() => scrollToSection("roadmap")}
            className="hover:text-zinc-950 transition-colors focus-ring rounded px-1 py-0.5"
          >
            Roadmap
          </button>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center space-x-3">
          <Button
            onClick={() => scrollToSection("roadmap")}
            size="sm"
            className="group text-xs sm:text-sm font-medium"
          >
            <span>Build my roadmap</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
          </Button>
        </div>

        {/* Mobile Menu Controls */}
        <div className="flex md:hidden items-center space-x-2">
          <Button
            onClick={() => scrollToSection("roadmap")}
            size="sm"
            className="text-xs px-2.5 h-8"
          >
            Build Roadmap
          </Button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-zinc-600 hover:text-zinc-950 focus-ring rounded-md"
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
          className="md:hidden border-t border-zinc-200 bg-white/95 backdrop-blur-lg px-4 py-5 space-y-4 shadow-lg"
        >
          <nav className="flex flex-col space-y-3 font-medium text-zinc-700" aria-label="Mobile Navigation">
            <button
              onClick={() => scrollToSection("product")}
              className="text-left py-2 hover:text-zinc-950 border-b border-zinc-100 focus-ring rounded px-1"
            >
              Product
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-left py-2 hover:text-zinc-950 border-b border-zinc-100 focus-ring rounded px-1"
            >
              How it works
            </button>
            <button
              onClick={() => scrollToSection("roadmap")}
              className="text-left py-2 hover:text-zinc-950 border-b border-zinc-100 focus-ring rounded px-1"
            >
              Roadmap
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};
