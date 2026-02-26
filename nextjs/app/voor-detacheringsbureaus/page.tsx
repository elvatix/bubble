import type { Metadata } from "next";
import Link from "next/link";
import { DetacheringIllustration } from "../components/illustrations/PageIllustrations";

export const metadata: Metadata = {
  title: "Outreach LinkedIn voor detacheerders: persoonlijk, schaalbaar en effectief | Elvatix",
  description: "LinkedIn outreach voor detacheringsbureaus. Persoonlijk, schaalbaar en effectief — twee doelgroepen, één flow.",
  alternates: { canonical: "https://elvatix.com/voor-detacheringsbureaus" },
};

export default function VoorDetacheringPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="section-inner">
          <span className="page-badge">Voor Wie</span>
          <h1 className="page-heading">Outreach LinkedIn voor detacheerders: persoonlijk, schaalbaar en effectief</h1>
          <p className="page-subtitle">Twee doelgroepen, één efficiënte aanpak.</p>
        </div>
      </section>

      <section className="page-section">
        <div className="section-inner px-6">
          <div className="max-w-[800px] mx-auto">
            <Image src="/images/voor-wie/detacheringsbureaus.png" alt="Elvatix voor detacheringsbureaus" width={800} height={450} className="rounded-card shadow-card mx-auto" />
          </div>
        </div>
      </section>

      <section className="page-section--alt">
        <div className="section-inner px-6">
          <article className="max-w-[720px] mx-auto prose-custom">
            <h2>LinkedIn outreach: twee doelgroepen, één efficiënte aanpak</h2>
            <p>Als detacheringsbureau focus je op twee fronten: nieuwe kandidaten vinden en opdrachten binnenhalen. Je gebruikt LinkedIn voor leadgeneratie en sourcing. Maar dagelijkse outreach via LinkedIn kost tijd — vooral als je ieder bericht handmatig aanpast.</p>
            <p>Je verstuurt connectieverzoeken, InMails, voert gesprekken en probeert follow-ups te doen. Ondertussen gaan er kostbare uren verloren aan klikken, kopiëren en herschrijven. Dat moet slimmer kunnen.</p>

            <h2>Herken jij dit als detacheerder?</h2>
            <ul>
              <li>Je schrijft elk bericht zelf om generieke InMails te vermijden.</li>
              <li>Je hebt honderden connecties maar slechts een paar gesprekken per week.</li>
              <li>Je vergeet follow-ups op LinkedIn omdat het te veel tijd kost.</li>
              <li>Je werkt verspreid over meerdere tools en tabbladen.</li>
            </ul>
            <p>Of je nu bezig bent met leadgeneratie via LinkedIn of kandidaten zoekt voor openstaande opdrachten, goede LinkedIn outreach betekent: relevant, oprecht en op tijd.</p>

            <h2>Waarom persoonlijkheid cruciaal is in LinkedIn outreach</h2>
            <p>Op LinkedIn zie je direct of een bericht oprecht is of niet. Een InMail LinkedIn of connectieverzoek LinkedIn valt alleen op als het herkenbaar en inhoudelijk sterk is. Anders blijft het bij &ldquo;gelezen maar geen reactie&rdquo;.</p>
            <p>Voor detacheerders is die balans extra belangrijk. Bij opdrachtgevers wil je professioneel en to-the-point zijn. Bij kandidaten wil je vertrouwen uitstralen en op inhoud overtuigen. Dat vraagt om maatwerk op schaal. Precies hierin maakt Elvatix het verschil.</p>
          </article>
        </div>
      </section>

      <section className="page-section">
        <div className="section-inner px-6">
          <article className="max-w-[720px] mx-auto prose-custom">
            <h2>Slimmere LinkedIn outreach met Elvatix</h2>
            <p>Elvatix is een AI recruitment tool speciaal gemaakt voor interne teams bij detacheringsbureaus. Geen standaard AI-prompts of generieke flows — maar slimme automatisering die jouw toon en workflow volgt, direct in je LinkedIn Recruiter Seat.</p>
            <ul>
              <li><strong>Twee doelgroepen, één flow:</strong> outreach naar zowel kandidaten als opdrachtgevers in één geïntegreerd systeem.</li>
              <li><strong>Profielherkenning:</strong> Elvatix herkent het profieltype (kandidaat of klant) en past toon en inhoud automatisch aan.</li>
              <li><strong>Batch personaliseren:</strong> 25 unieke berichten tegelijk, gepersonaliseerd op naam, functie, locatie en eerdere interacties.</li>
              <li><strong>Follow-up LinkedIn:</strong> automatische opvolging met variatie en inhoudelijke continuïteit, geen herhalingen maar logische vervolgen (<Link href="/module-reminders">Follow-up module</Link>).</li>
              <li><strong>Zonder toolswitch:</strong> werkt direct in je LinkedIn Recruiter Seat, geen extra systemen, tabs of onboarding nodig.</li>
            </ul>

            <h2>Wat levert Elvatix concreet op?</h2>
            <p>Stel: je voert recruitment outreach uit richting .NET-developers in regio Rotterdam. Normaal besteed je 3 uur aan persoonlijke berichtjes. Met Elvatix geef je een briefing (&lsquo;informele toon, focus op projectinhoud&rsquo;) en ontvang je 20 perfect gepersonaliseerde InMails. Verstuurklaar binnen minuten.</p>
            <p>Krijg je geen reactie? Dan plant de tool automatisch een follow-up LinkedIn in, afgestemd op je vorige bericht. Daardoor bied je kandidaten of contacten meerdere kansen om in te haken — zonder dat jij iets hoeft te doen.</p>

            <h2>Minder klikwerk, meer echte gesprekken</h2>
            <p>Consistente LinkedIn outreach is belangrijk — maar in de praktijk komt het er niet van. Hectiek wint het van goede bedoelingen. Elvatix neemt het zware werk uit handen terwijl jij de controle houdt over toon en timing.</p>
            <p>Zo houd je tijd over voor intakegesprekken en relatiebeheer en werk je efficiënter samen tussen recruitment en sales. Recruitment automation wordt praktijk in plaats van plan.</p>

            <h2>Waarom Elvatix beter past dan andere AI recruitment tools</h2>
            <p>De meeste tools zijn gemaakt voor koude outbound-sales: snel, massaal en anoniem. Maar detachering vraagt het omgekeerde: vertrouwd, betrokken en slim getimed.</p>
            <p>Elvatix is gebouwd voor die praktijk. Het leert jouw toon — of je nu formeel of informeel communiceert. Je stuurt geen standaard-template maar berichten die passen bij jouw stijl en het type ontvanger. Alles direct vanuit je LinkedIn Recruiter Seat. Geen omwegen, geen generieke AI.</p>

            <h2>Outreach LinkedIn zonder ruis, met resultaat</h2>
            <p>Elvatix maakt het mogelijk om op grote schaal te communiceren zonder in te leveren op inhoud of persoonlijkheid. Je bespaart uren per week, vergroot je bereik en maakt meer impact per bericht.</p>
            <p>Nieuwsgierig naar resultaten? Bekijk onze <Link href="/case-studies">case studies</Link>.</p>
          </article>
        </div>
      </section>

      <section className="page-section--alt">
        <div className="section-inner px-6">
          <div className="max-w-[720px] mx-auto">
            <h2 className="text-2xl font-extrabold text-text-primary mb-8 text-center">Veelgestelde vragen over LinkedIn outreach voor detacheerders</h2>
            <details className="faq-item">
              <summary>Wat is LinkedIn outreach in recruitment?</summary>
              <p>LinkedIn outreach is het actief benaderen van kandidaten of opdrachtgevers via LinkedIn, meestal via InMail of connectieverzoeken. Het doel is om een gesprek te starten of interesse te wekken.</p>
            </details>
            <details className="faq-item">
              <summary>Hoe maakt Elvatix outreach persoonlijk?</summary>
              <p>Elvatix personaliseert elk bericht op naam, functie en profiel en past de toon aan op basis van jouw schrijfstijl en doelgroep. Zo blijft elk bericht geloofwaardig en relevant. Test en verfijn je toon met <Link href="/module-template-instructies">templates &amp; instructies</Link>.</p>
            </details>
            <details className="faq-item">
              <summary>Werkt Elvatix met LinkedIn Recruiter Seat?</summary>
              <p>Ja. Elvatix werkt direct binnen LinkedIn Recruiter Seat. Je hoeft geen extra tools te installeren of tussen applicaties te wisselen.</p>
            </details>
            <details className="faq-item">
              <summary>Kan ik ook follow-ups automatiseren?</summary>
              <p>Ja. Elvatix plant automatisch passende follow-up berichten in, gebaseerd op de inhoud van je eerste InMail of connectieverzoek. Geen herhalingen, elke opvolging sluit logisch aan.</p>
            </details>
            <details className="faq-item">
              <summary>Voor wie is Elvatix bedoeld?</summary>
              <p>Voor detacherings- en recruitmentbureaus die hun outreach willen versnellen zonder aan kwaliteit in te boeten. Specifiek waardevol voor teams die werken met LinkedIn Recruiter of Recruiter Lite.</p>
            </details>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="section-inner px-6">
          <div className="cta-section rounded-card text-center max-w-[800px] mx-auto">
            <h2 className="text-2xl font-extrabold text-white mb-3">Klaar voor slimmere outreach?</h2>
            <p className="text-white/80 mb-6">Ontdek hoe Elvatix jouw detacheringsbureau helpt groeien.</p>
            <Link href="/demo" className="pill-btn bg-white text-elvatix font-bold px-8 py-3">Boek Gratis Demo</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
