import { MetadataRoute } from 'next'
import { offerings } from './data/offerings'
import { posts } from './data/data'
import { newsArticles } from './data/news'

// Cache the sitemap for 24 hours to reduce ISR reads from frequent crawler requests
export const revalidate = 86400

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.ethiocoffee.co'

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date('2025-11-01'),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/ethiopian-coffee-exporter`,
      lastModified: new Date('2025-11-01'),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date('2025-01-01'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/offerings`,
      lastModified: new Date('2025-11-01'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ordering-info`,
      lastModified: new Date('2025-01-01'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/insights`,
      lastModified: new Date('2025-11-01'),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact-us`,
      lastModified: new Date('2025-01-01'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/ethiopia-coffee-export-news`,
      lastModified: new Date('2025-11-01'),
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/ethiopian-green-coffee-beans`,
      lastModified: new Date('2025-06-01'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/buy-ethiopian-coffee-wholesale`,
      lastModified: new Date('2025-06-01'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/coffee-grading-ethiopia`,
      lastModified: new Date('2025-06-01'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ethiopian-coffee-yirgacheffe`,
      lastModified: new Date('2025-06-01'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/organic-ethiopian-coffee-export`,
      lastModified: new Date('2025-06-01'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/ethiopian-coffee-sidamo`,
      lastModified: new Date('2025-06-01'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/ethiopian-coffee-guji`,
      lastModified: new Date('2025-06-01'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/ethiopian-coffee-harar`,
      lastModified: new Date('2025-06-01'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/ethiopian-coffee-limu`,
      lastModified: new Date('2025-06-01'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/ethiopian-coffee-jimma`,
      lastModified: new Date('2025-06-01'),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date('2025-01-01'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]

  const productRoutes: MetadataRoute.Sitemap = offerings.map((o) => ({
    url: `${baseUrl}/product/${o.id}`,
    lastModified: new Date('2025-11-01'),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  // Insights detail pages use SEO-friendly slugs: /insights/ethio-coffee-canada-operations-launch, etc.
  const insightsRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/insights/${post.slug}`,
    lastModified: new Date(post.dateModified || post.date),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  const newsRoutes: MetadataRoute.Sitemap = newsArticles.map((article) => ({
    url: `${baseUrl}/ethiopia-coffee-export-news/${article.slug}`,
    lastModified: new Date(article.dateModified || article.date),
    changeFrequency: 'monthly',
    priority: 0.5,
  }))

  return [...staticRoutes, ...productRoutes, ...insightsRoutes, ...newsRoutes]
}