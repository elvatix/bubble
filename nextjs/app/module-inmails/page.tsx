import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "InMails op LinkedIn gebruiken? Maak het sneller, persoonlijker en schaalbaar met Elvatix",
  description: "Verstuur gepersonaliseerde InMails tot 25 keer sneller dankzij Elvatix. Direct in LinkedIn Recruiter Seat. Meer reacties, minder tijd. Vraag nu een demo aan.",
  alternates: { canonical: "https://elvatix.com/module-inmails" },
};

export default function Page() {
  return (
    <main className="pt-32 pb-20">
      <div className="section-inner px-6">
        {/* Hero */}
        <div className="text-center mb-12">
          <span className="page-badge">Module</span>
          <h1 className="page-heading">InMails op LinkedIn slimmer gebruiken: sneller, persoonlijker en volledig in Recruiter Seat</h1>
        </div>

        {/* Image */}
        <div className="relative aspect-video max-w-[800px] mx-auto mb-16 rounded-card overflow-hidden border border-border">
          <Image src="/images/modules/inmails.png" alt="Elvatix InMails module in LinkedIn Recruiter Seat" fill className="object-contain p-4 bg-surface" />
        </div>

        {/* Body */}
        <article className="max-w-[720px] mx-auto prose-custom">
          <h2>Herkenbaar? InMails op LinkedIn kosten vaak meer tijd dan het oplevert</h2>
          <p>Je schrijft elke InMail handmatig en zoekt naar manieren om het persoonlijk te maken. Of je maakt gebruik van AI-tools die generiek en onpersoonlijk overkomen. Elvatix verandert dat volledig binnen LinkedIn Recruiter.</p>

          <h2>Zo werken InMails op LinkedIn met Elvatix</h2>
          <p><strong>1. Je workflow blijft zoals je gewend bent</strong> \u2014 Je werkt rechtstreeks in je bestaande projecten, pipelines en talent pools in LinkedIn Recruiter Seat. Geen extra tabbladen of tools.</p>
          <p><strong>2. Selecteer tot 25 kandidaten in Recruiter Seat</strong> \u2014 Kies direct in LinkedIn Recruiter wie je wilt benaderen. Perfect voor een gerichte batch outreach binnen een specifieke functie of doelgroep.</p>
          <p><strong>3. Elvatix schrijft persoonlijke InMails in jouw stijl</strong> \u2014 Op basis van je eigen templates en tone-of-voice genereert Elvatix unieke, persoonlijke InMails per kandidaat. Geen generieke AI-teksten, maar berichten die echt klinken als jij.</p>
          <p><strong>4. Jij controleert elk bericht</strong> \u2014 Bekijk alle InMails in \u00e9\u00e9n overzicht. Je past ze aan waar nodig. Niets wordt verstuurd zonder jouw goedkeuring.</p>
          <p><strong>5. Verstuur in bulk binnen LinkedIn-limieten</strong> \u2014 Met \u00e9\u00e9n klik verzend je alle berichten tegelijk. Elvatix houdt automatisch rekening met je beschikbare InMail credits.</p>
          <p><strong>6. Voeg slimme follow-ups toe</strong> \u2014 Plan meteen een tweede bericht in met onze <Link href="/module-reminders">follow-ups</Link>. Volledig gepersonaliseerd en inhoudelijk relevant.</p>

          <h2>Wat levert InMailen op LinkedIn met Elvatix je op?</h2>
          <ul>
            <li>Meer reacties op je InMails</li>
            <li>Per week uren tijdswinst</li>
            <li>Betere grip op je pipeline</li>
            <li>Berichten die klinken als jij</li>
            <li>Jij bepaalt wat eruit gaat</li>
          </ul>

          <h2>Wat maakt Elvatix anders dan standaard AI-tools?</h2>
          <ul>
            <li>Je werkt volledig binnen LinkedIn Recruiter Seat, geen complexe nieuwe software</li>
            <li>Tot 25 kandidaten tegelijk \u2014 schaalbaar zonder verlies van persoonlijkheid</li>
            <li>Jouw eigen stijl, templates en structuur \u2014 geen standaard AI-output</li>
            <li>Follow-ups zijn inhoudelijk sterk en sluiten naadloos aan</li>
          </ul>

          <h2>Wat is een InMail op LinkedIn?</h2>
          <p>Een InMail op LinkedIn is een betaalde functie in LinkedIn Recruiter waarmee je professionals rechtstreeks kunt benaderen, zelfs als je geen connectie hebt. De meeste recruiters zetten InMails dagelijks in voor sourcing en talent outreach.</p>

          {/* FAQ */}
          <h2>Veelgestelde vragen</h2>
          <details className="faq-item">
            <summary>Hoeveel kandidaten kan ik tegelijk benaderen met Elvatix?</summary>
            <p>Maximaal 25 per keer, volledig binnen LinkedIn Recruiter.</p>
          </details>
          <details className="faq-item">
            <summary>Gebruik ik mijn eigen InMail credits?</summary>
            <p>Ja. Elvatix werkt binnen je bestaande LinkedIn-omgeving.</p>
          </details>
          <details className="faq-item">
            <summary>Klinkt het nog wel als ikzelf?</summary>
            <p>Ja. Je gebruikt je eigen sjablonen en tone-of-voice.</p>
          </details>
          <details className="faq-item">
            <summary>Stuur ik berichten automatisch?</summary>
            <p>Nee. Jij bepaalt wat er verstuurd wordt. Elk bericht controleer je zelf voor verzending.</p>
          </details>
        </article>

        {/* CTA */}
        <div className="cta-section rounded-card text-center mt-16 max-w-[720px] mx-auto">
          <h2 className="text-2xl font-extrabold text-white mb-3">Klaar om het zelf te ervaren?</h2>
          <p className="text-white/80 mb-6">Plan een gratis demo en ontdek de mogelijkheden.</p>
          <Link href="/demo" className="pill-btn bg-white text-elvatix font-bold px-8 py-3">Boek Gratis Demo</Link>
        </div>
      </div>
    </main>
  );
}
