"use client";

import Container from '@/components/ui/Container';
import Link from 'next/link';
import { useState, type FormEvent } from 'react';
import { CheckCircleIcon } from '@/components/icons/Icons';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          naam: formData.get('naam'),
          email: formData.get('email'),
          bericht: formData.get('bericht'),
        }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        const data = await res.json();
        setError(data.message || 'Er ging iets mis. Probeer het opnieuw.');
      }
    } catch {
      setError('Er ging iets mis. Probeer het opnieuw.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="pt-40 pb-16">
      <Container className="max-w-2xl text-center">
        <h1 className="text-4xl md:text-5xl font-black text-text-primary mb-4">Hulp Nodig?</h1>
        <p className="text-text-muted mb-12 text-lg leading-relaxed">
          We horen graag van je! Of je nu een vraag hebt over de tool of een suggestie om Elvatix nog beter te maken, ons team zit voor je klaar. Vul het formulier in en we reageren binnen één werkdag.
        </p>

        {submitted ? (
          <div className="flex flex-col items-center justify-center gap-4 py-12">
            <CheckCircleIcon size={48} className="text-success" />
            <p className="text-lg font-semibold text-text-primary">Bericht Verstuurd</p>
            <p className="text-text-muted text-sm">We reageren binnen één werkdag.</p>
            <button
              onClick={() => setSubmitted(false)}
              className="text-sm text-elvatix font-medium hover:underline cursor-pointer"
            >
              Nog een bericht versturen
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
            <div>
              <label htmlFor="contact-naam" className="form-label">Naam</label>
              <input id="contact-naam" name="naam" type="text" placeholder="Je volledige naam" className="form-input" required />
            </div>
            <div>
              <label htmlFor="contact-email" className="form-label">Email</label>
              <input id="contact-email" name="email" type="email" placeholder="jan@bedrijf.nl" className="form-input" required />
            </div>
            <div>
              <label htmlFor="contact-bericht" className="form-label">Bericht</label>
              <textarea id="contact-bericht" name="bericht" rows={5} placeholder="Waar kunnen we je mee helpen?" className="form-input resize-none" required></textarea>
            </div>

            {error && (
              <p className="text-danger text-sm font-medium">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="pill-btn pill-btn-elvatix w-full mt-2 justify-center disabled:opacity-60"
            >
              {loading ? 'Versturen...' : 'Verstuur Bericht'}
            </button>
          </form>
        )}
      </Container>

      {/* CTA Section */}
      <Container className="max-w-2xl mt-20">
        <div className="cta-section rounded-card text-center">
          <h2 className="text-2xl font-extrabold text-white mb-3">Andere gingen je voor, start vandaag</h2>
          <p className="text-white/80 mb-6">Bespaar tijd, verhoog je conversies en besteed je bonusuren aan het sluiten van deals.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://app.elvatix.com"
              target="_blank"
              rel="noopener noreferrer"
              className="pill-btn bg-white text-elvatix font-bold px-8 py-3"
            >
              Start For Free
            </a>
            <Link href="/demo" className="pill-btn pill-btn-outline border-white text-white hover:bg-white/10 px-8 py-3">
              Demo Inplannen
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
}
