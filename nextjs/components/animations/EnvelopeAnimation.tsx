"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function EnvelopeAnimation() {
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      while (true) {
        // 1. Robot arm writes
        await controls.start("writing");
        await new Promise((r) => setTimeout(r, 2200));
        // 2. Letter lifts up
        await controls.start("liftLetter");
        await new Promise((r) => setTimeout(r, 600));
        // 3. Letter goes into envelope
        await controls.start("insertLetter");
        await new Promise((r) => setTimeout(r, 400));
        // 4. Envelope seals
        await controls.start("seal");
        await new Promise((r) => setTimeout(r, 1500));
        // 5. Reset
        await controls.start("reset");
        await new Promise((r) => setTimeout(r, 800));
      }
    };
    sequence();
  }, [controls]);

  return (
    <div className="relative w-full max-w-[340px] h-[320px] mx-auto select-none overflow-hidden" aria-hidden="true">
      {/* Glow background */}
      <div className="absolute inset-0 bg-gradient-to-br from-linkedin/5 via-transparent to-blue-400/5 rounded-3xl" />
      
      {/* Floating dots */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: 4 + i * 2,
            height: 4 + i * 2,
            left: `${15 + i * 18}%`,
            top: `${10 + i * 12}%`,
            background: `rgba(10, 102, 194, ${0.08 + i * 0.04})`,
          }}
          animate={{ y: [-4, 4, -4], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2.5 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
        />
      ))}

      {/* === AI ROBOT === */}
      <motion.div
        className="absolute"
        style={{ top: "20px", right: "40px" }}
        animate={{ y: [-2, 2, -2] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Robot head */}
        <div className="relative">
          <div className="w-[52px] h-[44px] bg-gradient-to-b from-slate-200 to-slate-300 rounded-xl relative mx-auto shadow-sm">
            {/* Screen face */}
            <div className="absolute inset-[3px] bg-gradient-to-b from-slate-800 to-slate-900 rounded-lg flex items-center justify-center gap-2">
              {/* Eyes */}
              <motion.div
                className="w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_6px_rgba(34,211,238,0.6)]"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_6px_rgba(34,211,238,0.6)]"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.1 }}
              />
            </div>
            {/* Antenna */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-[2px] h-3 bg-slate-400">
              <motion.div
                className="absolute -top-1 -left-[3px] w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(34,211,238,0.8)]"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
          </div>
          {/* Neck */}
          <div className="w-3 h-2 bg-slate-300 mx-auto rounded-b" />
          {/* Body */}
          <div className="w-[40px] h-[28px] bg-gradient-to-b from-slate-200 to-slate-300 rounded-lg mx-auto shadow-sm">
            <div className="flex justify-center pt-1.5 gap-1">
              <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
              <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* === ROBOT ARM (writing) === */}
      <motion.div
        className="absolute"
        style={{ top: "90px", right: "30px", transformOrigin: "top right" }}
        initial={{ rotate: 0 }}
        variants={{
          writing: { rotate: [0, -8, 0, -5, 0, -8, 0], transition: { duration: 2, ease: "easeInOut" } },
          liftLetter: { rotate: -15, y: -10, transition: { duration: 0.4 } },
          insertLetter: { rotate: 0, y: 20, transition: { duration: 0.3 } },
          seal: { rotate: 0, y: 0, opacity: 0, transition: { duration: 0.3 } },
          reset: { rotate: 0, y: 0, opacity: 1, transition: { duration: 0.3 } },
        }}
        animate={controls}
      >
        {/* Arm */}
        <div className="w-2 h-[60px] bg-gradient-to-b from-slate-300 to-slate-400 rounded-full mx-auto" />
        {/* Hand/gripper */}
        <div className="w-4 h-4 bg-slate-300 rounded-full mx-auto -mt-1 border-2 border-slate-400 flex items-center justify-center">
          <div className="w-1 h-1 bg-cyan-400 rounded-full" />
        </div>
      </motion.div>

      {/* === LETTER being written === */}
      <motion.div
        className="absolute left-[24px] bottom-[100px]"
        initial={{ opacity: 1, y: 0, scale: 1 }}
        variants={{
          writing: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3 } },
          liftLetter: { y: -20, scale: 0.9, transition: { duration: 0.4 } },
          insertLetter: { y: 40, scale: 0.7, opacity: 0, transition: { duration: 0.4 } },
          seal: { opacity: 0 },
          reset: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3 } },
        }}
        animate={controls}
      >
        <div className="w-[160px] bg-white/90 backdrop-blur rounded-xl shadow-lg border border-white/60 p-3.5">
          {/* LinkedIn badge */}
          <div className="flex items-center gap-1.5 mb-2">
            <div className="w-4 h-4 bg-[#0A66C2] rounded flex items-center justify-center">
              <span className="text-white text-[7px] font-bold">in</span>
            </div>
            <span className="text-[9px] text-gray-400 font-medium tracking-wide">INMAIL</span>
          </div>
          {/* Writing lines - animated */}
          <motion.div
            className="space-y-1.5"
            variants={{
              writing: {
                transition: { staggerChildren: 0.4 },
              },
            }}
            animate={controls}
          >
            {[100, 85, 60, 90].map((w, i) => (
              <motion.div
                key={i}
                className="h-[4px] bg-gradient-to-r from-gray-200 to-gray-100 rounded-full"
                style={{ width: `${w}%` }}
                initial={{ scaleX: 0, transformOrigin: "left" }}
                variants={{
                  writing: { scaleX: 1, transition: { duration: 0.5, delay: i * 0.4 } },
                  reset: { scaleX: 0, transition: { duration: 0.2 } },
                }}
                animate={controls}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* === ENVELOPE === */}
      <motion.div
        className="absolute left-[16px] bottom-[16px]"
        variants={{
          seal: { scale: [1, 1.03, 1], transition: { duration: 0.3 } },
        }}
        animate={controls}
      >
        <div className="relative w-[180px] h-[80px]">
          {/* Envelope body */}
          <svg viewBox="0 0 180 80" className="w-full h-full">
            <defs>
              <linearGradient id="envGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0A66C2" />
                <stop offset="100%" stopColor="#1B8BD6" />
              </linearGradient>
            </defs>
            <rect x="0" y="0" width="180" height="80" rx="10" fill="url(#envGrad)" />
            {/* Front flap triangles */}
            <polygon points="0,30 90,80 180,30 180,80 0,80" fill="#0D7FD4" opacity="0.5" />
            {/* Shine */}
            <rect x="8" y="8" width="60" height="20" rx="4" fill="white" opacity="0.08" />
          </svg>
          {/* Seal */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            initial={{ scale: 0, opacity: 0 }}
            variants={{
              seal: { scale: [0, 1.3, 1], opacity: 1, transition: { delay: 0.1, duration: 0.4 } },
              reset: { scale: 0, opacity: 0, transition: { duration: 0.2 } },
            }}
            animate={controls}
          >
            <div className="w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0A66C2" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Status text */}
      <motion.div
        className="absolute bottom-[4px] left-[20px] text-[10px] font-medium tracking-wide"
        initial={{ opacity: 0 }}
        variants={{
          writing: { opacity: 1, transition: { delay: 0.5 } },
          seal: { opacity: 0 },
          reset: { opacity: 0 },
        }}
        animate={controls}
      >
        <span className="text-linkedin/60">AI schrijft je bericht...</span>
      </motion.div>
    </div>
  );
}
