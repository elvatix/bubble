"use client";
import AnimateOnScroll from "../animations/AnimateOnScroll";
import StaggerChildren from "../animations/StaggerChildren";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Manpower",
    role: "Case Study",
    quote: "260 super persoonlijke InMails verstuurd in slechts 1,7 uur. Dat was anders 63+ uur werk geweest.",
    avatar: "M",
  },
  {
    name: "Recruitment Consultant",
    role: "Bureau Recruiter",
    quote: "Ik bespaar minimaal 5 uur per week. De berichten klinken precies zoals ik ze zelf zou schrijven.",
    avatar: "R",
  },
  {
    name: "Corporate Recruiter",
    role: "In-house Recruiter",
    quote: "Eindelijk een tool die direct in LinkedIn werkt. Geen gekopieer meer tussen ChatGPT en LinkedIn.",
    avatar: "C",
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-surface">
      <div className="section-inner">
        <AnimateOnScroll variant="fadeUp">
          <div className="text-center mb-12">
            <h2 className="text-[clamp(28px,3.5vw,48px)] font-black text-gray-900 mb-3">
              Wat gebruikers zeggen
            </h2>
            <p className="text-gray-500 text-base">5.0 op Chrome • 4.4 op Trustpilot • 5.0 op Google</p>
          </div>
        </AnimateOnScroll>
        <StaggerChildren staggerDelay={0.15}>
          <div className="grid-3">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-[20px] p-8 border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.02)]"
                whileHover={{ y: -4, boxShadow: "0 12px 30px rgba(0,0,0,0.06)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-green to-green-gradient-end text-white flex items-center justify-center font-bold text-base">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-[15px] text-gray-900">{t.name}</p>
                    <p className="text-[13px] text-gray-400">{t.role}</p>
                  </div>
                </div>
                <p className="text-[15px] text-gray-700 leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-amber-400 text-base">★</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </StaggerChildren>
      </div>
    </section>
  );
}
