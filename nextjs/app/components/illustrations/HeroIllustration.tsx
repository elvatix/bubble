"use client";
import { ReactNode } from "react";

interface FloatItem {
  icon: ReactNode;
  label: string;
  position: number; // 1-6 maps to CSS positions
}

interface HeroIllustrationProps {
  ariaLabel: string;
  centerCard: ReactNode;
  floats: FloatItem[];
}

export default function HeroIllustration({ ariaLabel, centerCard, floats }: HeroIllustrationProps) {
  return (
    <div className="hero-illo" role="img" aria-label={ariaLabel}>
      {/* Background dot grid */}
      <div className="hero-illo__grid" />

      {/* Decorative gradient blobs */}
      <div className="hero-illo__blob hero-illo__blob--1" />
      <div className="hero-illo__blob hero-illo__blob--2" />

      {/* Central card  - 3D tilted */}
      <div className="hero-illo__main-card">
        {centerCard}
      </div>

      {/* Floating cards */}
      {floats.map((f, i) => (
        <div key={i} className={`hero-illo__float hero-illo__float--${f.position}`}>
          {f.icon}
          <span>{f.label}</span>
        </div>
      ))}

      {/* Floating particles */}
      <div className="hero-illo__particle hero-illo__particle--1" />
      <div className="hero-illo__particle hero-illo__particle--2" />
      <div className="hero-illo__particle hero-illo__particle--3" />
      <div className="hero-illo__particle hero-illo__particle--4" />
      <div className="hero-illo__particle hero-illo__particle--5" />

      {/* Connecting lines */}
      <svg className="hero-illo__lines" viewBox="0 0 600 400" fill="none" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="lg1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#9BBB0A" stopOpacity="0" />
            <stop offset="50%" stopColor="#9BBB0A" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#9BBB0A" stopOpacity="0" />
          </linearGradient>
        </defs>
        <line x1="300" y1="200" x2="90" y2="70" stroke="url(#lg1)" strokeWidth="1" className="hero-illo__line" />
        <line x1="300" y1="200" x2="510" y2="55" stroke="url(#lg1)" strokeWidth="1" className="hero-illo__line" style={{animationDelay:'0.4s'}} />
        <line x1="300" y1="200" x2="65" y2="310" stroke="url(#lg1)" strokeWidth="1" className="hero-illo__line" style={{animationDelay:'0.8s'}} />
        <line x1="300" y1="200" x2="535" y2="310" stroke="url(#lg1)" strokeWidth="1" className="hero-illo__line" style={{animationDelay:'1.2s'}} />
        <line x1="300" y1="200" x2="55" y2="190" stroke="url(#lg1)" strokeWidth="1" className="hero-illo__line" style={{animationDelay:'1.6s'}} />
        <line x1="300" y1="200" x2="535" y2="180" stroke="url(#lg1)" strokeWidth="1" className="hero-illo__line" style={{animationDelay:'2.0s'}} />
      </svg>
    </div>
  );
}
