import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Case Study Manpower: 260 InMails in 1,7 uur met Elvatix",
  description: "Hoe Robin van Manpower zijn schrijftijd met 96% reduceerde en zijn responsrate verhoogde naar 43%.",
  alternates: { canonical: "https://elvatix.com/case-study-manpower" },
};

export default function Page() {
  return (
    <main>
      <section className="page-hero">
        <div className="section-inner">
          <span className="page-badge">Case Study</span>
          <h1 className="page-heading">Manpower: persoonlijke<br className="hidden sm:block" /> InMails op schaal</h1>
          <p className="page-subtitle">Van 43 uur schrijfwerk naar 1,7 uur — met hogere respons.</p>
        </div>
      </section>

      <section className="page-section">
        <div className="section-inner px-6">
          <div className="relative aspect-video max-w-[800px] mx-auto rounded-card overflow-hidden border border-border shadow-[var(--shadow-card)]">
            <Image src="/images/cases/manpower.png" alt="Case study Manpower met Elvatix" fill className="object-contain p-4 bg-surface" />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="page-section--alt">
        <div className="section-inner px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-[800px] mx-auto">
            <div className="stat-card"><div className="stat-value">260</div><div className="stat-label">InMails verstuurd</div></div>
            <div className="stat-card"><div className="stat-value">1,7u</div><div className="stat-label">In totaal</div></div>
            <div className="stat-card"><div className="stat-value">43%</div><div className="stat-label">Responsrate</div></div>
            <div className="stat-card"><div className="stat-value">+25</div><div className="stat-label">Extra kandidaten</div></div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="section-inner px-6">
          <article className="max-w-[720px] mx-auto prose-custom">
            <h2>De uitdaging</h2>
            <p>Robin, recruiter bij Manpower, stond bekend om zijn persoonlijke touch. Elke kandidaat kreeg een zorgvuldig geschreven InMail, afgestemd op profiel, ervaring en soms zelfs een detail uit iemands hobby&apos;s.</p>
            <p>Die aanpak werkte — maar elke InMail kostte 10 tot 15 minuten. Met 260 berichten in twee maanden tikte de teller op tot 43 tot 65 uur. Meer dan anderhalve werkweek puur besteed aan typen.</p>

            <h2>De ontdekking</h2>
            <p>Robin testte de AI-copilot van Elvatix, geïntegreerd in <Link href="/integraties-linkedin">LinkedIn Recruiter Seat</Link>:</p>
            <ul>
              <li>Upload je eigen tone-of-voice en een aantal favoriete templates.</li>
              <li>Selecteer tot 25 kandidaten tegelijk.</li>
              <li>Laat Elvatix gepersonaliseerde InMails genereren.</li>
              <li>Check, tweak, verzenden.</li>
            </ul>
            <p>De essentie bleef: persoonlijk contact in zijn eigen stem. Alleen het proces veranderde radicaal.</p>

            <h2>De resultaten</h2>
            <ul>
              <li>Snelheid: van 10–15 minuten per bericht naar gemiddeld 30 seconden.</li>
              <li>Efficiëntie: 260 InMails in 1,7 uur in plaats van 43–65 uur.</li>
              <li>Responspercentage steeg van 40% naar 43%.</li>
              <li>Het aantal geaccepteerde berichten klom met 17%.</li>
              <li>25 extra kandidaten die daadwerkelijk in gesprek gingen.</li>
            </ul>

            <h2>De impact</h2>
            <p>Recruiters hoeven niet meer te kiezen tussen persoonlijk en schaalbaar. Met Elvatix kan het allebei: persoonlijke <Link href="/module-inmails">InMails</Link> in je eigen tone-of-voice, verstuurd in minuten — met responspercentages die zelfs hoger liggen dan handmatig werk.</p>
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
