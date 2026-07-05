import Link from 'next/link'

type NewsContentProps = {
  title: string
  date: string
  source?: string
}

export default function CoffeeAssociationAlertFallingPricesHoarding({ title, date, source }: NewsContentProps) {
  return (
    <>
      <p className='text-xs text-gray-500 uppercase tracking-widest mb-3'>{date}</p>
      <h1 className='text-3xl lg:text-4xl font-extrabold text-dark leading-tight mb-8'>
        {title}
      </h1>

      <div className='space-y-4'>
        <h2 className='text-xl font-bold text-dark mt-6'>An Urgent Market Alert for the Whole Value Chain</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          The Ethiopian National Coffee Association issued an urgent market alert on March 17, 2026, addressed to farmers, suppliers, and exporters, warning of mounting financial risk as global coffee prices decline while stockpiling persists across the sector. The Association urged stakeholders to act swiftly, cautioning that delaying sales could lead to devastating losses and even legal accountability for product hoarding.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          The warning was blunt: holding onto large stocks &quot;poses a severe financial risk,&quot; and stakeholders were urged to &quot;act now to protect your business and support Ethiopia&apos;s coffee heritage.&quot;
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>How Far Prices Have Fallen</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          Global coffee prices dropped from roughly $4.00 per pound to $2.80 in just two months, with forecasts pointing to a possible further decline toward $2.50. Arabica futures fell sharply on improved production forecasts from Brazil, the world&apos;s largest producer, while the International Coffee Organization warned that downside risks were increasing even though short-term supply remained tight.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          Suppliers who purchased coffee during last year&apos;s peak prices are the most exposed. ECTA Director General Dr. Adugna Debela cautioned that those holding inventory bought at the top of the market face significant losses if the downward trend continues.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>Export Performance Behind Volume Targets</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          The alert landed against a mixed export picture. Ethiopia aims to generate $3 billion from 600,000 tons of coffee exports this fiscal year, but only around 200,000 tons had shipped in the first six months &mdash; roughly 74% of the planned volume &mdash; even as revenues reached $1.35 billion on strong prices. Authorities identified speculative hoarding by traders, some withholding supply in hopes of currency gains, as a primary obstacle, and signalled stricter enforcement including penalties for hoarding beyond one year.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          For international buyers, the message is that Ethiopian supply should loosen as stocks move to market. Roasters and importers sourcing through an <Link href='/ethiopian-coffee-exporter' className='text-amber-700 hover:underline'>Ethiopian coffee exporter</Link> may find improved availability of <Link href='/ethiopian-green-coffee-beans' className='text-amber-700 hover:underline'>Ethiopian green coffee beans</Link> as the sector responds to the Association&apos;s call.
        </p>
      </div>

      <div className='mt-8 pt-6 border-t border-gray-200'>
        <p className='text-sm font-bold text-dark mb-3'>Related Reading:</p>
        <ul className='space-y-2 text-sm'>
          <li>
            <Link href='/ethiopia-coffee-export-news/ecta-urges-exporters-sell-early-price-drop' className='text-blue-600 hover:underline'>
              Ethiopia Urges Coffee Exporters to Sell Early as Global Prices Slide
            </Link>
          </li>
          <li>
            <Link href='/ethiopia-coffee-export-news/world-too-hot-for-coffee-price-surge' className='text-blue-600 hover:underline'>
              The World Is Becoming Too Hot for Coffee
            </Link>
          </li>
          <li>
            <Link href='/ethiopian-coffee-exporter' className='text-blue-600 hover:underline'>
              Ethiopian Coffee Exporter
            </Link>
          </li>
        </ul>
      </div>

      {source && (
        <p className='text-xs text-gray-400 mt-8 italic border-t border-gray-200 pt-4'>
          Source: {source}
        </p>
      )}
    </>
  )
}
