import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import {
  HiOutlineArrowTrendingUp,
  HiOutlineBuildingOffice,
  HiOutlineCheckCircle,
  HiOutlineClipboardDocumentList,
  HiOutlineCurrencyDollar,
  HiOutlineDocumentText,
  HiOutlineGlobeAlt,
  HiOutlineLightBulb,
  HiOutlineMapPin,
  HiOutlineScale,
  HiOutlineTruck,
  HiOutlineUsers,
} from 'react-icons/hi2'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function ImportingEthiopianCoffeeToMalaysia({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        How to import Ethiopian coffee to Malaysia with MAQIS permits, Port Klang routing, and buyer strategy for specialty roasters, distributors, and regional traders
      </h2>

      <figure>
        <figcaption className='font-inconsolata my-2'>{title}</figcaption>
        <div className='w-full aspect-[5/3] overflow-hidden rounded-md bg-gray-200 flex items-center justify-center'>
          {/* TODO: Replace placeholder with actual hero image */}
          {/* Expected path: /images/insights/importing-ethiopian-coffee-to-malaysia.webp */}
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Import Ethiopian coffee to Malaysia through Port Klang with MAQIS permit workflow and green coffee sourcing strategy'
            fill
            objectFit='cover'
            className='w-full h-full'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>
      </figure>

      <div className='my-4 text-sm bg-amber-50 p-4 rounded-lg border border-amber-200'>
        <span className='font-semibold'>Category:</span>
        <span className='ml-2'>Import Guide / Malaysia Market / Ethiopian Coffee Export / ASEAN Buyer Strategy</span>
      </div>

      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-8 border border-amber-200'>
        <h3 className='font-bold text-xl mb-3 flex items-center gap-2'>
          <HiOutlineLightBulb className='text-amber-400 flex-shrink-0' />Key Takeaway
        </h3>
        <p className='text-sm leading-relaxed'>
          To import Ethiopian coffee to Malaysia, buyers need to decide three things before they book freight: whether the shipment is entering Peninsular Malaysia or East Malaysia, whether the volume justifies direct import instead of buying through a local trader, and whether the inventory will move straight into roasting or into staged distribution. TrendEconomy&apos;s 2023 customs compilation shows Malaysia imported US$721 million of coffee, tea, mate, and spices, with coffee alone accounting for US$294 million and Ethiopia supplying US$12.2 million. That is enough demand to justify a direct Ethiopia-Malaysia lane, but it is still a specialty niche. The buyers who win are the ones who pair MAQIS permit discipline with careful sample approval, not the ones who simply chase the lowest FOB quote.
        </p>
      </div>

      <div className='my-8 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <HiOutlineClipboardDocumentList className='text-amber-600' /> In This Guide
        </h3>
        <ol className='space-y-2 text-sm'>
          <li><a href='#market-fit' className='text-amber-700 hover:underline'>1. Why Malaysia Is a High-Value Niche for Ethiopian Coffee</a></li>
          <li><a href='#regional-route' className='text-amber-700 hover:underline'>2. Peninsular Malaysia Is Not Sabah or Sarawak</a></li>
          <li><a href='#permit-workflow' className='text-amber-700 hover:underline'>3. How to Import Ethiopian Coffee to Malaysia</a></li>
          <li><a href='#documents' className='text-amber-700 hover:underline'>4. Document Stack and Quality Controls</a></li>
          <li><a href='#shipment-design' className='text-amber-700 hover:underline'>5. Port Klang Shipment Design and Inventory Models</a></li>
          <li><a href='#cost-discipline' className='text-amber-700 hover:underline'>6. Classification, Duty Assumptions, and Margin Discipline</a></li>
          <li><a href='#buyer-playbooks' className='text-amber-700 hover:underline'>7. Buyer Playbooks for Malaysian Roasters and Distributors</a></li>
          <li><a href='#faq' className='text-amber-700 hover:underline'>8. Frequently Asked Questions</a></li>
        </ol>
      </div>

      <p className='text-lg leading-relaxed my-4'>
        If you want to <span className='font-bold'>import Ethiopian coffee to Malaysia</span>, the first question is not whether the paperwork exists. It is whether direct import is the right commercial move for your volume, freshness target, and sales channel. Malaysia already imports meaningful coffee value, but Ethiopian coffee is still a relatively small share of that spend. That creates an attractive opening for roasters and distributors who want differentiation without competing head-on with mainstream commodity supply.
      </p>

      <p className='my-4'>
        TrendEconomy&apos;s 2023 customs compilation shows Malaysia imported US$721 million in chapter 09 products, with coffee under HS 0901 accounting for roughly US$294 million. China, India, Indonesia, Vietnam, and Brazil dominate the supplier list, while Ethiopia supplied US$12.2 million, or about 1.69% of the category. That is the core commercial signal. Ethiopia is already relevant in Malaysia, but it is still underrepresented enough to stay distinctive on specialty menus, hotel beverage programs, and premium retail shelves.
      </p>

      <p className='my-4'>
        This article focuses on the Malaysia side of the transaction: route selection, permit workflow, practical document control, and the buyer models that make direct sourcing sensible. For Ethiopia-side preparation, see our <Link href='/insights/ethiopian-coffee-sample-approval-guide' className='text-amber-700 hover:underline'>sample approval guide</Link>, our <Link href='/insights/ethiopian-coffee-landed-cost-guide' className='text-amber-700 hover:underline'>landed cost guide</Link>, and our <Link href='/insights/green-coffee-packaging-bag-types-guide' className='text-amber-700 hover:underline'>green coffee packaging guide</Link>.
      </p>

      <h3 id='market-fit' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineArrowTrendingUp className='w-8 h-8 text-amber-600' />
        1. Why Malaysia Is a High-Value Niche for Ethiopian Coffee
      </h3>

      <p className='my-4'>
        Malaysia is not the market to target if your product strategy depends on commodity Arabica volume. It is the market to target if you need one of three things: a differentiated single-origin menu offer, a specialty importer base concentrated around Kuala Lumpur and Selangor, or an ASEAN-adjacent distribution point that still rewards origin storytelling and lot-level precision.
      </p>

      <p className='my-4'>
        The data supports that niche reading. Malaysia imported US$294 million of coffee in 2023, yet Ethiopian supply was still well below Brazil at US$53 million and only modestly ahead of Guatemala at US$11.8 million. That means Ethiopian coffee is visible, but not saturated. A Malaysian buyer does not need Ethiopian coffee to replace Brazilian or Indonesian supply. It needs Ethiopian coffee to do a job those origins do not do as cleanly: floral filter offerings, fruit-led naturals, premium seasonal drops, and differentiated house blends.
      </p>

      <div className='grid md:grid-cols-2 gap-4 my-6'>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Where Direct Import Works</h4>
          <p className='text-sm text-gray-700'>
            Direct import works for Malaysian buyers who can plan demand three to six months out, approve samples quickly, and absorb the fixed effort of permits and freight. That usually means a serious roastery, a distributor with warehouse discipline, or a hospitality supply business that wants a repeatable Ethiopian line.
          </p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Where Local Traders Still Win</h4>
          <p className='text-sm text-gray-700'>
            If you are a micro-roaster buying short seasonal lots with no buffer stock, the local importer may still be the better choice. The margin you save by importing direct can disappear if the shipment sits at the port, misses your menu window, or arrives before you have approved the roast profile.
          </p>
        </div>
      </div>

      <div className='bg-blue-50 border border-blue-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3'>Buyer Persona: Kuala Lumpur Multi-Site Roaster</h4>
        <p className='text-sm text-gray-700'>
          Consider a Kuala Lumpur roaster running four retail sites, a wholesale arm, and an e-commerce subscription program. That buyer may need one washed <Link href='/ethiopian-coffee-yirgacheffe' className='text-amber-700 hover:underline'>Yirgacheffe</Link> for filter, one fruit-forward <Link href='/ethiopian-coffee-guji' className='text-amber-700 hover:underline'>Guji</Link> natural for espresso specials, and one flexible washed <Link href='/ethiopian-coffee-sidamo' className='text-amber-700 hover:underline'>Sidamo</Link> for recurring blends. For that model, direct sourcing can improve freshness control and menu differentiation because the buyer is using the coffee across multiple channels, not betting the business on one slow-moving SKU.
        </p>
      </div>

      <h3 id='regional-route' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineMapPin className='w-8 h-8 text-amber-600' />
        2. Peninsular Malaysia Is Not Sabah or Sarawak
      </h3>

      <p className='my-4'>
        One of the easiest ways to delay a coffee shipment is to treat Malaysia as one uniform import regime. It is not. The World Trade Organization&apos;s 2024 licensing notice makes the split explicit: Peninsular Malaysia and Labuan run through MAQIS, while Sabah and Sarawak use their own agriculture departments and online application paths. That matters because your importer record, permit timing, and point-of-entry assumptions all change with the route.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Arrival Zone</th>
              <th className='p-3 text-left font-bold'>Lead Authority</th>
              <th className='p-3 text-left font-bold'>Online Path</th>
              <th className='p-3 text-left font-bold'>Indicative Processing Time</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Peninsular Malaysia and Labuan</td>
              <td className='p-3'>MAQIS under the MAQIS Act 2011 and related plant quarantine rules</td>
              <td className='p-3'>MAQIS registration plus ePermit filing before departure</td>
              <td className='p-3'>Within 5 working days, provided the goods have not yet arrived</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Sabah</td>
              <td className='p-3'>Department of Agriculture Sabah</td>
              <td className='p-3'>QIS application route for Sabah entries</td>
              <td className='p-3'>About 4 working days when documents are complete</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Sarawak</td>
              <td className='p-3'>Department of Agriculture Sarawak</td>
              <td className='p-3'>Sarawak online permit path through the same service-provider ecosystem</td>
              <td className='p-3'>About 3 working days</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        That regional distinction changes the commercial answer. A Selangor-based distributor serving cafes across the peninsula will usually want Port Klang or another peninsular entry point and a MAQIS-centered workflow. A roaster based in Kota Kinabalu or Kuching should not assume the peninsular process maps cleanly to its shipments. Route choice is part of the sourcing strategy, not a detail to settle after the contract is signed.
      </p>

      <h3 id='permit-workflow' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineBuildingOffice className='w-8 h-8 text-amber-600' />
        3. How to Import Ethiopian Coffee to Malaysia
      </h3>

      <p className='my-4'>
        The current formal workflow is more structured than a lot of older trade commentary suggests. Earlier commercial articles about Malaysia often describe green coffee import as a slow, quota-heavy process. The more current WTO licensing notice instead frames it as a non-quantitative biosecurity system: apply before the goods depart, obtain the import permit, and present the required phytosanitary document on arrival. In practice, the friction is still real, but it comes from poor preparation rather than from a hidden quota system.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Step</th>
              <th className='p-3 text-left font-bold'>What the Buyer Does</th>
              <th className='p-3 text-left font-bold'>Why It Matters</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>1. Register the importing party</td>
              <td className='p-3'>Register as importer, exporter, or agent through the MAQIS onboarding path and complete the registration form requirements.</td>
              <td className='p-3'>Without the correct importer identity, the permit workflow cannot move.</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>2. Set up the filing tools</td>
              <td className='p-3'>Use the MAQIS SPEED system for the initial account setup and file the actual permit request through Malaysia&apos;s ePermit environment.</td>
              <td className='p-3'>This is what connects the buyer, the approving agency, and customs validation.</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>3. Apply before cargo departure</td>
              <td className='p-3'>Submit the import permit request before the coffee leaves origin, not when the vessel is already en route.</td>
              <td className='p-3'>The permit copy needs to reach the exporter and the quarantine authority in time to shape the document stack.</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>4. Align exporter documents</td>
              <td className='p-3'>Send the permit conditions to the Ethiopian exporter so the phytosanitary certificate, lot details, and shipment paperwork match the permit.</td>
              <td className='p-3'>This is where most avoidable mismatches happen.</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>5. Clear inspection and customs</td>
              <td className='p-3'>Present the permit, phytosanitary certificate, and commercial documents at entry for MAQIS and customs review.</td>
              <td className='p-3'>The shipment is only as fast as the weakest document in the file.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        The official path is clear on two points. First, the permit should be obtained before importation and before the goods arrive. Second, the importer needs the permit early enough to send it back to the exporter for quarantine arrangements at origin. That is why the commercial sequence matters: approve the sample first, finalize the lot second, then apply for the permit against an actual shipment plan.
      </p>

      <div className='border-l-4 border-amber-500 pl-6 bg-gray-50 p-4 my-6'>
        <p className='text-sm text-gray-700'>
          <span className='font-semibold'>Verified sources:</span> MAQIS explains the importer registration and portal handoff on its <a href='https://www.maqis.gov.my/index.php/permohonan-permit/' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>permit application page</a>. The WTO licensing notice describes the current plant-product permit system, including the expectation that applications are filed before departure, the approximate processing windows, the phytosanitary certificate requirement, and the RM15 permit fee for each consignment.
        </p>
      </div>

      <h3 id='documents' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineDocumentText className='w-8 h-8 text-amber-600' />
        4. Document Stack and Quality Controls
      </h3>

      <p className='my-4'>
        Malaysian buyers benefit when they treat document control and cup-quality control as one system. If the lot is worth importing, it is worth documenting properly. That means the paperwork should reinforce the quality logic of the purchase: exact lot identity, packaging format, weight, and condition on departure should all line up with the approved sample and the importer&apos;s permit file.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Document</th>
              <th className='p-3 text-left font-bold'>Why Malaysian Buyers Need It</th>
              <th className='p-3 text-left font-bold'>Best Practice</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Import permit</td>
              <td className='p-3'>This is the gating document for entry and inspection.</td>
              <td className='p-3'>Apply before departure and send the permit copy to origin immediately.</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Phytosanitary certificate</td>
              <td className='p-3'>Required on importation for plant products under the Malaysian licensing regime.</td>
              <td className='p-3'>Make sure the certificate language and product description match the shipment.</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Commercial invoice and packing list</td>
              <td className='p-3'>These anchor customs value, bag count, and consignee details.</td>
              <td className='p-3'>Do not let bag weights, lot names, or consignee names drift from the permit record.</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Bill of lading</td>
              <td className='p-3'>Controls release and port handling.</td>
              <td className='p-3'>Use consistent consignee formatting and confirm transshipment details before sailing.</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Lot quality sheet</td>
              <td className='p-3'>This protects the buyer when the coffee arrives and cupping begins.</td>
              <td className='p-3'>Record moisture, screen size, processing method, grade, and defect tolerance against the approved sample.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        This is also why sample approval matters earlier than many buyers think. The permit gets the coffee into Malaysia, but the sample approval logic determines whether the coffee still makes commercial sense after clearance. If you are building a first direct-import lane, use a documented pre-shipment sample workflow and spell out the acceptable variance in your contract. Our <Link href='/insights/green-coffee-quality-claims-guide' className='text-amber-700 hover:underline'>quality claims guide</Link> and <Link href='/insights/ethiopian-coffee-screen-size-guide' className='text-amber-700 hover:underline'>screen-size guide</Link> can help tighten that control.
      </p>

      <div className='bg-green-50 border border-green-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3'>The Real Risk for Malaysian Buyers</h4>
        <p className='text-sm text-gray-700'>
          The biggest commercial risk is usually not outright permit refusal. It is a technically compliant shipment that arrives late, lands with weak document discipline, and then underperforms the approved sample. Malaysian buyers often operate on tight roast calendars and short menu windows. A two-week delay or a poorly documented lot can wipe out the margin advantage of importing direct.
        </p>
      </div>

      <h3 id='shipment-design' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineTruck className='w-8 h-8 text-amber-600' />
        5. Port Klang Shipment Design and Inventory Models
      </h3>

      <p className='my-4'>
        Port Klang is the natural operating center for many Malaysian buyers because it supports customs handling, warehousing, and onward distribution into the Klang Valley. The more important point, however, is not the port itself. It is matching the shipment design to the buyer model. Importers lose money when they choose the freight format first and only later ask how the coffee will actually move through the business.
      </p>

      <div className='grid md:grid-cols-2 gap-4 my-6'>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>LCL Trial Lot</h4>
          <p className='text-sm text-gray-700'>
            Best for a first direct relationship or a roaster testing one Ethiopian lot at commercial scale. LCL lowers commitment, but the buyer needs stronger packaging, tighter moisture control, and faster post-arrival handling because smaller consignments can accumulate more handling risk.
          </p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Shared Container or Group Buy</h4>
          <p className='text-sm text-gray-700'>
            Best for micro-roasters that want direct-origin access without carrying a full container alone. This model only works when one party owns document control and everyone agrees on delivery, inland split costs, and quality liability before the vessel sails.
          </p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Dedicated FCL</h4>
          <p className='text-sm text-gray-700'>
            Best for distributors, multi-site roasters, and hospitality suppliers with planned throughput. Once the buyer has repeat demand, FCL usually improves landed economics, simplifies storage planning, and gives cleaner lot continuity across multiple sales channels.
          </p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Regional Redistribution</h4>
          <p className='text-sm text-gray-700'>
            Best when Malaysia is not the only end market. If the importer intends to resell into nearby ASEAN channels, the shipment should be designed around batch control, staged release, and warehouse discipline rather than around a single roasting calendar.
          </p>
        </div>
      </div>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Model</th>
              <th className='p-3 text-left font-bold'>Commercial Advantage</th>
              <th className='p-3 text-left font-bold'>Main Failure Point</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>LCL</td>
              <td className='p-3'>Low initial commitment and faster learning cycle</td>
              <td className='p-3'>Handling damage, slower consolidation, and weak moisture discipline</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Shared container</td>
              <td className='p-3'>Direct-origin pricing without single-buyer container risk</td>
              <td className='p-3'>Disputes about ownership, inland split, and quality responsibility</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>FCL</td>
              <td className='p-3'>Better landed economics and cleaner stock planning</td>
              <td className='p-3'>Overbuying before the buyer has repeat turnover</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Regional stockholding</td>
              <td className='p-3'>Enables staged release across multiple markets</td>
              <td className='p-3'>Working capital drift if inventory moves slower than expected</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 id='cost-discipline' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineCurrencyDollar className='w-8 h-8 text-amber-600' />
        6. Classification, Duty Assumptions, and Margin Discipline
      </h3>

      <p className='my-4'>
        Green coffee normally sits in HS chapter 0901, with unroasted, non-decaffeinated coffee commonly discussed under the 0901.11 family. That classification is straightforward. The mistake is assuming the rest of the landed-cost math is equally simple. Malaysian buyers should validate the live tariff line and any import tax treatment in the <a href='https://ezhs.customs.gov.my/' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>JKDM HS Explorer</a> and confirm the result with their customs broker before they lock pricing.
      </p>

      <p className='my-4'>
        That caution is not academic. One Malaysian buyer may clear a standard green coffee lot with a clean agricultural import file and a straightforward customs declaration. Another may layer on extra inland handling, storage, inspection time, or tax assumptions because the cargo description, declared use, or consignee setup was not finalized early enough. A direct-import model only works when the landed-cost spreadsheet is built from the actual route and actual paperwork, not from a generic internet estimate.
      </p>

      <div className='grid md:grid-cols-2 gap-4 my-6'>
        <div className='bg-gray-50 border border-gray-200 rounded-lg p-5'>
          <h4 className='font-bold mb-2'>Margin Trap 1: Treating All Costs as Freight</h4>
          <p className='text-sm text-gray-700'>
            Buyers often focus on ocean freight and ignore permit timing, customs brokerage, inland trucking, warehouse handling, and financing cost while stock is waiting to be roasted or sold.
          </p>
        </div>
        <div className='bg-gray-50 border border-gray-200 rounded-lg p-5'>
          <h4 className='font-bold mb-2'>Margin Trap 2: Buying Too Much Too Early</h4>
          <p className='text-sm text-gray-700'>
            A full container can lower the per-kilo freight number and still be the wrong choice if your monthly sell-through does not justify the stockholding period.
          </p>
        </div>
        <div className='bg-gray-50 border border-gray-200 rounded-lg p-5'>
          <h4 className='font-bold mb-2'>Margin Trap 3: Ignoring Quality Decay Risk</h4>
          <p className='text-sm text-gray-700'>
            Green coffee loses value when storage, moisture management, and packaging are weak. The freight saving disappears quickly if the cup falls away before the lot is sold.
          </p>
        </div>
        <div className='bg-gray-50 border border-gray-200 rounded-lg p-5'>
          <h4 className='font-bold mb-2'>Margin Trap 4: Using the Wrong Buyer Model</h4>
          <p className='text-sm text-gray-700'>
            A distributor and a boutique roaster should not use the same shipment logic. The right landed cost is the one that matches your turnover speed and channel mix, not the one that looks cheapest on the first page of the quotation.
          </p>
        </div>
      </div>

      <h3 id='buyer-playbooks' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineUsers className='w-8 h-8 text-amber-600' />
        7. Buyer Playbooks for Malaysian Roasters and Distributors
      </h3>

      <p className='my-4'>
        The strongest Malaysian buyers usually fall into three operating models. Each model can import Ethiopian coffee successfully, but each should structure permits, shipment size, and quality approval differently.
      </p>

      <div className='space-y-6 my-8'>
        <div className='bg-amber-50 p-6 rounded-lg border border-amber-200'>
          <h4 className='font-bold text-xl mb-3 flex items-center gap-2'>
            <HiOutlineCheckCircle className='text-amber-700' /> Specialty Roaster Playbook
          </h4>
          <p className='text-sm text-gray-700'>
            Use this model if your main goal is menu differentiation. Start with one or two Ethiopian lots that solve specific menu roles, then build the import rhythm around sample approval, roast testing, and launch dates. Buyers using this model often benefit from LCL or carefully shared containers first, then move to larger direct imports once sell-through is visible.
          </p>
        </div>
        <div className='bg-gray-50 p-6 rounded-lg border border-gray-200'>
          <h4 className='font-bold text-xl mb-3 flex items-center gap-2'>
            <HiOutlineGlobeAlt className='text-amber-700' /> Distributor Playbook
          </h4>
          <p className='text-sm text-gray-700'>
            Use this model if you serve multiple cafes, offices, hotels, or resellers. The focus is not one signature menu item. It is stock continuity, clean lot documentation, and the ability to release inventory in stages. This is the model most likely to justify full-container planning and warehouse-based stock rotation.
          </p>
        </div>
        <div className='bg-gray-50 p-6 rounded-lg border border-gray-200'>
          <h4 className='font-bold text-xl mb-3 flex items-center gap-2'>
            <HiOutlineScale className='text-amber-700' /> East Malaysia or Group-Buy Playbook
          </h4>
          <p className='text-sm text-gray-700'>
            Use this model if your business is smaller or regionally distant from peninsular logistics. Here the win comes from route discipline and shared economics. Group buying can work, but only when one lead importer controls the document stack and the partners agree upfront on delivery schedule, warehousing, and claims handling.
          </p>
        </div>
      </div>

      <p className='my-4'>
        The broader market signal is encouraging. Ethiopia already has a measurable foothold in Malaysian import data, but it remains far from saturated. That is exactly why the opportunity exists for well-run direct importers. You are not entering a blank market, and you are not fighting for commodity share either. You are entering a market where disciplined buyers can still use Ethiopian coffee as a commercial differentiator.
      </p>

      <p className='my-4'>
        For buyers ready to <span className='font-bold'>import Ethiopian coffee to Malaysia</span>, the practical sequence is simple: choose the correct Malaysian entry route first, approve the lot second, then let the permit and freight plan follow the actual business model. That is the difference between an origin program that compounds and a shipment that turns into admin work.
      </p>

      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Build a Malaysia Import Program That Fits Your Sales Model</h4>
        <p className='my-2'>
          We help Malaysian buyers match Ethiopian lots to actual commercial use, from first sample approval through shipment planning, documentation, and repeat supply. If you need a washed lot for filter menus, a natural for retail differentiation, or a multi-lot program for distribution, we can help structure the lane correctly from origin.
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
            <h4 className='font-bold text-gray-800 mb-2'>Do Malaysian buyers need a MAQIS permit for Ethiopian green coffee?</h4>
            <p className='text-sm text-gray-600'>
              Buyers entering Peninsular Malaysia generally need the plant-product import permit route managed by MAQIS, with the application filed before the goods depart. On arrival, the shipment also needs the supporting phytosanitary certificate and aligned commercial documents. Sabah and Sarawak follow their own agriculture-department permit paths.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>How long does Malaysia usually take to approve the import permit?</h4>
            <p className='text-sm text-gray-600'>
              The WTO licensing notice indicates about five working days for Peninsular Malaysia when the goods have not yet arrived, with Sabah and Sarawak typically faster. Real delays usually come from incomplete registration, weak origin paperwork, or buyers applying after the shipment plan is already fixed.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Is direct import better than buying through a Malaysian green coffee trader?</h4>
            <p className='text-sm text-gray-600'>
              Direct import is usually better for buyers with predictable turnover, multiple sales channels, and enough volume to justify permit work and freight planning. Smaller roasters with irregular demand may still do better through a local trader until they have a repeat Ethiopian program and clearer inventory discipline.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Can Malaysian roasters split an Ethiopian shipment with other buyers?</h4>
            <p className='text-sm text-gray-600'>
              Yes, but shared shipments only work when one lead importer controls the permit file, document flow, and inland release plan. Without a single accountable party, group buys often fail on timing, warehousing, or claims handling rather than on the coffee itself.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>What is the most common mistake when importing Ethiopian coffee to Malaysia?</h4>
            <p className='text-sm text-gray-600'>
              The most common mistake is treating the permit as a last-minute admin step instead of part of the sourcing plan. Buyers should finalize the lot, route, and consignee setup early enough for the import permit, phytosanitary certificate, invoice, and packing list to align before departure.
            </p>
          </div>
        </div>
      </section>

      <div className='my-10 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4'>Related Articles</h3>
        <div className='grid md:grid-cols-2 gap-4'>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Market Entry</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/importing-ethiopian-coffee-to-singapore' className='text-amber-700 hover:underline'>Import Ethiopian Coffee to Singapore</Link></li>
              <li>&bull; <Link href='/insights/importing-ethiopian-coffee-to-india' className='text-amber-700 hover:underline'>Import Ethiopian Coffee to India</Link></li>
              <li>&bull; <Link href='/insights/importing-ethiopian-coffee-to-china' className='text-amber-700 hover:underline'>Import Ethiopian Coffee to China</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-landed-cost-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Landed Cost Guide</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Quality Control</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/ethiopian-coffee-sample-approval-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Sample Approval Guide</Link></li>
              <li>&bull; <Link href='/insights/green-coffee-quality-claims-guide' className='text-amber-700 hover:underline'>Green Coffee Quality Claims Guide</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-screen-size-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Screen Size Guide</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Logistics and Handling</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/green-coffee-packaging-bag-types-guide' className='text-amber-700 hover:underline'>Green Coffee Packaging: Bag Types and Buyer Guide</Link></li>
              <li>&bull; <Link href='/insights/green-coffee-moisture-content-water-activity-guide' className='text-amber-700 hover:underline'>Green Coffee Moisture Content and Water Activity Guide</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Origin Selection</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/yirgacheffe-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Yirgacheffe Coffee Sourcing Guide</Link></li>
              <li>&bull; <Link href='/insights/guji-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Guji Coffee Sourcing Guide</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-espresso-blend-sourcing-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee for Espresso Blends</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> Published {date}. Written by Ethio Coffee Import and Export PLC, an origin-connected Ethiopian coffee exporter working through trusted sourcing relationships with cooperatives, washing stations, and coffee-growing communities across Ethiopia.
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