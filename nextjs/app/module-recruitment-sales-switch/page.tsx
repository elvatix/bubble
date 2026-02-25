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
    <main>
      <section className="page-hero">
        <div className="section-inner">
          <span className="page-badge">Module</span>
          <h1 className="page-heading">Recruitment/Sales Switch:<br className="hidden sm:block" /> twee doelen, één tool</h1>
          <p className="page-subtitle">Wissel moeiteloos tussen kandidaten werven en klanten binnenhalen — vanuit dezelfde interface.</p>
        </div>
      </section>

      <section className="page-section">
        <div className="section-inner px-6">
          <div className="relative aspect-video max-w-[800px] mx-auto rounded-card overflow-hidden border border-border shadow-[var(--shadow-card)]">
            <Image src="/images/modules/sales-switch.png" alt="Elvatix recruitment sales switch module" fill className="object-contain p-4 bg-surface" />
          </div>
        </div>
      </section>

      <section className="page-section--alt">
        <div className="section-inner px-6">
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

            <h2>De oplossing: slimme LinkedIn leadgeneratie met Elvatix</h2>
            <p>Onze Recruitment/Sales switch maakt het mogelijk om binnen één systeem te wisselen tussen twee soorten leadgeneratie:</p>
            <ul>
              <li>Gerichte outreach naar kandidaten via recruitment.</li>
              <li>Strategische connecties met prospects of klanten via sales.</li>
            </ul>
            <p>Je werkt gewoon in <Link href="/integraties-linkedin">LinkedIn Recruiter Seat</Link> en kiest per campagne of je kandidaten of klanten wil bereiken.</p>

            <h2>Zo werkt LinkedIn leadgeneratie via Elvatix</h2>
            <ul>
              <li>Kies het scenario: recruitment of sales.</li>
              <li>Laat berichten genereren, maximaal 25 gepersonaliseerde berichten, elk uniek en in jouw stijl.</li>
              <li>Controleer en pas aan, jij bepaalt wat er uitgaat.</li>
              <li>Verzend slim, berichten worden verspreid verzonden binnen de LinkedIn-limieten.</li>
            </ul>
          </article>
        </div>
      </section>

      {/* Benefits */}
      <section className="page-section">
        <div className="section-inner px-6">
          <h2 className="text-2xl font-extrabold text-text-primary mb-8 text-center">Wat levert deze aanpak jou op?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-[720px] mx-auto">
            <div className="highlight-card"><h3 className="font-bold text-text-primary mb-2">Eén omgeving, twee doelen</h3><p className="text-sm text-text-muted">Klanten en kandidaten vanuit dezelfde interface.</p></div>
            <div className="highlight-card"><h3 className="font-bold text-text-primary mb-2">Consistente tone-of-voice</h3><p className="text-sm text-text-muted">Berichten klinken alsof jij ze zelf schrijft.</p></div>
            <div className="highlight-card"><h3 className="font-bold text-text-primary mb-2">Schaalbaar zonder generiek</h3><p className="text-sm text-text-muted">Tot 25 unieke berichten per campagne.</p></div>
            <div className="highlight-card"><h3 className="font-bold text-text-primary mb-2">Meer focus, minder herhaling</h3><p className="text-sm text-text-muted">Tijdswinst zonder kwaliteitsverlies.</p></div>
          </div>
        </div>
      </section>

      <section className="page-section--alt">
        <div className="section-inner px-6">
          <div className="max-w-[720px] mx-auto">
            <h2 className="text-2xl font-extrabold text-text-primary mb-8 text-center">Veelgestelde vragen</h2>
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
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="section-inner px-6">
          <div className="cta-section rounded-card text-center max-w-[800px] mx-auto">
            <h2 className="text-2xl font-extrabold text-white mb-3">Klaar om het zelf te ervaren?</h2>
            <p className="text-white/80 mb-6">Plan een gratis demo en ontdek de mogelijkheden.</p>
            <Link href="/demo" className="pill-btn bg-white text-elvatix font-bold px-8 py-3">Plan Gratis Demo</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
