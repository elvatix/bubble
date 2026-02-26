import JsonLd from "@/components/JsonLd";
import type { Metadata } from "next";
import Link from "next/link";
import PageSection from "../components/PageSection";
import { SalesSwitchIllustration } from "../components/illustrations/PageIllustrations";

export const metadata: Metadata = {
  openGraph: {
    title: "LinkedIn leadgeneratie voor recruitment en sales in één omgeving",
    description: "Wissel moeiteloos tussen recruitment en sales outreach. Eén omgeving, twee doelen  - volledig binnen LinkedIn Recruiter.",
    url: "https://elvatix.com/module-recruitment-sales-switch",
    type: "website",
  },
  title: "LinkedIn leadgeneratie voor recruitment en sales in één omgeving",
  description: "Wissel moeiteloos tussen recruitment en sales outreach. Eén omgeving, twee doelen  - volledig binnen LinkedIn Recruiter.",
  alternates: { canonical: "https://elvatix.com/module-recruitment-sales-switch" },
};

export const revalidate = 86400; // Cache for 24 hours (11/10 SEO optimization)

export default function SalesSwitchPage() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "LinkedIn leadgeneratie voor recruitment en sales in één omgeving",
    "operatingSystem": "WebBrowser",
    "applicationCategory": "BusinessApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "EUR"
    }
  };

  return (
    <main>
      <JsonLd schema={pageSchema} />
      <section className="page-hero">
        <div className="section-inner">
          <span className="page-badge">Module</span>
          <h1 className="page-heading">LinkedIn leadgeneratie voor recruitment en sales in één omgeving</h1>
          <p className="page-subtitle">Eén omgeving, twee doelen  - wissel moeiteloos tussen kandidaten en prospects.</p>
        </div>
      </section>

      <PageSection><div className="section-inner px-6"><SalesSwitchIllustration /></div></PageSection>

      {/* ── Context ── */}
      <PageSection alt>
        <div className="section-inner px-6">
          <div className="section-heading">
            <h2 className="section-heading__title">Waarom LinkedIn de plek is voor leads én kandidaten</h2>
            <p className="section-heading__subtitle">Beide groepen hebben hetzelfde doel: relevante gesprekken starten. Goede LinkedIn leadgeneratie draait om het juiste bericht op het juiste moment.</p>
          </div>
          <div className="feature-rows">
            <div className="feature-row"><div className="feature-row__icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div><div className="feature-row__content"><h3 className="feature-row__title">Manuele personalisatie is te arbeidsintensief</h3><p className="feature-row__desc">Elke InMail handmatig personaliseren per doelgroep kost veel te veel tijd. Eindeloos herschrijven voor kandidaten én prospects is onhoudbaar.</p></div></div>
            <div className="feature-row"><div className="feature-row__icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2"/></svg></div><div className="feature-row__content"><h3 className="feature-row__title">AI-tools maken geen onderscheid</h3><p className="feature-row__desc">Standaard AI-tools klinken generiek en maken geen onderscheid tussen sales en recruitment toon. Follow-ups worden vergeten.</p></div></div>
          </div>
        </div>
      </PageSection>

      {/* ── Solution + step flow ── */}
      <PageSection dark>
        <div className="section-inner px-6">
          <div className="section-heading">
            <span className="section-heading__badge">Hoe het werkt</span>
            <h2 className="section-heading__title">Slimme LinkedIn leadgeneratie met Elvatix</h2>
            <p className="section-heading__subtitle">Wissel binnen één systeem tussen recruitment en sales leadgeneratie.</p>
          </div>
          <div className="step-flow">
            <div className="step-flow__item"><div className="step-flow__num">1</div><div className="step-flow__content"><h3 className="step-flow__title">Kies het scenario: recruitment of sales</h3><p className="step-flow__desc">Met één klik wissel je tussen kandidaten en prospects. De AI past toon en inhoud automatisch aan je doelgroep aan.</p></div></div>
            <div className="step-flow__item"><div className="step-flow__num">2</div><div className="step-flow__content"><h3 className="step-flow__title">Laat berichten genereren</h3><p className="step-flow__desc">Maximaal 25 gepersonaliseerde berichten, elk uniek en in jouw stijl. <Link href="/module-connectieverzoeken" className="text-green-light underline">Connectieverzoeken</Link> of InMails  - je kiest zelf.</p></div></div>
            <div className="step-flow__item"><div className="step-flow__num">3</div><div className="step-flow__content"><h3 className="step-flow__title">Controleer en pas aan</h3><p className="step-flow__desc">Jij bepaalt wat er uitgaat. Geen automatische verzending zonder akkoord. Volledige controle.</p></div></div>
            <div className="step-flow__item"><div className="step-flow__num">4</div><div className="step-flow__content"><h3 className="step-flow__title">Verzend slim + plan follow-ups</h3><p className="step-flow__desc">Berichten worden verspreid verzonden binnen LinkedIn-limieten. Plan automatisch een follow-up indien nodig.</p></div></div>
          </div>
        </div>
      </PageSection>

      {/* ── For who ── */}
      <PageSection>
        <div className="section-inner px-6">
          <div className="section-heading">
            <span className="section-heading__badge">Voor wie</span>
            <h2 className="section-heading__title">Voor wie is deze LinkedIn leadgeneratie tool bedoeld?</h2>
          </div>
          <div className="benefit-grid">
            <div className="benefit-card"><div className="benefit-card__icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg></div><h3 className="benefit-card__title">Recruiters</h3><p className="benefit-card__desc">Die ook new business moeten aanjagen naast sourcing.</p></div>
            <div className="benefit-card"><div className="benefit-card__icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="22 17 13.5 8.5 8.5 13.5 2 7"/><polyline points="16 17 22 17 22 11"/></svg></div><h3 className="benefit-card__title">Salesprofessionals</h3><p className="benefit-card__desc">Die prospects slimmer willen benaderen op LinkedIn.</p></div>
            <div className="benefit-card"><div className="benefit-card__icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4"/><line x1="8" y1="6" x2="8" y2="6.01"/><line x1="12" y1="6" x2="12" y2="6.01"/><line x1="16" y1="6" x2="16" y2="6.01"/></svg></div><h3 className="benefit-card__title">Bureaus & Consultants</h3><p className="benefit-card__desc">Die AI willen gebruiken zonder persoonlijke kwaliteit te verliezen.</p></div>
          </div>
        </div>
      </PageSection>

      {/* ── Benefits ── */}
      <PageSection alt>
        <div className="section-inner px-6">
          <div className="section-heading">
            <h2 className="section-heading__title">Wat levert deze aanpak jou op?</h2>
          </div>
          <div className="feature-rows">
            <div className="feature-row"><div className="feature-row__icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg></div><div className="feature-row__content"><h3 className="feature-row__title">Eén omgeving, twee doelen</h3><p className="feature-row__desc">Klanten en kandidaten vanuit dezelfde interface. Consistente tone-of-voice in alle berichten.</p></div></div>
            <div className="feature-row"><div className="feature-row__icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/></svg></div><div className="feature-row__content"><h3 className="feature-row__title">Schaalbaar zonder generiek te worden</h3><p className="feature-row__desc">Tot 25 unieke berichten per campagne. Meer focus op gesprekken, minder repetitief werk.</p></div></div>
            <div className="feature-row"><div className="feature-row__icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg></div><div className="feature-row__content"><h3 className="feature-row__title">Unieke Recruitment/Sales switch</h3><p className="feature-row__desc">Pas je aanpak moeiteloos aan je doelgroep aan. Integratie met LinkedIn Recruiter Seat  - geen externe tools nodig.</p></div></div>
          </div>
        </div>
      </PageSection>

      {/* ── Sales Navigator Tips SEO ── */}
      <PageSection>
        <div className="section-inner px-6">
          <article className="max-w-[720px] mx-auto prose-custom">
            <h2>Praktische LinkedIn Sales Navigator tips</h2>
            <p>Gebruik je LinkedIn Sales Navigator? Combineer het dan slim met Elvatix om nog gerichter leads te genereren. Tips:</p>
            <ul>
              <li>Gebruik geavanceerde filters op functietitel, branche en senioriteit.</li>
              <li>Zet lead lists op per sector of regio.</li>
              <li>Verwerk notities en tags zodat je opvolging persoonlijk blijft.</li>
            </ul>
            <p>Deze aanpak vormt de basis voor een sterke LinkedIn leadgeneratie strategie. Meer structuur, minder misgelopen kansen.</p>
          </article>
        </div>
      </PageSection>

      {/* ── FAQ ── */}
      <PageSection alt>
        <div className="section-inner px-6">
          <div className="max-w-[720px] mx-auto">
            <h2 className="text-2xl font-extrabold text-text-primary mb-8 text-center">Veelgestelde vragen over LinkedIn leadgeneratie</h2>
            <details className="faq-item"><summary>Wat is LinkedIn leadgeneratie precies</summary><p>LinkedIn leadgeneratie verwijst naar het proces waarin je via LinkedIn nieuwe klanten of kandidaten identificeert en persoonlijk benadert.</p></details>
            <details className="faq-item"><summary>Is Elvatix geschikt voor zowel recruiters als salesprofessionals</summary><p>Ja. Met de Recruitment/Sales switch is Elvatix ontworpen voor beide doelgroepen. Meer info: <Link href="/voor-wie">Voor wie</Link>.</p></details>
            <details className="faq-item"><summary>Kan ik mijn eigen tone of voice gebruiken met Elvatix</summary><p>Absoluut. De AI leert van jouw stijl en genereert berichten die klinken alsof jij ze hebt geschreven.</p></details>
            <details className="faq-item"><summary>Werkt dit samen met LinkedIn Sales Navigator</summary><p>Ja. Werkt samen met je LinkedIn omgeving en ondersteunt gericht zoeken.</p></details>
            <details className="faq-item"><summary>Hoe veilig is het gebruik van Elvatix binnen LinkedIn</summary><p>Elvatix verzendt berichten binnen LinkedIn&apos;s limieten en richtlijnen. Volledig vanuit jouw LinkedIn Recruiter Seat.</p></details>
          </div>
        </div>
      </PageSection>

      {/* ── CTA ── */}
      <PageSection>
        <div className="section-inner px-6">
          <div className="cta-section rounded-card text-center max-w-[800px] mx-auto">
            <h2 className="text-2xl font-extrabold text-white mb-3">Recruitment én sales vanuit één tool</h2>
            <p className="text-white/80 mb-6">Ontdek hoe de Recruitment/Sales switch jouw workflow versnelt.</p>
            <Link href="/demo" className="pill-btn bg-white text-elvatix font-bold px-8 py-3">Boek Gratis Demo</Link>
          </div>
        </div>
      </PageSection>
    </main>
  );
}
