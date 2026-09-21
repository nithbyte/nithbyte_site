import {
  ChatMessage,
  ChatOption,
  GuidedDiscoveryAnswers,
  ProjectBrief,
  ServicePillar,
  SolutionFlowStage,
} from "./types";

export const SERVICE_PILLARS: Record<string, ServicePillar> = {
  build: {
    id: "build",
    tag: "BUILD",
    title: "Web Development",
    subtitle: "High-performance Web Platforms & Next.js Ecosystems",
    summary:
      "We engineer bespoke web applications with sub-second page delivery, modular TypeScript architecture, and fluid user interactions.",
    capabilities: [
      {
        name: "Full-Stack Web Applications",
        description: "Server-rendered & reactive apps engineered with Next.js, React, and TypeScript.",
      },
      {
        name: "Headless CMS & Microservices",
        description: "Decoupled architecture connecting Contentful, Sanity, or custom APIs with maximum agility.",
      },
      {
        name: "Interactive Digital Experiences",
        description: "GPU-accelerated animations with Framer Motion, GSAP, and smooth scroll mechanics.",
      },
      {
        name: "Performance & SEO Architecture",
        description: "Semantic schema structure, Core Web Vitals optimization, and edge CDN distribution.",
      },
    ],
    techStack: ["Next.js 14+", "React", "TypeScript", "Tailwind CSS", "Node.js", "GraphQL", "PostgreSQL", "Vercel"],
    deliverables: [
      "Production-ready Next.js repository",
      "Tailwind-based Design System Token library",
      "API & Webhook integration suite",
      "Automated CI/CD deployment pipelines",
    ],
    ctaText: "Start a Web Project →",
  },
  connect: {
    id: "connect",
    tag: "CONNECT",
    title: "Mobile Applications",
    subtitle: "Native & Cross-Platform Mobile Engineering",
    summary:
      "We build responsive, gesture-rich mobile applications for iOS and Android with offline-first synchronization and 60fps interaction polish.",
    capabilities: [
      {
        name: "Cross-Platform Engineering",
        description: "Single-codebase multi-platform apps using React Native and Flutter with native performance parity.",
      },
      {
        name: "Offline-First Data Sync",
        description: "Resilient local storage architecture with automatic conflict resolution and background syncing.",
      },
      {
        name: "Native Hardware & Sensor Integration",
        description: "Deep integration with Biometrics, Bluetooth, GPS, Cameras, and Push Notification protocols.",
      },
      {
        name: "App Store Lifecycle Management",
        description: "End-to-end compliance, beta testing pipelines via TestFlight/Google Play, and release automation.",
      },
    ],
    techStack: ["React Native", "Flutter", "TypeScript", "Swift", "Kotlin", "Firebase", "GraphQL", "SQLite"],
    deliverables: [
      "Cross-platform iOS & Android codebase",
      "App Store & Google Play release configurations",
      "Offline sync & push notification infrastructure",
      "Automated crash reporting & analytics setup",
    ],
    ctaText: "Start a Mobile App →",
  },
  sell: {
    id: "sell",
    tag: "SELL",
    title: "E-commerce Architecture",
    subtitle: "Composable Commerce & High-Conversion Storefronts",
    summary:
      "We design custom commerce systems optimized for speed, personalized customer journeys, frictionless checkout, and international multi-currency scale.",
    capabilities: [
      {
        name: "Headless Shopify & Custom Commerce",
        description: "Bespoke frontend storefronts paired with Shopify Plus, Medusa, or custom headless carts.",
      },
      {
        name: "Payment Gateway Integration",
        description: "Secure global payment pipelines with Stripe, Razorpay, Apple Pay, and subscription billing.",
      },
      {
        name: "Conversion Rate Optimization (CRO)",
        description: "High-speed checkout flows, predictive search, dynamic filters, and cart abandonment triggers.",
      },
      {
        name: "ERP, CRM & Inventory Sync",
        description: "Real-time automated inventory tracking, order fulfillment webhooks, and analytics pipelines.",
      },
    ],
    techStack: ["Shopify Plus / Storefront API", "Next.js Commerce", "Stripe API", "Medusa.js", "Algolia", "Tailwind CSS"],
    deliverables: [
      "Custom headless e-commerce storefront",
      "Multi-currency & localized payment checkout",
      "Automated transactional email & SMS triggers",
      "Inventory & order management dashboard integration",
    ],
    ctaText: "Start an E-commerce Project →",
  },
  grow: {
    id: "grow",
    tag: "GROW",
    title: "Digital Marketing & Growth",
    subtitle: "Data-Driven Acquisition & Performance Engines",
    summary:
      "We align technical SEO, attribution analytics, performance marketing, and conversion funnels to scale organic and paid customer acquisition.",
    capabilities: [
      {
        name: "Technical SEO & Programmatic Search",
        description: "Dynamic landing page generation, indexation optimization, and structured metadata for search authority.",
      },
      {
        name: "Attribution & Funnel Analytics",
        description: "Server-side tracking (GA4, Segment, PostHog, Meta CAPI) for privacy-compliant data fidelity.",
      },
      {
        name: "High-Performance Landing Pages",
        description: "A/B-tested, lightning-fast landing page variants designed for direct response conversions.",
      },
      {
        name: "Growth Loop Engineering",
        description: "Referral mechanisms, automated onboarding sequences, and retention triggers.",
      },
    ],
    techStack: ["Google Analytics 4", "PostHog", "Meta Conversion API", "Segment", "Next.js Static Generation", "Hotjar"],
    deliverables: [
      "Complete server-side tracking architecture",
      "Conversion-optimized landing page suite",
      "Technical SEO audit and implementation",
      "Live KPI & attribution reporting dashboard",
    ],
    ctaText: "Discuss Growth Strategy →",
  },
  intelligence: {
    id: "intelligence",
    tag: "INTELLIGENCE",
    title: "AI & Automation",
    subtitle: "Intelligent Workflows, LLM Systems & Custom Agents",
    summary:
      "We architect custom AI integrations, document processing agents, and automated pipeline intelligence to amplify team throughput.",
    capabilities: [
      {
        name: "Custom LLM & Agentic Workflows",
        description: "Autonomous multi-step agents, function-calling pipelines, and context-aware task completion.",
      },
      {
        name: "RAG & Knowledge Retrieval Systems",
        description: "Vector database integration (Pinecone/pgvector) for grounded Q&A on private enterprise data.",
      },
      {
        name: "Intelligent Workflow Automation",
        description: "Connecting disparate SaaS tools, webhooks, and AI classifiers to eliminate repetitive manual operations.",
      },
      {
        name: "Predictive & Vision Intelligence",
        description: "Image classification, OCR document extraction, and structured JSON generation from raw inputs.",
      },
    ],
    techStack: ["OpenAI API / Gemini", "LangChain / LlamaIndex", "Pinecone / pgvector", "Python / FastAPI", "Node.js", "Next.js"],
    deliverables: [
      "Custom AI Assistant or Agentic Backend",
      "Vector database pipeline & knowledge embeddings",
      "Automated webhook & workflow trigger engine",
      "Role-based AI admin console & telemetry",
    ],
    ctaText: "Build AI Solution →",
  },
};

