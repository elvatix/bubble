"use client";
import { motion } from "framer-motion";

const ClockIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const ClipboardIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="8" y="2" width="8" height="4" rx="1" />
    <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2" />
    <path d="M12 11h4M12 16h4M8 11h.01M8 16h.01" />
  </svg>
);

const UserXIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <line x1="17" y1="8" x2="22" y2="13" />
    <line x1="22" y1="8" x2="17" y2="13" />
  </svg>
);

const TrendDownIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
    <polyline points="16 17 22 17 22 11" />
  </svg>
);

const AlertIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

const XCircleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#d1d5db" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="15" y1="9" x2="9" y2="15" />
    <line x1="9" y1="9" x2="15" y2="15" />
  </svg>
);

const pains = [
  { icon: <ClockIcon />, title: "Handmatig typen", description: "10–15 minuten per InMail, profiel voor profiel. Onhoudbaar." },
  { icon: <ClipboardIcon />, title: "Kopi\u00ebren & plakken", description: "Templates uit ChatGPT kopi\u00ebren, plakken in LinkedIn, handmatig bijschaven." },
  { icon: <UserXIcon />, title: "Geen personalisatie", description: "Standaard connectieverzoeken die niemand accepteert." },
  { icon: <TrendDownIcon />, title: "Lage response rates", description: "Generieke outreach = lage reactiepercentages en frustratie." },
  { icon: <AlertIcon />, title: "Gemiste follow-ups", description: "Vergeten om op te volgen. Kandidaten vallen tussen wal en schip." },
];

export default function PainPoints() {
  return (
    <section className="section-padding" style={{ background: "#f8f9fa" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 20 }}>
          <p style={{ fontSize: 13, fontWeight: 700, color: "#dc2626", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 12 }}>
            Herkenbaar?
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
              <span style={{ flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", width: 40, height: 40, borderRadius: 10, background: "#fef2f2" }}>{pain.icon}</span>
              <div>
                <p style={{ fontSize: 15, fontWeight: 700, color: "#111", marginBottom: 2 }}>{pain.title}</p>
                <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.5 }}>{pain.description}</p>
              </div>
              <span style={{ marginLeft: "auto", flexShrink: 0, display: "flex" }}><XCircleIcon /></span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
