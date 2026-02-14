"use client";

const navLinks = [
  { label: "Platform", href: "/platform" },
  { label: "Oplossingen", href: "/solutions" },
  { label: "Case Studies", href: "/cases" },
  { label: "Pricing", href: "/pricing" },
  { label: "Inloggen", href: "/login" },
];

export default function Header() {
  return (
    <header className="navbar-floating">
      <nav style={{ display: "flex", alignItems: "center", gap: 32 }}>
        <a href="/" style={{ fontSize: 18, fontWeight: 800, color: "#111", textDecoration: "none", marginRight: 16 }}>
          Elvatix
        </a>

        <div className="nav-links-desktop" style={{ display: "flex", alignItems: "center", gap: 24 }}>
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} style={{ fontSize: 14, fontWeight: 500, color: "#374151", textDecoration: "none" }}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="nav-cta-desktop" style={{ display: "flex", alignItems: "center", gap: 12, marginLeft: "auto" }}>
          <a href="/start" className="pill-btn pill-btn-outline" style={{ padding: "8px 20px", fontSize: 13 }}>
            Start gratis
          </a>
          <a href="/demo" className="pill-btn pill-btn-primary" style={{ padding: "8px 20px", fontSize: 13 }}>
            Boek een demo
          </a>
        </div>
      </nav>
    </header>
  );
}
