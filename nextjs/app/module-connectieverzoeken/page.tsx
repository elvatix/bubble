import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "LinkedIn connectieverzoeken die mensen wél willen lezen (via Recruiter)",
  description: "“Ik wil u graag toevoegen...” is zó 2015. Met Elvatix stuur je in één klik berichten waar mensen van glimlachen. Persoonlijk, origineel en direct vanuit je Recruiter Seat.",
  alternates: { canonical: "https://elvatix.com/module-connectieverzoeken" },
};

export default function Page() {
  return (
    <main className="pt-32 pb-20">
      <div className="section-inner px-6">
        {/* Hero */}
        <div className="text-center mb-12">
          <span className="page-badge">Module</span>
          <h1 className="page-heading">LinkedIn connectieverzoeken die wél geaccepteerd worden</h1>
        </div>

        {/* Image */}
        <div className="relative aspect-video max-w-[800px] mx-auto mb-16 rounded-card overflow-hidden border border-border">
          <Image src="/images/modules/connectieverzoeken.png" alt="Elvatix connectieverzoeken module voor LinkedIn" fill className="object-contain p-4 bg-surface" />
        </div>

        {/* Body */}
        <article className="max-w-[720px] mx-auto prose-custom">
          <h2>Waarom een standaard LinkedIn uitnodiging vaak wordt genegeerd</h2>
          <h3>Wat maakt een goed LinkedIn connectieverzoek?</h3>
          <p>Een LinkedIn connectieverzoek is meer dan een druk op de knop; het is de start van een zakelijke relatie. De acceptatiegraad stijgt drastisch als je een relevant persoonlijk bericht toevoegt.</p>
          <h3>Wanneer accepteert iemand jouw verbindingsverzoek?</h3>
          <p>Zonder persoonlijk bericht is de kans op acceptatie klein. Kandidaten en prospects willen weten wie jij bent en waarom je specifiek contact zoekt met hen.</p>

          <h2>Voorbeelden van persoonlijke connectieverzoeken</h2>
          <ul>
            <li>“Hoi Karel, je bent bij Ecobliss gestart als young professional en nu sta je als algemeen directeur aan het roer. Bevalt het om nu de eindregie te hebben?”</li>
            <li>“Ha Timo, die 1000+ plaatsingen in anderhalf jaar tijd is nogal wat zeg! Doe je dat puur zelf of zit er al slimme tooling achter?”</li>
          </ul>

          <h2>Met Elvatix maak je elke LinkedIn uitnodiging uniek en persoonlijk</h2>
          <p>Elvatix stelt je in staat om persoonlijke connectieverzoeken op schaal te versturen. Onze software leest het profiel, begrijpt de context en schrijft een bericht dat echt over de ontvanger gaat.</p>

          <h3>Naadloze integratie in LinkedIn Recruiter</h3>
          <p>Gebruik je een Recruiter Seat of Lite? Elvatix werkt gewoon binnen je vertrouwde omgeving, zonder te switchen tussen tabbladen of tools.</p>

          <h3>De juiste toon: recruitment of sales</h3>
          <p>Jij kiest het doel en Elvatix past de tone-of-voice automatisch aan via de <Link href="/module-recruitment-sales-switch">Recruitment/Sales switch</Link>.</p>

          <h3>Tot 25 persoonlijke connectieverzoeken tegelijk</h3>
          <p>Selecteer tot 25 profielen vanuit een project in LinkedIn Recruiter. Elvatix genereert voor elk individueel profiel een uniek bericht op basis van hun ervaring of bio.</p>

          <h3>Review en pas aan waar nodig</h3>
          <p>Jij kunt elk LinkedIn connectieverzoek bekijken, handmatig aanpassen of goedkeuren voordat het de deur uitgaat.</p>

          <h3>Slim verzenden binnen LinkedIn limieten</h3>
          <p>Elvatix zorgt dat je nooit over de LinkedIn-limieten gaat. De tool verspreidt de verzoeken automatisch over de tijd.</p>

          {/* FAQ */}
          <h2>Veelgestelde vragen</h2>
          <details className="faq-item">
            <summary>Wat moet ik in een LinkedIn connectieverzoek zetten?</summary>
            <p>Laat kort weten wie je bent, waarom je contact zoekt en verwijs naar een specifiek detail uit hun profiel.</p>
          </details>
          <details className="faq-item">
            <summary>Waarom worden mijn connectieverzoeken genegeerd?</summary>
            <p>Waarschijnlijk omdat ze generiek aanvoelen of niet relevant zijn voor de ontvanger. Zonder een persoonlijk haakje voelt een uitnodiging al snel als spam.</p>
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
