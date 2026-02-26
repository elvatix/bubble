import type { Metadata } from "next";
import Link from "next/link";
import LeadMagnet from "@/components/sections/LeadMagnet";
import PageSection from "@/app/components/PageSection";

export const metadata: Metadata = {
  title: "Probeer Elvatix gratis",
  description:
    "Genereer een gepersonaliseerd LinkedIn-bericht in 30 seconden. Gratis, zonder account. Ervaar wat Elvatix doet.",
  openGraph: {
    title: "Probeer Elvatix gratis",
    description:
      "Genereer een gepersonaliseerd LinkedIn-bericht in 30 seconden. Gratis, zonder account.",
    url: "/probeer",
  },
};

export default function ProbeerPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="page-hero">
        <div className="section-inner">
          <span className="page-badge">Gratis uitproberen</span>
          <h1 className="page-heading">
            Jij kent de kandidaat.{" "}
            <span className="gradient-text">Wij schrijven het bericht.</span>
          </h1>
          <p className="page-subtitle">
            Vul in wie je wilt benaderen en wie jij bent. Wij lezen het profiel en schrijven direct een persoonlijke InMail. Geen account nodig.
          </p>
        </div>
      </section>

      {/* ── Generator ── */}
      <PageSection>
        <div className="section-inner px-6">
          <div className="max-w-[800px] mx-auto">
            <div className="rounded-card border border-elvatix/20 shadow-[0_4px_24px_rgba(155,187,10,0.08)] overflow-visible">
              <LeadMagnet />
            </div>
          </div>
        </div>
      </PageSection>

      {/* ── Stats ── */}
      <PageSection>
        <div className="section-inner px-6">
          <div className="stat-bar">
            <div className="stat-bar__item">
              <span className="stat-bar__value">30 sec</span>
              <span className="stat-bar__label">per bericht</span>
            </div>
            <div className="stat-bar__item">
              <span className="stat-bar__value">95%</span>
              <span className="stat-bar__label">tijdsbesparing</span>
            </div>
            <div className="stat-bar__item">
              <span className="stat-bar__value">100%</span>
              <span className="stat-bar__label">persoonlijk</span>
            </div>
          </div>
        </div>
      </PageSection>

      {/* ── Dit was het voorproefje ── */}
      <PageSection dark>
        <div className="section-inner px-6">
          <div className="section-heading">
            <span className="section-heading__badge">Dit was het voorproefje</span>
            <h2 className="section-heading__title">
              Dit deed je net voor één kandidaat. <span className="gradient-text">Nu voor je hele pool.</span>
            </h2>
            <p className="section-heading__subtitle">
              Elvatix draait volledig binnen Recruiter Seat. Jij selecteert je kandidaten, en wij genereren voor iedereen een messcherp, persoonlijk bericht.
            </p>
          </div>

          {/* Benefit Grid */}
          <div className="benefit-grid">
            <div className="benefit-grid__item">
              <div className="benefit-grid__icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <h3 className="benefit-grid__title">Hele pool tegelijk</h3>
              <p className="benefit-grid__desc">Alle kandidaten in je shortlist tegelijk benaderen met uniek persoonlijke berichten.</p>
            </div>
            <div className="benefit-grid__item">
              <div className="benefit-grid__icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
              </div>
              <h3 className="benefit-grid__title">Jouw templates</h3>
              <p className="benefit-grid__desc">Berichten op basis van jouw eigen tone-of-voice en bewezen templates.</p>
            </div>
            <div className="benefit-grid__item">
              <div className="benefit-grid__icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              </div>
              <h3 className="benefit-grid__title">Native in LinkedIn</h3>
              <p className="benefit-grid__desc">Volledig geintegreerd in Recruiter Seat. Geen extra tools of tabbladen.</p>
            </div>
            <div className="benefit-grid__item">
              <div className="benefit-grid__icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
              </div>
              <h3 className="benefit-grid__title">Team analytics</h3>
              <p className="benefit-grid__desc">Rapportages en inzichten over je outreach performance per recruiter.</p>
            </div>
            <div className="benefit-grid__item">
              <div className="benefit-grid__icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h3 className="benefit-grid__title">GDPR-proof</h3>
              <p className="benefit-grid__desc">Volledig AVG/GDPR compliant. Gegevens worden niet opgeslagen buiten jouw sessie.</p>
            </div>
            <div className="benefit-grid__item">
              <div className="benefit-grid__icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <h3 className="benefit-grid__title">Follow-up sequences</h3>
              <p className="benefit-grid__desc">Automatische follow-ups die op het juiste moment worden verstuurd.</p>
            </div>
          </div>
        </div>
      </PageSection>

      {/* ── CTA ── */}
      <PageSection>
        <div className="section-inner px-6">
          <div className="cta-section rounded-2xl text-center text-white">
            <h2 className="text-[clamp(24px,3.5vw,40px)] font-black mb-4">
              Klaar voor de volledige ervaring?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-[480px] mx-auto">
              Plan een gratis demo en ontdek wat Elvatix voor jouw team kan betekenen.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/demo" className="pill-btn pill-btn-elvatix bg-white !text-[#2D3B00] hover:bg-white/90">
                Plan een demo
              </Link>
              <Link href="/modules" className="pill-btn pill-btn-outline !border-white/40 !text-white hover:!bg-white/10">
                Bekijk alle modules
              </Link>
            </div>
          </div>
        </div>
      </PageSection>
    </>
  );
}
