"use client";
import { motion } from "framer-motion";
import AnimateOnScroll from "../animations/AnimateOnScroll";
import AnimatedCounter from "../animations/AnimatedCounter";

export default function WedgeSection() {
  const stats = [
    { icon: "⏱️", value: "30", suffix: " sec", label: "Per gepersonaliseerd bericht", sub: "Was 10-15 minuten" },
    { icon: "📈", value: "2", suffix: "x", label: "Meer respons op InMails", sub: "Vergeleken met standaard berichten" },
    { icon: "⏰", value: "4-6", suffix: " uur", label: "Besparing per week", sub: "Per recruiter, per week" },
    { icon: "🏆", value: "260", suffix: " InMails", label: "In slechts 1,7 uur", sub: "Manpower case study" },
  ];

  return (
    <section
      className="section-padding"
      style={{
        background: "linear-gradient(135deg, #7aa300 0%, #8db600 50%, #1a2e05 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 2 }}>
        <div className="grid-2">
          <div>
            <AnimateOnScroll variant="fadeUp">
              <p style={{ fontSize: 14, fontWeight: 600, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 16 }}>
                Bewezen resultaten
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll variant="fadeUp" delay={0.15}>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 56px)", fontWeight: 900, color: "white", marginBottom: 20, lineHeight: 1.1 }}>
                Van uren typen naar{" "}
                <span style={{ color: "#fbbf24" }}>seconden.</span>
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll variant="fadeUp" delay={0.3}>
              <p style={{ fontSize: "clamp(14px, 1.5vw, 17px)", color: "rgba(255,255,255,0.7)", maxWidth: 460, marginBottom: 36, lineHeight: 1.7 }}>
                500+ recruiters besparen dagelijks uren met Elvatix. Van copy-paste frustratie naar persoonlijke berichten in één klik.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll variant="fadeUp" delay={0.45}>
              <motion.a
                href="/cases"
                className="pill-btn"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "rgba(255,255,255,0.15)",
                  color: "white",
                  border: "1px solid rgba(255,255,255,0.3)",
                  backdropFilter: "blur(10px)",
                }}
                whileHover={{ scale: 1.05, background: "rgba(255,255,255,0.25)" }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Bekijk de Manpower case study →
              </motion.a>
            </AnimateOnScroll>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
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
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
                      <span style={{ fontSize: 28, fontWeight: 800, color: "#fbbf24" }}>{item.value}</span>
                      <span style={{ fontSize: 16, fontWeight: 700, color: "#fbbf24" }}>{item.suffix}</span>
                    </div>
                    <p style={{ fontSize: 14, color: "rgba(255,255,255,0.85)", marginTop: 2, fontWeight: 500 }}>{item.label}</p>
                    <p style={{ fontSize: 11, color: "rgba(255,255,255,0.45)", marginTop: 2 }}>{item.sub}</p>
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
    </section>
  );
}
