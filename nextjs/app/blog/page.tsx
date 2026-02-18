import { getAllBlogs, generateSlug } from '@/lib/bubble-api'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Recruitment Blog | Elvatix',
  description: 'LinkedIn recruitment tips en strategieën'
}

export const revalidate = 3600 // Hervalideer elke 1 uur

export default async function BlogPage() {
  const blogs = await getAllBlogs()

  return (
    <main className="pt-32 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black mb-4">
            Recruitment Insights
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tips, trends en best practices voor recruiters
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => {
            const slug = blog.slug || generateSlug(blog["SEO title"])

            return (
              <Link
                key={blog._id}
                href={`/blog/${slug}`}
                className="group border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl hover:border-[var(--linkedin-blue)] transition-all"
              >
                {blog.Image && (
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={blog.Image}
                      alt={blog["SEO title"]}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}

                <div className="p-6">
                  <time className="text-sm text-gray-500">
                    {new Date(blog.Date).toLocaleDateString('nl-NL')}
                  </time>

                  <h2 className="text-xl font-bold mt-2 mb-3 group-hover:text-[var(--linkedin-blue)] line-clamp-2">
                    {blog["SEO title"]}
                  </h2>

                  <p className="text-gray-600 text-sm line-clamp-3">
                    {blog["SEO Description"]}
                  </p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </main>
  )
}
