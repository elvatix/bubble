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
    <main className="pt-32 pb-24 relative">
      {/* Subtle Background Glows */}
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-[#afce26]/10 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[600px] h-[600px] bg-[#0A66C2]/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <Container className="max-w-6xl relative z-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: Copy & Conversion Elements */}
          <div className="lg:col-span-5 flex flex-col justify-center">

            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-[1.15] tracking-tight">
              Klaar om je <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A66C2] to-[#afce26]">recruitment</span> te transformeren?
            </h1>
            
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Plan direct je persoonlijke demo. In 30 minuten laten we zien hoe Elvatix werkt en bespreken we jouw specifieke situatie.
            </p>

            <div className="flex flex-col gap-4 mb-10">
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
            <div className="flex items-center gap-4 pt-8 border-t border-gray-100">
              <div className="flex -space-x-3">
                <img src="https://i.pravatar.cc/100?img=1" alt="Recruiter" className="w-11 h-11 rounded-full border-2 border-white shadow-sm bg-gray-200" />
                <img src="https://i.pravatar.cc/100?img=5" alt="Recruiter" className="w-11 h-11 rounded-full border-2 border-white shadow-sm bg-gray-200" />
                <img src="https://i.pravatar.cc/100?img=9" alt="Recruiter" className="w-11 h-11 rounded-full border-2 border-white shadow-sm bg-gray-200" />
              </div>
              <div className="flex flex-col gap-0.5">
                <div className="flex items-center text-yellow-400 text-sm tracking-widest">★★★★★</div>
                <div className="text-sm font-medium text-gray-600">
                  <span className="text-gray-900 font-bold">4.9/5</span> uit 50+ reviews
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Calendly Widget */}
          <div className="lg:col-span-7 relative w-full">
            {/* Glowing Backdrop */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-[#afce26]/30 to-[#0A66C2]/20 rounded-[2rem] blur-2xl opacity-50 animate-pulse pointer-events-none" style={{ animationDuration: '4s' }} />
            
            <div className="bg-white border border-gray-100 rounded-3xl shadow-2xl p-2 w-full relative z-10">
              {/*
                The Calendly widget needs an explicit pixel height.
                IMPORTANT: globals.css has a rule on <=768px that sets `main iframe { height: auto }`
                which overrides the iframe's height:100%. We added a CSS override in globals.css
                specifically for `.calendly-inline-widget iframe` to counteract this.
              */}
              <div
                className="calendly-inline-widget w-full rounded-2xl overflow-hidden"
                data-url="https://calendly.com/gianni-elvatix/demo?hide_event_type_details=1&primary_color=afce26"
                style={{ minWidth: '280px', height: '700px' }}
              />
              <Script
                src="https://assets.calendly.com/assets/external/widget.js"
                strategy="lazyOnload"
              />
            </div>
          </div>

        </div>
      </Container>
    </main>
  );
}
