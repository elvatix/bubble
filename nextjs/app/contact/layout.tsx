import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Neem contact op met Elvatix — wij reageren binnen één werkdag',
  description: 'Heb je een vraag over Elvatix of wil je een suggestie doorgeven? Vul het contactformulier in en ons team reageert binnen één werkdag.',
  alternates: { canonical: 'https://elvatix.com/contact' },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
