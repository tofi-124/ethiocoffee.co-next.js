import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import {
  HiOutlineArrowPath,
  HiOutlineBanknotes,
  HiOutlineCalculator,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
  HiOutlineClipboardDocumentList,
  HiOutlineClock,
  HiOutlineCube,
  HiOutlineLightBulb,
  HiOutlineTruck,
} from 'react-icons/hi2'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function GreenCoffeeInventoryManagementRoasters({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        A Green Coffee Inventory Management System for Forecasting, Safety Stock, and Ethiopian Replenishment
      </h2>

      <figure>
        <figcaption className='font-inconsolata my-2'>{title}</figcaption>
        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Bag of unroasted beans used in green coffee inventory management for a commercial roastery'
            fill
            objectFit='cover'
            className='w-full h-full'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>
        <p className='text-xs text-gray-500 mt-2'>Photo: Wisnu Dwi Wibowo, Unsplash.</p>
      </figure>

      <div className='my-4 text-sm bg-amber-50 p-4 rounded-lg border border-amber-200'>
        <span className='font-semibold'>Category:</span>
        <span className='ml-2'>Roaster Operations / Inventory Planning / Green Coffee Buying / Procurement Resources</span>
      </div>

      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-8 border border-amber-200'>
        <h3 className='font-bold text-xl mb-3 flex items-center gap-2'>
          <HiOutlineLightBulb className='text-amber-400 flex-shrink-0' />Key Takeaway
        </h3>
        <p className='text-sm leading-relaxed'>
          Green coffee inventory management starts with one decision rule: reorder when usable stock plus confirmed inbound coffee, less committed demand, reaches expected use during replenishment lead time plus safety stock. Forecast roasted sales first, convert them to green kilograms with your actual roast yield, then calculate the rule for each origin or blend component. Track fresh-crop allocation, pre-shipment approval, export preparation, ocean transit, and warehouse receipt as separate milestones. This prevents a booked lot from being treated like available stock. The goal is not maximum inventory. It is enough saleable coffee to protect customer commitments without locking excess cash into beans that may age before roasting.
        </p>
      </div>

      <div className='my-8 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <HiOutlineClipboardDocumentList className='text-amber-600' /> In This Guide
        </h3>
        <ol className='space-y-2 text-sm'>
          <li><a href='#control-equation' className='text-amber-700 hover:underline'>1. Define the Inventory Control Equation</a></li>
          <li><a href='#forecast' className='text-amber-700 hover:underline'>2. Convert Roasted Demand into Green Coffee</a></li>
          <li><a href='#reorder-point' className='text-amber-700 hover:underline'>3. Calculate the Reorder Point and Safety Stock</a></li>
          <li><a href='#stock-roles' className='text-amber-700 hover:underline'>4. Give Every Lot an Inventory Role</a></li>
          <li><a href='#ethiopia-clock' className='text-amber-700 hover:underline'>5. Build the Ethiopia Replenishment Clock</a></li>
          <li><a href='#cash-freshness' className='text-amber-700 hover:underline'>6. Set Cash and Freshness Guardrails</a></li>
          <li><a href='#case-study' className='text-amber-700 hover:underline'>7. Worked Roaster Inventory Case</a></li>
          <li><a href='#dashboard' className='text-amber-700 hover:underline'>8. Run a Weekly Buyer Dashboard</a></li>
          <li><a href='#implementation' className='text-amber-700 hover:underline'>9. Implement the System in 90 Days</a></li>
          <li><a href='#faq' className='text-amber-700 hover:underline'>10. Frequently Asked Questions</a></li>
        </ol>
      </div>

      <p className='text-lg leading-relaxed my-4'>
        Green coffee inventory management fails when a roaster notices a shortage only after the production schedule is at risk. A purchase order may be signed, but the coffee can still be awaiting milling, pre-shipment approval, export documents, a vessel, customs clearance, or warehouse release. Each stage consumes time, while sales continue to consume the lot already on hand.
      </p>
      <p className='my-4'>
        The solution is a buying model that connects sales velocity to origin lead time. It should tell a green buyer how many usable kilograms remain, how many weeks of demand those kilograms cover, when the next order decision is due, and which assumptions caused the answer. The system below works in a spreadsheet or inventory platform and keeps the calculation separate from storage science, freight execution, and price hedging, which already have their own specialist guides.
      </p>

      <h3 id='control-equation' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineCube className='w-8 h-8 text-amber-600' />
        1. Define the Inventory Control Equation
      </h3>
      <p className='my-4'>
        A useful inventory system controls availability, not bag count. The key quantity is inventory position: usable coffee on hand plus confirmed inbound coffee, minus stock already allocated to customer orders or blocked by quality review. Reorder when that position reaches the volume expected to be consumed before a replacement can become usable, plus a measured buffer.
      </p>

      <div className='bg-blue-50 border border-blue-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3'>The Two Equations</h4>
        <p className='font-inconsolata text-sm my-2'>Inventory position = usable on hand + confirmed inbound - committed or blocked stock</p>
        <p className='font-inconsolata text-sm my-2'>Reorder point = expected use during replenishment lead time + safety stock</p>
      </div>

      <p className='my-4'>
        &quot;Confirmed inbound&quot; needs a strict definition. Count a contracted lot only when its quantity, quality specification, shipment window, and commercial approval are documented. Keep tentative offers and unapproved samples in a separate supply-opportunity field. A coffee that exists on an offer sheet but has not cleared your buying gates cannot protect a production commitment.
      </p>
      <p className='my-4'>
        Origin-connected exporters see one recurring mistake: buyers use the vessel ETA as the only lead-time date. A delayed pre-shipment sample or dry-mill slot can move the shipment before a vessel is booked. The inventory record should therefore show the lot&apos;s next controllable milestone, owner, and due date, not just a distant arrival estimate.
      </p>

      <h3 id='forecast' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineChartBar className='w-8 h-8 text-amber-600' />
        2. Convert Roasted Demand into Green Coffee
      </h3>
      <p className='my-4'>
        Forecast demand in roasted kilograms by SKU, then convert it to green kilograms with the yield your roastery actually records. Do not apply one assumed loss factor to every roast. Dense light-roast lots, darker profiles, sample roasts, cleaning loss, and production variance can give different usable yields.
      </p>

      <div className='bg-green-50 border border-green-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3'>Green Requirement Formula</h4>
        <p className='font-inconsolata text-sm'>Required green kg = forecast roasted kg / historical roasted yield</p>
        <p className='text-sm text-gray-700 mt-3'>If a SKU must deliver 850 kg roasted and its trailing yield is 85%, the purchasing model needs 1,000 kg green before any safety stock is added.</p>
      </div>

      <p className='my-4'>
        Build a rolling 13-week forecast because it is long enough to expose an origin replenishment gap and short enough to update from live orders. Start with committed wholesale orders, subscriptions, and standing café demand. Add a baseline for uncommitted sales, then show promotions, new accounts, and seasonal events as separate adjustments. This preserves the reason behind each change instead of hiding it in one optimistic total.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Forecast Layer</th>
              <th className='p-3 text-left font-bold'>Evidence</th>
              <th className='p-3 text-left font-bold'>Inventory Treatment</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Committed demand</td>
              <td className='p-3'>Open wholesale orders, subscriptions, signed programs</td>
              <td className='p-3'>Reserve component volume immediately</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Baseline demand</td>
              <td className='p-3'>Recent weekly sales, corrected for stockouts and one-off orders</td>
              <td className='p-3'>Use as the core run rate</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Known uplift</td>
              <td className='p-3'>Promotions, new locations, holidays, signed customer launches</td>
              <td className='p-3'>Add only for named dates and owners</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Uncertain pipeline</td>
              <td className='p-3'>Unwon accounts, proposed listings, unconfirmed events</td>
              <td className='p-3'>Scenario only, not committed purchasing demand</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        Translate blend sales after the green conversion. If an espresso uses 35% Ethiopian coffee, apply 35% to the green requirement for that SKU, not to its packaged roasted weight. This sequence keeps roast loss visible and prevents a component shortage from being masked by total green stock belonging to other products.
      </p>

      <h3 id='reorder-point' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineCalculator className='w-8 h-8 text-amber-600' />
        3. Calculate the Reorder Point and Safety Stock
      </h3>
      <p className='my-4'>
        The reorder point is the inventory position at which a buyer must act so new coffee becomes usable before existing coverage is exhausted. Multiply expected weekly consumption by the full replenishment lead time, then add safety stock for demand error and schedule variation. Use an end-to-end lead time, not ocean transit alone.
      </p>

      <div className='grid md:grid-cols-2 gap-4 my-6'>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Lead-Time Demand</h4>
          <p className='text-sm text-gray-700'>Average weekly use multiplied by the weeks from buying approval to usable warehouse release. Review the assumption by route, contract type, and crop stage.</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Safety Stock</h4>
          <p className='text-sm text-gray-700'>A buffer for forecast error and replenishment variation. Start with average weekly use multiplied by chosen buffer weeks, then revise it from actual misses and service risk.</p>
        </div>
      </div>

      <p className='my-4'>
        Set the buffer from evidence. A stable blend component with contracted demand and variable ocean schedules may need more time protection than a limited single origin whose menu can close when the lot sells out. Record why the buffer exists. Otherwise, safety stock becomes an unexplained number that only increases after a shortage and never decreases after reliability improves.
      </p>
      <p className='my-4'>
        Calculate the point for each critical component. Ten tonnes of assorted green coffee do not protect a house blend if its Ethiopian component has two weeks of cover. Component-level control is especially important when several roasted SKUs draw from the same lot.
      </p>

      <h3 id='stock-roles' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineArrowPath className='w-8 h-8 text-amber-600' />
        4. Give Every Lot an Inventory Role
      </h3>
      <p className='my-4'>
        Every green lot should serve a named role: core continuity, seasonal campaign, approved bridge, or limited release. The role determines how the buyer forecasts it, whether a stockout is acceptable, and when substitute approval must begin. One policy across all coffees either overfunds seasonal stock or underprotects core blends.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Inventory Role</th>
              <th className='p-3 text-left font-bold'>Control Rule</th>
              <th className='p-3 text-left font-bold'>Buyer Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Core blend component</td>
              <td className='p-3'>Protect service with a reorder point and approved bridge profile</td>
              <td className='p-3'>Review weekly; start replacement cupping before the current lot closes</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Seasonal single origin</td>
              <td className='p-3'>Buy to a defined campaign quantity and end date</td>
              <td className='p-3'>Do not create permanent safety stock for a finite menu slot</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Approved bridge</td>
              <td className='p-3'>Hold a sensory function, not an identical origin label</td>
              <td className='p-3'>Pre-approve cup and roast fit before the primary lot reaches risk cover</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Limited micro-lot</td>
              <td className='p-3'>Allocate by campaign, wholesale account, or release batch</td>
              <td className='p-3'>Close sales when allocable stock reaches zero</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        Buyers often ask an exporter for the &quot;same Ethiopian profile&quot; after the replacement decision is already urgent. At origin, a more workable brief states the coffee&apos;s job in the product, the must-keep sensory attributes, the attributes that can move, the acceptable process, and the needed arrival window. That gives the sourcing network time to present bridge candidates while the buyer can still cup deliberately.
      </p>

      <h3 id='ethiopia-clock' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineTruck className='w-8 h-8 text-amber-600' />
        5. Build the Ethiopia Replenishment Clock
      </h3>
      <p className='my-4'>
        An Ethiopian replenishment clock should start at internal buying approval and end when the warehouse releases accepted coffee to production. Ethio Coffee&apos;s standard planning range is typically 8 to 14 weeks from contract to warehouse, depending on destination. Your model should retain the actual duration of every stage so the next calculation uses observed performance rather than memory.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Milestone</th>
              <th className='p-3 text-left font-bold'>Planning Question</th>
              <th className='p-3 text-left font-bold'>Evidence to Record</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Allocation and sample</td>
              <td className='p-3'>Is the lot identified and available in the required volume?</td>
              <td className='p-3'>Offer, sample code, quantity, crop, approval deadline</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Contract and preparation</td>
              <td className='p-3'>Are commercial terms final, and when is milling or bagging booked?</td>
              <td className='p-3'>Signed contract, payment gate, preparation date</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>PSS release</td>
              <td className='p-3'>Has the pre-shipment sample passed the written specification?</td>
              <td className='p-3'>Approval status, cup date, exceptions, release owner</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Export and vessel</td>
              <td className='p-3'>Is the shipment cleared and loaded against a confirmed booking?</td>
              <td className='p-3'>Container, vessel, bill of lading, departure and ETA</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Arrival and release</td>
              <td className='p-3'>When can accepted coffee enter the roast schedule?</td>
              <td className='p-3'>Customs release, warehouse receipt, arrival QC decision</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        For the stage-by-stage export workflow, use the <Link href='/insights/ethiopian-coffee-export-process-buyers-guide' className='text-amber-700 hover:underline font-bold'>Ethiopian coffee export process guide</Link>. Use the <Link href='/insights/ethiopian-coffee-harvest-calendar-buying-guide' className='text-amber-700 hover:underline font-bold'>harvest calendar</Link> to place sourcing and sample activity before the desired arrival date. The inventory page should store the resulting dates, not repeat the underlying logistics instructions.
      </p>

      <div className='border-l-4 border-amber-500 pl-6 bg-gray-50 p-4 my-6'>
        <p className='text-sm text-gray-700'>
          <strong>2026 supply context:</strong> The <a href='https://apps.fas.usda.gov/newgainapi/api/Report/DownloadReportByFileName?fileName=Coffee+Annual_Addis+Ababa_Ethiopia_ET2026-0005.pdf' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>USDA Foreign Agricultural Service Coffee Annual published in May 2026</a> forecasts Ethiopia&apos;s 2026/27 production at 12.10 million 60 kg bags and exports at 7.13 million bags. National volume growth does not guarantee availability of a particular grade, process, washing station, or delivery month. Plan the named supply requirement, not the national headline.
        </p>
      </div>

      <h3 id='cash-freshness' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineBanknotes className='w-8 h-8 text-amber-600' />
        6. Set Cash and Freshness Guardrails
      </h3>
      <p className='my-4'>
        A valid reorder point still needs two limits: how much working capital the business can fund and how old the coffee may become before it is roasted. Treat both as explicit constraints in the buying review. More stock can improve service protection while simultaneously increasing cash exposure and the share of coffee that reaches an unwanted age band.
      </p>

      <div className='grid md:grid-cols-2 gap-4 my-6'>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Cash Guardrail</h4>
          <p className='text-sm text-gray-700'>Track open contract value, inventory value on hand, due payment dates, and landed-cost exposure. Connect the physical plan to the <Link href='/insights/green-coffee-financing-hedging-importers-guide' className='text-amber-700 hover:underline'>green coffee financing guide</Link> instead of treating approved volume as free capacity.</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Freshness Guardrail</h4>
          <p className='text-sm text-gray-700'>Show projected lot age at final roast, not only age on receipt. Use the <Link href='/insights/green-coffee-shelf-life-storage-guide' className='text-amber-700 hover:underline'>green coffee shelf-life guide</Link> for packaging, storage, and quality-monitoring limits.</p>
        </div>
      </div>

      <p className='my-4'>
        Price movement adds a reason to review the plan, but not a reason to abandon it. The <a href='https://ico.org/resources/coffee-market-report-statistics-section/' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>International Coffee Organization&apos;s May 2026 market report</a> placed the ICO Composite Indicator Price at 256.05 US cents per pound, down 3.8% from April 2026. A monthly move can change the cash required for the same physical coverage. Keep quantity, timing, and price assumptions in separate fields so the team can see which variable changed.
      </p>
      <p className='my-4'>
        Use staggered deliveries or scheduled shipment windows when the contract size exceeds practical warehouse cover. Ethio Coffee can discuss harvest allocations and staged shipments; the <Link href='/ordering-info' className='text-amber-700 hover:underline font-bold'>ordering information page</Link> explains the commercial workflow. Any schedule still needs contract-specific confirmation.
      </p>

      <h3 id='case-study' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineCalculator className='w-8 h-8 text-amber-600' />
        7. Worked Roaster Inventory Case
      </h3>
      <p className='my-4'>
        Consider a multi-location roaster forecasting 4,000 kg of roasted sales per month. Its recorded yield is 85%, and Ethiopian coffee supplies 35% of green demand across a core espresso and one wholesale SKU. With 12 weeks of replenishment lead time and four weeks of safety stock, the Ethiopian component reaches a reorder point of about 6.1 metric tons.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Step</th>
              <th className='p-3 text-left font-bold'>Calculation</th>
              <th className='p-3 text-left font-bold'>Result</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Monthly green requirement</td>
              <td className='p-3'>4,000 kg roasted / 0.85 yield</td>
              <td className='p-3'>4,706 kg green</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Ethiopian monthly requirement</td>
              <td className='p-3'>4,706 kg x 35%</td>
              <td className='p-3'>1,647 kg</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Average weekly use</td>
              <td className='p-3'>1,647 kg / 4.33 weeks</td>
              <td className='p-3'>380 kg</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Lead-time demand</td>
              <td className='p-3'>380 kg x 12 weeks</td>
              <td className='p-3'>4,560 kg</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Safety stock</td>
              <td className='p-3'>380 kg x 4 weeks</td>
              <td className='p-3'>1,520 kg</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Reorder point</td>
              <td className='p-3'>4,560 kg + 1,520 kg</td>
              <td className='p-3'>6,080 kg</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        The roaster has 3,900 kg usable on hand, 2,800 kg in confirmed inbound supply, and 900 kg allocated to open wholesale commitments. Its inventory position is 5,800 kg. Because that is 280 kg below the 6,080 kg reorder point, the buying decision is due now even though physical stock still looks comfortable.
      </p>
      <p className='my-4'>
        Annual Ethiopian demand in this scenario is about 19.8 metric tons. That output gives the buyer a commercial starting point, while shipment configuration, bag count, and feasible releases belong in the <Link href='/insights/minimum-order-quantities-ethiopian-coffee-moq' className='text-amber-700 hover:underline font-bold'>Ethiopian coffee MOQ guide</Link> and the supplier discussion. The calculation does not automatically mean the buyer should receive the entire annual quantity at once.
      </p>

      <h3 id='dashboard' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineClock className='w-8 h-8 text-amber-600' />
        8. Run a Weekly Buyer Dashboard
      </h3>
      <p className='my-4'>
        A weekly dashboard should surface the few conditions that require a buying action. Show each critical lot or component on one row, calculate its coverage from the latest use rate, and assign an owner to every exception. A long inventory export without decision thresholds is a record, not a control system.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Dashboard Field</th>
              <th className='p-3 text-left font-bold'>Decision It Supports</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'><td className='p-3 font-semibold'>Usable kg and weeks of cover</td><td className='p-3'>Shows the physical runway at the current demand rate</td></tr>
            <tr className='border-b border-gray-200 bg-gray-50'><td className='p-3 font-semibold'>Inventory position</td><td className='p-3'>Adds reliable inbound supply and removes allocations or holds</td></tr>
            <tr className='border-b border-gray-200'><td className='p-3 font-semibold'>Reorder point and trigger date</td><td className='p-3'>Signals when a buyer must approve the next action</td></tr>
            <tr className='border-b border-gray-200 bg-gray-50'><td className='p-3 font-semibold'>Projected run-out date</td><td className='p-3'>Connects supply risk to the roast and sales calendar</td></tr>
            <tr className='border-b border-gray-200'><td className='p-3 font-semibold'>Inbound milestone and confidence</td><td className='p-3'>Separates booked, shipped, arrived, and quality-released coffee</td></tr>
            <tr className='border-b border-gray-200 bg-gray-50'><td className='p-3 font-semibold'>Forecast error</td><td className='p-3'>Shows whether the buffer and demand model need revision</td></tr>
            <tr className='border-b border-gray-200'><td className='p-3 font-semibold'>Projected age at final roast</td><td className='p-3'>Flags excess coverage before quality or campaign value fades</td></tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        Send suppliers a concise forward view even when it is not yet an order: expected kilograms by delivery month, coffee role, grade or cup requirement, process, certification, sample deadline, and confidence level. From an exporter&apos;s side, a rolling forecast makes it easier to distinguish ready stock from coffee that needs harvest allocation or a dry-mill slot. It does not reserve supply until commercial terms are agreed.
      </p>

      <h3 id='implementation' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineCalendarDays className='w-8 h-8 text-amber-600' />
        9. Implement the System in 90 Days
      </h3>
      <p className='my-4'>
        Implement the model in three operating cycles: establish clean consumption data, add replenishment logic, then manage exceptions on a fixed cadence. Software can automate transactions later, but it cannot repair unclear definitions for usable stock, confirmed inbound supply, or committed demand.
      </p>

      <div className='grid md:grid-cols-3 gap-4 my-6'>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Days 1 to 30</h4>
          <p className='text-sm text-gray-700'>Reconcile lots and locations. Capture actual roast yield by SKU. Map every product to its green components. Define usable, blocked, allocated, and inbound status.</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Days 31 to 60</h4>
          <p className='text-sm text-gray-700'>Build the 13-week forecast. Classify inventory roles. Measure actual supplier and route lead times. Set initial buffer weeks and exception thresholds.</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Days 61 to 90</h4>
          <p className='text-sm text-gray-700'>Run weekly reviews. Issue a forward supplier brief. Record forecast error and milestone misses. Adjust reorder points only from observed demand or lead-time changes.</p>
        </div>
      </div>

      <p className='my-4'>
        Green coffee inventory management becomes reliable when the same numbers drive sales commitments, roast planning, sourcing, cash review, and supplier communication. Forecast the roasted need, translate it into component-level green demand, count only dependable supply, and trigger buying before the risk reaches production. That discipline gives Ethiopian coffee enough time to move from a sourcing relationship at origin into an accepted lot in the roastery.
      </p>

      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Turn Your Roaster Forecast into an Ethiopian Coffee Plan</h4>
        <p className='my-2'>Share your required origin, cup profile, monthly green use, and target delivery window. We can match the brief to current offerings, arrange samples, and discuss an order schedule that supports your inventory plan.</p>
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

      <h3 id='faq' className='text-2xl font-extrabold mt-12 mb-4'>
        10. Frequently Asked Questions
      </h3>
      <section className='mb-12 bg-gray-50 rounded-xl p-8 border border-gray-200'>
        <div className='space-y-6'>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>How much green coffee inventory should a roaster hold?</h4>
            <p className='text-sm text-gray-600'>Set the target from lead-time demand plus safety stock, not a universal number of months. A roaster using 380 kg of one component each week, facing 12 replenishment weeks, and carrying four buffer weeks reaches a 6,080 kg reorder point. Then cap stock by cash, storage, and acceptable age.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>How do you calculate a green coffee reorder point?</h4>
            <p className='text-sm text-gray-600'>Multiply average green coffee use per week by the full replenishment lead time, then add safety stock. Compare that result with inventory position, defined as usable on-hand coffee plus confirmed inbound supply minus committed or blocked stock. Trigger the buying action when inventory position reaches or falls below the calculated point.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Does contracted coffee in transit count as inventory?</h4>
            <p className='text-sm text-gray-600'>Count a contracted shipment in inventory position only as confirmed inbound supply, never as usable on-hand stock. Record its quantity, quality approval, current milestone, and confidence separately. If the pre-shipment sample, export release, or vessel booking is unresolved, discount it or exclude it until the blocking gate has cleared.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>How should a roaster prevent a core blend component from running out?</h4>
            <p className='text-sm text-gray-600'>Control each critical blend component with its own forecast, reorder point, and approved bridge profile. Start replacement cupping while the current component still has adequate cover. Define the sensory function that must remain stable, then approve an alternate lot before urgency forces the production team to accept an untested substitution.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>How often should a green coffee inventory plan be updated?</h4>
            <p className='text-sm text-gray-600'>Update inventory transactions as they occur, review critical coverage weekly, and rebuild the rolling forecast at least monthly. Recalculate sooner after a major wholesale win, promotion, shipment delay, quality hold, or demand miss. Keep the prior forecast so the buyer can measure error instead of continually replacing the evidence.</p>
          </div>
        </div>
      </section>

      <div className='my-10 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4'>Related Articles</h3>
        <div className='grid md:grid-cols-2 gap-4'>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Planning &amp; Contracts</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/ethiopian-coffee-harvest-calendar-buying-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Harvest Calendar for Buyers</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-contracts-payment-terms-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Contracts &amp; Payment Terms Guide</Link></li>
              <li>&bull; <Link href='/insights/minimum-order-quantities-ethiopian-coffee-moq' className='text-amber-700 hover:underline'>Ethiopian Coffee MOQ Guide for Importers</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-offer-sheet-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Offer Sheet Guide</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Cost &amp; Market Risk</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/green-coffee-financing-hedging-importers-guide' className='text-amber-700 hover:underline'>Green Coffee Price Hedging Guide</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-landed-cost-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Landed Cost Guide</Link></li>
              <li>&bull; <Link href='/insights/coffee-c-market-explained-for-ethiopian-coffee-buyers' className='text-amber-700 hover:underline'>Coffee C Market Explained for Buyers</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Quality &amp; Execution</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/green-coffee-shelf-life-storage-guide' className='text-amber-700 hover:underline'>Green Coffee Shelf Life and Storage</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-sample-approval-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Sample Approval Guide</Link></li>
              <li>&bull; <Link href='/insights/green-coffee-shipping-documents-checklist' className='text-amber-700 hover:underline'>Green Coffee Shipping Documents Checklist</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> Written by Ethio Coffee Import and Export PLC, an origin-connected Ethiopian coffee exporter with three decades of sourcing relationships across Yirgacheffe, Sidamo, Guji, Harar, Limu, and Jimma. Published {date}.
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
