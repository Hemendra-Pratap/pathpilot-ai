import React from "react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { ProductDashboardPreview } from "./product-dashboard-preview";

export const ProductShowcaseSection: React.FC = () => {
  return (
    <section aria-labelledby="showcase-heading" className="py-16 sm:py-24 bg-[#EEE9DE] dark:bg-[#181714] border-b border-[#D9D2C5] dark:border-[#34312B] transition-colors duration-200">
      <Container className="space-y-10 sm:space-y-14">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3.5 sm:space-y-4">
          <Badge variant="emerald" className="text-xs font-mono uppercase tracking-wider">
            PRODUCT DEMO VISUALIZATION
          </Badge>
          <h2 id="showcase-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111111] dark:text-[#F5F1E8] leading-tight">
            A clearer view of where you're going.
          </h2>
          <p className="text-base sm:text-lg text-[#5F5A52] dark:text-[#B7B0A4] font-normal max-w-2xl mx-auto">
            PathPilot breaks down your readiness into verifiable skill matrices and recommends high-leverage capstone projects.
          </p>
        </div>

        {/* Large Product Dashboard Preview */}
        <div className="max-w-5xl mx-auto w-full">
          <ProductDashboardPreview />
        </div>
      </Container>
    </section>
  );
};
