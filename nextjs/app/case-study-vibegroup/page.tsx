import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Hoe Elvatix Vibe Group meer output, hogere respons en minder werkdruk opleverde",
  description: "Ontdek hoe het recruitmentteam van Vibe Group met Elvatix 4-6 uur per week bespaart, meer kwalitatieve gesprekken voert en betere responspercentages behaalt via LinkedIn.",
  alternates: { canonical: "https://elvatix.com/case-study-vibegroup" },
};

export default function Page() {
  return (
    <main className="pt-32 pb-20">
      <div className="section-inner px-6">
        <div className="text-center mb-12">
          <span className="page-badge">Case Study</span>
          <h1 className="page-heading">Hoe Elvatix zorgt voor meer output, sterkere respons, meer kwalitatieve gesprekken én minder werkdruk bij Vibe Group.</h1>
        </div>

        <div className="relative aspect-video max-w-[800px] mx-auto mb-16 rounded-card overflow-hidden border border-border">
          <Image src="/images/case-studies/vibegroup.png" alt="Case study Vibe Group met Elvatix" fill className="object-contain p-4 bg-surface" />
        </div>

        <article className="max-w-[720px] mx-auto prose-custom">
          <h2>De uitdaging</h2>
          <p>Een snelgroeiende recruitmentorganisatie liep tegen een herkenbaar probleem aan. Steeds meer vacatures. Steeds meer berichten die verstuurd moesten worden. Recruiters hadden te weinig tijd om elke InMail echt persoonlijk te maken. En ondertussen bleef de druk op employer branding hoog want elke kandidaat moest zich gezien voelen.</p>
          <p>De centrale vraag was simpel maar spannend: kan Elvatix zorgen voor snelheid en personalisatie tegelijk?</p>

          <h2>De oplossing: Elvatix als copilot</h2>
          <p>Veel AI-tools voelen onpersoonlijk. Kandidaten merken dat meteen en reageren afwijzend. Precies daar maakt Elvatix het verschil. De tool is gebouwd met één doel: menselijke, hyperpersoonlijke berichten op schaal mogelijk maken.</p>
          <p>Tijdens de pilot zette het recruitmentteam Elvatix in als copilot binnen LinkedIn Recruiter Seat. Hun ervaring:</p>
          <ul>
            <li>De berichten klonken authentiek en persoonlijk.</li>
            <li>Kandidaten reageerden inhoudelijker en positiever.</li>
            <li>De werkdruk daalde merkbaar.</li>
          </ul>

          <h2>De resultaten per recruiter</h2>

          <h3>Lisa</h3>
          <ul>
            <li><strong>Tijdswinst:</strong> 45 minuten per dag</li>
            <li><strong>Impact:</strong> “Sinds ik met Elvatix werk krijg ik veel meer positieve reacties. Geen negatieve reacties meer zoals 'weer zo'n generiek bericht'.”</li>
            <li><strong>Employer branding:</strong> sterker imago, meer persoonlijke connecties</li>
          </ul>

          <h3>Mila</h3>
          <ul>
            <li><strong>Tijdswinst:</strong> 1 uur per dag</li>
            <li><strong>Responsrate:</strong> van 20% naar 26%, met pieken tot 35%</li>
            <li><strong>Positieve reacties:</strong> +31% meer relevante reacties</li>
            <li><strong>Quote:</strong> “Je ziet dat kandidaten uitgebreider reageren. Dat helpt enorm. Je kunt makkelijker het gesprek in.”</li>
          </ul>

          <h3>Ramon</h3>
          <ul>
            <li><strong>Tijdswinst:</strong> van 2 tot 3 uur naar 15 minuten voor 75 tot 100 berichten</li>
            <li><strong>Respons:</strong> 38% (36% geaccepteerd, slechts 2% geweigerd)</li>
            <li><strong>Quote:</strong> “Mensen reageren uitgebreider, waardoor ik sneller in gesprek raak.”</li>
          </ul>

          <h3>Sophie</h3>
          <ul>
            <li><strong>Tijdswinst:</strong> 1 tot 2 uur per dag</li>
            <li><strong>Respons:</strong> vrijwel alleen geaccepteerde InMails</li>
            <li><strong>Quote:</strong> “Ik had 20 gesprekken openstaan toen ik na de pauze terugkwam.”</li>
            <li><strong>Impact:</strong> berichten in de ochtend verstuurd naar 20 kwalitatieve reacties binnen enkele uren</li>
          </ul>

          <h3>Sara</h3>
          <ul>
            <li><strong>Tijdswinst:</strong> 1 tot 2 uur per dag</li>
            <li><strong>Responsrate:</strong> 33%</li>
            <li><strong>Quote:</strong> “Ik was eerst een hele ochtend bezig met berichten. Nu kan ik bellen vanaf 10 uur.”</li>
            <li><strong>Extra voordeel:</strong> ook bij persoonlijke <Link href="/module-connectieverzoeken">connectieverzoeken</Link> ziet ze nu betere respons en nieuwe gesprekken ontstaan.</li>
          </ul>

          <h2>Wat het team merkte</h2>
          <ul>
            <li><strong>Tijdswinst:</strong> 4 tot 6 uur per week per recruiter</li>
            <li><strong>Meer kwalitatieve gesprekken:</strong> kandidaten reageerden uitgebreider en positiever</li>
            <li><strong>Lagere werkdruk:</strong> meer tijd voor bellen, opvolging en sourcing</li>
            <li><strong>Sterkere employer branding:</strong> elk bericht voelde persoonlijk en professioneel</li>
          </ul>

          <h2>De impact voor de organisatie</h2>
          <ul>
            <li>Directe tijdswinst en efficiëntie</li>
            <li>Hogere responspercentages en rijkere gesprekken</li>
            <li>Een sterker werkgeversmerk doordat elke kandidaat een persoonlijke ervaring kreeg</li>
            <li>Duurzame schaalbaarheid: meer output, zonder concessies aan kwaliteit</li>
          </ul>
          <p><strong>Kortom: meer resultaat met minder werkdruk.</strong></p>
        </article>

        <div className="cta-section rounded-card text-center mt-16 max-w-[720px] mx-auto">
          <h2 className="text-2xl font-extrabold text-white mb-3">Wil jij ook dit soort resultaten?</h2>
          <p className="text-white/80 mb-6">Plan een gratis demo en ontdek wat Elvatix voor jouw team kan doen.</p>
          <Link href="/demo" className="pill-btn bg-white text-elvatix font-bold px-8 py-3">Boek Gratis Demo</Link>
        </div>
      </div>
    </main>
  );
}
