import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import {
  HiOutlineArrowTrendingUp,
  HiOutlineBeaker,
  HiOutlineBuildingOffice,
  HiOutlineCheckCircle,
  HiOutlineClipboardDocumentList,
  HiOutlineCurrencyDollar,
  HiOutlineDocumentText,
  HiOutlineGlobeAlt,
  HiOutlineLightBulb,
  HiOutlineMapPin,
  HiOutlineScale,
  HiOutlineShieldCheck,
  HiOutlineTruck,
} from 'react-icons/hi2'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function ImportingEthiopianCoffeeToThailand({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        Department of Agriculture plant quarantine, e-Customs workflow, 7% VAT planning, and Laem Chabang logistics for specialty roasters and importers
      </h2>

      <figure>
        <figcaption className='font-inconsolata my-2'>{title}</figcaption>
        <div className='w-full aspect-[5/3] overflow-hidden rounded-md bg-gray-200 flex items-center justify-center'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Laem Chabang deep-water container port in Thailand with cargo vessels, relevant to importing Ethiopian coffee to Thailand'
            fill
            objectFit='cover'
            className='w-full h-full'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>
      </figure>

      <div className='my-4 text-sm bg-amber-50 p-4 rounded-lg border border-amber-200'>
        <span className='font-semibold'>Category:</span>
        <span className='ml-2'>Import Guide / Thailand Market / Ethiopian Coffee Export / ASEAN Buyer Strategy</span>
      </div>

      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-8 border border-amber-200'>
        <h3 className='font-bold text-xl mb-3 flex items-center gap-2'>
          <HiOutlineLightBulb className='text-amber-400 flex-shrink-0' />Key Takeaway
        </h3>
        <p className='text-sm leading-relaxed'>
          To import Ethiopian green coffee to Thailand, buyers must clear three distinct checkpoints in sequence: a plant import permit from the Department of Agriculture before the shipment sails, a Thai Customs e-Customs entry declaration at Laem Chabang, and compliance with Thai FDA food safety notification requirements if applicable. There is no preferential duty-free arrangement between Ethiopia and Thailand under ASEAN FTAs, so importers should verify the applied MFN tariff rate and whether Ethiopia&apos;s LDC status qualifies for Thailand&apos;s GSP concession. VAT of 7% applies on the dutiable value and is recoverable for VAT-registered businesses. Thailand&apos;s active specialty coffee scene, concentrated in Bangkok and Chiang Mai, creates consistent demand for traceable Ethiopian single-origin lots that domestic production cannot supply.
        </p>
      </div>

      <div className='my-8 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <HiOutlineClipboardDocumentList className='text-amber-600' /> In This Guide
        </h3>
        <ol className='space-y-2 text-sm'>
          <li><a href='#thailand-market' className='text-amber-700 hover:underline'>1. Thailand as a Market for Ethiopian Coffee</a></li>
          <li><a href='#three-agency-workflow' className='text-amber-700 hover:underline'>2. The Three-Agency Import Workflow</a></li>
          <li><a href='#plant-quarantine' className='text-amber-700 hover:underline'>3. Plant Quarantine and Thai FDA Requirements</a></li>
          <li><a href='#duties-and-vat' className='text-amber-700 hover:underline'>4. Duties, VAT, and LDC GSP Opportunity</a></li>
          <li><a href='#shipping-and-ports' className='text-amber-700 hover:underline'>5. Shipping to Laem Chabang: Routes and Timing</a></li>
          <li><a href='#landed-cost' className='text-amber-700 hover:underline'>6. Landed Cost Estimate for Thai Buyers</a></li>
          <li><a href='#faq' className='text-amber-700 hover:underline'>7. Frequently Asked Questions</a></li>
        </ol>
      </div>

      <p className='text-lg leading-relaxed my-4'>
        Thai specialty roasters have been systematically expanding their Ethiopian origin roster over the past five years. Bangkok and Chiang Mai now host dozens of third-wave cafes and micro-roasters that feature single-origin Yirgacheffe, Guji, and Sidamo as permanent menu anchors, not seasonal novelties. The question is no longer whether Thailand wants Ethiopian coffee. The question is how to <span className='font-bold'>import Ethiopian coffee to Thailand</span> without stalling at the plant quarantine step, miscalculating VAT exposure, or losing weeks to an avoidable document error at Laem Chabang.
      </p>

      <p className='my-4'>
        This article covers the import workflow from a Thai buyer&apos;s perspective: the three agencies you work with, the plant import permit that must be secured before the shipment leaves Djibouti, the customs entry process, duty and VAT obligations, and how Laem Chabang logistics affect your landed cost. For the Ethiopia-side sourcing process, see our <Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='text-amber-700 hover:underline'>guide to sourcing green coffee from Ethiopia</Link>, the <Link href='/insights/ecx-and-ethiopian-coffee-export' className='text-amber-700 hover:underline'>ECX and export system guide</Link>, and the <Link href='/insights/ethiopian-coffee-export-process-buyers-guide' className='text-amber-700 hover:underline'>export process guide</Link>.
      </p>

      <h3 id='thailand-market' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineArrowTrendingUp className='w-8 h-8 text-amber-600' />
        1. Thailand as a Market for Ethiopian Coffee
      </h3>

      <p className='my-4'>
        Thailand produces coffee domestically, primarily Arabica from the northern highlands around Chiang Rai, Chiang Mai, and Mae Hong Son. Names like Doi Chaang have built international recognition. But domestic Arabica production runs only 20,000 to 30,000 tonnes per year, overwhelmingly absorbed by the local premium market, and the volume cannot match the scale or variety demanded by Thailand&apos;s commercial and specialty roasting sector. The remainder of the market is filled by imports, predominantly Vietnamese and Brazilian origins for commercial blending, with African origins capturing the specialty and single-origin tier.
      </p>

      <p className='my-4'>
        Ethiopian coffee fits the specialty tier precisely because Thai consumers and specialty baristas have developed strong preferences for the floral, fruit-forward profiles that Ethiopian washed processing produces. <Link href='/ethiopian-coffee-yirgacheffe' className='text-amber-700 hover:underline'>Yirgacheffe</Link> is consistently the most sought-after Ethiopian origin among Thai specialty roasters, followed by <Link href='/ethiopian-coffee-guji' className='text-amber-700 hover:underline'>Guji</Link> and <Link href='/ethiopian-coffee-sidamo' className='text-amber-700 hover:underline'>Sidamo</Link>. Natural-processed Ethiopian lots, with their blueberry and stone-fruit intensity, have also found strong demand in the Bangkok craft roasting scene.
      </p>

      <div className='grid md:grid-cols-2 gap-4 my-6'>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Bangkok Specialty Roasters</h4>
          <p className='text-sm text-gray-700'>
            Bangkok&apos;s specialty cafe scene is among the most competitive in Southeast Asia. Roasters here buy traceable, documented lots with full processing and origin data. Ethiopian washed Yirgacheffe and Guji naturals appear on pour-over and filter menus at premium price points, often sourced from the same exporters each season.
          </p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Chiang Mai Independent Cafes</h4>
          <p className='text-sm text-gray-700'>
            Chiang Mai has a large concentration of specialty cafes relative to its population, partly because of its proximity to northern Thai coffee farms and its reputation as a coffee-education hub. Local roasters frequently use Ethiopian single-origin lots for comparison tastings and origin education programs.
          </p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Hotel and HORECA Buyers</h4>
          <p className='text-sm text-gray-700'>
            Thailand&apos;s large hospitality sector, anchored in Bangkok, Phuket, and Koh Samui, buys specialty coffee for guest-experience programs. Ethiopian origins are used for filter and single-origin espresso menus in premium hotels and resort properties.
          </p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Wholesale Distributors</h4>
          <p className='text-sm text-gray-700'>
            Specialty green coffee distributors in Thailand import full containers and sell in smaller parcels to roasters who cannot meet export minimum order requirements. This model lowers the entry barrier for smaller Thai buyers who want Ethiopian origins but cannot absorb a full 250-320 bag container.
          </p>
        </div>
      </div>

      <div className='bg-blue-50 border border-blue-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3'>Buyer Persona: Two Entry Models, Two Different Workflows</h4>
        <p className='text-sm text-gray-700'>
          A Bangkok specialty roaster processing three to five tonnes per month may import one or two 60 kg bags per lot as an LCL consolidation to trial multiple Ethiopian origins each quarter. A specialty green coffee distributor covering multiple Thai roasters may book a 20-foot container of mixed Ethiopian lots, clear the full consignment at Laem Chabang, and redistribute in smaller parcels to five to ten roasters across Bangkok and Chiang Mai. The plant permit and customs workflow are identical for both, but the financial exposure and logistics planning are structurally different.
        </p>
      </div>

      <h3 id='three-agency-workflow' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineBuildingOffice className='w-8 h-8 text-amber-600' />
        2. The Three-Agency Import Workflow
      </h3>

      <p className='my-4'>
        Thailand&apos;s green coffee import process involves three distinct government bodies, each with a separate clearance function. Many first-time importers plan for customs clearance only, then discover the plant quarantine permit requirement after the shipment has already sailed. Getting the sequence wrong creates demurrage exposure and shipment delays that are entirely avoidable.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Agency</th>
              <th className='p-3 text-left font-bold'>Function</th>
              <th className='p-3 text-left font-bold'>Timing</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Department of Agriculture (DoA) — Plant Quarantine Division</td>
              <td className='p-3'>Issues the plant import permit and conducts or oversees phytosanitary inspection of incoming plant materials, including green coffee.</td>
              <td className='p-3'>Apply BEFORE the shipment departs Ethiopia. Permit must be in hand before arrival at Laem Chabang.</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Thai Customs Department (TCD)</td>
              <td className='p-3'>Processes the customs entry declaration via e-Customs, applies tariff duty and collects VAT, and releases the cargo for local delivery.</td>
              <td className='p-3'>File the customs entry when the vessel arrives at Laem Chabang. The DoA permit reference is required on the customs declaration.</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Thai Food and Drug Administration (Thai FDA)</td>
              <td className='p-3'>Regulates food imports under the Food Act B.E. 2522. Green coffee (unroasted) classified as a raw agricultural product may not require the same full registration as processed food, but buyers should confirm notification requirements with Thai FDA before the first import.</td>
              <td className='p-3'>Confirm requirements before first shipment. Processed coffee (roasted, packaged) is more explicitly regulated than raw green beans.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        The practical sequence is: secure the DoA plant import permit, prepare the full document package, arrange freight, and file the customs entry on arrival. Thai FDA requirements for raw green coffee should be confirmed on first import through the Thai FDA&apos;s official guidance or a licensed customs broker in Bangkok familiar with agricultural food products.
      </p>

      <div className='border-l-4 border-amber-500 pl-6 bg-gray-50 p-4 my-6'>
        <p className='text-sm text-gray-700'>
          <span className='font-semibold'>Practical note:</span> Most Thai importers of specialty green coffee work with a licensed customs broker (shipping agent) who handles the DoA permit application, customs entry filing, and VAT payment as a bundled service. The broker fee is typically included in freight forwarding costs and is worth the time saved versus managing each agency independently.
        </p>
      </div>

      <h3 id='plant-quarantine' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineShieldCheck className='w-8 h-8 text-amber-600' />
        3. Plant Quarantine and Thai FDA Requirements
      </h3>

      <p className='my-4'>
        The plant quarantine step is the most commonly overlooked part of importing green coffee to Thailand. Green coffee beans are classified as plant material under Thailand&apos;s Plant Quarantine Act, which means an import permit from the Plant Quarantine Division of the Department of Agriculture is required before the shipment arrives. This permit is not applied for at port. It must be obtained in advance, typically 5 to 10 business days before vessel departure.
      </p>

      <h4 className='text-xl font-bold mt-8 mb-4'>Plant Import Permit Requirements</h4>

      <ul className='list-disc pl-6 space-y-2 my-4 text-sm'>
        <li><span className='font-semibold'>Application:</span> Filed with the DoA Plant Quarantine Division, either online via the DoA portal or through a licensed customs broker acting on the importer&apos;s behalf.</li>
        <li><span className='font-semibold'>Phytosanitary certificate:</span> Required from the Ethiopian export authority (Ministry of Agriculture) confirming the coffee is free from regulated pests and diseases. This is a standard document in Ethiopian green coffee export. Our <Link href='/insights/green-coffee-shipping-documents-checklist' className='text-amber-700 hover:underline'>shipping documents checklist</Link> covers the full Ethiopian document set.</li>
        <li><span className='font-semibold'>Country of origin:</span> Ethiopia must be declared as both the country of origin and the exporting country.</li>
        <li><span className='font-semibold'>Validity:</span> The permit is issued for a specific shipment and is not reusable across multiple consignments.</li>
        <li><span className='font-semibold'>Inspection on arrival:</span> The DoA may conduct a physical inspection at Laem Chabang to confirm the shipment matches the permit and phytosanitary certificate. Non-compliant lots can be detained, retreated, or returned at the importer&apos;s expense.</li>
      </ul>

      <h4 className='text-xl font-bold mt-8 mb-4'>Thai FDA Position on Green Coffee</h4>

      <p className='my-4'>
        Under Thailand&apos;s Food Act B.E. 2522 (1979) and its amendments, imported food products are subject to Thai FDA oversight. Green coffee (unroasted beans) occupies a regulatory grey area compared to processed food products. Raw agricultural inputs imported for further processing by registered food manufacturers may have different notification requirements than finished food imports. Thai FDA&apos;s food import process generally requires the importer to hold a food import license and to ensure the product meets Thai food safety standards, including maximum residue limits for pesticides and mycotoxin limits.
      </p>

      <p className='my-4'>
        For ochratoxin A (OTA), Thailand follows Codex Alimentarius guidelines for maximum limits in food products. For <Link href='/insights/green-coffee-mycotoxin-testing-guide' className='text-amber-700 hover:underline'>mycotoxin testing requirements</Link> applicable to your lot before shipment, consult that guide. Importers bringing Ethiopian green coffee into Thailand for the first time should request a pre-clearance consultation with Thai FDA or use a customs broker with specific experience in agricultural food imports to confirm whether a food import notification or license applies to their product classification.
      </p>

      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-6 border border-amber-200'>
        <h4 className='font-bold text-lg mb-3'>Document Set for Thai Customs and DoA</h4>
        <ul className='space-y-2 text-sm'>
          <li><span className='font-semibold'>1. Plant import permit</span> (from DoA Plant Quarantine Division — obtained before shipment)</li>
          <li><span className='font-semibold'>2. Phytosanitary certificate</span> (from Ethiopian Ministry of Agriculture, issued at origin)</li>
          <li><span className='font-semibold'>3. Commercial invoice</span> (FOB value, bag count, grade, origin, buyer/seller details)</li>
          <li><span className='font-semibold'>4. Packing list</span> (gross and net weight per bag, marks, seal numbers)</li>
          <li><span className='font-semibold'>5. Bill of lading</span> (ocean or multimodal, matching consignee and notify party precisely)</li>
          <li><span className='font-semibold'>6. ICO Certificate of Origin</span> (standard coffee export document from Ethiopia)</li>
          <li><span className='font-semibold'>7. Certificate of Origin (Form A or equivalent)</span> if claiming GSP preferential duty rate</li>
          <li><span className='font-semibold'>8. Insurance certificate</span> (CIF shipments; for FOB shipments, the buyer arranges separately)</li>
          <li><span className='font-semibold'>9. Lot specification sheet</span> (grade, screen size, moisture, cupping score, process — for your own QC records)</li>
        </ul>
      </div>

      <h3 id='duties-and-vat' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineCurrencyDollar className='w-8 h-8 text-amber-600' />
        4. Duties, VAT, and LDC GSP Opportunity
      </h3>

      <p className='my-4'>
        Thailand is not part of any free trade agreement with Ethiopia, so Ethiopian coffee does not benefit from ASEAN zero-tariff treatment. The applicable customs duty is the MFN (most-favoured-nation) rate under Thailand&apos;s Customs Tariff Schedule for HS code 0901.11.00 (unroasted, non-decaffeinated coffee). Importers should verify the current applied MFN rate directly with the Thai Customs Department tariff tool or through their customs broker before contracting, as specific duty rates in baht per kilogram are subject to annual review.
      </p>

      <p className='my-4'>
        There is, however, a potential preferential rate available. Ethiopia is classified as a Least Developed Country (LDC) by the United Nations. Thailand operates a Generalized System of Preferences (GSP) scheme that provides preferential tariff treatment to exports from LDC countries. Under Thailand&apos;s GSP for LDCs, green coffee from Ethiopia may qualify for a reduced or zero-duty rate, subject to rules-of-origin compliance and presentation of a valid GSP Form A certificate of origin at customs. Importers should confirm LDC GSP eligibility for HS 0901.11 with Thai Customs or the Thai Ministry of Commerce&apos;s Department of Foreign Trade before their first shipment.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Tax Component</th>
              <th className='p-3 text-left font-bold'>Rate</th>
              <th className='p-3 text-left font-bold'>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>MFN Customs Duty (HS 0901.11.00)</td>
              <td className='p-3'>Verify with Thai Customs [NEEDS VERIFICATION]</td>
              <td className='p-3'>Applied rate for non-ASEAN, non-GSP origins. Check TCD tariff schedule for current baht/kg or ad valorem rate.</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Thailand GSP Rate for LDCs</td>
              <td className='p-3'>Potentially 0% [NEEDS VERIFICATION]</td>
              <td className='p-3'>Ethiopia qualifies as LDC. Requires Form A certificate of origin. Confirm with Department of Foreign Trade.</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Value Added Tax (VAT)</td>
              <td className='p-3'>7%</td>
              <td className='p-3'>Applied on CIF value plus duty. Recoverable for VAT-registered importers as input tax credit.</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Excise Tax</td>
              <td className='p-3'>Not applicable to green coffee</td>
              <td className='p-3'>Green coffee is not subject to Thai excise duty. Excise applies to certain processed products.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='bg-green-50 border border-green-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3'>Why the LDC GSP Rate Matters for Ethiopian Coffee Buyers</h4>
        <p className='text-sm text-gray-700'>
          If Ethiopia&apos;s LDC GSP rate for green coffee under Thailand&apos;s scheme is zero (or significantly below the MFN rate), securing a valid Form A certificate of origin from the Ethiopian exporter before shipment could eliminate the customs duty component entirely. On a 19,200 kg container of Ethiopian specialty coffee at US$8.50/kg FOB, even a 5% duty reduction translates to over US$8,000 in savings. Confirming this before the first contract is a straightforward pre-trade step that pays back immediately.
        </p>
      </div>

      <h3 id='shipping-and-ports' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineTruck className='w-8 h-8 text-amber-600' />
        5. Shipping to Laem Chabang: Routes and Timing
      </h3>

      <p className='my-4'>
        Laem Chabang Port, located in Si Racha district, Chonburi province, is Thailand&apos;s primary deep-water container port and the standard port of entry for green coffee imports. It handles the majority of Thailand&apos;s containerized import traffic and is operated by the Port Authority of Thailand. Laem Chabang sits approximately 120 km southeast of central Bangkok, connected by motorway and, for inland clearance, by the ICD Lat Krabang dry port in eastern Bangkok.
      </p>

      <p className='my-4'>
        Ethiopian green coffee exports through <Link href='/insights/ecx-and-ethiopian-coffee-export' className='text-amber-700 hover:underline'>Djibouti Port</Link> do not have a direct liner service to Laem Chabang. Shipments transit through intermediate transhipment hubs, most commonly Singapore (PSA terminals) or Colombo (Sri Lanka). The choice of hub affects transit time and freight rate: Singapore transit is generally faster and more frequent, while Colombo transit may offer lower ocean freight rates on certain trade lanes.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Route</th>
              <th className='p-3 text-left font-bold'>Typical Transit Time</th>
              <th className='p-3 text-left font-bold'>Considerations</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Djibouti → Singapore → Laem Chabang</td>
              <td className='p-3'>20 to 26 days</td>
              <td className='p-3'>Most frequent service options. Singapore connection usually has better vessel frequency and faster second leg to Thailand.</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Djibouti → Colombo → Laem Chabang</td>
              <td className='p-3'>22 to 30 days</td>
              <td className='p-3'>Sometimes lower freight rate. Slightly longer overall transit. Good option when Singapore routing adds cost without schedule benefit.</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Djibouti → Port Klang → Laem Chabang</td>
              <td className='p-3'>22 to 28 days</td>
              <td className='p-3'>Less common. May work if freight is being consolidated with a Malaysia-bound consignment.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h4 className='text-xl font-bold mt-8 mb-4'>Critical Timing: Plant Permit and Vessel Schedule</h4>

      <p className='my-4'>
        The plant import permit must be obtained before the vessel departs Djibouti, not on arrival. Most importers apply for the DoA permit at least one to two weeks before the expected sailing date. The phytosanitary certificate from Ethiopia must be issued before the vessel departs and must accompany the document set sent to the Thai customs broker ahead of vessel arrival. Any document mismatch between the plant permit and the phytosanitary certificate will trigger a quarantine hold at Laem Chabang.
      </p>

      <p className='my-4'>
        Transit time from Djibouti to Laem Chabang (20 to 26 days via Singapore) gives the importer a narrow but workable window to prepare the Thai customs entry and confirm the customs broker is ready to file on arrival. For buyers who also want to see how the shipping timeline integrates with Ethiopia&apos;s crop calendar, see our <Link href='/insights/ethiopian-coffee-harvest-calendar-buying-guide' className='text-amber-700 hover:underline'>Ethiopian coffee harvest calendar</Link>.
      </p>

      <h3 id='landed-cost' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineScale className='w-8 h-8 text-amber-600' />
        6. Landed Cost Estimate for Thai Buyers
      </h3>

      <p className='my-4'>
        Landed cost for Thai importers has two scenarios driven by shipment size: LCL (less-than-container-load) for smaller specialty roasters importing 30 to 60 bags, and FCL (full container load) for distributors and larger buyers importing 250 to 320 bags per container. The cost difference per kilogram between these two models is substantial and typically justifies distributor models for roasters who cannot absorb FCL volumes alone.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Illustrative Line Item</th>
              <th className='p-3 text-left font-bold'>Specialty Roaster (LCL)</th>
              <th className='p-3 text-left font-bold'>Distributor (FCL)</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Volume</td>
              <td className='p-3'>40 bags / 2,400 kg</td>
              <td className='p-3'>300 bags / 18,000 kg</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Illustrative FOB (US$8.50/kg)</td>
              <td className='p-3'>US$20,400</td>
              <td className='p-3'>US$153,000</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Ocean freight and THC</td>
              <td className='p-3'>US$2,800</td>
              <td className='p-3'>US$4,200</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Insurance</td>
              <td className='p-3'>US$60</td>
              <td className='p-3'>US$459</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>DoA permit, customs broker, local charges</td>
              <td className='p-3'>US$550</td>
              <td className='p-3'>US$1,400</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Customs duty (illustrative at 5% ad valorem, MFN)</td>
              <td className='p-3'>US$1,163</td>
              <td className='p-3'>US$7,883</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>VAT at 7%</td>
              <td className='p-3'>US$1,678</td>
              <td className='p-3'>US$11,679</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Illustrative landed total</td>
              <td className='p-3 font-bold'>US$26,651</td>
              <td className='p-3 font-bold'>US$178,621</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Illustrative landed cost per kg</td>
              <td className='p-3 font-bold'>US$11.10/kg</td>
              <td className='p-3 font-bold'>US$9.92/kg</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Best use case</td>
              <td className='p-3'>Single-origin specialty menu, premium retail bags</td>
              <td className='p-3'>Wholesale distribution to multiple Thai roasters</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4 text-sm text-gray-700'>
        These figures are illustrative estimates to show cost structure, not live quotes. The customs duty rate shown (5% ad valorem) is illustrative only; verify the actual applied MFN rate or LDC GSP rate with Thai Customs before contracting. If Ethiopia qualifies under Thailand&apos;s LDC GSP scheme at 0% duty, the landed cost falls materially, making the FCL model especially competitive for Thai distributors. For a full explanation of how each cost layer compounds, see our <Link href='/insights/ethiopian-coffee-landed-cost-guide' className='text-amber-700 hover:underline'>Ethiopian coffee landed cost guide</Link>.
      </p>

      <div className='bg-blue-50 border border-blue-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3'>VAT Recovery for Registered Thai Businesses</h4>
        <p className='text-sm text-gray-700'>
          Thai businesses registered for VAT purposes can claim the 7% import VAT paid at customs as an input tax credit, offsetting it against output VAT on their sales. In practice, a VAT-registered specialty roaster or distributor that pays 7% VAT on a coffee import recovers that cost through their tax return as long as the green coffee is used in their VAT-generating business. The 7% is a cash-flow consideration, not a permanent cost, for most commercial buyers.
        </p>
      </div>

      <h4 className='text-xl font-bold mt-8 mb-4'>The Distributor Model: Why It Works in Thailand</h4>

      <p className='my-4'>
        The cost gap between LCL and FCL (US$11.10/kg vs US$9.92/kg in the illustrative example above) reflects a real barrier for small Thai roasters. Many specialty roasters in Bangkok and Chiang Mai buy 40 to 80 kg per month of any single Ethiopian lot, far below what qualifies for a direct FCL shipment from Ethiopia. Thai specialty green coffee distributors fill this gap by importing full containers of mixed Ethiopian origins, then selling in 15 to 60 kg parcels to cafes and roasters who want direct-trade-style quality with distributor-scale accessibility.
      </p>

      <p className='my-4'>
        Buyers evaluating this model should also read about <Link href='/insights/minimum-order-quantities-ethiopian-coffee-moq' className='text-amber-700 hover:underline'>Ethiopian coffee MOQ requirements</Link> and how to structure the initial sample and contract workflow using our <Link href='/insights/ethiopian-coffee-sample-approval-guide' className='text-amber-700 hover:underline'>sample approval guide</Link>.
      </p>

      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Ready to Source Ethiopian Coffee for Thailand?</h4>
        <p className='my-2'>
          We supply traceable Yirgacheffe, Guji, Sidamo, Harar, and Limu green coffee direct from Ethiopia. Our document set is designed to clear Thai customs and DoA requirements cleanly: phytosanitary certificate, ICO certificate of origin, full lot specification sheets, and Form A for GSP eligibility where applicable.
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
            <h4 className='font-bold text-gray-800 mb-2'>Do I need a plant import permit to bring green coffee into Thailand?</h4>
            <p className='text-sm text-gray-600'>
              Yes. Green coffee beans are classified as plant material under Thailand&apos;s Plant Quarantine Act. A plant import permit from the Department of Agriculture&apos;s Plant Quarantine Division is required before the shipment arrives at Laem Chabang. Apply at least one to two weeks before the vessel sails from Djibouti and ensure a phytosanitary certificate from the Ethiopian exporter accompanies the shipment.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Can Ethiopian coffee qualify for a preferential duty rate in Thailand?</h4>
            <p className='text-sm text-gray-600'>
              Ethiopia is a Least Developed Country under the UN classification, and Thailand offers GSP tariff concessions for LDC exports. Green coffee from Ethiopia may qualify for a reduced or zero duty rate under Thailand&apos;s LDC GSP scheme, provided the shipment is accompanied by a valid Form A certificate of origin. Confirm the specific rate for HS 0901.11.00 with Thai Customs or the Department of Foreign Trade before your first shipment.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>What is the VAT rate on imported green coffee in Thailand, and can I recover it?</h4>
            <p className='text-sm text-gray-600'>
              Thailand applies 7% VAT on imported goods, calculated on the CIF value plus any applicable customs duty. For VAT-registered Thai businesses, the import VAT paid is recoverable as an input tax credit against output VAT on sales. The 7% is a cash-flow timing consideration for most commercial importers, not a net cost, as long as the business is properly VAT-registered.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>How long does it take to ship Ethiopian coffee to Thailand?</h4>
            <p className='text-sm text-gray-600'>
              Shipping from Djibouti to Laem Chabang via Singapore typically takes 20 to 26 days. Transit via Colombo runs 22 to 30 days. Add 5 to 10 days for the plant permit application, 3 to 7 days for port clearance at Laem Chabang, and an allowance for the original Ethiopian export preparation. Most buyers plan for 35 to 50 days from contract signing to coffee available in Thailand.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Which Ethiopian origins are most in demand with Thai specialty buyers?</h4>
            <p className='text-sm text-gray-600'>
              Yirgacheffe washed Grade 1 is the most consistently requested Ethiopian origin among Thai specialty roasters, followed by Guji natural and Sidamo washed. Thai buyers value the floral, citrus, and fruit-forward profiles these origins produce. Anaerobic and experimental processed Ethiopian lots have gained interest in Bangkok&apos;s competition-oriented cafe segment over the past two seasons.
            </p>
          </div>
        </div>
      </section>

      <div className='my-10 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4'>Related Articles</h3>
        <div className='grid md:grid-cols-2 gap-4'>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Import Compliance and Trade Mechanics</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/ethiopian-coffee-export-process-buyers-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Export Process: A Buyer&apos;s Guide</Link></li>
              <li>&bull; <Link href='/insights/green-coffee-shipping-documents-checklist' className='text-amber-700 hover:underline'>Green Coffee Shipping Documents Checklist</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-landed-cost-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Landed Cost Guide</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-incoterms-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Incoterms Guide</Link></li>
              <li>&bull; <Link href='/insights/minimum-order-quantities-ethiopian-coffee-moq' className='text-amber-700 hover:underline'>Ethiopian Coffee MOQ Guide</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>ASEAN Market Guides</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/importing-ethiopian-coffee-to-singapore' className='text-amber-700 hover:underline'>Import Ethiopian Coffee to Singapore</Link></li>
              <li>&bull; <Link href='/insights/importing-ethiopian-coffee-to-malaysia' className='text-amber-700 hover:underline'>Import Ethiopian Coffee to Malaysia</Link></li>
              <li>&bull; <Link href='/insights/importing-ethiopian-coffee-to-china' className='text-amber-700 hover:underline'>Import Ethiopian Coffee to China</Link></li>
              <li>&bull; <Link href='/insights/importing-ethiopian-coffee-to-japan' className='text-amber-700 hover:underline'>Import Ethiopian Coffee to Japan</Link></li>
              <li>&bull; <Link href='/insights/importing-ethiopian-coffee-to-south-korea' className='text-amber-700 hover:underline'>Import Ethiopian Coffee to South Korea</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Ethiopian Origins Popular in Thailand</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/yirgacheffe-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Yirgacheffe Coffee: Buyer&apos;s Sourcing Guide</Link></li>
              <li>&bull; <Link href='/insights/guji-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Guji Coffee: Buyer&apos;s Sourcing Guide</Link></li>
              <li>&bull; <Link href='/insights/sidamo-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Sidamo Coffee: Buyer&apos;s Sourcing Guide</Link></li>
              <li>&bull; <Link href='/insights/anaerobic-ethiopian-coffee-processing-buyers-guide' className='text-amber-700 hover:underline'>Ethiopian Anaerobic Coffee Processing: A Buyer&apos;s Guide</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Quality and Sourcing Workflow</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/ethiopian-coffee-sample-approval-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Sample Approval Guide</Link></li>
              <li>&bull; <Link href='/insights/green-coffee-mycotoxin-testing-guide' className='text-amber-700 hover:underline'>Green Coffee Mycotoxin Testing Guide</Link></li>
              <li>&bull; <Link href='/insights/green-coffee-supplier-evaluation-checklist' className='text-amber-700 hover:underline'>Green Coffee Supplier Evaluation Checklist</Link></li>
              <li>&bull; <Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='text-amber-700 hover:underline'>How to Source Green Coffee from Ethiopia</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> Published {date}. Written by Ethio Coffee Import and Export PLC, an origin-connected Ethiopian coffee exporter with three decades of sourcing relationships across Yirgacheffe, Sidamo, Guji, Harar, Limu, and Jimma.
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
