import JsonLd from "@/components/JsonLd";
import type { Metadata } from "next";
import Link from "next/link";
import PageSection from "../components/PageSection";
import { IntegratiesIllustration } from "../components/illustrations/PageIllustrations";

export const metadata: Metadata = {
  openGraph: {
    title: "LinkedIn plugin voor Recruiter Seat: werk sneller in je vertrouwde omgeving",
    description: "Installeer de Elvatix Chrome-extensie en werk direct slimmer in LinkedIn Recruiter. Geen extra tools, geen leercurve.",
    url: "https://elvatix.com/integraties-linkedin",
    type: "website",
  },
  title: "LinkedIn plugin voor Recruiter Seat: werk sneller in je vertrouwde omgeving",
  description: "Installeer de Elvatix Chrome-extensie en werk direct slimmer in LinkedIn Recruiter. Geen extra tools, geen leercurve.",
  alternates: { canonical: "https://elvatix.com/integraties-linkedin" },
};

export const revalidate = 86400; // Cache for 24 hours (11/10 SEO optimization)

export default function IntegratiesLinkedInPage() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "LinkedIn plugin voor Recruiter Seat: werk sneller in je vertrouwde omgeving",
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
          <span className="page-badge">Integraties</span>
          <h1 className="page-heading">LinkedIn plugin voor Recruiter Seat: werk sneller in je vertrouwde omgeving.</h1>
          <p className="page-subtitle">Een Chrome-extensie, geen los platform.</p>
        </div>
      </section>

      <PageSection><div className="section-inner px-6"><IntegratiesIllustration /></div></PageSection>

      {/* ── Why no separate tools ── */}
      <PageSection alt>
        <div className="section-inner px-6">
          <div className="section-heading">
            <span className="section-heading__badge">Simpel</span>
            <h2 className="section-heading__title">Waarom recruiters geen losse tools willen</h2>
            <p className="section-heading__subtitle">Het laatste wat je wilt is schakelen tussen tabbladen, systemen of dashboards. Daarom is de LinkedIn plugin ontworpen als lichtgewicht Chrome-extensie.</p>
          </div>
          <div className="stat-bar">
            <div className="stat-bar__item"><div className="stat-bar__value">&lt;10 min</div><div className="stat-bar__label">installatie</div></div>
            <div className="stat-bar__item"><div className="stat-bar__value">0</div><div className="stat-bar__label">extra tools nodig</div></div>
            <div className="stat-bar__item"><div className="stat-bar__value">100%</div><div className="stat-bar__label">binnen LinkedIn</div></div>
          </div>
        </div>
      </PageSection>

      {/* ── Install (step flow) ── */}
      <PageSection dark>
        <div className="section-inner px-6">
          <div className="section-heading">
            <span className="section-heading__badge">Installatie</span>
            <h2 className="section-heading__title">LinkedIn plugin installatie in minder dan 10 minuten</h2>
          </div>
          <div className="step-flow">
            <div className="step-flow__item"><div className="step-flow__num">1</div><div className="step-flow__content"><h3 className="step-flow__title">Installeer via Chrome Web Store</h3><p className="step-flow__desc">Met één klik installeer je Elvatix. Binnen enkele minuten heb je toegang tot slimme functies zoals <Link href="/module-inmails" className="text-green-light underline">InMails</Link> en <Link href="/module-connectieverzoeken" className="text-green-light underline">connectieverzoeken</Link> genereren.</p></div></div>
            <div className="step-flow__item"><div className="step-flow__num">2</div><div className="step-flow__content"><h3 className="step-flow__title">Koppel je LinkedIn Recruiter</h3><p className="step-flow__desc">Plug and play. Na het inloggen verschijnt de plugin direct in je Recruiter Seat. Geen technische kennis nodig. Optimaliseer met <Link href="/module-template-instructies" className="text-green-light underline">templates &amp; instructies</Link> of <Link href="/module-custom-gpt" className="text-green-light underline">Custom GPT&apos;s</Link>.</p></div></div>
            <div className="step-flow__item"><div className="step-flow__num">3</div><div className="step-flow__content"><h3 className="step-flow__title">Start direct met personaliseren</h3><p className="step-flow__desc">Gebruik templates, personaliseer berichten en verstuur vanuit je vertrouwde scherm. De plugin past zich aan jouw workflow aan.</p></div></div>
          </div>
        </div>
      </PageSection>

      {/* ── Security ── */}
      <PageSection>
        <div className="section-inner px-6">
          <div className="section-heading">
            <span className="section-heading__badge">Veiligheid</span>
            <h2 className="section-heading__title">Geen IT-hindernissen of risico&apos;s</h2>
          </div>
          <div className="benefit-grid">
            <div className="benefit-card"><div className="benefit-card__icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg></div><h3 className="benefit-card__title">Binnen LinkedIn&apos;s regels</h3><p className="benefit-card__desc">100% binnen de gedragsregels, limieten en architectuur van LinkedIn. Geen workarounds of verboden methodes.</p></div>
            <div className="benefit-card"><div className="benefit-card__icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></div><h3 className="benefit-card__title">Geen data-opslag</h3><p className="benefit-card__desc">Geen gevoelige gegevens buiten je account. Alles binnen je bestaande omgeving zonder compliance-risico&apos;s.</p></div>
            <div className="benefit-card"><div className="benefit-card__icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div><h3 className="benefit-card__title">Zelf installeren  - ook met teams</h3><p className="benefit-card__desc">Iedere recruiter kan Elvatix zelfstandig installeren. Geen IT-project nodig. Handig voor agencies en bureaus.</p></div>
          </div>
        </div>
      </PageSection>

      {/* ── Why this plugin ── */}
      <PageSection alt>
        <div className="section-inner px-6">
          <div className="section-heading">
            <h2 className="section-heading__title">Waarom deze LinkedIn plugin het verschil maakt</h2>
          </div>
          <div className="feature-rows">
            <div className="feature-row"><div className="feature-row__icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg></div><div className="feature-row__content"><h3 className="feature-row__title">Sneller, niet moeilijker</h3><p className="feature-row__desc">Elvatix laat recruiters slimmer werken in minder tijd  - zonder verandering van systemen.</p></div></div>
            <div className="feature-row"><div className="feature-row__icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg></div><div className="feature-row__content"><h3 className="feature-row__title">Echte koppeling, geen overlay</h3><p className="feature-row__desc">Deze Chrome-extensie is een echte LinkedIn integratie. Voelt vertrouwd en functioneert beter dan workaround-tools.</p></div></div>
            <div className="feature-row"><div className="feature-row__icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></div><div className="feature-row__content"><h3 className="feature-row__title">Templates, reminders en opvolgflows</h3><p className="feature-row__desc">Personaliseer outreach, stel <Link href="/module-reminders">reminders</Link> in en volg gesprekken op. Start met <Link href="/module-inmails">InMails</Link> of <Link href="/module-connectieverzoeken">connectieverzoeken</Link>.</p></div></div>
          </div>
        </div>
      </PageSection>

      {/* ── CTA ── */}
      <PageSection>
        <div className="section-inner px-6">
          <div className="cta-section rounded-card text-center max-w-[800px] mx-auto">
            <h2 className="text-2xl font-extrabold text-white mb-3">Klaar om slimmer te werken?</h2>
            <p className="text-white/80 mb-6">Installeer Elvatix en ervaar het verschil.</p>
            <Link href="/demo" className="pill-btn bg-white text-elvatix font-bold px-8 py-3">Boek Gratis Demo</Link>
          </div>
        </div>
      </PageSection>
    </main>
  );
}
