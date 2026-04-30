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
    "Take our free online IQ test and get your intelligence score instantly. Scientifically validated, 40 questions, detailed results. No signup required - start now!",
  keywords: [
    "IQ test",
    "intelligence test", 
    "free IQ test",
    "online IQ test",
    "cognitive assessment",
  ],
  openGraph: {
    title: "Free IQ Test Online - Get Your Score in 20 Minutes",
    description:
      "Take our free online IQ test and get your intelligence score instantly. Scientifically validated, 40 questions, detailed results.",
    type: "website",
    url: "https://www.riotiq.com",
    siteName: "RiotIQ",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free IQ Test Online - Get Your Score in 20 Minutes",
    description: "Take our free online IQ test and get your intelligence score instantly. Scientifically validated, 40 questions, detailed results.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
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
    "alternateName": "RiotIQ Free IQ Test",
    "url": "https://www.riotiq.com",
    "logo": "https://www.riotiq.com/logo.png",
    "description": "Professional online IQ testing service providing scientifically validated intelligence assessments with instant results and detailed cognitive analysis.",
    "sameAs": [
      "https://twitter.com/riotiq",
      "https://facebook.com/riotiq"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "email": "support@riotiq.com"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "RiotIQ - Free IQ Test Online",
    "url": "https://www.riotiq.com",
    "description": "Take our free online IQ test and get your intelligence score instantly. Scientifically validated, 40 questions, detailed results.",
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
        <link rel="canonical" href="https://www.riotiq.com" />
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