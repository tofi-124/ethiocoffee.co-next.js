import { offerings } from '../data/offerings'
import { posts } from '../data/data'
import { newsArticles } from '../data/news'

// llms.txt — a curated, plain-markdown map of the site for AI assistants and
// answer engines (ChatGPT, Claude, Perplexity, etc.). Spec: https://llmstxt.org
// Generated from the same data files as the pages, so it never goes stale.
export const revalidate = 86400

const baseUrl = 'https://www.ethiocoffee.co'

export async function GET() {
  const availableOfferings = offerings.filter((o) => !o.isSoldOut && !o.isContracted)

  const offeringLines = availableOfferings.map((o) => {
    const facts = [
      o.specifications.grade,
      o.region,
      o.specifications.processingMethod,
      o.specifications.cupScore ? `cup score ${o.specifications.cupScore}` : null,
    ].filter(Boolean).join(', ')
    return `- [${o.name}](${baseUrl}/product/${o.id})${facts ? ` (${facts})` : ''}: ${o.desc}`
  })

  const sortedPosts = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
  const insightLines = sortedPosts
    .filter((p) => p.slug)
    .map((p) => `- [${p.title}](${baseUrl}/insights/${p.slug}): ${p.desc}`)

  const sortedNews = [...newsArticles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
  const newsLines = sortedNews
    .slice(0, 20)
    .map((a) => `- [${a.title}](${baseUrl}/ethiopia-coffee-export-news/${a.slug}): ${a.desc}`)

  const content = `# Ethio Coffee Import and Export PLC

> Family-owned Ethiopian green coffee exporter based in Addis Ababa, Ethiopia (Yesak Building, 3rd Floor, Office 301, Lideta). We ship Grade 1–5 green Arabica coffee — Yirgacheffe, Sidamo, Guji, Harar, Limu, and Jimma — direct from origin to roasters, importers, and distributors worldwide. Washed, natural, honey, and anaerobic processing. FOB Djibouti pricing, pre-shipment samples, full lot traceability. Contact: coffee@ethiocoffee.co

Key facts:
- Licensed Ethiopian coffee exporter (ECTA), sourcing via ECX and direct farm/washing-station partnerships
- Ships worldwide, including the United States, Canada, the United Kingdom, the EU, the Middle East, and East Asia
- Offers pre-shipment samples, cupping scores, and complete export documentation
- Founded 2022; family roots in Ethiopian coffee for over 30 years

## Main pages

- [Home](${baseUrl}/): who we are and what we export
- [Ethiopian Coffee Exporter](${baseUrl}/ethiopian-coffee-exporter): our export services, process, and credentials
- [Current Offerings](${baseUrl}/offerings): live list of green coffee lots with specifications and FOB pricing
- [Ordering Info](${baseUrl}/ordering-info): how to order, samples, payment terms, shipping, and FAQs
- [About Us](${baseUrl}/about): company story and team
- [Contact](${baseUrl}/contact-us): request samples or an offer sheet
- [Ethiopian Green Coffee Beans](${baseUrl}/ethiopian-green-coffee-beans): grades, specs, and buying guide
- [Buy Ethiopian Coffee Wholesale](${baseUrl}/buy-ethiopian-coffee-wholesale): wholesale program for importers and roasters
- [Coffee Grading in Ethiopia](${baseUrl}/coffee-grading-ethiopia): how Ethiopian grades 1–5 work
- [Organic Ethiopian Coffee Export](${baseUrl}/organic-ethiopian-coffee-export): certified organic sourcing

## Coffee origins we export

- [Yirgacheffe](${baseUrl}/ethiopian-coffee-yirgacheffe): floral, citrus washed coffees from Gedeo Zone
- [Sidamo](${baseUrl}/ethiopian-coffee-sidamo): berry-forward naturals and clean washed lots from Sidama
- [Guji](${baseUrl}/ethiopian-coffee-guji): fruit-dense, high-altitude lots from Guji Zone
- [Harar](${baseUrl}/ethiopian-coffee-harar): classic sun-dried naturals with mocha character
- [Limu](${baseUrl}/ethiopian-coffee-limu): balanced, spice-toned washed coffees
- [Jimma](${baseUrl}/ethiopian-coffee-jimma): volume-friendly naturals and washed lots

## Current offerings

${offeringLines.join('\n')}

## Buyer guides and insights

${insightLines.join('\n')}

## Recent Ethiopian coffee export news

${newsLines.join('\n')}
`

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  })
}
