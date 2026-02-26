import JsonLd from "@/components/JsonLd";
import type { Metadata } from "next";
import Link from "next/link";
import PageSection from "../components/PageSection";
import { ConnectieIllustration } from "../components/illustrations/PageIllustrations";

export const metadata: Metadata = {
  openGraph: {
    title: "10x sneller persoonlijke LinkedIn connectieverzoeken maken",
    description: "Genereer 10x sneller gepersonaliseerde LinkedIn connectieverzoeken. Automatiseer je outreach zonder in te leveren op menselijke kwaliteit en authenticiteit.",
    url: "https://elvatix.com/module-connectieverzoeken",
    type: "website",
  },
  title: "10x sneller persoonlijke LinkedIn connectieverzoeken maken",
  description: "\"Ik wil u graag toevoegen...\" is zó 2015. Met Elvatix stuur je in één klik berichten waar mensen van glimlachen. Persoonlijk, origineel en direct vanuit je Recruiter Seat.",
  alternates: { canonical: "https://elvatix.com/module-connectieverzoeken" },
};

export const revalidate = 86400; // Cache for 24 hours (11/10 SEO optimization)

export default function ConnectieverzoekPage() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "10x sneller persoonlijke LinkedIn connectieverzoeken maken",
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
      {/* ── Hero ── */}
      <section className="page-hero">
        <div className="section-inner">
          <span className="page-badge">Module</span>
          <h1 className="page-heading">LinkedIn connectieverzoeken die wél geaccepteerd worden</h1>
          <p className="page-subtitle">Persoonlijke connectieverzoeken op schaal  - zonder een bericht dubbel te gebruiken.</p>
        </div>
      </section>

      {/* ── Illustration ── */}
      <PageSection>
        <div className="section-inner px-6">
          <ConnectieIllustration />
        </div>
      </PageSection>

      {/* ── Stat bar ── */}
      <PageSection alt>
        <div className="section-inner px-6">
          <div className="stat-bar">
            <div className="stat-bar__item"><div className="stat-bar__value">25</div><div className="stat-bar__label">berichten tegelijk</div></div>
            <div className="stat-bar__item"><div className="stat-bar__value">10×</div><div className="stat-bar__label">sneller dan handmatig</div></div>
            <div className="stat-bar__item"><div className="stat-bar__value">100%</div><div className="stat-bar__label">uniek & persoonlijk</div></div>
          </div>
        </div>
      </PageSection>

      {/* ── Why standard invites fail ── */}
      <PageSection>
        <div className="section-inner px-6">
          <div className="section-heading">
            <span className="section-heading__badge">Het probleem</span>
            <h2 className="section-heading__title">Waarom een standaard LinkedIn uitnodiging vaak wordt genegeerd</h2>
          </div>

          <div className="feature-rows">
            <div className="feature-row">
              <div className="feature-row__icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
              </div>
              <div className="feature-row__content">
                <h3 className="feature-row__title">Wat maakt een goed LinkedIn connectieverzoek?</h3>
                <p className="feature-row__desc">Een LinkedIn connectieverzoek is meer dan een druk op de knop; het is de start van een zakelijke relatie. De acceptatiegraad stijgt drastisch als je een relevant persoonlijk bericht toevoegt. Dat maakt je verzoek direct herkenbaar en onderscheidend in een volle inbox.</p>
              </div>
            </div>
            <div className="feature-row">
              <div className="feature-row__icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="17" y1="8" x2="22" y2="13"/><line x1="22" y1="8" x2="17" y2="13"/></svg>
              </div>
              <div className="feature-row__content">
                <h3 className="feature-row__title">Wanneer accepteert iemand jouw verbindingsverzoek?</h3>
                <p className="feature-row__desc">Zonder persoonlijk bericht is de kans op acceptatie klein, vooral als je elkaar nog niet kent. Kandidaten en prospects willen weten wie jij bent en waarom je specifiek contact zoekt met hen.</p>
              </div>
            </div>
            <div className="feature-row">
              <div className="feature-row__icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              </div>
              <div className="feature-row__content">
                <h3 className="feature-row__title">Waarom een persoonlijk connectieverzoek het verschil maakt</h3>
                <p className="feature-row__desc">Goede connectieverzoeken sluiten naadloos aan bij het profiel van de ander. Elvatix kijkt verder dan functietitels en vindt haakjes in de carrière of prestaties van de persoon.</p>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      {/* ── Quote examples ── */}
      <PageSection alt>
        <div className="section-inner px-6">
          <div className="section-heading">
            <span className="section-heading__badge">Voorbeelden</span>
            <h2 className="section-heading__title">Kijk eens naar het verschil in toon en diepgang</h2>
          </div>
          <div className="quote-block">&ldquo;Hoi Karel, je bent bij Ecobliss gestart als young professional en nu sta je als algemeen directeur aan het roer. Dat is een serieus groeipad zeg. Je kent het bedrijf na al die jaren vast beter dan je eigen broekzak. Bevalt het om nu de eindregie te hebben?&rdquo;</div>
          <div className="quote-block">&ldquo;Ha Timo, die 1000+ plaatsingen in anderhalf jaar tijd is nogal wat zeg! Doe je dat puur zelf of zit er al slimme tooling achter om die volumes te managen? Benieuwd hoe je de kwaliteit hoog houdt met zo&apos;n tempo.&rdquo;</div>
          <p className="text-center text-text-muted text-sm max-w-[600px] mx-auto mt-6">Dit soort berichten werken fantastisch omdat ze bewijzen dat je je huiswerk hebt gedaan. Handmatig is dit echter bijna niet schaalbaar. Elvatix lost dat voor je op als jouw slimme personalisatie co-pilot.</p>
        </div>
      </PageSection>

      {/* ── How it works (step flow) ── */}
      <PageSection dark>
        <div className="section-inner px-6">
          <div className="section-heading">
            <span className="section-heading__badge">Hoe het werkt</span>
            <h2 className="section-heading__title">Met Elvatix maak je elke LinkedIn uitnodiging uniek</h2>
            <p className="section-heading__subtitle">Onze software leest het profiel, begrijpt de context en schrijft een bericht dat echt over de ontvanger gaat.</p>
          </div>
          <div className="step-flow">
            <div className="step-flow__item">
              <div className="step-flow__num">1</div>
              <div className="step-flow__content">
                <h3 className="step-flow__title">Naadloze integratie in LinkedIn Recruiter</h3>
                <p className="step-flow__desc">Gebruik je een Recruiter Seat of Lite? Elvatix werkt gewoon binnen je vertrouwde omgeving. Je hoeft niet te switchen tussen tabbladen of tools; de module integreert direct in je workflow.</p>
              </div>
            </div>
            <div className="step-flow__item">
              <div className="step-flow__num">2</div>
              <div className="step-flow__content">
                <h3 className="step-flow__title">De juiste toon: recruitment of sales</h3>
                <p className="step-flow__desc">Stuur je een uitnodiging naar een kandidaat? Dan wil je een toegankelijke en uitnodigende toon. Richt je je op een prospect? Dan houden we het zakelijk en scherp. Dit regel je via de <Link href="/module-recruitment-sales-switch">Recruitment/Sales switch</Link>.</p>
              </div>
            </div>
            <div className="step-flow__item">
              <div className="step-flow__num">3</div>
              <div className="step-flow__content">
                <h3 className="step-flow__title">Tot 25 persoonlijke connectieverzoeken tegelijk</h3>
                <p className="step-flow__desc">Selecteer tot 25 profielen vanuit een project. Elvatix genereert voor elk individueel profiel een uniek connectieverzoek bericht. Geen copy-paste, maar voor iedereen een eigen haakje.</p>
              </div>
            </div>
            <div className="step-flow__item">
              <div className="step-flow__num">4</div>
              <div className="step-flow__content">
                <h3 className="step-flow__title">Review en pas aan waar nodig</h3>
                <p className="step-flow__desc">Jij blijft altijd in control. Elvatix doet de voorzet, maar jij kunt elk connectieverzoek bekijken, aanpassen of goedkeuren. Combineer ook met je eigen <Link href="/module-template-instructies">templates &amp; instructies</Link>.</p>
              </div>
            </div>
            <div className="step-flow__item">
              <div className="step-flow__num">5</div>
              <div className="step-flow__content">
                <h3 className="step-flow__title">Slim verzenden binnen LinkedIn limieten</h3>
                <p className="step-flow__desc">Om je account veilig te houden, zorgt Elvatix dat je nooit over de limieten gaat. De tool verspreidt verzoeken automatisch over de tijd, zodat je natuurlijk overkomt.</p>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      {/* ── Benefits (benefit grid) ── */}
      <PageSection>
        <div className="section-inner px-6">
          <div className="section-heading">
            <span className="section-heading__badge">Resultaat</span>
            <h2 className="section-heading__title">Wat levert een persoonlijk connectieverzoek met Elvatix op?</h2>
          </div>
          <div className="benefit-grid">
            <div className="benefit-card">
              <div className="benefit-card__icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              </div>
              <h3 className="benefit-card__title">Hogere acceptatiegraad</h3>
              <p className="benefit-card__desc">Persoonlijke, relevante berichten zorgen voor herkenning en sympathie. De kans dat iemand jouw uitnodiging accepteert stijgt aanzienlijk.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-card__icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
              </div>
              <h3 className="benefit-card__title">Minimale tijd per uitnodiging</h3>
              <p className="benefit-card__desc">Het repetitieve handwerk vervalt. Binnen enkele minuten heb je 25 mensen kwalitatief benaderd.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-card__icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>
              </div>
              <h3 className="benefit-card__title">Recruitment & sales in één</h3>
              <p className="benefit-card__desc">Elvatix past de toon aan op basis van je instelling. Zo krachtig voor talent sourcing als voor sales outreach.</p>
            </div>
          </div>
        </div>
      </PageSection>

      {/* ── FAQ ── */}
      <PageSection alt>
        <div className="section-inner px-6">
          <div className="max-w-[720px] mx-auto">
            <h2 className="text-2xl font-extrabold text-text-primary mb-8 text-center">Veelgestelde vragen over LinkedIn connectieverzoeken</h2>
            <details className="faq-item">
              <summary>Wat moet ik in een LinkedIn connectieverzoek zetten?</summary>
              <p>Laat kort weten wie je bent, waarom je contact zoekt en verwijs naar een specifiek detail uit hun profiel. Elvatix helpt je hierbij met een passend voorstel dat direct inspeelt op de achtergrond van de persoon.</p>
            </details>
            <details className="faq-item">
              <summary>Hoe verstuur ik een persoonlijk LinkedIn connectieverzoek?</summary>
              <p>Via LinkedIn Recruiter kun je normaal gesproken één profiel selecteren en een bericht typen. Met Elvatix doe je dit voor meerdere profielen tegelijk, waarbij onze automatische personalisatie zorgt dat elk bericht uniek is.</p>
            </details>
            <details className="faq-item">
              <summary>Waarom worden mijn connectieverzoeken genegeerd?</summary>
              <p>Waarschijnlijk omdat ze generiek aanvoelen of niet relevant zijn voor de ontvanger. Zonder een persoonlijk haakje voelt een uitnodiging al snel als spam. Elvatix zorgt voor die relevantie en de juiste toon.</p>
            </details>
          </div>
        </div>
      </PageSection>

      {/* ── CTA ── */}
      <PageSection>
        <div className="section-inner px-6">
          <div className="cta-section rounded-card text-center max-w-[800px] mx-auto">
            <h2 className="text-2xl font-extrabold text-white mb-3">Klaar om je connectieverzoeken te verbeteren?</h2>
            <p className="text-white/80 mb-6">Ontdek hoe Elvatix jouw LinkedIn outreach versnelt.</p>
            <Link href="/demo" className="pill-btn bg-white text-elvatix font-bold px-8 py-3">Boek Gratis Demo</Link>
          </div>
        </div>
      </PageSection>
    </main>
  );
}
