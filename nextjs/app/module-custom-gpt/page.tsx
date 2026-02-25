import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Custom GPT's: ingebouwde AI-assistenten voor recruiters",
  description: "Ontdek hoe recruiters zonder promptkennis AI slim inzetten met de ingebouwde GPT's van Elvatix. Meer reacties, minder werk.",
  alternates: { canonical: "https://elvatix.com/module-custom-gpt" },
};

export default function Page() {
  return (
    <main>
      <section className="page-hero">
        <div className="section-inner">
          <span className="page-badge">Module</span>
          <h1 className="page-heading">Custom GPT&apos;s: AI-assistenten<br className="hidden sm:block" /> speciaal voor recruiters</h1>
          <p className="page-subtitle">Geen prompts schrijven. Geen trial-and-error. Kies een GPT en genereer berichten die direct kloppen.</p>
        </div>
      </section>

      <section className="page-section">
        <div className="section-inner px-6">
          <div className="relative aspect-video max-w-[800px] mx-auto rounded-card overflow-hidden border border-border shadow-[var(--shadow-card)]">
            <Image src="/images/modules/custom-gpt.png" alt="Elvatix custom GPT module voor recruiters" fill className="object-contain p-4 bg-surface" />
          </div>
        </div>
      </section>

      <section className="page-section--alt">
        <div className="section-inner px-6">
          <article className="max-w-[720px] mx-auto prose-custom">
            <h2>Wat is een Custom GPT en waarom is het relevant voor recruiters?</h2>
            <p>Een Custom GPT is een AI-assistent die speciaal is ingesteld voor een specifiek doel, een doelgroep of een schrijfstijl. In plaats van een generieke AI te gebruiken die alles een beetje kan, gebruik je een assistent die exact weet hoe jij communiceert en wat jouw kandidaten verwachten.</p>
            <p>Voor recruiters betekent dit: geen prompts meer leren, geen trial-and-error met AI-tools. Je opent Elvatix, kiest je Custom GPT en genereert berichten die direct kloppen.</p>

            <h2>Hoe werken de Custom GPT&apos;s van Elvatix?</h2>
            <p>Elvatix heeft meerdere ingebouwde GPT&apos;s die elk zijn afgestemd op een specifiek scenario binnen recruitment. Denk aan:</p>
            <ul>
              <li>Een GPT voor warme kandidaatbenadering.</li>
              <li>Een GPT voor koude outreach naar passieve kandidaten.</li>
              <li>Een GPT voor follow-up berichten na geen reactie.</li>
              <li>Een GPT voor sales-outreach naar opdrachtgevers.</li>
            </ul>
            <p>Je hoeft zelf geen prompts te schrijven. De GPT&apos;s zijn al geconfigureerd met de juiste instructies, toon en context. Jij levert de profieldata, de AI levert het bericht.</p>

            <h2>Jouw stijl, niet die van de AI</h2>
            <p>Het risico van generieke AI is dat berichten klinken als AI. Dat herken je meteen en kandidaten ook. De Custom GPT&apos;s van Elvatix zijn getraind op jouw tone-of-voice via de <Link href="/module-template-instructies">Template Instructies-module</Link>. Zo klinken berichten altijd als jij, niet als een robot.</p>
          </article>
        </div>
      </section>

      <section className="page-section">
        <div className="section-inner px-6">
          <div className="max-w-[720px] mx-auto">
            <h2 className="text-2xl font-extrabold text-text-primary mb-8 text-center">Veelgestelde vragen</h2>
            <details className="faq-item">
              <summary>Moet ik zelf een GPT configureren?</summary>
              <p>Nee. Elvatix levert kant-en-klare Custom GPT&apos;s die direct inzetbaar zijn. Je hoeft geen technische kennis te hebben of prompts te schrijven.</p>
            </details>
            <details className="faq-item">
              <summary>Kan ik een Custom GPT aanpassen op mijn eigen stijl?</summary>
              <p>Ja. Via de <Link href="/module-template-instructies">Template Instructies-module</Link> geef je jouw schrijfvoorkeuren en voorbeeldberichten op. De GPT past zich hierop aan.</p>
            </details>
            <details className="faq-item">
              <summary>Hoeveel Custom GPT&apos;s zijn er beschikbaar in Elvatix?</summary>
              <p>Elvatix biedt meerdere ingebouwde GPT&apos;s per scenario. Het aanbod wordt continu uitgebreid op basis van gebruikersfeedback.</p>
            </details>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="section-inner px-6">
          <div className="cta-section rounded-card text-center max-w-[800px] mx-auto">
            <h2 className="text-2xl font-extrabold text-white mb-3">Klaar om het zelf te ervaren?</h2>
            <p className="text-white/80 mb-6">Plan een gratis demo en ontdek de mogelijkheden.</p>
            <Link href="/demo" className="pill-btn bg-white text-elvatix font-bold px-8 py-3">Boek Gratis Demo</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
