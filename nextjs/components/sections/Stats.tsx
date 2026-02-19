"use client";
import AnimateOnScroll from "../animations/AnimateOnScroll";
import { motion } from "framer-motion";
import StaggerChildren, { StaggerItem } from "../animations/StaggerChildren";

const items = [
  { value: "500+", label: "Recruiters", sub: "gebruiken Elvatix dagelijks" },
  { value: "4-6", suffix: " uur", label: "Bespaard", sub: "per recruiter, per week" },
  { value: "30", suffix: " sec", label: "Per InMail", sub: "volledig gepersonaliseerd" },
  { value: "2", suffix: "x", label: "Meer respons", sub: "op jouw outreach berichten" },
];

export default function Stats() {
  return (
    <section className="section-padding bg-white">
      <div className="section-inner">
        <AnimateOnScroll variant="fadeUp">
          <div className="text-center mb-12">
            <p className="text-[13px] font-bold text-green uppercase tracking-[0.12em] mb-3">In cijfers</p>
            <h2 className="text-[clamp(28px,3.5vw,48px)] font-black text-gray-900 mb-3">
              Cijfers die voor zich spreken
            </h2>
            <p className="text-gray-500 text-base max-w-[500px] mx-auto">
              Sluit je aan bij honderden recruiters die elke dag tijd besparen.
            </p>
          </div>
        </AnimateOnScroll>
        <StaggerChildren staggerDelay={0.1}>
          <div className="grid-4">
            {items.map((s, i) => (
              <StaggerItem key={i}>
                <motion.div
                  className="text-center p-8 rounded-[20px] bg-gradient-to-br from-surface-card to-surface-card-end border border-gray-100"
                  whileHover={{ y: -6, boxShadow: "0 16px 40px rgba(0,0,0,0.08)", borderColor: "rgba(141,182,0,0.2)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="flex items-baseline justify-center gap-0.5">
                    <span className="text-5xl font-black text-gray-900">{s.value}</span>
                    {s.suffix && <span className="text-[22px] font-bold text-green">{s.suffix}</span>}
                  </div>
                  <p className="text-base font-bold text-gray-900 mt-2">{s.label}</p>
                  <p className="text-[13px] text-gray-400 mt-1">{s.sub}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </div>
        </StaggerChildren>
      </div>
    </section>
  );
}