export const INITIAL_OPTIONS: ChatOption[] = [
  { id: "idea", label: "I have an idea", description: "Guide me through project discovery" },
  { id: "capabilities", label: "Explore your capabilities", description: "See all 5 engineering pillars" },
  { id: "need_web", label: "I need a website", description: "Modern web platforms & applications" },
  { id: "need_mobile", label: "I need a mobile app", description: "iOS and Android mobile apps" },
  { id: "need_commerce", label: "I need e-commerce", description: "Headless & high-conversion storefronts" },
  { id: "need_ai", label: "I want AI / automation", description: "Custom agents & intelligent workflows" },
];

export const INITIAL_MESSAGES: ChatMessage[] = [
  {
    id: "init-1",
    sender: "assistant",
    timestamp: "NOW",
    text: "Welcome to **NithByte AI**.\n\nI can help you explore what NithByte can build, understand where to start, or shape your project idea into a clear technical roadmap.",
    type: "options",
    options: INITIAL_OPTIONS,
  },
];

export interface ChatEngineState {
  messages: ChatMessage[];
  guidedStep: number;
  guidedAnswers: GuidedDiscoveryAnswers;
  currentFlow: "none" | "guided_idea" | "service_discovery" | "fast_track";
  selectedFastTrack?: string;
  isTyping: boolean;
}

