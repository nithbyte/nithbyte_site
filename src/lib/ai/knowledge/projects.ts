export interface ProjectKnowledgeItem {
  id: string;
  slug: string;
  title: string;
  client: string;
  category: string;
  summary: string;
  liveUrl?: string;
  highlights: string[];
  capabilitiesUsed: string[];
}

export const PROJECTS_KNOWLEDGE: ProjectKnowledgeItem[] = [
  {
    id: "alps-cafe",
    slug: "alps-cafe-nagercoil",
    title: "ALPS Cafe Nagercoil",
    client: "ALPS Cafe",
    category: "Hospitality & Digital Brand Platform",
    summary: "A premium digital web platform and brand experience designed for ALPS Cafe in Nagercoil, featuring interactive menu showcases, atmosphere visualizers, and seamless customer engagement.",
    liveUrl: "https://www.alpscafenagercoil.com/",
    highlights: [
      "Ultra-responsive editorial design tailored to culinary craftsmanship",
      "Interactive digital menu with dietary filters and sensory imagery",
      "Fast edge-rendered performance with zero layout shift"
    ],
    capabilitiesUsed: ["Web Development", "UI/UX Design", "Performance Optimization"]
  }
];
