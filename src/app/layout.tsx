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
    "name": "RIOT - Free IQ Test Online",
    "url": "https://www.riot-iq.com",
    "logo": "https://www.riot-iq.com/logo.png",
    "description": "RIOT provides professional online IQ testing services with scientifically validated intelligence assessments, instant results, and detailed cognitive analysis."
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "RIOT IQ Test",
    "url": "https://www.riot-iq.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.riot-iq.com/search?q={search_term_string}",
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
          "text": "Our IQ test is scientifically validated and correlates highly with professional assessments. The test measures multiple cognitive abilities including logical reasoning, pattern recognition, and verbal comprehension."
        }
      },
      {
        "@type": "Question", 
        "name": "What is a good IQ score?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Average IQ scores range from 85-115. Scores above 115 are considered above average, while scores above 130 are considered gifted. Our test provides detailed explanations of what your score means."
        }
      },
      {
        "@type": "Question",
        "name": "How long does the IQ test take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The complete IQ assessment takes approximately 20-30 minutes to complete. You'll receive your results immediately after finishing all questions."
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