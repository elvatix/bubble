"use client";
import { SearchIcon, BuildingIcon, UsersIcon, MedalIcon, BriefcaseIcon, TrendingUpIcon } from "@/components/icons/Icons";

const solutions = [
  { icon: <SearchIcon size={32} />, title: "Recruitmentbureaus", desc: "Direct hire en werving & selectie bureaus die hun outreach willen versnellen." },
  { icon: <BuildingIcon size={32} />, title: "Detacheringsbureaus", desc: "Professionele detacheerders die continu on-demand talent moeten sourcen." },
  { icon: <UsersIcon size={32} />, title: "Corporate Recruiters", desc: "In-house recruitment en talent acquisition teams bij grote organisaties." },
  { icon: <MedalIcon size={32} />, title: "Executive Search", desc: "Retained search firms die premium, gepersonaliseerde benadering vereisen." },
  { icon: <BriefcaseIcon size={32} />, title: "Freelance Recruiters", desc: "Zelfstandige recruiters die meer willen doen met minder tijd." },
  { icon: <TrendingUpIcon size={32} />, title: "High-Volume Hiring", desc: "Teams die grote aantallen kandidaten tegelijk moeten benaderen." },
];

export default function Solutions() {
  return (
    <section className="section-responsive" style={{ padding: "80px 24px", background: "#f9fafb" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900, textAlign: "center", color: "#111", marginBottom: 16 }}>
          Op maat gemaakte technologie voor elke recruiter
        </h2>
        <p style={{ textAlign: "center", color: "#6b7280", fontSize: 16, maxWidth: 580, margin: "0 auto 48px", lineHeight: 1.6 }}>
          Of je nu in-house werkt, bij een bureau, of als zelfstandige — Elvatix past zich aan jouw workflow aan.
        </p>

        <div className="solutions-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24 }}>
          {solutions.map((s, i) => (
            <div key={i} style={{ padding: 32, borderRadius: 16, background: "#fff", border: "1px solid #e5e7eb", transition: "transform 0.3s ease" }}>
              <div style={{ marginBottom: 16, color: "#8db600" }}>{s.icon}</div>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: "#111", marginBottom: 8 }}>{s.title} →</h3>
              <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.6 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
