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
        "name": "How accurate is this online IQ test?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our IQ test is scientifically validated and designed by psychologists. It provides a reliable estimate of your intelligence quotient using standardized cognitive assessment methods."
        }
      },
      {
        "@type": "Question",
        "name": "Is the IQ test really free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our basic IQ test is completely free. You can take the full assessment and receive your IQ score without any payment required."
        }
      },
      {
        "@type": "Question",
        "name": "How long does the IQ test take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The complete IQ test typically takes 20-30 minutes to finish. You'll receive your results immediately after completion."
        }
      },
      {
        "@type": "Question",
        "name": "What does my IQ score mean?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "IQ scores are standardized with 100 as average. Scores above 130 are considered highly intelligent, 115-129 above average, 85-114 average, and below 85 below average."
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