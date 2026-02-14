"use client";
import { motion } from "framer-motion";
import AnimateOnScroll from "../animations/AnimateOnScroll";

const solutions = [
  { icon: "\ud83c\udfe2", title: "Staffing & Detachering", desc: "Vul vacatures sneller met AI-driven sourcing en outreach." },
  { icon: "\ud83c\udf1f", title: "Corporate Recruitment", desc: "Bouw employer branding en bereik passieve kandidaten." },
  { icon: "\ud83d\ude80", title: "RPO & Agencies", desc: "Schaal je operatie zonder extra headcount." },
];

export default function Solutions() {
  return (
    <section style={{ padding: "80px 24px", background: "#fff" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <AnimateOnScroll variant="fadeUp">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 900, color: "#111", marginBottom: 12 }}>
              Gebouwd voor elke recruiter
            </h2>
            <p style={{ color: "#6b7280", fontSize: 16 }}>Van staffing tot corporate \u2014 Elvatix past zich aan.</p>
          </div>
        </AnimateOnScroll>

        <div className="grid-3">
          {solutions.map((sol, i) => (
            <AnimateOnScroll key={i} variant="fadeUp" delay={0.15 * i}>
              <motion.div
                style={{
                  background: "#fafafa",
                  borderRadius: 20,
                  padding: 36,
                  border: "1px solid #f3f4f6",
                  height: "100%",
                }}
                whileHover={{
                  y: -8,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
                  borderColor: "rgba(141,182,0,0.3)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.div
                  style={{ fontSize: 40, marginBottom: 16 }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {sol.icon}
                </motion.div>
                <h3 style={{ fontSize: 20, fontWeight: 700, color: "#111", marginBottom: 8 }}>{sol.title}</h3>
                <p style={{ color: "#6b7280", fontSize: 15, lineHeight: 1.6 }}>{sol.desc}</p>
              </motion.div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
