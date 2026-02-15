"use client";
import { motion } from "framer-motion";
import AnimateOnScroll from "../animations/AnimateOnScroll";
import LeadMagnet from "./LeadMagnet";

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

      <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%" }}>
        <div className="grid-2" style={{ alignItems: "center" }}>
          {/* Left: text content */}
          <div>
            <AnimateOnScroll variant="fadeUp" delay={0.1}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(141,182,0,0.1)", border: "1px solid rgba(141,182,0,0.2)", borderRadius: 9999, padding: "6px 16px", marginBottom: 24 }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#8db600", display: "inline-block", animation: "hero-pulse 2s infinite" }} />
                <span style={{ fontSize: 13, fontWeight: 600, color: "#5a7a00" }}>#1 AI Recruitment Copilot voor LinkedIn</span>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll variant="fadeUp" delay={0.2}>
              <h1
                style={{
                  fontSize: "clamp(36px, 5vw, 56px)",
                  fontWeight: 900,
                  lineHeight: 1.06,
                  letterSpacing: "-0.03em",
                  marginBottom: 24,
                  color: "#111",
                }}
              >
                Schrijf jouw{" "}
                <span style={{ background: "linear-gradient(135deg, #8db600, #6a9a00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>InMails</span>
                {" "}en connectieverzoeken in{" "}
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

          {/* Right: WORKING LeadMagnet module */}
          <AnimateOnScroll variant="fadeRight" delay={0.4} duration={0.9}>
            <LeadMagnet compact />
          </AnimateOnScroll>
        </div>
      </div>

      <style>{`
        @keyframes hero-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.3); }
        }
      `}</style>
    </section>
  );
}
