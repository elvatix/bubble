"use client";
import Container from "@/components/ui/Container";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="section-padding bg-gradient-to-br from-elvatix to-elvatix-dark text-center">
      <Container className="max-w-[700px]">
        <h2 className="text-2xl font-extrabold text-white mb-3">
          Klaar om het zelf te ervaren?
        </h2>
        <p className="text-white/85 text-base mb-8 leading-relaxed">
          Ervaar de kracht van een geïntegreerd Recruitment & Sales platform.
          Bereik 25 kandidaten tegelijk, volledig binnen jouw LinkedIn workflow.
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <motion.a
            href="/demo"
            className="pill-btn px-9 py-3.5 text-base bg-white text-elvatix border-none font-bold"
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
      </Container>
    </section>
  );
}
