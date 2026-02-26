import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Voor Wie | Elvatix",
  description: "Elvatix is ontwikkeld voor iedereen die dagelijks met LinkedIn werkt om de juiste mensen te vinden en te bereiken.",
  alternates: { canonical: "https://elvatix.com/voor-wie" },
};

const segments = [
  {
    title: "Recruitmentbureaus", href: "/voor-recruitmentbureaus",
    icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#9BBB0A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
  },
  {
    title: "Corporate Recruiters", href: "/voor-corporate-recruiters",
    icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#9BBB0A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4"/><line x1="8" y1="6" x2="8" y2="6.01"/><line x1="12" y1="6" x2="12" y2="6.01"/><line x1="16" y1="6" x2="16" y2="6.01"/><line x1="8" y1="10" x2="8" y2="10.01"/><line x1="12" y1="10" x2="12" y2="10.01"/><line x1="16" y1="10" x2="16" y2="10.01"/><line x1="8" y1="14" x2="8" y2="14.01"/><line x1="12" y1="14" x2="12" y2="14.01"/><line x1="16" y1="14" x2="16" y2="14.01"/></svg>,
  },
  {
    title: "Detacheringsbureaus", href: "/voor-detacheringsbureaus",
    icon: <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#9BBB0A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  },
];

export default function VoorWiePage() {
  return (
    <main>
      <section className="page-hero">
        <div className="section-inner">
          <span className="page-badge">Voor Wie</span>
          <h1 className="page-heading">Voor recruiters en professionals</h1>
          <p className="page-subtitle">Elvatix is ontwikkeld voor iedereen die dagelijks met LinkedIn werkt om de juiste mensen te vinden en te bereiken.</p>
        </div>
      </section>

      <section className="page-section">
        <div className="section-inner px-6">
          <div className="page-grid-3">
            {segments.map((seg) => (
              <Link key={seg.href} href={seg.href} className="group block highlight-card overflow-hidden no-underline p-0">
                <div className="flex items-center justify-center aspect-video bg-surface rounded-t-[var(--radius-card)]">
                  <div className="w-16 h-16 rounded-2xl bg-elvatix-light flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {seg.icon}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-bold text-text-primary group-hover:text-elvatix transition-colors mb-1">Voor {seg.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section--alt">
        <div className="section-inner px-6">
          <article className="max-w-[720px] mx-auto prose-custom">
            <p>Of je nu voor een bureau werkt, intern verantwoordelijk bent voor recruitment of bemiddelt in de detachering: met Elvatix verstuur je in no-time persoonlijke en effectieve connectieverzoeken en InMails.</p>
            <p>Twijfel je waar te beginnen? Bekijk onze <Link href="/modules">modules</Link>, lees <Link href="/case-studies">case studies</Link> of <Link href="/demo">plan een demo</Link>.</p>
          </article>
        </div>
      </section>

      <section className="page-section">
        <div className="section-inner px-6">
          <div className="cta-section rounded-card text-center max-w-[800px] mx-auto">
            <h2 className="text-2xl font-extrabold text-white mb-3">Ontdek wat Elvatix voor jou kan doen</h2>
            <p className="text-white/80 mb-6">Plan een gratis demo en ervaar het zelf.</p>
            <Link href="/demo" className="pill-btn bg-white text-elvatix font-bold px-8 py-3">Boek Gratis Demo</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
