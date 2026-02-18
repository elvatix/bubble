import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Studies — Elvatix',
  description: 'Ontdek hoe recruitmentbureaus hun outreach transformeerden met Elvatix.',
};

const cases = [
  {
    company: 'Manpower',
    industry: 'Uitzenden & Detachering',
    logo: '🏢',
    challenge: 'Het team van 40+ recruiters verstuurde handmatig InMails die te generiek waren. Response rates lagen onder de 15% en de doorlooptijd van vacatures liep op.',
    solution: 'Manpower implementeerde Elvatix voor het volledige recruitment team. Elke recruiter genereert nu gepersonaliseerde berichten op basis van LinkedIn profieldata, met follow-up reminders en analytics per medewerker.',
    results: [
      { label: 'Response rate', before: '14%', after: '41%' },
      { label: 'Time-to-fill', before: '34 dagen', after: '21 dagen' },
      { label: 'Tijd per bericht', before: '8 min', after: '30 sec' },
    ],
    quote: 'Elvatix heeft de manier waarop ons team kandidaten benadert compleet veranderd. De berichten voelen echt persoonlijk — kandidaten merken niet dat AI meehielp.',
    quotePerson: 'Lisa van der Berg',
    quoteRole: 'Head of Talent Acquisition, Manpower Nederland',
  },
  {
    company: 'Vibe Group',
    industry: 'IT Recruitment & Detachering',
    logo: '⚡',
    challenge: 'Als snelgroeiend IT-recruitmentbureau had Vibe Group moeite om de outreach-kwaliteit te bewaken bij schaalvergroting. Nieuwe recruiters hadden weken nodig om het niveau van seniors te bereiken.',
    solution: 'Met Elvatix kregen juniors direct toegang tot AI-gestuurde berichten die het niveau van senior recruiters evenaarden. Custom GPT werd getraind op de Vibe Group schrijfstijl.',
    results: [
      { label: 'Onboarding-tijd recruiters', before: '6 weken', after: '1 week' },
      { label: 'Connectie-acceptatie', before: '23%', after: '52%' },
      { label: 'Berichten per dag p.p.', before: '15', after: '60+' },
    ],
    quote: 'De impact was direct zichtbaar. Onze juniors presteerden binnen een week op senior niveau. Dat had ik niet voor mogelijk gehouden.',
    quotePerson: 'Mark de Vries',
    quoteRole: 'COO, Vibe Group',
  },
];

export default function CasesPage() {
  return (
    <main className="pt-32 pb-0">
      <Container className="text-center mb-16">
        <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--linkedin-blue-light)] text-[var(--linkedin-blue)] text-sm font-semibold mb-4">Case Studies</span>
        <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">Resultaten die spreken</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Ontdek hoe toonaangevende recruitmentbureaus hun outreach transformeerden met Elvatix.
        </p>
      </Container>

      <Container className="max-w-4xl mb-20">
        <div className="flex flex-col gap-16">
          {cases.map((c) => (
            <div key={c.company} className="border border-gray-200 rounded-2xl overflow-hidden">
              <div className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">{c.logo}</span>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{c.company}</h2>
                    <p className="text-sm text-gray-500">{c.industry}</p>
                  </div>
                </div>

                <h3 className="font-bold text-gray-900 mb-2">De uitdaging</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{c.challenge}</p>

                <h3 className="font-bold text-gray-900 mb-2">De oplossing</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-8">{c.solution}</p>

                <div className="grid grid-cols-3 gap-4 mb-8">
                  {c.results.map((r) => (
                    <div key={r.label} className="bg-gray-50 rounded-xl p-4 text-center">
                      <p className="text-xs text-gray-500 mb-1">{r.label}</p>
                      <p className="text-xs text-gray-400 line-through">{r.before}</p>
                      <p className="text-2xl font-black text-[var(--linkedin-blue)]">{r.after}</p>
                    </div>
                  ))}
                </div>

                <blockquote className="border-l-4 border-[var(--linkedin-blue)] pl-4 italic text-gray-600 text-sm mb-2">
                  &ldquo;{c.quote}&rdquo;
                </blockquote>
                <p className="text-sm font-bold text-gray-900">{c.quotePerson}</p>
                <p className="text-xs text-gray-500">{c.quoteRole}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>

      <section className="bg-gradient-to-r from-[var(--linkedin-blue)] to-[var(--linkedin-blue-dark)] py-16">
        <Container className="text-center text-white">
          <h2 className="text-2xl font-extrabold mb-3">Word de volgende success story</h2>
          <p className="text-white/80 mb-6">Ontdek wat Elvatix voor jouw team kan betekenen.</p>
          <Button variant="white" href="/demo">Plan een demo</Button>
        </Container>
      </section>
    </main>
  );
}
