"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const MESSAGES = [
  { to: "Jan Jansen", role: "Senior Developer", text: "Hoi Jan! Je ervaring bij Google viel me op. We zoeken iemand met jouw skills voor een gave rol..." },
  { to: "Lisa de Vries", role: "Product Manager", text: "Hi Lisa! Je achtergrond in B2B SaaS is precies wat we zoeken. Zullen we even sparren?" },
  { to: "Thomas Bakker", role: "Data Engineer", text: "Hey Thomas! Je werk met Python en Spark sluit perfect aan bij wat we bouwen..." },
];

type Phase = "writing" | "done" | "pickup" | "deliver" | "sent";

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
      // 1. Writing — WALL-E's arm moves across the letter as text appears
      setPhase("writing");
      setTyped(0);
      await wait(300);
      const text = MESSAGES[msgIdx].text;
      for (let i = 0; i <= text.length; i++) {
        if (cancelled.current) return;
        setTyped(i);
        await wait(28);
      }
      if (cancelled.current) return;

      // 2. Done — WALL-E lifts arm, looks satisfied
      setPhase("done");
      await wait(700);
      if (cancelled.current) return;

      // 3. Pickup — WALL-E grabs the letter
      setPhase("pickup");
      await wait(600);
      if (cancelled.current) return;

      // 4. Deliver — WALL-E pushes letter down into envelope
      setPhase("deliver");
      await wait(1000);
      if (cancelled.current) return;

      // 5. Sent
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
  const isPickup = phase === "pickup";
  const isDeliver = phase === "deliver";
  const isSent = phase === "sent";
  const letterGone = isDeliver || isSent;

  return (
    <div className="relative w-[360px] h-[380px] select-none" aria-hidden="true">

      {/* ═══════════════════════════════════════════
          SCENE: WALL-E sits to the right of the letter.
          His left arm reaches ONTO the letter while writing.
          After writing, he picks up the letter and slides it
          down into the envelope below.
         ═══════════════════════════════════════════ */}

      {/* ── WALL-E CHARACTER ─────────────────────── */}
      <motion.div
        className="absolute z-30"
        style={{ right: 12, top: 30 }}
        animate={
          isPickup
            ? { y: -8, transition: { duration: 0.3 } }
            : isDeliver
              ? { y: 90, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } }
              : isSent
                ? { y: 90 }
                : { y: 0 }
        }
      >
        {/* Gentle breathing/bob */}
        <motion.div
          animate={isWriting ? {} : { y: [0, -3, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width="90" height="110" viewBox="0 0 90 110" fill="none" xmlns="http://www.w3.org/2000/svg">

            {/* ── HEAD ── */}
            {/* Left eye housing */}
            <circle cx="30" cy="22" r="16" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="2" />
            {/* Right eye housing */}
            <circle cx="60" cy="22" r="16" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="2" />
            {/* Bridge between eyes */}
            <rect x="40" y="16" width="10" height="12" rx="3" fill="#9CA3AF" />

            {/* Left iris */}
            <motion.g
              animate={
                isWriting
                  ? { x: [-3, 3, -2, 3, -3], y: [1, 0, 1, 0, 1] }
                  : isDone || isSent
                    ? { x: 0, y: -1 }
                    : { x: 0, y: 0 }
              }
              transition={
                isWriting
                  ? { duration: 2, repeat: Infinity, ease: "easeInOut" }
                  : { duration: 0.3 }
              }
            >
              <circle cx="30" cy="22" r="7" fill="#78C4F2" />
              <circle cx="30" cy="22" r="4" fill="#1E293B" />
              <circle cx="32" cy="20" r="1.8" fill="white" opacity="0.8" />
            </motion.g>

            {/* Right iris */}
            <motion.g
              animate={
                isWriting
                  ? { x: [-3, 3, -2, 3, -3], y: [1, 0, 1, 0, 1] }
                  : isDone || isSent
                    ? { x: 0, y: -1 }
                    : { x: 0, y: 0 }
              }
              transition={
                isWriting
                  ? { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.05 }
                  : { duration: 0.3 }
              }
            >
              <circle cx="60" cy="22" r="7" fill="#78C4F2" />
              <circle cx="60" cy="22" r="4" fill="#1E293B" />
              <circle cx="62" cy="20" r="1.8" fill="white" opacity="0.8" />
            </motion.g>

            {/* Happy brows when done */}
            {(isDone || isSent) && (
              <>
                <motion.line x1="20" y1="8" x2="28" y2="6" stroke="#78350F" strokeWidth="2" strokeLinecap="round"
                  initial={{ opacity: 0, y: 3 }} animate={{ opacity: 1, y: 0 }} />
                <motion.line x1="62" y1="6" x2="70" y2="8" stroke="#78350F" strokeWidth="2" strokeLinecap="round"
                  initial={{ opacity: 0, y: 3 }} animate={{ opacity: 1, y: 0 }} />
              </>
            )}

            {/* ── NECK ── */}
            <rect x="39" y="36" width="12" height="6" rx="2" fill="#D97706" />

            {/* ── BODY ── */}
            <rect x="18" y="42" width="54" height="38" rx="10" fill="url(#bodyGrad)" stroke="#B45309" strokeWidth="1.5" />
            {/* Inner plate */}
            <rect x="24" y="48" width="42" height="26" rx="6" fill="#F59E0B" opacity="0.3" />
            {/* Elvatix logo on chest */}
            <circle cx="45" cy="61" r="10" fill="#84CC16" />
            <circle cx="45" cy="57" r="3" fill="white" />
            <path d="M39 67c0-3.3 2.7-6 6-6s6 2.7 6 6" fill="white" />

            {/* Warm smile when done/sent */}
            {(isDone || isSent) && (
              <motion.path
                d="M36 78 Q45 83 54 78"
                stroke="#78350F"
                strokeWidth="1.5"
                strokeLinecap="round"
                fill="none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              />
            )}

            {/* ── LEFT ARM (WRITING ARM) ──
                 This arm reaches LEFT toward the letter.
                 It's the key visual: arm ON the paper while writing. */}
            <motion.g
              style={{ originX: "18px", originY: "55px" }}
              animate={
                isWriting
                  ? { rotate: [0, -5, 3, -3, 5, 0], transition: { duration: 0.8, repeat: Infinity, ease: "easeInOut" } }
                  : isDone
                    ? { rotate: 20, transition: { duration: 0.3, type: "spring" } }
                    : isPickup
                      ? { rotate: 40, transition: { duration: 0.3 } }
                      : { rotate: 15 }
              }
            >
              {/* Upper arm */}
              <rect x="2" y="50" width="18" height="5" rx="2.5" fill="#D97706" />
              {/* Forearm — angles down to the paper */}
              <rect x="-2" y="53" width="8" height="5" rx="2.5" fill="#B45309" transform="rotate(-25 2 53)" />
              {/* Hand/gripper */}
              <circle cx="0" cy="58" r="3.5" fill="#D97706" stroke="#B45309" strokeWidth="1" />
              {/* Pen while writing */}
              {isWriting && (
                <motion.rect
                  x="-3" y="59" width="2" height="10" rx="1" fill="#64748B"
                  animate={{ rotate: [-5, 5, -5] }}
                  transition={{ duration: 0.4, repeat: Infinity }}
                />
              )}
            </motion.g>

            {/* ── RIGHT ARM ── */}
            <motion.g
              style={{ originX: "72px", originY: "55px" }}
              animate={
                isDone || isSent
                  ? { rotate: [-15], transition: { duration: 0.3 } }
                  : isPickup
                    ? { rotate: [-30] }
                    : { rotate: [-5] }
              }
            >
              <rect x="70" y="50" width="18" height="5" rx="2.5" fill="#D97706" />
              <circle cx="90" cy="53" r="3.5" fill="#D97706" stroke="#B45309" strokeWidth="1" />
            </motion.g>

            {/* ── TRACKS/WHEELS ── */}
            <motion.g
              animate={
                isDeliver
                  ? { rotate: [0, 5, -5, 0], transition: { duration: 0.3, repeat: 3 } }
                  : {}
              }
            >
              <rect x="18" y="82" width="22" height="10" rx="5" fill="#6B7280" stroke="#4B5563" strokeWidth="1" />
              <rect x="50" y="82" width="22" height="10" rx="5" fill="#6B7280" stroke="#4B5563" strokeWidth="1" />
              {/* Track details */}
              <circle cx="24" cy="87" r="1.5" fill="#9CA3AF" />
              <circle cx="29" cy="87" r="1.5" fill="#9CA3AF" />
              <circle cx="34" cy="87" r="1.5" fill="#9CA3AF" />
              <circle cx="56" cy="87" r="1.5" fill="#9CA3AF" />
              <circle cx="61" cy="87" r="1.5" fill="#9CA3AF" />
              <circle cx="66" cy="87" r="1.5" fill="#9CA3AF" />
            </motion.g>

            {/* Gradient definitions */}
            <defs>
              <linearGradient id="bodyGrad" x1="18" y1="42" x2="72" y2="80" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FBBF24" />
                <stop offset="1" stopColor="#D97706" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      </motion.div>

      {/* ── INMAIL LETTER CARD ──────────────────── */}
      {/* Positioned LEFT of WALL-E so his arm reaches onto it */}
      <AnimatePresence>
        {!letterGone && (
          <motion.div
            className="absolute left-0 top-[16px] z-20"
            exit={{
              y: 160,
              x: 20,
              scale: 0.5,
              opacity: 0,
              transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] },
            }}
          >
            <div className="w-[230px] rounded-2xl bg-white shadow-xl border border-gray-100 p-4 relative">
              {/* Writing indicator line — simulates where WALL-E's pen is */}
              {isWriting && typed > 0 && (
                <motion.div
                  className="absolute -right-1 bg-amber-400 rounded-full"
                  style={{ width: 6, height: 6, top: `${100 + Math.min(typed, 40)}px` }}
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                />
              )}

              {/* LinkedIn header */}
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

              {/* Typed message */}
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

              {typed >= msg.text.length && (phase === "done" || phase === "pickup") && (
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

      {/* ── ENVELOPE ────────────────────────────── */}
      <div className="absolute left-3 bottom-[26px] z-10">
        <div className="relative" style={{ width: 240, height: 95 }}>
          {/* Envelope back flap — opens when letter arrives */}
          {isDeliver && (
            <motion.div
              className="absolute -top-[22px] left-0 w-full z-0"
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{ opacity: 1, scaleY: 1 }}
              transition={{ duration: 0.3 }}
              style={{ transformOrigin: "bottom" }}
            >
              <svg viewBox="0 0 240 28" width="240" height="28" fill="none">
                <polygon points="0,28 120,0 240,28" fill="#0956A0" opacity="0.25" />
              </svg>
            </motion.div>
          )}

          {/* Main envelope */}
          <svg viewBox="0 0 240 95" width="240" height="95" fill="none">
            <defs>
              <linearGradient id="envGrad" x1="0" y1="0" x2="240" y2="95" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0A66C2" />
                <stop offset="1" stopColor="#2D8FDB" />
              </linearGradient>
            </defs>
            <rect width="240" height="95" rx="14" fill="url(#envGrad)" />
            {/* Front flap */}
            <polygon points="0,32 120,95 240,32 240,95 0,95" fill="#085CA9" opacity="0.3" />
            {/* Corner detail */}
            <rect x="12" y="10" width="50" height="14" rx="6" fill="white" opacity="0.06" />
          </svg>

          {/* Letter sliding INTO envelope during deliver */}
          {isDeliver && (
            <motion.div
              className="absolute left-[20px] w-[140px] bg-white rounded-lg shadow border border-gray-200 p-2 z-10"
              initial={{ top: -50, opacity: 1 }}
              animate={{ top: 30, opacity: 0 }}
              transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="h-[3px] w-[70%] bg-gray-200 rounded-full mb-1" />
              <div className="h-[3px] w-[90%] bg-gray-100 rounded-full mb-1" />
              <div className="h-[3px] w-[50%] bg-gray-100 rounded-full" />
            </motion.div>
          )}

          {/* Sealed checkmark */}
          {isSent && (
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              initial={{ scale: 0.4, opacity: 0 }}
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

      {/* ── STATUS TEXT ──────────────────────────── */}
      <div className="absolute bottom-[4px] left-4 h-4">
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
          {isPickup && (
            <motion.p key="p" className="text-[11px] text-gray-400" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              Brief wordt opgetild...
            </motion.p>
          )}
          {isDeliver && (
            <motion.p key="dl" className="text-[11px] text-gray-400" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              In de envelop...
            </motion.p>
          )}
          {isSent && (
            <motion.p key="s" className="text-[11px] text-emerald-600 font-medium" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              ✓ Verzonden naar {msg.to}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* ── DOTS ────────────────────────────────── */}
      <div className="absolute bottom-[6px] right-4 flex gap-1.5">
        {MESSAGES.map((_, i) => (
          <div key={i} className={`w-[6px] h-[6px] rounded-full transition-all duration-300 ${i === msgIdx ? "bg-[#0A66C2]" : "bg-gray-300"}`} />
        ))}
      </div>
    </div>
  );
}
