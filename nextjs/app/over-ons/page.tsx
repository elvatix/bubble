import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Over Ons \u2014 Elvatix',
  description: 'Leer het team achter Elvatix kennen. Gebouwd door recruiters, voor recruiters.',
};

const values = [
  { icon: '\ud83c\udfaf', title: 'Resultaatgericht', desc: 'Alles wat we bouwen moet meetbaar bijdragen aan betere recruitment-resultaten.' },
  { icon: '\ud83e\udd1d', title: 'Menselijk', desc: 'AI versterkt de recruiter, maar vervangt het menselijk contact nooit.' },
  { icon: '\ud83d\ude80', title: 'Innovatief', desc: 'We pushen continu de grenzen van wat mogelijk is met AI in recruitment.' },
  { icon: '\ud83d\udd12', title: 'Privacy-first', desc: 'Kandidaatdata wordt nooit opgeslagen. We bouwen met privacy als fundament.' },
];

const team = [
  { name: 'Kevin Coenen', role: 'Co-founder & CEO', bio: 'Ex-recruiter met 8+ jaar ervaring. Zag de ineffici\u00ebntie in outreach en bouwde de oplossing.' },
  { name: 'Gianni Linssen', role: 'Co-founder & CTO', bio: 'Full-stack engineer met passie voor AI. Vertaalt recruitment-expertise naar technologie.' },
];

export default function OverOnsPage() {
  return (
    <main className="pt-32 pb-0">
      <Container className="text-center mb-16">
        <span className="inline-block px-4 py-1.5 rounded-full bg-linkedin-light text-linkedin text-sm font-semibold mb-4">Over ons</span>
        <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">Gebouwd door recruiters,<br />voor recruiters</h1>
        <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
          Elvatix is ontstaan uit frustratie met generieke outreach. We geloofden dat AI recruiters kon helpen om persoonlijker te communiceren, niet minder.
        </p>
      </Container>

      <Container className="max-w-3xl mb-20">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-10">Het team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {team.map((t) => (
            <div key={t.name} className="bg-gray-50 rounded-card p-8 border border-gray-200 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-linkedin to-linkedin-dark rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                {t.name.split(' ').map((n) => n[0]).join('')}
              </div>
              <h3 className="text-xl font-bold text-gray-900">{t.name}</h3>
              <p className="text-sm text-linkedin font-semibold mb-3">{t.role}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{t.bio}</p>
            </div>
          ))}
        </div>
      </Container>

      <section className="bg-gray-50 py-20">
        <Container>
          <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-10">Onze waarden</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-card p-8 border border-gray-200">
                <div className="text-3xl mb-3">{v.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-gradient-to-br from-linkedin via-linkedin-dark to-[#003366] py-20">
        <Container className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Benieuwd wat we voor jou kunnen betekenen?</h2>
          <p className="text-white/70 mb-8">Plan een gesprek of probeer Elvatix gratis uit.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button variant="white" href="/demo">Boek een demo</Button>
            <Button variant="outline" href="/start" className="border-white text-white hover:bg-white/10">Start gratis</Button>
          </div>
        </Container>
      </section>
    </main>
  );
}
