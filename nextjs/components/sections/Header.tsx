"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Modules", href: "/modules" },
  { label: "Voor wie", href: "/voor-wie" },
  { label: "Case studies", href: "/case-studies" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar-floating">
      {/* Logo  - full on desktop, icon on mobile */}
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
  );
}
