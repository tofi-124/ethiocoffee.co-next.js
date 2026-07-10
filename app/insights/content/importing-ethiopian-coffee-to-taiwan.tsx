import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import {
  HiOutlineArrowTrendingUp,
  HiOutlineBuildingOffice,
  HiOutlineCheckCircle,
  HiOutlineClipboardDocumentList,
  HiOutlineCube,
  HiOutlineCurrencyDollar,
  HiOutlineDocumentText,
  HiOutlineGlobeAlt,
  HiOutlineLightBulb,
  HiOutlineMapPin,
  HiOutlineScale,
  HiOutlineShieldCheck,
  HiOutlineTruck,
  HiOutlineUsers,
} from 'react-icons/hi2'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function ImportingEthiopianCoffeeToTaiwan({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        TFDA compliance, APHIA quarantine workflow, Evergreen shipping routes, and landed cost breakdown for Taiwanese specialty roasters and importers
      </h2>

      <figure>
        <figcaption className='font-inconsolata my-2'>{title}</figcaption>
        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Kaohsiung port container terminal with vessels loading green coffee, relevant to importing Ethiopian coffee to Taiwan'
            fill
            objectFit='cover'
            className='w-full h-full'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>
      </figure>

      <div className='my-4 text-sm bg-amber-50 p-4 rounded-lg border border-amber-200'>
        <span className='font-semibold'>Category:</span>
        <span className='ml-2'>Import Guide / Taiwan Market / Ethiopian Coffee Export / Asia-Pacific Buyer Strategy</span>
      </div>

      {/* Key Takeaway */}
      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-8 border border-amber-200'>
        <h3 className='font-bold text-xl mb-3 flex items-center gap-2'>
          <HiOutlineLightBulb className='text-amber-400 flex-shrink-0' />Key Takeaway
        </h3>
        <p className='text-sm leading-relaxed'>
          Taiwan applies a 0% import tariff on unroasted green coffee (HS 0901.11), with a 5% business tax (VAT equivalent) levied on the CIF value. Every commercial green coffee shipment must clear three separate authorities in sequence: Taiwan Customs for duties and classification, TFDA (Taiwan Food and Drug Administration) for food safety registration and inspection, and APHIA (Animal and Plant Health Inspection Agency) for mandatory plant quarantine. Ethiopian green coffee requires a phytosanitary certificate from the Ethiopian Plant Protection Directorate before shipment departs Djibouti. Evergreen Marine, Taiwan&apos;s national carrier, operates direct Djibouti-to-Kaohsiung services via Singapore transshipment, typically reaching Taiwan in 25 to 33 days. Taiwan is not subject to the EU Deforestation Regulation, so EUDR due diligence is not required for this market.
        </p>
      </div>

      {/* Table of Contents */}
      <div className='my-8 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <HiOutlineClipboardDocumentList className='text-amber-600' /> In This Guide
        </h3>
        <ol className='space-y-2 text-sm'>
          <li><a href='#taiwan-coffee-market' className='text-amber-700 hover:underline'>1. Why Ethiopian Coffee Belongs in Taiwan&apos;s Specialty Market</a></li>
          <li><a href='#three-authorities' className='text-amber-700 hover:underline'>2. Three Authorities, Three Clearances: How Taiwan&apos;s System Works</a></li>
          <li><a href='#import-workflow' className='text-amber-700 hover:underline'>3. Step-by-Step Import Workflow</a></li>
          <li><a href='#document-stack' className='text-amber-700 hover:underline'>4. Document Stack for Ethiopian Green Coffee</a></li>
          <li><a href='#tariff-and-cost' className='text-amber-700 hover:underline'>5. Tariff Math: 0% Duty, 5% Business Tax</a></li>
          <li><a href='#shipping' className='text-amber-700 hover:underline'>6. Shipping from Djibouti to Kaohsiung and Keelung</a></li>
          <li><a href='#buyer-personas' className='text-amber-700 hover:underline'>7. How Different Taiwanese Buyers Approach Ethiopian Coffee</a></li>
          <li><a href='#faq' className='text-amber-700 hover:underline'>8. Frequently Asked Questions</a></li>
        </ol>
      </div>

      {/* Introduction */}
      <p className='text-lg leading-relaxed my-4'>
        Taiwan&apos;s specialty coffee scene is among Asia&apos;s most developed. With 4,824 standalone coffee shops as of November 2024 (up 42.5 percent since 2018) plus thousands of convenience-store coffee counters serving a population of 23.5 million, the island has one of Asia&apos;s highest cafe densities. Third-wave roasting culture took hold in Taipei in the early 2010s and has since spread to Taichung and Kaohsiung, creating a buyer base with sophisticated palates and strong origin literacy. Ethiopian coffee sits at the center of that culture. <span className='font-bold'>Importing Ethiopian coffee to Taiwan</span> connects an origin-connected exporter directly to roasters who understand and value the traceability, processing variety, and flavor complexity that Ethiopian lots provide.
      </p>
      <p className='my-4'>
        Green coffee enters Taiwan at 0% import duty. The compliance path is structured but manageable once you understand which authority handles what. This guide breaks down the regulatory sequence, the document requirements specific to Ethiopian origin coffee, the shipping logistics from Djibouti, and the landed cost math Taiwan roasters use to evaluate FOB offers.
      </p>

      {/* Section 1: Market Opportunity */}
      <h3 id='taiwan-coffee-market' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineArrowTrendingUp className='w-8 h-8 text-amber-600' />
        1. Why Ethiopian Coffee Belongs in Taiwan&apos;s Specialty Market
      </h3>

      <p className='my-4'>
        Taiwanese specialty roasters consistently prioritize Ethiopia, Ethiopia, and Ethiopia. The preference traces to flavor: floral, stone fruit, and citrus profiles that stand out clearly in light-roast filter brewing, the dominant format in Taiwan&apos;s specialty cafes. Yirgacheffe washed Grade 1 lots and Guji natural Grade 1 are the most cited Ethiopian origins in Taiwanese specialty menus; Sidamo and Bombe lots from the Bensa sub-district have also built a following among buyers who track micro-region distinctions.
      </p>
      <p className='my-4'>
        Taiwan&apos;s coffee import volume has grown consistently. Total coffee imports hit a record 52,600 metric tons in 2024, with green beans accounting for roughly 71 percent, approximately 37,000 metric tons (Taiwan customs data reported January 2025), and Africa-origin coffee is gaining share as the specialty segment expands. The country does not produce meaningful commercial coffee volumes, making it entirely import-dependent across all categories.
      </p>

      <div className='grid md:grid-cols-2 gap-4 my-6'>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Why Taiwan Favors Ethiopian Origins</h4>
          <ul className='text-sm text-gray-700 space-y-1'>
            <li>• Strong demand for floral, fruity filter profiles</li>
            <li>• High origin literacy among specialty buyers</li>
            <li>• Roasters publish origin provenance on retail packaging</li>
            <li>• Competition baristas frequently feature Yirgacheffe lots</li>
            <li>• Growing collector demand for CoE and micro-lot allocations</li>
          </ul>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Taiwan Market at a Glance</h4>
          <ul className='text-sm text-gray-700 space-y-1'>
            <li>• Population: 23.5 million</li>
            <li>• Standalone coffee shops: 4,824 (Nov 2024, up 42.5% since 2018)</li>
            <li>• Green coffee tariff: 0% (HS 0901.11)</li>
            <li>• Business tax (VAT): 5% on CIF</li>
            <li>• No EUDR requirement</li>
            <li>• Primary ports: Kaohsiung, Keelung</li>
          </ul>
        </div>
      </div>

      <p className='my-4'>
        Unlike the EU, Taiwan has no deforestation regulation equivalent to EUDR. Importers do not need to provide geolocation coordinates, due diligence statements, or EUDR operator declarations. Compliance focuses on food safety, plant quarantine, and standard customs procedures. For Ethiopian exporters already managing EUDR-bound EU shipments, Taiwan represents a comparatively straightforward market entry.
      </p>

      {/* Section 2: Three Authorities */}
      <h3 id='three-authorities' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineBuildingOffice className='w-8 h-8 text-amber-600' />
        2. Three Authorities, Three Clearances: How Taiwan&apos;s System Works
      </h3>

      <p className='my-4'>
        Most import markets use a single food safety regulator. Taiwan distributes responsibility across three agencies. Every green coffee shipment touches all three. Understanding which agency handles what prevents bottlenecks.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Authority</th>
              <th className='p-3 text-left font-bold'>Ministry</th>
              <th className='p-3 text-left font-bold'>Role for Green Coffee</th>
              <th className='p-3 text-left font-bold'>When It Acts</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Customs Administration</td>
              <td className='p-3'>Ministry of Finance</td>
              <td className='p-3'>Tariff classification, import duty assessment, cargo release</td>
              <td className='p-3'>On arrival, after documents submitted</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>TFDA</td>
              <td className='p-3'>Ministry of Health and Welfare</td>
              <td className='p-3'>Food safety registration, food business operator (FBO) status, contaminant and pesticide compliance</td>
              <td className='p-3'>Pre-arrival notification; inspection on arrival if triggered</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>APHIA</td>
              <td className='p-3'>Ministry of Agriculture</td>
              <td className='p-3'>Plant quarantine inspection of unroasted, non-decaffeinated coffee</td>
              <td className='p-3'>On arrival at port; original phytosanitary cert required</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='bg-blue-50 border border-blue-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3'>Key Regulatory Distinction: APHIA Quarantine</h4>
        <p className='text-sm text-gray-700'>
          Unroasted, non-decaffeinated green coffee beans are classified as a plant product subject to quarantine inspection under Taiwan&apos;s Plant Protection and Quarantine Act. APHIA handles this inspection at the port of entry. The Ethiopian exporter must provide an original phytosanitary certificate issued by the Ethiopian Plant Protection Directorate (under the Ministry of Agriculture) with each shipment. Photocopies are not accepted. Once the APHIA inspector signs off, the cargo proceeds to TFDA food safety review and then customs release.
        </p>
      </div>

      <p className='my-4'>
        First-time importers also need TFDA Food Business Operator (FBO) registration before placing a commercial order. This registration identifies the Taiwanese business as a food importer in TFDA&apos;s system and is required to submit the mandatory food import notification for each subsequent shipment. The registration is completed once and remains valid as long as the business operates.
      </p>

      {/* Section 3: Import Workflow */}
      <h3 id='import-workflow' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineCheckCircle className='w-8 h-8 text-amber-600' />
        3. Step-by-Step Import Workflow
      </h3>

      <p className='my-4'>
        The sequence below applies to a commercial FCL or LCL shipment of Ethiopian green coffee. Steps 1 to 3 happen before the cargo leaves Ethiopia; steps 4 to 8 happen on the Taiwan side.
      </p>

      <ol className='space-y-4 my-6'>
        <li className='flex gap-3'>
          <span className='font-bold text-amber-600 text-lg flex-shrink-0'>1.</span>
          <div>
            <p className='font-semibold'>Confirm importer registration in Taiwan</p>
            <p className='text-sm text-gray-700 mt-1'>The Taiwanese buyer must hold a company registration (MOEA), an import/export registration (Bureau of Foreign Trade), and TFDA FBO status before placing a commercial order. Verify these are active before a contract is signed.</p>
          </div>
        </li>
        <li className='flex gap-3'>
          <span className='font-bold text-amber-600 text-lg flex-shrink-0'>2.</span>
          <div>
            <p className='font-semibold'>Request phytosanitary certificate from Ethiopia</p>
            <p className='text-sm text-gray-700 mt-1'>The Ethiopian exporter must obtain an original phytosanitary certificate from the Ethiopian Plant Protection Directorate, endorsed specifically for Taiwan. This certificate must accompany the shipment. Secure it before the cargo is stuffed into the container at the Addis dry port.</p>
          </div>
        </li>
        <li className='flex gap-3'>
          <span className='font-bold text-amber-600 text-lg flex-shrink-0'>3.</span>
          <div>
            <p className='font-semibold'>Complete Ethiopian export documentation</p>
            <p className='text-sm text-gray-700 mt-1'>Ethiopian-side documents include the CLU quality certificate (Coffee and Tea Authority), ICO certificate of origin, commercial invoice, packing list, bill of lading, and certificate of weight. For <Link href='/insights/green-coffee-shipping-documents-checklist' className='text-amber-700 hover:underline'>a full document checklist</Link>, see our shipping documents guide.</p>
          </div>
        </li>
        <li className='flex gap-3'>
          <span className='font-bold text-amber-600 text-lg flex-shrink-0'>4.</span>
          <div>
            <p className='font-semibold'>Submit TFDA food import notification (online)</p>
            <p className='text-sm text-gray-700 mt-1'>The Taiwanese importer files a pre-arrival food import notification through TFDA&apos;s online system, typically 3 to 5 days before vessel arrival. The notification references the FBO registration, product details (HS code, weight, origin), and the exporter&apos;s identity. TFDA may clear the shipment automatically or assign it for physical inspection depending on the product&apos;s risk profile and import history.</p>
          </div>
        </li>
        <li className='flex gap-3'>
          <span className='font-bold text-amber-600 text-lg flex-shrink-0'>5.</span>
          <div>
            <p className='font-semibold'>APHIA plant quarantine inspection on arrival</p>
            <p className='text-sm text-gray-700 mt-1'>After vessel berthing at Kaohsiung or Keelung, the APHIA inspector examines the cargo and reviews the original phytosanitary certificate. Inspection typically takes 1 to 2 business days. If the lot passes, APHIA issues a quarantine clearance certificate. If pests or disease signs are detected, the cargo is subject to treatment or refusal.</p>
          </div>
        </li>
        <li className='flex gap-3'>
          <span className='font-bold text-amber-600 text-lg flex-shrink-0'>6.</span>
          <div>
            <p className='font-semibold'>Customs declaration and duty payment</p>
            <p className='text-sm text-gray-700 mt-1'>With APHIA clearance and TFDA notification accepted, the importer (or customs broker) files the import declaration with Taiwan Customs. Green coffee classified under HS 0901.11 carries 0% import duty. Business tax (5%) and trade promotion fee (0.04%) are assessed on the CIF value and must be paid before cargo release.</p>
          </div>
        </li>
        <li className='flex gap-3'>
          <span className='font-bold text-amber-600 text-lg flex-shrink-0'>7.</span>
          <div>
            <p className='font-semibold'>Cargo release and delivery</p>
            <p className='text-sm text-gray-700 mt-1'>After customs release, the importer arranges inland trucking from Kaohsiung or Keelung to a licensed warehouse. Green coffee should be stored in a temperature-controlled, low-humidity environment. For <Link href='/insights/green-coffee-shelf-life-storage-guide' className='text-amber-700 hover:underline'>storage best practices</Link>, see our shelf life guide.</p>
          </div>
        </li>
        <li className='flex gap-3'>
          <span className='font-bold text-amber-600 text-lg flex-shrink-0'>8.</span>
          <div>
            <p className='font-semibold'>Labeling compliance for domestic distribution</p>
            <p className='text-sm text-gray-700 mt-1'>Green coffee sold to other businesses (roasters, cafes) as a bulk ingredient requires B2B packaging that includes product name, specification, expiry date, manufacturer, and country of origin. If the lot is repacked and sold directly to consumers, full Chinese-language labeling and nutrition information are mandatory under TFDA&apos;s food labeling regulations.</p>
          </div>
        </li>
      </ol>

      {/* Section 4: Document Stack */}
      <h3 id='document-stack' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineDocumentText className='w-8 h-8 text-amber-600' />
        4. Document Stack for Ethiopian Green Coffee
      </h3>

      <p className='my-4'>
        Ethiopian coffee exports carry a richer document set than many other origins because the Coffee and Tea Authority (CTA) issues a CLU quality certificate at the dry mill, and the Ethiopia Commodity Exchange (ECX) system generates lot-level traceability records. Taiwan&apos;s three-authority framework requires specific documents at each clearance stage. The table below maps each document to its issuing party and its function in the Taiwan import process.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Document</th>
              <th className='p-3 text-left font-bold'>Issued By</th>
              <th className='p-3 text-left font-bold'>Required For</th>
              <th className='p-3 text-left font-bold'>Ethiopian Note</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Commercial Invoice</td>
              <td className='p-3'>Ethiopian exporter</td>
              <td className='p-3'>Customs valuation, TFDA notification</td>
              <td className='p-3'>Must show FOB or CIF price, Incoterm, lot details</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Packing List</td>
              <td className='p-3'>Ethiopian exporter</td>
              <td className='p-3'>Customs, APHIA</td>
              <td className='p-3'>Bag count, net/gross weight per lot</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Bill of Lading / Sea Waybill</td>
              <td className='p-3'>Shipping carrier</td>
              <td className='p-3'>Customs, cargo release</td>
              <td className='p-3'>Consignee name must match TFDA FBO registration</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>ICO Certificate of Origin</td>
              <td className='p-3'>Ethiopian CTA (on behalf of ICO)</td>
              <td className='p-3'>Customs (origin verification)</td>
              <td className='p-3'>Certifies Ethiopian origin; standard for all Ethiopian exports</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Phytosanitary Certificate</td>
              <td className='p-3'>Ethiopian Plant Protection Directorate (MoA)</td>
              <td className='p-3'>APHIA quarantine inspection</td>
              <td className='p-3'>Original required. Endorsed for Taiwan. Secure before loading</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>CLU Quality Certificate</td>
              <td className='p-3'>Ethiopian Coffee and Tea Authority</td>
              <td className='p-3'>Grade verification, buyer QC reference</td>
              <td className='p-3'>Shows ECTA grade (G1–G5), raw defect score, cup score</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Weight Certificate</td>
              <td className='p-3'>Licensed weighing company at Djibouti port</td>
              <td className='p-3'>Customs quantity verification</td>
              <td className='p-3'>Final weight at Djibouti; reconcile with packing list</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>TFDA Food Import Notification Ref.</td>
              <td className='p-3'>Taiwanese importer (via TFDA online system)</td>
              <td className='p-3'>TFDA food safety clearance</td>
              <td className='p-3'>Filed by importer 3–5 days before arrival; reference number generated</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-r-lg my-6'>
        <h4 className='font-bold mb-2'>Phytosanitary Certificate Timing</h4>
        <p className='text-sm text-gray-700'>
          The most common cause of delays for first-time Ethiopian coffee shippers to Taiwan is a missing or incorrectly endorsed phytosanitary certificate. Request this document from the Ethiopian Plant Protection Directorate at least 5 to 7 business days before the planned container loading date. APHIA requires the original. If the cargo arrives without it or with a photocopy, the shipment will be held pending resolution.
        </p>
      </div>

      {/* Section 5: Tariff Math */}
      <h3 id='tariff-and-cost' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineCurrencyDollar className='w-8 h-8 text-amber-600' />
        5. Tariff Math: 0% Duty, 5% Business Tax
      </h3>

      <p className='my-4'>
        Taiwan&apos;s duty structure for green coffee is straightforward. Unroasted, non-decaffeinated Arabica coffee falls under HS 0901.11 and carries a 0% import tariff. Two additional charges apply to the CIF value:
      </p>

      <ul className='my-4 space-y-2 text-sm ml-4'>
        <li><span className='font-semibold'>Business tax (營業稅): 5%</span> of CIF value. This is Taiwan&apos;s equivalent of VAT. Registered businesses can recover it as input tax credit against business tax on their sales. For importers distributing to multiple roasters, recovery is routine.</li>
        <li><span className='font-semibold'>Trade promotion fee (貿易推廣費): 0.04%</span> of CIF value. Collected by the Bureau of Foreign Trade to fund Taiwan&apos;s trade promotion activities. Applied to both imports and exports.</li>
      </ul>

      <p className='my-4'>
        The worked example below shows the full cost from a FOB Djibouti offer to a Taiwan landed cost:
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Cost Item</th>
              <th className='p-3 text-left font-bold'>Basis</th>
              <th className='p-3 text-left font-bold'>Example (1 × 20&apos; FCL ≈ 19,200 kg)</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>FOB Djibouti (Yirgacheffe G1 washed)</td>
              <td className='p-3'>Per kg</td>
              <td className='p-3'>$5.20/kg → $99,840 total</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Ocean freight (FCL Djibouti → Kaohsiung)</td>
              <td className='p-3'>Per container</td>
              <td className='p-3'>~$1,600–$2,400 (indicative; confirm with your forwarder)</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Marine insurance (~0.3% CIF)</td>
              <td className='p-3'>% of CIF</td>
              <td className='p-3'>~$306</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='font-semibold p-3'>CIF Kaohsiung</td>
              <td className='p-3'>Subtotal</td>
              <td className='p-3'>~$101,750 (est.)</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Import tariff (HS 0901.11)</td>
              <td className='p-3'>0% of CIF</td>
              <td className='p-3'>$0</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Business tax (5% of CIF)</td>
              <td className='p-3'>5% of CIF</td>
              <td className='p-3'>~$5,088 (recoverable)</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Trade promotion fee (0.04% of CIF)</td>
              <td className='p-3'>0.04% of CIF</td>
              <td className='p-3'>~$41</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Port handling, THC, customs brokerage</td>
              <td className='p-3'>Fixed fees</td>
              <td className='p-3'>~NT$20,000–30,000 (~$620–$930), indicative local estimate</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>APHIA inspection fee</td>
              <td className='p-3'>Per shipment</td>
              <td className='p-3'>~NT$1,000–3,000 (~$31–$93), indicative local estimate</td>
            </tr>
            <tr className='bg-amber-50 font-bold'>
              <td className='p-3'>Landed cost per kg (excl. recoverable tax)</td>
              <td className='p-3'></td>
              <td className='p-3'>~$5.35–$5.50/kg (est.)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        Business tax is fully recoverable for VAT-registered businesses. The effective non-recoverable cost items are freight, insurance, port handling, brokerage, and APHIA fees. For buyers comparing Ethiopian coffee against Brazilian or Colombian origins at similar FOB prices, Taiwan&apos;s 0% tariff structure removes the duty differential entirely. The landed cost premium for Ethiopian specialty lots is driven by the FOB price, not by duty. For a detailed breakdown of how to calculate total landed costs, see our <Link href='/insights/ethiopian-coffee-landed-cost-guide' className='text-amber-700 hover:underline'>Ethiopian coffee landed cost guide</Link>.
      </p>

      {/* Section 6: Shipping */}
      <h3 id='shipping' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineTruck className='w-8 h-8 text-amber-600' />
        6. Shipping from Djibouti to Kaohsiung and Keelung
      </h3>

      <p className='my-4'>
        All Ethiopian green coffee exports depart through Djibouti Port after inland road or rail transport from Addis Ababa. From Djibouti, containers to Taiwan typically transit through Singapore or Hong Kong before connecting onward to Kaohsiung (KHH) or Keelung (KEE). Evergreen Marine Corporation, Taiwan&apos;s national container shipping line, operates regular services on the Asia-East Africa route and is a natural carrier choice for Taiwan-bound shipments given its local infrastructure and agent network.
      </p>

      <div className='grid md:grid-cols-2 gap-4 my-6'>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Kaohsiung (KHH) — South Taiwan</h4>
          <p className='text-sm text-gray-700'>Taiwan&apos;s largest and busiest container port. Direct access to warehouse districts in Kaohsiung City and road connections south to Pingtung and north toward Taichung. Most commercial green coffee importers in southern and central Taiwan use Kaohsiung as their port of entry. Evergreen&apos;s main terminals are located here.</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Keelung (KEE) — North Taiwan</h4>
          <p className='text-sm text-gray-700'>Taipei-adjacent port serving northern Taiwan. Better choice for roasters warehousing in the Taipei-New Taipei metro area who want to avoid inland trucking costs from Kaohsiung. Transit from Keelung to Taipei specialty warehouse districts is under 45 minutes by road.</p>
        </div>
      </div>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Route Segment</th>
              <th className='p-3 text-left font-bold'>Typical Transit Time</th>
              <th className='p-3 text-left font-bold'>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Addis Ababa → Djibouti Port</td>
              <td className='p-3'>3–5 days (road)</td>
              <td className='p-3'>Road freight; Ethiopian logistics corridor</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Djibouti → Singapore (transshipment)</td>
              <td className='p-3'>12–16 days</td>
              <td className='p-3'>Via Indian Ocean; CMA CGM, MSC, Evergreen</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Singapore → Kaohsiung or Keelung</td>
              <td className='p-3'>4–7 days</td>
              <td className='p-3'>Regular feeder services; Evergreen direct service available</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Port clearance in Taiwan</td>
              <td className='p-3'>3–6 business days</td>
              <td className='p-3'>APHIA inspection (1–2 days) + TFDA + customs declaration</td>
            </tr>
            <tr className='bg-amber-50 font-bold'>
              <td className='p-3'>Total (origin to warehouse)</td>
              <td className='p-3'>28–40 days</td>
              <td className='p-3'>From Addis Ababa; plan 5–6 weeks minimum</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        The total transit from Addis Ababa to a Taiwan warehouse typically runs 28 to 40 days. Buyers should plan 5 to 6 weeks from contract signing to delivery, with additional time if quality issues require sample approval exchanges. For a comprehensive breakdown of <Link href='/insights/ethiopian-coffee-export-process-buyers-guide' className='text-amber-700 hover:underline'>each stage of the Ethiopian export process</Link>, including CLU inspection timing and container stuffing windows, see our export process guide.
      </p>

      <div className='bg-green-50 border border-green-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3'>Evergreen Shipping Advantage</h4>
        <p className='text-sm text-gray-700'>
          Evergreen Marine Corporation operates one of the most extensive Taiwan-focused container networks in Asia. Booking with Evergreen from Djibouti often means smoother B/L processing and port prioritization at Kaohsiung, where Evergreen holds terminal concessions. For first-time importers, using a freight forwarder who works regularly with Evergreen on the East Africa-Taiwan corridor reduces coordination risk.
        </p>
      </div>

      {/* Section 7: Buyer Personas */}
      <h3 id='buyer-personas' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineUsers className='w-8 h-8 text-amber-600' />
        7. How Different Taiwanese Buyers Approach Ethiopian Coffee
      </h3>

      <p className='my-4'>
        The cost math and compliance path look different depending on the buyer&apos;s business model. Three buyer types dominate the Taiwanese green coffee market for Ethiopian origins, and each optimizes for different variables.
      </p>

      <div className='bg-gray-50 border border-gray-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3'>Buyer Type 1: The Taipei Specialty Roaster</h4>
        <p className='text-sm text-gray-700 mb-3'>
          A typical Taipei specialty roaster running 3 to 5 retail cafes and a direct-to-consumer online store roasts 500 to 1,500 kg of green coffee per month. Ethiopian origins account for 25 to 40% of their menu. They buy 10 to 20 bags per lot (600 to 1,200 kg) directly from Ethiopian exporters or through a local green coffee importer.
        </p>
        <p className='text-sm text-gray-700 mb-3'>
          <span className='font-semibold'>Challenge:</span> Minimum container loads (FCL) of 19,200 kg are too large for their needs. They typically co-load with a local importer who manages customs compliance, TFDA/APHIA clearance, and warehousing, purchasing smaller allocations once landed in Taiwan. They pay a per-kg premium to the importer for this convenience.
        </p>
        <p className='text-sm text-gray-700'>
          <span className='font-semibold'>Origin preference:</span> Yirgacheffe washed G1 for filter menus; Guji natural G1 for espresso bar. They request detailed lot information: washing station name, altitude, processing date, cup score, and flavor descriptors. Traceability to a specific cooperative or washing station strengthens their retail marketing. For <Link href='/insights/micro-lot-ethiopian-coffee-sourcing-guide' className='text-amber-700 hover:underline'>micro-lot sourcing strategies</Link>, see our micro-lot guide.
        </p>
      </div>

      <div className='bg-gray-50 border border-gray-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3'>Buyer Type 2: The Taiwan Green Coffee Importer/Distributor</h4>
        <p className='text-sm text-gray-700 mb-3'>
          Importers who aggregate orders from multiple roasters typically manage the full compliance chain: TFDA FBO registration, APHIA coordination, customs brokerage, and bonded warehousing. They import 1 to 4 FCLs per month across multiple origins, with Ethiopian lots representing a significant share during the new-crop season (December through May for Yirgacheffe and Guji).
        </p>
        <p className='text-sm text-gray-700 mb-3'>
          <span className='font-semibold'>Challenge:</span> Cash flow and lot allocation. Ethiopian specialty grades (G1 washed and natural) at $5 to $7/kg FOB Djibouti require USD-denominated payment, often under a Letter of Credit or 30% advance TT / 70% before shipment terms. For <Link href='/insights/ethiopian-coffee-contracts-payment-terms-guide' className='text-amber-700 hover:underline'>contract and payment structures</Link> that work for distributors, see our payments guide.
        </p>
        <p className='text-sm text-gray-700'>
          <span className='font-semibold'>Sourcing strategy:</span> These importers value consistent supply across the season, requesting forward allocation commitments from their Ethiopian exporter before the harvest is processed. They seek 2 to 4 lots per origin (different washing stations, different processing methods) to satisfy the range their roaster clients require.
        </p>
      </div>

      <div className='bg-gray-50 border border-gray-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3'>Buyer Type 3: The Cold Brew and RTD Producer</h4>
        <p className='text-sm text-gray-700 mb-3'>
          Taiwan&apos;s ready-to-drink cold brew segment has grown substantially, with several brands producing bottled cold brew and canned RTD coffee for convenience store chains. These producers need Ethiopian natural processed coffee for its concentrated fruit and sweetness profile in cold brew concentrate, but they purchase in larger volumes (100 to 300+ bags per lot) and are more price-sensitive than specialty roasters.
        </p>
        <p className='text-sm text-gray-700 mb-3'>
          <span className='font-semibold'>Challenge:</span> Consistency across lots. RTD producers need green coffee that cups within a tight flavor range across production batches. An Ethiopian G2 natural with strong fermented notes will cause batch inconsistency. They specify G1 natural or closely scored lots with minimal fermentation defects and tight moisture specs.
        </p>
        <p className='text-sm text-gray-700'>
          <span className='font-semibold'>Volume:</span> A cold brew producer consuming 500 to 1,000 kg of Ethiopian natural per month could support an LCL or partial container allocation directly from an Ethiopian exporter. Pre-shipment sample approval is critical for this buyer type. See our <Link href='/insights/ethiopian-coffee-cold-brew-rtd-sourcing-guide' className='text-amber-700 hover:underline'>cold brew sourcing guide</Link> for origin and processing specs.
        </p>
      </div>

      {/* CTA Block */}
      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Source Ethiopian Green Coffee Direct for the Taiwan Market</h4>
        <p className='my-2'>
          Ethio Coffee Import and Export PLC ships Ethiopian specialty green coffee to Taiwan year-round. Our offer sheet covers Yirgacheffe, Guji, Sidamo, Harar, Limu, and Jimma lots across washed, natural, and anaerobic processes. We prepare all Ethiopian-side export documents, including the phytosanitary certificate endorsed for Taiwan, and support first-time buyers through the APHIA and TFDA clearance sequence.
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

      {/* FAQ */}
      <section id='faq' className='mb-12 bg-gray-50 rounded-xl p-8 border border-gray-200'>
        <h3 className='text-2xl font-bold mb-6 text-gray-900'>Frequently Asked Questions</h3>
        <div className='space-y-6'>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Does Ethiopian green coffee require APHIA quarantine inspection in Taiwan?</h4>
            <p className='text-sm text-gray-600'>Yes. Unroasted, non-decaffeinated green coffee is classified as a plant product under Taiwan&apos;s Plant Protection and Quarantine Act. Every commercial shipment from Ethiopia requires an original phytosanitary certificate from the Ethiopian Plant Protection Directorate and undergoes physical inspection by APHIA at the port of entry. Roasted coffee and decaffeinated green coffee have different regulatory treatment.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>What is the import tariff for Ethiopian green coffee in Taiwan?</h4>
            <p className='text-sm text-gray-600'>Green, unroasted Arabica coffee under HS 0901.11 carries a 0% import tariff in Taiwan. Two small charges apply to the CIF value: a 5% business tax (fully recoverable for registered businesses) and a 0.04% trade promotion fee. There is no preferential trade agreement between Ethiopia and Taiwan, but the 0% tariff applies universally to this HS code regardless of origin.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>How long does it take to clear Ethiopian green coffee through Taiwan customs?</h4>
            <p className='text-sm text-gray-600'>From vessel arrival to cargo release, allow 3 to 6 business days. APHIA quarantine inspection takes 1 to 2 business days. TFDA food import notification, if pre-filed, is usually accepted within 1 to 2 days. Customs declaration and duty payment take 1 day if all documents are in order. Delays typically stem from missing or incorrectly endorsed phytosanitary certificates.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Does Taiwan apply the EU Deforestation Regulation (EUDR) to coffee imports from Ethiopia?</h4>
            <p className='text-sm text-gray-600'>No. EUDR applies only to products imported into the European Union. Taiwan is not an EU member and has no equivalent deforestation import regulation. Importers do not need to provide geolocation data, risk assessments, or due diligence statements for Ethiopian coffee entering Taiwan. This simplifies compliance considerably compared to EU-bound shipments from the same Ethiopian lots.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Which Taiwanese port is better for Ethiopian coffee: Kaohsiung or Keelung?</h4>
            <p className='text-sm text-gray-600'>Both ports clear Ethiopian green coffee. Kaohsiung is Taiwan&apos;s primary container port and offers more frequent direct services from Djibouti via Singapore transshipment, as well as Evergreen&apos;s main terminal facilities. Keelung is better suited for buyers warehousing in the Taipei metro area, as it cuts inland trucking costs. Discuss warehouse location with your freight forwarder to determine the optimal port.</p>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <div className='my-10 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4'>Related Articles</h3>
        <div className='grid md:grid-cols-2 gap-4'>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Asia-Pacific Import Guides</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/importing-ethiopian-coffee-to-japan' className='text-amber-700 hover:underline'>Import Ethiopian Coffee to Japan</Link></li>
              <li>&bull; <Link href='/insights/importing-ethiopian-coffee-to-south-korea' className='text-amber-700 hover:underline'>Import Ethiopian Coffee to South Korea</Link></li>
              <li>&bull; <Link href='/insights/importing-ethiopian-coffee-to-singapore' className='text-amber-700 hover:underline'>Import Ethiopian Coffee to Singapore</Link></li>
              <li>&bull; <Link href='/insights/importing-ethiopian-coffee-to-malaysia' className='text-amber-700 hover:underline'>Import Ethiopian Coffee to Malaysia</Link></li>
              <li>&bull; <Link href='/insights/importing-ethiopian-coffee-to-china' className='text-amber-700 hover:underline'>Import Ethiopian Coffee to China</Link></li>
              <li>&bull; <Link href='/insights/importing-ethiopian-coffee-to-australia' className='text-amber-700 hover:underline'>Import Ethiopian Coffee to Australia</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Sourcing and Trade Guides</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/ethiopian-coffee-export-process-buyers-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Export Process: Buyer&apos;s Guide</Link></li>
              <li>&bull; <Link href='/insights/green-coffee-shipping-documents-checklist' className='text-amber-700 hover:underline'>Green Coffee Shipping Documents Checklist</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-incoterms-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Incoterms Guide</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-landed-cost-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Landed Cost Guide</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-sample-approval-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Sample Approval Guide</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Origin Guides: Popular in Taiwan</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/yirgacheffe-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Yirgacheffe Coffee: Buyer&apos;s Sourcing Guide</Link></li>
              <li>&bull; <Link href='/insights/guji-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Guji Coffee: Buyer&apos;s Sourcing Guide</Link></li>
              <li>&bull; <Link href='/insights/bombe-sidama-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Bombe Sidama Coffee: Buyer&apos;s Guide</Link></li>
              <li>&bull; <Link href='/insights/micro-lot-ethiopian-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Micro-Lot Ethiopian Coffee: Sourcing Guide</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Quality and Processing</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/green-coffee-mycotoxin-testing-guide' className='text-amber-700 hover:underline'>Green Coffee Mycotoxin Testing Guide</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-cold-brew-rtd-sourcing-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee for Cold Brew and RTD</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-washing-stations-buyers-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Washing Stations: Buyer&apos;s Guide</Link></li>
              <li>&bull; <Link href='/insights/anaerobic-ethiopian-coffee-processing-buyers-guide' className='text-amber-700 hover:underline'>Ethiopian Anaerobic Coffee Processing Guide</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> Written by Ethio Coffee Import and Export PLC, an origin-connected Ethiopian coffee exporter with three decades of sourcing relationships across Yirgacheffe, Sidamo, Guji, Harar, Limu, and Jimma.
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
