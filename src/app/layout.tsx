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
  title: "Free IQ Test Online - Get Your Score in 20 Minutes | RiotIQ",
  description:
    "Take our free IQ test online and get instant results. Scientifically validated questions measure pattern recognition, logic, and spatial reasoning. Start now - no signup required.",
  openGraph: {
    title: "Free IQ Test Online - Get Your Score in 20 Minutes",
    description:
      "Take our free IQ test online and get instant results. Scientifically validated questions measure pattern recognition, logic, and spatial reasoning.",
    type: "website",
    url: "https://www.riotiq.com/",
    siteName: "RiotIQ",
  },
  alternates: {
    canonical: "https://www.riotiq.com/",
  },
  robots: {
    index: true,
    follow: true,
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
    "name": "RiotIQ",
    "url": "https://www.riotiq.com",
    "logo": "https://www.riotiq.com/logo.png",
    "description": "Professional online IQ testing service providing scientifically validated intelligence assessments with instant results and detailed cognitive analysis.",
    "foundingDate": "2020",
    "knowsAbout": ["IQ Testing", "Cognitive Assessment", "Intelligence Measurement", "Psychometrics"],
    "sameAs": [
      "https://twitter.com/riotiq",
      "https://www.facebook.com/riotiq"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "RiotIQ",
    "url": "https://www.riotiq.com",
    "description": "Free online IQ test with instant results. Scientifically validated cognitive assessment.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.riotiq.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Free IQ Test Online - Get Your Score in 20 Minutes",
    "description": "Take our free IQ test online and get instant results. Scientifically validated questions measure pattern recognition, logic, and spatial reasoning.",
    "url": "https://www.riotiq.com/",
    "mainEntity": {
      "@type": "Service",
      "name": "Free Online IQ Test",
      "description": "Scientifically validated IQ assessment with instant results",
      "provider": {
        "@type": "Organization",
        "name": "RiotIQ"
      },
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      }
    }
  };

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [organizationSchema, websiteSchema, webPageSchema]
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}