import { getBlogBySlug, getAllBlogs, generateSlug, fixImageUrl, getBlogTitle } from '@/lib/bubble-api'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import type { Metadata } from 'next'

export const revalidate = 3600

interface BlogPostProps {
  params: Promise<{ slug: string }>
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

// Helper: strip full HTML documents down to just body content
function extractBodyContent(html: string): string {
  if (!html) return ''

  // Als het een volledig HTML document is, extract alleen de body content
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i)
  let content = bodyMatch ? bodyMatch[1] : html

  // Strip eventuele <style> tags uit de content
  content = content.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')

  // Strip eventuele <script> tags
  content = content.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')

  return content.trim()
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = await params
  const blog = await getBlogBySlug(slug)

  // 404 als blog niet bestaat
  if (!blog) notFound()

  const imageUrl = fixImageUrl(blog.Image)
  const bodyContent = extractBodyContent(blog.Body)

  return (
    <main className="pt-32 pb-16 px-6">
      <article className="max-w-4xl mx-auto">

        {/* Featured Image */}
        {imageUrl && (
          <div className="aspect-video relative rounded-2xl
            overflow-hidden mb-8 shadow-lg">
            <Image
              src={imageUrl}
              alt={blog["Alt text"] || getBlogTitle(blog)}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          </div>
        )}

        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl
            font-black mb-6 leading-tight">
            {getBlogTitle(blog)}
          </h1>

          <div className="flex items-center gap-4 text-gray-600">
            <time className="font-medium">
              {new Date(blog.Date).toLocaleDateString('nl-NL', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <span className="text-gray-400">•</span>
            <span className="font-medium">{blog.Author}</span>
          </div>
        </header>

        {/* Blog Content — Body bevat volledige HTML, we extracten body content */}
        <div
          className="prose prose-lg max-w-none
            prose-headings:font-bold prose-headings:text-gray-900
            prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
            prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
            prose-p:text-gray-700 prose-p:leading-relaxed
            prose-a:text-linkedin prose-a:no-underline
            hover:prose-a:underline
            prose-strong:text-gray-900 prose-strong:font-bold
            prose-ul:my-6 prose-li:my-2
            prose-img:rounded-xl prose-img:shadow-lg"
          dangerouslySetInnerHTML={{ __html: bodyContent }}
        />

        {/* Back to overview */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <a
            href="/blog"
            className="inline-flex items-center text-linkedin
              hover:text-linkedin-dark font-semibold
              transition group"
          >
            <svg
              className="w-5 h-5 mr-2 group-hover:-translate-x-1
                transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Terug naar overzicht
          </a>
        </div>
      </article>
    </main>
  )
}
