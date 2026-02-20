import { getBlogBySlug, getAllBlogs, generateSlug } from '@/lib/bubble-api';
import { sanitizeBlogHtml } from '@/lib/sanitize-html';
import { notFound } from 'next/navigation';
import Container from '@/components/ui/Container';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const revalidate = 3600;

interface BlogPostProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) return { title: 'Blog niet gevonden' };

  return {
    title: blog['SEO title'] + ' | Elvatix',
    description: blog['SEO Description'],
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: blog['SEO title'],
      description: blog['SEO Description'],
      type: 'article',
      publishedTime: blog.Date,
      images: blog.Image ? [blog.Image.startsWith('//') ? 'https:' + blog.Image : blog.Image] : [],
    },
  };
}

export async function generateStaticParams() {
  try {
    const blogs = await getAllBlogs();
    return blogs.map((blog) => ({
      slug: blog.Slug || generateSlug(blog['SEO title'])
    }))
  } catch (error) {
    console.error('Error in generateStaticParams:', error)
    return []
  }
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) notFound();

  const imageUrl = blog.Image?.startsWith('//') ? 'https:' + blog.Image : blog.Image;
  const cleanBody = sanitizeBlogHtml(blog.Body);
  const wordCount = cleanBody.replace(/<[^>]*>/g, '').split(/\s+/).length;
  const readTime = Math.max(1, Math.ceil(wordCount / 200));

  return (
    <main className="pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white">
      <Container className="max-w-3xl">
        {/* Back link */}
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-elvatix font-semibold mb-8 hover:underline no-underline">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          Terug naar overzicht
        </Link>

        {/* Article header */}
        <article>
          <header className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <time className="text-sm font-semibold text-elvatix-dark bg-elvatix/10 px-3 py-1 rounded-full">
                {new Date(blog.Date).toLocaleDateString('nl-NL', { year: 'numeric', month: 'long', day: 'numeric' })}
              </time>
              <span className="text-sm font-medium text-gray-500 flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                {readTime} min leestijd
              </span>
              <span className="text-gray-300 hidden sm:inline">|</span>
              <span className="text-sm text-gray-500 hidden sm:inline">{blog.Author}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-black text-gray-900 leading-tight mb-6 tracking-tight">
              {blog.Title}
            </h1>
            {blog['SEO Description'] && (
              <p className="text-xl text-gray-600 leading-relaxed font-medium">
                {blog['SEO Description']}
              </p>
            )}
          </header>

          {/* Hero image */}
          {imageUrl && (
            <div className="aspect-video relative rounded-2xl overflow-hidden mb-12 shadow-lg">
              <Image
                src={imageUrl}
                alt={blog['Alt text'] || blog['SEO title']}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* Article body - sanitized HTML with custom prose styling */}
          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: cleanBody }}
          />

          {/* Bottom CTA */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="bg-gradient-to-r from-elvatix-light to-white rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-1">Meer weten over Elvatix?</h3>
                <p className="text-sm text-gray-500">Plan een demo en ontdek hoe AI jouw LinkedIn outreach transformeert.</p>
              </div>
              <Link href="/demo" className="pill-btn pill-btn-elvatix whitespace-nowrap no-underline">
                Plan een demo
              </Link>
            </div>
          </div>
        </article>
      </Container>
    </main>
  );
}
