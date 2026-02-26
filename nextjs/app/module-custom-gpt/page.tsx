import type { Metadata } from "next";
import Link from "next/link";
import PageSection from "../components/PageSection";
import { CustomGPTIllustration } from "../components/illustrations/PageIllustrations";

export const metadata: Metadata = {
  title: "Custom GPT's: ingebouwde AI-assistenten voor recruiters",
  description: "Ontdek hoe recruiters zonder promptkennis AI slim inzetten met de ingebouwde GPT's van Elvatix. Meer reacties, minder werk.",
  alternates: { canonical: "https://elvatix.com/module-custom-gpt" },
};

export default function CustomGPTPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="section-inner">
          <span className="page-badge">Module</span>
          <h1 className="page-heading">Custom GPT&apos;s: ingebouwde AI-assistenten voor recruiters</h1>
          <p className="page-subtitle">Geen promptkennis nodig. Wij doen het denkwerk  - jij houdt de regie.</p>
        </div>
      </section>

      <PageSection><div className="section-inner px-6"><CustomGPTIllustration /></div></PageSection>

      {/* ── Wat is een prompt ── */}
      <PageSection alt>
        <div className="section-inner px-6">
          <div className="section-heading">
            <span className="section-heading__badge">AI Basics</span>
            <h2 className="section-heading__title">Wat betekent prompt in AI-context?</h2>
            <p className="section-heading__subtitle">Een prompt is een instructie of vraag die je aan een AI geeft. Hoe concreter, hoe beter de uitkomst.</p>
          </div>
          <div className="feature-rows">
            <div className="feature-row"><div className="feature-row__icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a4 4 0 0 1 4 4v1a3 3 0 0 1 2 5.2V14a4 4 0 0 1-3 3.87V20a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2.13A4 4 0 0 1 6 14v-1.8A3 3 0 0 1 8 7V6a4 4 0 0 1 4-4z"/></svg></div><div className="feature-row__content"><h3 className="feature-row__title">AI prompt uitleg voor recruiters</h3><p className="feature-row__desc">In simpele taal: een prompt is wat jij tegen de AI zegt. Bijvoorbeeld: &lsquo;Maak deze tekst vriendelijker&rsquo;. Goede prompts besparen tijd en verhogen de kwaliteit van je kandidaat-communicatie.</p></div></div>
            <div className="feature-row"><div className="feature-row__icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="12" y2="17"/></svg></div><div className="feature-row__content"><h3 className="feature-row__title">Voorbeelden van prompts</h3><p className="feature-row__desc">Herschrijf deze vacature in 3 zinnen voor LinkedIn. Maak dit bericht friendelijker. Benadruk Python, remote werken en teamcultuur. Met Elvatix hoef je dit niet zelf te leren.</p></div></div>
          </div>
        </div>
      </PageSection>

      {/* ── Two GPTs ── */}
      <PageSection dark>
        <div className="section-inner px-6">
          <div className="section-heading">
            <span className="section-heading__badge">Twee GPT&apos;s</span>
            <h2 className="section-heading__title">Wat doet Elvatix met prompts?</h2>
            <p className="section-heading__subtitle">Twee ingebouwde GPT&apos;s speciaal voor recruitment</p>
          </div>
          <div className="benefit-grid" style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
            <div className="benefit-card">
              <div className="benefit-card__icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"/></svg></div>
              <h3 className="benefit-card__title">De Instructie-GPT</h3>
              <p className="benefit-card__desc">Helpt je bij het maken van heldere AI-opdrachten. Simpele keuzemenu&apos;s leiden je door vragen als: moet het korter? Soft skills benadrukken? Luchtige of formele toon? Jij kiest je doel  - de AI doet het schrijfwerk.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-card__icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div>
              <h3 className="benefit-card__title">De Template-GPT</h3>
              <p className="benefit-card__desc">Werk je liever vanuit je eigen taalgebruik? Upload dan je eigen teksten of sjablonen. De Template-GPT scant je input en geeft gerichte verbeteringen. Daarbij leert de AI steeds beter je schrijfstijl herkennen.</p>
            </div>
          </div>
          <p className="text-center text-white/70 text-sm mt-6">Toepasbaar op <Link href="/module-inmails" className="text-green-light underline">InMails</Link> en <Link href="/module-connectieverzoeken" className="text-green-light underline">connectieverzoeken</Link>. Gebruik <Link href="/module-template-instructies" className="text-green-light underline">templates &amp; instructies</Link> voor consistente kwaliteit.</p>
        </div>
      </PageSection>

      {/* ── Benefits ── */}
      <PageSection>
        <div className="section-inner px-6">
          <div className="section-heading">
            <span className="section-heading__badge">Resultaat</span>
            <h2 className="section-heading__title">Wat levert het gebruik van Custom GPT&apos;s op?</h2>
          </div>
          <div className="feature-rows">
            <div className="feature-row"><div className="feature-row__icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg></div><div className="feature-row__content"><h3 className="feature-row__title">Geen prompt engineering nodig</h3><p className="feature-row__desc">Wij doen het denkwerk voor je. Jij kiest alleen het doel.</p></div></div>
            <div className="feature-row"><div className="feature-row__icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></div><div className="feature-row__content"><h3 className="feature-row__title">Meer reacties van kandidaten</h3><p className="feature-row__desc">Teksten sluiten beter aan op de ontvanger, waardoor responsrates stijgen.</p></div></div>
            <div className="feature-row"><div className="feature-row__icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg></div><div className="feature-row__content"><h3 className="feature-row__title">Eigen toon blijft behouden</h3><p className="feature-row__desc">Dankzij AI die leert van jouw stijl. Structureel betere output zonder herschrijven.</p></div></div>
            <div className="feature-row"><div className="feature-row__icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div><div className="feature-row__content"><h3 className="feature-row__title">Tijdsbesparing</h3><p className="feature-row__desc">Genereer en personaliseer voor 1 of 25 berichten tegelijk  - rechtstreeks in LinkedIn Recruiter Seat.</p></div></div>
          </div>
        </div>
      </PageSection>

      {/* ── Summary (SEO) ── */}
      <PageSection alt>
        <div className="section-inner px-6">
          <article className="max-w-[720px] mx-auto prose-custom">
            <h2>Samenvatting: wat is prompt en waarom werkt Elvatix anders?</h2>
            <p>Wat is prompt? Een prompt is een gerichte instructie of vraag die je invoert in een AI zoals ChatGPT. Het vertelt de AI wat je wilt bereiken  - een tekst, een boodschap, een aanpassing.</p>
            <p>Bij Elvatix krijg je hulp van twee Custom GPT&apos;s: de Instructie-GPT helpt je om goede prompts te bedenken en de Template-GPT optimaliseert je bestaande teksten. Je hebt geen technische kennis nodig  - maar behaalt wél betere resultaten in minder tijd.</p>
            <p>Wij zijn de enige AI-tool in Nederland met ingebouwde GPT&apos;s speciaal voor recruitment. Zet ze vandaag nog in  - je zult merken hoeveel werk je bespaart.</p>
          </article>
        </div>
      </PageSection>

      {/* ── FAQ ── */}
      <PageSection>
        <div className="section-inner px-6">
          <div className="max-w-[720px] mx-auto">
            <h2 className="text-2xl font-extrabold text-text-primary mb-8 text-center">Veelgestelde vragen over prompts en AI-gebruik</h2>
            <details className="faq-item"><summary>Moet ik weten hoe prompt engineering werkt?</summary><p>Nee. Jij kiest het doel van je boodschap en Elvatix helpt je stap voor stap. Jij blijft de regie houden.</p></details>
            <details className="faq-item"><summary>Wat als ik al eigen templates heb?</summary><p>Ideaal. Je kunt je bestaande templates uploaden in Elvatix. De Template-GPT doet suggesties en blijft leren van jouw stijl.</p></details>
            <details className="faq-item"><summary>Hoe blijft mijn tone-of-voice herkenbaar?</summary><p>Onze AI analyseert en herkent je schrijfstijl. Woordkeuze, toon en structuur blijven consistent  - ook bij bulkverzendingen.</p></details>
          </div>
        </div>
      </PageSection>

      {/* ── CTA ── */}
      <PageSection alt>
        <div className="section-inner px-6">
          <div className="cta-section rounded-card text-center max-w-[800px] mx-auto">
            <h2 className="text-2xl font-extrabold text-white mb-3">Ontdek de kracht van Custom GPT&apos;s</h2>
            <p className="text-white/80 mb-6">Probeer Elvatix en ervaar hoe AI je werk versnelt.</p>
            <Link href="/demo" className="pill-btn bg-white text-elvatix font-bold px-8 py-3">Boek Gratis Demo</Link>
          </div>
        </div>
      </PageSection>
    </main>
  );
}
