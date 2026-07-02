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
      url: baseUrl,      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/ethiopian-coffee-exporter`,      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/about`,      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/offerings`,      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ordering-info`,      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/insights`,      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact-us`,      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/ethiopia-coffee-export-news`,      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/ethiopian-green-coffee-beans`,      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/buy-ethiopian-coffee-wholesale`,      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/coffee-grading-ethiopia`,      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ethiopian-coffee-yirgacheffe`,      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/organic-ethiopian-coffee-export`,      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/ethiopian-coffee-sidamo`,      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/ethiopian-coffee-guji`,      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/ethiopian-coffee-harar`,      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/ethiopian-coffee-limu`,      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/ethiopian-coffee-jimma`,      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/terms`,      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]

  const productRoutes: MetadataRoute.Sitemap = offerings.map((o) => ({
    url: `${baseUrl}/product/${o.id}`,    changeFrequency: 'monthly',
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