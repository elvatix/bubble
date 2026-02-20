import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { FileTextIcon, SearchIcon, ZapIcon, CheckIcon, RocketIcon, BarChartIcon, UsersIcon } from "@/components/icons/Icons";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoe het werkt - Elvatix",
  description: "Ontdek hoe Elvatix in 5 stappen je LinkedIn outreach automatiseert. Van template aanmaken tot berichten versturen - veilig, persoonlijk en razendsnel.",
};

const steps = [
  {
    number: "01",
    icon: <FileTextIcon size={32} />,
    title: "Maak je template aan",
    description: "Stel je berichttemplate in, net zoals je een InMail-sjabloon maakt in LinkedIn Recruiter. Voeg de vacature-informatie toe en bepaal de toon. Elvatix gebruikt dit als basis om elk bericht uniek te maken.",
    highlight: "Eenmalig instellen, eindeloos hergebruiken",
  },
  {
    number: "02",
    icon: <SearchIcon size={32} />,
    title: "Selecteer je kandidaten",
    description: "Gebruik je bestaande LinkedIn Recruiter projects, pipelines of Sales Navigator lijsten. Selecteer de kandidaten die je wilt benaderen - Elvatix integreert naadloos met je huidige workflow.",
    highlight: "Werkt met Recruiter, Sales Navigator en LinkedIn Search",
  },
  {
    number: "03",
    icon: <ZapIcon size={32} />,
    title: "Genereer persoonlijke berichten",
    description: "Klik op de Elvatix Chrome-extensie, kies je template en klik op genereren. Ons AI-systeem analyseert elk profiel - werkervaring, vaardigheden, zelfs recente posts - en schrijft een volledig gepersonaliseerd bericht.",
    highlight: "Elk bericht is uniek, gebaseerd op het profiel",
  },
  {
    number: "04",
    icon: <CheckIcon size={32} />,
    title: "Review en pas aan",
    description: "Alle berichten verschijnen klaar om te versturen. Controleer ze in een oogopslag, pas individuele berichten aan als je wilt, of keur ze allemaal goed in een klik.",
    highlight: "Volledige controle, nul verrassingen",
  },
  {
    number: "05",
    icon: <RocketIcon size={32} />,
    title: "Verstuur met een klik",
    description: "Klik op 'Bevestig & Verstuur' en Elvatix stuurt alle berichten uit. Met slimme tussenpozen van 50-70 seconden, volledig binnen de normen van LinkedIn. Veilig, betrouwbaar en zonder risico.",
    highlight: "100% binnen LinkedIn richtlijnen",
  },
];

const stats = [
  { value: "50%", label: "Response rate door klanten", icon: <BarChartIcon size={24} /> },
  { value: "0", label: "LinkedIn-waarschuwingen ooit", icon: <CheckIcon size={24} /> },
  { value: "4-6u", label: "Tijdsbesparing per week", icon: <ZapIcon size={24} /> },
  { value: "30s", label: "Per gepersonaliseerd bericht", icon: <RocketIcon size={24} /> },
];

export default function HoeHetWerktPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-[140px] pb-20 px-6 bg-gradient-to-b from-elvatix-light to-white">
        <Container className="max-w-4xl text-center">
          <span className="page-badge">Hoe het werkt</span>
          <h1 className="page-heading">
            Van vacature tot <span className="gradient-text">persoonlijk bericht</span> in 5 stappen
          </h1>
          <p className="page-subtitle mb-10">
            Geen urenlang copy-pasten. Geen generieke templates. Elvatix analyseert elk LinkedIn-profiel
            en schrijft berichten die klinken alsof je ze zelf hebt geschreven.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" href="/demo">Probeer het zelf</Button>
            <Button variant="outline" href="/platform">Bekijk alle modules</Button>
          </div>
        </Container>
      </section>

      {/* Steps */}
      <section className="section-padding">
        <Container className="max-w-5xl">
          <div className="space-y-0">
            {steps.map((step, i) => (
              <div key={step.number} className="relative">
                {/* Connecting line */}
                {i < steps.length - 1 && (
                  <div className="absolute left-[39px] top-[88px] bottom-0 w-[2px] bg-gradient-to-b from-elvatix to-elvatix-light max-md:left-[31px]" />
                )}

                <div className="flex gap-8 py-10 max-md:gap-5">
                  {/* Number circle */}
                  <div className="shrink-0 w-[80px] h-[80px] rounded-full bg-gradient-to-br from-elvatix to-green-dark flex items-center justify-center text-white font-black text-xl shadow-lg relative z-10 max-md:w-[64px] max-md:h-[64px] max-md:text-lg">
                    {step.number}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-elvatix">{step.icon}</span>
                      <h2 className="text-2xl font-bold text-text-primary max-md:text-xl">{step.title}</h2>
                    </div>
                    <p className="text-text-secondary text-[17px] leading-relaxed mb-4 max-w-2xl">
                      {step.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-elvatix bg-elvatix-light px-4 py-2 rounded-full">
                      <CheckIcon size={14} />
                      {step.highlight}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Social proof stats bar */}
      <section className="section-padding bg-gradient-to-br from-green-dark via-elvatix-dark to-green-gradient-end text-white">
        <Container className="max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-4">
            Resultaten die voor zich spreken
          </h2>
          <p className="text-center text-white/70 mb-12 max-w-2xl mx-auto text-lg">
            Onze klanten zien met persoonlijke berichten dat de resultaten echt door het dak gaan.
            Een klant had binnen een dag een response rate van 50% op 50 berichten.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
                <div className="flex justify-center mb-3 text-green-accent">{stat.icon}</div>
                <div className="text-4xl font-black mb-2">{stat.value}</div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Unique selling points */}
      <section className="section-padding">
        <Container className="max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-text-primary mb-4">
              Waarom recruiters kiezen voor Elvatix
            </h2>
            <p className="page-subtitle">
              Complimenten van kandidaten - zelfs als ze niet geinteresseerd zijn in de rol.
              Dat is het niveau van personalisatie dat Elvatix levert.
            </p>
          </div>

          <div className="grid-3">
            <div className="p-8 rounded-2xl bg-surface border border-border hover:border-elvatix transition-colors duration-300">
              <span className="text-elvatix mb-4 block"><ZapIcon size={28} /></span>
              <h3 className="font-bold text-lg mb-2">Diep gepersonaliseerd</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Elvatix kijkt naar werkervaring, vaardigheden, en recente posts. Elk bericht voelt handgeschreven.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-surface border border-border hover:border-elvatix transition-colors duration-300">
              <span className="text-elvatix mb-4 block"><CheckIcon size={28} /></span>
              <h3 className="font-bold text-lg mb-2">100% LinkedIn-veilig</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Slimme tussenpozen van 50-70 seconden. In twee jaar hebben we nooit een waarschuwing gehad van een klant.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-surface border border-border hover:border-elvatix transition-colors duration-300">
              <span className="text-elvatix mb-4 block"><UsersIcon size={28} /></span>
              <h3 className="font-bold text-lg mb-2">Volledige controle</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Review elk bericht voordat het verstuurd wordt. Pas aan wat je wilt, of keur alles goed in een klik.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="cta-section text-center">
        <Container className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Klaar om het zelf te ervaren?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
            Plan een demo en ontdek hoe Elvatix jouw LinkedIn-outreach transformeert.
            Van uren typen naar minuten.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="white" href="/demo">Plan een demo</Button>
            <Button variant="outline" href="/contact">Neem contact op</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
