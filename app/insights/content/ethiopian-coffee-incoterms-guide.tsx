import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import {
  HiOutlineClipboardDocumentList,
  HiOutlineLightBulb,
  HiOutlineGlobeAlt,
  HiOutlineDocumentText,
  HiOutlineScale,
  HiOutlineTruck,
  HiOutlineCurrencyDollar,
  HiOutlineExclamationTriangle,
  HiOutlineCheckCircle,
  HiOutlineBuildingOffice2,
} from 'react-icons/hi2'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function EthiopianCoffeeIncotermsGuide({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        A practical guide to Ethiopian coffee Incoterms 2020 for importers: when to use FOB Djibouti, FCA Addis Ababa, CIF, or DAP, with a buyer decision matrix and cost-impact breakdown.
      </h2>

      <figure>
        <figcaption className='font-inconsolata my-2'>{title}</figcaption>
        <div className='w-full aspect-[5/3] overflow-hidden rounded-md bg-gray-200 flex items-center justify-center'>
          {/* TODO: Replace placeholder with actual hero image */}
          {/* Expected path: /images/insights/ethiopian-coffee-incoterms-guide.webp */}
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Ethiopian coffee Incoterms guide showing FOB Djibouti and FCA Addis Ababa shipping routes for green coffee importers'
            fill
            objectFit='cover'
            className='w-full h-full'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>
      </figure>

      <div className='my-4 text-sm bg-amber-50 p-4 rounded-lg border border-amber-200'>
        <span className='font-semibold'>Category:</span>
        <span className='ml-2'>Trade Logistics / Import Contracts / Incoterms 2020 / Importer Resources</span>
      </div>

      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-8 border border-amber-200'>
        <h3 className='font-bold text-xl mb-3 flex items-center gap-2'>
          <HiOutlineLightBulb className='text-amber-400 flex-shrink-0' />Key Takeaway
        </h3>
        <p className='text-sm leading-relaxed'>
          Ethiopian coffee Incoterms differ from other origins because all export cargo routes through Djibouti, roughly 950 km from Addis Ababa by road and rail. FOB Djibouti is the market standard: risk transfers to the buyer when the lot is loaded onto the vessel at Djibouti port. FCA Addis Ababa suits buyers who want their own forwarder controlling the container from origin. CIF is available but removes the buyer's ability to negotiate freight costs independently. Understand which term you are quoting before requesting a pro-forma invoice, as switching terms after the contract is signed requires both parties to renegotiate the price.
        </p>
      </div>

      <div className='my-8 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <HiOutlineClipboardDocumentList className='text-amber-600' /> In This Guide
        </h3>
        <ol className='space-y-2 text-sm'>
          <li><a href='#why-incoterms-matter' className='text-amber-700 hover:underline'>1. Why Incoterms are more complex for Ethiopian coffee</a></li>
          <li><a href='#five-incoterms' className='text-amber-700 hover:underline'>2. The five Incoterms you will see in Ethiopian coffee contracts</a></li>
          <li><a href='#fob-djibouti' className='text-amber-700 hover:underline'>3. FOB Djibouti: the market standard in practice</a></li>
          <li><a href='#fca-addis' className='text-amber-700 hover:underline'>4. FCA Addis Ababa: when to choose origin-side control</a></li>
          <li><a href='#cif-cpt' className='text-amber-700 hover:underline'>5. CIF and CPT: when the exporter handles freight</a></li>
          <li><a href='#dap-ddp' className='text-amber-700 hover:underline'>6. DAP and DDP: delivered terms and who uses them</a></li>
          <li><a href='#decision-matrix' className='text-amber-700 hover:underline'>7. Buyer decision matrix: which Incoterm fits your profile</a></li>
          <li><a href='#contract-impact' className='text-amber-700 hover:underline'>8. What your Incoterm choice changes in the contract</a></li>
          <li><a href='#faq' className='text-amber-700 hover:underline'>9. Frequently asked questions</a></li>
        </ol>
      </div>

      <p className='my-4 text-lg leading-relaxed'>
        Every Ethiopian coffee contract includes an Incoterm, even when neither party has explicitly chosen one. Defaulting to whatever term the exporter quotes without understanding the cost and risk transfer is one of the most common and preventable mistakes first-time importers make. This guide covers the Ethiopian coffee Incoterms that actually appear in practice, the geography that shapes every choice, and a decision framework for matching the right term to your buying setup.
      </p>

      <p className='my-4'>
        For context on payment terms such as letters of credit and telegraphic transfers, see our <Link href='/insights/ethiopian-coffee-contracts-payment-terms-guide' className='text-amber-700 hover:text-amber-900 underline'>Ethiopian coffee contracts and payment terms guide</Link>. This article focuses solely on delivery terms.
      </p>

      {/* SECTION 1 */}
      <h3 id='why-incoterms-matter' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineGlobeAlt className='w-8 h-8 text-amber-600' />
        1. Why Incoterms are more complex for Ethiopian coffee
      </h3>

      <p className='my-4'>
        Most coffee origins are coastal: Brazilian Santos, Colombian Buenaventura, and Vietnamese Ho Chi Minh City all have direct port access. Ethiopia does not. The country is landlocked, and virtually all export coffee moves by truck or rail from Addis Ababa to Djibouti City, a journey of roughly 950 km. From Djibouti, container vessels sail to Hamburg, Rotterdam, New York, Yokohama, or Jeddah.
      </p>

      <p className='my-4'>
        This geography creates a longer and more complex supply chain than most origins, with two distinct transfer points:
      </p>

      <ul className='list-disc list-inside space-y-2 my-4 text-sm'>
        <li><span className='font-semibold'>Addis Ababa (dry port or exporter warehouse):</span> Where coffee is bagged, export permits are processed, and the Ethiopia Commodity Exchange (ECX) clearance is completed. This is where FCA transfer occurs.</li>
        <li><span className='font-semibold'>Djibouti Port (Port of Djibouti):</span> Where containers are loaded onto vessels. This is where FOB transfer occurs. Djibouti Port is also subject to congestion; delays of 3-10 days are not uncommon in peak shipping season.</li>
      </ul>

      <p className='my-4'>
        The inland leg from Addis to Djibouti adds cost and time to every shipment. Under FOB, the exporter pays that inland leg and the buyer takes over risk only at the ship's rail in Djibouti. Under FCA Addis Ababa, risk transfers earlier and the buyer's forwarder manages the inland leg and port handling. The choice has real financial and operational consequences.
      </p>

      <div className='bg-blue-50 border border-blue-200 rounded-lg p-6 my-6'>
        <p className='text-sm font-semibold mb-2'>ECX Clearance Note</p>
        <p className='text-sm'>
          All export-grade Ethiopian coffee, whether from the ECX channel or a direct specialty license (DSL), requires an export permit and quality certification from the Coffee and Tea Authority (CTA). This clearance happens in Addis Ababa before the cargo trucks to Djibouti. It is a regulatory step the exporter handles regardless of which Incoterm is in the contract. For a full explanation of the export process, see our <Link href='/insights/ethiopian-coffee-export-process-buyers-guide' className='text-amber-700 hover:text-amber-900 underline'>Ethiopian coffee export process buyer&apos;s guide</Link>.
        </p>
      </div>

      {/* SECTION 2 */}
      <h3 id='five-incoterms' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineDocumentText className='w-8 h-8 text-amber-600' />
        2. The five Incoterms you will see in Ethiopian coffee contracts
      </h3>

      <p className='my-4'>
        Of the eleven Incoterms 2020 rules published by the International Chamber of Commerce (ICC), Ethiopian coffee trade routinely uses five. EXW is theoretically possible but impractical because the buyer would have to manage Ethiopian customs export clearance; no licensed exporter uses it. DES, DEQ, and DAF are legacy terms from pre-2010 versions and have no place in modern contracts.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Incoterm</th>
              <th className='p-3 text-left font-bold'>Risk Transfer Point</th>
              <th className='p-3 text-left font-bold'>Who Pays Inland Leg</th>
              <th className='p-3 text-left font-bold'>Who Arranges Freight</th>
              <th className='p-3 text-left font-bold'>Use in Ethiopian Coffee</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>FOB Djibouti</td>
              <td className='p-3'>On board vessel at Djibouti port</td>
              <td className='p-3'>Exporter</td>
              <td className='p-3'>Buyer</td>
              <td className='p-3'>Market standard; most Ethiopian coffee contracts use FOB</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>FCA Addis Ababa</td>
              <td className='p-3'>At named carrier in Addis Ababa</td>
              <td className='p-3'>Buyer</td>
              <td className='p-3'>Buyer</td>
              <td className='p-3'>Growing; used when buyer controls the container</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>CIF [destination port]</td>
              <td className='p-3'>On board vessel at Djibouti port</td>
              <td className='p-3'>Exporter</td>
              <td className='p-3'>Exporter</td>
              <td className='p-3'>Occasional; simplifies first-time purchases</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>CPT [destination port]</td>
              <td className='p-3'>At first carrier in Addis Ababa</td>
              <td className='p-3'>Exporter</td>
              <td className='p-3'>Exporter</td>
              <td className='p-3'>Rare; multimodal equivalent of CFR</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>DAP [destination address]</td>
              <td className='p-3'>At named destination, ready to unload</td>
              <td className='p-3'>Exporter</td>
              <td className='p-3'>Exporter</td>
              <td className='p-3'>Uncommon; used for Gulf and some Asian markets</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        Incoterms define risk and cost transfer only. They do not govern payment terms, quality specifications, or ownership title. A contract can read &quot;FOB Djibouti, payment by irrevocable LC at sight&quot; or &quot;FOB Djibouti, payment 30% TT advance, 70% against documents.&quot; The Incoterm and payment method are independent choices. All eleven rules are published by the <a href='https://iccwbo.org/business-solutions/incoterms-rules/incoterms-2020/' className='text-amber-700 hover:text-amber-900 underline' target='_blank' rel='noopener noreferrer'>International Chamber of Commerce (Incoterms 2020)</a>; the ICC publication is the authoritative reference for any dispute.
      </p>

      {/* SECTION 3 */}
      <h3 id='fob-djibouti' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineTruck className='w-8 h-8 text-amber-600' />
        3. FOB Djibouti: the market standard in practice
      </h3>

      <p className='my-4'>
        FOB (Free On Board) Djibouti is the default term for Ethiopian green coffee exports. When an exporter quotes a price, it is almost always an FOB Djibouti price unless stated otherwise. The exporter&apos;s responsibility ends the moment the container clears the ship&apos;s rail at Djibouti port. Everything from that point, ocean freight, insurance, destination port handling, import duties, and onward delivery, is the buyer&apos;s cost and risk.
      </p>

      <p className='my-4'>
        Under FOB Djibouti, the exporter covers:
      </p>

      <ul className='list-disc list-inside space-y-1 my-4 text-sm'>
        <li>Coffee procurement, processing, and export preparation</li>
        <li>ECX clearance, export permit, phytosanitary certificate, ICO certificate of origin</li>
        <li>Bagging, weighing, and warehouse handling in Addis Ababa</li>
        <li>Inland haulage: truck or rail from Addis Ababa to Djibouti (approximately $300-600 per 20ft container [NEEDS VERIFICATION])</li>
        <li>Djibouti port loading charges (terminal handling, container weighing, ISPS surcharge)</li>
        <li>The cost and risk until the container is physically on board the named vessel</li>
      </ul>

      <p className='my-4'>
        The buyer covers:
      </p>

      <ul className='list-disc list-inside space-y-1 my-4 text-sm'>
        <li>Ocean freight from Djibouti to the destination port</li>
        <li>Marine cargo insurance (minimum ICC-C is included only under CIF; FOB buyers arrange their own)</li>
        <li>Destination port charges, import duties, customs brokerage, and delivery to warehouse</li>
        <li>Any additional inspection fees at destination (SOIVRE in Spain, CIQ in China, etc.)</li>
      </ul>

      <div className='bg-amber-50 border border-amber-200 rounded-lg p-6 my-6'>
        <p className='text-sm font-semibold mb-2'>Djibouti Congestion Risk</p>
        <p className='text-sm'>
          Djibouti Port is one of the busiest in East Africa, handling traffic from Ethiopia, South Sudan, and landlocked parts of the Horn of Africa. During peak coffee shipping season (February to June), vessel delays of 3-10 days are common. Under FOB, this congestion risk falls on the exporter: if the cargo is waiting at the port and cannot load because no vessel is available, the exporter bears that cost. Once loaded, congestion after departure becomes the buyer&apos;s concern. Build this variability into your arrival estimates.
        </p>
      </div>

      <p className='my-4'>
        FOB is best for buyers who have an established freight forwarder and can obtain competitive ocean freight rates on their own. Large importers buying full container loads (FCL) regularly often pay less for freight than an exporter would charge on CIF, making FOB the economically optimal choice.
      </p>

      {/* SECTION 4 */}
      <h3 id='fca-addis' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineBuildingOffice2 className='w-8 h-8 text-amber-600' />
        4. FCA Addis Ababa: when to choose origin-side control
      </h3>

      <p className='my-4'>
        FCA (Free Carrier) Addis Ababa transfers risk to the buyer at a named point in Addis Ababa, typically the exporter&apos;s warehouse, a dry port, or the Kaliti or Lebu freight stations. The buyer&apos;s nominated forwarder takes custody of the container from that point and manages the inland leg to Djibouti and the ocean freight to destination.
      </p>

      <p className='my-4'>
        The practical advantage: the buyer&apos;s forwarder consolidates Ethiopian cargo with other origins in a single container or manages a multi-origin booking across East Africa, reducing per-unit freight costs. Japanese and Korean specialty importers who source from Ethiopia, Kenya, and Tanzania in the same season sometimes use FCA for each origin to allow one forwarder to manage the full East African consolidation.
      </p>

      <p className='my-4'>
        An important update from Incoterms 2020: buyers using FCA under a letter of credit can now instruct the carrier to issue an on-board bill of lading to the seller. Before this change, LC banks required an on-board B/L but FCA transferred risk before loading, creating a conflict. The 2020 rules resolved this by allowing the buyer to request an on-board notation, making FCA viable for LC-financed purchases.
      </p>

      <div className='bg-gray-50 border border-gray-200 rounded-lg p-6 my-6'>
        <p className='text-sm font-semibold mb-2'>FCA Named Point Options in Ethiopia</p>
        <ul className='list-disc list-inside space-y-1 text-sm mt-2'>
          <li><span className='font-semibold'>FCA Exporter&apos;s warehouse, Addis Ababa:</span> Risk transfers at the exporter&apos;s bagging warehouse; the buyer&apos;s truck driver collects the loaded container</li>
          <li><span className='font-semibold'>FCA Dry port / ICD, Addis Ababa:</span> Risk transfers at the inland container depot, which is staffed and has formal handover documentation</li>
          <li><span className='font-semibold'>FCA Modjo ICD:</span> Some exporters use the Modjo logistics hub ~75 km from Addis; confirm the exact named point in the contract</li>
        </ul>
        <p className='text-sm mt-3 italic'>Always specify the exact named place. &quot;FCA Ethiopia&quot; is not a valid Incoterm because it does not identify a specific delivery point.</p>
      </div>

      <p className='my-4'>
        FCA costs slightly more work for the buyer upfront (instructing a forwarder in Addis Ababa and managing inland tracking), but it gives the buyer direct visibility into the container from the moment it leaves the exporter&apos;s warehouse, which is valuable for specialty buyers tracking lot integrity.
      </p>

      {/* SECTION 5 */}
      <h3 id='cif-cpt' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineCurrencyDollar className='w-8 h-8 text-amber-600' />
        5. CIF and CPT: when the exporter handles freight
      </h3>

      <p className='my-4'>
        CIF (Cost, Insurance and Freight) shifts both ocean freight and minimum insurance to the exporter. The exporter quotes a delivered price to a named destination port, such as CIF Hamburg or CIF Yokohama. Risk still transfers at Djibouti (the same as FOB), but the exporter has arranged and prepaid the freight and minimum insurance (ICC-C cover).
      </p>

      <p className='my-4'>
        CPT (Carriage Paid To) is the multimodal equivalent of CFR (Cost and Freight): the seller pays freight to the named destination but does not provide insurance. CIP (Carriage and Insurance Paid To) is the multimodal equivalent of CIF. For most Ethiopian coffee shipments moving by sea through Djibouti, CIF is the practical choice over CPT or CIP.
      </p>

      <p className='my-4'>
        When to use CIF:
      </p>

      <ul className='list-disc list-inside space-y-1 my-4 text-sm'>
        <li>First-time Ethiopian coffee purchase where the buyer has no freight forwarder relationship</li>
        <li>Small consolidated shipments (LCL) where the buyer cannot negotiate freight independently</li>
        <li>Buyers in markets where the destination port is less commonly served by independent forwarders</li>
      </ul>

      <p className='my-4'>
        The trade-off: CIF removes the buyer&apos;s ability to negotiate freight rates. Exporters often bundle a freight margin into the CIF price, typically adding 3-8% above FOB depending on the destination. For large FCL buyers, this almost always means paying more than if they sourced their own freight. Additionally, CIF includes only the minimum ICC-C marine insurance, which covers catastrophic loss but excludes many transit risks that specialty buyers face. Most importers supplement or replace it with ICC-A all-risk cover regardless of the term.
      </p>

      <div className='bg-amber-50 border border-amber-200 rounded-lg p-6 my-6'>
        <p className='text-sm font-semibold mb-2'>CIF vs. FOB: A Cost Example</p>
        <p className='text-sm'>
          Consider a 20ft container of Ethiopian Grade 1 Yirgacheffe natural to Hamburg. FOB Djibouti price: $4,800/MT (indicative). FOB container value: roughly $92,160 for a 19.2 MT load. Ocean freight Djibouti-Hamburg FCL: approximately $2,800-4,500. Under FOB, the buyer pays freight directly. Under CIF Hamburg, the exporter would quote approximately $4,950-5,100/MT, embedding a freight and handling margin. Buyers booking multiple containers annually almost always save money under FOB. First-time single-container buyers often find CIF simpler.
        </p>
      </div>

      {/* SECTION 6 */}
      <h3 id='dap-ddp' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineCheckCircle className='w-8 h-8 text-amber-600' />
        6. DAP and DDP: delivered terms and who uses them
      </h3>

      <p className='my-4'>
        DAP (Delivered At Place) means the exporter is responsible for delivering the cargo to the buyer&apos;s named destination address, ready to unload but before import clearance. The buyer handles import duties and customs. DDP (Delivered Duty Paid) goes further: the exporter covers everything including destination duties.
      </p>

      <p className='my-4'>
        Both terms are uncommon in green coffee export from Ethiopia, for practical reasons:
      </p>

      <ul className='list-disc list-inside space-y-1 my-4 text-sm'>
        <li>Ethiopian exporters rarely have licensed brokers or freight partners at every destination port worldwide</li>
        <li>DDP requires the exporter to bear import duties in the destination country, which they cannot predict or control accurately</li>
        <li>DAP puts the exporter at risk of destination port delays and demurrage charges beyond their control</li>
      </ul>

      <p className='my-4'>
        Where DAP is occasionally used: Gulf market distributors in Saudi Arabia, UAE, and Kuwait sometimes negotiate DAP Jeddah or DAP Dubai because the exporter has an established freight relationship with Red Sea shipping lines. The exporter&apos;s total cost is more predictable on short-haul Gulf routes than on long-haul European or Asian lanes. If you are buying for the Gulf market and the exporter has a freight partnership with a carrier serving Jeddah or Jebel Ali, ask whether DAP is available and compare it to the CIF equivalent.
      </p>

      {/* SECTION 7 */}
      <h3 id='decision-matrix' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineScale className='w-8 h-8 text-amber-600' />
        7. Buyer decision matrix: which Incoterm fits your profile
      </h3>

      <p className='my-4'>
        Use the profiles below to identify your starting position. Most buyers fall clearly into one category; some sit between two and can negotiate either term.
      </p>

      <div className='grid md:grid-cols-2 gap-5 my-6'>

        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <p className='font-bold text-sm mb-2'>Profile A: Established importer, FCL volumes</p>
          <p className='text-sm text-gray-700 mb-2'>Annual import: 3+ containers from Ethiopia. Has a regular freight forwarder and marine insurance policy.</p>
          <p className='text-sm'><span className='font-semibold text-amber-700'>Recommended:</span> FOB Djibouti. Negotiate freight independently and source your own insurance. You will almost always save money versus CIF.</p>
        </div>

        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <p className='font-bold text-sm mb-2'>Profile B: First-time Ethiopian buyer, 1 container trial</p>
          <p className='text-sm text-gray-700 mb-2'>No existing Ethiopia freight relationship. Single-origin trial purchase of 1 FCL or LCL.</p>
          <p className='text-sm'><span className='font-semibold text-amber-700'>Recommended:</span> CIF to your nearest port, or FOB with a forwarder introduction. CIF simplifies the first purchase; switch to FOB once you have a regular routing.</p>
        </div>

        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <p className='font-bold text-sm mb-2'>Profile C: Specialty importer with multi-origin East Africa program</p>
          <p className='text-sm text-gray-700 mb-2'>Buying Ethiopia + Kenya + Tanzania in the same season. Wants to consolidate in one container.</p>
          <p className='text-sm'><span className='font-semibold text-amber-700'>Recommended:</span> FCA Addis Ababa (for Ethiopia lots). Your forwarder picks up in Addis and coordinates with Kenya and Tanzania legs for consolidation, reducing per-unit freight.</p>
        </div>

        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <p className='font-bold text-sm mb-2'>Profile D: Gulf distributor, 5-10 container annual program</p>
          <p className='text-sm text-gray-700 mb-2'>Regular buyer for Saudi Arabia, UAE, or Kuwait. Destination port is Jeddah, Jebel Ali, or Shuwaikh.</p>
          <p className='text-sm'><span className='font-semibold text-amber-700'>Recommended:</span> FOB Djibouti or DAP destination if the exporter has confirmed Gulf freight relationships. Short Red Sea transit makes DAP viable; compare quotes.</p>
        </div>

        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <p className='font-bold text-sm mb-2'>Profile E: Japanese or Korean specialty buyer using LC</p>
          <p className='text-sm text-gray-700 mb-2'>Bank-funded purchase via irrevocable letter of credit. Forwarder in Tokyo or Busan handles Japan or Korea imports.</p>
          <p className='text-sm'><span className='font-semibold text-amber-700'>Recommended:</span> FOB Djibouti with LC, or FCA Addis Ababa using the Incoterms 2020 on-board B/L clause. Both are LC-compatible under current rules. Confirm with your bank before committing to FCA.</p>
        </div>

        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <p className='font-bold text-sm mb-2'>Profile F: Small roaster, LCL or shared container</p>
          <p className='text-sm text-gray-700 mb-2'>Buying 5-15 bags per origin, sharing a container with other roasters. No direct freight account.</p>
          <p className='text-sm'><span className='font-semibold text-amber-700'>Recommended:</span> FOB Djibouti, then use a coffee-specialist freight forwarder who handles LCL consolidation. Do not use CIF for small LCL shipments; the freight margin embedded in CIF on small volumes can be significant.</p>
        </div>

      </div>

      {/* SECTION 8 */}
      <h3 id='contract-impact' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineExclamationTriangle className='w-8 h-8 text-amber-600' />
        8. What your Incoterm choice changes in the contract
      </h3>

      <p className='my-4'>
        Beyond risk and cost, the Incoterm you choose affects several downstream elements of your purchase. Review each before finalizing terms.
      </p>

      <p className='my-4'>
        <span className='font-semibold'>Price basis:</span> All Ethiopian coffee prices are quoted FOB Djibouti by default. If you request FCA Addis Ababa, the price should decrease by the inland haulage and Djibouti port loading cost (typically $15-30/MT or $300-600 per 20ft container). If you request CIF to your destination port, the price increases to cover ocean freight and insurance. Confirm the exact price adjustment when changing terms.
      </p>

      <p className='my-4'>
        <span className='font-semibold'>Insurance obligation:</span> Under FOB and FCA, you are responsible for arranging marine cargo insurance. Failing to insure between the transfer point and your warehouse is a real financial risk on a specialty lot worth $50,000-100,000. Use a specialist marine insurer familiar with agricultural commodities and request ICC-A (all risks) cover rather than the minimum ICC-C.
      </p>

      <p className='my-4'>
        <span className='font-semibold'>Document requirements:</span> FOB contracts require a commercial invoice, packing list, bill of lading, phytosanitary certificate, and ICO certificate of origin. Under CIF, the exporter also provides the insurance certificate (or policy). Under FCA with an on-board B/L clause, the contract must explicitly state the buyer&apos;s right to request an on-board notation from the carrier. For a full document breakdown, see our <Link href='/insights/green-coffee-shipping-documents-checklist' className='text-amber-700 hover:text-amber-900 underline'>green coffee shipping documents checklist</Link>.
      </p>

      <p className='my-4'>
        <span className='font-semibold'>Letter of credit compatibility:</span> FOB and CIF are the most tested Incoterms for LC transactions because their risk transfer points align cleanly with when the shipping documents are issued. FCA is now also LC-compatible under Incoterms 2020, provided the contract includes the on-board B/L instruction clause. Confirm with your bank before using FCA with LC payment.
      </p>

      <p className='my-4'>
        <span className='font-semibold'>Transit timeline:</span> FOB Djibouti to European ports: typically 18-28 days from vessel departure. To East Asia: 20-30 days. To US East Coast via Suez: 28-35 days. Under FCA Addis Ababa, add 4-7 days for the inland haulage to Djibouti before the ocean leg begins. Plan your inventory accordingly. See our <Link href='/insights/ethiopian-coffee-landed-cost-guide' className='text-amber-700 hover:text-amber-900 underline'>Ethiopian coffee landed cost guide</Link> for a full timeline and cost breakdown.
      </p>

      <p className='my-4'>
        Understanding Ethiopian coffee Incoterms before you sign a contract saves negotiation time, prevents pricing mismatches, and gives you the framework to evaluate any pro-forma invoice on equal terms with your exporter.
      </p>

      {/* CTA BLOCK */}
      <div className='bg-dark text-primary p-8 rounded-lg my-12'>
        <h3 className='text-2xl font-extrabold mb-3'>Ready to Request Your First Ethiopian Coffee Quote?</h3>
        <p className='text-sm mb-5 opacity-90'>
          Our team quotes FOB Djibouti on all standard lots and can accommodate FCA Addis Ababa or CIF requests for qualified buyers. Tell us your destination port, preferred Incoterm, and target volume and we will send a pro-forma with a detailed price breakdown within one business day.
        </p>
        <div className='flex flex-wrap gap-3'>
          <Link
            href='/buy-ethiopian-coffee-wholesale'
            className='bg-primary text-dark font-semibold px-5 py-2 rounded-md text-sm hover:opacity-90 transition'
          >
            View Available Lots
          </Link>
          <Link
            href='/contact-us'
            className='border border-primary text-primary font-semibold px-5 py-2 rounded-md text-sm hover:bg-primary hover:text-dark transition'
          >
            Request a Quote
          </Link>
          <Link
            href='/insights/ethiopian-coffee-contracts-payment-terms-guide'
            className='border border-primary text-primary font-semibold px-5 py-2 rounded-md text-sm hover:bg-primary hover:text-dark transition'
          >
            Payment Terms Guide
          </Link>
        </div>
      </div>

      {/* FAQ SECTION */}
      <h3 id='faq' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineClipboardDocumentList className='w-8 h-8 text-amber-600' />
        Frequently Asked Questions
      </h3>

      <div className='space-y-6 my-6'>

        <div className='border-b border-gray-200 pb-5'>
          <p className='font-bold mb-2'>Can I use EXW for Ethiopian coffee to take full control of the shipment?</p>
          <p className='text-sm text-gray-700'>
            EXW is not practical for Ethiopian green coffee because the buyer would need to manage Ethiopian export customs clearance, which legally requires a registered Ethiopian exporter. FCA Addis Ababa gives buyers equivalent origin-side control while keeping the exporter responsible for all regulatory steps they are required to perform.
          </p>
        </div>

        <div className='border-b border-gray-200 pb-5'>
          <p className='font-bold mb-2'>Why do some Ethiopian exporters only quote FOB and refuse CIF?</p>
          <p className='text-sm text-gray-700'>
            Smaller exporters lack freight relationships to quote competitive CIF rates for every destination. Offering CIF exposes them to unpredictable freight swings between signing and booking. Larger exporters with active carrier partnerships (CMA CGM, MSC, Maersk) are more willing. During initial negotiation, ask whether the exporter can provide a firm CIF quote rather than FOB plus an estimate.
          </p>
        </div>

        <div className='border-b border-gray-200 pb-5'>
          <p className='font-bold mb-2'>Does the Incoterm affect the Ethiopian coffee export permit or any regulatory step at origin?</p>
          <p className='text-sm text-gray-700'>
            No. Export clearance steps, the ECX or DSL channel, the Coffee and Tea Authority export permit, CLU quality inspection, and phytosanitary certification, are completed by the exporter regardless of the agreed Incoterm. The Incoterm only affects where cost and risk transfer between exporter and buyer. Ethiopian export regulations do not change based on delivery terms.
          </p>
        </div>

        <div className='border-b border-gray-200 pb-5'>
          <p className='font-bold mb-2'>How does Djibouti port congestion affect FOB buyers and sellers differently?</p>
          <p className='text-sm text-gray-700'>
            Under FOB, the exporter bears congestion risk until the container loads onto the vessel; delays at the terminal are their cost. Once on board, all sea and destination delays shift to the buyer. FCA buyers absorb Djibouti risk through their forwarder. Build a 7-14 day buffer into arrival estimates during peak export season, roughly February through June.
          </p>
        </div>

        <div className='border-b border-gray-200 pb-5'>
          <p className='font-bold mb-2'>If I negotiate CIF but find the embedded freight too high, can I switch to FOB mid-contract?</p>
          <p className='text-sm text-gray-700'>
            Switching Incoterms after signing requires written agreement from both parties and a price adjustment. It is not a unilateral right. Request both FOB and CIF quotes during initial negotiation, compare the exporter&apos;s implied freight against your own quote, then choose with full information before signing.
          </p>
        </div>

      </div>

      {/* RELATED ARTICLES */}
      <div className='my-12'>
        <h3 className='text-2xl font-extrabold mb-6'>Related Articles</h3>

        <div className='grid md:grid-cols-2 gap-4'>

          <div>
            <p className='font-semibold text-sm mb-3 text-gray-500 uppercase tracking-wide'>Contracts & Payments</p>
            <ul className='space-y-2 text-sm'>
              <li><Link href='/insights/ethiopian-coffee-contracts-payment-terms-guide' className='text-amber-700 hover:text-amber-900 underline'>Ethiopian Coffee Contracts and Payment Terms Guide</Link></li>
              <li><Link href='/insights/ethiopian-coffee-landed-cost-guide' className='text-amber-700 hover:text-amber-900 underline'>Ethiopian Coffee Landed Cost Guide</Link></li>
              <li><Link href='/insights/ethiopian-coffee-offer-sheet-guide' className='text-amber-700 hover:text-amber-900 underline'>How to Read an Ethiopian Coffee Offer Sheet</Link></li>
              <li><Link href='/insights/green-coffee-shipping-documents-checklist' className='text-amber-700 hover:text-amber-900 underline'>Green Coffee Shipping Documents Checklist</Link></li>
            </ul>
          </div>

          <div>
            <p className='font-semibold text-sm mb-3 text-gray-500 uppercase tracking-wide'>Export Logistics</p>
            <ul className='space-y-2 text-sm'>
              <li><Link href='/insights/ethiopian-coffee-export-process-buyers-guide' className='text-amber-700 hover:text-amber-900 underline'>Ethiopian Coffee Export Process: A Buyer&apos;s Guide</Link></li>
              <li><Link href='/insights/specialty-coffee-storage-freight-logistics' className='text-amber-700 hover:text-amber-900 underline'>Specialty Coffee Storage in Sea Freight</Link></li>
              <li><Link href='/insights/green-coffee-packaging-bag-types-guide' className='text-amber-700 hover:text-amber-900 underline'>Green Coffee Packaging: Bag Types and Buyer&apos;s Guide</Link></li>
              <li><Link href='/insights/green-coffee-quality-claims-guide' className='text-amber-700 hover:text-amber-900 underline'>Green Coffee Quality Claims Guide</Link></li>
            </ul>
          </div>

          <div>
            <p className='font-semibold text-sm mb-3 text-gray-500 uppercase tracking-wide'>Sample & Supplier Workflow</p>
            <ul className='space-y-2 text-sm'>
              <li><Link href='/insights/ethiopian-coffee-sample-approval-guide' className='text-amber-700 hover:text-amber-900 underline'>Ethiopian Coffee Sample Approval Guide</Link></li>
              <li><Link href='/insights/green-coffee-supplier-evaluation-checklist' className='text-amber-700 hover:text-amber-900 underline'>Green Coffee Supplier Evaluation Checklist</Link></li>
              <li><Link href='/insights/minimum-order-quantities-ethiopian-coffee-moq' className='text-amber-700 hover:text-amber-900 underline'>Ethiopian Coffee MOQ Guide for Importers</Link></li>
            </ul>
          </div>

          <div>
            <p className='font-semibold text-sm mb-3 text-gray-500 uppercase tracking-wide'>Country Import Guides</p>
            <ul className='space-y-2 text-sm'>
              <li><Link href='/insights/how-to-import-ethiopian-coffee-to-usa' className='text-amber-700 hover:text-amber-900 underline'>Import Ethiopian Coffee to the USA</Link></li>
              <li><Link href='/insights/importing-ethiopian-coffee-to-germany' className='text-amber-700 hover:text-amber-900 underline'>Import Ethiopian Coffee to Germany</Link></li>
              <li><Link href='/insights/importing-ethiopian-coffee-to-japan' className='text-amber-700 hover:text-amber-900 underline'>Import Ethiopian Coffee to Japan</Link></li>
              <li><Link href='/insights/importing-ethiopian-coffee-to-china' className='text-amber-700 hover:text-amber-900 underline'>Import Ethiopian Coffee to China</Link></li>
            </ul>
          </div>

        </div>
      </div>

      {/* FOOTER */}
      <div className='border-t border-gray-200 pt-6 mt-8 text-sm text-gray-500 font-inconsolata'>
        <p>
          Published: {date} &mdash; Ethio Coffee Import and Export PLC &mdash;{' '}
          <Link href='/about' className='text-amber-700 hover:underline'>About Us</Link> &mdash;{' '}
          <Link href='/insights' className='text-amber-700 hover:underline'>All Insights</Link> &mdash;{' '}
          <Link href='/contact-us' className='text-amber-700 hover:underline'>Contact</Link>
        </p>
      </div>
    </>
  )
}
