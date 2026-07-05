import Link from 'next/link'

type NewsContentProps = {
  title: string
  date: string
  source?: string
}

export default function EthiopiaUnescoCoffeeCeremonyHeritageBid({ title, date, source }: NewsContentProps) {
  return (
    <>
      <p className='text-xs text-gray-500 uppercase tracking-widest mb-3'>{date}</p>
      <h1 className='text-3xl lg:text-4xl font-extrabold text-dark leading-tight mb-8'>
        {title}
      </h1>

      <div className='space-y-4'>
        <h2 className='text-xl font-bold text-dark mt-6'>A Bid to Recognize Coffee&apos;s Oldest Ritual</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          Ethiopia is formally pursuing UNESCO Intangible Cultural Heritage status for its traditional coffee ceremony, a practice whose roots reach back to the ninth century in the birthplace of Arabica coffee. The initiative was launched during Ethiopian Coffee Culture Day 2026 in Addis Ababa, organized by Warka Coffee, according to reporting by Sprudge.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          The ceremony, traditionally performed by women, involves roasting green coffee beans over coals, grinding them by hand, and brewing the coffee three successive times in a clay jebena vessel. It remains central to Ethiopian hospitality at home and is offered at Ethiopian restaurants and coffee houses around the world.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>More Than a Commodity</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          Warka CEO Seada Mustefa said she hopes the designation will underscore the cultural significance of coffee beyond its role as a trade commodity. That framing matters for a country where coffee is simultaneously an export engine and a daily social institution &mdash; a duality explored in our guide to the <Link href='/insights/ethiopian-coffee-ceremony' className='text-amber-700 hover:underline'>Ethiopian coffee ceremony</Link>.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          Precedent exists for the bid: Turkish coffee already holds UNESCO Intangible Cultural Heritage status, while Italy abandoned a 2022 attempt to secure the recognition for espresso. The UNESCO approval process typically spans several years, so a final decision is not expected immediately.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>Why It Matters for Ethiopian Coffee Exports</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          Global recognition of the coffee ceremony would reinforce Ethiopia&apos;s positioning as the origin of Arabica coffee, strengthening the story behind every shipment of <Link href='/ethiopian-green-coffee-beans' className='text-amber-700 hover:underline'>Ethiopian green coffee beans</Link>. For importers and roasters, origin heritage is an increasingly powerful differentiator in specialty markets, and UNESCO status would give Ethiopian coffee a cultural credential no competing origin can match.
        </p>
      </div>

      <div className='mt-8 pt-6 border-t border-gray-200'>
        <p className='text-sm font-bold text-dark mb-3'>Related Reading:</p>
        <ul className='space-y-2 text-sm'>
          <li>
            <Link href='/insights/ethiopian-coffee-ceremony' className='text-blue-600 hover:underline'>
              The Ethiopian Coffee Ceremony
            </Link>
          </li>
          <li>
            <Link href='/insights/ethiopia-coffee-origin-birthplace' className='text-blue-600 hover:underline'>
              Ethiopia: The Birthplace of Coffee
            </Link>
          </li>
          <li>
            <Link href='/ethiopia-coffee-export-news/rename-coffee-arabica-ethiopian-coffee' className='text-blue-600 hover:underline'>
              Rename Arabica to Ethiopian Coffee?
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
