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
          <h1 className="text-[clamp(28px,5vw,44px)] font-black leading-[1.1] mb-4 text-gray-900">
            Twee stappen. 30 seconden.{" "}
            <span className="gradient-text">Jouw eerste AI-bericht.</span>
          </h1>
          <p className="text-base text-gray-500 leading-relaxed max-w-[540px] mx-auto mb-10">
            Zoek je kandidaat, vul je eigen profiel in en ontvang direct een
            persoonlijke InMail en connectieverzoek. Geen account nodig.
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
            <h2 className="text-[clamp(24px,3.5vw,36px)] font-black text-gray-900 mb-4 leading-tight">
              Dit deed je net voor één kandidaat.{" "}
              <span className="gradient-text">Nu voor je hele pool.</span>
            </h2>
            <p className="text-base text-gray-500 leading-relaxed max-w-[500px] mx-auto">
              Elvatix draait volledig in Recruiter Seat. Jij maakt de pools,
              wij schrijven alle berichten. Met jouw templates, jouw toon en meer context.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 p-8 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-5">
              Met het volledige platform
            </h3>
            <ul className="space-y-3.5">
              {advantages.map((a) => (
                <li key={a} className="flex items-start gap-3">
                  <CheckIcon
                    size={16}
                    className="text-green flex-shrink-0 mt-0.5"
                  />
                  <span className="text-[15px] text-gray-700">{a}</span>
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
