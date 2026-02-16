"use client";
import { motion } from "framer-motion";

const BuildingIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0a66c2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="2" width="16" height="20" rx="2" />
    <path d="M9 22v-4h6v4" />
    <path d="M8 6h.01M16 6h.01M12 6h.01M8 10h.01M16 10h.01M12 10h.01M8 14h.01M16 14h.01M12 14h.01" />
  </svg>
);

const BriefcaseIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0a66c2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
    <path d="M12 12h.01" />
    <path d="M2 12h20" />
  </svg>
);

const RocketIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0a66c2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" />
    <path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z" />
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
  </svg>
);

const solutions = [
  {
    icon: <BuildingIcon />,
    title: "Recruitmentbureaus",
    description: "Versnel het bereiken van kandidaten. Schrijf persoonlijke InMails en connectieverzoeken in seconden. Bespaar 4–6 uur per week per recruiter.",
  },
  {
    icon: <BriefcaseIcon />,
    title: "Corporate Recruiters",
    description: "Effici\u00ebnter intern talent sourcen. Elvatix werkt direct in LinkedIn Recruiter — geen extra tools of tabbladen nodig.",
  },
  {
    icon: <RocketIcon />,
    title: "Detacheringsbureaus",
    description: "Snel en persoonlijk schakelen met professionals. Schakel eenvoudig tussen recruitment- en salesmodus.",
  },
];

export default function Solutions() {
  return (
    <section id="voor-wie" className="section-padding" style={{ background: "#fff" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <h2 style={{ fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 900, color: "#111", marginBottom: 12 }}>
            Voor wie is Elvatix?
          </h2>
          <p style={{ color: "#6b7280", fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            Of je nu als bureau of in-house recruiter werkt — Elvatix past zich aan jouw werkwijze aan.
          </p>
        </div>
        <div className="grid-3">
          {solutions.map((s, i) => (
            <motion.div
              key={i}
              style={{
                padding: 32,
                borderRadius: 20,
                background: "#fafafa",
                border: "1px solid #e5e7eb",
                textAlign: "center",
              }}
              whileHover={{ y: -6, boxShadow: "0 16px 40px rgba(10,102,194,0.12)", borderColor: "#0a66c2" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: 64, height: 64, borderRadius: 16, background: "#e8f0fe", margin: "0 auto 16px" }}>{s.icon}</div>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: "#111", marginBottom: 12 }}>{s.title}</h3>
              <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.7 }}>{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
