import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import {
  HiOutlineArchiveBox,
  HiOutlineCamera,
  HiOutlineCheckCircle,
  HiOutlineClipboardDocumentList,
  HiOutlineDocumentCheck,
  HiOutlineExclamationTriangle,
  HiOutlineLightBulb,
  HiOutlineQrCode,
  HiOutlineTag,
} from 'react-icons/hi2'

type InsightContentProps = { title: string; date: string; large_image_url: string }

export default function GreenCoffeeBagMarkingsGuide({
  title,
  date,
  large_image_url,
}: InsightContentProps) {
  return (
    <>
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>{title}</h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        Green coffee bag markings explained, from the ICO number to buyer approval, shipment evidence, and warehouse release
      </h2>

      <figure>
        <figcaption className='font-inconsolata my-2'>{title}</figcaption>
        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Green coffee bag markings on an Ethiopian export coffee sack'
            fill
            objectFit='cover'
            className='w-full h-full'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>
        <figcaption className='font-inconsolata text-xs my-1 text-gray-600'>
          Ethiopian coffee sack photograph by A1000, via Wikimedia Commons, CC0.
        </figcaption>
      </figure>

      <div className='my-4 text-sm bg-amber-50 p-4 rounded-lg border border-amber-200'>
        <span className='font-semibold'>Category:</span>
        <span className='ml-2'>Export Operations / Bag Markings / Lot Traceability / Green Coffee Buying</span>
      </div>

      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-8 border border-amber-200'>
        <h3 className='font-bold text-xl mb-3 flex items-center gap-2'>
          <HiOutlineLightBulb className='text-amber-400 flex-shrink-0' /> Key Takeaway
        </h3>
        <p className='text-sm leading-relaxed'>
          Green coffee bag markings should let a buyer connect every physical bag to one export parcel, one commercial lot, and one warehouse record. The ICO mark supplies the statutory parcel identity. Buyer-defined fields such as contract code, origin, process, grade, crop, bag sequence, and machine-readable ID make that identity usable. Approve the marking proof before packing, photograph it at origin, reconcile it against shipping documents, and quarantine material mismatches at receipt.
        </p>
      </div>

      <div className='my-8 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <HiOutlineClipboardDocumentList className='text-amber-600' /> In This Guide
        </h3>
        <ol className='space-y-2 text-sm'>
          <li><a href='#decode' className='text-amber-700 hover:underline'>1. Decode the ICO identification mark</a></li>
          <li><a href='#field-model' className='text-amber-700 hover:underline'>2. Build a two-layer marking specification</a></li>
          <li><a href='#approval' className='text-amber-700 hover:underline'>3. Approve artwork and variable data before packing</a></li>
          <li><a href='#origin-control' className='text-amber-700 hover:underline'>4. Control marking at the export warehouse</a></li>
          <li><a href='#reconcile' className='text-amber-700 hover:underline'>5. Run the four-way reconciliation</a></li>
          <li><a href='#evidence' className='text-amber-700 hover:underline'>6. Build a useful photo evidence pack</a></li>
          <li><a href='#mismatches' className='text-amber-700 hover:underline'>7. Classify and resolve marking mismatches</a></li>
          <li><a href='#case-study' className='text-amber-700 hover:underline'>8. Apply the system to a mixed-lot program</a></li>
          <li><a href='#faq' className='text-amber-700 hover:underline'>9. Frequently asked questions</a></li>
        </ol>
      </div>

      <p className='text-lg leading-relaxed my-4'>
        <strong>Green coffee bag markings</strong> are the physical identity layer of a shipment. A correct invoice cannot stop two similar Ethiopian lots from being stored under the wrong warehouse code if the sacks are ambiguous. A beautiful custom bag cannot cure an ICO number that conflicts with the Certificate of Origin. Buyers need both compliance and operational clarity.
      </p>
      <p className='my-4'>
        Search results usually explain only the three number groups in an ICO mark. That answer is necessary but incomplete. The buyer&apos;s real questions begin after decoding: which extra fields belong on the sack, who approves them, what must match across documents, how much photographic evidence is useful, and which discrepancies justify quarantine?
      </p>
      <p className='my-4'>
        This guide answers those questions without repeating bag construction, general traceability, or destination paperwork. Use the <Link href='/insights/green-coffee-packaging-bag-types-guide' className='text-amber-700 hover:underline font-semibold'>green coffee packaging guide</Link> for jute, liner, and bag-format decisions. Use the <Link href='/insights/green-coffee-shipping-documents-checklist' className='text-amber-700 hover:underline font-semibold'>shipping documents checklist</Link> for the wider document pack.
      </p>

      <h3 id='decode' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineTag className='w-8 h-8 text-amber-600' />
        1. How Do You Decode an ICO Identification Mark?
      </h3>
      <p className='my-4'>
        An ICO identification mark names one export parcel through three numeric groups: producing-country code, exporter or grower code, and parcel serial number. For Ethiopia, the first group is <strong>010</strong>. Read a mark such as <strong>010/0123/0047</strong> as Ethiopia, assigned exporter 0123, parcel 0047.
      </p>
      <p className='my-4'>
        <a href='https://ico.org/documents/icc-102-9e-rules-certificates-final.pdf' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline font-semibold'>Rule 3 of the International Coffee Organization&apos;s Rules on Statistics</a> requires a unique mark for each parcel. It specifies up to three digits for the country, up to four for the grower or exporter, and up to four for the parcel serial. The mark must appear on every bag or other package and on the related Certificate of Origin. The ICO annex lists Ethiopia as code 010 and uses an October-to-September coffee year for parcel sequencing.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Element</th>
              <th className='p-3 text-left font-bold'>Example</th>
              <th className='p-3 text-left font-bold'>What it proves</th>
              <th className='p-3 text-left font-bold'>What it does not prove</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Country code</td>
              <td className='p-3 font-mono'>010</td>
              <td className='p-3'>The producing member is Ethiopia</td>
              <td className='p-3'>Region, washing station, or farm</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Exporter code</td>
              <td className='p-3 font-mono'>0123</td>
              <td className='p-3'>The nationally assigned grower or exporter identity</td>
              <td className='p-3'>The buyer, cooperative, dry mill, or warehouse</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Parcel serial</td>
              <td className='p-3 font-mono'>0047</td>
              <td className='p-3'>The unique export parcel in the coffee year</td>
              <td className='p-3'>Grade, process, crop, or individual bag number</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='bg-blue-50 border border-blue-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3'>Do not turn the ICO number into a product description</h4>
        <p className='text-sm text-gray-700'>
          The ICO mark identifies the parcel for trade statistics and document control. It does not independently authenticate a claimed washing station, cup score, certification, process, or grade. Those attributes need separate records and buyer-defined markings. Treat the ICO number as the primary join key, not as the complete product story.
        </p>
      </div>

      <h3 id='field-model' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineQrCode className='w-8 h-8 text-amber-600' />
        2. What Should Green Coffee Bag Markings Include?
      </h3>
      <p className='my-4'>
        A useful specification separates the mandatory export identity from the operational fields a buyer needs. This two-layer model prevents marketing copy from crowding out the legal mark and prevents a legally valid sack from becoming an inventory problem.
      </p>
      <p className='my-4'>
        The mandatory layer should remain visually stable and legible. The operational layer can change by contract and program. Our Addis Ababa team sees marking errors increase when packers must interpret long free-text instructions at the sewing line. A fixed field order with short controlled values is easier to check than a paragraph of custom wording.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Field</th>
              <th className='p-3 text-left font-bold'>Control status</th>
              <th className='p-3 text-left font-bold'>Buyer purpose</th>
              <th className='p-3 text-left font-bold'>Recommended format</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>ICO identification mark</td>
              <td className='p-3'>Required export identity</td>
              <td className='p-3'>Parcel-to-certificate match</td>
              <td className='p-3 font-mono'>010/####/####</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Country of origin</td>
              <td className='p-3'>Required by contract or market rules</td>
              <td className='p-3'>Origin declaration and receiving check</td>
              <td className='p-3'>PRODUCE OF ETHIOPIA</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Net mass</td>
              <td className='p-3'>Contract and shipping control</td>
              <td className='p-3'>Count-to-weight reconciliation</td>
              <td className='p-3'>60 KG NET</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Buyer contract and lot code</td>
              <td className='p-3'>Buyer-defined</td>
              <td className='p-3'>ERP, purchase order, and allocation match</td>
              <td className='p-3'>PO-4821 / ETH-GUJI-26-01</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Origin, process, grade, crop</td>
              <td className='p-3'>Buyer-defined</td>
              <td className='p-3'>Prevents adjacent lots from being mixed</td>
              <td className='p-3'>GUJI / NATURAL / G1 / 2025-26</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Bag sequence</td>
              <td className='p-3'>Risk-based</td>
              <td className='p-3'>Bag-level exceptions and audit trail</td>
              <td className='p-3'>001 OF 120</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Barcode or QR code</td>
              <td className='p-3'>Optional operational layer</td>
              <td className='p-3'>Fast warehouse scanning</td>
              <td className='p-3'>Human-readable text plus encoded ID</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        Machine-readable codes should supplement plain text, never replace it. A torn label, dead scanner, missing network connection, or system migration must not make the sack anonymous. Encode a stable ID that resolves to the lot record. Do not place confidential prices or personal farmer data in a publicly readable QR payload.
      </p>

      <h3 id='approval' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineDocumentCheck className='w-8 h-8 text-amber-600' />
        3. Approve Artwork and Variable Data Before Packing
      </h3>
      <p className='my-4'>
        Bag-mark approval should happen in two gates. Approve the fixed artwork when the contract is confirmed, then approve the lot-specific variable data after the ICO mark and final packing details exist. One approval cannot safely cover both because the legal parcel number is often assigned later than the base bag design.
      </p>

      <div className='grid md:grid-cols-2 gap-4 my-6'>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Gate A: fixed artwork proof</h4>
          <p className='text-sm text-gray-700'>Approve buyer name, logo authorization, field labels, country wording, font size, contrast, mark position, ink color, and the reserved area for the ICO number and lot variables.</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Gate B: populated packing proof</h4>
          <p className='text-sm text-gray-700'>Approve the assigned ICO mark, contract code, lot name, process, grade, crop, net mass, sequence logic, and any barcode data against the frozen master-data sheet.</p>
        </div>
      </div>

      <p className='my-4'>
        Put revision control on both proofs. The approval record should show file name, revision, approver, date, and which purchase contract it governs. Avoid approval by scattered chat messages. A single signed PDF or controlled ticket gives the pack team one version to follow and gives both parties evidence if an obsolete proof is used.
      </p>

      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-6 border border-amber-200'>
        <h4 className='font-bold text-lg mb-3'>Suggested contract instruction</h4>
        <p className='text-sm leading-relaxed'>
          “Seller shall mark every bag legibly and indelibly with the approved ICO identification mark, country of origin, net mass, buyer contract code, lot code, origin, process, grade, crop, and bag sequence where specified. Seller shall submit fixed artwork and populated variable-data proofs for written approval before packing and shall provide representative marking photographs before shipment.”
        </p>
      </div>

      <p className='my-4'>
        The <a href='https://greencoffeeassociation.org/wp-content/uploads/2021/09/GCA-Contract-eff-9-27-21.pdf' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline font-semibold'>Green Coffee Association contract terms</a> require country-of-origin branding for the U.S. trade and state that spot contracts must include identifying marks or lot numbers. A custom clause remains valuable because it defines the extra operational fields and the approval evidence the standard trade terms do not specify.
      </p>

      <h3 id='origin-control' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineCheckCircle className='w-8 h-8 text-amber-600' />
        4. How Should an Exporter Control Marks at Packing?
      </h3>
      <p className='my-4'>
        Marking control belongs at the point where an empty bag becomes a packed unit. The operator needs the approved proof and the current lot sheet. A second person should verify the first completed bag before the run continues, then audit the run at defined intervals and after every ink, stencil, label-roll, lot, or shift change.
      </p>
      <p className='my-4'>
        Three origin conditions cause more trouble than the artwork itself. Jute absorbs ink unevenly, a folded sack hides digits, and dust reduces adhesive-label performance. We favor high-contrast marks placed on a flat visible panel, followed by a rub check and a photograph after the filled bag is sewn. A perfect proof on a screen is not evidence of a readable packed bag.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Control point</th>
              <th className='p-3 text-left font-bold'>Acceptance question</th>
              <th className='p-3 text-left font-bold'>Record</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Line clearance</td>
              <td className='p-3'>Were old bags, labels, stencils, and lot sheets removed?</td>
              <td className='p-3'>Signed clearance check</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>First completed bag</td>
              <td className='p-3'>Do content, position, contrast, and code scan match the proof?</td>
              <td className='p-3'>First-piece approval photo</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>In-process audit</td>
              <td className='p-3'>Has legibility or variable data drifted during the run?</td>
              <td className='p-3'>Time, bag sequence, result, initials</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Run close</td>
              <td className='p-3'>Do completed quantity and sequence agree with the packing count?</td>
              <td className='p-3'>Reconciliation and exception log</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        The marking check should share the same frozen lot identity used in the <Link href='/insights/green-coffee-container-loading-checklist' className='text-amber-700 hover:underline font-semibold'>container loading control</Link>. Re-keying the ICO number or lot code into separate spreadsheets creates avoidable transcription risk. One controlled record should feed the bag proof, packing list, loading report, and shipping instruction.
      </p>

      <h3 id='reconcile' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineArchiveBox className='w-8 h-8 text-amber-600' />
        5. Run a Four-Way Reconciliation Before Release
      </h3>
      <p className='my-4'>
        Shipment identity is reliable when four records agree: physical bag, packing list, ICO Certificate of Origin, and transport document. Add the buyer&apos;s purchase order or ERP lot record as the commercial reference. The review should compare exact codes, not merely similar coffee descriptions.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Data element</th>
              <th className='p-3 text-left font-bold'>Bag</th>
              <th className='p-3 text-left font-bold'>Packing list</th>
              <th className='p-3 text-left font-bold'>Origin certificate</th>
              <th className='p-3 text-left font-bold'>Transport record</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>ICO mark</td>
              <td className='p-3'>Exact</td>
              <td className='p-3'>Exact</td>
              <td className='p-3'>Exact</td>
              <td className='p-3'>Expected under ICO rules</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Bag count and net mass</td>
              <td className='p-3'>Counted units and stated mass</td>
              <td className='p-3'>Exact totals</td>
              <td className='p-3'>Shipment net mass</td>
              <td className='p-3'>Shipping quantity or weight</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Origin and coffee type</td>
              <td className='p-3'>Visible text</td>
              <td className='p-3'>Product description</td>
              <td className='p-3'>Producing country and form</td>
              <td className='p-3'>Cargo description</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Buyer lot and contract</td>
              <td className='p-3'>If specified</td>
              <td className='p-3'>Required for allocation</td>
              <td className='p-3'>Not normally required</td>
              <td className='p-3'>Only if included in marks and numbers</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        The ICO rules state that the identification mark should also appear on transport documents unless another arrangement applies. That makes the mark a practical bridge between the cargo and the document set. If multiple parcels share one container, preserve separate lines by mark and quantity. A container total alone cannot show which parcel is short, damaged, or misallocated.
      </p>

      <h3 id='evidence' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineCamera className='w-8 h-8 text-amber-600' />
        6. What Should a Bag-Marking Photo Pack Show?
      </h3>
      <p className='my-4'>
        A useful photo pack proves readability, consistency, and shipment context. One close-up can prove the ink but not the quantity or location. One wide container photo can prove loading but not the digits. Combine overview and detail images under a file-naming rule tied to the lot.
      </p>

      <div className='grid md:grid-cols-2 gap-4 my-6'>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Minimum evidence by lot</h4>
          <ul className='space-y-2 text-sm text-gray-700'>
            <li>Full front panel of the first approved packed bag</li>
            <li>Close-up of the ICO mark and variable fields</li>
            <li>Example from the middle and end of the run</li>
            <li>Stack or pallet view showing lot segregation</li>
            <li>Container-door view before closing</li>
          </ul>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>File and record controls</h4>
          <ul className='space-y-2 text-sm text-gray-700'>
            <li>File name includes date, contract, lot, and bag sequence</li>
            <li>Original-resolution files are retained</li>
            <li>Timestamp and photographer are recorded</li>
            <li>Exceptions are photographed before correction</li>
            <li>Evidence is linked to the final loading report</li>
          </ul>
        </div>
      </div>

      <p className='my-4'>
        Photograph an error before overmarking, relabeling, or replacing the bag. The corrected image proves disposition; the original image explains why the correction record exists. At destination, repeat the same logic before bags are redistributed. The <Link href='/insights/green-coffee-receiving-inspection-checklist' className='text-amber-700 hover:underline font-semibold'>green coffee receiving inspection</Link> provides the wider dock-to-release sequence.
      </p>

      <h3 id='mismatches' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineExclamationTriangle className='w-8 h-8 text-amber-600' />
        7. How Should Buyers Handle Marking Mismatches?
      </h3>
      <p className='my-4'>
        Not every marking error has the same consequence. Classify the discrepancy by whether it threatens statutory identity, lot identity, inventory usability, or appearance only. Keep affected bags identified and on hold until an authorized person records the disposition.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Mismatch class</th>
              <th className='p-3 text-left font-bold'>Example</th>
              <th className='p-3 text-left font-bold'>Immediate action</th>
              <th className='p-3 text-left font-bold'>Release condition</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold text-red-700'>Critical identity</td>
              <td className='p-3'>ICO mark differs from Certificate of Origin</td>
              <td className='p-3'>Stop release and segregate affected parcel</td>
              <td className='p-3'>Exporter and competent document parties resolve the identity</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold text-orange-700'>Major lot control</td>
              <td className='p-3'>Guji natural bags carry the buyer code for a washed Sidama lot</td>
              <td className='p-3'>Quarantine, count scope, sample if identity is uncertain</td>
              <td className='p-3'>Evidence proves contents and records are corrected</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold text-amber-700'>Operational</td>
              <td className='p-3'>Barcode fails but human-readable fields are correct</td>
              <td className='p-3'>Create controlled warehouse labels</td>
              <td className='p-3'>New label maps to the unchanged source identity</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold text-green-700'>Cosmetic</td>
              <td className='p-3'>Logo is slightly off-center with all fields readable</td>
              <td className='p-3'>Record against the approved artwork tolerance</td>
              <td className='p-3'>Commercial acceptance by the named buyer approver</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        Never solve a mismatch by discarding the original identity. If an importer overbags a torn sack or applies a warehouse label, preserve the source ICO mark and lot code in the record. That continuity matters for stock control, recall readiness, and any later <Link href='/insights/green-coffee-quality-claims-guide' className='text-amber-700 hover:underline font-semibold'>green coffee quality claim</Link>.
      </p>
      <p className='my-4'>
        A practical recall system uses more than one identifier. <a href='https://www.wholesaleorigin.com/pages/identification-and-recall-procedures' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline font-semibold'>Published wholesale green-coffee recall procedures</a> map ICO marks to importer purchase references and warehouse cargo numbers. Each code answers a different question: what export parcel is this, which commercial purchase owns it, and where is it stored?
      </p>

      <h3 id='case-study' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineDocumentCheck className='w-8 h-8 text-amber-600' />
        8. Case Study: Three Ethiopian Lots in One Roaster Program
      </h3>
      <p className='my-4'>
        Consider a Canadian specialty roaster receiving three Ethiopian parcels for distinct products: a Guji natural seasonal release, a washed Yirgacheffe core coffee, and a Sidama component for espresso. The sacks use one approved brand layout, but each lot has a different ICO parcel number, buyer lot code, process, grade, and bag-sequence range.
      </p>
      <p className='my-4'>
        The exporter freezes one master-data row per lot and produces three populated proofs. At packing, the first bag of each run receives second-person approval. Run photos capture the first, middle, and final sequences. The packing list keeps separate lines by ICO mark, buyer lot, count, and net mass. Loading photos show each group&apos;s position in the container.
      </p>
      <p className='my-4'>
        At receipt, the roaster scans bag IDs into three quarantine locations. One Yirgacheffe sack has an unreadable barcode, but its ICO mark and printed lot fields match. The warehouse applies a controlled internal label without changing the source identity and releases it with the lot after normal inspection. If the ICO mark had named the Guji parcel instead, the bag would remain isolated pending content verification and exporter review.
      </p>
      <p className='my-4'>
        The commercial gain is not a decorative sack. It is faster receiving, clean allocation, and narrow exception handling. One damaged code affects one documented bag instead of casting doubt over three saleable lots.
      </p>

      <h3 className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineCheckCircle className='w-8 h-8 text-amber-600' />
        Make Green Coffee Bag Markings a Release Control
      </h3>
      <p className='my-4'>
        Green coffee bag markings work when every actor can reach the same conclusion from the sack and its records. Keep the ICO mark exact, separate legal identity from buyer data, approve variable fields before packing, capture evidence during the run, and reconcile bags against documents before shipment and release.
      </p>
      <p className='my-4'>
        For Ethiopian lots, the first group <strong>010</strong> starts the chain. The exporter code and parcel serial continue it. Buyer contract, origin, process, grade, crop, and bag sequence make the chain usable inside a roasting business. That disciplined identity system turns a printed sack into reliable commercial evidence.
      </p>

      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Specify Ethiopian Coffee Lots Before Packing Starts</h4>
        <p className='my-2'>
          Request current offerings, samples, and a documented marking plan for the lots you select. Our Addis Ababa export team can align parcel identity, buyer fields, packaging, and shipment evidence before the first bag is filled.
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
            <h4 className='font-bold text-gray-800 mb-2'>What do the numbers on a green coffee bag mean?</h4>
            <p className='text-sm text-gray-600'>The standard ICO identification mark has three parts: producing-country code, assigned exporter or grower code, and export-parcel serial number. On Ethiopian coffee, the first group is 010. Extra printed fields such as region, process, grade, crop, buyer lot, or bag number are operational descriptions, not parts of the ICO mark.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>What is Ethiopia&apos;s ICO coffee country code?</h4>
            <p className='text-sm text-gray-600'>Ethiopia&apos;s ICO producing-country code is 010. The International Coffee Organization lists it in the country-code annex to its Rules on Statistics. A complete Ethiopian parcel mark adds the assigned exporter or grower code and the parcel serial, using the format 010/####/####. The country code alone does not identify a specific seller or shipment.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Must every green coffee bag carry the same ICO mark?</h4>
            <p className='text-sm text-gray-600'>Every bag within one export parcel should carry that parcel&apos;s ICO identification mark, and the same mark should appear on its Certificate of Origin. A container may carry multiple parcels, but the packing list should preserve separate lines by mark, count, and weight so each physical group remains identifiable.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Should a buyer put a QR code on green coffee bags?</h4>
            <p className='text-sm text-gray-600'>A QR code is useful when the buyer or warehouse has a maintained scanning system and a stable lot database. Keep the core identity in human-readable text as well. Encode a durable record key rather than sensitive data, and test the finished code on filled jute bags before approving the production run.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>What should happen if bag marks do not match shipping documents?</h4>
            <p className='text-sm text-gray-600'>Place the affected bags or parcel on hold, preserve photographs and original markings, and identify the exact field and scope of the mismatch. An ICO-mark conflict needs formal exporter and document review. A correct human-readable identity with a failed barcode may be resolved through a controlled internal label and documented approval.</p>
          </div>
        </div>
      </section>

      <div className='my-10 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4'>Related Articles</h3>
        <div className='grid md:grid-cols-2 gap-4'>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Packaging and Loading</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/green-coffee-packaging-bag-types-guide' className='text-amber-700 hover:underline'>Green Coffee Packaging: Bag Types</Link></li>
              <li>&bull; <Link href='/insights/green-coffee-container-loading-checklist' className='text-amber-700 hover:underline'>Green Coffee Container Loading Checklist</Link></li>
              <li>&bull; <Link href='/insights/specialty-coffee-storage-freight-logistics' className='text-amber-700 hover:underline'>Specialty Coffee Storage in Sea Freight</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Documents and Contracts</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/green-coffee-shipping-documents-checklist' className='text-amber-700 hover:underline'>Green Coffee Shipping Documents</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-contracts-payment-terms-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Contracts and Payment Terms</Link></li>
              <li>&bull; <Link href='/insights/green-coffee-specification-sheet-template' className='text-amber-700 hover:underline'>Green Coffee Specification Sheet</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Traceability and Receiving</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/ethiopian-coffee-traceability-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Traceability</Link></li>
              <li>&bull; <Link href='/insights/green-coffee-receiving-inspection-checklist' className='text-amber-700 hover:underline'>Green Coffee Receiving Inspection</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Quality and Claims</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/green-coffee-sampling-protocol' className='text-amber-700 hover:underline'>Green Coffee Sampling Protocol</Link></li>
              <li>&bull; <Link href='/insights/green-coffee-quality-claims-guide' className='text-amber-700 hover:underline'>Green Coffee Quality Claims Guide</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> Published {date} by Ethio Coffee Import and Export PLC, an origin-connected Ethiopian coffee exporter. Requirements and buyer specifications vary by contract and destination; confirm the rules that apply to the shipment before packing.
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
