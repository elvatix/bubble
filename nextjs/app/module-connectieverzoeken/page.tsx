import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "LinkedIn connectieverzoeken die mensen wél willen lezen (via Recruiter)",
  description: "\u201cIk wil u graag toevoegen...\u201d is zó 2015. Met Elvatix stuur je in één klik berichten waar mensen van glimlachen. Persoonlijk, origineel en direct vanuit je Recruiter Seat.",
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
          <h2>Waarom connectieverzoeken op LinkedIn zo belangrijk zijn</h2>
          <p>Een connectieverzoek is vaak het eerste contactmoment met een kandidaat. En eerste indrukken tellen. Een generiek &ldquo;Ik wil u graag toevoegen aan mijn netwerk&rdquo; wordt genegeerd. Een bericht dat aansluit bij de persoon, zijn of haar achtergrond of een gedeeld interest? Dat wordt geaccepteerd.</p>
          <p>Voor recruiters die dagelijks tientallen verzoeken versturen is persoonlijke aanpak op schaal een uitdaging. Elvatix lost dat op.</p>

          <h2>Hoe Elvatix connectieverzoeken personaliseert</h2>
          <p>Elvatix genereert op basis van het LinkedIn-profiel van de kandidaat een uniek connectieverzoek. De AI kijkt naar functietitel, ervaring, recente activiteit en jouw eigen schrijfstijl. Het resultaat: een bericht dat aanvoelt als maatwerk maar slechts seconden kost om te maken.</p>
          <ul>
            <li>Selecteer tot 25 kandidaten tegelijk in je Recruiter Seat.</li>
            <li>Elvatix genereert per kandidaat een uniek connectieverzoek.</li>
            <li>Jij controleert, past aan indien gewenst en verstuurt.</li>
            <li>Berichten worden verspreid verstuurd binnen de LinkedIn-limieten.</li>
          </ul>

          <h2>Resultaten die je merkt</h2>
          <p>Recruiters die Elvatix gebruiken voor connectieverzoeken zien een significant hogere acceptatiegraad. Niet omdat de AI magisch is, maar omdat gepersonaliseerde berichten simpelweg beter werken. Mensen reageren op relevantie.</p>

          {/* FAQ */}
          <h2>Veelgestelde vragen over connectieverzoeken via LinkedIn</h2>
          <details className="faq-item">
            <summary>Hoeveel connectieverzoeken mag ik per week versturen op LinkedIn?</summary>
            <p>LinkedIn hanteert een weekelijks limiet van ongeveer 100 connectieverzoeken voor reguliere accounts en iets hogere limieten voor Recruiter Seat-gebruikers. Elvatix houdt automatisch rekening met deze limieten en spreidt de verzending.</p>
          </details>
          <details className="faq-item">
            <summary>Kan ik een connectieverzoek sturen zonder begeleidende tekst?</summary>
            <p>Ja, dat kan. Maar verzoeken zonder tekst worden vaker genegeerd. Een korte, persoonlijke introductie verhoogt de kans op acceptatie aanzienlijk.</p>
          </details>
          <details className="faq-item">
            <summary>Wat gebeurt er als mijn connectieverzoek niet geaccepteerd wordt?</summary>
            <p>Via de <Link href="/module-reminders">Reminders-module</Link> van Elvatix kun je een automatische follow-up instellen voor niet-gereageerde verzoeken. Zo mis je geen kansen.</p>
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
