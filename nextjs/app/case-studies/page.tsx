import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
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

      <section className="page-section">
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
      </section>

      <section className="page-section--alt">
        <div className="section-inner px-6">
          <article className="max-w-[720px] mx-auto prose-custom">
            <h2>Recruitment case studies: succesverhalen van recruiters zoals jij</h2>
            <p>Of je nu werkt bij een bureau, in-house of in detachering — veel recruiters lopen tegen dezelfde problemen aan. Denk aan lage response rates, beperkte personalisatie en handmatige opvolging die veel tijd kost. In iedere klantcase recruitment op deze pagina zie je hoe Elvatix daarin structureel verandering bracht.</p>
            <p>Deze succesverhalen recruitment software laten zien wat er gebeurt als je slimme automatisering combineert met menselijk profielwerk. Geen marketingpraatjes maar meetbare verbeteringen in je sourcingproces.</p>

            <h2>Voorbeelden case study recruitment: van inzicht naar impact</h2>
            <p>Onze gebruikers variëren van kleine teams tot grote organisaties maar de resultaten zijn vergelijkbaar: meer reacties in minder tijd.</p>
            <p>Bekijk o.a. <Link href="/case-study-manpower">Manpower</Link> en <Link href="/case-study-vibegroup">Vibe Group</Link>.</p>

            <h2>Herkenbare problemen vóór Elvatix</h2>
            <p>Alle recruitment case studies op deze pagina begonnen bij vergelijkbare uitdagingen:</p>
            <ul>
              <li>Lage respons op LinkedIn Recruiter berichten</li>
              <li>Tijdverlies door handmatig berichten en opvolgen</li>
              <li>Onpersoonlijke outreach die niet opvalt</li>
              <li>Geen schaalbare personalisatie of gestructureerde aanpak</li>
            </ul>
            <p>Herken jij jezelf hierin? Dan sta je precies waar onze klanten ooit stonden voor hun succesverhaal begon.</p>

            <h2>Wat verandert er met Elvatix?</h2>
            <p>Elvatix helpt recruitmentteams om meer resultaat te halen uit hun sourcing. Dankzij AI-ondersteunde personalisatie en automatische opvolging krijg je meer grip, meer reacties en meer geplaatste kandidaten.</p>
            <ul>
              <li><strong>Meer respons:</strong> gepersonaliseerde berichten die opvallen</li>
              <li><strong>Minder handwerk:</strong> automatische maar menselijke follow-ups</li>
              <li><strong>Meer structuur:</strong> campagnes die schaalbaar en herhaalbaar zijn</li>
              <li><strong>Snellere plaatsingen:</strong> dankzij betere timing en opvolging</li>
            </ul>
            <p>Zie hoe teams dit doen in onze case studies, of <Link href="/demo">plan direct een demo</Link>.</p>
          </article>
        </div>
      </section>

      <section className="page-section">
        <div className="section-inner px-6">
          <div className="max-w-[720px] mx-auto">
            <h2 className="text-2xl font-extrabold text-text-primary mb-8 text-center">Veelgestelde vragen over recruitment case studies</h2>
            <details className="faq-item">
              <summary>Wat is een case study recruitment precies?</summary>
              <p>Een case study recruitment is een praktijkvoorbeeld dat laat zien hoe een recruiter of team betere resultaten behaalde door een nieuwe werkwijze of tool. Bij Elvatix zijn alle case studies gebaseerd op echte gebruikersdata.</p>
            </details>
            <details className="faq-item">
              <summary>Voor wie zijn deze recruitment case studies relevant?</summary>
              <p>Voor recruiters, bureaus, in-house teams, recruitment managers en teamleads die werken met LinkedIn Recruiter en meer resultaat willen halen uit hun outreach en opvolging.</p>
            </details>
            <details className="faq-item">
              <summary>Kan ik mijn eigen case study met Elvatix realiseren?</summary>
              <p>Ja. We helpen je graag met opstarten en doelen stellen. De beste recruitment case studies beginnen met een korte kennismaking.</p>
            </details>
          </div>
        </div>
      </section>

      <section className="page-section--alt">
        <div className="section-inner px-6">
          <div className="cta-section rounded-card text-center max-w-[800px] mx-auto">
            <h2 className="text-2xl font-extrabold text-white mb-3">Klaar voor jouw succesverhaal?</h2>
            <p className="text-white/80 mb-6">Ontdek hoe Elvatix jouw resultaten kan verbeteren.</p>
            <Link href="/demo" className="pill-btn bg-white text-elvatix font-bold px-8 py-3">Boek Gratis Demo</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
