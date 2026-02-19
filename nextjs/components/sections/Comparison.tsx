"use client";
import { motion } from "framer-motion";

const CheckCircleIcon = ({ color = "var(--color-linkedin)" }: { color?: string }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const XIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="15" y1="9" x2="9" y2="15" />
    <line x1="9" y1="9" x2="15" y2="15" />
  </svg>
);

const rows = [
  { label: "Personalisatie op basis van profiel", zonder: false, met: true },
  { label: "Werkt direct in LinkedIn Recruiter", zonder: false, met: true },
  { label: "Tone of voice instellen", zonder: false, met: true },
  { label: "Taal automatisch detecteren", zonder: false, met: true },
  { label: "30 seconden per InMail", zonder: false, met: true },
];

export default function Comparison() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-[900px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[clamp(28px,3.5vw,48px)] font-black text-gray-900 mb-3">
            Van uren typen naar seconden.
          </h2>
          <p className="text-gray-500 text-base max-w-[520px] mx-auto">
            Vergelijk handmatig recruiten met Elvatix.
          </p>
        </div>

        {/* Proof stats bar */}
        <div className="flex justify-center gap-12 mb-10 py-5 px-8 rounded-2xl bg-gradient-to-br from-linkedin to-linkedin-dark max-md:gap-6 max-md:px-4 max-sm:flex-col max-sm:gap-4 max-sm:items-center">
          <div className="text-center">
            <p className="text-[32px] font-black text-white">260</p>
            <p className="text-[13px] text-white/80">InMails verstuurd</p>
          </div>
          <div className="text-center">
            <p className="text-[32px] font-black text-white">1.7 uur</p>
            <p className="text-[13px] text-white/80">totale tijd</p>
          </div>
          <div className="text-center">
            <p className="text-[32px] font-black text-white">Manpower</p>
            <p className="text-[13px] text-white/80">klant case</p>
          </div>
        </div>

        {/* Comparison table */}
        <div className="rounded-[20px] border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-[1fr_140px_140px] max-md:grid-cols-[1fr_100px_100px] bg-surface py-3.5 px-6 border-b border-gray-200">
            <span className="text-[13px] font-bold text-gray-500 uppercase tracking-wide">Feature</span>
            <span className="text-[13px] font-bold text-red-500 text-center">Handmatig</span>
            <span className="text-[13px] font-bold text-linkedin text-center">Elvatix</span>
          </div>
          {rows.map((row, i) => (
            <motion.div
              key={i}
              className={`grid grid-cols-[1fr_140px_140px] max-md:grid-cols-[1fr_100px_100px] py-4 px-6 items-center ${
                i < rows.length - 1 ? "border-b border-gray-100" : ""
              }`}
              whileHover={{ background: "var(--color-linkedin-light)" }}
            >
              <span className="text-sm text-gray-700">{row.label}</span>
              <span className="flex justify-center text-danger">{row.zonder ? <CheckCircleIcon /> : <XIcon />}</span>
              <span className="flex justify-center">{row.met ? <CheckCircleIcon /> : <XIcon />}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
