import Link from 'next/link'

type NewsContentProps = {
  title: string
  date: string
  source?: string
}

export default function UsdaCoffeeAnnual2026ProductionModernization({ title, date, source }: NewsContentProps) {
  return (
    <>
      <p className='text-xs text-gray-500 uppercase tracking-widest mb-3'>{date}</p>
      <h1 className='text-3xl lg:text-4xl font-extrabold text-dark leading-tight mb-8'>
        {title}
      </h1>

      <div className='space-y-4'>
        <h2 className='text-xl font-bold text-dark mt-6'>Production and Exports Both Forecast Higher</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          The USDA&apos;s annual report on Ethiopia&apos;s coffee sector forecasts green coffee production rising 4.7 percent to 12.1 million 60-kilogram bags in 2026/27, with exports projected at 7.13 million bags, up 2.4 percent from the previous year. Harvested area is expected to expand 1.3 percent to 800,000 hectares, worked by some 5.9 million farmers &mdash; smallholders still account for roughly 90 percent of national output.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          Domestic consumption is also forecast to climb 11.1 percent to 5 million bags, a reminder that Ethiopia is one of the few origins with a deep internal coffee culture competing for its own crop.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>100,000 Hectares for Commercial Coffee Farming</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          The report&apos;s most striking finding is the government&apos;s modernization push. Ethiopia has allocated 100,000 hectares for private-sector coffee development &mdash; a roughly 70 percent expansion of the country&apos;s commercial farm base &mdash; and 110 private investors have already received farmland in the Oromia and Southwest Ethiopia regions. The new farms are expected to adopt mechanized land preparation, structured planting, improved varieties, smart irrigation, and intensive inputs to lift yields and consistency.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          Officials describe the initiative as a strategic shift toward a hybrid model that pairs Ethiopia&apos;s traditional smallholder base with large-scale, technology-driven production, citing Brazil&apos;s commercial plantation systems as a reference point.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>Rejuvenating an Aging Tree Stock</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          About 70 percent of Ethiopia&apos;s coffee trees are old, some more than a century. Stumping &mdash; cutting trees back to regenerate growth &mdash; covered 15 percent of harvested area in 2025/26, and studies cited in the report show stumped trees can increase yields up to threefold within four years. More than 50 improved varieties with higher yields and disease resistance have been distributed to farmers.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>What Buyers Should Watch</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          The 2024/25 export year closed at $2.89 billion on a 31.9 percent volume increase, with exports to China surging 264 percent. At the same time, record-high local cherry prices and softer international prices have squeezed exporter margins &mdash; context worth understanding when negotiating contracts with an <Link href='/ethiopian-coffee-exporter' className='text-amber-700 hover:underline'>Ethiopian coffee exporter</Link>. For sourcing teams, the report signals growing, more consistent supply of <Link href='/ethiopian-green-coffee-beans' className='text-amber-700 hover:underline'>Ethiopian green coffee beans</Link> in the seasons ahead.
        </p>
      </div>

      <div className='mt-8 pt-6 border-t border-gray-200'>
        <p className='text-sm font-bold text-dark mb-3'>Related Reading:</p>
        <ul className='space-y-2 text-sm'>
          <li>
            <Link href='/ethiopia-coffee-export-news/ethiopia-overtake-indonesia-fourth-largest-producer' className='text-blue-600 hover:underline'>
              Ethiopia Set to Overtake Indonesia as World&apos;s Fourth Largest Coffee Producer
            </Link>
          </li>
          <li>
            <Link href='/ethiopia-coffee-export-news/starbucks-50-million-coffee-seedlings-ethiopia' className='text-blue-600 hover:underline'>
              Starbucks to Distribute 50 Million Climate-Resilient Coffee Seedlings in Ethiopia
            </Link>
          </li>
          <li>
            <Link href='/insights/benefits-investing-ethiopian-coffee-production' className='text-blue-600 hover:underline'>
              Benefits of Investing in Ethiopian Coffee Production
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
