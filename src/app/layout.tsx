import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/footer/Footer";
import CustomCursor from "@/components/interactions/CustomCursor";
import SmoothScroll from "@/components/interactions/SmoothScroll";
import ScrollToTop from "@/components/interactions/ScrollToTop";

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
    "NithByte designs and engineers digital products, e-commerce experiences and intelligent technology solutions for modern businesses.",
  keywords: [
    "Digital Product Engineering",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nithbyte.com",
    title: "NithByte — Where Ideas Find Their Code.",
    description:
      "NithByte designs and builds digital products, e-commerce experiences and intelligent technology solutions for modern businesses.",
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
      "NithByte designs and builds digital products, e-commerce experiences and intelligent technology solutions for modern businesses.",
    images: ["/images/nithbyte-logo.png"],
  },
  icons: {
    icon: "/images/nithbyte-logo.png",
    shortcut: "/images/nithbyte-logo.png",
    apple: "/images/nithbyte-logo.png",
  },
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
      <body className="bg-nb-off-white text-nb-black antialiased selection:bg-nb-orange selection:text-white min-h-screen flex flex-col justify-between">
        <SmoothScroll>
          <CustomCursor />
          <Navbar />
          <main className="flex-1 w-full">{children}</main>
          <Footer />
          <ScrollToTop />
        </SmoothScroll>
      </body>
    </html>
  );
}
