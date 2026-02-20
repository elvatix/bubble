import { getBlogBySlug, getAllBlogs, generateSlug } from '@/lib/bubble-api';
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
      images: blog.Image ? [blog.Image] : [],
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

  return (
    <main className="pt-40 pb-16">
      <Container className="max-w-4xl">
        {blog.Image && (
          <div className='aspect-video relative rounded-2xl overflow-hidden mb-8 shadow-lg'>
            <Image
              src={blog.Image}
              alt={blog['Alt text'] || blog['SEO title']}
              fill
              className='object-cover'
              priority
            />
          </div>
        )}

        <header className="mb-12">
          <h1 className="page-heading">
            {blog['SEO title']}
          </h1>
          <div className="flex items-center gap-4 text-gray-500">
            <time>{new Date(blog.Date).toLocaleDateString('nl-NL', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
            <span>•</span>
            <span>{blog.Author}</span>
          </div>
        </header>

        <div
          className='prose prose-lg max-w-none'
          dangerouslySetInnerHTML={{ __html: blog.Body }}
        />

        <div className="mt-16 pt-8 border-t">
          <Link href="/blog" className="text-elvatix font-semibold hover:underline">
            ← Terug naar overzicht
          </Link>
        </div>
      </Container>
    </main>
  );
}
