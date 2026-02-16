"use client";
import { motion } from "framer-motion";

const trustItems = [
  {
    icon: "🧩",
    title: "Eenvoudige installatie",
    description: "Chrome extensie installeren, LinkedIn openen en direct beginnen. Geen integratie, geen IT-afdeling nodig.",
    accent: "#0a66c2",
  },
  {
    icon: "🔒",
    title: "Veilig & GDPR-proof",
    description: "Gegevens worden niet opgeslagen. Elvatix werkt volledig binnen jouw LinkedIn-sessie. AVG/GDPR compliant.",
    badges: ["GDPR", "AVG", "SOC 2"],
    accent: "#0a66c2",
  },
  {
    icon: "🚀",
    title: "Start gratis",
    description: "Probeer Elvatix gratis met 5 berichten per uur. Geen creditcard nodig. Upgrade wanneer je wilt.",
    accent: "#8db600",
  },
];

export default function TrustPricing() {
  return (
    <section className="section-padding" style={{ background: "#f8fafc" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <p style={{ fontSize: 13, fontWeight: 700, color: "#0a66c2", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 12 }}>
            Drempels weg
          </p>
          <h2 style={{ fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 900, color: "#111", marginBottom: 12 }}>
            Verdien je investering in week 1 terug.
          </h2>
          <p style={{ color: "#6b7280", fontSize: 16, maxWidth: 520, margin: "0 auto" }}>
            Geen ingewikkelde setup, geen risico. Begin vandaag nog.
          </p>
        </div>

        <div className="grid-3">
          {trustItems.map((item, i) => (
            <motion.div
              key={i}
              style={{
                padding: 32,
                borderRadius: 20,
                background: "#ffffff",
                border: `1px solid ${i === 2 ? "rgba(141,182,0,0.3)" : "rgba(10,102,194,0.15)"}`,
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
              }}
              whileHover={{ y: -4, boxShadow: "0 16px 40px rgba(0,0,0,0.06)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {i === 2 && (
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, #8db600, #a3c520)" }} />
              )}
              <div style={{ fontSize: 40, marginBottom: 16 }}>{item.icon}</div>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: "#111", marginBottom: 12 }}>{item.title}</h3>
              <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.7, marginBottom: item.badges ? 16 : 0 }}>{item.description}</p>
              {item.badges && (
                <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap" }}>
                  {item.badges.map((badge, j) => (
                    <span key={j} style={{
                      fontSize: 11, fontWeight: 700, color: "#0a66c2", background: "#e8f0fe",
                      padding: "4px 12px", borderRadius: 9999, letterSpacing: "0.05em",
                    }}>
                      {badge}
                    </span>
                  ))}
                </div>
              )}
              {i === 2 && (
                <motion.a
                  href="/demo"
                  style={{
                    display: "inline-block", marginTop: 20, padding: "12px 28px",
                    background: "#8db600", color: "white", borderRadius: 9999,
                    fontWeight: 700, fontSize: 14, textDecoration: "none",
                  }}
                  whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(141,182,0,0.3)" }}
                  whileTap={{ scale: 0.97 }}
                >
                  Start gratis →
                </motion.a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
