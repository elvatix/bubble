"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function EnvelopeAnimation() {
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      while (true) {
        // 1. Envelope flap opens
        await controls.start("flapOpen");
        await new Promise((r) => setTimeout(r, 300));
        // 2. Letter rises out
        await controls.start("letterUp");
        await new Promise((r) => setTimeout(r, 2500));
        // 3. Letter goes back in
        await controls.start("letterDown");
        await new Promise((r) => setTimeout(r, 300));
        // 4. Envelope flap closes
        await controls.start("flapClose");
        await new Promise((r) => setTimeout(r, 2000));
      }
    };
    sequence();
  }, [controls]);

  return (
    <div className="relative w-[280px] h-[220px] mx-auto select-none" aria-hidden="true">
      {/* Shadow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[220px] h-[12px] bg-black/5 rounded-[50%] blur-sm" />

      {/* Envelope body */}
      <div className="absolute bottom-[12px] left-1/2 -translate-x-1/2 w-[240px] h-[140px]">
        {/* Envelope back */}
        <svg viewBox="0 0 240 140" className="absolute inset-0 w-full h-full">
          <rect x="0" y="0" width="240" height="140" rx="8" fill="#0A66C2" />
          <rect x="2" y="2" width="236" height="136" rx="7" fill="#1B8BD6" />
        </svg>

        {/* Letter - animated */}
        <motion.div
          className="absolute left-[16px] w-[208px] overflow-hidden"
          style={{ bottom: "8px" }}
          initial={{ height: 0, y: 0 }}
          variants={{
            letterUp: {
              height: 160,
              y: -120,
              transition: { duration: 0.8, ease: "easeOut" },
            },
            letterDown: {
              height: 0,
              y: 0,
              transition: { duration: 0.6, ease: "easeIn" },
            },
          }}
          animate={controls}
        >
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4 h-full min-h-[160px]">
            {/* LinkedIn logo */}
            <div className="flex items-center gap-2 mb-3">
              <div className="w-5 h-5 bg-[#0A66C2] rounded-[3px] flex items-center justify-center">
                <span className="text-white text-[10px] font-bold">in</span>
              </div>
              <span className="text-[10px] text-gray-400 font-medium">InMail</span>
            </div>

            {/* Message lines */}
            <motion.div
              initial={{ opacity: 0 }}
              variants={{
                letterUp: {
                  opacity: 1,
                  transition: { delay: 0.5, duration: 0.4 },
                },
                letterDown: {
                  opacity: 0,
                  transition: { duration: 0.2 },
                },
              }}
              animate={controls}
            >
              <div className="text-[9px] font-semibold text-gray-800 mb-2">
                Beste Jan,
              </div>
              <div className="space-y-1.5">
                <div className="h-[5px] bg-gray-200 rounded-full w-full" />
                <div className="h-[5px] bg-gray-200 rounded-full w-[85%]" />
                <div className="h-[5px] bg-gray-100 rounded-full w-[70%]" />
                <div className="h-[5px] bg-gray-100 rounded-full w-[90%]" />
              </div>
              <div className="mt-3 text-[8px] text-gray-500">
                Met vriendelijke groet
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Envelope front flap */}
        <svg viewBox="0 0 240 140" className="absolute inset-0 w-full h-full" style={{ zIndex: 2 }}>
          {/* Bottom triangle */}
          <polygon
            points="0,50 120,140 240,50 240,140 0,140"
            fill="#1B8BD6"
            stroke="#0A66C2"
            strokeWidth="1"
          />
          {/* Left triangle */}
          <polygon
            points="0,0 0,140 120,140"
            fill="#2196E3"
            opacity="0.3"
          />
          {/* Right triangle */}
          <polygon
            points="240,0 240,140 120,140"
            fill="#0D7FD4"
            opacity="0.3"
          />
        </svg>

        {/* Top flap - animated */}
        <motion.div
          className="absolute top-0 left-0 w-full"
          style={{ transformOrigin: "top center", zIndex: 3 }}
          initial={{ rotateX: 0 }}
          variants={{
            flapOpen: {
              rotateX: 180,
              transition: { duration: 0.5, ease: "easeInOut" },
            },
            flapClose: {
              rotateX: 0,
              transition: { duration: 0.5, ease: "easeInOut" },
            },
          }}
          animate={controls}
        >
          <svg viewBox="0 0 240 80" className="w-full" style={{ display: "block" }}>
            <polygon
              points="0,0 240,0 120,80"
              fill="#1B8BD6"
              stroke="#0A66C2"
              strokeWidth="1"
            />
            {/* Highlight */}
            <polygon
              points="10,2 120,70 230,2"
              fill="#3DA8E8"
              opacity="0.4"
            />
          </svg>
        </motion.div>

        {/* Seal/badge */}
        <motion.div
          className="absolute top-[40%] left-1/2 -translate-x-1/2"
          style={{ zIndex: 4 }}
          initial={{ scale: 0 }}
          variants={{
            flapClose: {
              scale: [0, 1.2, 1],
              transition: { delay: 0.3, duration: 0.4, ease: "easeOut" },
            },
            flapOpen: {
              scale: 0,
              transition: { duration: 0.2 },
            },
          }}
          animate={controls}
        >
          <div className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center border-2 border-[#0A66C2]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0A66C2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
        </motion.div>
      </div>

      {/* Floating particles */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 bg-linkedin/20 rounded-full"
          style={{
            left: `${30 + i * 35}%`,
            top: `${20 + i * 15}%`,
          }}
          animate={{
            y: [-5, 5, -5],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 2 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        />
      ))}
    </div>
  );
}
