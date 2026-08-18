export interface RoadmapNode {
  stepNumber: number;
  title: string;
  category: "Foundations" | "Core Engineering" | "Advanced System" | "Production";
  status: "Mastered" | "In Progress" | "Upcoming" | "Target Milestone";
  description: string;
}

export interface RoadmapTrack {
  id: "ai-ml" | "frontend" | "backend";
  label: string;
  roleTitle: string;
  description: string;
  nodes: RoadmapNode[];
  capstoneHighlight: {
    title: string;
    description: string;
    techStack: string[];
    estimatedWeeks: string;
  };
}

export const ROADMAP_TRACKS: Record<string, RoadmapTrack> = {
  "ai-ml": {
    id: "ai-ml",
    label: "AI / ML",
    roleTitle: "Machine Learning Engineer",
    description: "From Python data foundations to production MLOps and LLM system architecture.",
    nodes: [
      { stepNumber: 1, title: "Python", category: "Foundations", status: "Mastered", description: "NumPy, Pandas, Vectorized Math, Data Structures" },
      { stepNumber: 2, title: "ML fundamentals", category: "Foundations", status: "Mastered", description: "Scikit-Learn, Supervised Learning, XGBoost, Cross-Validation" },
      { stepNumber: 3, title: "NLP / LLM applications", category: "Core Engineering", status: "In Progress", description: "SentenceTransformers, Embeddings, Prompt Engineering, RAG" },
      { stepNumber: 4, title: "MLOps", category: "Advanced System", status: "Upcoming", description: "Experiment Tracking, Feature Stores, Model Registry" },
      { stepNumber: 5, title: "Model deployment", category: "Advanced System", status: "Upcoming", description: "FastAPI Inference Servers, Docker, ONNX Runtime, Batch Serving" },
      { stepNumber: 6, title: "Production ML systems", category: "Production", status: "Target Milestone", description: "Prometheus Monitoring, Drift Detection, Kubernetes Auto-scaling" },
    ],
    capstoneHighlight: {
      title: "Deployed NLP Inference Engine & Monitor",
      description: "Package a transformer embedding pipeline into a containerized FastAPI service with live latency metrics and automated drift alerts.",
      techStack: ["FastAPI", "Docker", "SentenceTransformers", "Prometheus"],
      estimatedWeeks: "2–3 weeks",
    },
  },
  frontend: {
    id: "frontend",
    label: "Frontend",
    roleTitle: "Frontend / UI Architect",
    description: "From modern web primitives to high-performance, accessible Next.js applications.",
    nodes: [
      { stepNumber: 1, title: "HTML / CSS", category: "Foundations", status: "Mastered", description: "Semantic Markup, Modern Layouts, Grid, Flexbox, Responsive Design" },
      { stepNumber: 2, title: "JavaScript", category: "Foundations", status: "Mastered", description: "ESNext Syntax, Async/Await, Closures, DOM Architecture" },
      { stepNumber: 3, title: "React", category: "Core Engineering", status: "Mastered", description: "Hooks, State Architecture, Component Patterns, Virtual DOM" },
      { stepNumber: 4, title: "Next.js", category: "Core Engineering", status: "In Progress", description: "App Router, Server Components, SSR, Static Generation" },
      { stepNumber: 5, title: "Performance", category: "Advanced System", status: "Upcoming", description: "Web Vitals Optimization (LCP/INP), Code Splitting, Bundle Profiling" },
      { stepNumber: 6, title: "Design systems", category: "Production", status: "Target Milestone", description: "Headless UI Primitives, ARIA Accessibility Tokens, Framer Motion" },
    ],
    capstoneHighlight: {
      title: "Accessible Headless Design System",
      description: "Architect a keyboard-accessible, zero-layout-shift UI component library with dark/light design tokens and 100/100 Lighthouse score.",
      techStack: ["Next.js", "Tailwind CSS", "Framer Motion", "ARIA Standards"],
      estimatedWeeks: "2 weeks",
    },
  },
  backend: {
    id: "backend",
    label: "Backend",
    roleTitle: "Backend Systems Engineer",
    description: "From RESTful APIs and SQL schema design to scalable distributed microservices.",
    nodes: [
      { stepNumber: 1, title: "Python", category: "Foundations", status: "Mastered", description: "Type Annotations, Async I/O, Package Management, Unit Testing" },
      { stepNumber: 2, title: "REST APIs", category: "Core Engineering", status: "Mastered", description: "FastAPI/Flask, OpenAPI Spec, Authentication, Middleware" },
      { stepNumber: 3, title: "SQL", category: "Core Engineering", status: "Mastered", description: "Relational Modeling, Indexing, Query Optimization, PostgreSQL" },
      { stepNumber: 4, title: "Docker", category: "Advanced System", status: "In Progress", description: "Multi-stage Builds, Container Security, Docker Compose Stack" },
      { stepNumber: 5, title: "System design", category: "Advanced System", status: "Upcoming", description: "Caching Strategies, Load Balancing, Queue Workers, Idempotency" },
      { stepNumber: 6, title: "Distributed systems", category: "Production", status: "Target Milestone", description: "Rate Limiting, Circuit Breakers, Event-Driven Logs, Telemetry" },
    ],
    capstoneHighlight: {
      title: "Resilient Microservice API Gateway",
      description: "Build an API gateway with distributed token-bucket rate limiting, PostgreSQL connection pooling, and structured JSON telemetry.",
      techStack: ["FastAPI", "PostgreSQL", "Redis", "Docker"],
      estimatedWeeks: "3 weeks",
    },
  },
};
