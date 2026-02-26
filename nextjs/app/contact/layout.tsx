import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Neem direct contact op met het Elvatix team",
  description: "Heb je vragen over Elvatix, onze recruitment oplossingen, of wil je een demo? Neem direct contact met ons op via e-mail of ons contactformulier.",
  alternates: { canonical: "https://elvatix.com/contact" },
  openGraph: {
    title: "Neem direct contact op met het Elvatix team",
    description: "Heb je vragen over Elvatix, onze recruitment oplossingen, of wil je een demo? Neem direct contact met ons op via e-mail of ons contactformulier.",
    url: "https://elvatix.com/contact",
    type: "website",
  },
};

export const revalidate = 86400; // Cache for 24 hours

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
