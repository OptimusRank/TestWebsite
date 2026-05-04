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
  metadataBase: new URL("https://www.riotiq.com"),
  title: {
    default: "RIOT IQ Test — Free, Accurate & Instant Results",
    template: "%s | RIOT IQ Test",
  },
  description:
    "Take the RIOT IQ Test free — 40 scientifically validated questions, results in 20 minutes, no registration. Trusted by 2.4M+ test-takers worldwide.",
  keywords: [
    "IQ test",
    "free IQ test",
    "RIOT IQ test",
    "online IQ test",
    "real IQ test",
    "best IQ test",
    "accurate IQ test",
    "intelligence test",
    "cognitive assessment",
  ],
  openGraph: {
    title: "RIOT IQ Test — Free, Accurate & Instant Results",
    description:
      "Take the RIOT IQ Test free — 40 scientifically validated questions, results in 20 minutes, no registration. Trusted by 2.4M+ test-takers.",
    type: "website",
    url: "https://www.riotiq.com",
    siteName: "RIOT IQ Test",
  },
  twitter: {
    card: "summary_large_image",
    title: "RIOT IQ Test — Free, Accurate & Instant Results",
    description:
      "Take the RIOT IQ Test free — 40 scientifically validated questions, results in 20 minutes, no registration.",
  },
  alternates: {
    canonical: "/",
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
    name: "RIOT IQ Test",
    url: "https://www.riotiq.com",
    logo: "https://www.riotiq.com/logo.png",
    description:
      "RIOT (Reasoning and Intelligence Online Test) — a free, scientifically validated IQ test trusted by 2.4 million test-takers worldwide.",
    sameAs: ["https://forum.riotiq.com"],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "RIOT IQ Test",
    url: "https://www.riotiq.com",
    description:
      "Free, accurate IQ test online. Get your score, percentile, and cognitive breakdown in 20 minutes.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://www.riotiq.com/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
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
            __html: JSON.stringify(organizationSchema),
          }}
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
