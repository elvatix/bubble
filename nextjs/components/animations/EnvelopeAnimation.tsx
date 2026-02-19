"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const MESSAGES = [
  { to: "Jan Jansen", role: "Senior Developer", text: "Hoi Jan! Je ervaring bij Google viel me op. We zoeken iemand met jouw skills voor een gave rol..." },
  { to: "Lisa de Vries", role: "Product Manager", text: "Hi Lisa! Je achtergrond in B2B SaaS is precies wat we zoeken. Zullen we even sparren?" },
  { to: "Thomas Bakker", role: "Data Engineer", text: "Hey Thomas! Je werk met Python en Spark sluit perfect aan bij wat we bouwen..." },
];

type Phase = "writing" | "done" | "folding" | "sent";

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
      // 1. Writing
      setPhase("writing");
      setTyped(0);
      await wait(400);

      const text = MESSAGES[msgIdx].text;
      for (let i = 0; i <= text.length; i++) {
        if (cancelled.current) return;
        setTyped(i);
        await wait(32);
      }
      if (cancelled.current) return;

      // 2. Finished writing — brief satisfied pause
      setPhase("done");
      await wait(1000);
      if (cancelled.current) return;

      // 3. Letter folds into envelope
      setPhase("folding");
      await wait(1200);
      if (cancelled.current) return;

      // 4. Sealed & sent
      setPhase("sent");
      await wait(2200);
      if (cancelled.current) return;

      // Next message
      setMsgIdx((prev) => (prev + 1) % MESSAGES.length);
    };

    run();
    return () => { cancelled.current = true; };
  }, [msgIdx]);

  const isWriting = phase === "writing";
  const isDone = phase === "done";
  const isFolding = phase === "folding";
  const isSent = phase === "sent";

  return (
    <div className="relative w-[340px] h-[350px] select-none overflow-hidden" aria-hidden="true">

      {/* ═══════ WALL-E ═══════ */}
      <motion.div
        className="absolute z-20"
        style={{ top: 18, right: 24 }}
        animate={
          isFolding
            ? { y: 15, transition: { duration: 0.6, ease: "easeInOut" } }
            : isSent
              ? { y: 0, transition: { duration: 0.5, ease: "easeOut" } }
              : { y: 0 }
        }
      >
        {/* Gentle float */}
        <motion.div
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Antenna — always same quiet blue */}
          <div className="flex flex-col items-center">
            <div
              className="w-2.5 h-2.5 rounded-full bg-sky-400"
              style={{ boxShadow: "0 0 6px rgba(56,189,248,0.5)" }}
            />
            <div className="w-[2px] h-3 bg-amber-700" />
          </div>

          {/* Head — binoculars */}
          <div className="flex items-center justify-center">
            {[0, 1].map((eye) => (
              <div key={eye} className={eye === 0 ? "relative" : ""}>
                <div className="w-[34px] h-[34px] rounded-full bg-gradient-to-b from-gray-100 to-gray-200 border-[2.5px] border-gray-400 flex items-center justify-center shadow-md">
                  <motion.div
                    className="w-[15px] h-[15px] rounded-full bg-gradient-to-br from-sky-300 to-sky-500 relative"
                    style={{ boxShadow: "inset 0 1px 3px rgba(0,0,0,0.12)" }}
                    animate={
                      isWriting
                        ? { x: [-2, 1, -1, 2, -2], y: [0, 1, 0] }
                        : isSent
                          ? { y: [-1, 1, -1] }
                          : {}
                    }
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[7px] h-[7px] rounded-full bg-gray-900" />
                    <div className="absolute top-[2px] right-[2px] w-[3px] h-[3px] rounded-full bg-white/70" />
                  </motion.div>
                </div>
                {eye === 0 && (
                  <div className="absolute -right-[2px] top-[11px] w-[5px] h-[10px] bg-gray-400 rounded-sm z-10" />
                )}
              </div>
            ))}
          </div>

          {/* Neck */}
          <div className="w-3.5 h-[5px] bg-amber-600 mx-auto" />

          {/* Body */}
          <div className="w-[54px] h-[40px] rounded-xl bg-gradient-to-b from-amber-400 to-amber-600 mx-auto shadow-md border border-amber-700/60 relative overflow-hidden">
            <div className="absolute inset-[2px] rounded-lg border border-amber-300/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="13" fill="#84CC16" />
                <circle cx="16" cy="11" r="3" fill="white" />
                <path d="M10 24c0-3.3 2.7-6 6-6s6 2.7 6 6" fill="white" />
              </svg>
            </div>
          </div>

          {/* Writing arm (left) */}
          <motion.div
            className="absolute -left-[12px] top-[48px]"
            style={{ transformOrigin: "top right" }}
            animate={
              isWriting
                ? { rotate: [4, -6, 4, -4, 6, 4], transition: { duration: 1.2, repeat: Infinity, ease: "easeInOut" } }
                : isDone
                  ? { rotate: -10, transition: { duration: 0.3 } }
                  : { rotate: 5 }
            }
          >
            <div className="w-[2.5px] h-[20px] bg-amber-700 rounded-full" />
            <div className="w-[6px] h-[6px] bg-amber-800 rounded-full -ml-[1.5px]" />
            {isWriting && <div className="w-[1.5px] h-[8px] bg-gray-500 rounded-full ml-[1px] -mt-[1px]" />}
          </motion.div>

          {/* Right arm */}
          <motion.div
            className="absolute -right-[12px] top-[48px]"
            style={{ transformOrigin: "top left" }}
            animate={
              isDone || isSent
                ? { rotate: -5 }
                : { rotate: 5 }
            }
            transition={{ duration: 0.3 }}
          >
            <div className="w-[2.5px] h-[20px] bg-amber-700 rounded-full" />
            <div className="w-[6px] h-[6px] bg-amber-800 rounded-full -ml-[1.5px]" />
          </motion.div>

          {/* Tracks */}
          <div className="flex justify-center gap-[2px] mt-[2px]">
            {[0, 1].map((t) => (
              <div key={t} className="w-[20px] h-[8px] bg-gray-500 rounded-[2px] border border-gray-600 flex items-center justify-center gap-[2px]">
                <div className="w-[2px] h-[2px] rounded-full bg-gray-400" />
                <div className="w-[2px] h-[2px] rounded-full bg-gray-400" />
                <div className="w-[2px] h-[2px] rounded-full bg-gray-400" />
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* ═══════ INMAIL LETTER ═══════ */}
      <motion.div
        className="absolute left-0 top-[24px] z-10"
        animate={
          isFolding
            ? {
                scale: 0.45,
                y: 130,
                x: 30,
                opacity: 0.6,
                transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
              }
            : isSent
              ? { scale: 0.45, y: 130, x: 30, opacity: 0 }
              : { scale: 1, y: 0, x: 0, opacity: 1 }
        }
      >
        <div className="w-[215px] rounded-2xl bg-white shadow-lg border border-gray-100 p-4">
          {/* Header */}
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

          {/* Typed text */}
          <div className="text-[11px] text-gray-700 leading-[1.5] min-h-[48px]">
            {msg.text.slice(0, typed)}
            {isWriting && (
              <motion.span
                className="inline-block w-[2px] h-[12px] bg-[#0A66C2] ml-[1px] align-middle rounded-full"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.6, repeat: Infinity }}
              />
            )}
          </div>

          {typed >= msg.text.length && (phase === "done" || phase === "folding") && (
            <motion.div
              className="mt-2 pt-2 border-t border-gray-50 text-[9px] text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Verzonden via Elvatix
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* ═══════ ENVELOPE ═══════ */}
      <div className="absolute left-4 bottom-[32px] z-10">
        <div className="relative" style={{ width: 220, height: 88 }}>
          {/* Back flap (visible when letter is going in) */}
          {isFolding && (
            <motion.div
              className="absolute -top-[18px] left-0 w-full z-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <svg viewBox="0 0 220 30" width="220" height="30" fill="none">
                <polygon points="0,30 110,0 220,30" fill="#0956A0" opacity="0.3" />
              </svg>
            </motion.div>
          )}

          <svg viewBox="0 0 220 88" width="220" height="88" fill="none">
            <defs>
              <linearGradient id="eg" x1="0" y1="0" x2="220" y2="88" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0A66C2" />
                <stop offset="1" stopColor="#2D8FDB" />
              </linearGradient>
            </defs>
            <rect width="220" height="88" rx="12" fill="url(#eg)" />
            {/* Front flap shadow */}
            <polygon points="0,30 110,88 220,30 220,88 0,88" fill="#085CA9" opacity="0.35" />
          </svg>

          {/* Seal — clean checkmark, fades in gently */}
          {isSent && (
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className="w-10 h-10 rounded-full bg-white/95 shadow flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0A66C2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* ═══════ STATUS ═══════ */}
      <div className="absolute bottom-[10px] left-5 h-4">
        {isWriting && (
          <motion.p
            className="text-[11px] text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Elvatix schrijft een bericht...
          </motion.p>
        )}
        {isDone && (
          <motion.p
            className="text-[11px] text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Bericht klaar
          </motion.p>
        )}
        {isFolding && (
          <motion.p
            className="text-[11px] text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Wordt verzonden...
          </motion.p>
        )}
        {isSent && (
          <motion.p
            className="text-[11px] text-emerald-600 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            ✓ Verzonden naar {msg.to}
          </motion.p>
        )}
      </div>

      {/* ═══════ DOTS ═══════ */}
      <div className="absolute bottom-[12px] right-5 flex gap-1.5">
        {MESSAGES.map((_, i) => (
          <div
            key={i}
            className={`w-[6px] h-[6px] rounded-full transition-all duration-300 ${
              i === msgIdx ? "bg-[#0A66C2]" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
