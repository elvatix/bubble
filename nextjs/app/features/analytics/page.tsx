import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Analytics — Elvatix',
  description: 'Diepgaande inzichten in je LinkedIn outreach. Zie wat werkt en optimaliseer je recruitment strategie.',
};

const features = [
  { title: 'Response rate tracking', desc: 'Zie per template, per recruiter en per doelgroep hoe je berichten presteren. Vooruitgang meten is vooruitgang boeken.' },
  { title: 'A/B test resultaten', desc: 'Vergelijk automatisch welke berichtvarianten beter converteren. Elvatix leert mee en verbetert continue.' },
  { title: 'Team dashboards', desc: 'Managers krijgen real-time overzicht van team prestaties, individuele rankings en verbetermogelijkheden.' },
  { title: 'Export & rapportage', desc: 'Download rapporten als PDF of CSV. Deel resultaten met stakeholders in het format dat zij prefereren.' },
];

export default function AnalyticsPage() {
  return (
    <main className="pt-40 pb-0">
      <Container className="text-center mb-16">
        <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--linkedin-blue-light)] text-[var(--linkedin-blue)] text-sm font-semibold mb-4">Analytics</span>
        <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">Data-gedreven recruitment</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Diepgaande analytics die je laten zien wat werkt — en wat niet. Optimaliseer je outreach met echte data.
        </p>
        <div className="text-8xl my-10">📊</div>
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
          <h2 className="text-2xl font-extrabold mb-3">Ontdek jouw data</h2>
          <p className="text-white/80 mb-6">Start met meten en ontdek welke berichten het best converteren.</p>
          <Button variant="white" href="/demo">Plan een demo</Button>
        </Container>
      </section>
    </main>
  );
}
