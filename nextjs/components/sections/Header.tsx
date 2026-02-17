"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { label: "Modules", href: "/platform" },
    { label: "Voor Wie", href: "/solutions" },
    { label: "Case Studies", href: "/cases" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header
      style={{
        position: "fixed",
        top: 16,
        left: "50%",
        transform: "translateX(-50%)",
        width: "calc(100% - 48px)",
        maxWidth: 1200,
        zIndex: 1000,
        background: "rgba(255,255,255,0.95)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderRadius: 9999,
        padding: "12px 24px",
        boxShadow: "0 2px 20px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.04)",
        boxSizing: "border-box",
      }}
    >
      <div style={{
        display: "flex",
        alignItems: "center",
        position: "relative",
      }}>
        {/* Logo — absolute zodat het de centering van nav niet verstoort */}
        <Link
          href="/"
          style={{
            fontWeight: 800,
            fontSize: 22,
            letterSpacing: "-0.02em",
            textDecoration: "none",
            flexShrink: 0,
            color: "#0a66c2",
            zIndex: 1,
          }}
        >
          Elvatix
        </Link>

        {/* Nav links — gecentreerd in de volle breedte */}
        <nav
          className="nav-links"
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 32,
            pointerEvents: "none",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              style={{
                color: "#374151",
                textDecoration: "none",
                fontSize: 14,
                fontWeight: 500,
                transition: "color 0.2s",
                pointerEvents: "auto",
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA — rechts uitgelijnd */}
        <div className="nav-cta" style={{ marginLeft: "auto", flexShrink: 0, zIndex: 1 }}>
          <Link
            href="/demo"
            className="pill-btn pill-btn-linkedin"
            style={{ padding: "10px 24px", fontSize: 14 }}
          >
            Plan een demo
          </Link>
        </div>

        {/* Hamburger — alleen mobiel */}
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
            zIndex: 1,
          }}
        >
          <div style={{ width: 22, height: 2, background: open ? "transparent" : "#111", transition: "all 0.3s" }} />
          <div style={{ width: 22, height: 2, background: "#111", transform: open ? "rotate(45deg) translateY(-1px)" : "none", transition: "all 0.3s" }} />
          <div style={{ width: 22, height: 2, background: "#111", transform: open ? "rotate(-45deg) translateY(1px)" : "none", transition: "all 0.3s" }} />
        </button>
      </div>

      {/* Mobile nav */}
      <div className={`mobile-nav${open ? " open" : ""}`}>
        {open && (
          <>
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ))}
            <Link href="/demo" className="pill-btn pill-btn-linkedin" onClick={() => setOpen(false)}>
              Plan een demo
            </Link>
          </>
        )}
      </div>
    </header>
  );
}
