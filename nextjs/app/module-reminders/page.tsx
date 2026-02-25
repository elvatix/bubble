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
    <main className="pt-32 pb-20">
      <div className="section-inner px-6">
        {/* Hero */}
        <div className="text-center mb-12">
          <span className="page-badge">Module</span>
          <h1 className="page-heading">Wat is een follow up? En waarom het je reactiepercentages verhoogt.</h1>
        </div>

        {/* Image */}
        <div className="relative aspect-video max-w-[800px] mx-auto mb-16 rounded-card overflow-hidden border border-border">
          <Image src="/images/modules/reminders.png" alt="Elvatix reminders module voor LinkedIn follow-ups" fill className="object-contain p-4 bg-surface" />
        </div>

        {/* Body */}
        <article className="max-w-[720px] mx-auto prose-custom">
          <h2>Eerst dit: wat bedoelen we met een follow-up</h2>
          <h3>Kort gezegd: een opvolgbericht na je eerste InMail</h3>
          <p>Een follow-up is het tweede of derde bericht dat je stuurt na je eerste InMail of connectieverzoek via LinkedIn. Het doel is een reactie uitlokken of het gesprek alsnog op gang brengen.</p>
          <h3>In recruitment is follow-up cruciaal</h3>
          <p>De meeste kandidaten reageren niet meteen. Ze missen het bericht, twijfelen nog of hebben simpelweg geen tijd. Follow-up via LinkedIn geeft je een tweede kans.</p>

          <h2>Waarom follow-up onmisbaar is in recruitment</h2>
          <h3>Reacties volgen vaak pas na 2 of 3 contactpogingen</h3>
          <p>Een enkel bericht is zelden genoeg. Idealiter stuur je 2 of zelfs 3 berichten over een paar dagen verspreid.</p>
          <h3>Veel recruiters volgen niet op of kopiëren hun eerste bericht</h3>
          <p>Herhaling werkt niet. Een goede reminder op LinkedIn voegt juist iets toe: nieuwe context, een andere insteek of inhoud die laat zien dat je echt geluisterd hebt.</p>

          <h2>Hier gaat follow-up vaak mis</h2>
          <h3>Geen structuur = geen opvolging = gemiste reacties</h3>
          <p>LinkedIn heeft geen ingebouwde herinneringsfunctie. Daardoor vergeten veel recruiters simpelweg om een tweede bericht te sturen.</p>
          <h3>Een herhaling van je eerste InMail werkt averechts</h3>
          <p>Een herhalend bericht zonder nieuwe inhoud schrikt af. Zeker bij senior of veelbenaderde kandidaten.</p>

          <h2>Slimme follow-up via Elvatix: persoonlijk en effectief</h2>
          <h3>Uniek in Nederland: gepersonaliseerde reminders binnen LinkedIn Recruiter</h3>
          <p>Met Elvatix voeg je direct na je eerste InMail een opvolgbericht toe. Onze AI genereert automatisch een gepersonaliseerde follow-up in jouw tone of voice.</p>
          <h3>Onze reminders bouwen altijd voort op jouw originele bericht</h3>
          <p>Elvatix leest het eerste bericht en creëert een logisch vervolg. Geen herhaling maar een uitbreiding die het gesprek verder brengt.</p>
          <h3>Jij blijft in controle, onze AI doet het voorwerk</h3>
          <p>Elke reminder klinkt als jou, niet als een bot. Jij leest het voorstel, past het eventueel aan en kiest zelf het verzendmoment.</p>

          <h2>Zo werkt follow-up met Elvatix</h2>
          <p><strong>Stap 1</strong> — Voeg een reminder toe aan je InMail in LinkedIn Recruiter. Als je werkt met LinkedIn Recruiter Seat kun je direct bij verzending van een InMail een reminder koppelen via Elvatix.</p>
          <p><strong>Stap 2</strong> — AI genereert een inhoudelijke en unieke follow-up. Onze technologie gebruikt je originele bericht als input. De AI schrijft een tweede bericht met nieuwe inhoud, afgestemd op jouw stijl en doelgroep.</p>
          <p><strong>Stap 3</strong> — Meerdere reminders tegelijk maar nooit hetzelfde. Je kunt tot 25 follow-ups in één keer voorbereiden. Toch blijft elk bericht uniek.</p>
          <p><strong>Stap 4</strong> — Jij reviewt en plant het verzendmoment. Je behoudt altijd de controle.</p>
          <p><strong>Stap 5</strong> — Verstuurd binnen de richtlijnen van LinkedIn. Onze reminders worden natuurlijk verspreid verzonden.</p>

          <h2>De voordelen op een rij</h2>
          <ul>
            <li>Volledig geïntegreerd met LinkedIn Recruiter.</li>
            <li>Meer reacties dankzij relevante follow-ups.</li>
            <li>Alles loopt automatisch mee in je recruitmentflow.</li>
            <li>Jij bepaalt wat er wanneer verzonden wordt.</li>
          </ul>

          {/* FAQ */}
          <h2>Veelgestelde vragen over follow-up in recruitment</h2>
          <details className="faq-item">
            <summary>Wat is follow-up in recruitment?</summary>
            <p>Een follow-up is een tweede of derde bericht dat je stuurt naar een kandidaat op platforms als LinkedIn, om alsnog reactie te krijgen als het eerste bericht wordt genegeerd.</p>
          </details>
          <details className="faq-item">
            <summary>Werkt follow-up via LinkedIn echt?</summary>
            <p>Ja. Een strategische follow-up maakt de kans op respons tot wel twee keer groter, mits je boodschap aansluit op het eerdere contact.</p>
          </details>
          <details className="faq-item">
            <summary>Maakt Elvatix automatische reminders voor LinkedIn?</summary>
            <p>Ja. Elvatix is de enige oplossing in Nederland die gepersonaliseerde AI-reminders koppelt aan je InMails in LinkedIn Recruiter.</p>
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
