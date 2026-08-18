import React from "react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { RoadmapExplorer } from "./roadmap-explorer";

export const RoadmapSection: React.FC = () => {
  return (
    <section id="roadmap" aria-labelledby="roadmap-heading" className="py-16 sm:py-24 bg-[#FAFAFA] border-b border-zinc-200/80">
      <Container className="space-y-10 sm:space-y-14">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3.5 sm:space-y-4">
          <Badge variant="emerald" className="text-xs font-mono uppercase tracking-wider">
            INTERACTIVE ROADMAP EXPLORER
          </Badge>
          <h2 id="roadmap-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-950 leading-tight">
            See where your next few steps could take you.
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 font-normal max-w-2xl mx-auto">
            Explore example roadmaps for different engineering paths.
          </p>
        </div>

        {/* State-driven Roadmap Explorer Component */}
        <RoadmapExplorer />
      </Container>
    </section>
  );
};
