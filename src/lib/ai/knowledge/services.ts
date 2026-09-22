export interface ServiceKnowledgeItem {
  id: string;
  tag: string;
  title: string;
  slug: string;
  path: string;
  overview: string;
  coreCapabilities: string[];
  techStack: string[];
  idealFor: string;
}

export const SERVICES_KNOWLEDGE: ServiceKnowledgeItem[] = [
  {
    id: "web-dev",
    tag: "BUILD",
    title: "Web Platforms & Custom Software",
    slug: "web-development",
    path: "/services/web-development",
    overview: "Custom-built web platforms, Next.js full-stack applications, decoupled microservices, and bespoke business operating systems.",
    coreCapabilities: [
      "Next.js & React Full-Stack Architecture",
      "Decoupled Microservices & High-Throughput REST/GraphQL APIs",
      "Custom Internal Portals, CRM & Business OS",
      "Cloud Infrastructure & CI/CD Pipelines (AWS, Vercel, Docker)"
    ],
    techStack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "Redis", "Docker", "AWS"],
    idealFor: "Startups and enterprises requiring robust, high-performance web systems with zero technical debt."
  },
  {
    id: "mobile-apps",
    tag: "CONNECT",
    title: "Mobile Applications",
    slug: "mobile-apps",
    path: "/services/mobile-apps",
    overview: "High-performance iOS and Android applications with offline-first synchronization, native device integration, and 60fps tactile animations.",
    coreCapabilities: [
      "Cross-Platform Native (React Native / Expo)",
      "Offline-First SQLite / WatermelonDB Sync",
      "Hardware Sensors, BLE, Camera, & Biometrics",
      "Automated App Store & Google Play Submission CI/CD"
    ],
    techStack: ["React Native", "Expo", "TypeScript", "SQLite", "Firebase Cloud Messaging", "Tailwind Native"],
    idealFor: "Businesses wanting tactile consumer apps or enterprise field-service tools that operate reliably anywhere."
  },
  {
    id: "e-commerce",
    tag: "SELL",
    title: "Modern E-commerce",
    slug: "e-commerce",
    path: "/services/e-commerce",
    overview: "Ultra-fast headless digital storefronts, sub-second 1-click checkout engines, and real-time omnichannel inventory synchronization.",
    coreCapabilities: [
      "Headless Storefronts & Sub-second Page Transitions",
      "Multi-Currency & Multi-Gateway Checkout (Stripe, PayPal, Apple Pay, Razorpay)",
      "Real-Time Bi-Directional Inventory Sync with ERP/POS",
      "Faceted Search & AI-driven Product Recommendations"
    ],
    techStack: ["Next.js Commerce", "Shopify Storefront API", "Stripe", "Algolia / Meilisearch", "Redis"],
    idealFor: "Direct-to-consumer (D2C) brands and omnichannel retailers looking to eliminate cart lag and increase conversion rates."
  },
  {
    id: "digital-marketing",
    tag: "GROW",
    title: "Digital Marketing & CRO",
    slug: "digital-marketing",
    path: "/services/digital-marketing",
    overview: "Technical search authority (SEO), server-side conversion tracking (CAPI), high-velocity landing pages, and attribution analytics.",
    coreCapabilities: [
      "Technical Semantic SEO & Structured Schema Architecture",
      "Conversion Rate Optimization (CRO) & Continuous A/B Testing",
      "Server-Side GA4 & Meta Conversions API (CAPI)",
      "Automated Inbound Lead Funnels & Email Lifecycle Workflows"
    ],
    techStack: ["Server-Side GTM", "GA4", "Meta CAPI", "PostHog", "Resend / Klaviyo"],
    idealFor: "Companies ready to scale organic search authority, optimize acquisition cost, and capture high-intent leads."
  },
  {
    id: "ai-automation",
    tag: "INTELLIGENCE",
    title: "AI & Workflow Automation",
    slug: "ai-automation",
    path: "/services/ai-automation",
    overview: "Domain-specific AI copilots, retrieval-augmented generation (RAG) knowledge systems, and autonomous multi-step workflow pipelines.",
    coreCapabilities: [
      "Custom Enterprise AI Copilots & Chat Assistants",
      "Vector Search & Document RAG Knowledge Bases",
      "Autonomous Multi-Step Workflow Pipelines & Tool Calling",
      "Strict Verification Guardrails for 0% Hallucination Reliability"
    ],
    techStack: ["Google Gemini API", "Vector Embeddings", "LangChain / LlamaIndex", "TypeScript", "Pinecone / pgvector"],
    idealFor: "Businesses looking to automate manual back-office tasks, synthesize vast document archives, or provide 24/7 intelligent customer assistance."
  }
];
