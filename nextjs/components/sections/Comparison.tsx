"use client";
import { motion } from "framer-motion";

const CheckCircleIcon = ({ color = "#0a66c2" }: { color?: string }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const XIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="15" y1="9" x2="9" y2="15" />
    <line x1="9" y1="9" x2="15" y2="15" />
  </svg>
);

const rows = [
  { label: "Personalisatie op basis van profiel", zonder: false, met: true },
  { label: "Werkt direct in LinkedIn Recruiter", zonder: false, met: true },
  { label: "Tone of voice instellen", zonder: false, met: true },
  { label: "Taal automatisch detecteren", zonder: false, met: true },
  { label: "30 seconden per InMail", zonder: false, met: true },
];

export default function Comparison() {
  return (
    <section className="section-padding" style={{ background: "#fff" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <h2 style={{ fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 900, color: "#111", marginBottom: 12 }}>
            Van uren typen naar seconden.
          </h2>
          <p style={{ color: "#6b7280", fontSize: 16, maxWidth: 520, margin: "0 auto" }}>
            Vergelijk handmatig recruiten met Elvatix.
          </p>
        </div>

        {/* Proof stats bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 48,
            marginBottom: 40,
            padding: "20px 32px",
            borderRadius: 16,
            background: "linear-gradient(135deg, #0a66c2 0%, #004182 100%)",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <p style={{ fontSize: 32, fontWeight: 900, color: "#fff" }}>260</p>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.8)" }}>InMails verstuurd</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <p style={{ fontSize: 32, fontWeight: 900, color: "#fff" }}>1.7 uur</p>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.8)" }}>totale tijd</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <p style={{ fontSize: 32, fontWeight: 900, color: "#fff" }}>Manpower</p>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.8)" }}>klant case</p>
          </div>
        </div>

        {/* Comparison table */}
        <div style={{ borderRadius: 20, border: "1px solid #e5e7eb", overflow: "hidden" }}>
          {/* Header */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 140px 140px", background: "#f8f9fa", padding: "14px 24px", borderBottom: "1px solid #e5e7eb" }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: "#6b7280", textTransform: "uppercase", letterSpacing: "0.05em" }}>Feature</span>
            <span style={{ fontSize: 13, fontWeight: 700, color: "#ef4444", textAlign: "center" }}>Handmatig</span>
            <span style={{ fontSize: 13, fontWeight: 700, color: "#0a66c2", textAlign: "center" }}>Elvatix</span>
          </div>
          {rows.map((row, i) => (
            <motion.div
              key={i}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 140px 140px",
                padding: "16px 24px",
                borderBottom: i < rows.length - 1 ? "1px solid #f3f4f6" : "none",
                alignItems: "center",
              }}
              whileHover={{ background: "#f0f7fe" }}
            >
              <span style={{ fontSize: 14, color: "#374151" }}>{row.label}</span>
              <span style={{ display: "flex", justifyContent: "center" }}>{row.zonder ? <CheckCircleIcon /> : <XIcon />}</span>
              <span style={{ display: "flex", justifyContent: "center" }}>{row.met ? <CheckCircleIcon /> : <XIcon />}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
