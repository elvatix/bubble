import JsonLd from "@/components/JsonLd";
import type { Metadata } from "next";
import Link from "next/link";
import PageSection from "../components/PageSection";
import { VibeGroupIllustration } from "../components/illustrations/PageIllustrations";

export const metadata: Metadata = {
  title: "Hoe Elvatix zorgt voor meer output en minder werkdruk bij Vibe Group",
  description: "Meer kwalitatieve gesprekken én minder werkdruk. Ontdek de resultaten van Vibe Group met Elvatix.",
  alternates: { canonical: "https://elvatix.com/case-study-vibegroup" },
};

export default function CaseStudyVibeGroupPage() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Hoe Elvatix zorgt voor meer output en minder werkdruk bij Vibe Group",
    "about": {
      "@type": "Organization",
      "name": "Vibe Group"
    },
    "author": {
      "@type": "Organization",
      "name": "Elvatix"
    }
  };

  return (
    <main>
      <JsonLd schema={pageSchema} />
      <section className="page-hero">
        <div className="section-inner">
          <span className="page-badge">Case Study</span>
          <h1 className="page-heading">Hoe Elvatix zorgt voor meer output, sterkere respons, meer kwalitatieve gesprekken én minder werkdruk bij Vibe Group.</h1>
          <p className="page-subtitle">Kan Elvatix zorgen voor snelheid en personalisatie tegelijk?</p>
        </div>
      </section>

      <PageSection><div className="section-inner px-6"><VibeGroupIllustration /></div></PageSection>

      {/* ── Stat bar ── */}
      <PageSection alt>
        <div className="section-inner px-6">
          <div className="stat-bar">
            <div className="stat-bar__item"><div className="stat-bar__value">4-6 uur</div><div className="stat-bar__label">bespaard per week/recruiter</div></div>
            <div className="stat-bar__item"><div className="stat-bar__value">+31%</div><div className="stat-bar__label">meer relevante reacties</div></div>
            <div className="stat-bar__item"><div className="stat-bar__value">38%</div><div className="stat-bar__label">responsrate</div></div>
          </div>
        </div>
      </PageSection>

      {/* ── Challenge ── */}
      <PageSection>
        <div className="section-inner px-6">
          <div className="section-heading">
            <span className="section-heading__badge">De uitdaging</span>
            <h2 className="section-heading__title">Steeds meer vacatures, te weinig tijd voor personalisatie</h2>
          </div>
          <article className="max-w-[720px] mx-auto prose-custom">
            <p>Een snelgroeiende recruitmentorganisatie liep tegen een herkenbaar probleem aan. Steeds meer vacatures. Steeds meer berichten die verstuurd moesten worden. Recruiters hadden te weinig tijd om elke InMail echt persoonlijk te maken. En ondertussen bleef de druk op employer branding hoog  - want elke kandidaat moest zich gezien voelen.</p>
            <p>De centrale vraag was simpel maar spannend: kan Elvatix zorgen voor snelheid en personalisatie tegelijk?</p>
          </article>
        </div>
      </PageSection>

      {/* ── Solution ── */}
      <PageSection dark>
        <div className="section-inner px-6">
          <div className="section-heading">
            <span className="section-heading__badge">De oplossing</span>
            <h2 className="section-heading__title">Elvatix als copilot</h2>
            <p className="section-heading__subtitle">Menselijke, hyperpersoonlijke berichten op schaal mogelijk maken.</p>
          </div>
          <div className="feature-rows">
            <div className="feature-row"><div className="feature-row__icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></div><div className="feature-row__content"><h3 className="feature-row__title">Authentiek en persoonlijk</h3><p className="feature-row__desc">De berichten klonken authentiek en persoonlijk. Kandidaten reageerden inhoudelijker en positiever.</p></div></div>
            <div className="feature-row"><div className="feature-row__icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div><div className="feature-row__content"><h3 className="feature-row__title">Werkdruk daalde merkbaar</h3><p className="feature-row__desc">Direct inzetbaar als copilot binnen LinkedIn Recruiter Seat. InMails en connectieverzoeken genereren zonder extra tools.</p></div></div>
          </div>
        </div>
      </PageSection>

      {/* ── Results per recruiter ── */}
      <PageSection>
        <div className="section-inner px-6">
          <div className="section-heading">
            <span className="section-heading__badge">Per recruiter</span>
            <h2 className="section-heading__title">De resultaten per recruiter</h2>
          </div>
          <div className="feature-rows">
            <div className="feature-row"><div className="feature-row__icon" style={{background: "rgba(155,187,10,0.2)", fontSize: "14px", fontWeight: 800, color: "var(--color-elvatix)"}}>L</div><div className="feature-row__content"><h3 className="feature-row__title">Lisa  - 45 min/dag bespaard</h3><p className="feature-row__desc">&ldquo;Sinds ik met Elvatix werk krijg ik veel meer positieve reacties. Geen negatieve reacties meer zoals &lsquo;weer zo&apos;n generiek bericht&rsquo;.&rdquo; Sterker imago, meer persoonlijke connecties.</p></div></div>
            <div className="feature-row"><div className="feature-row__icon" style={{background: "rgba(155,187,10,0.2)", fontSize: "14px", fontWeight: 800, color: "var(--color-elvatix)"}}>M</div><div className="feature-row__content"><h3 className="feature-row__title">Mila  - 1 uur/dag, responsrate van 20% naar 26%</h3><p className="feature-row__desc">&ldquo;Je ziet dat kandidaten uitgebreider reageren. Dat helpt enorm. Je kunt makkelijker het gesprek in.&rdquo; +31% meer relevante reacties, met pieken tot 35%.</p></div></div>
            <div className="feature-row"><div className="feature-row__icon" style={{background: "rgba(155,187,10,0.2)", fontSize: "14px", fontWeight: 800, color: "var(--color-elvatix)"}}>R</div><div className="feature-row__content"><h3 className="feature-row__title">Ramon  - van 2-3 uur naar 15 min voor 100 berichten</h3><p className="feature-row__desc">&ldquo;Mensen reageren uitgebreider, waardoor ik sneller in gesprek raak.&rdquo; 38% respons (36% geaccepteerd, slechts 2% geweigerd).</p></div></div>
            <div className="feature-row"><div className="feature-row__icon" style={{background: "rgba(155,187,10,0.2)", fontSize: "14px", fontWeight: 800, color: "var(--color-elvatix)"}}>S</div><div className="feature-row__content"><h3 className="feature-row__title">Sophie  - 1-2 uur/dag, 20 reacties in uren</h3><p className="feature-row__desc">&ldquo;Ik had 20 gesprekken openstaan toen ik na de pauze terugkwam.&rdquo; Berichten in de ochtend → 20 kwalitatieve reacties binnen enkele uren.</p></div></div>
            <div className="feature-row"><div className="feature-row__icon" style={{background: "rgba(155,187,10,0.2)", fontSize: "14px", fontWeight: 800, color: "var(--color-elvatix)"}}>S</div><div className="feature-row__content"><h3 className="feature-row__title">Sara  - 1-2 uur/dag, 33% responsrate</h3><p className="feature-row__desc">&ldquo;Ik was eerst een hele ochtend bezig met berichten. Nu kan ik bellen vanaf 10 uur.&rdquo; Ook bij connectieverzoeken betere respons en nieuwe gesprekken.</p></div></div>
          </div>
        </div>
      </PageSection>

      {/* ── Team impact ── */}
      <PageSection alt>
        <div className="section-inner px-6">
          <div className="section-heading">
            <span className="section-heading__badge">Team resultaten</span>
            <h2 className="section-heading__title">Wat het team merkte</h2>
          </div>
          <div className="benefit-grid">
            <div className="benefit-card"><div className="benefit-card__icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div><h3 className="benefit-card__title">4-6 uur/week bespaard</h3><p className="benefit-card__desc">Per recruiter. Meer tijd voor bellen, opvolging en sourcing.</p></div>
            <div className="benefit-card"><div className="benefit-card__icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></div><h3 className="benefit-card__title">Kwalitatievere gesprekken</h3><p className="benefit-card__desc">Kandidaten reageerden uitgebreider en positiever.</p></div>
            <div className="benefit-card"><div className="benefit-card__icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div><h3 className="benefit-card__title">Sterkere employer branding</h3><p className="benefit-card__desc">Elk bericht voelde persoonlijk en professioneel. Duurzame schaalbaarheid.</p></div>
          </div>
        </div>
      </PageSection>

      {/* ── CTA ── */}
      <PageSection>
        <div className="section-inner px-6">
          <div className="cta-section rounded-card text-center max-w-[800px] mx-auto">
            <h2 className="text-2xl font-extrabold text-white mb-3">Ook zulke resultaten behalen?</h2>
            <p className="text-white/80 mb-6">Ontdek wat Elvatix voor jouw team kan betekenen.</p>
            <Link href="/demo" className="pill-btn bg-white text-elvatix font-bold px-8 py-3">Boek Gratis Demo</Link>
          </div>
        </div>
      </PageSection>
    </main>
  );
}
