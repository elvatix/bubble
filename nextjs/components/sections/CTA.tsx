"use client";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section
      className="section-padding"
      style={{
        background: "linear-gradient(135deg, #0a66c2 0%, #004182 100%)",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: 700, margin: "0 auto" }}>
        <h2
          style={{
            fontSize: "clamp(28px, 3.5vw, 44px)",
            fontWeight: 900,
            color: "#fff",
            marginBottom: 16,
            lineHeight: 1.2,
          }}
        >
          Klaar om 4–6 uur per week te besparen?
        </h2>
        <p
          style={{
            color: "rgba(255,255,255,0.85)",
            fontSize: 16,
            marginBottom: 32,
            lineHeight: 1.7,
          }}
        >
          Plan een demo en ontdek hoe Elvatix jouw LinkedIn outreach versnelt.
          Van 10–15 minuten naar 30 seconden per bericht.
        </p>
        <div
          style={{
            display: "flex",
            gap: 12,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <motion.a
            href="/demo"
            className="pill-btn"
            style={{ padding: "14px 36px", fontSize: 16, background: "#fff", color: "#0a66c2", border: "none", fontWeight: 700 }}
            whileHover={{ scale: 1.05, boxShadow: "0 8px 24px rgba(0,0,0,0.2)" }}
            whileTap={{ scale: 0.97 }}
          >
            Plan een demo
          </motion.a>
          <motion.a
            href="/contact"
            className="pill-btn"
            style={{ padding: "14px 36px", fontSize: 16, background: "transparent", color: "#fff", border: "2px solid rgba(255,255,255,0.6)" }}
            whileHover={{ scale: 1.05, borderColor: "#fff" }}
            whileTap={{ scale: 0.97 }}
          >
            Neem contact op
          </motion.a>
        </div>
      </div>
    </section>
  );
}
