import Link from 'next/link'

type NewsContentProps = {
  title: string
  date: string
  source?: string
}

export default function IcoEthiopianCoffeeExportSlowdownMay2026({ title, date, source }: NewsContentProps) {
  return (
    <>
      <p className='text-xs text-gray-500 uppercase tracking-widest mb-3'>{date}</p>
      <h1 className='text-3xl lg:text-4xl font-extrabold text-dark leading-tight mb-8'>
        {title}
      </h1>

      <div className='space-y-4'>
        <h2 className='text-xl font-bold text-dark mt-6'>May Shipments Fell From an Exceptional Comparison Year</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          The International Coffee Organization&apos;s June 2026 Coffee Market Report shows a clear change in Ethiopia&apos;s export rhythm. Shipments of Ethiopian coffee classified as Other Milds fell 16.1 percent year over year in May, to 260,000 60-kilogram bags from 310,000 bags. Across Ethiopia&apos;s coffee categories, exports had been trending lower from February through May after more than two years of unusually strong expansion.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          The comparison needs context. May 2025 was an exceptionally strong export month for Ethiopia, and high global prices had encouraged traders to release more stocks. The ICO said the later slowdown partly reflected the fading of that price-driven stock release rather than a simple collapse in production or overseas demand.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>Volume and Revenue Tell Different Stories</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          The monthly shipment decline does not contradict Ethiopia&apos;s record $3 billion in coffee export earnings for the 2025/26 fiscal year. The figures measure different things over different periods: the ICO report compares physical shipments by coffee group and coffee year, while Ethiopia&apos;s fiscal-year result measures total export revenue. Strong quality premiums and earlier high-value sales can therefore lift annual earnings even when a particular month ships fewer bags.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>A Volatile Market for Buyers</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          The ICO Composite Indicator Price averaged 248.90 US cents per pound in June, down 2.8 percent from May. However, the monthly average conceals a sharp reversal: the indicator fell to a nearly two-year low on June 9, then rebounded 17.4 percent by month-end as heavy rain slowed Brazil&apos;s harvest and forecasts raised concern about a possible strong El Ni&ntilde;o event.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          Certified Arabica stocks in the United States also fell 13.3 percent during June to 410,000 bags, their lowest level since February 2024. For importers, the combination of lower Ethiopian shipment momentum, tight deliverable stocks, and weather-driven price swings reinforces the value of early planning, clear specifications, and direct communication with an <Link href='/ethiopian-coffee-exporter' className='text-amber-700 hover:underline'>Ethiopian coffee exporter</Link>.
        </p>
      </div>

      <div className='mt-8 pt-6 border-t border-gray-200'>
        <p className='text-sm font-bold text-dark mb-3'>Related Reading:</p>
        <ul className='space-y-2 text-sm'>
          <li>
            <Link href='/ethiopia-coffee-export-news/ethiopia-record-3-billion-coffee-exports' className='text-blue-600 hover:underline'>
              Ethiopia Achieves Record $3 Billion in Coffee Export Earnings
            </Link>
          </li>
          <li>
            <Link href='/ethiopia-coffee-export-news/arabica-prices-largest-gains-since-2022' className='text-blue-600 hover:underline'>
              Arabica Prices Post Largest Gains Since 2022
            </Link>
          </li>
          <li>
            <Link href='/insights/coffee-c-market-explained-for-ethiopian-coffee-buyers' className='text-blue-600 hover:underline'>
              Coffee C Market Explained for Ethiopian Coffee Buyers
            </Link>
          </li>
        </ul>
      </div>

      {source && (
        <p className='text-xs text-gray-400 mt-8 italic border-t border-gray-200 pt-4'>
          Source: {source}, Coffee Market Report &mdash; June 2026
        </p>
      )}
    </>
  )
}
