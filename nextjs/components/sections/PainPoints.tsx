"use client";
import { motion } from "framer-motion";
import AnimateOnScroll from "../animations/AnimateOnScroll";
import StaggerChildren, { StaggerItem } from "../animations/StaggerChildren";

const pains = [
  {
    icon: "⏳",
    title: "Handmatig typen",
    description: "10-15 minuten per InMail, profiel voor profiel. Onhoudbaar.",
  },
  {
    icon: "📋",
    title: "Kopiëren & plakken",
    description: "Templates uit ChatGPT kopiëren, plakken in LinkedIn, handmatig bijschaven.",
  },
  {
    icon: "😴",
    title: "Geen personalisatie",
    description: "Standaard connectieverzoeken die niemand accepteert.",
  },
  {
    icon: "📉",
    title: "Lage response rates",
    description: "Generieke outreach = lage reactiepercentages en frustratie.",
  },
  {
    icon: "❌",
    title: "Gemiste follow-ups",
    description: "Vergeten om op te volgen. Kandidaten vallen tussen wal en schip.",
  },
];

export default function PainPoints() {
  return (
    <section className="section-padding" style={{ background: "#fff" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <AnimateOnScroll variant="fadeUp">
          <div style={{ textAlign: "center", marginBottom: 20 }}>
            <p style={{ fontSize: 13, fontWeight: 700, color: "#dc2626", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 12 }}>
              🚨 Herkenbaar?
            </p>
          </div>
        </AnimateOnScroll>

        <StaggerChildren staggerDelay={0.08}>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 700, margin: "0 auto 48px" }}>
            {pains.map((pain, i) => (
              <StaggerItem key={i}>
                <motion.div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    padding: "18px 24px",
                    borderRadius: 16,
                    background: "#fafafa",
                    border: "1px solid #f3f4f6",
                  }}
                  whileHover={{ x: 6, background: "#fff5f5", borderColor: "#fecaca" }}
                  transition={{ duration: 0.2 }}
                >
                  <span style={{ fontSize: 24, flexShrink: 0 }}>{pain.icon}</span>
                  <div>
                    <p style={{ fontSize: 15, fontWeight: 700, color: "#111", marginBottom: 2 }}>{pain.title}</p>
                    <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.5 }}>{pain.description}</p>
                  </div>
                  <span style={{ marginLeft: "auto", fontSize: 18, color: "#d1d5db", flexShrink: 0 }}>×</span>
                </motion.div>
              </StaggerItem>
            ))}
          </div>
        </StaggerChildren>

        <AnimateOnScroll variant="scaleUp" delay={0.2}>
          <motion.div
            style={{
              textAlign: "center",
              padding: "48px 32px",
              borderRadius: 24,
              background: "linear-gradient(135deg, #f0f7d4 0%, #e8f5c8 50%, #fefce8 100%)",
              border: "1px solid rgba(141,182,0,0.15)",
              position: "relative",
              overflow: "hidden",
            }}
            whileHover={{ boxShadow: "0 20px 50px rgba(141,182,0,0.1)" }}
          >
            <div style={{ position: "absolute", top: -30, right: -30, width: 150, height: 150, background: "radial-gradient(circle, rgba(141,182,0,0.1), transparent)", borderRadius: "50%" }} />
            <div style={{ position: "absolute", bottom: -20, left: -20, width: 120, height: 120, background: "radial-gradient(circle, rgba(251,191,36,0.1), transparent)", borderRadius: "50%" }} />

            <div style={{ position: "relative", zIndex: 2 }}>
              <motion.div
                style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 56, height: 56, borderRadius: "50%", background: "white", boxShadow: "0 4px 12px rgba(0,0,0,0.06)", marginBottom: 20, fontSize: 28 }}
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                💡
              </motion.div>
              <h2 style={{ fontSize: "clamp(32px, 4.5vw, 56px)", fontWeight: 900, color: "#111", marginBottom: 12, lineHeight: 1.1 }}>
                Wat als het{" "}
                <span style={{ background: "linear-gradient(135deg, #8db600, #6a9a00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>anders</span>{" "}
                kon?
              </h2>
              <p style={{ fontSize: "clamp(15px, 1.5vw, 18px)", color: "#6b7280", maxWidth: 480, margin: "0 auto 28px", lineHeight: 1.7 }}>
                Een nieuwe manier van LinkedIn outreach. Persoonlijk, snel, en schaalbaar.
              </p>
              <motion.a
                href="/demo"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "14px 32px",
                  background: "linear-gradient(135deg, #8db600, #7aa300)",
                  color: "white",
                  borderRadius: 9999,
                  fontSize: 15,
                  fontWeight: 700,
                  textDecoration: "none",
                  boxShadow: "0 4px 14px rgba(141,182,0,0.3)",
                }}
                whileHover={{ scale: 1.05, boxShadow: "0 8px 25px rgba(141,182,0,0.4)" }}
                whileTap={{ scale: 0.97 }}
              >
                Ontdek Elvatix →
              </motion.a>
            </div>
          </motion.div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
