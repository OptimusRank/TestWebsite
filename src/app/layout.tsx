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
  title: "IQ Test — Free, Accurate & Instant Results | RIOT",
  description:
    "Take the free RIOT IQ Test — 40 scientifically validated questions, instant results, no email required. Measure your intelligence across logic, pattern recognition, and spatial reasoning.",
  keywords: [
    "IQ test",
    "free IQ test",
    "online IQ test",
    "accurate IQ test",
    "intelligence test",
    "RIOT IQ test",
  ],
  openGraph: {
    title: "IQ Test — Free, Accurate & Instant Results | RIOT",
    description:
      "Take the free RIOT IQ Test — 40 scientifically validated questions, instant results, no email required. Discover your IQ score across logic, pattern recognition, and spatial reasoning.",
    type: "website",
    url: "https://www.riotiq.com/",
    siteName: "RIOT IQ Test",
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
    "name": "RIOT IQ Test",
    "url": "https://www.riotiq.com",
    "logo": "https://www.riotiq.com/logo.png",
    "description": "RIOT (Reasoning and Intelligence Online Test) is a free, scientifically validated IQ test providing instant results and detailed cognitive analysis. Trusted by 2.4M+ test-takers worldwide.",
    "sameAs": [
      "https://www.riotiq.com"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "RIOT IQ Test",
    "url": "https://www.riotiq.com",
    "description": "Free online IQ test with instant results. Scientifically validated, no email required.",
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
