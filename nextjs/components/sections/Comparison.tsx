"use client";
import { motion } from "framer-motion";

const comparisons = [
  {
    category: "InMails",
    old: { text: "Handmatig InMails typen, één voor één. Of kopiëren uit ChatGPT en plakken.", time: "~10–15 min per bericht" },
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

const proofStats = [
  { value: "260", suffix: " InMails", label: "In slechts 1,7 uur", sub: "Manpower case study" },
  { value: "30", suffix: " sec", label: "Per gepersonaliseerd bericht", sub: "Was 10–15 minuten" },
  { value: "2", suffix: "x", label: "Meer respons op InMails", sub: "Vergeleken met standaard" },
  { value: "4–6", suffix: " uur", label: "Besparing per week", sub: "Per recruiter" },
];

export default function Comparison() {
  return (
    <section className="section-padding" style={{ background: "#fff" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <h2 style={{ fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 900, color: "#111", marginBottom: 12 }}>
            Van uren typen naar{" "}
            <span style={{ color: "#0a66c2" }}>seconden.</span>
          </h2>
          <p style={{ color: "#6b7280", fontSize: 16, maxWidth: 500, margin: "0 auto" }}>
            Zie het verschil wanneer AI jouw LinkedIn outreach overneemt.
          </p>
        </div>

        <div className="comparison-grid" style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: 24 }}>
          <div>
            <h3 style={{ fontSize: 18, fontWeight: 700, color: "#6b7280", marginBottom: 24, textAlign: "center" }}>Zonder Elvatix</h3>
            {comparisons.map((c, i) => (
              <div key={`old-${i}`} style={{ padding: 24, borderRadius: 16, background: "#f8fafc", border: "1px solid #e5e7eb", marginBottom: 16 }}>
                <p style={{ fontSize: 12, fontWeight: 600, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 8 }}>
                  ZONDER ELVATIX
                </p>
                <p style={{ fontSize: 15, color: "#374151", fontWeight: 600, marginBottom: 8, lineHeight: 1.6 }}>{c.old.text}</p>
                <p style={{ fontSize: 13, color: "#9ca3af", fontStyle: "italic" }}>{c.old.time}</p>
              </div>
            ))}
          </div>

          <div className="comparison-center-label" style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "0 16px" }}>
            <div style={{ width: 2, height: "100%", background: "linear-gradient(to bottom, transparent, #0a66c2, transparent)" }} />
          </div>

          <div>
            <h3 style={{ fontSize: 18, fontWeight: 700, color: "#0a66c2", marginBottom: 24, textAlign: "center" }}>Met Elvatix</h3>
            {comparisons.map((c, i) => (
              <motion.div
                key={`new-${i}`}
                style={{ padding: 24, borderRadius: 16, background: "#e8f0fe", border: "1px solid rgba(10,102,194,0.2)", marginBottom: 16 }}
                whileHover={{ y: -2, boxShadow: "0 8px 20px rgba(10,102,194,0.1)" }}
                transition={{ duration: 0.2 }}
              >
                <p style={{ fontSize: 15, color: "#374151", fontWeight: 600, marginBottom: 8, lineHeight: 1.6 }}>{c.new.text}</p>
                <p style={{ fontSize: 13, color: "#0a66c2", fontStyle: "italic", fontWeight: 500 }}>{c.new.time}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="comparison-mobile-label" style={{ display: "none", textAlign: "center", marginTop: 8 }}>
          <p style={{ fontSize: 13, color: "#9ca3af" }}>Scroll voor vergelijking</p>
        </div>

        {/* Social Proof Stats (merged from WedgeSection) */}
        <div style={{
          marginTop: 64,
          padding: "48px 40px",
          borderRadius: 24,
          background: "linear-gradient(135deg, #0a66c2 0%, #004182 100%)",
          position: "relative",
          overflow: "hidden",
        }}>
          <div style={{ position: "absolute", top: -40, right: -40, width: 200, height: 200, background: "rgba(255,255,255,0.05)", borderRadius: "50%" }} />

          <div style={{ position: "relative", zIndex: 2 }}>
            <p style={{ fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,0.6)", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 8, textAlign: "center" }}>
              Bewezen resultaten
            </p>
            <h3 style={{ fontSize: "clamp(20px, 2.5vw, 28px)", fontWeight: 800, color: "white", marginBottom: 32, textAlign: "center" }}>
              500+ recruiters besparen dagelijks uren met Elvatix
            </h3>

            <div className="grid-4">
              {proofStats.map((stat, i) => (
                <div key={i} style={{ textAlign: "center" }}>
                  <div style={{ display: "flex", alignItems: "baseline", justifyContent: "center", gap: 2 }}>
                    <span style={{ fontSize: 36, fontWeight: 900, color: "#fbbf24" }}>{stat.value}</span>
                    <span style={{ fontSize: 16, fontWeight: 700, color: "#fbbf24" }}>{stat.suffix}</span>
                  </div>
                  <p style={{ fontSize: 14, color: "rgba(255,255,255,0.9)", marginTop: 4, fontWeight: 500 }}>{stat.label}</p>
                  <p style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", marginTop: 2 }}>{stat.sub}</p>
                </div>
              ))}
            </div>

            <div style={{ textAlign: "center", marginTop: 32 }}>
              <motion.a
                href="/cases"
                className="pill-btn"
                style={{ background: "rgba(255,255,255,0.15)", color: "white", border: "1px solid rgba(255,255,255,0.3)", backdropFilter: "blur(10px)" }}
                whileHover={{ scale: 1.05, background: "rgba(255,255,255,0.25)" }}
                whileTap={{ scale: 0.97 }}
              >
                Bekijk de Manpower case study →
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
