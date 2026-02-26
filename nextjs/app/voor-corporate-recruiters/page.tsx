import type { Metadata } from "next";
import Link from "next/link";
import { CorporateIllustration } from "../components/illustrations/PageIllustrations";

export const metadata: Metadata = {
  title: "Hoe Elvatix corporate recruiters helpt sneller en persoonlijker te werven | Elvatix",
  description: "Als corporate recruiter werf je talent voor één werkgever. Elvatix helpt je sneller en persoonlijker te werven direct in LinkedIn Recruiter.",
  alternates: { canonical: "https://elvatix.com/voor-corporate-recruiters" },
};

export default function VoorCorporatePage() {
  return (
    <main>
      <section className="page-hero">
        <div className="section-inner">
          <span className="page-badge">Voor Wie</span>
          <h1 className="page-heading">Hoe Elvatix corporate recruiters helpt sneller en persoonlijker te werven</h1>
          <p className="page-subtitle">Meer output, hogere kwaliteit en een sterker employer brand.</p>
        </div>
      </section>

      <section className="page-section">
        <div className="section-inner px-6">
          <div className="max-w-[800px] mx-auto">
            <Image src="/images/voor-wie/corporate-recruiters.png" alt="Elvatix voor corporate recruiters" width={800} height={450} className="rounded-card shadow-card mx-auto" />
          </div>
        </div>
      </section>

      <section className="page-section--alt">
        <div className="section-inner px-6">
          <article className="max-w-[720px] mx-auto prose-custom">
            <h2>De rol van een corporate recruiter: schakel tussen merk en kandidaat</h2>
            <h3>Wat doet een corporate recruiter of inhouse recruiter?</h3>
            <p>Als corporate recruiter, ook wel inhouse recruiter genoemd, werf je talent voor één werkgever. Je werkt dus niet namens een extern bureau maar namens je eigen organisatie. Je selecteert niet alleen kandidaten maar bent ook actief betrokken bij employer branding, onboarding en procesoptimalisatie. Iedere InMail die je stuurt is onderdeel van het grotere werkgeversverhaal.</p>

            <h3>Waarom iedere boodschap je employer brand beïnvloedt</h3>
            <p>Elke outreach die je doet draagt bij aan hoe jouw organisatie wordt ervaren. Generieke of onpersoonlijke berichten maken een slechte indruk. Als corporate recruiter ben je dus meer dan wervingsspecialist; je bent merkvertegenwoordiger. Juist daarom telt je toon, stijl en consistentie in elk contactmoment.</p>

            <h2>De realiteit: veel vacatures, weinig tijd en lage respons</h2>
            <h3>Hoge werkdruk, lage respons: herken jij dit als corporate recruiter?</h3>
            <p>Je start je week. LinkedIn Recruiter staat vol met vacatures. Hiring managers verwachten snelheid en kandidaten reageren nauwelijks. Je weet dat personalisatie werkt maar je hebt er de tijd niet voor. Veel corporate recruiters ervaren dit als grootste knelpunt binnen corporate recruitment.</p>

            <h3>Waarom personalisatie sneuvelt bij recruitment onder tijdsdruk</h3>
            <p>Een relevant bericht op maat maken vraagt tijd. Maar bij veel openstaande vacatures voelen standaardbenaderingen als de enige optie. Dat werkt averechts: lage click-through rates, weinig reacties en een employer brand dat niet tot zijn recht komt. Borg personalisatie met <Link href="/module-template-instructies">templates &amp; instructies</Link>.</p>
          </article>
        </div>
      </section>

      <section className="page-section">
        <div className="section-inner px-6">
          <article className="max-w-[720px] mx-auto prose-custom">
            <h2>Elvatix ondersteunt inhouse recruiters direct in LinkedIn Recruiter Seat</h2>
            <h3>Recruitment automation zonder dat het onnatuurlijk klinkt</h3>
            <p>Elvatix werkt gewoon in je bestaande LinkedIn Recruiter Seat. Geen extra systemen of omwegen. Onze tooling helpt je berichten personaliseren zonder extra werk. Geen AI-teksten die robotachtig voelen — maar uitnodigende, persoonlijke berichten in jouw eigen stijl.</p>

            <h3>25 unieke berichten tegelijk in jouw tone-of-voice</h3>
            <p>Jij levert de input: functie, doelgroep en schrijfstijl. Onze AI recruitment tool genereert tot 25 gepersonaliseerde InMails tegelijk, aangepast op het profiel van de ontvanger. Zo houd je regie op toon en inhoud en win je tijd met schaalbare outreach.</p>

            <h3>Follow-ups die voortbouwen op eerdere contactmomenten</h3>
            <p>LinkedIn herinnert aan het sturen van vervolgen maar bouwt inhoudelijk niets op. Elvatix doet dat wel. Op basis van je eerdere bericht genereert de tool een follow-up die logisch aansluit, zelfs na dagen stilte. Kandidaatcontact wordt zo consistenter en effectiever.</p>

            <h3>Recruitment automation zonder extra tool of leercurve</h3>
            <p>Je hoeft niets te installeren. Geen trainingen of extra logins. Elvatix draait binnen je vertrouwde LinkedIn Recruiter Seat. Zo benut je alle voordelen van recruitment automation zonder je werkwijze om te gooien of tools te wisselen.</p>
          </article>
        </div>
      </section>

      <section className="page-section--alt">
        <div className="section-inner px-6">
          <article className="max-w-[720px] mx-auto prose-custom">
            <h2>Tijdwinst, meer reacties en een sterker employer brand</h2>
            <h3>Werk 1 keer, bereik 25 kandidaten persoonlijk</h3>
            <p>Met Elvatix vervang je handmatig knippen en plakken door slimme AI-ondersteuning. Jij schrijft één keer de basis en wij maken daar 25 unieke, relevante berichten van. Dat is schaalbaar werven met behoud van kwaliteit.</p>

            <h3>Meer ruimte voor gesprekken, minder tijd in de tool</h3>
            <p>Door werklast bij het schrijven te minimaliseren ontstaat er ruimte voor waar jij echt waarde toevoegt: intakegesprekken, stakeholderafstemming en contact met je kandidaten. Elvatix zorgt voor voorbereiding en jij voor verbinding.</p>

            <h3>Consistente toon in je hele recruitmentteam</h3>
            <p>In grotere recruitmentteams heeft iedereen zijn eigen schrijfwijze. Met Elvatix stem je toon en boodschap af op elkaar. Dat maakt je als werkgever herkenbaar, betrouwbaar en professioneel bij elke recruitmentactie.</p>

            <h2>Zelf ervaren hoe Elvatix jouw corporate recruitment versterkt?</h2>
            <p>In 20 minuten laten we zien hoe jij als corporate recruiter sneller en persoonlijker kandidaten bereikt — zonder externe tools of schrijfwerk. Ervaar zelf de impact van Elvatix binnen je LinkedIn Recruiter Seat. Wil je het zien in actie? <Link href="/demo">Plan gratis een demo</Link>.</p>
            <blockquote>&ldquo;Met Elvatix hoef je nooit meer te kiezen tussen snelheid en personalisatie&rdquo;</blockquote>
            <p>Je wint tijd, verhoogt je responsratio en brengt een consistente employer brand ervaring in je volledige Recruitment Lifecycle.</p>
          </article>
        </div>
      </section>

      <section className="page-section">
        <div className="section-inner px-6">
          <div className="max-w-[720px] mx-auto">
            <h2 className="text-2xl font-extrabold text-text-primary mb-8 text-center">Veelgestelde vragen over corporate recruitment en Elvatix</h2>
            <details className="faq-item">
              <summary>Wat is het verschil tussen corporate en bureau recruiter?</summary>
              <p>Corporate recruiters werken intern voor één werkgever, vaak in vaste dienst. Ze bouwen langdurig aan het employer brand en relaties. Een bureau recruiter werkt extern voor meerdere werkgevers en richt zich meer op plaatsing dan op de lange termijnrelatie.</p>
            </details>
            <details className="faq-item">
              <summary>Wat zijn de voordelen van Elvatix ten opzichte van standaard InMails?</summary>
              <p>Standaard InMails missen vaak relevantie en persoonlijkheid. Elvatix helpt inhouse recruiters om snel en schaalbaar berichten te sturen die natuurlijk en persoonlijk voelen. Inclusief automatische follow-ups die inspelen op eerdere communicatie, iets wat LinkedIn zelf niet biedt.</p>
            </details>
            <details className="faq-item">
              <summary>Is Elvatix alleen voor LinkedIn Recruiter Seat-gebruikers?</summary>
              <p>Ja. Elvatix is speciaal ontworpen voor corporate recruiters die werken met de LinkedIn Recruiter Seat. De tool integreert volledig met je bestaande omgeving zonder aparte login of tool.</p>
            </details>
            <details className="faq-item">
              <summary>Kan ik Elvatix gebruiken in mijn eigen tone-of-voice?</summary>
              <p>Absoluut. Tijdens de onboarding geef je voorbeelden en voorkeuren aan. Op basis daarvan leren we jouw schrijfstijl. Zo klinkt elk bericht alsof jij het zelf schreef, zelfs als je in een team werkt.</p>
            </details>
          </div>
        </div>
      </section>

      <section className="page-section--alt">
        <div className="section-inner px-6">
          <div className="cta-section rounded-card text-center max-w-[800px] mx-auto">
            <h2 className="text-2xl font-extrabold text-white mb-3">Klaar voor sneller en persoonlijker werven?</h2>
            <p className="text-white/80 mb-6">Elvatix is er voor iedere corporate of inhouse recruiter.</p>
            <Link href="/demo" className="pill-btn bg-white text-elvatix font-bold px-8 py-3">Boek Gratis Demo</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
