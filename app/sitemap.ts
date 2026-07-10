import { MetadataRoute } from 'next'
import { offerings } from './data/offerings'
import { posts } from './data/data'
import { newsArticles } from './data/news'
import { INSIGHTS_PAGE_SIZE, NEWS_PAGE_SIZE } from './lib/pagination'

// Cache the sitemap for 24 hours to reduce ISR reads from frequent crawler requests
export const revalidate = 86400

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.ethiocoffee.co'

  // Honest lastModified for content-index pages, derived from the newest item
  // they list. Static landing pages get none — a fabricated date is worse.
  const newestDate = (dates: (string | undefined)[]) =>
    new Date(Math.max(...dates.filter((d): d is string => Boolean(d)).map((d) => new Date(d).getTime())))
  const newestInsight = newestDate(posts.map((p) => p.dateModified || p.date))
  const newestNews = newestDate(newsArticles.map((a) => a.dateModified || a.date))
  const newestOverall = newestInsight > newestNews ? newestInsight : newestNews

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: newestOverall,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/ethiopian-coffee-exporter`,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/about`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/offerings`,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ordering-info`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/insights`,
      lastModified: newestInsight,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact-us`,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/ethiopia-coffee-export-news`,
      lastModified: newestNews,
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/ethiopian-green-coffee-beans`,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/buy-ethiopian-coffee-wholesale`,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/coffee-grading-ethiopia`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ethiopian-coffee-yirgacheffe`,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/organic-ethiopian-coffee-export`,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/ethiopian-coffee-sidamo`,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/ethiopian-coffee-guji`,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/ethiopian-coffee-harar`,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/ethiopian-coffee-limu`,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/ethiopian-coffee-jimma`,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/terms`,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/privacy`,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]

  const productRoutes: MetadataRoute.Sitemap = offerings.map((o) => ({
    url: `${baseUrl}/product/${o.id}`,
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

  const insightsPaginationRoutes: MetadataRoute.Sitemap = Array.from(
    { length: Math.max(0, Math.ceil(posts.length / INSIGHTS_PAGE_SIZE) - 1) },
    (_, index) => ({
      url: `${baseUrl}/insights/page/${index + 2}`,
      lastModified: newestInsight,
      changeFrequency: 'weekly' as const,
      priority: 0.4,
    })
  )

  const newsPaginationRoutes: MetadataRoute.Sitemap = Array.from(
    { length: Math.max(0, Math.ceil(newsArticles.length / NEWS_PAGE_SIZE) - 1) },
    (_, index) => ({
      url: `${baseUrl}/ethiopia-coffee-export-news/page/${index + 2}`,
      lastModified: newestNews,
      changeFrequency: 'weekly' as const,
      priority: 0.4,
    })
  )

  return [
    ...staticRoutes,
    ...productRoutes,
    ...insightsRoutes,
    ...insightsPaginationRoutes,
    ...newsRoutes,
    ...newsPaginationRoutes,
  ]
}
