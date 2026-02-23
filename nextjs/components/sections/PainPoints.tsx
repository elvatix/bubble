"use client";
import { motion } from "framer-motion";
import Container from "../ui/Container";

const ClockIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const ClipboardIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="8" y="2" width="8" height="4" rx="1" />
    <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2" />
    <path d="M12 11h4M12 16h4M8 11h.01M8 16h.01" />
  </svg>
);

const TrendDownIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
    <polyline points="16 17 22 17 22 11" />
  </svg>
);

const AlertIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

const UserXIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <line x1="17" y1="8" x2="22" y2="13" />
    <line x1="22" y1="8" x2="17" y2="13" />
  </svg>
);

const pains = [
  {
    icon: <ClockIcon />,
    number: "01",
    title: "10-15 minuten per InMail typen",
    description: "Profiel openen. Lezen. Bericht schrijven. Toon aanpassen. Verzenden. Dat maal 20 kandidaten. Elke dag. Elke week.",
    highlight: "= 5+ uur per week verspild",
  },
  {
    icon: <ClipboardIcon />,
    number: "02",
    title: "Copy-paste berichten die niemand leest",
    description: "Templates uit ChatGPT kopiëren en plakken in LinkedIn. Kandidaten prikken er direct doorheen — het voelt onpersoonlijk.",
    highlight: "= 0% personalisatie",
  },
  {
    icon: <UserXIcon />,
    number: "03",
    title: "Connectieverzoeken die worden genegeerd",
    description: "\"Ik zou je graag toevoegen aan mijn netwerk.\" Klinkt bekend? Standaard verzoeken converteren onder de 5%.",
    highlight: "= gemiste kandidaten",
  },
  {
    icon: <TrendDownIcon />,
    number: "04",
    title: "Lage response rates en frustratie",
    description: "Generieke outreach leidt tot lage reactiepercentages. Je team raakt gedemotiveerd. Targets worden niet gehaald.",
    highlight: "= dalende productiviteit",
  },
  {
    icon: <AlertIcon />,
    number: "05",
    title: "Follow-ups vergeten, leads worden koud",
    description: "Geen systeem, geen reminders. Kandidaten die wél geïnteresseerd waren vallen tussen wal en schip.",
    highlight: "= kansen die verloren gaan",
  },
];

export default function PainPoints() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <Container className="max-w-[900px]">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs font-bold text-elvatix uppercase tracking-[0.2em] mb-4">
            Herkenbaar?
          </p>
          <h2 className="text-[clamp(28px,3.5vw,44px)] font-black text-gray-900 mb-4 leading-tight">
            Dit kost je team{" "}
            <span className="gradient-text">elke week opnieuw</span>
          </h2>
          <p className="text-gray-500 text-base max-w-[520px] mx-auto">
            De meeste recruiters herkennen deze problemen.
            De slimste lossen het op.
          </p>
        </motion.div>

        {/* Sequential pain points — each slides in one by one */}
        <div className="flex flex-col gap-4">
          {pains.map((pain, i) => (
            <motion.div
              key={i}
              className="group flex items-start gap-5 p-5 md:p-6 rounded-2xl bg-white border border-gray-200 hover:border-elvatix/30 hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: "easeOut" }}
            >
              {/* Number + Icon */}
              <div className="flex-shrink-0 flex flex-col items-center gap-1">
                <span className="text-[11px] font-bold text-elvatix/40">{pain.number}</span>
                <div className="w-11 h-11 rounded-xl bg-elvatix/8 border border-elvatix/15 flex items-center justify-center text-elvatix group-hover:bg-elvatix/12 transition-colors">
                  {pain.icon}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="text-[15px] font-bold text-gray-900 mb-1 leading-snug">
                  {pain.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-1.5">
                  {pain.description}
                </p>
                <p className="text-xs font-semibold text-elvatix-dark tracking-wide">
                  {pain.highlight}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
