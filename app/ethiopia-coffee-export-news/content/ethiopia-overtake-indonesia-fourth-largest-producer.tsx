import Link from 'next/link'

type NewsContentProps = {
  title: string
  date: string
  source?: string
}

export default function EthiopiaOvertakeIndonesiaFourthLargestProducer({ title, date, source }: NewsContentProps) {
  return (
    <>
      <p className='text-xs text-gray-500 uppercase tracking-widest mb-3'>{date}</p>
      <h1 className='text-3xl lg:text-4xl font-extrabold text-dark leading-tight mb-8'>
        {title}
      </h1>

      <div className='space-y-4'>
        <h2 className='text-xl font-bold text-dark mt-6'>A New Position in the Global Rankings</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          Ethiopia is forecast to overtake Indonesia as the world&apos;s fourth largest coffee producer in the 2026/27 marketing year, according to USDA projections. Ethiopian output is forecast at 12.1 million 60-kilogram bags against Indonesia&apos;s 11.38 million &mdash; the third time in five years Ethiopia has surpassed Indonesia, and a milestone in the country&apos;s steady climb up the global production table behind Brazil, Vietnam, and Colombia.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          Production has now grown for four consecutive years: 11.46 million bags in 2024/25, 11.56 million in 2025/26, and a projected 12.1 million in 2026/27. Over two decades, Ethiopia&apos;s output has nearly tripled from roughly 4.5 million bags in 2005/06.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>Smallholders Still Drive the Sector</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          Around 5.9 million farmers engage in coffee production in Ethiopia, with smallholders accounting for roughly 90 percent of national output. A national rejuvenation campaign is addressing one of the sector&apos;s structural challenges: nearly 70 percent of Ethiopia&apos;s coffee trees are old, some exceeding 100 years. Stumping old trees can increase yields by as much as threefold within four years, making rejuvenation one of the most powerful levers for future production growth.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>Exports Riding the Production Wave</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          The production gains are flowing directly into trade. In 2024/25, Ethiopia exported 7.43 million bags valued at $2.89 billion &mdash; a 31.9 percent increase in volume and 69.4 percent increase in value. China has emerged as a standout growth market, with Ethiopian exports there surging 264 percent to 670,000 bags worth $274 million, making China the third-largest buyer of Ethiopian coffee.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          For international buyers, a larger Ethiopian crop means broader availability of <Link href='/ethiopian-green-coffee-beans' className='text-amber-700 hover:underline'>Ethiopian green coffee beans</Link> across regions and grades. And unlike the robusta-heavy origin it is displacing in the rankings, Ethiopia&apos;s production is overwhelmingly Arabica &mdash; keeping the country&apos;s specialty positioning intact even as volumes scale. Buyers can explore current offerings through an <Link href='/ethiopian-coffee-exporter' className='text-amber-700 hover:underline'>Ethiopian coffee exporter</Link>.
        </p>
      </div>

      <div className='mt-8 pt-6 border-t border-gray-200'>
        <p className='text-sm font-bold text-dark mb-3'>Related Reading:</p>
        <ul className='space-y-2 text-sm'>
          <li>
            <Link href='/ethiopia-coffee-export-news/usda-coffee-annual-2026-production-modernization' className='text-blue-600 hover:underline'>
              USDA Report: Ethiopian Coffee Production Up as Government Pushes Modernization
            </Link>
          </li>
          <li>
            <Link href='/ethiopia-coffee-export-news/gambella-majang-zone-coffee-production-52900-tons' className='text-blue-600 hover:underline'>
              Over 52,900 Tons of Coffee Produced in Gambella&apos;s Majang Zone
            </Link>
          </li>
          <li>
            <Link href='/ethiopian-green-coffee-beans' className='text-blue-600 hover:underline'>
              Ethiopian Green Coffee Beans
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
