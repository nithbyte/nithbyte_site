import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Start a Project — NithByte",
  description:
    "Ready to build? Tell us about your idea, technology requirements, or project vision. Our engineering team responds within 24 hours.",
  alternates: {
    canonical: "https://nithbyte.com/contact",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nithbyte.com/contact",
    title: "Contact & Start a Project — NithByte",
    description:
      "Initiate your project brief or technical enquiry with NithByte's engineering and design team.",
    siteName: "NithByte",
    images: [
      {
        url: "/images/nithbyte-logo.png",
        width: 1200,
        height: 630,
        alt: "Contact NithByte",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact & Start a Project — NithByte",
    description:
      "Initiate your project brief or technical enquiry with NithByte's engineering and design team.",
    images: ["/images/nithbyte-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
