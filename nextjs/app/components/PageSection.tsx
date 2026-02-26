"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageSectionProps {
  children: ReactNode;
  alt?: boolean;
  dark?: boolean;
  className?: string;
  id?: string;
}

export default function PageSection({ children, alt, dark, className = "", id }: PageSectionProps) {
  const base = dark ? "page-section--dark" : alt ? "page-section--alt" : "page-section";
  return (
    <motion.section
      id={id}
      className={`${base} ${className}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.section>
  );
}
