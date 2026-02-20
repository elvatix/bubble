import Container from '@/components/ui/Container';
import { MessageSquareIcon, UsersIcon, ClockIcon, BarChartIcon, CpuIcon, FileTextIcon } from '@/components/icons/Icons';
import Button from '@/components/ui/Button';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Platform | Elvatix',
  description: 'Ontdek het complete Elvatix platform. AI InMails, connectieverzoeken, reminders en analytics in één tool.',
  alternates: { canonical: '/platform' },
};

const modules = [
  { icon: <MessageSquareIcon size={28} />, title: 'AI InMails', desc: 'Genereer gepersonaliseerde InMails op basis van het LinkedIn-profiel van je kandidaat. Eén klik, klaar.', href: '/features/inmails' },
  { icon: <UsersIcon size={28} />, title: 'Connectieverzoeken', desc: 'Schrijf connectieverzoeken die opvallen en daadwerkelijk geaccepteerd worden. Geen standaard templates.', href: '/features/connections' },
  { icon: <ClockIcon size={28} />, title: 'Smart Reminders', desc: 'Automatische follow-ups afgestemd op eerdere interacties. Nooit meer een kandidaat vergeten.', href: '/features/reminders' },
  { icon: <BarChartIcon size={28} />, title: 'Analytics Dashboard', desc: 'Zie welke berichten converteren, welke templates het beste werken en waar je tijd het meest oplevert.', href: '/features/analytics' },
  { icon: <CpuIcon size={28} />, title: 'Custom GPT', desc: 'Train je eigen AI-model op jouw schrijfstijl, tone-of-voice en branchekennis. Uniek voor Elvatix.', href: '/platform' },
  { icon: <FileTextIcon size={28} />, title: 'Templates', desc: 'Bewaar en deel je beste berichten als template. Gebruik ze als startpunt voor nieuwe outreach.', href: '/platform' },
];

const howItWorks = [
  { num: '01', title: 'Plak een LinkedIn URL', desc: 'Kopieer de LinkedIn-URL van je kandidaat en plak deze in Elvatix. Dat is alles wat je nodig hebt.' },
  { num: '02', title: 'AI analyseert het profiel', desc: 'Onze AI leest werkervaring, skills, headline en carrièrepad. Binnen seconden begrijpt het wie je kandidaat is.' },
  { num: '03', title: 'Ontvang gepersonaliseerde berichten', desc: 'Je krijgt een InMail én connectieverzoek op maat. Persoonlijk, relevant en in natuurlijk Nederlands.' },
];

export default function PlatformPage() {
  return (
    <main className="pt-40 pb-0">
      <Container className="text-center mb-16">        <h1 className="page-heading">
          Eén platform voor al je LinkedIn recruitment
        </h1>
        <p className="page-subtitle">
          Elvatix combineert AI-powered messaging, slimme follow-ups en diepgaande analytics in één intuïtief platform. Gebouwd door recruiters, voor recruiters.
        </p>
      </Container>

      <Container className="max-w-5xl mb-20">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Alles wat je nodig hebt</h2>
          <p className="text-gray-600">Elk onderdeel is een volwaardig product en samen vormen ze het krachtigste recruitment platform.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((m) => (
            <a key={m.title} href={m.href} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-elvatix transition-all group">
              <span className="text-3xl mb-3 block text-elvatix">{m.icon}</span>
              <h3 className="font-bold text-gray-900 mb-1 group-hover:text-elvatix">{m.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{m.desc}</p>
            </a>
          ))}
        </div>
      </Container>

      <section className="bg-gray-50 py-16">
        <Container className="max-w-4xl">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-10 text-center">Hoe het werkt</h2>
          <div className="flex flex-col gap-8">
            {howItWorks.map((step) => (
              <div key={step.num} className="flex items-start gap-5">
                <span className="text-3xl font-black text-elvatix flex-shrink-0 w-12">{step.num}</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="cta-section">
        <Container className="text-center text-white">
          <h2 className="text-2xl font-extrabold mb-3">Klaar om te beginnen?</h2>
          <p className="text-white/80 mb-6">Plan een demo en ontdek het volledige platform.</p>
          <Button variant="white" href="/demo">Plan een demo</Button>
        </Container>
      </section>
    </main>
  );
}
