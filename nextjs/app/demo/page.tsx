import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Demo aanvragen — Elvatix',
  description: 'Plan een persoonlijke demo van Elvatix. Ontdek hoe AI jouw recruitment kan versnellen.',
};

const benefits = [
  { icon: '⚡', text: 'Live walkthrough van het platform' },
  { icon: '🎯', text: 'Gepersonaliseerde use-case analyse' },
  { icon: '💬', text: 'Stel al je vragen aan ons team' },
  { icon: '🚀', text: 'Direct aan de slag na de demo' },
];

export default function DemoPage() {
  return (
    <main className="pt-32 pb-16">
      <Container className="max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--linkedin-blue-light)] text-[var(--linkedin-blue)] text-sm font-semibold mb-4">Demo</span>
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Zie Elvatix in actie</h1>
            <p className="text-gray-600 mb-8 leading-relaxed">
              In 30 minuten laten we zien hoe Elvatix jouw recruitment workflow transformeert. Persoonlijk, relevant en afgestemd op jouw situatie.
            </p>
            <div className="flex flex-col gap-4">
              {benefits.map((b) => (
                <div key={b.text} className="flex items-center gap-3">
                  <span className="text-xl">{b.icon}</span>
                  <span className="text-gray-700 font-medium">{b.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Plan je demo</h2>
            <form className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Voornaam</label>
                  <input type="text" placeholder="Jan" className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Achternaam</label>
                  <input type="text" placeholder="Jansen" className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Werkmail</label>
                <input type="email" placeholder="jan@bedrijf.nl" className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Bedrijf</label>
                <input type="text" placeholder="Bedrijfsnaam" className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Teamgrootte</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm text-gray-600">
                  <option>1-5 recruiters</option>
                  <option>6-20 recruiters</option>
                  <option>20+ recruiters</option>
                </select>
              </div>
              <Button variant="primary" type="submit" className="w-full mt-2">Demo aanvragen</Button>
            </form>
          </div>
        </div>
      </Container>
    </main>
  );
}
