import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Solutions — Elvatix',
  description: 'Ontdek hoe Elvatix past bij jouw type organisatie.',
  alternates: { canonical: '/solutions' },
};

const segments = [
  {
    icon: '🏢',
    title: 'Recruitmentbureaus',
    desc: 'Voor bureaus die dagelijks tientallen kandidaten benaderen. Schaal je outreach zonder kwaliteitsverlies.',
    benefits: ['Volume zonder kwaliteitsverlies', 'Team-brede schrijfstandaard', 'ROI per recruiter zichtbaar'],
  },
  {
    icon: '🔗',
    title: 'Corporate Recruiters',
    desc: 'Voor in-house teams die employer branding en persoonlijke benadering combineren.',
    benefits: ['Employer branding consistent', 'Persoonliijke touch op schaal', 'Integratie met ATS'],
  },
  {
    icon: '🔍',
    title: 'Detacheringsbureaus',
    desc: 'Voor organisaties die langdurige relaties opbouwen met kandidaten.',
    benefits: ['Relatie-opbouw door personalisatie', 'Follow-up automatisering', 'Kandidaat-portaal integratie'],
  },
];

export default function SolutionsPage() {
  return (
    <main className="pt-40 pb-0">
      <Container className="text-center mb-16">
        <span className="page-badge">Solutions</span>
        <h1 className="page-heading">Voor elke recruiter de juiste oplossing</h1>
        <p className="page-subtitle">
          Of je nu solo werkt of een team van 50+ aanstuurt — Elvatix past zich aan.
        </p>
      </Container>

      <Container className="max-w-5xl mb-20">
        <div className="flex flex-col gap-8">
          {segments.map((s) => (
            <div key={s.title} className="bg-white border border-gray-200 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{s.icon}</span>
                <h2 className="text-2xl font-bold text-gray-900">{s.title}</h2>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">{s.desc}</p>
              <ul className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {s.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">✓</span>
                    <span className="text-sm text-gray-700">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>

      <section className="cta-section">
        <Container className="text-center text-white">
          <h2 className="text-2xl font-extrabold mb-3">Welke oplossing past bij jou?</h2>
          <p className="text-white/80 mb-6">Plan een demo en ontdek hoe Elvatix jouw team kan versterken.</p>
          <Button variant="white" href="/demo">Plan een demo</Button>
        </Container>
      </section>
    </main>
  );
}
