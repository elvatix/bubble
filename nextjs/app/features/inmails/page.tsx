import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI InMails — Elvatix',
  description: 'Genereer gepersonaliseerde LinkedIn InMails in seconden met AI.',
  alternates: { canonical: '/features/inmails' },
};

const features = [
  { title: 'Profielanalyse in seconden', desc: 'Plak een LinkedIn URL en onze AI analyseert werkervaring, skills, interesses en carrièrepad — alles in één klik.' },
  { title: 'Natuurlijk Nederlands', desc: 'Geen stijve, robotachtige berichten. Elvatix schrijft alsof een ervaren recruiter het zelf typt — persoonlijk en menselijk.' },
  { title: 'Tone-of-voice aanpasbaar', desc: 'Van formeel tot casual, van direct tot subtiel. Pas de schrijfstijl aan op jouw merk en doelgroep.' },
  { title: 'Custom GPT training', desc: 'Train het model op jouw beste berichten. Hoe meer je het gebruikt, hoe beter het jouw stijl begrijpt.' },
];

export default function InMailsPage() {
  return (
    <main className="pt-40 pb-0">
      <Container className="text-center mb-16">
        <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--color-linkedin-light)] text-[var(--color-linkedin)] text-sm font-semibold mb-4">AI InMails</span>
        <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">InMails die daadwerkelijk gelezen worden</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Genereer hyper-gepersonaliseerde LinkedIn InMails op basis van het profiel van je kandidaat — in seconden, niet in minuten.
        </p>
        <div className="text-8xl my-10">💬</div>
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

      <section className="bg-gradient-to-r from-[var(--color-linkedin)] to-[var(--color-linkedin-dark)] py-16">
        <Container className="text-center text-white">
          <h2 className="text-2xl font-extrabold mb-3">Probeer het zelf</h2>
          <p className="text-white/80 mb-6">Ga naar de homepage en genereer je eerste AI InMail — gratis.</p>
          <Button variant="white" href="/">Probeer gratis →</Button>
        </Container>
      </section>
    </main>
  );
}
