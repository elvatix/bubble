import Hero from "@/components/sections/Hero";
import Solutions from "@/components/sections/Solutions";
import PainPoints from "@/components/sections/PainPoints";
import Comparison from "@/components/sections/Comparison";
import TrustPricing from "@/components/sections/TrustPricing";
import CTA from "@/components/sections/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  openGraph: {
    title: "Elvatix | #1 AI-Powered LinkedIn Recruitment Copilot",
    description: "Schrijf persoonlijke InMails in seconden, automatiseer connectieverzoeken en versnel je hele recruitment workflow met AI. Start gratis.",
    url: "https://elvatix.com",
    type: "website",
  },
  title: "Elvatix | #1 AI-Powered LinkedIn Recruitment Copilot",
  description:
    "Schrijf persoonlijke InMails in seconden, automatiseer connectieverzoeken en versnel je hele recruitment workflow met AI. Start gratis.",
  alternates: { canonical: "/" },
};

export const revalidate = 86400; // Cache for 24 hours (11/10 SEO optimization)

export default function Home() {
  return (
    <>
      <Hero />
      <Solutions />
      <PainPoints />
      <Comparison />
      <TrustPricing />
      <CTA />
    </>
  );
}
