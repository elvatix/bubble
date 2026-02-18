import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI InMails — Elvatix',
  description: 'Genereer gepersonaliseerde LinkedIn InMails met AI. Gebaseerd op het profiel van je kandidaat.',
};

const features = [
  { title: 'Profiel-gebaseerde personalisatie', desc: 'Elvatix leest werkervaring, headline, skills en carrièrepad. Het bericht refereert aan specifieke details — geen generieke zinnen.' },
  { title: 'Chronologisch bewust', desc: 'AI onderscheidt huidige en vorige functies. Iemand die nu CEO is en eerder developer was? Het bericht klopt altijd.' },
  { title: 'Tone-of-voice controle', desc: 'Kies tussen formeel en informeel. Of train Custom GPT op jouw eigen schrijfstijl voor maximale consistentie.' },
  { title: 'Nederlands én Engels', desc: 'Native kwaliteit in beide talen. Geen vertaaltaal of stijve constructies — gewoon hoe een mens het zou schrijven.' },
];

export default function InMailsPage() {
  return (
    <main className="pt-32 pb-0">
      <Container className="text-center mb-16">
        <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--linkedin-blue-light)] text-[var(--linkedin-blue)] text-sm font-semibold mb-4">InMails</span>
        <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">AI-powered InMails die converteren</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Geen copy-paste templates meer. Elvatix analyseert het volledige LinkedIn profiel en schrijft een bericht dat aansluit op de werkervaring, skills en carrière van je kandidaat.
        </p>
        <div className="text-8xl mb-10 mt-8">💬</div>
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
          <p className="text-white/80 mb-6">Ga naar de homepage en test de InMail generator met een LinkedIn URL.</p>
          <Button variant="white" href="/">Probeer gratis →</Button>
        </Container>
      </section>
    </main>
  );
}
