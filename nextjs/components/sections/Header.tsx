"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const trustBadges = [
  {
    label: "5.0 op Chrome",
    url: "https://chromewebstore.google.com/detail/elvatix/apdlpieiebgmgkkhimlbkliccnkimgem?pli=1",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    label: "4.4 op Trustpilot",
    url: "https://www.google.com/search?q=Elvatix+B.V.+Trustpilot",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    label: "5.0 op Google",
    url: "https://share.google/ywHHIe4e8U4bUzVqr",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
];

const navLinks = [
  { label: "Modules", href: "/modules" },
  { label: "Voor wie", href: "/voor-wie" },
  { label: "Case studies", href: "/case-studies" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Row 1 — Trust Badges */}
      <div className="fixed top-0 left-0 right-0 z-[1001] bg-gray-900 text-white">
        <div className="max-w-[1200px] mx-auto flex items-center justify-center gap-6 sm:gap-10 py-1.5 px-4 text-[11px] sm:text-xs font-medium">
          {trustBadges.map((badge) => (
            <a
              key={badge.label}
              href={badge.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-white/80 hover:text-white transition-colors no-underline"
            >
              <span className="text-amber-400">{badge.icon}</span>
              {badge.label}
            </a>
          ))}
        </div>
      </div>

      {/* Row 2 — Navigation */}
      <header className="navbar-floating" style={{ top: "40px" }}>
        {/* Logo — full on desktop, icon on mobile */}
        <Link href="/" className="no-underline shrink-0 z-[1]">
          <Image
            src="/images/elvatix-logo-lightgreen.svg"
            alt="Elvatix"
            width={140}
            height={32}
            priority
            className="hidden md:block h-7 w-auto"
          />
          <Image
            src="/images/Favicon Elvatix.png"
            alt="Elvatix"
            width={32}
            height={32}
            priority
            className="md:hidden h-8 w-8"
          />
        </Link>

        {/* Nav links */}
        <nav className="nav-links">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-text-secondary no-underline text-sm font-medium transition-colors duration-200 hover:text-elvatix"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA buttons */}
        <div className="nav-cta">
          <Link
            href="/demo"
            className="pill-btn pill-btn-elvatix py-2.5 px-6 text-sm"
          >
            Plan demo
          </Link>
          <a
            href="https://app.elvatix.com"
            target="_blank"
            rel="noopener noreferrer"
            className="pill-btn pill-btn-outline py-2.5 px-6 text-sm"
          >
            Inloggen
          </a>
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
              <Link href="/demo" className="pill-btn pill-btn-elvatix" onClick={() => setOpen(false)}>
                Plan demo
              </Link>
              <a
                href="https://app.elvatix.com"
                target="_blank"
                rel="noopener noreferrer"
                className="pill-btn pill-btn-outline text-center justify-center"
                onClick={() => setOpen(false)}
              >
                Inloggen
              </a>
            </>
          )}
        </div>
      </header>
    </>
  );
}
