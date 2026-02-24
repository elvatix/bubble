"use client";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import LeadMagnet from "@/components/sections/LeadMagnet";
import EnvelopeAnimation from "@/components/animations/EnvelopeAnimation";

export default function Hero() {
  return (
    <section className="pt-40 pb-[60px] bg-gradient-to-b from-elvatix-light to-white">
      <Container>
        {/* Split layout: text left, animation right */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mb-12">
          {/* Left: Text content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-[clamp(32px,5vw,56px)] font-black leading-[1.1] mb-5 text-gray-900">
              Elk bericht met de hand typen?{" "}
              <span className="gradient-text">
                Dat hoeft niet meer.
              </span>
            </h1>

            <p className="text-lg text-gray-500 leading-relaxed max-w-[600px] mb-8 mx-auto lg:mx-0">
              Elvatix schrijft persoonlijke InMails en connectieverzoeken op basis van
              het LinkedIn-profiel van je kandidaat. In jouw toon, met de juiste
              personalisatie. Klaar in 30 seconden.
            </p>

            <div className="flex gap-3 justify-center lg:justify-start flex-wrap">
              <motion.a
                href="/demo"
                className="pill-btn pill-btn-elvatix"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                Plan een demo
              </motion.a>
              <motion.a
                href="/hoe-het-werkt"
                className="pill-btn pill-btn-outline"
                whileHover={{ scale: 1.05, background: "rgba(155,187,10,0.05)" }}
                whileTap={{ scale: 0.97 }}
              >
                Bekijk hoe het werkt
              </motion.a>
            </div>
          </div>

          {/* Right: Animation */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            <EnvelopeAnimation />
          </motion.div>
        </div>

        {/* LeadMagnet below, full width */}
        <div className="max-w-[900px] mx-auto">
          <div className="rounded-[20px] border border-elvatix/20 shadow-[0_4px_24px_rgba(155,187,10,0.08)] overflow-hidden">
            <LeadMagnet compact />
          </div>
        </div>
      </Container>
    </section>
  );
}
