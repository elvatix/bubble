"use client";
import { motion } from "framer-motion";

const pains = [
  { icon: "\u23f3", title: "Handmatig typen", description: "10\u201315 minuten per InMail, profiel voor profiel. Onhoudbaar." },
  { icon: "\ud83d\udccb", title: "Kopi\u00ebren & plakken", description: "Templates uit ChatGPT kopi\u00ebren, plakken in LinkedIn, handmatig bijschaven." },
  { icon: "\ud83d\ude34", title: "Geen personalisatie", description: "Standaard connectieverzoeken die niemand accepteert." },
  { icon: "\ud83d\udcc9", title: "Lage response rates", description: "Generieke outreach = lage reactiepercentages en frustratie." },
  { icon: "\u274c", title: "Gemiste follow-ups", description: "Vergeten om op te volgen. Kandidaten vallen tussen wal en schip." },
];

export default function PainPoints() {
  return (
    <section className="section-padding" style={{ background: "#f8f9fa" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 20 }}>
          <p style={{ fontSize: 13, fontWeight: 700, color: "#dc2626", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 12 }}>
            {"\u274c"} Herkenbaar?
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 700, margin: "0 auto" }}>
          {pains.map((pain, i) => (
            <motion.div
              key={i}
              style={{ display: "flex", alignItems: "center", gap: 16, padding: "18px 24px", borderRadius: 16, background: "#ffffff", border: "1px solid #e5e7eb" }}
              whileHover={{ x: 6, background: "#fff5f5", borderColor: "#fecaca" }}
              transition={{ duration: 0.2 }}
            >
              <span style={{ fontSize: 24, flexShrink: 0 }}>{pain.icon}</span>
              <div>
                <p style={{ fontSize: 15, fontWeight: 700, color: "#111", marginBottom: 2 }}>{pain.title}</p>
                <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.5 }}>{pain.description}</p>
              </div>
              <span style={{ marginLeft: "auto", fontSize: 18, color: "#d1d5db", flexShrink: 0 }}>{"\u00d7"}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
