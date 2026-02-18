import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Start gratis — Elvatix',
  description: 'Maak je gratis Elvatix-account aan en begin vandaag nog met AI-powered recruitment.',
};

export default function StartPage() {
  return (
    <main className="pt-40 pb-16">
      <Container className="max-w-md text-center">
        <h1 className="text-4xl font-black text-gray-900 mb-3">Start gratis</h1>
        <p className="text-gray-600 mb-10">Maak je account aan en genereer je eerste AI-bericht binnen 60 seconden.</p>

        <form className="flex flex-col gap-4 text-left">
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
            <label className="block text-sm font-medium text-gray-700 mb-1">Wachtwoord</label>
            <input type="password" placeholder="Minimaal 8 karakters" className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm" />
          </div>
          <Button variant="primary" type="submit" className="w-full mt-2">Account aanmaken</Button>
        </form>

        <p className="text-sm text-gray-500 mt-8">
          Al een account?{' '}
          <a href="/login" className="text-[var(--linkedin-blue)] font-semibold hover:underline">Log in</a>
        </p>
      </Container>
    </main>
  );
}
