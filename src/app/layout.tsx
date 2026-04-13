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
  title: "Free IQ Test Online | Certified Intelligence Assessment",
  description:
    "Take our free online IQ test and get your score in minutes. Scientifically validated questions, instant results, and a detailed cognitive breakdown.",
  keywords: [
    "IQ test",
    "intelligence test",
    "free IQ test",
    "online IQ test",
    "cognitive assessment",
  ],
  openGraph: {
    title: "Free IQ Test Online | Certified Intelligence Assessment",
    description:
      "Take our free online IQ test and get your score in minutes. Scientifically validated, instant results.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "RIOT IQ Test",
    "alternateName": "Reasoning and Intelligence Online Test",
    "url": "https://www.riotiq.com",
    "logo": "https://www.riotiq.com/logo.png",
    "description": "Free online IQ test providing scientifically validated intelligence assessments with instant results and detailed cognitive analysis.",
    "sameAs": [
      "https://www.riotiq.com"
    ],
    "serviceArea": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "IQ Testing Services",
      "itemListElement": [{
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "RIOT IQ Test",
          "description": "Free online intelligence quotient assessment"
        }
      }]
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}