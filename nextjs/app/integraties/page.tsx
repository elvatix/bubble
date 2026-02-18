import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Integraties — Elvatix',
  description: 'Elvatix integreert naadloos met LinkedIn Recruiter en je bestaande recruitment tools.',
};

const integrations = [
  { title: 'LinkedIn Recruiter', desc: 'Elvatix werkt direct in je LinkedIn Recruiter omgeving. Geen extra tab, geen copy-paste.', icon: '🔗' },
  { title: 'ATS Koppelingen', desc: 'Integreer met populaire ATS systemen. Kandidaat-info stroomt automatisch mee.', icon: '📂' },
  { title: 'Chrome Extensie', desc: 'Eén klik vanuit je browser. Werkt overal waar je LinkedIn gebruikt.', icon: '🌐' },
  { title: 'API Toegang', desc: 'Bouw custom integraties met de Elvatix API. Voor enterprise teams die meer willen.', icon: '⚙️' },
];

export default function IntegratiesPage() {
  return (
    <main className="pt-32 pb-0">
      <Container className="text-center mb-16">
        <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--linkedin-blue-light)] text-[var(--linkedin-blue)] text-sm font-semibold mb-4">Integraties</span>
        <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">Werkt waar jij werkt</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Elvatix integreert naadloos met je bestaande tools. Geen apart platform, geen workflow-onderbrekingen.
        </p>
      </Container>

      <Container className="max-w-4xl mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {integrations.map((i) => (
            <div key={i.title} className="bg-white border border-gray-200 rounded-2xl p-6">
              <span className="text-3xl mb-3 block">{i.icon}</span>
              <h3 className="font-bold text-gray-900 mb-2">{i.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{i.desc}</p>
            </div>
          ))}
        </div>
      </Container>

      <section className="bg-gradient-to-r from-[var(--linkedin-blue)] to-[var(--linkedin-blue-dark)] py-16">
        <Container className="text-center text-white">
          <h2 className="text-2xl font-extrabold mb-3">Klaar om te integreren?</h2>
          <p className="text-white/80 mb-6">Plan een demo en ontdek hoe Elvatix past in jouw workflow.</p>
          <Button variant="white" href="/demo">Plan een demo</Button>
        </Container>
      </section>
    </main>
  );
}
