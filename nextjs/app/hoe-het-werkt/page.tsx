import JsonLd from "@/components/JsonLd";
import type { Metadata } from "next";
import Link from "next/link";
import PageSection from "../components/PageSection";

export const metadata: Metadata = {
  title: "Hoe Werkt Elvatix? In 5 Stappen Naar Succes",
  description: "Ontdek hoe Elvatix in 5 stappen je LinkedIn outreach automatiseert. Van template aanmaken tot berichten versturen - veilig, persoonlijk en razendsnel.",
  alternates: { canonical: "https://elvatix.com/hoe-het-werkt" },
};

export default function HoeHetWerktPage() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Hoe het werkt",
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
          <span className="page-badge">Hoe het werkt</span>
          <h1 className="page-heading">Van vacature tot <span className="gradient-text">persoonlijk bericht</span> in 5 stappen</h1>
          <p className="page-subtitle">Geen urenlang copy-pasten. Geen generieke templates. Elvatix analyseert elk LinkedIn-profiel en schrijft berichten die klinken alsof je ze zelf hebt geschreven.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/probeer" className="pill-btn pill-btn-elvatix text-center justify-center">Probeer het zelf</Link>
            <Link href="/modules" className="pill-btn pill-btn-outline text-center justify-center">Bekijk alle modules</Link>
          </div>
        </div>
      </section>

      <PageSection dark>
        <div className="section-inner px-6">
          <div className="section-heading">
            <span className="section-heading__badge">5 stappen</span>
            <h2 className="section-heading__title">Zo werkt Elvatix</h2>
          </div>
          <div className="step-flow">
            <div className="step-flow__item"><div className="step-flow__num">1</div><div className="step-flow__content"><h3 className="step-flow__title">Maak je template aan</h3><p className="step-flow__desc">Stel je berichttemplate in, net zoals je een InMail-sjabloon maakt in Recruiter Seat. Voeg de vacature-informatie toe en bepaal de toon. Eenmalig instellen, eindeloos hergebruiken.</p></div></div>
            <div className="step-flow__item"><div className="step-flow__num">2</div><div className="step-flow__content"><h3 className="step-flow__title">Selecteer je kandidaten</h3><p className="step-flow__desc">Selecteer de kandidaten die je wilt benaderen. Werkt met Recruiter, Sales Navigator en LinkedIn Search.</p></div></div>
            <div className="step-flow__item"><div className="step-flow__num">3</div><div className="step-flow__content"><h3 className="step-flow__title">Genereer persoonlijke berichten</h3><p className="step-flow__desc">Klik op de Elvatix Chrome-extensie, kies je template en klik op genereren. Ons AI-systeem analyseert elk profiel - werkervaring, vaardigheden, zelfs recente posts - en schrijft een volledig gepersonaliseerd bericht. Elk bericht is uniek.</p></div></div>
            <div className="step-flow__item"><div className="step-flow__num">4</div><div className="step-flow__content"><h3 className="step-flow__title">Review en pas aan</h3><p className="step-flow__desc">Alle berichten verschijnen klaar om te versturen. Controleer ze in een oogopslag, pas individuele berichten aan of keur ze allemaal goed in een klik. Volledige controle, nul verrassingen.</p></div></div>
            <div className="step-flow__item"><div className="step-flow__num">5</div><div className="step-flow__content"><h3 className="step-flow__title">Verstuur met een klik</h3><p className="step-flow__desc">Klik op &lsquo;Bevestig &amp; Verstuur&rsquo; en Elvatix stuurt alle berichten uit. Met slimme tussenpozen van 50-70 seconden, volledig binnen de normen van LinkedIn. 100% binnen LinkedIn richtlijnen.</p></div></div>
          </div>
        </div>
      </PageSection>

      <PageSection alt>
        <div className="section-inner px-6">
          <div className="section-heading">
            <span className="section-heading__badge">Bewezen</span>
            <h2 className="section-heading__title">Resultaten die voor zich spreken</h2>
            <p className="section-heading__subtitle">Onze klanten zien met persoonlijke berichten dat de resultaten echt door het dak gaan.</p>
          </div>
          <div className="stat-bar">
            <div className="stat-bar__item"><div className="stat-bar__value">50%</div><div className="stat-bar__label">Response rate door klanten</div></div>
            <div className="stat-bar__item"><div className="stat-bar__value">0</div><div className="stat-bar__label">LinkedIn-waarschuwingen ooit</div></div>
            <div className="stat-bar__item"><div className="stat-bar__value">4-6u</div><div className="stat-bar__label">Tijdsbesparing per week</div></div>
            <div className="stat-bar__item"><div className="stat-bar__value">30s</div><div className="stat-bar__label">Per gepersonaliseerd bericht</div></div>
          </div>
        </div>
      </PageSection>

      <PageSection>
        <div className="section-inner px-6">
          <div className="section-heading">
            <h2 className="section-heading__title">Waarom recruiters kiezen voor Elvatix</h2>
            <p className="section-heading__subtitle">Complimenten van kandidaten - zelfs als ze niet geinteresseerd zijn in de rol. Dat is het niveau van personalisatie dat Elvatix levert.</p>
          </div>
          <div className="benefit-grid">
            <div className="benefit-card"><div className="benefit-card__icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg></div><h3 className="benefit-card__title">Diep gepersonaliseerd</h3><p className="benefit-card__desc">Elvatix kijkt naar werkervaring, vaardigheden, en recente posts. Elk bericht voelt handgeschreven.</p></div>
            <div className="benefit-card"><div className="benefit-card__icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></div><h3 className="benefit-card__title">100% LinkedIn-veilig</h3><p className="benefit-card__desc">Slimme tussenpozen van 50-70 seconden. In twee jaar nooit een waarschuwing gehad van een klant.</p></div>
            <div className="benefit-card"><div className="benefit-card__icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div><h3 className="benefit-card__title">Volledige controle</h3><p className="benefit-card__desc">Review elk bericht voordat het verstuurd wordt. Pas aan wat je wilt, of keur alles goed in een klik.</p></div>
          </div>
        </div>
      </PageSection>

      <PageSection alt>
        <div className="section-inner px-6">
          <div className="cta-section rounded-card text-center max-w-[800px] mx-auto">
            <h2 className="text-2xl font-extrabold text-white mb-3">Klaar om het zelf te ervaren?</h2>
            <p className="text-white/80 mb-6">Plan een demo en ontdek hoe Elvatix jouw LinkedIn-outreach transformeert. Van uren typen naar minuten.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/demo" className="pill-btn pill-btn-elvatix bg-white !text-[#2D3B00] hover:bg-white/90 text-center justify-center">Plan een demo</Link>
              <Link href="/modules" className="pill-btn pill-btn-outline !border-white/40 !text-white hover:!bg-white/10 text-center justify-center">Bekijk alle modules</Link>
            </div>
          </div>
        </div>
      </PageSection>
    </main>
  );
}
