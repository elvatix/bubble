import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "InMails op LinkedIn gebruiken? Maak het sneller, persoonlijker en schaalbaar met Elvatix",
  description: "Verstuur gepersonaliseerde InMails tot 25 keer sneller dankzij Elvatix. Direct in LinkedIn Recruiter Seat. Meer reacties, minder tijd. Vraag nu een demo aan.",
  alternates: { canonical: "https://elvatix.com/module-inmails" },
};

export default function Page() {
  return (
    <main className="pt-32 pb-20">
      <div className="section-inner px-6">
        {/* Hero */}
        <div className="text-center mb-12">
          <span className="page-badge">Module</span>
          <h1 className="page-heading">InMails op LinkedIn: sneller, persoonlijker en schaalbaar</h1>
        </div>

        {/* Image */}
        <div className="relative aspect-video max-w-[800px] mx-auto mb-16 rounded-card overflow-hidden border border-border">
          <Image src="/images/modules/inmails.png" alt="Elvatix InMails module voor LinkedIn Recruiter" fill className="object-contain p-4 bg-surface" />
        </div>

        {/* Body */}
        <article className="max-w-[720px] mx-auto prose-custom">
          <h2>Waarom InMails op LinkedIn zo krachtig zijn</h2>
          <p>InMails zijn LinkedIn&apos;s directe berichtfunctie voor mensen buiten je netwerk. Als recruiter met een Recruiter Seat heb je een maandelijks budget aan InMail-credits. Elke credit telt. Berichten die worden gelezen en beantwoord leveren direct waarde op. Berichten die worden genegeerd zijn verspilde credits en tijd.</p>
          <p>Het verschil zit in personalisatie. En dat is precies waar Elvatix helpt.</p>

          <h2>Het probleem met handmatig InMails schrijven</h2>
          <p>Een goede InMail schrijven kost 10 tot 15 minuten per bericht. Voor 20 kandidaten per dag betekent dat al snel twee tot drie uur puur schrijfwerk. Tijd die je niet hebt voor gesprekken, intakes en plaatsingen.</p>
          <p>Standaard templates werken ook niet. Kandidaten herkennen ze direct en reageren niet. Je verliest credits en kandidaten.</p>

          <h2>Hoe Elvatix InMails versnelt zonder kwaliteit te verliezen</h2>
          <p>Elvatix genereert gepersonaliseerde InMails op basis van het LinkedIn-profiel van de kandidaat. De AI analyseert functie, ervaring, opleiding en recente activiteit en schrijft een bericht in jouw toon. Jij controleert en verstuurt.</p>
          <ul>
            <li>Selecteer tot 25 kandidaten in je Recruiter Seat.</li>
            <li>Elvatix genereert per kandidaat een unieke InMail.</li>
            <li>Elk bericht is afgestemd op profiel en jouw schrijfstijl.</li>
            <li>Jij controleert, past aan indien gewenst en verstuurt.</li>
            <li>Gemiddeld 30 seconden per bericht in plaats van 10 tot 15 minuten.</li>
          </ul>

          <h2>Resultaten in de praktijk</h2>
          <p>Recruiters die Elvatix gebruiken voor InMails zien hogere responspercentages, meer geaccepteerde berichten en significant minder schrijftijd. Bekijk de resultaten in onze case studies van <Link href="/case-study-manpower">Manpower</Link> en <Link href="/case-study-vibegroup">Vibe Group</Link>.</p>

          {/* FAQ */}
          <h2>Veelgestelde vragen over InMails op LinkedIn</h2>
          <details className="faq-item">
            <summary>Hoeveel InMail-credits heb ik per maand?</summary>
            <p>Dit hangt af van je LinkedIn-abonnement. LinkedIn Recruiter Seat-gebruikers krijgen maandelijks InMail-credits. Ongebruikte credits rollen over tot een maximum. Elvatix helpt je deze credits zo effectief mogelijk te benutten.</p>
          </details>
          <details className="faq-item">
            <summary>Wat is een goede responsrate voor InMails?</summary>
            <p>Een gemiddelde InMail-responsrate ligt tussen de 15% en 25%. Recruiters die Elvatix gebruiken voor gepersonaliseerde InMails behalen consistent hogere percentages, soms tot boven de 40%.</p>
          </details>
          <details className="faq-item">
            <summary>Kan ik InMails sturen naar mensen buiten mijn netwerk?</summary>
            <p>Ja. InMails zijn specifiek bedoeld voor mensen buiten je directe netwerk. Met een LinkedIn Recruiter Seat kun je iedereen op LinkedIn bereiken, ook zonder connectie.</p>
          </details>
          <details className="faq-item">
            <summary>Hoe zorg ik dat mijn InMails niet als spam worden ervaren?</summary>
            <p>Door ze te personaliseren. Elvatix analyseert het profiel van de ontvanger en schrijft een bericht dat relevant en persoonlijk aanvoelt. Dat is het tegenovergestelde van spam.</p>
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
