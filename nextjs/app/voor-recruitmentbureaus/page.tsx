import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Recruitment automation voor bureaus | Elvatix",
  description: "Recruitment automation die menselijk klinkt. Schaal je outreach via LinkedIn zonder kwaliteit te verliezen.",
  alternates: { canonical: "https://elvatix.com/voor-recruitmentbureaus" },
};

export default function VoorRecruitmentbureausPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="section-inner">
          <span className="page-badge">Voor Wie</span>
          <h1 className="page-heading">Recruitment automation voor bureaus die willen opschalen zonder kwaliteit te verliezen</h1>
          <p className="page-subtitle">Efficiëntere outreach via LinkedIn, zonder dat elk bericht voelt als een copypaste.</p>
        </div>
      </section>

      <section className="page-section">
        <div className="section-inner px-6">
          <div className="max-w-[800px] mx-auto">
            <Image src="/images/voor-wie/recruitmentbureaus.png" alt="Elvatix voor recruitmentbureaus" width={800} height={450} className="rounded-card shadow-card mx-auto" />
          </div>
        </div>
      </section>

      <section className="page-section--alt">
        <div className="section-inner px-6">
          <article className="max-w-[720px] mx-auto prose-custom">
            <h2>Wat is recruitment automation?</h2>
            <p>Recruitment automation is het automatiseren van terugkerende taken binnen je wervingsproces. Voor bureaus betekent dit vooral één ding: efficiënter outreachen via LinkedIn. Je automatiseert InMails, connectieverzoeken en follow-ups met behoud van persoonlijkheid.</p>
            <p>Zo versnel je je recruitment outreach en leadgeneratie via LinkedIn, zonder dat elk bericht voelt als een copypaste. Perfect voor het vinden van kandidaten en het werven van nieuwe klanten.</p>

            <h2>Voor wie is recruitment automation geschikt?</h2>
            <p>Werk je op een recruitmentbureau, bekijk je dagelijks tientallen profielen en stuur je veel berichten via LinkedIn Recruiter Seat? Dan weet je hoe lastig het is om alles persoonlijk en foutloos te houden. Recruitment automation helpt je de balans houden tussen snelheid en kwaliteit. Zodat jij effectief kunt blijven sourcen en verkopen.</p>

            <h2>Waarom automatisering van je LinkedIn-outreach essentieel is</h2>
            <h3>Lage responspercentages kosten je tijd</h3>
            <p>Veel bureaus zien responsrates van 5% tot 10% op hun InMails en connectieverzoeken via LinkedIn. Tegelijkertijd stijgt de druk: sneller kandidaten leveren, meer klanten binnenhalen, minder fouten maken. Handmatig personaliseren is simpelweg niet te doen op schaal. En standaardberichten? Die worden genegeerd. Borg je toon met <Link href="/module-template-instructies">templates &amp; instructies</Link>.</p>

            <h3>Waarom standaard AI recruitment tools niet werken</h3>
            <p>Generieke AI-tools missen gevoel voor context. Ze herkennen geen branchespecifieke termen of functievereisten. Laat staan dat ze zich aanpassen aan jouw schrijfstijl of employer brand. Resultaat: berichten die vlak, generiek of onbegrijpelijk overkomen. Daarmee verlies je aandacht en vertrouwen. Test varianten met onze <Link href="/module-custom-gpt">Custom GPT&apos;s</Link>.</p>

            <h3>Wat als automatisering wel menselijk klinkt?</h3>
            <p>Met Elvatix verstuur je geautomatiseerde berichten die klinken alsof jij ze zelf hebt geschreven. Onze AI is getraind op Nederlandse vacaturedata, profielen en messaging. Daardoor is je outreach altijd contextueel, correct en overtuigend — zonder dat AI-stempel. Blijf in jouw stijl via <Link href="/module-template-instructies">templates &amp; instructies</Link>.</p>
          </article>
        </div>
      </section>

      <section className="page-section">
        <div className="section-inner px-6">
          <article className="max-w-[720px] mx-auto prose-custom">
            <h2>Recruitment automation binnen je LinkedIn Recruiter Seat</h2>
            <p>Elvatix werkt direct binnen je LinkedIn Recruiter Seat. Geen extra tools, geen leercurve. Selecteer maximaal 25 profielen en genereer met één klik persoonlijke InMails of connectieverzoeken. Voor kandidaten en prospects.</p>

            <h3>Recruitment en sales in één flow</h3>
            <p>Schakel moeiteloos tussen sourcing en prospects. Onze tool herkent automatisch of je een kandidaat of klant benadert en past de toon aan. (<Link href="/module-recruitment-sales-switch">Recruitment/Sales switch</Link>)</p>

            <h3>Automatische follow-ups zonder irritatie</h3>
            <p>Elvatix stuurt follow-ups die aansluiten op je vorige bericht. Geen herhalingen, wel relevantie. Ideaal als je veel mensen tegelijk benadert en geen tijd hebt om elke lead handmatig op te volgen. Zo verhoog je je bereik zonder extra tijd te investeren.</p>

            <h2>Wat levert recruitment automation concreet op?</h2>
            <ul>
              <li><strong>Meer intakes in minder tijd:</strong> Outreach op schaal die wel blijft voelen als maatwerk.</li>
              <li><strong>Hogere respons op LinkedIn:</strong> Berichten met context scoren beter (met gepersonaliseerde <Link href="/module-inmails">InMails</Link>).</li>
              <li><strong>Efficiënter team:</strong> Minder tijd kwijt aan handmatig schrijfwerk met hogere output.</li>
              <li><strong>Snellere leadgeneratie via LinkedIn</strong> (via <Link href="/module-recruitment-sales-switch">Recruitment/Sales switch</Link>).</li>
            </ul>

            <h2>Waarom groeien bureaus sneller met Elvatix?</h2>
            <p>Bureaus die Elvatix gebruiken, groeien zonder extra koppen. Onze AI is afgestemd op de Nederlandse markt, communiceert in jouw stijl en blijft foutenloos. Je berichten zijn niet meer te onderscheiden van handwerk — maar vergen slechts een fractie van de tijd. Daardoor kun je meer werven, meer verkopen en je merk versterken bij elke interactie. Bekijk resultaten in onze <Link href="/case-studies">case studies</Link>.</p>
            <p>Lees meer over onze oplossingen of ontdek hoe we recruiters en salesprofielen ondersteunen met een bewezen strategie. <Link href="/demo">Plan een demo</Link>.</p>
          </article>
        </div>
      </section>

      <section className="page-section--alt">
        <div className="section-inner px-6">
          <div className="max-w-[720px] mx-auto">
            <h2 className="text-2xl font-extrabold text-text-primary mb-8 text-center">Veelgestelde vragen over recruitment automation</h2>
            <details className="faq-item">
              <summary>Wat is het verschil tussen recruitment automation en een generieke AI-tool?</summary>
              <p>Recruitment automation met Elvatix is volledig afgestemd op de Nederlandse markt en begrijpt functietitels, branches en tone-of-voice. Generieke AI-tools missen die context.</p>
            </details>
            <details className="faq-item">
              <summary>Werkt recruitment automation ook voor sales op LinkedIn?</summary>
              <p>Ja. Elvatix herkent of je iemand werft of een salesprospect benadert en past de toon automatisch aan. Je leadgeneratie via LinkedIn wordt schaalbaarder en persoonlijker.</p>
            </details>
            <details className="faq-item">
              <summary>Waar draait Elvatix op?</summary>
              <p>Volledig binnen je eigen LinkedIn Recruiter Seat. Geen extra tools of dashboards nodig.</p>
            </details>
            <details className="faq-item">
              <summary>Kan ik een demo plannen met mijn eigen vacatures of doelgroepen?</summary>
              <p>Ja. We laten je live zien hoe Elvatix werkt op jouw profielen, teksten en campagnes.</p>
            </details>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="section-inner px-6">
          <div className="cta-section rounded-card text-center max-w-[800px] mx-auto">
            <h2 className="text-2xl font-extrabold text-white mb-3">Klaar om op te schalen?</h2>
            <p className="text-white/80 mb-6">Ontdek hoe Elvatix jouw bureau helpt groeien.</p>
            <Link href="/demo" className="pill-btn bg-white text-elvatix font-bold px-8 py-3">Plan Gratis Demo</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
