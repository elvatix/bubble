"use client";
import { motion } from "framer-motion";

const PuzzleIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 01-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 10-3.214 3.214c.446.166.855.498.925.968a.979.979 0 01-.276.837l-1.61 1.61a2.404 2.404 0 01-1.705.707 2.402 2.402 0 01-1.704-.706l-1.568-1.568a1.026 1.026 0 00-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 11-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 00-.289-.877l-1.568-1.568A2.402 2.402 0 011.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 103.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0112 2c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 113.237 3.237c-.464.18-.894.527-.967 1.02z" />
  </svg>
);

const ShieldIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const ZapIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const trustItems = [
  {
    icon: <PuzzleIcon />,
    title: "Eenvoudige installatie",
    description: "Chrome extensie installeren, LinkedIn openen en direct beginnen. Geen integratie, geen IT-afdeling nodig.",
  },
  {
    icon: <ShieldIcon />,
    title: "Veilig & GDPR-proof",
    description: "Gegevens worden niet opgeslagen. Elvatix werkt volledig binnen jouw LinkedIn-sessie. AVG/GDPR compliant.",
    badges: ["GDPR", "AVG", "SOC 2"],
  },
  {
    icon: <ZapIcon />,
    title: "Start gratis",
    description: "Probeer Elvatix gratis met 5 berichten per uur. Geen creditcard nodig. Upgrade wanneer je wilt.",
  },
];

export default function TrustPricing() {
  return (
    <section className="section-padding bg-surface">
      <div className="section-inner">
        <div className="text-center mb-12">
          <p className="text-[13px] font-bold text-elvatix uppercase tracking-[0.12em] mb-3">
            Drempels weg
          </p>
          <h2 className="text-[clamp(28px,3.5vw,48px)] font-black text-gray-900 mb-3">
            Verdien je investering in week 1 terug.
          </h2>
          <p className="text-gray-500 text-base max-w-[520px] mx-auto">
            Geen ingewikkelde setup, geen risico. Begin vandaag nog.
          </p>
        </div>

        <div className="grid-3">
          {trustItems.map((item, i) => (
            <motion.div
              key={i}
              className="p-8 rounded-[20px] bg-white border border-elvatix/15 text-center relative overflow-hidden"
              whileHover={{ y: -4, boxShadow: "0 16px 40px rgba(155,187,10,0.1)", borderColor: "var(--color-elvatix)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {i === 2 && (
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-elvatix to-elvatix-dark" />
              )}
              <div className="flex justify-center items-center w-16 h-16 rounded-2xl bg-elvatix-light text-elvatix mx-auto mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className={`text-sm text-gray-500 leading-relaxed ${item.badges ? "mb-4" : ""}`}>{item.description}</p>
              {item.badges && (
                <div className="flex gap-2 justify-center flex-wrap">
                  {item.badges.map((badge, j) => (
                    <span key={j} className="text-[11px] font-bold text-elvatix bg-elvatix-light px-3 py-1 rounded-full tracking-wide">
                      {badge}
                    </span>
                  ))}
                </div>
              )}
              {i === 2 && (
                <motion.a
                  href="/demo"
                  className="pill-btn pill-btn-elvatix mt-5 py-3 px-7"
                  whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(155,187,10,0.3)" }}
                  whileTap={{ scale: 0.97 }}
                >
                  Start gratis
                </motion.a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
