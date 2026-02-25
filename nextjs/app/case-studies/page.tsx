import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Case Studies | Elvatix — Succesverhalen van recruiters",
  description: "Bekijk hoe recruiters met Elvatix meer reacties, minder schrijftijd en betere plaatsingen realiseren.",
  alternates: { canonical: "https://elvatix.com/case-studies" },
};

const cases = [
  { company: "Manpower", slug: "/case-study-manpower", image: "/images/case-studies/manpower.png", alt: "Manpower case study", result: "43% responsrate, 260 InMails in 1,7 uur" },
  { company: "Vibe Group", slug: "/case-study-vibegroup", image: "/images/case-studies/vibegroup.png", alt: "Vibe Group case study", result: "4-6 uur tijdswinst per week per recruiter" },
];

export default function CaseStudiesPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="section-inner">
          <span className="page-badge">Case Studies</span>
          <h1 className="page-heading">Succesverhalen van<br className="hidden sm:block" /> recruiters zoals jij</h1>
          <p className="page-subtitle">Meetbare verbeteringen in je sourcingproces. Geen marketingpraatjes.</p>
        </div>
      </section>

      <section className="page-section--alt">
        <div className="section-inner px-6">
          <article className="max-w-[720px] mx-auto prose-custom">
            <p>Of je nu werkt bij een bureau, in-house of in detachering, veel recruiters lopen tegen dezelfde problemen aan. In iedere klantcase op deze pagina zie je hoe Elvatix daarin structureel verandering bracht.</p>

            <h2>Herkenbare problemen vóór Elvatix</h2>
            <ul>
              <li>Lage respons op LinkedIn Recruiter berichten.</li>
              <li>Tijdverlies door handmatig berichten en opvolgen.</li>
              <li>Onpersoonlijke outreach die niet opvalt.</li>
              <li>Geen schaalbare personalisatie of gestructureerde aanpak.</li>
            </ul>

            <h2>Wat verandert er met Elvatix?</h2>
            <ul>
              <li>Meer respons: gepersonaliseerde berichten die opvallen.</li>
              <li>Minder handwerk: automatische maar menselijke follow-ups.</li>
              <li>Meer structuur: campagnes die schaalbaar en herhaalbaar zijn.</li>
              <li>Snellere plaatsingen: dankzij betere timing en opvolging.</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="page-section">
        <div className="section-inner px-6">
          <h2 className="text-2xl font-extrabold text-text-primary mb-8 text-center">Onze case studies</h2>
          <div className="page-grid-2 max-w-[800px] mx-auto">
            {cases.map((c) => (
              <Link key={c.slug} href={c.slug} className="group block highlight-card overflow-hidden no-underline p-0">
                <div className="relative aspect-video bg-surface rounded-t-[var(--radius-card)]">
                  <Image src={c.image} alt={c.alt} fill className="object-contain p-4" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-text-primary group-hover:text-elvatix transition-colors mb-1">{c.company}</h3>
                  <p className="text-sm text-text-muted">{c.result}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section--alt">
        <div className="section-inner px-6">
          <div className="max-w-[720px] mx-auto">
            <h2 className="text-2xl font-extrabold text-text-primary mb-8 text-center">Veelgestelde vragen</h2>
            <details className="faq-item">
              <summary>Wat is een case study recruitment precies?</summary>
              <p>Een praktijkvoorbeeld dat laat zien hoe een recruiter betere resultaten behaalde met een nieuwe werkwijze. Bij Elvatix zijn alle case studies gebaseerd op echte gebruikersdata.</p>
            </details>
            <details className="faq-item">
              <summary>Voor wie zijn deze case studies relevant?</summary>
              <p>Voor recruiters, bureaus, in-house teams en teamleads die werken met LinkedIn Recruiter en meer resultaat willen halen uit hun outreach.</p>
            </details>
            <details className="faq-item">
              <summary>Kan ik mijn eigen case study realiseren?</summary>
              <p>Ja. We helpen je graag met opstarten en doelen stellen. De beste case studies beginnen met een korte kennismaking.</p>
            </details>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="section-inner px-6">
          <div className="cta-section rounded-card text-center max-w-[800px] mx-auto">
            <h2 className="text-2xl font-extrabold text-white mb-3">Jouw succesverhaal begint hier</h2>
            <p className="text-white/80 mb-6">Plan een demo en ontdek wat Elvatix voor jou kan doen.</p>
            <Link href="/demo" className="pill-btn bg-white text-elvatix font-bold px-8 py-3">Plan Gratis Demo</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
