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
      "Take the Riot IQ Test - the official Reasoning and Intelligence Online Test (RIOT). Free IQ assessment with instant results and detailed score analysis.",
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