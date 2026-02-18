import Container from '@/components/ui/Container';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacybeleid — Elvatix',
  description: 'Lees het privacybeleid van Elvatix. We nemen je privacy serieus.',
};

export default function PrivacyPage() {
  return (
    <main className="pt-32 pb-16">
      <Container className="max-w-3xl">
        <h1 className="text-4xl font-black text-gray-900 mb-8">Privacybeleid</h1>
        <div className="prose prose-lg max-w-none text-gray-600">
          <p>Elvatix respecteert je privacy. Dit beleid legt uit welke gegevens we verzamelen, hoe we ze gebruiken en hoe we ze beschermen.</p>
          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">1. Gegevensverzameling</h2>
          <p>We verzamelen alleen de gegevens die nodig zijn om onze dienst te leveren: je naam, e-mailadres en bedrijfsinformatie bij registratie.</p>
          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">2. Gebruik van gegevens</h2>
          <p>Je gegevens worden gebruikt om je account te beheren, onze diensten te verbeteren en je te informeren over updates.</p>
          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">3. Kandidaatdata</h2>
          <p>LinkedIn profieldata die je invoert in Elvatix wordt alleen gebruikt om berichten te genereren en wordt niet opgeslagen na het genereren.</p>
          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">4. Contact</h2>
          <p>Vragen over privacy? Neem contact met ons op via <a href="/contact" className="text-[var(--linkedin-blue)] hover:underline">ons contactformulier</a>.</p>
        </div>
      </Container>
    </main>
  );
}
