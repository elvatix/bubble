import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "LinkedIn plugin voor Recruiter Seat: sneller werken zonder toolswitches",
  description: "Elvatix werkt met een LinkedIn plugin voor Recruiters: werk direct in LinkedIn Recruiter zonder losse tools of IT-afhankelijkheid. Installeer in 10 minuten.",
  alternates: { canonical: "https://elvatix.com/integraties-linkedin" },
};

export default function Page() {
  return (
    <main className="pt-32 pb-20">
      <div className="section-inner px-6">
        <div className="text-center mb-12">
          <span className="page-badge">Integraties</span>
          <h1 className="page-heading">LinkedIn plugin voor Recruiter Seat: werk sneller in je vertrouwde omgeving.</h1>
        </div>

        <div className="relative aspect-video max-w-[800px] mx-auto mb-16 rounded-card overflow-hidden border border-border">
          <Image src="/images/integraties/chrome-plugin.png" alt="Elvatix Chrome-extensie voor LinkedIn Recruiter" fill className="object-contain p-4 bg-surface" />
        </div>

        <article className="max-w-[720px] mx-auto prose-custom">
          <h2>Een Chrome-extensie, geen los platform</h2>

          <h3>Waarom recruiters geen losse tools willen</h3>
          <p>Als recruiter werk je vanuit LinkedIn. Het laatste wat je wilt is schakelen tussen tabbladen, systemen of dashboards. Daarom is de LinkedIn plugin van Elvatix ontworpen als lichtgewicht Chrome-extensie. Alles blijft gekoppeld aan jouw Recruiter Seat of Lite.</p>

          <h3>Installeren, koppelen en klaar</h3>
          <p>De LinkedIn integratie werkt direct na installatie. De plugin voegt zich toe aan je interface zonder je werk te onderbreken. Je hoeft niets te leren of in te stellen. Elvatix draait direct mee in je bestaande workflow.</p>

          <h2>LinkedIn plugin installatie in minder dan 10 minuten</h2>

          <h3>Zo installeer je de LinkedIn Chrome-extensie</h3>
          <p>Via de <a href="https://chromewebstore.google.com/detail/apdlpieiebgmgkkhimlbkliccnkimgem" target="_blank" rel="noopener noreferrer">Chrome Web Store</a> installeer je Elvatix met één klik. Daarna koppel je je LinkedIn Recruiter-account. Binnen enkele minuten heb je toegang tot slimme functies in je bestaande omgeving zoals <Link href="/module-inmails">InMails</Link> en <Link href="/module-connectieverzoeken">connectieverzoeken</Link> genereren.</p>

          <h3>Koppeling met LinkedIn Recruiter is plug and play</h3>
          <p>Na het inloggen zie je de plugin direct verschijnen in je Recruiter Seat. De koppeling met LinkedIn Recruiter vraagt geen technische kennis. Je blijft volledig in control. Optimaliseer je toon met <Link href="/module-template-instructies">templates & instructies</Link> of test varianten met onze <Link href="/module-custom-gpt">Custom GPT’s</Link>.</p>

          <h3>Start direct met personaliseren en versturen</h3>
          <p>Gebruik templates, personaliseer berichten en verstuur vanuit je vertrouwde scherm. De plugin past zich aan jouw workflow aan en niet andersom.</p>

          <h2>Geen IT-hindernissen of risico’s</h2>

          <h3>Volledig binnen LinkedIn’s regels en limieten</h3>
          <p>Elvatix werkt 100% binnen de gedragsregels, limieten en architectuur van LinkedIn. We gebruiken geen workarounds of verboden methodes. Jij werkt zoals je gewend bent, veilig en betrouwbaar.</p>

          <h3>Geen data-opslag buiten LinkedIn</h3>
          <p>Onze LinkedIn tool voor recruiters verwerkt geen gevoelige gegevens buiten je account. Alles gebeurt binnen je bestaande omgeving zonder compliance-risico’s of externe opslag.</p>

          <h3>Zelf installeren ook met grotere teams</h3>
          <p>Iedere recruiter in je team kan Elvatix zelfstandig installeren en gebruiken. Er is geen technische begeleiding of IT-project voor nodig. Handig voor agencies en <Link href="/voor-recruitmentbureaus">bureaus</Link> die direct aan de slag willen.</p>

          <h2>Blijf werken zoals je al doet maar dan slimmer</h2>

          <h3>Werken in LinkedIn Recruiter met slimme hulp</h3>
          <p>De plugin past zich aan aan wat jij al doet. Alles begint en eindigt in Recruiter Seat, de LinkedIn tool die je al dagelijks gebruikt. Geen nieuwe gewoontes nodig, wel meer rust en snelheid.</p>

          <h3>Gebruik templates, reminders en opvolgflows</h3>
          <p>Personaliseer je outreach, stel <Link href="/module-reminders">reminders</Link> in en volg gesprekken op. Alle functies blijven binnen LinkedIn zodat je minder hoeft te klikken en meer impact maakt.</p>

          <h2>Waarom deze LinkedIn plugin het verschil maakt</h2>

          <h3>Sneller, niet moeilijker</h3>
          <p>Elvatix laat recruiters slimmer werken in minder tijd zonder verandering van systemen. Door het directe gebruik in LinkedIn Recruiter haal je meer uit je dag zonder langer bezig te zijn.</p>

          <h3>Niet zomaar een extensie maar een echte koppeling</h3>
          <p>Deze Chrome-extensie is geen losse overlay maar een echte LinkedIn integratie. Daardoor voelt hij vertrouwd en functioneert hij beter dan workaround-tools of aparte inlogs.</p>
        </article>

        <div className="cta-section rounded-card text-center mt-16 max-w-[720px] mx-auto">
          <h2 className="text-2xl font-extrabold text-white mb-3">Klaar om sneller te werken?</h2>
          <p className="text-white/80 mb-6">Plan een gratis demo en ontdek hoe de LinkedIn plugin van Elvatix jouw workflow versnelt.</p>
          <Link href="/demo" className="pill-btn bg-white text-elvatix font-bold px-8 py-3">Boek Gratis Demo</Link>
        </div>
      </div>
    </main>
  );
}
