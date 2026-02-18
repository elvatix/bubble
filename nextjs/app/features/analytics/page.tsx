import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Analytics — Elvatix',
  description: 'Krijg inzicht in je LinkedIn outreach met het Elvatix analytics dashboard.',
};

const features = [
  { icon: '📊', title: 'Response rate tracking', desc: 'Zie welke berichten het beste converteren. Per template, per kandidaatprofiel, per tijdstip.' },
  { icon: '📈', title: 'Trendanalyse', desc: 'Volg je prestaties over tijd. Ontdek patronen en optimaliseer je strategie continu.' },
  { icon: '👥', title: 'Team dashboards', desc: 'Vergelijk performance tussen teamleden. Identificeer best practices en deel ze met je team.' },
  { icon: '🎯', title: 'A/B test resultaten', desc: 'Zie welke varianten het beste presteren. Data-driven beslissingen voor je outreach.' },
];

export default function AnalyticsPage() {
  return (
    <main className="pt-32 pb-0">
      <Container className="text-center mb-16">
        <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--linkedin-blue-light)] text-[var(--linkedin-blue)] text-sm font-semibold mb-4">Analytics</span>
        <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">Data-driven recruitment</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Stop met gokken. Zie exact welke berichten werken en optimaliseer je outreach op basis van echte data.
        </p>
        <div className="text-8xl mb-10 mt-8">📊</div>
      </Container>

      <Container className="max-w-4xl mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((f) => (
            <div key={f.title} className="bg-white border border-gray-200 rounded-2xl p-6">
              <span className="text-3xl mb-3 block">{f.icon}</span>
              <h3 className="font-bold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </Container>

      <section className="bg-gradient-to-r from-[var(--linkedin-blue)] to-[var(--linkedin-blue-dark)] py-16">
        <Container className="text-center text-white">
          <h2 className="text-2xl font-extrabold mb-3">Beter recruiten begint bij data</h2>
          <p className="text-white/80 mb-6">Ontdek het analytics dashboard in een persoonlijke demo.</p>
          <Button variant="white" href="/demo">Plan een demo</Button>
        </Container>
      </section>
    </main>
  );
}
