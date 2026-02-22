import Container from '@/components/ui/Container';
import { ZapIcon, TargetIcon, MessageSquareIcon, RocketIcon } from '@/components/icons/Icons';
import Script from 'next/script';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Demo aanvragen | Elvatix',
  description: 'Plan een persoonlijke demo van Elvatix. Ontdek hoe AI jouw recruitment kan versnellen.',
  alternates: { canonical: '/demo' },
};

const benefits = [
  { icon: <ZapIcon size={20} className="text-[#afce26]" />, text: 'Live walkthrough van het platform' },
  { icon: <TargetIcon size={20} className="text-[#afce26]" />, text: 'Gepersonaliseerde use-case analyse' },
  { icon: <MessageSquareIcon size={20} className="text-[#afce26]" />, text: 'Stel al je vragen aan ons team' },
  { icon: <RocketIcon size={20} className="text-[#afce26]" />, text: 'Direct aan de slag na de demo' },
];

export default function DemoPage() {
  return (
    <main className="pt-32 pb-24 overflow-hidden relative">
      {/* Subtle Background Glows */}
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-[#afce26]/10 rounded-full blur-3xl -z-10 pointer-events-none mix-blend-multiply" />
      <div className="absolute bottom-[10%] right-[-10%] w-[600px] h-[600px] bg-[#0A66C2]/5 rounded-full blur-3xl -z-10 pointer-events-none mix-blend-multiply" />

      <Container className="max-w-6xl relative z-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Copy & Conversion Elements */}
          <div className="lg:col-span-6 flex flex-col justify-center">

            {/* Urgency Badge */}
            <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 text-orange-600 px-3 py-1.5 rounded-full text-sm font-medium mb-8 w-fit shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500"></span>
              </span>
              Beperkte plekken beschikbaar deze week
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-5xl font-black text-gray-900 mb-6 leading-[1.15] tracking-tight">
              Klaar om je <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A66C2] to-[#afce26]">recruitment</span> te transformeren?
            </h1>
            
            <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-lg">
              Kies hiernaast direct een datum in onze agenda. In 30 minuten laten we zien hoe Elvatix werkt en bespreken we jouw specifieke situatie.
            </p>

            <div className="flex flex-col gap-5 mb-12">
              {benefits.map((b) => (
                <div key={b.text} className="flex items-center gap-4 bg-white/60 p-3 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-full bg-[#afce26]/10 flex items-center justify-center flex-shrink-0">
                    {b.icon}
                  </div>
                  <span className="text-gray-800 font-medium text-[15px]">{b.text}</span>
                </div>
              ))}
            </div>

            {/* Social Proof */}
            {/* Note: In a Server Component, React onClick/onError listeners crash the build. We use hardcoded avatar fallbacks. */}
            <div className="flex items-center gap-4 pt-8 border-t border-gray-100">
              <div className="flex -space-x-3">
                <img src="https://i.pravatar.cc/100?img=1" alt="Recruiter Avatar" className="w-12 h-12 rounded-full border-2 border-white shadow-sm bg-gray-200" />
                <img src="https://i.pravatar.cc/100?img=5" alt="Recruiter Avatar" className="w-12 h-12 rounded-full border-2 border-white shadow-sm bg-gray-200" />
                <img src="https://i.pravatar.cc/100?img=9" alt="Recruiter Avatar" className="w-12 h-12 rounded-full border-2 border-white shadow-sm bg-gray-200" />
              </div>
              <div className="flex flex-col gap-0.5">
                <div className="flex items-center text-yellow-400 text-sm tracking-widest">
                  ★★★★★
                </div>
                <div className="text-sm font-medium text-gray-600">
                  <span className="text-gray-900 font-bold">4.9/5</span> uit 50+ reviews
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Calendly Widget properly sized */}
          <div className="lg:col-span-6 relative w-full mt-8 lg:mt-0">
            {/* Glowing Backdrop */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-[#afce26]/40 to-[#0A66C2]/30 rounded-[2rem] blur-2xl opacity-50 animate-pulse" style={{ animationDuration: '4s' }} />
            
            {/* Height Fix: Mobile needs way more vertical space for Calendly because the calendar stacks. 
                Using min-height 1050px ensures mobile users can scroll inside the widget frame without cutoff.
                On large screens (lg), 750px is perfectly sufficient for side-by-side calendar and times. */}
            <div className="bg-white border border-gray-100 rounded-3xl shadow-2xl p-2 w-full relative overflow-hidden flex flex-col z-10 min-h-[1050px] lg:min-h-[750px] lg:h-[750px]">
              
              <div
                className="calendly-inline-widget w-full min-h-[1050px] lg:min-h-[750px]"
                data-url="https://calendly.com/gianni-elvatix/demo?hide_event_type_details=1&primary_color=afce26"
                style={{ minWidth: '320px', height: '100%' }}
              />
              <Script
                src="https://assets.calendly.com/assets/external/widget.js"
                strategy="lazyOnload"
              />
            </div>
            
            {/* Conversion indicator pointing to calendar */}
            <div className="absolute -left-8 top-1/2 -translate-y-1/2 hidden xl:flex items-center gap-2 text-[#afce26] font-bold z-20">
              Kies je tijdvak
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="animate-bounce" style={{ animationDirection: 'alternate-reverse', animationDuration: '1s' }}>
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </div>

        </div>
      </Container>
    </main>
  );
}
