"use client";
import { useState } from "react";

interface ProfileSummary {
  name: string;
  title: string;
  company: string;
  headline: string;
}

export default function LeadMagnet() {
  const [linkedinUrl, setLinkedinUrl] = useState("");
  const [email, setEmail] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [tone, setTone] = useState<"informal" | "formal">("informal");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const [step, setStep] = useState<1 | 2>(1);
  const [enriched, setEnriched] = useState(false);
  const [profileSummary, setProfileSummary] = useState<ProfileSummary | null>(null);

  const handleGenerate = async () => {
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/generate-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ linkedinUrl, email, jobTitle, tone }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Er is een fout opgetreden.");
        return;
      }
      setMessage(data.message);
      setEnriched(data.enriched || false);
      setProfileSummary(data.profileSummary || null);
      setStep(2);
    } catch {
      setError("Kan geen verbinding maken. Probeer het opnieuw.");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(message);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    setStep(1);
    setMessage("");
    setLinkedinUrl("");
    setJobTitle("");
    setError("");
    setEnriched(false);
    setProfileSummary(null);
  };

  return (
    <section id="lead-magnet" style={{
      padding: "100px 24px",
      background: "linear-gradient(180deg, #f8fafc 0%, #eef2ff 100%)",
    }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "#eef2ff",
            border: "1px solid #c7d2fe",
            borderRadius: 9999,
            padding: "6px 16px",
            marginBottom: 20,
          }}>
            <span style={{ fontSize: 14 }}>✨</span>
            <span style={{ fontSize: 13, fontWeight: 600, color: "#4361ee" }}>Gratis AI InMail Generator</span>
          </div>
          <h2 style={{
            fontSize: "clamp(28px, 4vw, 44px)",
            fontWeight: 900,
            color: "#111",
            marginBottom: 16,
            lineHeight: 1.15,
          }}>
            Genereer nu een{" "}
            <span style={{
              background: "linear-gradient(135deg, #4361ee, #7c3aed)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              gepersonaliseerd bericht
            </span>
          </h2>
          <p style={{ fontSize: 17, color: "#6b7280", maxWidth: 540, margin: "0 auto", lineHeight: 1.6 }}>
            Plak een LinkedIn profiel-URL en ontvang direct een AI-gegenereerd InMail bericht op basis van het échte profiel.
          </p>
        </div>

        {/* Card */}
        <div style={{
          background: "#fff",
          borderRadius: 24,
          padding: "40px 36px",
          boxShadow: "0 4px 24px rgba(0,0,0,0.06), 0 1px 4px rgba(0,0,0,0.04)",
          border: "1px solid #e5e7eb",
        }}>
          {step === 1 ? (
            <>
              {/* LinkedIn URL */}
              <div style={{ marginBottom: 20 }}>
                <label style={{ display: "block", fontSize: 14, fontWeight: 600, color: "#374151", marginBottom: 6 }}>
                  LinkedIn profiel-URL *
                </label>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  background: "#f9fafb",
                  border: "1px solid #d1d5db",
                  borderRadius: 12,
                  overflow: "hidden",
                }}>
                  <span style={{ padding: "12px 14px", color: "#9ca3af", fontSize: 14, borderRight: "1px solid #e5e7eb", background: "#f3f4f6", flexShrink: 0 }}>
                    🔗
                  </span>
                  <input
                    type="url"
                    placeholder="https://linkedin.com/in/jan-jansen"
                    value={linkedinUrl}
                    onChange={(e) => setLinkedinUrl(e.target.value)}
                    style={{
                      flex: 1,
                      padding: "14px 16px",
                      border: "none",
                      outline: "none",
                      fontSize: 15,
                      background: "transparent",
                      color: "#111",
                    }}
                  />
                </div>
                <p style={{ fontSize: 12, color: "#9ca3af", marginTop: 4 }}>
                  We scrapen automatisch naam, functie, headline en werkervaring.
                </p>
              </div>

              {/* Job Title */}
              <div style={{ marginBottom: 20 }}>
                <label style={{ display: "block", fontSize: 14, fontWeight: 600, color: "#374151", marginBottom: 6 }}>
                  Functie waarvoor je werft
                </label>
                <input
                  type="text"
                  placeholder="bijv. Senior Software Engineer"
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "14px 16px",
                    border: "1px solid #d1d5db",
                    borderRadius: 12,
                    fontSize: 15,
                    outline: "none",
                    background: "#f9fafb",
                    color: "#111",
                    boxSizing: "border-box",
                  }}
                />
              </div>

              {/* Tone selector */}
              <div style={{ marginBottom: 24 }}>
                <label style={{ display: "block", fontSize: 14, fontWeight: 600, color: "#374151", marginBottom: 8 }}>
                  Toon
                </label>
                <div style={{ display: "flex", gap: 12 }}>
                  {(["informal", "formal"] as const).map((t) => (
                    <button
                      key={t}
                      onClick={() => setTone(t)}
                      style={{
                        flex: 1,
                        padding: "12px 20px",
                        borderRadius: 12,
                        border: tone === t ? "2px solid #4361ee" : "1px solid #d1d5db",
                        background: tone === t ? "#eef2ff" : "#fff",
                        color: tone === t ? "#4361ee" : "#6b7280",
                        fontWeight: 600,
                        fontSize: 14,
                        cursor: "pointer",
                        transition: "all 0.2s",
                      }}
                    >
                      {t === "informal" ? "😊 Informeel" : "👔 Formeel"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Email */}
              <div style={{ marginBottom: 24 }}>
                <label style={{ display: "block", fontSize: 14, fontWeight: 600, color: "#374151", marginBottom: 6 }}>
                  Jouw e-mailadres *
                </label>
                <input
                  type="email"
                  placeholder="naam@bedrijf.nl"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "14px 16px",
                    border: "1px solid #d1d5db",
                    borderRadius: 12,
                    fontSize: 15,
                    outline: "none",
                    background: "#f9fafb",
                    color: "#111",
                    boxSizing: "border-box",
                  }}
                />
                <p style={{ fontSize: 12, color: "#9ca3af", marginTop: 4 }}>
                  We gebruiken dit alleen om je bericht te verzenden. Geen spam.
                </p>
              </div>

              {/* Error */}
              {error && (
                <div style={{
                  padding: "12px 16px",
                  background: "#fef2f2",
                  border: "1px solid #fecaca",
                  borderRadius: 8,
                  color: "#dc2626",
                  fontSize: 14,
                  marginBottom: 16,
                }}>
                  {error}
                </div>
              )}

              {/* Submit */}
              <button
                onClick={handleGenerate}
                disabled={loading || !email || !linkedinUrl}
                style={{
                  width: "100%",
                  padding: "16px 32px",
                  background: loading ? "#9ca3af" : "linear-gradient(135deg, #4361ee, #7c3aed)",
                  color: "white",
                  border: "none",
                  borderRadius: 14,
                  fontSize: 16,
                  fontWeight: 700,
                  cursor: loading ? "not-allowed" : "pointer",
                  transition: "all 0.2s",
                  opacity: !email || !linkedinUrl ? 0.5 : 1,
                }}
              >
                {loading ? (
                  <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
                    <span style={{
                      display: "inline-block",
                      width: 18,
                      height: 18,
                      border: "2px solid rgba(255,255,255,0.3)",
                      borderTop: "2px solid white",
                      borderRadius: "50%",
                      animation: "spin 0.8s linear infinite",
                    }} />
                    Profiel wordt gescraped & bericht gegenereerd...
                  </span>
                ) : (
                  "✨ Genereer InMail bericht"
                )}
              </button>
            </>
          ) : (
            /* Step 2: Result */
            <>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
                <span style={{ fontSize: 24 }}>🎉</span>
                <h3 style={{ fontSize: 20, fontWeight: 700, color: "#111" }}>
                  Je bericht is klaar!
                </h3>
              </div>

              {/* Enriched profile badge */}
              {enriched && profileSummary && (
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "12px 16px",
                  background: "#f0fdf4",
                  border: "1px solid #bbf7d0",
                  borderRadius: 12,
                  marginBottom: 20,
                }}>
                  <span style={{ fontSize: 18 }}>✅</span>
                  <div>
                    <p style={{ fontSize: 13, fontWeight: 600, color: "#166534" }}>
                      Profiel gescraped: {profileSummary.name}
                    </p>
                    <p style={{ fontSize: 12, color: "#15803d" }}>
                      {profileSummary.title}{profileSummary.company ? ` bij ${profileSummary.company}` : ""}
                    </p>
                  </div>
                </div>
              )}

              <div style={{
                background: "#f9fafb",
                border: "1px solid #e5e7eb",
                borderRadius: 16,
                padding: 24,
                marginBottom: 20,
                whiteSpace: "pre-wrap",
                fontSize: 15,
                lineHeight: 1.7,
                color: "#374151",
              }}>
                {message}
              </div>

              <div style={{ display: "flex", gap: 12 }}>
                <button
                  onClick={handleCopy}
                  style={{
                    flex: 1,
                    padding: "14px 24px",
                    background: copied ? "#10b981" : "linear-gradient(135deg, #4361ee, #7c3aed)",
                    color: "white",
                    border: "none",
                    borderRadius: 12,
                    fontSize: 15,
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                >
                  {copied ? "✅ Gekopieerd!" : "📋 Kopieer bericht"}
                </button>
                <button
                  onClick={handleReset}
                  style={{
                    padding: "14px 24px",
                    background: "#fff",
                    color: "#4361ee",
                    border: "1px solid #4361ee",
                    borderRadius: 12,
                    fontSize: 15,
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                >
                  🔄 Nieuw bericht
                </button>
              </div>

              <div style={{
                marginTop: 24,
                padding: "16px 20px",
                background: "#eef2ff",
                borderRadius: 12,
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}>
                <span style={{ fontSize: 20 }}>💡</span>
                <p style={{ fontSize: 14, color: "#4361ee", fontWeight: 500 }}>
                  Wil je <strong>onbeperkt</strong> berichten genereren + automatische follow-ups?{" "}
                  <a href="/demo" style={{ textDecoration: "underline", fontWeight: 700 }}>Vraag een demo aan</a>
                </p>
              </div>
            </>
          )}
        </div>

        {/* Trust indicators */}
        <div style={{ display: "flex", justifyContent: "center", gap: 32, marginTop: 32, flexWrap: "wrap" }}>
          {[
            { icon: "🔒", label: "Veilig & privé" },
            { icon: "⚡", label: "Klaar in 5 sec" },
            { icon: "🆓", label: "Gratis, geen account" },
            { icon: "🔍", label: "Scraped échte profieldata" },
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ fontSize: 16 }}>{item.icon}</span>
              <span style={{ fontSize: 13, fontWeight: 500, color: "#6b7280" }}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </section>
  );
}
