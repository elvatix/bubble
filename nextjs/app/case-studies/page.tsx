import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Case Studies | Elvatix — Succesverhalen van recruiters",
  description: "Bekijk hoe recruiters met Elvatix meer reacties, minder schrijftijd en betere plaatsingen realiseren. Echte recruitment case studies.",
  alternates: { canonical: "https://elvatix.com/case-studies" },
};

const cases = [
  {
    company: "Manpower",
    slug: "/case-study-manpower",
    image: "/images/cases/manpower.png",
    alt: "Manpower case study met Elvatix",
    result: "43% responsrate, 260 InMails in 1,7 uur",
  },
  {
    company: "Vibe Group",
    slug: "/case-study-vibegroup",
    image: "/images/cases/vibegroup.png",
    alt: "Vibe Group case study met Elvatix",
    result: "4-6 uur tijdswinst per week per recruiter",
  },
];

export default function CaseStudiesPage() {
  return (
    <main className="pt-32 pb-20">
      <div className="section-inner px-6">
        {/* Hero */}
        <div className="text-center mb-12">
          <span className="page-badge">Case Studies</span>
          <h1 className="page-heading">Recruitment case studies: succesverhalen van recruiters zoals jij</h1>
        </div>

        {/* Body */}
        <article className="max-w-[720px] mx-auto prose-custom mb-16">
          <p>Of je nu werkt bij een bureau, in-house of in detachering, veel recruiters lopen tegen dezelfde problemen aan. Denk aan lage response rates, beperkte personalisatie en handmatige opvolging die veel tijd kost. In iedere klantcase op deze pagina zie je hoe Elvatix daarin structureel verandering bracht.</p>
          <p>Deze succesverhalen laten zien wat er gebeurt als je slimme automatisering combineert met menselijk profielwerk. Geen marketingpraatjes maar meetbare verbeteringen in je sourcingproces.</p>

          <h2>Voorbeelden case study recruitment: van inzicht naar impact</h2>
          <p>Onze gebruikers variëren van kleine teams tot grote organisaties maar de resultaten zijn vergelijkbaar: meer reacties in minder tijd. Bekijk onze case studies van <Link href="/case-study-manpower">Manpower</Link> en <Link href="/case-study-vibegroup">Vibe Group</Link>.</p>

          <h2>Herkenbare problemen vóór Elvatix</h2>
          <p>Alle recruitment case studies op deze pagina begonnen bij vergelijkbare uitdagingen:</p>
          <ul>
            <li>Lage respons op LinkedIn Recruiter berichten.</li>
            <li>Tijdverlies door handmatig berichten en opvolgen.</li>
            <li>Onpersoonlijke outreach die niet opvalt.</li>
            <li>Geen schaalbare personalisatie of gestructureerde aanpak.</li>
          </ul>

          <h2>Wat verandert er met Elvatix?</h2>
          <p>Elvatix helpt recruitmentteams om meer resultaat te halen uit hun sourcing. Dankzij AI-ondersteunde personalisatie en automatische opvolging krijg je meer grip, meer reacties en meer geplaatste kandidaten.</p>
          <ul>
            <li>Meer respons: gepersonaliseerde berichten die opvallen.</li>
            <li>Minder handwerk: automatische maar menselijke follow-ups.</li>
            <li>Meer structuur: campagnes die schaalbaar en herhaalbaar zijn.</li>
            <li>Snellere plaatsingen: dankzij betere timing en opvolging.</li>
          </ul>
        </article>

        {/* Case Cards */}
        <div className="page-grid-2 mb-16">
          {cases.map((c) => (
            <Link key={c.slug} href={c.slug} className="group block rounded-card overflow-hidden border border-border hover:border-elvatix transition-all duration-300 no-underline hover:shadow-[var(--shadow-card)]">
              <div className="relative aspect-video bg-surface">
                <Image src={c.image} alt={c.alt} fill className="object-contain p-4" />
              </div>
              <div className="p-5">
                <h3 className="text-base font-bold text-text-primary group-hover:text-elvatix transition-colors">{c.company}</h3>
                <p className="text-sm text-text-muted mt-1">{c.result}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* FAQ */}
        <article className="max-w-[720px] mx-auto prose-custom">
          <h2>Veelgestelde vragen over recruitment case studies</h2>
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
        </article>

        {/* CTA */}
        <div className="cta-section rounded-card text-center mt-16 max-w-[720px] mx-auto">
          <h2 className="text-2xl font-extrabold text-white mb-3">Jouw succesverhaal begint hier</h2>
          <p className="text-white/80 mb-6">Plan een demo en ontdek wat Elvatix voor jou kan doen.</p>
          <Link href="/demo" className="pill-btn bg-white text-elvatix font-bold px-8 py-3">Plan Gratis Demo</Link>
        </div>
      </div>
    </main>
  );
}
