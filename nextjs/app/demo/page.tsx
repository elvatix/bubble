import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Demo aanvragen \u2014 Elvatix',
  description: 'Vraag een demo aan en ontdek hoe Elvatix je recruitment workflow transformeert met AI.',
};

const benefits = [
  { icon: '\u26a1', text: 'Live walkthrough van het platform' },
  { icon: '\ud83c\udfaf', text: 'Gepersonaliseerde use-case analyse' },
  { icon: '\ud83d\udcac', text: 'Stel al je vragen aan ons team' },
  { icon: '\ud83d\ude80', text: 'Direct aan de slag na de demo' },
];

export default function DemoPage() {
  return (
    <main className="pt-32 pb-16">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-linkedin-light text-linkedin text-sm font-semibold mb-4">Demo</span>
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Zie Elvatix in actie</h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              In 30 minuten laten we je zien hoe Elvatix je outreach transformeert. Gepersonaliseerd op jouw situatie.
            </p>
            <div className="flex flex-col gap-4">
              {benefits.map((b) => (
                <div key={b.text} className="flex items-center gap-3">
                  <span className="text-2xl">{b.icon}</span>
                  <span className="text-gray-700 font-medium">{b.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 rounded-card p-8 border border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Plan je demo</h2>
            <form className="flex flex-col gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Naam</label>
                <input id="name" type="text" placeholder="Jan Jansen" className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-linkedin focus:border-transparent transition" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-mailadres</label>
                <input id="email" type="email" placeholder="jan@bedrijf.nl" className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-linkedin focus:border-transparent transition" />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Bedrijf</label>
                <input id="company" type="text" placeholder="Bedrijfsnaam" className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-linkedin focus:border-transparent transition" />
              </div>
              <div>
                <label htmlFor="teamSize" className="block text-sm font-medium text-gray-700 mb-1">Teamgrootte</label>
                <select id="teamSize" className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-linkedin focus:border-transparent transition bg-white">
                  <option>1-5 recruiters</option>
                  <option>6-20 recruiters</option>
                  <option>21-50 recruiters</option>
                  <option>50+ recruiters</option>
                </select>
              </div>
              <Button variant="primary" className="w-full">Demo aanvragen</Button>
            </form>
          </div>
        </div>
      </Container>
    </main>
  );
}
