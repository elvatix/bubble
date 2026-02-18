import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Start gratis \u2014 Elvatix',
  description: 'Maak een gratis Elvatix account aan en begin vandaag nog met AI-powered LinkedIn recruitment.',
};

export default function StartPage() {
  return (
    <main className="pt-32 pb-16">
      <Container className="max-w-md text-center">
        <h1 className="text-4xl font-black text-gray-900 mb-3">Start gratis</h1>
        <p className="text-gray-600 mb-10">Maak je account aan en ontdek de kracht van AI-powered recruitment. Geen creditcard vereist.</p>

        <form className="flex flex-col gap-5 text-left">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Naam</label>
            <input id="name" type="text" placeholder="Jan Jansen" className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-linkedin focus:border-transparent transition" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-mailadres</label>
            <input id="email" type="email" placeholder="jan@bedrijf.nl" className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-linkedin focus:border-transparent transition" />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Wachtwoord</label>
            <input id="password" type="password" placeholder="Minimaal 8 tekens" className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-linkedin focus:border-transparent transition" />
          </div>
          <Button variant="primary" className="w-full mt-2">Account aanmaken</Button>
        </form>

        <p className="text-xs text-gray-400 mt-6 leading-relaxed">
          Door je aan te melden ga je akkoord met onze{' '}
          <a href="/terms" className="underline hover:text-gray-600">Voorwaarden</a> en{' '}
          <a href="/privacy" className="underline hover:text-gray-600">Privacybeleid</a>.
        </p>

        <p className="text-sm text-gray-500 mt-8">
          Al een account?{' '}
          <a href="/login" className="text-linkedin font-semibold hover:underline">Inloggen</a>
        </p>
      </Container>
    </main>
  );
}
