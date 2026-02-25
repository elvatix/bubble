import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Elvatix is ontwikkeld voor iedereen die dagelijks met LinkedIn werkt om de juiste mensen te vinden en te bereiken.",
  description: "Elvatix is ontwikkeld voor iedereen die dagelijks met LinkedIn werkt om de juiste mensen te vinden en te bereiken. Of je nu voor een bureau werkt, intern verantwoordelijk bent voor recruitment of bemiddelt in de detachering: met Elvatix verstuur je in no-time persoonlijke en effectieve connectieverzoeken en InMails.",
  alternates: { canonical: "https://elvatix.com/voor-wie" },
};

const segments = [
  { title: "Recruitmentbureaus", href: "/voor-recruitmentbureaus", image: "/images/voor-wie/recruitmentbureaus.png", alt: "Elvatix voor recruitmentbureaus" },
  { title: "Corporate Recruiters", href: "/voor-corporate-recruiters", image: "/images/voor-wie/corporate-recruiters.png", alt: "Elvatix voor corporate recruiters" },
  { title: "Detacheringsbureaus", href: "/voor-detacheringsbureaus", image: "/images/voor-wie/detacheringsbureaus.png", alt: "Elvatix voor detacheringsbureaus" },
];

export default function VoorWiePage() {
  return (
    <main className="pt-32 pb-20">
      <div className="section-inner px-6">
        {/* Hero */}
        <div className="text-center mb-16">
          <span className="page-badge">Voor Wie</span>
          <h1 className="page-heading">Voor Wie</h1>
        </div>

        {/* Segment Cards */}
        <div className="page-grid-3 mb-20">
          {segments.map((seg) => (
            <Link key={seg.href} href={seg.href} className="group block rounded-card overflow-hidden border border-border hover:border-elvatix transition-all duration-300 no-underline hover:shadow-[var(--shadow-card)]">
              <div className="relative aspect-video bg-surface">
                <Image src={seg.image} alt={seg.alt} fill className="object-contain p-4" />
              </div>
              <div className="p-5">
                <h3 className="text-base font-bold text-text-primary group-hover:text-elvatix transition-colors">{seg.title}</h3>
              </div>
            </Link>
          ))}
        </div>

        {/* Body Content */}
        <article className="max-w-[720px] mx-auto prose-custom">
          <h2>Voor recruiters en professionals</h2>
          <p>Elvatix is ontwikkeld voor iedereen die dagelijks met <Link href="/integraties-linkedin">LinkedIn</Link> werkt om de juiste mensen te vinden en te bereiken. Of je nu voor een <Link href="/voor-recruitmentbureaus">bureau</Link> werkt, intern verantwoordelijk bent voor <Link href="/voor-corporate-recruiters">recruitment</Link> of bemiddelt in de <Link href="/voor-detacheringsbureaus">detachering</Link>: met Elvatix verstuur je in no-time persoonlijke en effectieve <Link href="/module-connectieverzoeken">connectieverzoeken</Link> en <Link href="/module-inmails">InMails</Link>.</p>
          <p>Twijfel je waar te beginnen? Bekijk onze <Link href="/modules">modules</Link>, lees case studies of plan een demo.</p>
        </article>

        {/* CTA */}
        <div className="cta-section rounded-card text-center mt-16 max-w-[720px] mx-auto">
          <h2 className="text-2xl font-extrabold text-white mb-3">Ontdek wat Elvatix voor jou kan betekenen</h2>
          <p className="text-white/80 mb-6">Plan een gratis demo en ervaar het zelf.</p>
          <Link href="/demo" className="pill-btn bg-white text-elvatix font-bold px-8 py-3">Boek Gratis Demo</Link>
        </div>
      </div>
    </main>
  );
}
