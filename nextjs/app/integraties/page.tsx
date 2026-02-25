import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Integraties | Elvatix',
  description: 'Verbind Elvatix met je bestaande recruitment tools. Naadloze integraties met populaire ATS en CRM systemen.',
  alternates: { canonical: '/integraties' },
};

const integrations = [
  { name: 'LinkedIn Recruiter Seat', desc: 'Direct koppelen met je Recruiter Seat voor naadloze candidate sourcing.', status: 'Live' },
  { name: 'Bullhorn', desc: 'Synchroniseer kandidaatdata en activiteiten automatisch met Bullhorn CRM.', status: 'Live' },
  { name: 'Salesforce', desc: 'Push recruitment data naar Salesforce voor complet overzicht van je pipeline.', status: 'Beta' },
  { name: 'Greenhouse', desc: 'Integreer met Greenhouse ATS voor end-to-end recruitment workflow.', status: 'Coming soon' },
  { name: 'Zapier', desc: 'Verbind Elvatix met 5000+ apps via Zapier voor onbeperkte automatisering.', status: 'Live' },
  { name: 'API', desc: 'Bouw custom integraties met onze REST API. Volledige documentatie beschikbaar.', status: 'Live' },
];

export default function IntegratiesPage() {
  return (
    <main className="pt-40 pb-0">
      <Container className="text-center mb-16">        <h1 className="page-heading">Verbind al je tools</h1>
        <p className="page-subtitle">
          Elvatix integreert naadloos met je bestaande recruitment stack. Geen datasilo\'s, geen dubbel werk.
        </p>
      </Container>

      <Container className="max-w-5xl mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {integrations.map((i) => (
            <div key={i.name} className="bg-white border border-border rounded-2xl p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-text-primary">{i.name}</h3>
                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                  i.status === 'Live' ? 'bg-green-bg text-green-dark' :
                  i.status === 'Beta' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-gray-100 text-text-muted'
                }`}>{i.status}</span>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed">{i.desc}</p>
            </div>
          ))}
        </div>
      </Container>

      <section className="cta-section">
        <Container className="text-center text-white">
          <h2 className="text-2xl font-extrabold mb-3">Mis je een integratie?</h2>
          <p className="text-white/80 mb-6">Laat ons weten welke tools je gebruikt. We bouwen graag mee.</p>
          <Button variant="white" href="/contact">Vertel ons</Button>
        </Container>
      </section>
    </main>
  );
}
