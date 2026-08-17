import Link from 'next/link'

type NewsContentProps = {
  title: string
  date: string
  source?: string
}

export default function EthiopiaTasteOfHarvestAuction2026({ title, date, source }: NewsContentProps) {
  return (
    <>
      <p className='text-xs text-gray-500 uppercase tracking-widest mb-3'>{date}</p>
      <h1 className='text-3xl lg:text-4xl font-extrabold text-dark leading-tight mb-8'>
        {title}
      </h1>

      <div className='space-y-4'>
        <h2 className='text-xl font-bold text-dark mt-6'>232 Coffees Enter Ethiopia&apos;s 2026 Competition</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          Ethiopia&apos;s 2026 Taste of Harvest online auction is scheduled for August 25-27. The African Fine Coffees Association says 232 coffees from across the country entered this year&apos;s competition, representing a wide range of regions, producers, exporters, processing methods, and cup profiles.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          Taste of Harvest is AFCA&apos;s flagship quality competition and auction program. Coffees are evaluated through a structured selection process before top-performing lots are offered to international specialty buyers. The 2025-26 program expands that market connection through online auctions, allowing buyers in multiple time zones to participate directly.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>Selected Lots Connect Producers with Global Buyers</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          The Ethiopia catalogue includes coffees from established exporters and producer-led businesses such as Tracon Trading, Bekri Coffee, Wonberta General Import Export, Testi Trading, and Gujoo Trading. The lots provide buyers with an opportunity to compare carefully selected Ethiopian coffees in one national showcase.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          AFCA&apos;s auction platform lists the event for 5 p.m. in New York and 10 p.m. in London on the opening date, with corresponding times for Europe, the Middle East, East Asia, and Australia. Buyers need to register on the platform before bidding, and sample sets are available for pre-auction evaluation.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>How Importers Should Prepare</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          Auction buyers should assess more than cup score alone. Lot weight, processing method, producer information, payment terms, export documentation, consolidation, and onward freight can all affect the landed cost of a winning coffee. Setting a maximum bid only after those costs are understood helps protect the purchasing budget.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          Importers that need repeatable commercial or specialty volumes beyond the auction can compare the winning profiles with a broader <Link href='/ethiopian-green-coffee-beans' className='text-amber-700 hover:underline'>Ethiopian green coffee offer</Link>. For procurement planning, the <Link href='/insights/ethiopian-coffee-landed-cost-guide' className='text-amber-700 hover:underline'>Ethiopian coffee landed-cost guide</Link> explains the cost items to confirm before contracting and shipment.
        </p>
      </div>

      <div className='mt-8 pt-6 border-t border-gray-200'>
        <p className='text-sm font-bold text-dark mb-3'>Related Reading:</p>
        <ul className='space-y-2 text-sm'>
          <li>
            <Link href='/ethiopia-coffee-export-news/sidama-crown-coffee-auction-2026-results' className='text-blue-600 hover:underline'>
              Sidama Crown Auction Reaches $71.75 per Kilogram
            </Link>
          </li>
          <li>
            <Link href='/insights/ethiopian-cup-of-excellence-buyers-guide' className='text-blue-600 hover:underline'>
              Ethiopian Coffee Auction and Cup of Excellence Buyer&apos;s Guide
            </Link>
          </li>
          <li>
            <Link href='/insights/green-coffee-sampling-protocol' className='text-blue-600 hover:underline'>
              Green Coffee Sampling Protocol for Importers and Roasters
            </Link>
          </li>
        </ul>
      </div>

      {source && (
        <p className='text-xs text-gray-400 mt-8 italic border-t border-gray-200 pt-4'>
          Source: <a href='https://tasteofharvest.coffee/' target='_blank' rel='noopener noreferrer' className='text-blue-600 hover:underline'>{source}</a>
        </p>
      )}
    </>
  )
}
