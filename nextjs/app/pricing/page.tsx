import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing — Elvatix',
  description: 'Bekijk de Elvatix prijzen. Start gratis of kies het plan dat bij jouw team past.',
};

const plans = [
  {
    name: 'Free',
    price: '€0',
    period: 'voor altijd',
    desc: 'Perfect om Elvatix te ontdekken.',
    features: ['5 AI-berichten per dag', 'InMails + connectieverzoeken', 'Basis templates', 'Community support'],
    cta: 'Start gratis',
    href: '/start',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '€49',
    period: 'per maand',
    desc: 'Voor serieuze recruiters die resultaat willen.',
    features: ['Onbeperkte AI-berichten', 'Custom GPT training', 'Smart Reminders', 'Analytics dashboard', 'Priority support', 'Team templates'],
    cta: 'Start Pro',
    href: '/start',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Op maat',
    period: '',
    desc: 'Voor teams die maximale impact willen.',
    features: ['Alles in Pro', 'Dedicated account manager', 'Custom integraties', 'SSO & SAML', 'SLA garantie', 'Onboarding programma'],
    cta: 'Neem contact op',
    href: '/contact',
    highlighted: false,
  },
];

export default function PricingPage() {
  return (
    <main className="pt-32 pb-0">
      <Container className="text-center mb-16">
        <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--linkedin-blue-light)] text-[var(--linkedin-blue)] text-sm font-semibold mb-4">Pricing</span>
        <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">Eenvoudige, transparante prijzen</h1>
        <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
          Geen verborgen kosten. Start gratis en upgrade wanneer je klaar bent.
        </p>
      </Container>

      <Container className="max-w-5xl mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 border flex flex-col ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-[var(--linkedin-blue)] via-[var(--linkedin-blue-dark)] to-[#003366] text-white border-transparent shadow-xl scale-105'
                  : 'bg-white border-gray-200'
              }`}
            >
              <h3 className={`text-lg font-bold mb-1 ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-1">
                <span className={`text-4xl font-black ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>{plan.price}</span>
                {plan.period && <span className={`text-sm ${plan.highlighted ? 'text-white/70' : 'text-gray-500'}`}>{plan.period}</span>}
              </div>
              <p className={`text-sm mb-6 ${plan.highlighted ? 'text-white/70' : 'text-gray-500'}`}>{plan.desc}</p>
              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className={`flex items-center gap-2 text-sm ${plan.highlighted ? 'text-white/90' : 'text-gray-600'}`}>
                    <span className="text-green-400">✓</span> {f}
                  </li>
                ))}
              </ul>
              <Button
                variant={plan.highlighted ? 'white' : 'primary'}
                href={plan.href}
                className="w-full text-center"
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </Container>

      <section className="bg-gray-50 py-16">
        <Container className="text-center">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-3">Nog vragen over pricing?</h2>
          <p className="text-gray-600 mb-6">Ons team helpt je graag bij het kiezen van het juiste plan.</p>
          <Button variant="outline" href="/contact">Neem contact op</Button>
        </Container>
      </section>
    </main>
  );
}
