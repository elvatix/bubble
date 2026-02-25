import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Case Study Vibe Group: 4-6 uur tijdswinst per week per recruiter",
  description: "Hoe het recruitmentteam van Vibe Group met Elvatix meer kwalitatieve gesprekken voert en 4-6 uur per week bespaart.",
  alternates: { canonical: "https://elvatix.com/case-study-vibegroup" },
};

const recruiters = [
  { name: "Lisa", time: "45 min/dag", highlight: "Geen negatieve reacties meer", detail: "Sterker imago, meer persoonlijke connecties." },
  { name: "Mila", time: "1 uur/dag", highlight: "Responsrate 20% → 26% (pieken tot 35%)", detail: "+31% meer relevante reacties." },
  { name: "Ramon", time: "2–3 uur → 15 min", highlight: "38% respons op 75-100 berichten", detail: "Kandidaten reageren uitgebreider." },
  { name: "Sophie", time: "1–2 uur/dag", highlight: "20 kwalitatieve reacties in enkele uren", detail: "Vrijwel alleen geaccepteerde InMails." },
  { name: "Sara", time: "1–2 uur/dag", highlight: "33% responsrate", detail: "Kan bellen vanaf 10 uur i.p.v. hele ochtend schrijven." },
];

export default function Page() {
  return (
    <main>
      <section className="page-hero">
        <div className="section-inner">
          <span className="page-badge">Case Study</span>
          <h1 className="page-heading">Vibe Group: meer gesprekken,<br className="hidden sm:block" /> minder werkdruk</h1>
          <p className="page-subtitle">4-6 uur tijdswinst per week per recruiter. Hogere responsrates. Sterkere employer branding.</p>
        </div>
      </section>

      <section className="page-section">
        <div className="section-inner px-6">
          <div className="relative aspect-video max-w-[800px] mx-auto rounded-card overflow-hidden border border-border shadow-[var(--shadow-card)]">
            <Image src="/images/cases/vibegroup.png" alt="Case study Vibe Group met Elvatix" fill className="object-contain p-4 bg-surface" />
          </div>
        </div>
      </section>

      {/* Overall Stats */}
      <section className="page-section--alt">
        <div className="section-inner px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-[800px] mx-auto">
            <div className="stat-card"><div className="stat-value">4-6u</div><div className="stat-label">Bespaard per week</div></div>
            <div className="stat-card"><div className="stat-value">+31%</div><div className="stat-label">Meer relevante reacties</div></div>
            <div className="stat-card"><div className="stat-value">38%</div><div className="stat-label">Hoogste responsrate</div></div>
            <div className="stat-card"><div className="stat-value">5</div><div className="stat-label">Recruiters in pilot</div></div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="section-inner px-6">
          <article className="max-w-[720px] mx-auto prose-custom">
            <h2>De uitdaging</h2>
            <p>Een snelgroeiende recruitmentorganisatie liep tegen een herkenbaar probleem aan. Steeds meer vacatures. Steeds meer berichten. Recruiters hadden te weinig tijd om elke InMail echt persoonlijk te maken. De centrale vraag: kan Elvatix zorgen voor snelheid en personalisatie tegelijk?</p>

            <h2>De oplossing: Elvatix als copilot</h2>
            <p>Tijdens de pilot zette het team Elvatix in als copilot binnen <Link href="/integraties-linkedin">LinkedIn Recruiter Seat</Link>. Hun ervaring:</p>
            <ul>
              <li>De berichten klonken authentiek en persoonlijk.</li>
              <li>Kandidaten reageerden inhoudelijker en positiever.</li>
              <li>De werkdruk daalde merkbaar.</li>
            </ul>
          </article>
        </div>
      </section>

      {/* Individual Recruiter Results */}
      <section className="page-section--alt">
        <div className="section-inner px-6">
          <h2 className="text-2xl font-extrabold text-text-primary mb-8 text-center">Resultaten per recruiter</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[900px] mx-auto">
            {recruiters.map((r) => (
              <div key={r.name} className="highlight-card">
                <div className="text-xs font-bold text-elvatix uppercase tracking-wider mb-2">{r.name}</div>
                <div className="text-lg font-bold text-text-primary mb-1">{r.time} bespaard</div>
                <p className="text-sm text-text-muted mb-1">{r.highlight}</p>
                <p className="text-xs text-text-light">{r.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="section-inner px-6">
          <article className="max-w-[720px] mx-auto prose-custom">
            <h2>De impact voor de organisatie</h2>
            <ul>
              <li>Directe tijdswinst en efficiëntie.</li>
              <li>Hogere responspercentages en rijkere gesprekken.</li>
              <li>Een sterker werkgeversmerk door persoonlijke ervaringen.</li>
              <li>Duurzame schaalbaarheid: meer output, zonder concessies.</li>
            </ul>
            <p>Kortom: meer resultaat met minder werkdruk.</p>
          </article>
        </div>
      </section>

      <section className="page-section">
        <div className="section-inner px-6">
          <div className="cta-section rounded-card text-center max-w-[800px] mx-auto">
            <h2 className="text-2xl font-extrabold text-white mb-3">Jouw succesverhaal begint hier</h2>
            <p className="text-white/80 mb-6">Plan een demo en ontdek wat Elvatix voor jou kan doen.</p>
            <Link href="/demo" className="pill-btn bg-white text-elvatix font-bold px-8 py-3">Plan Gratis Demo</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
