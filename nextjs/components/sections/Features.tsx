"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimateOnScroll from "../animations/AnimateOnScroll";

const tabs = [
  {
    id: "inmails",
    label: "InMails",
    title: "Persoonlijke InMails in 30 seconden",
    description:
      "Elvatix leest het LinkedIn-profiel van je kandidaat en schrijft een volledig gepersonaliseerd bericht — in jouw toon, zonder houterige AI-vertalingen. Geen kopiëren en plakken meer.",
    features: [
      "Schrijf in jouw eigen tone-of-voice",
      "30 seconden per gepersonaliseerd bericht",
      "Werkt direct in LinkedIn Recruiter",
    ],
  },
  {
    id: "connecties",
    label: "Connectieverzoeken",
    title: "Gepersonaliseerde connectieverzoeken",
    description:
      "In één klik gepersonaliseerde uitnodigingen op basis van profielinformatie. Geen standaard templates meer — elk verzoek is uniek en relevant.",
    features: [
      "2x hogere acceptatiegraad",
      "Automatisch gepersonaliseerd",
      "Eén klik vanuit Sales Navigator",
    ],
  },
  {
    id: "reminders",
    label: "Reminders",
    title: "Geautomatiseerde follow-ups",
    description:
      "Vergeet nooit meer om op te volgen. Elvatix helpt je om op het juiste moment de juiste kandidaat weer te bereiken.",
    features: [
      "Automatische herinneringen",
      "Nooit meer gemiste follow-ups",
      "Timing geoptimaliseerd",
    ],
  },
  {
    id: "templates",
    label: "Templates",
    title: "Slimme templates met AI",
    description:
      "Maak templates voor terugkerende berichten. Jij bepaalt de structuur, Elvatix vult dynamisch de personalisatie in op basis van het profiel.",
    features: [
      "Jij bepaalt de structuur",
      "AI vult dynamisch in",
      "Consistent en persoonlijk",
    ],
  },
];

export default function Features() {
  const [activeTab, setActiveTab] = useState(0);
  const active = tabs[activeTab];

  return (
    <section id="features" className="section-padding" style={{ background: "#f8fafc" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <AnimateOnScroll variant="fadeUp">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={{ fontSize: 14, fontWeight: 600, color: "#8db600", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>
              Modules
            </p>
            <h2 style={{ fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 900, color: "#111", marginBottom: 12 }}>
              Alles wat je nodig hebt, direct in LinkedIn
            </h2>
            <p style={{ color: "#6b7280", fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
              Vier krachtige modules die samenwerken om jouw LinkedIn outreach te versnellen.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll variant="fadeUp" delay={0.2}>
          <div className="feature-tabs" style={{
            display: "flex",
            justifyContent: "center",
            gap: 8,
            marginBottom: 32,
            flexWrap: "wrap",
          }}>
            {tabs.map((tab, i) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(i)}
                style={{
                  padding: "12px 24px",
                  borderRadius: 9999,
                  border: "none",
                  cursor: "pointer",
                  fontSize: 14,
                  fontWeight: 600,
                  background: activeTab === i ? "#8db600" : "white",
                  color: activeTab === i ? "white" : "#374151",
                  boxShadow: activeTab === i ? "0 4px 12px rgba(141,182,0,0.3)" : "0 1px 4px rgba(0,0,0,0.06)",
                  transition: "all 0.2s",
                }}
                whileHover={{ scale: 1.05 }}
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
            transition={{ duration: 0.4 }}
            className="feature-tab-content"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 48,
              background: "white",
              borderRadius: 24,
              padding: 48,
              border: "1px solid #f3f4f6",
              boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
              alignItems: "center",
            }}
          >
            <div>
              <h3 style={{ fontSize: "clamp(20px, 2.5vw, 28px)", fontWeight: 800, color: "#111", marginBottom: 16 }}>{active.title}</h3>
              <p style={{ fontSize: 15, color: "#6b7280", lineHeight: 1.7, marginBottom: 24 }}>{active.description}</p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                {active.features.map((f, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "#374151" }}>
                    <span style={{ color: "#8db600", fontSize: 14 }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{
              background: "linear-gradient(135deg, #e8f5c8, #d4edaa)",
              borderRadius: 20,
              padding: 40,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: 240,
            }}>
              <motion.div
                style={{ fontSize: 64, textAlign: "center" }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {activeTab === 0 ? "📧" : activeTab === 1 ? "🤝" : activeTab === 2 ? "🔔" : "📝"}
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
