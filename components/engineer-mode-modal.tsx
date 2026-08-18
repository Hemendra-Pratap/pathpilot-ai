"use client";

import React, { useEffect, useState, useRef } from "react";
import { X, Terminal, CheckCircle2, Rocket } from "lucide-react";

interface EngineerModeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EngineerModeModal: React.FC<EngineerModeModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [logs, setLogs] = useState<string[]>([]);
  const [isDone, setIsDone] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const sequence = [
    "> initializing engineer mode...",
    "> checking dependencies...",
    "> checking responsive layout...",
    "> checking vibes...",
  ];

  useEffect(() => {
    if (!isOpen) {
      setLogs([]);
      setIsDone(false);
      return;
    }

    // Auto-focus close button for keyboard accessibility
    const focusTimeout = setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    // Check prefers-reduced-motion
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setLogs(sequence);
      setIsDone(true);
      return () => clearTimeout(focusTimeout);
    }

    const timers: NodeJS.Timeout[] = [];
    sequence.forEach((line, index) => {
      const t = setTimeout(() => {
        setLogs((prev) => [...prev, line]);
        if (index === sequence.length - 1) {
          const doneT = setTimeout(() => setIsDone(true), 350);
          timers.push(doneT);
        }
      }, (index + 1) * 350);
      timers.push(t);
    });

    return () => {
      clearTimeout(focusTimeout);
      timers.forEach((t) => clearTimeout(t));
    };
  }, [isOpen]);

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

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-md transition-opacity duration-200"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg overflow-hidden border border-zinc-800 rounded-xl bg-zinc-950 text-zinc-100 shadow-2xl font-mono text-sm transform transition-all duration-200 scale-100"
        role="dialog"
        aria-modal="true"
        aria-labelledby="engineer-mode-title"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800 bg-zinc-900/60">
          <div className="flex items-center space-x-2">
            <Terminal className="w-4 h-4 text-emerald-400" aria-hidden="true" />
            <span id="engineer-mode-title" className="text-xs font-semibold tracking-wider text-zinc-300 uppercase">
              Engineer Mode
            </span>
          </div>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="p-1 text-zinc-400 rounded-md hover:text-white hover:bg-zinc-800 focus-ring"
            aria-label="Close Engineer Mode"
          >
            <X className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>

        {/* Terminal Console Output */}
        <div className="p-5 space-y-3 min-h-[220px]">
          {logs.map((log, idx) => (
            <div
              key={idx}
              className="text-zinc-300 transition-opacity duration-150 motion-reduce:transition-none"
            >
              {log}
            </div>
          ))}

          {isDone && (
            <div className="pt-4 space-y-3 border-t border-zinc-800/80 transition-all duration-200 motion-reduce:transition-none">
              <div className="flex items-center space-x-2 text-emerald-400 font-semibold">
                <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
                <span>✓ Everything looks suspiciously fine.</span>
              </div>
              <div className="flex items-center space-x-2 text-emerald-400 font-bold text-base">
                <Rocket className="w-5 h-5" aria-hidden="true" />
                <span>🚀 Ship it.</span>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-4 py-2.5 border-t border-zinc-800 bg-zinc-900/40 text-xs text-zinc-500 flex justify-between items-center">
          <span>PathPilot Terminal</span>
          <span>Press <kbd className="px-1.5 py-0.5 text-[10px] bg-zinc-800 border border-zinc-700 rounded text-zinc-300">ESC</kbd> to close</span>
        </div>
      </div>
    </div>
  );
};
