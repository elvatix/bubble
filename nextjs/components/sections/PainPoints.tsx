"use client";
import { motion } from "framer-motion";
import Container from "../ui/Container";

const pains = [
  {
    emoji: "⏱️",
    stat: "10-15 min",
    statLabel: "per InMail",
    title: "Handmatig typen kost je uren per dag",
    description: "Profiel openen, lezen, bericht schrijven, toon aanpassen, verzenden. Dat maal 20. Elke. Dag. Weer.",
  },
  {
    emoji: "📋",
    stat: "0%",
    statLabel: "personalisatie",
    title: "Copy-paste berichten die niemand leest",
    description: "Templates uit ChatGPT kopiëren en plakken in LinkedIn. Kandidaten prikken er direct doorheen.",
  },
  {
    emoji: "📉",
    stat: "<5%",
    statLabel: "response rate",
    title: "Lage response rates en frustratie",
    description: "Generieke berichten = lage reactiepercentages. Je team raakt gedemotiveerd, targets worden niet gehaald.",
  },
  {
    emoji: "🕳️",
    stat: "40%",
    statLabel: "gemist",
    title: "Kandidaten vallen tussen wal en schip",
    description: "Vergeten op te volgen, geen systeem voor follow-ups. Warme leads worden koud. Kansen gaan verloren.",
  },
];

export default function PainPoints() {
  return (
    <section className="py-20 bg-gray-950 relative overflow-hidden">
      {/* Subtle red glow behind the cards */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-red-500/5 rounded-full blur-3xl pointer-events-none" />

      <Container className="max-w-[900px] relative z-10">
        <div className="text-center mb-12">
          <motion.p
            className="text-xs font-bold text-red-400 uppercase tracking-[0.2em] mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Herkenbaar?
          </motion.p>
          <motion.h2
            className="text-[clamp(28px,3.5vw,44px)] font-black text-white mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Dit kost je team{" "}
            <span className="text-red-400">elke week opnieuw</span>
          </motion.h2>
          <motion.p
            className="text-white/50 text-base max-w-[520px] mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            80% van de recruiters herkent deze problemen. De meeste accepteren het.
            De slimste lossen het op.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {pains.map((pain, i) => (
            <motion.div
              key={i}
              className="group relative bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6 hover:bg-white/[0.07] hover:border-red-500/20 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
            >
              <div className="flex items-start gap-4">
                {/* Stat badge */}
                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-red-500/10 border border-red-500/20 flex flex-col items-center justify-center">
                  <span className="text-red-400 font-black text-base leading-none">{pain.stat}</span>
                  <span className="text-red-400/60 text-[10px] mt-0.5">{pain.statLabel}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-bold text-[15px] mb-1.5 leading-snug">
                    {pain.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed">
                    {pain.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
