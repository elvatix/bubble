"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const MESSAGES = [
  {
    to: "Jan Jansen",
    role: "Senior Developer",
    lines: ["Hoi Jan! Ik zag je profiel en je", "ervaring bij Google viel me op..."],
  },
  {
    to: "Lisa de Vries",
    role: "Product Manager",
    lines: ["Hi Lisa! Je achtergrond in B2B", "SaaS is precies wat we zoeken..."],
  },
  {
    to: "Thomas Bakker",
    role: "Data Engineer",
    lines: ["Hey Thomas! Je werk met Python", "en Spark sluit perfect aan..."],
  },
];

export default function EnvelopeAnimation() {
  const [phase, setPhase] = useState<"writing" | "folding" | "done">("writing");
  const [msgIndex, setMsgIndex] = useState(0);
  const msg = MESSAGES[msgIndex];

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    const run = () => {
      setPhase("writing");
      // After writing, fold
      timers.push(setTimeout(() => setPhase("folding"), 3000));
      // After folding, done
      timers.push(setTimeout(() => setPhase("done"), 4000));
      // Next message
      timers.push(
        setTimeout(() => {
          setMsgIndex((i) => (i + 1) % MESSAGES.length);
          setPhase("writing");
        }, 6000)
      );
    };

    run();
    const interval = setInterval(run, 6000);
    return () => {
      clearInterval(interval);
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <div className="relative w-[300px] h-[310px] select-none" aria-hidden="true">
      {/* ── WALL-E STYLE ROBOT ── */}
      <motion.div
        className="absolute z-10"
        style={{ top: 0, right: 20 }}
        animate={{ y: [-2, 3, -2] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Antenna */}
        <div className="flex flex-col items-center mb-[-2px]">
          <motion.div
            className="w-2.5 h-2.5 rounded-full bg-yellow-400"
            style={{ boxShadow: "0 0 8px rgba(250,204,21,0.7)" }}
            animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 1.2, repeat: Infinity }}
          />
          <div className="w-[2px] h-3 bg-amber-700" />
        </div>

        {/* Head — binoculars like WALL-E */}
        <div className="relative">
          {/* Eye stalks */}
          <div className="flex items-end justify-center gap-0">
            {/* Left eye */}
            <div className="flex flex-col items-center">
              <div className="w-[30px] h-[30px] rounded-full bg-gradient-to-br from-slate-200 to-slate-300 border-[3px] border-slate-400 flex items-center justify-center shadow-md">
                <motion.div
                  className="w-3.5 h-3.5 rounded-full bg-gradient-to-br from-sky-300 to-sky-500"
                  style={{ boxShadow: "0 0 6px rgba(56,189,248,0.5)" }}
                  animate={
                    phase === "writing"
                      ? { x: [-1, 1, -1], y: [0, 1, 0] }
                      : phase === "done"
                        ? { scale: [1, 1.2, 1] }
                        : {}
                  }
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </div>
            </div>

            {/* Bridge between eyes */}
            <div className="w-2 h-3 bg-slate-400 rounded-sm mb-2" />

            {/* Right eye */}
            <div className="flex flex-col items-center">
              <div className="w-[30px] h-[30px] rounded-full bg-gradient-to-br from-slate-200 to-slate-300 border-[3px] border-slate-400 flex items-center justify-center shadow-md">
                <motion.div
                  className="w-3.5 h-3.5 rounded-full bg-gradient-to-br from-sky-300 to-sky-500"
                  style={{ boxShadow: "0 0 6px rgba(56,189,248,0.5)" }}
                  animate={
                    phase === "writing"
                      ? { x: [-1, 1, -1], y: [0, 1, 0] }
                      : phase === "done"
                        ? { scale: [1, 1.2, 1] }
                        : {}
                  }
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.1 }}
                />
              </div>
            </div>
          </div>

          {/* Neck */}
          <div className="w-3 h-2 bg-amber-600 mx-auto" />
        </div>

        {/* Body — boxy, warm like WALL-E */}
        <div className="w-[56px] h-[38px] rounded-lg bg-gradient-to-b from-amber-500 to-amber-600 mx-auto shadow-md border border-amber-700 relative overflow-hidden">
          {/* Chest plate */}
          <div className="absolute inset-1 rounded bg-amber-400/40 border border-amber-300/30" />
          {/* Elvatix logo on chest */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[7px] font-black text-amber-900/60 tracking-wider">
              ELV
            </span>
          </div>
        </div>

        {/* Arms — one is writing */}
        <div className="absolute top-[50px] -left-[14px]">
          <motion.div
            style={{ transformOrigin: "top right" }}
            animate={
              phase === "writing"
                ? { rotate: [5, -3, 5, -5, 3] }
                : phase === "done"
                  ? { rotate: -15 }
                  : { rotate: 0 }
            }
            transition={
              phase === "writing"
                ? { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
                : { duration: 0.3 }
            }
          >
            <div className="w-[3px] h-[28px] bg-amber-700 rounded-full" />
            {/* Hand/pen */}
            <div className="w-2 h-2 bg-amber-800 rounded-full ml-[-1px]" />
          </motion.div>
        </div>

        {/* Tracks/wheels */}
        <div className="flex justify-center gap-1 mt-1">
          <div className="w-5 h-3 bg-slate-500 rounded-sm" />
          <div className="w-5 h-3 bg-slate-500 rounded-sm" />
        </div>
      </motion.div>

      {/* ── INMAIL LETTER ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={msgIndex}
          className="absolute left-0 top-[28px] z-0"
          initial={{ opacity: 0, y: 10 }}
          animate={
            phase === "folding" || phase === "done"
              ? { opacity: 0, y: 30, scale: 0.85, transition: { duration: 0.5 } }
              : { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4 } }
          }
          exit={{ opacity: 0, y: 20, transition: { duration: 0.3 } }}
        >
          <div className="w-[200px] rounded-2xl bg-white shadow-lg border border-gray-100 p-4">
            {/* LinkedIn header */}
            <div className="flex items-center gap-2 mb-2.5">
              <div className="w-5 h-5 rounded bg-[#0A66C2] flex items-center justify-center flex-shrink-0">
                <span className="text-white text-[8px] font-bold">in</span>
              </div>
              <span className="text-[10px] text-gray-400 font-semibold tracking-wider uppercase">
                InMail
              </span>
            </div>

            {/* To field */}
            <div className="text-[10px] text-gray-500 mb-1">
              Aan: <span className="font-semibold text-gray-700">{msg.to}</span>
            </div>
            <div className="text-[9px] text-gray-400 mb-3">{msg.role}</div>

            {/* Typing lines */}
            <div className="space-y-1.5 mb-2">
              {msg.lines.map((line, i) => (
                <motion.div
                  key={i}
                  className="text-[10px] text-gray-600 leading-snug"
                  initial={{ opacity: 0, width: 0 }}
                  animate={
                    phase === "writing"
                      ? {
                          opacity: 1,
                          width: "auto",
                          transition: { delay: 0.5 + i * 0.8, duration: 0.6 },
                        }
                      : {}
                  }
                  style={{ overflow: "hidden", whiteSpace: "nowrap" }}
                >
                  {line}
                </motion.div>
              ))}
            </div>

            {/* Cursor blink */}
            {phase === "writing" && (
              <motion.div
                className="w-[2px] h-3 bg-linkedin rounded-full"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* ── ENVELOPE ── */}
      <div className="absolute left-2 bottom-4">
        <div className="relative" style={{ width: 210, height: 90 }}>
          <svg
            viewBox="0 0 210 90"
            width="210"
            height="90"
            fill="none"
          >
            <defs>
              <linearGradient id="envGrad2" x1="0" y1="0" x2="210" y2="90" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0A66C2" />
                <stop offset="1" stopColor="#2196F3" />
              </linearGradient>
            </defs>
            <rect width="210" height="90" rx="12" fill="url(#envGrad2)" />
            <polygon points="0,30 105,90 210,30 210,90 0,90" fill="#0D7FD4" opacity="0.5" />
            <rect x="12" y="10" width="50" height="16" rx="5" fill="white" opacity="0.08" />
          </svg>

          {/* Seal — appears when done */}
          <AnimatePresence>
            {phase === "done" && (
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [0, 1.3, 1], opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <div className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center border-2 border-[#0A66C2]">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0A66C2" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* ── STATUS LABEL ── */}
      <div className="absolute bottom-0 left-3">
        <AnimatePresence mode="wait">
          {phase === "writing" && (
            <motion.p
              key="writing"
              className="text-[11px] font-medium text-linkedin/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              Elvatix schrijft een bericht...
            </motion.p>
          )}
          {phase === "done" && (
            <motion.p
              key="done"
              className="text-[11px] font-medium text-emerald-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              ✓ Bericht verzonden naar {msg.to}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Message counter dots */}
      <div className="absolute bottom-0 right-6 flex gap-1.5">
        {MESSAGES.map((_, i) => (
          <div
            key={i}
            className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
              i === msgIndex ? "bg-linkedin" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
