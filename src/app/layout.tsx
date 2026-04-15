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
  title: "IQ Test Online Free - Accurate Intelligence Test | RiotIQ",
  description:
    "Take our free IQ test online and get your score instantly. Scientifically validated intelligence assessment with detailed results. Over 2.4M tests completed. Start now!",
  keywords: [
    "IQ test",
    "intelligence test",
    "free IQ test",
    "online IQ test",
    "cognitive assessment",
    "riot iq test",
    "riot iq",
  ],
  openGraph: {
    title: "IQ Test Online Free - Accurate Intelligence Test | RiotIQ",
    description:
      "Take our free IQ test online and get your score instantly. Scientifically validated intelligence assessment with detailed results. Over 2.4M tests completed. Start now!",
    type: "website",
    url: "https://www.riotiq.com",
    siteName: "RiotIQ",
  },
  canonical: "https://www.riotiq.com",
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
    "description": "RiotIQ provides scientifically validated online IQ tests with instant results and detailed cognitive analysis. Trusted by millions worldwide for accurate intelligence assessment.",
    "sameAs": [
      "https://www.riotiq.com"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "RiotIQ",
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}