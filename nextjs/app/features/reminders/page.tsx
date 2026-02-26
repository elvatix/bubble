import Container from '@/components/ui/Container';
import { ClockIcon } from '@/components/icons/Icons';
import Button from '@/components/ui/Button';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Smart Reminders',
  description: 'Automatische follow-up reminders op basis van eerdere interacties. Nooit meer een kandidaat vergeten.',
  alternates: { canonical: '/features/reminders' },
};

const features = [
  { title: 'Intelligente timing', desc: 'Elvatix analyseert wanneer je kandidaten het meest actief zijn op LinkedIn en plant je follow-up op het optimale moment.' },
  { title: 'Context-aware berichten', desc: 'Elke follow-up verwijst naar je eerdere interactie. Geen generieke \'Nog even checken\' berichten, maar relevante opvolging.' },
  { title: 'Automatische pipeline', desc: 'Stel een follow-up sequence in: dag 3, dag 7, dag 14. Elvatix doet de rest . Totdat de kandidaat reageert.' },
  { title: 'Team-overzicht', desc: 'Managers zien in één dashboard welke follow-ups openstaan, wie achterloopt en waar kansen liggen.' },
];

export default function RemindersPage() {
  return (
    <main className="pt-40 pb-0">
      <Container className="text-center mb-16">        <h1 className="page-heading">Nooit meer een kandidaat vergeten</h1>
        <p className="page-subtitle">
          Automatische follow-up reminders op basis van eerdere interacties. Elke opvolging voelt persoonlijk en relevant.
        </p>
        <div className="my-10 text-elvatix"><ClockIcon size={80} /></div>
      </Container>

      <Container className="max-w-4xl mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((f) => (
            <div key={f.title} className="bg-white border border-border rounded-2xl p-6">
              <h3 className="font-bold text-text-primary mb-2">{f.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </Container>

      <section className="cta-section">
        <Container className="text-center text-white">
          <h2 className="text-2xl font-extrabold mb-3">Start met slimmere follow-ups</h2>
          <p className="text-white/80 mb-6">Plan een demo en ontdek Smart Reminders in actie.</p>
          <Button variant="white" href="/demo">Plan een demo</Button>
        </Container>
      </section>
    </main>
  );
}
