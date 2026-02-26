import type { Metadata } from "next";
import Link from "next/link";
import PageSection from "../components/PageSection";

export const metadata: Metadata = {
  title: "Over Ons",
  description: "Leer het team achter Elvatix kennen. Gebouwd door recruiters, voor recruiters.",
  alternates: { canonical: "https://elvatix.com/over-ons" },
};

export default function OverOnsPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="section-inner">
          <span className="page-badge">Over Ons</span>
          <h1 className="page-heading">Gebouwd door recruiters, voor recruiters</h1>
          <p className="page-subtitle">Elvatix is ontstaan uit frustratie met het generieke karakter van LinkedIn outreach. We wisten dat het beter kon en bouwden de oplossing.</p>
        </div>
      </section>

      <PageSection>
        <div className="section-inner px-6">
          <div className="section-heading">
            <h2 className="section-heading__title">Onze waarden</h2>
          </div>
          <div className="benefit-grid" style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
            <div className="benefit-card"><div className="benefit-card__icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg></div><h3 className="benefit-card__title">Klantgericht</h3><p className="benefit-card__desc">Alles wat we bouwen begint bij het probleem van de recruiter. Niet bij de technologie.</p></div>
            <div className="benefit-card"><div className="benefit-card__icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg></div><h3 className="benefit-card__title">Snelheid</h3><p className="benefit-card__desc">We geloven dat snelheid een feature is. Release early, iterate fast, deliver value.</p></div>
            <div className="benefit-card"><div className="benefit-card__icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div><h3 className="benefit-card__title">Transparantie</h3><p className="benefit-card__desc">Eerlijke pricing, open communicatie en geen verborgen agenda&apos;s.</p></div>
            <div className="benefit-card"><div className="benefit-card__icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg></div><h3 className="benefit-card__title">Innovatie</h3><p className="benefit-card__desc">We pushen de grenzen van wat AI kan doen voor recruitment. Elke dag opnieuw.</p></div>
          </div>
        </div>
      </PageSection>

      <PageSection alt>
        <div className="section-inner px-6">
          <div className="cta-section rounded-card text-center max-w-[800px] mx-auto">
            <h2 className="text-2xl font-extrabold text-white mb-3">Wil je met ons werken?</h2>
            <p className="text-white/80 mb-6">We zijn altijd op zoek naar gepassioneerde mensen die recruitment willen verbeteren.</p>
            <Link href="/contact" className="pill-btn bg-white text-elvatix font-bold px-8 py-3">Neem contact op</Link>
          </div>
        </div>
      </PageSection>
    </main>
  );
}
