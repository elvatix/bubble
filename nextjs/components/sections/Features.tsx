"use client";
import { MailIcon, UsersIcon, BellIcon, FileTextIcon, CheckIcon } from '@/components/icons/Icons';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimateOnScroll from "../animations/AnimateOnScroll";

const tabs = [
  {
    id: "schaal",
    label: "25 kandidaten tegelijk",
    title: "Scale je outreach. Behoud de persoonlijke touch.",
    description: "Selecteer tot 25 kandidaten in één keer. Elvatix analyseert alle profielen en genereert voor elke kandidaat een uniek, messcherp bericht. Niemand krijgt hetzelfde te lezen.",
    features: [
      "25 kandidaten in één run",
      "Unieke profiel-analyse per persoon",
      "Scale zonder spam te worden",
    ],
  },
  {
    id: "integratie",
    label: "Naadloze Integratie",
    title: "Direct in jouw workflow.",
    description: "Elvatix draait volledig binnen Recruiter Seat, Sales Navigator en jouw pipelines. Geen extra tabbladen of omslachtige exports. Selecteer, genereer en verstuur direct vanuit LinkedIn.",
    features: [
      "Recruiter Seat & Sales Navigator",
      "Werkt direct in je eigen pools",
      "Geen data exports of extra tabs",
    ],
  },
  {
    id: "switch",
    label: "Sales & Recruitment",
    title: "Twee werelden, één platform.",
    description: "Kandidaten zoeken voor je vacatures? Of klanten zoeken voor je diensten? Met de ingebouwde Sales/Recruitment switch pas je direct de context van de engine aan met één klik.",
    features: [
      "Specifieke Recruitment modus",
      "Koude acquisitie Sales modus",
      "Direct de juiste tone-of-voice",
    ],
  },
  {
    id: "templates",
    label: "Eigen Templates",
    title: "Jouw stijl. Opgeschaald.",
    description: "Maak templates voor terugkerende berichten met je eigen tone-of-voice. Jij bepaalt de structuur, de vacature en de toon. Elvatix integreert dit dynamisch met de profieldata.",
    features: [
      "Jouw eigen tone-of-voice",
      "Flexibele en vaste tekstblokken",
      "Context-bewuste AI invulling",
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
              Ontworpen voor de moderne recruiter
            </h2>
            <p className="text-gray-500 text-base max-w-[560px] mx-auto">
              Een compleet platform dat integreert in jouw workflow en je productiviteit vertienvoudigt.
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
                    <CheckIcon size={14} className="text-green flex-shrink-0" />
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
                {activeTab === 0 ? <MailIcon size={48} /> : activeTab === 1 ? <UsersIcon size={48} /> : activeTab === 2 ? <BellIcon size={48} /> : <FileTextIcon size={48} />}
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
