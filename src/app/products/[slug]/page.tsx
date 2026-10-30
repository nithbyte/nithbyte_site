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
    ],
    openGraph: {
      type: "website",
      locale: "en_US",
      url: `https://nithbyte.com/products/${product.slug}`,
      title,
      description,
      siteName: "NithByte Products",
      images: [
        {
          url: "/images/nithbyte-logo.png",
          width: 1200,
          height: 630,
          alt: `${product.name} — NithByte SaaS Platform`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/nithbyte-logo.png"],
    },
    alternates: {
      canonical: `https://nithbyte.com/products/${product.slug}`,
    },
  };
}

export default function ProductDetailPage({ params }: Props) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  // Schema.org structured data for SoftwareApplication
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: product.name,
    operatingSystem: "Web, iOS, Android",
    applicationCategory: "BusinessApplication",
    description: product.shortDesc,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "NithByte",
        url: "https://nithbyte.com",
      },
    },
    publisher: {
      "@type": "Organization",
      name: "NithByte",
      url: "https://nithbyte.com",
    },
  };

  return (
    <div className="w-full flex flex-col space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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

