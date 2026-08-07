import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import {
  HiOutlineArchiveBox,
  HiOutlineBeaker,
  HiOutlineClipboardDocumentCheck,
  HiOutlineClipboardDocumentList,
  HiOutlineDocumentText,
  HiOutlineExclamationTriangle,
  HiOutlineLightBulb,
  HiOutlineScale,
  HiOutlineTruck,
  HiOutlineUserGroup,
} from 'react-icons/hi2'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function GreenCoffeeReceivingInspectionChecklist({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        A Green Coffee Receiving Inspection SOP for Container, Bag, Sample, Quality, and Inventory Release
      </h2>

      <figure>
        <figcaption className='font-inconsolata my-2'>{title}</figcaption>
        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Stacked green coffee sacks awaiting receiving inspection in a commercial warehouse'
            fill
            objectFit='cover'
            className='w-full h-full'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>
        <p className='text-xs text-gray-500 mt-2'>Photo: Cihan Yüce, Pexels.</p>
      </figure>

      <div className='my-4 text-sm bg-amber-50 p-4 rounded-lg border border-amber-200'>
        <span className='font-semibold'>Category:</span>
        <span className='ml-2'>Warehouse Operations / Receiving Inspection / Green Coffee Quality Control / Roaster Resources</span>
      </div>

      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-8 border border-amber-200'>
        <h3 className='font-bold text-xl mb-3 flex items-center gap-2'>
          <HiOutlineLightBulb className='text-amber-400 flex-shrink-0' />Key Takeaway
        </h3>
        <p className='text-sm leading-relaxed'>
          A green coffee receiving inspection should keep every new lot on hold until five controls agree: the container and seal match the shipping record, the bag count and markings match the delivery documents, no water or contamination is visible, a representative arrival sample passes physical and sensory checks, and the accepted quantity is reconciled into inventory. Photograph the unopened unit, record exceptions before unloading changes the evidence, and separate damaged bags from sound stock. Give one person authority to release the lot. This turns warehouse receiving from a delivery task into a controlled quality gate.
        </p>
      </div>

      <div className='my-8 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <HiOutlineClipboardDocumentList className='text-amber-600' /> In This Guide
        </h3>
        <ol className='space-y-2 text-sm'>
          <li><a href='#receiving-gate' className='text-amber-700 hover:underline'>1. Make Receiving a Quality Gate</a></li>
          <li><a href='#before-arrival' className='text-amber-700 hover:underline'>2. Prepare Before the Truck Arrives</a></li>
          <li><a href='#container-check' className='text-amber-700 hover:underline'>3. Inspect the Container and Seal</a></li>
          <li><a href='#unloading' className='text-amber-700 hover:underline'>4. Control the Unload and Bag Count</a></li>
          <li><a href='#arrival-sample' className='text-amber-700 hover:underline'>5. Pull a Representative Arrival Sample</a></li>
          <li><a href='#hold-release' className='text-amber-700 hover:underline'>6. Run the Hold-and-Release Tests</a></li>
          <li><a href='#reconciliation' className='text-amber-700 hover:underline'>7. Reconcile Documents and Inventory</a></li>
          <li><a href='#exceptions' className='text-amber-700 hover:underline'>8. Classify and Escalate Exceptions</a></li>
          <li><a href='#sop' className='text-amber-700 hover:underline'>9. Build the Receiving SOP</a></li>
          <li><a href='#worked-example' className='text-amber-700 hover:underline'>10. Worked Ethiopian Coffee Receipt</a></li>
          <li><a href='#faq' className='text-amber-700 hover:underline'>11. Frequently Asked Questions</a></li>
        </ol>
      </div>

      <p className='text-lg leading-relaxed my-4'>
        Green coffee receiving inspection is the last point where an importer or roaster can preserve clean evidence before a shipment becomes ordinary warehouse stock. A seal discrepancy, wet floor, torn liner, mixed lot code, or unexpected cup result is far easier to resolve while the delivery is still identified, photographed, sampled, and held. Once bags are moved across locations or released to production, cause and responsibility become harder to prove.
      </p>
      <p className='my-4'>
        Most published guidance explains green grading or arrival cupping. Warehouse teams need a wider operating procedure. The inspection must connect transport condition, quantity, traceability, physical quality, sensory approval, and inventory status without making the driver wait for a full cupping session. The system below separates the fast dock checks from the controlled lab release and assigns a decision owner to each stage.
      </p>

      <h3 id='receiving-gate' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineClipboardDocumentCheck className='w-8 h-8 text-amber-600' />
        1. Make Green Coffee Receiving Inspection a Quality Gate
      </h3>
      <p className='my-4'>
        Receiving has two outputs, not one. The warehouse confirms what physically arrived, while quality control decides whether the coffee can become usable inventory. Treating both outputs as a single &quot;received&quot; status creates a dangerous gap. A lot can be present in the building but still be blocked by sampling, moisture review, sensory evaluation, or a commercial exception.
      </p>

      <div className='grid md:grid-cols-2 gap-4 my-6'>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Physical Receipt</h4>
          <p className='text-sm text-gray-700'>The warehouse records the unit, seal, arrival time, bag quantity, markings, visible condition, damage, pallet location, and the samples drawn.</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Quality Release</h4>
          <p className='text-sm text-gray-700'>An authorized buyer or QC lead reviews the sample results and exceptions, then changes the lot from hold to released, conditionally released, or rejected.</p>
        </div>
      </div>

      <p className='my-4'>
        Use status names that cannot be mistaken for each other. &quot;Arrived, QC hold&quot; is clearer than &quot;in stock.&quot; Production planning should count only released kilograms. The distinction also supports the <Link href='/insights/green-coffee-inventory-management-roasters' className='text-amber-700 hover:underline font-bold'>green coffee inventory management system</Link>, because blocked stock cannot protect a roasting commitment.
      </p>

      <h3 id='before-arrival' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineDocumentText className='w-8 h-8 text-amber-600' />
        2. Prepare Before the Truck Arrives
      </h3>
      <p className='my-4'>
        A receiving inspection starts with an expected-receipt record. Create it when the delivery appointment is booked, not while the container is at the dock. The record gives the receiver a reference against which every observed fact can be checked.
      </p>

      <div className='bg-blue-50 border border-blue-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3'>Expected-Receipt Record</h4>
        <ul className='space-y-2 text-sm text-gray-700'>
          <li><strong>Commercial identity:</strong> supplier, purchase contract, invoice, coffee name, origin, process, crop, grade, and buyer lot code.</li>
          <li><strong>Transport identity:</strong> container or trailer number, seal number, carrier, booking reference, and scheduled arrival window.</li>
          <li><strong>Quantity:</strong> expected bag count, nominal bag weight, total net weight, packaging type, liner type, and pallet plan if applicable.</li>
          <li><strong>Quality reference:</strong> approved pre-shipment sample ID, contracted physical specifications, cupping target, and retained-sample location.</li>
          <li><strong>Decision rules:</strong> people authorized to accept the delivery, place it on hold, notify the supplier, and release it to production.</li>
        </ul>
      </div>

      <p className='my-4'>
        Reserve a clean hold location before unloading. Prepare numbered quarantine labels, a camera, a receiving form, a calibrated scale, sample containers, and the correct sampling tool. ISO 6666 specifies triers for sampling green or parchment coffee through the sides of closed bags and notes that those tools are not suitable for bulk liners or large bags. Match the tool to the packaging rather than improvising with a device that damages the barrier.
      </p>
      <p className='my-4'>
        Request the exporter&apos;s signed <Link href='/insights/green-coffee-container-loading-checklist' className='text-amber-700 hover:underline font-bold'>green coffee container loading report</Link> before arrival. Its empty-unit photographs, bag map, moisture controls, VGM record, and seal image give the receiving team a clean origin reference for the checks that follow.
      </p>

      <h3 id='container-check' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineTruck className='w-8 h-8 text-amber-600' />
        3. Inspect the Container and Seal Before Opening
      </h3>
      <p className='my-4'>
        Stop the receiving sequence if the transport identity is wrong. Confirm the container or trailer number and read the seal number character by character against the bill of lading or delivery record. Photograph the closed doors with both identifiers visible. A broken, missing, substituted, or unreadable seal does not automatically prove loss, but it requires a documented exception before the doors move.
      </p>
      <p className='my-4'>
        Walk around the unit where site rules allow. Record holes, deep impact damage, open roof seams, wet patches, strong odors, pest activity, or evidence of unauthorized entry. The IMO, ILO, and UNECE <a href='https://unece.org/transport/intermodal-transport/imoilounece-code-practice-packing-cargo-transport-units-ctu-code' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline font-bold'>Code of Practice for Packing of Cargo Transport Units</a> covers both packers and receivers and treats condensation, contamination, and unit condition as risks across the intermodal chain.
      </p>

      <div className='border-l-4 border-red-500 pl-6 bg-red-50 p-4 my-6'>
        <p className='text-sm text-gray-700'>
          <strong>Safety rule:</strong> do not enter or lean into a newly opened freight container until the facility&apos;s ventilation and safety procedure says it is safe. Fumigants, depleted oxygen, shifting bags, and unstable stacks can create hazards that a quality checklist does not control.
        </p>
      </div>

      <p className='my-4'>
        Open the doors slowly and photograph the first view before touching dunnage or bags. Look for cargo shift, collapsed stacks, loose desiccant, ceiling condensation, wet flooring, stained bag faces, torn liners, foreign odor, and live insects. Record the location of any issue as front, middle, rear, door side, wall side, top, or floor level. Location helps distinguish a localized leak from a lot-wide problem.
      </p>

      <h3 id='unloading' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineArchiveBox className='w-8 h-8 text-amber-600' />
        4. Control the Unload and Bag Count
      </h3>
      <p className='my-4'>
        Count bags as they cross one defined point. Do not reconstruct quantity from a final stack if individual bags can be counted during movement. Reconcile by lot code when a delivery contains more than one coffee. A correct total can still hide a substitution if two lot quantities offset each other.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Check</th>
              <th className='p-3 text-left font-bold'>Record</th>
              <th className='p-3 text-left font-bold'>Exception Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Bag count</td>
              <td className='p-3'>Expected and received by lot</td>
              <td className='p-3'>Recount before the carrier leaves; note shortage or overage</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Bag markings</td>
              <td className='p-3'>Lot, origin, grade, crop, exporter, and bag sequence where used</td>
              <td className='p-3'>Segregate any mixed, missing, or conflicting identity</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Packaging</td>
              <td className='p-3'>Jute condition, liner integrity, stitching, stains, holes, and repairs</td>
              <td className='p-3'>Isolate damaged bags and photograph all sides</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Weight</td>
              <td className='p-3'>Gross or net checks under the agreed receiving plan</td>
              <td className='p-3'>Hold unexplained variance for scale and document review</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Location</td>
              <td className='p-3'>Quarantine zone, pallet, row, or bay</td>
              <td className='p-3'>Prevent unapproved movement or production issue</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        Tag damaged bags at the dock and move them to a separate controlled area. Never hide a wet or torn bag inside a sound pallet. If coffee must be overbagged to prevent further loss, preserve the original packaging, photograph the condition first, and keep the new package tied to the same lot and exception number.
      </p>

      <h3 id='arrival-sample' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineScale className='w-8 h-8 text-amber-600' />
        5. Pull a Representative Arrival Sample
      </h3>
      <p className='my-4'>
        Sampling should represent the whole lot, not the easiest bags near the door. Use the sampling plan named in the contract, governing standard, warehouse agreement, or buyer SOP. Spread increments across positions and depths, record which bags or sections were sampled, combine them into a well-mixed composite where the plan calls for one, and preserve enough material for working, supplier, and reserve splits. The step-by-step <Link href='/insights/green-coffee-sampling-protocol' className='text-amber-700 hover:underline font-bold'>green coffee sampling protocol for buyers</Link> covers lot mapping, increments, sample division, seals, and custody records.
      </p>
      <p className='my-4'>
        The sample&apos;s chain of custody matters as much as its size. Label every split with the contract, lot, receipt date, container, sampler, seal status, and split purpose. Close the containers immediately. The <a href='https://www.iso.org/standard/44606.html' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline font-bold'>ISO 6666 green coffee trier standard</a> links bag sampling tools to ISO 4072 sampling practice, giving procurement teams a defensible basis for specifying equipment.
      </p>

      <div className='bg-green-50 border border-green-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3'>Minimum Sample Record</h4>
        <p className='text-sm text-gray-700'>
          Contract and lot ID + container and seal + receipt date and time + sampling method + positions sampled + composite weight + split weights + sampler + storage location + QC request number.
        </p>
      </div>

      <p className='my-4'>
        Keep visibly wet, mold-suspect, odor-affected, or infested material separate from the routine composite. Blending a localized damage sample into the general arrival sample can dilute the evidence and expose the lab. Submit a clearly labeled exception sample alongside the representative lot sample.
      </p>

      <h3 id='hold-release' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineBeaker className='w-8 h-8 text-amber-600' />
        6. Run the Hold-and-Release Tests
      </h3>
      <p className='my-4'>
        The receiving dock should perform only fast condition controls. The <Link href='/insights/green-coffee-quality-control-lab-setup-guide' className='text-amber-700 hover:underline font-bold'>green coffee quality control lab</Link> completes the analytical release. Use the approved pre-shipment sample and contract as references, not memory or a generic grade description.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Control</th>
              <th className='p-3 text-left font-bold'>Question</th>
              <th className='p-3 text-left font-bold'>Evidence</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Odor and appearance</td>
              <td className='p-3'>Is there mold, chemical, smoke, fermentation, or foreign contamination?</td>
              <td className='p-3'>Photos, odor note, segregated exception sample</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Moisture and water activity</td>
              <td className='p-3'>Did the coffee remain within contract and stability limits?</td>
              <td className='p-3'>Calibrated readings, sample temperature, instrument ID</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Physical grade</td>
              <td className='p-3'>Do screen, defects, foreign matter, and preparation match the specification?</td>
              <td className='p-3'>Grading sheet, defect photo, retained portion</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Sensory review</td>
              <td className='p-3'>Does arrival performance remain within the agreed profile and tolerance?</td>
              <td className='p-3'>Side-by-side roast and cupping record against retained PSS</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Food-safety escalation</td>
              <td className='p-3'>Does observed risk require an accredited external laboratory?</td>
              <td className='p-3'>Sealed lab split, chain of custody, test request</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        FDA&apos;s <a href='https://www.fda.gov/food/laboratory-methods-food/mpm-v-1-beverages-and-beverage-materials' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline font-bold'>macroanalytical method for green coffee</a> identifies insect damage, mold, foreign matter, and water-damage-related fungal deterioration as inspection concerns. Its regulatory thresholds are specific to the United States, but the observation categories are useful for any receiving SOP. Buyers should apply the law and contract governing their own destination.
      </p>
      <p className='my-4'>
        Set a release deadline that matches production risk without forcing a premature decision. A routine lot might clear after the standard physical and sensory cycle. A wet, infested, mismarked, or materially different lot stays blocked while the buyer initiates the <Link href='/insights/green-coffee-quality-claims-guide' className='text-amber-700 hover:underline font-bold'>green coffee quality claims workflow</Link>.
      </p>

      <h3 id='reconciliation' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineClipboardDocumentCheck className='w-8 h-8 text-amber-600' />
        7. Reconcile Documents and Inventory
      </h3>
      <p className='my-4'>
        Reconcile the physical receipt against the purchase order, commercial invoice, packing list, transport document, certificate references, and warehouse intake record. The <Link href='/insights/green-coffee-shipping-documents-checklist' className='text-amber-700 hover:underline font-bold'>green coffee shipping documents checklist</Link> explains what each trade document proves. Receiving should confirm that the documents and cargo refer to the same lot, not re-audit the entire export file.
      </p>
      <p className='my-4'>
        Post three quantities separately: expected, physically received, and quality released. If 320 bags arrive but two damaged bags remain isolated, the inventory record should show 320 received and only the accepted quantity available for production. Preserve the exception quantity under the same parent lot so traceability is not broken by the hold.
      </p>

      <h3 id='exceptions' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineExclamationTriangle className='w-8 h-8 text-amber-600' />
        8. Classify and Escalate Exceptions
      </h3>
      <p className='my-4'>
        Not every discrepancy needs the same response. A severity matrix prevents both quiet acceptance of serious problems and unnecessary escalation of correctable paperwork.
      </p>

      <div className='grid md:grid-cols-3 gap-4 my-6'>
        <div className='border border-green-200 rounded-lg p-5 bg-green-50'>
          <h4 className='font-bold mb-2 text-green-900'>Level 1: Record</h4>
          <p className='text-sm text-gray-700'>Minor marking variation, clean cosmetic scuff, or appointment delay with no cargo impact. Correct the record and release through the normal QC path.</p>
        </div>
        <div className='border border-amber-200 rounded-lg p-5 bg-amber-50'>
          <h4 className='font-bold mb-2 text-amber-900'>Level 2: Hold</h4>
          <p className='text-sm text-gray-700'>Count variance, isolated torn bags, uncertain seal history, modest moisture difference, or mixed labels. Segregate, investigate, and require buyer approval.</p>
        </div>
        <div className='border border-red-200 rounded-lg p-5 bg-red-50'>
          <h4 className='font-bold mb-2 text-red-900'>Level 3: Stop</h4>
          <p className='text-sm text-gray-700'>Live infestation, widespread wetting, mold, chemical odor, major identity conflict, unsafe container, or material sensory failure. Block movement and notify stakeholders immediately.</p>
        </div>
      </div>

      <p className='my-4'>
        Send a provisional notice while facts are still being developed if the contract clock may be running. State what was observed, which quantity is affected, where the cargo is held, which samples were preserved, and when test results will follow. Avoid assigning cause before the evidence supports it.
      </p>

      <h3 id='sop' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineUserGroup className='w-8 h-8 text-amber-600' />
        9. Build the Receiving SOP Around Roles and Records
      </h3>
      <p className='my-4'>
        A useful SOP fits the actual receiving shift. Put the dock sequence on one page, keep analytical methods in the lab manual, and make exception contacts visible. Train backups because arrivals do not always match the buyer&apos;s schedule.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Role</th>
              <th className='p-3 text-left font-bold'>Owns</th>
              <th className='p-3 text-left font-bold'>Cannot Do Alone</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Receiver</td>
              <td className='p-3'>Identity, seal, photos, count, condition, location, sample handoff</td>
              <td className='p-3'>Release a lot with an unresolved exception</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>QC lead</td>
              <td className='p-3'>Physical tests, sample roast, cupping, retained samples, result record</td>
              <td className='p-3'>Change commercial terms or dispose of evidence</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Green buyer</td>
              <td className='p-3'>Contract comparison, supplier notice, release or claim decision</td>
              <td className='p-3'>Alter the receiver&apos;s original observations</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Inventory controller</td>
              <td className='p-3'>Expected, received, held, released, and adjusted quantities</td>
              <td className='p-3'>Convert held coffee to available stock without authorization</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        Review the SOP after the first three receipts, then quarterly or after any material exception. Track seal discrepancies, damaged bags, quantity variance, QC turnaround, release time, and repeated supplier or route issues. Trends should feed back into packaging specifications, carrier instructions, contracts, and supplier reviews.
      </p>

      <h3 id='worked-example' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineTruck className='w-8 h-8 text-amber-600' />
        10. Worked Example: Receiving an Ethiopian Coffee Container
      </h3>
      <p className='my-4'>
        A roaster expects one washed Ethiopian lot in 320 lined jute bags. The receiver verifies the container and seal, photographs the closed doors, and records no external damage. On opening, the stack is stable, but two bags near the left door show damp jute. The team photographs their original position, tags both bags, and moves them into the exception zone while counting every bag by lot code.
      </p>
      <p className='my-4'>
        The full count matches. A representative composite is drawn under the company sampling plan, while a separate sample comes from each damp bag. Routine arrival moisture, physical grade, and side-by-side cupping against the retained pre-shipment sample pass. The damp-bag samples show elevated readings and a papery odor. The green buyer releases the sound quantity, keeps the affected coffee blocked, sends documented notice to the exporter and insurer, and preserves the packaging and sealed samples.
      </p>
      <p className='my-4'>
        This outcome is better than either extreme. Rejecting the entire container would ignore evidence that the issue is localized. Releasing all 320 bags would erase the distinction and expose production. The receiving record supports a narrow commercial discussion while usable coffee moves into the roast plan.
      </p>

      <h3 id='faq' className='text-2xl font-extrabold mt-12 mb-4'>
        Frequently Asked Questions
      </h3>
      <div className='space-y-4 my-6'>
        <div className='border border-gray-200 rounded-lg p-5'>
          <h4 className='font-bold text-gray-800 mb-2'>What should be checked when green coffee arrives?</h4>
          <p className='text-sm text-gray-600'>Check the container and seal, first-open condition, bag count, markings, packaging, visible water or contamination, lot identity, and the sample chain of custody. Keep the lot on QC hold until moisture, physical grade, and sensory results are reviewed against the contract and retained pre-shipment sample.</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5'>
          <h4 className='font-bold text-gray-800 mb-2'>Should green coffee be released before arrival cupping?</h4>
          <p className='text-sm text-gray-600'>Production release should wait for the buyer&apos;s defined arrival controls. Physical receipt can be posted immediately, but available inventory should exclude the lot until the authorized QC reviewer approves it. A documented emergency release needs named authority, limited quantity, and preserved samples so the remaining lot stays protected.</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5'>
          <h4 className='font-bold text-gray-800 mb-2'>How much green coffee should be sampled at receiving?</h4>
          <p className='text-sm text-gray-600'>Use the contract, applicable standard, warehouse agreement, or written buyer sampling plan. The plan should distribute increments across the lot and produce enough material for physical grading, roasting, cupping, supplier review, and a sealed reserve. Do not substitute a convenient door sample for a representative lot sample.</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5'>
          <h4 className='font-bold text-gray-800 mb-2'>What happens if the container seal does not match?</h4>
          <p className='text-sm text-gray-600'>Pause opening when safe to do so, verify the number again, photograph the seal and doors, and notify the receiving manager, carrier, and buyer under the company escalation rule. Record who authorized opening. A mismatch requires investigation, but the condition and quantity evidence still need to be preserved.</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5'>
          <h4 className='font-bold text-gray-800 mb-2'>How long should receiving records and samples be retained?</h4>
          <p className='text-sm text-gray-600'>Keep them through the applicable claim period and, for retained quality samples, until the lot is consumed or the company&apos;s longer retention rule expires. The correct period depends on the contract, law, insurer, and customer requirements. Link photographs, test results, notices, and sample IDs to one receipt record.</p>
        </div>
      </div>

      <p className='my-4'>
        A green coffee receiving inspection succeeds when the warehouse can answer five questions without reconstructing the day: what arrived, was the transport unit sound, did quantity and identity match, did the coffee pass the agreed quality controls, and who released it. Build those answers into the normal flow and exceptions become visible before they reach the roaster.
      </p>
      <p className='my-4'>
        For Ethiopian coffee, disciplined receiving completes the control chain that begins with origin sampling and pre-shipment approval. Ethio Coffee Import and Export PLC supports that chain with final lot records, retained reference samples, clear bag markings, and exporter communication tied to the shipped coffee.
      </p>

      <div className='bg-amber-100 border border-amber-300 rounded-xl p-8 my-10'>
        <h3 className='text-2xl font-extrabold mb-3'>Receive Ethiopian Coffee with Clear Lot Evidence</h3>
        <p className='text-gray-700 mb-6'>
          Review current offerings, request representative samples, and receive traceable shipment records from an origin-connected exporter with three decades of Ethiopian sourcing heritage.
        </p>
        <div className='flex flex-wrap gap-3'>
          <Link href='/offerings' className='bg-dark text-primary px-6 py-3 rounded font-bold hover:bg-gray-800 transition'>
            View Offerings
          </Link>
          <Link href='/contact-us' className='bg-amber-600 text-white px-6 py-3 rounded font-bold hover:bg-amber-700 transition'>
            Request Samples
          </Link>
          <Link href='/ordering-info' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>
            How to Order
          </Link>
        </div>
      </div>

      <div className='my-10 border-t border-gray-200 pt-8'>
        <h3 className='text-2xl font-extrabold mb-6'>Related Articles</h3>
        <div className='grid md:grid-cols-2 gap-8'>
          <div>
            <h4 className='font-bold text-lg mb-3 text-amber-800'>Quality Control</h4>
            <ul className='space-y-2 list-disc pl-5'>
              <li><Link href='/insights/green-coffee-quality-control-lab-setup-guide' className='text-amber-700 hover:underline'>Green Coffee Quality Control Lab Setup</Link></li>
              <li><Link href='/insights/green-coffee-quality-control-defects-grading' className='text-amber-700 hover:underline'>Green Coffee Defects and Grading</Link></li>
              <li><Link href='/insights/green-coffee-moisture-content-water-activity-guide' className='text-amber-700 hover:underline'>Moisture Content and Water Activity</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-bold text-lg mb-3 text-amber-800'>Samples and Claims</h4>
            <ul className='space-y-2 list-disc pl-5'>
              <li><Link href='/insights/ethiopian-coffee-sample-approval-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Sample Approval</Link></li>
              <li><Link href='/insights/how-to-cup-evaluate-ethiopian-coffee-samples' className='text-amber-700 hover:underline'>How to Cup Ethiopian Coffee Samples</Link></li>
              <li><Link href='/insights/green-coffee-quality-claims-guide' className='text-amber-700 hover:underline'>Green Coffee Quality Claims</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-bold text-lg mb-3 text-amber-800'>Warehouse and Inventory</h4>
            <ul className='space-y-2 list-disc pl-5'>
              <li><Link href='/insights/green-coffee-inventory-management-roasters' className='text-amber-700 hover:underline'>Green Coffee Inventory Management</Link></li>
              <li><Link href='/insights/green-coffee-shelf-life-storage-guide' className='text-amber-700 hover:underline'>Green Coffee Shelf Life and Storage</Link></li>
              <li><Link href='/insights/green-coffee-packaging-bag-types-guide' className='text-amber-700 hover:underline'>Green Coffee Packaging and Bag Types</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-bold text-lg mb-3 text-amber-800'>Shipping and Procurement</h4>
            <ul className='space-y-2 list-disc pl-5'>
              <li><Link href='/insights/green-coffee-shipping-documents-checklist' className='text-amber-700 hover:underline'>Green Coffee Shipping Documents</Link></li>
              <li><Link href='/insights/green-coffee-cargo-insurance-guide' className='text-amber-700 hover:underline'>Green Coffee Cargo Insurance</Link></li>
              <li><Link href='/insights/green-coffee-supplier-evaluation-checklist' className='text-amber-700 hover:underline'>Green Coffee Supplier Evaluation</Link></li>
            </ul>
          </div>
        </div>

        <div className='mt-8 pt-6 border-t border-gray-200 text-sm text-gray-600'>
          <Link href='/insights' className='underline'>All Insights</Link> &middot;{' '}
          <Link href='/buy-ethiopian-coffee-wholesale' className='underline'>Export Services</Link> &middot;{' '}
          <Link href='/about' className='underline'>About</Link> &middot;{' '}
          <Link href='/contact-us' className='underline'>Contact</Link>
        </div>

        <div className='mt-6 bg-gray-50 border border-gray-200 rounded-lg p-5 text-sm text-gray-600'>
          <span className='font-bold'>About This Insight:</span> This green coffee receiving inspection checklist was prepared by Ethio Coffee Import and Export PLC on {date} for importers, roasters, warehouse teams, and green buyers. Sampling rules, food-safety requirements, claim deadlines, and release authority vary by contract and destination. Contact us for current lot records and shipment-specific support.
        </div>
      </div>
    </>
  )
}
