import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Wat is follow up? Uitleg + slimme LinkedIn-reminders",
  description: "Wat is follow up in recruitment op LinkedIn? Lees waarom opvolgen essentieel is en hoe Elvatix je helpt met persoonlijke AI-reminders.",
  alternates: { canonical: "https://elvatix.com/module-reminders" },
};

export default function Page() {
  return (
    <main>
      <section className="page-hero">
        <div className="section-inner">
          <span className="page-badge">Module</span>
          <h1 className="page-heading">Follow-up op LinkedIn: nooit meer<br className="hidden sm:block" /> een kandidaat missen</h1>
          <p className="page-subtitle">Eén follow-up kan je responsrate met 20 tot 30 procent verhogen. Elvatix doet het automatisch.</p>
        </div>
      </section>

      <section className="page-section">
        <div className="section-inner px-6">
          <div className="relative aspect-video max-w-[800px] mx-auto rounded-card overflow-hidden border border-border shadow-[var(--shadow-card)]">
            <Image src="/images/modules/reminders.png" alt="Elvatix reminders module voor LinkedIn follow-ups" fill className="object-contain p-4 bg-surface" />
          </div>
        </div>
      </section>

      <section className="page-section--alt">
        <div className="section-inner px-6">
          <article className="max-w-[720px] mx-auto prose-custom">
            <h2>Wat is een follow-up en waarom is het essentieel?</h2>
            <p>Een follow-up is een vervolgbericht na een eerste contactmoment. In recruitment is de follow-up vaak het verschil tussen een reactie en stilte. Veel kandidaten reageren niet op het eerste bericht, niet omdat ze niet geïnteresseerd zijn, maar omdat ze het vergeten zijn, druk hadden of het bericht op een slecht moment ontvingen.</p>
            <p>Eén follow-up kan je responsrate met 20 tot 30 procent verhogen. Maar consistent opvolgen kost tijd. Zeker als je tientallen kandidaten tegelijk benadert.</p>

            <h2>Het probleem: follow-ups worden vergeten of zijn te generiek</h2>
            <p>In de praktijk gaat follow-up vaak mis op twee manieren:</p>
            <ul>
              <li>Je vergeet het gewoon. Met veel openstaande trajecten is handmatig bijhouden wie je wanneer hebt benaderd onmogelijk.</li>
              <li>Je stuurt een generieke herinnering. &ldquo;Ik wilde even polsen of je mijn bericht hebt ontvangen&rdquo; voegt niets toe en voelt opdringerig.</li>
            </ul>
            <p>Beide scenario&apos;s kosten je kandidaten die eigenlijk wel geïnteresseerd waren.</p>

            <h2>Hoe de Reminders-module van Elvatix werkt</h2>
            <p>Elvatix plant automatisch een gepersonaliseerde follow-up in op basis van je eerste bericht. De AI schrijft een vervolgbericht dat inhoudelijk aansluit op wat je eerder stuurde. Geen kopie, geen generieke tekst, maar een logisch vervolg in jouw stem.</p>
            <ul>
              <li>Stel in na hoeveel dagen je een follow-up wil sturen.</li>
              <li>Elvatix genereert een follow-up die aansluit op je eerste bericht.</li>
              <li>Jij controleert en keurt goed voordat het verstuurd wordt.</li>
              <li>Geen kandidaat valt meer tussen wal en schip.</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="page-section">
        <div className="section-inner px-6">
          <div className="max-w-[720px] mx-auto">
            <h2 className="text-2xl font-extrabold text-text-primary mb-8 text-center">Veelgestelde vragen</h2>
            <details className="faq-item">
              <summary>Wanneer is het juiste moment voor een follow-up?</summary>
              <p>De meest effectieve follow-up wordt verstuurd drie tot vijf werkdagen na het eerste bericht. Te vroeg voelt opdringerig, te laat verlies je momentum.</p>
            </details>
            <details className="faq-item">
              <summary>Hoeveel follow-ups moet ik sturen?</summary>
              <p>Eén tot twee follow-ups is de norm. Na twee berichten zonder reactie is de kans groot dat de kandidaat gewoon niet geïnteresseerd is. Respecteer dat en focus je energie op nieuwe kandidaten.</p>
            </details>
            <details className="faq-item">
              <summary>Hoe zorg ik dat een follow-up niet irritant overkomt?</summary>
              <p>Door waarde toe te voegen in elk bericht. Elvatix schrijft follow-ups die inhoudelijk aansluiten op het eerste contact en iets nieuws toevoegen, een andere invalshoek, een relevante update of een concrete vraag.</p>
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
