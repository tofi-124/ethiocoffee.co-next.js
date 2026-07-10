import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import {
  HiOutlineLightBulb,
  HiOutlineClipboardDocumentList,
  HiOutlineDocumentText,
  HiOutlineDocumentMagnifyingGlass,
  HiOutlineScale,
  HiOutlineChartBar,
  HiOutlineCheckCircle,
  HiOutlineExclamationTriangle,
  HiOutlineCurrencyDollar,
  HiOutlineClock,
} from 'react-icons/hi2'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function EthiopianCoffeeOfferSheetGuide({
  title,
  date,
  large_image_url,
}: InsightContentProps) {
  return (
    <>
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        How to read an Ethiopian coffee offer sheet and decide which lots deserve samples
      </h2>

      <figure>
        <figcaption className='font-inconsolata my-2'>{title}</figcaption>
        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Ethiopian coffee offer sheet guide showing a buyer comparing green coffee lot specs and cupping data'
            fill
            objectFit='cover'
            className='w-full h-full'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>
      </figure>

      <div className='my-4 text-sm bg-amber-50 p-4 rounded-lg border border-amber-200'>
        <span className='font-semibold'>Category:</span>
        <span className='ml-2'>Offer Sheet / Green Coffee Buying / Sourcing Workflow / Importer Resources</span>
      </div>

      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-8 border border-amber-200'>
        <h3 className='font-bold text-xl mb-3 flex items-center gap-2'>
          <HiOutlineLightBulb className='text-amber-400 flex-shrink-0' />Key Takeaway
        </h3>
        <p className='text-sm leading-relaxed'>
          An Ethiopian coffee offer sheet is not just a price list. It is the first risk screen in your buying process. Strong sheets tell you whether the lot fits your menu, whether the price basis is comparable, whether the physical data support stable arrival quality, and whether the sample workflow is clear. Weak sheets hide those answers, which forces buyers to waste time on lots that should have been filtered out in five minutes.
        </p>
      </div>

      <div className='my-8 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <HiOutlineClipboardDocumentList className='text-amber-600' /> In This Guide
        </h3>
        <ol className='space-y-2 text-sm'>
          <li><a href='#why-offer-sheets-matter' className='text-amber-700 hover:underline'>1. Why buyers lose time on weak offer sheets</a></li>
          <li><a href='#what-must-be-included' className='text-amber-700 hover:underline'>2. What an Ethiopian coffee offer sheet must include</a></li>
          <li><a href='#first-pass-filters' className='text-amber-700 hover:underline'>3. The five first-pass filters that decide whether you sample</a></li>
          <li><a href='#comparison-matrix' className='text-amber-700 hover:underline'>4. A simple matrix for comparing two Ethiopian offers</a></li>
          <li><a href='#buyer-personas' className='text-amber-700 hover:underline'>5. Buyer personas, the same sheet can lead to different decisions</a></li>
          <li><a href='#questions-before-samples' className='text-amber-700 hover:underline'>6. Questions to ask before you request samples</a></li>
          <li><a href='#handoff' className='text-amber-700 hover:underline'>7. Moving from offer sheet to sample approval and contract</a></li>
          <li><a href='#faq' className='text-amber-700 hover:underline'>8. FAQ</a></li>
        </ol>
      </div>

      <p className='text-lg leading-relaxed my-4'>
        An Ethiopian coffee offer sheet should help a busy importer reject the wrong lots quickly and escalate the right ones into sampling. That sounds obvious, yet many sheets still mix marketing language, incomplete spec data, and unclear price terms in a way that makes comparison harder, not easier. If your team is looking at four Ethiopian offers in the same week, clarity matters more than volume of adjectives.
      </p>
      <p className='my-4'>
        The strongest sheets from origin-connected exporters separate three things clearly: what the coffee is, what commercial terms apply, and what action the buyer should take next. That is where many competitors stay thin. A glossary might define an offer sheet; an importer stock list might explain warehouse columns; neither helps much when you need to decide whether a washed Yirgacheffe at 86 to 87.5 points, 11.1% moisture, 0.54 aw, 15 to 16 screen, FOB Djibouti, and June shipment is a better fit than a Guji natural with higher score but shorter freshness runway.
      </p>
      <p className='my-4'>
        This guide focuses on that decision point. It does not re-explain every spec from scratch. For deep dives on individual fields, see our guides to <Link href='/insights/ethiopian-coffee-screen-size-guide' className='text-amber-700 hover:underline font-semibold'>screen size</Link>, <Link href='/insights/green-coffee-moisture-content-water-activity-guide' className='text-amber-700 hover:underline font-semibold'>moisture and water activity</Link>, <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='text-amber-700 hover:underline font-semibold'>FOB pricing</Link>, and <Link href='/insights/how-to-cup-evaluate-ethiopian-coffee-samples' className='text-amber-700 hover:underline font-semibold'>sample evaluation</Link>. Here, the goal is faster, better triage of Ethiopian offers before your lab time and budget get diluted.
      </p>

      <h3 id='why-offer-sheets-matter' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineDocumentText className='w-8 h-8 text-amber-600' />
        1. Why Buyers Lose Time on Weak Offer Sheets
      </h3>

      <p className='my-4'>
        Most buying teams do not lose money because they never receive offers. They lose it because they spend too long on offers that were commercially weak from the start. The common failure points are predictable: price basis cannot be compared, cup score is presented without context, freshness is vague, sample status is unclear, or the sheet lists broad origin names without enough production detail to tell whether the lot belongs in your program.
      </p>
      <p className='my-4'>
        Ethiopian coffee adds its own layer of complexity. Some offers are framed from origin, typically FOB Djibouti or FCA Addis Ababa. Others are framed from importer warehouses, where the sheet focuses on differential plus ex-warehouse price. That distinction matters. A Canadian importer sheet that adds New York futures, inland warehousing, and importer overhead is solving a different buyer problem than an Ethiopian exporter sheet quoting a ready-to-contract origin lot. Comparing them directly without adjusting the price basis leads to bad decisions.
      </p>
      <p className='my-4'>
        Price context also moves fast. The <a href='https://ico.org/' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline font-semibold'>International Coffee Organization</a> reported its Composite Indicator Price at 273.70 US cents per pound in March 2026, while the <a href='https://www.ecx.com.et/' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline font-semibold'>Ethiopia Commodity Exchange</a> continued publishing daily coffee closes in birr. Your offer sheet does not need to reproduce those systems in full, but it should make clear whether the number you are reading is an origin price, a landed warehouse price, or a market-referenced indication that may change in 24 to 72 hours.
      </p>

      <div className='bg-blue-50 border border-blue-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3'>Busy-buyer rule</h4>
        <p className='text-sm text-gray-700'>
          If a sheet does not let you answer four questions quickly, it is incomplete: Does this coffee fit our menu, is the price comparable, is the physical data sound, and can we move to an offer sample without clarification loops?
        </p>
      </div>

      <h3 id='what-must-be-included' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineDocumentMagnifyingGlass className='w-8 h-8 text-amber-600' />
        2. What an Ethiopian Coffee Offer Sheet Must Include
      </h3>

      <p className='my-4'>
        A strong Ethiopian coffee offer sheet combines traceability, physical specs, sensory shorthand, and commercial clarity on one page. The right level of detail depends on whether you are buying a named micro-lot, a classic regional profile, or a broader commercial lot, but the fields below should be standard for any serious B2B offer.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Field</th>
              <th className='p-3 text-left font-bold'>Why It Matters</th>
              <th className='p-3 text-left font-bold'>What Good Looks Like</th>
              <th className='p-3 text-left font-bold'>Red Flag</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Origin identity</td>
              <td className='p-3'>Lets you distinguish region-level branding from named production detail</td>
              <td className='p-3'>Country, region, woreda or station, process, grade</td>
              <td className='p-3'>Only says “Ethiopia specialty”</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Crop timing</td>
              <td className='p-3'>Freshness matters more than many buyers admit, especially for floral washed lots</td>
              <td className='p-3'>Harvest or crop year plus ready-to-ship window</td>
              <td className='p-3'>No harvest reference, only “new crop”</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Cup score and notes</td>
              <td className='p-3'>Gives a quick sensory position, not a final buying decision</td>
              <td className='p-3'>Score range, cup note set, and whether score is origin, exporter, or arrival based</td>
              <td className='p-3'>Single score with no scorer or date</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Moisture and aw</td>
              <td className='p-3'>Protects you from avoidable transit-quality loss</td>
              <td className='p-3'>Current readings with a test date; for acceptable ranges, see our <Link href='/insights/green-coffee-moisture-content-water-activity-guide' className='text-amber-700 hover:underline font-semibold'>moisture and water activity guide</Link></td>
              <td className='p-3'>Moisture only, or no testing date</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Screen size or prep</td>
              <td className='p-3'>Helps production teams judge roast behavior and lot uniformity</td>
              <td className='p-3'>Dominant screen range or prep tolerance</td>
              <td className='p-3'>“Large bean” with no numbers</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Bags available</td>
              <td className='p-3'>Availability determines whether sampling effort is worth it</td>
              <td className='p-3'>Actual bag count and whether inventory is open, limited, or allocated</td>
              <td className='p-3'>No quantity or vague “available now” language</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Price basis</td>
              <td className='p-3'>Makes comparison possible</td>
              <td className='p-3'>FOB Djibouti, FCA Addis Ababa, or ex-warehouse, clearly labeled</td>
              <td className='p-3'>Price shown with no Incoterm or basis</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Packaging</td>
              <td className='p-3'>Signals expected transit protection and arrival risk</td>
              <td className='p-3'>Packaging type and liner clearly stated; see our <Link href='/insights/green-coffee-packaging-bag-types-guide' className='text-amber-700 hover:underline font-semibold'>green coffee bag types guide</Link> for full standards</td>
              <td className='p-3'>No bag specification on a high-value lot</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Sample path</td>
              <td className='p-3'>Shows whether you can evaluate now and what approval stage comes next</td>
              <td className='p-3'>Offer sample available, PSS timing noted, contact path clear</td>
              <td className='p-3'>Request samples, but no sample stage defined</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Reference code</td>
              <td className='p-3'>Prevents confusion once multiple lots and revisions are in play</td>
              <td className='p-3'>Lot code or internal reference that follows the sample and contract</td>
              <td className='p-3'>No traceable reference number</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='bg-green-50 border border-green-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3'>Where Ethiopian exporter sheets should do better than importer sheets</h4>
        <p className='text-sm text-gray-700'>
          Exporter sheets should give you better origin resolution and fresher physical data. They should know which cooperatives and washing stations supplied the lot, when the lot was milled, what sample stage is available, and what shipment window is realistic. If that origin-side detail is missing, the exporter is leaving one of Ethiopia’s strongest advantages unused.
        </p>
      </div>

      <h3 id='first-pass-filters' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineScale className='w-8 h-8 text-amber-600' />
        3. The Five First-Pass Filters That Decide Whether You Sample
      </h3>

      <p className='my-4'>
        Buyers do not need to inspect every field with equal intensity on first pass. The fastest workflow is to use five filters in order. If a lot fails early, move on. If it passes, escalate to sample request. This is where an Ethiopian coffee offer sheet becomes operational instead of decorative.
      </p>

      <div className='grid md:grid-cols-2 gap-4 my-6'>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>1. Menu Fit</h4>
          <p className='text-sm text-gray-700'>Start with process, region, and cup language. If your program needs floral filter coffee, a heavy-fruit natural may be an immediate no even at a stronger score. If you are building espresso base lots, clean prep and stability may outrank a half-point score advantage.</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>2. Price Basis</h4>
          <p className='text-sm text-gray-700'>Check whether the quote is FOB, FCA, or ex-warehouse. Do not compare an origin lot against a warehouse lot until you normalize freight, finance, and holding costs. This one mistake can make a weaker commercial option look cheaper than it is.</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>3. Physical Risk</h4>
          <p className='text-sm text-gray-700'>Look for moisture, water activity, and basic prep clarity. A sheet without current physical data is forcing you to sample blind on storage stability. For a high-value washed lot, that is a bad trade.</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>4. Timing</h4>
          <p className='text-sm text-gray-700'>Bag count and shipment window matter as much as cup. A brilliant lot with unclear readiness can miss your launch calendar. Use the <Link href='/insights/ethiopian-coffee-harvest-calendar-buying-guide' className='text-amber-700 hover:underline font-semibold'>harvest calendar</Link> when the timing looks inconsistent with the stated crop stage.</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50 md:col-span-2'>
          <h4 className='font-bold mb-2'>5. Sample Readiness</h4>
          <p className='text-sm text-gray-700'>A sheet should tell you whether an offer sample is available now, how quickly it can ship, and what approval stage follows. If the seller cannot tell you whether the next sample is an offer sample or a pre-shipment sample, your workflow will slow down later. Our <Link href='/insights/ethiopian-coffee-sample-approval-guide' className='text-amber-700 hover:underline font-semibold'>sample approval guide</Link> covers the handoff in detail.</p>
        </div>
      </div>

      <div className='bg-amber-50 p-6 rounded-lg my-6 border border-amber-200'>
        <h4 className='font-bold text-lg mb-3'>First-pass filter in one sentence</h4>
        <p className='text-sm text-gray-700'>
          Sample only the lots that fit your menu, quote a comparable price basis, show acceptable physical data, align with your calendar, and have a clear sample pathway.
        </p>
      </div>

      <h3 id='comparison-matrix' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineChartBar className='w-8 h-8 text-amber-600' />
        4. A Simple Matrix for Comparing Two Ethiopian Offers
      </h3>

      <p className='my-4'>
        Most teams do not need a complex procurement system for shortlisting. A weighted matrix is enough. Score each lot from 1 to 5 on the five categories below, multiply by the weight, then sample the highest total if the commercial stakes justify it.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Category</th>
              <th className='p-3 text-left font-bold'>Weight</th>
              <th className='p-3 text-left font-bold'>What You Are Really Scoring</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Menu fit</td>
              <td className='p-3'>30%</td>
              <td className='p-3'>How well the process, region, and notes match the intended product</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Commercial fit</td>
              <td className='p-3'>20%</td>
              <td className='p-3'>Whether the price basis and quantity align with the program</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Physical risk control</td>
              <td className='p-3'>20%</td>
              <td className='p-3'>Moisture, aw, prep clarity, and packaging confidence</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Timing fit</td>
              <td className='p-3'>15%</td>
              <td className='p-3'>How well the lot lines up with sample, booking, and launch deadlines</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Clarity</td>
              <td className='p-3'>15%</td>
              <td className='p-3'>How much follow-up you need before a rational sample request</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Example Lot</th>
              <th className='p-3 text-left font-bold'>Snapshot</th>
              <th className='p-3 text-left font-bold'>Best Fit</th>
              <th className='p-3 text-left font-bold'>Short Verdict</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Washed Kochere-style profile</td>
              <td className='p-3'>86 to 87.5, 11.0% moisture, 0.53 aw, 15 to 16 screen, FOB origin, open sample path</td>
              <td className='p-3'>Filter roasters, bright single-origin programs</td>
              <td className='p-3'>Sample if your menu needs florals and freshness outranks bag volume</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Natural Guji-style profile</td>
              <td className='p-3'>87 to 88.5, 11.4% moisture, aw not listed, limited bags, price basis not labeled</td>
              <td className='p-3'>Fruit-forward specialty launches, seasonal features</td>
              <td className='p-3'>Do not sample until the price basis and physical data are clarified</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        That matrix is intentionally simple. It prevents the common mistake of over-weighting cup score and under-weighting execution risk. Many buyers chase the higher score, only to discover later that the lot was limited, physically under-documented, or commercially hard to compare. A disciplined matrix keeps the sampling queue aligned with the buying brief.
      </p>

      <h3 id='buyer-personas' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineCurrencyDollar className='w-8 h-8 text-amber-600' />
        5. Buyer Personas, the Same Sheet Can Lead to Different Decisions
      </h3>

      <p className='my-4'>
        Good offer-sheet reading is not about finding the objectively best coffee. It is about finding the best fit for a specific buying job. That is why the same Ethiopian coffee offer sheet can lead to different shortlists depending on the buyer.
      </p>

      <div className='grid md:grid-cols-3 gap-4 my-6'>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Persona 1: Nordic filter roaster</h4>
          <p className='text-sm text-gray-700'>A 30-tonne annual roaster launching seasonal single origins will tolerate smaller screens if the florals are clean, the crop timing is fresh, and the sample path is fast. This buyer is less sensitive to broad bag availability and more sensitive to note clarity and shipment season.</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Persona 2: Regional cafe-chain roaster</h4>
          <p className='text-sm text-gray-700'>A chain producing stable weekly espresso demand reads the same sheet through repeatability. Uniform prep, price clarity, and quantity outrank half-point score differences. This buyer may reject a higher-scoring limited lot in favor of a cleaner commercial fit.</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Persona 3: Specialty importer building a mixed book</h4>
          <p className='text-sm text-gray-700'>This buyer wants spread across programs. They may sample a classic washed regional lot for dependable volume and a smaller natural or named station lot for margin and storytelling. For them, the sheet needs both origin detail and commercial discipline.</p>
        </div>
      </div>

      <div className='bg-blue-50 border border-blue-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3'>Case study: one sheet, two outcomes</h4>
        <p className='text-sm text-gray-700'>
          Consider an Ethiopian exporter sheet showing two washed coffees from cooperatives and washing stations we work with. Lot A is floral, smaller screened, modest bag count, ready to ship sooner. Lot B is more uniform, slightly cheaper, and broader in volume. A filter-focused buyer samples Lot A first. A production-driven espresso buyer samples Lot B first. The sheet did its job in both cases because it made the trade-off visible.
        </p>
      </div>

      <h3 id='questions-before-samples' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineExclamationTriangle className='w-8 h-8 text-amber-600' />
        6. Questions to Ask Before You Request Samples
      </h3>

      <p className='my-4'>
        The point of an offer sheet is not to eliminate conversation. It is to improve the quality of the conversation. Before you request samples, ask questions that close information gaps without reopening the whole sourcing process.
      </p>

      <div className='bg-gray-50 p-6 rounded-lg border border-gray-200 my-6'>
        <ul className='space-y-3 text-sm'>
          <li className='flex items-start gap-2'>
            <HiOutlineCheckCircle className='text-green-600 mt-0.5 flex-shrink-0' />
            <span>Is the cup score from origin, exporter lab, or arrival cupping, and on what date was it recorded?</span>
          </li>
          <li className='flex items-start gap-2'>
            <HiOutlineCheckCircle className='text-green-600 mt-0.5 flex-shrink-0' />
            <span>When were moisture and water activity measured, and were the readings taken before or after final bagging?</span>
          </li>
          <li className='flex items-start gap-2'>
            <HiOutlineCheckCircle className='text-green-600 mt-0.5 flex-shrink-0' />
            <span>Does the screen-size line describe the dominant distribution or only a minimum threshold?</span>
          </li>
          <li className='flex items-start gap-2'>
            <HiOutlineCheckCircle className='text-green-600 mt-0.5 flex-shrink-0' />
            <span>Is the price FOB Djibouti, FCA Addis, or another basis, and how long is the quote valid?</span>
          </li>
          <li className='flex items-start gap-2'>
            <HiOutlineCheckCircle className='text-green-600 mt-0.5 flex-shrink-0' />
            <span>Are the listed bags physically available now, or are they expected after milling, booking, or arrival?</span>
          </li>
          <li className='flex items-start gap-2'>
            <HiOutlineCheckCircle className='text-green-600 mt-0.5 flex-shrink-0' />
            <span>What sample stage is available today, offer sample, production sample, or pre-shipment sample?</span>
          </li>
          <li className='flex items-start gap-2'>
            <HiOutlineCheckCircle className='text-green-600 mt-0.5 flex-shrink-0' />
            <span>Has part of the lot already been allocated to another buyer, and if so, what quantity remains open?</span>
          </li>
        </ul>
      </div>

      <p className='my-4'>
        If a seller answers those questions quickly and consistently, the offer sheet is probably supported by real operational control. If the answers stay vague, the issue is rarely only the sheet. It usually signals weaker lot management behind the scenes.
      </p>

      <h3 id='handoff' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineClock className='w-8 h-8 text-amber-600' />
        7. Moving From Offer Sheet to Sample Approval and Contract
      </h3>

      <p className='my-4'>
        A good Ethiopian coffee offer sheet should shorten the path from shortlist to commercial clarity. Once a lot survives your first-pass filter, the next steps are straightforward.
      </p>
      <p className='my-4'>
        After sample approval and contract alignment, the next control point is document review. Our <Link href='/insights/green-coffee-shipping-documents-checklist' className='text-amber-700 hover:underline font-semibold'>green coffee shipping documents checklist</Link> shows how to verify invoices, packing lists, bill of lading drafts, and origin papers before the shipment pack is finalized.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Step</th>
              <th className='p-3 text-left font-bold'>What the Buyer Confirms</th>
              <th className='p-3 text-left font-bold'>Best Supporting Guide</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Shortlist</td>
              <td className='p-3'>Menu fit, price basis, physical data, timing</td>
              <td className='p-3'>This offer-sheet guide</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Offer sample</td>
              <td className='p-3'>Whether the lot deserves deeper evaluation in your lab</td>
              <td className='p-3'><Link href='/insights/how-to-cup-evaluate-ethiopian-coffee-samples' className='text-amber-700 hover:underline font-semibold'>Cupping and evaluation</Link></td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Commercial alignment</td>
              <td className='p-3'>Incoterm, validity window, payment method, packaging, booking assumptions</td>
              <td className='p-3'><Link href='/insights/ethiopian-coffee-contracts-payment-terms-guide' className='text-amber-700 hover:underline font-semibold'>Contracts and payment terms</Link></td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Pre-shipment approval</td>
              <td className='p-3'>That the shipped lot still reflects the approved commercial lot</td>
              <td className='p-3'><Link href='/insights/ethiopian-coffee-sample-approval-guide' className='text-amber-700 hover:underline font-semibold'>Sample approval workflow</Link></td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Execution</td>
              <td className='p-3'>Documents, loading, transit, and arrival expectations</td>
              <td className='p-3'><Link href='/insights/ethiopian-coffee-export-process-buyers-guide' className='text-amber-700 hover:underline font-semibold'>Export process guide</Link></td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        The practical point is simple: do not ask the offer sheet to do the job of the contract, and do not use sampling to compensate for missing commercial basics. The strongest buyers separate these stages clearly. That keeps lab attention focused on promising lots and keeps contract negotiation focused on details that actually deserve negotiation.
      </p>
      <p className='my-4'>
        Used well, an Ethiopian coffee offer sheet becomes a fast commercial filter instead of a passive spec sheet. It helps importers compare lots on fit, price basis, physical stability, timing, and sample readiness before they commit lab time or move into contract discussions.
      </p>

      <p className='my-4'>
        If a lot looks promising and you need to assess the supplier behind the sheet, continue with our <Link href='/insights/green-coffee-supplier-evaluation-checklist' className='text-amber-700 hover:underline font-semibold'>green coffee supplier evaluation checklist</Link> to score sample control, documentation readiness, and execution risk before contracting.
      </p>

      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Use Better Offer Sheets to Buy Faster</h4>
        <p className='my-2'>
          If you want fewer sampling dead ends and cleaner lot comparisons, start with offers that show the commercial basis, physical quality, and next action clearly. We can help you review current Ethiopian lots against your flavor brief, timing window, and risk tolerance.
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
        <h3 className='text-2xl font-bold mb-6 text-gray-900'>Frequently Asked Questions</h3>
        <div className='space-y-6'>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>What is the single most important field on an Ethiopian coffee offer sheet?</h4>
            <p className='text-sm text-gray-600'>No single field wins by itself. The most important combination is menu fit plus price basis plus physical stability. A great score without comparable pricing or dated moisture data is not a better commercial lot, it is just a more interesting sounding one.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Should I compare FOB Djibouti with ex-warehouse prices on the same spreadsheet?</h4>
            <p className='text-sm text-gray-600'>Only after adjusting for what each number includes. FOB origin pricing excludes importer warehousing and many downstream costs, while ex-warehouse pricing already carries those layers. Treat them as different commercial stages unless the seller normalizes them clearly. That distinction matters before you compare supplier economics or landed cost.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>How much weight should I give to the cupping score?</h4>
            <p className='text-sm text-gray-600'>Use the score as a sorting tool, not the final verdict. The date, scorer, sample stage, and note profile matter almost as much as the number. A slightly lower score with stronger physical data and cleaner timing can be the safer buying decision.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>What missing fields justify skipping a lot before sampling?</h4>
            <p className='text-sm text-gray-600'>If the sheet lacks a clear price basis, current physical data, meaningful origin identity, and a defined sample path, skipping is reasonable. Those gaps usually create slow follow-up, poor comparability, and higher risk later in the workflow. Rejecting a weak sheet early is usually cheaper than clarifying it after the lot reaches your shortlist.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>When should I ask for a pre-shipment sample after approving an offer sample?</h4>
            <p className='text-sm text-gray-600'>Ask once the commercial lot is committed and the exporter can tie the sample to the exact lot code and shipment plan. Pre-shipment samples are not replacements for good offer sheets, they are confirmation tools once the deal has moved into execution.</p>
          </div>
        </div>
      </section>

      <div className='my-10 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4'>Related Articles</h3>
        <div className='grid md:grid-cols-2 gap-4'>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Quality Specs</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/ethiopian-coffee-screen-size-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Screen Size Guide</Link></li>
              <li>&bull; <Link href='/insights/green-coffee-moisture-content-water-activity-guide' className='text-amber-700 hover:underline'>Green Coffee Moisture and Water Activity Guide</Link></li>
              <li>&bull; <Link href='/insights/how-to-cup-evaluate-ethiopian-coffee-samples' className='text-amber-700 hover:underline'>Cup and Evaluate Ethiopian Coffee Samples</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Buying Workflow</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/ethiopian-coffee-sample-approval-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Sample Approval Guide</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-contracts-payment-terms-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Contracts and Payment Terms Guide</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-export-process-buyers-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Export Process Guide</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Origin Selection</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/yirgacheffe-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Yirgacheffe Coffee Sourcing Guide</Link></li>
              <li>&bull; <Link href='/insights/guji-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Guji Coffee Sourcing Guide</Link></li>
              <li>&bull; <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='text-amber-700 hover:underline'>Washed vs Natural Ethiopian Coffee</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Market Planning</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Pricing for Importers</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-harvest-calendar-buying-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Harvest Calendar for Buyers</Link></li>
              <li>&bull; <Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='text-amber-700 hover:underline'>How to Source Green Coffee From Ethiopia</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> Written by Ethio Coffee Import and Export PLC, an origin-connected Ethiopian coffee exporter working with cooperatives and washing stations across Ethiopia&apos;s main coffee regions.
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