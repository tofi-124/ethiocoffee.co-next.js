import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import {
  HiOutlineBuildingLibrary,
  HiOutlineCheckCircle,
  HiOutlineClipboardDocumentList,
  HiOutlineClock,
  HiOutlineDocumentText,
  HiOutlineExclamationTriangle,
  HiOutlineGlobeAlt,
  HiOutlineLightBulb,
  HiOutlineScale,
  HiOutlineShieldCheck,
} from 'react-icons/hi2'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function GreenCoffeeShippingDocumentsChecklist({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        Green coffee shipping documents checklist for importers reviewing invoices, certificates, and bill of lading drafts before Ethiopian cargo moves.
      </h2>

      <figure>
        <figcaption className='font-inconsolata my-2'>{title}</figcaption>
        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Green coffee shipping documents checklist for Ethiopian coffee importers reviewing invoices bill of lading drafts and export certificates'
            fill
            objectFit='cover'
            className='w-full h-full'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>
      </figure>

      <div className='my-4 text-sm bg-amber-50 p-4 rounded-lg border border-amber-200'>
        <span className='font-semibold'>Category:</span>
        <span className='ml-2'>Shipping Documents / Export Logistics / Contract Execution / Importer Resources</span>
      </div>

      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-8 border border-amber-200'>
        <h3 className='font-bold text-xl mb-3 flex items-center gap-2'>
          <HiOutlineLightBulb className='text-amber-400 flex-shrink-0' />
          Key Takeaway
        </h3>
        <p className='text-sm leading-relaxed'>
          A strong green coffee shipping documents checklist works in three review gates: contract data freeze, pre-shipment draft review, and final release pack. Most costly delays do not come from a missing document; they come from inconsistent master data across the commercial invoice, packing list, bill of lading, phytosanitary certificate, and origin papers. Importers who review those fields before cargo sails reduce customs holds, bank discrepancies, and preventable claim disputes.
        </p>
      </div>

      <div className='my-8 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <HiOutlineClipboardDocumentList className='text-amber-600' /> In This Guide
        </h3>
        <ol className='space-y-2 text-sm'>
          <li><a href='#why-documents-decide' className='text-amber-700 hover:underline'>1. Why document review decides whether coffee clears cleanly</a></li>
          <li><a href='#core-document-stack' className='text-amber-700 hover:underline'>2. The core document stack and what each paper proves</a></li>
          <li><a href='#three-review-gates' className='text-amber-700 hover:underline'>3. The three review gates before cargo sails</a></li>
          <li><a href='#red-flags' className='text-amber-700 hover:underline'>4. Red flags importers should catch on each file</a></li>
          <li><a href='#market-incoterm' className='text-amber-700 hover:underline'>5. What changes by market, bank method, and Incoterm</a></li>
          <li><a href='#buyer-personas' className='text-amber-700 hover:underline'>6. Buyer personas and document ownership in practice</a></li>
          <li><a href='#release-checklist' className='text-amber-700 hover:underline'>7. A release checklist your team can reuse</a></li>
          <li><a href='#faq' className='text-amber-700 hover:underline'>8. Frequently asked questions</a></li>
        </ol>
      </div>

      <p className='my-4 text-lg leading-relaxed'>
        A green coffee shipping documents checklist is less about collecting paper and more about controlling risk. When an Ethiopian lot is commercially correct but the packing list rounds weights differently from the invoice, or the bill of lading draft carries the wrong notify party, the buyer can still lose days in customs, banking, or warehouse release.
      </p>
      <p className='my-4'>
        Most competitor pages on coffee shipping stop at packaging, Incoterms, or broad logistics summaries. That leaves a gap for importers who need a buyer-side review workflow. The missing questions are practical: which fields must match across every file, who should sign off on the bill of lading draft, which documents are market-specific, and where should you catch the error before a container is on the water?
      </p>
      <p className='my-4'>
        This article answers those questions from an Ethiopian export perspective. It does not repeat a general primer on how coffee is sourced, how samples are approved, or how claims are handled after arrival. For those adjacent workflows, use our <Link href='/insights/ethiopian-coffee-offer-sheet-guide' className='text-amber-700 hover:underline font-semibold'>offer sheet guide</Link>, <Link href='/insights/ethiopian-coffee-sample-approval-guide' className='text-amber-700 hover:underline font-semibold'>sample approval guide</Link>, <Link href='/insights/ethiopian-coffee-contracts-payment-terms-guide' className='text-amber-700 hover:underline font-semibold'>contracts and payment terms guide</Link>, and <Link href='/insights/green-coffee-quality-claims-guide' className='text-amber-700 hover:underline font-semibold'>quality claims guide</Link>. Here, the focus is the document chain between confirmed sale and clean release.
      </p>

      <div className='bg-blue-50 border border-blue-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3'>Original market intelligence</h4>
        <p className='text-sm text-gray-700'>
          In specialty coffee trade, the risk profile has shifted. Ten years ago buyers mostly worried about whether the right documents existed. Today the larger problem is version control across a wider document stack. A conventional shipment may move on six core files, but once a buyer adds letter of credit conditions, sustainability attachments, EUDR data, or customer-specific QA sheets, the pack can expand to eight or more files. The operational challenge is no longer volume of paperwork alone; it is master-data consistency across all of them.
        </p>
      </div>

      <h3 id='why-documents-decide' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineGlobeAlt className='w-8 h-8 text-amber-600' />
        1. Why Document Review Decides Whether Coffee Clears Cleanly
      </h3>

      <p className='my-4'>
        Importers often treat export documents as an end-of-process attachment. In practice they are the operating system of the shipment. Customs relies on them to validate origin and cargo identity. Banks rely on them when payment runs under a letter of credit or documents against payment. Brokers rely on them to prepare entry filings. If one file says Sidama Grade 2 natural and another says generic Ethiopian Arabica, the coffee may still be correct, but the release path gets slower and more expensive.
      </p>
      <p className='my-4'>
        Ethiopian coffee adds one more layer because multiple authorities and counterparties touch the shipment before loading. Origin documentation can involve the exporter, freight forwarder, carrier, plant health authority, chamber or trade authority, and sometimes bank or destination compliance teams. That means the most valuable buyer habit is not waiting for originals. It is reviewing the draft data set early enough to stop bad information from multiplying.
      </p>
      <p className='my-4'>
        The strongest import teams freeze one master data sheet before draft documents are issued. Legal exporter name, consignee, notify party, contract number, lot code, bag count, marks and numbers, net weight, gross weight, port pair, and Incoterm all sit on that sheet. Every draft is reviewed against it. That simple discipline solves a large share of preventable discrepancies.
      </p>

      <div className='grid md:grid-cols-2 gap-4 my-6'>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>What generic shipping guides cover</h4>
          <p className='text-sm text-gray-700'>
            Packaging, ocean transit, insurance, and broad export terminology. Those topics matter, but they rarely tell a buyer which file should be reviewed first or which mismatch will trigger bank questions.
          </p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>What buyers actually need</h4>
          <p className='text-sm text-gray-700'>
            A field-by-field review order, ownership map, and escalation rule. That is what turns document handling from passive paperwork into active shipment control.
          </p>
        </div>
      </div>

      <h3 id='core-document-stack' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineDocumentText className='w-8 h-8 text-amber-600' />
        2. The Core Document Stack and What Each Paper Proves
      </h3>

      <p className='my-4'>
        Not every buyer needs every document on every shipment, but most Ethiopian green coffee exports revolve around the same core stack. Thinking in proof categories helps buyers review faster: proof of sale, proof of cargo, proof of origin, proof of plant health, proof of quality, and proof of insurance or compliance where applicable.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Document</th>
              <th className='p-3 text-left font-bold'>Usually issued by</th>
              <th className='p-3 text-left font-bold'>What it proves</th>
              <th className='p-3 text-left font-bold'>What the buyer should check</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Commercial invoice</td>
              <td className='p-3'>Exporter or accounting team</td>
              <td className='p-3'>Commercial sale terms and invoice value</td>
              <td className='p-3'>Exporter and buyer names, Incoterm, currency, contract reference, product description, unit price, and weight consistency</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Packing list</td>
              <td className='p-3'>Exporter or logistics team</td>
              <td className='p-3'>Physical cargo breakdown</td>
              <td className='p-3'>Bag count, marks and numbers, packaging type, net and gross weights, and whether the lot identity matches the sale</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Bill of lading draft and final</td>
              <td className='p-3'>Carrier or freight forwarder</td>
              <td className='p-3'>Transport contract and cargo release instructions</td>
              <td className='p-3'>Shipper, consignee, notify party, port pair, container and seal references, on-board details, and release method</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Certificate of origin</td>
              <td className='p-3'>Chamber or trade authority</td>
              <td className='p-3'>Country of origin for customs and tariff treatment</td>
              <td className='p-3'>Commodity description, invoice references, consignee details if required, and whether the paper format fits the destination market</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>ICO certificate of origin</td>
              <td className='p-3'>Coffee-sector export authority</td>
              <td className='p-3'>Coffee-specific origin and trade identity</td>
              <td className='p-3'>Exporter code, parcel references, coffee type, and alignment with invoice description and origin claim</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Phytosanitary certificate</td>
              <td className='p-3'>National plant protection authority</td>
              <td className='p-3'>Plant-health compliance for the shipment</td>
              <td className='p-3'>Commodity description, destination, quantity reference, treatment details when applicable, and whether it matches the actual shipment pack</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Quality or grade papers</td>
              <td className='p-3'>Exporter QA team, authority, or surveyor</td>
              <td className='p-3'>That the sold lot is the lot prepared for shipment</td>
              <td className='p-3'>Lot code, grade, crop year, physical or cup references, and whether the document belongs to the same cargo as the invoice</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Insurance certificate or policy</td>
              <td className='p-3'>Insurer, broker, or forwarder</td>
              <td className='p-3'>Coverage for insured shipments</td>
              <td className='p-3'>Named insured party, insured value, voyage references, and whether coverage matches the agreed Incoterm</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Compliance attachments</td>
              <td className='p-3'>Exporter, certification body, or buyer compliance team</td>
              <td className='p-3'>Destination-specific compliance claims</td>
              <td className='p-3'>Certification numbers, lot mapping, customer identity, and whether the attachment belongs to the sold lot rather than a similar lot</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='bg-gray-50 p-6 rounded-lg my-6 border border-gray-200'>
        <h4 className='font-bold text-lg mb-3'>Three external standards worth knowing</h4>
        <p className='text-sm text-gray-700 my-2'>
          The <a href='https://www.ippc.int/en/ephyto/' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline font-semibold'>IPPC ePhyto system</a> defines the electronic equivalent of a phytosanitary certificate and its harmonized exchange model.
        </p>
        <p className='text-sm text-gray-700 my-2'>
          The <a href='https://greencoffeeassociation.org/professional-resources/' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline font-semibold'>Green Coffee Association professional resources</a> remain useful reference points for contract expectations, arbitration, and receiving best practices.
        </p>
        <p className='text-sm text-gray-700 my-2'>
          The <a href='https://www.ecf-coffee.org/category/publications/contracts/' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline font-semibold'>European Coffee Federation ESCC resources</a> are especially relevant when a buyer trades on European-standard contract language and wants document handling to line up with dispute and delivery clauses.
        </p>
      </div>

      <h3 id='three-review-gates' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineClock className='w-8 h-8 text-amber-600' />
        3. The Three Review Gates Before Cargo Sails
      </h3>

      <p className='my-4'>
        The best document workflow does not start with originals. It starts with sequencing. Buyers who wait until the final pack arrives usually discover discrepancies too late, when the carrier, chamber, or plant-health authority has already issued final papers. Three review gates solve that problem.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Gate</th>
              <th className='p-3 text-left font-bold'>When it happens</th>
              <th className='p-3 text-left font-bold'>Non-negotiable checks</th>
              <th className='p-3 text-left font-bold'>Who should own sign-off</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>1. Contract data freeze</td>
              <td className='p-3'>Before payment instrument, shipping instruction, or certificate requests</td>
              <td className='p-3'>Legal names, contract number, Incoterm, lot identity, quantity basis, bank instructions, and destination party details</td>
              <td className='p-3'>Buyer commercial lead plus exporter sales contact</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>2. Draft review</td>
              <td className='p-3'>After stuffing or booking, before final bill of lading and final certificates are issued</td>
              <td className='p-3'>Bill of lading draft, invoice draft, packing list draft, container references, ports, notify party, and release method</td>
              <td className='p-3'>Buyer logistics or compliance lead plus forwarder or exporter logistics team</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>3. Final release pack</td>
              <td className='p-3'>Before originals move to bank or before scanned set goes to customs broker</td>
              <td className='p-3'>Final consistency across invoice, packing list, origin papers, plant-health paper, insurance if relevant, and any market-specific compliance file</td>
              <td className='p-3'>Buyer finance or customs broker, depending on payment method and market</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='border-l-4 border-amber-500 pl-6 bg-gray-50 p-4 my-6'>
        <p className='font-bold mb-2'>Where most first-time buyers slip</p>
        <p className='text-sm text-gray-700'>
          They approve the coffee but do not review the bill of lading draft. By the time the discrepancy appears in final documents, the fix sits with a carrier desk, a bank, or a chamber certificate desk instead of the exporter alone. That is a slower and more expensive place to discover a mistake.
        </p>
      </div>

      <p className='my-4'>
        This structure also changes how teams divide ownership. Commercial staff should freeze the sale data. Logistics staff should own the draft pack. Finance staff or brokers should own the release pack. When one person tries to hold all three gates, details get missed because each gate asks a different question.
      </p>

      <h3 id='red-flags' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineExclamationTriangle className='w-8 h-8 text-amber-600' />
        4. Red Flags Importers Should Catch on Each File
      </h3>

      <p className='my-4'>
        Most document failures are ordinary, not dramatic. A rounded weight here, an abbreviated company name there, a copied notify party from the last shipment, or a certificate issued against an older invoice number. None of those errors looks serious in isolation. Together they create the friction that slows clearance, triggers bank discrepancy fees, or weakens a later claim.
      </p>

      <div className='grid md:grid-cols-2 gap-4 my-6'>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Invoice and packing list</h4>
          <ul className='space-y-2 text-sm text-gray-700'>
            <li>Different net weights beyond simple rounding logic</li>
            <li>Product descriptions with different process or grade language</li>
            <li>Bag counts that do not match marks and numbers</li>
            <li>Currency, price basis, or Incoterm that differs from the contract</li>
          </ul>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Bill of lading draft</h4>
          <ul className='space-y-2 text-sm text-gray-700'>
            <li>Wrong consignee or notify party</li>
            <li>Port pair copied from a previous shipment</li>
            <li>Container or seal details missing from the supporting pack</li>
            <li>Release method not aligned with bank or buyer instructions</li>
          </ul>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Origin and phytosanitary papers</h4>
          <ul className='space-y-2 text-sm text-gray-700'>
            <li>Generic product descriptions that do not map neatly to the invoice</li>
            <li>Destination country or consignee detail missing where the market expects it</li>
            <li>Certificate references tied to an earlier draft invoice</li>
            <li>Treatment or quantity references that do not match the shipped cargo</li>
          </ul>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Quality and compliance attachments</h4>
          <ul className='space-y-2 text-sm text-gray-700'>
            <li>Lot code belongs to a similar lot, not the sold lot</li>
            <li>Certification number expired or not assigned to that cargo</li>
            <li>Traceability attachment covers a supplier group but not the shipped parcel</li>
            <li>Survey or quality paper uses a different container or seal reference</li>
          </ul>
        </div>
      </div>

      <div className='bg-red-50 border border-red-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3 text-red-800'>The mismatch that causes the most avoidable pain</h4>
        <p className='text-sm text-gray-700'>
          Consistent cargo identity matters more than elegant formatting. If the lot code, marks and numbers, net weight, container references, and party names do not line up across invoice, packing list, bill of lading, and certificate set, every downstream actor has to decide which version is true. That is where delays begin.
        </p>
      </div>

      <h3 id='market-incoterm' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineScale className='w-8 h-8 text-amber-600' />
        5. What Changes by Market, Bank Method, and Incoterm
      </h3>

      <p className='my-4'>
        A buyer does not need one universal document pack. They need the right pack for the sale structure. Three variables change the review burden more than anything else: destination market, payment method, and Incoterm.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Scenario</th>
              <th className='p-3 text-left font-bold'>What changes</th>
              <th className='p-3 text-left font-bold'>Highest-risk document area</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Letter of credit shipment</td>
              <td className='p-3'>Document wording becomes more rigid because the bank checks the pack against LC terms</td>
              <td className='p-3'>Bill of lading draft, invoice wording, and certificate references</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>FOB sale</td>
              <td className='p-3'>Buyer controls freight and often insurance, so shipment instructions and B/L party details matter more</td>
              <td className='p-3'>Shipping instruction handoff and release method</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>CIF or CIP sale</td>
              <td className='p-3'>Insurance becomes part of the pack and insured-value mistakes become material</td>
              <td className='p-3'>Insurance certificate, insured party, and coverage amount</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>EU or UK compliance-heavy shipment</td>
              <td className='p-3'>Traceability and sustainability data often expand the pack beyond legacy trade papers</td>
              <td className='p-3'>Lot mapping across traceability files and commercial pack</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Spot sale to an established buyer</td>
              <td className='p-3'>The pack may be simpler, but speed expectations rise</td>
              <td className='p-3'>Draft-review turnaround and broker handoff discipline</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        Buyers sourcing Ethiopian coffee into Europe should also plan document review alongside compliance review. If the commercial pack says one thing and your traceability attachment says another, the customs question becomes a compliance question immediately. For the full destination-side framework, see our <Link href='/insights/eu-deforestation-regulation-ethiopian-coffee-compliance' className='text-amber-700 hover:underline font-semibold'>EUDR compliance guide</Link> and <Link href='/insights/ethiopian-coffee-traceability-guide' className='text-amber-700 hover:underline font-semibold'>traceability guide</Link>.
      </p>
      <p className='my-4'>
        The same logic applies to payment structure. If the buyer is paying against documents, the bank and exporter both care about cleanliness of the pack. If the buyer is paying open account, customs and internal compliance teams become the stricter reviewers. Either way, the buyer should never assume the exporter, forwarder, and bank are validating the same things.
      </p>

      <h3 id='buyer-personas' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineBuildingLibrary className='w-8 h-8 text-amber-600' />
        6. Buyer Personas and Document Ownership in Practice
      </h3>

      <p className='my-4'>
        The right checklist depends on who is buying and how the business is structured. That is why the same Ethiopian shipment can require different review habits at the buyer side even when the coffee itself is similar.
      </p>

      <div className='space-y-4 my-6'>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold text-lg mb-2'>Persona 1: First-container specialty roaster in North America</h4>
          <p className='text-sm text-gray-700'>
            This buyer usually has limited internal trade admin capacity and may rely on a bank or customs broker for document review. Their biggest risk is not a cup-quality decision. It is letting an incorrect consignee, notify party, or release instruction survive into the bill of lading. For this buyer, Gate 2 draft review matters more than any other step.
          </p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold text-lg mb-2'>Persona 2: EU roaster group buying traceable washed lots</h4>
          <p className='text-sm text-gray-700'>
            This buyer usually has better commercial systems but a heavier compliance burden. Their highest-risk area is lot mapping between invoice, origin papers, and traceability or EUDR files. A clean bill of lading is not enough if the compliance attachment cannot be reconciled to the sold cargo.
          </p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold text-lg mb-2'>Persona 3: Regional trader replenishing spot inventory</h4>
          <p className='text-sm text-gray-700'>
            This buyer moves faster and often accepts a simpler pack, but speed changes the error pattern. The main risk is version drift, where the team forwards an old invoice draft or a certificate prepared for a previous shipment. Their checklist should focus on document version control and same-day broker handoff.
          </p>
        </div>
      </div>

      <div className='bg-green-50 border border-green-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3'>Case study: where one bad draft created a seven-day delay</h4>
        <p className='text-sm text-gray-700'>
          A mid-size importer approved a washed Ethiopian lot under LC terms and assumed the exporter would coordinate document release. The coffee itself was ready on time, but the bill of lading draft used an outdated notify party and the packing list still carried the previous contract reference. The bank flagged the set, the broker paused pre-entry, and the shipment lost a week even though the physical cargo was correct. That is why draft review belongs before originals, not after.
        </p>
      </div>

      <h3 id='release-checklist' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineShieldCheck className='w-8 h-8 text-amber-600' />
        7. A Release Checklist Your Team Can Reuse
      </h3>

      <p className='my-4'>
        Use the checklist below as a practical close-out step before final documents are released to a bank, broker, or buyer archive. This is the shortest version of the green coffee shipping documents checklist that still prevents the most common failures.
      </p>

      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-6 border border-amber-200'>
        <h4 className='font-bold text-lg mb-3 flex items-center gap-2'>
          <HiOutlineCheckCircle className='text-amber-500 flex-shrink-0' />
          Final Release Checklist
        </h4>
        <ol className='space-y-3 text-sm'>
          <li>Freeze one master data sheet with the final party names, contract reference, lot code, marks and numbers, quantity basis, and port pair.</li>
          <li>Match the invoice and packing list line by line; do not accept unexplained differences in cargo description, bag count, or weight.</li>
          <li>Review the bill of lading draft before issuance and confirm shipper, consignee, notify party, release method, and transport references.</li>
          <li>Check that origin papers and any ICO document refer to the same sale and describe the same coffee as the commercial invoice.</li>
          <li>Confirm the phytosanitary certificate describes the actual shipped commodity and destination rather than a prior draft shipment.</li>
          <li>Verify whether the Incoterm requires an insurance certificate and whether the insured value and named party are correct.</li>
          <li>Reconcile any compliance attachment, including traceability or certification files, to the sold lot before sending the pack onward.</li>
          <li>Share the final scanned pack with the customs broker or finance reviewer before originals move, so errors are caught while corrections are still practical.</li>
          <li>Archive both draft and final versions with timestamps. Claims and discrepancy investigations become much easier when you can see where the change happened.</li>
          <li>Retain shipment photos, loading references, and quality paperwork alongside the document pack in case the lot later enters a <Link href='/insights/green-coffee-quality-claims-guide' className='text-amber-700 hover:underline font-semibold'>claims workflow</Link>.</li>
        </ol>
      </div>

      <p className='my-4'>
        If your team wants a broader commercial workflow, combine this checklist with our <Link href='/insights/ethiopian-coffee-export-process-buyers-guide' className='text-amber-700 hover:underline font-semibold'>export process guide</Link>, <Link href='/insights/ethiopian-coffee-contracts-payment-terms-guide' className='text-amber-700 hover:underline font-semibold'>contracts guide</Link>, and <Link href='/insights/ethiopian-coffee-offer-sheet-guide' className='text-amber-700 hover:underline font-semibold'>offer sheet guide</Link>. Together they create a cleaner path from first offer to final arrival.
      </p>
      <p className='my-4'>
        The central point is simple: use this green coffee shipping documents checklist before cargo sails, not after. A careful pre-release review is cheaper than a bank discrepancy fee, faster than a customs clarification cycle, and easier than defending a preventable claim after arrival.
      </p>

      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Need a cleaner origin document pack?</h4>
        <p className='my-2'>
          We help buyers move from offer review to shipment release with clearer lot data, faster draft checks, and practical exporter-side coordination from Addis Ababa.
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
            <h4 className='font-bold text-gray-800 mb-2'>Which document should buyers insist on reviewing before it becomes final?</h4>
            <p className='text-sm text-gray-600'>
              The bill of lading draft deserves the earliest hard review because it controls release, names the critical parties, and can create bank or customs problems even when the coffee itself is correct. Review it together with the invoice and packing list draft so cargo identity and party data stay aligned.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Do the invoice, packing list, and certificate of origin need identical numbers?</h4>
            <p className='text-sm text-gray-600'>
              They do not always need identical formatting, but they should tell the same commercial story. Product description, quantity basis, and shipment identity must reconcile cleanly. If one file uses rounded weights or shorter descriptions, the buyer should confirm that the difference is acceptable before final issuance.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>When does the phytosanitary certificate become a real risk item for coffee?</h4>
            <p className='text-sm text-gray-600'>
              It becomes a real risk item when it is treated as a late-stage formality. If the commodity description, quantity reference, destination, or treatment details do not align with the shipment pack, the issue shifts from paperwork to plant-health compliance. That is harder to fix than an invoice typo.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Who should hold the final document review when payment runs under an LC?</h4>
            <p className='text-sm text-gray-600'>
              Finance should own the final review under LC terms, but only after commercial and logistics staff have cleared the draft stage. Banks review document conformity, not coffee logic. If the commercial and cargo facts are wrong before the pack reaches finance, the bank will only discover the problem later.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Can the same checklist work for both EU and non-EU shipments?</h4>
            <p className='text-sm text-gray-600'>
              The core review logic stays the same, but the outer layer changes. EU buyers often need additional traceability and sustainability files, while other markets may focus more on customs and banking simplicity. Start with the shared commercial pack, then add market-specific checks on top rather than building two unrelated systems.
            </p>
          </div>
        </div>
      </section>

      <div className='my-10 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4'>Related Articles</h3>
        <div className='grid md:grid-cols-2 gap-4'>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Trade Workflow</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/ethiopian-coffee-offer-sheet-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Offer Sheet Guide</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-sample-approval-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Sample Approval Guide</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-contracts-payment-terms-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Contracts &amp; Payment Terms Guide</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Export and Compliance</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/ethiopian-coffee-export-process-buyers-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Export Process Buyer&apos;s Guide</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-traceability-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Traceability Guide</Link></li>
              <li>&bull; <Link href='/insights/eu-deforestation-regulation-ethiopian-coffee-compliance' className='text-amber-700 hover:underline'>EUDR Compliance for Ethiopian Coffee</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Quality Risk Control</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/green-coffee-quality-claims-guide' className='text-amber-700 hover:underline'>Green Coffee Quality Claims Guide</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-dry-milling-export-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Dry Milling Export Guide</Link></li>
              <li>&bull; <Link href='/insights/green-coffee-moisture-content-water-activity-guide' className='text-amber-700 hover:underline'>Green Coffee Moisture and Water Activity Guide</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Commercial Planning</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/ethiopian-coffee-landed-cost-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Landed Cost Guide</Link></li>
              <li>&bull; <Link href='/insights/green-coffee-packaging-bag-types-guide' className='text-amber-700 hover:underline'>Green Coffee Packaging and Bag Types Guide</Link></li>
              <li>&bull; <Link href='/insights/green-coffee-supplier-evaluation-checklist' className='text-amber-700 hover:underline'>Green Coffee Supplier Evaluation Checklist</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> Written by Ethio Coffee Import and Export PLC, an origin-connected Ethiopian coffee exporter working through trusted sourcing relationships with cooperatives and washing stations across Ethiopia.
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