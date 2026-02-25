import type { MetadataRoute } from "next";
import { getAllBlogs, generateSlug } from "@/lib/bubble-api";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://elvatix.com";

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: 'https://elvatix.com/blog', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: 'https://elvatix.com/integraties-linkedin', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: 'https://elvatix.com/case-studies', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: 'https://elvatix.com/case-study-manpower', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: 'https://elvatix.com/case-study-vibegroup', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: 'https://elvatix.com/voor-wie', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: 'https://elvatix.com/voor-recruitmentbureaus', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: 'https://elvatix.com/voor-corporate-recruiters', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: 'https://elvatix.com/voor-detacheringsbureaus', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: 'https://elvatix.com/modules', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: 'https://elvatix.com/module-reminders', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: 'https://elvatix.com/module-custom-gpt', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: 'https://elvatix.com/module-inmails', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: 'https://elvatix.com/module-connectieverzoeken', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: 'https://elvatix.com/module-template-instructies', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: 'https://elvatix.com/module-recruitment-sales-switch', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/platform`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/pricing`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/solutions`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/features/inmails`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/features/connections`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/features/reminders`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/features/analytics`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/cases`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/integraties`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/demo`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.5 },
    { url: `${baseUrl}/hoe-het-werkt`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/over-ons`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.5 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/start`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/privacy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];

  // Dynamic blog posts
  let blogPages: MetadataRoute.Sitemap = [];
  try {
    const blogs = await getAllBlogs();
    blogPages = blogs.map((blog) => ({
      url: `${baseUrl}/blog/${blog.Slug || generateSlug(blog["SEO title"])}`,
      lastModified: blog.Date ? new Date(blog.Date) : new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));
  } catch {
    // Blog API may be unavailable during build
  }

  return [...staticPages, ...blogPages];
}
