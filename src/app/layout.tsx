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
  title: "RiotIQ - Professional Online IQ Testing",
  description:
    "Professional online IQ testing service providing scientifically validated intelligence assessments with instant results and detailed cognitive analysis.",
  keywords: [
    "iq test",
    "intelligence test",
    "free iq test",
    "online iq test",
    "cognitive assessment",
    "riot iq",
  ],
  openGraph: {
    title: "RiotIQ - Professional Online IQ Testing",
    description:
      "Professional online IQ testing service providing scientifically validated intelligence assessments with instant results.",
    type: "website",
    siteName: "RiotIQ",
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
  verification: {
    google: 'your-google-site-verification-code',
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
    "alternateName": ["Riot IQ", "RiotIQ Test"],
    "url": "https://www.riotiq.com",
    "logo": "https://www.riotiq.com/logo.png",
    "description": "Professional online IQ testing service providing scientifically validated intelligence assessments with instant results and detailed cognitive analysis.",
    "foundingDate": "2020",
    "areaServed": "Worldwide",
    "serviceType": "Intelligence Testing",
    "knowsAbout": ["IQ Testing", "Cognitive Assessment", "Intelligence Measurement", "Psychometrics"],
    "sameAs": [
      "https://www.facebook.com/riotiq",
      "https://www.twitter.com/riotiq"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "RiotIQ",
    "url": "https://www.riotiq.com",
    "description": "Take free online IQ tests with instant results. Scientifically validated cognitive assessments used by millions worldwide.",
    "publisher": {
      "@type": "Organization",
      "name": "RiotIQ"
    },
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
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