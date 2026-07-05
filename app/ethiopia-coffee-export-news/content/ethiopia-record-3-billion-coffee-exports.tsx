import Link from 'next/link'

type NewsContentProps = {
  title: string
  date: string
  source?: string
}

export default function EthiopiaRecord3BillionCoffeeExports({ title, date, source }: NewsContentProps) {
  return (
    <>
      <p className='text-xs text-gray-500 uppercase tracking-widest mb-3'>{date}</p>
      <h1 className='text-3xl lg:text-4xl font-extrabold text-dark leading-tight mb-8'>
        {title}
      </h1>

      <div className='space-y-4'>
        <h2 className='text-xl font-bold text-dark mt-6'>&quot;It Is Accomplished!&quot;</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          Ethiopia has reached a historic milestone: a record $3 billion in coffee export earnings for the 2025/26 fiscal year. Minister of Agriculture Addisu Arega announced the achievement with the declaration, &quot;It is accomplished! Ethiopia has successfully achieved its target of generating three billion USD from coffee exports this budget year,&quot; crediting farmers, exporters, cooperatives, investors, and government institutions across the value chain.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>A Steep Three-Year Climb</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          The trajectory tells the story of a sector transformed. Coffee export earnings stood at $1.4 billion in 2023 and $1.43 billion in 2024, before surging to $2.65 billion in 2025 and now $3 billion &mdash; more than doubling in three years. Coffee accounts for roughly one-third of Ethiopia&apos;s total export earnings and supports the livelihoods of millions of smallholder farming families.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          The record reflects deliberate reforms: quality improvement programs, expanded market destinations including China&apos;s zero-tariff window, digital traceability for EU compliance, value addition, and vertical licensing that lets growers export directly.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>Sustainability Behind the Numbers</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          The announcement also highlighted the Green Legacy Initiative, under which millions of coffee seedlings have been planted to restore ecosystems and build climate resilience &mdash; positioning the birthplace of Arabica to defend both volume and quality as growing conditions shift. Ethiopia&apos;s deep genetic diversity in coffee remains a strategic asset no other origin can replicate.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>The Next Target Is Already Set</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          The government is not pausing at $3 billion. A new five-year national coffee development package targets $6 billion in annual export earnings by 2031, driven by a planned productivity leap from 900 to 2,100 kilograms per hectare. For international buyers, the message is that <Link href='/ethiopian-green-coffee-beans' className='text-amber-700 hover:underline'>Ethiopian green coffee beans</Link> are becoming a larger, more reliable presence in the global market &mdash; and partnering with an <Link href='/ethiopian-coffee-exporter' className='text-amber-700 hover:underline'>Ethiopian coffee exporter</Link> connects buyers directly to that growth.
        </p>
      </div>

      <div className='mt-8 pt-6 border-t border-gray-200'>
        <p className='text-sm font-bold text-dark mb-3'>Related Reading:</p>
        <ul className='space-y-2 text-sm'>
          <li>
            <Link href='/ethiopia-coffee-export-news/five-year-coffee-development-package-6-billion' className='text-blue-600 hover:underline'>
              Ethiopia Unveils Five-Year Coffee Package Targeting $6 Billion in Exports by 2031
            </Link>
          </li>
          <li>
            <Link href='/ethiopia-coffee-export-news/government-support-coffee-competitiveness' className='text-blue-600 hover:underline'>
              Ethiopian Coffee Exports Surge in 2026
            </Link>
          </li>
          <li>
            <Link href='/ethiopia-coffee-export-news/china-zero-tariff-ethiopian-coffee-exports' className='text-blue-600 hover:underline'>
              China Zero-Tariff Policy Boosts Outlook for Ethiopian Coffee Exports
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
