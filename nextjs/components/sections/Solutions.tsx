"use client";
import AnimateOnScroll from "../animations/AnimateOnScroll";
import StaggerChildren from "../animations/StaggerChildren";
import { motion } from "framer-motion";

const solutions = [
  {
    icon: "\ud83c\udfe2",
    title: "Recruitmentbureaus",
    description: "Versnel het bereiken van kandidaten. Schrijf persoonlijke InMails en connectieverzoeken in seconden. Bespaar 4-6 uur per week per recruiter.",
  },
  {
    icon: "\ud83d\udc54",
    title: "Corporate Recruiters",
    description: "Effici\u00ebnter intern talent sourcen. Elvatix werkt direct in LinkedIn Recruiter \u2014 geen extra tools of tabbladen nodig.",
  },
  {
    icon: "\ud83d\ude80",
    title: "Detacheringsbureaus",
    description: "Snel en persoonlijk schakelen met professionals. Schakel eenvoudig tussen recruitment- en salesmodus.",
  },
];

export default function Solutions() {
  return (
    <section style={{ padding: "80px 24px", background: "#fff" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <AnimateOnScroll variant="fadeUp">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 900, color: "#111", marginBottom: 12 }}>
              Voor wie is Elvatix?
            </h2>
            <p style={{ color: "#6b7280", fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
              Of je nu als bureau of in-house recruiter werkt \u2014 Elvatix past zich aan jouw werkwijze aan.
            </p>
          </div>
        </AnimateOnScroll>
        <StaggerChildren staggerDelay={0.15}>
          <div className="grid-3">
            {solutions.map((s, i) => (
              <motion.div
                key={i}
                style={{
                  padding: 32,
                  borderRadius: 20,
                  background: "#fafafa",
                  border: "1px solid #f3f4f6",
                  textAlign: "center",
                }}
                whileHover={{ y: -6, boxShadow: "0 16px 40px rgba(0,0,0,0.08)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div style={{ fontSize: 40, marginBottom: 16 }}>{s.icon}</div>
                <h3 style={{ fontSize: 20, fontWeight: 700, color: "#111", marginBottom: 12 }}>{s.title}</h3>
                <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.7 }}>{s.description}</p>
              </motion.div>
            ))}
          </div>
        </StaggerChildren>
      </div>
    </section>
  );
}
