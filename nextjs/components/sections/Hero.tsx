"use client";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import LeadMagnet from "@/components/sections/LeadMagnet";
import EnvelopeAnimation from "@/components/animations/EnvelopeAnimation";

const trustItems = [
  {
    label: "5.0 op Chrome",
    url: "https://chromewebstore.google.com/detail/elvatix/apdlpieiebgmgkkhimlbkliccnkimgem?pli=1",
  },
  {
    label: "4.4 op Trustpilot",
    url: "https://www.google.com/search?q=Elvatix+B.V.+Trustpilot",
  },
  {
    label: "5.0 op Google",
    url: "https://share.google/ywHHIe4e8U4bUzVqr",
  },
];

export default function Hero() {
  return (
    <section className="pt-32 pb-[60px] bg-gradient-to-b from-elvatix-light to-white">
      <Container>
        {/* Split layout: text left, animation right */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mb-12">
          {/* Left: Text content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-[clamp(32px,5vw,56px)] font-black leading-[1.1] mb-5 text-gray-900">
              Je hoeft niet meer te kiezen{" "}
              <span className="gradient-text">
                tussen volume en kwaliteit.
              </span>
            </h1>

            <p className="text-lg text-gray-500 leading-relaxed max-w-[600px] mb-8 mx-auto lg:mx-0">
              Als recruiter draait alles om snelheid, maar toptalent prikt direct door je standaard templates heen. Elvatix is de bridge: schrijf hyper-persoonlijke outreaches voor 25 kandidaten tegelijk, direct vanuit LinkedIn Recruiter. Voor recruiters die weigeren concessies te doen.
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

            {/* Trust badges - subtle inline social proof */}
            <div className="flex items-center gap-4 mt-6 justify-center lg:justify-start">
              {trustItems.map((item, i) => (
                <a
                  key={item.label}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="trust-badge-inline"
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  {item.label}
                </a>
              ))}
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
          <div className="rounded-card border border-elvatix/20 shadow-[0_4px_24px_rgba(155,187,10,0.08)] overflow-visible">
            <LeadMagnet compact />
          </div>
        </div>
      </Container>
    </section>
  );
}
