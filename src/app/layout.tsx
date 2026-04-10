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
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Free IQ Test Online",
    "url": "https://www.example.com",
    "logo": "https://www.example.com/logo.png",
    "description": "Professional online IQ testing service providing scientifically validated intelligence assessments with instant results and detailed cognitive analysis."
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Free IQ Test Online",
    "url": "https://www.example.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.example.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    },
    "siteNavigationElement": [
      {
        "@type": "SiteNavigationElement",
        "name": "IQ Test",
        "url": "https://www.example.com/test"
      },
      {
        "@type": "SiteNavigationElement",
        "name": "Results",
        "url": "https://www.example.com/results"
      },
      {
        "@type": "SiteNavigationElement",
        "name": "About",
        "url": "https://www.example.com/about"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is an IQ test?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "An IQ test is a standardized assessment designed to measure human intelligence and cognitive abilities across various domains including logical reasoning, pattern recognition, and problem-solving skills."
        }
      },
      {
        "@type": "Question",
        "name": "How accurate are online IQ tests?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our online IQ test uses scientifically validated questions and standardized scoring methods, providing results that correlate well with traditional professionally administered tests."
        }
      },
      {
        "@type": "Question",
        "name": "How long does the IQ test take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The complete IQ test typically takes 20-30 minutes to complete, with instant results provided immediately after finishing all questions."
        }
      },
      {
        "@type": "Question",
        "name": "Is the IQ test really free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our IQ test is completely free to take. You'll receive your IQ score and basic analysis at no cost, with optional detailed reports available."
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