"use client";
import { motion } from "framer-motion";
import AnimateOnScroll from "../animations/AnimateOnScroll";

export default function CTA() {
  return (
    <section style={{ padding: "80px 24px", background: "white" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
        <AnimateOnScroll variant="scaleUp">
          <div style={{
            background: "linear-gradient(135deg, #8db600 0%, #6a9a00 100%)",
            borderRadius: 32,
            padding: "64px 48px",
            position: "relative",
            overflow: "hidden",
          }}>
            <div style={{
              position: "absolute",
              top: -60,
              right: -60,
              width: 200,
              height: 200,
              background: "rgba(255,255,255,0.1)",
              borderRadius: "50%",
            }} />
            <div style={{
              position: "absolute",
              bottom: -40,
              left: -40,
              width: 160,
              height: 160,
              background: "rgba(255,255,255,0.08)",
              borderRadius: "50%",
            }} />
            <h2 style={{ fontSize: "clamp(28px, 3vw, 40px)", fontWeight: 900, color: "white", marginBottom: 16, position: "relative", zIndex: 1 }}>
              Klaar om je recruitment te transformeren?
            </h2>
            <p style={{ fontSize: 17, color: "rgba(255,255,255,0.8)", marginBottom: 32, maxWidth: 500, margin: "0 auto 32px", lineHeight: 1.7, position: "relative", zIndex: 1 }}>
              Start vandaag nog met de AI Copilot die 500+ recruiters al gebruiken.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", position: "relative", zIndex: 1 }}>
              <motion.a
                href="/demo"
                className="pill-btn pill-btn-white"
                style={{ padding: "14px 36px", fontSize: 16 }}
                whileHover={{ scale: 1.05, boxShadow: "0 8px 30px rgba(0,0,0,0.2)" }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Boek een demo
              </motion.a>
              <motion.a
                href="/start"
                style={{
                  padding: "14px 36px",
                  fontSize: 16,
                  borderRadius: 9999,
                  fontWeight: 600,
                  color: "white",
                  border: "2px solid rgba(255,255,255,0.4)",
                  background: "transparent",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                }}
                whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.8)" }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Start gratis \u2192
              </motion.a>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
