import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://elvatix.com';

  const pages = [
    '', // Homepage
    '/probeer',
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
    '/over-ons',
    '/blog',
    '/contact',
    '/demo',
    '/hoe-het-werkt',
    '/terms',
    '/privacy',
  ];

  return pages.map((page) => {
    // Determine priority based on page importance
    let priority = 0.7; // default
    if (page === '') priority = 1.0;
    else if (page === '/probeer' || page === '/modules' || page === '/voor-wie') priority = 0.9;
    else if (page.startsWith('/module-') || page.startsWith('/voor-') || page.startsWith('/integraties')) priority = 0.8;

    return {
      url: `${baseUrl}${page}`,
      lastModified: new Date(),
      changeFrequency: page === '' ? 'weekly' as const : 'monthly' as const,
      priority,
    };
  });
}
