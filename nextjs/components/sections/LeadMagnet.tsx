"use client";
import { ShieldIcon, ZapIcon, TargetIcon } from '@/components/icons/Icons';
import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";

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


const ROLE_SUGGESTIONS = [
  "Software Engineer", "Data Engineer", "Product Manager", "UX Designer",
  "DevOps Engineer", "Sales Manager", "Account Manager", "Marketing Manager",
  "Finance Controller", "Project Manager", "Full Stack Developer", "Cloud Engineer",
];

const TONE_OPTIONS = [
  { value: "informeel", label: "Informeel" },
  { value: "professioneel", label: "Professioneel" },
  { value: "formeel", label: "Formeel" },
  { value: "enthousiast", label: "Enthousiast" },
];

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
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [tone, setTone] = useState("informeel");
  const [senderName, setSenderName] = useState("");
  const [isAdvanced, setIsAdvanced] = useState(false);
  const [vacancyText, setVacancyText] = useState("");
  const [customInstruction, setCustomInstruction] = useState("");
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
  const [progress, setProgress] = useState(0);
  const [statusMsgIdx, setStatusMsgIdx] = useState(0);

  const profileFacts = profile ? [
    profile.currentTitle ? `Huidige rol: ${profile.currentTitle}` : null,
    profile.companyName ? `Werkt bij: ${profile.companyName}` : null,
    profile.location ? `Locatie: ${profile.location}` : null,
    profile.skills?.length > 0 ? `Top skill: ${profile.skills[0]}` : null,
    profile.jobHistory?.length > 0 ? `${profile.jobHistory.length} functies in werkervaring` : null,
    profile.skills?.length > 2 ? `Skills: ${profile.skills.slice(0, 3).join(", ")}` : null,
  ].filter(Boolean) as string[] : [];

  const WRITING_MESSAGES = [
    "Profiel analyseren en beste insteek bepalen\u2026",
    ...(profileFacts.length > 0 ? profileFacts : []),
    "Persoonlijke aanknopingspunten zoeken\u2026",
    "Toon en stijl afstemmen op kandidaat\u2026",
    "Gepersonaliseerd InMail bericht schrijven\u2026",
    "Bericht optimaliseren voor hogere response\u2026",
  ];

  useEffect(() => {
    if (phase === "analyzing") {
      const interval = setInterval(() => {
        setStatusMsgIdx((prev) => (prev + 1) % ANALYZING_MESSAGES.length);
      }, 2000);
      return () => clearInterval(interval);
    } else {
      setStatusMsgIdx(0);
    }
  }, [phase]);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Smooth progress animation — calibrated to real Flash API timings (~18s total)
  const PHASE_TARGETS: Record<string, number> = {
    connecting: 8,
    scanning: 20,
    found: 30,
    analyzing: 40,
    "writing-inmail": 85,
    "writing-conn": 93,
    done: 100,
  };

  useEffect(() => {
    if (phase === "idle") {
      setProgress(0);
      if (progressRef.current) clearInterval(progressRef.current);
      return;
    }

    const target = PHASE_TARGETS[phase] || 0;
    if (progressRef.current) clearInterval(progressRef.current);

    progressRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= target) {
          if (progressRef.current) clearInterval(progressRef.current);
          return target;
        }
        // Speed depends on how far we need to go
        const diff = target - prev;
        const step = Math.max(0.15, diff * 0.03);
        return Math.min(prev + step, target);
      });
    }, 80);

    return () => { if (progressRef.current) clearInterval(progressRef.current); };
  }, [phase]);

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
        body: JSON.stringify({ email, jobTitle, tone, senderName, vacancyText, customInstruction, profile: scrapeData.profile }),
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
  }, [linkedinUrl, email, jobTitle, tone, senderName, vacancyText, customInstruction]);

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
    setProgress(0);

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
          <p className="text-[11px] font-bold text-green uppercase tracking-[0.12em] mb-2">Probeer het zelf</p>
          <h3 className="text-xl font-extrabold text-gray-900 mb-1">Test Elvatix gratis</h3>
          <p className="text-xs text-gray-400 leading-normal">Plak een LinkedIn profiel en ontvang direct een gepersonaliseerd bericht.</p>
        </div>
      )}

      {phase === "idle" ? (
        <>
          {/* Simple / Advanced toggle */}
          <div className="grid grid-cols-2 gap-2 mb-5">
            <button onClick={() => setIsAdvanced(false)}
              className={`py-3 rounded-[10px] text-sm font-bold cursor-pointer transition-all duration-200 font-[inherit] ${
                !isAdvanced
                  ? "bg-green text-white border-2 border-green shadow-[0_2px_8px_rgba(141,182,0,0.25)]"
                  : "bg-white text-gray-500 border-2 border-gray-200 hover:border-gray-300"
              }`}>
              Simpel
            </button>
            <button onClick={() => setIsAdvanced(true)}
              className={`py-3 rounded-[10px] text-sm font-bold cursor-pointer transition-all duration-200 font-[inherit] ${
                isAdvanced
                  ? "bg-green text-white border-2 border-green shadow-[0_2px_8px_rgba(141,182,0,0.25)]"
                  : "bg-white text-gray-500 border-2 border-gray-200 hover:border-gray-300"
              }`}>
              Advanced
            </button>
          </div>

          {/* LinkedIn URL */}
          <div className={compact ? "mb-3.5" : "mb-4"}>
            <label className="block text-[13px] font-semibold text-gray-700 mb-1.5">LinkedIn URL *</label>
            <div className="flex items-center border border-gray-300 rounded-[10px] overflow-hidden transition-colors focus-within:border-green focus-within:shadow-[0_0_0_2px_rgba(141,182,0,0.08)]">
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

          {/* Role selector */}
          <div className={compact ? "mb-3.5" : "mb-4"}>
            <label className="block text-[13px] font-semibold text-gray-700 mb-1.5">Functie / Vacature</label>
            <select
              value={ROLE_SUGGESTIONS.includes(jobTitle) ? jobTitle : (showSuggestions ? "__custom__" : "")}
              onChange={(e) => {
                if (e.target.value === "__custom__") { setShowSuggestions(true); setJobTitle(""); }
                else { setJobTitle(e.target.value); setShowSuggestions(false); }
              }}
              className="w-full py-3 px-3.5 border border-gray-300 rounded-[10px] bg-white text-sm text-gray-900 font-[inherit] outline-none box-border cursor-pointer focus:border-green focus:shadow-[0_0_0_2px_rgba(141,182,0,0.08)]">
              <option value="" disabled>Selecteer een functie...</option>
              {ROLE_SUGGESTIONS.map((role) => (
                <option key={role} value={role}>{role}</option>
              ))}
              <option value="__custom__">Anders (zelf invullen)</option>
            </select>
            {showSuggestions && !ROLE_SUGGESTIONS.includes(jobTitle) && (
              <input type="text" placeholder="Typ de functienaam..." autoFocus
                value={jobTitle} onChange={(e) => setJobTitle(e.target.value)}
                className="w-full mt-2 py-2.5 px-3.5 border border-gray-300 rounded-[10px] bg-white text-sm text-gray-900 font-[inherit] outline-none box-border focus:border-green focus:shadow-[0_0_0_2px_rgba(141,182,0,0.08)]" />
            )}
          </div>

          {/* Email */}
          <div className={compact ? "mb-3.5" : "mb-4"}>
            <label className="block text-[13px] font-semibold text-gray-700 mb-1.5">E-mailadres *</label>
            <input type="email" placeholder="naam@bedrijf.nl"
              value={email} onChange={(e) => setEmail(e.target.value)}
              className="w-full py-3 px-3.5 border border-gray-300 rounded-[10px] bg-white text-sm text-gray-900 font-[inherit] outline-none box-border focus:border-green focus:shadow-[0_0_0_2px_rgba(141,182,0,0.08)]" />
          </div>

          {/* Naam (optional) */}
          <div className={compact ? "mb-3.5" : "mb-4"}>
            <label className="block text-[13px] font-semibold text-gray-700 mb-1.5">
              Jouw naam <span className="text-gray-400 font-normal">(optioneel)</span>
            </label>
            <input type="text" placeholder="bijv. Jan Jansen"
              value={senderName} onChange={(e) => setSenderName(e.target.value)}
              className="w-full py-3 px-3.5 border border-gray-300 rounded-[10px] bg-white text-sm text-gray-900 font-[inherit] outline-none box-border focus:border-green focus:shadow-[0_0_0_2px_rgba(141,182,0,0.08)]" />
          </div>

          {/* Advanced fields */}
          {isAdvanced && (
            <div className="space-y-3.5 mb-4 animate-[lm-fade-in_0.2s_ease] border-t border-gray-100 pt-4">
              {/* Tone of voice */}
              <div>
                <label className="block text-[13px] font-semibold text-gray-700 mb-1.5">Tone of voice</label>
                <select value={tone} onChange={(e) => setTone(e.target.value)}
                  className="w-full py-3 px-3.5 border border-gray-300 rounded-[10px] bg-white text-sm text-gray-900 font-[inherit] outline-none box-border cursor-pointer focus:border-green focus:shadow-[0_0_0_2px_rgba(141,182,0,0.08)]">
                  {TONE_OPTIONS.map((t) => (
                    <option key={t.value} value={t.value}>{t.label}</option>
                  ))}
                </select>
              </div>

              {/* Extra instructie - prominent */}
              <div>
                <label className="block text-[13px] font-semibold text-gray-700 mb-1.5">
                  Extra instructie <span className="text-gray-400 font-normal">(optioneel)</span>
                </label>
                <textarea placeholder={'bijv. "Benoem hun ervaring bij Google" of "Houd het kort en puntig"'}
                  value={customInstruction} onChange={(e) => setCustomInstruction(e.target.value)}
                  rows={3}
                  className="w-full py-3 px-3.5 border border-gray-300 rounded-[10px] bg-white text-sm text-gray-900 font-[inherit] outline-none box-border resize-y min-h-[80px] focus:border-green focus:shadow-[0_0_0_2px_rgba(141,182,0,0.08)]" />
              </div>

              {/* Vacaturetekst */}
              <div>
                <label className="block text-[13px] font-semibold text-gray-700 mb-1.5">
                  Vacaturetekst <span className="text-gray-400 font-normal">(optioneel)</span>
                </label>
                <textarea placeholder="Plak hier de vacaturetekst voor meer context..."
                  value={vacancyText} onChange={(e) => setVacancyText(e.target.value)}
                  rows={3}
                  className="w-full py-3 px-3.5 border border-gray-300 rounded-[10px] bg-white text-sm text-gray-900 font-[inherit] outline-none box-border resize-y min-h-[80px] focus:border-green focus:shadow-[0_0_0_2px_rgba(141,182,0,0.08)]" />
              </div>
            </div>
          )}

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
          {/* Progress bar with percentage */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2.5">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-elvatix opacity-60"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-elvatix"></span>
                </span>
                <p className="text-sm font-semibold text-gray-700 transition-all">
                  {phase === "analyzing" ? ANALYZING_MESSAGES[statusMsgIdx % ANALYZING_MESSAGES.length] : STATUS_TEXT[phase]?.title}
                </p>
              </div>
              <span className="text-sm font-bold text-elvatix tabular-nums">{Math.round(progress)}%</span>
            </div>
            <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-elvatix to-green transition-all duration-200 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Profile card */}
          {profile && phase !== "connecting" && phase !== "scanning" && (
            <div className="bg-white rounded-xl border border-gray-200 mb-5 overflow-hidden animate-[lm-fade-in_0.3s_ease] shadow-sm">
              {/* Header */}
              <div className="p-4 pb-3 border-b border-gray-100">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-elvatix to-green flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      {(profile.firstName || profile.fullName)?.[0]?.toUpperCase() || "?"}
                    </div>
                    <div>
                      <p className="text-[15px] font-bold text-gray-900 leading-tight">{profile.fullName}</p>
                      <p className="text-[13px] text-gray-500 leading-snug">{profile.currentTitle}{profile.companyName ? ` bij ${profile.companyName}` : ""}</p>
                    </div>
                  </div>
                  {enriched && (
                    <span className="text-[10px] py-1 px-2 bg-emerald-50 text-emerald-600 rounded-md font-semibold flex-shrink-0">
                      Enriched
                    </span>
                  )}
                </div>
              </div>

              {/* Details */}
              <div className="px-4 py-3 space-y-2.5">
                {/* Headline */}
                {profile.headline && (
                  <div className="flex items-start gap-2">
                    <svg className="w-3.5 h-3.5 text-gray-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" /></svg>
                    <p className="text-xs text-gray-600 leading-relaxed">{profile.headline}</p>
                  </div>
                )}
                {/* Location */}
                {profile.location && (
                  <div className="flex items-center gap-2">
                    <svg className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    <p className="text-xs text-gray-500">{profile.location}</p>
                  </div>
                )}
                {/* Recent job history */}
                {profile.jobHistory && profile.jobHistory.length > 0 && (
                  <div className="flex items-start gap-2">
                    <svg className="w-3.5 h-3.5 text-gray-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" /></svg>
                    <div className="flex flex-col gap-0.5">
                      {profile.jobHistory.slice(0, 3).map((job: string, idx: number) => (
                        <p key={idx} className="text-xs text-gray-500 leading-relaxed">
                          {job.replace(/^\[(HUIDIG|VORIG|ONBEKEND)\]\s*/, (_, tag) =>
                            tag === "HUIDIG" ? "⬤ " : tag === "VORIG" ? "○ " : "◌ "
                          )}
                        </p>
                      ))}
                    </div>
                  </div>
                )}
                {/* Skills */}
                {profile.skills && profile.skills.length > 0 && (
                  <div className="flex items-start gap-2">
                    <svg className="w-3.5 h-3.5 text-gray-400 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                    <div className="flex flex-wrap gap-1.5">
                      {profile.skills.slice(0, 6).map((skill: string, idx: number) => (
                        <span key={idx} className="text-[10px] py-0.5 px-2 bg-elvatix-light text-elvatix-dark rounded-full font-medium">{skill}</span>
                      ))}
                      {profile.skills.length > 6 && (
                        <span className="text-[10px] py-0.5 px-2 bg-gray-100 text-gray-400 rounded-full font-medium">+{profile.skills.length - 6}</span>
                      )}
                    </div>
                  </div>
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
                <div ref={messageRef} className="bg-surface-alt border-x border-b border-gray-200 border-t-0 rounded-b-[10px] p-5 whitespace-pre-wrap text-[15px] leading-[1.85] text-gray-800 font-[inherit] max-h-[280px] overflow-y-auto">
                  {inmailDisplayed || (
                    <span className="text-gray-500 italic animate-pulse">{"Bericht wordt geschreven\u2026"}</span>
                  )}
                  {phase === "writing-inmail" && inmailDisplayed && (
                    <span className="text-green animate-[lm-blink_0.7s_step-end_infinite]">|</span>
                  )}
                </div>
              )}

              {/* Connection content */}
              {activeTab === "connection" && (
                <div>
                  <div className="bg-surface-alt border-x border-b border-gray-200 border-t-0 rounded-b-[10px] p-5 whitespace-pre-wrap text-[15px] leading-[1.85] text-gray-800 font-[inherit] min-h-[72px]">
                    {phase === "done" || phase === "writing-conn" ? (
                      <>
                        {connectionDisplayed || (
                          <span className="text-gray-500 italic animate-pulse">{"Wordt opgesteld\u2026"}</span>
                        )}
                        {phase === "writing-conn" && connectionDisplayed && (
                          <span className="text-green animate-[lm-blink_0.7s_step-end_infinite]">|</span>
                        )}
                      </>
                    ) : (
                      <span className="text-gray-500 italic">{"Wordt na InMail gegenereerd\u2026"}</span>
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
                  <Link href="/demo" className="py-2.5 px-5 bg-green text-white rounded-lg font-semibold text-[13px] no-underline whitespace-nowrap shrink-0">
                    {"Vraag demo aan \u2192"}
                  </Link>
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
            {"Plak een LinkedIn URL en wij scrapen het profiel en schrijven een InMail en connectieverzoek op maat."}
          </p>
        </div>

        {formContent}


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
