export interface SolutionItem {
  id: string;
  problem: string;
  category: string;
  solutionTitle: string;
  tagline: string;
  description: string;
  keyOutcomes: string[];
  recommendedStack: string[];
  relatedServiceSlug: string;
}

export const SOLUTIONS: SolutionItem[] = [
  {
    id: "mvp-idea",
    problem: "I have an idea and need to build a market-ready product.",
    category: "Product / MVP Development",
    solutionTitle: "Rapid Concept-to-Code Engineering",
    tagline: "Turn an idea into a tested, production-grade product ready for initial users and investors.",
    description: "We partner with founders to crystallize core value propositions, build high-speed interactive prototypes, and engineer scalable v1 products within weeks without accumulating technical debt.",
    keyOutcomes: [
      "Working production product ready for real-world user acquisition",
      "Modular, scalable codebase that won't require a ground-up rewrite",
      "Direct integration with payment, auth, and analytics infrastructure",
      "Crisp user journey reducing friction to zero"
    ],
    recommendedStack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase / PostgreSQL", "Stripe"],
    relatedServiceSlug: "web-development"
  },
  {
    id: "ecommerce-scale",
    problem: "I need to sell online with high speed and zero checkout friction.",
    category: "Modern Commerce",
    solutionTitle: "High-Conversion Headless Commerce",
    tagline: "Ultra-fast digital storefronts built to scale across global markets without latency.",
    description: "Eliminate sluggish checkout pages, slow load times, and fragmented inventory. We build custom commerce architectures that integrate seamlessly with your fulfillment operations.",
    keyOutcomes: [
      "Sub-second page navigation and checkout loading times",
      "Automated real-time inventory synchronization across channels",
      "Multi-currency, localized payment gateway integration",
      "Elevated mobile conversion rates with 1-click buy flows"
    ],
    recommendedStack: ["Next.js Commerce", "Shopify Storefront API", "Stripe", "Redis", "Algolia"],
    relatedServiceSlug: "e-commerce"
  },
  {
    id: "manual-processes",
    problem: "My business relies on repetitive, error-prone manual processes.",
    category: "Workflow Automation",
    solutionTitle: "Autonomous Operational Pipelines",
    tagline: "Connect your tools and automate routine workflows with zero manual intervention.",
    description: "We map your team's repetitive tasks—from client onboarding to invoice reconciliation—and build resilient automation pipelines that run 24/7 in the background.",
    keyOutcomes: [
      "Dozens of weekly hours reclaimed across operations and support",
      "Human-error rates dropped to near zero across data entry",
      "Real-time data synchronization between CRM, accounting, and messaging",
      "Instant automated notification hooks for mission-critical events"
    ],
    recommendedStack: ["n8n", "Node.js", "FastAPI", "Webhooks", "PostgreSQL", "Slack API"],
    relatedServiceSlug: "ai-automation"
  },
  {
    id: "ai-integration",
    problem: "I want AI inside my business workflow to drive decisions and customer service.",
    category: "AI Integration",
    solutionTitle: "Embedded Intelligence & Copilots",
    tagline: "Bespoke LLM agents and semantic knowledge systems built specifically for your domain.",
    description: "Move beyond generic ChatGPT prompts. We embed domain-specific AI agents that search your private knowledge base, answer customer questions accurately, and orchestrate actions across your apps.",
    keyOutcomes: [
      "Instant, citation-backed answers from your internal documentation",
      "24/7 intelligent customer inquiry handling and lead scoring",
      "Automated summarization and structured data extraction from files",
      "Safe, sandboxed execution with strict evaluation guardrails"
    ],
    recommendedStack: ["OpenAI / Claude API", "LangChain", "Pinecone", "Python", "Next.js"],
    relatedServiceSlug: "ai-automation"
  },
  {
    id: "digital-refresh",
    problem: "Our digital experience is outdated and fails to represent our technical capabilities.",
    category: "Digital Transformation",
    solutionTitle: "Design System & Frontend Modernization",
    tagline: "Re-architect your customer-facing digital presence with editorial typography and high-end interaction.",
    description: "Transform an outdated legacy interface into an international-grade digital product that builds immediate credibility and captivates discerning clients.",
    keyOutcomes: [
      "Striking, modern visual identity and cohesive design tokens",
      "Flawless responsiveness across all devices and screen resolutions",
      "Substantial uplift in organic search ranking and user engagement",
      "Effortless content editing and publishing workflows"
    ],
    recommendedStack: ["Next.js", "Tailwind CSS", "Framer Motion", "GSAP", "Vercel"],
    relatedServiceSlug: "web-development"
  },
  {
    id: "custom-platform",
    problem: "Off-the-shelf software cannot handle our specific operational complexity.",
    category: "Custom Software",
    solutionTitle: "Bespoke Platform Architecture",
    tagline: "Tailor-made software built around your exact business logic and data compliance needs.",
    description: "When commercial SaaS creates operational bottlenecks, we build dedicated platforms that match your workflows exactly, giving you complete ownership of your technology.",
    keyOutcomes: [
      "100% tailored functionality with no redundant third-party bloat",
      "Granular role-based permissions and audit logging",
      "Complete data sovereignty and dedicated cloud infrastructure",
      "No ongoing per-seat software licensing fees"
    ],
    recommendedStack: ["NestJS", "TypeScript", "PostgreSQL", "Docker", "AWS", "Prisma"],
    relatedServiceSlug: "custom-software"
  }
];
