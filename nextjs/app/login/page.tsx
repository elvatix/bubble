import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import FormWrapper from '@/components/ui/FormWrapper';
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

        <FormWrapper className="flex flex-col gap-5 text-left" successMessage="Ingelogd! Je wordt doorgestuurd...">
          <div>
            <label className="form-label">E-mail</label>
            <input type="email" placeholder="jan@bedrijf.nl" className="form-input" required />
          </div>
          <div>
            <label className="form-label">Wachtwoord</label>
            <input type="password" placeholder="Minimaal 8 karakters" className="form-input" required />
          </div>
          <Button variant="primary" type="submit" className="w-full mt-2">Inloggen</Button>
        </FormWrapper>

        <p className="text-sm text-gray-500 mt-8">
          Nog geen account?{' '}
          <a href="/start" className="text-linkedin font-semibold hover:underline">Start gratis</a>
        </p>
      </Container>
    </main>
  );
}
