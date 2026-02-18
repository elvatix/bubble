import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Smart Reminders — Elvatix',
  description: 'Automatische follow-up reminders op basis van eerdere interacties. Nooit meer een kandidaat vergeten.',
};

const features = [
  { title: 'Intelligente timing', desc: 'Elvatix analyseert wanneer je kandidaten het meest actief zijn op LinkedIn en plant je follow-up op het optimale moment.' },
  { title: 'Context-aware berichten', desc: 'Elke follow-up verwijst naar je eerdere interactie. Geen generieke \'Nog even checken\' berichten, maar relevante opvolging.' },
  { title: 'Automatische pipeline', desc: 'Stel een follow-up sequence in: dag 3, dag 7, dag 14. Elvatix doet de rest — totdat de kandidaat reageert.' },
  { title: 'Team-overzicht', desc: 'Managers zien in één dashboard welke follow-ups openstaan, wie achterloopt en waar kansen liggen.' },
];

export default function RemindersPage() {
  return (
    <main className="pt-40 pb-0">
      <Container className="text-center mb-16">
        <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--linkedin-blue-light)] text-[var(--linkedin-blue)] text-sm font-semibold mb-4">Smart Reminders</span>
        <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">Nooit meer een kandidaat vergeten</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Automatische follow-up reminders op basis van eerdere interacties. Elke opvolging voelt persoonlijk en relevant.
        </p>
        <div className="text-8xl my-10">⏰</div>
      </Container>

      <Container className="max-w-4xl mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((f) => (
            <div key={f.title} className="bg-white border border-gray-200 rounded-2xl p-6">
              <h3 className="font-bold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </Container>

      <section className="bg-gradient-to-r from-[var(--linkedin-blue)] to-[var(--linkedin-blue-dark)] py-16">
        <Container className="text-center text-white">
          <h2 className="text-2xl font-extrabold mb-3">Start met slimmere follow-ups</h2>
          <p className="text-white/80 mb-6">Plan een demo en ontdek Smart Reminders in actie.</p>
          <Button variant="white" href="/demo">Plan een demo</Button>
        </Container>
      </section>
    </main>
  );
}
