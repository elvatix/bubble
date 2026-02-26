import type { Metadata } from "next";
import Link from "next/link";
import PageSection from "../components/PageSection";
import { ManpowerIllustration } from "../components/illustrations/PageIllustrations";

export const metadata: Metadata = {
  title: "Hoe Manpower met Elvatix 65 uur werk terugwon in slechts 1,7 uur | Elvatix",
  description: "Robin, recruiter bij Manpower, bespaarde 65 uur schrijfwerk in slechts 1,7 uur met Elvatix. Responspercentage steeg van 40% naar 43%.",
  alternates: { canonical: "https://elvatix.com/case-study-manpower" },
};

export default function CaseStudyManpowerPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="section-inner">
          <span className="page-badge">Case Study</span>
          <h1 className="page-heading">Hoe Manpower met Elvatix 65 uur werk terugwon in slechts 1,7 uur</h1>
          <p className="page-subtitle">Van 10-15 minuten per InMail naar 30 seconden  - met hogere respons.</p>
        </div>
      </section>

      <PageSection><div className="section-inner px-6"><ManpowerIllustration /></div></PageSection>

      {/* ── Stat bar ── */}
      <PageSection alt>
        <div className="section-inner px-6">
          <div className="stat-bar">
            <div className="stat-bar__item"><div className="stat-bar__value">65 → 1,7 uur</div><div className="stat-bar__label">tijdsbesparing</div></div>
            <div className="stat-bar__item"><div className="stat-bar__value">43%</div><div className="stat-bar__label">responspercentage</div></div>
            <div className="stat-bar__item"><div className="stat-bar__value">+25</div><div className="stat-bar__label">extra kandidaten</div></div>
            <div className="stat-bar__item"><div className="stat-bar__value">30 sec</div><div className="stat-bar__label">per bericht</div></div>
          </div>
        </div>
      </PageSection>

      {/* ── Challenge ── */}
      <PageSection>
        <div className="section-inner px-6">
          <div className="section-heading">
            <span className="section-heading__badge">De uitdaging</span>
            <h2 className="section-heading__title">Persoonlijk schrijven kost te veel tijd</h2>
          </div>
          <article className="max-w-[720px] mx-auto prose-custom">
            <p>Robin, recruiter bij Manpower, stond bekend om zijn persoonlijke touch. Geen standaardberichten, geen copy-paste. Elke kandidaat kreeg een zorgvuldig geschreven InMail, afgestemd op profiel, ervaring en soms zelfs een detail uit iemands hobby&apos;s.</p>
            <p>Die aanpak werkte. Zijn berichten vielen op, voelden menselijk en leverden keer op keer bovengemiddeld veel reacties op. Maar er zat een prijskaartje aan.</p>
            <p>Elke InMail kostte Robin 10 tot 15 minuten. Met 260 berichten in twee maanden tikte de teller op tot 43 tot 65 uur. Dat is meer dan anderhalve werkweek  - puur besteed aan typen.</p>
          </article>
        </div>
      </PageSection>

      {/* ── Discovery (step flow) ── */}
      <PageSection dark>
        <div className="section-inner px-6">
          <div className="section-heading">
            <span className="section-heading__badge">De ontdekking</span>
            <h2 className="section-heading__title">Het experiment met Elvatix</h2>
            <p className="section-heading__subtitle">Kon het echt anders? Het principe bleek verrassend eenvoudig:</p>
          </div>
          <div className="step-flow">
            <div className="step-flow__item"><div className="step-flow__num">1</div><div className="step-flow__content"><h3 className="step-flow__title">Upload je eigen tone-of-voice</h3><p className="step-flow__desc">Upload favoriete templates en schrijfstijl. Elvatix leert jouw stem kennen.</p></div></div>
            <div className="step-flow__item"><div className="step-flow__num">2</div><div className="step-flow__content"><h3 className="step-flow__title">Selecteer tot 25 kandidaten tegelijk</h3><p className="step-flow__desc">Direct in LinkedIn Recruiter Seat. Geen extra tools of tabbladen.</p></div></div>
            <div className="step-flow__item"><div className="step-flow__num">3</div><div className="step-flow__content"><h3 className="step-flow__title">Laat Elvatix gepersonaliseerde InMails genereren</h3><p className="step-flow__desc">Elk bericht is uniek en klinkt als Robin zelf. Persoonlijk contact in zijn eigen stem.</p></div></div>
            <div className="step-flow__item"><div className="step-flow__num">4</div><div className="step-flow__content"><h3 className="step-flow__title">Check, tweak, verzenden</h3><p className="step-flow__desc">Volledige controle. Waar nodig koppel je direct <Link href="/module-reminders" className="text-green-light underline">reminders</Link> voor opvolging.</p></div></div>
          </div>
        </div>
      </PageSection>

      {/* ── Results ── */}
      <PageSection>
        <div className="section-inner px-6">
          <div className="section-heading">
            <span className="section-heading__badge">De resultaten</span>
            <h2 className="section-heading__title">Het effect was direct zichtbaar</h2>
          </div>
          <div className="feature-rows">
            <div className="feature-row"><div className="feature-row__icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg></div><div className="feature-row__content"><h3 className="feature-row__title">Snelheid: 30 seconden per bericht</h3><p className="feature-row__desc">Van 10 tot 15 minuten per bericht naar gemiddeld 30 seconden. 260 InMails in 1,7 uur in plaats van 43 tot 65 uur.</p></div></div>
            <div className="feature-row"><div className="feature-row__icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></div><div className="feature-row__content"><h3 className="feature-row__title">Responspercentage: van 40% naar 43%</h3><p className="feature-row__desc">De kwaliteit bleef overeind. Sterker nog: het responspercentage steeg. Het aantal geaccepteerde berichten klom met 17%.</p></div></div>
            <div className="feature-row"><div className="feature-row__icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/></svg></div><div className="feature-row__content"><h3 className="feature-row__title">25 extra kandidaten in gesprek</h3><p className="feature-row__desc">Meer gesprekken, betere resultaten, veel minder werk. Ruim één tot anderhalve werkweek terug in twee maanden.</p></div></div>
          </div>
        </div>
      </PageSection>

      {/* ── Impact ── */}
      <PageSection alt>
        <div className="section-inner px-6">
          <div className="section-heading">
            <h2 className="section-heading__title">De impact</h2>
          </div>
          <div className="benefit-grid">
            <div className="benefit-card"><div className="benefit-card__icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg></div><h3 className="benefit-card__title">Persoonlijk én schaalbaar</h3><p className="benefit-card__desc">InMails in je eigen tone-of-voice, verstuurd in minuten, niet in uren.</p></div>
            <div className="benefit-card"><div className="benefit-card__icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div><h3 className="benefit-card__title">Tijd terug voor echte gesprekken</h3><p className="benefit-card__desc">Robin kon zich weer richten op wat hij het liefste doet: echte gesprekken voeren met kandidaten.</p></div>
            <div className="benefit-card"><div className="benefit-card__icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="22 17 13.5 8.5 8.5 13.5 2 7"/><polyline points="16 17 22 17 22 11"/></svg></div><h3 className="benefit-card__title">Meer output, hogere kwaliteit</h3><p className="benefit-card__desc">Meer output, hogere kwaliteit en een team dat minder verzuipt in schrijfwerk.</p></div>
          </div>
        </div>
      </PageSection>

      {/* ── CTA ── */}
      <PageSection>
        <div className="section-inner px-6">
          <div className="cta-section rounded-card text-center max-w-[800px] mx-auto">
            <h2 className="text-2xl font-extrabold text-white mb-3">Ook zoveel tijd besparen?</h2>
            <p className="text-white/80 mb-6">Ontdek wat Elvatix voor jouw team kan betekenen.</p>
            <Link href="/demo" className="pill-btn bg-white text-elvatix font-bold px-8 py-3">Boek Gratis Demo</Link>
          </div>
        </div>
      </PageSection>
    </main>
  );
}
