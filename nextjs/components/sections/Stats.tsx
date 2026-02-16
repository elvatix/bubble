"use client";
import AnimateOnScroll from "../animations/AnimateOnScroll";
import { motion } from "framer-motion";
import StaggerChildren, { StaggerItem } from "../animations/StaggerChildren";

const items = [
  { value: "500+", label: "Recruiters", sub: "gebruiken Elvatix dagelijks" },
  { value: "4-6", suffix: " uur", label: "Bespaard", sub: "per recruiter, per week" },
  { value: "30", suffix: " sec", label: "Per InMail", sub: "volledig gepersonaliseerd" },
  { value: "2", suffix: "x", label: "Meer respons", sub: "op jouw outreach berichten" },
];

export default function Stats() {
  return (
    <section className="section-padding" style={{ background: "#fff" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <AnimateOnScroll variant="fadeUp">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={{ fontSize: 13, fontWeight: 700, color: "#8db600", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 12 }}>In cijfers</p>
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 900, color: "#111", marginBottom: 12 }}>
              Cijfers die voor zich spreken
            </h2>
            <p style={{ color: "#6b7280", fontSize: 16, maxWidth: 500, margin: "0 auto" }}>
              Sluit je aan bij honderden recruiters die elke dag tijd besparen.
            </p>
          </div>
        </AnimateOnScroll>
        <StaggerChildren staggerDelay={0.1}>
          <div className="grid-4">
            {items.map((s, i) => (
              <StaggerItem key={i}>
                <motion.div
                  style={{
                    textAlign: "center",
                    padding: 32,
                    borderRadius: 20,
                    background: "linear-gradient(135deg, #fafafa, #f5f5f5)",
                    border: "1px solid #f3f4f6",
                  }}
                  whileHover={{ y: -6, boxShadow: "0 16px 40px rgba(0,0,0,0.08)", borderColor: "rgba(141,182,0,0.2)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div style={{ display: "flex", alignItems: "baseline", justifyContent: "center", gap: 2 }}>
                    <span style={{ fontSize: 48, fontWeight: 900, color: "#111" }}>{s.value}</span>
                    {s.suffix && <span style={{ fontSize: 22, fontWeight: 700, color: "#8db600" }}>{s.suffix}</span>}
                  </div>
                  <p style={{ fontSize: 16, fontWeight: 700, color: "#111", marginTop: 8 }}>{s.label}</p>
                  <p style={{ fontSize: 13, color: "#9ca3af", marginTop: 4 }}>{s.sub}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </div>
        </StaggerChildren>
      </div>
    </section>
  );
}
