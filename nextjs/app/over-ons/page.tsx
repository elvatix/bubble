import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Over Ons — Elvatix',
  description: 'Leer het team achter Elvatix kennen. Gebouwd door recruiters, voor recruiters.',
};

const values = [
  { icon: '🎯', title: 'Resultaatgericht', desc: 'Alles wat we bouwen moet meetbaar bijdragen aan betere recruitment-resultaten.' },
  { icon: '🤝', title: 'Menselijk', desc: 'AI versterkt de recruiter, maar vervangt het menselijk contact nooit.' },
  { icon: '🚀', title: 'Innovatief', desc: 'We pushen continu de grenzen van wat mogelijk is met AI in recruitment.' },
  { icon: '🔒', title: 'Privacy-first', desc: 'Kandidaatdata wordt nooit opgeslagen. We bouwen met privacy als fundament.' },
];

const team = [
  { name: 'Kevin Coenen', role: 'Co-founder & CEO', bio: 'Ex-recruiter met 8+ jaar ervaring. Zag de inefficiëntie in outreach en bouwde de oplossing.' },
  { name: 'Gianni Linssen', role: 'Co-founder & CTO', bio: 'Full-stack developer met een passie voor AI en recruitment tech.' },
];

export default function OverOnsPage() {
  return (
    <main className="pt-32 pb-0">
      <Container className="text-center mb-16">
        <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--linkedin-blue-light)] text-[var(--linkedin-blue)] text-sm font-semibold mb-4">Over Ons</span>
        <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">Gebouwd door recruiters</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We weten hoe frustrerend het is om uren te besteden aan berichten die niet converteren. Daarom bouwden we Elvatix.
        </p>
      </Container>

      <Container className="max-w-4xl mb-20">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-8 text-center">Onze waarden</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((v) => (
            <div key={v.title} className="bg-white border border-gray-200 rounded-2xl p-6">
              <span className="text-3xl mb-3 block">{v.icon}</span>
              <h3 className="font-bold text-gray-900 mb-1">{v.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </Container>

      <section className="bg-gray-50 py-16">
        <Container className="max-w-4xl">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-8 text-center">Het team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {team.map((t) => (
              <div key={t.name} className="bg-white border border-gray-200 rounded-2xl p-6 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[var(--linkedin-blue)] to-[var(--linkedin-blue-dark)] rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  {t.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="font-bold text-gray-900">{t.name}</h3>
                <p className="text-[var(--linkedin-blue)] text-sm font-semibold mb-2">{t.role}</p>
                <p className="text-gray-600 text-sm">{t.bio}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-gradient-to-r from-[var(--linkedin-blue)] to-[var(--linkedin-blue-dark)] py-16">
        <Container className="text-center text-white">
          <h2 className="text-2xl font-extrabold mb-3">Wil je bij ons team?</h2>
          <p className="text-white/80 mb-6">We zijn altijd op zoek naar talent. Neem contact op.</p>
          <Button variant="white" href="/contact">Neem contact op</Button>
        </Container>
      </section>
    </main>
  );
}
