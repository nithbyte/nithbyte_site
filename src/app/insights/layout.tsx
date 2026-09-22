import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights & Perspectives — NithByte",
  description:
    "Technical perspectives, architectural patterns, and engineering reflections from the NithByte product team.",
  openGraph: {
    title: "Insights & Perspectives — NithByte",
    description:
      "Explore articles and architectural perspectives on modern web engineering, AI systems, and digital craftsmanship.",
  },
};

export default function InsightsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
