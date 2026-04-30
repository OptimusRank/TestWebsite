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
  title: "IQ Test - Free Online Intelligence Test | Get Results Now",
  description:
    "Take our free IQ test online and get your intelligence score instantly. Scientific assessment with detailed results. No signup required - start now!",
  keywords: [
    "IQ test",
    "intelligence test",
    "free IQ test",
    "online IQ test",
    "cognitive assessment",
  ],
  openGraph: {
    title: "IQ Test - Free Online Intelligence Test",
    description:
      "Take our free IQ test online and get your intelligence score instantly. Scientific assessment, no signup required.",
    type: "website",
    url: "https://www.riotiq.com",
  },
  metadataBase: new URL("https://www.riotiq.com"),
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
    "url": "https://www.riotiq.com",
    "logo": "https://www.riotiq.com/logo.png",
    "description": "Professional online IQ testing service providing scientifically validated intelligence assessments with instant results and detailed cognitive analysis.",
    "sameAs": [
      "https://www.riotiq.com"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "RiotIQ - Free Online IQ Test",
    "url": "https://www.riotiq.com",
    "description": "Take a free IQ test online and get your intelligence score instantly. Scientific assessment with detailed cognitive breakdown."
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
          "text": "Our test is calibrated against standard IQ scales (WAIS, Stanford-Binet) with a correlation of r=0.86. While not a clinical assessment, it provides a reliable estimate of your cognitive abilities."
        }
      },
      {
        "@type": "Question",
        "name": "Is this IQ test really free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, completely free. No hidden costs, no premium upgrades. You get your full IQ score and cognitive breakdown at no charge."
        }
      },
      {
        "@type": "Question",
        "name": "How long does the IQ test take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most people complete the 40 questions in 15-20 minutes. You can take breaks if needed - the timer only counts active testing time."
        }
      },
      {
        "@type": "Question",
        "name": "What age range is this IQ test suitable for?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The test is designed for ages 16-65. Questions are culturally neutral and don't require specific knowledge or education."
        }
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Online IQ Test",
    "description": "Free online intelligence quotient test providing instant results with detailed cognitive analysis across multiple domains.",
    "provider": {
      "@type": "Organization",
      "name": "RiotIQ"
    },
    "serviceType": "Intelligence Assessment",
    "areaServed": "Worldwide",
    "availableLanguage": "English",
    "isAccessibleForFree": true,
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    }
  };

  const structuredData = [organizationSchema, websiteSchema, faqSchema, serviceSchema];

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <head>
        {structuredData.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}