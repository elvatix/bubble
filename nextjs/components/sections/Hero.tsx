"use client";
import { motion } from "framer-motion";
import LeadMagnet from "@/components/sections/LeadMagnet";

export default function Hero() {
  return (
    <section
      style={{
        padding: "120px 24px 60px",
        background: "linear-gradient(180deg, #f0f7fe 0%, #ffffff 100%)",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "6px 16px",
            borderRadius: 9999,
            background: "#e8f0fe",
            marginBottom: 24,
            fontSize: 13,
            fontWeight: 600,
            color: "#0a66c2",
          }}
        >
          <span>LinkedIn Recruiter Tool</span>
        </div>

        <h1
          style={{
            fontSize: "clamp(32px, 5vw, 56px)",
            fontWeight: 900,
            lineHeight: 1.1,
            marginBottom: 20,
            color: "#111",
          }}
        >
          Stop met uren typen.{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #0a66c2, #004182)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Genereer persoonlijke InMails in 30 seconden.
          </span>
        </h1>

        <p
          style={{
            fontSize: 18,
            color: "#6b7280",
            lineHeight: 1.7,
            maxWidth: 600,
            margin: "0 auto 32px",
          }}
        >
          Elvatix werkt direct in je LinkedIn Recruiter. Schrijf connectieverzoeken en
          InMails die klinken alsof je ze zelf hebt geschreven — aangevuld met de
          juiste toon, taal en personalisatie.
        </p>

        <div
          style={{
            display: "flex",
            gap: 12,
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: 48,
          }}
        >
          <motion.a
            href="/demo"
            className="pill-btn pill-btn-linkedin"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Plan een demo
          </motion.a>
          <motion.a
            href="#voor-wie"
            className="pill-btn"
            style={{ background: "transparent", color: "#0a66c2", border: "2px solid #0a66c2" }}
            whileHover={{ scale: 1.05, background: "rgba(10,102,194,0.05)" }}
            whileTap={{ scale: 0.97 }}
          >
            Bekijk hoe het werkt
          </motion.a>
        </div>

        <div
          style={{
            borderRadius: 20,
            border: "1px solid rgba(10,102,194,0.2)",
            boxShadow: "0 4px 24px rgba(10,102,194,0.08)",
            overflow: "hidden",
          }}
        >
          <LeadMagnet compact />
        </div>
      </div>
    </section>
  );
}
