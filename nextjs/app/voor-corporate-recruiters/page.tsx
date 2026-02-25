import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Corporate recruiter: betekenis, taken en effici\u00ebnter werven met Elvatix",
  description: "Wat is een corporate recruiter? Ontdek het verschil met bureau recruitment en hoe corporate recruitment software van Elvatix jouw werk via LinkedIn makkelijker en persoonlijker maakt.",
  alternates: { canonical: "https://elvatix.com/voor-corporate-recruiters" },
};

export default function Page() {
  return (
    <main className="pt-32 pb-20">
      <div className="section-inner px-6">
        {/* Hero */}
        <div className="text-center mb-12">
          <span className="page-badge">Voor Wie</span>
          <h1 className="page-heading">Hoe Elvatix corporate recruiters helpt sneller en persoonlijker te werven</h1>
        </div>

        {/* Image */}
        <div className="relative aspect-video max-w-[800px] mx-auto mb-16 rounded-card overflow-hidden border border-border">
          <Image src="/images/voor-wie/corporate-recruiters.png" alt="Elvatix voor corporate recruiters" fill className="object-contain p-4 bg-surface" />
        </div>

        {/* Body */}
        <article className="max-w-[720px] mx-auto prose-custom">
          <h2>De rol van een corporate recruiter: schakel tussen merk en kandidaat</h2>
          <h3>Wat doet een corporate recruiter of inhouse recruiter?</h3>
          <p>Als corporate recruiter, ook wel inhouse recruiter genoemd, werf je talent voor &eacute;&eacute;n werkgever. Je werkt niet namens een extern bureau maar namens je eigen organisatie. Je selecteert niet alleen kandidaten maar bent ook actief betrokken bij employer branding, onboarding en procesoptimalisatie.</p>

          <h3>Waarom iedere boodschap je employer brand be&iuml;nvloedt</h3>
          <p>Elke outreach die je doet draagt bij aan hoe jouw organisatie wordt ervaren. Generieke of onpersoonlijke berichten maken een slechte indruk. Als corporate recruiter ben je dus meer dan wervingsspecialist; je bent merkvertegenwoordiger.</p>

          <h2>De realiteit: veel vacatures, weinig tijd en lage respons</h2>
          <h3>Hoge werkdruk, lage respons: herken jij dit als corporate recruiter?</h3>
          <p>Je start je week. LinkedIn Recruiter staat vol met vacatures. Hiring managers verwachten snelheid en kandidaten reageren nauwelijks. Je weet dat personalisatie werkt maar je hebt er de tijd niet voor.</p>

          <h3>Waarom personalisatie sneuvelt bij recruitment onder tijdsdruk</h3>
          <p>Een relevant bericht op maat maken vraagt tijd. Maar bij veel openstaande vacatures voelen standaardbenaderingen als de enige optie. Dat werkt averechts: lage click-through rates, weinig reacties en een employer brand dat niet tot zijn recht komt.</p>

          <h2>Elvatix ondersteunt inhouse recruiters direct in LinkedIn Recruiter Seat</h2>
          <h3>Recruitment automation zonder dat het onnatuurlijk klinkt</h3>
          <p>Elvatix werkt gewoon in je bestaande LinkedIn Recruiter Seat. Geen extra systemen of omwegen. Onze tooling helpt je berichten personaliseren zonder extra werk.</p>

          <h3>25 unieke berichten tegelijk in jouw tone-of-voice</h3>
          <p>Jij levert de input: functie, doelgroep en schrijfstijl. Onze AI recruitment tool genereert tot 25 gepersonaliseerde <Link href="/module-inmails">InMails</Link> tegelijk, aangepast op het profiel van de ontvanger.</p>

          <h3>Follow-ups die voortbouwen op eerdere contactmomenten</h3>
          <p>Op basis van je eerdere bericht genereert de tool een <Link href="/module-reminders">follow-up</Link> die logisch aansluit, zelfs na dagen stilte. Kandidaatcontact wordt zo consistenter en effectiever.</p>

          <h3>Recruitment automation zonder extra tool of leercurve</h3>
          <p>Je hoeft niets te installeren. Geen trainingen of extra logins. Elvatix draait binnen je vertrouwde LinkedIn Recruiter Seat.</p>

          <h2>Tijdwinst, meer reacties en een sterker employer brand</h2>
          <h3>Werk 1 keer, bereik 25 kandidaten persoonlijk</h3>
          <p>Jij schrijft &eacute;&eacute;n keer de basis en wij maken daar 25 unieke relevante berichten van. Dat is schaalbaar werven met behoud van kwaliteit.</p>

          <h3>Meer ruimte voor gesprekken, minder tijd in de tool</h3>
          <p>Door werklast bij het schrijven te minimaliseren ontstaat er ruimte voor waar jij echt waarde toevoegt: intakegesprekken, stakeholderafstemming en contact met je kandidaten.</p>

          <h3>Consistente toon in je hele recruitmentteam</h3>
          <p>Met Elvatix stem je toon en boodschap af op elkaar. Dat maakt je als werkgever herkenbaar, betrouwbaar en professioneel bij elke recruitmentactie.</p>

          {/* FAQ */}
          <h2>Veelgestelde vragen over corporate recruitment en Elvatix</h2>
          <details className="faq-item">
            <summary>Wat is het verschil tussen corporate en bureau recruiter?</summary>
            <p>Corporate recruiters werken intern voor &eacute;&eacute;n werkgever, vaak in vaste dienst. Ze bouwen langdurig aan het employer brand en relaties. Een bureau recruiter werkt extern voor meerdere werkgevers.</p>
          </details>
          <details className="faq-item">
            <summary>Wat zijn de voordelen van Elvatix ten opzichte van standaard InMails?</summary>
            <p>Standaard InMails missen vaak relevantie en persoonlijkheid. Elvatix helpt inhouse recruiters om snel en schaalbaar berichten te sturen die natuurlijk en persoonlijk voelen, inclusief automatische follow-ups.</p>
          </details>
          <details className="faq-item">
            <summary>Is Elvatix alleen voor LinkedIn Recruiter Seat-gebruikers?</summary>
            <p>Ja. Elvatix is speciaal ontworpen voor corporate recruiters die werken met de LinkedIn Recruiter Seat.</p>
          </details>
          <details className="faq-item">
            <summary>Kan ik Elvatix gebruiken in mijn eigen tone-of-voice?</summary>
            <p>Absoluut. Tijdens de onboarding geef je voorbeelden en voorkeuren aan. Op basis daarvan leren we jouw schrijfstijl.</p>
          </details>
        </article>

        {/* CTA */}
        <div className="cta-section rounded-card text-center mt-16 max-w-[720px] mx-auto">
          <h2 className="text-2xl font-extrabold text-white mb-3">Klaar om je employer brand te versterken?</h2>
          <p className="text-white/80 mb-6">Plan een demo en ontdek hoe Elvatix jouw werk versnelt.</p>
          <Link href="/demo" className="pill-btn bg-white text-elvatix font-bold px-8 py-3">Boek Gratis Demo</Link>
        </div>
      </div>
    </main>
  );
}
