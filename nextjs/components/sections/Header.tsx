"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { label: "Modules", href: "/features" },
    { label: "Voor Wie", href: "/solutions" },
    { label: "Case Studies", href: "/cases" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        width: "100%",
        zIndex: 100,
        background: "rgba(255,255,255,0.85)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(0,0,0,0.06)",
        boxSizing: "border-box",
      }}
    >
      <div style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "16px 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        <Link href="/" style={{ fontWeight: 800, fontSize: 22, color: "#111", letterSpacing: "-0.02em", textDecoration: "none", flexShrink: 0 }}>
          <span style={{ color: "#8db600" }}>Elvatix</span>
        </Link>

        <nav className="nav-links" style={{ display: "flex", alignItems: "center", gap: 32 }}>
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} style={{ color: "#6b7280", textDecoration: "none", fontSize: 14, fontWeight: 500, transition: "color 0.2s" }}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="nav-cta">
          <Link href="/demo" className="pill-btn pill-btn-primary" style={{ padding: "10px 24px", fontSize: 14 }}>
            Plan een demo
          </Link>
        </div>

        <button
          className="hamburger"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          style={{
            display: "none",
            flexDirection: "column",
            gap: 5,
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 8,
          }}
        >
          <div style={{ width: 22, height: 2, background: open ? "transparent" : "#111", transition: "all 0.3s" }} />
          <div style={{ width: 22, height: 2, background: "#111", transform: open ? "rotate(45deg) translateY(-1px)" : "none", transition: "all 0.3s" }} />
          <div style={{ width: 22, height: 2, background: "#111", transform: open ? "rotate(-45deg) translateY(1px)" : "none", transition: "all 0.3s" }} />
        </button>
      </div>

      <div className={`mobile-nav${open ? " open" : ""}`}>
        {open && (
          <>
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ))}
            <Link href="/demo" className="pill-btn pill-btn-primary" onClick={() => setOpen(false)}>
              Plan een demo
            </Link>
          </>
        )}
      </div>
    </header>
  );
}
