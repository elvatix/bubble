import Container from '@/components/ui/Container';
import { CheckIcon } from '@/components/icons/Icons';
import Button from '@/components/ui/Button';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing | Elvatix',
  description: 'Bekijk de prijzen van Elvatix. Start gratis, upgrade wanneer je klaar bent.',
  alternates: { canonical: '/pricing' },
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
    highlight: false,
  },
  {
    name: 'Pro',
    price: '€49',
    period: 'per maand',
    desc: 'Voor serieuze recruiters die resultaat willen.',
    features: ['Onbeperkte AI-berichten', 'Custom GPT training', 'Smart Reminders', 'Analytics dashboard', 'Priority support', 'Team templates'],
    cta: 'Start Pro',
    href: '/start',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Op maat',
    period: '',
    desc: 'Voor teams die maximale impact willen.',
    features: ['Alles in Pro', 'Dedicated account manager', 'Custom integraties', 'SSO & SAML', 'SLA garantie', 'Onboarding programma'],
    cta: 'Neem contact op',
    href: '/contact',
    highlight: false,
  },
];

export default function PricingPage() {
  return (
    <main className="pt-40 pb-0">
      <Container className="text-center mb-16">
        <span className="page-badge">Pricing</span>
        <h1 className="page-heading">Eenvoudige, transparante prijzen</h1>
        <p className="page-subtitle">Geen verborgen kosten. Start gratis en upgrade wanneer je klaar bent.</p>
      </Container>

      <Container className="max-w-5xl mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div key={plan.name} className={`rounded-2xl p-8 flex flex-col ${plan.highlight ? 'bg-linkedin text-white shadow-xl scale-105' : 'bg-white border border-gray-200'}`}>
              <h2 className="text-xl font-bold mb-1">{plan.name}</h2>
              <div className="mb-1">
                <span className="text-4xl font-black">{plan.price}</span>
                {plan.period && <span className={`text-sm ml-1 ${plan.highlight ? 'text-white/70' : 'text-gray-500'}`}>{plan.period}</span>}
              </div>
              <p className={`text-sm mb-6 ${plan.highlight ? 'text-white/80' : 'text-gray-600'}`}>{plan.desc}</p>
              <ul className="flex flex-col gap-3 mb-8 flex-grow">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <CheckIcon size={16} className={plan.highlight ? 'text-green-300' : 'text-green-500'} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Button variant={plan.highlight ? 'white' : 'primary'} href={plan.href} className="w-full">{plan.cta}</Button>
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
