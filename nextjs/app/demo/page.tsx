import Container from '@/components/ui/Container';
import { ZapIcon, TargetIcon, MessageSquareIcon, RocketIcon } from '@/components/icons/Icons';
import Button from '@/components/ui/Button';
import FormWrapper from '@/components/ui/FormWrapper';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Demo aanvragen | Elvatix',
  description: 'Plan een persoonlijke demo van Elvatix. Ontdek hoe AI jouw recruitment kan versnellen.',
  alternates: { canonical: '/demo' },
};

const benefits = [
  { icon: <ZapIcon size={20} />, text: 'Live walkthrough van het platform' },
  { icon: <TargetIcon size={20} />, text: 'Gepersonaliseerde use-case analyse' },
  { icon: <MessageSquareIcon size={20} />, text: 'Stel al je vragen aan ons team' },
  { icon: <RocketIcon size={20} />, text: 'Direct aan de slag na de demo' },
];

export default function DemoPage() {
  return (
    <main className="pt-40 pb-16">
      <Container className="max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <span className="page-badge">Demo</span>
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
            <FormWrapper className="flex flex-col gap-4" successMessage="Bedankt! We plannen je demo en nemen snel contact op.">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="demo-voornaam" className="form-label">Voornaam</label>
                  <input id="demo-voornaam" name="voornaam" type="text" placeholder="Jan" className="form-input" required />
                </div>
                <div>
                  <label htmlFor="demo-achternaam" className="form-label">Achternaam</label>
                  <input id="demo-achternaam" name="achternaam" type="text" placeholder="Jansen" className="form-input" required />
                </div>
              </div>
              <div>
                <label htmlFor="demo-email" className="form-label">Werkmail</label>
                <input id="demo-email" name="email" type="email" placeholder="jan@bedrijf.nl" className="form-input" required />
              </div>
              <div>
                <label htmlFor="demo-bedrijf" className="form-label">Bedrijf</label>
                <input id="demo-bedrijf" name="bedrijf" type="text" placeholder="Bedrijfsnaam" className="form-input" required />
              </div>
              <div>
                <label htmlFor="demo-team" className="form-label">Teamgrootte</label>
                <select id="demo-team" name="teamgrootte" className="form-input text-gray-600">
                  <option>1-5 recruiters</option>
                  <option>6-20 recruiters</option>
                  <option>20+ recruiters</option>
                </select>
              </div>
              <Button variant="primary" type="submit" className="w-full mt-2">Demo aanvragen</Button>
            </FormWrapper>
          </div>
        </div>
      </Container>
    </main>
  );
}
