import type { Metadata } from "next";
import Link from "next/link";
import PageSection from "../components/PageSection";
import { RemindersIllustration } from "../components/illustrations/PageIllustrations";

export const metadata: Metadata = {
  title: "Wat is een follow up? En waarom het je reactiepercentages verhoogt",
  description: "Ontdek hoe je met gepersonaliseerde follow-ups meer reacties krijgt op je LinkedIn outreach.",
  alternates: { canonical: "https://elvatix.com/module-reminders" },
};

export default function RemindersPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="section-inner">
          <span className="page-badge">Module</span>
          <h1 className="page-heading">Wat is een follow up? En waarom het je reactiepercentages verhoogt.</h1>
          <p className="page-subtitle">Uniek in Nederland: gepersonaliseerde reminders binnen LinkedIn Recruiter.</p>
        </div>
      </section>

      <PageSection><div className="section-inner px-6"><RemindersIllustration /></div></PageSection>

      {/* ── Stat bar ── */}
      <PageSection alt>
        <div className="section-inner px-6">
          <div className="stat-bar">
            <div className="stat-bar__item"><div className="stat-bar__value">2×</div><div className="stat-bar__label">meer respons met follow-up</div></div>
            <div className="stat-bar__item"><div className="stat-bar__value">25</div><div className="stat-bar__label">follow-ups tegelijk</div></div>
            <div className="stat-bar__item"><div className="stat-bar__value">100%</div><div className="stat-bar__label">uniek per kandidaat</div></div>
          </div>
        </div>
      </PageSection>

      {/* ── What is follow-up ── */}
      <PageSection>
        <div className="section-inner px-6">
          <div className="section-heading">
            <span className="section-heading__badge">Uitleg</span>
            <h2 className="section-heading__title">Eerst dit: wat bedoelen we met een follow-up</h2>
          </div>
          <div className="feature-rows">
            <div className="feature-row"><div className="feature-row__icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></div><div className="feature-row__content"><h3 className="feature-row__title">Kort gezegd: een opvolgbericht na je eerste InMail</h3><p className="feature-row__desc">Een follow-up is het tweede of derde bericht dat je stuurt na je eerste InMail of connectieverzoek via LinkedIn. Het doel is een reactie uitlokken of het gesprek op gang brengen.</p></div></div>
            <div className="feature-row"><div className="feature-row__icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div><div className="feature-row__content"><h3 className="feature-row__title">In recruitment is follow-up cruciaal</h3><p className="feature-row__desc">De meeste kandidaten reageren niet meteen. Ze missen het bericht, twijfelen nog of hebben simpelweg geen tijd. Follow-up via LinkedIn geeft je een tweede kans.</p></div></div>
          </div>
        </div>
      </PageSection>

      {/* ── Wat gaat er mis ── */}
      <PageSection alt>
        <div className="section-inner px-6">
          <div className="section-heading">
            <span className="section-heading__badge">Het probleem</span>
            <h2 className="section-heading__title">Hier gaat follow-up vaak mis</h2>
          </div>
          <div className="feature-rows">
            <div className="feature-row"><div className="feature-row__icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg></div><div className="feature-row__content"><h3 className="feature-row__title">Geen structuur = geen opvolging = gemiste reacties</h3><p className="feature-row__desc">LinkedIn heeft geen ingebouwde herinneringsfunctie. Veel recruiters vergeten simpelweg om een tweede bericht te sturen. Je verliest overzicht en dus kandidaten.</p></div></div>
            <div className="feature-row"><div className="feature-row__icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2"/></svg></div><div className="feature-row__content"><h3 className="feature-row__title">Een herhaling van je eerste InMail werkt averechts</h3><p className="feature-row__desc">Een herhalend bericht zonder nieuwe inhoud schrikt af. Wat beter werkt: een reminder die inspeelt op je vorige InMail en iets nieuws toevoegt.</p></div></div>
            <div className="feature-row"><div className="feature-row__icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 17 13.5 8.5 8.5 13.5 2 7"/><polyline points="16 17 22 17 22 11"/></svg></div><div className="feature-row__content"><h3 className="feature-row__title">Veel recruiters kopiëren hun eerste bericht</h3><p className="feature-row__desc">Herhaling werkt niet. Een goede reminder voegt juist iets toe  - nieuwe context, een andere insteek of inhoud die laat zien dat je echt geluisterd hebt. Gebruik je eigen <Link href="/module-template-instructies">templates &amp; instructies</Link> om elke follow-up kort en relevant te houden.</p></div></div>
          </div>
        </div>
      </PageSection>

      {/* ── Hoe het werkt ── */}
      <PageSection dark>
        <div className="section-inner px-6">
          <div className="section-heading">
            <span className="section-heading__badge">Hoe het werkt</span>
            <h2 className="section-heading__title">Zo werkt follow-up met Elvatix</h2>
            <p className="section-heading__subtitle">Slimme follow-up: persoonlijk en effectief. Uniek in Nederland.</p>
          </div>
          <div className="step-flow">
            <div className="step-flow__item"><div className="step-flow__num">1</div><div className="step-flow__content"><h3 className="step-flow__title">Voeg een reminder toe aan je InMail</h3><p className="step-flow__desc">Direct bij verzending van een InMail een reminder koppelen via Elvatix. Simpel en zonder dat je LinkedIn hoeft te verlaten.</p></div></div>
            <div className="step-flow__item"><div className="step-flow__num">2</div><div className="step-flow__content"><h3 className="step-flow__title">AI genereert een inhoudelijke follow-up</h3><p className="step-flow__desc">Onze technologie gebruikt je originele bericht als input. De AI schrijft een tweede bericht met nieuwe inhoud, afgestemd op jouw stijl en doelgroep.</p></div></div>
            <div className="step-flow__item"><div className="step-flow__num">3</div><div className="step-flow__content"><h3 className="step-flow__title">Meerdere reminders tegelijk, maar nooit hetzelfde</h3><p className="step-flow__desc">Je kunt tot 25 follow-ups in één keer voorbereiden. Toch blijft elk bericht uniek. Elvatix stemt elke follow-up af op de inhoud van je eerdere InMail.</p></div></div>
            <div className="step-flow__item"><div className="step-flow__num">4</div><div className="step-flow__content"><h3 className="step-flow__title">Jij reviewt en plant het verzendmoment</h3><p className="step-flow__desc">Je behoudt altijd de controle. Check de tekst, tweak waar nodig en kies wanneer het bericht moet worden verzonden.</p></div></div>
            <div className="step-flow__item"><div className="step-flow__num">5</div><div className="step-flow__content"><h3 className="step-flow__title">Verstuurd binnen de richtlijnen van LinkedIn</h3><p className="step-flow__desc">Onze reminders worden natuurlijk verspreid verzonden zodat je binnen de richtlijnen van LinkedIn blijft.</p></div></div>
          </div>
        </div>
      </PageSection>

      {/* ── Benefits ── */}
      <PageSection>
        <div className="section-inner px-6">
          <div className="section-heading">
            <h2 className="section-heading__title">De voordelen op een rij</h2>
          </div>
          <div className="benefit-grid">
            <div className="benefit-card"><div className="benefit-card__icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg></div><h3 className="benefit-card__title">LinkedIn Recruiter integratie</h3><p className="benefit-card__desc">Volledig geïntegreerd met LinkedIn Recruiter. Alles loopt automatisch mee in je recruitmentflow.</p></div>
            <div className="benefit-card"><div className="benefit-card__icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></div><h3 className="benefit-card__title">Meer reacties</h3><p className="benefit-card__desc">Relevante follow-ups zorgen voor significant meer respons van kandidaten.</p></div>
            <div className="benefit-card"><div className="benefit-card__icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div><h3 className="benefit-card__title">Jij bepaalt alles</h3><p className="benefit-card__desc">Jij bepaalt wat er wanneer verzonden wordt. Volledige controle over inhoud en timing.</p></div>
          </div>
        </div>
      </PageSection>

      {/* ── FAQ ── */}
      <PageSection alt>
        <div className="section-inner px-6">
          <div className="max-w-[720px] mx-auto">
            <h2 className="text-2xl font-extrabold text-text-primary mb-8 text-center">Veelgestelde vragen over follow-up in recruitment</h2>
            <details className="faq-item"><summary>Wat is follow-up in recruitment</summary><p>Een follow-up is een tweede of derde bericht dat je stuurt naar een kandidaat op platforms als LinkedIn. Het doel is om alsnog reactie te krijgen als het eerste bericht wordt genegeerd.</p></details>
            <details className="faq-item"><summary>Werkt follow-up via LinkedIn echt</summary><p>Ja. Onderzoek en praktijkervaring laten zien dat een strategische follow-up de kans op respons tot wel twee keer groter maakt  - mits je boodschap aansluit op het eerdere contact. Zie ook onze <Link href="/case-studies">case studies</Link>.</p></details>
            <details className="faq-item"><summary>Maakt Elvatix automatische reminders voor LinkedIn</summary><p>Ja. Elvatix is de enige oplossing in Nederland die gepersonaliseerde AI reminders koppelt aan je InMails in LinkedIn Recruiter. Je stelt ze in één keer in.</p></details>
            <details className="faq-item"><summary>Kan ik de follow-ups van Elvatix zelf aanpassen</summary><p>Ja. Jij behoudt altijd de controle over inhoud en timing. Elvatix doet het voorwerk  - jij finetunet het als dat nodig is.</p></details>
            <details className="faq-item"><summary>Past Elvatix in mijn bestaande workflow</summary><p>Elvatix integreert met LinkedIn Recruiter waardoor je geen extra stappen hoeft te zetten. Alles werkt zoals je gewend bent.</p></details>
          </div>
        </div>
      </PageSection>

      {/* ── CTA ── */}
      <PageSection>
        <div className="section-inner px-6">
          <div className="cta-section rounded-card text-center max-w-[800px] mx-auto">
            <h2 className="text-2xl font-extrabold text-white mb-3">Nooit meer een follow-up vergeten</h2>
            <p className="text-white/80 mb-6">Ontdek hoe Elvatix jouw opvolging automatiseert.</p>
            <Link href="/demo" className="pill-btn bg-white text-elvatix font-bold px-8 py-3">Boek Gratis Demo</Link>
          </div>
        </div>
      </PageSection>
    </main>
  );
}
