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
  title: "Free IQ Test Online - Get Your Score in Minutes",
  description:
    "Take our free IQ test now and get instant results. 40 scientifically validated questions, detailed cognitive breakdown, no signup required. Start your assessment!",
  keywords: [
    "IQ test",
    "intelligence test", 
    "free IQ test",
    "online IQ test",
    "cognitive assessment",
  ],
  metadataBase: new URL('https://www.riotiq.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Free IQ Test Online - Get Your Score in Minutes",
    description:
      "Take our free IQ test now and get instant results. 40 scientifically validated questions, detailed cognitive breakdown, no signup required.",
    type: "website",
    url: "https://www.riotiq.com",
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
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
    "name": "Free IQ Test Online",
    "url": "https://www.riotiq.com",
    "logo": "https://www.riotiq.com/logo.png",
    "description": "Professional online IQ testing service providing scientifically validated intelligence assessments with instant results and detailed cognitive analysis.",
    "sameAs": []
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Free IQ Test Online",
    "url": "https://www.riotiq.com",
    "description": "Take our free online IQ test and get your score in minutes. Scientifically validated questions, instant results, and detailed cognitive breakdown.",
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