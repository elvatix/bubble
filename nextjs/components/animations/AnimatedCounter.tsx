"use client";
import { useEffect, useRef, useState } from "react";
import { useInView, motion } from "framer-motion";

interface Props {
  target: string;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function AnimatedCounter({ target, duration = 2, className, style }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    const numericMatch = target.match(/(\d+)/);
    if (!numericMatch) {
      setDisplay(target);
      return;
    }

    const end = parseInt(numericMatch[1]);
    const prefix = target.slice(0, target.indexOf(numericMatch[1]));
    const suffix = target.slice(target.indexOf(numericMatch[1]) + numericMatch[1].length);
    const startTime = performance.now();
    const durationMs = duration * 1000;

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      const current = Math.round(eased * end);
      setDisplay(`${prefix}${current}${suffix}`);
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [isInView, target, duration]);

  return (
    <motion.span
      ref={ref}
      className={className}
      style={style}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
    >
      {display}
    </motion.span>
  );
}