export function createInitialState(): ChatEngineState {
  return {
    messages: [...INITIAL_MESSAGES],
    guidedStep: 0,
    guidedAnswers: {},
    currentFlow: "none",
    isTyping: false,
  };
}

export function generateSolutionStages(answers: GuidedDiscoveryAnswers): SolutionFlowStage[] {
  const projectType = answers.projectType || "Digital Product";
  const audience = answers.targetAudience || "Modern Users";
  const stage = answers.stage || "Concept Phase";
  const aiNeed = answers.aiRequirement || "Selective AI Enhancement";
  const platforms = answers.platforms?.join(", ") || "Web & Cloud";

  return [
    {
      step: "idea",
      label: "STAGE 01",
      title: "Problem & Product Discovery",
      desc: `Transforming "${answers.coreProblem || "Core Product Vision"}" for ${audience} into quantified software requirements.`,
      techTags: ["Product Spec", "Architecture Blueprint", "User Journeys"],
    },
    {
      step: "understand",
      label: "STAGE 02",
      title: "System & Data Modeling",
      desc: `Designing database schema, API contracts, security boundaries, and ${platforms} data sync layers.`,
      techTags: ["PostgreSQL / Supabase", "REST & GraphQL", "State Modeling"],
    },
    {
      step: "solution",
      label: "STAGE 03",
      title: "Precision Engineering",
      desc: `Building the frontend interface with Tailwind CSS tokens and backend microservices tailored for ${projectType}.`,
      techTags: ["Next.js 14+", "TypeScript", "Tailwind CSS", "Framer Motion"],
    },
    {
      step: "technology",
      label: "STAGE 04",
      title: "Intelligent Integration",
      desc: aiNeed.includes("AI") || aiNeed.includes("Automation")
        ? "Embedding agentic LLM pipelines, vector search, and automated background jobs."
        : "Implementing edge caching, analytics telemetry, and automated CI/CD deployment.",
      techTags: ["AI / LLM Orchestration", "Vercel Edge", "Automated CI/CD"],
    },
    {
      step: "next_step",
      label: "STAGE 05",
      title: "Production Deployment & Scale",
      desc: `Final security verification, performance audits (95+ Lighthouse), and handoff or ongoing iteration from ${stage}.`,
      techTags: ["Global CDN", "Monitoring SLA", "Production Ready"],
    },
  ];
}

