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

  const formContent = (
    <div
      id="lead-magnet"
      className={`bg-white border border-gray-200 relative overflow-hidden ${
        compact
          ? "rounded-[20px] p-7 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.03)]"
          : "rounded-2xl p-9 shadow-[0_1px_3px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.04)]"
      }`}
    >
      {compact && (
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-green via-green-light to-amber-400" />
      )}

      {compact && (
        <div className="mb-5">
          <p className="text-[11px] font-bold text-green uppercase tracking-[0.12em] mb-2">AI Recruitment Writer</p>
          <h3 className="text-xl font-extrabold text-gray-900 mb-1">Genereer een bericht</h3>
          <p className="text-xs text-gray-400 leading-normal">{"Plak een LinkedIn URL \u2014 wij schrijven een persoonlijke InMail."}</p>
        </div>
      )}

      {phase === "idle" ? (
        <>
          {/* LinkedIn URL */}
          <div className={compact ? "mb-3.5" : "mb-5"}>
            <label className="block text-[13px] font-semibold text-gray-700 mb-1.5">LinkedIn URL *</label>
            <div className="flex items-center border border-gray-300 rounded-sm overflow-hidden transition-colors">
              <span className="py-3 px-3.5 bg-gray-50 border-r border-gray-300 flex items-center text-text-light">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                </svg>
              </span>
              <input type="url" placeholder="https://linkedin.com/in/jan-jansen"
                value={linkedinUrl} onChange={(e) => setLinkedinUrl(e.target.value)}
                className="flex-1 py-3 px-3.5 border-none outline-none text-sm bg-transparent text-gray-900 font-[inherit]" />
            </div>
          </div>

          {/* Job title */}
          <div className={compact ? "mb-3.5" : "mb-5"}>
            <label className="block text-[13px] font-semibold text-gray-700 mb-1.5">Functie waarvoor je werft</label>
            <input type="text" placeholder="bijv. Senior Software Engineer"
              value={jobTitle} onChange={(e) => setJobTitle(e.target.value)}
              className="w-full py-3 px-3.5 border border-gray-300 rounded-[10px] bg-white text-sm text-gray-900 font-[inherit] outline-none box-border" />
          </div>

          {/* Tone */}
          <div className={compact ? "mb-3.5" : "mb-5"}>
            <label className="block text-[13px] font-semibold text-gray-700 mb-1.5">Toon</label>
            <div className="flex gap-2.5">
              {(["informal", "formal"] as const).map((t) => (
                <button key={t} onClick={() => setTone(t)}
                  className={`flex-1 py-[11px] px-4 rounded-lg text-sm font-semibold cursor-pointer transition-all duration-150 font-[inherit] ${
                    tone === t
                      ? "border-[1.5px] border-green bg-linkedin-light text-green"
                      : "border border-gray-300 bg-white text-gray-500"
                  }`}>
                  {t === "informal" ? "Informeel" : "Formeel"}
                </button>
              ))}
            </div>
          </div>

          {/* Email */}
          <div className={compact ? "mb-[18px]" : "mb-7"}>
            <label className="block text-[13px] font-semibold text-gray-700 mb-1.5">E-mailadres *</label>
            <input type="email" placeholder="naam@bedrijf.nl"
              value={email} onChange={(e) => setEmail(e.target.value)}
              className="w-full py-3 px-3.5 border border-gray-300 rounded-[10px] bg-white text-sm text-gray-900 font-[inherit] outline-none box-border" />
          </div>

          {error && <div className="py-2.5 px-3.5 bg-red-50 border border-red-200 rounded-lg text-red-600 text-[13px] mb-4">{error}</div>}

          <button onClick={handleGenerate} disabled={!email || !linkedinUrl}
            className={`w-full border-none rounded-[10px] font-bold cursor-pointer transition-colors font-[inherit] text-white ${
              !email || !linkedinUrl
                ? "bg-gray-300 cursor-not-allowed"
                : compact
                  ? "bg-gradient-to-br from-green to-green-dark shadow-[0_4px_14px_rgba(141,182,0,0.3)]"
                  : "bg-green"
            } ${compact ? "py-3 px-5 text-sm" : "py-3.5 px-6 text-[15px]"}`}>
            Genereer berichten
          </button>
        </>
      ) : (
        <>
          {/* Progress steps */}
          <div className="flex gap-0.5 mb-7">
            {STEPS.map((step) => {
              const status = getStepStatus(step.key);
              return (
                <div key={step.key} className="flex-1">
                  <div className={`h-[3px] rounded-sm mb-2 transition-colors duration-400 ${
                    status === "done" ? "bg-green"
                    : status === "active" ? "bg-[length:200%_100%] bg-[linear-gradient(90deg,var(--color-green)_0%,var(--color-linkedin)_50%,var(--color-green)_100%)] animate-[lm-shimmer_1.5s_infinite]"
                    : "bg-gray-200"
                  }`} />
                  <span className={`text-[10px] font-semibold uppercase tracking-[0.5px] ${
                    status === "done" ? "text-green" : status === "active" ? "text-linkedin" : "text-gray-300"
                  }`}>{step.label}</span>
                </div>
              );
            })}
          </div>

          {/* Status */}
          {STATUS_TEXT[phase] && (
            <div className="mb-6 py-4 px-5 bg-gray-50 rounded-[10px] border border-gray-200">
              <p className="text-sm font-bold text-gray-900 mb-1">{STATUS_TEXT[phase].title}</p>
              <p className="text-xs text-gray-400">{STATUS_TEXT[phase].sub}</p>
            </div>
          )}

          {/* Profile card */}
          {profile && phase !== "connecting" && phase !== "scanning" && (
            <div className="py-4 px-5 bg-gray-50 rounded-[10px] border border-gray-200 mb-5 animate-[lm-fade-in_0.3s_ease]">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="text-[15px] font-bold text-gray-900 mb-0.5">{profile.fullName}</p>
                  <p className="text-[13px] text-gray-500">{profile.currentTitle}</p>
                  {profile.companyName && <p className="text-xs text-gray-400">{profile.companyName}</p>}
                </div>
                {enriched && (
                  <span className="text-[10px] py-1 px-2 bg-emerald-50 text-emerald-600 rounded-md font-semibold">
                    Enriched
                  </span>
                )}
              </div>
            </div>
          )}

          {/* Generated messages */}
          {(phase === "writing-inmail" || phase === "writing-conn" || phase === "done") && (
            <div>
              <div className="flex gap-1 mb-0">
                {(["inmail", "connection"] as const).map(tab => (
                  <button key={tab} onClick={() => setActiveTab(tab)}
                    className={`flex-1 py-2.5 rounded-t-lg text-[13px] font-semibold cursor-pointer font-[inherit] flex items-center justify-center gap-1.5 ${
                      activeTab === tab
                        ? "bg-surface-alt border border-gray-200 border-b-surface-alt text-gray-900"
                        : "bg-transparent border border-transparent border-b-gray-200 text-gray-400"
                    }`}>
                    {tab === "inmail" ? "InMail" : "Connectieverzoek"}
                    {((tab === "inmail" && (phase === "done" || phase === "writing-conn")) || (tab === "connection" && phase === "done")) && (
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-success">
                        <circle cx="7" cy="7" r="7" fill="currentColor"/>
                        <path d="M4.5 7l1.5 1.5 3.5-3.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </button>
                ))}
              </div>

              {/* InMail content */}
              {activeTab === "inmail" && (
                <div ref={messageRef} className="bg-surface-alt border-x border-b border-gray-200 border-t-0 rounded-b-[10px] p-5 whitespace-pre-wrap text-sm leading-[1.8] text-gray-700 font-[inherit] max-h-[280px] overflow-y-auto">
                  {inmailDisplayed || (
                    <span className="text-gray-300 italic">{"Bericht wordt geschreven\u2026"}</span>
                  )}
                  {phase === "writing-inmail" && inmailDisplayed && (
                    <span className="text-green animate-[lm-blink_0.7s_step-end_infinite]">|</span>
                  )}
                </div>
              )}

              {/* Connection content */}
              {activeTab === "connection" && (
                <div>
                  <div className="bg-surface-alt border-x border-b border-gray-200 border-t-0 rounded-b-[10px] p-5 whitespace-pre-wrap text-sm leading-[1.8] text-gray-700 font-[inherit] min-h-[72px]">
                    {phase === "done" || phase === "writing-conn" ? (
                      <>
                        {connectionDisplayed || (
                          <span className="text-gray-300 italic">{"Wordt opgesteld\u2026"}</span>
                        )}
                        {phase === "writing-conn" && connectionDisplayed && (
                          <span className="text-green animate-[lm-blink_0.7s_step-end_infinite]">|</span>
                        )}
                      </>
                    ) : (
                      <span className="text-gray-300 italic">
                        {"Wordt na InMail gegenereerd\u2026"}
                      </span>
                    )}
                  </div>
                  {phase === "done" && connectionFull && (
                    <p className="text-[11px] text-gray-400 mt-2 mr-1 text-right">
                      {connectionFull.length}/300 karakters
                    </p>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Done actions */}
          {phase === "done" && (
            <div className="mt-6 animate-[lm-fade-in_0.3s_ease]">
              <div className="flex gap-2.5">
                <button onClick={() => { setActiveTab("inmail"); handleCopy("inmail"); }}
                  className={`flex-1 py-3 px-4 rounded-lg text-[13px] font-semibold cursor-pointer transition-all font-[inherit] border-none whitespace-nowrap text-white ${
                    copiedInmail ? "bg-emerald-500" : "bg-green"
                  }`}>
                  {copiedInmail ? "\u2713 Gekopieerd" : "Kopieer InMail"}
                </button>
                <button onClick={() => { setActiveTab("connection"); handleCopy("connection"); }}
                  className={`flex-1 py-3 px-4 rounded-lg text-[13px] font-semibold cursor-pointer transition-all font-[inherit] border-none whitespace-nowrap text-white ${
                    copiedConn ? "bg-emerald-500" : "bg-gray-800"
                  }`}>
                  {copiedConn ? "\u2713 Gekopieerd" : "Kopieer connectieverzoek"}
                </button>
                <button onClick={handleReset}
                  className="py-3 px-4 rounded-lg text-[13px] font-semibold cursor-pointer transition-all font-[inherit] bg-gray-100 text-gray-700 border border-gray-300 whitespace-nowrap">
                  Nieuw
                </button>
              </div>

              {/* Upsell */}
              {!compact && (
                <div className="mt-5 p-5 bg-gray-50 border border-gray-200 rounded-[10px] flex items-center justify-between gap-4 flex-wrap">
                  <div>
                    <p className="text-sm font-bold text-gray-900 mb-1">
                      Onbeperkt berichten + automatische follow-ups?
                    </p>
                    <p className="text-[13px] text-gray-500">
                      Ontdek wat Elvatix voor jouw recruitment kan doen.
                    </p>
                  </div>
                  <a href="/demo" className="py-2.5 px-5 bg-green text-white rounded-lg font-semibold text-[13px] no-underline whitespace-nowrap shrink-0">
                    {"Vraag demo aan \u2192"}
                  </a>
                </div>
              )}
            </div>
          )}

          {error && <div className="py-2.5 px-3.5 bg-red-50 border border-red-200 rounded-lg text-red-600 text-[13px] mt-4">{error}</div>}
        </>
      )}
    </div>
  );

  if (compact) {
    return (
      <>
        {formContent}
        <div className="flex justify-center gap-5 mt-3.5">
          {[
            { icon: "\ud83d\udd12", text: "Veilig & privé" },
            { icon: "\u26a1", text: "Klaar in ~15 sec" },
            { icon: "\ud83c\udfaf", text: "5x gratis per uur" },
          ].map((item, i) => (
            <span key={i} className="text-[11px] text-gray-400 flex items-center gap-1">
              <span>{item.icon}</span> {item.text}
            </span>
          ))}
        </div>
        <style>{`
          @keyframes lm-pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
          @keyframes lm-shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
          @keyframes lm-blink { 50% { opacity: 0; } }
          @keyframes lm-fade-in { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
          #lead-magnet input:focus { outline: none; border-color: var(--color-green); box-shadow: 0 0 0 2px rgba(141, 182, 0, 0.08); }
        `}</style>
      </>
    );
  }

  return (
    <section className="py-[100px] px-6 bg-gray-50 relative">
      <div className="max-w-[720px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold text-green tracking-[1px] uppercase mb-4">
            AI Recruitment Writer
          </span>
          <h2 className="text-[clamp(26px,3.5vw,42px)] font-extrabold text-gray-900 mb-3 leading-[1.15] tracking-tight">
            Genereer een gepersonaliseerd bericht
          </h2>
          <p className="text-base text-gray-500 max-w-[520px] mx-auto leading-relaxed">
            {"Plak een LinkedIn URL \u2014 wij scrapen het profiel en schrijven een InMail en connectieverzoek op maat."}
          </p>
        </div>

        {formContent}

        {/* Trust */}
        <div className="flex justify-center gap-6 mt-7 flex-wrap">
          {[
            { icon: "\ud83d\udd12", text: "Veilig & privé" },
            { icon: "\u26a1", text: "Klaar in ~15 sec" },
            { icon: "\ud83c\udfaf", text: "5x gratis per uur" },
          ].map((item, i) => (
            <span key={i} className="text-xs text-gray-400 flex items-center gap-1.5">
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
        #lead-magnet input:focus { outline: none; border-color: var(--color-green); box-shadow: 0 0 0 2px rgba(141, 182, 0, 0.08); }
        @media (max-width: 640px) { #lead-magnet .lm-actions { flex-direction: column; } }
      `}</style>
    </section>
  );
}
