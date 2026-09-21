export interface ServiceCapability {
  id: string;
  slug: string;
  number: string;
  tag: string;
  title: string;
  shortDesc: string;
  heroHeadline: string;
  fullDesc: string;
  capabilities: {
    name: string;
    description: string;
  }[];
  techStack: string[];
  process: {
    step: string;
    title: string;
    desc: string;
  }[];
  deliverables: string[];
}

export const SERVICES: ServiceCapability[] = [
  {
    id: "web-dev",
    slug: "web-development",
    number: "01",
    tag: "BUILD",
    title: "Web Development",
    shortDesc: "High-performance web applications, fluid digital experiences, and scalable cloud frontends engineered for modern business velocity.",
    heroHeadline: "Web platforms engineered for uncompromising speed, precision, and longevity.",
    fullDesc: "We design and build bespoke web platforms that bridge sophisticated interaction design with robust, enterprise-grade architecture. Every codebase is optimized for Core Web Vitals, modularity, and effortless scale.",
    capabilities: [
      {
        name: "Full-Stack Web Applications",
        description: "Modern Single Page & Server-Rendered web applications built with Next.js, React, and TypeScript."
      },
      {
        name: "Headless & Jamstack Architectures",
        description: "Decoupled frontend layers connecting to headless CMS, APIs, and microservices for maximum agility."
      },
      {
        name: "Interactive & Motion Experiences",
        description: "Engaging digital storytelling through GPU-accelerated SVG, WebGL, GSAP, and smooth scroll interactions."
      },
      {
        name: "Performance & SEO Engineering",
        description: "Deep audit, optimization, semantic structured data, and sub-second page delivery across global CDNs."
      }
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "GraphQL", "PostgreSQL", "Vercel"],
    process: [
      { step: "01", title: "Architecture Design", desc: "Mapping component hierarchies, data flows, and state management systems." },
      { step: "02", title: "Interface Prototyping", desc: "High-fidelity interactive prototypes ensuring fluid user journeys." },
      { step: "03", title: "Precision Engineering", desc: "Writing clean, type-safe code with modular design system tokens." },
      { step: "04", title: "Optimization & Deployment", desc: "Rigorous performance audits, automated CI/CD, and global CDN caching." }
    ],
    deliverables: [
      "Production-ready Next.js repository",
      "Tailwind-based Design System Token library",
      "Full API & Webhook integration suite",
      "Automated CI/CD deployment pipelines",
      "Lighthouse 95+ performance compliance report"
    ]
  },
  {
    id: "mobile-apps",
    slug: "mobile-apps",
    number: "02",
    tag: "CONNECT",
    title: "Mobile Applications",
    shortDesc: "Native and cross-platform mobile apps engineered for fluid gestures, offline resilience, and seamless ecosystem connectivity.",
    heroHeadline: "Mobile experiences that feel tactile, responsive, and indispensable.",
    fullDesc: "From zero-to-one product launches to scaling enterprise mobile ecosystems, we engineer iOS and Android applications with native-grade performance, intuitive gestures, and offline-first data sync.",
    capabilities: [
      {
        name: "Cross-Platform Engineering",
        description: "Single-codebase multi-platform apps using React Native and Flutter with native performance parity."
      },
      {
        name: "Offline-First Data Sync",
        description: "Resilient local storage architecture with automatic conflict resolution and background syncing."
      },
      {
        name: "Native Hardware & Sensor Integration",
        description: "Deep integration with Biometrics, Bluetooth, GPS, Cameras, and Push Notification protocols."
      },
      {
        name: "App Store Lifecycle Management",
        description: "End-to-end compliance, beta testing pipelines via TestFlight/Google Play Console, and release automation."
      }
    ],
    techStack: ["React Native", "Flutter", "TypeScript", "Swift", "Kotlin", "Firebase", "GraphQL", "SQLite"],
    process: [
      { step: "01", title: "UX Flow Mapping", desc: "Architecting thumb-friendly navigation and gesture ergonomics." },
      { step: "02", title: "Native Bridge Design", desc: "Setting up native modules, local databases, and caching rules." },
      { step: "03", title: "Component Construction", desc: "Building fluid 60fps UI components and micro-interactions." },
      { step: "04", title: "Store Submission & Monitoring", desc: "Publishing, automated crash analytics, and telemetry setup." }
    ],
    deliverables: [
      "iOS & Android compiled production binaries",
      "Modular React Native / Flutter codebase",
      "Offline caching & sync engine",
      "Push notification dispatch architecture",
      "App Store & Google Play listing assets"
    ]
  },
  {
    id: "e-commerce",
    slug: "e-commerce",
    number: "03",
    tag: "SELL",
    title: "E-commerce",
    shortDesc: "Customizable, high-converting digital storefronts and commerce platforms engineered for checkout speed and seamless inventory sync.",
    heroHeadline: "Commerce platforms engineered to turn interest into immediate transactions.",
    fullDesc: "We build bespoke digital commerce experiences that eliminate checkout friction, provide real-time inventory management, and scale seamlessly during peak traffic bursts.",
    capabilities: [
      {
        name: "Custom Headless Storefronts",
        description: "Lightning-fast commerce experiences decoupling visual frontend from back-office inventory engines."
      },
      {
        name: "Multi-Gateway Payment Integration",
        description: "Secure, PCI-compliant payment flows supporting Stripe, Razorpay, Apple Pay, Google Pay, and localized methods."
      },
      {
        name: "Inventory & Order Orchestration",
        description: "Real-time stock tracking, ERP synchronization, automated invoicing, and fulfillment webhooks."
      },
      {
        name: "Conversion Optimization & Analytics",
        description: "Cart abandonment mitigation, dynamic product recommendation modules, and deep revenue telemetry."
      }
    ],
    techStack: ["Next.js Commerce", "Shopify Plus / Storefront API", "Stripe", "PostgreSQL", "Redis", "Tailwind CSS", "Algolia"],
    process: [
      { step: "01", title: "Commerce Modeling", desc: "Structuring SKU taxonomy, pricing matrices, and tax/shipping logic." },
      { step: "02", title: "Storefront UX", desc: "Designing frictionless product discovery, filters, and 1-click checkouts." },
      { step: "03", title: "Gateway & Backend Plumbing", desc: "Secure webhook handlers, idempotency keys, and order dispatch." },
      { step: "04", title: "Load & Security Testing", desc: "Simulating peak concurrency, penetration tests, and checkout resilience." }
    ],
    deliverables: [
      "Custom high-speed Headless storefront",
      "Secure Multi-currency payment gateway integrations",
      "Inventory & Order management dashboard",
      "Automated transactional email & SMS triggers",
      "Conversion tracking & analytics pipeline"
    ]
  },
  {
    id: "digital-marketing",
    slug: "digital-marketing",
    number: "04",
    tag: "GROW",
    title: "Digital Marketing & Growth",
    shortDesc: "Data-driven organic search authority, technical SEO architecture, performance marketing infrastructure, and conversion funnels.",
    heroHeadline: "Growth systems engineered with scientific data, not vague speculation.",
    fullDesc: "We build measurable growth engines that compound over time. Combining technical SEO, conversion rate engineering, and analytics infrastructure to systematically lower acquisition costs.",
    capabilities: [
      {
        name: "Technical SEO & Semantic Web",
        description: "Schema.org markup, core web vitals tuning, dynamic sitemaps, and deep crawl optimization."
      },
      {
        name: "Funnel Engineering & CRO",
        description: "A/B test architecture, behavioral heatmapping, and micro-copy tuning to elevate conversion velocity."
      },
      {
        name: "Analytics & Telemetry Infrastructure",
        description: "Cookieless privacy-first event tracking, server-side Google Tag Manager, and custom attribution models."
      },
      {
        name: "Performance Campaign Systems",
        description: "High-intent landing pages, dynamic creative automation, and retention email automation flows."
      }
    ],
    techStack: ["Google Tag Manager (Server-Side)", "GA4", "PostHog", "Semrush API", "Mixpanel", "HubSpot", "Zapier"],
    process: [
      { step: "01", title: "Growth & Search Audit", desc: "Dissecting keyword landscapes, technical debt, and drop-off leakages." },
      { step: "02", title: "Funnel Architecture", desc: "Building high-converting landing page templates and capture hooks." },
      { step: "03", title: "Tracking Deployment", desc: "Setting up server-side event streaming and revenue attribution." },
      { step: "04", title: "Iteration & Optimization", desc: "Continuous multivariate testing and algorithmic campaign refinement." }
    ],
    deliverables: [
      "Complete Technical SEO audit and remediation blueprint",
      "Custom Server-side analytics setup",
      "High-converting landing page design system",
      "Automated email nurture & lead qualification workflows",
      "Live performance telemetry dashboard"
    ]
  },
  {
    id: "ai-automation",
    slug: "ai-automation",
    number: "05",
    tag: "INTELLIGENCE",
    title: "AI & Automation",
    shortDesc: "Intelligent LLM agents, semantic search systems, automated workflow pipelines, and custom machine learning integrations.",
    heroHeadline: "Artificial intelligence embedded where it actually saves hours and drives decisions.",
    fullDesc: "We bring modern AI out of hypothetical sandboxes and directly into your day-to-day business operations. From custom enterprise RAG pipelines to autonomous multi-step workflow agents.",
    capabilities: [
      {
        name: "Custom AI Agents & Copilots",
        description: "Task-specific autonomous agents capable of interacting with your internal tools, databases, and APIs."
      },
      {
        name: "Semantic Search & RAG Knowledge Systems",
        description: "Vector database integration enabling instant, hallucination-free retrieval across proprietary documents."
      },
      {
        name: "Workflow & Business Automation",
        description: "Zero-touch operational pipelines connecting CRMs, finance tools, communication channels, and databases."
      },
      {
        name: "Intelligent Lead Qualification & Support",
        description: "24/7 conversational interfaces that understand nuances, classify intent, and take proactive actions."
      }
    ],
    techStack: ["OpenAI API", "Anthropic Claude", "LangChain", "LlamaIndex", "Pinecone", "Qdrant", "Python", "FastAPI", "n8n"],
    process: [
      { step: "01", title: "Workflow Decomposition", desc: "Identifying high-friction manual operational bottlenecks and data silos." },
      { step: "02", title: "Model & Vector Architecture", desc: "Selecting optimal LLMs, embedding models, and vector chunking strategies." },
      { step: "03", title: "Integration & Tool Calling", desc: "Connecting agents securely to internal APIs with guardrails and validation." },
      { step: "04", title: "Evaluation & Deployment", desc: "Benchmarking accuracy, latency, token costs, and automated fallbacks." }
    ],
    deliverables: [
      "Fully integrated AI Agent / Copilot system",
      "Vector database & knowledge retrieval pipeline",
      "Automated business workflow recipes (n8n/custom microservices)",
      "Guardrail & evaluation testing harness",
      "Token usage & performance monitoring console"
    ]
  },
  {
    id: "custom-software",
    slug: "custom-software",
    number: "06",
    tag: "SYSTEMS",
    title: "Custom Software & Digital Platforms",
    shortDesc: "Bespoke SaaS architectures, internal business operating systems, and distributed cloud microservices built for scalability.",
    heroHeadline: "Bespoke digital foundations engineered around your exact operational logic.",
    fullDesc: "When off-the-shelf software falls short, we design and engineer custom software systems that map precisely to your organizational rules, security requirements, and long-term vision.",
    capabilities: [
      {
        name: "SaaS Product Engineering",
        description: "Multi-tenant architectures, subscription billing, organization management, and role-based access control."
      },
      {
        name: "Internal Business OS & Portals",
        description: "Custom operational software consolidating spreadsheets, dispatching tasks, and tracking company metrics."
      },
      {
        name: "API Design & Distributed Services",
        description: "High-throughput REST and GraphQL APIs with strict typing, rate limiting, and event streaming."
      },
      {
        name: "Cloud Infrastructure & DevOps",
        description: "Infrastructure as Code (Terraform), Dockerized deployments, automated backups, and serverless compute."
      }
    ],
    techStack: ["Node.js", "NestJS", "TypeScript", "PostgreSQL", "Prisma", "Redis", "Docker", "AWS", "GitHub Actions"],
    process: [
      { step: "01", title: "Domain Modeling", desc: "Translating business logic into rigorous entity relationship diagrams." },
      { step: "02", title: "Schema & API Contracts", desc: "Defining OpenAPI specifications and database migration schemas." },
      { step: "03", title: "Core Platform Build", desc: "Iterative development with automated integration tests and security reviews." },
      { step: "04", title: "Cloud Deployment", desc: "Multi-region deployment with automated failover and telemetry logging." }
    ],
    deliverables: [
      "Complete custom software platform repository",
      "Type-safe API backend with documentation",
      "Relational database schema with automated migrations",
      "Role-Based Access Control (RBAC) security layer",
      "Infrastructure-as-code deployment scripts"
    ]
  }
];
