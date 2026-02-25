import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://elvatix.com';

  const pages = [
    '',
    '/modules',
    '/module-inmails',
    '/module-connectieverzoeken',
    '/module-reminders',
    '/module-template-instructies',
    '/module-custom-gpt',
    '/module-recruitment-sales-switch',
    '/voor-wie',
    '/voor-recruitmentbureaus',
    '/voor-corporate-recruiters',
    '/voor-detacheringsbureaus',
    '/integraties-linkedin',
    '/case-studies',
    '/case-study-manpower',
    '/case-study-vibegroup',
    '/blog',
    '/contact',
    '/demo',
    '/hoe-het-werkt',
    '/pricing',
    '/terms',
    '/privacy',
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: page === '' ? 'weekly' as const : 'monthly' as const,
    priority: page === '' ? 1 : page.startsWith('/module') ? 0.8 : 0.7,
  }));
}
