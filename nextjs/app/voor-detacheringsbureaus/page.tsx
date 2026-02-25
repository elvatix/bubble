import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Outreach LinkedIn voor detacheerders: persoonlijk, schaalbaar en effectief",
  description: "Ontdek hoe detacheringsbureaus met Elvatix slimmer en sneller kandidaten en opdrachtgevers benaderen via LinkedIn.",
  alternates: { canonical: "https://elvatix.com/voor-detacheringsbureaus" },
};

export default function Page() {
  return (
    <main>
      <section className="page-hero">
        <div className="section-inner">
          <span className="page-badge">Voor Wie</span>
          <h1 className="page-heading">Outreach LinkedIn voor detacheerders:<br className="hidden sm:block" /> persoonlijk, schaalbaar en effectief</h1>
          <p className="page-subtitle">Kandidaten én opdrachtgevers bereiken vanuit één interface.</p>
        </div>
      </section>

      <section className="page-section--alt">
        <div className="section-inner px-6">
          <article className="max-w-[720px] mx-auto prose-custom">
            <h2>Twee doelgroepen, één efficiënte aanpak</h2>
            <p>Als detacheringsbureau focus je op twee fronten: nieuwe kandidaten vinden en opdrachten binnenhalen. Maar dagelijkse outreach via LinkedIn kost tijd, vooral als je ieder bericht handmatig aanpast.</p>

            <h3>Herken jij dit als detacheerder?</h3>
            <ul>
              <li>Je schrijft elk bericht zelf om generieke InMails te vermijden.</li>
              <li>Je hebt honderden connecties maar slechts een paar gesprekken per week.</li>
              <li>Je vergeet follow-ups op LinkedIn omdat het te veel tijd kost.</li>
              <li>Je werkt verspreid over meerdere tools en tabbladen.</li>
            </ul>

            <h2>Waarom persoonlijkheid cruciaal is</h2>
            <p>Op LinkedIn zie je direct of een bericht oprecht is of niet. Voor detacheerders is die balans extra belangrijk: bij opdrachtgevers wil je professioneel en to-the-point zijn, bij kandidaten wil je vertrouwen uitstralen.</p>
          </article>
        </div>
      </section>

      <section className="page-section">
        <div className="section-inner px-6">
          <h2 className="text-2xl font-extrabold text-text-primary mb-8 text-center">Slimmere outreach met Elvatix</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-[800px] mx-auto">
            <div className="highlight-card"><h3 className="font-bold text-text-primary mb-2">Twee doelgroepen, één flow</h3><p className="text-sm text-text-muted">Outreach naar kandidaten en opdrachtgevers in één systeem.</p></div>
            <div className="highlight-card"><h3 className="font-bold text-text-primary mb-2">Profielherkenning</h3><p className="text-sm text-text-muted">Elvatix past toon en inhoud automatisch aan.</p></div>
            <div className="highlight-card"><h3 className="font-bold text-text-primary mb-2">Batch personaliseren</h3><p className="text-sm text-text-muted">25 unieke berichten tegelijk op naam, functie en locatie.</p></div>
            <div className="highlight-card"><h3 className="font-bold text-text-primary mb-2">Follow-up LinkedIn</h3><p className="text-sm text-text-muted">Automatische opvolging met inhoudelijke continuïteit.</p></div>
          </div>
        </div>
      </section>

      <section className="page-section--alt">
        <div className="section-inner px-6">
          <div className="max-w-[720px] mx-auto">
            <h2 className="text-2xl font-extrabold text-text-primary mb-8 text-center">Veelgestelde vragen</h2>
            <details className="faq-item">
              <summary>Wat is LinkedIn outreach in recruitment?</summary>
              <p>LinkedIn outreach is het actief benaderen van kandidaten of opdrachtgevers via LinkedIn, meestal via InMail of connectieverzoeken, met als doel een gesprek te starten.</p>
            </details>
            <details className="faq-item">
              <summary>Hoe maakt Elvatix outreach persoonlijk?</summary>
              <p>Elvatix personaliseert elk bericht op naam, functie en profiel en past de toon aan op basis van jouw schrijfstijl en doelgroep.</p>
            </details>
            <details className="faq-item">
              <summary>Werkt Elvatix met LinkedIn Recruiter Seat?</summary>
              <p>Ja. Elvatix werkt direct binnen LinkedIn Recruiter Seat. Je hoeft geen extra tools te installeren.</p>
            </details>
            <details className="faq-item">
              <summary>Kan ik ook follow-ups automatiseren?</summary>
              <p>Ja. Elvatix plant automatisch passende follow-up berichten in, gebaseerd op de inhoud van je eerste InMail of connectieverzoek.</p>
            </details>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="section-inner px-6">
          <div className="cta-section rounded-card text-center max-w-[800px] mx-auto">
            <h2 className="text-2xl font-extrabold text-white mb-3">Klaar om slimmer te detacheren?</h2>
            <p className="text-white/80 mb-6">Ontdek hoe Elvatix jouw outreach versnelt.</p>
            <Link href="/demo" className="pill-btn bg-white text-elvatix font-bold px-8 py-3">Boek Gratis Demo</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