export function generateProjectBrief(answers: GuidedDiscoveryAnswers): ProjectBrief {
  const projectType = answers.projectType || "Custom Digital Platform";
  const businessType = answers.targetAudience || "Modern Business / Enterprise";
  const projectStage = answers.stage || "Early Concept / Idea";
  const coreProblem = answers.coreProblem || "Scalable digital experience with seamless UX.";

  const requirements: string[] = [];
  if (answers.platforms && answers.platforms.length > 0) {
    requirements.push(`Target Platforms: ${answers.platforms.join(", ")}`);
  } else {
    requirements.push("Target Platform: Modern Web & Responsive Devices");
  }

  if (answers.aiRequirement && !answers.aiRequirement.includes("Not")) {
    requirements.push(`AI & Intelligence: ${answers.aiRequirement}`);
  }

  if (answers.commerceRequirement && !answers.commerceRequirement.includes("No")) {
    requirements.push(`Commerce & Monetization: ${answers.commerceRequirement}`);
  }

  if (answers.existingSystem) {
    requirements.push(`Architecture Context: ${answers.existingSystem}`);
  }

  const suggestedCapabilities: string[] = [];
  const potentialTech: string[] = [];

  if (projectType.toLowerCase().includes("web") || projectType.toLowerCase().includes("saas")) {
    suggestedCapabilities.push("Full-Stack Next.js Application", "Tailwind Design System", "High-Performance Edge Deployment");
    potentialTech.push("Next.js 14+", "React", "TypeScript", "Tailwind CSS", "PostgreSQL / Supabase");
  } else if (projectType.toLowerCase().includes("mobile")) {
    suggestedCapabilities.push("Cross-Platform Mobile Application", "Offline-First Data Sync", "Hardware Biometrics & Push Notifications");
    potentialTech.push("React Native", "TypeScript", "Firebase / Supabase", "App Store Pipelines");
  } else if (projectType.toLowerCase().includes("commerce") || projectType.toLowerCase().includes("store")) {
    suggestedCapabilities.push("Headless E-commerce Storefront", "Secure Stripe / Payment Gateways", "Automated Order & Inventory Pipelines");
    potentialTech.push("Next.js Commerce", "Shopify Storefront API", "Stripe", "Algolia Search");
  } else {
    suggestedCapabilities.push("Custom Digital Product Engineering", "Interactive Motion UX", "Scalable API & Cloud Architecture");
    potentialTech.push("Next.js", "Node.js / TypeScript", "Tailwind CSS", "Modern Cloud Infrastructure");
  }

  if (answers.aiRequirement && !answers.aiRequirement.includes("Not")) {
    suggestedCapabilities.push("Custom AI & Automation Workflows");
    potentialTech.push("OpenAI / Gemini APIs", "Vector Database (Pinecone/pgvector)");
  }

  return {
    projectType,
    businessType,
    projectStage,
    coreProblem,
    requirements,
    suggestedCapabilities,
    potentialTech,
    nextStep: "Technical discovery session & architecture proposal with NithByte engineering team.",
    aiNeeded: answers.aiRequirement,
    commerceNeeded: answers.commerceRequirement,
    platforms: answers.platforms,
  };
}

