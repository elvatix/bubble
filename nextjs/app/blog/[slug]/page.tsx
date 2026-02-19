import { getBlogBySlug, getAllBlogs, generateSlug, fixImageUrl, getBlogTitle, cleanBlogBody } from '@/lib/bubble-api'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import ImmersiveLayout from './immersive-layout'

export const revalidate = 3600

// Slugs die de immersive layout gebruiken
const IMMERSIVE_SLUGS = [
  'hoeveel-berichten-sturen-voor-1-intake-op-linkedin-richtlijn-en-timing',
]

interface BlogPostProps {
  params: Promise<{ slug: string }>
}

// Bereken leestijd
function calculateReadingTime(html: string): number {
  const text = html.replace(/<[^>]*>/g, '')
  const words = text.split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.ceil(words / 200))
}

// SEO Metadata genereren
export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
  const { slug } = await params
  const blog = await getBlogBySlug(slug)

  if (!blog) return { title: 'Blog niet gevonden' }

  const imageUrl = fixImageUrl(blog.Image)

  return {
    title: `${getBlogTitle(blog)} | Elvatix`,
    description: blog["SEO Description"] || '',
    openGraph: {
      title: getBlogTitle(blog),
      description: blog["SEO Description"] || '',
      type: 'article',
      publishedTime: blog.Date,
      authors: [blog.Author],
      images: imageUrl ? [imageUrl] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: getBlogTitle(blog),
      description: blog["SEO Description"] || '',
      images: imageUrl ? [imageUrl] : [],
    },
    alternates: {
      canonical: `/blog/${slug}`,
    },
  }
}

// Alle blog slugs genereren bij build (Static Generation)
export async function generateStaticParams() {
  const blogs = await getAllBlogs()

  return blogs.map((blog) => ({
    slug: generateSlug(getBlogTitle(blog)),
  }))
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = await params
  const blog = await getBlogBySlug(slug)

  // 404 als blog niet bestaat
  if (!blog) notFound()

  const imageUrl = fixImageUrl(blog.Image)
  const bodyContent = cleanBlogBody(blog.Body)
  const readingTime = calculateReadingTime(bodyContent)
  const title = getBlogTitle(blog)
  const dateFormatted = new Date(blog.Date).toLocaleDateString('nl-NL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  // ── Immersive layout voor specifieke blogs ──
  if (IMMERSIVE_SLUGS.includes(slug)) {
    return (
      <ImmersiveLayout
        title={title}
        author={blog.Author}
        date={dateFormatted}
        readingTime={readingTime}
        imageUrl={imageUrl}
        altText={blog["Alt text"] || title}
        bodyContent={bodyContent}
      />
    )
  }

  // ── Default layout voor alle andere blogs ──
  return (
    <main className="min-h-screen bg-white">

      {/* ── Hero Section ── */}
      <section className="relative pt-28 pb-16 px-6"
        style={{
          background: 'linear-gradient(180deg, #e8f0fe 0%, #ffffff 100%)',
        }}
      >
        <div className="max-w-4xl mx-auto">

          {/* Breadcrumb / Back */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium
              text-linkedin hover:text-linkedin-dark transition mb-8 group"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform"
              fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Terug naar overzicht
          </Link>

          {/* Badge */}
          <div className="mb-6">
            <span className="page-badge">Blog</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black
            leading-tight tracking-tight text-gray-900 mb-6">
            {title}
          </h1>

          {/* Meta row — date, reading time, author */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-8">
            <div className="flex items-center gap-2">
              {/* Calendar icon */}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <time>{dateFormatted}</time>
            </div>

            <span className="text-gray-300">|</span>

            <div className="flex items-center gap-2">
              {/* Clock icon */}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{readingTime} min leestijd</span>
            </div>

            <span className="text-gray-300">|</span>

            <div className="flex items-center gap-2">
              {/* Author avatar */}
              <div className="w-6 h-6 rounded-full bg-linkedin flex items-center justify-center text-white text-xs font-bold">
                {blog.Author?.charAt(0) || 'E'}
              </div>
              <span className="font-medium text-gray-700">{blog.Author}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Featured Image ── */}
      {imageUrl && (
        <div className="px-6 -mt-4 mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video relative rounded-2xl overflow-hidden shadow-xl
              ring-1 ring-gray-200/50">
              <Image
                src={imageUrl}
                alt={blog["Alt text"] || title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
            </div>
          </div>
        </div>
      )}

      {/* ── Article Body ── */}
      <article className="px-6 pb-16">
        <div className="max-w-3xl mx-auto">

          {/* Prose Content */}
          <div
            className="blog-prose prose prose-lg max-w-none
              prose-headings:font-bold prose-headings:text-gray-900
              prose-headings:tracking-tight
              prose-h1:text-3xl prose-h1:mt-14 prose-h1:mb-6
              prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-5
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-gray-600 prose-p:leading-[1.8]
              prose-p:text-[17px]
              prose-a:text-linkedin prose-a:font-medium
              prose-a:no-underline prose-a:border-b
              prose-a:border-linkedin/30
              hover:prose-a:border-linkedin
              prose-strong:text-gray-800 prose-strong:font-semibold
              prose-ul:my-6 prose-ol:my-6
              prose-li:my-1.5 prose-li:text-gray-600
              prose-li:text-[17px] prose-li:leading-[1.8]
              prose-img:rounded-xl prose-img:shadow-lg
              prose-img:my-8
              prose-blockquote:border-l-4
              prose-blockquote:border-linkedin
              prose-blockquote:bg-linkedin-light/30
              prose-blockquote:rounded-r-xl
              prose-blockquote:py-4 prose-blockquote:px-6
              prose-blockquote:not-italic
              prose-blockquote:text-gray-700"
            dangerouslySetInnerHTML={{ __html: bodyContent }}
          />

          {/* ── Divider ── */}
          <div className="my-16 flex items-center gap-4">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
            <div className="w-2 h-2 rounded-full bg-linkedin/20" />
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
          </div>

          {/* ── Author Card ── */}
          <div className="flex items-start gap-5 p-6 rounded-2xl bg-gray-50
            border border-gray-100">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-linkedin
              to-linkedin-dark flex items-center justify-center text-white
              text-xl font-bold flex-shrink-0 shadow-md">
              {blog.Author?.charAt(0) || 'E'}
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Geschreven door</p>
              <p className="text-lg font-bold text-gray-900">{blog.Author}</p>
              <p className="text-sm text-gray-500 mt-1">
                Gepubliceerd op {dateFormatted}
              </p>
            </div>
          </div>

          {/* ── CTA Section ── */}
          <div className="mt-12 p-8 rounded-2xl text-white text-center"
            style={{
              background: 'linear-gradient(135deg, #0a66c2, #004182)',
            }}
          >
            <h3 className="text-2xl font-bold mb-3">
              Wil je slimmer recruiten via LinkedIn?
            </h3>
            <p className="text-white/80 mb-6 max-w-lg mx-auto">
              Ontdek hoe Elvatix je helpt met AI-gedreven InMails,
              connectieverzoeken en opvolging — volledig geautomatiseerd.
            </p>
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 px-8 py-3.5
                bg-white text-linkedin font-bold rounded-full
                hover:bg-gray-50 hover:shadow-lg transition-all
                duration-200 text-sm"
            >
              Plan een demo
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* ── Back to overview ── */}
          <div className="mt-12 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm
                font-medium text-gray-500 hover:text-linkedin
                transition group"
            >
              <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform"
                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Terug naar overzicht
            </Link>
          </div>
        </div>
      </article>
    </main>
  )
}
