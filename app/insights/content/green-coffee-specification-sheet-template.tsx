import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import {
  HiOutlineBeaker,
  HiOutlineCheckCircle,
  HiOutlineClipboardDocumentCheck,
  HiOutlineClipboardDocumentList,
  HiOutlineDocumentText,
  HiOutlineExclamationTriangle,
  HiOutlineLightBulb,
  HiOutlineQuestionMarkCircle,
  HiOutlineScale,
  HiOutlineTag,
} from 'react-icons/hi2'

type InsightContentProps = { title: string; date: string; large_image_url: string }

export default function GreenCoffeeSpecificationSheetTemplate({
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
        How to build a green coffee specification sheet that turns cup goals, physical limits, packaging, sampling, and acceptance rules into usable buying terms
      </h2>

      <figure>
        <figcaption className='font-inconsolata my-2'>{title}</figcaption>
        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Green coffee specification sheet used to assess unroasted coffee beans for purchase'
            fill
            objectFit='cover'
            className='w-full h-full'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>
        <figcaption className='font-inconsolata text-xs my-1 text-gray-600'>
          Photo by Maksim Goncharenok on Pexels.
        </figcaption>
      </figure>

      <div className='my-4 text-sm bg-amber-50 p-4 rounded-lg border border-amber-200'>
        <span className='font-semibold'>Category:</span>
        <span className='ml-2'>Green Coffee Buying / Lot Specifications / Quality Assurance / Procurement Resources</span>
      </div>

      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-8 border border-amber-200'>
        <h3 className='font-bold text-xl mb-3 flex items-center gap-2'>
          <HiOutlineLightBulb className='text-amber-400 flex-shrink-0' />
          Key Takeaway
        </h3>
        <p className='text-sm leading-relaxed'>
          A green coffee specification sheet should identify the exact lot, separate descriptive facts from binding acceptance limits, name the test method and sample stage for every measured field, and state what happens when a result falls outside tolerance. Build one controlled document that follows the coffee from offer through pre-shipment approval and arrival. A number without a method is weak evidence; a flavor note without an approved reference sample is only an opinion.
        </p>
      </div>

      <div className='my-8 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <HiOutlineClipboardDocumentList className='text-amber-600' /> In This Guide
        </h3>
        <ol className='space-y-2 text-sm'>
          <li><a href='#purpose' className='text-amber-700 hover:underline'>1. Define what the specification controls</a></li>
          <li><a href='#structure' className='text-amber-700 hover:underline'>2. Use the seven-part buyer template</a></li>
          <li><a href='#physical' className='text-amber-700 hover:underline'>3. Write measurable physical requirements</a></li>
          <li><a href='#sensory' className='text-amber-700 hover:underline'>4. Convert cup goals into approval rules</a></li>
          <li><a href='#commercial' className='text-amber-700 hover:underline'>5. Connect quality to packaging and delivery</a></li>
          <li><a href='#workflow' className='text-amber-700 hover:underline'>6. Control versions from offer to arrival</a></li>
          <li><a href='#ethiopian-coffee' className='text-amber-700 hover:underline'>7. Adapt the sheet for Ethiopian lots</a></li>
          <li><a href='#mistakes' className='text-amber-700 hover:underline'>8. Remove specification gaps before signing</a></li>
        </ol>
      </div>

      <p className='my-4'>
        Buyers rarely lose money because a supplier forgot to write a tasting note. Problems start when two teams use the same words to mean different things. “Grade 1,” “screen 15+,” “10.5% moisture,” and “floral” can all look precise while leaving the sample, test method, tolerance, and remedy undefined. A busy buyer may approve the offer, yet the arrival team still has no defensible pass, hold, or claim rule.
      </p>
      <p className='my-4'>
        The green coffee specification sheet closes that gap. It is the controlled technical brief for the coffee you intend to buy. It should help the exporter prepare the correct lot, the buyer approve the correct sample, the laboratory repeat the measurements, and the warehouse decide whether the delivered coffee matches the agreement.
      </p>
      <p className='my-4'>
        When the specification includes chemical safety, define the destination rule, analyte scope, reporting limit, sample stage, and release action. Our <Link href='/insights/green-coffee-pesticide-residue-testing-guide' className='text-amber-700 hover:underline font-semibold'>green coffee pesticide residue testing guide</Link> shows how to turn those fields into an MRL matrix and fit-for-purpose laboratory brief.
      </p>

      <h3 id='purpose' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineDocumentText className='w-8 h-8 text-amber-600' />
        1. Define What the Green Coffee Specification Sheet Controls
      </h3>
      <p className='my-4'>
        A supplier offer sheet describes coffee that is available. A buyer specification states what the buyer will accept. A contract records the commercial agreement. These documents may share fields, but they do different jobs. The specification should be attached to, or clearly incorporated into, the final contract so technical requirements do not remain trapped in an email thread.
      </p>
      <p className='my-4'>
        This distinction is consistent with <a href='https://www.iso.org/standard/87698.html' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline font-semibold'>ISO 9116:2025</a>, which provides guidance for describing green coffee for sale and purchase and also addresses sampling, packing, marking, storage, and shipping. The standard does not choose your commercial tolerances. It reinforces the need for a shared method of specification. Use the separate <Link href='/insights/green-coffee-sampling-protocol' className='text-amber-700 hover:underline font-semibold'>green coffee sampling protocol</Link> to define how bags are selected, increments are combined, and sealed final samples are traced.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Document</th>
              <th className='p-3 text-left font-bold'>Main question</th>
              <th className='p-3 text-left font-bold'>Buyer action</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Offer sheet</td>
              <td className='p-3'>What lot is available, at what indication?</td>
              <td className='p-3'>Screen options against the product brief</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Specification sheet</td>
              <td className='p-3'>What identity, quality, and preparation will be accepted?</td>
              <td className='p-3'>Approve fields, methods, tolerances, and references</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Purchase contract</td>
              <td className='p-3'>What will each party deliver, pay, and do if performance differs?</td>
              <td className='p-3'>Incorporate the final specification by version</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>QC report</td>
              <td className='p-3'>What did the named sample or shipment actually measure?</td>
              <td className='p-3'>Compare results with the controlled specification</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='bg-blue-50 border border-blue-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3'>Write the control statement first</h4>
        <p className='text-sm text-gray-700'>
          Example: “This specification applies to contract EC-26-041, lot GUJ-W-041, crop 2025/26, final export preparation, and the approved pre-shipment sample dated 14 July 2026. Version 1.2 supersedes earlier technical notes.” One sentence prevents lot substitution, sample-stage confusion, and accidental use of an old attachment.
        </p>
      </div>

      <h3 id='structure' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineClipboardDocumentCheck className='w-8 h-8 text-amber-600' />
        2. Use the Seven-Part Buyer Template
      </h3>
      <p className='my-4'>
        The best template is short enough to use and complete enough to enforce. Keep the master fields in a table, then attach supporting lab reports, photographs, sample records, certificates, or packing instructions. The seven sections below fit both specialty lots and larger repeat programs.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Section</th>
              <th className='p-3 text-left font-bold'>Required fields</th>
              <th className='p-3 text-left font-bold'>Control question</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>1. Document control</td>
              <td className='p-3'>Specification ID, version, date, owner, approval names</td>
              <td className='p-3'>Can both parties identify the final version?</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>2. Lot identity</td>
              <td className='p-3'>Country, region, producer or station, lot code, crop, process, variety where verified</td>
              <td className='p-3'>Does the sample belong to the coffee being sold?</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>3. Sensory target</td>
              <td className='p-3'>Reference sample, evaluation method, profile, disqualifying taints, scoring rule</td>
              <td className='p-3'>How will cup acceptance be decided?</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>4. Physical limits</td>
              <td className='p-3'>Grade, defects, moisture, water activity, screen, density if used, foreign matter</td>
              <td className='p-3'>Are limits tied to repeatable methods?</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>5. Packaging and marking</td>
              <td className='p-3'>Bag and liner, net weight, marks, pallet rules, container protection</td>
              <td className='p-3'>Will the prepared shipment protect and identify the lot?</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>6. Sampling and documents</td>
              <td className='p-3'>Sample stage, sampling plan, retention, lab reports, certificates, release documents</td>
              <td className='p-3'>Can results be traced and reproduced?</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>7. Acceptance and remedy</td>
              <td className='p-3'>Pass, review, reject rules, notice period, neutral verification, remedy path</td>
              <td className='p-3'>What happens when a field is out of tolerance?</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        The specification defines the required limits and decision rules. The lot-specific <Link href='/insights/green-coffee-certificate-of-analysis-buyer-checklist' className='text-amber-700 hover:underline font-semibold'>green coffee certificate of analysis</Link> should then report the measured results, methods, sample identity, and release status against that controlled version.
      </p>

      <p className='my-4'>
        Mark every field as one of three types: <strong>descriptive</strong>, <strong>required</strong>, or <strong>target</strong>. Descriptive fields identify the coffee but do not create automatic rejection. Required fields are pass or fail. Targets guide selection and preparation, while allowing a stated review band. Mixing these types is a common source of avoidable claims.
      </p>

      <h3 id='physical' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineScale className='w-8 h-8 text-amber-600' />
        3. Write Measurable Green Coffee Quality Specifications
      </h3>
      <p className='my-4'>
        A physical limit needs five parts: the attribute, unit, method, sample stage, and acceptance rule. “Moisture 10% to 12%” is incomplete if the exporter and buyer use different instruments or samples. “Screen 15+” is unclear unless the document states the allowed percentage passing through the named screen and the sieving method.
      </p>

      <div className='bg-amber-50 border border-amber-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3'>Specification formula</h4>
        <p className='text-sm text-gray-700'>
          <strong>Attribute + unit + method + sample stage + limit + action.</strong> Example: “Moisture, percent by mass, agreed calibrated meter method, final pre-shipment composite, target 10.0% to 11.5%; 11.6% to 12.0% requires buyer review; above 12.0% fails release.” The figures are illustrative, not universal buying advice.
        </p>
      </div>

      <ul className='list-disc ml-5 my-4 space-y-3'>
        <li><strong>Grade and defects:</strong> name the national, contractual, or buyer method. State the sample mass, defect categories, maximum equivalents, and whether any single defect is disqualifying.</li>
        <li><strong>Moisture and water activity:</strong> record instrument or reference method, temperature conditions where relevant, repeat count, and the rule for readings close to the limit.</li>
        <li><strong>Screen distribution:</strong> specify the sieve set, sample mass, motion or duration, and the minimum retained percentage rather than using a screen label alone.</li>
        <li><strong>Density:</strong> include only when it informs lot consistency or roast planning. Name the vessel, filling method, unit, repeats, and reporting rule.</li>
        <li><strong>Odor, color, and foreign matter:</strong> define clear rejection conditions for moldy, chemical, smoky, or otherwise contaminated samples and non-coffee material.</li>
      </ul>

      <p className='my-4'>
        Do not collect numbers because competitors display them. Each field should change a buying, preparation, roasting, or acceptance decision. Our guides to <Link href='/insights/green-coffee-moisture-content-water-activity-guide' className='text-amber-700 hover:underline font-semibold'>moisture and water activity</Link>, <Link href='/insights/ethiopian-coffee-screen-size-guide' className='text-amber-700 hover:underline font-semibold'>screen-size specifications</Link>, and <Link href='/insights/green-coffee-density-quality-control-protocol' className='text-amber-700 hover:underline font-semibold'>green coffee density</Link> explain how to make those fields repeatable.
      </p>

      <h3 id='sensory' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineBeaker className='w-8 h-8 text-amber-600' />
        4. Convert Cup Goals Into Approval Rules
      </h3>
      <p className='my-4'>
        Sensory specifications become useful when they describe the product role and name the reference. A single score cannot carry the full decision. Two coffees may receive the same score but serve different menus, roast styles, or customers. Write the desired character, unacceptable traits, evaluation method, and approval authority.
      </p>
      <p className='my-4'>
        The <a href='https://sca.coffee/value-assessment' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline font-semibold'>Specialty Coffee Association Coffee Value Assessment</a> separates physical, descriptive, affective, and extrinsic information. That structure helps buyers avoid treating one total score as the complete definition of value. Use the evaluation system your teams understand, document it, and keep the final approved pre-shipment sample as the sensory reference.
      </p>

      <div className='grid md:grid-cols-2 gap-4 my-6'>
        <div className='border border-green-200 rounded-lg p-5 bg-green-50'>
          <h4 className='font-bold mb-2 text-green-800'>Usable sensory language</h4>
          <ul className='list-disc ml-5 space-y-2 text-sm text-gray-700'>
            <li>Role: single-origin filter release</li>
            <li>Profile: floral, citrus-led, clean finish</li>
            <li>Structure: bright acidity, light-to-medium body</li>
            <li>Disqualifiers: phenolic, moldy, smoky, or ferment taint</li>
            <li>Reference: buyer-approved PSS and retained counterpart</li>
          </ul>
        </div>
        <div className='border border-red-200 rounded-lg p-5 bg-red-50'>
          <h4 className='font-bold mb-2 text-red-800'>Weak sensory language</h4>
          <ul className='list-disc ml-5 space-y-2 text-sm text-gray-700'>
            <li>Premium flavor</li>
            <li>Score: 86+</li>
            <li>Typical origin character</li>
            <li>Good acidity and body</li>
            <li>Subject to buyer satisfaction</li>
          </ul>
        </div>
      </div>

      <p className='my-4'>
        Set a clear approval sequence: offer or type sample for screening, pre-shipment sample for final release, retained samples for both parties, and arrival sample for condition verification. The <Link href='/insights/ethiopian-coffee-sample-approval-guide' className='text-amber-700 hover:underline font-semibold'>Ethiopian coffee sample approval workflow</Link> covers sample identity and retention in detail.
      </p>

      <h3 id='commercial' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineTag className='w-8 h-8 text-amber-600' />
        5. Connect Quality to Packaging, Marking, and Delivery
      </h3>
      <p className='my-4'>
        Coffee can meet the cup brief and still arrive unusable for the buyer&apos;s operation. Net bag weight, liner type, bag marks, pallet configuration, container protection, and required documents belong in the same controlled specification or in a clearly referenced packing schedule.
      </p>
      <ul className='list-disc ml-5 my-4 space-y-3'>
        <li><strong>Packaging:</strong> state outer bag material, hermetic liner where required, closure, nominal net weight, and permitted weight tolerance.</li>
        <li><strong>Marks:</strong> list the contract, lot, origin, crop, grade, bag count, net weight, and certification marks that must appear.</li>
        <li><strong>Quantity:</strong> distinguish number of bags, net contract weight, and any permitted shipment tolerance.</li>
        <li><strong>Protection:</strong> define clean-container checks, moisture controls, separation from taint risks, and loading evidence.</li>
        <li><strong>Documents:</strong> list quality reports, certificates, packing list, weight evidence, and shipping records required for release.</li>
      </ul>
      <p className='my-4'>
        Commercial terms such as price, payment, Incoterm, shipment window, and claim notice should remain in the contract, with the technical specification incorporated by its exact ID and version. Our <Link href='/insights/ethiopian-coffee-contracts-payment-terms-guide' className='text-amber-700 hover:underline font-semibold'>coffee contracts and payment terms guide</Link> explains that broader agreement structure.
      </p>

      <h3 id='workflow' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineCheckCircle className='w-8 h-8 text-amber-600' />
        6. Control the Specification From Offer to Arrival
      </h3>
      <p className='my-4'>
        A correct template can still fail through weak version control. Give one person on each side authority to approve revisions. Store the signed or accepted version with the contract and purchase order. When a field changes, issue a new version with a short change log instead of overwriting the old file.
      </p>

      <ol className='font-inconsolata my-6 list-decimal ml-5 space-y-4'>
        <li><span className='font-bold'>Issue the buyer brief.</span> Define product role, volume, price boundary, origin preferences, and required technical fields before samples are selected.</li>
        <li><span className='font-bold'>Map the supplier offer.</span> Transfer verified lot facts into the draft, while leaving unknown fields visibly open.</li>
        <li><span className='font-bold'>Evaluate the offer sample.</span> Record sensory and physical results without treating an offer sample as final shipment approval.</li>
        <li><span className='font-bold'>Agree the final specification.</span> Resolve methods, limits, review bands, packaging, sample stages, and decision rights.</li>
        <li><span className='font-bold'>Approve the pre-shipment sample.</span> Tie the PSS code, date, seal, and retained counterparts to the final document.</li>
        <li><span className='font-bold'>Release against evidence.</span> Confirm final QC, packing, marks, quantity, and required shipment records.</li>
        <li><span className='font-bold'>Inspect at arrival.</span> Sample under the agreed plan, compare with the PSS and limits, then pass, hold, or notify.</li>
      </ol>

      <div className='bg-blue-50 border border-blue-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3'>Use three decision states</h4>
        <p className='text-sm text-gray-700'>
          <strong>Pass</strong> means the requirement is met. <strong>Review</strong> means a result sits inside an agreed decision band and needs named buyer approval. <strong>Fail</strong> triggers hold, notice, neutral verification, replacement, allowance, or another contractual remedy. Review bands keep trivial variation from becoming automatic rejection without making limits meaningless.
        </p>
      </div>

      <h3 id='ethiopian-coffee' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineClipboardDocumentCheck className='w-8 h-8 text-amber-600' />
        7. Adapt the Specification Sheet for Ethiopian Coffee
      </h3>
      <p className='my-4'>
        Ethiopian grades, origin names, preparation terms, and buyer requirements must be recorded without assuming they are interchangeable. The official <a href='https://ethiocta.gov.et/wp-content/uploads/2022/09/coffee-proclamation.pdf' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline font-semibold'>Coffee Quality Control and Marketing Proclamation</a> defines coffee processing in relation to national quality and grade requirements as well as buyer needs. A buyer specification therefore adds commercial precision; it does not replace official export grading or certificates.
      </p>
      <ul className='list-disc ml-5 my-4 space-y-3'>
        <li><strong>Name the origin level accurately.</strong> Record region, zone, woreda, kebele, cooperative, washing station, or producer group only when the lot documentation supports it.</li>
        <li><strong>Separate process from preparation.</strong> Washed or natural describes primary processing. Screen selection, defect removal, color sorting, hand sorting, and bagging describe export preparation.</li>
        <li><strong>State the grade and buyer additions.</strong> Keep the official or contractual grade visible, then list stricter buyer limits as separate fields.</li>
        <li><strong>Control the sample after final milling.</strong> An early stock-lot sample may guide interest, but final acceptance should reference the export-prepared lot.</li>
        <li><strong>Keep crop and lot codes visible.</strong> Do not let a recognizable regional name substitute for identity, harvest timing, and traceability.</li>
      </ul>
      <p className='my-4'>
        An origin-connected exporter should be able to explain which facts come from sourcing records, which come from the final laboratory report, and which remain buyer targets. That separation is more credible than filling every blank with an estimate.
      </p>

      <h3 id='mistakes' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineExclamationTriangle className='w-8 h-8 text-amber-600' />
        8. Remove Specification Gaps Before Signing
      </h3>
      <p className='my-4'>
        Run a line-by-line red-team review before the specification becomes contractual. Ask how a new QC technician, neutral inspector, or claims manager would interpret each field without access to earlier calls. If the answer depends on memory, the document is not finished.
      </p>
      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Common gap</th>
              <th className='p-3 text-left font-bold'>Why it fails</th>
              <th className='p-3 text-left font-bold'>Correction</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>No document version</td>
              <td className='p-3'>Teams may test against different requirements</td>
              <td className='p-3'>Add ID, version, date, approvers, and change log</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Number without method</td>
              <td className='p-3'>Results may not be reproducible</td>
              <td className='p-3'>Name method, unit, sample stage, and repeats</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Score without profile</td>
              <td className='p-3'>A technically high score may miss the product role</td>
              <td className='p-3'>Add profile, structure, disqualifiers, and PSS</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Limit without action</td>
              <td className='p-3'>Neither team knows whether to pass, hold, or reject</td>
              <td className='p-3'>Define pass, review, fail, notice, and verification</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Origin name as identity</td>
              <td className='p-3'>Regional labels can cover many separate lots</td>
              <td className='p-3'>Use crop, process, lot code, and source records</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        Finish with a one-page approval block listing the specification version, contract reference, approved PSS code, buyer approver, seller approver, and date. Attach the supporting reports behind it. The result is compact enough for procurement and specific enough for the lab, warehouse, and claims file.
      </p>
      <p className='my-4'>
        A strong green coffee specification sheet does not attempt to predict every possible dispute. It makes the intended lot and decision rules clear before money and coffee move. Define the identity, state measurable quality requirements, preserve the sensory reference, control revisions, and connect every limit to an action. That discipline gives buyers cleaner approvals and gives exporters a fair target for preparation.
      </p>

      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Build Your Ethiopian Coffee Specification With Current Lot Data</h4>
        <p className='my-2'>
          Share your product role, cup target, physical fields, volume, and shipment window. We can match current Ethiopian lot options to a clear specification and prepare samples for your approval workflow.
        </p>
        <div className='flex flex-wrap gap-4 mt-4'>
          <Link href='/offerings' className='bg-dark text-primary px-6 py-3 rounded font-bold hover:bg-gray-800 transition'>
            View Offerings
          </Link>
          <Link href='/contact-us' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>
            Request Samples / Contact Us
          </Link>
          <Link href='/ordering-info' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>
            How to Order
          </Link>
        </div>
      </div>

      <section id='faq' className='mb-12 bg-gray-50 rounded-xl p-8 border border-gray-200'>
        <h3 className='text-2xl font-bold mb-6 text-gray-900 flex items-center gap-2'>
          <HiOutlineQuestionMarkCircle className='text-amber-600' /> Frequently Asked Questions
        </h3>
        <div className='space-y-6'>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>What is a green coffee specification sheet?</h4>
            <p className='text-sm text-gray-600'>
              A green coffee specification sheet is a controlled document that defines the lot identity, sensory target, physical limits, packaging, sampling, documents, and acceptance rules for a purchase. It turns a buyer&apos;s needs into requirements that the exporter, laboratory, warehouse, and claims team can apply to the same coffee.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>What should a green coffee spec sheet include?</h4>
            <p className='text-sm text-gray-600'>
              Include document version, contract and lot references, origin, crop, process, grade, approved sample, sensory profile, defects, moisture, water activity, screen distribution, packaging, bag marks, sampling method, required reports, pass or review limits, notice timing, and the remedy or neutral-verification process.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Is a supplier offer sheet the same as a buyer specification?</h4>
            <p className='text-sm text-gray-600'>
              No. An offer sheet describes an available coffee and its commercial indication. A buyer specification defines the coffee and conditions the buyer will accept. Verified offer data can populate the draft specification, but the final version needs agreed methods, limits, sample references, packaging instructions, and decision rules.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Should cup score be a binding acceptance limit?</h4>
            <p className='text-sm text-gray-600'>
              Cup score can support acceptance when the method, panel, sample roast, and tolerance are defined, but it should not stand alone. Add the intended profile, disqualifying taints, and the approved pre-shipment sample. A coffee can meet a score threshold yet miss the flavor role it was purchased to fill.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>How should buyers handle a result outside specification?</h4>
            <p className='text-sm text-gray-600'>
              First hold the affected coffee and confirm sample identity, method, calibration, and repeatability. Notify the seller within the contract window, preserve retained samples and records, and use the agreed neutral process if results remain disputed. The contract should define review bands and available remedies before shipment.
            </p>
          </div>
        </div>
      </section>

      <div className='my-10 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4'>Related Articles</h3>
        <div className='grid md:grid-cols-2 gap-8'>
          <div>
            <p className='font-bold text-sm uppercase tracking-wide text-gray-700 mb-3'>Offers and Contract Control</p>
            <ul className='list-disc ml-5 space-y-2 text-sm'>
              <li><Link href='/insights/ethiopian-coffee-offer-sheet-guide' className='text-amber-700 hover:underline font-semibold'>How to Read an Ethiopian Coffee Offer Sheet</Link></li>
              <li><Link href='/insights/ethiopian-coffee-contracts-payment-terms-guide' className='text-amber-700 hover:underline font-semibold'>Ethiopian Coffee Contracts and Payment Terms</Link></li>
              <li><Link href='/insights/green-coffee-supplier-evaluation-checklist' className='text-amber-700 hover:underline font-semibold'>Green Coffee Supplier Evaluation Checklist</Link></li>
            </ul>
          </div>
          <div>
            <p className='font-bold text-sm uppercase tracking-wide text-gray-700 mb-3'>Samples and Sensory Approval</p>
            <ul className='list-disc ml-5 space-y-2 text-sm'>
              <li><Link href='/insights/ethiopian-coffee-sample-approval-guide' className='text-amber-700 hover:underline font-semibold'>Ethiopian Coffee Sample Approval Guide</Link></li>
              <li><Link href='/insights/how-to-cup-evaluate-ethiopian-coffee-samples' className='text-amber-700 hover:underline font-semibold'>How to Cup Ethiopian Coffee Samples</Link></li>
              <li><Link href='/insights/green-coffee-quality-claims-guide' className='text-amber-700 hover:underline font-semibold'>Green Coffee Quality Claims Workflow</Link></li>
            </ul>
          </div>
          <div>
            <p className='font-bold text-sm uppercase tracking-wide text-gray-700 mb-3'>Physical Quality Fields</p>
            <ul className='list-disc ml-5 space-y-2 text-sm'>
              <li><Link href='/insights/green-coffee-quality-control-defects-grading' className='text-amber-700 hover:underline font-semibold'>Green Coffee Defects and Grading</Link></li>
              <li><Link href='/insights/green-coffee-moisture-content-water-activity-guide' className='text-amber-700 hover:underline font-semibold'>Moisture Content and Water Activity</Link></li>
              <li><Link href='/insights/ethiopian-coffee-screen-size-guide' className='text-amber-700 hover:underline font-semibold'>Ethiopian Coffee Screen Size</Link></li>
            </ul>
          </div>
          <div>
            <p className='font-bold text-sm uppercase tracking-wide text-gray-700 mb-3'>Arrival and Verification</p>
            <ul className='list-disc ml-5 space-y-2 text-sm'>
              <li><Link href='/insights/green-coffee-receiving-inspection-checklist' className='text-amber-700 hover:underline font-semibold'>Green Coffee Receiving Inspection</Link></li>
              <li><Link href='/insights/green-coffee-shipping-documents-checklist' className='text-amber-700 hover:underline font-semibold'>Green Coffee Shipping Documents</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> Published on {date} by Ethio Coffee Import and Export PLC, an origin-connected Ethiopian coffee exporter with three decades of sourcing heritage. Specifications, test methods, tolerances, and remedies must be agreed for each contract. Contact us for current lot information and sample support.
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
