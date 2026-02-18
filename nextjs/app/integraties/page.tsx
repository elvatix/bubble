import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Integraties — Elvatix',
  description: 'Verbind Elvatix met je bestaande recruitment tools. Naadloze integraties met populaire ATS en CRM systemen.',
};

const integrations = [
  { name: 'LinkedIn Recruiter', desc: 'Direct koppelen met je LinkedIn Recruiter-account voor naadloze candidate sourcing.', status: 'Live' },
  { name: 'Bullhorn', desc: 'Synchroniseer kandidaatdata en activiteiten automatisch met Bullhorn CRM.', status: 'Live' },
  { name: 'Salesforce', desc: 'Push recruitment data naar Salesforce voor complet overzicht van je pipeline.', status: 'Beta' },
  { name: 'Greenhouse', desc: 'Integreer met Greenhouse ATS voor end-to-end recruitment workflow.', status: 'Coming soon' },
  { name: 'Zapier', desc: 'Verbind Elvatix met 5000+ apps via Zapier voor onbeperkte automatisering.', status: 'Live' },
  { name: 'API', desc: 'Bouw custom integraties met onze REST API. Volledige documentatie beschikbaar.', status: 'Live' },
];

export default function IntegratiesPage() {
  return (
    <main className="pt-40 pb-0">
      <Container className="text-center mb-16">
        <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--linkedin-blue-light)] text-[var(--linkedin-blue)] text-sm font-semibold mb-4">Integraties</span>
        <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">Verbind al je tools</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Elvatix integreert naadloos met je bestaande recruitment stack. Geen datasilo\'s, geen dubbel werk.
        </p>
      </Container>

      <Container className="max-w-5xl mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {integrations.map((i) => (
            <div key={i.name} className="bg-white border border-gray-200 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-gray-900">{i.name}</h3>
                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                  i.status === 'Live' ? 'bg-green-100 text-green-700' :
                  i.status === 'Beta' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-gray-100 text-gray-500'
                }`}>{i.status}</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{i.desc}</p>
            </div>
          ))}
        </div>
      </Container>

      <section className="bg-gradient-to-r from-[var(--linkedin-blue)] to-[var(--linkedin-blue-dark)] py-16">
        <Container className="text-center text-white">
          <h2 className="text-2xl font-extrabold mb-3">Mis je een integratie?</h2>
          <p className="text-white/80 mb-6">Laat ons weten welke tools je gebruikt. We bouwen graag mee.</p>
          <Button variant="white" href="/contact">Vertel ons</Button>
        </Container>
      </section>
    </main>
  );
}
