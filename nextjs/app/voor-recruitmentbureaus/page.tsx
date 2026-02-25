import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Recruitment automation voor bureaus | Elvatix",
  description: "Schaal je LinkedIn outreach op zonder kwaliteit te verliezen. Recruitment automation met Elvatix.",
  alternates: { canonical: "https://elvatix.com/voor-recruitmentbureaus" },
};

export default function Page() {
  return (
    <main>
      <section className="page-hero">
        <div className="section-inner">
          <span className="page-badge">Voor Wie</span>
          <h1 className="page-heading">Recruitment automation voor bureaus<br className="hidden sm:block" /> die willen opschalen</h1>
          <p className="page-subtitle">Efficiënter outreachen via LinkedIn met behoud van persoonlijkheid.</p>
        </div>
      </section>

      <section className="page-section--alt">
        <div className="section-inner px-6">
          <article className="max-w-[720px] mx-auto prose-custom">
            <h2>Wat is recruitment automation?</h2>
            <p>Recruitment automation is het automatiseren van terugkerende taken binnen je wervingsproces. Voor bureaus betekent dit vooral één ding: efficiënter outreachen via LinkedIn. Je automatiseert <Link href="/module-inmails">InMails</Link>, <Link href="/module-connectieverzoeken">connectieverzoeken</Link> en follow-ups met behoud van persoonlijkheid.</p>
            <p>Zo versnel je je recruitment outreach en leadgeneratie via LinkedIn, zonder dat elk bericht voelt als een copypaste.</p>

            <h2>Waarom automatisering essentieel is</h2>
            <h3>Lage responspercentages kosten je tijd</h3>
            <p>Veel bureaus zien responsrates van 5% tot 10% op hun InMails en connectieverzoeken. Handmatig personaliseren is simpelweg niet te doen op schaal. Borg je toon met <Link href="/module-template-instructies">templates en instructies</Link>.</p>

            <h3>Wat als automatisering wel menselijk klinkt?</h3>
            <p>Met Elvatix verstuur je geautomatiseerde berichten die klinken alsof jij ze zelf hebt geschreven. Onze AI is getraind op Nederlandse vacaturedata, profielen en messaging.</p>
          </article>
        </div>
      </section>

      {/* Benefits */}
      <section className="page-section">
        <div className="section-inner px-6">
          <h2 className="text-2xl font-extrabold text-text-primary mb-8 text-center">Wat levert het op?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-[720px] mx-auto">
            <div className="highlight-card"><h3 className="font-bold text-text-primary mb-2">Meer intakes in minder tijd</h3><p className="text-sm text-text-muted">Outreach op schaal die voelt als maatwerk.</p></div>
            <div className="highlight-card"><h3 className="font-bold text-text-primary mb-2">Hogere respons op LinkedIn</h3><p className="text-sm text-text-muted">Berichten met context scoren beter.</p></div>
            <div className="highlight-card"><h3 className="font-bold text-text-primary mb-2">Efficiënter team</h3><p className="text-sm text-text-muted">Minder schrijfwerk, hogere output.</p></div>
            <div className="highlight-card"><h3 className="font-bold text-text-primary mb-2">Snellere leadgeneratie</h3><p className="text-sm text-text-muted">Via de <Link href="/module-recruitment-sales-switch" className="text-elvatix no-underline hover:underline">Recruitment/Sales switch</Link>.</p></div>
          </div>
        </div>
      </section>

      <section className="page-section--alt">
        <div className="section-inner px-6">
          <article className="max-w-[720px] mx-auto prose-custom">
            <h2>Recruitment en sales in één flow</h2>
            <p>Schakel moeiteloos tussen sourcing en prospects. Onze tool herkent automatisch of je een kandidaat of klant benadert en past de toon aan via de <Link href="/module-recruitment-sales-switch">Recruitment/Sales switch</Link>.</p>

            <h2>Waarom groeien bureaus sneller met Elvatix?</h2>
            <p>Bureaus die Elvatix gebruiken, groeien zonder extra koppen. Onze AI is afgestemd op de Nederlandse markt, communiceert in jouw stijl en blijft foutenloos. Je berichten zijn niet meer te onderscheiden van handwerk maar vergen slechts een fractie van de tijd.</p>
          </article>
        </div>
      </section>

      <section className="page-section">
        <div className="section-inner px-6">
          <div className="max-w-[720px] mx-auto">
            <h2 className="text-2xl font-extrabold text-text-primary mb-8 text-center">Veelgestelde vragen</h2>
            <details className="faq-item">
              <summary>Wat is het verschil tussen recruitment automation en een generieke AI-tool?</summary>
              <p>Recruitment automation met Elvatix is volledig afgestemd op de Nederlandse markt en begrijpt functietitels, branches en tone-of-voice.</p>
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
              <summary>Kan ik een demo plannen met mijn eigen vacatures?</summary>
              <p>Ja. We laten je live zien hoe Elvatix werkt op jouw profielen, teksten en campagnes.</p>
            </details>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="section-inner px-6">
          <div className="cta-section rounded-card text-center max-w-[800px] mx-auto">
            <h2 className="text-2xl font-extrabold text-white mb-3">Klaar om te groeien?</h2>
            <p className="text-white/80 mb-6">Ontdek hoe Elvatix jouw bureau helpt opschalen.</p>
            <Link href="/demo" className="pill-btn bg-white text-elvatix font-bold px-8 py-3">Plan Gratis Demo</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