export const GUIDED_QUESTIONS = [
  {
    step: 1,
    question: "What are you trying to build?",
    options: [
      { id: "saas", label: "SaaS / Web Application", description: "Subscription web platform or portal" },
      { id: "mobile", label: "Mobile App (iOS & Android)", description: "Native or cross-platform app" },
      { id: "ecommerce", label: "E-commerce Experience", description: "Headless store or custom checkout" },
      { id: "corporate", label: "Brand Platform & Website", description: "High-performance digital brand hub" },
      { id: "ai_tool", label: "AI Product or Automation Tool", description: "LLM agents & intelligent workflows" },
      { id: "custom", label: "Custom Software Architecture", description: "Bespoke internal systems & APIs" },
    ],
  },
  {
    step: 2,
    question: "Who is your primary target audience?",
    options: [
      { id: "b2b", label: "B2B / Companies & Enterprise", description: "Business clients, teams, or vendors" },
      { id: "b2c", label: "B2C / Direct Consumers", description: "End users, shoppers, or community" },
      { id: "internal", label: "Internal Team & Operations", description: "Staff tools, dashboards, and ops" },
      { id: "marketplace", label: "Two-Sided Marketplace", description: "Buyers and sellers / creators & fans" },
    ],
  },
  {
    step: 3,
    question: "What primary challenge or core problem does this solve?",
    options: [
      { id: "replace_manual", label: "Automate repetitive manual operations", description: "Save time and prevent errors" },
      { id: "new_revenue", label: "Launch a new digital revenue stream", description: "Monetize content, services, or SaaS" },
      { id: "modernize_ux", label: "Modernize outdated UX & technology", description: "Sub-second speed and modern aesthetics" },
      { id: "scale_traffic", label: "Scale for high volume and data complexity", description: "Handle rapid business expansion" },
    ],
  },
  {
    step: 4,
    question: "What stage is the project currently in?",
    options: [
      { id: "idea", label: "Early Concept / Idea Phase", description: "Defining scope, features, and feasibility" },
      { id: "designs_ready", label: "Designs / Wireframes Ready", description: "Figma or specifications prepared" },
      { id: "mvp_rebuild", label: "Existing MVP Needs Rebuild", description: "Refactoring for production scale" },
      { id: "scaling_product", label: "Active Product Scaling", description: "Adding modules, AI, or mobile apps" },
    ],
  },
  {
    step: 5,
    question: "What platforms or form factors are needed?",
    options: [
      { id: "web_desktop", label: "Web (Desktop & Responsive Mobile)", description: "Next.js cloud platform" },
      { id: "mobile_native", label: "Mobile Apps (iOS & Android Stores)", description: "React Native / Flutter" },
      { id: "multiplatform", label: "Multi-Platform (Web + Mobile App + API)", description: "Full unified ecosystem" },
      { id: "admin_portal", label: "Internal Admin & Operations Portal", description: "Role-based dashboards" },
    ],
  },
  {
    step: 6,
    question: "Do you require AI or intelligent automation?",
    options: [
      { id: "ai_agents", label: "Yes, Generative AI & Autonomous Agents", description: "LLM reasoning, context chat, or task completion" },
      { id: "ai_rag", label: "Yes, Knowledge Base & Document Q&A", description: "Vector search over private business data" },
      { id: "automation", label: "Workflow & Webhook Automation", description: "Syncing data pipelines and notifications" },
      { id: "no_ai", label: "Not at this stage", description: "Core product foundation first" },
    ],
  },
  {
    step: 7,
    question: "Do you require e-commerce or monetization features?",
    options: [
      { id: "stripe_checkout", label: "Subscription Billing & Stripe Checkout", description: "SaaS recurring tiers or usage pricing" },
      { id: "product_catalog", label: "Full Product Catalog & Cart", description: "Headless store with inventory & shipping" },
      { id: "marketplace_payouts", label: "Marketplace Multi-Vendor Payouts", description: "Split payments and commission ledger" },
      { id: "no_commerce", label: "No payments needed", description: "Lead generation or internal usage" },
    ],
  },
  {
    step: 8,
    question: "Do you already have an existing system or codebase?",
    options: [
      { id: "scratch", label: "Starting Fresh (Greenfield Build)", description: "Zero legacy constraints, modern stack" },
      { id: "legacy_migration", label: "Migrating from a Legacy Platform", description: "Moving from WordPress/PHP/Monolith" },
      { id: "api_integration", label: "Integrating with Existing APIs / ERP", description: "Connecting into backend databases" },
      { id: "prototype_exists", label: "Have a Prototype / POC to Polish", description: "Elevating a proof of concept" },
    ],
  },
];

