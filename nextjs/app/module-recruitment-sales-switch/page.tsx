import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "LinkedIn leadgeneratie voor recruitment en sales",
  description: "Meer leads en betere kandidaten via LinkedIn? Bereik klanten en talent persoonlijk en schaalbaar met \u00e9\u00e9n tool: Elvatix.",
  alternates: { canonical: "https://elvatix.com/module-recruitment-sales-switch" },
};

export default function Page() {
  return (
    <main className="pt-32 pb-20">
      <div className="section-inner px-6">
        {/* Hero */}
        <div className="text-center mb-12">
          <span className="page-badge">Module</span>
          <h1 className="page-heading">LinkedIn leadgeneratie voor recruitment en sales in \u00e9\u00e9n omgeving</h1>
        </div>

        {/* Image */}
        <div className="relative aspect-video max-w-[800px] mx-auto mb-16 rounded-card overflow-hidden border border-border">
          <Image src="/images/modules/sales-switch.png" alt="Elvatix recruitment sales switch module" fill className="object-contain p-4 bg-surface" />
        </div>

        {/* Body */}
        <article className="max-w-[720px] mx-auto prose-custom">
          <h2>Waarom LinkedIn de plek is voor leads en kandidaten</h2>
          <p>LinkedIn is niet alleen een platform voor recruiters. Ook salesprofessionals gebruiken het dagelijks. Beide groepen hebben hetzelfde doel: relevante gesprekken starten.</p>

          <h2>Het probleem met traditionele LinkedIn outreach</h2>
          <ul>
            <li>Manuele personalisatie is te arbeidsintensief.</li>
            <li>Standaard AI-tools klinken generiek en maken geen onderscheid tussen sales en recruitment.</li>
            <li>Follow-up berichten worden vergeten of niet gestructureerd opgevolgd.</li>
          </ul>

          <h2>De oplossing: slimme LinkedIn leadgeneratie met Elvatix</h2>
          <p>Onze Recruitment/Sales switch maakt het mogelijk om binnen \u00e9\u00e9n systeem te wisselen tussen twee soorten leadgeneratie: gerichte outreach naar kandidaten (recruitment) en strategische connecties met prospects of klanten (sales).</p>

          <h2>Voor wie is deze LinkedIn leadgeneratie tool bedoeld?</h2>
          <ul>
            <li>Recruiters die ook new business moeten aanjagen.</li>
            <li>Salesprofessionals die prospects slimmer willen benaderen.</li>
            <li>Bureaus en consultants die AI willen gebruiken zonder persoonlijke kwaliteit te verliezen.</li>
          </ul>

          <h2>Zo werkt LinkedIn leadgeneratie via Elvatix</h2>
          <ul>
            <li><strong>Kies het scenario:</strong> recruitment of sales.</li>
            <li><strong>Laat berichten genereren</strong> \u2014 maximaal 25 gepersonaliseerde berichten, elk uniek en in jouw stijl.</li>
            <li><strong>Controleer en pas aan</strong> \u2014 jij bepaalt wat er uitgaat.</li>
            <li><strong>Verzend slim</strong> \u2014 berichten worden verspreid verzonden binnen de LinkedIn-limieten.</li>
          </ul>

          <h2>Wat levert deze aanpak jou op?</h2>
          <ul>
            <li>\u00c9\u00e9n omgeving, twee doelen: klanten en kandidaten vanuit dezelfde interface.</li>
            <li>Consistente tone-of-voice: berichten klinken alsof jij ze zelf schrijft.</li>
            <li>Schaalbaar zonder generiek te worden: tot 25 unieke berichten per campagne.</li>
            <li>Meer focus op gesprekken, minder repetitief werk.</li>
          </ul>

          <h2>Praktische LinkedIn Sales Navigator tips</h2>
          <ul>
            <li>Gebruik geavanceerde filters op functietitel, branche en senioriteit.</li>
            <li>Zet lead lists op per sector of regio.</li>
            <li>Verwerk notities en tags zodat je opvolging persoonlijk blijft.</li>
          </ul>

          {/* FAQ */}
          <h2>Veelgestelde vragen</h2>
          <details className="faq-item">
            <summary>Is Elvatix geschikt voor zowel recruiters als salesprofessionals?</summary>
            <p>Ja. Met de Recruitment/Sales switch is Elvatix ontworpen voor gebruikers die via LinkedIn zowel prospects als kandidaten willen bereiken.</p>
          </details>
          <details className="faq-item">
            <summary>Kan ik mijn eigen tone of voice gebruiken met Elvatix?</summary>
            <p>Absoluut. De AI van Elvatix leert van jouw stijl en genereert berichten die klinken alsof jij ze hebt geschreven.</p>
          </details>
          <details className="faq-item">
            <summary>Hoe veilig is het gebruik van Elvatix binnen LinkedIn?</summary>
            <p>Elvatix verzendt berichten binnen LinkedIn\u2019s limieten en richtlijnen. Je werkt volledig vanuit jouw LinkedIn Recruiter Seat.</p>
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
