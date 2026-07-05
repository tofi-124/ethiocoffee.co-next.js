import Link from 'next/link'

type NewsContentProps = {
  title: string
  date: string
  source?: string
}

export default function ArabicaPricesLargestGainsSince2022({ title, date, source }: NewsContentProps) {
  return (
    <>
      <p className='text-xs text-gray-500 uppercase tracking-widest mb-3'>{date}</p>
      <h1 className='text-3xl lg:text-4xl font-extrabold text-dark leading-tight mb-8'>
        {title}
      </h1>

      <div className='space-y-4'>
        <h2 className='text-xl font-bold text-dark mt-6'>A Sudden Reversal in the Coffee Market</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          After months of downward pressure, arabica coffee futures posted their largest single-day gains since 2022, jumping 6.71 percent on Tuesday, June 30, 2026. The trigger was extreme weather in Brazil: the key growing region of Minas Gerais received 1,956 percent of its historical average rainfall for the week, halting harvesting mid-season and raising concerns over bean quality.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          The rally was amplified by thin certified stocks. ICE arabica inventories fell to a 2.25-year low of 377,465 bags, leaving the market with little buffer against supply disruptions.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>El Niño Risk Looms Over Next Season</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          Analysts also flagged an emerging &quot;Godzilla&quot; El Ni&ntilde;o pattern that could delay Brazil&apos;s critical flowering rains in September and October. A disrupted flowering would pressure next year&apos;s crop and could sustain price volatility well beyond 2026 &mdash; a scenario the market is already beginning to price in.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>Implications for Ethiopian Coffee</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          The whiplash matters for Ethiopia on two fronts. First, it vindicates the sell-early guidance Ethiopian authorities issued in May &mdash; exporters who moved stock avoided the preceding slump, while the sector as a whole benefits when prices recover. Second, Brazil&apos;s weather troubles underline the value of origin diversification for buyers: Ethiopia&apos;s harvest calendar and highland growing conditions offer a supply profile uncorrelated with Brazilian weather risk.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          For roasters navigating this volatility, securing forward positions on <Link href='/ethiopian-green-coffee-beans' className='text-amber-700 hover:underline'>Ethiopian green coffee beans</Link> through an established <Link href='/ethiopian-coffee-exporter' className='text-amber-700 hover:underline'>Ethiopian coffee exporter</Link> is one of the most practical hedges against a market that can move 7 percent in a single session.
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
            <Link href='/insights/ethiopian-coffee-landed-cost-guide' className='text-blue-600 hover:underline'>
              Ethiopian Coffee Landed Cost Guide
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
