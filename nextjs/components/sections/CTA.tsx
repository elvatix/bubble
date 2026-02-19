"use client";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="section-padding bg-gradient-to-br from-linkedin to-linkedin-dark text-center">
      <div className="max-w-[700px] mx-auto">
        <h2 className="text-[clamp(28px,3.5vw,44px)] font-black text-white mb-4 leading-tight">
          Klaar om 4-6 uur per week te besparen?
        </h2>
        <p className="text-white/85 text-base mb-8 leading-relaxed">
          Plan een demo en ontdek hoe Elvatix jouw LinkedIn outreach versnelt.
          Van 10-15 minuten naar 30 seconden per bericht.
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <motion.a
            href="/demo"
            className="pill-btn px-9 py-3.5 text-base bg-white text-linkedin border-none font-bold"
            whileHover={{ scale: 1.05, boxShadow: "0 8px 24px rgba(0,0,0,0.2)" }}
            whileTap={{ scale: 0.97 }}
          >
            Plan een demo
          </motion.a>
          <motion.a
            href="/contact"
            className="pill-btn px-9 py-3.5 text-base bg-transparent text-white border-2 border-white/60"
            whileHover={{ scale: 1.05, borderColor: "#fff" }}
            whileTap={{ scale: 0.97 }}
          >
            Neem contact op
          </motion.a>
        </div>
      </div>
    </section>
  );
}
