import type { Metadata } from "next";
import Link from "next/link";
import { CustomGPTIllustration } from "../components/illustrations/PageIllustrations";

export const metadata: Metadata = {
  title: "Custom GPT's: ingebouwde AI-assistenten voor recruiters | Elvatix",
  description: "Ontdek hoe recruiters zonder promptkennis AI slim inzetten met de ingebouwde GPT's van Elvatix. Meer reacties, minder werk.",
  alternates: { canonical: "https://elvatix.com/module-custom-gpt" },
};

export default function CustomGPTPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="section-inner">
          <span className="page-badge">Module</span>
          <h1 className="page-heading">Custom GPT&apos;s: ingebouwde AI-assistenten voor recruiters</h1>
          <p className="page-subtitle">Geen promptkennis nodig. Wij doen het denkwerk — jij houdt de regie.</p>
        </div>
      </section>

      <section className="page-section">
        <div className="section-inner px-6">
          <CustomGPTIllustration />
        </div>
      </section>

      <section className="page-section--alt">
        <div className="section-inner px-6">
          <article className="max-w-[720px] mx-auto prose-custom">
            <h2>Wat betekent prompt in AI-context?</h2>
            <p>Een prompt is een instructie of vraag die je geeft aan een AI zoals ChatGPT. Daarmee vertel je wat je verwacht: een tekst, idee of herschrijving. Hoe duidelijker en concreter je bent, hoe beter de uitkomst. In recruitment betekent dit dat je AI gerichte opdrachten geeft om communicatie sneller en persoonlijker te maken.</p>
            <p>Voorbeelden: een vacature samenvatten, een InMail herschrijven of een connectieverzoek verpersoonlijken. En dat zonder technische kennis. Met Elvatix hoef je niet zelf te leren prompt engineering — onze AI-tools helpen je automatisch.</p>

            <h3>AI prompt uitleg voor recruiters</h3>
            <p>In simpele taal: een prompt is wat jij tegen de AI zegt. Bijvoorbeeld: &lsquo;Maak deze tekst vriendelijker&rsquo;. Goede prompts besparen tijd en verhogen de kwaliteit van je communicatie met kandidaten. Het voorkomt eindeloos herschrijven of knippen-plakken in documenten.</p>

            <h3>Voorbeelden van prompts</h3>
            <p>Typische en effectieve prompts voor recruiters zijn:</p>
            <ul>
              <li>Herschrijf deze vacature in 3 zinnen voor LinkedIn.</li>
              <li>Maak dit bericht vriendelijker en formeler.</li>
              <li>Benadruk Python, remote werken en teamcultuur.</li>
              <li>Vertaal deze tekst naar Engels en verbind het met onze missie.</li>
            </ul>
            <p>Werk met je eigen <Link href="/module-template-instructies">templates &amp; instructies</Link> voor consistente kwaliteit.</p>
          </article>
        </div>
      </section>

      <section className="page-section">
        <div className="section-inner px-6">
          <article className="max-w-[720px] mx-auto prose-custom">
            <h2>Wat doet Elvatix met prompts?</h2>
            <h3>Twee ingebouwde GPT&apos;s speciaal voor recruitment</h3>

            <h4>1. De Instructie-GPT</h4>
            <p>De Instructie-GPT helpt je bij het maken van heldere AI-opdrachten. Simpele keuzemenu&apos;s leiden je door vragen als:</p>
            <ul>
              <li>Moet het korter?</li>
              <li>Wil je de nadruk op soft skills?</li>
              <li>Zoek je liever een luchtige of formele toon?</li>
            </ul>
            <p>Jij kiest je doel — de AI doet het schrijfwerk. En je past dit moeiteloos toe op meerdere kandidaten tegelijk. Zo doe je aan prompt engineering zonder promptkennis. Toepasbaar op <Link href="/module-inmails">InMails</Link> en <Link href="/module-connectieverzoeken">connectieverzoeken</Link>.</p>

            <h4>2. De Template-GPT</h4>
            <p>Werk je liever vanuit je eigen taalgebruik? Upload dan je eigen teksten of sjablonen. De Template-GPT scant je input en geeft gerichte verbeteringen:</p>
            <ul>
              <li>Kort deze alinea in.</li>
              <li>Maak deze zin persoonlijker.</li>
              <li>Gebruik hier een concreet voorbeeld.</li>
            </ul>
            <p>Daarbij leert de AI steeds beter je eigen schrijfstijl herkennen. Zo blijf je klinken als jezelf — alleen dan sneller en consistenter. Zo blijven je <Link href="/module-template-instructies">templates &amp; instructies</Link> centraal in je workflow.</p>
          </article>
        </div>
      </section>

      <section className="page-section--alt">
        <div className="section-inner px-6">
          <article className="max-w-[720px] mx-auto prose-custom">
            <h2>Wat levert het gebruik van Custom GPT&apos;s op?</h2>
            <p>Met Elvatix krijg je concrete voordelen zonder dat je zelf hoeft uit te zoeken hoe AI werkt:</p>
            <ul>
              <li><strong>Geen prompt engineering nodig:</strong> wij doen het denkwerk voor je.</li>
              <li><strong>Meer reacties van kandidaten:</strong> teksten sluiten beter aan.</li>
              <li><strong>Eigen toon blijft behouden:</strong> dankzij AI die leert van jouw stijl.</li>
              <li><strong>Structureel betere output:</strong> slimme verbeteringen zonder herschrijven.</li>
              <li><strong>Tijdsbesparing:</strong> genereren en personaliseren voor 1 of 25 berichten tegelijk (rechtstreeks in LinkedIn Recruiter Seat).</li>
            </ul>
            <p>Resultaat zie je direct terug in <Link href="/module-inmails">InMails</Link> en <Link href="/module-connectieverzoeken">connectieverzoeken</Link>.</p>
          </article>
        </div>
      </section>

      <section className="page-section">
        <div className="section-inner px-6">
          <div className="max-w-[720px] mx-auto">
            <h2 className="text-2xl font-extrabold text-text-primary mb-8 text-center">Veelgestelde vragen over prompts en AI-gebruik</h2>
            <details className="faq-item">
              <summary>Moet ik weten hoe prompt engineering werkt?</summary>
              <p>Nee. Jij kiest het doel van je boodschap en Elvatix helpt je stap voor stap. Jij blijft de regie houden — wij zorgen dat je snel tot goede teksten komt.</p>
            </details>
            <details className="faq-item">
              <summary>Wat als ik al eigen templates heb?</summary>
              <p>Ideaal. Je kunt je bestaande templates uploaden in Elvatix. De Template-GPT doet suggesties en blijft leren van jouw stijl. Geen prompt schrijven nodig.</p>
            </details>
            <details className="faq-item">
              <summary>Hoe blijft mijn tone-of-voice herkenbaar?</summary>
              <p>Onze AI analyseert en herkent je schrijfstijl. Daardoor blijven woordkeuze, toon en structuur consistent — ook bij bulkverzendingen. Jouw stem, maar sneller.</p>
            </details>
          </div>
        </div>
      </section>

      <section className="page-section--alt">
        <div className="section-inner px-6">
          <article className="max-w-[720px] mx-auto prose-custom">
            <h2>Samenvatting: wat is prompt en waarom werkt Elvatix anders?</h2>
            <p>Wat is prompt? Een prompt is een gerichte instructie of vraag die je invoert in een AI zoals ChatGPT. Het vertelt de AI wat je wilt bereiken — een tekst, een boodschap, een aanpassing.</p>
            <p>Bij Elvatix krijg je hulp van twee Custom GPT&apos;s: de Instructie-GPT helpt je om goede prompts te bedenken en de Template-GPT optimaliseert je bestaande teksten. Je hebt geen technische kennis nodig — maar behaalt wél betere resultaten in minder tijd.</p>
            <p>Wij zijn de enige AI-tool in Nederland met ingebouwde GPT&apos;s speciaal voor recruitment. Zet ze vandaag nog in — je zult merken hoeveel werk je bespaart.</p>
          </article>
        </div>
      </section>

      <section className="page-section">
        <div className="section-inner px-6">
          <div className="cta-section rounded-card text-center max-w-[800px] mx-auto">
            <h2 className="text-2xl font-extrabold text-white mb-3">Ontdek de kracht van Custom GPT&apos;s</h2>
            <p className="text-white/80 mb-6">Probeer Elvatix en ervaar hoe AI je werk versnelt.</p>
            <Link href="/demo" className="pill-btn bg-white text-elvatix font-bold px-8 py-3">Boek Gratis Demo</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
