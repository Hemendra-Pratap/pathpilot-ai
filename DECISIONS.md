# Decisions

## 1. Approach

Next.js 15 (App Router), TypeScript, and Tailwind CSS were selected to deliver a production-grade product landing page with zero layout shift, strong type safety, and optimal performance.

- **Next.js App Router over Vanilla SPA / Client-Only Vite**: Next.js enables React Server Components (RSC) and static prerendering (SSG). This allows 6 static sections to render without client-side JavaScript overhead, achieving a light 19.5 kB initial bundle compared to a client-heavy Single Page Application (SPA).
- **TypeScript**: Enforces strict contract boundaries across data structures (`RoadmapTrack`, `SkillBarProps`), eliminating runtime property errors.
- **Tailwind CSS**: Provides utility-first styling with zero runtime CSS extraction penalty, ensuring responsive scaling across 375px–1440px viewports.

## 2. Trade-off

**Scope Choice**: The project intentionally prioritizes front-end polish, responsive QA, WAI-ARIA accessibility, and UX density over building a complete backend database or authentication service, as the challenge evaluates the product landing page and interactive demo experience.

**What would be added with a full week**:
1. **Dynamic Intelligence Engine API**: Connect a live backend route (`/api/analyze`) for real-time skill assessment generation from raw user inputs.
2. **Persistence & Auth**: Integrate NextAuth / Clerk with PostgreSQL (Prisma/Drizzle) to save user roadmap progress and portfolio capstone submissions.
3. **Interactive Roadmap Builder**: Allow users to dynamically drag, reorder, and customize skill nodes with automated prerequisite validation.

## 3. AI Usage

AI assistance was utilized transparently throughout development for:
- Initial component structural scaffolding
- Copy exploration and narrative refinement
- Fast diagnostic debugging during Next.js 15 server bundle resolution
- Accessibility (WAI-ARIA tablist & dialog) audits
- Responsive breakpoint cross-browser testing strategy
- Refactoring client components into React Server Components (RSC)

**Verification & Ownership**: Every AI-generated snippet was manually inspected, type-checked, refactored, and empirically validated via static builds (`npm run build`) and type verification (`tsc --noEmit`). No code was shipped without full understanding and verification of its underlying runtime execution.
