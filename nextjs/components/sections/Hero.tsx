"use client";
import { motion } from "framer-motion";
import LeadMagnet from "@/components/sections/LeadMagnet";

export default function Hero() {
  return (
    <section className="pt-[120px] pb-[60px] px-6 bg-gradient-to-b from-linkedin-light to-white text-center">
      <div className="max-w-[800px] mx-auto">
        <h1 className="text-[clamp(32px,5vw,56px)] font-black leading-[1.1] mb-5 text-gray-900">
          Stop met uren typen.{" "}
          <span className="gradient-text">
            Genereer persoonlijke InMails in 30 seconden.
          </span>
        </h1>

        <p className="text-lg text-gray-500 leading-relaxed max-w-[600px] mx-auto mb-8">
          Elvatix werkt direct in je LinkedIn Recruiter. Schrijf connectieverzoeken en
          InMails die klinken alsof je ze zelf hebt geschreven. Aangevuld met de
          juiste toon, taal en personalisatie.
        </p>

        <div className="flex gap-3 justify-center flex-wrap mb-12">
          <motion.a
            href="/demo"
            className="pill-btn pill-btn-linkedin"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Plan een demo
          </motion.a>
          <motion.a
            href="#voor-wie"
            className="pill-btn pill-btn-outline"
            whileHover={{ scale: 1.05, background: "rgba(10,102,194,0.05)" }}
            whileTap={{ scale: 0.97 }}
          >
            Bekijk hoe het werkt
          </motion.a>
        </div>

        <div className="rounded-[20px] border border-linkedin/20 shadow-[0_4px_24px_rgba(10,102,194,0.08)] overflow-hidden">
          <LeadMagnet compact />
        </div>
      </div>
    </section>
  );
}
