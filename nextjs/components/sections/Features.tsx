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
    <section id="features" className="section-padding bg-surface">
      <div className="section-inner">
        <AnimateOnScroll variant="fadeUp">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-green uppercase tracking-[0.1em] mb-3">
              Modules
            </p>
            <h2 className="text-[clamp(28px,3.5vw,48px)] font-black text-gray-900 mb-3">
              Alles wat je nodig hebt, direct in LinkedIn
            </h2>
            <p className="text-gray-500 text-base max-w-[560px] mx-auto">
              Vier krachtige modules die samenwerken om jouw LinkedIn outreach te versnellen.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll variant="fadeUp" delay={0.2}>
          <div className="flex justify-center gap-2 mb-8 flex-wrap">
            {tabs.map((tab, i) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(i)}
                className={`px-6 py-3 rounded-full border-none cursor-pointer text-sm font-semibold transition-all duration-200 ${
                  activeTab === i
                    ? "bg-green text-white shadow-green-hover"
                    : "bg-white text-gray-700 shadow-[0_1px_4px_rgba(0,0,0,0.06)]"
                }`}
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
            className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white rounded-3xl p-12 max-md:p-6 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] items-center"
          >
            <div>
              <h3 className="text-[clamp(20px,2.5vw,28px)] font-extrabold text-gray-900 mb-4">{active.title}</h3>
              <p className="text-[15px] text-gray-500 leading-relaxed mb-6">{active.description}</p>
              <ul className="list-none p-0 m-0 flex flex-col gap-3">
                {active.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-sm text-gray-700">
                    <span className="text-green text-sm">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-bg to-green-light rounded-[20px] p-10 flex items-center justify-center min-h-[240px]">
              <motion.div
                className="text-6xl text-center"
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
