import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Inloggen — Elvatix',
  description: 'Log in op je Elvatix account en start met het genereren van AI-powered LinkedIn berichten.',
};

export default function LoginPage() {
  return (
    <main className="pt-32 pb-16">
      <Container className="max-w-md text-center">
        <h1 className="text-4xl font-black text-gray-900 mb-3">Welkom terug</h1>
        <p className="text-gray-600 mb-10">Log in op je Elvatix account</p>

        <form className="flex flex-col gap-5 text-left">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-mailadres</label>
            <input
              id="email"
              type="email"
              placeholder="naam@bedrijf.nl"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--linkedin-blue)] focus:border-transparent transition"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Wachtwoord</label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--linkedin-blue)] focus:border-transparent transition"
            />
          </div>
          <Button variant="primary" className="w-full mt-2">Inloggen</Button>
        </form>

        <p className="text-sm text-gray-500 mt-8">
          Nog geen account?{' '}
          <a href="/start" className="text-[var(--linkedin-blue)] font-semibold hover:underline">Start gratis</a>
        </p>
      </Container>
    </main>
  );
}
