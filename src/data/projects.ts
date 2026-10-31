export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  year: string;
  client: string;
  url?: string;
  isLive: boolean;
  tagline: string;
  summary: string;
  challenge: string;
  approach: string;
  engineering: string;
  techStack: string[];
  features: string[];
  blueprintSteps: {
    stage: string;
    title: string;
    details: string;
  }[];
}

export const PROJECTS: ProjectItem[] = [
  {
    id: "alps-cafe",
    slug: "alps-cafe-nagercoil",
    title: "ALPS Cafe Nagercoil",
    category: "Web Engineering & Brand Experience",
    year: "2024",
    client: "ALPS Cafe",
    url: "https://www.alpscafenagercoil.com/",
    isLive: true,
    tagline: "Digital experience and interactive web presence for a premier cafe destination.",
    summary: "A modern, high-performance web presence designed and engineered for ALPS Cafe in Nagercoil, combining rich aesthetic storytelling, seamless mobile navigation, and optimized local digital discovery.",
    challenge: "Translate the tactile warmth, culinary craftsmanship, and distinctive atmosphere of ALPS Cafe into a fast, fluid web platform that performs seamlessly across all mobile and desktop devices.",
    approach: "Designed a clean, editorial layout emphasizing culinary visuals, interactive menu exploration, location ambiance, and frictionless customer contact pathways.",
    engineering: "Constructed with modern frontend architecture to ensure sub-second page delivery, lightweight asset loading, structured schema data for local search visibility, and smooth micro-interactions.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "SEO Optimization"],
    features: [
      "Responsive digital menu presentation",
      "Interactive visual ambiance showcases",
      "Direct reservation and location discovery integration",
      "Optimized Core Web Vitals and local SEO indexing"
    ],
    blueprintSteps: [
      { stage: "01 GRID", title: "Structural Geometry", details: "Defining responsive typographic scale, spacing tokens, and visual rhythm." },
      { stage: "02 WIREFRAME", title: "Customer Journey", details: "Streamlining navigation from menu discovery to location routing." },
      { stage: "03 DESIGN", title: "Visual Atmosphere", details: "Balancing curated photography with clean, modern typography." },
      { stage: "04 CODE", title: "Component Architecture", details: "Crafting lightweight, reusable UI modules with smooth transitions." },
      { stage: "05 PRODUCT", title: "Production Deployment", details: "Live deployment on high-speed global edge network." }
    ]
  },
  {
    id: "suma-beautycare",
    slug: "suma-beautycare-nagercoil",
    title: "Suma Beauty Care",
    category: "Web Engineering & Brand Experience",
    year: "2024",
    client: "Suma Beauty Care",
    url: "https://mediumpurple-aardvark-804356.hostingersite.com/",
    isLive: true,
    tagline: "Modern herbal beauty atelier and digital treatment destination in Nagercoil.",
    summary: "A modern, editorial digital experience crafted for Suma Beauty Care in Nagercoil, combining modern botanical aesthetic storytelling, an interactive 65+ treatment ritual catalog, bridal artistry showcases, and frictionless customer booking pathways.",
    challenge: "Translate 16+ years of personalized herbal skincare, bridal craftsmanship, and holistic beauty rituals led by Dr. V. Lekshmi into an intimate, ultra-responsive digital atelier that highlights signature treatments and simplifies client discovery.",
    approach: "Designed an editorial luxury aesthetic with organic herbal tones, interactive treatment exploration, structured service pricing, and seamless direct consultation routes across mobile and desktop devices.",
    engineering: "Constructed with modern frontend architecture to ensure sub-second page delivery, lightweight asset loading, structured schema data for local search visibility, and smooth micro-interactions.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "SEO Optimization"],
    features: [
      "Interactive 65+ herbal treatment & bridal ritual catalog",
      "Editorial brand storytelling & practitioner philosophy spotlight",
      "Direct WhatsApp and telephone appointment booking pathways",
      "Optimized Core Web Vitals and local Nagercoil SEO indexing"
    ],
    blueprintSteps: [
      { stage: "01 GRID", title: "Organic Hierarchy", details: "Defining responsive typographic scale, spacing tokens, and warm botanical palette." },
      { stage: "02 WIREFRAME", title: "Ritual & Treatment Flow", details: "Streamlining navigation across bridal makeup, herbal facials, and booking." },
      { stage: "03 DESIGN", title: "Quiet Luxury Aesthetic", details: "Balancing curated photography with clean, modern typography and pricing tiers." },
      { stage: "04 CODE", title: "Component Architecture", details: "Crafting lightweight, reusable UI modules with smooth transitions." },
      { stage: "05 PRODUCT", title: "Production Deployment", details: "Live deployment on high-speed global edge network." }
    ]
  },
  {
    id: "project-03",
    slug: "coming-soon-03",
    title: "Project 03 — AI Commerce System",
    category: "AI & Modern Commerce",
    year: "2025",
    client: "Coming Soon",
    isLive: false,
    tagline: "Intelligent commerce infrastructure with real-time recommendations.",
    summary: "An upcoming next-generation digital storefront integrating semantic discovery and automated customer support copilots.",
    challenge: "Reducing drop-off rates during complex multi-variant product configuration.",
    approach: "Conversational buying assistance combined with instant visual configuration.",
    engineering: "Headless commerce layer connected to vector search engine.",
    techStack: ["Next.js Commerce", "OpenAI API", "Pinecone", "Stripe"],
    features: [
      "Natural language product discovery",
      "Dynamic bundle configuration",
      "1-Click checkout flows"
    ],
    blueprintSteps: [
      { stage: "01 GRID", title: "Data Catalog", details: "Vector embedding generation for multi-attribute products." },
      { stage: "02 WIREFRAME", title: "Chat-to-Cart Flow", details: "Frictionless transition between search and checkout." },
      { stage: "03 DESIGN", title: "Adaptive UI", details: "Context-aware card surfaces based on intent." },
      { stage: "04 CODE", title: "LLM Pipeline", details: "Low-latency streaming responses with tool calling." },
      { stage: "05 PRODUCT", title: "Beta Evaluation", details: "Precision benchmarking against standard search." }
    ]
  }
];
