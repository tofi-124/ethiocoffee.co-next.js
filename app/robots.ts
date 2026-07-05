import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/insta/', '/checkout/'],
      },
      {
        // Crawlers use the single most-specific matching group, so these bots
        // need their own disallow list — otherwise they'd crawl /checkout/, /api/, etc.
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/_next/', '/insta/', '/checkout/'],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/', '/_next/', '/insta/', '/checkout/'],
      },
    ],
    sitemap: 'https://www.ethiocoffee.co/sitemap.xml'
  }
}