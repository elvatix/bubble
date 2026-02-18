import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Connectieverzoeken — Elvatix',
  description: 'Genereer connectieverzoeken die geaccepteerd worden. AI-powered en gepersonaliseerd.',
};

const features = [
  { title: 'Maximaal 300 karakters, maximaal impact', desc: 'LinkedIn beperkt connectieverzoeken tot 300 tekens. Elvatix maakt elk woord tellen met een bericht dat aanspreekt.' },
  { title: 'Gebaseerd op gemeenschappelijkheden', desc: 'AI vindt gedeelde connecties, bedrijven, opleidingen of interesses en verweeft deze subtiel in het verzoek.' },
  { title: 'A/B test varianten', desc: 'Genereer meerdere versies en ontdek welke aanpak het beste werkt voor jouw doelgroep.' },
  { title: 'Hoger acceptatiepercentage', desc: 'Gepersonaliseerde verzoeken worden 2-3x vaker geaccepteerd dan standaard uitnodigingen.' },
];

export default function ConnectionsPage() {
  return (
    <main className="pt-32 pb-0">
      <Container className="text-center mb-16">
        <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--linkedin-blue-light)] text-[var(--linkedin-blue)] text-sm font-semibold mb-4">Connectieverzoeken</span>
        <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">Connectieverzoeken die geaccepteerd worden</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Eerste indrukken tellen. Elvatix schrijft connectieverzoeken die opvallen in een overvolle inbox.
        </p>
        <div className="text-8xl mb-10 mt-8">🤝</div>
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
          <h2 className="text-2xl font-extrabold mb-3">Probeer het zelf</h2>
          <p className="text-white/80 mb-6">Ga naar de homepage en test de connectieverzoek generator.</p>
          <Button variant="white" href="/">Probeer gratis →</Button>
        </Container>
      </section>
    </main>
  );
}
