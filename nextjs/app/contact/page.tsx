import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact \u2014 Elvatix',
  description: 'Neem contact op met het Elvatix team. Stel je vraag of plan een gesprek in.',
};

export default function ContactPage() {
  return (
    <main className="pt-32 pb-16">
      <Container className="max-w-2xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-black text-gray-900 mb-3">Neem contact op</h1>
          <p className="text-gray-600">Heb je een vraag of wil je meer weten over Elvatix? We horen graag van je.</p>
        </div>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">Voornaam</label>
            <input id="firstName" type="text" placeholder="Jan" className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-linkedin focus:border-transparent transition" />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Achternaam</label>
            <input id="lastName" type="text" placeholder="Jansen" className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-linkedin focus:border-transparent transition" />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-mailadres</label>
            <input id="email" type="email" placeholder="jan@bedrijf.nl" className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-linkedin focus:border-transparent transition" />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Bericht</label>
            <textarea id="message" rows={5} placeholder="Waar kunnen we je mee helpen?" className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-linkedin focus:border-transparent transition resize-none" />
          </div>
          <div className="md:col-span-2">
            <Button variant="primary" className="w-full">Verstuur bericht</Button>
          </div>
        </form>
      </Container>
    </main>
  );
}
