import Link from 'next/link'

type NewsContentProps = {
  title: string
  date: string
  source?: string
}

export default function SidamaCrownCoffeeAuction2026Results({ title, date, source }: NewsContentProps) {
  return (
    <>
      <p className='text-xs text-gray-500 uppercase tracking-widest mb-3'>{date}</p>
      <h1 className='text-3xl lg:text-4xl font-extrabold text-dark leading-tight mb-8'>
        {title}
      </h1>

      <div className='space-y-4'>
        <h2 className='text-xl font-bold text-dark mt-6'>Strong Bidding for Sidama Microlots</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          The 2026 Sidama Crown Coffee Auction closed on August 5 after three days of online bidding. The auction recorded 433 bids, generated $22,570 in total value, and achieved a weighted average price of $53.74 per kilogram across its curated highland coffees.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          The highest-priced coffee was Bekalcho Natural Murago from Basha Bekele. Coffee Bean Supplies purchased the 20-kilogram lot for $71.75 per kilogram, giving the lot a total value of $1,435. A second Murago coffee, Balache Anaerobic Honey, reached $71 per kilogram and was purchased by Ingenuity Coffee.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>Processing Diversity Attracts International Buyers</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          Results across the catalogue show demand for both classic and experimental profiles. Hirbora Washed Sengota sold for $64.50 per kilogram, while Bode Anaerobic Natural Gonjobe reached $64. Other featured lots used natural, honey, anaerobic, and cold-fermentation methods, giving buyers a broad view of the processing work now taking place in Sidama.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          Winning buyers listed on the auction platform came from several markets and included specialist coffee companies in Asia and Europe. This international participation gives producers and exporters a direct route to buyers seeking distinctive, small-volume coffees with clear lot identities.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>What the Results Mean for Green Coffee Buyers</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          Private-auction prices should not be treated as a benchmark for container-scale Ethiopian coffee. The lots are small, highly selected, and marketed for rarity. They do, however, show the premiums available when cup quality, processing, producer identity, and traceability are presented together.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          Roasters seeking larger or repeatable volumes can use auction results as a discovery signal, then discuss regional profiles, grades, processing methods, and shipment requirements with an established <Link href='/ethiopian-coffee-exporter' className='text-amber-700 hover:underline'>Ethiopian coffee exporter</Link>. Buyers can also review available <Link href='/ethiopian-green-coffee-beans' className='text-amber-700 hover:underline'>Ethiopian green coffee beans</Link> before requesting samples.
        </p>
      </div>

      <div className='mt-8 pt-6 border-t border-gray-200'>
        <p className='text-sm font-bold text-dark mb-3'>Related Reading:</p>
        <ul className='space-y-2 text-sm'>
          <li>
            <Link href='/insights/sidamo-coffee-sourcing-guide' className='text-blue-600 hover:underline'>
              Sidamo Coffee Sourcing Guide for Green Coffee Buyers
            </Link>
          </li>
          <li>
            <Link href='/insights/micro-lot-ethiopian-coffee-sourcing-guide' className='text-blue-600 hover:underline'>
              Ethiopian Microlot Coffee Sourcing Guide
            </Link>
          </li>
          <li>
            <Link href='/ethiopia-coffee-export-news/ethiopia-taste-of-harvest-auction-2026' className='text-blue-600 hover:underline'>
              Ethiopia Taste of Harvest Auction Set for August 25-27
            </Link>
          </li>
        </ul>
      </div>

      {source && (
        <p className='text-xs text-gray-400 mt-8 italic border-t border-gray-200 pt-4'>
          Source: <a href='https://sidamahighland.mcultivo.com/auction/sidama-crown-coffee-auction' target='_blank' rel='noopener noreferrer' className='text-blue-600 hover:underline'>{source}</a>
        </p>
      )}
    </>
  )
}
