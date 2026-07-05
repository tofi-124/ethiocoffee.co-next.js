import { MetadataRoute } from 'next'

// AI search/answer-engine crawlers we explicitly welcome so the site can be
// cited in ChatGPT, Claude, Perplexity, Gemini, etc. They'd match '*' anyway,
// but naming them documents intent and keeps them allowed if '*' ever tightens.
const aiCrawlers = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-SearchBot',
  'Claude-User',
  'anthropic-ai',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'Applebot-Extended',
  'meta-externalagent',
  'CCBot',
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/insta/', '/checkout/'],
      },
      ...aiCrawlers.map((userAgent) => ({
        userAgent,
        allow: '/',
        disallow: ['/api/', '/insta/', '/checkout/'],
      })),
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