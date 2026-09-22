import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Start a Project — NithByte",
  description:
    "Ready to build? Tell us about your idea, technology requirements, or project vision. Our engineering team responds within 24 hours.",
  openGraph: {
    title: "Contact & Start a Project — NithByte",
    description:
      "Initiate your project brief or technical enquiry with NithByte's engineering and design team.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
