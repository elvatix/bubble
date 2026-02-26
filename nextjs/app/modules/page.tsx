import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Alle modules | Elvatix",
  description: "Wat is LinkedIn outreach? Leer hoe je als recruiter of consultant kandidaten persoonlijk en schaalbaar kunt benaderen via LinkedIn, met hulp van Elvatix.",
  alternates: { canonical: "https://elvatix.com/modules" },
};

const modules = [
  { title: "Connectieverzoeken", desc: "Persoonlijke verzoeken op schaal", href: "/module-connectieverzoeken", image: "/images/modules/connectieverzoeken.png", alt: "Elvatix connectieverzoeken module" },
  { title: "Custom GPT's", desc: "AI-assistenten voor elk scenario", href: "/module-custom-gpt", image: "/images/modules/custom-gpt.png", alt: "Elvatix custom GPT module" },
  { title: "InMails", desc: "Meer reacties, minder schrijftijd", href: "/module-inmails", image: "/images/modules/inmails.png", alt: "Elvatix InMails module" },
  { title: "Reminders", desc: "Geen kandidaat meer vergeten", href: "/module-reminders", image: "/images/modules/reminders.png", alt: "Elvatix reminders module" },
  { title: "Template Instructies", desc: "Jouw stijl, automatisch toegepast", href: "/module-template-instructies", image: "/images/modules/templates.png", alt: "Elvatix template instructies module" },
  { title: "Recruitment/Sales Switch", desc: "Twee doelen, één tool", href: "/module-recruitment-sales-switch", image: "/images/modules/sales-switch.png", alt: "Elvatix recruitment sales switch module" },
];

