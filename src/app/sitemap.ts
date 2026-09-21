import { MetadataRoute } from "next";
import { SERVICES } from "@/data/services";
import { PROJECTS } from "@/data/projects";
import { INSIGHTS } from "@/data/insights";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://nithbyte.com";

  // Static routes
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/solutions",
    "/work",
    "/labs",
    "/insights",
    "/contact",
    "/careers",
    "/privacy",
    "/terms",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Dynamic Service routes
  const serviceRoutes = SERVICES.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Dynamic Work routes
  const projectRoutes = PROJECTS.map((project) => ({
    url: `${baseUrl}/work/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Dynamic Insights routes
  const insightRoutes = INSIGHTS.map((article) => ({
    url: `${baseUrl}/insights/${article.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes, ...projectRoutes, ...insightRoutes];
}
