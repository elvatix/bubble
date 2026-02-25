import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "LinkedIn plugin voor Recruiter Seat: sneller werken zonder toolswitches",
  description: "Elvatix werkt met een LinkedIn plugin voor Recruiters: werk direct in LinkedIn Recruiter zonder losse tools.",
  alternates: { canonical: "https://elvatix.com/integraties-linkedin" },
};

export default function Page() {
  return (
    <main>
      <section className="page-hero">
        <div className="section-inner">
          <span className="page-badge">Integraties</span>
          <h1 className="page-heading">LinkedIn plugin voor Recruiter Seat:<br className="hidden sm:block" /> sneller werken zonder toolswitches</h1>
          <p className="page-subtitle">Installeer in 10 minuten. Geen leercurve. Geen IT nodig.</p>
        </div>
      </section>

      <section className="page-section">
        <div className="section-inner px-6">
          <div className="relative aspect-video max-w-[800px] mx-auto rounded-card overflow-hidden border border-border shadow-[var(--shadow-card)]">
            <Image src="/images/integraties/linkedin.png" alt="Elvatix LinkedIn Chrome-extensie integratie" fill className="object-contain p-4 bg-surface" />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="page-section--alt">
        <div className="section-inner px-6">
          <h2 className="text-2xl font-extrabold text-text-primary mb-8 text-center">Waarom deze plugin het verschil maakt</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-[900px] mx-auto">
            <div className="highlight-card text-center">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="font-bold text-text-primary mb-2">10 min installatie</h3>
              <p className="text-sm text-text-muted">Chrome Web Store → Installeren → Koppelen → Klaar.</p>
            </div>
            <div className="highlight-card text-center">
              <div className="text-3xl mb-3">🔒</div>
              <h3 className="font-bold text-text-primary mb-2">100% veilig</h3>
              <p className="text-sm text-text-muted">Binnen LinkedIn regels en limieten. Geen data naar buiten.</p>
            </div>
            <div className="highlight-card text-center">
              <div className="text-3xl mb-3">🚫</div>
              <h3 className="font-bold text-text-primary mb-2">Geen IT nodig</h3>
              <p className="text-sm text-text-muted">Elke recruiter kan zelfstandig installeren en gebruiken.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="section-inner px-6">
          <article className="max-w-[720px] mx-auto prose-custom">
            <h2>Een Chrome-extensie, geen los platform</h2>
            <p>Als recruiter werk je vanuit LinkedIn. Het laatste wat je wilt is schakelen tussen systemen. Daarom is de LinkedIn plugin van Elvatix ontworpen als lichtgewicht Chrome-extensie. Alles blijft gekoppeld aan jouw Recruiter Seat.</p>

            <h2>Installeren, koppelen en klaar</h2>
            <p>Via de <a href="https://chromewebstore.google.com/detail/apdlpieiebgmgkkhimlbkliccnkimgem" target="_blank" rel="noopener noreferrer">Chrome Web Store</a> installeer je Elvatix met één klik. Daarna koppel je je LinkedIn Recruiter-account. Binnen enkele minuten heb je toegang tot slimme functies zoals <Link href="/module-inmails">InMails</Link> en <Link href="/module-connectieverzoeken">connectieverzoeken</Link> genereren.</p>

            <h2>Volledig binnen LinkedIn&apos;s regels</h2>
            <p>Elvatix werkt 100% binnen de gedragsregels en architectuur van LinkedIn. We gebruiken geen workarounds. Jij werkt zoals je gewend bent, veilig en betrouwbaar.</p>

            <h2>Blijf werken zoals je al doet — maar dan slimmer</h2>
            <p>De plugin past zich aan aan wat jij al doet. Personaliseer je outreach, stel <Link href="/module-reminders">reminders</Link> in en volg gesprekken op. Alle functies blijven binnen LinkedIn.</p>
          </article>
        </div>
      </section>

      <section className="page-section">
        <div className="section-inner px-6">
          <div className="cta-section rounded-card text-center max-w-[800px] mx-auto">
            <h2 className="text-2xl font-extrabold text-white mb-3">Klaar om te starten?</h2>
            <p className="text-white/80 mb-6">Installeer Elvatix in 10 minuten en ervaar het verschil.</p>
            <Link href="/demo" className="pill-btn bg-white text-elvatix font-bold px-8 py-3">Boek Gratis Demo</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
