import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import sitemap from '../app/sitemap'
import robots from '../app/robots'
import { posts } from '../app/data/data'
import { newsArticles } from '../app/data/news'
import { offerings } from '../app/data/offerings'
import { INSIGHTS_PAGE_SIZE, NEWS_PAGE_SIZE } from '../app/lib/pagination'

const failures: string[] = []
const check = (condition: boolean, message: string) => {
  if (!condition) failures.push(message)
}

const unique = (values: string[]) => new Set(values).size === values.length

check(unique(posts.map((post) => post.slug).filter((slug): slug is string => Boolean(slug))), 'Insight slugs must be unique')
check(unique(newsArticles.map((article) => article.slug)), 'News slugs must be unique')
check(unique(offerings.map((offering) => offering.id)), 'Product IDs must be unique')

for (const post of posts) {
  check(Boolean(post.slug && post.title && post.desc), `Insight is missing SEO content: ${post.slug || post.title}`)
  check(Number.isFinite(Date.parse(post.date)), `Insight has an invalid date: ${post.slug}`)
}

for (const article of newsArticles) {
  check(Boolean(article.slug && article.title && article.desc), `News article is missing SEO content: ${article.slug || article.title}`)
  check(Number.isFinite(Date.parse(article.date)), `News article has an invalid date: ${article.slug}`)
}

const sitemapEntries = sitemap()
const sitemapUrls = sitemapEntries.map((entry) => entry.url)
check(unique(sitemapUrls), 'Sitemap URLs must be unique')
check(
  sitemapUrls.every((url) => url === 'https://www.ethiocoffee.co' || url.startsWith('https://www.ethiocoffee.co/')),
  'Sitemap URLs must use the canonical HTTPS host'
)
check(sitemapUrls.includes('https://www.ethiocoffee.co/privacy'), 'Privacy policy must be present in the sitemap')

for (let page = 2; page <= Math.ceil(posts.length / INSIGHTS_PAGE_SIZE); page++) {
  check(sitemapUrls.includes(`https://www.ethiocoffee.co/insights/page/${page}`), `Missing insights pagination URL: ${page}`)
}
for (let page = 2; page <= Math.ceil(newsArticles.length / NEWS_PAGE_SIZE); page++) {
  check(sitemapUrls.includes(`https://www.ethiocoffee.co/ethiopia-coffee-export-news/page/${page}`), `Missing news pagination URL: ${page}`)
}

const serializedRobots = JSON.stringify(robots().rules)
check(!serializedRobots.includes('/_next/'), 'robots.txt must not block Next.js rendering assets')

const orderingLayout = readFileSync(resolve('app/ordering-info/layout.tsx'), 'utf8')
const orderingPage = readFileSync(resolve('app/ordering-info/page.tsx'), 'utf8')
const faqSchemaScripts = `${orderingLayout}\n${orderingPage}`.match(/id=["']faq-schema["']/g) || []
check(faqSchemaScripts.length === 1, 'Ordering information must output exactly one FAQ schema script')

if (failures.length) {
  console.error(`SEO validation failed (${failures.length}):`)
  failures.forEach((failure) => console.error(`- ${failure}`))
  process.exitCode = 1
} else {
  console.log(`SEO validation passed: ${sitemapUrls.length} sitemap URLs checked.`)
}
