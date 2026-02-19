import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact — Elvatix',
  description: 'Neem contact op met het Elvatix team. We helpen je graag verder.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <main className="pt-40 pb-16">
      <Container className="max-w-2xl text-center">
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Neem contact op</h1>
        <p className="text-gray-600 mb-12">Heb je een vraag, feedback of wil je samenwerken? We horen graag van je.</p>

        <form className="flex flex-col gap-4 text-left">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="form-label">Voornaam</label>
              <input type="text" placeholder="Jan" className="form-input" />
            </div>
            <div>
              <label className="form-label">Achternaam</label>
              <input type="text" placeholder="Jansen" className="form-input" />
            </div>
          </div>
          <div>
            <label className="form-label">E-mail</label>
            <input type="email" placeholder="jan@bedrijf.nl" className="form-input" />
          </div>
          <div>
            <label className="form-label">Bericht</label>
            <textarea rows={5} placeholder="Waar kunnen we je mee helpen?" className="form-input resize-none"></textarea>
          </div>
          <Button variant="primary" type="submit" className="w-full mt-2">Verstuur bericht</Button>
        </form>
      </Container>
    </main>
  );
}
