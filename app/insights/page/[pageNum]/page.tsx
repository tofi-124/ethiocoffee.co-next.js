import type { Metadata } from 'next'
import InsightsListPage, { getTotalPages } from '../../InsightsListPage'

// Prerender pages 2..N; page 1 is served at /insights
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
    title: `Ethiopian Coffee Blog - Page ${pageNum} | Ethio Coffee`,
    description: `Browse page ${pageNum} of Ethio Coffee's expert guides on Ethiopian coffee sourcing, processing, quality, pricing, and export logistics.`,
    // Paginated pages self-canonicalize so their content stays crawlable
    alternates: {
      canonical: `https://www.ethiocoffee.co/insights/page/${pageNum}`,
    },
    openGraph: {
      title: `Ethiopian Coffee Blog - Page ${pageNum} | Ethio Coffee`,
      description: `Ethiopian coffee sourcing and export guides, page ${pageNum}.`,
      url: `https://www.ethiocoffee.co/insights/page/${pageNum}`,
      type: 'website',
    },
  }
}

export default async function InsightsPagedPage({ params }: Props) {
  const { pageNum } = await params
  return <InsightsListPage page={parseInt(pageNum, 10)} />
}
