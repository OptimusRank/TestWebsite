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
    "@graph": [
      {
        "@type": "Organization",
        "name": "Free IQ Test Online",
        "url": "https://www.example.com",
        "logo": "https://www.example.com/logo.png",
        "description": "Professional online IQ testing service providing scientifically validated intelligence assessments with instant results and detailed cognitive analysis.",
        "sameAs": [
          "https://www.facebook.com/freeiQtest",
          "https://twitter.com/freeiQtest"
        ]
      },
      {
        "@type": "WebSite",
        "name": "Free IQ Test Online",
        "url": "https://www.example.com",
        "description": "Take our free online IQ test and get your score in minutes. Scientifically validated questions, instant results, and a detailed cognitive breakdown.",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://www.example.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How accurate is this free IQ test?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our IQ test is scientifically validated and correlates strongly with professional IQ assessments. The test uses standardized questions and scoring methods to provide accurate intelligence measurements."
            }
          },
          {
            "@type": "Question",
            "name": "How long does the IQ test take?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The complete IQ test takes approximately 30-45 minutes to complete. You'll receive your results immediately after finishing all questions."
            }
          },
          {
            "@type": "Question",
            "name": "What does my IQ score mean?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "IQ scores are standardized with an average of 100. Scores above 130 are considered gifted, 120-129 superior, 110-119 high average, 90-109 average, and below 90 below average."
            }
          },
          {
            "@type": "Question",
            "name": "Is the online IQ test really free?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, our basic IQ test is completely free with instant results. No hidden fees or required payments to see your score."
            }
          }
        ]
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}