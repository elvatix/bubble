import { getAllBlogs, generateSlug } from '@/lib/bubble-api';
import Container from '@/components/ui/Container';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Blog — Elvatix',
  description: 'Lees de laatste inzichten over AI-powered recruitment, LinkedIn outreach en talent acquisition.',
};

export default async function BlogOverviewPage() {
  const blogs = await getAllBlogs();

  return (
    <main className="pt-40 pb-16">
      <Container className="text-center mb-16">
        <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--linkedin-blue-light)] text-[var(--linkedin-blue)] text-sm font-semibold mb-4">Blog</span>
        <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">Inzichten & Updates</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
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
              const slug = blog.slug || generateSlug(blog['SEO title']);
              return (
                <Link
                  key={blog._id}
                  href={`/blog/${slug}`}
                  className="group block bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg hover:border-[var(--linkedin-blue)] transition-all"
                >
                  {blog.Image && (
                    <div className="aspect-video relative overflow-hidden">
                      <Image
                        src={blog.Image}
                        alt={blog['Alt text'] || blog['SEO title']}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <time className="text-xs text-gray-400 mb-2 block">
                      {new Date(blog.Date).toLocaleDateString('nl-NL', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </time>
                    <h2 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[var(--linkedin-blue)] transition-colors">
                      {blog['SEO title']}
                    </h2>
                    <p className="text-sm text-gray-600 line-clamp-3">{blog['SEO Description']}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-xs text-gray-500">{blog.Author}</span>
                      <span className="text-sm text-[var(--linkedin-blue)] font-semibold">
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
