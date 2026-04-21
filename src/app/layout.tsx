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
  title: "Free IQ Test Online - Get Your Intelligence Score in 20 Minutes",
  description:
    "Take the free IQ test trusted by 2.4M+ people worldwide. Get instant results with detailed cognitive breakdown. No signup required - start now!",
  keywords: [
    "IQ test",
    "intelligence test",
    "free IQ test",
    "online IQ test",
    "cognitive assessment",
  ],
  openGraph: {
    title: "Free IQ Test Online - Get Your Intelligence Score in 20 Minutes",
    description:
      "Take the free IQ test trusted by 2.4M+ people worldwide. Get instant results with detailed cognitive breakdown. No signup required - start now!",
    type: "website",
    url: "https://www.riotiq.com/",
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
    "name": "RiotIQ",
    "url": "https://www.riotiq.com",
    "logo": "https://www.riotiq.com/logo.png",
    "description": "Professional online IQ testing service providing scientifically validated intelligence assessments with instant results and detailed cognitive analysis.",
    "foundingDate": "2020",
    "serviceType": "Intelligence Testing",
    "areaServed": "Worldwide",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "2400000"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "RiotIQ - Free IQ Test Online",
    "url": "https://www.riotiq.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.riotiq.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}