import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Recruitment templates automatiseren én persoonlijk maken",
  description: "Maak je recruitment templates automatisch persoonlijker met Elvatix. Meer reacties, minder afwijzingen.",
  alternates: { canonical: "https://elvatix.com/module-template-instructies" },
};

export default function Page() {
  return (
    <main>
      <section className="page-hero">
        <div className="section-inner">
          <span className="page-badge">Module</span>
          <h1 className="page-heading">Template Instructies: jouw stijl,<br className="hidden sm:block" /> automatisch toegepast</h1>
          <p className="page-subtitle">Templates die automatisch worden gepersonaliseerd zodat elk bericht aanvoelt als maatwerk.</p>
        </div>
      </section>

      <section className="page-section">
        <div className="section-inner px-6">
          <div className="relative aspect-video max-w-[800px] mx-auto rounded-card overflow-hidden border border-border shadow-[var(--shadow-card)]">
            <Image src="/images/modules/templates.png" alt="Elvatix template instructies module" fill className="object-contain p-4 bg-surface" />
          </div>
        </div>
      </section>

      <section className="page-section--alt">
        <div className="section-inner px-6">
          <article className="max-w-[720px] mx-auto prose-custom">
            <h2>Waarom standaard recruitment templates niet werken</h2>
            <p>Templates zijn verleidelijk. Je schrijft één bericht en stuurt het naar honderd kandidaten. Snel en schaalbaar. Maar kandidaten herkennen een template direct. Ze voelen de copy-paste. En reageren niet.</p>
            <p>Tegelijkertijd is volledig handmatig schrijven niet schaalbaar. Elvatix biedt een derde weg: templates die automatisch worden gepersonaliseerd zodat elk bericht aanvoelt als maatwerk.</p>

            <h2>Hoe Template Instructies werken in Elvatix</h2>
            <p>Met de Template Instructies-module leg je vast hoe jij communiceert. Je geeft Elvatix instructies over je schrijfstijl, tone-of-voice, wat je wel en niet wil zeggen en welke elementen altijd terugkomen in jouw berichten.</p>
            <ul>
              <li>Stel je tone-of-voice in: formeel, informeel, direct, warm.</li>
              <li>Voeg voorbeeldberichten toe die jij goed vindt.</li>
              <li>Geef instructies over wat je altijd of nooit wil vermelden.</li>
              <li>Elvatix past alle gegenereerde berichten automatisch aan op jouw stijl.</li>
            </ul>
            <p>Het resultaat: berichten die klinken alsof jij ze zelf hebt geschreven, ook als de AI ze heeft gegenereerd.</p>

            <h2>Templates voor teams</h2>
            <p>In grotere recruitmentteams heeft iedereen zijn eigen schrijfwijze. Met Template Instructies kun je één gedeelde stijl instellen voor het hele team. Zo communiceert iedereen consistent, herkenbaar en professioneel.</p>
          </article>
        </div>
      </section>

      <section className="page-section">
        <div className="section-inner px-6">
          <div className="max-w-[720px] mx-auto">
            <h2 className="text-2xl font-extrabold text-text-primary mb-8 text-center">Veelgestelde vragen</h2>
            <details className="faq-item">
              <summary>Kan ik meerdere templates instellen voor verschillende doelgroepen?</summary>
              <p>Ja. Je kunt aparte instructies instellen per doelgroep, per type vacature of per fase in het recruitmentproces. Elvatix past de juiste instructies toe op basis van het scenario dat je kiest.</p>
            </details>
            <details className="faq-item">
              <summary>Hoe lang duurt het om mijn tone-of-voice in te stellen?</summary>
              <p>Gemiddeld tien tot vijftien minuten. Je geeft een aantal voorbeeldberichten op en beschrijft je schrijfstijl. Elvatix leert hier direct van.</p>
            </details>
            <details className="faq-item">
              <summary>Wat als mijn schrijfstijl verandert?</summary>
              <p>Je kunt je template instructies op elk moment aanpassen. Elvatix past zich direct aan op de nieuwe instructies.</p>
            </details>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="section-inner px-6">
          <div className="cta-section rounded-card text-center max-w-[800px] mx-auto">
            <h2 className="text-2xl font-extrabold text-white mb-3">Klaar om het zelf te ervaren?</h2>
            <p className="text-white/80 mb-6">Plan een gratis demo en ontdek de mogelijkheden.</p>
            <Link href="/demo" className="pill-btn bg-white text-elvatix font-bold px-8 py-3">Plan Gratis Demo</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
