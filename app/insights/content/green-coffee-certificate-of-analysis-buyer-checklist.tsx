import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import {
  HiOutlineBeaker,
  HiOutlineCheckCircle,
  HiOutlineClipboardDocumentCheck,
  HiOutlineClipboardDocumentList,
  HiOutlineDocumentMagnifyingGlass,
  HiOutlineDocumentText,
  HiOutlineExclamationTriangle,
  HiOutlineIdentification,
  HiOutlineLightBulb,
  HiOutlineQuestionMarkCircle,
  HiOutlineShieldCheck,
} from 'react-icons/hi2'

type InsightContentProps = { title: string; date: string; large_image_url: string }

export default function GreenCoffeeCertificateOfAnalysisBuyerChecklist({
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
        How to validate a green coffee certificate of analysis through lot identity, sample basis, test methods, document control, results, and release status
      </h2>

      <figure>
        <figcaption className='font-inconsolata my-2'>{title}</figcaption>
        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Hand inspecting raw beans for green coffee certificate of analysis review'
            fill
            objectFit='cover'
            className='w-full h-full'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>
        <figcaption className='font-inconsolata text-xs my-1 text-gray-600'>
          Photo by <a href='https://www.pexels.com/photo/scooping-raw-coffee-beans-into-burlap-sack-29873454/' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>Ferhat E. Arslan on Pexels</a>.
        </figcaption>
      </figure>

      <div className='my-4 text-sm bg-amber-50 p-4 rounded-lg border border-amber-200'>
        <span className='font-semibold'>Category:</span>
        <span className='ml-2'>Quality Assurance / Certificate of Analysis / Green Coffee Buying / Procurement Resources</span>
      </div>

      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-8 border border-amber-200'>
        <h3 className='font-bold text-xl mb-3 flex items-center gap-2'>
          <HiOutlineLightBulb className='text-amber-400 flex-shrink-0' />
          Key Takeaway
        </h3>
        <p className='text-sm leading-relaxed'>
          A green coffee certificate of analysis is useful only when the buyer can connect every reported result to the contracted lot, the represented sample, a stated method, and an authorized release decision. Review the document in six gates: identity, sample basis, issuer control, method clarity, specification status, and shipment reconciliation. Put the lot on hold when any gate fails. A polished PDF cannot repair missing traceability.
        </p>
      </div>

      <div className='my-8 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <HiOutlineClipboardDocumentList className='text-amber-600' /> In This Guide
        </h3>
        <ol className='space-y-2 text-sm'>
          <li><a href='#purpose' className='text-amber-700 hover:underline'>1. Decide what the certificate can prove</a></li>
          <li><a href='#identity' className='text-amber-700 hover:underline'>2. Gate 1: bind the report to one lot</a></li>
          <li><a href='#sample' className='text-amber-700 hover:underline'>3. Gate 2: establish the sample basis</a></li>
          <li><a href='#issuer' className='text-amber-700 hover:underline'>4. Gate 3: authenticate the issuer and document</a></li>
          <li><a href='#methods' className='text-amber-700 hover:underline'>5. Gate 4: read methods, units, and results</a></li>
          <li><a href='#decision' className='text-amber-700 hover:underline'>6. Gate 5: turn results into a decision</a></li>
          <li><a href='#reconcile' className='text-amber-700 hover:underline'>7. Gate 6: reconcile the release file</a></li>
          <li><a href='#ethiopian-lots' className='text-amber-700 hover:underline'>8. Apply the workflow to Ethiopian lots</a></li>
          <li><a href='#case-study' className='text-amber-700 hover:underline'>9. Worked buyer review</a></li>
          <li><a href='#checklist' className='text-amber-700 hover:underline'>10. Copy the 18-point checklist</a></li>
          <li><a href='#faq' className='text-amber-700 hover:underline'>11. Frequently asked questions</a></li>
        </ol>
      </div>

      <p className='my-4 text-lg leading-relaxed'>
        A <span className='font-bold'>green coffee certificate of analysis</span> can look complete while leaving the purchase decision unsupported. A page may show moisture, defects, screen distribution, and cup score yet omit the sample code, test method, represented quantity, or authorized signatory. Those omissions matter because the buyer is not purchasing a page of results. The buyer is purchasing a defined lot that must satisfy agreed requirements.
      </p>
      <p className='my-4'>
        This checklist is for green-coffee importers, roaster procurement teams, quality managers, and food-safety staff reviewing an offer, pre-shipment sample, or final release pack. It focuses on whether the evidence is valid for the decision in front of you. For the underlying limits, use a controlled <Link href='/insights/green-coffee-specification-sheet-template' className='text-amber-700 hover:underline font-semibold'>green coffee specification sheet</Link>. For the mechanics of drawing representative increments, use the separate <Link href='/insights/green-coffee-sampling-protocol' className='text-amber-700 hover:underline font-semibold'>green coffee sampling protocol</Link>.
      </p>

      <h3 id='purpose' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineDocumentText className='w-8 h-8 text-amber-600' />
        1. Decide What the Certificate Can Prove
      </h3>
      <p className='my-4'>
        A CoA is a controlled report of observations or test results for an identified sample. Its practical job is to answer four questions: what was tested, how it was tested, what the laboratory found, and who authorized the report. When the sample is traceably linked to the contracted coffee, the CoA becomes part of a lot-release record.
      </p>
      <p className='my-4'>
        It does not create the buyer&apos;s requirements, guarantee that every bag is identical, replace an approved pre-shipment sample, or prove conditions after the test date. It also does not turn an exporter&apos;s in-house laboratory into an accredited third-party laboratory. The report&apos;s value depends on the decision, the contract, and the evidence level the buyer requested.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>CoA field group</th>
              <th className='p-3 text-left font-bold'>Question it must answer</th>
              <th className='p-3 text-left font-bold'>Buyer action if unclear</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Lot identity</td>
              <td className='p-3'>Which commercial coffee does this report cover?</td>
              <td className='p-3'>Hold and request a corrected lot reference</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Sample basis</td>
              <td className='p-3'>When, where, and from what quantity was it drawn?</td>
              <td className='p-3'>Ask for sample record and represented volume</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Issuer control</td>
              <td className='p-3'>Who tested, reviewed, revised, and released the report?</td>
              <td className='p-3'>Authenticate with the named organization</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Methods and results</td>
              <td className='p-3'>Are the values reproducible and interpretable?</td>
              <td className='p-3'>Request method, unit, basis, and reporting limit</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Disposition</td>
              <td className='p-3'>Did the result pass, require review, or fail?</td>
              <td className='p-3'>Apply the contract rule before release</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='bg-red-50 p-5 rounded-lg border border-red-200 my-6'>
        <p className='font-bold text-red-900 mb-2 flex items-center gap-2'>
          <HiOutlineExclamationTriangle className='w-5 h-5' /> The highest-risk field is often not the result
        </p>
        <p className='text-sm text-red-900'>
          A plausible moisture value attached to the wrong stock sample is weaker evidence than an unusual value attached to a fully traceable final sample. Validate identity and sample basis before debating whether a number looks reasonable.
        </p>
      </div>

      <h3 id='identity' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineIdentification className='w-8 h-8 text-amber-600' />
        2. Gate 1: Bind the Report to One Commercial Lot
      </h3>
      <p className='my-4'>
        Start at the top of the certificate and ignore the results column. The report should identify the seller or exporter, buyer or contract reference where applicable, origin, crop period, process, grade or quality description, seller&apos;s lot code, and the report&apos;s own unique number. For shipment-stage evidence, add purchase order, bag marks, container or booking reference when available, and represented bag count or net weight.
      </p>
      <p className='my-4'>
        Match those fields against the approved offer and contract. A regional name such as Guji, Sidama, or Yirgacheffe is a sourcing description, not a unique lot key. The same commercial description can appear on separate mill runs, warehouse stacks, or shipment parcels. At least one identifier must follow the physical coffee through sampling, testing, bagging, and release.
      </p>
      <ul className='list-disc ml-5 my-4 space-y-3'>
        <li><strong>Pass:</strong> the certificate, sample label, specification, and commercial file share a unique lot or contract key.</li>
        <li><strong>Review:</strong> the coffee description matches, but one secondary reference is absent and can be verified before release.</li>
        <li><strong>Fail:</strong> the report relies only on origin, grade, or warehouse wording that could describe several lots.</li>
      </ul>

      <h3 id='sample' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineClipboardDocumentCheck className='w-8 h-8 text-amber-600' />
        3. Gate 2: Establish the Sample Basis
      </h3>
      <p className='my-4'>
        The certificate should name the sample code, sample type, sampling date, receipt date, test date, sampling location, sampler or responsible party, represented quantity, and condition at receipt. The sample stage is decisive. An offer sample can support buying interest, while a pre-shipment sample can support release only after final preparation and with a traceable relationship to the tendered lot.
      </p>
      <p className='my-4'>
        For bagged green coffee, <a href='https://www.iso.org/standard/9786.html' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline font-semibold'>ISO 4072</a> covers administrative arrangements, taking increments, preparing samples, and marking them for contract-conformity examination. The CoA does not need to reproduce the entire sampling procedure. It should cite the agreed protocol or sampling record clearly enough for another reviewer to retrieve it.
      </p>
      <div className='grid md:grid-cols-2 gap-5 my-6'>
        <div className='bg-green-50 p-5 rounded-lg border border-green-200'>
          <p className='font-bold text-green-900 mb-2'>Evidence that strengthens the sample link</p>
          <ul className='list-disc ml-5 space-y-2 text-sm text-green-900'>
            <li>Unique sample ID repeated on the sealed bag and report</li>
            <li>Final-mill or pre-shipment stage stated</li>
            <li>Represented bags, weight, or containers recorded</li>
            <li>Sampling record, seal number, and retention sample available</li>
          </ul>
        </div>
        <div className='bg-red-50 p-5 rounded-lg border border-red-200'>
          <p className='font-bold text-red-900 mb-2'>Evidence that weakens the sample link</p>
          <ul className='list-disc ml-5 space-y-2 text-sm text-red-900'>
            <li>Generic label such as current crop washed Grade 1</li>
            <li>Test date before final sorting or blending</li>
            <li>No represented quantity or sampling party</li>
            <li>Spreadsheet results copied without the source report</li>
          </ul>
        </div>
      </div>

      <h3 id='issuer' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineShieldCheck className='w-8 h-8 text-amber-600' />
        4. Gate 3: Authenticate the Issuer and Document
      </h3>
      <p className='my-4'>
        Identify who generated the results and why that evidence level fits the purchase. Exporter laboratories are useful for routine physical and sensory release checks when their methods, equipment, analysts, and review controls are transparent. Buyer laboratories provide independent verification. Accredited third-party laboratories may be required for regulated residues, contaminants, contractual disputes, or buyer policies.
      </p>
      <p className='my-4'>
        Accreditation is not a logo check. Confirm the laboratory name, accreditation body, certificate status, and whether the requested method sits inside the laboratory&apos;s accredited scope. <a href='https://www.iso.org/ISO-IEC-17025-testing-and-calibration-laboratories.html' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline font-semibold'>ISO/IEC 17025</a> is the international competence framework for testing and calibration laboratories, but a laboratory can be accredited for some methods and not others.
      </p>
      <p className='my-4'>
        Then review document control: unique certificate number, issue date, page count, revision number, reason for amendment, analyst or reviewer, authorized signatory, and contact details that can be verified independently. A revised certificate should not silently overwrite the original. Keep both versions and the change reason in the purchase file.
      </p>

      <h3 id='methods' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineBeaker className='w-8 h-8 text-amber-600' />
        5. Gate 4: Read Methods, Units, and Results
      </h3>
      <p className='my-4'>
        Read each line as a four-part record: parameter, method, result with unit, and decision limit. Moisture without a method or reporting basis is incomplete. Screen distribution without the sample mass and screen convention can be misread. A sensory score without protocol, sample roast reference, panel information, or disqualifying taints may not support the product role.
      </p>
      <p className='my-4'>
        The same discipline applies to pesticide residues, mycotoxins, and other food-safety tests. Record the method version, analyte, result unit, limit of detection or quantification where relevant, and any measurement uncertainty needed for the decision rule. Use the destination requirement and contract to decide which panels are necessary. A generic statement that a lot is safe does not replace named analytes and reportable results.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Parameter</th>
              <th className='p-3 text-left font-bold'>Minimum context on the CoA</th>
              <th className='p-3 text-left font-bold'>Frequent ambiguity</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Moisture</td>
              <td className='p-3'>Method, percentage basis, instrument, test date</td>
              <td className='p-3'>Value copied without method or calibration context</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Water activity</td>
              <td className='p-3'>Method or instrument, sample temperature, result</td>
              <td className='p-3'>Confused with moisture percentage</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Defects</td>
              <td className='p-3'>Grading system, sample mass, full and equivalent counts</td>
              <td className='p-3'>Total shown without defect classes or basis</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Screen distribution</td>
              <td className='p-3'>Screen set, retained percentages, sample mass</td>
              <td className='p-3'>One headline screen number hides the distribution</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Sensory</td>
              <td className='p-3'>Protocol, roast code, cup date, profile, taints, panel</td>
              <td className='p-3'>Score treated as the entire acceptance rule</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Residue or contaminant</td>
              <td className='p-3'>Analyte, method, unit, result, reporting limit</td>
              <td className='p-3'>Pass statement without result or analyte list</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        Do not use a universal list of acceptable values. The contract and destination rules control the decision, and the right method depends on the parameter. If you need the technical interpretation behind a result, open the linked topic guide rather than expanding the CoA into a laboratory manual. For regulated chemical evidence, see the <Link href='/insights/green-coffee-pesticide-residue-testing-guide' className='text-amber-700 hover:underline font-semibold'>green coffee pesticide residue testing guide</Link>.
      </p>

      <h3 id='decision' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineCheckCircle className='w-8 h-8 text-amber-600' />
        6. Gate 5: Turn Results Into a Release Decision
      </h3>
      <p className='my-4'>
        The certificate reports evidence. The buyer&apos;s approved specification supplies the limits and action rules. Bring both into one review view with columns for parameter, requirement, result, status, reviewer, and action. This prevents procurement from interpreting a laboratory number differently from quality staff.
      </p>
      <ul className='list-disc ml-5 my-4 space-y-3'>
        <li><strong>Pass:</strong> identity and method are valid, the result meets the agreed requirement, and no other release condition is open.</li>
        <li><strong>Review:</strong> the result falls within an agreed review band, uncertainty affects the decision, or a correctable document field needs confirmation.</li>
        <li><strong>Fail:</strong> a result breaches the contractual limit, a prohibited taint or analyte is found, or the evidence cannot be tied to the lot.</li>
        <li><strong>Not tested:</strong> keep this status separate from pass. Blank cells and not detected results do not mean the same thing.</li>
      </ul>
      <p className='my-4'>
        Require a named person to authorize the disposition and record the date. If retesting is permitted, define who selects the retained sample, which laboratory and method apply, and how conflicting results will be handled. Do this before shipment. The <a href='https://www.jdepeets.com/siteassets/home/about-us/policies/jde-peets-kde-green-coffee-sourcing-terms.pdf' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline font-semibold'>JDE Peet&apos;s green coffee sourcing terms published November 1, 2025</a>, for example, make sample identification and represented volume explicit fields and reserve analytical testing within the buyer&apos;s quality procedures. Your exact rules may differ, but the evidence-to-decision link should be equally clear.
      </p>

      <h3 id='reconcile' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineDocumentMagnifyingGlass className='w-8 h-8 text-amber-600' />
        7. Gate 6: Reconcile the Release File
      </h3>
      <p className='my-4'>
        Before authorizing shipment or payment, reconcile the certificate against the approved sample record, contract specification, packing data, and final lot identifiers. The CoA belongs inside the quality file. It is not a certificate of origin, phytosanitary certificate, fumigation certificate, or customs document, and it does not replace any of them.
      </p>
      <p className='my-4'>
        Check that bag marks and lot codes have not changed after testing, the tested quantity matches the prepared quantity, the certificate date follows final preparation, and any amendment is approved. Then place the CoA in the broader <Link href='/insights/green-coffee-shipping-documents-checklist' className='text-amber-700 hover:underline font-semibold'>green coffee shipping documents review</Link> so commercial and logistics teams use the same master data.
      </p>

      <div className='bg-gray-50 p-6 rounded-lg border border-gray-200 my-6'>
        <p className='font-bold mb-3'>CoA confidence ladder</p>
        <ol className='space-y-3 text-sm'>
          <li><strong>Level 1, descriptive:</strong> values appear on an offer sheet with no source report. Useful only for screening.</li>
          <li><strong>Level 2, traceable internal:</strong> exporter report names lot, sample, methods, analyst, and issue control. Useful for routine decisions when agreed.</li>
          <li><strong>Level 3, independently verified:</strong> buyer or third-party report confirms selected fields on a controlled sample.</li>
          <li><strong>Level 4, accredited and decision-ready:</strong> required methods are inside the laboratory&apos;s scope, results map to contractual limits, and disposition is authorized.</li>
        </ol>
        <p className='text-sm mt-4'>
          Higher is not automatically necessary for every parameter. Assign the evidence level by hazard, buyer policy, regulation, contract value, and consequence of error.
        </p>
      </div>

      <h3 id='ethiopian-lots' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineIdentification className='w-8 h-8 text-amber-600' />
        8. Apply the Workflow to Ethiopian Lots
      </h3>
      <p className='my-4'>
        In Ethiopian export work, buyers may receive an exporter&apos;s physical and sensory report alongside official quality or grade paperwork. Keep each document&apos;s issuer and purpose visible. Do not rename the whole pack as one generic quality certificate, and do not assume an official grade document answers every buyer-specific specification field.
      </p>
      <p className='my-4'>
        Three origin-side observations improve CoA review. First, a recognized origin and grade can describe more than one warehouse stack or final mill run, so preserve the exporter&apos;s unique lot code. Second, color sorting, density separation, hand sorting, or blending can materially change the prepared lot after an early sample. Release evidence should therefore refer to the final export-prepared coffee. Third, the contract, sample label, report, and bag marks often pass through different teams. Repeating one master identity block across all four reduces transcription drift.
      </p>
      <p className='my-4'>
        As an origin-connected exporter, Ethio Coffee Import and Export works through trusted cooperatives, washing stations, and farming communities. We do not own farms or plantations. Our role is to connect buyer requirements to traceable supplier lots, coordinate sample and document control, and make clear which results come from exporter QC, official processes, or independent laboratory work.
      </p>

      <h3 id='case-study' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineDocumentMagnifyingGlass className='w-8 h-8 text-amber-600' />
        9. Worked Buyer Review: A Good Result on the Wrong Stage
      </h3>
      <p className='my-4'>
        Consider an illustrative mid-sized European roaster buying two containers of washed Ethiopian coffee. Procurement receives a clean one-page report showing 10.8% moisture and an 85.5 sensory score. The regional description and grade match the offer, but the report has no sample ID, represented quantity, method references, revision number, or final-mill date.
      </p>
      <p className='my-4'>
        The quality manager does not reject the coffee and does not release it. The manager places a document hold and asks five questions: Which lot code was tested? Was the sample drawn before or after final sorting? What quantity did it represent? Which methods produced the physical results? Who reviewed and authorized the report?
      </p>
      <p className='my-4'>
        The exporter confirms that the page came from an earlier stock-lot evaluation. After final preparation, the exporter draws and records a new pre-shipment sample, repeats the agreed checks, and issues a controlled report tied to the contract, final lot code, represented bags, and retained sample. The buyer then maps the results to the specification and releases the lot.
      </p>
      <p className='my-4'>
        The lesson is not that the first numbers were false. They were valid for a different decision stage. The six-gate review prevented a stock-lot report from being treated as proof of final shipment conformity.
      </p>

      <h3 id='checklist' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineClipboardDocumentCheck className='w-8 h-8 text-amber-600' />
        10. Copy This 18-Point Buyer Checklist
      </h3>
      <p className='my-4'>
        Mark each field pass, review, fail, or not applicable. Do not release the lot while a critical identity, sample, method, or food-safety field remains unresolved.
      </p>
      <div className='grid md:grid-cols-2 gap-5 my-6'>
        <div className='bg-amber-50 p-5 rounded-lg border border-amber-200'>
          <p className='font-bold mb-3'>Identity and sample</p>
          <ol className='list-decimal ml-5 space-y-2 text-sm'>
            <li>Seller or exporter legal name</li>
            <li>Buyer, contract, or purchase-order reference</li>
            <li>Unique commercial lot code</li>
            <li>Origin, crop, process, grade, and preparation</li>
            <li>Unique sample ID and sample stage</li>
            <li>Sampling date, place, party, and protocol</li>
            <li>Represented bags, weight, or containers</li>
            <li>Receipt condition and test dates</li>
          </ol>
        </div>
        <div className='bg-amber-50 p-5 rounded-lg border border-amber-200'>
          <p className='font-bold mb-3'>Report and decision control</p>
          <ol start={9} className='list-decimal ml-5 space-y-2 text-sm'>
            <li>Laboratory and testing location</li>
            <li>Certificate number, issue date, and page count</li>
            <li>Revision status and amendment reason</li>
            <li>Method and version for every result</li>
            <li>Units, basis, and reporting limits</li>
            <li>Specification limits and decision rule</li>
            <li>Pass, review, fail, or not-tested status</li>
            <li>Analyst, reviewer, and authorized signatory</li>
            <li>Accredited scope verified where required</li>
            <li>Final bag, packing, and release references reconciled</li>
          </ol>
        </div>
      </div>

      <p className='my-4'>
        A reliable green coffee certificate of analysis is not defined by how many parameters fit on one page. It is defined by whether a buyer can trace the results to the contracted lot, understand the methods, apply the agreed limits, and recover the decision record later. Validate identity first, then sample basis, issuer, methods, status, and the final release file. That sequence turns laboratory data into usable procurement evidence.
      </p>

      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Request a Lot-Specific Ethiopian Coffee Quality File</h4>
        <p className='my-2'>
          Share your target origin, cup profile, physical specification, required tests, volume, and shipment window. We can present current Ethiopian lots, coordinate samples, and prepare a clear quality-document package for your approval process.
        </p>
        <div className='flex flex-wrap gap-4 mt-4'>
          <Link href='/offerings' className='bg-dark text-primary px-6 py-3 rounded font-bold hover:bg-gray-800 transition'>
            View Offerings
          </Link>
          <Link href='/contact-us' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>
            Request Current Lots
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
            <h4 className='font-bold text-gray-800 mb-2'>What should a green coffee certificate of analysis include?</h4>
            <p className='text-sm text-gray-600'>
              It should include the exporter or seller, unique lot and sample IDs, represented quantity, sampling and test dates, laboratory, methods, results with units, specification limits, disposition, certificate number, revision status, analyst or reviewer, and authorized signatory. Add contract, purchase-order, bag, or container references when they are available at that decision stage.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Can an exporter issue a green coffee CoA?</h4>
            <p className='text-sm text-gray-600'>
              Yes, an exporter can issue a CoA for routine physical and sensory checks when the buyer accepts in-house evidence and the report identifies methods, equipment, sample, lot, analyst, and review control. Regulated contaminants, buyer policies, or contracts may require an independent or accredited laboratory, so define the evidence level before testing.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Does a CoA replace a pre-shipment sample?</h4>
            <p className='text-sm text-gray-600'>
              No. The pre-shipment sample lets the buyer inspect and cup a physical reference, while the CoA records results for an identified sample. They support the same release file only when both carry matching lot and sample references. A certificate cannot prove that an unlinked sample represents the coffee prepared for shipment.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>How recent should a green coffee CoA be?</h4>
            <p className='text-sm text-gray-600'>
              The relevant question is whether testing occurred after the last operation that could change the lot and close enough to release to represent current condition. Final sorting, blending, rebagging, storage, or moisture exposure can make an earlier report unsuitable. Set timing in the specification and require a new report when identity or condition changes.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>What makes a green coffee CoA invalid for release?</h4>
            <p className='text-sm text-gray-600'>
              Treat it as invalid for release when the lot or sample cannot be identified, required methods or units are missing, the issuer cannot be authenticated, the report predates final preparation without a justified link, a revision is uncontrolled, required accredited scope is absent, or results do not map to the agreed specification and decision rule.
            </p>
          </div>
        </div>
      </section>

      <div className='my-10 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4'>Related Articles</h3>
        <div className='grid md:grid-cols-2 gap-8'>
          <div>
            <p className='font-bold text-sm uppercase tracking-wide text-gray-700 mb-3'>Specifications and Samples</p>
            <ul className='list-disc ml-5 space-y-2 text-sm'>
              <li><Link href='/insights/green-coffee-specification-sheet-template' className='text-amber-700 hover:underline font-semibold'>Green Coffee Specification Sheet Template</Link></li>
              <li><Link href='/insights/green-coffee-sampling-protocol' className='text-amber-700 hover:underline font-semibold'>Green Coffee Sampling Protocol</Link></li>
              <li><Link href='/insights/ethiopian-coffee-sample-approval-guide' className='text-amber-700 hover:underline font-semibold'>Ethiopian Coffee Sample Approval</Link></li>
            </ul>
          </div>
          <div>
            <p className='font-bold text-sm uppercase tracking-wide text-gray-700 mb-3'>Physical Quality</p>
            <ul className='list-disc ml-5 space-y-2 text-sm'>
              <li><Link href='/insights/green-coffee-moisture-content-water-activity-guide' className='text-amber-700 hover:underline font-semibold'>Moisture Content and Water Activity</Link></li>
              <li><Link href='/insights/green-coffee-quality-control-defects-grading' className='text-amber-700 hover:underline font-semibold'>Green Coffee Defects and Grading</Link></li>
              <li><Link href='/insights/green-coffee-density-quality-control-protocol' className='text-amber-700 hover:underline font-semibold'>Green Coffee Density Protocol</Link></li>
            </ul>
          </div>
          <div>
            <p className='font-bold text-sm uppercase tracking-wide text-gray-700 mb-3'>Food-Safety Evidence</p>
            <ul className='list-disc ml-5 space-y-2 text-sm'>
              <li><Link href='/insights/green-coffee-pesticide-residue-testing-guide' className='text-amber-700 hover:underline font-semibold'>Pesticide Residue Testing</Link></li>
              <li><Link href='/insights/green-coffee-mycotoxin-testing-guide' className='text-amber-700 hover:underline font-semibold'>Mycotoxin Testing for Green Coffee</Link></li>
              <li><Link href='/insights/green-coffee-warehouse-pest-control-guide' className='text-amber-700 hover:underline font-semibold'>Warehouse Pest Control</Link></li>
            </ul>
          </div>
          <div>
            <p className='font-bold text-sm uppercase tracking-wide text-gray-700 mb-3'>Release and Claims</p>
            <ul className='list-disc ml-5 space-y-2 text-sm'>
              <li><Link href='/insights/green-coffee-shipping-documents-checklist' className='text-amber-700 hover:underline font-semibold'>Green Coffee Shipping Documents</Link></li>
              <li><Link href='/insights/green-coffee-receiving-inspection-checklist' className='text-amber-700 hover:underline font-semibold'>Green Coffee Receiving Inspection</Link></li>
              <li><Link href='/insights/green-coffee-quality-claims-guide' className='text-amber-700 hover:underline font-semibold'>Green Coffee Quality Claims</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> Published on {date} by Ethio Coffee Import and Export PLC, an origin-connected Ethiopian coffee exporter. Test methods, evidence levels, limits, and release rules must be agreed for each contract and destination. Contact us for current lot information and sample support.
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
