import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Elvatix voor recruiters: bureaus, corporate en detachering",
  description: "Ontdek welke Elvatix-oplossing past bij jouw rol. Of je nu werkt bij een bureau, als corporate recruiter of in de detachering.",
  alternates: { canonical: "https://elvatix.com/voor-wie" },
};

const segments = [
  { title: "Recruitmentbureaus", desc: "Outreach op schaal zonder kwaliteit te verliezen", href: "/voor-recruitmentbureaus", image: "/images/voor-wie/recruitmentbureaus.png", alt: "Elvatix voor recruitmentbureaus" },
  { title: "Corporate Recruiters", desc: "Meer reacties, sterker employer brand", href: "/voor-corporate-recruiters", image: "/images/voor-wie/corporate-recruiters.png", alt: "Elvatix voor corporate recruiters" },
  { title: "Detacheringsbureaus", desc: "Kandidaten én opdrachtgevers bereiken", href: "/voor-detacheringsbureaus", image: "/images/voor-wie/detacheringsbureaus.png", alt: "Elvatix voor detacheringsbureaus" },
];

export default function VoorWiePage() {
  return (
    <main>
      <section className="page-hero">
        <div className="section-inner">
          <span className="page-badge">Voor Wie</span>
          <h1 className="page-heading">Voor Wie</h1>
          <p className="page-subtitle">Elvatix is ontwikkeld voor iedereen die dagelijks met LinkedIn werkt om de juiste mensen te vinden en te bereiken.</p>
        </div>
      </section>

      <section className="page-section--alt">
        <div className="section-inner px-6">
          <article className="max-w-[720px] mx-auto prose-custom text-center">
            <p>Of je nu voor een bureau werkt, intern verantwoordelijk bent voor recruitment of bemiddelt in de detachering: met Elvatix verstuur je in no-time persoonlijke en effectieve <Link href="/module-connectieverzoeken">connectieverzoeken</Link> en <Link href="/module-inmails">InMails</Link>.</p>
            <p>Twijfel je waar te beginnen? Bekijk onze <Link href="/modules">modules</Link>, lees <Link href="/case-studies">case studies</Link> of plan een <Link href="/demo">demo</Link>.</p>
          </article>
        </div>
      </section>

      <section className="page-section">
        <div className="section-inner px-6">
          <div className="page-grid-3">
            {segments.map((s) => (
              <Link key={s.href} href={s.href} className="group block highlight-card overflow-hidden no-underline p-0">
                <div className="relative aspect-video bg-surface rounded-t-[var(--radius-card)]">
                  <Image src={s.image} alt={s.alt} fill className="object-contain p-4" />
                </div>
                <div className="p-5">
                  <h3 className="text-base font-bold text-text-primary group-hover:text-elvatix transition-colors mb-1">{s.title}</h3>
                  <p className="text-sm text-text-muted">{s.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="section-inner px-6">
          <div className="cta-section rounded-card text-center max-w-[800px] mx-auto">
            <h2 className="text-2xl font-extrabold text-white mb-3">Benieuwd wat Elvatix voor jou kan doen?</h2>
            <p className="text-white/80 mb-6">Plan een vrijblijvende demo en ontdek de mogelijkheden.</p>
            <Link href="/demo" className="pill-btn bg-white text-elvatix font-bold px-8 py-3">Boek Gratis Demo</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
