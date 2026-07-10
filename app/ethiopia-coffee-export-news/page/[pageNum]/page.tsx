import type { Metadata } from 'next'
import NewsListPage, { getTotalPages } from '../../NewsListPage'

// Prerender pages 2..N; page 1 is served at /ethiopia-coffee-export-news
export const dynamicParams = false

export async function generateStaticParams() {
  const totalPages = getTotalPages()
  return Array.from({ length: Math.max(0, totalPages - 1) }, (_, i) => ({
    pageNum: String(i + 2),
  }))
}

type Props = {
  params: Promise<{ pageNum: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { pageNum } = await params
  return {
    title: `Ethiopian Coffee Export News - Page ${pageNum} | Ethio Coffee`,
    description: `Browse page ${pageNum} of Ethiopian coffee export news, policy updates, market developments, and trade events.`,
    // Paginated pages self-canonicalize so their content stays crawlable
    alternates: {
      canonical: `https://www.ethiocoffee.co/ethiopia-coffee-export-news/page/${pageNum}`,
    },
    openGraph: {
      title: `Ethiopian Coffee Export News - Page ${pageNum} | Ethio Coffee`,
      description: `Ethiopian coffee export industry updates and market news, page ${pageNum}.`,
      url: `https://www.ethiocoffee.co/ethiopia-coffee-export-news/page/${pageNum}`,
      type: 'website',
    },
  }
}

export default async function NewsPagedPage({ params }: Props) {
  const { pageNum } = await params
  return <NewsListPage page={parseInt(pageNum, 10)} />
}
