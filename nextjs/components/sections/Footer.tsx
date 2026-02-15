"use client";
import AnimateOnScroll from "../animations/AnimateOnScroll";
import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "#111", color: "white", padding: "64px 24px 32px" }}>
      <AnimateOnScroll variant="fadeUp">
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="footer-grid" style={{ marginBottom: 48 }}>
            <div>
              <h3 style={{ fontSize: 20, fontWeight: 800, marginBottom: 16 }}>
                <Link href="/" style={{ color: "#8db600", textDecoration: "none" }}>Elvatix</Link>
              </h3>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>
                De #1 AI-Powered LinkedIn Recruitment Copilot. Schrijf persoonlijke InMails en connectieverzoeken in seconden.
              </p>
            </div>

            <div>
              <h4 style={{ fontSize: 14, fontWeight: 600, marginBottom: 16, color: "rgba(255,255,255,0.4)" }}>Modules</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { label: "InMails", href: "/features" },
                  { label: "Connectieverzoeken", href: "/features" },
                  { label: "Reminders", href: "/features" },
                  { label: "Templates", href: "/features" },
                ].map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none", fontSize: 14 }}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 style={{ fontSize: 14, fontWeight: 600, marginBottom: 16, color: "rgba(255,255,255,0.4)" }}>Voor Wie</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { label: "Recruitmentbureaus", href: "/solutions" },
                  { label: "Corporate Recruiters", href: "/solutions" },
                  { label: "Detacheringsbureaus", href: "/solutions" },
                ].map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none", fontSize: 14 }}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 style={{ fontSize: 14, fontWeight: 600, marginBottom: 16, color: "rgba(255,255,255,0.4)" }}>Contact</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { label: "Plan een demo", href: "/demo" },
                  { label: "Case Studies", href: "/cases" },
                  { label: "Contact", href: "/contact" },
                ].map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none", fontSize: 14 }}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="footer-bottom" style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)" }}>&copy; 2025 Elvatix. Alle rechten voorbehouden.</p>
            <div style={{ display: "flex", gap: 16 }}>
              <Link href="/privacy" style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none", fontSize: 13 }}>Privacy</Link>
              <Link href="/terms" style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none", fontSize: 13 }}>Voorwaarden</Link>
            </div>
          </div>
        </div>
      </AnimateOnScroll>
    </footer>
  );
}
