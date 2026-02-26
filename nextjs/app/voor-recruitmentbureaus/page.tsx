import JsonLd from "@/components/JsonLd";
import type { Metadata } from "next";
import Link from "next/link";
import PageSection from "../components/PageSection";
import { BureausIllustration } from "../components/illustrations/PageIllustrations";

export const metadata: Metadata = {
  openGraph: {
    title: "Recruitment automation voor bureaus",
    description: "Recruitment automation die menselijk klinkt. Schaal je outreach via LinkedIn zonder kwaliteit te verliezen.",
    url: "https://elvatix.com/voor-recruitmentbureaus",
    type: "website",
  },
  title: "Recruitment automation voor bureaus",
  description: "Recruitment automation die menselijk klinkt. Schaal je outreach via LinkedIn zonder kwaliteit te verliezen.",
  alternates: { canonical: "https://elvatix.com/voor-recruitmentbureaus" },
};

export const revalidate = 86400; // Cache for 24 hours (11/10 SEO optimization)

export default function VoorRecruitmentbureausPage() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Voor Wie",
        "item": "https://elvatix.com/voor-wie"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Voor Recruitmentbureaus",
        "item": "https://elvatix.com/voor-recruitmentbureaus"
      }
    ]
  };

  return (
    <main>
      <JsonLd schema={pageSchema} />
      <section className="page-hero">
        <div className="section-inner">
          <span className="page-badge">Voor Wie</span>
          <h1 className="page-heading">Recruitment automation voor bureaus die willen opschalen zonder kwaliteit te verliezen</h1>
          <p className="page-subtitle">Efficiëntere outreach via LinkedIn, zonder dat elk bericht voelt als een copypaste.</p>
        </div>
      </section>

      <PageSection><div className="section-inner px-6"><BureausIllustration /></div></PageSection>

      <PageSection alt>
        <div className="section-inner px-6">
          <div className="stat-bar">
            <div className="stat-bar__item"><div className="stat-bar__value">95%</div><div className="stat-bar__label">tijdsbesparing</div></div>
            <div className="stat-bar__item"><div className="stat-bar__value">25</div><div className="stat-bar__label">berichten tegelijk</div></div>
            <div className="stat-bar__item"><div className="stat-bar__value">2×</div><div className="stat-bar__label">meer respons</div></div>
          </div>
        </div>
      </PageSection>

      {/* ── Wat is recruitment automation ── */}
      <PageSection>
        <div className="section-inner px-6">
          <div className="section-heading">
            <span className="section-heading__badge">Uitleg</span>
            <h2 className="section-heading__title">Wat is recruitment automation?</h2>
            <p className="section-heading__subtitle">Het automatiseren van terugkerende taken binnen je wervingsproces. Je versnelt outreach en leadgeneratie via LinkedIn, met behoud van persoonlijkheid.</p>
          </div>
          <div className="feature-rows">
            <div className="feature-row"><div className="feature-row__icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 17 13.5 8.5 8.5 13.5 2 7"/><polyline points="16 17 22 17 22 11"/></svg></div><div className="feature-row__content"><h3 className="feature-row__title">Lage responspercentages kosten je tijd</h3><p className="feature-row__desc">Veel bureaus zien responsrates van 5% tot 10% op hun InMails. Handmatig personaliseren is niet te doen op schaal. Standaardberichten worden genegeerd. Borg je toon met <Link href="/module-template-instructies">templates &amp; instructies</Link>.</p></div></div>
            <div className="feature-row"><div className="feature-row__icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg></div><div className="feature-row__content"><h3 className="feature-row__title">Waarom standaard AI tools niet werken</h3><p className="feature-row__desc">Generieke AI-tools missen context. Ze herkennen geen branchespecifieke termen. Berichten komen vlak of onbegrijpelijk over. Test varianten met <Link href="/module-custom-gpt">Custom GPT&apos;s</Link>.</p></div></div>
            <div className="feature-row"><div className="feature-row__icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></div><div className="feature-row__content"><h3 className="feature-row__title">Wat als automatisering wél menselijk klinkt?</h3><p className="feature-row__desc">Met Elvatix verstuur je geautomatiseerde berichten die klinken alsof jij ze zelf hebt geschreven. Onze AI is getraind op Nederlandse vacaturedata, profielen en messaging.</p></div></div>
          </div>
        </div>
      </PageSection>

      {/* ── How ── */}
      <PageSection dark>
        <div className="section-inner px-6">
          <div className="section-heading">
            <span className="section-heading__badge">Hoe het werkt</span>
            <h2 className="section-heading__title">Recruitment automation binnen je LinkedIn Recruiter Seat</h2>
            <p className="section-heading__subtitle">Geen extra tools, geen leercurve. Selecteer maximaal 25 profielen en genereer met één klik persoonlijke InMails of connectieverzoeken.</p>
          </div>
          <div className="benefit-grid">
            <div className="benefit-card"><div className="benefit-card__icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg></div><h3 className="benefit-card__title">Recruitment & sales in één flow</h3><p className="benefit-card__desc">Schakel moeiteloos tussen sourcing en prospects via de <Link href="/module-recruitment-sales-switch">Recruitment/Sales switch</Link>.</p></div>
            <div className="benefit-card"><div className="benefit-card__icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></div><h3 className="benefit-card__title">Automatische follow-ups</h3><p className="benefit-card__desc">Follow-ups die aansluiten op je vorige bericht. Geen herhalingen, wel relevantie. Verhoog je bereik zonder extra tijd.</p></div>
            <div className="benefit-card"><div className="benefit-card__icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg></div><h3 className="benefit-card__title">Jij blijft in control</h3><p className="benefit-card__desc">Jij keurt alles goed. Geen bericht gaat de deur uit zonder jouw akkoord.</p></div>
          </div>
        </div>
      </PageSection>

      {/* ── Results ── */}
      <PageSection>
        <div className="section-inner px-6">
          <div className="section-heading">
            <span className="section-heading__badge">Resultaat</span>
            <h2 className="section-heading__title">Wat levert recruitment automation concreet op?</h2>
          </div>
          <div className="feature-rows">
            <div className="feature-row"><div className="feature-row__icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></div><div className="feature-row__content"><h3 className="feature-row__title">Meer intakes in minder tijd</h3><p className="feature-row__desc">Outreach op schaal die wel blijft voelen als maatwerk. Met gepersonaliseerde <Link href="/module-inmails">InMails</Link>.</p></div></div>
            <div className="feature-row"><div className="feature-row__icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg></div><div className="feature-row__content"><h3 className="feature-row__title">Efficiënter team</h3><p className="feature-row__desc">Minder tijd kwijt aan handmatig schrijfwerk met hogere output. Snellere leadgeneratie via de <Link href="/module-recruitment-sales-switch">Recruitment/Sales switch</Link>.</p></div></div>
            <div className="feature-row"><div className="feature-row__icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4"/></svg></div><div className="feature-row__content"><h3 className="feature-row__title">Bureaus groeien sneller met Elvatix</h3><p className="feature-row__desc">Bureaus die Elvatix gebruiken, groeien zonder extra koppen. AI afgestemd op de Nederlandse markt. Bekijk resultaten in onze <Link href="/case-studies">case studies</Link>.</p></div></div>
          </div>
        </div>
      </PageSection>

      {/* ── FAQ ── */}
      <PageSection alt>
        <div className="section-inner px-6">
          <div className="max-w-[720px] mx-auto">
            <h2 className="text-2xl font-extrabold text-text-primary mb-8 text-center">Veelgestelde vragen over recruitment automation</h2>
            <details className="faq-item"><summary>Wat is het verschil tussen recruitment automation en een generieke AI-tool?</summary><p>Recruitment automation met Elvatix is volledig afgestemd op de Nederlandse markt en begrijpt functietitels, branches en tone-of-voice.</p></details>
            <details className="faq-item"><summary>Werkt recruitment automation ook voor sales op LinkedIn?</summary><p>Ja. Elvatix herkent of je iemand werft of een salesprospect benadert en past de toon automatisch aan.</p></details>
            <details className="faq-item"><summary>Waar draait Elvatix op?</summary><p>Volledig binnen je eigen LinkedIn Recruiter Seat. Geen extra tools of dashboards nodig.</p></details>
            <details className="faq-item"><summary>Kan ik een demo plannen met mijn eigen vacatures?</summary><p>Ja. We laten je live zien hoe Elvatix werkt op jouw profielen, teksten en campagnes.</p></details>
          </div>
        </div>
      </PageSection>

      {/* ── CTA ── */}
      <PageSection>
        <div className="section-inner px-6">
          <div className="cta-section rounded-card text-center max-w-[800px] mx-auto">
            <h2 className="text-2xl font-extrabold text-white mb-3">Klaar om op te schalen?</h2>
            <p className="text-white/80 mb-6">Ontdek hoe Elvatix jouw bureau helpt groeien.</p>
            <Link href="/demo" className="pill-btn bg-white text-elvatix font-bold px-8 py-3">Plan Gratis Demo</Link>
          </div>
        </div>
      </PageSection>
    </main>
  );
}
