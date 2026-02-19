"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const MESSAGES = [
  { to: "Jan Jansen", role: "Senior Developer", text: "Hoi Jan! Je ervaring bij Google viel me op. We zoeken iemand met jouw skills voor een gave rol..." },
  { to: "Lisa de Vries", role: "Product Manager", text: "Hi Lisa! Je achtergrond in B2B SaaS is precies wat we zoeken. Zullen we even sparren?" },
  { to: "Thomas Bakker", role: "Data Engineer", text: "Hey Thomas! Je werk met Python en Spark sluit perfect aan bij wat we bouwen..." },
];

type Phase = "writing" | "done" | "deliver" | "sent";

export default function EnvelopeAnimation() {
  const [phase, setPhase] = useState<Phase>("writing");
  const [msgIdx, setMsgIdx] = useState(0);
  const [typed, setTyped] = useState(0);
  const cancelled = useRef(false);
  const msg = MESSAGES[msgIdx];

  useEffect(() => {
    cancelled.current = false;
    const wait = (ms: number) =>
      new Promise<void>((res) => {
        setTimeout(() => { if (!cancelled.current) res(); }, ms);
      });

    const run = async () => {
      setPhase("writing");
      setTyped(0);
      await wait(400);
      const text = MESSAGES[msgIdx].text;
      for (let i = 0; i <= text.length; i++) {
        if (cancelled.current) return;
        setTyped(i);
        await wait(28);
      }
      if (cancelled.current) return;

      setPhase("done");
      await wait(900);
      if (cancelled.current) return;

      setPhase("deliver");
      await wait(1200);
      if (cancelled.current) return;

      setPhase("sent");
      await wait(2200);
      if (cancelled.current) return;

      setMsgIdx((prev) => (prev + 1) % MESSAGES.length);
    };

    run();
    return () => { cancelled.current = true; };
  }, [msgIdx]);

  const isWriting = phase === "writing";
  const isDone = phase === "done";
  const isDeliver = phase === "deliver";
  const isSent = phase === "sent";

  return (
    <div className="relative w-[380px] h-[380px] select-none" aria-hidden="true">

      {/* ════════════════════════════════════════════════
          LAYOUT: Letter card top-left, WALL-E top-right
          with arm clearly reaching ONTO the letter.
          Envelope at bottom. During "deliver", the letter
          and WALL-E both move down toward the envelope.
         ════════════════════════════════════════════════ */}

      {/* ── WALL-E ───────────────────────────────────── */}
      <motion.div
        className="absolute z-30"
        style={{ right: 10, top: 14 }}
        animate={
          isDeliver
            ? { y: 80, x: -20, transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] } }
            : isSent
              ? { y: 80, x: -20 }
              : { y: 0, x: 0 }
        }
      >
        <motion.div
          animate={isWriting ? {} : { y: [0, -3, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* ── LEFT ARM (reaches onto the letter) ── */}
          <motion.div
            className="absolute -left-[28px] top-[54px] z-40"
            style={{ transformOrigin: "right center" }}
            animate={
              isWriting
                ? { rotate: [2, -6, 4, -4, 6, 2] }
                : isDone
                  ? { rotate: 25 }
                  : { rotate: 15 }
            }
            transition={
              isWriting
                ? { duration: 0.8, repeat: Infinity, ease: "easeInOut" }
                : { duration: 0.3, type: "spring" }
            }
          >
            {/* Arm segments */}
            <div className="flex items-center">
              <div className="w-[22px] h-[6px] bg-[#D97706] rounded-full" />
              <div className="w-[10px] h-[5px] bg-[#B45309] rounded-full -ml-[2px]" />
              {/* Hand */}
              <div className="w-[8px] h-[8px] bg-[#D97706] rounded-full border border-[#B45309] -ml-[1px]" />
            </div>
            {/* Pen — only while writing */}
            {isWriting && (
              <motion.div
                className="absolute right-0 top-[6px] w-[3px] h-[14px] bg-[#475569] rounded-sm"
                style={{ transformOrigin: "top center" }}
                animate={{ rotate: [-8, 8, -8] }}
                transition={{ duration: 0.5, repeat: Infinity }}
              />
            )}
          </motion.div>

          {/* ── RIGHT ARM ── */}
          <motion.div
            className="absolute -right-[18px] top-[54px]"
            style={{ transformOrigin: "left center" }}
            animate={
              isDone || isSent
                ? { rotate: -12 }
                : { rotate: -5 }
            }
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center">
              <div className="w-[14px] h-[5px] bg-[#D97706] rounded-full" />
              <div className="w-[7px] h-[7px] bg-[#D97706] rounded-full border border-[#B45309] -ml-[1px]" />
            </div>
          </motion.div>

          {/* ── HEAD: Binocular eyes ── */}
          <div className="flex items-center justify-center relative mb-[2px]">
            {/* Left eye */}
            <div className="w-[30px] h-[30px] rounded-full bg-[#E5E7EB] border-[2px] border-[#9CA3AF] flex items-center justify-center shadow-sm relative z-10">
              <motion.div
                className="relative"
                animate={
                  isWriting
                    ? { x: [-2, 2, -1, 2, -2], y: [0, 1, 0] }
                    : {}
                }
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-[13px] h-[13px] rounded-full bg-[#60B5F5]">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[7px] h-[7px] rounded-full bg-[#1E293B]" />
                  <div className="absolute top-[2px] right-[2px] w-[3px] h-[3px] rounded-full bg-white opacity-80" />
                </div>
              </motion.div>
            </div>

            {/* Bridge */}
            <div className="w-[6px] h-[10px] bg-[#9CA3AF] rounded-sm -mx-[1px] z-20" />

            {/* Right eye */}
            <div className="w-[30px] h-[30px] rounded-full bg-[#E5E7EB] border-[2px] border-[#9CA3AF] flex items-center justify-center shadow-sm relative z-10">
              <motion.div
                className="relative"
                animate={
                  isWriting
                    ? { x: [-2, 2, -1, 2, -2], y: [0, 1, 0] }
                    : {}
                }
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 0.05 }}
              >
                <div className="w-[13px] h-[13px] rounded-full bg-[#60B5F5]">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[7px] h-[7px] rounded-full bg-[#1E293B]" />
                  <div className="absolute top-[2px] right-[2px] w-[3px] h-[3px] rounded-full bg-white opacity-80" />
                </div>
              </motion.div>
            </div>
          </div>

          {/* ── NECK ── */}
          <div className="w-[10px] h-[4px] bg-[#D97706] mx-auto" />

          {/* ── BODY ── */}
          <div className="w-[52px] h-[36px] rounded-xl bg-gradient-to-b from-[#FBBF24] to-[#D97706] mx-auto border border-[#B45309] shadow-md relative">
            {/* Elvatix logo */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[18px] h-[18px] rounded-full bg-[#84CC16] flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                  <circle cx="12" cy="8" r="3.5" />
                  <path d="M6 21c0-3.3 2.7-6 6-6s6 2.7 6 6" />
                </svg>
              </div>
            </div>
          </div>

          {/* ── TRACKS ── */}
          <div className="flex justify-center gap-[2px] mt-[2px]">
            <motion.div
              className="w-[20px] h-[8px] bg-[#6B7280] rounded-[3px] border border-[#4B5563]"
              animate={isDeliver ? { rotate: [0, 4, -4, 0] } : {}}
              transition={{ duration: 0.3, repeat: isDeliver ? 4 : 0 }}
            >
              <div className="flex justify-center gap-[1px] mt-[1px]">
                <div className="w-[3px] h-[3px] rounded-full bg-[#9CA3AF]" />
                <div className="w-[3px] h-[3px] rounded-full bg-[#9CA3AF]" />
                <div className="w-[3px] h-[3px] rounded-full bg-[#9CA3AF]" />
              </div>
            </motion.div>
            <motion.div
              className="w-[20px] h-[8px] bg-[#6B7280] rounded-[3px] border border-[#4B5563]"
              animate={isDeliver ? { rotate: [0, -4, 4, 0] } : {}}
              transition={{ duration: 0.3, repeat: isDeliver ? 4 : 0 }}
            >
              <div className="flex justify-center gap-[1px] mt-[1px]">
                <div className="w-[3px] h-[3px] rounded-full bg-[#9CA3AF]" />
                <div className="w-[3px] h-[3px] rounded-full bg-[#9CA3AF]" />
                <div className="w-[3px] h-[3px] rounded-full bg-[#9CA3AF]" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* ── INMAIL LETTER ────────────────────── */}
      <AnimatePresence>
        {!isDeliver && !isSent && (
          <motion.div
            className="absolute left-0 top-[12px] z-20"
            exit={{
              y: 155,
              x: 15,
              scale: 0.45,
              opacity: 0,
              transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
            }}
          >
            <div className="w-[235px] rounded-2xl bg-white shadow-xl border border-gray-100 p-4 relative">
              {/* Pen contact dot on the right edge of the letter */}
              {isWriting && typed > 5 && (
                <motion.div
                  className="absolute -right-[3px] w-[5px] h-[5px] bg-[#D97706] rounded-full"
                  style={{ top: 95 + Math.min(typed * 0.5, 30) }}
                  animate={{ opacity: [0.3, 0.8, 0.3] }}
                  transition={{ duration: 0.6, repeat: Infinity }}
                />
              )}

              <div className="flex items-center gap-2 mb-2">
                <div className="w-5 h-5 rounded bg-[#0A66C2] flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-[8px] font-bold">in</span>
                </div>
                <span className="text-[10px] text-gray-400 font-semibold tracking-wider uppercase">InMail</span>
              </div>

              <div className="text-[10px] text-gray-500 mb-0.5">
                Aan: <span className="font-bold text-gray-800">{msg.to}</span>
              </div>
              <div className="text-[9px] text-gray-400 mb-2">{msg.role}</div>
              <div className="h-px bg-gray-100 mb-2" />

              <div className="text-[11px] text-gray-700 leading-[1.5] min-h-[48px]">
                {msg.text.slice(0, typed)}
                {isWriting && (
                  <motion.span
                    className="inline-block w-[2px] h-[12px] bg-[#0A66C2] ml-[1px] align-middle rounded-full"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                  />
                )}
              </div>

              {typed >= msg.text.length && phase === "done" && (
                <motion.div
                  className="mt-2 pt-2 border-t border-gray-50 text-[9px] text-gray-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  Verzonden via Elvatix
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── ENVELOPE ─────────────────────────── */}
      <div className="absolute left-3 bottom-[28px] z-10">
        <div className="relative" style={{ width: 250, height: 95 }}>
          {/* Back flap opens during delivery */}
          {isDeliver && (
            <motion.div
              className="absolute -top-[20px] left-0 w-full z-0"
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{ opacity: 1, scaleY: 1 }}
              transition={{ duration: 0.3 }}
              style={{ transformOrigin: "bottom" }}
            >
              <svg viewBox="0 0 250 24" width="250" height="24" fill="none">
                <polygon points="0,24 125,0 250,24" fill="#0956A0" opacity="0.25" />
              </svg>
            </motion.div>
          )}

          <svg viewBox="0 0 250 95" width="250" height="95" fill="none">
            <rect width="250" height="95" rx="14" fill="#0A66C2" />
            <rect width="250" height="95" rx="14" fill="url(#envG)" />
            <polygon points="0,32 125,95 250,32 250,95 0,95" fill="#085CA9" opacity="0.3" />
            <defs>
              <linearGradient id="envG" x1="0" y1="0" x2="250" y2="95" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0A66C2" />
                <stop offset="1" stopColor="#2D8FDB" />
              </linearGradient>
            </defs>
          </svg>

          {/* Mini letter sliding INTO envelope */}
          {isDeliver && (
            <motion.div
              className="absolute left-[25px] w-[130px] bg-white rounded-lg shadow-sm border border-gray-200 p-2 z-10"
              initial={{ top: -60, opacity: 1 }}
              animate={{ top: 25, opacity: 0 }}
              transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1], delay: 0.1 }}
            >
              <div className="h-[2px] w-[65%] bg-gray-200 rounded-full mb-1" />
              <div className="h-[2px] w-[85%] bg-gray-100 rounded-full mb-1" />
              <div className="h-[2px] w-[45%] bg-gray-100 rounded-full" />
            </motion.div>
          )}

          {/* Seal */}
          {isSent && (
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              initial={{ scale: 0.3, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <div className="w-11 h-11 rounded-full bg-white shadow-md flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0A66C2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* ── STATUS ────────────────────────────── */}
      <div className="absolute bottom-[6px] left-4 h-4">
        <AnimatePresence mode="wait">
          {isWriting && (
            <motion.p key="w" className="text-[11px] text-gray-400" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              Elvatix schrijft een bericht...
            </motion.p>
          )}
          {isDone && (
            <motion.p key="d" className="text-[11px] text-gray-500" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              ✓ Bericht klaar
            </motion.p>
          )}
          {isDeliver && (
            <motion.p key="dl" className="text-[11px] text-gray-400" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              Brief in de envelop...
            </motion.p>
          )}
          {isSent && (
            <motion.p key="s" className="text-[11px] text-emerald-600 font-medium" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              ✓ Verzonden naar {msg.to}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      <div className="absolute bottom-[8px] right-4 flex gap-1.5">
        {MESSAGES.map((_, i) => (
          <div key={i} className={`w-[6px] h-[6px] rounded-full transition-all duration-300 ${i === msgIdx ? "bg-[#0A66C2]" : "bg-gray-300"}`} />
        ))}
      </div>
    </div>
  );
}
