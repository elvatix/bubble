import type { Metadata } from "next";
import Link from "next/link";
import PageSection from "../components/PageSection";
import { InMailsIllustration } from "../components/illustrations/PageIllustrations";

export const metadata: Metadata = {
  title: "InMails op LinkedIn slimmer gebruiken | Elvatix",
  description: "Sneller, persoonlijker en volledig in Recruiter Seat. Ontdek hoe Elvatix je InMails naar een hoger niveau tilt.",
  alternates: { canonical: "https://elvatix.com/module-inmails" },
};

export default function InMailsPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="section-inner">
          <span className="page-badge">Module</span>
          <h1 className="page-heading">InMails op LinkedIn slimmer gebruiken: sneller, persoonlijker en volledig in Recruiter Seat</h1>
          <p className="page-subtitle">Meer reacties op je InMails  - zonder extra tools of tijdverlies.</p>
        </div>
      </section>

      <PageSection><div className="section-inner px-6"><InMailsIllustration /></div></PageSection>

      {/* ── Stat bar ── */}
      <PageSection alt>
        <div className="section-inner px-6">
          <div className="stat-bar">
            <div className="stat-bar__item"><div className="stat-bar__value">25</div><div className="stat-bar__label">InMails tegelijk</div></div>
            <div className="stat-bar__item"><div className="stat-bar__value">30 sec</div><div className="stat-bar__label">per bericht</div></div>
            <div className="stat-bar__item"><div className="stat-bar__value">100%</div><div className="stat-bar__label">jouw tone-of-voice</div></div>
          </div>
        </div>
      </PageSection>

      {/* ── Problem ── */}
      <PageSection>
        <div className="section-inner px-6">
          <div className="section-heading">
            <span className="section-heading__badge">Herkenbaar?</span>
            <h2 className="section-heading__title">InMails op LinkedIn kosten vaak meer tijd dan het oplevert</h2>
            <p className="section-heading__subtitle">Je gebruikt InMails dagelijks om kandidaten te benaderen. Maar de resultaten vallen vaak tegen.</p>
          </div>
          <div className="feature-rows">
            <div className="feature-row">
              <div className="feature-row__icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div>
              <div className="feature-row__content">
                <h3 className="feature-row__title">Elke InMail handmatig schrijven kost veel tijd</h3>
                <p className="feature-row__desc">Je zoekt naar manieren om het persoonlijk te maken, maar dat kost per kandidaat 10-15 minuten. Bij volume is dat onhoudbaar.</p>
              </div>
            </div>
            <div className="feature-row">
              <div className="feature-row__icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2"/></svg></div>
              <div className="feature-row__content">
                <h3 className="feature-row__title">AI-tools leveren generieke, onpersoonlijke berichten</h3>
                <p className="feature-row__desc">Standaard AI-output voelt aan als spam. Kandidaten herkennen het direct en negeren je bericht. Elvatix pakt dat anders aan.</p>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      {/* ── How it works ── */}
      <PageSection dark>
        <div className="section-inner px-6">
          <div className="section-heading">
            <span className="section-heading__badge">Hoe het werkt</span>
            <h2 className="section-heading__title">Zo werken InMails op LinkedIn met Elvatix</h2>
          </div>
          <div className="step-flow">
            <div className="step-flow__item"><div className="step-flow__num">1</div><div className="step-flow__content"><h3 className="step-flow__title">Je workflow blijft zoals je gewend bent</h3><p className="step-flow__desc">Je werkt rechtstreeks in je bestaande projecten, pipelines en talent pools in LinkedIn Recruiter Seat. Geen extra tabbladen of tools.</p></div></div>
            <div className="step-flow__item"><div className="step-flow__num">2</div><div className="step-flow__content"><h3 className="step-flow__title">Selecteer tot 25 kandidaten in Recruiter Seat</h3><p className="step-flow__desc">Kies direct in LinkedIn Recruiter wie je wilt benaderen. Perfect voor gerichte batch outreach binnen een specifieke functie of doelgroep.</p></div></div>
            <div className="step-flow__item"><div className="step-flow__num">3</div><div className="step-flow__content"><h3 className="step-flow__title">Elvatix schrijft persoonlijke InMails in jouw stijl</h3><p className="step-flow__desc">Op basis van je eigen templates en tone-of-voice genereert Elvatix unieke, persoonlijke InMails per kandidaat. Optimaliseer met onze <Link href="/module-custom-gpt">Custom GPT&apos;s</Link>.</p></div></div>
            <div className="step-flow__item"><div className="step-flow__num">4</div><div className="step-flow__content"><h3 className="step-flow__title">Jij controleert elk bericht</h3><p className="step-flow__desc">Bekijk alle InMails in één overzicht. Je past ze aan waar nodig. Niets wordt verstuurd zonder jouw goedkeuring.</p></div></div>
            <div className="step-flow__item"><div className="step-flow__num">5</div><div className="step-flow__content"><h3 className="step-flow__title">Verstuur in bulk + voeg follow-ups toe</h3><p className="step-flow__desc">Met één klik verzend je alles tegelijk. Plan meteen een tweede bericht in met <Link href="/module-reminders">follow-ups</Link>. Volledig gepersonaliseerd.</p></div></div>
          </div>
        </div>
      </PageSection>

      {/* ── Benefits ── */}
      <PageSection>
        <div className="section-inner px-6">
          <div className="section-heading">
            <span className="section-heading__badge">Resultaat</span>
            <h2 className="section-heading__title">Wat levert InMailen met Elvatix je op?</h2>
          </div>
          <div className="benefit-grid">
            <div className="benefit-card"><div className="benefit-card__icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></div><h3 className="benefit-card__title">Meer reacties</h3><p className="benefit-card__desc">Persoonlijke berichten die echt klinken als jij zorgen voor hogere responsrates.</p></div>
            <div className="benefit-card"><div className="benefit-card__icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg></div><h3 className="benefit-card__title">Uren tijdswinst per week</h3><p className="benefit-card__desc">Van 10 minuten naar 30 seconden per InMail. Scale zonder kwaliteitsverlies.</p></div>
            <div className="benefit-card"><div className="benefit-card__icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div><h3 className="benefit-card__title">Jij bepaalt wat eruit gaat</h3><p className="benefit-card__desc">Volledige controle. Elk bericht bekijk en verbeter je zelf voor verzending.</p></div>
          </div>
        </div>
      </PageSection>

      {/* ── Unique vs standard ── */}
      <PageSection alt>
        <div className="section-inner px-6">
          <div className="section-heading">
            <h2 className="section-heading__title">Wat maakt Elvatix anders dan standaard AI-tools?</h2>
          </div>
          <div className="feature-rows">
            <div className="feature-row"><div className="feature-row__icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg></div><div className="feature-row__content"><h3 className="feature-row__title">Volledig binnen LinkedIn Recruiter Seat</h3><p className="feature-row__desc">Geen complexe nieuwe software. Je werkt in je vertrouwde omgeving.</p></div></div>
            <div className="feature-row"><div className="feature-row__icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div><div className="feature-row__content"><h3 className="feature-row__title">Tot 25 kandidaten tegelijk  - schaalbaar zonder verlies</h3><p className="feature-row__desc">Jouw eigen stijl, templates en structuur  - geen standaard AI-output.</p></div></div>
            <div className="feature-row"><div className="feature-row__icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div><div className="feature-row__content"><h3 className="feature-row__title">Follow-ups die naadloos aansluiten</h3><p className="feature-row__desc">Inhoudelijk sterk en relevant. Gebruik <Link href="/module-template-instructies">templates &amp; instructies</Link> voor meer controle.</p></div></div>
          </div>
        </div>
      </PageSection>

      {/* ── SEO: What is an InMail ── */}
      <PageSection>
        <div className="section-inner px-6">
          <article className="max-w-[720px] mx-auto prose-custom">
            <h2>Wat is een InMail op LinkedIn?</h2>
            <p>Een InMail op LinkedIn is een betaalde functie in LinkedIn Recruiter waarmee je professionals rechtstreeks kunt benaderen, zelfs als je geen connectie hebt. Je gebruikt hiervoor InMail credits. De meeste recruiters zetten InMails op LinkedIn dagelijks in voor sourcing en talent outreach. Maar zonder personalisatie is je kans op een reactie vaak klein. Persoonlijker schrijven? Gebruik je eigen <Link href="/module-template-instructies">templates &amp; instructies</Link>.</p>
            <p>Voor voorbeelden: bekijk onze <Link href="/case-studies">case studies</Link>.</p>
          </article>
        </div>
      </PageSection>

      {/* ── FAQ ── */}
      <PageSection alt>
        <div className="section-inner px-6">
          <div className="max-w-[720px] mx-auto">
            <h2 className="text-2xl font-extrabold text-text-primary mb-8 text-center">Veelgestelde vragen over InMails op LinkedIn en Elvatix</h2>
            <details className="faq-item"><summary>Hoeveel kandidaten kan ik tegelijk benaderen met Elvatix?</summary><p>Maximaal 25 per keer  - volledig binnen LinkedIn Recruiter. Zo houd je overzicht en kwaliteit, ook bij grotere outreach.</p></details>
            <details className="faq-item"><summary>Gebruik ik mijn eigen InMail credits?</summary><p>Ja. Elvatix werkt binnen je bestaande LinkedIn-omgeving. Je gebruikt dus gewoon de InMail credits die je al hebt.</p></details>
            <details className="faq-item"><summary>Klinkt het nog wel als ikzelf?</summary><p>Ja. Je gebruikt je eigen sjablonen en tone-of-voice. Elvatix zorgt alleen voor tijdswinst  - niet voor onpersoonlijke AI-berichten.</p></details>
            <details className="faq-item"><summary>Stuur ik berichten automatisch?</summary><p>Nee. Jij bepaalt wat er verstuurd wordt. Elk bericht controleer en verbeter je zelf voor verzending.</p></details>
            <details className="faq-item"><summary>Is dit compliant met LinkedIn-beleid?</summary><p>Ja. We houden rekening met je limieten en credits. Alles blijft binnen de spelregels van LinkedIn.</p></details>
          </div>
        </div>
      </PageSection>

      {/* ── CTA ── */}
      <PageSection>
        <div className="section-inner px-6">
          <div className="cta-section rounded-card text-center max-w-[800px] mx-auto">
            <h2 className="text-2xl font-extrabold text-white mb-3">Klaar om je InMails te verbeteren?</h2>
            <p className="text-white/80 mb-6">Ontdek hoe Elvatix jouw LinkedIn outreach versnelt.</p>
            <Link href="/demo" className="pill-btn bg-white text-elvatix font-bold px-8 py-3">Boek Gratis Demo</Link>
          </div>
        </div>
      </PageSection>
    </main>
  );
}
