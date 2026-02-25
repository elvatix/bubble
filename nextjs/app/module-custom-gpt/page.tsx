import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Custom GPT’s: ingebouwde AI-assistenten voor recruiters",
  description: "Ontdek hoe recruiters zonder promptkennis AI slim inzetten met de ingebouwde GPT’s van Elvatix. Meer reacties, minder werk.",
  alternates: { canonical: "https://elvatix.com/module-custom-gpt" },
};

export default function Page() {
  return (
    <main className="pt-32 pb-20">
      <div className="section-inner px-6">
        {/* Hero */}
        <div className="text-center mb-12">
          <span className="page-badge">Module</span>
          <h1 className="page-heading">Custom GPT’s: ingebouwde AI-assistenten voor recruiters</h1>
        </div>

        {/* Image */}
        <div className="relative aspect-video max-w-[800px] mx-auto mb-16 rounded-card overflow-hidden border border-border">
          <Image src="/images/modules/custom-gpt.png" alt="Elvatix custom GPT module voor recruiters" fill className="object-contain p-4 bg-surface" />
        </div>

        {/* Body */}
        <article className="max-w-[720px] mx-auto prose-custom">
          <h2>Wat betekent prompt in AI-context?</h2>
          <p>Een prompt is een instructie of vraag die je geeft aan een AI zoals ChatGPT. Hoe duidelijker en concreter je bent, hoe beter de uitkomst. Met Elvatix hoef je niet zelf te leren prompt engineering — onze AI-tools helpen je automatisch.</p>

          <h2>AI prompt uitleg voor recruiters</h2>
          <p>In simpele taal: een prompt is wat jij tegen de AI zegt. Goede prompts besparen tijd en verhogen de kwaliteit van je communicatie met kandidaten.</p>
          <h3>Voorbeelden van prompts</h3>
          <ul>
            <li>Herschrijf deze vacature in 3 zinnen voor LinkedIn.</li>
            <li>Maak dit bericht vriendelijker en formeler.</li>
            <li>Benadruk Python, remote werken en teamcultuur.</li>
            <li>Vertaal deze tekst naar Engels en verbind het met onze missie.</li>
          </ul>

          <h2>Wat doet Elvatix met prompts?</h2>
          <h3>1. De Instructie-GPT</h3>
          <p>De Instructie-GPT helpt je bij het maken van heldere AI-opdrachten. Simpele keuzemenu’s leiden je door vragen als: Moet het korter? Wil je de nadruk op soft skills? Zoek je een luchtige of formele toon? Jij kiest je doel, de AI doet het schrijfwerk.</p>
          <h3>2. De Template-GPT</h3>
          <p>Werk je liever vanuit je eigen taalgebruik? Upload je eigen teksten of sjablonen. De Template-GPT scant je input en geeft gerichte verbeteringen. De AI leert steeds beter je eigen schrijfstijl herkennen.</p>

          <h2>Wat levert het gebruik van Custom GPT’s op?</h2>
          <ul>
            <li>Geen prompt engineering nodig: wij doen het denkwerk voor je.</li>
            <li>Meer reacties van kandidaten: teksten sluiten beter aan.</li>
            <li>Eigen toon blijft behouden: dankzij AI die leert van jouw stijl.</li>
            <li>Structureel betere output: slimme verbeteringen zonder herschrijven.</li>
            <li>Tijdsbesparing: genereren en personaliseren voor 1 of 25 berichten tegelijk.</li>
          </ul>

          {/* FAQ */}
          <h2>Veelgestelde vragen over prompts en AI-gebruik</h2>
          <details className="faq-item">
            <summary>Moet ik weten hoe prompt engineering werkt?</summary>
            <p>Nee. Jij kiest het doel van je boodschap en Elvatix helpt je stap voor stap.</p>
          </details>
          <details className="faq-item">
            <summary>Wat als ik al eigen templates heb?</summary>
            <p>Ideaal. Je kunt je bestaande templates uploaden in Elvatix. De Template-GPT doet suggesties en blijft leren van jouw stijl.</p>
          </details>
          <details className="faq-item">
            <summary>Hoe blijft mijn tone-of-voice herkenbaar?</summary>
            <p>Onze AI analyseert en herkent je schrijfstijl. Daardoor blijven woordkeuze, toon en structuur consistent, ook bij bulkverzendingen.</p>
          </details>
        </article>

        {/* CTA */}
        <div className="cta-section rounded-card text-center mt-16 max-w-[720px] mx-auto">
          <h2 className="text-2xl font-extrabold text-white mb-3">Klaar om het zelf te ervaren?</h2>
          <p className="text-white/80 mb-6">Plan een gratis demo en ontdek de mogelijkheden.</p>
          <Link href="/demo" className="pill-btn bg-white text-elvatix font-bold px-8 py-3">Boek Gratis Demo</Link>
        </div>
      </div>
    </main>
  );
}
