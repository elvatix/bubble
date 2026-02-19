// lib/bubble-api.ts

interface BubbleResponse<T> {
  response: {
    results: T[]
    count: number
    remaining: number
  }
}

export interface Blog {
  _id: string
  "SEO title"?: string       // kleine 't', met spatie! (soms afwezig bij oudere blogs)
  "SEO Description"?: string // hoofdletter 'D', met spatie! (soms afwezig bij oudere blogs)
  Title?: string             // Oudere blogs gebruiken Title i.p.v. SEO title
  Body: string               // Hoofdletter B - bevat HTML
  Date: string               // Format: "Oct 22, 2023 1:41 pm"
  Author: string             // Meestal: "Gianni Linssen"
  Image: string              // URL, kan beginnen met //
  "Alt text"?: string        // Vaak leeg
}

// Helper: Haal de titel van een blog op (SEO title > Title fallback)
export function getBlogTitle(blog: Blog): string {
  return blog["SEO title"] || blog.Title || 'Untitled'
}

export async function fetchBubble<T>(endpoint: string): Promise<T[]> {
  const apiUrl = process.env.BUBBLE_API_URL || 'https://elvatix.com'
  const apiKey = process.env.BUBBLE_API_KEY

  if (!apiKey) throw new Error('BUBBLE_API_KEY is not set')

  // /version-test/api/1.1/ en Blogs (meervoud, hoofdletter B)
  const url = `${apiUrl}/version-test/api/1.1/${endpoint}`

  const res = await fetch(url, {
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    next: { revalidate: 3600 } // Cache 1 uur
  })

  if (!res.ok) {
    throw new Error(`Bubble API error: ${res.status}`)
  }

  const data: BubbleResponse<T> = await res.json()
  return data.response.results
}

export async function getAllBlogs(): Promise<Blog[]> {
  const blogs = await fetchBubble<Blog>('obj/Blogs') // Blogs! meervoud, hoofdletter B

  // Filter blogs without a title or body (test/empty entries)
  const validBlogs = blogs.filter(b => 
    (b["SEO title"] || b.Title) && b.Body && b.Date
  )

  return validBlogs.sort((a, b) => {
    return new Date(b.Date).getTime() - new Date(a.Date).getTime()
  })
}

export async function getBlogBySlug(slug: string): Promise<Blog | null> {
  // Bubble heeft GEEN slug field!
  // Zoek in alle blogs en match op gegenereerde slug
  const allBlogs = await getAllBlogs()

  const blog = allBlogs.find(b => {
    const title = getBlogTitle(b)
    const blogSlug = generateSlug(title)
    return blogSlug === slug
  })

  return blog || null
}

// Helper: Genereer URL-friendly slug uit titel
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')  // Alleen letters, cijfers, spaties
    .replace(/\s+/g, '-')          // Spaties naar streepjes
    .replace(/-+/g, '-')           // Dubbele streepjes verwijderen
    .trim()
}

// Helper: Fix image URLs die beginnen met //
export function fixImageUrl(url: string): string {
  if (!url) return ''
  if (url.startsWith('//')) return `https:${url}`
  return url
}
