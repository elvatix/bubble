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
  slug: string
  "SEO title": string
  "SEO Description": string
  Body: string
  Date: string
  Author: string
  Image: string
  "Alt text": string
}

export async function fetchBubble<T>(endpoint: string): Promise<T[]> {
  const apiUrl = process.env.BUBBLE_API_URL || 'https://elvatix.com'
  const apiKey = process.env.BUBBLE_API_KEY

  if (!apiKey) {
    console.warn('BUBBLE_API_KEY is not set, returning empty results')
    return []
  }

  const url = `${apiUrl}/api/1.1/${endpoint}`

  const res = await fetch(url, {
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    next: { revalidate: 3600 }
  })

  if (!res.ok) {
    console.error(`Bubble API error: ${res.status}`)
    return []
  }

  const data: BubbleResponse<T> = await res.json()
  return data.response.results
}

export async function getAllBlogs(): Promise<Blog[]> {
  const blogs = await fetchBubble<Blog>('obj/blog')

  return blogs.sort((a, b) => {
    const dateA = new Date(a.Date).getTime()
    const dateB = new Date(b.Date).getTime()
    return dateB - dateA
  })
}

export async function getBlogBySlug(slug: string): Promise<Blog | null> {
  const constraint = encodeURIComponent(
    JSON.stringify([{
      key: "slug",
      constraint_type: "equals",
      value: slug
    }])
  )

  const blogs = await fetchBubble<Blog>(`obj/blog?constraints=${constraint}`)
  return blogs[0] || null
}

export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}
