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
  title: "RIOT IQ Test — Free, Accurate Intelligence Assessment",
  description:
    "RIOT — the Reasoning and Intelligence Online Test — is a free, scientifically validated IQ test. Get your score, percentile, and cognitive breakdown instantly. No sign-up required.",
  keywords: [
    "RIOT IQ test",
    "free IQ test",
    "intelligence test",
    "online IQ test",
    "most accurate IQ test",
    "reasoning and intelligence online test",
  ],
  metadataBase: new URL("https://www.riotiq.com"),
  alternates: {
    canonical: "https://www.riotiq.com/",
  },
  openGraph: {
    title: "RIOT IQ Test — Free, Accurate Intelligence Assessment",
    description:
      "Take the RIOT IQ Test free — 40 questions, instant results, no sign-up. Trusted by 2.4M+ test-takers worldwide.",
    type: "website",
    url: "https://www.riotiq.com/",
    siteName: "RIOT IQ",
  },
  twitter: {
    card: "summary_large_image",
    title: "RIOT IQ Test — Free, Accurate Intelligence Assessment",
    description:
      "Take the RIOT IQ Test free — 40 questions, instant results, no sign-up. Trusted by 2.4M+ test-takers worldwide.",
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
    "name": "RIOT IQ",
    "url": "https://www.riotiq.com",
    "logo": "https://www.riotiq.com/logo.png",
    "description": "RIOT (Reasoning and Intelligence Online Test) is a free, scientifically validated online IQ test trusted by over 2.4 million test-takers worldwide. Provides instant IQ scores, percentile rankings, and detailed cognitive ability breakdowns.",
    "sameAs": [
      "https://forum.riotiq.com"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "RIOT IQ",
    "url": "https://www.riotiq.com",
    "description": "Free, scientifically validated IQ test — the Reasoning and Intelligence Online Test (RIOT).",
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
