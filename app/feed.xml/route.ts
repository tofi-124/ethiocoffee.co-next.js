import { posts } from '../data/data'
import { newsArticles } from '../data/news'

// RSS 2.0 feed combining insights and export news, newest first. Helps AI
// crawlers and aggregators (Google Publisher Center, Bing, feed readers)
// discover new content quickly.
export const revalidate = 86400

const baseUrl = 'https://www.ethiocoffee.co'

function escapeXml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

export async function GET() {
  const items = [
    ...posts
      .filter((p) => p.slug)
      .map((p) => ({
        title: p.title,
        link: `${baseUrl}/insights/${p.slug}`,
        description: p.desc,
        date: new Date(p.date),
      })),
    ...newsArticles.map((a) => ({
      title: a.title,
      link: `${baseUrl}/ethiopia-coffee-export-news/${a.slug}`,
      description: a.desc,
      date: new Date(a.date),
    })),
  ]
    .filter((item) => !isNaN(item.date.getTime()))
    .sort((a, b) => b.date.getTime() - a.date.getTime())
    .slice(0, 50)

  const itemsXml = items
    .map(
      (item) => `    <item>
      <title>${escapeXml(item.title)}</title>
      <link>${item.link}</link>
      <guid isPermaLink="true">${item.link}</guid>
      <description>${escapeXml(item.description)}</description>
      <pubDate>${item.date.toUTCString()}</pubDate>
    </item>`
    )
    .join('\n')

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Ethio Coffee — Ethiopian Coffee Insights &amp; Export News</title>
    <link>${baseUrl}</link>
    <description>Buyer guides, sourcing insights, and export news from Ethio Coffee Import and Export PLC, an Ethiopian green coffee exporter in Addis Ababa.</description>
    <language>en-us</language>
    <lastBuildDate>${(items[0]?.date ?? new Date()).toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml" />
${itemsXml}
  </channel>
</rss>
`

  return new Response(feed, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  })
}
