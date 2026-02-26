import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Recruitment templates die persoonlijk wél werken | Elvatix",
  description: "Upload je eigen templates, voeg instructies toe en laat Elvatix je berichten automatisch persoonlijk maken. Zonder dat het generiek wordt.",
  alternates: { canonical: "https://elvatix.com/module-template-instructies" },
};

export default function TemplateInstructiesPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="section-inner">
          <span className="page-badge">Module</span>
          <h1 className="page-heading">Recruitment templates die persoonlijk wél werken</h1>
          <p className="page-subtitle">Jouw stijl, automatisch toegepast op elk bericht.</p>
        </div>
      </section>

      <section className="page-section">
        <div className="section-inner px-6">
          <div className="max-w-[800px] mx-auto">
            <Image src="/images/modules/templates.png" alt="Elvatix template instructies module" width={800} height={450} className="rounded-card shadow-card mx-auto" />
          </div>
        </div>
      </section>

      <section className="page-section--alt">
        <div className="section-inner px-6">
          <article className="max-w-[720px] mx-auto prose-custom">
            <h2>Waarom recruitment standaardberichten vaak niet werken</h2>
            <p>Gebruik je altijd dezelfde recruitment standaardberichten voor e-mail of LinkedIn? Dan klinkt je communicatie al snel generiek. Kandidaten herkennen het meteen — dezelfde openingszin, dezelfde afsluiting. Hun reactie: nul. Daardoor verlies je waardevolle matches.</p>
            <p>We horen het dagelijks: &ldquo;ik krijg nauwelijks respons.&rdquo; Of van kandidaten: &ldquo;dit bericht kreeg ik al drie keer deze week.&rdquo; Tijd om je messaging templates voor recruitment anders aan te pakken.</p>

            <h2>Gebruik je recruitment templates als krachtig startpunt</h2>
            <p>Gooi je sjablonen niet weg. Je recruitment templates zijn juist een goede basis. Upload ze in Elvatix en wij leren je schrijfstijl, tone of voice en opbouw automatisch herkennen. Zo maak je elk bericht snel persoonlijk zonder dat je het helemaal opnieuw hoeft te typen.</p>

            <h2>Geef instructies, krijg automatisch aangepaste berichten</h2>
            <p>Wil je klinken zoals jij dat wilt? Voeg simpelweg instructies toe zoals:</p>
            <ul>
              <li>Maak het korter en directer</li>
              <li>Voeg een luchtige toon toe</li>
              <li>Gebruik een zakelijke aanspreekvorm</li>
              <li>Laat het klinken alsof het snel geschreven is</li>
            </ul>
            <p>Elvatix past je recruitment InMail templates of LinkedIn bericht templates meteen aan. Je ziet het resultaat direct en kunt het toepassen op tientallen kandidaten tegelijk.</p>

            <h2>Jij houdt de regie — wij helpen je schaalbaar maken</h2>
            <p>Alle gegenereerde berichten komen overzichtelijk terug in je dashboard. Daar kun je ze nakijken, aanpassen of direct verzenden vanuit Elvatix. Jij keurt alles goed.</p>
            <p>Werk je met LinkedIn Recruiter? Elvatix integreert soepel in je workflow. Je blijft werken zoals je gewend bent — alleen veel sneller, consistenter en persoonlijker. Meer conversie, minder tijdverlies. Bekijk resultaten in onze <Link href="/case-studies">case studies</Link>.</p>

            <h2>Recruitment messaging templates toepassen op schaal</h2>
            <p>Vanuit één basisbericht — bijvoorbeeld een persoonlijke vacaturemail — maakt Elvatix een gepersonaliseerde variant. Perfect voor verschillende rollen, doelgroepen of momenten in je funnel. Je recruitment messaging templates worden daarmee één keer scherp neergezet en daarna slim gepersonaliseerd voor elke kandidaat. Voeg waar nodig <Link href="/module-reminders">reminders</Link> toe voor gestructureerde opvolging.</p>
            <p>Wat je terugziet in je berichten: menselijke toon, herkenbare stijl, betere respons. Zonder dat je zelf alles hoeft te herschrijven.</p>
          </article>
        </div>
      </section>

      <section className="page-section">
        <div className="section-inner px-6">
          <article className="max-w-[720px] mx-auto prose-custom">
            <h2>Voorbeeld: van standaardberichten naar persoonlijk contact</h2>
            <p><strong>Originele recruitment template:</strong></p>
            <blockquote>Hi [Naam], ik ben recruiter bij [Bureau]. Ik zie dat je ervaring hebt in [functiegebied] en heb een interessante rol beschikbaar. Zullen we even bellen?</blockquote>
            <p><strong>Automatisch herschreven via Elvatix met instructie &ldquo;vriendelijker, luchtiger en persoonlijker&rdquo;:</strong></p>
            <blockquote>Hoi [Naam], Ik zie dat je al een interessante reis hebt gemaakt in de consultancywereld. Van je rol als X en X naar een nieuwe uitdaging bij X — dat laat zien hoe gedreven je bent in deze sector. Het lijkt erop dat je een stevige basis hebt in het omgaan met X. Je ervaring lijkt goed te passen bij een leuke uitdaging die ik op dit moment heb. Binnenkort even bellen?</blockquote>
            <p>Inhoud blijft gelijk. De toon verschilt. En dat verschil zorgt voor reactie. Zo worden jouw messaging templates voor recruitment ineens menselijker, aantrekkelijker en effectiever.</p>

            <h2>Zelf proberen? Maak je recruitment templates persoonlijker</h2>
            <p>Wij geloven dat de beste communicatie van binnenuit komt. Daarom helpt Elvatix jou als recruiter om sneller en persoonlijker te werken. Jouw stijl. Jouw controle. Onze hulp op schaal.</p>
            <p>Wil je ontdekken hoe je recruitment e-mail templates en LinkedIn bericht templates automatisch persoonlijk maakt — zonder dat het generiek wordt? <Link href="/demo">Plan een demo in</Link>.</p>
          </article>
        </div>
      </section>

      <section className="page-section--alt">
        <div className="section-inner px-6">
          <div className="max-w-[720px] mx-auto">
            <h2 className="text-2xl font-extrabold text-text-primary mb-8 text-center">Veelgestelde vragen over recruitment templates</h2>
            <details className="faq-item">
              <summary>Wat is een recruitment template</summary>
              <p>Een recruitment template is een standaardtekst die recruiters gebruiken om kandidaten sneller te benaderen, bijvoorbeeld via e-mail of LinkedIn berichten. Het bespaart tijd maar klinkt vaak onpersoonlijk.</p>
            </details>
            <details className="faq-item">
              <summary>Hoe maak ik een recruitment template persoonlijker</summary>
              <p>Door kleine aanpassingen toe te voegen zoals een persoonlijke verwijzing naar het profiel of de ervaring van de kandidaat. Met Elvatix gebeurt dit automatisch — jouw basisbericht wordt herschreven in je eigen stijl en afgestemd op de ontvanger.</p>
            </details>
            <details className="faq-item">
              <summary>Werkt Elvatix ook binnen LinkedIn Recruiter</summary>
              <p>Ja. Elvatix integreert direct in LinkedIn Recruiter Seat. Je hoeft dus niet te wisselen tussen tools of handmatig berichten te kopiëren.</p>
            </details>
            <details className="faq-item">
              <summary>Kan ik meerdere berichten tegelijk aanpassen</summary>
              <p>Ja. Met Elvatix pas je instructies toe op tientallen berichten tegelijk. Zo bespaar je tijd zonder kwaliteit of tone of voice te verliezen.</p>
            </details>
            <details className="faq-item">
              <summary>Klinken de berichten nog wel als mijzelf</summary>
              <p>Ja. Elvatix leert jouw schrijfstijl en tone of voice zodat alle aangepaste berichten menselijk en herkenbaar blijven — alsof jij ze zelf hebt geschreven.</p>
            </details>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="section-inner px-6">
          <div className="cta-section rounded-card text-center max-w-[800px] mx-auto">
            <h2 className="text-2xl font-extrabold text-white mb-3">Maak je templates persoonlijker</h2>
            <p className="text-white/80 mb-6">Ontdek hoe Elvatix jouw berichten transformeert.</p>
            <Link href="/demo" className="pill-btn bg-white text-elvatix font-bold px-8 py-3">Boek Gratis Demo</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
