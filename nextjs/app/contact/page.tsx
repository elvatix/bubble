import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import FormWrapper from '@/components/ui/FormWrapper';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Elvatix',
  description: 'Neem contact op met het Elvatix team. We helpen je graag verder.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <main className="pt-40 pb-16">
      <Container className="max-w-2xl text-center">
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Neem contact op</h1>
        <p className="text-gray-600 mb-12">Heb je een vraag, feedback of wil je samenwerken? We horen graag van je.</p>

        <FormWrapper className="flex flex-col gap-4 text-left" successMessage="Bedankt voor je bericht! We reageren binnen 24 uur.">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="contact-voornaam" className="form-label">Voornaam</label>
              <input id="contact-voornaam" name="voornaam" type="text" placeholder="Jan" className="form-input" required />
            </div>
            <div>
              <label htmlFor="contact-achternaam" className="form-label">Achternaam</label>
              <input id="contact-achternaam" name="achternaam" type="text" placeholder="Jansen" className="form-input" required />
            </div>
          </div>
          <div>
            <label htmlFor="contact-email" className="form-label">E-mail</label>
            <input id="contact-email" name="email" type="email" placeholder="jan@bedrijf.nl" className="form-input" required />
          </div>
          <div>
            <label htmlFor="contact-bericht" className="form-label">Bericht</label>
            <textarea id="contact-bericht" name="bericht" rows={5} placeholder="Waar kunnen we je mee helpen?" className="form-input resize-none" required></textarea>
          </div>
          <Button variant="primary" type="submit" className="w-full mt-2">Verstuur bericht</Button>
        </FormWrapper>
      </Container>
    </main>
  );
}
