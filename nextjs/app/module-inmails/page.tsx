import type { Metadata } from "next";
import Link from "next/link";
import { InMailsIllustration } from "../components/illustrations/PageIllustrations";

export const metadata: Metadata = {
  title: "InMails op LinkedIn slimmer gebruiken | Elvatix",
  description: "Sneller, persoonlijker en volledig in Recruiter Seat. Ontdek hoe Elvatix je InMails naar een hoger niveau tilt.",
  alternates: { canonical: "https://elvatix.com/module-inmails" },
};

export default function InMailsPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="section-inner">
          <span className="page-badge">Module</span>
          <h1 className="page-heading">InMails op LinkedIn slimmer gebruiken: sneller, persoonlijker en volledig in Recruiter Seat</h1>
          <p className="page-subtitle">Meer reacties op je InMails — zonder extra tools of tijdverlies.</p>
        </div>
      </section>

      <section className="page-section">
        <div className="section-inner px-6">
          <div className="max-w-[800px] mx-auto">
            <Image src="/images/modules/inmails.png" alt="Elvatix InMails module" width={800} height={450} className="rounded-card shadow-card mx-auto" />
          </div>
        </div>
      </section>

      <section className="page-section--alt">
        <div className="section-inner px-6">
          <article className="max-w-[720px] mx-auto prose-custom">
            <h2>Herkenbaar? InMails op LinkedIn kosten vaak meer tijd dan het oplevert</h2>
            <p>Je gebruikt InMails op LinkedIn dagelijks om potentiële kandidaten te benaderen. Maar de resultaten vallen vaak tegen. Waarom?</p>
            <ul>
              <li>Je schrijft elke InMail handmatig en zoekt naar manieren om het persoonlijk te maken</li>
              <li>Of je maakt gebruik van AI-tools die generiek en onpersoonlijk overkomen</li>
            </ul>
            <p>Beide opties kosten tijd of leveren weinig respons op. Elvatix verandert dat volledig binnen LinkedIn Recruiter.</p>

            <h2>Zo werken InMails op LinkedIn met Elvatix</h2>
            <h3>1. Je workflow blijft zoals je gewend bent</h3>
            <p>Je werkt rechtstreeks in je bestaande projecten, pipelines en talent pools in LinkedIn Recruiter Seat. Geen extra tabbladen of tools.</p>
            <h3>2. Selecteer tot 25 kandidaten in Recruiter Seat</h3>
            <p>Kies direct in LinkedIn Recruiter wie je wilt benaderen. Perfect voor een gerichte batch outreach binnen een specifieke functie of doelgroep.</p>
            <h3>3. Elvatix schrijft persoonlijke InMails in jouw stijl</h3>
            <p>Op basis van je eigen templates en tone-of-voice genereert Elvatix unieke, persoonlijke InMails per kandidaat. Geen generieke AI-teksten, maar berichten die echt klinken als jij. Optimaliseer je sjablonen met onze <Link href="/module-custom-gpt">Custom GPT&apos;s</Link>.</p>
            <h3>4. Jij controleert elk bericht</h3>
            <p>Bekijk alle InMails in één overzicht. Je past ze aan waar nodig. Niets wordt verstuurd zonder jouw goedkeuring.</p>
            <h3>5. Verstuur in bulk binnen LinkedIn-limieten</h3>
            <p>Met één klik verzend je alle berichten tegelijk. Elvatix houdt automatisch rekening met je beschikbare InMail credits en de limieten van LinkedIn.</p>
            <h3>6. Voeg slimme follow-ups toe</h3>
            <p>Plan meteen een tweede bericht in met onze <Link href="/module-reminders">follow-ups</Link>. Volledig gepersonaliseerd en inhoudelijk relevant. Zo haal je meer uit elke eerste outreach via InMails.</p>
          </article>
        </div>
      </section>

      <section className="page-section">
        <div className="section-inner px-6">
          <article className="max-w-[720px] mx-auto prose-custom">
            <h2>Wat levert InMailen op LinkedIn met Elvatix je op?</h2>
            <p>Door InMails slimmer te gebruiken met Elvatix verbeter je zowel je snelheid als het resultaat van je outreach:</p>
            <ul>
              <li>Meer reacties op je InMails</li>
              <li>Per week uren tijdswinst</li>
              <li>Betere grip op je pipeline</li>
              <li>Berichten die klinken als jij</li>
              <li>Jij bepaalt wat eruit gaat</li>
            </ul>
            <p>Voor voorbeelden: bekijk onze <Link href="/case-studies">case studies</Link>.</p>

            <h2>Wat maakt Elvatix anders dan standaard AI-tools?</h2>
            <ul>
              <li>Je werkt volledig binnen LinkedIn Recruiter Seat, geen complexe nieuwe software</li>
              <li>Tot 25 kandidaten tegelijk — schaalbaar zonder verlies van persoonlijkheid</li>
              <li>Jouw eigen stijl, templates en structuur — geen standaard AI-output</li>
              <li>Follow-ups zijn inhoudelijk sterk en sluiten naadloos aan</li>
            </ul>

            <h2>Wat is een InMail op LinkedIn?</h2>
            <p>Een InMail op LinkedIn is een betaalde functie in LinkedIn Recruiter waarmee je professionals rechtstreeks kunt benaderen, zelfs als je geen connectie hebt. Je gebruikt hiervoor InMail credits. De meeste recruiters zetten InMails op LinkedIn dagelijks in voor sourcing en talent outreach. Maar zonder personalisatie is je kans op een reactie vaak klein. Persoonlijker schrijven? Gebruik je eigen <Link href="/module-template-instructies">templates &amp; instructies</Link>.</p>
          </article>
        </div>
      </section>

      <section className="page-section--alt">
        <div className="section-inner px-6">
          <div className="max-w-[720px] mx-auto">
            <h2 className="text-2xl font-extrabold text-text-primary mb-8 text-center">Veelgestelde vragen over InMails op LinkedIn en Elvatix</h2>
            <details className="faq-item">
              <summary>Hoeveel kandidaten kan ik tegelijk benaderen met Elvatix?</summary>
              <p>Maximaal 25 per keer — volledig binnen LinkedIn Recruiter. Zo houd je overzicht en kwaliteit, ook bij grotere outreach.</p>
            </details>
            <details className="faq-item">
              <summary>Gebruik ik mijn eigen InMail credits?</summary>
              <p>Ja. Elvatix werkt binnen je bestaande LinkedIn-omgeving. Je gebruikt dus gewoon de InMail credits die je al hebt.</p>
            </details>
            <details className="faq-item">
              <summary>Klinkt het nog wel als ikzelf?</summary>
              <p>Ja. Je gebruikt je eigen sjablonen en tone-of-voice. Elvatix zorgt alleen voor tijdswinst — niet voor onpersoonlijke AI-berichten.</p>
            </details>
            <details className="faq-item">
              <summary>Stuur ik berichten automatisch?</summary>
              <p>Nee. Jij bepaalt wat er verstuurd wordt. Elk bericht controleer en verbeter je zelf voor verzending. Niks gaat automatisch de deur uit.</p>
            </details>
            <details className="faq-item">
              <summary>Is dit compliant met LinkedIn-beleid?</summary>
              <p>Ja. We houden rekening met je limieten en credits. Alles blijft binnen de spelregels van LinkedIn.</p>
            </details>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="section-inner px-6">
          <div className="cta-section rounded-card text-center max-w-[800px] mx-auto">
            <h2 className="text-2xl font-extrabold text-white mb-3">Klaar om je InMails te verbeteren?</h2>
            <p className="text-white/80 mb-6">Ontdek hoe Elvatix jouw LinkedIn outreach versnelt.</p>
            <Link href="/demo" className="pill-btn bg-white text-elvatix font-bold px-8 py-3">Boek Gratis Demo</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
