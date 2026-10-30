import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PRODUCTS, getProductBySlug, getAllProductSlugs } from "@/data/products";
import ProductHero from "@/components/products/ProductHero";
import ProductOverviewSection from "@/components/products/ProductOverviewSection";
import ProductEcosystemSection from "@/components/products/ProductEcosystemSection";
import ProductFeaturesSection from "@/components/products/ProductFeaturesSection";
import ProductWorkflowSection from "@/components/products/ProductWorkflowSection";
import ProductRolesSection from "@/components/products/ProductRolesSection";
import ProductBenefitsSection from "@/components/products/ProductBenefitsSection";
import ProductGallerySection from "@/components/products/ProductGallerySection";
import ProductFaqSection from "@/components/products/ProductFaqSection";
import ProductCtaSection from "@/components/products/ProductCtaSection";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = getProductBySlug(params.slug);
  if (!product) {
    return {
      title: "Product Not Found — NithByte Products",
    };
  }

  const title = `${product.name} — ${product.tagline} | NithByte`;
  const description = `${product.shortDesc} Built by NithByte for modern enterprises.`;
  const canonicalUrl = `https://nithbyte.com/products/${product.slug}`;
  const ogImage = product.gallery.find((g) => g.image)?.image || "/images/nithbyte-logo.png";

  return {
    title,
    description,
    keywords: [
      product.name,
      product.category,
      "NithByte SaaS",
      "Enterprise Software",
      product.appType,
      "Business Management Platform",
      "Cloud ERP",
      "B2B SaaS",
    ],
    openGraph: {
      type: "website",
      locale: "en_US",
      url: canonicalUrl,
      title,
      description,
      siteName: "NithByte Products",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${product.name} — ${product.tagline}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    alternates: {
      canonical: canonicalUrl,
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
  };
}

export default function ProductDetailPage({ params }: Props) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  // Schema.org structured data graph (BreadcrumbList + SoftwareApplication + FAQPage)
  const structuredDataGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://nithbyte.com",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Products",
            "item": "https://nithbyte.com/products",
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": product.name,
            "item": `https://nithbyte.com/products/${product.slug}`,
          },
        ],
      },
      {
        "@type": "SoftwareApplication",
        "@id": `https://nithbyte.com/products/${product.slug}#software`,
        "name": product.name,
        "operatingSystem": "Web, iOS, Android",
        "applicationCategory": product.category,
        "description": product.fullDesc,
        "url": `https://nithbyte.com/products/${product.slug}`,
        "screenshot": product.gallery
          .filter((g) => g.image)
          .map((g) => `https://nithbyte.com${g.image}`),
        "featureList": product.modules.flatMap((m) => m.features),
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "seller": {
            "@type": "Organization",
            "name": "NithByte",
            "url": "https://nithbyte.com",
          },
        },
        "publisher": {
          "@type": "Organization",
          "@id": "https://nithbyte.com/#organization",
          "name": "NithByte",
          "url": "https://nithbyte.com",
        },
      },
      ...(product.faqs && product.faqs.length > 0
        ? [
            {
              "@type": "FAQPage",
              "mainEntity": product.faqs.map((f) => ({
                "@type": "Question",
                "name": f.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": f.answer,
                },
              })),
            },
          ]
        : []),
    ],
  };

  return (
    <div className="w-full flex flex-col space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataGraph) }}
      />

      {/* 01: Product Hero */}
      <ProductHero product={product} />

      {/* 02: Product Overview */}
      <ProductOverviewSection product={product} />

      {/* 03: Application Ecosystem */}
      <ProductEcosystemSection product={product} />

      {/* 04: Key Features & Modules */}
      <ProductFeaturesSection product={product} />

      {/* 05: How It Works */}
      <ProductWorkflowSection product={product} />

      {/* 06: User Roles */}
      <ProductRolesSection product={product} />

      {/* 07: Product Benefits */}
      <ProductBenefitsSection product={product} />

      {/* 08: Application Preview Gallery */}
      <ProductGallerySection product={product} />

      {/* 09: FAQ Section */}
      <ProductFaqSection product={product} />

      {/* 10: Final CTA */}
      <ProductCtaSection productName={product.name} productSlug={product.slug} />
    </div>
  );
}

