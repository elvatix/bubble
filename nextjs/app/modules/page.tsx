import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "LinkedIn outreach: persoonlijk en schaalbaar werven",
  description: "Wat is LinkedIn outreach? Leer hoe je als recruiter of consultant kandidaten persoonlijk en schaalbaar kunt benaderen via LinkedIn, met hulp van Elvatix.",
  alternates: { canonical: "https://elvatix.com/modules" },
};

const modules = [
  { title: "Connectieverzoeken", href: "/module-connectieverzoeken", image: "/images/modules/connectieverzoeken.png", alt: "Elvatix connectieverzoeken module" },
  { title: "Custom GPT\u2019s", href: "/module-custom-gpt", image: "/images/modules/custom-gpt.png", alt: "Elvatix custom GPT module" },
  { title: "InMails", href: "/module-inmails", image: "/images/modules/inmails.png", alt: "Elvatix InMails module" },
  { title: "Reminders", href: "/module-reminders", image: "/images/modules/reminders.png", alt: "Elvatix reminders module" },
  { title: "Template Instructies", href: "/module-template-instructies", image: "/images/modules/templates.png", alt: "Elvatix template instructies module" },
  { title: "Recruitment Sales Switch", href: "/module-recruitment-sales-switch", image: "/images/modules/sales-switch.png", alt: "Elvatix recruitment sales switch module" },
];

