import Link from 'next/link'

type NewsContentProps = {
  title: string
  date: string
  source?: string
}

export default function EctaUrgesExportersSellEarlyPriceDrop({ title, date, source }: NewsContentProps) {
  return (
    <>
      <p className='text-xs text-gray-500 uppercase tracking-widest mb-3'>{date}</p>
      <h1 className='text-3xl lg:text-4xl font-extrabold text-dark leading-tight mb-8'>
        {title}
      </h1>

      <div className='space-y-4'>
        <h2 className='text-xl font-bold text-dark mt-6'>Sell Now, Not Later</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          The Ethiopian Coffee and Tea Authority issued a clear message to the country&apos;s coffee exporters in May 2026: sell your coffee without delay. With international prices already down nearly 30 percent per ton and major producer supply about to hit the market, ECTA warned that stockpiling in hopes of a rebound is a losing strategy.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          ECTA Director General Dr. Adugna Debela advised traders not to expect price increases despite tensions in the Middle East, noting that geopolitical conflicts are unlikely to significantly lift coffee prices given the scale of incoming supply. Brazil alone is projected to market nearly 78 million quintals of coffee starting in June, with Vietnam adding further volume.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>A Strong Year Despite Softening Prices</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          The warning comes on the back of a strong export run. Ethiopia had exported 320,000 metric tons of coffee this fiscal year, generating $2.2 billion &mdash; keeping the country on track toward its $3 billion annual target. Coffee remains the backbone of Ethiopia&apos;s trade performance, contributing the largest share of the $8.71 billion in total export revenue earned over the first ten months of the fiscal year, which exceeded the government&apos;s $7.25 billion goal.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          Dr. Adugna urged Ethiopian exporters &quot;to take advantage of the current market conditions and sell their coffee without delay&quot; before downward price pressure intensifies.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>What It Means for International Buyers</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          For importers and roasters, ECTA&apos;s push means Ethiopian supply should flow steadily to market rather than being held back for speculation. That supports availability and stable pricing for buyers of <Link href='/ethiopian-green-coffee-beans' className='text-amber-700 hover:underline'>Ethiopian green coffee beans</Link> across grades and regions &mdash; from Sidamo to Yirgacheffe to Harar.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          Buyers looking to lock in current market conditions can work directly with an <Link href='/ethiopian-coffee-exporter' className='text-amber-700 hover:underline'>Ethiopian coffee exporter</Link> to secure volumes while the sector is motivated to move stock quickly.
        </p>
      </div>

      <div className='mt-8 pt-6 border-t border-gray-200'>
        <p className='text-sm font-bold text-dark mb-3'>Related Reading:</p>
        <ul className='space-y-2 text-sm'>
          <li>
            <Link href='/ethiopia-coffee-export-news/coffee-association-alert-falling-prices-hoarding' className='text-blue-600 hover:underline'>
              Ethiopian Coffee Association Issues Urgent Alert as Global Prices Fall
            </Link>
          </li>
          <li>
            <Link href='/ethiopia-coffee-export-news/arabica-prices-largest-gains-since-2022' className='text-blue-600 hover:underline'>
              Arabica Prices Post Largest Gains Since 2022 on Brazil Weather Shock
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
