import { getBlogBySlug, getAllBlogs, generateSlug } from '@/lib/bubble-api'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import type { Metadata } from 'next'

export const revalidate = 3600

interface BlogPostProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
  const { slug } = await params
  const blog = await getBlogBySlug(slug)

  if (!blog) return { title: 'Blog niet gevonden' }

  return {
    title: `${blog["SEO title"]} | Elvatix`,
    description: blog["SEO Description"],
    openGraph: {
      title: blog["SEO title"],
      description: blog["SEO Description"],
      type: 'article',
      publishedTime: blog.Date,
      images: blog.Image ? [blog.Image] : []
    }
  }
}

export async function generateStaticParams() {
  try {
    const blogs = await getAllBlogs()
    return blogs.map((blog) => ({
      slug: blog.slug || generateSlug(blog["SEO title"])
    }))
  } catch (error) {
    console.error('Error in generateStaticParams:', error)
    return []
  }
}))
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = await params
  const blog = await getBlogBySlug(slug)

  if (!blog) notFound()

  return (
    <main className="pt-32 pb-16 px-6">
      <article className="max-w-4xl mx-auto">
        {blog.Image && (
          <div className="aspect-video relative rounded-2xl overflow-hidden mb-8 shadow-lg">
            <Image
              src={blog.Image}
              alt={blog["SEO title"]}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        <header className="mb-12">
          <h1 className="text-4xl md:text-6xl font-black mb-6">
            {blog["SEO title"]}
          </h1>

          <div className="flex items-center gap-4 text-gray-600">
            <time>{new Date(blog.Date).toLocaleDateString('nl-NL')}</time>
            <span>•</span>
            <span>{blog.Author}</span>
          </div>
        </header>

        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: blog.Body }}
        />

        <div className="mt-16 pt-8 border-t">
          <a href="/blog" className="text-[var(--linkedin-blue)] font-semibold">
            ← Terug naar overzicht
          </a>
        </div>
      </article>
    </main>
  )
}
