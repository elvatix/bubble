import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Connectieverzoeken — Elvatix',
  description: 'Schrijf LinkedIn connectieverzoeken die opvallen en daadwerkelijk geaccepteerd worden.',
};

const features = [
  { title: 'Persoonlijke noot, altijd', desc: 'Elvatix analyseert het profiel en schrijft een connectieverzoek dat verwijst naar specifieke ervaring, projecten of gedeelde interesses.' },
  { title: '300 karakters, maximale impact', desc: 'LinkedIn staat maximaal 300 karakters toe. Elvatix optimaliseert elk woord voor maximale impact binnen die limiet.' },
  { title: 'A/B varianten', desc: 'Genereer meerdere varianten en kies de versie die het best past bij je aanpak — formeel, casual of ergens daartussenin.' },
  { title: 'Automatisch koppelen     aan InMail', desc: 'Verstuur een connectieverzoek én een InMail tegelijk. Elvatix zorgt dat beide berichten op elkaar aansluiten.' },
];

export default function ConnectionsPage() {
  return (
    <main className="pt-40 pb-0">
      <Container className="text-center mb-16">
        <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--linkedin-blue-light)] text-[var(--linkedin-blue)] text-sm font-semibold mb-4">Connectieverzoeken</span>
        <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">Connectieverzoeken die wél geaccepteerd worden</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Geen standaard &ldquo;Ik zou je graag toevoegen&rdquo; meer. Elvatix schrijft connectieverzoeken die opvallen — gebaseerd op het echte profiel.
        </p>
        <div className="text-8xl my-10">🤝</div>
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
          <p className="text-white/80 mb-6">Genereer je eerste connectieverzoek — gratis.</p>
          <Button variant="white" href="/">Start nu →</Button>
        </Container>
      </section>
    </main>
  );
}
