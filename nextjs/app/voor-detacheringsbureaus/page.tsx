import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Outreach LinkedIn voor detacheerders: persoonlijk, schaalbaar en effectief",
  description: "Gebruik LinkedIn outreach slimmer. Voor detacheerders die sneller willen sourcen, betere follow-ups willen en persoonlijk contact willen behouden met kandidaten en opdrachtgevers.",
  alternates: { canonical: "https://elvatix.com/voor-detacheringsbureaus" },
};

export default function Page() {
  return (
    <main className="pt-32 pb-20">
      <div className="section-inner px-6">
        {/* Hero */}
        <div className="text-center mb-12">
          <span className="page-badge">Voor Wie</span>
          <h1 className="page-heading">Outreach LinkedIn voor detacheerders: persoonlijk, schaalbaar en effectief</h1>
        </div>

        {/* Image */}
        <div className="relative aspect-video max-w-[800px] mx-auto mb-16 rounded-card overflow-hidden border border-border">
          <Image src="/images/voor-wie/detacheringsbureaus.png" alt="Elvatix voor detacheringsbureaus" fill className="object-contain p-4 bg-surface" />
        </div>

        {/* Body */}
        <article className="max-w-[720px] mx-auto prose-custom">
          <h2>LinkedIn outreach: twee doelgroepen, &eacute;&eacute;n effici&euml;nte aanpak</h2>
          <p>Als detacheringsbureau focus je op twee fronten: nieuwe kandidaten vinden en opdrachten binnenhalen. Maar dagelijkse outreach via LinkedIn kost tijd, vooral als je ieder bericht handmatig aanpast.</p>

          <h3>Herken jij dit als detacheerder?</h3>
          <ul>
            <li>Je schrijft elk bericht zelf om generieke <Link href="/module-inmails">InMails</Link> te vermijden.</li>
            <li>Je hebt honderden connecties maar slechts een paar gesprekken per week.</li>
            <li>Je vergeet <Link href="/module-reminders">follow-ups</Link> op LinkedIn omdat het te veel tijd kost.</li>
            <li>Je werkt verspreid over meerdere tools en tabbladen.</li>
          </ul>

          <h2>Waarom persoonlijkheid cruciaal is in LinkedIn outreach</h2>
          <p>Op LinkedIn zie je direct of een bericht oprecht is of niet. Een InMail of <Link href="/module-connectieverzoeken">connectieverzoek</Link> valt alleen op als het herkenbaar en inhoudelijk sterk is. Voor detacheerders is die balans extra belangrijk: bij opdrachtgevers wil je professioneel en to-the-point zijn, bij kandidaten wil je vertrouwen uitstralen.</p>

          <h2>Slimmere LinkedIn outreach met Elvatix</h2>
          <p>Elvatix is een AI recruitment tool speciaal gemaakt voor interne teams bij detacheringsbureaus. Geen standaard AI-prompts of generieke flows maar slimme automatisering die jouw toon en workflow volgt, direct in je LinkedIn Recruiter Seat.</p>
          <ul>
            <li><strong>Twee doelgroepen, &eacute;&eacute;n flow:</strong> outreach naar zowel kandidaten als opdrachtgevers in &eacute;&eacute;n ge&iuml;ntegreerd systeem.</li>
            <li><strong>Profielherkenning:</strong> Elvatix herkent het profieltype en past toon en inhoud automatisch aan.</li>
            <li><strong>Batch personaliseren:</strong> 25 unieke berichten tegelijk gepersonaliseerd op naam, functie, locatie en eerdere interacties.</li>
            <li><strong>Follow-up LinkedIn:</strong> automatische opvolging met variatie en inhoudelijke continu&iuml;teit, geen herhalingen maar logische vervolgen.</li>
            <li><strong>Zonder toolswitch:</strong> werkt direct in je LinkedIn Recruiter Seat, geen extra systemen of onboarding nodig.</li>
          </ul>

          <h2>Wat levert Elvatix concreet op?</h2>
          <p>Stel: je voert recruitment outreach uit richting .NET-developers in regio Rotterdam. Normaal besteed je 3 uur aan persoonlijke berichtjes. Met Elvatix geef je een briefing en ontvang je 20 perfect gepersonaliseerde InMails, verstuurklaar binnen minuten.</p>

          <h3>Minder klikwerk, meer echte gesprekken</h3>
          <p>Elvatix neemt het zware werk uit handen terwijl jij de controle houdt over toon en timing. Zo houd je tijd over voor intakegesprekken en relatiebeheer.</p>

          <h3>Waarom Elvatix beter past dan andere AI recruitment tools</h3>
          <p>De meeste tools zijn gemaakt voor koude outbound-sales: snel, massaal en anoniem. Maar detachering vraagt het omgekeerde: vertrouwd, betrokken en slim getimed. Elvatix is gebouwd voor die praktijk.</p>

          {/* FAQ */}
          <h2>Veelgestelde vragen over LinkedIn outreach voor detacheerders</h2>
          <details className="faq-item">
            <summary>Wat is LinkedIn outreach in recruitment?</summary>
            <p>LinkedIn outreach is het actief benaderen van kandidaten of opdrachtgevers via LinkedIn, meestal via InMail of connectieverzoeken, met als doel een gesprek te starten of interesse te wekken.</p>
          </details>
          <details className="faq-item">
            <summary>Hoe maakt Elvatix outreach persoonlijk?</summary>
            <p>Elvatix personaliseert elk bericht op naam, functie en profiel en past de toon aan op basis van jouw schrijfstijl en doelgroep.</p>
          </details>
          <details className="faq-item">
            <summary>Werkt Elvatix met LinkedIn Recruiter Seat?</summary>
            <p>Ja. Elvatix werkt direct binnen LinkedIn Recruiter Seat. Je hoeft geen extra tools te installeren of tussen applicaties te wisselen.</p>
          </details>
          <details className="faq-item">
            <summary>Kan ik ook follow-ups automatiseren?</summary>
            <p>Ja. Elvatix plant automatisch passende follow-up berichten in, gebaseerd op de inhoud van je eerste InMail of connectieverzoek. Geen herhalingen, elke opvolging sluit logisch aan.</p>
          </details>
        </article>

        {/* CTA */}
        <div className="cta-section rounded-card text-center mt-16 max-w-[720px] mx-auto">
          <h2 className="text-2xl font-extrabold text-white mb-3">Klaar voor slimmere outreach?</h2>
          <p className="text-white/80 mb-6">Plan een demo en ontdek wat Elvatix voor jouw detacheringsbureau kan doen.</p>
          <Link href="/demo" className="pill-btn bg-white text-elvatix font-bold px-8 py-3">Boek Gratis Demo</Link>
        </div>
      </div>
    </main>
  );
}
