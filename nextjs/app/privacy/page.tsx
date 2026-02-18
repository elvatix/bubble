import Container from '@/components/ui/Container';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacybeleid — Elvatix',
  description: 'Lees het privacybeleid van Elvatix. We beschermen je gegevens met de hoogste standaarden.',
};

const sections = [
  {
    title: '1. Welke gegevens verzamelen we?',
    content: 'We verzamelen de gegevens die je ons verstrekt bij het aanmaken van een account, waaronder je naam, e-mailadres en bedrijfsnaam. Daarnaast verzamelen we gebruiksgegevens zoals welke functies je gebruikt en wanneer je inlogt.'
  },
  {
    title: '2. Waarvoor gebruiken we je gegevens?',
    content: 'Je gegevens worden gebruikt voor het leveren van onze diensten, het personaliseren van je ervaring, het verbeteren van ons product en het verzenden van relevante communicatie over je account.'
  },
  {
    title: '3. Hoe beschermen we je gegevens?',
    content: 'We gebruiken industrie-standaard encryptie (AES-256) voor gegevensopslag en TLS 1.3 voor gegevenstransport. Al onze servers bevinden zich in EU-datacenters die voldoen aan ISO 27001 en SOC 2 Type II.'
  },
  {
    title: '4. Delen we gegevens met derden?',
    content: 'We delen nooit persoonlijke gegevens met derden voor marketingdoeleinden. We werken met beperkte verwerkers (hosting, betaling) die contractueel gebonden zijn aan dezelfde privacystandaarden.'
  },
  {
    title: '5. Cookies',
    content: 'We gebruiken essentiële cookies voor het functioneren van de applicatie en analytische cookies (geanonimiseerd) om onze dienst te verbeteren. Je kunt niet-essentiële cookies altijd uitschakelen.'
  },
  {
    title: '6. Je rechten',
    content: 'Je hebt het recht om je gegevens in te zien, te corrigeren, te verwijderen of over te dragen. Neem contact op via privacy@elvatix.com om een verzoek in te dienen. We reageren binnen 30 dagen.'
  },
];

export default function PrivacyPage() {
  return (
    <main className="pt-40 pb-16">
      <Container className="max-w-3xl">
        <h1 className="text-4xl font-black text-gray-900 mb-3">Privacybeleid</h1>
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
