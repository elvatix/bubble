"use client";
import AnimateOnScroll from "../animations/AnimateOnScroll";
import StaggerChildren from "../animations/StaggerChildren";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Manpower",
    role: "Case Study",
    quote: "260 super persoonlijke InMails verstuurd in slechts 1,7 uur. Dat was anders 63+ uur werk geweest.",
    avatar: "M",
  },
  {
    name: "Recruitment Consultant",
    role: "Bureau Recruiter",
    quote: "Ik bespaar minimaal 5 uur per week. De berichten klinken precies zoals ik ze zelf zou schrijven.",
    avatar: "R",
  },
  {
    name: "Corporate Recruiter",
    role: "In-house Recruiter",
    quote: "Eindelijk een tool die direct in LinkedIn werkt. Geen gekopieer meer tussen ChatGPT en LinkedIn.",
    avatar: "C",
  },
];

export default function Testimonials() {
  return (
    <section style={{ padding: "80px 24px", background: "#f8fafc" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <AnimateOnScroll variant="fadeUp">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 900, color: "#111", marginBottom: 12 }}>
              Wat gebruikers zeggen
            </h2>
            <p style={{ color: "#6b7280", fontSize: 16 }}>5.0 op Chrome \u2022 4.4 op Trustpilot \u2022 5.0 op Google</p>
          </div>
        </AnimateOnScroll>
        <StaggerChildren staggerDelay={0.15}>
          <div className="grid-3">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                style={{
                  background: "white",
                  borderRadius: 20,
                  padding: 32,
                  border: "1px solid #f3f4f6",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.02)",
                }}
                whileHover={{ y: -4, boxShadow: "0 12px 30px rgba(0,0,0,0.06)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                  <div style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #8db600, #6a9a00)",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    fontSize: 16,
                  }}>
                    {t.avatar}
                  </div>
                  <div>
                    <p style={{ fontWeight: 700, fontSize: 15, color: "#111" }}>{t.name}</p>
                    <p style={{ fontSize: 13, color: "#9ca3af" }}>{t.role}</p>
                  </div>
                </div>
                <p style={{ fontSize: 15, color: "#374151", lineHeight: 1.7, fontStyle: "italic" }}>
                  \u201c{t.quote}\u201d
                </p>
                <div style={{ marginTop: 12 }}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} style={{ color: "#fbbf24", fontSize: 16 }}>\u2605</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </StaggerChildren>
      </div>
    </section>
  );
}
