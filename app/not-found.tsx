import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAFAFA] text-zinc-950 p-4">
      <div className="text-center max-w-md space-y-4">
        <span className="font-mono text-sm font-bold text-emerald-600 uppercase tracking-wider">
          404 — Page Not Found
        </span>
        <h1 className="text-3xl font-bold tracking-tight text-zinc-950">
          Path Not Found
        </h1>
        <p className="text-sm text-zinc-600 leading-relaxed">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-zinc-950 text-white text-sm font-medium hover:bg-zinc-800 transition-colors"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