export default function ModulesPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="section-inner">
          <span className="page-badge">Modules</span>
          <h1 className="page-heading">LinkedIn outreach: zo werf je<br className="hidden sm:block" /> persoonlijk én op schaal</h1>
          <p className="page-subtitle">Elvatix bestaat uit zes modules. Elke module is gericht op een specifiek onderdeel van je LinkedIn outreach.</p>
        </div>
      </section>

      <section className="page-section">
        <div className="section-inner px-6">
          <div className="page-grid-3">
            {modules.map((mod) => (
              <Link key={mod.href} href={mod.href} className="group block highlight-card overflow-hidden no-underline p-0">
                <div className="relative aspect-video bg-surface rounded-t-[var(--radius-card)]">
                  <Image src={mod.image} alt={mod.alt} fill className="object-contain p-4" />
                </div>
                <div className="p-5">
                  <h3 className="text-base font-bold text-text-primary group-hover:text-elvatix transition-colors mb-1">{mod.title}</h3>
                  <p className="text-sm text-text-muted">{mod.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section--alt">
        <div className="section-inner px-6">
          <article className="max-w-[720px] mx-auto prose-custom">
            <h2>Wat is LinkedIn outreach?</h2>
            <p>LinkedIn outreach is het actief benaderen van potentiële kandidaten via functies als connectieverzoeken, InMails en vervolgberichten. In plaats van te wachten op sollicitaties neem je zelf het initiatief om contact te leggen met professionals die bij je vacature of doelgroep passen.</p>
            <p>Deze vorm van kandidaatbenadering op LinkedIn is essentieel om latent werkzoekenden te bereiken: mensen die niet actief reageren op vacatures maar wel openstaan voor kansen. Zo vergroot je je bereik in de markt.</p>

            <h2>Waarom recruiters LinkedIn outreach nodig hebben</h2>
            <p>De recruitmentmarkt is veranderd. Reacties op vacatures lopen terug en de beste kandidaten bevinden zich zelden op job boards. Een proactieve LinkedIn outreach strategie maakt het mogelijk om gericht contact te maken met deze doelgroep: rechtstreeks en persoonlijk. Bekijk ook onze <Link href="/case-studies">case studies</Link>.</p>
            <p>Dankzij gepersonaliseerde outreach op LinkedIn kun je direct inspelen op het profiel en de situatie van een kandidaat. Je maakt zo het verschil tussen opgemerkt worden of volledig genegeerd worden in een overvolle inbox.</p>

            <h2>De grootste uitdagingen van LinkedIn outreach</h2>
            <h3>1. Gepersonaliseerde LinkedIn berichten kosten veel tijd</h3>
            <p>Een persoonlijk bericht werkt beter dan standaardtekst. Maar wie voor elke LinkedIn connectieverzoek of InMail een unieke boodschap schrijft, loopt al snel vast op tijd. Schaalbaar outreach werkt dus alleen als je het slimmer aanpakt.</p>
            <h3>2. Massabenaderen voelt al snel als spam</h3>
            <p>Bij LinkedIn cold outreach wordt snel de fout gemaakt om generieke berichten te sturen. Goede outreach combineert schaal met personalisatie. Gebruik je eigen <Link href="/module-template-instructies">templates &amp; instructies</Link> om dat te borgen.</p>
            <h3>3. Opvolgen wordt te vaak vergeten</h3>
            <p>Veel kansen worden gemist doordat recruiters geen follow-up uitsturen. Vaak door tijdgebrek of simpelweg vergeten. Terwijl gesprekken juist ontstaan nadat je weer op de radar komt. Een succesvolle LinkedIn outreach strategie bevat dus altijd gestructureerde opvolging.</p>

            <h2>Schaalbaar en persoonlijk: LinkedIn outreach met impact</h2>
            <p>Goed uitgevoerde outreach voelt persoonlijk, zelfs als het efficiënt en deels geautomatiseerd is. Slimme AI-systemen en <Link href="/module-template-instructies">templates &amp; instructies</Link> zorgen ervoor dat je op schaal gepersonaliseerd blijft communiceren. Zo behoud je de juiste toon zonder uren te besteden per kandidaat.</p>
            <p>Met de juiste aanpak krijg je meer reacties, verloopt het proces overzichtelijker en bespaart je tijd zonder dat de kwaliteit van je berichten daalt.</p>

            <h2>Elvatix: jouw tool voor schaalbare LinkedIn outreach</h2>
            <p>Elvatix ondersteunt recruiters met alles wat ze nodig hebben voor effectieve, persoonlijke en schaalbare outreach via LinkedIn. Wij werken volledig in LinkedIn Recruiter, dus je hoeft geen nieuwe tools aan te leren of te installeren. Wil je het zien in jouw omgeving? <Link href="/demo">Plan een demo</Link>.</p>
          </article>
        </div>
      </section>

      <section className="page-section">
        <div className="section-inner px-6">
          <article className="max-w-[720px] mx-auto prose-custom">
            <h2>Connectieverzoek-module: snelle, relevante uitnodigingen</h2>
            <p>Gebruik de <Link href="/module-connectieverzoeken">Connectieverzoek-module</Link> om kandidaten op LinkedIn te benaderen met doelgerichte berichten. Elvatix genereert uitnodigingen op basis van profielinformatie en jouw persoonlijke stijl. Zo maak je de eerste stap direct relevant en menselijk.</p>

            <h2>InMail-module: outreach berichten in jouw toon</h2>
            <p>Gebruik de <Link href="/module-inmails">InMail-module</Link> om berichten te sturen die klinken alsof jij ze hebt geschreven. De Elvatix InMail-module helpt je helder en authentiek formuleren zonder terug te vallen op generieke openingszinnen.</p>

            <h2>Reminders-module: geautomatiseerde follow-ups</h2>
            <p>Gebruik de <Link href="/module-reminders">Reminders-module</Link> om automatisch bij te houden wie je wel of niet hebt opgevolgd. Je ontvangt gepersonaliseerde suggesties op basis van eerdere interactie zodat je geen kansen meer mist.</p>

            <h2>Templates en instructies: sneller met behoud van controle</h2>
            <p>Gebruik de <Link href="/module-template-instructies">Templates &amp; instructies</Link> om berichten te structureren en stijlconsistent te blijven. Test varianten met onze <Link href="/module-custom-gpt">Custom GPT&apos;s</Link> voor optimale resultaten.</p>

            <h2>Switch makkelijk tussen recruitment en sales</h2>
            <p>Gebruik de <Link href="/module-recruitment-sales-switch">Recruitment/Sales switch</Link> om eenvoudig te wisselen van rol. De tool past je berichtenstrategie aan per doelgroep zodat je relevant blijft voor zowel kandidaten als klanten.</p>

            <h2>LinkedIn outreach binnen jouw bestaande workflow</h2>
            <p>Elvatix werkt rechtstreeks in LinkedIn Recruiter Seat, Recruiter Lite of Sales Navigator. Geen extra tabbladen, tools of import-export. Alles wat je nodig hebt voor moderne outreach recruitment zit geïntegreerd in je bestaande LinkedIn-omgeving.</p>
            <p>Start met <Link href="/module-inmails">InMails</Link> of <Link href="/module-connectieverzoeken">connectieverzoeken</Link>, en voeg <Link href="/module-reminders">reminders</Link> toe voor opvolging.</p>
          </article>
        </div>
      </section>

      <section className="page-section--alt">
        <div className="section-inner px-6">
          <div className="max-w-[720px] mx-auto">
            <h2 className="text-2xl font-extrabold text-text-primary mb-8 text-center">Veelgestelde vragen over LinkedIn outreach</h2>
            <details className="faq-item">
              <summary>Wat is het verschil tussen sourcing en outreach op LinkedIn?</summary>
              <p>Sourcing is het zoeken en selecteren van kandidaten. Outreach is het actief contact leggen met die kandidaten via LinkedIn berichten zoals connectieverzoeken en InMails.</p>
            </details>
            <details className="faq-item">
              <summary>Kun je LinkedIn outreach automatiseren zonder aan persoonlijkheid in te boeten?</summary>
              <p>Ja. Met Elvatix kun je gepersonaliseerde berichten sturen op schaal. Door slimme templates behoud je je toon terwijl AI je werk versnelt.</p>
            </details>
            <details className="faq-item">
              <summary>Hoe vaak moet je opvolgen na een eerste bericht?</summary>
              <p>Gemiddeld zijn 1 tot 2 follow-ups gebruikelijk met enkele dagen ertussen. Elvatix helpt je met getimede en inhoudelijk relevante reminders.</p>
            </details>
            <details className="faq-item">
              <summary>Waarmee helpt Elvatix precies?</summary>
              <p>Elvatix ondersteunt het hele outreachproces binnen LinkedIn Recruiter: connectieverzoeken, InMails, follow-up en templates. Alles voor schaalbare, menselijke communicatie met kandidaten.</p>
            </details>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="section-inner px-6">
          <div className="cta-section rounded-card text-center max-w-[800px] mx-auto">
            <h2 className="text-2xl font-extrabold text-white mb-3">Klaar om je outreach te transformeren?</h2>
            <p className="text-white/80 mb-6">Ontdek hoe Elvatix jouw workflow versnelt.</p>
            <Link href="/demo" className="pill-btn bg-white text-elvatix font-bold px-8 py-3">Boek Gratis Demo</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
