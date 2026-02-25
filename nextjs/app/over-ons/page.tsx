import Container from '@/components/ui/Container';
import { TargetIcon, ZapIcon, UsersIcon, RocketIcon } from '@/components/icons/Icons';
import Button from '@/components/ui/Button';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Over Ons | Elvatix',
  description: 'Leer het team achter Elvatix kennen. Gebouwd door recruiters, voor recruiters.',
  alternates: { canonical: '/over-ons' },
};

const values = [
  { icon: <TargetIcon size={28} />, title: 'Klantgericht', desc: 'Alles wat we bouwen begint bij het probleem van de recruiter. Niet bij de technologie.' },
  { icon: <ZapIcon size={28} />, title: 'Snelheid', desc: 'We geloven dat snelheid een feature is. Release early, iterate fast, deliver value.' },
  { icon: <UsersIcon size={28} />, title: 'Transparantie', desc: 'Eerlijke pricing, open communicatie en geen verborgen agenda\'s.' },
  { icon: <RocketIcon size={28} />, title: 'Innovatie', desc: 'We pushen de grenzen van wat AI kan doen voor recruitment. Elke dag opnieuw.' },
];

export default function OverOnsPage() {
  return (
    <main className="pt-40 pb-0">
      <Container className="text-center mb-16">        <h1 className="page-heading">Gebouwd door recruiters, voor recruiters</h1>
        <p className="page-subtitle">
          Elvatix is ontstaan uit frustratie met het generieke karakter van LinkedIn outreach. We wisten dat het beter kon en bouwden de oplossing.
        </p>
      </Container>

      <Container className="max-w-4xl mb-20">
        <h2 className="text-2xl font-extrabold text-text-primary mb-8 text-center">Onze waarden</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((v) => (
            <div key={v.title} className="bg-white border border-border rounded-2xl p-6">
              <span className="text-3xl mb-3 block">{v.icon}</span>
              <h3 className="font-bold text-text-primary mb-2">{v.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </Container>

      <section className="cta-section">
        <Container className="text-center text-white">
          <h2 className="text-2xl font-extrabold mb-3">Wil je met ons werken?</h2>
          <p className="text-white/80 mb-6">We zijn altijd op zoek naar gepassioneerde mensen die recruitment willen verbeteren.</p>
          <Button variant="white" href="/contact">Neem contact op</Button>
        </Container>
      </section>
    </main>
  );
}
