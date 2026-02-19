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
      <div className="flex items-center relative">
        {/* Logo — absolute zodat het de centering van nav niet verstoort */}
        <Link
          href="/"
          className="font-extrabold text-[22px] tracking-tight no-underline shrink-0 text-linkedin z-[1]"
        >
          Elvatix
        </Link>

        {/* Nav links — gecentreerd in de volle breedte */}
        <nav
          className="nav-links absolute inset-x-0 flex items-center justify-center gap-8 pointer-events-none"
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-gray-700 no-underline text-sm font-medium transition-colors duration-200 pointer-events-auto hover:text-linkedin"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA — rechts uitgelijnd */}
        <div className="nav-cta ml-auto shrink-0 z-[1]">
          <Link
            href="/demo"
            className="pill-btn pill-btn-linkedin py-2.5 px-6 text-sm"
          >
            Plan een demo
          </Link>
        </div>

        {/* Hamburger — alleen mobiel */}
        <button
          className="hamburger flex-col gap-[5px] p-2 z-[1]"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <div className={`w-[22px] h-0.5 transition-all duration-300 ${open ? "bg-transparent" : "bg-gray-900"}`} />
          <div className={`w-[22px] h-0.5 bg-gray-900 transition-all duration-300 ${open ? "rotate-45 -translate-y-px" : ""}`} />
          <div className={`w-[22px] h-0.5 bg-gray-900 transition-all duration-300 ${open ? "-rotate-45 translate-y-px" : ""}`} />
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
