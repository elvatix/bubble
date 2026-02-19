import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import JsonLd from "@/components/JsonLd";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://elvatix.com"),
  title: {
    default: "Elvatix | #1 AI-Powered LinkedIn Recruitment Copilot",
    template: "%s | Elvatix",
  },
  description:
    "Schrijf persoonlijke InMails in seconden. De AI-recruitment copilot die uren handmatig werk bespaart.",
  keywords: [
    "LinkedIn recruitment",
    "AI InMail",
    "recruitment copilot",
    "LinkedIn outreach",
    "AI recruitment tool",
    "persoonlijke InMails",
    "recruitment automatisering",
  ],
  authors: [{ name: "Elvatix" }],
  creator: "Elvatix",
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "https://elvatix.com",
    siteName: "Elvatix",
    title: "Elvatix | #1 AI-Powered LinkedIn Recruitment Copilot",
    description:
      "Schrijf persoonlijke InMails in seconden. De AI-recruitment copilot die uren handmatig werk bespaart.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Elvatix | AI-Powered LinkedIn Recruitment Copilot",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elvatix | #1 AI-Powered LinkedIn Recruitment Copilot",
    description:
      "Schrijf persoonlijke InMails in seconden. De AI-recruitment copilot die uren handmatig werk bespaart.",
    images: ["/opengraph-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://elvatix.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" className={inter.variable}>
      <body className={inter.className}>
        <JsonLd />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
