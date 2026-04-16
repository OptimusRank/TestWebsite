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
  title: "Free IQ Test Online - Get Your Intelligence Score in 20 Minutes",
  description:
    "Take our free online IQ test and discover your true intelligence score. 40 scientifically validated questions, instant results, detailed cognitive breakdown. Start now!",
  openGraph: {
    title: "Free IQ Test Online - Get Your Intelligence Score in 20 Minutes",
    description:
      "Take our free online IQ test and discover your true intelligence score. 40 scientifically validated questions, instant results, detailed cognitive breakdown.",
    type: "website",
    url: "https://www.riotiq.com",
    siteName: "RiotIQ",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free IQ Test Online - Get Your Intelligence Score in 20 Minutes",
    description: "Take our free online IQ test and discover your true intelligence score. 40 scientifically validated questions, instant results, detailed cognitive breakdown.",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "your-google-verification-code",
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
    "alternateName": "RiotIQ - Professional IQ Testing",
    "url": "https://www.riotiq.com",
    "logo": "https://www.riotiq.com/logo.png",
    "description": "Professional online IQ testing service providing scientifically validated intelligence assessments with instant results and detailed cognitive analysis.",
    "sameAs": [
      "https://twitter.com/riotiq",
      "https://www.linkedin.com/company/riotiq"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "RiotIQ - Free IQ Test Online",
    "url": "https://www.riotiq.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.riotiq.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How accurate is this IQ test?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our IQ test is scientifically validated and calibrated against standard IQ scales including WAIS and Stanford-Binet. Questions are developed by cognitive psychologists with norming data from millions of test-takers worldwide."
        }
      },
      {
        "@type": "Question", 
        "name": "How long does the IQ test take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The test consists of 40 questions and takes an average of 20 minutes to complete. You can work at your own pace with no time pressure per question."
        }
      },
      {
        "@type": "Question",
        "name": "Is this IQ test really free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our IQ test is completely free to take. You get instant results including your IQ score, percentile ranking, and cognitive breakdown at no cost."
        }
      }
    ]
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}