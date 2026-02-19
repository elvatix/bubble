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
      setPhase("writing");
      setTyped(0);
      await wait(300);

      const text = MESSAGES[msgIdx].text;
      for (let i = 0; i <= text.length; i++) {
        if (cancelled.current) return;
        setTyped(i);
        await wait(30);
      }
      if (cancelled.current) return;

      setPhase("done");
      await wait(800);
      if (cancelled.current) return;

      setPhase("folding");
      await wait(900);
      if (cancelled.current) return;

      setPhase("sent");
      await wait(2000);
      if (cancelled.current) return;

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

      {/* ═══════ ELVY — FRIENDLY ELVATIX MASCOT ═══════ */}
      <motion.div
        className="absolute z-20"
        style={{ top: 20, right: 20 }}
        animate={
          isFolding
            ? { y: 8, transition: { duration: 0.4 } }
            : { y: 0 }
        }
      >
        {/* Gentle float */}
        <motion.div
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width="80" height="100" viewBox="0 0 80 100" fill="none">
            {/* Body — soft, rounded, warm green blob */}
            <ellipse cx="40" cy="52" rx="30" ry="34" fill="#84CC16" />
            {/* Inner glow */}
            <ellipse cx="40" cy="48" rx="24" ry="26" fill="#9AE635" opacity="0.4" />

            {/* Face */}
            {/* Left eye */}
            <motion.g
              animate={
                isWriting
                  ? { x: [-1, 1, -1] }
                  : {}
              }
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ellipse cx="31" cy="44" rx="6" ry="6.5" fill="white" />
              <circle cx="32" cy="44" r="3" fill="#1E293B" />
              <circle cx="33.5" cy="42.5" r="1.2" fill="white" opacity="0.9" />
            </motion.g>

            {/* Right eye */}
            <motion.g
              animate={
                isWriting
                  ? { x: [-1, 1, -1] }
                  : {}
              }
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.05 }}
            >
              <ellipse cx="49" cy="44" rx="6" ry="6.5" fill="white" />
              <circle cx="50" cy="44" r="3" fill="#1E293B" />
              <circle cx="51.5" cy="42.5" r="1.2" fill="white" opacity="0.9" />
            </motion.g>

            {/* Smile — changes based on phase */}
            {(isDone || isSent) ? (
              /* Big happy smile */
              <path d="M30 56 Q40 66 50 56" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            ) : (
              /* Gentle smile */
              <path d="M33 56 Q40 62 47 56" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" fill="none" />
            )}

            {/* Rosy cheeks for warmth */}
            <circle cx="24" cy="54" r="4" fill="#F472B6" opacity="0.25" />
            <circle cx="56" cy="54" r="4" fill="#F472B6" opacity="0.25" />

            {/* Left arm */}
            <motion.g
              style={{ originX: "47px", originY: "60px" }}
              animate={
                isWriting
                  ? { rotate: [3, -4, 3, -3, 4, 3] }
                  : isDone || isSent
                    ? { rotate: -8 }
                    : { rotate: 0 }
              }
              transition={
                isWriting
                  ? { duration: 1, repeat: Infinity, ease: "easeInOut" }
                  : { duration: 0.3 }
              }
            >
              <path d="M12 60 Q6 72 10 80" stroke="#6BBF0A" strokeWidth="5" strokeLinecap="round" fill="none" />
              {/* Pen when writing */}
              {isWriting && (
                <rect x="7" y="78" width="2.5" height="10" rx="1" fill="#64748B" transform="rotate(-10 8 78)" />
              )}
            </motion.g>

            {/* Right arm */}
            <motion.g
              animate={
                isDone || isSent
                  ? { rotate: 8 }
                  : { rotate: 0 }
              }
              transition={{ duration: 0.3 }}
            >
              <path d="M68 60 Q74 72 70 80" stroke="#6BBF0A" strokeWidth="5" strokeLinecap="round" fill="none" />
            </motion.g>

            {/* Feet */}
            <ellipse cx="32" cy="86" rx="8" ry="4" fill="#6BBF0A" />
            <ellipse cx="48" cy="86" rx="8" ry="4" fill="#6BBF0A" />
          </svg>
        </motion.div>
      </motion.div>

      {/* ═══════ INMAIL LETTER ═══════ */}
      <motion.div
        className="absolute left-0 top-[20px] z-10"
        animate={
          isFolding
            ? { scale: 0.4, y: 145, x: 35, opacity: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } }
            : isSent
              ? { scale: 0.4, y: 145, x: 35, opacity: 0 }
              : { scale: 1, y: 0, x: 0, opacity: 1 }
        }
      >
        <div className="w-[215px] rounded-2xl bg-white shadow-lg border border-gray-100 p-4">
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
                transition={{ duration: 0.6, repeat: Infinity }}
              />
            )}
          </div>

          {typed >= msg.text.length && (phase === "done" || phase === "folding") && (
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

      {/* ═══════ ENVELOPE ═══════ */}
      <div className="absolute left-4 bottom-[30px] z-10">
        <div className="relative" style={{ width: 220, height: 88 }}>
          <svg viewBox="0 0 220 88" width="220" height="88" fill="none">
            <defs>
              <linearGradient id="eg2" x1="0" y1="0" x2="220" y2="88" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0A66C2" />
                <stop offset="1" stopColor="#2D8FDB" />
              </linearGradient>
            </defs>
            <rect width="220" height="88" rx="12" fill="url(#eg2)" />
            <polygon points="0,30 110,88 220,30 220,88 0,88" fill="#085CA9" opacity="0.3" />
          </svg>

          {isSent && (
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
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
      <div className="absolute bottom-[8px] left-5 h-4">
        {isWriting && (
          <motion.p className="text-[11px] text-gray-400" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            Elvatix schrijft een bericht...
          </motion.p>
        )}
        {isDone && (
          <motion.p className="text-[11px] text-gray-500" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            Bericht klaar
          </motion.p>
        )}
        {isFolding && (
          <motion.p className="text-[11px] text-gray-400" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            Wordt verzonden...
          </motion.p>
        )}
        {isSent && (
          <motion.p className="text-[11px] text-emerald-600 font-medium" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            ✓ Verzonden naar {msg.to}
          </motion.p>
        )}
      </div>

      {/* ═══════ DOTS ═══════ */}
      <div className="absolute bottom-[10px] right-5 flex gap-1.5">
        {MESSAGES.map((_, i) => (
          <div
            key={i}
            className={`w-[6px] h-[6px] rounded-full transition-all duration-300 ${i === msgIdx ? "bg-[#0A66C2]" : "bg-gray-300"}`}
          />
        ))}
      </div>
    </div>
  );
}
