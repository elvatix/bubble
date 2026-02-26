import type { Metadata } from "next";
import Link from "next/link";
import { ManpowerIllustration } from "../components/illustrations/PageIllustrations";

export const metadata: Metadata = {
  title: "Hoe Manpower met Elvatix 65 uur werk terugwon in slechts 1,7 uur | Elvatix",
  description: "Robin, recruiter bij Manpower, bespaarde 65 uur schrijfwerk in slechts 1,7 uur met Elvatix. Responspercentage steeg van 40% naar 43%.",
  alternates: { canonical: "https://elvatix.com/case-study-manpower" },
};

export default function CaseStudyManpowerPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="section-inner">
          <span className="page-badge">Case Study</span>
          <h1 className="page-heading">Hoe Manpower met Elvatix 65 uur werk terugwon in slechts 1,7 uur</h1>
          <p className="page-subtitle">Van 10-15 minuten per InMail naar 30 seconden — met hogere respons.</p>
        </div>
      </section>

      <section className="page-section">
        <div className="section-inner px-6">
          <div className="max-w-[800px] mx-auto">
            <Image src="/images/case-studies/manpower.png" alt="Case study Manpower" width={800} height={450} className="rounded-card shadow-card mx-auto" />
          </div>
        </div>
      </section>

      <section className="page-section--alt">
        <div className="section-inner px-6">
          <article className="max-w-[720px] mx-auto prose-custom">
            <h2>De uitdaging</h2>
            <p>Robin, recruiter bij Manpower, stond bekend om zijn persoonlijke touch. Geen standaardberichten, geen copy-paste. Elke kandidaat kreeg van hem een zorgvuldig geschreven InMail, afgestemd op profiel, ervaring en soms zelfs een detail uit iemands hobby&apos;s.</p>
            <p>Die aanpak werkte. Zijn berichten vielen op, voelden menselijk en leverden keer op keer bovengemiddeld veel reacties op. Maar er zat een prijskaartje aan.</p>
            <p>Elke InMail kostte Robin 10 tot 15 minuten. Met 260 berichten in twee maanden tikte de teller al snel op tot 43 tot 65 uur. Dat is meer dan anderhalve werkweek — puur besteed aan typen.</p>
            <p>Het dilemma was duidelijk: hoe hou je de persoonlijke kwaliteit vast zonder dat je complete weken kwijtraakt aan schrijfwerk?</p>
          </article>
        </div>
      </section>

      <section className="page-section">
        <div className="section-inner px-6">
          <article className="max-w-[720px] mx-auto prose-custom">
            <h2>De ontdekking</h2>
            <p>Samen met Elvatix besloot Robin het experiment aan te gaan. Kon het echt anders? In plaats van elk bericht van nul af te schrijven, ging hij testen met de AI-copilot van Elvatix, geïntegreerd in LinkedIn Recruiter Seat.</p>
            <p>Het principe bleek verrassend eenvoudig:</p>
            <ul>
              <li>Upload je eigen tone-of-voice en een aantal favoriete templates.</li>
              <li>Selecteer tot 25 kandidaten tegelijk.</li>
              <li>Laat Elvatix gepersonaliseerde InMails genereren.</li>
              <li>Check, tweak, verzenden.</li>
            </ul>
            <p>De essentie bleef: persoonlijk contact in zijn eigen stem. Alleen het proces veranderde radicaal.</p>
            <p>Waar nodig koppel je direct gepersonaliseerde <Link href="/module-reminders">reminders</Link> voor opvolging.</p>
          </article>
        </div>
      </section>

      <section className="page-section--alt">
        <div className="section-inner px-6">
          <article className="max-w-[720px] mx-auto prose-custom">
            <h2>De resultaten</h2>
            <p>Het effect was direct zichtbaar:</p>
            <ul>
              <li><strong>Snelheid:</strong> van 10 tot 15 minuten per bericht naar gemiddeld 30 seconden.</li>
              <li><strong>Efficiëntie:</strong> 260 InMails in 1,7 uur in plaats van 43 tot 65 uur.</li>
              <li><strong>Tijdswinst:</strong> ruim één tot anderhalve werkweek terug in twee maanden.</li>
            </ul>
            <p>Maar misschien nog belangrijker: de kwaliteit bleef overeind. Sterker nog:</p>
            <ul>
              <li>Het responspercentage steeg van 40% naar 43%.</li>
              <li>Het aantal geaccepteerde berichten klom met 17%.</li>
              <li>Dat leverde Robin 25 extra kandidaten op die daadwerkelijk in gesprek gingen.</li>
            </ul>
            <p>Kortom: meer gesprekken, betere resultaten, veel minder werk.</p>
          </article>
        </div>
      </section>

      <section className="page-section">
        <div className="section-inner px-6">
          <article className="max-w-[720px] mx-auto prose-custom">
            <h2>De impact</h2>
            <p>Wat deze case laat zien is dat recruiters niet meer hoeven te kiezen tussen persoonlijk en schaalbaar. Met Elvatix kan het allebei:</p>
            <ul>
              <li>Persoonlijke InMails in je eigen tone-of-voice.</li>
              <li>Verstuurd in minuten, niet in uren.</li>
              <li>Met responspercentages die zelfs hoger liggen dan handmatig werk.</li>
            </ul>
            <p>Voor Robin betekende dit dat hij zijn tijd terugkreeg om zich weer te richten op wat hij het liefste doet: echte gesprekken voeren met kandidaten. En voor Manpower: meer output, hogere kwaliteit en een team dat minder verzuipt in schrijfwerk.</p>
          </article>
        </div>
      </section>

      <section className="page-section--alt">
        <div className="section-inner px-6">
          <div className="cta-section rounded-card text-center max-w-[800px] mx-auto">
            <h2 className="text-2xl font-extrabold text-white mb-3">Ook zoveel tijd besparen?</h2>
            <p className="text-white/80 mb-6">Ontdek wat Elvatix voor jouw team kan betekenen.</p>
            <Link href="/demo" className="pill-btn bg-white text-elvatix font-bold px-8 py-3">Boek Gratis Demo</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
