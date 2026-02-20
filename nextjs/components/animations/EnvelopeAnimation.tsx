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
  const progress = msg.text.length > 0 ? typed / msg.text.length : 0;

  useEffect(() => {
    cancelled.current = false;
    const wait = (ms: number) =>
      new Promise<void>((res) => {
        setTimeout(() => { if (!cancelled.current) res(); }, ms);
      });

    const run = async () => {
      setPhase("writing");
      setTyped(0);
      await wait(500);
      const text = MESSAGES[msgIdx].text;
      
      await new Promise<void>((resolve) => {
        const duration = text.length * 30; // 30ms per char
        let start = performance.now();
        let frame: number;
        
        const step = (now: number) => {
          if (cancelled.current) {
            cancelAnimationFrame(frame);
            resolve();
            return;
          }
          const elapsed = now - start;
          const newTyped = Math.min(text.length, Math.floor((elapsed / duration) * text.length));
          
          setTyped(prev => {
             if (prev !== newTyped) return newTyped;
             return prev;
          });

          if (newTyped < text.length) {
            frame = requestAnimationFrame(step);
          } else {
            resolve();
          }
        };
        frame = requestAnimationFrame(step);
      });
      
      if (cancelled.current) return;

      // Done — longer pause so status text is readable
      setPhase("done");
      await wait(1200);
      if (cancelled.current) return;

      // Pickup
      setPhase("pickup");
      await wait(1000);
      if (cancelled.current) return;

      // Deliver — slow, so you see the letter enter the envelope
      setPhase("deliver");
      await wait(2000);
      if (cancelled.current) return;

      // Sent — celebrate
      setPhase("sent");
      await wait(2500);
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
  const armAngle = isWriting ? -10 + progress * 20 : 0;

  return (
    <div className="relative w-[380px] h-[420px] select-none" aria-hidden="true">

      {/* ═══════ WALL-E CHARACTER ═══════ */}
      <motion.div
        className="absolute z-30"
        style={{ right: 10, top: 12 }}
        animate={
          isPickup
            ? { x: -30, y: 5, transition: { duration: 0.4, type: "spring", stiffness: 200 } }
            : isDeliver
              ? { x: -30, y: 100, transition: { duration: 1.2, ease: [0.4, 0, 0.2, 1] } }
              : isSent
                ? { x: -30, y: 100 }
                : { x: 0, y: 0 }
        }
      >
        {/* Body tilt */}
        <motion.div
          animate={
            isWriting ? { rotate: -8 }
              : isDone ? { rotate: [0, -3, 3, 0] }
              : isPickup ? { rotate: -12 }
              : isSent ? { rotate: [0, -5, 5, -5, 5, 0] }
              : { rotate: 0 }
          }
          transition={
            isWriting ? { duration: 0.5 }
              : isDone ? { duration: 0.6 }
              : isSent ? { duration: 0.5 }
              : { duration: 0.3 }
          }
          style={{ transformOrigin: "center bottom" }}
        >
          {/* Bob */}
          <motion.div
            animate={
              isSent ? { y: [0, -12, 0, -8, 0] }
                : isWriting ? { y: [0, -1, 0] }
                : { y: [0, -3, 0] }
            }
            transition={
              isSent ? { duration: 0.6, ease: "easeOut" }
                : { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }
          >
            {/* LEFT ARM */}
            <motion.div
              className="absolute z-40"
              style={{ left: -32, top: 54, transformOrigin: "right center" }}
              animate={
                isWriting ? { rotate: armAngle, x: -5 + progress * 8, y: 2 + progress * 6 }
                  : isDone ? { rotate: 25, x: 0, y: -5 }
                  : isPickup ? { rotate: -20, x: -15, y: 10 }
                  : isDeliver ? { rotate: -25, x: -10, y: 5 }
                  : isSent ? { rotate: [-40, -50, -40] }
                  : { rotate: 15, x: 0, y: 0 }
              }
              transition={
                isWriting ? { duration: 0.15, ease: "linear" }
                  : isSent ? { duration: 0.4, repeat: 2 }
                  : { duration: 0.3, type: "spring" }
              }
            >
              <div className="flex items-center">
                <div className="w-[24px] h-[6px] bg-[#D97706] rounded-full shadow-sm" />
                <div className="w-[12px] h-[5px] bg-[#B45309] rounded-full -ml-[3px]" />
                <div className="w-[9px] h-[9px] bg-[#D97706] rounded-full border border-[#B45309] -ml-[2px] shadow-sm" />
              </div>
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

            {/* RIGHT ARM */}
            <motion.div
              className="absolute z-40"
              style={{ right: -20, top: 54, transformOrigin: "left center" }}
              animate={
                isDone ? { rotate: -15 }
                  : isPickup ? { rotate: 20, x: 10, y: 10 }
                  : isDeliver ? { rotate: 25, x: 5, y: 5 }
                  : isSent ? { rotate: [40, 50, 40] }
                  : { rotate: -5 }
              }
              transition={
                isSent ? { duration: 0.4, repeat: 2 }
                  : { duration: 0.3, type: "spring" }
              }
            >
              <div className="flex items-center">
                <div className="w-[16px] h-[5px] bg-[#D97706] rounded-full shadow-sm" />
                <div className="w-[8px] h-[8px] bg-[#D97706] rounded-full border border-[#B45309] -ml-[2px] shadow-sm" />
              </div>
            </motion.div>

            {/* HEAD */}
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
                  animate={
                    isWriting ? { x: -3 + progress * 2, y: 3 }
                      : isDone ? { x: 0, y: -2 }
                      : isPickup ? { x: -2, y: 4 }
                      : isSent ? { x: 0, y: -3 }
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

              <div className="w-[6px] h-[10px] bg-[#9CA3AF] rounded-sm -mx-[1px] z-20" />

              {/* Right eye */}
              <div className="w-[30px] h-[30px] rounded-full bg-[#E5E7EB] border-[2px] border-[#9CA3AF] flex items-center justify-center shadow-sm relative z-10 overflow-hidden">
                <motion.div
                  animate={
                    isWriting ? { x: -3 + progress * 2, y: 3 }
                      : isDone ? { x: 0, y: -2 }
                      : isPickup ? { x: -2, y: 4 }
                      : isSent ? { x: 0, y: -3 }
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

            {/* Happy squint */}
            {(isDone || isSent) && (
              <>
                <motion.div className="absolute top-[2px] left-[7px] w-[22px] h-[5px] bg-[#D1D5DB] rounded-b-full z-30"
                  initial={{ scaleY: 0 }} animate={{ scaleY: 0.6 }} style={{ transformOrigin: "top" }} />
                <motion.div className="absolute top-[2px] right-[7px] w-[22px] h-[5px] bg-[#D1D5DB] rounded-b-full z-30"
                  initial={{ scaleY: 0 }} animate={{ scaleY: 0.6 }} transition={{ delay: 0.05 }} style={{ transformOrigin: "top" }} />
              </>
            )}

            {/* Focus blink */}
            {isWriting && (
              <>
                <motion.div className="absolute top-[2px] left-[3px] w-[28px] h-[8px] bg-[#D1D5DB] rounded-b-full z-30"
                  initial={{ scaleY: 0 }} animate={{ scaleY: [0, 0.3, 0] }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }} style={{ transformOrigin: "top" }} />
                <motion.div className="absolute top-[2px] right-[3px] w-[28px] h-[8px] bg-[#D1D5DB] rounded-b-full z-30"
                  initial={{ scaleY: 0 }} animate={{ scaleY: [0, 0.3, 0] }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 2, delay: 0.05 }} style={{ transformOrigin: "top" }} />
              </>
            )}

            {/* NECK */}
            <div className="w-[10px] h-[4px] bg-[#D97706] mx-auto" />

            {/* BODY */}
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

            {/* TRACKS */}
            <div className="flex justify-center gap-[2px] mt-[2px]">
              <motion.div className="w-[20px] h-[9px] bg-[#6B7280] rounded-[4px] border border-[#4B5563] relative overflow-hidden"
                animate={isDeliver ? { rotate: [0, 3, -3, 0] } : {}}
                transition={{ duration: 0.2, repeat: isDeliver ? 6 : 0 }}
              >
                <motion.div className="absolute inset-0 flex items-center justify-center gap-[2px]"
                  animate={isDeliver ? { x: [0, -3, 0] } : {}}
                  transition={{ duration: 0.15, repeat: isDeliver ? 8 : 0 }}
                >
                  <div className="w-[3px] h-[3px] rounded-full bg-[#9CA3AF]" />
                  <div className="w-[3px] h-[3px] rounded-full bg-[#9CA3AF]" />
                  <div className="w-[3px] h-[3px] rounded-full bg-[#9CA3AF]" />
                </motion.div>
              </motion.div>
              <motion.div className="w-[20px] h-[9px] bg-[#6B7280] rounded-[4px] border border-[#4B5563] relative overflow-hidden"
                animate={isDeliver ? { rotate: [0, -3, 3, 0] } : {}}
                transition={{ duration: 0.2, repeat: isDeliver ? 6 : 0, delay: 0.05 }}
              >
                <motion.div className="absolute inset-0 flex items-center justify-center gap-[2px]"
                  animate={isDeliver ? { x: [0, -3, 0] } : {}}
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

      {/* ═══════ INMAIL LETTER ═══════ */}
      {/* During writing/done: full card visible next to WALL-E */}
      {/* During pickup: lifts and tilts */}
      {/* During deliver: shrinks, rotates, slides INTO the envelope from top */}
      <AnimatePresence>
        {!isSent && (
          <motion.div
            className="absolute left-0 top-[10px] z-20"
            animate={
              isPickup
                ? {
                    y: -8,
                    rotate: -5,
                    scale: 0.97,
                    transition: { duration: 0.4, type: "spring", stiffness: 200 },
                  }
                : isDeliver
                  ? {
                      // Letter moves to be ABOVE the envelope, then slides IN
                      y: 175,
                      x: 25,
                      rotate: -8,
                      scale: 0.52,
                      transition: { duration: 1.5, ease: [0.3, 0, 0.2, 1] },
                    }
                  : { y: 0, rotate: 0, scale: 1 }
            }
            exit={{
              y: 210,
              x: 25,
              rotate: -5,
              scale: 0.45,
              opacity: 0,
              transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
            }}
          >
            <div className="w-[240px] rounded-2xl bg-white shadow-xl border border-gray-100 p-4 relative overflow-hidden">
              {/* Writing glow line */}
              {isWriting && typed > 3 && (
                <motion.div
                  className="absolute left-3 right-3 h-[2px] rounded-full bg-[#FBBF24]"
                  style={{ top: 92 + progress * 45 }}
                  animate={{ opacity: [0.2, 0.6, 0.2] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                />
              )}

              {/* Grab indicators */}
              {isPickup && (
                <>
                  <motion.div className="absolute -right-1 top-1/2 w-[6px] h-[14px] bg-[#D97706] rounded-l-full"
                    initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.2 }} />
                  <motion.div className="absolute -left-1 top-1/2 w-[6px] h-[14px] bg-[#D97706] rounded-r-full"
                    initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.2, delay: 0.1 }} />
                </>
              )}

              {/* LinkedIn header — "InMail" with correct casing */}
              <div className="flex items-center gap-2 mb-2">
                <div className="w-5 h-5 rounded bg-[#0A66C2] flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-[8px] font-bold">in</span>
                </div>
                <span className="text-[11px] text-gray-500 font-semibold normal-case" style={{ textTransform: "none" }}>InMail</span>
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

      {/* ═══════ ENVELOPE ═══════ */}
      {/* The envelope has a TOP FLAP that opens, and the letter slides in from above */}
      <div className="absolute left-2 bottom-[32px]">
        <div className="relative" style={{ width: 270, height: 120 }}>

          {/* ─── Back of the envelope (behind everything) ─── */}
          <svg className="absolute top-0 left-0 z-10" viewBox="0 0 270 120" width="270" height="120" fill="none">
            <rect width="270" height="120" rx="14" fill="#0A66C2" />
            <rect width="270" height="120" rx="14" fill="#1A7AD9" opacity="0.3" />
          </svg>

          {/* ─── Front of envelope (covers the letter as it enters) ─── */}
          <svg className="absolute top-0 left-0 z-30" viewBox="0 0 270 120" width="270" height="120" fill="none">
            {/* Front V-flap (points up to create the pocket opening) */}
            <polygon points="0,40 135,120 270,40 270,120 0,120" fill="#085CA9" opacity="0.35" />
            {/* Decorative lines */}
            <rect x="16" y="56" width="45" height="4" rx="2" fill="white" opacity="0.06" />
            <rect x="16" y="64" width="28" height="3" rx="1.5" fill="white" opacity="0.04" />
          </svg>

          {/* ─── Top flap — opens during deliver ─── */}
          <AnimatePresence>
            {(isDeliver || isSent) && (
              <motion.div
                className="absolute -top-[28px] left-0 w-full z-40"
                initial={{ scaleY: 0, opacity: 0 }}
                animate={
                  isDeliver
                    ? { scaleY: 1, opacity: 1, transition: { duration: 0.4 } }
                    : { scaleY: 0.2, opacity: 0.6, transition: { duration: 0.5 } }
                }
                exit={{ scaleY: 0, opacity: 0, transition: { duration: 0.3 } }}
                style={{ transformOrigin: "bottom center" }}
              >
                <svg viewBox="0 0 270 32" width="270" height="32" fill="none">
                  <polygon points="0,32 135,0 270,32" fill="#0956A0" opacity="0.35" />
                </svg>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ─── Seal checkmark ─── */}
          {isSent && (
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50"
              initial={{ scale: 0, rotate: -90, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
            >
              <div className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0A66C2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* ═══════ STATUS TEXT ═══════ */}
      {/* Slower transitions, each text stays visible longer */}
      <div className="absolute bottom-[8px] left-4 h-5">
        <AnimatePresence mode="wait">
          {isWriting && (
            <motion.p key="w" className="text-[12px] text-gray-400"
              initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.4 }}>
              Elvatix schrijft een bericht...
            </motion.p>
          )}
          {isDone && (
            <motion.p key="d" className="text-[12px] text-gray-600 font-medium"
              initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.4 }}>
              ✓ Bericht klaar!
            </motion.p>
          )}
          {isPickup && (
            <motion.p key="p" className="text-[12px] text-gray-400"
              initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.4 }}>
              Brief wordt opgetild...
            </motion.p>
          )}
          {isDeliver && (
            <motion.p key="dl" className="text-[12px] text-gray-400"
              initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.4 }}>
              Wordt in de envelop gedaan...
            </motion.p>
          )}
          {isSent && (
            <motion.p key="s" className="text-[12px] text-emerald-600 font-medium"
              initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.4 }}>
              ✓ Verzonden naar {msg.to}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      <div className="absolute bottom-[10px] right-4 flex gap-1.5">
        {MESSAGES.map((_, i) => (
          <div key={i} className={`w-[6px] h-[6px] rounded-full transition-all duration-300 ${i === msgIdx ? "bg-[#0A66C2] scale-125" : "bg-gray-300"}`} />
        ))}
      </div>
    </div>
  );
}
