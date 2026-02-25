import type { Metadata } from "next";
import LeadMagnet from "@/components/sections/LeadMagnet";
import Container from "@/components/ui/Container";
import { CheckIcon } from "@/components/icons/Icons";

export const metadata: Metadata = {
  title: "Probeer Elvatix gratis",
  description:
    "Genereer een gepersonaliseerd LinkedIn-bericht in 30 seconden. Gratis, zonder account. Ervaar wat Elvatix doet.",
  openGraph: {
    title: "Probeer Elvatix gratis",
    description:
      "Genereer een gepersonaliseerd LinkedIn-bericht in 30 seconden. Gratis, zonder account.",
    url: "/probeer",
  },
};

const advantages = [
  "Alle kandidaten in je pool tegelijk benaderen",
  "Berichten op basis van jouw eigen templates",
  "Volledig geïntegreerd in Recruiter Seat",
  "Follow-up sequences die automatisch lopen",
  "Team-analytics en rapportages",
];

export default function ProbeerPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-8 bg-gradient-to-b from-elvatix-light to-white">
        <Container className="max-w-[720px] text-center">
          <p className="text-xs font-bold text-green uppercase tracking-[0.15em] mb-3">
            Gratis uitproberen
          </p>
          <h1 className="text-[clamp(28px,5vw,44px)] font-black leading-[1.1] mb-4 text-text-primary">
            Jij kent de kandidaat.{" "}
            <span className="gradient-text">Wij schrijven het bericht.</span>
          </h1>
          <p className="text-base text-text-muted leading-relaxed max-w-[540px] mx-auto mb-10">
            Vul in wie je wilt benaderen en wie jij bent. Wij doen de rest: we lezen de ervaring door en schrijven direct een persoonlijke InMail die je zó kunt versturen. Geen account nodig, probeer het direct.
          </p>
        </Container>
      </section>

      {/* Generator — same shared component */}
      <section className="pb-12 bg-white">
        <Container className="max-w-[720px]">
          <div className="rounded-[20px] border border-elvatix/20 shadow-[0_4px_24px_rgba(155,187,10,0.08)] overflow-visible">
            <LeadMagnet />
          </div>
        </Container>
      </section>

      {/* Upsell — what the full product does */}
      <section className="py-16 bg-surface">
        <Container className="max-w-[720px]">
          <div className="text-center mb-10">
            <p className="text-xs font-bold text-green uppercase tracking-[0.15em] mb-3">
              Dit was het voorproefje
            </p>
            <h2 className="text-[clamp(24px,3.5vw,36px)] font-black text-text-primary mb-4 leading-tight">
              Dit deed je net voor één kandidaat.{" "}
              <span className="gradient-text">Nu voor je hele pool.</span>
            </h2>
            <p className="text-base text-text-muted leading-relaxed max-w-[500px] mx-auto">
              Elvatix draait volledig binnen Recruiter Seat. Jij selecteert je kandidaten, en wij genereren voor iedereen een messcherp, persoonlijk bericht. In jouw stijl, met jouw templates.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-border p-8 mb-8">
            <h3 className="text-lg font-bold text-text-primary mb-5">
              Met het volledige platform
            </h3>
            <ul className="space-y-3.5">
              {advantages.map((a) => (
                <li key={a} className="flex items-start gap-3">
                  <CheckIcon
                    size={16}
                    className="text-green flex-shrink-0 mt-0.5"
                  />
                  <span className="text-[15px] text-text-secondary">{a}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/demo"
              className="pill-btn pill-btn-elvatix text-center"
            >
              Plan een demo
            </a>
            <a
              href="/hoe-het-werkt"
              className="pill-btn pill-btn-outline text-center"
            >
              Bekijk hoe het werkt
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
