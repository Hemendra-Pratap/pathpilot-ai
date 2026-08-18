export interface ProductFeature {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: "Target" | "GitBranch" | "Cpu" | "ShieldCheck" | "BarChart3" | "Code2";
  detailItems: string[];
}

export const PRODUCT_FEATURES: ProductFeature[] = [
  {
    id: "skill-diagnostics",
    title: "Deterministic Skill Mapping",
    tagline: "Know exactly where you stand.",
    description: "Evaluates your actual code repos, stack experience, and project complexity rather than relying on self-reported questionnaires.",
    iconName: "Target",
    detailItems: [
      "Codebase pattern analysis",
      "Objective proficiency scoring",
      "Industry benchmark comparison",
    ],
  },
  {
    id: "gap-radar",
    title: "Algorithmic Skill Gap Radar",
    tagline: "Stop learning what you already know.",
    description: "PathPilot identifies your critical blind spots and high-leverage bottlenecks so you don't waste weeks repeating basic tutorials.",
    iconName: "GitBranch",
    detailItems: [
      "High-impact skill prioritizer",
      "Prerequisite chain mapping",
      "Role-specific readiness delta",
    ],
  },
  {
    id: "project-generator",
    title: "Deployable Project Engine",
    tagline: "Build portfolio proof, not tutorial clones.",
    description: "Generates tailored capstone project specifications built directly around your skill gaps, with deployment and architecture benchmarks.",
    iconName: "Cpu",
    detailItems: [
      "Production-grade requirements",
      "Key architectural patterns",
      "Verifiable portfolio artifacts",
    ],
  },
];

export interface HonestPillar {
  title: string;
  description: string;
  badgeText: string;
}

export const HONEST_PILLARS: HonestPillar[] = [
  {
    title: "Zero Fake Proof",
    description: "We don't display fabricated enterprise client logos or fake university badges. You get honest product logic.",
    badgeText: "Authentic Product Concept",
  },
  {
    title: "Calculated Readiness",
    description: "Your readiness score (e.g. 78%) is derived from objective engineering criteria, not arbitrary completion bars.",
    badgeText: "Deterministic Scoring",
  },
  {
    title: "Portfolio Capstones Over Certificates",
    description: "Watching videos doesn't make you job-ready. Deploying production-tested code to real URLs does.",
    badgeText: "Engineering-First",
  },
];
