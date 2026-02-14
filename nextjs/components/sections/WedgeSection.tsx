"use client";
import { motion } from "framer-motion";
import AnimateOnScroll from "../animations/AnimateOnScroll";
import AnimatedCounter from "../animations/AnimatedCounter";

export default function WedgeSection() {
  const stats = [
    { icon: "\u26a1", stat: "30x", label: "Sneller dan handmatig outreach" },
    { icon: "\ud83d\udcc8", stat: "85%", label: "Minder tijd per InMail" },
    { icon: "\ud83c\udfaf", stat: "3x", label: "Hogere response rate" },
    { icon: "\ud83e\udd16", stat: "100%", label: "AI-gepersonaliseerd" },
  ];

  return (
    <section style={{
      background: "linear-gradient(135deg, #7aa300 0%, #8db600 50%, #1a2e05 100%)",
      padding: "100px 24px",
      position: "relative",
      overflow: "hidden",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 2 }}>
        <div className="grid-2">
          <div>
            <AnimateOnScroll variant="fadeUp">
              <p style={{ fontSize: 14, fontWeight: 600, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 16 }}>
                De kloof wordt groter
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll variant="fadeUp" delay={0.15}>
              <h2 style={{ fontSize: "clamp(36px, 4vw, 56px)", fontWeight: 900, color: "white", marginBottom: 20, lineHeight: 1.1 }}>
                Recruitment verandert.{" "}
                <span style={{ color: "#fbbf24" }}>Snel.</span>
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll variant="fadeUp" delay={0.3}>
              <p style={{ fontSize: 17, color: "rgba(255,255,255,0.7)", maxWidth: 460, marginBottom: 36, lineHeight: 1.7 }}>
                Wie blijft vasthouden aan de oude manier, loopt achter. Met de Elvatix AI Copilot ben je altijd een stap voor.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll variant="fadeUp" delay={0.45}>
              <motion.a
                href="/platform"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "rgba(255,255,255,0.15)",
                  color: "white",
                  border: "1px solid rgba(255,255,255,0.3)",
                  padding: "12px 32px",
                  borderRadius: 9999,
                  fontSize: 15,
                  fontWeight: 600,
                  textDecoration: "none",
                  backdropFilter: "blur(10px)",
                }}
                whileHover={{ scale: 1.05, background: "rgba(255,255,255,0.25)" }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Ontdek de AI Copilot \u2192
              </motion.a>
            </AnimateOnScroll>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {stats.map((item, i) => (
              <AnimateOnScroll key={i} variant="fadeRight" delay={0.15 * i}>
                <motion.div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 20,
                    background: "rgba(255,255,255,0.08)",
                    borderRadius: 16,
                    padding: "20px 24px",
                    border: "1px solid rgba(255,255,255,0.1)",
                    backdropFilter: "blur(10px)",
                  }}
                  whileHover={{ background: "rgba(255,255,255,0.15)", x: 8, transition: { duration: 0.2 } }}
                >
                  <span style={{ fontSize: 28 }}>{item.icon}</span>
                  <div>
                    <AnimatedCounter
                      target={item.stat}
                      style={{ fontSize: 28, fontWeight: 800, color: "#fbbf24", display: "block" }}
                    />
                    <p style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", marginTop: 2 }}>{item.label}</p>
                  </div>
                </motion.div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>

      <div style={{
        position: "absolute",
        top: -100,
        right: -100,
        width: 400,
        height: 400,
        background: "radial-gradient(circle, rgba(251,191,36,0.15) 0%, transparent 70%)",
        borderRadius: "50%",
        zIndex: 1,
      }} />
      <div style={{
        position: "absolute",
        bottom: -150,
        left: -150,
        width: 500,
        height: 500,
        background: "radial-gradient(circle, rgba(99,102,241,0.2) 0%, transparent 70%)",
        borderRadius: "50%",
        zIndex: 1,
      }} />
    </section>
  );
}
