"use client";
import { motion } from "framer-motion";
import AnimateOnScroll from "../animations/AnimateOnScroll";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="section-padding page-top"
      style={{
        position: "relative",
        background: "linear-gradient(135deg, #fafdf5 0%, #f8fafc 50%, #f0f7e6 100%)",
        overflow: "hidden",
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Decorative blobs */}
      <div style={{ position: "absolute", top: -80, right: -40, width: 500, height: 500, background: "radial-gradient(circle, rgba(141,182,0,0.08) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: -120, left: -80, width: 600, height: 600, background: "radial-gradient(circle, rgba(141,182,0,0.05) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "30%", left: "50%", width: 300, height: 300, background: "radial-gradient(circle, rgba(251,191,36,0.06) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%" }}>
        <div className="grid-2" style={{ alignItems: "center" }}>
          <div>
            <AnimateOnScroll variant="fadeUp" delay={0.1}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(141,182,0,0.1)", border: "1px solid rgba(141,182,0,0.2)", borderRadius: 9999, padding: "6px 16px", marginBottom: 24 }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#8db600", display: "inline-block", animation: "pulse 2s infinite" }} />
                <span style={{ fontSize: 13, fontWeight: 600, color: "#5a7a00" }}>#1 AI Recruitment Copilot voor LinkedIn</span>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll variant="fadeUp" delay={0.2}>
              <h1
                style={{
                  fontSize: "clamp(36px, 5vw, 64px)",
                  fontWeight: 900,
                  lineHeight: 1.06,
                  letterSpacing: "-0.03em",
                  marginBottom: 24,
                  color: "#111",
                }}
              >
                Schrijf jouw{" "}
                <span style={{ background: "linear-gradient(135deg, #8db600, #6a9a00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>InMails</span>
                {" "}en connectie&shy;verzoeken in{" "}
                <span style={{ fontStyle: "italic", position: "relative" }}>
                  seconden
                  <svg style={{ position: "absolute", bottom: -4, left: 0, width: "100%", height: 12 }} viewBox="0 0 200 12" fill="none">
                    <path d="M2 8C40 2 80 2 100 6C120 10 160 4 198 6" stroke="#8db600" strokeWidth="3" strokeLinecap="round" opacity="0.4" />
                  </svg>
                </span>
              </h1>
            </AnimateOnScroll>

            <AnimateOnScroll variant="fadeUp" delay={0.35}>
              <p style={{ fontSize: "clamp(15px, 1.8vw, 18px)", color: "#6b7280", marginBottom: 36, maxWidth: 480, lineHeight: 1.75 }}>
                Geen kopiëren uit ChatGPT en plakken in LinkedIn meer. Elvatix schrijft persoonlijke InMails en connectieverzoeken direct in LinkedIn Recruiter.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll variant="fadeUp" delay={0.5}>
              <div className="hero-buttons" style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 36 }}>
                <motion.a
                  href="/demo"
                  className="pill-btn pill-btn-primary"
                  style={{ padding: "14px 32px", fontSize: 15 }}
                  whileHover={{ scale: 1.05, boxShadow: "0 12px 35px rgba(141,182,0,0.35)" }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  Plan een demo →
                </motion.a>
                <motion.a
                  href="/cases"
                  className="pill-btn pill-btn-outline"
                  style={{ padding: "14px 28px", fontSize: 15 }}
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(141,182,0,0.06)" }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  Bekijk de Manpower case
                </motion.a>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll variant="fadeUp" delay={0.6}>
              <div style={{ display: "flex", gap: 32, alignItems: "center", flexWrap: "wrap" }}>
                {[
                  { score: "5.0", label: "Chrome Store" },
                  { score: "4.4", label: "Trustpilot" },
                  { score: "5.0", label: "Google" },
                ].map((r, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <div style={{ display: "flex", gap: 2 }}>
                      {[1,2,3,4,5].map(s => (
                        <span key={s} style={{ color: s <= Math.floor(parseFloat(r.score)) ? "#fbbf24" : "#e5e7eb", fontSize: 14 }}>★</span>
                      ))}
                    </div>
                    <span style={{ fontSize: 12, color: "#9ca3af", fontWeight: 500 }}>{r.score} {r.label}</span>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
          </div>

          {/* Right side: AI Generator preview */}
          <AnimateOnScroll variant="fadeRight" delay={0.4} duration={0.9}>
            <motion.div
              style={{
                background: "white",
                borderRadius: 24,
                padding: "36px 32px",
                border: "1px solid #e5e7eb",
                boxShadow: "0 25px 50px -12px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.03)",
                position: "relative",
                overflow: "hidden",
              }}
              whileHover={{ y: -4, boxShadow: "0 30px 60px -12px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.04)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Subtle gradient accent */}
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, #8db600, #a3c520, #fbbf24)" }} />

              <p style={{ fontSize: 11, fontWeight: 700, color: "#8db600", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 16 }}>AI Recruitment Writer</p>
              <h3 style={{ fontSize: 22, fontWeight: 800, color: "#111", marginBottom: 8 }}>Genereer een bericht</h3>
              <p style={{ fontSize: 13, color: "#9ca3af", marginBottom: 24 }}>Plak een LinkedIn URL — wij schrijven een persoonlijke InMail in jouw toon.</p>

              {/* Fake form */}
              <div style={{ marginBottom: 16 }}>
                <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#374151", marginBottom: 6 }}>LinkedIn URL *</label>
                <div style={{ display: "flex", alignItems: "center", border: "1px solid #e5e7eb", borderRadius: 10, background: "#f9fafb", padding: "0 14px" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#0077b5"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  <input disabled placeholder="linkedin.com/in/jan-jansen" style={{ flex: 1, padding: "12px 10px", border: "none", outline: "none", fontSize: 13, background: "transparent", color: "#6b7280" }} />
                </div>
              </div>

              <div style={{ marginBottom: 16 }}>
                <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#374151", marginBottom: 6 }}>Functie</label>
                <input disabled placeholder="bijv. Senior Software Engineer" style={{ width: "100%", padding: "12px 14px", border: "1px solid #e5e7eb", borderRadius: 10, fontSize: 13, background: "#f9fafb", color: "#6b7280", boxSizing: "border-box" }} />
              </div>

              <div style={{ marginBottom: 20 }}>
                <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#374151", marginBottom: 6 }}>Toon</label>
                <div style={{ display: "flex", gap: 8 }}>
                  <div style={{ flex: 1, padding: "10px 16px", borderRadius: 10, border: "2px solid #8db600", background: "rgba(141,182,0,0.05)", textAlign: "center", fontSize: 13, fontWeight: 600, color: "#8db600" }}>Informeel</div>
                  <div style={{ flex: 1, padding: "10px 16px", borderRadius: 10, border: "1px solid #e5e7eb", background: "#f9fafb", textAlign: "center", fontSize: 13, fontWeight: 500, color: "#6b7280" }}>Formeel</div>
                </div>
              </div>

              <Link href="/start" style={{ display: "block", width: "100%", padding: "14px", background: "linear-gradient(135deg, #8db600, #7aa300)", color: "white", border: "none", borderRadius: 12, fontSize: 15, fontWeight: 700, textAlign: "center", textDecoration: "none", boxShadow: "0 4px 14px rgba(141,182,0,0.3)" }}>
                Genereer berichten →
              </Link>

              <div style={{ display: "flex", justifyContent: "center", gap: 20, marginTop: 14 }}>
                {[
                  { icon: "🔒", text: "Veilig" },
                  { icon: "⚡", text: "~15 sec" },
                  { icon: "🎯", text: "5x gratis" },
                ].map((item, i) => (
                  <span key={i} style={{ fontSize: 11, color: "#9ca3af", display: "flex", alignItems: "center", gap: 4 }}>
                    <span>{item.icon}</span> {item.text}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimateOnScroll>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.3); }
        }
      `}</style>
    </section>
  );
}
