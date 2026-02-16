"use client";
import { motion } from "framer-motion";
import LeadMagnet from "./LeadMagnet";

export default function Hero() {
  return (
    <section
      className="section-padding page-top"
      style={{
        position: "relative",
        background: "#fafbfc",
        overflow: "hidden",
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%" }}>
        <div className="grid-2" style={{ alignItems: "center" }}>
          {/* Left: text content — NO entrance animations */}
          <div>
            <h1
              style={{
                fontSize: "clamp(32px, 4.5vw, 52px)",
                fontWeight: 900,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                marginBottom: 24,
                color: "#111",
              }}
            >
              Stop met uren typen.{" "}
              <span style={{ background: "linear-gradient(135deg, #0a66c2, #004182)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Genereer persoonlijke InMails
              </span>{" "}
              in 30 seconden.
            </h1>

            <p style={{ fontSize: "clamp(15px, 1.6vw, 17px)", color: "#6b7280", marginBottom: 36, maxWidth: 500, lineHeight: 1.75 }}>
              De enige AI-tool die direct in LinkedIn Recruiter werkt. Veilig, persoonlijk en in jouw tone-of-voice.
            </p>

            <div className="hero-buttons" style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 36 }}>
              <motion.a
                href="/demo"
                className="pill-btn pill-btn-primary"
                style={{ padding: "14px 32px", fontSize: 15 }}
                whileHover={{ scale: 1.04, boxShadow: "0 12px 35px rgba(141,182,0,0.35)" }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Plan een demo
              </motion.a>
              <motion.a
                href="/cases"
                className="pill-btn pill-btn-outline"
                style={{ padding: "14px 28px", fontSize: 15 }}
                whileHover={{ scale: 1.04, backgroundColor: "rgba(141,182,0,0.06)" }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Bekijk de Manpower case
              </motion.a>
            </div>

            <div style={{ display: "flex", gap: 32, alignItems: "center", flexWrap: "wrap" }}>
              {[
                { score: "5.0", label: "Chrome Store" },
                { score: "4.4", label: "Trustpilot" },
                { score: "5.0", label: "Google" },
              ].map((r, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <div style={{ display: "flex", gap: 2 }}>
                    {[1,2,3,4,5].map(s => (
                      <span key={s} style={{ color: s <= Math.floor(parseFloat(r.score)) ? "#fbbf24" : "#e5e7eb", fontSize: 14 }}>{"\u2605"}</span>
                    ))}
                  </div>
                  <span style={{ fontSize: 12, color: "#9ca3af", fontWeight: 500 }}>{r.score} {r.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: WORKING LeadMagnet — NO entrance animation */}
          <LeadMagnet compact />
        </div>
      </div>
    </section>
  );
}
