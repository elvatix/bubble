import type { Metadata } from "next";
import Link from "next/link";
import PageSection from "../components/PageSection";

export const metadata: Metadata = {
  openGraph: {
    title: "Case studies recruitment: échte resultaten met Elvatix",
    description: "Bekijk hoe recruiters zoals jij meer resultaat halen uit hun LinkedIn outreach met Elvatix. Van Manpower tot Vibe Group.",
    url: "https://elvatix.com/case-studies",
    type: "website",
  },
  title: "Case studies recruitment: échte resultaten met Elvatix",
  description: "Bekijk hoe recruiters zoals jij meer resultaat halen uit hun LinkedIn outreach met Elvatix. Van Manpower tot Vibe Group.",
  alternates: { canonical: "https://elvatix.com/case-studies" },
};

const cases = [
  {
    title: "Manpower", desc: "Check hier hoe Manpower met Elvatix 65 uur werk terugwon in slechts 1,7 uur", href: "/case-study-manpower",
    icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#9BBB0A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/></svg>,
  },
  {
    title: "Vibe Group", desc: "Check hier hoe wij zorgen voor meer kwalitatieve gesprekken én minder werkdruk bij Vibe Group.", href: "/case-study-vibegroup",
    icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#9BBB0A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  },
];

export const revalidate = 86400; // Cache for 24 hours (11/10 SEO optimization)

export default function CaseStudiesPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="section-inner">
          <span className="page-badge">Case Studies</span>
          <h1 className="page-heading">Case studies recruitment: échte resultaten met Elvatix</h1>
          <p className="page-subtitle">Succesverhalen van recruiters zoals jij.</p>
        </div>
      </section>

      <PageSection>
        <div className="section-inner px-6">
          <div className="page-grid-3" style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
            {cases.map((c) => (
              <Link key={c.href} href={c.href} className="group block highlight-card overflow-hidden no-underline p-0">
                <div className="flex items-center justify-center aspect-video bg-surface rounded-t-[var(--radius-card)]">
                  <div className="w-16 h-16 rounded-2xl bg-elvatix-light flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {c.icon}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-bold text-text-primary group-hover:text-elvatix transition-colors mb-2">{c.title}</h3>
                  <p className="text-sm text-text-muted">{c.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </PageSection>

      <PageSection alt>
        <div className="section-inner px-6">
          <div className="section-heading">
            <span className="section-heading__badge">Succesverhalen</span>
            <h2 className="section-heading__title">Recruitment case studies: succesverhalen van recruiters zoals jij</h2>
          </div>
          <article className="max-w-[720px] mx-auto prose-custom">
            <p>Of je nu werkt bij een bureau, in-house of in detachering - veel recruiters lopen tegen dezelfde problemen aan. Denk aan lage response rates, beperkte personalisatie en handmatige opvolging die veel tijd kost. In iedere klantcase recruitment op deze pagina zie je hoe Elvatix daarin structureel verandering bracht.</p>
            <p>Deze succesverhalen recruitment software laten zien wat er gebeurt als je slimme automatisering combineert met menselijk profielwerk. Geen marketingpraatjes maar meetbare verbeteringen in je sourcingproces.</p>
          </article>
        </div>
      </PageSection>

      <PageSection>
        <div className="section-inner px-6">
          <div className="section-heading">
            <span className="section-heading__badge">Het probleem</span>
            <h2 className="section-heading__title">Herkenbare problemen vóór Elvatix</h2>
          </div>
          <div className="feature-rows">
            <div className="feature-row"><div className="feature-row__icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="22 17 13.5 8.5 8.5 13.5 2 7"/><polyline points="16 17 22 17 22 11"/></svg></div><div className="feature-row__content"><h3 className="feature-row__title">Lage respons op LinkedIn berichten</h3><p className="feature-row__desc">Recruiters zien vaak responsrates van 5-10% op standaard InMails. Dat kost tijd en levert weinig op.</p></div></div>
            <div className="feature-row"><div className="feature-row__icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div><div className="feature-row__content"><h3 className="feature-row__title">Tijdverlies door handmatig berichten</h3><p className="feature-row__desc">Onpersoonlijke outreach die niet opvalt. Geen schaalbare personalisatie of gestructureerde aanpak.</p></div></div>
          </div>
        </div>
      </PageSection>

      <PageSection dark>
        <div className="section-inner px-6">
          <div className="section-heading">
            <span className="section-heading__badge">Resultaat</span>
            <h2 className="section-heading__title">Wat verandert er met Elvatix?</h2>
          </div>
          <div className="benefit-grid">
            <div className="benefit-card"><div className="benefit-card__icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></div><h3 className="benefit-card__title">Meer respons</h3><p className="benefit-card__desc">Gepersonaliseerde berichten die opvallen.</p></div>
            <div className="benefit-card"><div className="benefit-card__icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg></div><h3 className="benefit-card__title">Minder handwerk</h3><p className="benefit-card__desc">Automatische maar menselijke follow-ups.</p></div>
            <div className="benefit-card"><div className="benefit-card__icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg></div><h3 className="benefit-card__title">Meer structuur</h3><p className="benefit-card__desc">Campagnes die schaalbaar en herhaalbaar zijn. Snellere plaatsingen.</p></div>
          </div>
          <p className="text-center text-white/70 text-sm mt-6">Bekijk o.a. <Link href="/case-study-manpower" className="text-green-light underline">Manpower</Link> en <Link href="/case-study-vibegroup" className="text-green-light underline">Vibe Group</Link>.</p>
        </div>
      </PageSection>

      <PageSection>
        <div className="section-inner px-6">
          <div className="max-w-[720px] mx-auto">
            <h2 className="text-2xl font-extrabold text-text-primary mb-8 text-center">Veelgestelde vragen over recruitment case studies</h2>
            <details className="faq-item"><summary>Wat is een case study recruitment precies?</summary><p>Een praktijkvoorbeeld dat laat zien hoe een recruiter betere resultaten behaalde. Bij Elvatix zijn alle case studies gebaseerd op echte gebruikersdata.</p></details>
            <details className="faq-item"><summary>Voor wie zijn deze case studies relevant?</summary><p>Voor recruiters, bureaus, in-house teams en teamleads die werken met LinkedIn Recruiter en meer resultaat willen.</p></details>
            <details className="faq-item"><summary>Kan ik mijn eigen case study met Elvatix realiseren?</summary><p>Ja. We helpen je graag met opstarten en doelen stellen.</p></details>
          </div>
        </div>
      </PageSection>

      <PageSection alt>
        <div className="section-inner px-6">
          <div className="cta-section rounded-card text-center max-w-[800px] mx-auto">
            <h2 className="text-2xl font-extrabold text-white mb-3">Klaar voor jouw succesverhaal?</h2>
            <p className="text-white/80 mb-6">Ontdek hoe Elvatix jouw resultaten kan verbeteren.</p>
            <Link href="/demo" className="pill-btn bg-white text-elvatix font-bold px-8 py-3">Boek Gratis Demo</Link>
          </div>
        </div>
      </PageSection>
    </main>
  );
}
