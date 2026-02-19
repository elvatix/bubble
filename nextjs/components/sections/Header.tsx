"use client";
import { useState } from "react";
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
    <header className="navbar-floating">
      {/* Logo */}
      <Link
        href="/"
        className="font-extrabold text-[22px] tracking-tight no-underline shrink-0 text-linkedin z-[1]"
      >
        Elvatix
      </Link>

      {/* Nav links */}
      <nav className="nav-links">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="text-gray-700 no-underline text-sm font-medium transition-colors duration-200 hover:text-linkedin"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* CTA */}
      <div className="nav-cta">
        <Link
          href="/demo"
          className="pill-btn pill-btn-linkedin py-2.5 px-6 text-sm"
        >
          Plan een demo
        </Link>
      </div>

      {/* Hamburger (mobiel) */}
      <button
        className="hamburger"
        onClick={() => setOpen(!open)}
        aria-label="Menu"
      >
        <div className={`w-[22px] h-0.5 bg-gray-900 transition-all duration-300 ${open ? "translate-y-[7px] rotate-45" : ""}`} />
        <div className={`w-[22px] h-0.5 bg-gray-900 transition-all duration-300 ${open ? "opacity-0" : ""}`} />
        <div className={`w-[22px] h-0.5 bg-gray-900 transition-all duration-300 ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
      </button>

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
