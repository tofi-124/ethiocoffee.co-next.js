import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import {
  HiOutlineLightBulb,
  HiOutlineClipboardDocumentList,
  HiOutlineChartBar,
  HiOutlineScale,
  HiOutlineCurrencyDollar,
  HiOutlineMapPin,
  HiOutlineCheckCircle,
  HiOutlineQuestionMarkCircle,
  HiOutlineTruck,
} from 'react-icons/hi2'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function EthiopianCoffeeHarvest2026BuyerReport({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-4'>
        Ethiopian coffee harvest 2026 buying brief on allocation risk, FOB pressure, and shipment timing for green coffee importers.
      </h2>
      <p className='font-inconsolata text-sm text-gray-500 mb-6'>Updated {date}</p>

      <figure>
        <figcaption className='font-inconsolata my-2'>{title}</figcaption>
        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Ethiopian coffee harvest 2026 buyer report with export-ready green coffee lots at origin'
            fill
            objectFit='cover'
            className='w-full h-full'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>
      </figure>

      <div className='my-4 text-sm bg-amber-50 p-4 rounded-lg border border-amber-200'>
        <span className='font-semibold'>Category:</span>
        <span className='ml-2'>Harvest Report / Market Intelligence / 2026 Season / Importer Resources</span>
      </div>

      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-8 border border-amber-200'>
        <h3 className='font-bold text-xl mb-3 flex items-center gap-2'>
          <HiOutlineLightBulb className='text-amber-400 flex-shrink-0' />Key Takeaway
        </h3>
        <p className='text-sm leading-relaxed'>
          Ethiopian coffee harvest 2026 is larger on paper than the prior season, but it is not an easy spot market for every buyer. USDA projects 11.6 million 60-kg bags of production and 7.8 million bags of exports, yet current-season field reporting still points to tight washed allocation in the southern specialty zones, broader availability in naturals and western origins, and FOB quotes that remain firm because cherry and execution costs stay elevated. Importers should separate menu-critical lots from coverage volume and book them on different timelines.
        </p>
      </div>

      <div className='my-8 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <HiOutlineClipboardDocumentList className='text-amber-600' /> In This Guide
        </h3>
        <ol className='space-y-2 text-sm'>
          <li><a href='#market-shift' className='text-amber-700 hover:underline'>1. What Actually Changed in Ethiopian Coffee Harvest 2026</a></li>
          <li><a href='#allocation-matrix' className='text-amber-700 hover:underline'>2. Allocation Risk by Coffee Type</a></li>
          <li><a href='#fob-pressure' className='text-amber-700 hover:underline'>3. Why FOB Quotes Stay Firm</a></li>
          <li><a href='#coverage-objectives' className='text-amber-700 hover:underline'>4. Regional Coverage by Buyer Objective</a></li>
          <li><a href='#buyer-scenarios' className='text-amber-700 hover:underline'>5. Buyer Scenarios for Q3 and Q4 2026</a></li>
          <li><a href='#booking-checklist' className='text-amber-700 hover:underline'>6. Booking Checklist Before You Approve a Lot</a></li>
          <li><a href='#faq' className='text-amber-700 hover:underline'>7. Frequently Asked Questions</a></li>
        </ol>
      </div>

      <p className='text-lg leading-relaxed my-4'>
        Ethiopian coffee harvest 2026 is not a simple bumper-crop story. A larger national crop does not automatically create easier access to the washed Yirgacheffe, Guji, and Sidama profiles that many importers build menus around. The current season is better described as a split market: more total volume, faster pressure on top southern washed lots, broader natural supply, and renewed opportunity in western origins that can cover value and consistency without forcing buyers to chase the most crowded allocations.
      </p>
      <p className='my-4'>
        USDA&apos;s June 2025 Ethiopia Coffee Annual projected production at 11.6 million 60-kg bags and exports at 7.8 million bags. January and February 2026 field reports from Algrano, Trabocca, Keffa Coffee, and PyraBrew converge on the same operating reality behind those headline numbers: cherry prices surged, washed processing became harder to finance, and buyers who waited for spot offers faced shorter quote validity and less replacement flexibility. This report translates that market picture into practical buying choices for importers, roasters, and green coffee traders.
      </p>

      <div className='bg-blue-50 border border-blue-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3'>Reference Frame for This Report</h4>
        <ul className='space-y-3 text-sm'>
          <li>
            <a href='https://www.fas.usda.gov/data/gain/2025/06/ethiopia-coffee-annual' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline font-semibold'>USDA Ethiopia Coffee Annual</a>
            {' '}
            provides the production and export forecast that anchors the season.
          </li>
          <li>
            <a href='https://www.ice.com/products/15/Coffee-C-Futures' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline font-semibold'>ICE Coffee C Futures</a>
            {' '}
            defines the benchmark Arabica contract in cents per pound.
          </li>
          <li>
            <a href='https://www.ecx.com.et/Pages/Coffee.aspx' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline font-semibold'>Ethiopian Commodity Exchange coffee page</a>
            {' '}
            describes the domestic coffee market structure, varieties, and pricing context inside Ethiopia.
          </li>
        </ul>
      </div>

      <h3 id='market-shift' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineChartBar className='w-8 h-8 text-amber-600' />
        1. What Actually Changed in Ethiopian Coffee Harvest 2026
      </h3>
      <p className='my-4'>
        Most competitor pages stop at one sentence: prices are high, washed coffee is tight, book early. That is directionally correct, but it is not specific enough for a purchase decision. Importers need to separate the headline crop forecast from the profiles that actually clear the market first. Four shifts matter most this season.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>2026 Signal</th>
              <th className='p-3 text-left font-bold'>What It Means in Practice</th>
              <th className='p-3 text-left font-bold'>Buyer Response</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>National volume is up</td>
              <td className='p-3'>USDA expects a record crop, so Ethiopia has more coffee to sell overall.</td>
              <td className='p-3'>Do not assume every profile is easier to buy; check process mix and region.</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Washed supply is the pinch point</td>
              <td className='p-3'>Field reports repeatedly show more home-drying and less fresh cherry reaching washing stations.</td>
              <td className='p-3'>Pre-contract washed southern lots early if they anchor your menu.</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Naturals and western supply offer coverage</td>
              <td className='p-3'>Sidama and Guji naturals remain more available, while western washed and natural coffees offer better execution room.</td>
              <td className='p-3'>Use them to protect volume, blend slots, or value-driven single origins.</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Local price behavior stays sticky</td>
              <td className='p-3'>Ethiopian quotes still reflect cherry costs, exporter finance pressure, and ECX behavior, not just the global benchmark.</td>
              <td className='p-3'>Treat short quote windows and fixed-price discussions as normal this season.</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Timing shifted later on some channels</td>
              <td className='p-3'>Several market reports describe more February and March shipment activity instead of earlier January execution.</td>
              <td className='p-3'>Build buffer into approval, logistics, and launch planning.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        This matters because the 2026 market is bifurcated. Commercial and coverage coffees are available. Premium washed lots from the most crowded southern sub-regions are the real contest. That is why a mid-size roaster buying 150 bags for wholesale should not use the same booking approach as a small specialty roaster chasing a single 87-point washed Yirgacheffe release.
      </p>

      <h3 id='allocation-matrix' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineScale className='w-8 h-8 text-amber-600' />
        2. Allocation Risk by Coffee Type
      </h3>
      <p className='my-4'>
        The cleanest way to buy Ethiopian coffee harvest 2026 is to classify lots by allocation risk before you start asking for samples. This avoids treating every offer as equally urgent, which is where many buyers lose either price discipline or menu fit.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Coffee Type</th>
              <th className='p-3 text-left font-bold'>Risk Level</th>
              <th className='p-3 text-left font-bold'>2026 Read</th>
              <th className='p-3 text-left font-bold'>Best Buyer Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Washed G1 Yirgacheffe, Gedeb, Guji, Sidama</td>
              <td className='p-3'>High</td>
              <td className='p-3'>Menu-critical lots face the strongest allocation pressure and shorter replacement options.</td>
              <td className='p-3'>Pre-contract by profile and shipment month, then cup against written specs.</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Natural G1-G2 Sidama and Guji</td>
              <td className='p-3'>Medium</td>
              <td className='p-3'>Availability is broader than washed, but sorting and fermentation control matter more lot by lot.</td>
              <td className='p-3'>Approve only after clear prep detail, defect tolerance, and arrival timing are set.</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Western washed and naturals from Limu, Kaffa, Jimma, Agaro</td>
              <td className='p-3'>Medium-low</td>
              <td className='p-3'>Western supply looks stronger this season and can cover value without collapsing cup quality.</td>
              <td className='p-3'>Sample early if you need dependable Q3 or Q4 coverage at a more manageable basis.</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Organic cooperative lots</td>
              <td className='p-3'>High</td>
              <td className='p-3'>Certification pressure and tighter washed financing make replacement harder than standard conventional supply.</td>
              <td className='p-3'>Lock certification scope, lot identity, and fallback options early.</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Container-scale blend or commercial coverage</td>
              <td className='p-3'>Low-medium</td>
              <td className='p-3'>Volume exists, but buyers still need disciplined QC language and shipment planning.</td>
              <td className='p-3'>Protect consistency with pre-shipment samples, claims language, and agreed screen or defect tolerances.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='bg-green-50 border border-green-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3'>Original Market Read</h4>
        <p className='text-sm text-gray-700'>
          The best 2026 buying strategy is not “book everything early.” It is “book the wrong-to-miss coffees early, and leave coverage coffees flexible.” Buyers who separate anchor lots from coverage lots keep more negotiating room, use cash more efficiently, and avoid paying premium timing for volume that could have been replaced later from the west or from naturals.
        </p>
      </div>

      <h3 id='fob-pressure' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineCurrencyDollar className='w-8 h-8 text-amber-600' />
        3. Why FOB Quotes Stay Firm
      </h3>
      <p className='my-4'>
        Importers keep asking the same reasonable question: if Ethiopia has more coffee, why do FOB offers still feel expensive? The answer is that larger supply does not remove the cost and finance pressures that shaped this season.
      </p>
      <p className='my-4'>
        ICE describes Coffee C as the world benchmark for Arabica coffee, priced in cents per pound and settled through exchange-grade physical delivery. Ethiopian offers do not simply mirror that contract with a clean universal differential. They first pass through local market behavior, including cherry competition, exporter finance pressure, and the price discovery structure around Ethiopia&apos;s domestic coffee trade. The ECX coffee page itself highlights that prices vary across varieties and grades, and that Sidama and Yirgacheffe command premiums in international markets.
      </p>

      <div className='grid md:grid-cols-2 gap-4 my-6'>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Cherry Cost Shock</h4>
          <p className='text-sm text-gray-700'>January and February 2026 market interviews published by Algrano, Trabocca, and Keffa Coffee clustered around the same peak range: roughly 190 to 250 ETB/kg of red cherry, with some interviewees citing about $1.51/kg at the top end.</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Less Easy Washed Capacity</h4>
          <p className='text-sm text-gray-700'>Washed processing requires cash first. When cherry is expensive, fewer operators want to buy large fresh-cherry volumes without clearer downstream demand.</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Shorter Quote Logic</h4>
          <p className='text-sm text-gray-700'>Expensive stock is risky to carry. That encourages more fixed-price discussions, shorter validity windows, and less tolerance for vague “we may decide later” buying.</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Timing Buffer Still Matters</h4>
          <p className='text-sm text-gray-700'>Several 2026 reports noted later shipment patterns on some channels, which means buyers should protect launch calendars with extra approval and logistics time.</p>
        </div>
      </div>

      <p className='my-4'>
        The practical implication is straightforward. Buyers should not read a firm 2026 Ethiopian FOB offer as evidence that the market is irrational. They should read it as a signal to ask the right follow-up questions: which stage is sampled, how long is the quote valid, when is the lot actually ready, what is the replacement path if the cup shifts, and how much of the price is driven by current cherry pressure versus genuine lot scarcity.
      </p>

      <h3 id='coverage-objectives' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineMapPin className='w-8 h-8 text-amber-600' />
        4. Regional Coverage by Buyer Objective
      </h3>
      <p className='my-4'>
        The best regional choice depends less on prestige and more on what the coffee must do in your program. Ethiopian coffee harvest 2026 rewards buyers who align origin choice with objective instead of defaulting every request toward the same handful of southern names.
      </p>

      <div className='grid md:grid-cols-3 gap-4 my-6'>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Washed Menu Anchor</h4>
          <p className='text-sm text-gray-700 mb-3'>Use southern washed lots when the coffee must carry a flagship single-origin release.</p>
          <p className='text-sm text-gray-700'>Best fit: <Link href='/ethiopian-coffee-yirgacheffe' className='text-amber-700 hover:underline'>Yirgacheffe</Link>, <Link href='/ethiopian-coffee-guji' className='text-amber-700 hover:underline'>Guji</Link>, and top <Link href='/ethiopian-coffee-sidamo' className='text-amber-700 hover:underline'>Sidamo</Link> washed lots. Book early and accept smaller, better-defined allocations.</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Fruit-Led Seasonal Program</h4>
          <p className='text-sm text-gray-700 mb-3'>Naturals offer more room this season and still give strong marketing value.</p>
          <p className='text-sm text-gray-700'>Best fit: Guji and Sidama naturals, supported by our <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='text-amber-700 hover:underline'>washed versus natural buying guide</Link>. Focus on prep detail and fermentation cleanliness rather than just cupping notes.</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Value and Coverage</h4>
          <p className='text-sm text-gray-700 mb-3'>Western coffees can protect consistency and landed margins better than many buyers assume.</p>
          <p className='text-sm text-gray-700'>Best fit: <Link href='/ethiopian-coffee-limu' className='text-amber-700 hover:underline'>Limu</Link>, <Link href='/ethiopian-coffee-jimma' className='text-amber-700 hover:underline'>Jimma</Link>, Kaffa, and Agaro-linked supply chains. Use them for blend structure, approachable single origins, or container coverage.</p>
        </div>
      </div>

      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <h4 className='font-bold text-lg mb-3'>Buyer Mistake to Avoid</h4>
        <p className='text-sm text-gray-700'>
          Do not force every 2026 need into the same Yirgacheffe washed brief. Buyers who keep one prestige coffee, one flexible fruit-forward offer, and one western coverage option usually protect both cup quality and procurement discipline better than buyers who chase prestige across the entire book.
        </p>
      </div>

      <h3 id='buyer-scenarios' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineCheckCircle className='w-8 h-8 text-amber-600' />
        5. Buyer Scenarios for Q3 and Q4 2026
      </h3>
      <p className='my-4'>
        The article needs a real buying lens, not abstract advice. These three scenarios reflect the decisions importers and roasters are actually making right now.
      </p>

      <div className='space-y-6 my-6'>
        <div className='bg-gray-50 border border-gray-200 rounded-lg p-6'>
          <h4 className='font-bold text-lg mb-3'>Scenario 1: Small Specialty Roaster Launching One Ethiopian Feature</h4>
          <p className='text-sm text-gray-700 mb-3'>Profile: 25 to 60 bags total, high importance on differentiation, low tolerance for cup drift.</p>
          <p className='text-sm text-gray-700'>Best move: reserve the washed or premium natural profile first, even if the lot is smaller than ideal. In 2026, this buyer should prioritize precision over scale and treat timing as part of the cup quality decision. Waiting for more options is likely to widen compromise, not improve it.</p>
        </div>
        <div className='bg-gray-50 border border-gray-200 rounded-lg p-6'>
          <h4 className='font-bold text-lg mb-3'>Scenario 2: Mid-Size Roaster Covering Cafes and Wholesale</h4>
          <p className='text-sm text-gray-700 mb-3'>Profile: 120 to 200 bags, needs one standout coffee and one dependable coverage coffee.</p>
          <p className='text-sm text-gray-700'>Best move: pre-contract the menu anchor, then sample western or natural coverage coffees separately. A split-book approach works better than trying to force one profile into every channel. This buyer benefits most from pairing a stronger headline coffee with a more stable supporting offer.</p>
        </div>
        <div className='bg-gray-50 border border-gray-200 rounded-lg p-6'>
          <h4 className='font-bold text-lg mb-3'>Scenario 3: Importer or Distributor Protecting Container Utilization</h4>
          <p className='text-sm text-gray-700 mb-3'>Profile: container-scale execution, margin sensitivity, and higher operational risk if shipments drift.</p>
          <p className='text-sm text-gray-700'>Best move: buy coverage coffees with the clearest execution path, then add limited premium lots as planned overlays rather than core volume. For this buyer, contract language, sample stage, and shipment month matter more than squeezing out one more marketing-friendly origin name.</p>
        </div>
      </div>

      <p className='my-4'>
        Each buyer type should use a different approval rhythm. Small specialty buyers can move fast on one lot. Mid-size roasters should split anchor and coverage decisions. Importers and distributors should treat logistics reliability as part of cup value, not as a back-office detail.
      </p>

      <h3 id='booking-checklist' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineTruck className='w-8 h-8 text-amber-600' />
        6. Booking Checklist Before You Approve a Lot
      </h3>
      <p className='my-4'>
        A good Ethiopian coffee harvest 2026 purchase is defined before the container leaves Ethiopia. Buyers who leave key details open are effectively paying to discover problems later.
      </p>

      <div className='bg-gray-50 p-6 rounded-lg border border-gray-200 my-6'>
        <ol className='space-y-4 text-sm'>
          <li>
            <span className='font-bold'>1. Confirm the commercial document.</span>
            {' '}
            Compare the lot against our <Link href='/insights/ethiopian-coffee-offer-sheet-guide' className='text-amber-700 hover:underline font-semibold'>Ethiopian coffee offer sheet guide</Link> so process, grade, shipment month, bag count, certification, and price basis are explicit.
          </li>
          <li>
            <span className='font-bold'>2. Pin down sample stage.</span>
            {' '}
            Offer sample, pre-shipment sample, and arrival sample each answer different questions. Our <Link href='/insights/ethiopian-coffee-sample-approval-guide' className='text-amber-700 hover:underline font-semibold'>sample approval guide</Link> shows where buyers often confuse them.
          </li>
          <li>
            <span className='font-bold'>3. Write quality tolerances into the deal.</span>
            {' '}
            Defect tolerance, screen size range, moisture expectations, and prep style should not live in email assumptions.
          </li>
          <li>
            <span className='font-bold'>4. Lock the shipment window.</span>
            {' '}
            If the coffee supports a launch date, tie the commercial decision to a realistic shipment month rather than a vague “soon.”
          </li>
          <li>
            <span className='font-bold'>5. Set the claim path in advance.</span>
            {' '}
            Use our <Link href='/insights/green-coffee-quality-claims-guide' className='text-amber-700 hover:underline font-semibold'>green coffee quality claims guide</Link> as the reference for evidence, timing, and comparison logic if the arrival lot diverges.
          </li>
          <li>
            <span className='font-bold'>6. Check the operational route.</span>
            {' '}
            Make sure the lot fits your purchasing process, freight expectations, and downstream timing through <Link href='/ordering-info' className='text-amber-700 hover:underline font-semibold'>How to Order</Link> and our current <Link href='/offerings' className='text-amber-700 hover:underline font-semibold'>available offerings</Link>.
          </li>
        </ol>
      </div>

      <p className='my-4'>
        Ethiopian coffee harvest 2026 rewards buyers who separate must-have coffees from flexible coverage coffees, write tighter approval language, and give shipment timing the same attention they give cup score. That discipline is what turns a noisy season into a workable buying plan.
      </p>

      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Build a 2026 Buying Plan From Origin</h4>
        <p className='my-2'>
          We help buyers separate flagship lots from coverage coffees, compare current offers, and plan shipment timing through the cooperatives and washing stations we work with across Ethiopia. That keeps the purchase conversation tied to actual allocation and execution rather than guesswork.
        </p>
        <div className='flex flex-wrap gap-4 mt-4'>
          <Link href='/offerings' className='bg-dark text-primary px-6 py-3 rounded font-bold hover:bg-gray-800 transition'>
            View Offerings
          </Link>
          <Link href='/contact-us' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>
            Request Samples
          </Link>
          <Link href='/ordering-info' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>
            How to Order
          </Link>
        </div>
      </div>

      <section id='faq' className='mb-12 bg-gray-50 rounded-xl p-8 border border-gray-200'>
        <h3 className='text-2xl font-bold mb-6 text-gray-900 flex items-center gap-2'>
          <HiOutlineQuestionMarkCircle className='text-amber-600' />
          Frequently Asked Questions
        </h3>
        <div className='space-y-6'>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Does Ethiopian coffee harvest 2026 automatically mean lower FOB prices?</h4>
            <p className='text-sm text-gray-600'>No. The crop is larger nationally, but FOB quotes still reflect cherry prices, exporter finance pressure, process mix, and local price behavior. Buyers may find better availability in some categories, especially naturals and western origins, without seeing a broad collapse in top-tier southern washed pricing.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>When should importers lock washed Ethiopian coffee for late-2026 roasting plans?</h4>
            <p className='text-sm text-gray-600'>Buyers using washed Ethiopia as a flagship origin should move early and tie the decision to written specs and shipment month. In this season, washed southern lots clear faster and are harder to replace later with like-for-like quality, especially when the brief is narrow.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Are naturals safer to buy than washed coffees this season?</h4>
            <p className='text-sm text-gray-600'>Naturals look easier to source than washed coffees in 2026, but they are not automatically safer. Buyers still need clear information on drying, sorting, and lot separation. The advantage is availability, not a free pass on quality control or sample discipline.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Which regions offer better value if Yirgacheffe washed is too expensive?</h4>
            <p className='text-sm text-gray-600'>Western coffees from Limu, Kaffa, Jimma, and Agaro-linked supply chains can offer better margin control while still delivering useful cup character. They work especially well for value-led single origins, espresso structure, and broader coverage roles that do not require a prestige southern label.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>What should appear on a 2026 Ethiopian coffee offer before I approve it?</h4>
            <p className='text-sm text-gray-600'>At minimum, the offer should define process, grade, lot identity, shipment month, bag count, certification status, price basis, and sample stage. If those details remain vague, the buyer is carrying avoidable risk into approval, logistics, and any later claim discussion.</p>
          </div>
        </div>
      </section>

      <div className='my-10 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4'>Related Articles</h3>
        <div className='grid md:grid-cols-2 gap-4'>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Season &amp; Pricing</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/ethiopian-coffee-harvest-calendar-buying-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Harvest Calendar for Buyers</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Pricing for Importers</Link></li>
              <li>&bull; <Link href='/insights/rising-ethiopian-coffee-prices-explained' className='text-amber-700 hover:underline'>Rising Ethiopian Coffee Prices Explained</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Contracts &amp; Quality</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/ethiopian-coffee-offer-sheet-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Offer Sheet Guide</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-sample-approval-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Sample Approval Guide</Link></li>
              <li>&bull; <Link href='/insights/green-coffee-quality-claims-guide' className='text-amber-700 hover:underline'>Green Coffee Quality Claims Guide</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Origin &amp; Processing</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/guide-ethiopian-coffee-origins' className='text-amber-700 hover:underline'>Guide to Ethiopian Green Coffee Origins</Link></li>
              <li>&bull; <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='text-amber-700 hover:underline'>Washed vs Natural Ethiopian Coffee</Link></li>
              <li>&bull; <Link href='/insights/guji-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Guji Coffee: Buyer&apos;s Sourcing Guide</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Planning &amp; Execution</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/ethiopian-coffee-landed-cost-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Landed Cost Guide</Link></li>
              <li>&bull; <Link href='/insights/minimum-order-quantities-ethiopian-coffee-moq' className='text-amber-700 hover:underline'>Ethiopian Coffee MOQ Guide for Importers</Link></li>
              <li>&bull; <Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='text-amber-700 hover:underline'>Sourcing Green Coffee from Ethiopia</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> Written by Ethio Coffee Import and Export PLC, an origin-connected exporter with a trusted sourcing network across cooperatives and washing stations in Ethiopia&apos;s major coffee regions.
        </p>
        <p className='text-sm text-gray-600 font-inconsolata mt-2'>
          <Link href='/insights' className='underline'>All Insights</Link> &middot;{' '}
          <Link href='/ethiopian-coffee-exporter' className='underline'>Export Services</Link> &middot;{' '}
          <Link href='/about' className='underline'>About</Link> &middot;{' '}
          <Link href='/contact-us' className='underline'>Contact</Link>
        </p>
      </div>
    </>
  )
}