// Natural language query processor for free-text interaction
export function processUserQuery(query: string, currentAnswers: GuidedDiscoveryAnswers): ChatMessage[] {
  const q = query.toLowerCase().trim();

  // Check for greetings
  if (q === "hi" || q === "hello" || q === "hey" || q.startsWith("hello") || q.startsWith("hi ")) {
    return [
      {
        id: `resp-${Date.now()}`,
        sender: "assistant",
        timestamp: "NOW",
        text: "Hello! I am **NITHBYTE AI**, your interactive product and engineering guide.\n\nHow can I assist your project today? You can choose a structured pathway below or type your project details directly.",
        type: "options",
        options: INITIAL_OPTIONS,
      },
    ];
  }

  // Check for capabilities query
  if (q.includes("capabilities") || q.includes("what can you do") || q.includes("services") || q.includes("what do you build") || q.includes("what does nithbyte do")) {
    return [
      {
        id: `resp-${Date.now()}`,
        sender: "assistant",
        timestamp: "NOW",
        text: "NithByte operates across **5 Core Engineering Pillars**:\n\n1. **BUILD** — High-Performance Web Platforms & Next.js Ecosystems\n2. **CONNECT** — iOS & Android Cross-Platform Mobile Applications\n3. **SELL** — Composable E-commerce & High-Conversion Storefronts\n4. **GROW** — Digital Marketing, Server-Side Tracking & Growth Loops\n5. **INTELLIGENCE** — AI Integrations, Autonomous Agents & Workflow Automation\n\nSelect any pillar below to inspect its architecture:",
        type: "service_discovery",
        options: [
          { id: "service_build", label: "BUILD // Web Development", category: "service" },
          { id: "service_connect", label: "CONNECT // Mobile Applications", category: "service" },
          { id: "service_sell", label: "SELL // E-commerce", category: "service" },
          { id: "service_grow", label: "GROW // Digital Marketing", category: "service" },
          { id: "service_intelligence", label: "INTELLIGENCE // AI & Automation", category: "service" },
        ],
      },
    ];
  }

  // Check for Tech Stack queries
  if (q.includes("tech stack") || q.includes("technologies") || q.includes("framework") || q.includes("nextjs") || q.includes("react") || q.includes("typescript")) {
    return [
      {
        id: `resp-${Date.now()}`,
        sender: "assistant",
        timestamp: "NOW",
        text: "**NithByte Core Technology Stack:**\n\n- **Frontend:** Next.js (App Router), React, TypeScript, Tailwind CSS, Framer Motion, GSAP\n- **Mobile:** React Native, Flutter, Swift, Kotlin, Firebase\n- **Backend & Cloud:** Node.js, Python (FastAPI), PostgreSQL, Supabase, Redis, Vercel, AWS\n- **AI & Automation:** OpenAI API, Google Gemini, LangChain, Pinecone, Webhook event pipelines\n- **Commerce:** Shopify Storefront API, Next.js Commerce, Stripe, Medusa.js\n\nEvery solution is built for type safety, modular design system tokens, and sub-second performance.",
        type: "options",
        options: [
          { id: "idea", label: "Shape My Idea with This Stack →" },
          { id: "capabilities", label: "Explore Engineering Pillars" },
        ],
      },
    ];
  }

  // Check for AI / Automation queries
  if (q.includes("ai") || q.includes("automation") || q.includes("agent") || q.includes("llm") || q.includes("gpt") || q.includes("rag")) {
    return [
      {
        id: `resp-${Date.now()}`,
        sender: "assistant",
        timestamp: "NOW",
        text: "**NithByte AI & Automation Capabilities:**\n\nWe design and deploy custom AI solutions engineered for reliability, safety, and business ROI:\n\n- **Autonomous Agents & Tool Calling:** AI assistants that can trigger database queries, update records, and execute workflows.\n- **Grounded Knowledge Retrieval (RAG):** Context-aware Q&A on your internal PDFs, documentation, and CRM data using vector embeddings.\n- **Intelligent Operations Automation:** Removing manual bottlenecks with webhook listeners and structured JSON data extraction.\n\nWould you like to scope an AI workflow for your team?",
        type: "service_detail",
        serviceData: SERVICE_PILLARS.intelligence,
        options: [
          { id: "need_ai", label: "Scope an AI Project →" },
          { id: "idea", label: "I Have a Broader Idea" },
        ],
      },
    ];
  }

  // Check for Web Development queries
  if (q.includes("website") || q.includes("web app") || q.includes("frontend") || q.includes("saas") || q.includes("web development")) {
    return [
      {
        id: `resp-${Date.now()}`,
        sender: "assistant",
        timestamp: "NOW",
        text: "**NithByte Web Engineering:**\n\nWe build production-grade web platforms that pair editorial visual aesthetics with resilient engineering.\n\n- Sub-second first contentful paint (95+ Lighthouse score)\n- Modular design system token architecture\n- Server-side rendering & static edge caching with Next.js\n- Fluid micro-interactions and GPU-accelerated motion",
        type: "service_detail",
        serviceData: SERVICE_PILLARS.build,
        options: [
          { id: "need_web", label: "Configure Web Project →" },
          { id: "idea", label: "Start Full Discovery" },
        ],
      },
    ];
  }

  // Check for Mobile Application queries
  if (q.includes("mobile") || q.includes("app") || q.includes("ios") || q.includes("android") || q.includes("react native") || q.includes("flutter")) {
    return [
      {
        id: `resp-${Date.now()}`,
        sender: "assistant",
        timestamp: "NOW",
        text: "**NithByte Mobile Engineering:**\n\nFrom concept to App Store distribution, we build tactile, responsive iOS and Android applications:\n\n- Cross-platform React Native and Flutter codebases with native performance parity\n- Offline-first data synchronization and local SQLite caching\n- Biometric auth, push notifications, and background tasks\n- End-to-end release pipeline management",
        type: "service_detail",
        serviceData: SERVICE_PILLARS.connect,
        options: [
          { id: "need_mobile", label: "Configure Mobile Project →" },
          { id: "idea", label: "Start Full Discovery" },
        ],
      },
    ];
  }

  // Check for E-commerce queries
  if (q.includes("ecommerce") || q.includes("e-commerce") || q.includes("shop") || q.includes("store") || q.includes("shopify") || q.includes("stripe")) {
    return [
      {
        id: `resp-${Date.now()}`,
        sender: "assistant",
        timestamp: "NOW",
        text: "**NithByte E-commerce Architecture:**\n\nWe design high-conversion, composable commerce experiences:\n\n- Headless Shopify Plus and custom cart architectures\n- Stripe, multi-currency, and recurring subscription checkouts\n- Instant faceted product search with sub-50ms filtering\n- Direct ERP, CRM, and automated inventory syncing",
        type: "service_detail",
        serviceData: SERVICE_PILLARS.sell,
        options: [
          { id: "need_commerce", label: "Configure E-commerce Project →" },
          { id: "idea", label: "Start Full Discovery" },
        ],
      },
    ];
  }

  // Check for Pricing / Timeline questions
  if (q.includes("price") || q.includes("cost") || q.includes("timeline") || q.includes("how much") || q.includes("quote") || q.includes("rates")) {
    return [
      {
        id: `resp-${Date.now()}`,
        sender: "assistant",
        timestamp: "NOW",
        text: "**Project Scoping & Architecture Proposals:**\n\nAt NithByte, every product has distinct technical requirements, third-party integrations, and performance SLAs. Rather than generic estimates, we provide **fixed architecture proposals** after a short technical discovery.\n\nWe recommend completing our **Guided Discovery (8 quick questions)** to generate a structured project brief. Our engineering leads will review it within 24 hours.",
        type: "options",
        options: [
          { id: "idea", label: "Generate Project Brief (Takes 1 min) →" },
          { id: "contact_direct", label: "Contact Engineering Team Directly" },
        ],
      },
    ];
  }

  // Check for Contact / Starting project
  if (q.includes("contact") || q.includes("email") || q.includes("reach out") || q.includes("start project") || q.includes("hire") || q.includes("book")) {
    return [
      {
        id: `resp-${Date.now()}`,
        sender: "assistant",
        timestamp: "NOW",
        text: "**Direct Engineering Channels:**\n\n- **Email:** `nithbyte@gmail.com`\n- **Turnaround SLA:** We review technical inquiries within 24 business hours.\n- **Confidentiality:** All shared concepts and codebases are protected under mutual NDA.\n\nYou can initiate an enquiry directly through our contact portal:",
        type: "options",
        options: [
          { id: "contact_page", label: "Open Contact Portal →" },
          { id: "idea", label: "Draft Project Brief First" },
        ],
      },
    ];
  }

  // Default intelligent contextual answer that synthesizes user input
  const updatedAnswers = {
    ...currentAnswers,
    coreProblem: query,
  };

  return [
    {
      id: `resp-${Date.now()}`,
      sender: "assistant",
      timestamp: "NOW",
      text: `Understood: **"${query}"**.\n\nTo help shape this into a structured architecture and project brief, what type of system best describes what you are building?`,
      type: "options",
      options: GUIDED_QUESTIONS[0].options,
    },
  ];
}
