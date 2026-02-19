import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Elvatix | AI-Powered LinkedIn Recruitment Copilot";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0a66c2 0%, #004182 50%, #001d3d 100%)",
          fontFamily: "Inter, system-ui, sans-serif",
        }}
      >
        {/* Logo */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 900,
            color: "white",
            letterSpacing: "-0.03em",
            marginBottom: 16,
          }}
        >
          Elvatix
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 28,
            fontWeight: 600,
            color: "rgba(255,255,255,0.9)",
            marginBottom: 24,
          }}
        >
          AI-Powered LinkedIn Recruitment Copilot
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: 20,
            color: "rgba(255,255,255,0.7)",
            maxWidth: 600,
            textAlign: "center",
            lineHeight: 1.5,
          }}
        >
          Genereer persoonlijke InMails in 30 seconden.
          Bespaar 4-6 uur per week.
        </div>

        {/* Badge */}
        <div
          style={{
            marginTop: 32,
            padding: "10px 24px",
            borderRadius: 9999,
            background: "rgba(255,255,255,0.15)",
            color: "white",
            fontSize: 16,
            fontWeight: 600,
          }}
        >
          elvatix.com
        </div>
      </div>
    ),
    { ...size }
  );
}
