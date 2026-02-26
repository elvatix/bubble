import JsonLd from "@/components/JsonLd";
import type { Metadata } from "next";
import Link from "next/link";
import PageSection from "../components/PageSection";
import ModulesIllustration from "../components/illustrations/ModulesIllustration";

export const metadata: Metadata = {
  openGraph: {
    title: "Overzicht van alle AI-recruitment modules",
    description: "Wat is LinkedIn outreach? Leer hoe je als recruiter of consultant kandidaten persoonlijk en schaalbaar kunt benaderen via LinkedIn, met hulp van Elvatix.",
    url: "https://elvatix.com/modules",
    type: "website",
  },
  title: "Overzicht van alle AI-recruitment modules",
  description: "Wat is LinkedIn outreach? Leer hoe je als recruiter of consultant kandidaten persoonlijk en schaalbaar kunt benaderen via LinkedIn, met hulp van Elvatix.",
  alternates: { canonical: "https://elvatix.com/modules" },
};

const modules = [
  {
    title: "Connectieverzoeken", desc: "Persoonlijke verzoeken op schaal", href: "/module-connectieverzoeken",
    icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#9BBB0A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/></svg>,
  },
  {
    title: "Custom GPT\u2019s", desc: "AI-assistenten voor elk scenario", href: "/module-custom-gpt",
    icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#9BBB0A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a4 4 0 0 1 4 4v1a3 3 0 0 1 2 5.2V14a4 4 0 0 1-3 3.87V20a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2.13A4 4 0 0 1 6 14v-1.8A3 3 0 0 1 8 7V6a4 4 0 0 1 4-4z"/></svg>,
  },
  {
    title: "InMails", desc: "Meer reacties, minder schrijftijd", href: "/module-inmails",
    icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#9BBB0A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
  },
  {
    title: "Reminders", desc: "Geen kandidaat meer vergeten", href: "/module-reminders",
    icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#9BBB0A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  },
  {
    title: "Template Instructies", desc: "Jouw stijl, automatisch toegepast", href: "/module-template-instructies",
    icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#9BBB0A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="12" y2="17"/></svg>,
  },
  {
    title: "Recruitment/Sales Switch", desc: "Twee doelen, één tool", href: "/module-recruitment-sales-switch",
    icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#9BBB0A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>,
  },
];

export const revalidate = 86400; // Cache for 24 hours (11/10 SEO optimization)

export default function ModulesPage() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Alle modules",
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
          <span className="page-badge">Modules</span>
          <h1 className="page-heading">LinkedIn outreach: zo werf je<br className="hidden sm:block" /> persoonlijk én op schaal</h1>
          <p className="page-subtitle">Elvatix bestaat uit zes modules. Elke module is gericht op een specifiek onderdeel van je LinkedIn outreach.</p>
          <ModulesIllustration />
        </div>
      </section>

      <PageSection>
        <div className="section-inner px-6">
          <div className="page-grid-3">
            {modules.map((mod) => (
              <Link key={mod.href} href={mod.href} className="group block highlight-card overflow-hidden no-underline p-0">
                <div className="flex items-center justify-center aspect-video bg-surface rounded-t-[var(--radius-card)]">
                  <div className="w-16 h-16 rounded-2xl bg-elvatix-light flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {mod.icon}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-bold text-text-primary group-hover:text-elvatix transition-colors mb-1">{mod.title}</h3>
                  <p className="text-sm text-text-muted">{mod.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </PageSection>

      <PageSection alt>
        <div className="section-inner px-6">
          <div className="section-heading">
            <span className="section-heading__badge">Uitleg</span>
            <h2 className="section-heading__title">Wat is LinkedIn outreach?</h2>
            <p className="section-heading__subtitle">Het actief benaderen van potentiële kandidaten via connectieverzoeken, InMails en vervolgberichten.</p>
          </div>
          <article className="max-w-[720px] mx-auto prose-custom">
            <p>In plaats van te wachten op sollicitaties neem je zelf het initiatief om contact te leggen met professionals die bij je vacature of doelgroep passen.</p>
            <p>Deze vorm van kandidaatbenadering op LinkedIn is essentieel om latent werkzoekenden te bereiken: mensen die niet actief reageren op vacatures maar wel openstaan voor kansen. Zo vergroot je je bereik in de markt.</p>
          </article>
        </div>
      </PageSection>

      <PageSection>
        <div className="section-inner px-6">
          <div className="section-heading">
            <span className="section-heading__badge">Waarom</span>
            <h2 className="section-heading__title">Waarom recruiters LinkedIn outreach nodig hebben</h2>
          </div>
          <div className="feature-rows">
            <div className="feature-row"><div className="feature-row__icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="22 17 13.5 8.5 8.5 13.5 2 7"/><polyline points="16 17 22 17 22 11"/></svg></div><div className="feature-row__content"><h3 className="feature-row__title">Gepersonaliseerde berichten kosten veel tijd</h3><p className="feature-row__desc">Een persoonlijk bericht werkt beter. Maar wie voor elke connectieverzoek een unieke boodschap schrijft, loopt vast op tijd. Schaalbaar outreach werkt alleen als je het slimmer aanpakt.</p></div></div>
            <div className="feature-row"><div className="feature-row__icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg></div><div className="feature-row__content"><h3 className="feature-row__title">Massabenaderen voelt als spam</h3><p className="feature-row__desc">Bij LinkedIn cold outreach worden snel generieke berichten gestuurd. Goede outreach combineert schaal met personalisatie. Gebruik je eigen <Link href="/module-template-instructies">templates &amp; instructies</Link> om dat te borgen.</p></div></div>
            <div className="feature-row"><div className="feature-row__icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div><div className="feature-row__content"><h3 className="feature-row__title">Opvolgen wordt te vaak vergeten</h3><p className="feature-row__desc">Veel kansen worden gemist doordat recruiters geen follow-up uitsturen. Een succesvolle strategie bevat altijd gestructureerde opvolging. Bekijk onze <Link href="/case-studies">case studies</Link>.</p></div></div>
          </div>
        </div>
      </PageSection>

      <PageSection dark>
        <div className="section-inner px-6">
          <div className="section-heading">
            <span className="section-heading__badge">Modules</span>
            <h2 className="section-heading__title">Alle zes modules in één overzicht</h2>
          </div>
          <div className="feature-rows">
            <div className="feature-row"><div className="feature-row__icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/></svg></div><div className="feature-row__content"><h3 className="feature-row__title"><Link href="/module-connectieverzoeken" className="text-green-light underline">Connectieverzoek-module</Link></h3><p className="feature-row__desc">Snelle, relevante uitnodigingen. Elvatix genereert uitnodigingen op basis van profielinformatie en jouw stijl.</p></div></div>
            <div className="feature-row"><div className="feature-row__icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></div><div className="feature-row__content"><h3 className="feature-row__title"><Link href="/module-inmails" className="text-green-light underline">InMail-module</Link></h3><p className="feature-row__desc">Outreach berichten in jouw toon. Helder en authentiek formuleren zonder generieke openingszinnen.</p></div></div>
            <div className="feature-row"><div className="feature-row__icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div><div className="feature-row__content"><h3 className="feature-row__title"><Link href="/module-reminders" className="text-green-light underline">Reminders-module</Link></h3><p className="feature-row__desc">Geautomatiseerde follow-ups. Gepersonaliseerde suggesties op basis van eerdere interactie.</p></div></div>
            <div className="feature-row"><div className="feature-row__icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div><div className="feature-row__content"><h3 className="feature-row__title"><Link href="/module-template-instructies" className="text-green-light underline">Templates &amp; instructies</Link></h3><p className="feature-row__desc">Sneller met behoud van controle. Test varianten met onze <Link href="/module-custom-gpt" className="text-green-light underline">Custom GPT&apos;s</Link>.</p></div></div>
            <div className="feature-row"><div className="feature-row__icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg></div><div className="feature-row__content"><h3 className="feature-row__title"><Link href="/module-recruitment-sales-switch" className="text-green-light underline">Recruitment/Sales switch</Link></h3><p className="feature-row__desc">Eenvoudig wisselen van rol. De tool past je berichtenstrategie aan per doelgroep.</p></div></div>
          </div>
          <p className="text-center text-white/70 text-sm mt-6">Elvatix werkt rechtstreeks in LinkedIn Recruiter Seat, Recruiter Lite of Sales Navigator. Geen extra tabbladen of tools. Start met <Link href="/module-inmails" className="text-green-light underline">InMails</Link> of <Link href="/module-connectieverzoeken" className="text-green-light underline">connectieverzoeken</Link>, en voeg <Link href="/module-reminders" className="text-green-light underline">reminders</Link> toe voor opvolging.</p>
        </div>
      </PageSection>

      <PageSection>
        <div className="section-inner px-6">
          <div className="max-w-[720px] mx-auto">
            <h2 className="text-2xl font-extrabold text-text-primary mb-8 text-center">Veelgestelde vragen over LinkedIn outreach</h2>
            <details className="faq-item"><summary>Wat is het verschil tussen sourcing en outreach op LinkedIn?</summary><p>Sourcing is het zoeken en selecteren van kandidaten. Outreach is het actief contact leggen via connectieverzoeken en InMails.</p></details>
            <details className="faq-item"><summary>Kun je LinkedIn outreach automatiseren zonder aan persoonlijkheid in te boeten?</summary><p>Ja. Met Elvatix kun je gepersonaliseerde berichten sturen op schaal. Door slimme templates behoud je je toon terwijl AI je werk versnelt.</p></details>
            <details className="faq-item"><summary>Hoe vaak moet je opvolgen na een eerste bericht?</summary><p>Gemiddeld zijn 1 tot 2 follow-ups gebruikelijk met enkele dagen ertussen. Elvatix helpt je met getimede en relevante reminders.</p></details>
            <details className="faq-item"><summary>Waarmee helpt Elvatix precies?</summary><p>Elvatix ondersteunt het hele outreachproces binnen LinkedIn Recruiter: connectieverzoeken, InMails, follow-up en templates.</p></details>
          </div>
        </div>
      </PageSection>

      <PageSection alt>
        <div className="section-inner px-6">
          <div className="cta-section rounded-card text-center max-w-[800px] mx-auto">
            <h2 className="text-2xl font-extrabold text-white mb-3">Klaar om je outreach te transformeren?</h2>
            <p className="text-white/80 mb-6">Ontdek hoe Elvatix jouw workflow versnelt.</p>
            <Link href="/demo" className="pill-btn bg-white text-elvatix font-bold px-8 py-3">Boek Gratis Demo</Link>
          </div>
        </div>
      </PageSection>
    </main>
  );
}
