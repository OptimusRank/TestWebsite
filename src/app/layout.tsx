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
  title: "IQ Test - Free Online Intelligence Test (2025)",
  description:
    "Take our free IQ test online and get your score instantly. 40 scientifically validated questions, immediate results, trusted by 2.4M+ people worldwide.",
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "IQ Test - Free Online Intelligence Test (2025)",
    description:
      "Take our free IQ test online and get your score instantly. 40 scientifically validated questions, immediate results, trusted by 2.4M+ people worldwide.",
    type: "website",
    url: "https://www.riotiq.com",
  },
  alternates: {
    canonical: "https://www.riotiq.com",
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
    "url": "https://www.riotiq.com",
    "logo": "https://www.riotiq.com/logo.png",
    "description": "Professional online IQ testing service providing scientifically validated intelligence assessments with instant results and detailed cognitive analysis."
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
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}