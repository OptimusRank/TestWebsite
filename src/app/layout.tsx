import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IQ Test - Free Online Intelligence Test (2024)",
  description:
    "Take our free IQ test and get your intelligence score instantly. Scientifically validated questions, detailed results, and percentile ranking. Start your cognitive assessment now.",
  keywords: [
    "IQ test",
    "intelligence test",
    "free IQ test",
    "online IQ test",
    "cognitive assessment",
    "intelligence quotient",
    "IQ score",
    "mental ability test"
  ],
  authors: [{ name: "IQ Test Online" }],
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
    title: "IQ Test - Free Online Intelligence Test (2024)",
    description:
      "Take our free IQ test and get your intelligence score instantly. Scientifically validated questions, detailed results, and percentile ranking.",
    type: "website",
    url: "https://www.riotiq.com/",
    siteName: "IQ Test Online",
    images: [
      {
        url: "https://www.riotiq.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Free Online IQ Test - Intelligence Assessment",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IQ Test - Free Online Intelligence Test (2024)",
    description:
      "Take our free IQ test and get your intelligence score instantly. Scientifically validated, detailed results.",
    images: ["https://www.riotiq.com/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.riotiq.com/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "IQ Test Online",
    "url": "https://www.riotiq.com/",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.riotiq.com/logo.png",
      "width": 400,
      "height": 400
    },
    "description": "Professional online IQ testing service providing scientifically validated intelligence assessments with instant results and detailed cognitive analysis.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://www.facebook.com/iqtestonline",
      "https://www.twitter.com/iqtestonline"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "IQ Test Online",
    "url": "https://www.riotiq.com/",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.riotiq.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is an IQ test?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "An IQ test is a standardized assessment designed to measure human intelligence quotient. It evaluates cognitive abilities including pattern recognition, logical reasoning, spatial awareness, verbal ability, and working memory."
        }
      },
      {
        "@type": "Question", 
        "name": "How long does the IQ test take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our online IQ test takes approximately 20 minutes to complete. It consists of 40 questions that progressively increase in difficulty to accurately assess your cognitive abilities."
        }
      },
      {
        "@type": "Question",
        "name": "Is this IQ test scientifically validated?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our IQ test questions are developed by cognitive psychologists and calibrated against established scales like WAIS and Stanford-Binet. The test provides reliable and accurate intelligence assessments."
        }
      },
      {
        "@type": "Question",
        "name": "Do I get instant results?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, you receive your IQ score, percentile ranking, and detailed cognitive breakdown immediately after completing the test. No waiting period required."
        }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.riotiq.com/"
      }
    ]
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <head>
        <link rel="canonical" href="https://www.riotiq.com/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}