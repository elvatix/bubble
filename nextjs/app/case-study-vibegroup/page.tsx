import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Case Study Vibe Group: 4-6 uur tijdswinst per week per recruiter",
  description: "Hoe het recruitmentteam van Vibe Group met Elvatix meer kwalitatieve gesprekken voert en 4-6 uur per week bespaart.",
  alternates: { canonical: "https://elvatix.com/case-study-vibegroup" },
};

export default function Page() {
  return (
    <main className="pt-32 pb-20">
      <div className="section-inner px-6">
        {/* Hero */}
        <div className="text-center mb-12">
          <span className="page-badge">Case Study</span>
          <h1 className="page-heading">Vibe Group: meer gesprekken, minder werkdruk</h1>
        </div>

        {/* Image */}
        <div className="relative aspect-video max-w-[800px] mx-auto mb-16 rounded-card overflow-hidden border border-border">
          <Image src="/images/cases/vibegroup.png" alt="Case study Vibe Group met Elvatix" fill className="object-contain p-4 bg-surface" />
        </div>

        {/* Body */}
        <article className="max-w-[720px] mx-auto prose-custom">
          <h2>De uitdaging</h2>
          <p>Een snelgroeiende recruitmentorganisatie liep tegen een herkenbaar probleem aan. Steeds meer vacatures. Steeds meer berichten die verstuurd moesten worden. Recruiters hadden te weinig tijd om elke InMail echt persoonlijk te maken. En ondertussen bleef de druk op employer branding hoog want elke kandidaat moest zich gezien voelen.</p>
          <p>De centrale vraag was simpel maar spannend: kan Elvatix zorgen voor snelheid en personalisatie tegelijk?</p>

          <h2>De oplossing: Elvatix als copilot</h2>
          <p>Veel AI-tools voelen onpersoonlijk. Kandidaten merken dat meteen en reageren afwijzend. Precies daar maakt Elvatix het verschil. Tijdens de pilot zette het recruitmentteam Elvatix in als copilot binnen <Link href="/integraties-linkedin">LinkedIn Recruiter Seat</Link>. Hun ervaring:</p>
          <ul>
            <li>De berichten klonken authentiek en persoonlijk.</li>
            <li>Kandidaten reageerden inhoudelijker en positiever.</li>
            <li>De werkdruk daalde merkbaar.</li>
          </ul>

          <h2>De resultaten per recruiter</h2>

          <h3>Lisa</h3>
          <ul>
            <li>Tijdswinst: 45 minuten per dag.</li>
            <li>Impact: Geen negatieve reacties meer zoals &ldquo;weer zo&apos;n generiek bericht&rdquo;.</li>
            <li>Employer branding: sterker imago, meer persoonlijke connecties.</li>
          </ul>

          <h3>Mila</h3>
          <ul>
            <li>Tijdswinst: 1 uur per dag.</li>
            <li>Responsrate: van 20% naar 26%, met pieken tot 35%.</li>
            <li>Positieve reacties: +31% meer relevante reacties.</li>
            <li>&ldquo;Je ziet dat kandidaten uitgebreider reageren. Dat helpt enorm. Je kunt makkelijker het gesprek in.&rdquo;</li>
          </ul>

          <h3>Ramon</h3>
          <ul>
            <li>Tijdswinst: van 2 tot 3 uur naar 15 minuten voor 75 tot 100 berichten.</li>
            <li>Respons: 38% (36% geaccepteerd, slechts 2% geweigerd).</li>
            <li>&ldquo;Mensen reageren uitgebreider, waardoor ik sneller in gesprek raak.&rdquo;</li>
          </ul>

          <h3>Sophie</h3>
          <ul>
            <li>Tijdswinst: 1 tot 2 uur per dag.</li>
            <li>Respons: vrijwel alleen geaccepteerde InMails.</li>
            <li>&ldquo;Ik had 20 gesprekken openstaan toen ik na de pauze terugkwam.&rdquo;</li>
            <li>Impact: berichten in de ochtend verstuurd, 20 kwalitatieve reacties binnen enkele uren.</li>
          </ul>

          <h3>Sara</h3>
          <ul>
            <li>Tijdswinst: 1 tot 2 uur per dag.</li>
            <li>Responsrate: 33%.</li>
            <li>&ldquo;Ik was eerst een hele ochtend bezig met berichten. Nu kan ik bellen vanaf 10 uur.&rdquo;</li>
            <li>Extra voordeel: ook bij persoonlijke <Link href="/module-connectieverzoeken">connectieverzoeken</Link> betere respons en nieuwe gesprekken.</li>
          </ul>

          <h2>Wat het team merkte</h2>
          <ul>
            <li>Tijdswinst: 4 tot 6 uur per week per recruiter.</li>
            <li>Meer kwalitatieve gesprekken: kandidaten reageerden uitgebreider en positiever.</li>
            <li>Lagere werkdruk: meer tijd voor bellen, opvolging en sourcing.</li>
            <li>Sterkere employer branding: elk bericht voelde persoonlijk en professioneel.</li>
          </ul>

          <h2>De impact voor de organisatie</h2>
          <ul>
            <li>Directe tijdswinst en efficiëntie.</li>
            <li>Hogere responspercentages en rijkere gesprekken.</li>
            <li>Een sterker werkgeversmerk doordat elke kandidaat een persoonlijke ervaring kreeg.</li>
            <li>Duurzame schaalbaarheid: meer output, zonder concessies aan kwaliteit.</li>
          </ul>
          <p>Kortom: meer resultaat met minder werkdruk.</p>
        </article>

        {/* CTA */}
        <div className="cta-section rounded-card text-center mt-16 max-w-[720px] mx-auto">
          <h2 className="text-2xl font-extrabold text-white mb-3">Jouw succesverhaal begint hier</h2>
          <p className="text-white/80 mb-6">Plan een demo en ontdek wat Elvatix voor jou kan doen.</p>
          <Link href="/demo" className="pill-btn bg-white text-elvatix font-bold px-8 py-3">Plan Gratis Demo</Link>
        </div>
      </div>
    </main>
  );
}
