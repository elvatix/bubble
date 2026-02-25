import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Recruitment automation voor bureaus die willen opschalen zonder kwaliteit te verliezen",
  description: "Meer intakes, minder tijd: ontdek hoe Elvatix recruitment automation jouw bureau helpt groeien met overtuigende LinkedIn-outreach, volledig gepersonaliseerd vanuit je LinkedIn Recruiter Seat.",
  alternates: { canonical: "https://elvatix.com/voor-recruitmentbureaus" },
};

export default function Page() {
  return (
    <main className="pt-32 pb-20">
      <div className="section-inner px-6">
        {/* Hero */}
        <div className="text-center mb-12">
          <span className="page-badge">Voor Wie</span>
          <h1 className="page-heading">Recruitment automation voor bureaus die willen opschalen zonder kwaliteit te verliezen</h1>
        </div>

        {/* Image */}
        <div className="relative aspect-video max-w-[800px] mx-auto mb-16 rounded-card overflow-hidden border border-border">
          <Image src="/images/voor-wie/recruitmentbureaus.png" alt="Elvatix voor recruitmentbureaus" fill className="object-contain p-4 bg-surface" />
        </div>

        {/* Body */}
        <article className="max-w-[720px] mx-auto prose-custom">
          <h2>Wat is recruitment automation?</h2>
          <p>Recruitment automation is het automatiseren van terugkerende taken binnen je wervingsproces. Voor bureaus betekent dit vooral &eacute;&eacute;n ding: effici&euml;nter outreachen via LinkedIn. Je automatiseert InMails, connectieverzoeken en follow-ups met behoud van persoonlijkheid.</p>
          <p>Zo versnel je je recruitment outreach en leadgeneratie via LinkedIn, zonder dat elk bericht voelt als een copypaste. Perfect voor het vinden van kandidaten en het werven van nieuwe klanten.</p>

          <h2>Voor wie is recruitment automation geschikt?</h2>
          <p>Werk je op een recruitmentbureau, bekijk je dagelijks tientallen profielen en stuur je veel berichten via LinkedIn Recruiter Seat? Dan weet je hoe lastig het is om alles persoonlijk en foutloos te houden. Recruitment automation helpt je de balans houden tussen snelheid en kwaliteit.</p>

          <h2>Waarom automatisering van je LinkedIn-outreach essentieel is</h2>
          <h3>Lage responspercentages kosten je tijd</h3>
          <p>Veel bureaus zien responsrates van 5% tot 10% op hun InMails en connectieverzoeken via LinkedIn. Handmatig personaliseren is simpelweg niet te doen op schaal. En standaardberichten? Die worden genegeerd.</p>

          <h3>Waarom standaard AI recruitment tools niet werken</h3>
          <p>Generieke AI-tools missen gevoel voor context. Ze herkennen geen branchespecifieke termen of functievereisten. Laat staan dat ze zich aanpassen aan jouw schrijfstijl of employer brand.</p>

          <h3>Wat als automatisering wel menselijk klinkt?</h3>
          <p>Met Elvatix verstuur je geautomatiseerde berichten die klinken alsof jij ze zelf hebt geschreven. Onze AI is getraind op Nederlandse vacaturedata, profielen en messaging. Daardoor is je outreach altijd contextueel, correct en overtuigend zonder dat AI-stempel.</p>

          <h2>Recruitment automation binnen je LinkedIn Recruiter Seat</h2>
          <p>Elvatix werkt direct binnen je LinkedIn Recruiter Seat. Geen extra tools, geen leercurve. Selecteer maximaal 25 profielen en genereer met &eacute;&eacute;n klik persoonlijke InMails of connectieverzoeken. Voor kandidaten en prospects.</p>

          <h3>Recruitment en sales in &eacute;&eacute;n flow</h3>
          <p>Schakel moeiteloos tussen sourcing en prospects. Onze tool herkent automatisch of je een kandidaat of klant benadert en past de toon aan via de <Link href="/module-recruitment-sales-switch">Recruitment/Sales switch</Link>.</p>

          <h3>Automatische follow-ups zonder irritatie</h3>
          <p>Elvatix stuurt <Link href="/module-reminders">follow-ups</Link> die aansluiten op je vorige bericht. Geen herhalingen, wel relevantie. Ideaal als je veel mensen tegelijk benadert en geen tijd hebt om elke lead handmatig op te volgen.</p>

          <h2>Wat levert recruitment automation concreet op?</h2>
          <ul>
            <li>Meer intakes in minder tijd: outreach op schaal die wel blijft voelen als maatwerk.</li>
            <li>Hogere respons op LinkedIn: berichten met context scoren beter.</li>
            <li>Effici&euml;nter team: minder tijd kwijt aan handmatig schrijfwerk met hogere output.</li>
            <li>Snellere leadgeneratie via LinkedIn via Recruitment/Sales switch.</li>
          </ul>

          <h2>Waarom groeien bureaus sneller met Elvatix?</h2>
          <p>Bureaus die Elvatix gebruiken, groeien zonder extra koppen. Onze AI is afgestemd op de Nederlandse markt, communiceert in jouw stijl en blijft foutenloos. Bekijk resultaten in onze <Link href="/case-studies">case studies</Link>.</p>

          {/* FAQ */}
          <h2>Veelgestelde vragen over recruitment automation</h2>
          <details className="faq-item">
            <summary>Wat is het verschil tussen recruitment automation en een generieke AI-tool?</summary>
            <p>Recruitment automation met Elvatix is volledig afgestemd op de Nederlandse markt en begrijpt functietitels, branches en tone-of-voice. Generieke AI-tools missen die context.</p>
          </details>
          <details className="faq-item">
            <summary>Werkt recruitment automation ook voor sales op LinkedIn?</summary>
            <p>Ja. Elvatix herkent of je iemand werft of een salesprospect benadert en past de toon automatisch aan.</p>
          </details>
          <details className="faq-item">
            <summary>Waar draait Elvatix op?</summary>
            <p>Volledig binnen je eigen LinkedIn Recruiter Seat. Geen extra tools of dashboards nodig.</p>
          </details>
          <details className="faq-item">
            <summary>Kan ik een demo plannen met mijn eigen vacatures of doelgroepen?</summary>
            <p>Ja. We laten je live zien hoe Elvatix werkt op jouw profielen, teksten en campagnes.</p>
          </details>
        </article>

        {/* CTA */}
        <div className="cta-section rounded-card text-center mt-16 max-w-[720px] mx-auto">
          <h2 className="text-2xl font-extrabold text-white mb-3">Klaar om op te schalen?</h2>
          <p className="text-white/80 mb-6">Ontdek hoe Elvatix jouw bureau helpt groeien.</p>
          <Link href="/demo" className="pill-btn bg-white text-elvatix font-bold px-8 py-3">Plan Gratis Demo</Link>
        </div>
      </div>
    </main>
  );
}
