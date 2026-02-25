import Container from '@/components/ui/Container';
import Link from 'next/link';
import Script from 'next/script';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Boek een gratis demo van Elvatix — persoonlijk gegeven door de oprichter',
  description: 'Plan een gratis demo en ontdek hoe Elvatix jouw LinkedIn outreach transformeert. Persoonlijk gegeven door Gianni, oprichter van Elvatix. Binnen 10 minuten live.',
  alternates: { canonical: 'https://elvatix.com/demo' },
};

export default function DemoPage() {
  return (
    <main className="pt-40 pb-16 relative">
      {/* Subtle Background Glows */}
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-elvatix/10 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[600px] h-[600px] bg-elvatix/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <Container className="max-w-6xl relative z-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* LEFT COLUMN */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-black text-text-primary mb-6 leading-[1.15] tracking-tight">
              Boek hier je demo
            </h1>

            <p className="text-lg text-text-muted mb-8 leading-relaxed">
              Bespaar tijd, verhoog je conversies en besteed je bonusuren aan het plaatsen van kandidaten.
            </p>

            {/* Gianni personal text */}
            <div className="bg-surface border border-border rounded-card p-6 mb-8">
              <p className="text-text-secondary text-[15px] leading-relaxed mb-4">
                Deze demo wordt persoonlijk gegeven door mij,{' '}
                <a
                  href="https://linkedin.com/in/gianni-linssen-742842315"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-elvatix font-semibold hover:underline"
                >
                  Gianni
                </a>
                , oprichter van Elvatix. Zo krijg je direct antwoord op al je strategische vragen en hoor je de visie achter de tool.
              </p>

              <h3 className="text-sm font-bold text-text-primary uppercase tracking-wider mb-3">Wat je kunt verwachten:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-text-secondary text-[15px]">
                  <span className="text-elvatix mt-0.5 flex-shrink-0">●</span>
                  Een korte analyse van jouw huidige workflow en doelen.
                </li>
                <li className="flex items-start gap-3 text-text-secondary text-[15px]">
                  <span className="text-elvatix mt-0.5 flex-shrink-0">●</span>
                  Een live walkthrough: zie hoe je van een kandidatenlijst naar gepersonaliseerde InMails en reminders gaat.
                </li>
                <li className="flex items-start gap-3 text-text-secondary text-[15px]">
                  <span className="text-elvatix mt-0.5 flex-shrink-0">●</span>
                  Ik laat je zien hoe intuïtief en snel de setup is — binnen 10 minuten is je account live.
                </li>
              </ul>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-4 pt-6 border-t border-border">
              <div className="flex -space-x-3">
                <img src="https://i.pravatar.cc/100?img=1" alt="Recruiter" className="w-11 h-11 rounded-full border-2 border-white shadow-sm bg-surface" />
                <img src="https://i.pravatar.cc/100?img=5" alt="Recruiter" className="w-11 h-11 rounded-full border-2 border-white shadow-sm bg-surface" />
                <img src="https://i.pravatar.cc/100?img=9" alt="Recruiter" className="w-11 h-11 rounded-full border-2 border-white shadow-sm bg-surface" />
              </div>
              <div className="flex flex-col gap-0.5">
                <div className="flex items-center text-yellow-400 text-sm tracking-widest">★★★★★</div>
                <div className="text-sm font-medium text-text-muted">
                  <span className="text-text-primary font-bold">4.9/5</span> uit 50+ reviews
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Calendly Widget */}
          <div className="lg:col-span-7 relative w-full">
            {/* Glowing Backdrop */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-elvatix/30 to-elvatix/10 rounded-[2rem] blur-2xl opacity-50 animate-pulse pointer-events-none" style={{ animationDuration: '4s' }} />

            <div className="bg-white border border-border rounded-3xl shadow-2xl p-2 w-full relative z-10 overflow-hidden">
              <div
                className="calendly-inline-widget w-full rounded-2xl overflow-hidden"
                data-url="https://calendly.com/gianni-elvatix/demo?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=afce26"
                style={{ minWidth: '280px', height: '580px' }}
              />
              <Script
                src="https://assets.calendly.com/assets/external/widget.js"
                strategy="lazyOnload"
              />

              {/* White triangle overlay — hides badge on desktop & mobile */}
              <div
                className="absolute top-0 right-0 w-[120px] h-[120px] bg-white z-50 pointer-events-none"
                style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}
              />

              {/* Bottom gradient — hides Cookie-instellingen */}
              <div className="absolute bottom-0 left-0 right-0 h-[50px] bg-gradient-to-t from-white via-white to-transparent z-50 pointer-events-none" />
            </div>
          </div>

        </div>
      </Container>

      {/* CTA Section */}
      <Container className="max-w-4xl mt-20">
        <div className="cta-section rounded-card text-center">
          <h2 className="text-2xl font-extrabold text-white mb-3">Andere gingen je voor, start vandaag</h2>
          <p className="text-white/80 mb-6">Bespaar tijd, verhoog je conversies en besteed je bonusuren aan het sluiten van deals.</p>
          <a
            href="https://app.elvatix.com"
            target="_blank"
            rel="noopener noreferrer"
            className="pill-btn bg-white text-elvatix font-bold px-8 py-3"
          >
            Start For Free
          </a>
        </div>
      </Container>
    </main>
  );
}
