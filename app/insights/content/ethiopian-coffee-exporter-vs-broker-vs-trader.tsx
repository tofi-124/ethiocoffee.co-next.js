import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import {
  HiOutlineLightBulb,
  HiOutlineClipboardDocumentList,
  HiOutlineArrowsRightLeft,
  HiOutlineCurrencyDollar,
  HiOutlineMagnifyingGlass,
  HiOutlineShieldCheck,
  HiOutlineExclamationTriangle,
  HiOutlineTableCells,
  HiOutlineAdjustmentsHorizontal,
  HiOutlineGlobeAlt,
} from 'react-icons/hi2'

type InsightContentProps = { title: string; date: string; large_image_url: string }

export default function EthiopianCoffeeExporterVsBrokerVsTrader({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      {/* H1 */}
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>

      {/* H2 subtitle */}
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        Direct Ethiopian coffee exporter, international broker, or local trader: compare costs, lot access, traceability, and EUDR documentation before you source.
      </h2>

      {/* Hero image */}
      <figure>
        <figcaption className='font-inconsolata my-2'>{title}</figcaption>
        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Ethiopian coffee exporter vs broker vs trader supply chain models comparison'
            fill
            objectFit='cover'
            className='w-full h-full'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>
      </figure>

      {/* Category tag */}
      <div className='my-4 text-sm bg-amber-50 p-4 rounded-lg border border-amber-200'>
        <span className='font-semibold'>Category:</span>
        <span className='ml-2'>Sourcing Strategy / Ethiopian Coffee Exporter / Supply Chain / Importer Resources</span>
      </div>

      {/* Key Takeaway */}
      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-8 border border-amber-200'>
        <h3 className='font-bold text-xl mb-3 flex items-center gap-2'>
          <HiOutlineLightBulb className='text-amber-400 flex-shrink-0' />Key Takeaway
        </h3>
        <p className='text-sm leading-relaxed'>
          Buyers sourcing Ethiopian green coffee operate through one of three channel models: a direct <strong>Ethiopian coffee exporter</strong> based at origin, an international green coffee broker or trader, or a local in-country import specialist. Roasters under 5 MT per year generally benefit from a broker's convenience and ready stock. Buyers at 10 MT or more gain significant cost savings, lot access, and EUDR documentation depth by sourcing directly from an origin-licensed Ethiopian exporter. Both channels can be combined strategically.
        </p>
      </div>

      {/* Table of Contents */}
      <div className='my-8 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <HiOutlineClipboardDocumentList className='text-amber-600' /> In This Guide
        </h3>
        <ol className='space-y-2 text-sm'>
          <li><a href='#three-models' className='text-amber-700 hover:underline'>1. Three Supply Chain Models Explained</a></li>
          <li><a href='#cost-comparison' className='text-amber-700 hover:underline'>2. Cost Comparison by Model</a></li>
          <li><a href='#lot-access' className='text-amber-700 hover:underline'>3. Lot Access, Samples, and Minimum Orders</a></li>
          <li><a href='#traceability-eudr' className='text-amber-700 hover:underline'>4. Traceability and EUDR Compliance</a></li>
          <li><a href='#red-flags' className='text-amber-700 hover:underline'>5. Red Flags in Each Channel</a></li>
          <li><a href='#decision-matrix' className='text-amber-700 hover:underline'>6. Decision Matrix: Which Model Fits Your Business</a></li>
          <li><a href='#hybrid' className='text-amber-700 hover:underline'>7. Hybrid Strategies for Multi-Origin Buyers</a></li>
          <li><a href='#faq' className='text-amber-700 hover:underline'>8. FAQ</a></li>
        </ol>
      </div>

      {/* Introduction */}
      <p className='text-lg leading-relaxed my-4'>
        The question of whether to source Ethiopian green coffee from a direct <strong>Ethiopian coffee exporter</strong> or through a broker rarely receives a structured answer. Most advice defaults to "go direct if you can," without explaining the real cost differential, the compliance implications, or the volume thresholds where the switch becomes worthwhile.
      </p>
      <p className='my-4'>
        This guide examines three distinct supply chain models used by importers and specialty roasters worldwide. Each model involves different counterparties, cost structures, documentation chains, and access levels. Understanding the mechanics of each helps buyers make deliberate sourcing decisions rather than defaulting to whichever option responds first.
      </p>
      <p className='my-4'>
        Note: this guide covers supply chain model choice, not how to evaluate individual exporters. For a scorecard approach to vetting specific companies, see our <Link href='/insights/how-to-choose-ethiopian-coffee-export-company' className='text-amber-700 underline'>guide to choosing an Ethiopian coffee export company</Link>. For structural differences between private exporters and cooperative unions within Ethiopia, see <Link href='/insights/private-vs-cooperative-ethiopian-coffee-exporters' className='text-amber-700 underline'>private vs cooperative Ethiopian coffee exporters</Link>.
      </p>

      {/* Section 1: Three Models */}
      <h3 id='three-models' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineArrowsRightLeft className='w-8 h-8 text-amber-600' />
        1. Three Supply Chain Models Explained
      </h3>

      <p className='my-4'>
        Ethiopian green coffee reaches roasters worldwide through three distinct structures. The differences matter beyond semantics: each model determines who owns the coffee at each stage, who is liable for documentation gaps, and what premium you pay for distance from origin.
      </p>

      <div className='grid md:grid-cols-1 gap-4 my-6'>
        <div className='border border-amber-200 rounded-lg p-5 bg-amber-50'>
          <h4 className='font-bold mb-2 text-lg'>Model A: Direct Origin Exporter</h4>
          <p className='text-sm text-gray-700 mb-2'>
            An ECTA-licensed company based in Ethiopia that sources coffee from cooperatives, washing stations, and dry mills, then ships directly to the buyer under its own export license. The Ethiopian Coffee and Tea Authority (ECTA) issues export licenses to qualifying companies that meet capital, facility, and regulatory requirements. Payment, contracts, quality clauses, and logistics are all negotiated directly between the buyer and this entity.
          </p>
          <p className='text-sm text-gray-700'>
            <strong>Examples:</strong> Ethio Coffee Import and Export PLC and similar origin-registered Ethiopian exporters.
          </p>
        </div>
      </div>

      <div className='grid md:grid-cols-1 gap-4 my-6'>
        <div className='border border-blue-200 rounded-lg p-5 bg-blue-50'>
          <h4 className='font-bold mb-2 text-lg'>Model B: International Green Coffee Broker or Trader</h4>
          <p className='text-sm text-gray-700 mb-2'>
            A company based in the buyer's country or a neutral trading hub (Netherlands, Switzerland, USA) that purchases coffee from origin exporters, holds or ships the stock, and resells to roasters. Some traders have deep origin relationships and use sourcing programs at washing stations. Others are pure re-traders who aggregate spot lots. The buyer's contract is with the international entity, not the Ethiopian exporter.
          </p>
          <p className='text-sm text-gray-700'>
            <strong>Examples:</strong> Café Imports (USA), Trabocca (Netherlands), Sucafina (Switzerland), Volcafe (global), along with dozens of smaller national specialty importers.
          </p>
        </div>
      </div>

      <div className='grid md:grid-cols-1 gap-4 my-6'>
        <div className='border border-green-200 rounded-lg p-5 bg-green-50'>
          <h4 className='font-bold mb-2 text-lg'>Model C: Local In-Country Import Specialist</h4>
          <p className='text-sm text-gray-700 mb-2'>
            A domestic operator (often a small importer or specialty distributor) who buys from Model B traders or, in some cases, from origin exporters directly, then provides domestic logistics, customs clearance, warehousing, and sometimes quality sorting. Buyers contract with this local entity and receive coffee in domestic currency with full landed delivery. Common in Germany, Japan, and the United Kingdom, where specialist distributors serve smaller roasters who cannot clear customs independently.
          </p>
          <p className='text-sm text-gray-700'>
            <strong>Examples:</strong> Regional specialty green coffee distributors in domestic markets.
          </p>
        </div>
      </div>

      {/* Section 2: Cost Comparison */}
      <h3 id='cost-comparison' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineCurrencyDollar className='w-8 h-8 text-amber-600' />
        2. Cost Comparison by Model
      </h3>

      <p className='my-4'>
        The primary cost difference between models is the margin each intermediary adds. Each layer between the Ethiopian coffee exporter and the roaster adds a cost component: purchasing margin, storage, logistics management, and overhead allocation. Ethiopian export reference prices are tracked monthly by the <a href='https://www.ico.org/' target='_blank' rel='noopener noreferrer' className='text-amber-700 underline'>International Coffee Organization (ICO)</a>; the model cost differentials below sit on top of that baseline.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Cost Factor</th>
              <th className='p-3 text-left font-bold'>Model A: Direct Exporter</th>
              <th className='p-3 text-left font-bold'>Model B: Broker/Trader</th>
              <th className='p-3 text-left font-bold'>Model C: Local Specialist</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Base price</td>
              <td className='p-3'>True FOB Djibouti</td>
              <td className='p-3'>FOB + 8–18% sourcing margin</td>
              <td className='p-3'>FOB + 20–35% total markup</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Incoterm typically offered</td>
              <td className='p-3'>FOB Djibouti, FCA Addis Ababa, CIF</td>
              <td className='p-3'>DAP or CIF buyer's port</td>
              <td className='p-3'>DDP or DAP domestic address</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Freight and insurance</td>
              <td className='p-3'>Buyer arranges (controllable)</td>
              <td className='p-3'>Included in price (opaque)</td>
              <td className='p-3'>Included, often marked up</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Sample cost</td>
              <td className='p-3'>Often free or low-cost</td>
              <td className='p-3'>Free to small fee; stock samples available fast</td>
              <td className='p-3'>Usually free; from warehouse stock</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Currency exposure</td>
              <td className='p-3'>USD or EUR vs ETB managed by exporter</td>
              <td className='p-3'>USD or EUR; broker absorbs ETB risk</td>
              <td className='p-3'>Domestic currency; fully hedged</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Payment terms</td>
              <td className='p-3'>LC, CAD, or TT (negotiated)</td>
              <td className='p-3'>Net 30–60 for established buyers; LC for new</td>
              <td className='p-3'>Often net 30–45; domestic payment</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Indicative per-kg premium over FOB</td>
              <td className='p-3'>Zero (you pay the FOB price)</td>
              <td className='p-3'>+$0.40–$1.20/kg</td>
              <td className='p-3'>+$0.80–$2.00/kg</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='bg-blue-50 border border-blue-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3'>Cost Example: 1 FCL of Grade 1 Yirgacheffe Washed</h4>
        <p className='text-sm text-gray-700'>
          A 19-MT container of Grade 1 Yirgacheffe washed at a benchmark FOB of $7.50/kg costs <strong>$142,500 FOB</strong> direct from a licensed Ethiopian coffee exporter. The same coffee sourced through a mid-size international trader at a delivered DAP price of $8.70/kg arrives at <strong>$165,300 DAP</strong>. That $22,800 difference covers the trader's margin and logistics handling. Over four containers per year, the direct model saves approximately $91,000 before accounting for your freight and customs costs.
        </p>
        <p className='text-sm text-gray-700 mt-2'>
          For a roaster buying 20 MT annually, the direct model typically becomes cost-neutral to advantageous once shipping and customs are factored in, assuming competent logistics management. Below 5 MT, the broker's convenience and no-minimum-freight structure often wins on total cost.
        </p>
      </div>

      <p className='my-4'>
        For a full breakdown of FOB-to-warehouse cost calculation, see our <Link href='/insights/ethiopian-coffee-landed-cost-guide' className='text-amber-700 underline'>Ethiopian coffee landed cost guide</Link>. For Incoterm selection strategy, see the <Link href='/insights/ethiopian-coffee-incoterms-guide' className='text-amber-700 underline'>Ethiopian coffee Incoterms guide</Link>.
      </p>

      {/* Section 3: Lot Access */}
      <h3 id='lot-access' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineMagnifyingGlass className='w-8 h-8 text-amber-600' />
        3. Lot Access, Samples, and Minimum Orders
      </h3>

      <p className='my-4'>
        Access to the Ethiopian coffee lots you actually want, and the ability to evaluate them before committing, varies dramatically across models. This factor matters more than price for specialty buyers chasing specific micro-lots or limited harvest allocations.
      </p>

      <h4 className='text-xl font-bold mt-8 mb-4'>Model A: First Access, Custom Specs</h4>
      <p className='my-4'>
        A direct Ethiopian coffee exporter has first access to washing station lots before they reach any international catalog. When you work with an origin-based exporter, you can submit a brief (target cup score, region, process, screen size, moisture spec) and receive offer samples from the season's available lots before competitors see them. This is the only model where a buyer can request custom lot specs, reserve specific washing station allocations, or book micro-lots below 10 bags for single-origin programs.
      </p>
      <p className='my-4'>
        Minimum orders for a direct exporter typically start at one FCL (approximately 300 bags, 19–20 MT) for standard lots. Some exporters accommodate LCL shipments starting from 50–100 bags (5–10 MT), though freight efficiency drops. For micro-lots, quantities can be as small as 5–20 bags when logistics allow consolidation.
      </p>

      <h4 className='text-xl font-bold mt-8 mb-4'>Model B: Broad Catalog, Ready Stock</h4>
      <p className='my-4'>
        International brokers and traders maintain spot stock across multiple origins. For Ethiopia, a well-stocked trader may carry 5–15 different lots simultaneously, with samples available within 48–72 hours by courier. This convenience is real and valuable: no harvest timing dependency, no waiting for season allocation, no CLU inspection delay. The lot you cup today is the lot available to buy this week.
      </p>
      <p className='my-4'>
        The trade-off is selection depth. Traders cherry-pick the lots they believe will sell across their full client base. Ultra-specialty micro-lots, unusual processing experiments, or tight-allocation single-washing-station lots rarely appear in broker catalogs because the exporter has already placed them with preferred direct buyers. If a specific region or profile is your signature, brokers may not have it.
      </p>
      <p className='my-4'>
        Minimum orders through brokers are often more flexible: some specialty importers sell bags as small as 1–5 (60 kg each), with no formal container requirement. This makes Model B the practical choice for roasters buying under 500 kg of any single origin.
      </p>

      <h4 className='text-xl font-bold mt-8 mb-4'>Model C: Domestic Warehouse Samples</h4>
      <p className='my-4'>
        Local import specialists stock a curated range, typically drawn from one or two brokers. Sample turnaround is fastest (same-day courier from a nearby warehouse). Lot selection is narrowest. These operators serve roasters who want relationship-free, invoice-simple buying of verified stock. Volumes of 1–3 bags per order are common. For a roaster with monthly volumes under 300 kg, this model avoids customs complexity entirely.
      </p>

      {/* Section 4: Traceability and EUDR */}
      <h3 id='traceability-eudr' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineShieldCheck className='w-8 h-8 text-amber-600' />
        4. Traceability and EUDR Compliance
      </h3>

      <p className='my-4'>
        The <a href='https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32023R1115' target='_blank' rel='noopener noreferrer' className='text-amber-700 underline'>EU Deforestation Regulation (EU 2023/1115)</a>, now in active enforcement for large operators, requires EU buyers to conduct due diligence that includes geolocation data for the production area and a Due Diligence Statement filed in the EU Information System. The supply chain model you choose directly determines how complete your EUDR documentation package will be.
      </p>
      <p className='my-4'>
        Ethiopia has received a <strong>standard risk</strong> classification under the EUDR country benchmarking system, meaning EU importers are required to perform full due diligence. This makes the documentation capability of your supply chain partner a compliance variable, not merely a preference.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>EUDR Requirement</th>
              <th className='p-3 text-left font-bold'>Model A: Direct Exporter</th>
              <th className='p-3 text-left font-bold'>Model B: Broker/Trader</th>
              <th className='p-3 text-left font-bold'>Model C: Local Specialist</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Geolocation polygon data</td>
              <td className='p-3'>Available at washing station or cooperative level</td>
              <td className='p-3'>Varies; strong origin-program traders provide it; commodity traders often cannot</td>
              <td className='p-3'>Depends on their supplier; rarely held directly</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Farmer group documentation</td>
              <td className='p-3'>Cooperative member lists, cooperative registration</td>
              <td className='p-3'>Depends on sourcing program depth</td>
              <td className='p-3'>Passed through if broker provides it</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>ECTA chain of custody certificate</td>
              <td className='p-3'>Yes, directly from the exporter</td>
              <td className='p-3'>Obtained from their Ethiopian supplier; may or may not be shared</td>
              <td className='p-3'>Depends on broker transparency</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>CLU quality inspection certificate</td>
              <td className='p-3'>Always provided (required for export)</td>
              <td className='p-3'>Always included in shipping documents</td>
              <td className='p-3'>Always included</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Deforestation-free supporting evidence</td>
              <td className='p-3'>Satellite data, forest boundary maps, land use certificates</td>
              <td className='p-3'>Depends heavily on trader's EUDR program maturity</td>
              <td className='p-3'>Dependent on Model B supplier</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>EUDR due diligence statement (DDS)</td>
              <td className='p-3'>Buyer files DDS; exporter provides supporting evidence package</td>
              <td className='p-3'>Some large traders file their own DDS and share reference numbers; others leave it to the buyer</td>
              <td className='p-3'>Buyer or specialist files; depends on contract terms</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        For EU buyers where EUDR compliance is non-negotiable, a direct Ethiopian coffee exporter with an established geolocation and cooperative documentation program provides the most complete audit trail. When using a broker, request their EUDR documentation package before finalizing any contract and verify whether they have filed or can support your DDS filing. Do not assume compliance; confirm it contractually.
      </p>

      <p className='my-4'>
        For deeper background on the EUDR and its documentation requirements for Ethiopian coffee, see our dedicated guide at <Link href='/insights/eu-deforestation-regulation-ethiopian-coffee-compliance' className='text-amber-700 underline'>EUDR and Ethiopian coffee compliance</Link>.
      </p>

      {/* Section 5: Red Flags */}
      <h3 id='red-flags' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineExclamationTriangle className='w-8 h-8 text-amber-600' />
        5. Red Flags in Each Channel
      </h3>

      <p className='my-4'>
        Each supply chain model has characteristic failure modes. Knowing them protects buyers from avoidable losses.
      </p>

      <div className='grid md:grid-cols-3 gap-4 my-6'>
        <div className='border border-red-200 rounded-lg p-5 bg-red-50'>
          <h4 className='font-bold mb-2 text-sm text-red-800'>Model A Red Flags</h4>
          <ul className='space-y-1 text-sm text-gray-700'>
            <li>&bull; Cannot provide ECTA export license number</li>
            <li>&bull; No CLU inspection process described</li>
            <li>&bull; Refuses to send pre-shipment samples</li>
            <li>&bull; Vague delivery timeline ("4–8 weeks" with no milestones)</li>
            <li>&bull; No quality clause or weight tolerance in contract</li>
            <li>&bull; Asks for 100% payment before pre-shipment sample approval</li>
            <li>&bull; Communication gaps of more than 72 hours during active order</li>
          </ul>
        </div>
        <div className='border border-orange-200 rounded-lg p-5 bg-orange-50'>
          <h4 className='font-bold mb-2 text-sm text-orange-800'>Model B Red Flags</h4>
          <ul className='space-y-1 text-sm text-gray-700'>
            <li>&bull; Cannot name the Ethiopian exporter their stock came from</li>
            <li>&bull; No traceability documentation beyond the cup score</li>
            <li>&bull; Only sells in minimum 5-bag or 10-bag increments with no sample program</li>
            <li>&bull; Offers Ethiopian coffee at suspiciously low prices (suggests blending or off-grade lots)</li>
            <li>&bull; Cannot provide EUDR documentation or clear reference to who filed the DDS</li>
            <li>&bull; Lot descriptions change after initial offer without explanation</li>
          </ul>
        </div>
        <div className='border border-yellow-200 rounded-lg p-5 bg-yellow-50'>
          <h4 className='font-bold mb-2 text-sm text-yellow-800'>Model C Red Flags</h4>
          <ul className='space-y-1 text-sm text-gray-700'>
            <li>&bull; Re-bags coffee on arrival with new origin labels (loss of traceability)</li>
            <li>&bull; Cannot identify the broker or trader they sourced from</li>
            <li>&bull; Mixes lots from different origins or harvest years in the same stock bag</li>
            <li>&bull; No original shipping documents (bill of lading, packing list, phytosanitary) available on request</li>
            <li>&bull; Inflated markups with no value-add (no sorting, grading, or quality services)</li>
          </ul>
        </div>
      </div>

      {/* Section 6: Decision Matrix */}
      <h3 id='decision-matrix' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineTableCells className='w-8 h-8 text-amber-600' />
        6. Decision Matrix: Which Model Fits Your Business
      </h3>

      <p className='my-4'>
        The right model depends on four buyer variables: annual volume, logistics capability, EUDR compliance obligations, and sourcing specificity. Use this matrix as a starting point; most buyers adjust their model as their business scales.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Buyer Profile</th>
              <th className='p-3 text-left font-bold'>Annual Ethiopian Volume</th>
              <th className='p-3 text-left font-bold'>Recommended Model</th>
              <th className='p-3 text-left font-bold'>Primary Reason</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>New specialty roaster</td>
              <td className='p-3'>&lt;2 MT</td>
              <td className='p-3'>Model C or B</td>
              <td className='p-3'>Convenience, no customs complexity, fast samples</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Growing specialty roaster</td>
              <td className='p-3'>2–5 MT</td>
              <td className='p-3'>Model B primarily</td>
              <td className='p-3'>Consolidation with multiple origins; sample library access</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Established specialty roaster</td>
              <td className='p-3'>5–15 MT</td>
              <td className='p-3'>Model A + B hybrid</td>
              <td className='p-3'>Direct for core origins; broker for flexibility and spot buys</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Large specialty roaster or importer</td>
              <td className='p-3'>&gt;15 MT</td>
              <td className='p-3'>Model A primary</td>
              <td className='p-3'>Cost savings, first-access allocation, full EUDR documentation</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Micro-lot / single-origin program buyer</td>
              <td className='p-3'>Any</td>
              <td className='p-3'>Model A</td>
              <td className='p-3'>Only direct exporter provides custom lot briefs and pre-allocation access</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>EU buyer, EUDR compliance critical</td>
              <td className='p-3'>Any</td>
              <td className='p-3'>Model A strongly preferred</td>
              <td className='p-3'>Deepest geolocation and cooperative documentation; no documentation gaps in audit trail</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>HoReCa or café chain buyer</td>
              <td className='p-3'>2–10 MT</td>
              <td className='p-3'>Model B or C</td>
              <td className='p-3'>Consistent standard lot supply; domestic credit terms; simple logistics</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Buyer Persona */}
      <div className='border-l-4 border-amber-500 pl-6 bg-gray-50 p-4 my-6'>
        <h4 className='font-bold text-lg mb-2'>Buyer Persona: A French Specialty Roaster Transitioning Models</h4>
        <p className='text-sm text-gray-700'>
          A roasting company in Lyon sourcing 8 MT of Ethiopian coffee annually started on Model B (a specialty Dutch trader) in year one. After two seasons cupping the same five lots in their catalog, the roaster wanted more differentiation: specific washing station Yirgacheffe, a natural Guji with a particular drying station. They began a direct relationship with a licensed Ethiopian coffee exporter, booking 4 MT direct for their two hero origins and maintaining the Dutch trader for the remaining 4 MT as spot flexibility. Within two seasons, the direct model's EUDR documentation package also simplified their annual compliance audit in France. Cost savings on the direct portion ran to approximately €18,000 per year after freight.
        </p>
      </div>

      {/* Section 7: Hybrid Strategies */}
      <h3 id='hybrid' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineAdjustmentsHorizontal className='w-8 h-8 text-amber-600' />
        7. Hybrid Strategies for Multi-Origin Buyers
      </h3>

      <p className='my-4'>
        The binary choice between direct and broker is a false constraint for most buyers. The most resilient sourcing programs use both channels deliberately, assigning each model a specific role.
      </p>

      <h4 className='text-xl font-bold mt-8 mb-4'>Core Origins Direct, Spot Buys Through Broker</h4>
      <p className='my-4'>
        Identify one or two Ethiopian origins that define your offering: perhaps Kochere-area Yirgacheffe washed and a Hambella natural. Source these exclusively through a direct Ethiopian coffee exporter. Lock allocations before peak season (November–January) by maintaining a relationship with your exporter through off-season communication: flavor feedback from previous lots, next-season volume intentions, and EUDR documentation requests. For other Ethiopian origins you use in smaller volumes or one-off projects, purchase through a trusted broker's catalog.
      </p>

      <h4 className='text-xl font-bold mt-8 mb-4'>Building Toward Direct Over Two to Three Seasons</h4>
      <p className='my-4'>
        Buyers who want to migrate from broker to direct sourcing rarely succeed by switching abruptly. A structured transition works better: in season one, cup extensively through a broker to identify the Ethiopian origins and profiles you want to own long-term. In season two, initiate a direct sample program with one or two licensed Ethiopian exporters while maintaining your broker relationship as backup. By season three, you have a verified direct supplier with an established sample-to-contract workflow and the confidence to book a container without broker intermediation.
      </p>
      <p className='my-4'>
        This approach also protects quality continuity: if your direct exporter experiences a logistics delay, your broker relationship provides emergency cover without a sourcing gap.
      </p>

      <h4 className='text-xl font-bold mt-8 mb-4'>When to Retain a Broker Permanently</h4>
      <p className='my-4'>
        Some buyers have legitimate ongoing reasons to maintain a broker relationship even at volume. If your business model requires same-week delivery, short-term spot contracts, or the ability to buy across six to eight origins with a single relationship, a broker's consolidated offer list may be more efficient than managing five or six direct export relationships. The economics shift when Ethiopian coffee represents more than 60% of your total green buying and you consistently use two or more Ethiopian lots simultaneously.
      </p>
      <p className='my-4'>
        Reassessing the Ethiopian coffee exporter vs broker vs trader balance every one to two seasons is worthwhile: volume, EUDR timelines, and harvest access each change the calculus.
      </p>

      {/* CTA Block */}
      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Source Ethiopian Coffee Directly from Origin</h4>
        <p className='my-2'>
          Ethio Coffee Import and Export PLC is an ECTA-licensed Ethiopian coffee exporter with heritage sourcing relationships across Yirgacheffe, Guji, Sidamo, Harar, Limu, and Jimma. Our sample program gives buyers first access to new season lots before they appear in any catalog, with full EUDR documentation packages provided on request.
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
            <h4 className='font-bold text-gray-800 mb-2'>What markup does a typical Ethiopian coffee broker add over the FOB price?</h4>
            <p className='text-sm text-gray-600'>International specialty brokers typically add 8–18% over the origin FOB price, covering sourcing costs, warehouse storage, logistics management, and their margin. Commodity traders may add less but provide fewer quality or traceability services. The actual markup depends on lot type, volume, and service level agreed.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Can I buy Ethiopian coffee in very small quantities directly from an exporter?</h4>
            <p className='text-sm text-gray-600'>Some licensed Ethiopian coffee exporters accommodate LCL (less-than-container-load) shipments starting from 50–100 bags (5–10 MT), particularly for micro-lot programs. Below that, the freight cost per kilogram makes LCL uneconomic for most buyers. Roasters under 2 MT annually typically find Model B brokers more practical for small-volume buying.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>How do I verify an Ethiopian coffee exporter's ECTA license is genuine?</h4>
            <p className='text-sm text-gray-600'>Request the exporter's ECTA export license number and registration documents. Cross-reference with the Ethiopian Coffee and Tea Authority registry. A legitimate exporter provides CLU inspection certificates per shipment and ECX registration for lots processed through the exchange.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>What EUDR documentation should a direct Ethiopian coffee exporter provide?</h4>
            <p className='text-sm text-gray-600'>A EUDR-ready Ethiopian exporter should provide geolocation polygon data for the cooperatives or washing stations sourced, a cooperative or farmer group list, satellite land-use evidence confirming no deforestation, ECTA chain-of-custody documentation, CLU inspection certificates, and a phytosanitary certificate. These documents form the core of your Due Diligence Statement in the EU EUDR information system.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>At what annual volume does switching to direct sourcing make financial sense?</h4>
            <p className='text-sm text-gray-600'>The break-even varies by origin and port, but most specialty buyers find that 10–15 MT annually through a direct exporter generates net savings after freight and customs. Below 5 MT, broker convenience and flexible minimum orders typically offset the price premium. Between 5–10 MT, a hybrid approach reduces risk while testing the direct channel.</p>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <div className='my-10 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4'>Related Articles</h3>
        <div className='grid md:grid-cols-2 gap-4'>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Choosing & Evaluating Exporters</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/how-to-choose-ethiopian-coffee-export-company' className='text-amber-700 hover:underline'>How to Choose an Ethiopian Coffee Export Company</Link></li>
              <li>&bull; <Link href='/insights/private-vs-cooperative-ethiopian-coffee-exporters' className='text-amber-700 hover:underline'>Private vs Cooperative Ethiopian Coffee Exporters</Link></li>
              <li>&bull; <Link href='/insights/green-coffee-supplier-evaluation-checklist' className='text-amber-700 hover:underline'>Green Coffee Supplier Evaluation Checklist</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-export-process-buyers-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Export Process: A Buyer's Guide</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Contracts, Cost & Compliance</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/ethiopian-coffee-landed-cost-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Landed Cost Guide</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-incoterms-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Incoterms Guide</Link></li>
              <li>&bull; <Link href='/insights/eu-deforestation-regulation-ethiopian-coffee-compliance' className='text-amber-700 hover:underline'>EUDR and Ethiopian Coffee Compliance</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-contracts-payment-terms-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Contracts & Payment Terms</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Traceability & Documentation</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/ethiopian-coffee-traceability-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Traceability Guide</Link></li>
              <li>&bull; <Link href='/insights/green-coffee-shipping-documents-checklist' className='text-amber-700 hover:underline'>Green Coffee Shipping Documents Checklist</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-sample-approval-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Sample Approval Guide</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Origin & Sourcing Guides</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/yirgacheffe-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Yirgacheffe Coffee Sourcing Guide</Link></li>
              <li>&bull; <Link href='/insights/guji-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Guji Coffee Sourcing Guide</Link></li>
              <li>&bull; <Link href='/insights/micro-lot-ethiopian-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Micro-Lot Ethiopian Coffee Sourcing Guide</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-offer-sheet-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Offer Sheet Guide</Link></li>
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
