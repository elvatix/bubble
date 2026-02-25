"use client";
import { motion } from "framer-motion";
import Container from "../ui/Container";

const pains = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "De InMail-grind",
    description: "Profielen doorspitten, haakjes zoeken, een unieke tekst tikken. 15 minuten per kandidaat. Om je targets te halen, moet je volume draaien, maar de uren vliegen je door de vingers.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="8" y="2" width="8" height="4" rx="1" />
        <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2" />
        <path d="M12 11h4M12 16h4M8 11h.01M8 16h.01" />
      </svg>
    ),
    title: "De \"Copy-Paste\" blindheid",
    description: "Om tijd te besparen grijp je terug op standaard templates of snelle ChatGPT prompts. Het resultaat? Grijze eenheidsworst. Toptalent herkent het direct en negeert je bericht.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
        <polyline points="16 17 22 17 22 11" />
      </svg>
    ),
    title: "Conversie die wegzakt",
    description: "Je verstuurt er 50, je krijgt er 3 terug. Je weet dat de vacature goed is, de kandidaat is perfect, maar je bericht sneeuwt simpelweg onder in hun overvolle inbox.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
    title: "Verloren in je tabs",
    description: "Knippen uit Recruiter Seat, plakken in ChatGPT, terug naar een Word-document voor je template, en weer terug naar LinkedIn. Een gefragmenteerde workflow die je focus killt.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <line x1="17" y1="8" x2="22" y2="13" />
        <line x1="22" y1="8" x2="17" y2="13" />
      </svg>
    ),
    title: "Dode connectieverzoeken",
    description: "\"Ik zou je graag toevoegen aan mijn netwerk.\" Elke recruiter stuurt hetzelfde. Zonder persoonlijke noot accepteert niemand.",
  },
];

export default function PainPoints() {
  return (
    <section className="section-padding bg-surface">
      <div className="max-w-[900px] mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-bold text-red-500 uppercase tracking-[0.15em] mb-3">
            Herkenbaar?
          </p>
          <h2 className="text-[clamp(28px,3.5vw,44px)] font-black text-text-primary mb-4 leading-tight">
            Dit kost jou en je team{" "}
            <span className="text-red-500">elke week uren.</span>
          </h2>
          <p className="text-text-muted text-base max-w-[520px] mx-auto">
            Als recruiter wil je bezig zijn met mensen. Niet met het eindeloos
            typen van berichten.
          </p>
        </motion.div>

        <div className="flex flex-col gap-3">
          {pains.map((pain, i) => (
            <motion.div
              key={i}
              className="flex items-start gap-4 py-5 px-6 rounded-2xl bg-white border border-border hover:border-red-200 hover:shadow-md transition-all duration-300 group"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45 }}
            >
              <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-red-50 text-red-400 border border-red-100 group-hover:bg-red-100 transition-colors">
                {pain.icon}
              </span>
              <div className="flex-1 min-w-0">
                <h3 className="text-[15px] font-bold text-text-primary mb-1 leading-snug">
                  {pain.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {pain.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
