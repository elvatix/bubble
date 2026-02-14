"use client";
import { motion } from "framer-motion";
import AnimateOnScroll from "../animations/AnimateOnScroll";
import AnimatedCounter from "../animations/AnimatedCounter";

const stats = [
  { number: "85%", label: "Minder tijd per InMail" },
  { number: "3x", label: "Hogere response rate" },
  { number: "500+", label: "Actieve recruiters" },
];

export default function Stats() {
  return (
    <section style={{ background: "linear-gradient(135deg, #8db600 0%, #a3c520 30%, #8db600 60%, #6a9a00 100%)", padding: "80px 24px" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <AnimateOnScroll variant="scaleUp">
          <div style={{ background: "rgba(255,255,255,0.92)", backdropFilter: "blur(20px)", borderRadius: 32, padding: "64px 48px" }}>
            <div className="grid-3" style={{ textAlign: "center" }}>
              {stats.map((stat, i) => (
                <AnimateOnScroll key={i} variant="fadeUp" delay={0.15 * i}>
                  <div>
                    <AnimatedCounter
                      target={stat.number}
                      style={{
                        fontSize: "clamp(48px, 6vw, 80px)",
                        fontWeight: 900,
                        marginBottom: 8,
                        background: "linear-gradient(135deg, #8db600 0%, #7aa300 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        display: "block",
                      }}
                      duration={2.5}
                    />
                    <p style={{ color: "#6b7280", fontSize: 16, fontWeight: 500 }}>{stat.label}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll variant="fadeUp" delay={0.3}>
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <motion.a
              href="/demo"
              className="pill-btn pill-btn-primary"
              style={{ padding: "14px 32px" }}
              whileHover={{ scale: 1.05, boxShadow: "0 8px 30px rgba(0,0,0,0.2)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Meer weten over Elvatix
            </motion.a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
