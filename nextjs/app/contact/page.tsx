import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact — Elvatix',
  description: 'Neem contact op met het Elvatix team. We helpen je graag verder.',
};

export default function ContactPage() {
  return (
    <main className="pt-32 pb-16">
      <Container className="max-w-2xl text-center">
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Neem contact op</h1>
        <p className="text-gray-600 mb-12">Heb je een vraag, feedback of wil je samenwerken? We horen graag van je.</p>

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
            <label className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
            <input type="email" placeholder="jan@bedrijf.nl" className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Bericht</label>
            <textarea rows={5} placeholder="Waar kunnen we je mee helpen?" className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm resize-none"></textarea>
          </div>
          <Button variant="primary" type="submit" className="w-full mt-2">Verstuur bericht</Button>
        </form>
      </Container>
    </main>
  );
}
