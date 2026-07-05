import Link from 'next/link'

type NewsContentProps = {
  title: string
  date: string
  source?: string
}

export default function EthiopiaAfricanMarketAfcftaCoffeeTrade({ title, date, source }: NewsContentProps) {
  return (
    <>
      <p className='text-xs text-gray-500 uppercase tracking-widest mb-3'>{date}</p>
      <h1 className='text-3xl lg:text-4xl font-extrabold text-dark leading-tight mb-8'>
        {title}
      </h1>

      <div className='space-y-4'>
        <h2 className='text-xl font-bold text-dark mt-6'>Trade Tensions Push Ethiopia Toward Its Own Continent</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          Ethiopia is increasingly looking to African markets as a strategic hedge against international coffee trade tensions, according to reporting from Addis Ababa by Perfect Daily Grind. With the United States imposing tariffs ranging from 10 to 46 percent on coffee-exporting countries, and the African Continental Free Trade Area (AfCFTA) ratification opening preferential access across the continent, the case for intra-African coffee trade has never been stronger.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          The logic is straightforward: Africa produces around 13 percent of global coffee supply but consumes comparatively little of it, leaving continental demand largely undeveloped. For Ethiopia &mdash; Africa&apos;s largest producer &mdash; that gap is an opportunity.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>A Continent Learning to Drink Its Own Coffee</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          Coffee cultures are actively being cultivated across the continent. South Africa&apos;s specialty scene continues to mature, while Nigeria and Uganda are promoting domestic coffee consumption through cafe growth and national campaigns. As these markets develop, Ethiopian coffee &mdash; with its origin prestige and distinctive cup profiles &mdash; is well positioned to become the premium choice for African roasters and consumers.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          This continental pivot complements rather than replaces Ethiopia&apos;s existing strategy of market diversification, which has already seen China rise to become a top-three buyer and new destinations added across the Middle East and Asia.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>What It Means for Global Buyers</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          For international importers, Ethiopia&apos;s widening set of export destinations means more competition for the crop &mdash; a reason to build durable relationships with an <Link href='/ethiopian-coffee-exporter' className='text-amber-700 hover:underline'>Ethiopian coffee exporter</Link> rather than relying on spot availability. Demand for <Link href='/ethiopian-green-coffee-beans' className='text-amber-700 hover:underline'>Ethiopian green coffee beans</Link> is broadening across continents, and buyers who commit early each season are best placed to secure preferred lots.
        </p>
      </div>

      <div className='mt-8 pt-6 border-t border-gray-200'>
        <p className='text-sm font-bold text-dark mb-3'>Related Reading:</p>
        <ul className='space-y-2 text-sm'>
          <li>
            <Link href='/ethiopia-coffee-export-news/china-zero-tariff-ethiopian-coffee-exports' className='text-blue-600 hover:underline'>
              China Zero-Tariff Policy Boosts Outlook for Ethiopian Coffee Exports
            </Link>
          </li>
          <li>
            <Link href='/ethiopia-coffee-export-news/african-coffee-week-addis-ababa' className='text-blue-600 hover:underline'>
              African Coffee Week 2026 Opens in Addis Ababa
            </Link>
          </li>
          <li>
            <Link href='/ethiopia-coffee-export-news/russia-ethiopia-trade-435-million' className='text-blue-600 hover:underline'>
              Russia-Ethiopia Trade Hits $435 Million
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
