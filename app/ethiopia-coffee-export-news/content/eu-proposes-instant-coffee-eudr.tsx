import Link from 'next/link'

type NewsContentProps = {
  title: string
  date: string
  source?: string
}

export default function EuProposesInstantCoffeeEudr({ title, date, source }: NewsContentProps) {
  return (
    <>
      <p className='text-xs text-gray-500 uppercase tracking-widest mb-3'>{date}</p>
      <h1 className='text-3xl lg:text-4xl font-extrabold text-dark leading-tight mb-8'>
        {title}
      </h1>

      <div className='space-y-4'>
        <h2 className='text-xl font-bold text-dark mt-6'>Closing a Gap in the Deforestation Rules</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          On May 6, 2026, the European Commission proposed bringing soluble (instant) coffee within the scope of the EU Deforestation Regulation (EUDR). The Commission argued that excluding instant coffee &quot;creates a fragmented and incoherent approach for the coffee sector,&quot; since green and roasted coffee already fall under the regulation while processed soluble products do not.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          A public feedback window on the proposal runs until June 1, 2026. The EUDR itself takes effect on December 30, 2026 for larger companies and June 30, 2027 for smaller enterprises, requiring coffee sold in the EU to be traceable to plot-level geolocation coordinates and proven free of links to deforestation after December 31, 2020.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>Why This Matters for Ethiopia</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          Europe is Ethiopia&apos;s largest coffee export destination, and the country has been investing heavily in EUDR readiness &mdash; from the ECTMS national traceability platform developed with GIZ to farm-level geodata registration covering hundreds of thousands of smallholder plots. Widening the regulation&apos;s scope to processed coffee products would extend those same documentation requirements to Ethiopia&apos;s emerging value-added processing ambitions, including planned freeze-dried and soluble coffee investments.
        </p>

        <p className='text-gray-700 text-sm leading-relaxed'>
          For exporters, the direction of travel is clear: traceability is becoming a condition of market access across every coffee product category, not just green beans. Buyers sourcing <Link href='/ethiopian-green-coffee-beans' className='text-amber-700 hover:underline'>Ethiopian green coffee beans</Link> should verify that their supply chain partners can already produce plot-level origin data well ahead of the December 2026 deadline.
        </p>

        <h2 className='text-xl font-bold text-dark mt-6'>Ethiopia&apos;s Compliance Position</h2>
        <p className='text-gray-700 text-sm leading-relaxed'>
          The EU has previously acknowledged tangible Ethiopian progress on deforestation-free requirements, and the completed handover of the Ethiopian Coffee Traceability and Management System gives the sector a digital backbone for compliance. Working with an established <Link href='/ethiopian-coffee-exporter' className='text-amber-700 hover:underline'>Ethiopian coffee exporter</Link> that participates in these national systems remains the most reliable route to EUDR-ready Ethiopian coffee.
        </p>
      </div>

      <div className='mt-8 pt-6 border-t border-gray-200'>
        <p className='text-sm font-bold text-dark mb-3'>Related Reading:</p>
        <ul className='space-y-2 text-sm'>
          <li>
            <Link href='/ethiopia-coffee-export-news/ectms-handover-ecta-giz-traceability' className='text-blue-600 hover:underline'>
              Ethiopia Completes ECTMS Handover - A Digital Shield for Coffee Traceability
            </Link>
          </li>
          <li>
            <Link href='/ethiopia-coffee-export-news/eu-acknowledges-tangible-progress-deforestation-rules' className='text-blue-600 hover:underline'>
              Ethiopian Coffee EUDR Compliance Progress
            </Link>
          </li>
          <li>
            <Link href='/ethiopia-coffee-export-news/huichuan-china-invest-ethiopia-coffee-processing' className='text-blue-600 hover:underline'>
              Chinese Giant Huichuan to Invest in Ethiopia&apos;s Coffee Processing
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
