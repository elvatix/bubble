"use client";
import { motion } from "framer-motion";

const ClockIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const ClipboardIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="8" y="2" width="8" height="4" rx="1" />
    <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2" />
    <path d="M12 11h4M12 16h4M8 11h.01M8 16h.01" />
  </svg>
);

const UserXIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <line x1="17" y1="8" x2="22" y2="13" />
    <line x1="22" y1="8" x2="17" y2="13" />
  </svg>
);

const TrendDownIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
    <polyline points="16 17 22 17 22 11" />
  </svg>
);

const AlertIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

const XCircleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#d1d5db" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="15" y1="9" x2="9" y2="15" />
    <line x1="9" y1="9" x2="15" y2="15" />
  </svg>
);

const pains = [
  { icon: <ClockIcon />, title: "Handmatig typen", description: "10–15 minuten per InMail, profiel voor profiel. Onhoudbaar." },
  { icon: <ClipboardIcon />, title: "Kopiëren & plakken", description: "Templates uit ChatGPT kopiëren, plakken in LinkedIn, handmatig bijschaven." },
  { icon: <UserXIcon />, title: "Geen personalisatie", description: "Standaard connectieverzoeken die niemand accepteert." },
  { icon: <TrendDownIcon />, title: "Lage response rates", description: "Generieke outreach = lage reactiepercentages en frustratie." },
  { icon: <AlertIcon />, title: "Gemiste follow-ups", description: "Vergeten om op te volgen. Kandidaten vallen tussen wal en schip." },
];

export default function PainPoints() {
  return (
    <section className="section-padding bg-[#f8f9fa]">
      <div className="section-inner">
        <div className="text-center mb-5">
          <p className="text-[13px] font-bold text-red-600 uppercase tracking-[0.12em] mb-3">
            Herkenbaar?
          </p>
        </div>
        <div className="flex flex-col gap-3 max-w-[700px] mx-auto">
          {pains.map((pain, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-4 py-[18px] px-6 rounded-2xl bg-white border border-gray-200"
              whileHover={{ x: 6, background: "#fff5f5", borderColor: "#fecaca" }}
              transition={{ duration: 0.2 }}
            >
              <span className="shrink-0 flex items-center justify-center w-10 h-10 rounded-[10px] bg-red-50">{pain.icon}</span>
              <div>
                <p className="text-[15px] font-bold text-gray-900 mb-0.5">{pain.title}</p>
                <p className="text-[13px] text-gray-500 leading-normal">{pain.description}</p>
              </div>
              <span className="ml-auto shrink-0 flex"><XCircleIcon /></span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