export default function ModulesPage() {
  return (
    <main className="pt-32 pb-20">
      <div className="section-inner px-6">
        {/* Hero */}
        <div className="text-center mb-16">
          <span className="page-badge">Modules</span>
          <h1 className="page-heading">LinkedIn outreach: zo werf je persoonlijk \u00e9n op schaal</h1>
        </div>

        {/* Module Grid */}
        <div className="page-grid-3 mb-20">
          {modules.map((mod) => (
            <Link key={mod.href} href={mod.href} className="group block rounded-card overflow-hidden border border-border hover:border-elvatix transition-all duration-300 no-underline hover:shadow-[var(--shadow-card)]">
              <div className="relative aspect-video bg-surface">
                <Image src={mod.image} alt={mod.alt} fill className="object-contain p-4" />
              </div>
              <div className="p-5">
                <h3 className="text-base font-bold text-text-primary group-hover:text-elvatix transition-colors">{mod.title}</h3>
              </div>
            </Link>
          ))}
        </div>

        {/* Body Content */}
        <article className="max-w-[720px] mx-auto prose-custom">
          <h2>Wat is LinkedIn outreach?</h2>
          <p>LinkedIn outreach is het actief benaderen van potenti\u00eble kandidaten via functies als <Link href="/module-connectieverzoeken">connectieverzoeken</Link>, <Link href="/module-inmails">InMails</Link> en vervolgberichten. In plaats van te wachten op sollicitaties neem je zelf het initiatief om contact te leggen met professionals die bij je vacature of doelgroep passen.</p>
          <p>Deze vorm van kandidaatbenadering op <Link href="/integraties-linkedin">LinkedIn</Link> is essentieel om latent werkzoekenden te bereiken: mensen die niet actief reageren op vacatures maar wel openstaan voor kansen. Zo vergroot je je bereik in de markt.</p>

          <h2>Waarom recruiters LinkedIn outreach nodig hebben</h2>
          <p>De recruitmentmarkt is veranderd. Reacties op vacatures lopen terug en de beste kandidaten bevinden zich zelden op job boards. Een proactieve LinkedIn outreach strategie maakt het mogelijk om gericht contact te maken met deze doelgroep: rechtstreeks en persoonlijk. Bekijk ook onze <Link href="/case-studies">case studies</Link>.</p>
          <p>Dankzij gepersonaliseerde outreach op LinkedIn kun je direct inspelen op het profiel en de situatie van een kandidaat. Je maakt zo het verschil tussen opgemerkt worden of volledig genegeerd worden in een overvolle inbox.</p>

          <h2>De grootste uitdagingen van LinkedIn outreach</h2>
          <h3>1. Gepersonaliseerde LinkedIn berichten kosten veel tijd</h3>
          <p>Een persoonlijk bericht werkt beter dan standaardtekst. Maar wie voor elke LinkedIn <Link href="/module-connectieverzoeken">connectieverzoek</Link> of <Link href="/module-inmails">InMail</Link> een unieke boodschap schrijft, loopt al snel vast op tijd.</p>

          <h3>2. Massabenaderen voelt al snel als spam</h3>
          <p>Bij LinkedIn cold outreach wordt snel de fout gemaakt om generieke berichten te sturen. Goede outreach combineert schaal met personalisatie.</p>

          <h3>3. Opvolgen wordt te vaak vergeten</h3>
          <p>Veel kansen worden gemist doordat recruiters geen <Link href="/module-reminders">follow-up</Link> uitsturen. Een succesvolle LinkedIn outreach strategie bevat dus altijd gestructureerde opvolging.</p>

          <h2>Schaalbaar en persoonlijk: LinkedIn outreach met impact</h2>
          <p>Goed uitgevoerde outreach voelt persoonlijk, zelfs als het effici\u00ebnt en deels geautomatiseerd is. Slimme AI-systemen en templates zorgen ervoor dat je op schaal gepersonaliseerd blijft communiceren.</p>

          <h2>Elvatix: jouw tool voor schaalbare LinkedIn outreach</h2>
          <p>Elvatix ondersteunt recruiters met alles wat ze nodig hebben voor effectieve, persoonlijke en schaalbare outreach via LinkedIn. Wij werken volledig in LinkedIn Recruiter, dus je hoeft geen nieuwe tools aan te leren of te installeren.</p>

          <h3>Connectieverzoek-module</h3>
          <p>Gebruik de Connectieverzoek-module om kandidaten op LinkedIn te benaderen met doelgerichte berichten op basis van profielinformatie en jouw persoonlijke stijl.</p>

          <h3>InMail-module</h3>
          <p>Gebruik de InMail-module om berichten te sturen die klinken alsof jij ze hebt geschreven, zonder terug te vallen op generieke openingszinnen.</p>

          <h3>Reminders-module</h3>
          <p>Gebruik de Reminders-module om automatisch bij te houden wie je wel of niet hebt opgevolgd met gepersonaliseerde suggesties.</p>

          <h3>Templates en instructies</h3>
          <p>Gebruik Templates & instructies om berichten te structureren en stijlconsistent te blijven.</p>

          <h3>Switch makkelijk tussen recruitment en sales</h3>
          <p>Gebruik de Recruitment/Sales switch om eenvoudig te wisselen van rol en berichtenstrategie per doelgroep.</p>

          <h3>LinkedIn outreach binnen jouw bestaande workflow</h3>
          <p>Elvatix werkt rechtstreeks in LinkedIn Recruiter Seat, Recruiter Lite of Sales Navigator. Geen extra tabbladen, tools of import-export.</p>

          {/* FAQ */}
          <h2>Veelgestelde vragen over LinkedIn outreach</h2>
          <details className="faq-item">
            <summary>Wat is het verschil tussen sourcing en outreach op LinkedIn?</summary>
            <p>Sourcing is het zoeken en selecteren van kandidaten. Outreach is het actief contact leggen met die kandidaten via LinkedIn berichten.</p>
          </details>
          <details className="faq-item">
            <summary>Kun je LinkedIn outreach automatiseren zonder aan persoonlijkheid in te boeten?</summary>
            <p>Ja. Met Elvatix kun je gepersonaliseerde berichten sturen op schaal. Door slimme templates behoud je je toon terwijl AI je werk versnelt.</p>
          </details>
          <details className="faq-item">
            <summary>Hoe vaak moet je opvolgen na een eerste bericht?</summary>
            <p>Gemiddeld zijn 1 tot 2 follow-ups gebruikelijk met enkele dagen ertussen.</p>
          </details>
        </article>

        {/* CTA */}
        <div className="cta-section rounded-card text-center mt-16">
          <h2 className="text-2xl font-extrabold text-white mb-3">Klaar om je outreach te transformeren?</h2>
          <p className="text-white/80 mb-6">Ontdek hoe Elvatix jouw workflow versnelt.</p>
          <Link href="/demo" className="pill-btn bg-white text-elvatix font-bold px-8 py-3">Boek Gratis Demo</Link>
        </div>
      </div>
    </main>
  );
}
