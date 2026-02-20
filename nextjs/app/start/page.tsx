import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import FormWrapper from '@/components/ui/FormWrapper';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Start gratis | Elvatix',
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
              <label htmlFor="start-voornaam" className="form-label">Voornaam</label>
              <input id="start-voornaam" name="voornaam" type="text" placeholder="Jan" className="form-input" required />
            </div>
            <div>
              <label htmlFor="start-achternaam" className="form-label">Achternaam</label>
              <input id="start-achternaam" name="achternaam" type="text" placeholder="Jansen" className="form-input" required />
            </div>
          </div>
          <div>
            <label htmlFor="start-email" className="form-label">Werkmail</label>
            <input id="start-email" name="email" type="email" placeholder="jan@bedrijf.nl" className="form-input" required />
          </div>
          <div>
            <label htmlFor="start-wachtwoord" className="form-label">Wachtwoord</label>
            <input id="start-wachtwoord" name="wachtwoord" type="password" placeholder="Minimaal 8 karakters" className="form-input" required minLength={8} />
          </div>
          <Button variant="primary" type="submit" className="w-full mt-2">Account aanmaken</Button>
        </FormWrapper>

        <p className="text-sm text-gray-500 mt-8">
          Al een account?{' '}
          <Link href="/login" className="text-elvatix font-semibold hover:underline">Log in</Link>
        </p>
      </Container>
    </main>
  );
}
