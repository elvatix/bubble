import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Recruitment templates automatiseren \u00e9n persoonlijk maken",
  description: "Maak je recruitment templates automatisch persoonlijker met Elvatix. Meer reacties, minder afwijzingen. Plan gratis een demo en ontdek het zelf.",
  alternates: { canonical: "https://elvatix.com/module-template-instructies" },
};

export default function Page() {
  return (
    <main className="pt-32 pb-20">
      <div className="section-inner px-6">
        {/* Hero */}
        <div className="text-center mb-12">
          <span className="page-badge">Module</span>
          <h1 className="page-heading">Recruitment templates die persoonlijk w\u00e9l werken</h1>
        </div>

        {/* Image */}
        <div className="relative aspect-video max-w-[800px] mx-auto mb-16 rounded-card overflow-hidden border border-border">
          <Image src="/images/modules/templates.png" alt="Elvatix template instructies module" fill className="object-contain p-4 bg-surface" />
        </div>

        {/* Body */}
        <article className="max-w-[720px] mx-auto prose-custom">
          <h2>Waarom recruitment standaardberichten vaak niet werken</h2>
          <p>Gebruik je altijd dezelfde recruitment standaardberichten voor e-mail of LinkedIn? Dan klinkt je communicatie al snel generiek. Kandidaten herkennen het meteen: dezelfde openingszin, dezelfde afsluiting. Hun reactie: nul.</p>

          <h2>Gebruik je recruitment templates als krachtig startpunt</h2>
          <p>Gooi je sjablonen niet weg. Je recruitment templates zijn juist een goede basis. Upload ze in Elvatix en wij leren je schrijfstijl, tone of voice en opbouw automatisch herkennen.</p>

          <h2>Geef instructies, krijg automatisch aangepaste berichten</h2>
          <p>Voeg simpelweg instructies toe zoals:</p>
          <ul>
            <li>Maak het korter en directer</li>
            <li>Voeg een luchtige toon toe</li>
            <li>Gebruik een zakelijke aanspreekvorm</li>
            <li>Laat het klinken alsof het snel geschreven is</li>
          </ul>

          <h2>Jij houdt de regie, wij helpen je schaalbaar maken</h2>
          <p>Alle gegenereerde berichten komen overzichtelijk terug in je dashboard. Jij keurt alles goed. Elvatix integreert soepel in je LinkedIn workflow.</p>

          <h2>Voorbeeld: van standaardbericht naar persoonlijk contact</h2>
          <p><strong>Originele template:</strong> \u201cHi Naam, ik ben recruiter bij Bureau. Ik zie dat je ervaring hebt in functiegebied en heb een interessante rol beschikbaar. Zullen we even bellen?\u201d</p>
          <p><strong>Herschreven via Elvatix</strong> (vriendelijker, luchtiger, persoonlijker): \u201cHoi Naam, ik zie dat je al een interessante reis hebt gemaakt in de consultancywereld. Van je rol als X naar een nieuwe uitdaging bij X \u2014 dat laat zien hoe gedreven je bent. Je ervaring lijkt goed te passen bij een leuke uitdaging die ik op dit moment heb. Binnenkort even bellen?\u201d</p>

          {/* FAQ */}
          <h2>Veelgestelde vragen</h2>
          <details className="faq-item">
            <summary>Wat is een recruitment template?</summary>
            <p>Een standaardtekst die recruiters gebruiken om kandidaten sneller te benaderen. Het bespaart tijd maar klinkt vaak onpersoonlijk.</p>
          </details>
          <details className="faq-item">
            <summary>Hoe maak ik een recruitment template persoonlijker?</summary>
            <p>Door kleine aanpassingen toe te voegen zoals een persoonlijke verwijzing naar het profiel van de kandidaat. Met Elvatix gebeurt dit automatisch.</p>
          </details>
          <details className="faq-item">
            <summary>Klinken de berichten nog wel als mijzelf?</summary>
            <p>Ja. Elvatix leert jouw schrijfstijl en tone of voice, zodat alle aangepaste berichten menselijk en herkenbaar blijven.</p>
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
