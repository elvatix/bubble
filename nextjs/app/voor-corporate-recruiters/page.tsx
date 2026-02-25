import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hoe Elvatix corporate recruiters helpt sneller en persoonlijker te werven",
  description: "Ontdek hoe Elvatix inhouse recruiters ondersteunt met AI-gedreven InMails en follow-ups.",
  alternates: { canonical: "https://elvatix.com/voor-corporate-recruiters" },
};

export default function Page() {
  return (
    <main>
      <section className="page-hero">
        <div className="section-inner">
          <span className="page-badge">Voor Wie</span>
          <h1 className="page-heading">Hoe Elvatix corporate recruiters<br className="hidden sm:block" /> helpt sneller en persoonlijker te werven</h1>
          <p className="page-subtitle">Meer reacties, minder werkdruk, sterker employer brand.</p>
        </div>
      </section>

      <section className="page-section--alt">
        <div className="section-inner px-6">
          <article className="max-w-[720px] mx-auto prose-custom">
            <h2>De rol van een corporate recruiter</h2>
            <p>Als corporate recruiter werf je talent voor één werkgever. Je selecteert niet alleen kandidaten maar bent ook actief betrokken bij employer branding, onboarding en procesoptimalisatie. Iedere InMail die je stuurt is onderdeel van het grotere werkgeversverhaal.</p>
            <p>Elke outreach die je doet draagt bij aan hoe jouw organisatie wordt ervaren. Juist daarom telt je toon, stijl en consistentie in elk contactmoment.</p>

            <h2>De realiteit: veel vacatures, weinig tijd en lage respons</h2>
            <p>Je start je week. LinkedIn Recruiter staat vol met vacatures. Hiring managers verwachten snelheid en kandidaten reageren nauwelijks. Je weet dat personalisatie werkt maar je hebt er de tijd niet voor.</p>
          </article>
        </div>
      </section>

      <section className="page-section">
        <div className="section-inner px-6">
          <h2 className="text-2xl font-extrabold text-text-primary mb-8 text-center">Elvatix in je LinkedIn Recruiter Seat</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-[720px] mx-auto">
            <div className="highlight-card"><h3 className="font-bold text-text-primary mb-2">25 unieke berichten tegelijk</h3><p className="text-sm text-text-muted">In jouw tone-of-voice, aangepast op elk profiel.</p></div>
            <div className="highlight-card"><h3 className="font-bold text-text-primary mb-2">Slimme follow-ups</h3><p className="text-sm text-text-muted">Die voortbouwen op eerdere contactmomenten.</p></div>
            <div className="highlight-card"><h3 className="font-bold text-text-primary mb-2">Geen extra tools</h3><p className="text-sm text-text-muted">Draait binnen je vertrouwde Recruiter Seat.</p></div>
            <div className="highlight-card"><h3 className="font-bold text-text-primary mb-2">Consistente toon</h3><p className="text-sm text-text-muted">Herkenbaar en professioneel voor je hele team.</p></div>
          </div>
        </div>
      </section>

      <section className="page-section--alt">
        <div className="section-inner px-6">
          <div className="max-w-[720px] mx-auto">
            <h2 className="text-2xl font-extrabold text-text-primary mb-8 text-center">Veelgestelde vragen</h2>
            <details className="faq-item">
              <summary>Wat is het verschil tussen corporate en bureau recruiter?</summary>
              <p>Corporate recruiters werken intern voor één werkgever, vaak in vaste dienst. Ze bouwen langdurig aan het employer brand en relaties. Een bureau recruiter werkt extern voor meerdere werkgevers.</p>
            </details>
            <details className="faq-item">
              <summary>Wat zijn de voordelen van Elvatix ten opzichte van standaard InMails?</summary>
              <p>Standaard InMails missen vaak relevantie en persoonlijkheid. Elvatix helpt inhouse recruiters om snel en schaalbaar berichten te sturen die natuurlijk en persoonlijk voelen.</p>
            </details>
            <details className="faq-item">
              <summary>Is Elvatix alleen voor LinkedIn Recruiter Seat-gebruikers?</summary>
              <p>Ja. Elvatix is speciaal ontworpen voor corporate recruiters die werken met de LinkedIn Recruiter Seat.</p>
            </details>
            <details className="faq-item">
              <summary>Kan ik Elvatix gebruiken in mijn eigen tone-of-voice?</summary>
              <p>Absoluut. Tijdens de onboarding geef je voorbeelden en voorkeuren aan. Op basis daarvan leren we jouw schrijfstijl.</p>
            </details>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="section-inner px-6">
          <div className="cta-section rounded-card text-center max-w-[800px] mx-auto">
            <h2 className="text-2xl font-extrabold text-white mb-3">Klaar om efficiënter te werven?</h2>
            <p className="text-white/80 mb-6">Ontdek hoe Elvatix jouw team ondersteunt.</p>
            <Link href="/demo" className="pill-btn bg-white text-elvatix font-bold px-8 py-3">Boek Gratis Demo</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
