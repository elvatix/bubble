"use client";
import AnimateOnScroll from "../animations/AnimateOnScroll";

export default function Footer() {
  return (
    <footer style={{ background: "#111", color: "white", padding: "64px 24px 32px" }}>
      <AnimateOnScroll variant="fadeUp">
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="footer-grid" style={{ marginBottom: 48 }}>
            <div>
              <h3 style={{ fontSize: 20, fontWeight: 800, marginBottom: 16 }}>
                <span style={{ color: "#8db600" }}>Elvatix</span>
              </h3>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>
                De #1 AI-Powered LinkedIn Recruitment Copilot. Schrijf persoonlijke InMails en connectieverzoeken in seconden.
              </p>
            </div>

            <div>
              <h4 style={{ fontSize: 14, fontWeight: 600, marginBottom: 16, color: "rgba(255,255,255,0.4)" }}>Modules</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {["InMails", "Connectieverzoeken", "Reminders", "Templates"].map((item) => (
                  <li key={item}>
                    <a href="https://elvatix.com" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none", fontSize: 14 }}>{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 style={{ fontSize: 14, fontWeight: 600, marginBottom: 16, color: "rgba(255,255,255,0.4)" }}>Voor Wie</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {["Recruitmentbureaus", "Corporate Recruiters", "Detacheringsbureaus"].map((item) => (
                  <li key={item}>
                    <a href="https://elvatix.com" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none", fontSize: 14 }}>{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 style={{ fontSize: 14, fontWeight: 600, marginBottom: 16, color: "rgba(255,255,255,0.4)" }}>Contact</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {["Plan een demo", "Case Studies", "Support"].map((item) => (
                  <li key={item}>
                    <a href="https://elvatix.com" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none", fontSize: 14 }}>{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="footer-bottom" style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)" }}>&copy; 2025 Elvatix. Alle rechten voorbehouden.</p>
            <div style={{ display: "flex", gap: 16 }}>
              <a href="https://elvatix.com" style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none", fontSize: 13 }}>Privacy</a>
              <a href="https://elvatix.com" style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none", fontSize: 13 }}>Voorwaarden</a>
            </div>
          </div>
        </div>
      </AnimateOnScroll>
    </footer>
  );
}
