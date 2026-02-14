"use client";
import AnimateOnScroll from "../animations/AnimateOnScroll";

export default function Footer() {
  return (
    <footer style={{ background: "#111", color: "white", padding: "64px 24px 32px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <AnimateOnScroll variant="fadeUp">
          <div className="footer-grid">
            <div>
              <h3 style={{ fontSize: 20, fontWeight: 800, marginBottom: 16, color: "#8db600" }}>Elvatix</h3>
              <p style={{ fontSize: 14, color: "#9ca3af", lineHeight: 1.6 }}>
                De #1 AI-powered LinkedIn recruitment copilot voor moderne recruiters.
              </p>
            </div>
            <div>
              <h4 style={{ fontSize: 14, fontWeight: 700, marginBottom: 12, textTransform: "uppercase", letterSpacing: "0.05em", color: "#6b7280" }}>Platform</h4>
              {["InMails", "Connecties", "Analytics", "AI Copilot"].map((item) => (
                <a key={item} href="#" style={{ display: "block", fontSize: 14, color: "#d1d5db", textDecoration: "none", marginBottom: 8, transition: "color 0.2s" }}>{item}</a>
              ))}
            </div>
            <div>
              <h4 style={{ fontSize: 14, fontWeight: 700, marginBottom: 12, textTransform: "uppercase", letterSpacing: "0.05em", color: "#6b7280" }}>Bedrijf</h4>
              {["Over ons", "Pricing", "Case Studies", "Blog"].map((item) => (
                <a key={item} href="#" style={{ display: "block", fontSize: 14, color: "#d1d5db", textDecoration: "none", marginBottom: 8, transition: "color 0.2s" }}>{item}</a>
              ))}
            </div>
            <div>
              <h4 style={{ fontSize: 14, fontWeight: 700, marginBottom: 12, textTransform: "uppercase", letterSpacing: "0.05em", color: "#6b7280" }}>Support</h4>
              {["Help Center", "Contact", "Privacy", "Voorwaarden"].map((item) => (
                <a key={item} href="#" style={{ display: "block", fontSize: 14, color: "#d1d5db", textDecoration: "none", marginBottom: 8, transition: "color 0.2s" }}>{item}</a>
              ))}
            </div>
            <div>
              <h4 style={{ fontSize: 14, fontWeight: 700, marginBottom: 12, textTransform: "uppercase", letterSpacing: "0.05em", color: "#6b7280" }}>Volg ons</h4>
              {["LinkedIn", "Twitter", "YouTube"].map((item) => (
                <a key={item} href="#" style={{ display: "block", fontSize: 14, color: "#d1d5db", textDecoration: "none", marginBottom: 8, transition: "color 0.2s" }}>{item}</a>
              ))}
            </div>
          </div>
        </AnimateOnScroll>
        <div className="footer-bottom">
          <p style={{ fontSize: 13, color: "#6b7280" }}>&copy; 2025 Elvatix. Alle rechten voorbehouden.</p>
          <div style={{ display: "flex", gap: 16, fontSize: 13 }}>
            <a href="#" style={{ color: "#6b7280", textDecoration: "none" }}>Privacy</a>
            <a href="#" style={{ color: "#6b7280", textDecoration: "none" }}>Voorwaarden</a>
            <a href="#" style={{ color: "#6b7280", textDecoration: "none" }}>Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
