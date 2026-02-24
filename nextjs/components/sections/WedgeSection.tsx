"use client";
import { StopwatchIcon, TrendingUpIcon, ClockIcon, TrophyIcon } from '@/components/icons/Icons';
import { motion } from "framer-motion";
import AnimateOnScroll from "../animations/AnimateOnScroll";
import AnimatedCounter from "../animations/AnimatedCounter";

export default function WedgeSection() {
  const stats = [
    { icon: <StopwatchIcon size={28} />, value: "30", suffix: " sec", label: "Per gepersonaliseerd bericht", sub: "Was 10-15 minuten" },
    { icon: <TrendingUpIcon size={28} />, value: "2", suffix: "x", label: "Meer respons op InMails", sub: "Vergeleken met standaard berichten" },
    { icon: <ClockIcon size={28} />, value: "4-6", suffix: " uur", label: "Besparing per week", sub: "Per recruiter, per week" },
    { icon: <TrophyIcon size={28} />, value: "95", suffix: "%", label: "Tijdsbesparing per bericht", sub: "Vergeleken met handmatig schrijven" },
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-green-dark via-green to-[#1a2e05] relative overflow-hidden">
      <div className="section-inner relative z-[2]">
        <div className="grid-2">
          <div>
            <AnimateOnScroll variant="fadeUp">
              <p className="text-sm font-semibold text-white/50 uppercase tracking-[0.1em] mb-4">
                Bewezen resultaten
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll variant="fadeUp" delay={0.15}>
              <h2 className="text-[clamp(28px,4vw,56px)] font-black text-white mb-5 leading-[1.1]">
                Van uren typen naar{" "}
                <span className="text-amber-400">seconden.</span>
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll variant="fadeUp" delay={0.3}>
              <p className="text-[clamp(14px,1.5vw,17px)] text-white/70 max-w-[460px] mb-9 leading-relaxed">
                Van copy-paste frustratie naar persoonlijke berichten in seconden. Elvatix schrijft, jij verstuurt.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll variant="fadeUp" delay={0.45}>
              <motion.a
                href="/demo"
                className="pill-btn inline-flex items-center gap-2 bg-white/15 text-white border border-white/30 backdrop-blur-[10px]"
                whileHover={{ scale: 1.05, background: "rgba(255,255,255,0.25)" }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Probeer het zelf →
              </motion.a>
            </AnimateOnScroll>
          </div>

          <div className="flex flex-col gap-4">
            {stats.map((item, i) => (
              <AnimateOnScroll key={i} variant="fadeRight" delay={0.15 * i}>
                <motion.div
                  className="flex items-center gap-5 bg-white/8 rounded-2xl py-5 px-6 border border-white/10 backdrop-blur-[10px]"
                  whileHover={{ background: "rgba(255,255,255,0.15)", x: 8, transition: { duration: 0.2 } }}
                >
                  <span className="text-[28px]">{item.icon}</span>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-1">
                      <span className="text-[28px] font-extrabold text-amber-400">{item.value}</span>
                      <span className="text-base font-bold text-amber-400">{item.suffix}</span>
                    </div>
                    <p className="text-sm text-white/85 mt-0.5 font-medium">{item.label}</p>
                    <p className="text-[11px] text-white/45 mt-0.5">{item.sub}</p>
                  </div>
                </motion.div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute -top-[100px] -right-[100px] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(251,191,36,0.15)_0%,transparent_70%)] rounded-full z-[1]" />
    </section>
  );
}
