"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimateOnScroll from "../animations/AnimateOnScroll";

const tabs = [
  {
    key: "inmails",
    label: "InMails",
    title: "Schrijf gepersonaliseerde InMails op schaal",
    description:
      "Onze AI leest het LinkedIn-profiel van je kandidaat en genereert een volledig gepersonaliseerd bericht \u2014 in de juiste toon, met relevante hooks. E\u00e9n klik en je bericht is klaar.",
    features: ["AI-generated personalisatie", "Tone-of-voice matching", "Bulk versturen met variatie"],
  },
  {
    key: "connecties",
    label: "Connectieverzoeken",
    title: "Connectieverzoeken die echt aankomen",
    description:
      "Vergeet standaard templates. Elvatix maakt connectieverzoeken op basis van gedeelde achtergrond, interesses en activiteit \u2014 met een bewezen hogere acceptatiegraad.",
    features: ["Contextbewuste berichten", "Profile-analyse", "3x hogere acceptatie"],
  },
  {
    key: "reminders",
    label: "Reminders",
    title: "Automatische opvolging, nooit meer vergeten",
    description:
      "Stel slimme reminders in voor opvolging. De AI stelt voor wanneer \u00e9n hoe je het beste kunt opvolgen \u2014 gebaseerd op eerdere interacties.",
    features: ["Smart timing", "Follow-up suggesties", "Sequence automation"],
  },
  {
    key: "analytics",
    label: "Analytics",
    title: "Inzicht in je LinkedIn performance",
    description:
      "Zie precies welke berichten het beste werken. Track response rates, acceptatiegraden en optimaliseer je aanpak continu met data.",
    features: ["Response tracking", "A/B test resultaten", "ROI dashboard"],
  },
];

export default function Features() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section style={{ padding: "80px 24px 60px", background: "#fafafa" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <AnimateOnScroll variant="fadeUp">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 900, color: "#111", marginBottom: 12 }}>
              Neem je recruitment workflow van losse tools naar \u00e9\u00e9n krachtig platform
            </h2>
            <p style={{ color: "#6b7280", fontSize: 16, maxWidth: 640, margin: "0 auto" }}>
              Bekijk de features die Elvatix uniek maken \u2014 elk onderdeel is een volwaardig product bij andere aanbieders. \ud83d\ude0e
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll variant="fadeUp" delay={0.2}>
          <div className="feature-tabs">
            {tabs.map((tab, i) => (
              <motion.button
                key={tab.key}
                onClick={() => setActiveTab(i)}
                style={{
                  padding: "12px 8px",
                  fontSize: 15,
                  fontWeight: activeTab === i ? 700 : 500,
                  color: activeTab === i ? "#8db600" : "#6b7280",
                  background: "none",
                  border: "none",
                  borderBottom: activeTab === i ? "3px solid #8db600" : "3px solid transparent",
                  cursor: "pointer",
                  transition: "color 0.2s",
                }}
                whileHover={{ color: "#8db600" }}
                whileTap={{ scale: 0.97 }}
              >
                {tab.label}
              </motion.button>
            ))}
          </div>
        </AnimateOnScroll>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
            className="feature-tab-content"
            style={{
              background: "white",
              borderRadius: 24,
              padding: 48,
              boxShadow: "0 4px 24px rgba(0,0,0,0.04)",
              border: "1px solid #f3f4f6",
            }}
          >
            <div>
              <motion.p
                style={{ fontSize: 13, fontWeight: 700, color: "#8db600", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 12 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.15 }}
              >
                {tabs[activeTab].label}
              </motion.p>
              <motion.h3
                style={{ fontSize: "clamp(24px, 3vw, 32px)", fontWeight: 800, color: "#111", marginBottom: 16, lineHeight: 1.2 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {tabs[activeTab].title}
              </motion.h3>
              <motion.p
                style={{ color: "#6b7280", fontSize: 15, lineHeight: 1.7, marginBottom: 24 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {tabs[activeTab].description}
              </motion.p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {tabs[activeTab].features.map((f, fi) => (
                  <motion.div
                    key={f}
                    style={{ display: "flex", alignItems: "center", gap: 10 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.35 + fi * 0.1 }}
                  >
                    <div style={{ width: 24, height: 24, borderRadius: "50%", background: "rgba(141,182,0,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <span style={{ color: "#8db600", fontSize: 14 }}>\u2713</span>
                    </div>
                    <span style={{ fontSize: 14, color: "#374151", fontWeight: 500 }}>{f}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div
              style={{
                background: "linear-gradient(135deg, #f0f7d4, #e8f5c8)",
                borderRadius: 20,
                height: 320,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid rgba(141,182,0,0.15)",
              }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.25, duration: 0.5 }}
            >
              <span style={{ fontSize: 64, opacity: 0.3 }}>
                {activeTab === 0 ? "\ud83d\udce7" : activeTab === 1 ? "\ud83e\udd1d" : activeTab === 2 ? "\u23f0" : "\ud83d\udcca"}
              </span>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
