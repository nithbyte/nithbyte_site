import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/footer/Footer";
import CustomCursor from "@/components/interactions/CustomCursor";
import SmoothScroll from "@/components/interactions/SmoothScroll";
import ScrollToTop from "@/components/interactions/ScrollToTop";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import NithByteAI from "@/components/chatbot/NithByteAI";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NithByte — Where Ideas Find Their Code.",
  description:
    "NithByte designs and engineers digital products, SaaS platforms, e-commerce architectures and intelligent technology solutions for modern businesses.",
  keywords: [
    "Digital Product Engineering",
    "SaaS Platforms",
    "Web Development",
    "Next.js Development",
    "E-commerce Architecture",
    "AI Integration",
    "Workflow Automation",
    "Mobile Applications",
    "Custom Software",
  ],
  authors: [{ name: "NithByte" }],
  creator: "NithByte",
  metadataBase: new URL("https://nithbyte.com"),
  alternates: {
    canonical: "https://nithbyte.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nithbyte.com",
    title: "NithByte — Where Ideas Find Their Code.",
    description:
      "NithByte designs and builds digital products, SaaS platforms, e-commerce architectures and intelligent technology solutions for modern businesses.",
    siteName: "NithByte",
    images: [
      {
        url: "/images/nithbyte-logo.png",
        width: 1200,
        height: 630,
        alt: "NithByte — Where Ideas Find Their Code.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NithByte — Where Ideas Find Their Code.",
    description:
      "NithByte designs and builds digital products, SaaS platforms, e-commerce architectures and intelligent technology solutions for modern businesses.",
    images: ["/images/nithbyte-logo.png"],
  },
  icons: {
    icon: [
      { url: "/images/image.png" },
      { url: "/images/image.png", sizes: "32x32", type: "image/png" },
      { url: "/images/image.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/images/image.png",
    apple: "/images/image.png",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://nithbyte.com/#organization",
      "name": "NithByte",
      "url": "https://nithbyte.com",
      "logo": {
        "@type": "ImageObject",
        "@id": "https://nithbyte.com/#logo",
        "url": "https://nithbyte.com/images/nithbyte-logo.png",
        "caption": "NithByte"
      },
      "sameAs": [
        "https://www.linkedin.com/company/nithbyte",
        "https://x.com/nithbyte",
        "https://github.com/nithbyte"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Customer Support",
        "url": "https://nithbyte.com/contact"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://nithbyte.com/#website",
      "url": "https://nithbyte.com",
      "name": "NithByte",
      "description": "Where Ideas Find Their Code — Digital Product Engineering & Industry-Focused SaaS Platforms",
      "publisher": {
        "@id": "https://nithbyte.com/#organization"
      }
    }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "yzrsrphtj9");
            `,
          }}
        />
      </head>
      <body className="bg-nb-off-white text-nb-black dark:bg-nb-black dark:text-nb-off-white antialiased selection:bg-nb-orange selection:text-white min-h-screen flex flex-col justify-between transition-colors duration-300">
        <GoogleAnalytics />
        <ThemeProvider>
          <SmoothScroll>
            <CustomCursor />
            <Navbar />
            <main className="flex-1 w-full">{children}</main>
            <Footer />
            <ScrollToTop />
            <NithByteAI />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
