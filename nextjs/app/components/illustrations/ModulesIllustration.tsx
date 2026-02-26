"use client";

export default function ModulesIllustration() {
  return (
    <div className="hero-illo" aria-hidden="true">
      {/* Background dot grid */}
      <div className="hero-illo__grid" />

      {/* Decorative gradient blobs */}
      <div className="hero-illo__blob hero-illo__blob--1" />
      <div className="hero-illo__blob hero-illo__blob--2" />

      {/* Central dashboard card  - 3D tilted */}
      <div className="hero-illo__main-card">
        <div className="hero-illo__card-header">
          <span className="hero-illo__dot hero-illo__dot--red" />
          <span className="hero-illo__dot hero-illo__dot--yellow" />
          <span className="hero-illo__dot hero-illo__dot--green" />
          <span className="hero-illo__card-title">Elvatix Dashboard</span>
        </div>
        <div className="hero-illo__card-body">
          <div className="hero-illo__metric">
            <span className="hero-illo__metric-label">Responsrate</span>
            <div className="hero-illo__bar-track">
              <div className="hero-illo__bar-fill hero-illo__bar-fill--1" />
            </div>
          </div>
          <div className="hero-illo__metric">
            <span className="hero-illo__metric-label">InMails verstuurd</span>
            <div className="hero-illo__bar-track">
              <div className="hero-illo__bar-fill hero-illo__bar-fill--2" />
            </div>
          </div>
          <div className="hero-illo__metric">
            <span className="hero-illo__metric-label">Follow-ups</span>
            <div className="hero-illo__bar-track">
              <div className="hero-illo__bar-fill hero-illo__bar-fill--3" />
            </div>
          </div>
          <div className="hero-illo__metric">
            <span className="hero-illo__metric-label">Connecties</span>
            <div className="hero-illo__bar-track">
              <div className="hero-illo__bar-fill hero-illo__bar-fill--4" />
            </div>
          </div>
        </div>
      </div>

      {/* Floating module cards */}
      <div className="hero-illo__float hero-illo__float--1">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <line x1="19" y1="8" x2="19" y2="14" />
          <line x1="22" y1="11" x2="16" y2="11" />
        </svg>
        <span>Connecties</span>
      </div>

      <div className="hero-illo__float hero-illo__float--2">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
        <span>InMails</span>
      </div>

      <div className="hero-illo__float hero-illo__float--3">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
        <span>Reminders</span>
      </div>

      <div className="hero-illo__float hero-illo__float--4">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          <path d="M8 9h8M8 13h4" />
        </svg>
        <span>Templates</span>
      </div>

      <div className="hero-illo__float hero-illo__float--5">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44A2.5 2.5 0 0 1 2 17.5v-15A2.5 2.5 0 0 1 4.5 0" />
          <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44A2.5 2.5 0 0 0 22 17.5v-15A2.5 2.5 0 0 0 19.5 0" />
        </svg>
        <span>Custom GPT</span>
      </div>

      <div className="hero-illo__float hero-illo__float--6">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="17 1 21 5 17 9" />
          <path d="M3 11V9a4 4 0 0 1 4-4h14" />
          <polyline points="7 23 3 19 7 15" />
          <path d="M21 13v2a4 4 0 0 1-4 4H3" />
        </svg>
        <span>Sales Switch</span>
      </div>

      {/* Floating particles */}
      <div className="hero-illo__particle hero-illo__particle--1" />
      <div className="hero-illo__particle hero-illo__particle--2" />
      <div className="hero-illo__particle hero-illo__particle--3" />
      <div className="hero-illo__particle hero-illo__particle--4" />
      <div className="hero-illo__particle hero-illo__particle--5" />
      <div className="hero-illo__particle hero-illo__particle--6" />
      <div className="hero-illo__particle hero-illo__particle--7" />

      {/* Connecting lines (SVG overlay) */}
      <svg className="hero-illo__lines" viewBox="0 0 600 400" fill="none" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="lg1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#9BBB0A" stopOpacity="0" />
            <stop offset="50%" stopColor="#9BBB0A" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#9BBB0A" stopOpacity="0" />
          </linearGradient>
        </defs>
        <line x1="300" y1="200" x2="90" y2="70" stroke="url(#lg1)" strokeWidth="1" className="hero-illo__line" />
        <line x1="300" y1="200" x2="510" y2="55" stroke="url(#lg1)" strokeWidth="1" className="hero-illo__line" style={{animationDelay: '0.4s'}} />
        <line x1="300" y1="200" x2="65" y2="310" stroke="url(#lg1)" strokeWidth="1" className="hero-illo__line" style={{animationDelay: '0.8s'}} />
        <line x1="300" y1="200" x2="535" y2="310" stroke="url(#lg1)" strokeWidth="1" className="hero-illo__line" style={{animationDelay: '1.2s'}} />
        <line x1="300" y1="200" x2="55" y2="190" stroke="url(#lg1)" strokeWidth="1" className="hero-illo__line" style={{animationDelay: '1.6s'}} />
        <line x1="300" y1="200" x2="535" y2="180" stroke="url(#lg1)" strokeWidth="1" className="hero-illo__line" style={{animationDelay: '2.0s'}} />
      </svg>
    </div>
  );
}
