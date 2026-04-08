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

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Free IQ Test Online",
    "url": "https://www.example.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.example.com/search?q={search_term_string}",
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
          "text": "Our IQ test is scientifically validated and provides accurate results comparable to professional assessments. The test uses standardized questions and scoring methods."
        }
      },
      {
        "@type": "Question",
        "name": "How long does the IQ test take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The complete IQ test typically takes 30-45 minutes to complete, depending on your pace. You'll receive instant results upon completion."
        }
      },
      {
        "@type": "Question",
        "name": "Is the IQ test really free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our basic IQ test is completely free with no hidden charges. You get your IQ score and basic analysis at no cost."
        }
      },
      {
        "@type": "Question",
        "name": "What is a good IQ score?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Average IQ scores range from 85-115. Scores above 130 are considered gifted, while scores below 70 may indicate intellectual challenges."
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
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