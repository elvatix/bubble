"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const MESSAGES = [
  { to: "Jan Jansen", role: "Senior Developer", text: "Hoi Jan! Je ervaring bij Google viel me op. We zoeken iemand met jouw skills voor een gave rol..." },
  { to: "Lisa de Vries", role: "Product Manager", text: "Hi Lisa! Je achtergrond in B2B SaaS is precies wat we zoeken. Zullen we even sparren?" },
  { to: "Thomas Bakker", role: "Data Engineer", text: "Hey Thomas! Je werk met Python en Spark sluit perfect aan bij wat we bouwen..." },
];

type Phase = "idle" | "writing" | "done" | "sending" | "sent";

export default function EnvelopeAnimation() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [msgIdx, setMsgIdx] = useState(0);
  const [typed, setTyped] = useState(0);
  const cancelled = useRef(false);
  const msg = MESSAGES[msgIdx];

  useEffect(() => {
    cancelled.current = false;

    const wait = (ms: number) =>
      new Promise<void>((res) => {
        const id = setTimeout(() => { if (!cancelled.current) res(); }, ms);
        // Cleanup on cancel won't reject, just never resolves
        return id;
      });

    const loop = async () => {
      while (!cancelled.current) {
        /* ── 1. Reset & show letter ── */
        setPhase("idle");
        setTyped(0);
        await wait(600);
        if (cancelled.current) return;

        /* ── 2. Typing phase ── */
        setPhase("writing");
        const text = MESSAGES[msgIdx].text;
        // We need current msgIdx but it's captured in closure
        // So we read it via a trick – use the state directly
        for (let i = 0; i <= text.length; i++) {
          if (cancelled.current) return;
          setTyped(i);
          await wait(30);
        }
        if (cancelled.current) return;

        /* ── 3. Done writing ── */
        setPhase("done");
        await wait(1200);
        if (cancelled.current) return;

        /* ── 4. Sending ── */
        setPhase("sending");
        await wait(1000);
        if (cancelled.current) return;

        /* ── 5. Sent! ── */
        setPhase("sent");
        await wait(2000);
        if (cancelled.current) return;

        /* ── 6. Next message ── */
        setMsgIdx((prev) => (prev + 1) % MESSAGES.length);
        // Break inner loop so useEffect re-triggers with new msgIdx
        return;
      }
    };

    loop();

    return () => {
      cancelled.current = true;
    };
  }, [msgIdx]);

  const isWriting = phase === "writing";
  const isDone = phase === "done";
  const isSending = phase === "sending";
  const isSent = phase === "sent";

  return (
    <div className="relative w-[340px] h-[330px] select-none overflow-hidden" aria-hidden="true">

      {/* ══════════════ WALL-E CHARACTER ══════════════ */}
      <motion.div
        className="absolute z-20"
        style={{ top: 8, right: 16 }}
        animate={
          isDone
            ? { y: [-12, 0], transition: { duration: 0.4, type: "spring", stiffness: 400, damping: 10 } }
            : isSending
              ? { x: -40, transition: { duration: 0.8, ease: "easeInOut" } }
              : isSent
                ? { x: -20, y: [-8, 0], transition: { duration: 0.3, type: "spring" } }
                : { x: 0, y: 0 }
        }
      >
        {/* Floating idle bob */}
        <motion.div
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Antenna */}
          <div className="flex flex-col items-center">
            <motion.div
              className="w-3 h-3 rounded-full"
              style={{
                background: isSent ? "#22c55e" : isDone ? "#facc15" : "#38bdf8",
                boxShadow: `0 0 10px ${isSent ? "rgba(34,197,94,0.7)" : isDone ? "rgba(250,204,21,0.8)" : "rgba(56,189,248,0.6)"}`,
              }}
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.2, repeat: Infinity }}
            />
            <div className="w-[2px] h-3 bg-amber-700" />
          </div>

          {/* Head — WALL-E binoculars */}
          <div className="flex items-center justify-center">
            {/* Left eye */}
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-slate-100 to-slate-300 border-[3px] border-slate-400 flex items-center justify-center shadow-lg relative">
              <motion.div
                className="w-4 h-4 rounded-full bg-gradient-to-br from-sky-300 to-sky-600 relative"
                style={{ boxShadow: "inset 0 2px 3px rgba(0,0,0,0.15), 0 0 6px rgba(56,189,248,0.4)" }}
                animate={
                  isWriting
                    ? { x: [-2, 2, -1, 2], y: [0, 1, 0, 1] }
                    : isDone || isSent
                      ? { scale: [1, 1.15, 1] }
                      : {}
                }
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-slate-900" />
                <div className="absolute top-[2px] right-[2px] w-[4px] h-[4px] rounded-full bg-white/80" />
              </motion.div>
            </div>

            {/* Bridge */}
            <div className="w-2 h-3 bg-slate-400 rounded-sm -mx-[1px] self-center" />

            {/* Right eye */}
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-slate-100 to-slate-300 border-[3px] border-slate-400 flex items-center justify-center shadow-lg">
              <motion.div
                className="w-4 h-4 rounded-full bg-gradient-to-br from-sky-300 to-sky-600 relative"
                style={{ boxShadow: "inset 0 2px 3px rgba(0,0,0,0.15), 0 0 6px rgba(56,189,248,0.4)" }}
                animate={
                  isWriting
                    ? { x: [-2, 2, -1, 2], y: [0, 1, 0, 1] }
                    : isDone || isSent
                      ? { scale: [1, 1.15, 1] }
                      : {}
                }
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.1 }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-slate-900" />
                <div className="absolute top-[2px] right-[2px] w-[4px] h-[4px] rounded-full bg-white/80" />
              </motion.div>
            </div>
          </div>

          {/* Happy eyebrows */}
          {(isDone || isSent) && (
            <motion.div
              className="absolute top-[14px] left-1/2 -translate-x-1/2 flex gap-8 pointer-events-none"
              initial={{ y: 2, opacity: 0 }}
              animate={{ y: -3, opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-3 h-[2px] bg-amber-800 rounded-full -rotate-12" />
              <div className="w-3 h-[2px] bg-amber-800 rounded-full rotate-12" />
            </motion.div>
          )}

          {/* Neck */}
          <div className="w-4 h-2 bg-amber-600 mx-auto" />

          {/* Body */}
          <div className="w-16 h-12 rounded-xl bg-gradient-to-b from-amber-400 to-amber-600 mx-auto shadow-lg border border-amber-700 relative overflow-hidden">
            <div className="absolute inset-[3px] rounded-lg border border-amber-300/20" />
            {/* Elvatix green logo */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg width="22" height="22" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="14" fill="#84CC16" />
                <circle cx="16" cy="11" r="3.5" fill="white" />
                <path d="M9 25c0-3.9 3.1-7 7-7s7 3.1 7 7" fill="white" />
              </svg>
            </div>
          </div>

          {/* Left arm (writing arm) */}
          <motion.div
            className="absolute -left-4 top-[52px]"
            style={{ transformOrigin: "top right" }}
            animate={
              isWriting
                ? { rotate: [5, -8, 5, -5, 8, 5], transition: { duration: 1, repeat: Infinity, ease: "easeInOut" } }
                : isDone
                  ? { rotate: -35, transition: { type: "spring", stiffness: 300 } }
                  : isSent
                    ? { rotate: [-30, -45, -30], transition: { duration: 0.5, repeat: Infinity } }
                    : { rotate: 0 }
            }
          >
            <div className="w-[3px] h-6 bg-gradient-to-b from-amber-600 to-amber-700 rounded-full" />
            <div className="w-2 h-2 bg-amber-700 rounded-full -ml-[0.5px]" />
            {isWriting && <div className="w-[2px] h-2.5 bg-slate-600 rounded-full ml-[1px] -mt-[1px]" />}
          </motion.div>

          {/* Right arm */}
          <motion.div
            className="absolute -right-4 top-[52px]"
            style={{ transformOrigin: "top left" }}
            animate={
              isDone
                ? { rotate: 35, transition: { type: "spring", stiffness: 300 } }
                : isSent
                  ? { rotate: [30, 45, 30], transition: { duration: 0.5, repeat: Infinity } }
                  : { rotate: 0 }
            }
          >
            <div className="w-[3px] h-6 bg-gradient-to-b from-amber-600 to-amber-700 rounded-full" />
            <div className="w-2 h-2 bg-amber-700 rounded-full -ml-[0.5px]" />
          </motion.div>

          {/* Tracks */}
          <div className="flex justify-center gap-[2px] mt-[2px]">
            {[0, 1].map((t) => (
              <motion.div
                key={t}
                className="w-6 h-3 bg-slate-500 rounded-[3px] border border-slate-600"
                animate={
                  isSending
                    ? { rotate: [0, t === 0 ? 4 : -4, 0], transition: { duration: 0.2, repeat: 4 } }
                    : {}
                }
              >
                <div className="flex justify-center gap-[2px] mt-[1px]">
                  <div className="w-[3px] h-[3px] rounded-full bg-slate-400" />
                  <div className="w-[3px] h-[3px] rounded-full bg-slate-400" />
                  <div className="w-[3px] h-[3px] rounded-full bg-slate-400" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Sparkles when done/sent */}
          {(isDone || isSent) && (
            <>
              {[
                { x: -18, y: -8, d: 0 },
                { x: 72, y: -4, d: 0.15 },
                { x: 28, y: -18, d: 0.3 },
              ].map((s, i) => (
                <motion.span
                  key={i}
                  className="absolute text-yellow-400 text-xs pointer-events-none"
                  style={{ left: s.x, top: s.y }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: [0, 1.3, 0], opacity: [0, 1, 0] }}
                  transition={{ duration: 0.7, delay: s.d }}
                >
                  ✦
                </motion.span>
              ))}
            </>
          )}

          {/* Party emoji when sent */}
          {isSent && (
            <motion.span
              className="absolute -top-6 left-1/2 -translate-x-1/2 text-lg pointer-events-none"
              initial={{ y: 5, opacity: 0, scale: 0.5 }}
              animate={{ y: -3, opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              🎉
            </motion.span>
          )}
        </motion.div>
      </motion.div>

      {/* ══════════════ INMAIL LETTER ══════════════ */}
      <motion.div
        className="absolute left-0 top-[20px] z-10"
        animate={
          isSending
            ? { scale: 0.6, y: 60, x: 10, opacity: 0, transition: { duration: 0.8, ease: "easeIn" } }
            : isSent
              ? { scale: 0.6, y: 60, x: 10, opacity: 0 }
              : { scale: 1, y: 0, x: 0, opacity: 1 }
        }
      >
        <div className="w-[210px] rounded-2xl bg-white shadow-xl border border-gray-100 p-4">
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

          {/* Signature */}
          {typed >= msg.text.length && phase !== "idle" && (
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

      {/* ══════════════ ENVELOPE ══════════════ */}
      <div className="absolute left-3 bottom-6 z-10">
        <div className="relative" style={{ width: 210, height: 85 }}>
          <svg viewBox="0 0 210 85" width="210" height="85" fill="none">
            <defs>
              <linearGradient id="eg" x1="0" y1="0" x2="210" y2="85" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0A66C2" />
                <stop offset="1" stopColor="#3B9FE8" />
              </linearGradient>
            </defs>
            <rect width="210" height="85" rx="12" fill="url(#eg)" />
            <polygon points="0,28 105,85 210,28 210,85 0,85" fill="#0D7FD4" opacity="0.4" />
            <rect x="10" y="8" width="45" height="14" rx="5" fill="white" opacity="0.08" />
          </svg>

          {/* Letter sliding in during sending phase */}
          {isSending && (
            <motion.div
              className="absolute left-6 w-[130px] h-[55px] bg-white rounded-lg shadow border border-gray-200 p-2"
              initial={{ top: -40, opacity: 1 }}
              animate={{ top: 20, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeIn" }}
            >
              <div className="h-[3px] w-[60%] bg-gray-200 rounded-full mb-1" />
              <div className="h-[3px] w-[80%] bg-gray-100 rounded-full mb-1" />
              <div className="h-[3px] w-[40%] bg-gray-100 rounded-full" />
            </motion.div>
          )}

          {/* Seal checkmark */}
          {isSent && (
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: [0, 1.4, 1], rotate: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <div className="w-11 h-11 rounded-full bg-white shadow-lg flex items-center justify-center border-2 border-[#0A66C2]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0A66C2" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* ══════════════ STATUS LINE ══════════════ */}
      <div className="absolute bottom-1 left-4 h-5">
        {isWriting && (
          <motion.p
            className="text-[11px] font-medium text-linkedin/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Elvatix schrijft een bericht...
          </motion.p>
        )}
        {isDone && (
          <motion.p
            className="text-[11px] font-medium text-amber-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            ✨ Klaar!
          </motion.p>
        )}
        {isSending && (
          <motion.p
            className="text-[11px] font-medium text-linkedin/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            📨 Wordt verzonden...
          </motion.p>
        )}
        {isSent && (
          <motion.p
            className="text-[11px] font-medium text-emerald-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            ✓ Verzonden naar {msg.to}
          </motion.p>
        )}
      </div>

      {/* ══════════════ DOTS ══════════════ */}
      <div className="absolute bottom-1 right-4 flex gap-1.5">
        {MESSAGES.map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${i === msgIdx ? "bg-linkedin scale-125" : "bg-gray-300"}`}
          />
        ))}
      </div>
    </div>
  );
}
