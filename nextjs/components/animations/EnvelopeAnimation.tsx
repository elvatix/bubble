"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useCallback } from "react";

/* ─── 3 rotating messages ─── */
const MESSAGES = [
  { to: "Jan Jansen", role: "Senior Developer", text: "Hoi Jan! Je ervaring bij Google viel me op. We zoeken iemand met jouw skills voor een gave rol..." },
  { to: "Lisa de Vries", role: "Product Manager", text: "Hi Lisa! Je achtergrond in B2B SaaS is precies wat we zoeken. Zullen we even sparren?" },
  { to: "Thomas Bakker", role: "Data Engineer", text: "Hey Thomas! Je werk met Python en Spark sluit perfect aan bij wat we aan het bouwen zijn..." },
];

/* ─── Elvatix "E" logo (green circle from brand) ─── */
function ElvatixLogo({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="16" fill="#84CC16" />
      <circle cx="16" cy="10" r="4" fill="white" />
      <path d="M8 26c0-4.4 3.6-8 8-8s8 3.6 8 8" fill="white" />
    </svg>
  );
}

/* ─── Sparkle component ─── */
function Sparkle({ delay = 0, x = 0, y = 0 }: { delay?: number; x?: number; y?: number }) {
  return (
    <motion.div
      className="absolute text-yellow-400 text-sm"
      style={{ left: x, top: y }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: [0, 1.2, 0], opacity: [0, 1, 0], rotate: [0, 180] }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      ✦
    </motion.div>
  );
}

/* ─── Animation phases ─── */
type Phase = "enter" | "writing" | "happy" | "pickup" | "deliver" | "celebrate";

