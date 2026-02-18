import Container from '@/components/ui/Container';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Algemene Voorwaarden — Elvatix',
  description: 'Lees de algemene voorwaarden van Elvatix.',
};

const sections = [
  {
    title: '1. Definities',
    content: 'In deze voorwaarden wordt verstaan onder \'Dienst\': het Elvatix platform inclusief alle functionaliteiten. \'Gebruiker\': de natuurlijke of rechtspersoon die een account aanmaakt. \'Overeenkomst\': de overeenkomst tussen Elvatix en Gebruiker.'
  },
  {
    title: '2. Toepasselijkheid',
    content: 'Deze voorwaarden zijn van toepassing op elk gebruik van de Dienst. Door je account aan te maken, ga je akkoord met deze voorwaarden. We kunnen deze voorwaarden van tijd tot tijd wijzigen; bij substantiele wijzigingen word je hierover geïnformeerd.'
  },
  {
    title: '3. Accountgebruik',
    content: 'Je bent verantwoordelijk voor het vertrouwelijk houden van je inloggegevens. Je mag je account niet delen met derden. Je bent aansprakelijk voor alle activiteiten onder je account.'
  },
  {
    title: '4. Prijzen & Betaling',
    content: 'Alle prijzen zijn exclusief BTW tenzij anders vermeld. Betaling geschiedt via automatische incasso of creditcard. Bij niet-tijdige betaling behouden wij ons het recht voor de toegang tot de Dienst op te schorten.'
  },
  {
    title: '5. Intellectueel eigendom',
    content: 'Alle intellectuele eigendomsrechten op de Dienst berusten bij Elvatix. De door de Dienst gegenereerde berichten zijn eigendom van de Gebruiker. Elvatix mag geanonimiseerde data gebruiken voor het verbeteren van het AI-model.'
  },
  {
    title: '6. Aansprakelijkheid',
    content: 'Elvatix is niet aansprakelijk voor indirecte of gevolgschade. Onze totale aansprakelijkheid is beperkt tot het bedrag dat je in de afgelopen 12 maanden aan Elvatix hebt betaald.'
  },
  {
    title: '7. Opzegging',
    content: 'Je kunt je account op elk moment opzeggen via je accountinstellingen. Na opzegging heb je nog 30 dagen toegang tot je data. Daarna wordt je data verwijderd conform ons privacybeleid.'
  },
];

export default function TermsPage() {
  return (
    <main className="pt-40 pb-16">
      <Container className="max-w-3xl">
        <h1 className="text-4xl font-black text-gray-900 mb-3">Algemene Voorwaarden</h1>
        <p className="text-sm text-gray-500 mb-10">Laatst bijgewerkt: 1 januari 2025</p>

        <div className="flex flex-col gap-10">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="text-lg font-bold text-gray-900 mb-3">{s.title}</h2>
              <p className="text-gray-600 text-sm leading-relaxed">{s.content}</p>
            </div>
          ))}
        </div>
      </Container>
    </main>
  );
}
