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
  { icon: <ZapIcon size={20} />, text: 'Live walkthrough van het platform' },
  { icon: <TargetIcon size={20} />, text: 'Gepersonaliseerde use-case analyse' },
  { icon: <MessageSquareIcon size={20} />, text: 'Stel al je vragen aan ons team' },
  { icon: <RocketIcon size={20} />, text: 'Direct aan de slag na de demo' },
];

export default function DemoPage() {
  return (
    <main className="pt-40 pb-16">
      <Container className="max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Zie Elvatix in actie</h1>
            <p className="text-gray-600 mb-8 leading-relaxed">
              In 30 minuten laten we zien hoe Elvatix jouw recruitment workflow transformeert. Persoonlijk, relevant en afgestemd op jouw situatie.
            </p>
            <div className="flex flex-col gap-4">
              {benefits.map((b) => (
                <div key={b.text} className="flex items-center gap-3">
                  <span className="text-xl">{b.icon}</span>
                  <span className="text-gray-700 font-medium">{b.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-2 w-full h-[550px] relative overflow-hidden flex items-center justify-center">
            {/* Calendly inline widget */}
            <div
              className="calendly-inline-widget w-full h-full"
              data-url="https://calendly.com/gianni-elvatix/demo?hide_event_type_details=1&primary_color=afce26"
              style={{ minWidth: '272px', height: '100%' }}
            />
            <Script
              src="https://assets.calendly.com/assets/external/widget.js"
              strategy="lazyOnload"
            />
          </div>
        </div>
      </Container>
    </main>
  );
}
