"use client";
import { useState, useEffect, useRef, useCallback } from "react";

interface ProfileData {
  fullName: string;
  firstName?: string;
  lastName?: string;
  currentTitle: string;
  companyName: string;
  headline: string;
  location: string;
  jobHistory: string[];
  skills: string[];
}

type Phase =
  | "idle"
  | "connecting"
  | "scanning"
  | "found"
  | "analyzing"
  | "writing-inmail"
  | "writing-conn"
  | "done";

const STEPS = [
  { key: "connecting", label: "Verbinden" },
  { key: "scanning", label: "Scannen" },
  { key: "found", label: "Profiel" },
  { key: "analyzing", label: "Analyseren" },
  { key: "writing-inmail", label: "InMail" },
  { key: "writing-conn", label: "Connectie" },
];

const STATUS_TEXT: Record<string, { title: string; sub: string }> = {
  connecting: { title: "Verbinding maken met LinkedIn\u2026", sub: "Profiel wordt opgezocht" },
  scanning: { title: "Profiel wordt gescand\u2026", sub: "Data ophalen" },
  found: { title: "Profiel gevonden", sub: "Gegevens succesvol opgehaald" },
  analyzing: { title: "Profiel wordt geanalyseerd\u2026", sub: "Beste insteek bepalen" },
  "writing-inmail": { title: "InMail wordt geschreven\u2026", sub: "Gepersonaliseerd bericht genereren" },
  "writing-conn": { title: "Connectieverzoek wordt opgesteld\u2026", sub: "Kort bericht genereren" },
  done: { title: "Klaar", sub: "Kopieer en verstuur via LinkedIn" },
};

