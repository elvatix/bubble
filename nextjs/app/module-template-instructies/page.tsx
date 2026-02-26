import JsonLd from "@/components/JsonLd";
import type { Metadata } from "next";
import Link from "next/link";
import PageSection from "../components/PageSection";
import { TemplatesIllustration } from "../components/illustrations/PageIllustrations";

export const metadata: Metadata = {
  title: "Recruitment templates die persoonlijk wél werken",
  description: "Upload je eigen templates, voeg instructies toe en laat Elvatix je berichten automatisch persoonlijk maken. Zonder dat het generiek wordt.",
  alternates: { canonical: "https://elvatix.com/module-template-instructies" },
};

export default function TemplateInstructiesPage() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Recruitment templates die persoonlijk wél werken",
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
          <span className="page-badge">Module</span>
          <h1 className="page-heading">Recruitment templates die persoonlijk wél werken</h1>
          <p className="page-subtitle">Jouw stijl, automatisch toegepast op elk bericht.</p>
        </div>
      </section>

      <PageSection><div className="section-inner px-6"><TemplatesIllustration /></div></PageSection>

      {/* ── Problem ── */}
      <PageSection alt>
        <div className="section-inner px-6">
          <div className="section-heading">
            <span className="section-heading__badge">Het probleem</span>
            <h2 className="section-heading__title">Waarom recruitment standaardberichten vaak niet werken</h2>
          </div>
          <div className="feature-rows">
            <div className="feature-row"><div className="feature-row__icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg></div><div className="feature-row__content"><h3 className="feature-row__title">Dezelfde openingszin, dezelfde afsluiting</h3><p className="feature-row__desc">Gebruik je altijd dezelfde standaardberichten? Kandidaten herkennen het meteen. Hun reactie: nul. Daardoor verlies je waardevolle matches.</p></div></div>
            <div className="feature-row"><div className="feature-row__icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></div><div className="feature-row__content"><h3 className="feature-row__title">&ldquo;Ik krijg nauwelijks respons&rdquo;</h3><p className="feature-row__desc">We horen het dagelijks. Of van kandidaten: &ldquo;dit bericht kreeg ik al drie keer deze week.&rdquo; Tijd om je templates anders aan te pakken.</p></div></div>
          </div>
        </div>
      </PageSection>

      {/* ── Solution ── */}
      <PageSection>
        <div className="section-inner px-6">
          <div className="section-heading">
            <span className="section-heading__badge">De oplossing</span>
            <h2 className="section-heading__title">Gebruik je recruitment templates als krachtig startpunt</h2>
            <p className="section-heading__subtitle">Gooi ze niet weg. Upload ze in Elvatix en wij leren je schrijfstijl automatisch herkennen.</p>
          </div>
          <div className="benefit-grid">
            <div className="benefit-card"><div className="benefit-card__icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div><h3 className="benefit-card__title">Upload je templates</h3><p className="benefit-card__desc">Jouw recruitment templates zijn een goede basis. Upload ze en wij herkennen je tone of voice automatisch.</p></div>
            <div className="benefit-card"><div className="benefit-card__icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2a4 4 0 0 1 4 4v1a3 3 0 0 1 2 5.2V14a4 4 0 0 1-3 3.87V20a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2.13A4 4 0 0 1 6 14v-1.8A3 3 0 0 1 8 7V6a4 4 0 0 1 4-4z"/></svg></div><h3 className="benefit-card__title">Voeg instructies toe</h3><p className="benefit-card__desc">Maak het korter, directer, luchtig of zakelijk. Elvatix past je templates meteen aan op basis van je instructies.</p></div>
            <div className="benefit-card"><div className="benefit-card__icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/></svg></div><h3 className="benefit-card__title">Personaliseer op schaal</h3><p className="benefit-card__desc">Pas toe op tientallen kandidaten tegelijk. Je ziet het resultaat direct en kunt het direct verzenden.</p></div>
          </div>
        </div>
      </PageSection>

      {/* ── Example quote ── */}
      <PageSection alt>
        <div className="section-inner px-6">
          <div className="section-heading">
            <span className="section-heading__badge">Voorbeeld</span>
            <h2 className="section-heading__title">Van standaardberichten naar persoonlijk contact</h2>
          </div>
          <div className="quote-block"><strong>Originele recruitment template:</strong><br/>Hi [Naam], ik ben recruiter bij [Bureau]. Ik zie dat je ervaring hebt in [functiegebied] en heb een interessante rol beschikbaar. Zullen we even bellen?</div>
          <div className="quote-block"><strong>Automatisch herschreven via Elvatix met instructie &ldquo;vriendelijker, luchtiger en persoonlijker&rdquo;:</strong><br/>Hoi [Naam], Ik zie dat je al een interessante reis hebt gemaakt in de consultancywereld. Van je rol als X en X naar een nieuwe uitdaging bij X  - dat laat zien hoe gedreven je bent in deze sector. Je ervaring lijkt goed te passen bij een leuke uitdaging die ik op dit moment heb. Binnenkort even bellen?</div>
          <p className="text-center text-text-muted text-sm max-w-[600px] mx-auto mt-6">Inhoud blijft gelijk. De toon verschilt. En dat verschil zorgt voor reactie. Zo worden jouw messaging templates menselijker en effectiever.</p>
        </div>
      </PageSection>

      {/* ── Schaalbaar ── */}
      <PageSection dark>
        <div className="section-inner px-6">
          <div className="section-heading">
            <span className="section-heading__badge">Op schaal</span>
            <h2 className="section-heading__title">Recruitment messaging templates toepassen op schaal</h2>
          </div>
          <div className="feature-rows">
            <div className="feature-row"><div className="feature-row__icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg></div><div className="feature-row__content"><h3 className="feature-row__title">Jij houdt de regie  - wij helpen je schaalbaar maken</h3><p className="feature-row__desc">Alle gegenereerde berichten komen overzichtelijk terug in je dashboard. Jij keurt alles goed. Elvatix integreert soepel in je LinkedIn Recruiter workflow.</p></div></div>
            <div className="feature-row"><div className="feature-row__icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div><div className="feature-row__content"><h3 className="feature-row__title">Eén basisbericht, tientallen persoonlijke varianten</h3><p className="feature-row__desc">Vanuit één basisbericht maakt Elvatix een gepersonaliseerde variant per kandidaat. Perfect voor verschillende rollen, doelgroepen of momenten in je funnel. Voeg <Link href="/module-reminders">reminders</Link> toe voor gestructureerde opvolging.</p></div></div>
          </div>
          <p className="text-center text-white/70 text-sm mt-6">Bekijk resultaten in onze <Link href="/case-studies" className="text-green-light underline">case studies</Link>.</p>
        </div>
      </PageSection>

      {/* ── FAQ ── */}
      <PageSection>
        <div className="section-inner px-6">
          <div className="max-w-[720px] mx-auto">
            <h2 className="text-2xl font-extrabold text-text-primary mb-8 text-center">Veelgestelde vragen over recruitment templates</h2>
            <details className="faq-item"><summary>Wat is een recruitment template</summary><p>Een recruitment template is een standaardtekst die recruiters gebruiken om kandidaten sneller te benaderen. Het bespaart tijd maar klinkt vaak onpersoonlijk.</p></details>
            <details className="faq-item"><summary>Hoe maak ik een recruitment template persoonlijker</summary><p>Door kleine aanpassingen toe te voegen zoals een persoonlijke verwijzing naar het profiel. Met Elvatix gebeurt dit automatisch.</p></details>
            <details className="faq-item"><summary>Werkt Elvatix ook binnen LinkedIn Recruiter</summary><p>Ja. Elvatix integreert direct in LinkedIn Recruiter Seat. Je hoeft niet te wisselen tussen tools.</p></details>
            <details className="faq-item"><summary>Kan ik meerdere berichten tegelijk aanpassen</summary><p>Ja. Met Elvatix pas je instructies toe op tientallen berichten tegelijk zonder kwaliteitsverlies.</p></details>
            <details className="faq-item"><summary>Klinken de berichten nog wel als mijzelf</summary><p>Ja. Elvatix leert jouw schrijfstijl en tone of voice zodat alle berichten menselijk en herkenbaar blijven.</p></details>
          </div>
        </div>
      </PageSection>

      {/* ── CTA ── */}
      <PageSection alt>
        <div className="section-inner px-6">
          <div className="cta-section rounded-card text-center max-w-[800px] mx-auto">
            <h2 className="text-2xl font-extrabold text-white mb-3">Maak je templates persoonlijker</h2>
            <p className="text-white/80 mb-6">Ontdek hoe Elvatix jouw berichten transformeert.</p>
            <Link href="/demo" className="pill-btn bg-white text-elvatix font-bold px-8 py-3">Boek Gratis Demo</Link>
          </div>
        </div>
      </PageSection>
    </main>
  );
}
