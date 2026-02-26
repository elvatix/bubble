import JsonLd from "@/components/JsonLd";
import type { Metadata } from "next";
import Link from "next/link";
import PageSection from "../components/PageSection";
import { DetacheringIllustration } from "../components/illustrations/PageIllustrations";

export const metadata: Metadata = {
  openGraph: {
    title: "Outreach LinkedIn voor detacheerders: persoonlijk, schaalbaar en effectief",
    description: "LinkedIn outreach voor detacheringsbureaus. Persoonlijk, schaalbaar en effectief  - twee doelgroepen, één flow.",
    url: "https://elvatix.com/voor-detacheringsbureaus",
    type: "website",
  },
  title: "Outreach LinkedIn voor detacheerders: persoonlijk, schaalbaar en effectief",
  description: "LinkedIn outreach voor detacheringsbureaus. Persoonlijk, schaalbaar en effectief  - twee doelgroepen, één flow.",
  alternates: { canonical: "https://elvatix.com/voor-detacheringsbureaus" },
};

export const revalidate = 86400; // Cache for 24 hours (11/10 SEO optimization)

export default function VoorDetacheringPage() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Voor Wie",
        "item": "https://elvatix.com/voor-wie"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Voor Detacheringsbureaus",
        "item": "https://elvatix.com/voor-detacheringsbureaus"
      }
    ]
  };

  return (
    <main>
      <JsonLd schema={pageSchema} />
      <section className="page-hero">
        <div className="section-inner">
          <span className="page-badge">Voor Wie</span>
          <h1 className="page-heading">Outreach LinkedIn voor detacheerders: persoonlijk, schaalbaar en effectief</h1>
          <p className="page-subtitle">Twee doelgroepen, één efficiënte aanpak.</p>
        </div>
      </section>

      <PageSection><div className="section-inner px-6"><DetacheringIllustration /></div></PageSection>

      {/* ── Problem ── */}
      <PageSection alt>
        <div className="section-inner px-6">
          <div className="section-heading">
            <span className="section-heading__badge">Herkenbaar?</span>
            <h2 className="section-heading__title">Herken jij dit als detacheerder?</h2>
          </div>
          <div className="feature-rows">
            <div className="feature-row"><div className="feature-row__icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div><div className="feature-row__content"><h3 className="feature-row__title">Elk bericht zelf schrijven om generiek te vermijden</h3><p className="feature-row__desc">Je verstuurt connectieverzoeken, InMails en doet follow-ups. Ondertussen gaan kostbare uren verloren aan klikken, kopiëren en herschrijven.</p></div></div>
            <div className="feature-row"><div className="feature-row__icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="17" y1="8" x2="22" y2="13"/><line x1="22" y1="8" x2="17" y2="13"/></svg></div><div className="feature-row__content"><h3 className="feature-row__title">Honderden connecties, weinig gesprekken</h3><p className="feature-row__desc">Je vergeet follow-ups op LinkedIn omdat het te veel tijd kost. Je werkt verspreid over meerdere tools en tabbladen.</p></div></div>
            <div className="feature-row"><div className="feature-row__icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></div><div className="feature-row__content"><h3 className="feature-row__title">Persoonlijkheid is cruciaal</h3><p className="feature-row__desc">Een InMail of connectieverzoek valt alleen op als het herkenbaar en inhoudelijk sterk is. Bij opdrachtgevers: professioneel. Bij kandidaten: vertrouwen. Dat vraagt om maatwerk op schaal.</p></div></div>
          </div>
        </div>
      </PageSection>

      {/* ── Solution ── */}
      <PageSection dark>
        <div className="section-inner px-6">
          <div className="section-heading">
            <span className="section-heading__badge">De oplossing</span>
            <h2 className="section-heading__title">Slimmere LinkedIn outreach met Elvatix</h2>
            <p className="section-heading__subtitle">AI recruitment tool speciaal gemaakt voor detacheringsbureaus. Geen standaard AI-prompts  - maar slimme automatisering die jouw toon en workflow volgt.</p>
          </div>
          <div className="benefit-grid">
            <div className="benefit-card"><div className="benefit-card__icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg></div><h3 className="benefit-card__title">Twee doelgroepen, één flow</h3><p className="benefit-card__desc">Outreach naar zowel kandidaten als opdrachtgevers in één systeem. Profielherkenning past toon automatisch aan.</p></div>
            <div className="benefit-card"><div className="benefit-card__icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/></svg></div><h3 className="benefit-card__title">Batch personaliseren</h3><p className="benefit-card__desc">25 unieke berichten tegelijk, gepersonaliseerd op naam, functie, locatie en eerdere interacties.</p></div>
            <div className="benefit-card"><div className="benefit-card__icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></div><h3 className="benefit-card__title">Follow-up LinkedIn</h3><p className="benefit-card__desc">Automatische opvolging met variatie en inhoudelijke continuïteit via de <Link href="/module-reminders">Follow-up module</Link>.</p></div>
          </div>
        </div>
      </PageSection>

      {/* ── Concrete results ── */}
      <PageSection>
        <div className="section-inner px-6">
          <div className="section-heading">
            <h2 className="section-heading__title">Wat levert Elvatix concreet op?</h2>
          </div>
          <article className="max-w-[720px] mx-auto prose-custom">
            <p>Stel: je voert recruitment outreach uit richting .NET-developers in regio Rotterdam. Normaal besteed je 3 uur aan persoonlijke berichtjes. Met Elvatix geef je een briefing (&lsquo;informele toon, focus op projectinhoud&rsquo;) en ontvang je 20 perfect gepersonaliseerde InMails. Verstuurklaar binnen minuten.</p>
            <p>Krijg je geen reactie? Dan plant de tool automatisch een follow-up LinkedIn in, afgestemd op je vorige bericht. Daardoor bied je kandidaten of contacten meerdere kansen om in te haken.</p>
            <p>Consistente LinkedIn outreach is belangrijk  - maar in de praktijk komt het er niet van. Elvatix neemt het zware werk uit handen terwijl jij de controle houdt over toon en timing. Nieuwsgierig naar resultaten? Bekijk onze <Link href="/case-studies">case studies</Link>.</p>
          </article>
        </div>
      </PageSection>

      {/* ── FAQ ── */}
      <PageSection alt>
        <div className="section-inner px-6">
          <div className="max-w-[720px] mx-auto">
            <h2 className="text-2xl font-extrabold text-text-primary mb-8 text-center">Veelgestelde vragen over LinkedIn outreach voor detacheerders</h2>
            <details className="faq-item"><summary>Wat is LinkedIn outreach in recruitment?</summary><p>LinkedIn outreach is het actief benaderen van kandidaten of opdrachtgevers via LinkedIn, meestal via InMail of connectieverzoeken.</p></details>
            <details className="faq-item"><summary>Hoe maakt Elvatix outreach persoonlijk?</summary><p>Elvatix personaliseert elk bericht op naam, functie en profiel en past de toon aan op jouw schrijfstijl. Test en verfijn met <Link href="/module-template-instructies">templates &amp; instructies</Link>.</p></details>
            <details className="faq-item"><summary>Werkt Elvatix met LinkedIn Recruiter Seat?</summary><p>Ja. Direct binnen LinkedIn Recruiter Seat. Geen extra tools nodig.</p></details>
            <details className="faq-item"><summary>Kan ik ook follow-ups automatiseren?</summary><p>Ja. Automatisch passende follow-up berichten gebaseerd op je eerste InMail. Geen herhalingen.</p></details>
            <details className="faq-item"><summary>Voor wie is Elvatix bedoeld?</summary><p>Voor detacherings- en recruitmentbureaus die outreach willen versnellen zonder aan kwaliteit in te boeten.</p></details>
          </div>
        </div>
      </PageSection>

      {/* ── CTA ── */}
      <PageSection>
        <div className="section-inner px-6">
          <div className="cta-section rounded-card text-center max-w-[800px] mx-auto">
            <h2 className="text-2xl font-extrabold text-white mb-3">Klaar voor slimmere outreach?</h2>
            <p className="text-white/80 mb-6">Ontdek hoe Elvatix jouw detacheringsbureau helpt groeien.</p>
            <Link href="/demo" className="pill-btn bg-white text-elvatix font-bold px-8 py-3">Boek Gratis Demo</Link>
          </div>
        </div>
      </PageSection>
    </main>
  );
}
