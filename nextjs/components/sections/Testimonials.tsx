"use client";
import { motion } from "framer-motion";
import AnimateOnScroll from "../animations/AnimateOnScroll";

const testimonials = [
  { name: "Sophie de Vries", role: "Senior Recruiter, Manpower", quote: "Elvatix heeft onze InMail response rate verdrievoudigd. De AI-personalisatie is ongekend." },
  { name: "Mark Janssen", role: "Head of Talent, Vibe Group", quote: "We besparen 15+ uur per week op outreach. Dat is een hele recruiter aan capaciteit." },
  { name: "Lisa van den Berg", role: "Recruitment Lead, Hays", quote: "Eindelijk \u00e9\u00e9n tool voor alles. Geen gedoe meer met 5 verschillende subscriptions." },
];

export default function Testimonials() {
  return (
    <section style={{ padding: "80px 24px", background: "#fafafa" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <AnimateOnScroll variant="fadeUp">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 900, color: "#111", marginBottom: 12 }}>
              Wat recruiters zeggen
            </h2>
            <p style={{ color: "#6b7280", fontSize: 16 }}>500+ recruiters gebruiken Elvatix dagelijks.</p>
          </div>
        </AnimateOnScroll>

        <div className="grid-3">
          {testimonials.map((t, i) => (
            <AnimateOnScroll key={i} variant="fadeUp" delay={0.15 * i}>
              <motion.div
                style={{
                  background: "white",
                  borderRadius: 20,
                  padding: 36,
                  border: "1px solid #f3f4f6",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
                whileHover={{
                  y: -6,
                  boxShadow: "0 16px 40px rgba(0,0,0,0.06)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div style={{ fontSize: 32, color: "#8db600", marginBottom: 16, fontFamily: "Georgia, serif" }}>\u201c</div>
                <p style={{ color: "#374151", fontSize: 15, lineHeight: 1.7, flex: 1, fontStyle: "italic" }}>{t.quote}</p>
                <div style={{ marginTop: 24, display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 40, height: 40, borderRadius: "50%", background: "linear-gradient(135deg, #8db600, #a3c520)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 700, fontSize: 16 }}>
                    {t.name[0]}
                  </div>
                  <div>
                    <p style={{ fontWeight: 600, fontSize: 14, color: "#111" }}>{t.name}</p>
                    <p style={{ fontSize: 13, color: "#9ca3af" }}>{t.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
