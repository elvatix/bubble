'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

interface ImmersiveBlogProps {
  title: string
  author: string
  date: string
  readingTime: number
  imageUrl: string
  altText: string
  bodyContent: string
}

/* ─── Animated counter ─── */
function AnimatedNumber({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const duration = 1200
          const start = performance.now()
          const animate = (now: number) => {
            const progress = Math.min((now - start) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.round(eased * value))
            if (progress < 1) requestAnimationFrame(animate)
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value])

  return <span ref={ref}>{count}{suffix}</span>
}

/* ─── Fade-in on scroll wrapper ─── */
function FadeIn({ children, className = '', delay = 0 }: {
  children: React.ReactNode; className?: string; delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(30px)',
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

/* ─── Pull Quote ─── */
function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <FadeIn>
      <blockquote className="relative my-12 md:my-16 py-8 px-6 md:px-10">
        <div className="absolute top-0 left-4 md:left-8 text-[120px] leading-none
          font-black text-linkedin/10 select-none pointer-events-none"
          aria-hidden="true">
          &ldquo;
        </div>
        <p className="relative z-10 text-xl md:text-2xl lg:text-3xl font-bold
          leading-snug text-gray-900 italic">
          {children}
        </p>
        <div className="mt-4 w-16 h-1 bg-gradient-to-r from-linkedin to-linkedin-dark
          rounded-full" />
      </blockquote>
    </FadeIn>
  )
}

/* ─── Stat Card ─── */
function StatCard({ number, suffix, label, icon }: {
  number: number; suffix?: string; label: string; icon: string
}) {
  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-br from-linkedin/20 to-linkedin-dark/20
        rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative bg-white rounded-2xl p-6 md:p-8 border border-gray-100
        shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
        <div className="text-3xl mb-3">{icon}</div>
        <div className="text-4xl md:text-5xl font-black text-linkedin mb-2">
          <AnimatedNumber value={number} suffix={suffix} />
        </div>
        <p className="text-sm text-gray-500 font-medium">{label}</p>
      </div>
    </div>
  )
}

/* ─── Timeline Step ─── */
function TimelineStep({ day, title, description, index }: {
  day: string; title: string; description: string; index: number
}) {
  return (
    <FadeIn delay={index * 150}>
      <div className="flex gap-4 md:gap-6 items-start group">
        <div className="flex flex-col items-center flex-shrink-0">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-linkedin to-linkedin-dark
            flex items-center justify-center text-white font-bold text-sm
            shadow-lg shadow-linkedin/20 group-hover:scale-110 transition-transform">
            {day}
          </div>
          {index < 2 && (
            <div className="w-0.5 h-16 bg-gradient-to-b from-linkedin/30 to-transparent mt-2" />
          )}
        </div>
        <div className="pb-8">
          <h4 className="font-bold text-gray-900 text-lg mb-1">{title}</h4>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </FadeIn>
  )
}

/* ═══════════════════════════════════════════════════════════════
   MAIN IMMERSIVE LAYOUT
   ═══════════════════════════════════════════════════════════════ */
