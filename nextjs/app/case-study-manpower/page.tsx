import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Hoe Manpower met Elvatix 65 uur werk terugwon in slechts 1,7 uur",
  description: "Hoe Manpower met Elvatix 65 uur werk terugwon in slechts 1,7 uur",
  alternates: { canonical: "https://elvatix.com/case-study-manpower" },
};

export default function Page() {
  return (
    <main className="pt-32 pb-20">
      <div className="section-inner px-6">
        <div className="text-center mb-12">
          <span className="page-badge">Case Study</span>
          <h1 className="page-heading">Hoe Manpower met Elvatix 65 uur werk terugwon in slechts 1,7 uur</h1>
        </div>

        <div className="relative aspect-video max-w-[800px] mx-auto mb-16 rounded-card overflow-hidden border border-border">
          <Image src="/images/case-studies/manpower.png" alt="Case study Manpower met Elvatix" fill className="object-contain p-4 bg-surface" />
        </div>

        <article className="max-w-[720px] mx-auto prose-custom">
          <h2>De uitdaging</h2>
          <p>Robin, recruiter bij Manpower, stond bekend om zijn persoonlijke touch. Geen standaardberichten, geen copy-paste. Elke kandidaat kreeg van hem een zorgvuldig geschreven InMail, afgestemd op profiel, ervaring en soms zelfs een detail uit iemands hobby's.</p>
          <p>Die aanpak werkte. Zijn berichten vielen op, voelden menselijk en leverden keer op keer bovengemiddeld veel reacties op. Maar er zat een prijskaartje aan.</p>
          <p>Elke InMail kostte Robin 10 tot 15 minuten. Met 260 berichten in twee maanden tikte de teller al snel op tot 43 tot 65 uur. Dat is meer dan anderhalve werkweek puur besteed aan typen.</p>
          <p>Het dilemma was duidelijk: hoe hou je de persoonlijke kwaliteit vast zonder dat je complete weken kwijtraakt aan schrijfwerk?</p>

          <h2>De ontdekking</h2>
          <p>Samen met Elvatix besloot Robin het experiment aan te gaan. In plaats van elk bericht van nul af te schrijven, ging hij testen met de AI-copilot van Elvatix, geïntegreerd in LinkedIn Recruiter Seat.</p>
          <p>Het principe bleek verrassend eenvoudig:</p>
          <ul>
            <li>Upload je eigen tone-of-voice en een aantal favoriete templates.</li>
            <li>Selecteer tot 25 kandidaten tegelijk.</li>
            <li>Laat Elvatix gepersonaliseerde InMails genereren.</li>
            <li>Check, tweak, verzenden.</li>
          </ul>
          <p>De essentie bleef: persoonlijk contact in zijn eigen stem. Alleen het proces veranderde radicaal. Waar nodig koppel je direct gepersonaliseerde <Link href="/module-reminders">reminders</Link> voor opvolging.</p>

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

          <h2>De impact</h2>
          <p>Wat deze case laat zien is dat recruiters niet meer hoeven te kiezen tussen persoonlijk en schaalbaar. Met Elvatix kan het allebei: persoonlijke <Link href="/module-inmails">InMails</Link> in je eigen tone-of-voice, verstuurd in minuten, niet in uren, met responspercentages die zelfs hoger liggen dan handmatig werk.</p>
          <p>Voor Robin betekende dit dat hij zijn tijd terugkreeg om zich weer te richten op wat hij het liefste doet: echte gesprekken voeren met kandidaten. En voor Manpower: meer output, hogere kwaliteit en een team dat minder verzuipt in schrijfwerk.</p>
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
