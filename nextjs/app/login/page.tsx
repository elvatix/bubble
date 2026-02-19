import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login — Elvatix',
  description: 'Log in op je Elvatix account.',
  alternates: { canonical: '/login' },
};

export default function LoginPage() {
  return (
    <main className="pt-40 pb-16">
      <Container className="max-w-md text-center">
        <h1 className="text-4xl font-black text-gray-900 mb-3">Welkom terug</h1>
        <p className="text-gray-600 mb-10">Log in om verder te gaan met recruiten.</p>

        <form className="flex flex-col gap-5 text-left">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
            <input type="email" placeholder="jan@bedrijf.nl" className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Wachtwoord</label>
            <input type="password" placeholder="Minimaal 8 karakters" className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm" />
          </div>
          <Button variant="primary" type="submit" className="w-full mt-2">Inloggen</Button>
        </form>

        <p className="text-sm text-gray-500 mt-8">
          Nog geen account?{' '}
          <a href="/start" className="text-[var(--color-linkedin)] font-semibold hover:underline">Start gratis</a>
        </p>
      </Container>
    </main>
  );
}