export default function EnvelopeAnimation() {
  const [phase, setPhase] = useState<Phase>("enter");
  const [msgIndex, setMsgIndex] = useState(0);
  const [typedChars, setTypedChars] = useState(0);
  const msg = MESSAGES[msgIndex];

  const runSequence = useCallback(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    const t = (fn: () => void, ms: number) => {
      timers.push(setTimeout(fn, ms));
    };

    // Phase 1: WALL-E enters
    setPhase("enter");
    setTypedChars(0);

    // Phase 2: Start writing after rolling in
    t(() => setPhase("writing"), 800);

    // Phase 2b: Type characters one by one
    const text = MESSAGES[msgIndex].text;
    for (let i = 0; i <= text.length; i++) {
      t(() => setTypedChars(i), 800 + i * 35);
    }
    const writingEnd = 800 + text.length * 35;

    // Phase 3: Happy bounce!
    t(() => setPhase("happy"), writingEnd + 200);

    // Phase 4: Pick up letter
    t(() => setPhase("pickup"), writingEnd + 1200);

    // Phase 5: Deliver to mailbox
    t(() => setPhase("deliver"), writingEnd + 2000);

    // Phase 6: Celebrate
    t(() => setPhase("celebrate"), writingEnd + 2800);

    // Next message
    t(() => {
      setMsgIndex((i) => (i + 1) % MESSAGES.length);
    }, writingEnd + 4500);

    return () => timers.forEach(clearTimeout);
  }, [msgIndex]);

  useEffect(() => {
    const cleanup = runSequence();
    return cleanup;
  }, [runSequence]);

  return (
    <div className="relative w-[320px] h-[340px] select-none" aria-hidden="true">

      {/* ══════════════════════════ WALL-E CHARACTER ══════════════════════════ */}
      <motion.div
        className="absolute z-20"
        style={{ bottom: 100, right: 10 }}
        initial={{ x: 80, opacity: 0 }}
        animate={
          phase === "enter"
            ? { x: 0, opacity: 1, transition: { type: "spring", stiffness: 200, damping: 15 } }
            : phase === "writing"
              ? { x: 0, y: 0, rotate: 0 }
              : phase === "happy"
                ? { y: [0, -18, 0, -10, 0], transition: { duration: 0.8, ease: "easeOut" } }
                : phase === "pickup"
                  ? { x: -30, y: 0, transition: { type: "spring", stiffness: 150 } }
                  : phase === "deliver"
                    ? { x: -100, y: 10, transition: { type: "spring", stiffness: 100, damping: 12 } }
                    : phase === "celebrate"
                      ? { x: -60, y: [0, -15, 0], transition: { duration: 0.6 } }
                      : {}
        }
      >
        <div className="relative">
          {/* ── Antenna ── */}
          <div className="flex flex-col items-center mb-[-1px] relative z-10">
            <motion.div
              className="w-3 h-3 rounded-full bg-yellow-400"
              style={{ boxShadow: "0 0 10px rgba(250,204,21,0.8)" }}
              animate={
                phase === "celebrate"
                  ? { scale: [1, 1.8, 1], boxShadow: ["0 0 10px rgba(250,204,21,0.8)", "0 0 20px rgba(250,204,21,1)", "0 0 10px rgba(250,204,21,0.8)"] }
                  : { scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }
              }
              transition={{ duration: phase === "celebrate" ? 0.4 : 1.5, repeat: Infinity }}
            />
            <div className="w-[2px] h-4 bg-amber-700" />
          </div>

          {/* ── Head (Binoculars) ── */}
          <div className="flex items-center justify-center gap-[-2px] relative z-10">
            {[0, 1].map((eye) => (
              <div key={eye} className="relative">
                <div className="w-[36px] h-[36px] rounded-full bg-gradient-to-br from-slate-100 to-slate-300 border-[3px] border-slate-400 flex items-center justify-center shadow-lg">
                  {/* Iris */}
                  <motion.div
                    className="w-[16px] h-[16px] rounded-full bg-gradient-to-br from-sky-300 to-sky-600 relative"
                    style={{ boxShadow: "inset 0 2px 4px rgba(0,0,0,0.15), 0 0 8px rgba(56,189,248,0.4)" }}
                    animate={
                      phase === "writing"
                        ? { x: [-3, 3, -2, 3, -3], y: [1, 2, 1], transition: { duration: 2, repeat: Infinity } }
                        : phase === "happy" || phase === "celebrate"
                          ? { scale: [1, 1.15, 1], transition: { duration: 0.5, repeat: Infinity } }
                          : phase === "deliver"
                            ? { x: -3 }
                            : {}
                    }
                  >
                    {/* Pupil */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-slate-900" />
                    {/* Highlight */}
                    <div className="absolute top-[3px] right-[3px] w-[5px] h-[5px] rounded-full bg-white/80" />
                  </motion.div>
                </div>
                {eye === 0 && <div className="absolute -right-[3px] top-[12px] w-[6px] h-[12px] bg-slate-400 rounded-sm z-10" />}
              </div>
            ))}
          </div>

          {/* ── Happy expression (eyebrow raise) ── */}
          {(phase === "happy" || phase === "celebrate") && (
            <motion.div
              className="absolute -top-[2px] left-1/2 -translate-x-1/2 flex gap-6"
              initial={{ y: 2, opacity: 0 }}
              animate={{ y: -2, opacity: 1 }}
            >
              <div className="w-3 h-[2px] bg-amber-800 rounded-full -rotate-12" />
              <div className="w-3 h-[2px] bg-amber-800 rounded-full rotate-12" />
            </motion.div>
          )}

          {/* ── Neck ── */}
          <div className="w-4 h-2 bg-amber-600 mx-auto" />

          {/* ── Body ── */}
          <div className="w-[60px] h-[44px] rounded-xl bg-gradient-to-b from-amber-400 to-amber-600 mx-auto shadow-lg border border-amber-700 relative overflow-hidden">
            {/* Panel details */}
            <div className="absolute inset-[3px] rounded-lg border border-amber-300/30" />
            {/* Elvatix logo on chest */}
            <div className="absolute inset-0 flex items-center justify-center">
              <ElvatixLogo size={22} />
            </div>
          </div>

          {/* ── Arms ── */}
          {/* Left arm — does the writing */}
          <motion.div
            className="absolute -left-[18px] top-[64px]"
            style={{ transformOrigin: "top right" }}
            animate={
              phase === "writing"
                ? { rotate: [8, -5, 8, -8, 5, 8], transition: { duration: 1.2, repeat: Infinity, ease: "easeInOut" } }
                : phase === "happy"
                  ? { rotate: -40, y: -10, transition: { type: "spring" } }
                  : phase === "pickup"
                    ? { rotate: 30, y: 15, transition: { duration: 0.3 } }
                    : phase === "deliver"
                      ? { rotate: 20, y: 10 }
                      : phase === "celebrate"
                        ? { rotate: [-30, -50, -30], y: -10, transition: { duration: 0.4, repeat: Infinity } }
                        : { rotate: 0 }
            }
          >
            <div className="w-[3px] h-[24px] bg-gradient-to-b from-amber-600 to-amber-700 rounded-full" />
            {/* Hand */}
            <div className="w-[8px] h-[8px] bg-amber-700 rounded-full -ml-[2.5px] shadow-sm" />
            {/* Pen (only visible when writing) */}
            {phase === "writing" && (
              <motion.div
                className="w-[2px] h-[10px] bg-slate-600 rounded-full ml-0 -mt-[2px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              />
            )}
          </motion.div>

          {/* Right arm */}
          <motion.div
            className="absolute -right-[18px] top-[64px]"
            style={{ transformOrigin: "top left" }}
            animate={
              phase === "happy" || phase === "celebrate"
                ? { rotate: [40, 50, 40], y: -10, transition: { duration: 0.4, repeat: Infinity } }
                : phase === "pickup" || phase === "deliver"
                  ? { rotate: -30, y: 15 }
                  : { rotate: 0 }
            }
          >
            <div className="w-[3px] h-[24px] bg-gradient-to-b from-amber-600 to-amber-700 rounded-full" />
            <div className="w-[8px] h-[8px] bg-amber-700 rounded-full -ml-[2.5px] shadow-sm" />
          </motion.div>

          {/* ── Tracks ── */}
          <div className="flex justify-center gap-[2px] mt-[2px]">
            <motion.div
              className="w-[22px] h-[10px] bg-slate-500 rounded-[3px] border border-slate-600"
              animate={
                phase === "enter" || phase === "deliver"
                  ? { rotate: [0, 5, 0, -5, 0], transition: { duration: 0.4, repeat: 3 } }
                  : {}
              }
            >
              <div className="flex justify-center gap-[2px] mt-[2px]">
                <div className="w-[3px] h-[3px] rounded-full bg-slate-400" />
                <div className="w-[3px] h-[3px] rounded-full bg-slate-400" />
                <div className="w-[3px] h-[3px] rounded-full bg-slate-400" />
              </div>
            </motion.div>
            <motion.div
              className="w-[22px] h-[10px] bg-slate-500 rounded-[3px] border border-slate-600"
              animate={
                phase === "enter" || phase === "deliver"
                  ? { rotate: [0, -5, 0, 5, 0], transition: { duration: 0.4, repeat: 3 } }
                  : {}
              }
            >
              <div className="flex justify-center gap-[2px] mt-[2px]">
                <div className="w-[3px] h-[3px] rounded-full bg-slate-400" />
                <div className="w-[3px] h-[3px] rounded-full bg-slate-400" />
                <div className="w-[3px] h-[3px] rounded-full bg-slate-400" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Sparkles when happy/celebrating */}
        {(phase === "happy" || phase === "celebrate") && (
          <>
            <Sparkle x={-15} y={-10} delay={0} />
            <Sparkle x={70} y={-5} delay={0.15} />
            <Sparkle x={30} y={-20} delay={0.3} />
            {phase === "celebrate" && (
              <>
                <Sparkle x={-25} y={20} delay={0.1} />
                <Sparkle x={80} y={15} delay={0.25} />
              </>
            )}
          </>
        )}

        {/* Happy emoji when celebrating */}
        {phase === "celebrate" && (
          <motion.div
            className="absolute -top-8 left-1/2 -translate-x-1/2 text-lg"
            initial={{ y: 5, opacity: 0, scale: 0.5 }}
            animate={{ y: -5, opacity: 1, scale: 1 }}
            transition={{ type: "spring" }}
          >
            🎉
          </motion.div>
        )}
      </motion.div>

      {/* ══════════════════════════ LETTER CARD ══════════════════════════ */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`letter-${msgIndex}`}
          className="absolute left-0 top-[16px] z-10"
          initial={{ opacity: 0, x: -20 }}
          animate={
            phase === "enter"
              ? { opacity: 1, x: 0, transition: { delay: 0.3, duration: 0.4 } }
              : phase === "writing"
                ? { opacity: 1, x: 0 }
                : phase === "happy"
                  ? { opacity: 1, x: 0 }
                  : phase === "pickup"
                    ? { scale: 0.75, y: 20, x: 20, rotate: -5, transition: { duration: 0.5 } }
                    : phase === "deliver"
                      ? { scale: 0.5, y: 80, x: -30, rotate: 0, opacity: 0, transition: { duration: 0.6 } }
                      : { opacity: 0 }
          }
          exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.3 } }}
        >
          <div className="w-[205px] rounded-2xl bg-white shadow-xl border border-gray-100/80 p-4 backdrop-blur-sm">
            {/* LinkedIn InMail header */}
            <div className="flex items-center gap-2 mb-2">
              <div className="w-5 h-5 rounded bg-[#0A66C2] flex items-center justify-center flex-shrink-0">
                <span className="text-white text-[8px] font-bold">in</span>
              </div>
              <span className="text-[10px] text-gray-400 font-semibold tracking-wider uppercase">InMail</span>
            </div>

            {/* To field */}
            <div className="text-[10px] text-gray-500 mb-0.5">
              Aan: <span className="font-bold text-gray-800">{msg.to}</span>
            </div>
            <div className="text-[9px] text-gray-400 mb-2">{msg.role}</div>

            {/* Separator */}
            <div className="h-[1px] bg-gray-100 mb-2" />

            {/* Typed text */}
            <div className="text-[11px] text-gray-700 leading-[1.5] min-h-[52px]">
              {msg.text.slice(0, typedChars)}
              {phase === "writing" && (
                <motion.span
                  className="inline-block w-[2px] h-[13px] bg-[#0A66C2] ml-[1px] align-middle rounded-full"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.6, repeat: Infinity }}
                />
              )}
            </div>

            {/* Signature */}
            <motion.div
              className="mt-2 pt-2 border-t border-gray-50"
              animate={{ opacity: typedChars >= msg.text.length ? 1 : 0 }}
            >
              <div className="text-[9px] text-gray-400">Verzonden via Elvatix</div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* ══════════════════════════ ENVELOPE ══════════════════════════ */}
      <motion.div
        className="absolute left-[10px] bottom-[28px] z-10"
        animate={
          phase === "deliver" || phase === "celebrate"
            ? { x: -20, transition: { type: "spring", stiffness: 100 } }
            : { x: 0 }
        }
      >
        <div className="relative" style={{ width: 200, height: 85 }}>
          <svg viewBox="0 0 200 85" width="200" height="85" fill="none">
            <defs>
              <linearGradient id="envGrd" x1="0" y1="0" x2="200" y2="85" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0A66C2" />
                <stop offset="1" stopColor="#3B9FE8" />
              </linearGradient>
            </defs>
            <rect width="200" height="85" rx="12" fill="url(#envGrd)" />
            <polygon points="0,28 100,85 200,28 200,85 0,85" fill="#0D7FD4" opacity="0.4" />
            <rect x="10" y="8" width="45" height="14" rx="5" fill="white" opacity="0.08" />
          </svg>

          {/* Letter sliding into envelope */}
          {phase === "deliver" && (
            <motion.div
              className="absolute -top-[10px] left-[20px] w-[120px] h-[60px] bg-white rounded-lg shadow border border-gray-200"
              initial={{ y: -30, opacity: 1 }}
              animate={{ y: 15, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeIn" }}
            >
              <div className="p-2">
                <div className="h-[3px] w-[60%] bg-gray-200 rounded-full mb-1" />
                <div className="h-[3px] w-[80%] bg-gray-100 rounded-full mb-1" />
                <div className="h-[3px] w-[45%] bg-gray-100 rounded-full" />
              </div>
            </motion.div>
          )}

          {/* Seal */}
          <AnimatePresence>
            {(phase === "celebrate") && (
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: [0, 1.4, 1], rotate: 0 }}
                exit={{ scale: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <div className="w-11 h-11 rounded-full bg-white shadow-lg flex items-center justify-center border-2 border-[#0A66C2]">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0A66C2" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* ══════════════════════════ STATUS LABEL ══════════════════════════ */}
      <div className="absolute bottom-[6px] left-[12px] h-5">
        <AnimatePresence mode="wait">
          {(phase === "writing") && (
            <motion.p key="w" className="text-[11px] font-medium text-linkedin/60" initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }}>
              Elvatix schrijft een bericht...
            </motion.p>
          )}
          {(phase === "happy") && (
            <motion.p key="h" className="text-[11px] font-medium text-amber-500" initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }}>
              ✨ Bericht klaar!
            </motion.p>
          )}
          {(phase === "deliver" || phase === "pickup") && (
            <motion.p key="d" className="text-[11px] font-medium text-linkedin/50" initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }}>
              📨 Wordt verzonden...
            </motion.p>
          )}
          {(phase === "celebrate") && (
            <motion.p key="c" className="text-[11px] font-medium text-emerald-500" initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }}>
              ✓ Verzonden naar {msg.to}!
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* ══════════════════════════ MESSAGE DOTS ══════════════════════════ */}
      <div className="absolute bottom-[8px] right-[12px] flex gap-1.5">
        {MESSAGES.map((_, i) => (
          <motion.div
            key={i}
            className="w-2 h-2 rounded-full"
            animate={{
              backgroundColor: i === msgIndex ? "#0A66C2" : "#D1D5DB",
              scale: i === msgIndex ? 1.2 : 1,
            }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>
    </div>
  );
}
