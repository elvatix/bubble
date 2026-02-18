import Container from '@/components/ui/Container';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Algemene Voorwaarden — Elvatix',
  description: 'Lees de algemene voorwaarden van Elvatix.',
};

const sections = [
  { title: '1. Definities', content: 'Elvatix is een AI-powered tool voor LinkedIn recruitment messaging. De "dienst" verwijst naar alle functies beschikbaar via het Elvatix platform, inclusief AI InMails, connectieverzoeken, reminders en analytics.' },
  { title: '2. Gebruik van de dienst', content: 'Door gebruik te maken van Elvatix ga je akkoord met deze voorwaarden. Je bent verantwoordelijk voor het gebruik van je account en de berichten die je verstuurt via ons platform. Elvatix is een hulpmiddel — je blijft zelf verantwoordelijk voor de inhoud van je berichten.' },
  { title: '3. Abonnementen en betalingen', content: 'Elvatix biedt verschillende abonnementen aan. Betalingen worden maandelijks of jaarlijks afgerekend. Je kunt je abonnement op elk moment opzeggen.' },
  { title: '4. Intellectueel eigendom', content: 'Alle gegenereerde berichten zijn eigendom van de gebruiker. De Elvatix software, interface en AI-modellen zijn eigendom van Elvatix B.V.' },
  { title: '5. Aansprakelijkheid', content: 'Elvatix is niet aansprakelijk voor de inhoud van berichten die via het platform zijn gegenereerd of verstuurd. De gebruiker is zelf verantwoordelijk voor naleving van LinkedIn-voorwaarden.' },
  { title: '6. Contact', content: 'Voor vragen over deze voorwaarden kun je contact opnemen via ons contactformulier.' },
];

export default function TermsPage() {
  return (
    <main className="pt-32 pb-16">
      <Container className="max-w-3xl">
        <h1 className="text-4xl font-black text-gray-900 mb-8">Algemene Voorwaarden</h1>
        <div className="flex flex-col gap-6">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="text-xl font-bold text-gray-900 mb-2">{s.title}</h2>
              <p className="text-gray-600 leading-relaxed">{s.desc || s.content}</p>
            </div>
          ))}
        </div>
      </Container>
    </main>
  );
}
