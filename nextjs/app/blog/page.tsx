import { getAllBlogs, generateSlug } from '@/lib/bubble-api';
import Container from '@/components/ui/Container';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Blog | Elvatix',
  description: 'Lees de laatste inzichten over AI-powered recruitment, LinkedIn outreach en talent acquisition.',
  alternates: { canonical: '/blog' },
};

export default async function BlogOverviewPage() {
  const blogs = await getAllBlogs();

  return (
    <main className="pt-40 pb-16">
      <Container className="text-center mb-16">        <h1 className="page-heading">Inzichten & Updates</h1>
        <p className="page-subtitle">
          De laatste artikelen over AI-powered recruitment, LinkedIn strategieën en talent acquisition best practices.
        </p>
      </Container>

      <Container className="max-w-5xl">
        {blogs.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-xl text-gray-500">Nog geen blogposts beschikbaar.</p>
            <p className="text-sm text-gray-400 mt-2">Check binnenkort terug voor onze eerste artikelen.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => {
              const slug = blog.Slug || generateSlug(blog['SEO title']);
              return (
                <Link
                  key={blog._id}
                  href={`/blog/${slug}`}
                  className="group flex flex-col bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 hover:border-elvatix transition-all duration-300 h-full"
                >
                  {blog.Image && (
                    <div className="aspect-video relative overflow-hidden">
                      <Image
                        src={blog.Image?.startsWith('//') ? 'https:' + blog.Image : blog.Image}
                        alt={blog['Alt text'] || blog['SEO title']}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <time className="text-xs font-semibold text-elvatix-dark bg-elvatix/10 px-2 py-1 rounded-md">
                        {new Date(blog.Date).toLocaleDateString('nl-NL', { year: 'numeric', month: 'long', day: 'numeric' })}
                      </time>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-elvatix transition-colors leading-snug">
                      {blog.Title}
                    </h2>
                    <p className="text-base text-gray-600 line-clamp-3 flex-1 leading-relaxed">{blog['SEO Description']}</p>
                    <div className="mt-auto pt-4 flex items-center justify-between">
                      <span className="text-xs text-gray-500">{blog.Author}</span>
                      <span className="text-sm text-elvatix font-semibold">
                        Lees meer →
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </Container>
    </main>
  );
}
