import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Smart Reminders — Elvatix',
  description: 'Vergeet nooit meer een follow-up. AI-gestuurde reminders voor je LinkedIn outreach.',
};

const features = [
  { icon: '📅', title: 'Slim plannen', desc: 'Stel in na hoeveel dagen je wilt opvolgen. Elvatix herinnert je op het juiste moment.' },
  { icon: '✍️', title: 'AI follow-up berichten', desc: "Geen 'Ik wilde even checken'. Elvatix genereert een follow-up die verwijst naar je vorige bericht." },
  { icon: '🔔', title: 'Dashboard notificaties', desc: 'Zie al je openstaande follow-ups in één overzicht. Prioriteit op basis van urgentie en response-kans.' },
  { icon: '📈', title: 'Hogere response rate', desc: 'Kandidaten die een relevante follow-up krijgen reageren 3x vaker dan bij een cold InMail.' },
];

export default function RemindersPage() {
  return (
    <main className="pt-32 pb-0">
      <Container className="text-center mb-16">
        <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--linkedin-blue-light)] text-[var(--linkedin-blue)] text-sm font-semibold mb-4">Smart Reminders</span>
        <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">Vergeet nooit meer een follow-up</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          De meeste deals gaan verloren door het missen van follow-ups. Elvatix zorgt dat je altijd op tijd bent.
        </p>
        <div className="text-8xl mb-10 mt-8">⏰</div>
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
          <h2 className="text-2xl font-extrabold mb-3">Nooit meer een kandidaat missen</h2>
          <p className="text-white/80 mb-6">Start met Smart Reminders en verhoog je response rate.</p>
          <Button variant="white" href="/demo">Plan een demo</Button>
        </Container>
      </section>
    </main>
  );
}
