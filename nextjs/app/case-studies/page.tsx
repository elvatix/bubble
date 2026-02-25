import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Case study recruitment: échte resultaten met Elvatix",
  description: "Bekijk recruitment case studies van echte klanten. Ontdek hoe Elvatix zorgt voor meer reacties, betere follow-ups en snellere plaatsingen.",
  alternates: { canonical: "https://elvatix.com/case-studies" },
};

const caseStudies = [
  {
    title: "Manpower",
    href: "/case-study-manpower",
    image: "/images/case-studies/manpower.png",
    alt: "Case study Manpower met Elvatix",
    text: "Check hier hoe Manpower met Elvatix 65 uur werk terugwon in slechts 1,7 uur",
  },
  {
    title: "Vibe Group",
    href: "/case-study-vibegroup",
    image: "/images/case-studies/vibegroup.png",
    alt: "Case study Vibe Group met Elvatix",
    text: "Check hier hoe wij zorgen voor meer kwalitatieve gesprekken én minder werkdruk bij Vibe Group.",
  },
];

export default function CaseStudiesPage() {
  return (
    <main className="pt-32 pb-20">
      <div className="section-inner px-6">
        <div className="text-center mb-16">
          <span className="page-badge">Case Studies</span>
          <h1 className="page-heading">Case studies recruitment: échte resultaten met Elvatix</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {caseStudies.map((cs) => (
            <Link key={cs.href} href={cs.href} className="group block rounded-card overflow-hidden border border-border hover:border-elvatix transition-all duration-300 no-underline hover:shadow-[var(--shadow-card)]">
              <div className="relative aspect-video bg-surface">
                <Image src={cs.image} alt={cs.alt} fill className="object-contain p-4" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-text-primary group-hover:text-elvatix transition-colors mb-2">{cs.title}</h3>
                <p className="text-sm text-text-secondary m-0">{cs.text}</p>
              </div>
            </Link>
          ))}
        </div>

        <article className="max-w-[720px] mx-auto prose-custom">
          <h2>Recruitment case studies: succesverhalen van recruiters zoals jij</h2>
          <p>Of je nu werkt bij een bureau, in-house of in detachering, veel recruiters lopen tegen dezelfde problemen aan. Denk aan lage response rates, beperkte personalisatie en handmatige opvolging die veel tijd kost. In iedere klantcase op deze pagina zie je hoe Elvatix daarin structureel verandering bracht.</p>
          <p>Deze succesverhalen laten zien wat er gebeurt als je slimme automatisering combineert met menselijk profielwerk. Geen marketingpraatjes maar meetbare verbeteringen in je sourcingproces.</p>

          <h2>Voorbeelden case study recruitment: van inzicht naar impact</h2>
          <p>Onze gebruikers variëren van kleine teams tot grote organisaties maar de resultaten zijn vergelijkbaar: meer reacties in minder tijd. Bekijk o.a. <Link href="/case-study-manpower">Manpower</Link> en <Link href="/case-study-vibegroup">Vibe Group</Link>.</p>

          <h2>Herkenbare problemen vóór Elvatix</h2>
          <p>Alle recruitment case studies op deze pagina begonnen bij vergelijkbare uitdagingen:</p>
          <ul>
            <li>Lage respons op LinkedIn Recruiter berichten</li>
            <li>Tijdverlies door handmatig berichten en opvolgen</li>
            <li>Onpersoonlijke outreach die niet opvalt</li>
            <li>Geen schaalbare personalisatie of gestructureerde aanpak</li>
          </ul>

          <h2>Wat verandert er met Elvatix?</h2>
          <p>Elvatix helpt recruitmentteams om meer resultaat te halen uit hun sourcing. Dankzij AI-ondersteunde personalisatie en automatische opvolging krijg je meer grip, meer reacties en meer geplaatste kandidaten.</p>
          <ul>
            <li><strong>Meer respons:</strong> gepersonaliseerde berichten die opvallen</li>
            <li><strong>Minder handwerk:</strong> automatische maar menselijke follow-ups</li>
            <li><strong>Meer structuur:</strong> campagnes die schaalbaar en herhaalbaar zijn</li>
            <li><strong>Snellere plaatsingen:</strong> dankzij betere timing en opvolging</li>
          </ul>

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

        <div className="cta-section rounded-card text-center mt-16 max-w-[720px] mx-auto">
          <h2 className="text-2xl font-extrabold text-white mb-3">Klaar om jouw eigen succesverhaal te schrijven?</h2>
          <p className="text-white/80 mb-6">Plan een gratis demo en ontdek wat Elvatix voor jou kan doen.</p>
          <Link href="/demo" className="pill-btn bg-white text-elvatix font-bold px-8 py-3">Boek Gratis Demo</Link>
        </div>
      </div>
    </main>
  );
}
