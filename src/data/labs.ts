export interface LabProduct {
  id: string;
  code: string;
  title: string;
  tagline: string;
  status: "EXPERIMENTAL" | "IN DEVELOPMENT" | "COMING SOON";
  description: string;
  architecture: string[];
  focusAreas: {
    title: string;
    desc: string;
  }[];
  previewSpecs: {
    label: string;
    value: string;
  }[];
}

export const LAB_PRODUCTS: LabProduct[] = [
  {
    id: "nb-commerce",
    code: "LAB-01",
    title: "NithByte Commerce",
    tagline: "Customizable commerce infrastructure built around the needs of modern businesses.",
    status: "IN DEVELOPMENT",
    description: "A modular, headless commerce framework engineered to give growing businesses full ownership over their checkout flow, data, and omnichannel customer touchpoints without vendor lock-in.",
    architecture: [
      "Headless Edge API Layer",
      "Dynamic Checkout Orchestrator",
      "Unified Inventory State Engine",
      "Pluggable Payment Gateway Adapters"
    ],
    focusAreas: [
      {
        title: "Sub-Second Global Checkout",
        desc: "Edge-rendered checkout journeys minimizing friction and preventing cart abandonment."
      },
      {
        title: "Composable Inventory Sync",
        desc: "Real-time bi-directional sync across online storefronts, physical POS, and ERP databases."
      },
      {
        title: "Zero Vendor Lock-in",
        desc: "Self-hostable architecture with open database schemas and flexible webhook events."
      }
    ],
    previewSpecs: [
      { label: "Architecture", value: "Decoupled Edge / TypeScript" },
      { label: "Target Latency", value: "< 120ms Edge Response" },
      { label: "Extensibility", value: "Open Plugin & Webhook API" },
      { label: "Stage", value: "Private Prototype Testing" }
    ]
  },
  {
    id: "nb-intelligence",
    code: "LAB-02",
    title: "NithByte Intelligence",
    tagline: "AI-powered experiences and intelligent automation designed to work inside real business workflows.",
    status: "EXPERIMENTAL",
    description: "An operational intelligence system designed to seamlessly connect enterprise data repositories, perform multi-step task execution, and automate knowledge retrieval across operational teams.",
    architecture: [
      "Autonomous Agent Task Router",
      "Hybrid Vector & Keyword Indexer",
      "Context Isolation & Security Sandbox",
      "Tool-Execution Pipeline"
    ],
    focusAreas: [
      {
        title: "Domain Knowledge Synthesis",
        desc: "Secure document ingestion converting company policies, technical docs, and histories into instant retrieval nodes."
      },
      {
        title: "Autonomous Task Execution",
        desc: "Multi-step reasoning pipelines that extract data, cross-reference records, and execute API actions safely."
      },
      {
        title: "Strict Guardrail Evaluation",
        desc: "Automated verification ensuring zero hallucination on critical financial and operational outputs."
      }
    ],
    previewSpecs: [
      { label: "Core Model Pipeline", value: "Hybrid LLM + Vector Graph" },
      { label: "Context Window", value: "Dynamic RAG Chunks" },
      { label: "Data Sovereignty", value: "Isolated Tenant Sandboxes" },
      { label: "Stage", value: "Internal Alpha Benchmarking" }
    ]
  }
];