export default function LeadMagnet({ compact = false }: { compact?: boolean }) {
  const [linkedinUrl, setLinkedinUrl] = useState("");
  const [email, setEmail] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [tone, setTone] = useState<"informal" | "formal">("informal");
  const [phase, setPhase] = useState<Phase>("idle");
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [enriched, setEnriched] = useState(false);
  const [inmailFull, setInmailFull] = useState("");
  const [inmailDisplayed, setInmailDisplayed] = useState("");
  const [connectionFull, setConnectionFull] = useState("");
  const [connectionDisplayed, setConnectionDisplayed] = useState("");
  const [error, setError] = useState("");
  const [copiedInmail, setCopiedInmail] = useState(false);
  const [copiedConn, setCopiedConn] = useState(false);
  const [activeTab, setActiveTab] = useState<"inmail" | "connection">("inmail");
  const typewriterRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const messageRef = useRef<HTMLDivElement>(null);

  // Typewriter for InMail
  useEffect(() => {
    if (phase === "writing-inmail" && inmailFull) {
      let i = 0;
      setInmailDisplayed("");
      typewriterRef.current = setInterval(() => {
        i++;
        setInmailDisplayed(inmailFull.slice(0, i));
        if (i >= inmailFull.length) {
          clearInterval(typewriterRef.current!);
          setTimeout(() => setPhase("writing-conn"), 600);
        }
      }, 18);
      return () => { if (typewriterRef.current) clearInterval(typewriterRef.current); };
    }
  }, [phase, inmailFull]);

  // Typewriter for connection request
  useEffect(() => {
    if (phase === "writing-conn" && connectionFull) {
      let i = 0;
      setConnectionDisplayed("");
      setActiveTab("connection");
      typewriterRef.current = setInterval(() => {
        i++;
        setConnectionDisplayed(connectionFull.slice(0, i));
        if (i >= connectionFull.length) {
          clearInterval(typewriterRef.current!);
          setTimeout(() => setPhase("done"), 400);
        }
      }, 22);
      return () => { if (typewriterRef.current) clearInterval(typewriterRef.current); };
    }
  }, [phase, connectionFull]);

  useEffect(() => {
    if (messageRef.current) {
      messageRef.current.scrollTop = messageRef.current.scrollHeight;
    }
  }, [inmailDisplayed, connectionDisplayed]);

  const handleGenerate = useCallback(async () => {
    setError("");
    setPhase("connecting");

    try {
      await new Promise(r => setTimeout(r, 1000));
      setPhase("scanning");

      const scrapeRes = await fetch("/api/scrape-profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ linkedinUrl }),
      });
      const scrapeData = await scrapeRes.json();

      if (!scrapeRes.ok) {
        setError(scrapeData.error || "Scraping mislukt.");
        setPhase("idle");
        return;
      }

      setProfile(scrapeData.profile);
      setEnriched(scrapeData.enriched);
      setPhase("found");

      await new Promise(r => setTimeout(r, 1500));
      setPhase("analyzing");
      await new Promise(r => setTimeout(r, 1500));

      setPhase("writing-inmail");

      const genRes = await fetch("/api/generate-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, jobTitle, tone, profile: scrapeData.profile }),
      });
      const genData = await genRes.json();

      if (!genRes.ok) {
        setError(genData.error || "Generatie mislukt.");
        setPhase("idle");
        return;
      }

      setInmailFull(genData.message);
      setConnectionFull(genData.connectionRequest || "");
    } catch {
      setError("Er is een fout opgetreden. Probeer het opnieuw.");
      setPhase("idle");
    }
  }, [linkedinUrl, email, jobTitle, tone]);

  const handleCopy = (type: "inmail" | "connection") => {
    const text = type === "inmail" ? inmailFull : connectionFull;
    navigator.clipboard.writeText(text);
    if (type === "inmail") { setCopiedInmail(true); setTimeout(() => setCopiedInmail(false), 2500); }
    else { setCopiedConn(true); setTimeout(() => setCopiedConn(false), 2500); }
  };

  const handleReset = () => {
    setPhase("idle");
    setInmailFull(""); setInmailDisplayed("");
    setConnectionFull(""); setConnectionDisplayed("");
    setLinkedinUrl(""); setJobTitle(""); setError("");
    setEnriched(false); setProfile(null);
    setActiveTab("inmail");
  };

  const phaseOrder: Phase[] = ["connecting", "scanning", "found", "analyzing", "writing-inmail", "writing-conn", "done"];
  const currentIdx = phaseOrder.indexOf(phase);

  const getStepStatus = (stepKey: string) => {
    const stepIdx = phaseOrder.indexOf(stepKey as Phase);
    if (stepIdx < currentIdx) return "done";
    if (stepIdx === currentIdx) return "active";
    return "pending";
  };

  // The form card content (shared between compact and full modes)
  const formContent = (
    <div id="lead-magnet" style={{
      background: "#ffffff", borderRadius: compact ? 20 : 16, padding: compact ? "28px 24px" : "36px 32px",
      boxShadow: compact
        ? "0 25px 50px -12px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.03)"
        : "0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)",
      border: "1px solid #e5e7eb",
      position: "relative" as const,
      overflow: "hidden" as const,
    }}>
      {compact && (
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, #8db600, #a3c520, #fbbf24)" }} />
      )}

      {compact && (
        <div style={{ marginBottom: 20 }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: "#8db600", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 8 }}>AI Recruitment Writer</p>
          <h3 style={{ fontSize: 20, fontWeight: 800, color: "#111", marginBottom: 4 }}>Genereer een bericht</h3>
          <p style={{ fontSize: 12, color: "#9ca3af", lineHeight: 1.5 }}>Plak een LinkedIn URL \u2014 wij schrijven een persoonlijke InMail.</p>
        </div>
      )}

      {phase === "idle" ? (
        <>
          {/* LinkedIn URL */}
          <div style={{ marginBottom: compact ? 14 : 20 }}>
            <label style={labelStyle}>LinkedIn URL *</label>
            <div style={{
              display: "flex", alignItems: "center",
              border: "1px solid #d1d5db", borderRadius: 10, overflow: "hidden",
              transition: "border-color 0.2s",
            }}>
              <span style={{
                padding: "12px 14px", background: "#f9fafb", borderRight: "1px solid #d1d5db",
                display: "flex", alignItems: "center",
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                </svg>
              </span>
              <input type="url" placeholder="https://linkedin.com/in/jan-jansen"
                value={linkedinUrl} onChange={(e) => setLinkedinUrl(e.target.value)}
                style={inputStyle} />
            </div>
          </div>

          {/* Job title */}
          <div style={{ marginBottom: compact ? 14 : 20 }}>
            <label style={labelStyle}>Functie waarvoor je werft</label>
            <input type="text" placeholder="bijv. Senior Software Engineer"
              value={jobTitle} onChange={(e) => setJobTitle(e.target.value)}
              style={{ ...inputStyle, ...fullInputStyle }} />
          </div>

          {/* Tone */}
          <div style={{ marginBottom: compact ? 14 : 20 }}>
            <label style={labelStyle}>Toon</label>
            <div style={{ display: "flex", gap: 10 }}>
              {(["informal", "formal"] as const).map((t) => (
                <button key={t} onClick={() => setTone(t)} style={{
                  flex: 1, padding: "11px 16px", borderRadius: 8,
                  border: tone === t ? "1.5px solid #8db600" : "1px solid #d1d5db",
                  background: tone === t ? "#f0f3ff" : "#fff",
                  color: tone === t ? "#8db600" : "#6b7280",
                  fontWeight: 600, fontSize: 14, cursor: "pointer",
                  transition: "all 0.15s ease", fontFamily: "inherit",
                }}>
                  {t === "informal" ? "Informeel" : "Formeel"}
                </button>
              ))}
            </div>
          </div>

          {/* Email */}
          <div style={{ marginBottom: compact ? 18 : 28 }}>
            <label style={labelStyle}>E-mailadres *</label>
            <input type="email" placeholder="naam@bedrijf.nl"
              value={email} onChange={(e) => setEmail(e.target.value)}
              style={{ ...inputStyle, ...fullInputStyle }} />
          </div>

          {error && <div style={errorStyle}>{error}</div>}

          <button onClick={handleGenerate} disabled={!email || !linkedinUrl} style={{
            width: "100%", padding: compact ? "12px 20px" : "14px 24px",
            background: !email || !linkedinUrl ? "#d1d5db" : compact ? "linear-gradient(135deg, #8db600, #7aa300)" : "#8db600",
            color: "white", border: "none", borderRadius: 10,
            fontSize: compact ? 14 : 15, fontWeight: 700, cursor: !email || !linkedinUrl ? "not-allowed" : "pointer",
            transition: "background 0.2s", fontFamily: "inherit",
            boxShadow: compact ? "0 4px 14px rgba(141,182,0,0.3)" : "none",
          }}>
            Genereer berichten
          </button>
        </>
      ) : (
        <>
          {/* Progress steps */}
          <div style={{ display: "flex", gap: 2, marginBottom: 28 }}>
            {STEPS.map((step) => {
              const status = getStepStatus(step.key);
              return (
                <div key={step.key} style={{ flex: 1 }}>
                  <div style={{
                    height: 3, borderRadius: 2, marginBottom: 8,
                    background: status === "done" ? "#8db600"
                      : status === "active" ? "#93a6f5"
                      : "#e5e7eb",
                    transition: "background 0.4s ease",
                    ...(status === "active" ? {
                      backgroundSize: "200% 100%",
                      backgroundImage: "linear-gradient(90deg, #8db600 0%, #93a6f5 50%, #8db600 100%)",
                      animation: "lm-shimmer 1.5s infinite",
                    } : {}),
                  }} />
                  <span style={{
                    fontSize: 10, fontWeight: 600,
                    color: status === "done" ? "#8db600" : status === "active" ? "#4361ee" : "#d1d5db",
                    textTransform: "uppercase", letterSpacing: "0.5px",
                  }}>{step.label}</span>
                </div>
              );
            })}
          </div>

          {/* Status */}
          {STATUS_TEXT[phase] && (
            <div style={{ marginBottom: 24, padding: "16px 20px", background: "#f9fafb", borderRadius: 10, border: "1px solid #e5e7eb" }}>
              <p style={{ fontSize: 14, fontWeight: 700, color: "#111827", marginBottom: 4 }}>
                {STATUS_TEXT[phase].title}
              </p>
              <p style={{ fontSize: 12, color: "#9ca3af" }}>
                {STATUS_TEXT[phase].sub}
              </p>
            </div>
          )}

          {/* Profile card */}
          {profile && phase !== "connecting" && phase !== "scanning" && (
            <div style={{
              padding: "16px 20px", background: "#f9fafb", borderRadius: 10,
              border: "1px solid #e5e7eb", marginBottom: 20,
              animation: "lm-fade-in 0.3s ease",
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                <div>
                  <p style={{ fontSize: 15, fontWeight: 700, color: "#111827", marginBottom: 2 }}>{profile.fullName}</p>
                  <p style={{ fontSize: 13, color: "#6b7280" }}>{profile.currentTitle}</p>
                  {profile.companyName && <p style={{ fontSize: 12, color: "#9ca3af" }}>{profile.companyName}</p>}
                </div>
                {enriched && (
                  <span style={{ fontSize: 10, padding: "4px 8px", background: "#ecfdf5", color: "#059669", borderRadius: 6, fontWeight: 600 }}>
                    Enriched
                  </span>
                )}
              </div>
            </div>
          )}

          {/* Generated messages */}
          {(phase === "writing-inmail" || phase === "writing-conn" || phase === "done") && (
            <div>
              <div style={{ display: "flex", gap: 4, marginBottom: 0 }}>
                {(["inmail", "connection"] as const).map(tab => (
                  <button key={tab} onClick={() => setActiveTab(tab)} style={{
                    flex: 1, padding: "10px", borderRadius: "8px 8px 0 0",
                    background: activeTab === tab ? "#fafbfc" : "transparent",
                    border: activeTab === tab ? "1px solid #e5e7eb" : "1px solid transparent",
                    borderBottom: activeTab === tab ? "1px solid #fafbfc" : "1px solid #e5e7eb",
                    color: activeTab === tab ? "#111827" : "#9ca3af",
                    fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "inherit",
                    display: "flex", alignItems: "center", gap: 6,
                  }}>
                    {tab === "inmail" ? "InMail" : "Connectieverzoek"}
                    {((tab === "inmail" && (phase === "done" || phase === "writing-conn")) || (tab === "connection" && phase === "done")) && (
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <circle cx="7" cy="7" r="7" fill="#10b981"/>
                        <path d="M4.5 7l1.5 1.5 3.5-3.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </button>
                ))}
              </div>

              {/* InMail content */}
              {activeTab === "inmail" && (
                <div ref={messageRef} style={{
                  ...messageBoxStyle, maxHeight: 280, overflowY: "auto",
                }}>
                  {inmailDisplayed || (
                    <span style={{ color: "#d1d5db", fontStyle: "italic" }}>Bericht wordt geschreven\u2026</span>
                  )}
                  {phase === "writing-inmail" && inmailDisplayed && (
                    <span style={{ color: "#8db600", animation: "lm-blink 0.7s step-end infinite" }}>|</span>
                  )}
                </div>
              )}

              {/* Connection content */}
              {activeTab === "connection" && (
                <div>
                  <div style={{ ...messageBoxStyle, minHeight: 72 }}>
                    {phase === "done" || phase === "writing-conn" ? (
                      <>
                        {connectionDisplayed || (
                          <span style={{ color: "#d1d5db", fontStyle: "italic" }}>Wordt opgesteld\u2026</span>
                        )}
                        {phase === "writing-conn" && connectionDisplayed && (
                          <span style={{ color: "#8db600", animation: "lm-blink 0.7s step-end infinite" }}>|</span>
                        )}
                      </>
                    ) : (
                      <span style={{ color: "#d1d5db", fontStyle: "italic" }}>
                        Wordt na InMail gegenereerd\u2026
                      </span>
                    )}
                  </div>
                  {phase === "done" && connectionFull && (
                    <p style={{ fontSize: 11, color: "#9ca3af", margin: "8px 4px 0", textAlign: "right" }}>
                      {connectionFull.length}/300 karakters
                    </p>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Done actions */}
          {phase === "done" && (
            <div style={{ marginTop: 24, animation: "lm-fade-in 0.3s ease" }}>
              <div style={{ display: "flex", gap: 10 }}>
                <button onClick={() => { setActiveTab("inmail"); handleCopy("inmail"); }}
                  style={{
                    ...actionBtnStyle,
                    flex: 1,
                    background: copiedInmail ? "#10b981" : "#8db600",
                    color: "white",
                  }}>
                  {copiedInmail ? "\u2713 Gekopieerd" : "Kopieer InMail"}
                </button>
                <button onClick={() => { setActiveTab("connection"); handleCopy("connection"); }}
                  style={{
                    ...actionBtnStyle,
                    flex: 1,
                    background: copiedConn ? "#10b981" : "#111827",
                    color: "white",
                  }}>
                  {copiedConn ? "\u2713 Gekopieerd" : "Kopieer connectieverzoek"}
                </button>
                <button onClick={handleReset}
                  style={{
                    ...actionBtnStyle,
                    background: "#f3f4f6", color: "#374151", border: "1px solid #d1d5db",
                  }}>
                  Nieuw
                </button>
              </div>

              {/* Upsell */}
              {!compact && (
                <div style={{
                  marginTop: 20, padding: "20px", background: "#f9fafb",
                  border: "1px solid #e5e7eb", borderRadius: 10,
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  gap: 16, flexWrap: "wrap",
                }}>
                  <div>
                    <p style={{ fontSize: 14, fontWeight: 700, color: "#111827", margin: "0 0 4px" }}>
                      Onbeperkt berichten + automatische follow-ups?
                    </p>
                    <p style={{ fontSize: 13, color: "#6b7280", margin: 0 }}>
                      Ontdek wat Elvatix voor jouw recruitment kan doen.
                    </p>
                  </div>
                  <a href="/demo" style={{
                    padding: "10px 20px", background: "#8db600", color: "white",
                    borderRadius: 8, fontWeight: 600, fontSize: 13,
                    textDecoration: "none", whiteSpace: "nowrap", flexShrink: 0,
                  }}>
                    Vraag demo aan \u2192
                  </a>
                </div>
              )}
            </div>
          )}

          {error && <div style={{ ...errorStyle, marginTop: 16 }}>{error}</div>}
        </>
      )}
    </div>
  );

  // Compact mode: just render the card directly
  if (compact) {
    return (
      <>
        {formContent}
        <div style={{ display: "flex", justifyContent: "center", gap: 20, marginTop: 14 }}>
          {[
            { icon: "\ud83d\udd12", text: "Veilig & priv\u00e9" },
            { icon: "\u26a1", text: "Klaar in ~15 sec" },
            { icon: "\ud83c\udfaf", text: "5x gratis per uur" },
          ].map((item, i) => (
            <span key={i} style={{ fontSize: 11, color: "#9ca3af", display: "flex", alignItems: "center", gap: 4 }}>
              <span>{item.icon}</span> {item.text}
            </span>
          ))}
        </div>
        <style>{`
          @keyframes lm-pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
          @keyframes lm-shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
          @keyframes lm-blink { 50% { opacity: 0; } }
          @keyframes lm-fade-in { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
          #lead-magnet input:focus { outline: none; border-color: #8db600 !important; box-shadow: 0 0 0 2px rgba(67, 97, 238, 0.08); }
        `}</style>
      </>
    );
  }

  // Full mode: section wrapper with header
  return (
    <section style={{
      padding: "100px 24px",
      background: "#f9fafb",
      position: "relative",
    }}>
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <span style={{
            display: "inline-block", fontSize: 12, fontWeight: 600, color: "#8db600",
            letterSpacing: "1px", textTransform: "uppercase", marginBottom: 16,
          }}>
            AI Recruitment Writer
          </span>
          <h2 style={{
            fontSize: "clamp(26px, 3.5vw, 42px)", fontWeight: 800, color: "#111827",
            marginBottom: 12, lineHeight: 1.15, letterSpacing: "-0.025em",
          }}>
            Genereer een gepersonaliseerd bericht
          </h2>
          <p style={{ fontSize: 16, color: "#6b7280", maxWidth: 520, margin: "0 auto", lineHeight: 1.7 }}>
            Plak een LinkedIn URL \u2014 wij scrapen het profiel en schrijven een InMail en connectieverzoek op maat.
          </p>
        </div>

        {formContent}

        {/* Trust */}
        <div style={{ display: "flex", justifyContent: "center", gap: 24, marginTop: 28, flexWrap: "wrap" }}>
          {[
            { icon: "\ud83d\udd12", text: "Veilig & priv\u00e9" },
            { icon: "\u26a1", text: "Klaar in ~15 sec" },
            { icon: "\ud83c\udfaf", text: "5x gratis per uur" },
          ].map((item, i) => (
            <span key={i} style={{ fontSize: 12, color: "#9ca3af", display: "flex", alignItems: "center", gap: 5 }}>
              <span>{item.icon}</span> {item.text}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes lm-pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
        @keyframes lm-shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
        @keyframes lm-blink { 50% { opacity: 0; } }
        @keyframes lm-fade-in { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
        #lead-magnet input:focus { outline: none; border-color: #8db600 !important; box-shadow: 0 0 0 2px rgba(67, 97, 238, 0.08); }
        @media (max-width: 640px) { #lead-magnet .lm-actions { flex-direction: column; } }
      `}</style>
    </section>
  );
}

// Shared styles
const labelStyle: React.CSSProperties = {
  display: "block", fontSize: 13, fontWeight: 600, color: "#374151",
  marginBottom: 6,
};

const inputStyle: React.CSSProperties = {
  flex: 1, padding: "12px 14px", border: "none", outline: "none",
  fontSize: 14, background: "transparent", color: "#111827", fontFamily: "inherit",
};

const fullInputStyle: React.CSSProperties = {
  width: "100%", border: "1px solid #d1d5db", borderRadius: 10,
  background: "#ffffff", boxSizing: "border-box" as const,
};

const messageBoxStyle: React.CSSProperties = {
  background: "#fafbfc", borderLeft: "1px solid #e5e7eb", borderRight: "1px solid #e5e7eb",
  borderBottom: "1px solid #e5e7eb", borderTop: "none",
  borderRadius: "0 0 10px 10px", padding: "20px",
  whiteSpace: "pre-wrap" as const, fontSize: 14, lineHeight: 1.8, color: "#374151", fontFamily: "inherit",
};

const errorStyle: React.CSSProperties = {
  padding: "10px 14px", background: "#fef2f2", border: "1px solid #fecaca",
  borderRadius: 8, color: "#dc2626", fontSize: 13, marginBottom: 16,
};

const actionBtnStyle: React.CSSProperties = {
  padding: "12px 16px", borderRadius: 8, fontSize: 13, fontWeight: 600,
  cursor: "pointer", transition: "all 0.15s ease", fontFamily: "inherit",
  border: "none", whiteSpace: "nowrap" as const,
};
