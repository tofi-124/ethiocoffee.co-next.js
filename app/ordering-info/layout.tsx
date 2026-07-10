import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How To Buy Ethiopian Coffee | FAQ | Ethio Coffee',
  description:
    'Everything about ordering Ethiopian green coffee from Ethio Coffee. Learn about our process, shipping, payment terms, quality guarantees, and more.',
  alternates: {
    canonical: 'https://www.ethiocoffee.co/ordering-info',
  },
  openGraph: {
    title: 'How To Buy Ethiopian Coffee | FAQ | Ethio Coffee',
    description:
      'Complete guide to ordering Ethiopian green coffee. Shipping, payment, samples, quality standards, and more.',
    url: 'https://www.ethiocoffee.co/ordering-info',
    type: 'website',
    images: [
      {
        url: '/images/coffee-pack-1.webp',
        width: 900,
        height: 600,
        alt: 'How to buy Ethiopian green coffee - ordering guide and FAQ',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How To Buy & FAQ | Ethio Coffee',
    description: 'Complete guide to ordering Ethiopian green coffee. Shipping, payment, samples, and more.',
    images: ['/images/coffee-pack-1.webp'],
  },
}

export default function OrderingInfoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.ethiocoffee.co"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "How to Buy Ethiopian Coffee",
        "item": "https://www.ethiocoffee.co/ordering-info"
      }
    ]
  }

  return (
    <>
      <script
        id="ordering-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  )
}
