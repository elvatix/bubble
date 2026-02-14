"use client";
import { motion } from "framer-motion";
import AnimateOnScroll from "../animations/AnimateOnScroll";

export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        paddingTop: "140px",
        paddingBottom: "80px",
        paddingLeft: "24px",
        paddingRight: "24px",
        background: "linear-gradient(to bottom, #f8fafc, #ffffff)",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "absolute", top: 0, right: 0, width: 384, height: 384, background: "rgba(219,234,254,0.4)", borderRadius: "50%", filter: "blur(120px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, width: 320, height: 320, background: "rgba(243,232,255,0.3)", borderRadius: "50%", filter: "blur(100px)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="grid-2">
          <div>
            <AnimateOnScroll variant="fadeUp" delay={0.1}>
              <h1
                style={{
                  fontSize: "clamp(36px, 5vw, 64px)",
                  fontWeight: 900,
                  lineHeight: 1.08,
                  letterSpacing: "-0.02em",
                  marginBottom: 24,
                  color: "#111",
                }}
              >
                Schrijf jouw <span className="gradient-text">InMails</span> en connectieverzoeken in{" "}
                <span style={{ fontStyle: "italic", color: "#8db600" }}>minuten</span>{" "}
                inplaats van uren.
              </h1>
            </AnimateOnScroll>

            <AnimateOnScroll variant="fadeUp" delay={0.3}>
              <p style={{ fontSize: 18, color: "#6b7280", marginBottom: 40, maxWidth: 500, lineHeight: 1.7 }}>
                Geen kopiëren uit ChatGPT, plakken in LinkedIn en handmatig bijschaven meer. Elvatix werkt direct in LinkedIn Recruiter en Sales Navigator — van 10-15 minuten naar 30 seconden per persoonlijk bericht.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll variant="fadeUp" delay={0.5}>
              <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 32 }}>
                <motion.a
                  href="https://elvatix.com"
                  className="pill-btn pill-btn-primary"
                  style={{ padding: "14px 32px", fontSize: 16 }}
                  whileHover={{ scale: 1.05, boxShadow: "0 8px 30px rgba(141,182,0,0.4)" }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  Plan een demo
                </motion.a>
                <motion.a
                  href="https://elvatix.com"
                  className="pill-btn pill-btn-outline"
                  style={{ padding: "14px 32px", fontSize: 16 }}
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(141,182,0,0.08)" }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  Bekijk de case study
                </motion.a>
              </div>
              <div style={{ display: "flex", gap: 24, alignItems: "center", flexWrap: "wrap" }}>
                <span style={{ fontSize: 13, color: "#6b7280" }}>⭐ 5.0 op Chrome</span>
                <span style={{ fontSize: 13, color: "#6b7280" }}>⭐ 4.4 op Trustpilot</span>
                <span style={{ fontSize: 13, color: "#6b7280" }}>⭐ 5.0 op Google</span>
              </div>
            </AnimateOnScroll>
          </div>

          <AnimateOnScroll variant="fadeRight" delay={0.4} duration={0.9}>
            <motion.div
              style={{
                background: "linear-gradient(135deg, #8db600, #a3c520, #6a9a00)",
                borderRadius: 24,
                padding: 32,
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)",
              }}
              whileHover={{ y: -4, boxShadow: "0 30px 60px -12px rgba(0,0,0,0.3)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div style={{ display: "flex", justifyContent: "center", marginBottom: 24 }}>
                <motion.div
                  style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <span style={{ color: "white", fontSize: 24, fontWeight: 700 }}>E</span>
                </motion.div>
              </div>

              <div className="grid-hero-cards">
                {[
                  { icon: "\ud83d\udce7", label: "InMails" },
                  { icon: "\ud83e\udd1d", label: "Connecties" },
                  { icon: "\ud83d\udd14", label: "Reminders" },
                  { icon: "\ud83d\udcdd", label: "Templates" },
                  { icon: "\ud83d\udd17", label: "LinkedIn" },
                  { icon: "\ud83d\udd04", label: "Sales/Recruit" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    style={{ background: "rgba(255,255,255,0.15)", borderRadius: 16, padding: 16, textAlign: "center", color: "white", border: "1px solid rgba(255,255,255,0.1)" }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
                    whileHover={{ background: "rgba(255,255,255,0.25)", scale: 1.05 }}
                  >
                    <div style={{ fontSize: 24, marginBottom: 4 }}>{item.icon}</div>
                    <div style={{ fontSize: 12, fontWeight: 500, opacity: 0.9 }}>{item.label}</div>
                  </motion.div>
                ))}
              </div>

              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, marginTop: 24 }}>
                <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 14, fontWeight: 500 }}>10-15 min</span>
                <div style={{ width: 48, height: 24, background: "rgba(255,255,255,0.3)", borderRadius: 9999, position: "relative" }}>
                  <motion.div
                    style={{ position: "absolute", top: 4, width: 16, height: 16, background: "white", borderRadius: "50%" }}
                    animate={{ right: [28, 4, 4] }}
                    transition={{ duration: 1.5, delay: 1.2, ease: "easeInOut" }}
                  />
                </div>
                <span style={{ color: "white", fontSize: 14, fontWeight: 600 }}>30 sec</span>
              </div>
            </motion.div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
