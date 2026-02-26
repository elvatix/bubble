import JsonLd from "@/components/JsonLd";
import type { Metadata } from "next";
import Link from "next/link";
import PageSection from "../components/PageSection";
import { CorporateIllustration } from "../components/illustrations/PageIllustrations";

export const metadata: Metadata = {
  title: "Hoe Elvatix corporate recruiters helpt sneller en persoonlijker te werven",
  description: "Als corporate recruiter werf je talent voor één werkgever. Elvatix helpt je sneller en persoonlijker te werven direct in LinkedIn Recruiter.",
  alternates: { canonical: "https://elvatix.com/voor-corporate-recruiters" },
};

export default function VoorCorporatePage() {
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
        "name": "Voor Corporate Recruiters",
        "item": "https://elvatix.com/voor-corporate-recruiters"
      }
    ]
  };

  return (
    <main>
      <JsonLd schema={pageSchema} />
      <section className="page-hero">
        <div className="section-inner">
          <span className="page-badge">Voor Wie</span>
          <h1 className="page-heading">Hoe Elvatix corporate recruiters helpt sneller en persoonlijker te werven</h1>
          <p className="page-subtitle">Meer output, hogere kwaliteit en een sterker employer brand.</p>
        </div>
      </section>

      <PageSection><div className="section-inner px-6"><CorporateIllustration /></div></PageSection>

      {/* ── Role ── */}
      <PageSection alt>
        <div className="section-inner px-6">
          <div className="section-heading">
            <span className="section-heading__badge">De Rol</span>
            <h2 className="section-heading__title">De rol van een corporate recruiter: schakel tussen merk en kandidaat</h2>
          </div>
          <div className="feature-rows">
            <div className="feature-row"><div className="feature-row__icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4"/><line x1="8" y1="6" x2="8" y2="6.01"/><line x1="12" y1="6" x2="12" y2="6.01"/><line x1="16" y1="6" x2="16" y2="6.01"/></svg></div><div className="feature-row__content"><h3 className="feature-row__title">Wat doet een corporate recruiter?</h3><p className="feature-row__desc">Als corporate recruiter werf je talent voor één werkgever. Je selecteert kandidaten maar bent ook betrokken bij employer branding, onboarding en procesoptimalisatie. Iedere InMail is onderdeel van het grotere werkgeversverhaal.</p></div></div>
            <div className="feature-row"><div className="feature-row__icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div><div className="feature-row__content"><h3 className="feature-row__title">Iedere boodschap beïnvloedt je employer brand</h3><p className="feature-row__desc">Elke outreach draagt bij aan hoe jouw organisatie wordt ervaren. Generieke berichten maken een slechte indruk. Je bent merkvertegenwoordiger  - toon, stijl en consistentie tellen.</p></div></div>
          </div>
        </div>
      </PageSection>

      {/* ── Problem ── */}
      <PageSection>
        <div className="section-inner px-6">
          <div className="section-heading">
            <span className="section-heading__badge">Het probleem</span>
            <h2 className="section-heading__title">Veel vacatures, weinig tijd en lage respons</h2>
          </div>
          <div className="feature-rows">
            <div className="feature-row"><div className="feature-row__icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div><div className="feature-row__content"><h3 className="feature-row__title">Hoge werkdruk, lage respons</h3><p className="feature-row__desc">LinkedIn Recruiter staat vol met vacatures. Hiring managers verwachten snelheid. Kandidaten reageren nauwelijks. Personalisatie werkt maar je hebt er de tijd niet voor.</p></div></div>
            <div className="feature-row"><div className="feature-row__icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="22 17 13.5 8.5 8.5 13.5 2 7"/><polyline points="16 17 22 17 22 11"/></svg></div><div className="feature-row__content"><h3 className="feature-row__title">Personalisatie sneuvelt bij tijdsdruk</h3><p className="feature-row__desc">Standaardbenaderingen voelen als de enige optie. Dat werkt averechts: lage click-through rates en een employer brand dat niet tot zijn recht komt. Borg het met <Link href="/module-template-instructies">templates &amp; instructies</Link>.</p></div></div>
          </div>
        </div>
      </PageSection>

      {/* ── Solution ── */}
      <PageSection dark>
        <div className="section-inner px-6">
          <div className="section-heading">
            <span className="section-heading__badge">De oplossing</span>
            <h2 className="section-heading__title">Elvatix ondersteunt inhouse recruiters direct in LinkedIn Recruiter Seat</h2>
          </div>
          <div className="step-flow">
            <div className="step-flow__item"><div className="step-flow__num">1</div><div className="step-flow__content"><h3 className="step-flow__title">Automation zonder dat het onnatuurlijk klinkt</h3><p className="step-flow__desc">Geen AI-teksten die robotachtig voelen  - maar uitnodigende, persoonlijke berichten in jouw eigen stijl. Geen extra systemen of omwegen.</p></div></div>
            <div className="step-flow__item"><div className="step-flow__num">2</div><div className="step-flow__content"><h3 className="step-flow__title">25 unieke berichten in jouw tone-of-voice</h3><p className="step-flow__desc">Jij levert de input: functie, doelgroep en schrijfstijl. Onze AI genereert tot 25 gepersonaliseerde InMails tegelijk.</p></div></div>
            <div className="step-flow__item"><div className="step-flow__num">3</div><div className="step-flow__content"><h3 className="step-flow__title">Follow-ups die voortbouwen</h3><p className="step-flow__desc">Op basis van je eerdere bericht genereert de tool een follow-up die logisch aansluit, zelfs na dagen stilte.</p></div></div>
            <div className="step-flow__item"><div className="step-flow__num">4</div><div className="step-flow__content"><h3 className="step-flow__title">Geen extra tool of leercurve</h3><p className="step-flow__desc">Elvatix draait binnen je vertrouwde LinkedIn Recruiter Seat. Alle voordelen zonder je werkwijze om te gooien.</p></div></div>
          </div>
        </div>
      </PageSection>

      {/* ── Benefits ── */}
      <PageSection>
        <div className="section-inner px-6">
          <div className="section-heading">
            <span className="section-heading__badge">Resultaat</span>
            <h2 className="section-heading__title">Tijdwinst, meer reacties en een sterker employer brand</h2>
          </div>
          <div className="benefit-grid">
            <div className="benefit-card"><div className="benefit-card__icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/></svg></div><h3 className="benefit-card__title">Bereik 25 kandidaten persoonlijk</h3><p className="benefit-card__desc">Schrijf één keer de basis, wij maken er 25 unieke berichten van. Schaalbaar werven met behoud van kwaliteit.</p></div>
            <div className="benefit-card"><div className="benefit-card__icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div><h3 className="benefit-card__title">Meer ruimte voor gesprekken</h3><p className="benefit-card__desc">Minder schrijfwerk, meer tijd voor intakegesprekken, stakeholderafstemming en verbinding.</p></div>
            <div className="benefit-card"><div className="benefit-card__icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div><h3 className="benefit-card__title">Consistente toon in het team</h3><p className="benefit-card__desc">Stem toon en boodschap af op elkaar. Herkenbaar, betrouwbaar en professioneel bij elke actie.</p></div>
          </div>
        </div>
      </PageSection>

      {/* ── Quote ── */}
      <PageSection alt>
        <div className="section-inner px-6">
          <div className="quote-block">&ldquo;Met Elvatix hoef je nooit meer te kiezen tussen snelheid en personalisatie&rdquo;</div>
          <p className="text-center text-text-muted text-sm max-w-[600px] mx-auto mt-4">Je wint tijd, verhoogt je responsratio en brengt een consistente employer brand ervaring in je volledige Recruitment Lifecycle.</p>
        </div>
      </PageSection>

      {/* ── FAQ ── */}
      <PageSection>
        <div className="section-inner px-6">
          <div className="max-w-[720px] mx-auto">
            <h2 className="text-2xl font-extrabold text-text-primary mb-8 text-center">Veelgestelde vragen over corporate recruitment en Elvatix</h2>
            <details className="faq-item"><summary>Wat is het verschil tussen corporate en bureau recruiter?</summary><p>Corporate recruiters werken intern voor één werkgever. Een bureau recruiter werkt extern voor meerdere werkgevers.</p></details>
            <details className="faq-item"><summary>Wat zijn de voordelen van Elvatix ten opzichte van standaard InMails?</summary><p>Standaard InMails missen relevantie en persoonlijkheid. Elvatix helpt inhouse recruiters schaalbaar berichten te sturen die natuurlijk voelen.</p></details>
            <details className="faq-item"><summary>Is Elvatix alleen voor LinkedIn Recruiter Seat-gebruikers?</summary><p>Ja. Speciaal ontworpen voor corporate recruiters die werken met LinkedIn Recruiter Seat.</p></details>
            <details className="faq-item"><summary>Kan ik Elvatix gebruiken in mijn eigen tone-of-voice?</summary><p>Absoluut. We leren jouw schrijfstijl. Elk bericht klinkt alsof jij het zelf schreef.</p></details>
          </div>
        </div>
      </PageSection>

      {/* ── CTA ── */}
      <PageSection alt>
        <div className="section-inner px-6">
          <div className="cta-section rounded-card text-center max-w-[800px] mx-auto">
            <h2 className="text-2xl font-extrabold text-white mb-3">Klaar voor sneller en persoonlijker werven?</h2>
            <p className="text-white/80 mb-6">Elvatix is er voor iedere corporate of inhouse recruiter.</p>
            <Link href="/demo" className="pill-btn bg-white text-elvatix font-bold px-8 py-3">Boek Gratis Demo</Link>
          </div>
        </div>
      </PageSection>
    </main>
  );
}
