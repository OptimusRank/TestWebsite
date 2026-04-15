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
  title: "Free IQ Test Online - Get Your Score in 20 Minutes",
  description:
    "Take a free online IQ test and get instant results. Scientifically validated 40-question assessment with detailed cognitive breakdown. Start now - no signup required.",
  keywords: [
    "IQ test",
    "free IQ test",
    "online IQ test",
    "intelligence test",
    "cognitive assessment",
  ],
  openGraph: {
    title: "Free IQ Test Online - Get Your Score in 20 Minutes",
    description:
      "Take a free online IQ test and get instant results. Scientifically validated 40-question assessment with detailed cognitive breakdown.",
    type: "website",
    siteName: "RiotIQ",
    url: "https://www.riotiq.com/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free IQ Test Online - Get Your Score in 20 Minutes",
    description:
      "Take a free online IQ test and get instant results. Scientifically validated 40-question assessment with detailed cognitive breakdown.",
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
    "sameAs": [
      "https://www.facebook.com/riotiq",
      "https://twitter.com/riotiq"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "RiotIQ - Free IQ Test",
    "url": "https://www.riotiq.com",
    "description": "Take a free online IQ test and get instant results. Scientifically validated 40-question assessment.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.riotiq.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Free Online IQ Test",
    "description": "Scientifically validated online IQ test with instant results and detailed cognitive breakdown",
    "provider": {
      "@type": "Organization",
      "name": "RiotIQ"
    },
    "areaServed": "Worldwide",
    "audience": {
      "@type": "Audience",
      "audienceType": "Anyone interested in testing their IQ"
    },
    "serviceType": "Cognitive Assessment",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "description": "Free online IQ test with instant results"
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
          dangerouslySetInnerHTML={{ 
            __html: JSON.stringify([organizationSchema, websiteSchema, serviceSchema])
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}