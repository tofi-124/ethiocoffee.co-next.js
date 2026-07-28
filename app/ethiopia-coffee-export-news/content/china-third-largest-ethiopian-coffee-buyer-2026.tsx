import Link from 'next/link'

type NewsContentProps = {
  title: string
  date: string
  source?: string
}

export default function ChinaThirdLargestEthiopianCoffeeBuyer2026({ title, date, source }: NewsContentProps) {
  return (
    <>
      <p className='text-xs text-gray-500 uppercase tracking-widest mb-3'>{date}</p>
      <h1 className='text-3xl lg:text-4xl font-extrabold text-dark leading-tight mb-8'>
        {title}
      </h1>

      <div className='space-y-4'>
        <h2 className='text-xl font-bold text-dark mt-6'>China Moves Ahead of the United States</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          China became the third-largest buyer of Ethiopian coffee during the 2025/26 Ethiopian fiscal year, according to data from the Ethiopian Coffee and Tea Authority. Ethiopia shipped 47,836 tonnes of coffee to China and earned $347 million, moving the market from fifth place a year earlier to third behind Saudi Arabia and Germany.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          The increase was substantial in both volume and value. During the previous fiscal year, China purchased 34,284 tonnes worth $219 million. That means the latest result represents growth of approximately 40 percent in volume and 58 percent in revenue.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>From Emerging Destination to Core Market</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          ECTA Deputy Director General Shafi Umer said China entered Ethiopia&apos;s top ten coffee destinations only two years ago, when it ranked seventh after purchasing 12,163 tonnes. Its rapid rise reflects stronger trade links, improved delivery services, market promotion, and growing demand for organic and specialty coffee among younger Chinese consumers.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          The latest fiscal-year figures also build on a longer trend identified by the USDA. Its 2026 Ethiopia Coffee Annual described China as one of the most dynamic markets for Ethiopian beans, supported by expanding cafe chains, e-commerce, direct sourcing, and a shift from instant coffee toward freshly brewed and specialty products.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>What the Shift Means for Exporters and Buyers</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          A larger Chinese market gives Ethiopian exporters more geographic balance alongside established buyers in the Middle East, Europe, and North America. ECTA said the ten largest destinations generated more than 79 percent of Ethiopia&apos;s record $3 billion in coffee export revenue, making diversification within that group increasingly important.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          For buyers, faster demand growth in China can increase competition for traceable, high-grade lots. Importers planning purchases of <Link href='/ethiopian-green-coffee-beans' className='text-amber-700 hover:underline'>Ethiopian green coffee beans</Link> should communicate volume, grade, processing method, and shipment windows early, particularly for distinctive regional coffees with limited availability.
        </p>
      </div>

      <div className='mt-8 pt-6 border-t border-gray-200'>
        <p className='text-sm font-bold text-dark mb-3'>Related Reading:</p>
        <ul className='space-y-2 text-sm'>
          <li>
            <Link href='/ethiopia-coffee-export-news/china-zero-tariff-ethiopian-coffee-exports' className='text-blue-600 hover:underline'>
              China Zero-Tariff Policy Boosts Ethiopian Coffee Export Outlook
            </Link>
          </li>
          <li>
            <Link href='/ethiopia-coffee-export-news/ethiopia-record-3-billion-coffee-exports' className='text-blue-600 hover:underline'>
              Ethiopia Achieves Record $3 Billion in Coffee Export Earnings
            </Link>
          </li>
          <li>
            <Link href='/insights/ethiopia-china-coffee-trade-partnership' className='text-blue-600 hover:underline'>
              Ethiopia-China Coffee Trade: A Buyer&apos;s Guide
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
