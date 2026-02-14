"use client";
import AnimateOnScroll from "../animations/AnimateOnScroll";
import AnimatedCounter from "../animations/AnimatedCounter";
import { motion } from "framer-motion";

const items = [
  { value: "500+", label: "Recruiters gebruiken Elvatix" },
  { value: "4-6", suffix: " uur", label: "Bespaard per recruiter, per week" },
  { value: "30", suffix: " sec", label: "Per gepersonaliseerd InMail bericht" },
  { value: "2x", label: "Meer respons op je outreach" },
];

export default function Stats() {
  return (
    <section className="section-padding" style={{ background: "#fff" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <AnimateOnScroll variant="fadeUp">
          <h2 style={{ textAlign: "center", fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 900, color: "#111", marginBottom: 12 }}>
            Cijfers die voor zich spreken
          </h2>
          <p style={{ textAlign: "center", color: "#6b7280", fontSize: 16, marginBottom: 48 }}>
            Sluit je aan bij honderden recruiters die elke dag tijd besparen met Elvatix.
          </p>
        </AnimateOnScroll>
        <div className="grid-4">
          {items.map((s, i) => (
            <AnimateOnScroll key={i} variant="scaleUp" delay={0.1 * i}>
              <motion.div
                style={{
                  textAlign: "center",
                  padding: 32,
                  borderRadius: 20,
                  background: "#fafafa",
                  border: "1px solid #f3f4f6",
                }}
                whileHover={{ y: -4, boxShadow: "0 12px 30px rgba(0,0,0,0.06)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <AnimatedCounter target={s.value} style={{ fontSize: 48, fontWeight: 900, color: "#111" }} />
                <p style={{ fontSize: 14, color: "#6b7280", marginTop: 8 }}>{s.label}</p>
              </motion.div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
