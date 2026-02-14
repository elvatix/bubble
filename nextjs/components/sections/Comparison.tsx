"use client";
import AnimateOnScroll from "../animations/AnimateOnScroll";
import { motion } from "framer-motion";

const comparisons = [
  {
    category: "InMails",
    old: { text: "Handmatig InMails typen, één voor één. Of kopiëren uit ChatGPT en plakken.", time: "~10-15 min per bericht" },
    new: { text: "AI schrijft persoonlijke InMails in jouw toon, direct in LinkedIn.", time: "~30 seconden per bericht" },
  },
  {
    category: "Connectieverzoeken",
    old: { text: "Standaard connectieverzoeken zonder context of personalisatie.", time: "Lage acceptatiegraad" },
    new: { text: "Gepersonaliseerde uitnodigingen op basis van profielinformatie, in één klik.", time: "2x hogere acceptatie" },
  },
  {
    category: "Follow-ups",
    old: { text: "Vergeten om op te volgen. Kandidaten vallen tussen wal en schip.", time: "Gemiste kansen" },
    new: { text: "Geautomatiseerde reminders zodat je nooit meer een follow-up mist.", time: "Altijd op tijd" },
  },
];

export default function Comparison() {
  return (
    <section className="section-padding" style={{ background: "#fff" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <AnimateOnScroll variant="fadeUp">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 900, color: "#111", marginBottom: 12 }}>
              Zonder vs. Met Elvatix
            </h2>
            <p style={{ color: "#6b7280", fontSize: 16, maxWidth: 500, margin: "0 auto" }}>
              Zie het verschil wanneer AI jouw LinkedIn outreach overneemt.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="comparison-grid" style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: 24 }}>
          <div>
            <h3 style={{ fontSize: 18, fontWeight: 700, color: "#6b7280", marginBottom: 24, textAlign: "center" }}>Zonder Elvatix</h3>
            {comparisons.map((c, i) => (
              <AnimateOnScroll key={`old-${i}`} variant="fadeLeft" delay={0.1 * i}>
                <div style={{ padding: 24, borderRadius: 16, background: "#f8fafc", border: "1px solid #e5e7eb", marginBottom: 16 }}>
                  <p style={{ fontSize: 12, fontWeight: 600, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 8 }}>
                    ZONDER ELVATIX
                  </p>
                  <p style={{ fontSize: 15, color: "#374151", fontWeight: 600, marginBottom: 8, lineHeight: 1.6 }}>{c.old.text}</p>
                  <p style={{ fontSize: 13, color: "#9ca3af", fontStyle: "italic" }}>{c.old.time}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <div className="comparison-center-label" style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "0 16px" }}>
            <div style={{ width: 2, height: "100%", background: "linear-gradient(to bottom, transparent, #8db600, transparent)" }} />
          </div>

          <div>
            <h3 style={{ fontSize: 18, fontWeight: 700, color: "#8db600", marginBottom: 24, textAlign: "center" }}>Met Elvatix</h3>
            {comparisons.map((c, i) => (
              <AnimateOnScroll key={`new-${i}`} variant="fadeRight" delay={0.1 * i}>
                <motion.div
                  style={{ padding: 24, borderRadius: 16, background: "#f0f7d4", border: "1px solid #d4edaa", marginBottom: 16 }}
                  whileHover={{ y: -2, boxShadow: "0 8px 20px rgba(141,182,0,0.12)" }}
                  transition={{ duration: 0.2 }}
                >
                  <p style={{ fontSize: 15, color: "#374151", fontWeight: 600, marginBottom: 8, lineHeight: 1.6 }}>{c.new.text}</p>
                  <p style={{ fontSize: 13, color: "#8db600", fontStyle: "italic", fontWeight: 500 }}>{c.new.time}</p>
                </motion.div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>

        <div className="comparison-mobile-label" style={{ display: "none", textAlign: "center", marginTop: 8 }}>
          <p style={{ fontSize: 13, color: "#9ca3af" }}>Scroll voor vergelijking</p>
        </div>
      </div>
    </section>
  );
}
