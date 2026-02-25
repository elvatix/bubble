import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "LinkedIn outreach: persoonlijk en schaalbaar werven",
  description: "Wat is LinkedIn outreach? Leer hoe je als recruiter of consultant kandidaten persoonlijk en schaalbaar kunt benaderen via LinkedIn, met hulp van Elvatix.",
  alternates: { canonical: "https://elvatix.com/modules" },
};

const modules = [
  { title: "Connectieverzoeken", desc: "Persoonlijke verzoeken op schaal", href: "/module-connectieverzoeken", image: "/images/modules/connectieverzoeken.png", alt: "Elvatix connectieverzoeken module" },
  { title: "Custom GPT's", desc: "AI-assistenten voor elk scenario", href: "/module-custom-gpt", image: "/images/modules/custom-gpt.png", alt: "Elvatix custom GPT module" },
  { title: "InMails", desc: "Meer reacties, minder schrijftijd", href: "/module-inmails", image: "/images/modules/inmails.png", alt: "Elvatix InMails module" },
  { title: "Reminders", desc: "Geen kandidaat meer vergeten", href: "/module-reminders", image: "/images/modules/reminders.png", alt: "Elvatix reminders module" },
  { title: "Template Instructies", desc: "Jouw stijl, automatisch toegepast", href: "/module-template-instructies", image: "/images/modules/templates.png", alt: "Elvatix template instructies module" },
  { title: "Recruitment/Sales Switch", desc: "Twee doelen, één tool", href: "/module-recruitment-sales-switch", image: "/images/modules/sales-switch.png", alt: "Elvatix recruitment sales switch module" },
];

export default function ModulesPage() {
  return (
    <main>
      {/* Hero with gradient */}
      <section className="page-hero">
        <div className="section-inner">
          <span className="page-badge">Modules</span>
          <h1 className="page-heading">LinkedIn outreach: zo werf je<br className="hidden sm:block" /> persoonlijk én op schaal</h1>
          <p className="page-subtitle">Elvatix bestaat uit zes modules. Elke module is gericht op een specifiek onderdeel van je LinkedIn outreach.</p>
        </div>
      </section>

      {/* Module Grid */}
      <section className="page-section">
        <div className="section-inner px-6">
          <div className="page-grid-3">
            {modules.map((mod) => (
              <Link key={mod.href} href={mod.href} className="group block highlight-card overflow-hidden no-underline p-0">
                <div className="relative aspect-video bg-surface rounded-t-[var(--radius-card)]">
                  <Image src={mod.image} alt={mod.alt} fill className="object-contain p-4" />
                </div>
                <div className="p-5">
                  <h3 className="text-base font-bold text-text-primary group-hover:text-elvatix transition-colors mb-1">{mod.title}</h3>
                  <p className="text-sm text-text-muted">{mod.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Body Content */}
      <section className="page-section--alt">
        <div className="section-inner px-6">
          <article className="max-w-[720px] mx-auto prose-custom">
            <h2>Wat is LinkedIn outreach?</h2>
            <p>LinkedIn outreach is het proactief benaderen van kandidaten of zakelijke contacten via LinkedIn. Voor recruiters betekent dit: de juiste persoon op het juiste moment aanspreken met een bericht dat écht aansluit. Geen standaardtekst, maar een bericht dat voelt alsof jij het persoonlijk hebt geschreven.</p>
            <p>Maar dat kost tijd. En tijd is schaars. Daarom bouwden we Elvatix: zodat jij persoonlijk kunt blijven, ook als je op schaal werkt.</p>

            <h2>Hoe werkt LinkedIn outreach via Elvatix?</h2>
            <p>Elvatix werkt als een AI-copilot direct in je <Link href="/integraties-linkedin">LinkedIn Recruiter Seat</Link>. Je selecteert kandidaten, kiest een module en genereert berichten die klinken alsof jij ze zelf hebt geschreven. Alles blijft in jouw controle: jij bepaalt wat er uitgaat.</p>
          </article>
        </div>
      </section>

      {/* FAQ */}
      <section className="page-section">
        <div className="section-inner px-6">
          <div className="max-w-[720px] mx-auto">
            <h2 className="text-2xl font-extrabold text-text-primary mb-8 text-center">Veelgestelde vragen over LinkedIn outreach</h2>
            <details className="faq-item">
              <summary>Wat maakt LinkedIn outreach effectief?</summary>
              <p>Effectieve LinkedIn outreach is persoonlijk, relevant en op het juiste moment verstuurd. Berichten die aansluiten bij het profiel, de ervaring of de situatie van de ontvanger scoren significant beter dan generieke templates.</p>
            </details>
            <details className="faq-item">
              <summary>Hoeveel berichten kan ik tegelijk personaliseren met Elvatix?</summary>
              <p>Met Elvatix kun je tot 25 berichten tegelijk laten genereren, elk uniek en afgestemd op het profiel van de ontvanger. Zo combineer je schaal met persoonlijkheid.</p>
            </details>
            <details className="faq-item">
              <summary>Werkt Elvatix samen met LinkedIn Recruiter Seat?</summary>
              <p>Ja. Elvatix integreert direct in je LinkedIn Recruiter Seat via een Chrome-extensie. Je hoeft niet te schakelen tussen tools of dashboards.</p>
            </details>
            <details className="faq-item">
              <summary>Is LinkedIn outreach via Elvatix veilig?</summary>
              <p>Ja. Elvatix werkt volledig binnen de limieten en richtlijnen van LinkedIn. Er worden geen verboden methodes of automatische verzendingen gebruikt. Jij keurt elk bericht goed voordat het verstuurd wordt.</p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="page-section">
        <div className="section-inner px-6">
          <div className="cta-section rounded-card text-center max-w-[800px] mx-auto">
            <h2 className="text-2xl font-extrabold text-white mb-3">Klaar om je outreach te transformeren?</h2>
            <p className="text-white/80 mb-6">Ontdek hoe Elvatix jouw workflow versnelt.</p>
            <Link href="/demo" className="pill-btn bg-white text-elvatix font-bold px-8 py-3">Boek Gratis Demo</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
