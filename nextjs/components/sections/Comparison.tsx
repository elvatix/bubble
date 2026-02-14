"use client";
import { motion } from "framer-motion";
import AnimateOnScroll from "../animations/AnimateOnScroll";

const rows = [
  {
    old: { text: "Handmatig InMails typen, \u00e9\u00e9n voor \u00e9\u00e9n.", time: "~15 min per bericht" },
    category: "InMails",
    new: { text: "AI schrijft gepersonaliseerde InMails in seconden.", time: "~30 sec per bericht" },
  },
  {
    old: { text: "Standaard connectieverzoeken zonder context.", time: "Lage acceptatiegraad" },
    category: "Connecties",
    new: { text: "Slimme, op maat gemaakte connectieverzoeken.", time: "3x hogere acceptatie" },
  },
  {
    old: { text: "Handmatig opvolgen via spreadsheets en notities.", time: "Vergeet je snel" },
    category: "Opvolging",
    new: { text: "Automatische reminders en follow-up sequences.", time: "Nooit meer vergeten" },
  },
];

export default function Comparison() {
  return (
    <section style={{ padding: "80px 24px", background: "#fff" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <AnimateOnScroll variant="fadeUp">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 900, color: "#111", marginBottom: 16 }}>
              De oude manier vs. <span className="gradient-text">de Elvatix manier</span>
            </h2>
            <p style={{ fontSize: 17, color: "#6b7280", maxWidth: 600, margin: "0 auto" }}>
              Zie het verschil. Bespaar uren per week op je LinkedIn outreach.
            </p>
          </div>
        </AnimateOnScroll>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 200px 1fr", gap: 16, marginBottom: 32 }} className="comparison-grid">
          <AnimateOnScroll variant="fadeLeft">
            <h3 style={{ fontSize: 18, fontWeight: 700, color: "#374151" }}>De oude manier</h3>
          </AnimateOnScroll>
          <div />
          <AnimateOnScroll variant="fadeRight">
            <h3 style={{ fontSize: 18, fontWeight: 700, color: "#6a9a00", textAlign: "right" }}>De nieuwe manier</h3>
          </AnimateOnScroll>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {rows.map((row, i) => (
            <div key={i} className="comparison-grid">
              <AnimateOnScroll variant="fadeLeft" delay={0.1 * i}>
                <motion.div
                  className="card-old"
                  whileHover={{ scale: 1.02, boxShadow: "0 8px 30px rgba(0,0,0,0.08)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="comparison-mobile-label">De oude manier</div>
                  <p style={{ fontWeight: 600, fontSize: 15, marginBottom: 8, color: "#111" }}>{row.old.text}</p>
                  <p style={{ fontSize: 13, color: "#9ca3af", fontStyle: "italic" }}>{row.old.time}</p>
                </motion.div>
              </AnimateOnScroll>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }} className="comparison-center-label">
                <span style={{ fontSize: 14, fontWeight: 600, color: "#6b7280", textAlign: "center" }}>{row.category}</span>
              </div>
              <AnimateOnScroll variant="fadeRight" delay={0.1 * i}>
                <motion.div
                  className="card-new"
                  whileHover={{ scale: 1.02, boxShadow: "0 8px 30px rgba(141,182,0,0.3)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="comparison-mobile-label" style={{ color: "rgba(255,255,255,0.7)" }}>De nieuwe manier</div>
                  <p style={{ fontWeight: 600, fontSize: 15, marginBottom: 8 }}>{row.new.text}</p>
                  <p style={{ fontSize: 13, opacity: 0.8, fontStyle: "italic" }}>{row.new.time}</p>
                </motion.div>
              </AnimateOnScroll>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
