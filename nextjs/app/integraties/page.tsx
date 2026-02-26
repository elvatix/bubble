import type { Metadata } from "next";
import Link from "next/link";
import PageSection from "../components/PageSection";

export const metadata: Metadata = {
  title: "Integraties | Elvatix",
  description: "Verbind Elvatix met je bestaande recruitment tools. Naadloze integraties met populaire ATS en CRM systemen.",
  alternates: { canonical: "https://elvatix.com/integraties" },
};

const integrations = [
  { name: "LinkedIn Recruiter Seat", desc: "Direct koppelen met je Recruiter Seat voor naadloze candidate sourcing.", status: "Live" },
  { name: "Bullhorn", desc: "Synchroniseer kandidaatdata en activiteiten automatisch met Bullhorn CRM.", status: "Live" },
  { name: "Salesforce", desc: "Push recruitment data naar Salesforce voor complet overzicht van je pipeline.", status: "Beta" },
  { name: "Greenhouse", desc: "Integreer met Greenhouse ATS voor end-to-end recruitment workflow.", status: "Coming soon" },
  { name: "Zapier", desc: "Verbind Elvatix met 5000+ apps via Zapier voor onbeperkte automatisering.", status: "Live" },
  { name: "API", desc: "Bouw custom integraties met onze REST API. Volledige documentatie beschikbaar.", status: "Live" },
];

export default function IntegratiesPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="section-inner">
          <span className="page-badge">Integraties</span>
          <h1 className="page-heading">Verbind al je tools</h1>
          <p className="page-subtitle">Elvatix integreert naadloos met je bestaande recruitment stack. Geen datasilo&apos;s, geen dubbel werk.</p>
        </div>
      </section>

      <PageSection>
        <div className="section-inner px-6">
          <div className="page-grid-3">
            {integrations.map((i) => (
              <div key={i.name} className="highlight-card p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-text-primary">{i.name}</h3>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                    i.status === "Live" ? "bg-green-bg text-green-dark" :
                    i.status === "Beta" ? "bg-yellow-100 text-yellow-700" :
                    "bg-gray-100 text-text-muted"
                  }`}>{i.status}</span>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed">{i.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      <PageSection alt>
        <div className="section-inner px-6">
          <div className="cta-section rounded-card text-center max-w-[800px] mx-auto">
            <h2 className="text-2xl font-extrabold text-white mb-3">Mis je een integratie?</h2>
            <p className="text-white/80 mb-6">Laat ons weten welke tools je gebruikt. We bouwen graag mee.</p>
            <Link href="/contact" className="pill-btn bg-white text-elvatix font-bold px-8 py-3">Vertel ons</Link>
          </div>
        </div>
      </PageSection>
    </main>
  );
}
