import Container from '@/components/ui/Container';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Beleid',
  description: 'Lees hoe Elvatix B.V. omgaat met jouw persoonsgegevens. Volledig AVG-conform, veilige opslag via Bubble en geen gegevensdeling buiten onze diensten.',
  alternates: { canonical: 'https://elvatix.com/privacy' },
};

export default function PrivacyPage() {
  return (
    <main className="pt-40 pb-16">
      <Container className="max-w-3xl">
        <h1 className="text-4xl font-black text-text-primary mb-3">Privacy Beleid</h1>
        <p className="text-sm text-text-light mb-10">Laatst bijgewerkt: 09/05/2025</p>

        <div className="flex flex-col gap-10 prose-custom">
          <section>
            <h2>1. Introductie</h2>
            <p>1.1 Welkom op www.elvatix.com (de &apos;Site&apos;), beheerd door Elvatix B.V., geregistreerd onder KVK-nummer: 91816637, met een geregistreerd adres op Fahrenheitweg 24, 6101WR Echt, Nederland.</p>
            <p>1.2 Dit Privacybeleid legt uit hoe wij omgaan met jouw persoonsgegevens en voldoen aan de AVG en toepasselijke wetgeving wanneer je onze Site en bijbehorende platforms, applicaties en diensten (gezamenlijk &apos;Diensten&apos;) gebruikt.</p>
            <p>1.3 Door gebruik te maken van onze Diensten geef je toestemming voor het verzamelen, verwerken en behandelen van jouw gegevens zoals hierin beschreven.</p>
          </section>

          <section>
            <h2>2. Verwerkingsverantwoordelijke en DPA</h2>
            <p>2.1 Elvatix B.V. is de verwerkingsverantwoordelijke voor de verwerking van persoonsgegevens die via onze Diensten worden verzameld.</p>
            <p>2.2 Voor klanten die zelf als verwerkingsverantwoordelijke optreden onder de AVG, bieden wij op verzoek een Verwerkersovereenkomst (DPA) aan.</p>
          </section>

          <section>
            <h2>3. Gegevens die wij verzamelen</h2>
            <p>3.1 Gebruikersgegevens: omvatten naam, e-mailadres, LinkedIn-ID, bedrijfsgegevens, functietitel, berichten, interacties en contactlijsten.</p>
            <p>3.2 Technische gegevens: omvatten IP-adressen, browsertypes, apparaatinformatie, cookies en interactiemetadata.</p>
            <p>3.3 Prospectgegevens: omvatten openbaar beschikbare LinkedIn-profielinformatie en gegevens toegankelijk via LinkedIn API&apos;s met toestemming van de gebruiker.</p>
          </section>

          <section>
            <h2>4. Hoe wij gegevens verzamelen</h2>
            <p>4.1 Direct van gebruikers bij registratie.</p>
            <p>4.2 Automatisch via software of plug-ins.</p>
            <p>4.3 Via integraties met LinkedIn en GPT (OpenAI).</p>
            <p>4.4 Door middel van cookies op onze website.</p>
          </section>

          <section>
            <h2>5. Doel van gegevensverzameling</h2>
            <p>5.1 Om onze Diensten te leveren en te verbeteren.</p>
            <p>5.2 Voor het genereren van gepersonaliseerde berichten.</p>
            <p>5.3 Voor het beheren van gebruikersaccounts en afhandelen van betalingen.</p>
            <p>5.4 Voor het analyseren van interacties en prestatiegegevens.</p>
            <p>5.5 Om te voldoen aan wettelijke verplichtingen, zoals fraudepreventie.</p>
          </section>

          <section>
            <h2>6. Gegevensbeveiliging</h2>
            <p>6.1 Elvatix maakt gebruik van Bubble voor front-end en back-end operaties, inclusief gegevensopslag. Bubble is SOC 2 Type II- en AVG-conform, maakt gebruik van AES-256-encryptie en wordt gehost op AWS met Cloudflare ter bescherming tegen DDoS-aanvallen.</p>
            <p>6.2 Wij implementeren 2FA, beperken administratieve toegang en monitoren handmatig de activiteiten.</p>
          </section>

          <section>
            <h2>7. Gegevensdeling met derden</h2>
            <p>7.1 Wij verkopen of delen geen persoonsgegevens, behalve wanneer dit noodzakelijk is voor het leveren van onze diensten.</p>
            <p>7.2 Derde partijen omvatten: LinkedIn API, OpenAI API (geen gegevensopslag), Bubble (hosting/infrastructuur) en Stripe (betalingsverwerking).</p>
          </section>

          <section>
            <h2>8. Gegevensbewaring</h2>
            <p>8.1 Persoonsgegevens worden bewaard zolang als nodig is voor het leveren van diensten of om te voldoen aan wettelijke verplichtingen.</p>
            <p>8.2 Gegevens worden binnen 30 dagen na beëindiging van het account verwijderd.</p>
          </section>

          <section>
            <h2>9. Jouw rechten</h2>
            <p>9.1 Je hebt het recht op inzage, correctie of verwijdering van jouw persoonsgegevens.</p>
            <p>9.2 Je kunt bezwaar maken tegen of beperkingen opleggen aan de gegevensverwerking en verzoeken om gegevensoverdraagbaarheid.</p>
            <p>9.3 Je kunt verzoeken om verwijdering van jouw gegevens, onder bepaalde voorwaarden.</p>
          </section>

          <section>
            <h2>10. Cookies</h2>
            <p>10.1 Cookies worden gebruikt om de gebruikerservaring en analyses te verbeteren. Functionele cookies zijn essentieel; overige cookies vereisen jouw toestemming.</p>
            <p>10.2 Cookies verlopen na maximaal 13 maanden. Voorkeuren kunnen via jouw browserinstellingen worden aangepast.</p>
          </section>

          <section>
            <h2>11. Contact</h2>
            <p>11.1 Heb je vragen, zorgen of opmerkingen over ons privacybeleid? Neem dan contact met ons op via <a href="mailto:support@elvatix.com" className="text-elvatix hover:underline">support@elvatix.com</a>.</p>
            <p>Door gebruik te blijven maken van onze diensten, geef je aan akkoord te gaan met dit privacybeleid en eventuele toekomstige wijzigingen.</p>
          </section>
        </div>
      </Container>
    </main>
  );
}
