import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import FormWrapper from '@/components/ui/FormWrapper';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Start gratis — Elvatix',
  description: 'Maak je gratis Elvatix-account aan en begin vandaag nog met AI-powered recruitment.',
  alternates: { canonical: '/start' },
};

export default function StartPage() {
  return (
    <main className="pt-40 pb-16">
      <Container className="max-w-md text-center">
        <h1 className="text-4xl font-black text-gray-900 mb-3">Start gratis</h1>
        <p className="text-gray-600 mb-10">Maak je account aan en genereer je eerste AI-bericht binnen 60 seconden.</p>

        <FormWrapper className="flex flex-col gap-4 text-left" successMessage="Account aangemaakt! Check je inbox voor de bevestigingsmail.">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="form-label">Voornaam</label>
              <input type="text" placeholder="Jan" className="form-input" required />
            </div>
            <div>
              <label className="form-label">Achternaam</label>
              <input type="text" placeholder="Jansen" className="form-input" required />
            </div>
          </div>
          <div>
            <label className="form-label">Werkmail</label>
            <input type="email" placeholder="jan@bedrijf.nl" className="form-input" required />
          </div>
          <div>
            <label className="form-label">Wachtwoord</label>
            <input type="password" placeholder="Minimaal 8 karakters" className="form-input" required minLength={8} />
          </div>
          <Button variant="primary" type="submit" className="w-full mt-2">Account aanmaken</Button>
        </FormWrapper>

        <p className="text-sm text-gray-500 mt-8">
          Al een account?{' '}
          <a href="/login" className="text-linkedin font-semibold hover:underline">Log in</a>
        </p>
      </Container>
    </main>
  );
}
