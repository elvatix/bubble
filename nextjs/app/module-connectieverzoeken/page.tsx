import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "10x sneller persoonlijke LinkedIn connectieverzoeken maken | Elvatix",
  description: "\"Ik wil u graag toevoegen...\" is zó 2015. Met Elvatix stuur je in één klik berichten waar mensen van glimlachen. Persoonlijk, origineel en direct vanuit je Recruiter Seat.",
  alternates: { canonical: "https://elvatix.com/module-connectieverzoeken" },
};

export default function ConnectieverzoekPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="section-inner">
          <span className="page-badge">Module</span>
          <h1 className="page-heading">LinkedIn connectieverzoeken die wél geaccepteerd worden</h1>
          <p className="page-subtitle">Persoonlijke connectieverzoeken op schaal — zonder een bericht dubbel te gebruiken.</p>
        </div>
      </section>

      <section className="page-section">
        <div className="section-inner px-6">
          <div className="max-w-[800px] mx-auto">
            <Image src="/images/modules/connectieverzoeken.png" alt="Elvatix connectieverzoeken module" width={800} height={450} className="rounded-card shadow-card mx-auto" />
          </div>
        </div>
      </section>

      <section className="page-section--alt">
        <div className="section-inner px-6">
          <article className="max-w-[720px] mx-auto prose-custom">
            <h2>Waarom een standaard LinkedIn uitnodiging vaak wordt genegeerd</h2>
            <h3>Wat maakt een goed LinkedIn connectieverzoek?</h3>
            <p>Een LinkedIn connectieverzoek is meer dan een druk op de knop; het is de start van een zakelijke relatie. Hoewel je iemand zonder tekst kunt uitnodigen, zien we in de data dat de acceptatiegraad drastisch stijgt als je een relevant persoonlijk bericht toevoegt. Dat maakt je verzoek direct herkenbaar en onderscheidend in een volle inbox.</p>

            <h3>Wanneer accepteert iemand jouw verbindingsverzoek?</h3>
            <p>Zonder persoonlijk bericht is de kans op acceptatie klein, vooral als je elkaar nog niet kent. Kandidaten en prospects willen weten wie jij bent en waarom je specifiek contact zoekt met hen. Een duidelijk en oprecht connectieverzoek bericht vergroot het vertrouwen en neemt de drempel om te accepteren weg.</p>

            <h3>Waarom een persoonlijk connectieverzoek het verschil maakt</h3>
            <p>Goede connectieverzoeken sluiten naadloos aan bij het profiel van de ander. Elvatix kijkt verder dan functietitels en vindt haakjes in de carrière of prestaties van de persoon. Kijk eens naar het verschil in toon en diepgang in deze voorbeelden:</p>
            <blockquote>&ldquo;Hoi Karel, je bent bij Ecobliss gestart als young professional en nu sta je als algemeen directeur aan het roer. Dat is een serieus groeipad zeg. Je kent het bedrijf na al die jaren vast beter dan je eigen broekzak. Bevalt het om nu de eindregie te hebben?&rdquo;</blockquote>
            <blockquote>&ldquo;Ha Timo, die 1000+ plaatsingen in anderhalf jaar tijd is nogal wat zeg! Doe je dat puur zelf of zit er al slimme tooling achter om die volumes te managen? Benieuwd hoe je de kwaliteit hoog houdt met zo&apos;n tempo.&rdquo;</blockquote>
            <p>Dit soort berichten werken fantastisch omdat ze bewijzen dat je je huiswerk hebt gedaan. Handmatig is dit echter bijna niet schaalbaar. Elvatix lost dat voor je op als jouw slimme personalisatie co-pilot.</p>
          </article>
        </div>
      </section>

      <section className="page-section">
        <div className="section-inner px-6">
          <article className="max-w-[720px] mx-auto prose-custom">
            <h2>Met Elvatix maak je elke LinkedIn uitnodiging uniek en persoonlijk</h2>
            <p>Elvatix stelt je in staat om persoonlijke connectieverzoeken op schaal te versturen. Onze software leest het profiel, begrijpt de context en schrijft een bericht dat echt over de ontvanger gaat.</p>

            <h3>Naadloze integratie in LinkedIn Recruiter</h3>
            <p>Gebruik je een Recruiter Seat of Lite? Elvatix werkt gewoon binnen je vertrouwde omgeving. Je hoeft niet te switchen tussen tabbladen of tools; de module integreert direct in je workflow.</p>

            <h3>De juiste toon: recruitment of sales</h3>
            <p>Context is alles. Stuur je een uitnodiging naar een kandidaat? Dan wil je een toegankelijke en uitnodigende toon. Richt je je op een prospect voor new business? Dan houden we het zakelijk en scherp. Jij kies het doel en Elvatix past de tone-of-voice automatisch aan. Dit regel je eenvoudig via de <Link href="/module-recruitment-sales-switch">Recruitment/Sales switch</Link>.</p>

            <h3>Tot 25 persoonlijke connectieverzoeken tegelijk</h3>
            <p>Selecteer tot 25 profielen vanuit een project in LinkedIn Recruiter. Elvatix genereert voor elk individueel profiel een uniek connectieverzoek bericht. Dus geen copy-paste van dezelfde tekst, maar voor iedereen een eigen haakje op basis van hun ervaring of bio.</p>

            <h3>Review en pas aan waar nodig</h3>
            <p>Omdat we geloven in de kracht van de menselijke recruiter, blijf jij altijd in control. Elvatix doet de voorzet, maar jij kunt elk LinkedIn connectieverzoek bekijken, handmatig aanpassen of goedkeuren voordat het de deur uitgaat. Je kunt hiervoor ook je eigen <Link href="/module-template-instructies">templates &amp; instructies</Link> combineren met onze AI.</p>

            <h3>Slim verzenden binnen LinkedIn limieten</h3>
            <p>De LinkedIn limieten bepalen hoeveel connecties je per week mag uitnodigen. Om je account veilig te houden, zorgt Elvatix dat je daar nooit overheen gaat. De tool verspreidt de verzoeken automatisch over de tijd, zodat je natuurlijk overkomt.</p>
          </article>
        </div>
      </section>

      <section className="page-section--alt">
        <div className="section-inner px-6">
          <article className="max-w-[720px] mx-auto prose-custom">
            <h2>Wat levert een persoonlijk LinkedIn connectieverzoek met Elvatix op?</h2>
            <h3>Hogere kans dat een verbindingsverzoek wordt geaccepteerd</h3>
            <p>Persoonlijke, relevante berichten zorgen voor herkenning en sympathie. Hierdoor stijgt de kans dat iemand jouw LinkedIn uitnodiging accepteert aanzienlijk ten opzichte van standaardteksten.</p>
            <h3>Minimale tijd per uitnodiging</h3>
            <p>Het repetitieve handwerk vervalt. Selecteer profielen, laat Elvatix de berichten personaliseren en verzend ze. Binnen enkele minuten heb je 25 mensen kwalitatief benaderd.</p>
            <h3>Gebruiksvriendelijk voor recruiters en sales</h3>
            <p>Of je nu kandidaten zoekt of new business kansen benut, Elvatix past de toon aan op basis van je instelling. Zo werkt de tool net zo krachtig voor talent sourcing als voor sales outreach.</p>
            <h3>Volledige controle per bericht</h3>
            <p>Je stuurt nooit iets blind. Voor elk connectieverzoek zie je precies wat er verstuurd wordt. Jij beslist wat er uitgaat, waardoor de kwaliteit gewaarborgd blijft.</p>
          </article>
        </div>
      </section>

      <section className="page-section">
        <div className="section-inner px-6">
          <div className="max-w-[720px] mx-auto">
            <h2 className="text-2xl font-extrabold text-text-primary mb-8 text-center">Veelgestelde vragen over LinkedIn connectieverzoeken</h2>
            <details className="faq-item">
              <summary>Wat moet ik in een LinkedIn connectieverzoek zetten?</summary>
              <p>Laat kort weten wie je bent, waarom je contact zoekt en verwijs naar een specifiek detail uit hun profiel. Elvatix helpt je hierbij met een passend voorstel dat direct inspeelt op de achtergrond van de persoon.</p>
            </details>
            <details className="faq-item">
              <summary>Hoe verstuur ik een persoonlijk LinkedIn connectieverzoek?</summary>
              <p>Via LinkedIn Recruiter kun je normaal gesproken één profiel selecteren en een bericht typen. Met Elvatix doe je dit voor meerdere profielen tegelijk, waarbij onze automatische personalisatie zorgt dat elk bericht uniek is.</p>
            </details>
            <details className="faq-item">
              <summary>Waarom worden mijn connectieverzoeken genegeerd?</summary>
              <p>Waarschijnlijk omdat ze generiek aanvoelen of niet relevant zijn voor de ontvanger. Zonder een persoonlijk haakje voelt een uitnodiging al snel als spam. Elvatix zorgt voor die relevantie en de juiste toon, waardoor je wel opvalt.</p>
            </details>
          </div>
        </div>
      </section>

      <section className="page-section--alt">
        <div className="section-inner px-6">
          <div className="cta-section rounded-card text-center max-w-[800px] mx-auto">
            <h2 className="text-2xl font-extrabold text-white mb-3">Klaar om je connectieverzoeken te verbeteren?</h2>
            <p className="text-white/80 mb-6">Ontdek hoe Elvatix jouw LinkedIn outreach versnelt.</p>
            <Link href="/demo" className="pill-btn bg-white text-elvatix font-bold px-8 py-3">Boek Gratis Demo</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
