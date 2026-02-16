"use client";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="section-padding" style={{ background: "#fff" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <div
          style={{
            background: "linear-gradient(135deg, #8db600 0%, #6a9a00 50%, #3d5c00 100%)",
            borderRadius: 32,
            padding: "64px 48px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div style={{ position: "absolute", top: -40, right: -40, width: 200, height: 200, background: "rgba(255,255,255,0.05)", borderRadius: "50%" }} />
          <div style={{ position: "absolute", bottom: -60, left: -60, width: 300, height: 300, background: "rgba(255,255,255,0.03)", borderRadius: "50%" }} />
          <div style={{ position: "relative", zIndex: 2 }}>
            <h2 style={{ fontSize: "clamp(24px, 4vw, 44px)", fontWeight: 900, color: "white", marginBottom: 16, lineHeight: 1.15 }}>
              Klaar om 4\u20136 uur per week te besparen?
            </h2>
            <p style={{ fontSize: "clamp(14px, 1.5vw, 17px)", color: "rgba(255,255,255,0.8)", maxWidth: 520, margin: "0 auto 32px", lineHeight: 1.7 }}>
              Plan een demo en ontdek hoe Elvatix jouw LinkedIn outreach versnelt. Van 10\u201315 minuten naar 30 seconden per bericht.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <motion.a
                href="/demo"
                className="pill-btn"
                style={{ background: "white", color: "#3d5c00", fontWeight: 700, padding: "16px 40px", fontSize: 16 }}
                whileHover={{ scale: 1.05, boxShadow: "0 12px 30px rgba(0,0,0,0.2)" }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Plan een demo
              </motion.a>
              <motion.a
                href="/cases"
                className="pill-btn"
                style={{ background: "rgba(255,255,255,0.15)", color: "white", border: "1px solid rgba(255,255,255,0.3)" }}
                whileHover={{ scale: 1.05, background: "rgba(255,255,255,0.25)" }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Bekijk de case study
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
