import Link from 'next/link'

type NewsContentProps = {
  title: string
  date: string
  source?: string
}

export default function FiveYearCoffeeDevelopmentPackage6Billion({ title, date, source }: NewsContentProps) {
  return (
    <>
      <p className='text-xs text-gray-500 uppercase tracking-widest mb-3'>{date}</p>
      <h1 className='text-3xl lg:text-4xl font-extrabold text-dark leading-tight mb-8'>
        {title}
      </h1>

      <div className='space-y-4'>
        <h2 className='text-xl font-bold text-dark mt-6'>A National Plan to More Than Double Productivity</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          Stakeholders from across Ethiopia&apos;s coffee value chain convened at a national consultative forum at the Ministry of Agriculture on June 27, 2026, to discuss a new five-year national coffee development package designed to significantly enhance the country&apos;s returns from its flagship export crop.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          ECTA Director General Dr. Adugna Debela said implementation of the package is expected to boost coffee productivity from the current 900 kilograms per hectare to 2,100 kilograms by 2031 &mdash; raising average yields from 9 to 21 quintals per hectare and narrowing the gap with high-yield producers like Brazil and Vietnam.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>From $3 Billion to $6 Billion</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          The productivity gains are projected to push annual coffee export earnings to $6 billion &mdash; double the record $3 billion Ethiopia generated in the 2025/26 fiscal year ending July 7. Coffee already accounts for more than 30 percent of the country&apos;s total export trade revenue, supported by more than 6 million smallholder farming households.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          Agriculture Minister Addisu Arega emphasized the government&apos;s commitment to &quot;transforming the sector, and further augmenting the country&apos;s coffee export earnings,&quot; building on the reforms &mdash; quality upgrading, traceability, market diversification, and value addition &mdash; that carried exports from $1.4 billion in 2023 to $3 billion in just three years.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>Why the Target Is Credible</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          The package lands on fertile ground. Ethiopia&apos;s production has grown four years running, a national rejuvenation campaign is restoring aging tree stock, 100,000 hectares have been allocated for mechanized commercial farms, and new market access &mdash; from China&apos;s zero-tariff policy to AfCFTA &mdash; keeps widening demand. Yield improvement is the last major untapped lever, and it is the explicit focus of this plan.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          For buyers, a doubling of export value by 2031 implies substantially more volume and more consistent quality of <Link href='/ethiopian-green-coffee-beans' className='text-amber-700 hover:underline'>Ethiopian green coffee beans</Link> reaching the market. Establishing relationships with an <Link href='/ethiopian-coffee-exporter' className='text-amber-700 hover:underline'>Ethiopian coffee exporter</Link> now positions importers to grow alongside the sector.
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
            <Link href='/ethiopia-coffee-export-news/usda-coffee-annual-2026-production-modernization' className='text-blue-600 hover:underline'>
              USDA Report: Ethiopian Coffee Production Up as Government Pushes Modernization
            </Link>
          </li>
          <li>
            <Link href='/ethiopia-coffee-export-news/government-support-coffee-competitiveness' className='text-blue-600 hover:underline'>
              Ethiopian Coffee Exports Surge in 2026
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
