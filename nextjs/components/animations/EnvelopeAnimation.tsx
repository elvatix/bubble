"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState, useMemo } from "react";

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

  // How far through the text we are (0 → 1)
  const progress = msg.text.length > 0 ? typed / msg.text.length : 0;

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
      await wait(500);
      const text = MESSAGES[msgIdx].text;
      for (let i = 0; i <= text.length; i++) {
        if (cancelled.current) return;
        setTyped(i);
        await wait(30);
      }
      if (cancelled.current) return;

      // 2. Done — satisfied pause
      setPhase("done");
      await wait(800);
      if (cancelled.current) return;

      // 3. Pickup — grabs the letter
      setPhase("pickup");
      await wait(700);
      if (cancelled.current) return;

      // 4. Deliver — carries letter to envelope
      setPhase("deliver");
      await wait(1200);
      if (cancelled.current) return;

      // 5. Sent — celebrate
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

  // WALL-E arm angle tracks typing progress
  const armAngle = isWriting ? -10 + progress * 20 : 0;

  return (
    <div className="relative w-[380px] h-[400px] select-none" aria-hidden="true">

      {/* ═══════════════════════════════════════════════════
          INTERACTIVE WALL-E ANIMATION
          
          Writing: WALL-E leans over the letter, arm moves
                   along the paper, eyes track the text
          Done:    Sits up, looks pleased, nods
          Pickup:  Reaches forward, grabs letter with both arms
          Deliver: Carries letter down to envelope, pushes it in
          Sent:    Jumps up, celebrates!
         ═══════════════════════════════════════════════════ */}

      {/* ── WALL-E + LETTER CONTAINER ────────────────────
           During pickup+deliver, letter moves WITH WALL-E */}
      <motion.div
        className="absolute inset-0 z-20"
        animate={
          isDeliver
            ? { y: 120, transition: { duration: 1, ease: [0.4, 0, 0.2, 1] } }
            : isSent
              ? { y: 120 }
              : { y: 0 }
        }
      >
        {/* ── WALL-E CHARACTER ───────────────────────── */}
        <motion.div
          className="absolute z-30"
          style={{ right: 10, top: 12 }}
          animate={
            isPickup
              ? { x: -30, y: 5, transition: { duration: 0.4, type: "spring", stiffness: 200 } }
              : isDeliver || isSent
                ? { x: -30, y: 5 }
                : { x: 0, y: 0 }
          }
        >
          {/* Body tilt — leans toward letter while writing */}
          <motion.div
            animate={
              isWriting
                ? { rotate: -8 }
                : isDone
                  ? { rotate: [0, -3, 3, 0] }
                  : isPickup
                    ? { rotate: -12 }
                    : isSent
                      ? { rotate: [0, -5, 5, -5, 5, 0] }
                      : { rotate: 0 }
            }
            transition={
              isWriting
                ? { duration: 0.5 }
                : isDone
                  ? { duration: 0.6, ease: "easeInOut" }
                  : isSent
                    ? { duration: 0.5, ease: "easeInOut" }
                    : { duration: 0.3 }
            }
            style={{ transformOrigin: "center bottom" }}
          >
            {/* Breathing bob */}
            <motion.div
              animate={
                isSent
                  ? { y: [0, -12, 0, -8, 0] }
                  : isWriting
                    ? { y: [0, -1, 0] }
                    : { y: [0, -3, 0] }
              }
              transition={
                isSent
                  ? { duration: 0.6, ease: "easeOut" }
                  : { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }
            >

              {/* ▸ LEFT ARM — reaches onto the letter while writing */}
              <motion.div
                className="absolute z-40"
                style={{ left: -32, top: 54, transformOrigin: "right center" }}
                animate={
                  isWriting
                    ? { rotate: armAngle, x: -5 + progress * 8, y: 2 + progress * 6 }
                    : isDone
                      ? { rotate: 25, x: 0, y: -5 }
                      : isPickup
                        ? { rotate: -20, x: -15, y: 10 }
                        : isDeliver
                          ? { rotate: -25, x: -10, y: 5 }
                          : isSent
                            ? { rotate: [-40, -50, -40] }
                            : { rotate: 15, x: 0, y: 0 }
                }
                transition={
                  isWriting
                    ? { duration: 0.15, ease: "linear" }
                    : isSent
                      ? { duration: 0.4, repeat: 2, ease: "easeInOut" }
                      : { duration: 0.3, type: "spring" }
                }
              >
                <div className="flex items-center">
                  <div className="w-[24px] h-[6px] bg-[#D97706] rounded-full shadow-sm" />
                  <div className="w-[12px] h-[5px] bg-[#B45309] rounded-full -ml-[3px]" />
                  <div className="w-[9px] h-[9px] bg-[#D97706] rounded-full border border-[#B45309] -ml-[2px] shadow-sm" />
                </div>
                {/* Pen — wobbles while writing */}
                {isWriting && (
                  <motion.div
                    className="absolute right-[1px] top-[7px]"
                    animate={{ rotate: [-12, 12, -12] }}
                    transition={{ duration: 0.3, repeat: Infinity }}
                  >
                    <div className="w-[2.5px] h-[16px] bg-[#475569] rounded-sm" />
                    <div className="w-[4px] h-[3px] bg-[#1E293B] rounded-b-sm -mt-[1px] ml-[-0.75px]" />
                  </motion.div>
                )}
              </motion.div>

              {/* ▸ RIGHT ARM */}
              <motion.div
                className="absolute z-40"
                style={{ right: -20, top: 54, transformOrigin: "left center" }}
                animate={
                  isDone
                    ? { rotate: -15 }
                    : isPickup
                      ? { rotate: 20, x: 10, y: 10 }
                    : isDeliver
                      ? { rotate: 25, x: 5, y: 5 }
                    : isSent
                      ? { rotate: [40, 50, 40] }
                    : { rotate: -5 }
                }
                transition={
                  isSent
                    ? { duration: 0.4, repeat: 2, ease: "easeInOut" }
                    : { duration: 0.3, type: "spring" }
                }
              >
                <div className="flex items-center">
                  <div className="w-[16px] h-[5px] bg-[#D97706] rounded-full shadow-sm" />
                  <div className="w-[8px] h-[8px] bg-[#D97706] rounded-full border border-[#B45309] -ml-[2px] shadow-sm" />
                </div>
              </motion.div>

              {/* ▸ HEAD — binocular eyes */}
              <div className="flex items-center justify-center relative mb-[2px]">
                {/* Antenna */}
                <div className="absolute -top-[10px] left-1/2 -translate-x-1/2 w-[2px] h-[8px] bg-[#9CA3AF]" />
                <motion.div
                  className="absolute -top-[14px] left-1/2 -translate-x-1/2 w-[5px] h-[5px] rounded-full bg-[#60B5F5]"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />

                {/* Left eye */}
                <div className="w-[30px] h-[30px] rounded-full bg-[#E5E7EB] border-[2px] border-[#9CA3AF] flex items-center justify-center shadow-sm relative z-10 overflow-hidden">
                  <motion.div
                    className="relative"
                    animate={
                      isWriting
                        ? { x: -3 + progress * 2, y: 3 }
                        : isDone
                          ? { x: 0, y: -2 }
                          : isPickup
                            ? { x: -2, y: 4 }
                          : isSent
                            ? { x: 0, y: -3 }
                          : { x: 0, y: 0 }
                    }
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-[13px] h-[13px] rounded-full bg-[#60B5F5] relative">
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[7px] h-[7px] rounded-full bg-[#1E293B]" />
                      <div className="absolute top-[2px] right-[2px] w-[3px] h-[3px] rounded-full bg-white opacity-80" />
                    </div>
                  </motion.div>
                </div>

                {/* Bridge */}
                <div className="w-[6px] h-[10px] bg-[#9CA3AF] rounded-sm -mx-[1px] z-20" />

                {/* Right eye */}
                <div className="w-[30px] h-[30px] rounded-full bg-[#E5E7EB] border-[2px] border-[#9CA3AF] flex items-center justify-center shadow-sm relative z-10 overflow-hidden">
                  <motion.div
                    className="relative"
                    animate={
                      isWriting
                        ? { x: -3 + progress * 2, y: 3 }
                        : isDone
                          ? { x: 0, y: -2 }
                          : isPickup
                            ? { x: -2, y: 4 }
                          : isSent
                            ? { x: 0, y: -3 }
                          : { x: 0, y: 0 }
                    }
                    transition={{ duration: 0.2, delay: 0.03 }}
                  >
                    <div className="w-[13px] h-[13px] rounded-full bg-[#60B5F5] relative">
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[7px] h-[7px] rounded-full bg-[#1E293B]" />
                      <div className="absolute top-[2px] right-[2px] w-[3px] h-[3px] rounded-full bg-white opacity-80" />
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Eyelids — squint while focusing on writing */}
              {isWriting && (
                <>
                  <motion.div
                    className="absolute top-[2px] left-[3px] w-[28px] h-[8px] bg-[#D1D5DB] rounded-b-full z-30"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: [0, 0.3, 0] }}
                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                    style={{ transformOrigin: "top" }}
                  />
                  <motion.div
                    className="absolute top-[2px] right-[3px] w-[28px] h-[8px] bg-[#D1D5DB] rounded-b-full z-30"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: [0, 0.3, 0] }}
                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 2, delay: 0.05 }}
                    style={{ transformOrigin: "top" }}
                  />
                </>
              )}

              {/* Happy eyes when done/sent */}
              {(isDone || isSent) && (
                <>
                  <motion.div
                    className="absolute top-[2px] left-[7px] w-[22px] h-[5px] bg-[#D1D5DB] rounded-b-full z-30"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 0.6 }}
                    transition={{ duration: 0.2 }}
                    style={{ transformOrigin: "top" }}
                  />
                  <motion.div
                    className="absolute top-[2px] right-[7px] w-[22px] h-[5px] bg-[#D1D5DB] rounded-b-full z-30"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 0.6 }}
                    transition={{ duration: 0.2, delay: 0.05 }}
                    style={{ transformOrigin: "top" }}
                  />
                </>
              )}

              {/* ▸ NECK */}
              <div className="w-[10px] h-[4px] bg-[#D97706] mx-auto" />

              {/* ▸ BODY */}
              <div className="w-[52px] h-[36px] rounded-xl bg-gradient-to-b from-[#FBBF24] to-[#D97706] mx-auto border border-[#B45309] shadow-md relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[18px] h-[18px] rounded-full bg-[#84CC16] flex items-center justify-center shadow-inner">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                      <circle cx="12" cy="8" r="3.5" />
                      <path d="M6 21c0-3.3 2.7-6 6-6s6 2.7 6 6" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* ▸ TRACKS — spin during movement */}
              <div className="flex justify-center gap-[2px] mt-[2px]">
                <motion.div
                  className="w-[20px] h-[9px] bg-[#6B7280] rounded-[4px] border border-[#4B5563] relative overflow-hidden"
                  animate={
                    isDeliver
                      ? { rotate: [0, 3, -3, 0] }
                      : {}
                  }
                  transition={{ duration: 0.2, repeat: isDeliver ? 6 : 0 }}
                >
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center gap-[2px]"
                    animate={
                      isDeliver
                        ? { x: [0, -3, 0] }
                        : {}
                    }
                    transition={{ duration: 0.15, repeat: isDeliver ? 8 : 0 }}
                  >
                    <div className="w-[3px] h-[3px] rounded-full bg-[#9CA3AF]" />
                    <div className="w-[3px] h-[3px] rounded-full bg-[#9CA3AF]" />
                    <div className="w-[3px] h-[3px] rounded-full bg-[#9CA3AF]" />
                  </motion.div>
                </motion.div>
                <motion.div
                  className="w-[20px] h-[9px] bg-[#6B7280] rounded-[4px] border border-[#4B5563] relative overflow-hidden"
                  animate={
                    isDeliver
                      ? { rotate: [0, -3, 3, 0] }
                      : {}
                  }
                  transition={{ duration: 0.2, repeat: isDeliver ? 6 : 0, delay: 0.05 }}
                >
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center gap-[2px]"
                    animate={
                      isDeliver
                        ? { x: [0, -3, 0] }
                        : {}
                    }
                    transition={{ duration: 0.15, repeat: isDeliver ? 8 : 0 }}
                  >
                    <div className="w-[3px] h-[3px] rounded-full bg-[#9CA3AF]" />
                    <div className="w-[3px] h-[3px] rounded-full bg-[#9CA3AF]" />
                    <div className="w-[3px] h-[3px] rounded-full bg-[#9CA3AF]" />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* ── INMAIL LETTER ──────────────────────────── */}
        <AnimatePresence>
          {phase !== "deliver" && phase !== "sent" && (
            <motion.div
              className="absolute left-0 top-[10px] z-20"
              animate={
                isPickup
                  ? {
                      y: -8,
                      rotate: -3,
                      scale: 0.97,
                      transition: { duration: 0.4, type: "spring", stiffness: 200 },
                    }
                  : { y: 0, rotate: 0, scale: 1 }
              }
              exit={{
                y: 140,
                x: 15,
                scale: 0.35,
                rotate: -5,
                opacity: 0,
                transition: { duration: 0.9, ease: [0.4, 0, 0.2, 1] },
              }}
            >
              <div className="w-[240px] rounded-2xl bg-white shadow-xl border border-gray-100 p-4 relative overflow-hidden">
                {/* Writing line glow — moves down as text progresses */}
                {isWriting && typed > 3 && (
                  <motion.div
                    className="absolute left-3 right-3 h-[2px] rounded-full bg-[#FBBF24]"
                    style={{ top: 92 + progress * 45 }}
                    animate={{ opacity: [0.2, 0.6, 0.2] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                  />
                )}

                {/* Pickup grab indicators */}
                {isPickup && (
                  <>
                    <motion.div
                      className="absolute -right-1 top-1/2 w-[6px] h-[14px] bg-[#D97706] rounded-l-full"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                    <motion.div
                      className="absolute -left-1 top-1/2 w-[6px] h-[14px] bg-[#D97706] rounded-r-full"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.2, delay: 0.1 }}
                    />
                  </>
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

                {typed >= msg.text.length && (isDone || isPickup) && (
                  <motion.div
                    className="mt-2 pt-2 border-t border-gray-100 text-[9px] text-gray-400 flex items-center gap-1"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="#84CC16">
                      <circle cx="12" cy="8" r="3.5" />
                      <path d="M6 21c0-3.3 2.7-6 6-6s6 2.7 6 6" />
                    </svg>
                    Geschreven door Elvatix
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* ── ENVELOPE ─────────────────────────────── */}
      <div className="absolute left-3 bottom-[28px] z-10">
        <div className="relative" style={{ width: 260, height: 100 }}>
          {/* Back flap opens when letter arrives */}
          <AnimatePresence>
            {isDeliver && (
              <motion.div
                className="absolute -top-[24px] left-0 w-full z-0"
                initial={{ opacity: 0, scaleY: 0 }}
                animate={{ opacity: 1, scaleY: 1 }}
                exit={{ opacity: 0, scaleY: 0 }}
                transition={{ duration: 0.3 }}
                style={{ transformOrigin: "bottom" }}
              >
                <svg viewBox="0 0 260 28" width="260" height="28" fill="none">
                  <polygon points="0,28 130,0 260,28" fill="#0956A0" opacity="0.3" />
                </svg>
              </motion.div>
            )}
          </AnimatePresence>

          <svg viewBox="0 0 260 100" width="260" height="100" fill="none">
            <rect width="260" height="100" rx="14" fill="#0A66C2" />
            <rect width="260" height="100" rx="14" fill="#1A7AD9" opacity="0.3" />
            <polygon points="0,35 130,100 260,35 260,100 0,100" fill="#085CA9" opacity="0.35" />
            {/* Decorative lines */}
            <rect x="16" y="12" width="50" height="4" rx="2" fill="white" opacity="0.06" />
            <rect x="16" y="20" width="30" height="3" rx="1.5" fill="white" opacity="0.04" />
          </svg>

          {/* Letter sliding INTO envelope */}
          {isDeliver && (
            <motion.div
              className="absolute left-[30px] w-[140px] bg-white rounded-lg shadow-sm border border-gray-200 p-2 z-10"
              initial={{ top: -55, opacity: 1, rotate: -3 }}
              animate={{ top: 30, opacity: 0, rotate: 0 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 0.15 }}
            >
              <div className="h-[2px] w-[65%] bg-gray-200 rounded-full mb-1" />
              <div className="h-[2px] w-[85%] bg-gray-100 rounded-full mb-1" />
              <div className="h-[2px] w-[45%] bg-gray-100 rounded-full" />
            </motion.div>
          )}

          {/* Seal with checkmark */}
          {isSent && (
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              initial={{ scale: 0, rotate: -90, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeOut", type: "spring", stiffness: 200 }}
            >
              <div className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center">
                <motion.svg
                  width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0A66C2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                >
                  <polyline points="20 6 9 17 4 12" />
                </motion.svg>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* ── STATUS ────────────────────────────────── */}
      <div className="absolute bottom-[6px] left-4 h-4">
        <AnimatePresence mode="wait">
          {isWriting && (
            <motion.p key="w" className="text-[11px] text-gray-400" initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }}>
              Elvatix schrijft een bericht...
            </motion.p>
          )}
          {isDone && (
            <motion.p key="d" className="text-[11px] text-gray-500 font-medium" initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }}>
              ✓ Bericht klaar!
            </motion.p>
          )}
          {isPickup && (
            <motion.p key="p" className="text-[11px] text-gray-400" initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }}>
              Brief wordt opgetild...
            </motion.p>
          )}
          {isDeliver && (
            <motion.p key="dl" className="text-[11px] text-gray-400" initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }}>
              In de envelop...
            </motion.p>
          )}
          {isSent && (
            <motion.p key="s" className="text-[11px] text-emerald-600 font-medium" initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }}>
              ✓ Verzonden naar {msg.to}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      <div className="absolute bottom-[8px] right-4 flex gap-1.5">
        {MESSAGES.map((_, i) => (
          <div key={i} className={`w-[6px] h-[6px] rounded-full transition-all duration-300 ${i === msgIdx ? "bg-[#0A66C2] scale-125" : "bg-gray-300"}`} />
        ))}
      </div>
    </div>
  );
}
