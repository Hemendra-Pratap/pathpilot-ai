# PathPilot

PathPilot turns your skills, projects, and career goals into a personalized roadmap for what to learn, build, and do next.

## Live Demo

[https://pathpilot-ai.vercel.app](https://pathpilot-ai.vercel.app)

## Overview

PathPilot is a career intelligence and readiness platform designed for early-career software engineers. It replaces generic career advice with deterministic skill-gap analysis, readiness scoring, and high-impact portfolio capstone recommendations.

## Features

- **Career Readiness Dashboard Concept**: Real-time readiness gauge and verified skill matrix breakdown.
- **Interactive Career Roadmap Explorer**: State-driven progression tracks for AI/ML, Frontend, and Backend Engineering.
- **Interactive Career Direction Onboarding**: Guided modal for selecting target engineering paths.
- **Light & Dark Mode**: Persistent theme switching powered by `localStorage` and CSS variables.
- **Responsive Product Landing Page**: Pixel-perfect layout optimization across mobile (375px–412px), tablet, and desktop (1440px) viewports.
- **Animated Readiness Visualization**: Smooth CSS progress bars and state transitions supporting `prefers-reduced-motion`.
- **Engineer Mode Easter Egg**: Hidden terminal modal triggered by clicking the footer `v1.0` version label 5 times within 2 seconds.

## Tech Stack

- **Framework**: Next.js 15 (App Router & React Server Components)
- **Language**: TypeScript
- **Styling**: Tailwind CSS (with Class-based Dark Mode)
- **Icons**: Lucide React
- **Typography**: Next.js Google Fonts (`Inter` & `JetBrains Mono`)

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build

```bash
npm run build
```

Runs type validation and creates an optimized static production build.

## Design Notes

PathPilot prioritizes visual hierarchy, editorial typography, and functional UI density. The interface uses a crisp neutral palette (`zinc-950`, `white`, `zinc-50`) paired with purposeful accent colors (`emerald-600` for verified readiness and `amber-500` for priority gaps) to deliver a clear, premium product experience in both light and dark mode.
