import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "LinkedIn leadgeneratie voor recruitment en sales",
  description: "Meer leads en betere kandidaten via LinkedIn? Bereik klanten en talent persoonlijk en schaalbaar met één tool: Elvatix.",
  alternates: { canonical: "https://elvatix.com/module-recruitment-sales-switch" },
};

export default function Page() {
  return (
    <main className="pt-32 pb-20">
      <div className="section-inner px-6">
        {/* Hero */}
        <div className="text-center mb-12">
          <span className="page-badge">Module</span>
          <h1 className="page-heading">Recruitment/Sales Switch: twee doelen, één tool</h1>
        </div>

        {/* Image */}
        <div className="relative aspect-video max-w-[800px] mx-auto mb-16 rounded-card overflow-hidden border border-border">
          <Image src="/images/modules/sales-switch.png" alt="Elvatix recruitment sales switch module" fill className="object-contain p-4 bg-surface" />
        </div>

        {/* Body */}
        <article className="max-w-[720px] mx-auto prose-custom">
          <h2>Waarom LinkedIn de plek is voor leads en kandidaten</h2>
          <p>LinkedIn is niet alleen een platform voor recruiters. Ook salesprofessionals gebruiken het dagelijks om klanten te benaderen. Beide groepen hebben hetzelfde doel: relevante gesprekken starten. Of je nu zoekt naar developers of decision makers, goede LinkedIn leadgeneratie draait om het juiste bericht op het juiste moment.</p>

          <h2>Het probleem met traditionele LinkedIn outreach</h2>
          <p>Wil je leads genereren of kandidaten overtuigen? Dan ontkom je niet aan personalisatie. Maar dat is vaak tijdrovend. In de praktijk lopen veel mensen tegen deze knelpunten aan:</p>
          <ul>
            <li>Manuele personalisatie is te arbeidsintensief.</li>
            <li>Standaard AI-tools klinken generiek en maken geen onderscheid tussen sales en recruitment.</li>
            <li>Follow-up berichten worden vergeten of niet gestructureerd opgevolgd.</li>
          </ul>
          <p>En dat is zonde. Want juist social selling op LinkedIn, of dat nu richting kandidaten of klanten is, werkt alleen als je toon, timing en inhoud kloppen.</p>

          <h2>De oplossing: slimme LinkedIn leadgeneratie met Elvatix</h2>
          <p>Wij ontwikkelden Elvatix om dit probleem op te lossen. Onze Recruitment/Sales switch maakt het mogelijk om binnen één systeem te wisselen tussen twee soorten leadgeneratie:</p>
          <ul>
            <li>Gerichte outreach naar kandidaten via recruitment.</li>
            <li>Strategische connecties met prospects of klanten via sales.</li>
          </ul>
          <p>Je werkt gewoon in <Link href="/integraties-linkedin">LinkedIn Recruiter Seat</Link> en kiest per campagne of je kandidaten of klanten wil bereiken. Onze AI ondersteunt je bij het schrijven van persoonlijke berichten, jouw tone-of-voice blijft altijd leidend.</p>

          <h2>Voor wie is deze LinkedIn leadgeneratie tool bedoeld?</h2>
          <p>Elvatix is ideaal voor professionals die LinkedIn inzetten voor meer dan één doel:</p>
          <ul>
            <li>Recruiters die ook new business moeten aanjagen.</li>
            <li>Salesprofessionals die prospects slimmer willen benaderen.</li>
            <li>Bureaus en consultants die AI willen gebruiken zonder persoonlijke kwaliteit te verliezen.</li>
          </ul>

          <h2>Zo werkt LinkedIn leadgeneratie via Elvatix</h2>
          <ul>
            <li>Kies het scenario: recruitment of sales.</li>
            <li>Laat berichten genereren, maximaal 25 gepersonaliseerde berichten, elk uniek en in jouw stijl.</li>
            <li>Controleer en pas aan, jij bepaalt wat er uitgaat. Geen automatische verzending zonder akkoord.</li>
            <li>Verzend slim, berichten worden verspreid verzonden binnen de LinkedIn-limieten.</li>
          </ul>

          <h2>Voorbeeldsituatie: LinkedIn leadgeneratie in de praktijk</h2>
          <p>Stel je bent teamlead bij een recruitmentbureau. Je zoekt vandaag kandidaten en opdrachtgevers in de fintech sector. Zonder Elvatix moet je twee tools gebruiken, verschillende stijlen hanteren en veel handmatig werk doen. Met de Recruitment/Sales switch schakel je met één klik tussen beide doelgroepen en behoud je dezelfde kwaliteit in je berichten.</p>

          <h2>Wat levert deze aanpak jou op?</h2>
          <ul>
            <li>Eén omgeving, twee doelen: klanten en kandidaten vanuit dezelfde interface.</li>
            <li>Consistente tone-of-voice: berichten klinken alsof jij ze zelf schrijft.</li>
            <li>Schaalbaar zonder generiek te worden: tot 25 unieke berichten per campagne.</li>
            <li>Meer focus op gesprekken, minder repetitief werk: tijdswinst zonder kwaliteitsverlies.</li>
          </ul>

          {/* FAQ */}
          <h2>Veelgestelde vragen over LinkedIn leadgeneratie</h2>
          <details className="faq-item">
            <summary>Wat is LinkedIn leadgeneratie precies?</summary>
            <p>LinkedIn leadgeneratie verwijst naar het proces waarin je via LinkedIn nieuwe klanten of kandidaten identificeert en persoonlijk benadert via <Link href="/module-connectieverzoeken">connectieverzoeken</Link> of <Link href="/module-inmails">InMails</Link>.</p>
          </details>
          <details className="faq-item">
            <summary>Is Elvatix geschikt voor zowel recruiters als salesprofessionals?</summary>
            <p>Ja. Met de Recruitment/Sales switch is Elvatix ontworpen voor gebruikers die via LinkedIn zowel prospects als kandidaten willen bereiken.</p>
          </details>
          <details className="faq-item">
            <summary>Kan ik mijn eigen tone of voice gebruiken met Elvatix?</summary>
            <p>Absoluut. De AI van Elvatix leert van jouw stijl en genereert berichten die klinken alsof jij ze hebt geschreven. Je bewaakt je tone-of-voice met eigen <Link href="/module-template-instructies">templates en richtlijnen</Link>.</p>
          </details>
          <details className="faq-item">
            <summary>Hoe veilig is het gebruik van Elvatix binnen LinkedIn?</summary>
            <p>Elvatix verzendt berichten binnen LinkedIn&apos;s limieten en richtlijnen. Je werkt volledig vanuit jouw LinkedIn Recruiter Seat zonder risico op schorsing.</p>
          </details>
        </article>

        {/* CTA */}
        <div className="cta-section rounded-card text-center mt-16 max-w-[720px] mx-auto">
          <h2 className="text-2xl font-extrabold text-white mb-3">Klaar om het zelf te ervaren?</h2>
          <p className="text-white/80 mb-6">Plan een gratis demo en ontdek de mogelijkheden.</p>
          <Link href="/demo" className="pill-btn bg-white text-elvatix font-bold px-8 py-3">Plan Gratis Demo</Link>
        </div>
      </div>
    </main>
  );
}
