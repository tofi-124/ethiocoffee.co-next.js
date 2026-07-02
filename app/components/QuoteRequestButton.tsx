'use client'

import { useState } from 'react'
import QuoteRequestPopup from './QuoteRequestPopup'

type Props = {
  productName: string
  productImage: string
  label: string
  className: string
}

/**
 * Small client-only trigger + popup so the parent page can stay a server
 * component (better SEO/crawlability, smaller client bundle). Each instance
 * owns its own popup; only one opens at a time based on which button is clicked.
 */
const QuoteRequestButton = ({ productName, productImage, label, className }: Props) => {
  const [quoteOpen, setQuoteOpen] = useState(false)

  return (
    <>
      <button onClick={() => setQuoteOpen(true)} className={className}>
        {label}
      </button>
      <QuoteRequestPopup
        isOpen={quoteOpen}
        onClose={() => setQuoteOpen(false)}
        productName={productName}
        productImage={productImage}
      />
    </>
  )
}

export default QuoteRequestButton
