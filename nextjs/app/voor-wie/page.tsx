import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Voor Wie | Elvatix",
  description: "Elvatix is ontwikkeld voor iedereen die dagelijks met LinkedIn werkt om de juiste mensen te vinden en te bereiken.",
  alternates: { canonical: "https://elvatix.com/voor-wie" },
};

const segments = [
  { title: "Recruitmentbureaus", href: "/voor-recruitmentbureaus", image: "/images/voor-wie/recruitmentbureaus.png", alt: "Elvatix voor recruitmentbureaus" },
  { title: "Corporate Recruiters", href: "/voor-corporate-recruiters", image: "/images/voor-wie/corporate-recruiters.png", alt: "Elvatix voor corporate recruiters" },
  { title: "Detacheringsbureaus", href: "/voor-detacheringsbureaus", image: "/images/voor-wie/detacheringsbureaus.png", alt: "Elvatix voor detacheringsbureaus" },
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
                <div className="relative aspect-video bg-surface rounded-t-[var(--radius-card)]">
                  <Image src={seg.image} alt={seg.alt} fill className="object-contain p-4" />
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
