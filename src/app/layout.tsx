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
  title: "IQ Test: Free Online Intelligence Test (Instant Results)",
  description:
    "Take the most accurate IQ test online. 40 questions, instant score, detailed breakdown. Free, scientifically validated, used by 2.4M+ people worldwide.",
  keywords: [
    "IQ test",
    "intelligence test",
    "free IQ test",
    "online IQ test",
    "cognitive assessment",
  ],
  openGraph: {
    title: "IQ Test: Free Online Intelligence Test (Instant Results)",
    description:
      "Take the most accurate IQ test online. 40 questions, instant score, detailed breakdown. Free, scientifically validated, used by 2.4M+ people worldwide.",
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
    "description": "Professional online IQ testing platform providing scientifically validated intelligence assessments with instant results and detailed cognitive analysis.",
    "sameAs": [
      "https://www.riotiq.com"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "RiotIQ - Free IQ Test Online",
    "url": "https://www.riotiq.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.riotiq.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.riotiq.com/" />
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