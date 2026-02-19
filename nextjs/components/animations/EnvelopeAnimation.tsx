"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function EnvelopeAnimation() {
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      // Small initial delay
      await new Promise((r) => setTimeout(r, 500));
      while (true) {
        // 1. Robot writes the letter (lines appear)
        await controls.start("writing");
        await new Promise((r) => setTimeout(r, 2000));
        // 2. Letter lifts & moves to envelope
        await controls.start("liftLetter");
        await new Promise((r) => setTimeout(r, 700));
        // 3. Letter slides into envelope
        await controls.start("insertLetter");
        await new Promise((r) => setTimeout(r, 500));
        // 4. Seal
        await controls.start("seal");
        await new Promise((r) => setTimeout(r, 2000));
        // 5. Reset for next loop
        await controls.start("reset");
        await new Promise((r) => setTimeout(r, 600));
      }
    };
    sequence();
  }, [controls]);

  return (
    <div
      className="relative select-none"
      style={{ width: 320, height: 340 }}
      aria-hidden="true"
    >
      {/* Subtle glow background */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-50 via-transparent to-cyan-50 opacity-80" />

      {/* Floating particles */}
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-linkedin/10"
          style={{
            width: 6 + i * 2,
            height: 6 + i * 2,
            left: `${12 + i * 20}%`,
            top: `${8 + i * 14}%`,
          }}
          animate={{ y: [-5, 5, -5], opacity: [0.2, 0.5, 0.2] }}
          transition={{
            duration: 2.5 + i * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.2,
          }}
        />
      ))}

      {/* ─── AI ROBOT ─── */}
      <motion.div
        className="absolute"
        style={{ top: 12, right: 50 }}
        animate={{ y: [-3, 3, -3] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Antenna */}
        <div className="flex flex-col items-center">
          <motion.div
            className="w-3 h-3 rounded-full bg-cyan-400 mb-[-2px]"
            style={{ boxShadow: "0 0 10px rgba(34,211,238,0.7)" }}
            animate={{ opacity: [0.5, 1, 0.5], scale: [0.9, 1.1, 0.9] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <div className="w-[2px] h-4 bg-slate-400" />
        </div>
        {/* Head */}
        <div className="w-16 h-14 rounded-2xl bg-gradient-to-b from-slate-100 to-slate-200 shadow-md relative overflow-hidden border border-slate-300">
          {/* Screen */}
          <div className="absolute inset-1.5 rounded-xl bg-gradient-to-b from-slate-800 to-slate-900 flex items-center justify-center gap-3">
            <motion.div
              className="w-2.5 h-2.5 rounded-full bg-cyan-400"
              style={{ boxShadow: "0 0 8px rgba(34,211,238,0.6)" }}
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
              className="w-2.5 h-2.5 rounded-full bg-cyan-400"
              style={{ boxShadow: "0 0 8px rgba(34,211,238,0.6)" }}
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.15 }}
            />
          </div>
        </div>
        {/* Neck */}
        <div className="w-4 h-2 bg-slate-300 mx-auto" />
        {/* Body */}
        <div className="w-12 h-10 rounded-xl bg-gradient-to-b from-slate-100 to-slate-200 mx-auto shadow-sm border border-slate-300 flex items-center justify-center gap-1">
          <div className="w-2 h-2 rounded-full bg-cyan-400" />
          <div className="w-2 h-2 rounded-full bg-blue-500" />
          <div className="w-2 h-2 rounded-full bg-cyan-400" />
        </div>
      </motion.div>

      {/* ─── ROBOT ARM ─── */}
      <motion.div
        className="absolute"
        style={{ top: 85, right: 55, transformOrigin: "top center" }}
        variants={{
          writing: {
            rotate: [0, -6, 2, -8, 0, -5, 2],
            transition: { duration: 2, ease: "easeInOut" },
          },
          liftLetter: {
            rotate: -20,
            x: -30,
            y: 10,
            transition: { duration: 0.5 },
          },
          insertLetter: {
            rotate: 0,
            x: 0,
            y: 50,
            transition: { duration: 0.4 },
          },
          seal: {
            rotate: 0,
            x: 0,
            y: 0,
            opacity: 0.3,
            transition: { duration: 0.3 },
          },
          reset: {
            rotate: 0,
            x: 0,
            y: 0,
            opacity: 1,
            transition: { duration: 0.3 },
          },
        }}
        animate={controls}
      >
        <div className="flex flex-col items-center">
          <div className="w-2.5 h-16 bg-gradient-to-b from-slate-300 to-slate-400 rounded-full" />
          <div className="w-5 h-5 rounded-full bg-slate-300 border-2 border-slate-400 -mt-1 flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          </div>
        </div>
      </motion.div>

      {/* ─── LETTER ─── */}
      <motion.div
        className="absolute"
        style={{ left: 20, top: 120 }}
        variants={{
          writing: { opacity: 1, x: 0, y: 0, scale: 1 },
          liftLetter: {
            y: -10,
            x: 10,
            scale: 0.85,
            transition: { duration: 0.5, ease: "easeOut" },
          },
          insertLetter: {
            y: 80,
            x: 20,
            scale: 0.6,
            opacity: 0,
            transition: { duration: 0.4, ease: "easeIn" },
          },
          seal: { opacity: 0, y: 80, scale: 0.6 },
          reset: {
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
            transition: { duration: 0.4 },
          },
        }}
        animate={controls}
      >
        <div className="w-[175px] rounded-2xl bg-white/95 backdrop-blur-sm shadow-xl border border-gray-100 p-4">
          {/* Header */}
          <div className="flex items-center gap-2 mb-3">
            <div className="w-5 h-5 rounded bg-[#0A66C2] flex items-center justify-center">
              <span className="text-white text-[8px] font-bold leading-none">in</span>
            </div>
            <span className="text-[10px] text-gray-400 font-semibold tracking-widest uppercase">
              InMail
            </span>
          </div>

          {/* Writing lines */}
          <div className="space-y-2">
            {[
              { w: "100%", delay: 0 },
              { w: "85%", delay: 0.4 },
              { w: "65%", delay: 0.8 },
              { w: "92%", delay: 1.2 },
            ].map((line, i) => (
              <motion.div
                key={i}
                className="h-[5px] rounded-full bg-gradient-to-r from-gray-200 to-gray-100"
                style={{ width: line.w, transformOrigin: "left" }}
                initial={{ scaleX: 0 }}
                variants={{
                  writing: {
                    scaleX: 1,
                    transition: { duration: 0.4, delay: line.delay, ease: "easeOut" },
                  },
                  reset: {
                    scaleX: 0,
                    transition: { duration: 0.15 },
                  },
                }}
                animate={controls}
              />
            ))}
          </div>

          {/* Signature line */}
          <motion.div
            className="mt-3 text-[9px] text-gray-400 font-medium"
            initial={{ opacity: 0 }}
            variants={{
              writing: { opacity: 1, transition: { delay: 1.6, duration: 0.3 } },
              reset: { opacity: 0, transition: { duration: 0.1 } },
            }}
            animate={controls}
          >
            Met vriendelijke groet ✍️
          </motion.div>
        </div>
      </motion.div>

      {/* ─── ENVELOPE ─── */}
      <div className="absolute" style={{ left: 30, bottom: 20 }}>
        <div className="relative" style={{ width: 200, height: 90 }}>
          <svg
            viewBox="0 0 200 90"
            width="200"
            height="90"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="envBody" x1="0" y1="0" x2="200" y2="90" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0A66C2" />
                <stop offset="1" stopColor="#2196F3" />
              </linearGradient>
            </defs>
            {/* Body */}
            <rect width="200" height="90" rx="12" fill="url(#envBody)" />
            {/* Front V-flap */}
            <polygon points="0,35 100,90 200,35 200,90 0,90" fill="#0D7FD4" opacity="0.55" />
            {/* Glass highlight */}
            <rect x="10" y="8" width="55" height="18" rx="6" fill="white" opacity="0.1" />
          </svg>

          {/* Seal checkmark */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            initial={{ scale: 0, opacity: 0 }}
            variants={{
              seal: {
                scale: [0, 1.4, 1],
                opacity: 1,
                transition: { duration: 0.5, ease: "easeOut" },
              },
              reset: {
                scale: 0,
                opacity: 0,
                transition: { duration: 0.2 },
              },
            }}
            animate={controls}
          >
            <div className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center border-2 border-[#0A66C2]">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0A66C2"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Status label */}
      <motion.div
        className="absolute text-[11px] font-medium"
        style={{ bottom: 2, left: 35 }}
        initial={{ opacity: 0 }}
        variants={{
          writing: { opacity: 1, transition: { delay: 0.3 } },
          insertLetter: { opacity: 0, transition: { duration: 0.2 } },
          seal: { opacity: 0 },
          reset: { opacity: 0 },
        }}
        animate={controls}
      >
        <span className="text-linkedin/50">AI schrijft je bericht...</span>
      </motion.div>
      <motion.div
        className="absolute text-[11px] font-medium"
        style={{ bottom: 2, left: 35 }}
        initial={{ opacity: 0 }}
        variants={{
          writing: { opacity: 0 },
          seal: { opacity: 1, transition: { delay: 0.4 } },
          reset: { opacity: 0, transition: { duration: 0.2 } },
        }}
        animate={controls}
      >
        <span className="text-green-500/70">✓ Bericht verzonden</span>
      </motion.div>
    </div>
  );
}
