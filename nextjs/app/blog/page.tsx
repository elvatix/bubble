import { getAllBlogs, generateSlug, fixImageUrl, getBlogTitle } from '@/lib/bubble-api'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Recruitment Blog | Elvatix',
  description: 'LinkedIn recruitment tips en strategieën',
}

export const revalidate = 3600 // Hervalideer elk uur

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

        {/* Grid - responsive 1/2/3 kolommen */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => {
            const title = getBlogTitle(blog)
            const slug = generateSlug(title)
            const imageUrl = fixImageUrl(blog.Image)

            return (
              <Link
                key={blog._id}
                href={`/blog/${slug}`}
                className="group border border-gray-200 rounded-2xl
                  overflow-hidden hover:shadow-xl
                  hover:border-linkedin transition-all duration-300"
              >
                {/* Featured Image */}
                <div className="aspect-video relative overflow-hidden bg-gray-100">
                  {imageUrl && (
                    <Image
                      src={imageUrl}
                      alt={blog["Alt text"] || title}
                      fill
                      className="object-cover group-hover:scale-105
                        transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw,
                        (max-width: 1200px) 50vw, 33vw"
                    />
                  )}
                </div>

                {/* Content — alleen titel, max 2 regels */}
                <div className="p-6">
                  <h2 className="text-xl font-bold mt-2 mb-3
                    group-hover:text-linkedin
                    transition line-clamp-2">
                    {title}
                  </h2>
                </div>
              </Link>
            )
          })}
        </div>

        {/* Empty state */}
        {blogs.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">
              Nog geen blogs beschikbaar
            </p>
          </div>
        )}
      </div>
    </main>
  )
}
