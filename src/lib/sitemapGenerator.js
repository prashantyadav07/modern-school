/**
 * Sitemap Generator Utility
 * Generates sitemap.xml content based on site routes and configuration
 */

import { siteConfig } from '../config/site.config.js';

export const generateSitemap = () => {
  const baseUrl = siteConfig.siteUrl;
  const currentDate = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format

  // Define all routes with their SEO properties
  const routes = [
    {
      path: '/',
      changefreq: 'weekly',
      priority: 1.0,
      description: 'Homepage'
    },
    {
      path: '/about',
      changefreq: 'monthly',
      priority: 0.9,
      description: 'About J.S. College of Education'
    },
    {
      path: '/academics',
      changefreq: 'monthly',
      priority: 0.8,
      description: 'Academics and Programs'
    },
    {
      path: '/academics/courses',
      changefreq: 'monthly',
      priority: 0.9,
      description: 'Available Courses - B.A. and B.Sc.'
    },
    {
      path: '/academics/faculty',
      changefreq: 'monthly',
      priority: 0.7,
      description: 'Faculty and Teaching Staff'
    },
    {
      path: '/admissions',
      changefreq: 'weekly',
      priority: 0.95,
      description: 'Admissions Information and Process'
    },
    {
      path: '/facilities',
      changefreq: 'monthly',
      priority: 0.7,
      description: 'Campus Facilities and Infrastructure'
    },
    {
      path: '/gallery',
      changefreq: 'monthly',
      priority: 0.6,
      description: 'Photo Gallery and Campus Images'
    },
    {
      path: '/authenticity',
      changefreq: 'yearly',
      priority: 0.8,
      description: 'Certificates, Approvals and Authenticity'
    },
    {
      path: '/inquiry',
      changefreq: 'monthly',
      priority: 0.7,
      description: 'Contact and Inquiry Form'
    },
    {
      path: '/contact',
      changefreq: 'yearly',
      priority: 0.8,
      description: 'Contact Information and Location'
    }
  ];

  // Generate XML content
  const urlEntries = routes.map(route => `
  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('');

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">${urlEntries}

</urlset>`;

  return sitemapXml;
};

/**
 * Get robots.txt content
 */
export const generateRobotsTxt = () => {
  const baseUrl = siteConfig.siteUrl;

  return `# https://www.robotstxt.org/robotstxt.html
User-agent: *
Allow: /

# Sitemap location
Sitemap: ${baseUrl}/sitemap.xml

# Disallow internal paths and development files
Disallow: /api/
Disallow: /*.json$
Disallow: /assets/*.pdf$
Disallow: /admin/
Disallow: /private/
Disallow: /*?*
Disallow: /*&*

# Crawl-delay for politeness (1 second)
Crawl-delay: 1

# Specific bot rules
User-agent: Googlebot
Allow: /
Crawl-delay: 1

User-agent: Bingbot
Allow: /
Crawl-delay: 1

User-agent: Slurp
Allow: /
Crawl-delay: 1

# Mobile crawlers
User-agent: Googlebot-Mobile
Allow: /

User-agent: Googlebot-Image
Allow: /

# Social media crawlers
User-agent: facebookexternalhit
Allow: /

User-agent: Twitterbot
Allow: /

User-agent: LinkedInBot
Allow: /

# Block unwanted bots
User-agent: AhrefsBot
Disallow: /

User-agent: MJ12bot
Disallow: /

User-agent: DotBot
Disallow: /`;
};