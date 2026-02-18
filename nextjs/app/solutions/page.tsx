import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Oplossingen — Elvatix',
  description: 'Ontdek hoe Elvatix past bij jouw recruitment workflow. Van bureau tot corporate.',
};

const solutions = [
  { title: 'Recruitmentbureaus', desc: 'Schaal je outreach zonder extra headcount. Elvatix helpt je team om 3x meer gepersonaliseerde berichten te versturen met dezelfde bezetting.', stats: 'Gemiddeld 47% hogere response rate', icon: '🏢' },
  { title: 'Detacheringsbureaus', desc: 'Bouw een warme kandidatenpool op met connectieverzoeken die converteren. Ideaal voor high-volume recruitment in IT, finance en engineering.', stats: '2,3x meer geaccepteerde connectieverzoeken', icon: '🔗' },
  { title: 'Corporate Recruiters', desc: 'Versterk je employer brand met berichten die je bedrijfscultuur uitstralen. Elvatix past de tone-of-voice aan op jouw organisatie.', stats: '65% tijdsbesparing op sourcing', icon: '🏛️' },
  { title: 'Executive Search', desc: 'Voor senior rollen telt elke zin. Elvatix analyseert carrièrepaden en schrijft berichten die C-level kandidaten aanspreken.', stats: 'Gemiddeld 38% response op C-level outreach', icon: '🎯' },
  { title: 'Freelance Recruiters', desc: 'Werk slimmer als je voor jezelf werkt. Eén tool die je hele outreach beheert — van eerste bericht tot follow-up.', stats: '5 uur per week bespaard', icon: '💼' },
];

export default function SolutionsPage() {
  return (
    <main className="pt-32 pb-0">
      <Container className="text-center mb-16">
        <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--linkedin-blue-light)] text-[var(--linkedin-blue)] text-sm font-semibold mb-4">Oplossingen</span>
        <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">Voor elk type recruiter</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Of je nu werkt bij een bureau, corporate, of zelfstandig bent — Elvatix past zich aan op jouw workflow.
        </p>
      </Container>

      <Container className="max-w-4xl mb-20">
        <div className="flex flex-col gap-6">
          {solutions.map((s) => (
            <div key={s.title} className="flex items-start gap-5 bg-white border border-gray-200 rounded-2xl p-6">
              <span className="text-4xl flex-shrink-0">{s.icon}</span>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-2">{s.desc}</p>
                <span className="text-[var(--linkedin-blue)] text-sm font-semibold">{s.stats}</span>
              </div>
            </div>
          ))}
        </div>
      </Container>

      <section className="bg-gradient-to-r from-[var(--linkedin-blue)] to-[var(--linkedin-blue-dark)] py-16">
        <Container className="text-center text-white">
          <h2 className="text-2xl font-extrabold mb-3">Past Elvatix bij jou?</h2>
          <p className="text-white/80 mb-6">Boek een demo en ontdek hoe Elvatix jouw recruitment transformeert.</p>
          <Button variant="white" href="/demo">Boek een demo</Button>
        </Container>
      </section>
    </main>
  );
}