export default function ImmersiveLayout({
  title, author, date, readingTime, imageUrl, altText, bodyContent
}: ImmersiveBlogProps) {
  return (
    <main className="min-h-screen bg-white overflow-hidden">

      {/* ═══ CINEMATIC HERO ═══ */}
      <section className="relative min-h-[85vh] flex items-end">
        {imageUrl && (
          <>
            <Image
              src={imageUrl}
              alt={altText}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t
              from-gray-900 via-gray-900/60 to-gray-900/20" />
          </>
        )}

        <div className="relative z-10 w-full px-6 pb-16 pt-32">
          <div className="max-w-4xl mx-auto">
            <FadeIn delay={100}>
              <Link href="/blog"
                className="inline-flex items-center gap-2 text-sm text-white/70
                  hover:text-white transition mb-6 group">
                <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Blog
              </Link>
            </FadeIn>

            <FadeIn delay={200}>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold
                uppercase tracking-wider bg-linkedin text-white mb-6">
                LinkedIn Recruitment
              </span>
            </FadeIn>

            <FadeIn delay={300}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl
                font-black text-white leading-[1.1] tracking-tight mb-6
                max-w-3xl">
                {title}
              </h1>
            </FadeIn>

            <FadeIn delay={400}>
              <div className="flex flex-wrap items-center gap-4 text-sm text-white/60">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur
                    flex items-center justify-center text-white text-xs font-bold">
                    {author?.charAt(0) || 'E'}
                  </div>
                  <span className="font-medium text-white/90">{author}</span>
                </div>
                <span className="text-white/30">•</span>
                <time>{date}</time>
                <span className="text-white/30">•</span>
                <span>{readingTime} min leestijd</span>
              </div>
            </FadeIn>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <svg className="w-6 h-6 text-white/40" fill="none" stroke="currentColor"
            viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* ═══ KEY STAT CARDS ═══ */}
      <section className="py-16 md:py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <p className="text-center text-sm font-bold uppercase tracking-widest
              text-linkedin mb-8">
              De kern van dit artikel
            </p>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <FadeIn delay={100}>
              <StatCard number={2} suffix="-4" label="Berichten voor één intake" icon="💬" />
            </FadeIn>
            <FadeIn delay={200}>
              <StatCard number={3} suffix="-7" label="Dagen tussen berichten" icon="📅" />
            </FadeIn>
            <FadeIn delay={300}>
              <StatCard number={80} suffix="%" label="Reageert pas na 2e bericht" icon="📊" />
            </FadeIn>
            <FadeIn delay={400}>
              <StatCard number={3} suffix="x" label="Meer reacties met follow-up" icon="🚀" />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══ PULL QUOTE ═══ */}
      <section className="py-12 md:py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <PullQuote>
            Voor een intakegesprek via LinkedIn heb je gemiddeld 2 tot 4 berichten nodig.
            Recruiters die dit ritme aanhouden, voorkomen dat hun berichten als spam overkomen.
          </PullQuote>
        </div>
      </section>

      {/* ═══ BLOG BODY ═══ */}
      <section className="px-6 pb-16">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div
              className="blog-prose immersive-prose prose prose-lg max-w-none
                prose-headings:font-black prose-headings:text-gray-900
                prose-headings:tracking-tight
                prose-h1:text-3xl prose-h1:mt-16 prose-h1:mb-6
                prose-h2:text-2xl prose-h2:mt-14 prose-h2:mb-5
                prose-h2:relative prose-h2:pl-5
                prose-h3:text-xl prose-h3:mt-10 prose-h3:mb-4
                prose-p:text-[17px] prose-p:text-gray-600
                prose-p:leading-[1.85]
                prose-a:text-linkedin prose-a:font-semibold
                prose-a:no-underline prose-a:border-b-2
                prose-a:border-linkedin/20
                hover:prose-a:border-linkedin
                prose-strong:text-gray-800 prose-strong:font-bold
                prose-ul:my-6 prose-ol:my-6
                prose-li:my-2 prose-li:text-gray-600
                prose-li:text-[17px] prose-li:leading-[1.85]
                prose-img:rounded-2xl prose-img:shadow-xl
                prose-img:my-10
                prose-blockquote:border-l-4
                prose-blockquote:border-linkedin
                prose-blockquote:bg-gradient-to-r
                prose-blockquote:from-linkedin/5
                prose-blockquote:to-transparent
                prose-blockquote:rounded-r-xl
                prose-blockquote:py-5 prose-blockquote:px-8
                prose-blockquote:not-italic
                prose-blockquote:text-gray-700
                prose-blockquote:shadow-sm"
              dangerouslySetInnerHTML={{ __html: bodyContent }}
            />
          </FadeIn>
        </div>
      </section>

      {/* ═══ TIMELINE SECTION ═══ */}
      <section className="py-16 md:py-20 px-6"
        style={{ background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)' }}>
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold
              uppercase tracking-wider bg-linkedin-light text-linkedin mb-3">
              Stappenplan
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-10">
              De ideale opvolgstructuur
            </h2>
          </FadeIn>

          <div className="ml-2">
            <TimelineStep
              index={0}
              day="D0"
              title="Connectieverzoek met korte, relevante tekst"
              description="Houd het persoonlijk. Noem iets concreets over hun profiel, role of bedrijf. Geen template."
            />
            <TimelineStep
              index={1}
              day="D3"
              title="Eerste vervolgbericht bij uitblijven van reactie"
              description="Verwijs naar je eerdere bericht, voeg nieuws of een nieuwe invalshoek toe. Korter is beter."
            />
            <TimelineStep
              index={2}
              day="D7"
              title="Laatste opvolging met een ander voorstel"
              description="Bied een alternatief aan: een telefoontje, mail of doorverwijs naar een collega. Laat ruimte."
            />
          </div>
        </div>
      </section>

      {/* ═══ FULL-WIDTH INSIGHT BANNER ═══ */}
      <section className="relative py-20 md:py-28 px-6 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0a66c2, #003d7a)' }}>
        <div className="absolute top-10 -left-20 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-linkedin-dark/30 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <FadeIn>
            <p className="text-linkedin-light/60 text-sm font-bold uppercase
              tracking-widest mb-6">
              Key Insight
            </p>
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-white
              leading-snug mb-8">
              De meeste kandidaten reageren pas bij de{' '}
              <span className="relative inline-block">
                <span className="relative z-10">tweede of derde</span>
                <span className="absolute bottom-1 left-0 right-0 h-3
                  bg-white/20 -skew-x-3 rounded" />
              </span>{' '}
              poging. Echte variatie in je opvolging is daarom noodzakelijk.
            </p>
            <div className="flex justify-center gap-3 flex-wrap">
              <span className="px-4 py-2 bg-white/10 backdrop-blur rounded-full
                text-white/80 text-sm font-medium">✨ Personaliseer elk bericht</span>
              <span className="px-4 py-2 bg-white/10 backdrop-blur rounded-full
                text-white/80 text-sm font-medium">⏱ Timing is alles</span>
              <span className="px-4 py-2 bg-white/10 backdrop-blur rounded-full
                text-white/80 text-sm font-medium">🎯 Weet wanneer je stopt</span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ DIVIDER ═══ */}
      <div className="py-12 flex items-center justify-center gap-3">
        <div className="w-20 h-px bg-gradient-to-r from-transparent to-gray-200" />
        <div className="w-2.5 h-2.5 rounded-full bg-linkedin/20" />
        <div className="w-20 h-px bg-gradient-to-l from-transparent to-gray-200" />
      </div>

      {/* ═══ AUTHOR CARD ═══ */}
      <section className="px-6 pb-8">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="flex items-start gap-5 p-8 rounded-2xl
              bg-gradient-to-br from-gray-50 to-white
              border border-gray-100 shadow-sm">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-linkedin
                to-linkedin-dark flex items-center justify-center text-white
                text-2xl font-bold flex-shrink-0 shadow-lg shadow-linkedin/20
                rotate-3 hover:rotate-0 transition-transform">
                {author?.charAt(0) || 'E'}
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Geschreven door</p>
                <p className="text-xl font-black text-gray-900">{author}</p>
                <p className="text-sm text-gray-500 mt-1">
                  Gepubliceerd op {date}
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="px-6 pb-16">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="relative rounded-3xl overflow-hidden p-10 md:p-14 text-center"
              style={{ background: 'linear-gradient(135deg, #0a66c2, #004182)' }}>
              <div className="absolute top-0 left-0 w-full h-full opacity-5"
                style={{
                  backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                  backgroundSize: '24px 24px',
                }} />
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
                  Klaar om slimmer te recruiten?
                </h3>
                <p className="text-white/70 mb-8 max-w-md mx-auto text-lg">
                  Ontdek hoe Elvatix AI-gedreven InMails en opvolging
                  volledig automatiseert — persoonlijk, op schaal.
                </p>
                <Link
                  href="/demo"
                  className="inline-flex items-center gap-3 px-10 py-4
                    bg-white text-linkedin font-bold rounded-full
                    hover:bg-gray-50 hover:shadow-2xl hover:-translate-y-0.5
                    transition-all duration-300 text-base
                    shadow-lg shadow-black/20"
                >
                  Plan een demo
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round"
                      strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ Back ═══ */}
      <div className="pb-16 text-center">
        <Link href="/blog"
          className="inline-flex items-center gap-2 text-sm font-medium
            text-gray-400 hover:text-linkedin transition group">
          <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform"
            fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round"
              strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Terug naar overzicht
        </Link>
      </div>
    </main>
  )
}
