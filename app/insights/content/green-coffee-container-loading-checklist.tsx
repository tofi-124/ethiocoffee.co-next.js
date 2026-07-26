import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import {
  HiOutlineArchiveBox,
  HiOutlineCamera,
  HiOutlineCheckCircle,
  HiOutlineClipboardDocumentCheck,
  HiOutlineClipboardDocumentList,
  HiOutlineDocumentText,
  HiOutlineExclamationTriangle,
  HiOutlineLightBulb,
  HiOutlineLockClosed,
  HiOutlineScale,
  HiOutlineShieldCheck,
  HiOutlineTruck,
} from 'react-icons/hi2'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function GreenCoffeeContainerLoadingChecklist({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        A Green Coffee Container Loading Checklist for Inspection, Moisture Control, VGM, Sealing, and Release
      </h2>

      <figure>
        <figcaption className='font-inconsolata my-2'>{title}</figcaption>
        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Ethiopian Yirgacheffe green coffee sacks staged for container loading'
            fill
            objectFit='cover'
            className='w-full h-full'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>
        <p className='text-xs text-gray-500 mt-2'>Photo: Christian Dala, Pexels.</p>
      </figure>

      <div className='my-4 text-sm bg-amber-50 p-4 rounded-lg border border-amber-200'>
        <span className='font-semibold'>Category:</span>
        <span className='ml-2'>Export Operations / Container Loading / Green Coffee Logistics / Quality Assurance</span>
      </div>

      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-8 border border-amber-200'>
        <h3 className='font-bold text-xl mb-3 flex items-center gap-2'>
          <HiOutlineLightBulb className='text-amber-400 flex-shrink-0' />Key Takeaway
        </h3>
        <p className='text-sm leading-relaxed'>
          A green coffee container loading checklist should create one auditable release record. Before loading, match the booking, coffee lots, bag count, packaging, net mass, buyer instructions, and approved samples. Reject any container that is wet, tainted, contaminated, structurally unsound, or inconsistent with the booking. During loading, count by position, protect the coffee from moisture, distribute weight, photograph defined milestones, and record every deviation. After loading, reconcile the packing list and verified gross mass, apply and photograph the seal, then release the unit only when one authorized person signs the completed record.
        </p>
      </div>

      <div className='my-8 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <HiOutlineClipboardDocumentList className='text-amber-600' /> In This Guide
        </h3>
        <ol className='space-y-2 text-sm'>
          <li><a href='#release-gate' className='text-amber-700 hover:underline'>1. Treat Loading as a Release Gate</a></li>
          <li><a href='#load-plan' className='text-amber-700 hover:underline'>2. Freeze the Load Plan</a></li>
          <li><a href='#stage-coffee' className='text-amber-700 hover:underline'>3. Stage and Reconcile the Coffee</a></li>
          <li><a href='#inspect-container' className='text-amber-700 hover:underline'>4. Inspect the Empty Container</a></li>
          <li><a href='#moisture-control' className='text-amber-700 hover:underline'>5. Prepare Moisture Controls</a></li>
          <li><a href='#load-secure' className='text-amber-700 hover:underline'>6. Load, Count, and Secure the Bags</a></li>
          <li><a href='#vgm-documents' className='text-amber-700 hover:underline'>7. Reconcile VGM and Documents</a></li>
          <li><a href='#seal-release' className='text-amber-700 hover:underline'>8. Seal and Release the Container</a></li>
          <li><a href='#photo-report' className='text-amber-700 hover:underline'>9. Build the Buyer Photo Report</a></li>
          <li><a href='#stop-rules' className='text-amber-700 hover:underline'>10. Apply Stop, Rework, and Release Rules</a></li>
          <li><a href='#worked-example' className='text-amber-700 hover:underline'>11. Worked Ethiopian Coffee Load</a></li>
          <li><a href='#faq' className='text-amber-700 hover:underline'>12. Frequently Asked Questions</a></li>
        </ol>
      </div>

      <p className='text-lg leading-relaxed my-4'>
        Green coffee can pass milling, grading, sample approval, and bagging, then lose value during one poorly controlled loading shift. A damp floor, residual odor, torn hermetic liner, mixed bag mark, missing seal photograph, or incorrect weight declaration may not become visible until destination. By then, the buyer and exporter are trying to reconstruct facts from separate emails and incomplete photographs.
      </p>
      <p className='my-4'>
        This green coffee container loading checklist closes that gap. It connects the physical load to the contract, packing list, approved lot, moisture plan, verified gross mass, and container seal. It is written for bagged green coffee moving as a full-container shipment. Carrier rules, national law, terminal procedures, insurance terms, and the sales contract remain controlling, so the checklist should sit inside the exporter&apos;s documented shipping procedure rather than replace it.
      </p>

      <h3 id='release-gate' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineShieldCheck className='w-8 h-8 text-amber-600' />
        1. Treat Container Loading as a Release Gate
      </h3>
      <p className='my-4'>
        Loading is the last origin-side point at which the exporter can see the container, every bag, the stow, and the seal in one place. Once the doors close, corrections become expensive. The operating objective is therefore not simply to fit the planned coffee inside. The objective is to prove that the correct, approved coffee entered a suitable unit under controlled conditions and left with accurate records.
      </p>
      <p className='my-4'>
        The <a href='https://unece.org/transport/documents/standards/ctu-code' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline font-bold'>IMO/ILO/UNECE CTU Code</a> places attention on the suitability of the cargo transport unit, packing and securing, information flow, condensation risk, and completion checks. Convert those broad duties into named roles for the coffee shipment.
      </p>

      <div className='grid md:grid-cols-2 gap-4 my-6'>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Loading Supervisor</h4>
          <p className='text-sm text-gray-700'>Controls the plan, safety brief, container inspection, loading sequence, bag count, deviations, photographs, and final release record.</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Warehouse Checker</h4>
          <p className='text-sm text-gray-700'>Confirms lot identity, bag marks, packaging condition, staged quantity, and running count independently from the loading crew.</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Quality or Export Lead</h4>
          <p className='text-sm text-gray-700'>Confirms the released lot, approved pre-shipment sample, quality records, buyer instructions, and authority to resolve substitutions.</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Document Controller</h4>
          <p className='text-sm text-gray-700'>Reconciles the booking, packing list, container and seal numbers, weight evidence, shipping instructions, and release deadlines.</p>
        </div>
      </div>

      <p className='my-4'>
        Name one person who can stop loading and one person who can authorize restart. A loading crew should never improvise a lot substitution, ignore a wet patch, alter bag quantities, or accept a different container size because the truck is waiting. Record the exception, decide against the contract and booking, and preserve the reason for the decision.
      </p>

      <h3 id='load-plan' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineDocumentText className='w-8 h-8 text-amber-600' />
        2. Freeze the Load Plan Before the Container Arrives
      </h3>
      <p className='my-4'>
        Issue a controlled load plan at least one working day before loading. The plan is the common reference for the warehouse, exporter, freight forwarder, surveyor, and document team. If the booking changes, issue a revision. Do not let separate chat messages become unofficial instructions.
      </p>

      <div className='bg-blue-50 border border-blue-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3'>Minimum Load Plan Fields</h4>
        <ul className='space-y-2 text-sm text-gray-700'>
          <li><strong>Commercial reference:</strong> buyer, sales contract, purchase order, invoice reference, Incoterm, and shipment window.</li>
          <li><strong>Booking reference:</strong> carrier, booking number, equipment size and type, loading location, port pair, vessel or voyage if assigned, cutoffs, and return location.</li>
          <li><strong>Coffee identity:</strong> exporter lot, buyer lot, origin, washing station or cooperative where applicable, crop, process, grade, certification status, and approved pre-shipment sample ID.</li>
          <li><strong>Quantity:</strong> number of bags by lot, nominal net weight per bag, planned net mass, packaging construction, and pallet or floor-loading instruction.</li>
          <li><strong>Protection:</strong> liner specification, dry floor and wall protection, absorbent material, desiccant plan where specified, dunnage, and cargo-securing method.</li>
          <li><strong>Evidence:</strong> required photographs, survey attendance, sample draws, weighbridge or certified weighing method, seal type, and report recipients.</li>
          <li><strong>Decision rules:</strong> reject conditions, substitution authority, tolerances, escalation contacts, and final release signatory.</li>
        </ul>
      </div>

      <p className='my-4'>
        Pull these fields from the same source data used for the <Link href='/insights/green-coffee-shipping-documents-checklist' className='text-amber-700 hover:underline font-bold'>green coffee shipping documents checklist</Link>. Re-keying lot names, weights, and addresses across independent files creates avoidable mismatches. The load plan should also identify the exact contract version and any buyer amendment received before the cutoff.
      </p>

      <h3 id='stage-coffee' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineArchiveBox className='w-8 h-8 text-amber-600' />
        3. Stage and Reconcile the Coffee Before Loading
      </h3>
      <p className='my-4'>
        Move only released coffee into a marked loading zone. Separate it physically from other grades, crops, certifications, and buyer lots. A completed dry-mill release does not by itself prove shipping identity; the checker must connect the bags in front of the container to the approved load plan.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left'>Control</th>
              <th className='p-3 text-left'>Evidence to Check</th>
              <th className='p-3 text-left'>Stop Condition</th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-200'>
            <tr>
              <td className='p-3 font-semibold'>Lot identity</td>
              <td className='p-3'>Warehouse release, bag marks, lot tags, approved sample record</td>
              <td className='p-3'>Lot code, crop, grade, or certification does not match</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='p-3 font-semibold'>Bag quantity</td>
              <td className='p-3'>Staging count by lot and independent checker count</td>
              <td className='p-3'>Count cannot be reconciled before the first bag moves</td>
            </tr>
            <tr>
              <td className='p-3 font-semibold'>Bag condition</td>
              <td className='p-3'>Jute, seams, closures, inner liners, marks, and visible dryness</td>
              <td className='p-3'>Wet, stained, torn, open, contaminated, or unreadable bag</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='p-3 font-semibold'>Quality release</td>
              <td className='p-3'>Moisture result, grade record, cupping approval, PSS ID</td>
              <td className='p-3'>Hold remains open or result is outside contract</td>
            </tr>
            <tr>
              <td className='p-3 font-semibold'>Weight basis</td>
              <td className='p-3'>Bagging weights, scale status, planned net mass</td>
              <td className='p-3'>Scale or mass record is missing, expired, or inconsistent</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        Replace any damaged outer bag only under a documented rebagging rule. Preserve the original lot identity, weigh the replacement, inspect the inner liner, and record the old and new bag numbers if serialized. Never hide a repaired or wet bag within the center of the stow.
      </p>

      <h3 id='inspect-container' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineTruck className='w-8 h-8 text-amber-600' />
        4. Inspect the Empty Shipping Container
      </h3>
      <p className='my-4'>
        Record the container number before inspection and compare it with the release or booking. Photograph all four sides where site rules permit, both door exteriors, the identification markings, the safety approval plate, and the empty interior. Confirm that the unit type and tare information match the equipment record used for planning and mass calculation.
      </p>

      <div className='grid md:grid-cols-2 gap-4 my-6'>
        <div className='border border-gray-200 rounded-lg p-5'>
          <h4 className='font-bold mb-2'>Structure and Weather Tightness</h4>
          <p className='text-sm text-gray-700'>Inspect the roof, walls, floor, corner posts, door frames, gaskets, locking bars, hinges, and fasteners. Look for holes, daylight, deep deformation, open seams, damaged seals, or repairs that may leak.</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5'>
          <h4 className='font-bold mb-2'>Cleanliness and Taint</h4>
          <p className='text-sm text-gray-700'>The interior must be clean, dry, pest-free, and free of residue, loose nails, oil, chemicals, mold, foreign material, and objectionable odor. Green coffee readily absorbs surrounding odors.</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5'>
          <h4 className='font-bold mb-2'>Floor and Contact Surfaces</h4>
          <p className='text-sm text-gray-700'>Check for wet boards, soft spots, splinters, protrusions, stains, insect evidence, and fresh treatment odor. Anything touching the cargo protection must also be dry and clean.</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5'>
          <h4 className='font-bold mb-2'>Security and Identification</h4>
          <p className='text-sm text-gray-700'>Confirm the container number is legible, locking points function, seal holes are intact, the door closes correctly, and no unexplained false compartment or tampering evidence is present.</p>
        </div>
      </div>

      <div className='border-l-4 border-red-500 pl-6 bg-red-50 p-4 my-6'>
        <p className='text-sm text-gray-700'>
          <strong>Reject the unit:</strong> cleaning does not correct a structural defect, active leak, persistent odor, pest evidence, chemical residue, wet floor, unsafe door, or compromised locking point. Mark the container as rejected in the report and obtain a replacement. Do not cover a failed surface with paper and call it protected.
        </p>
      </div>

      <p className='my-4'>
        Use the facility&apos;s safety procedure for inspection. A closed container may hold hazardous vapors, fumigant residues, or low oxygen. Ventilation, gas testing, lighting, access equipment, dock restraint, and manual-handling controls belong in the site risk assessment, not in an improvised coffee checklist.
      </p>

      <h3 id='moisture-control' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineShieldCheck className='w-8 h-8 text-amber-600' />
        5. Prepare the Moisture-Control System
      </h3>
      <p className='my-4'>
        Moisture control starts with dry coffee, dry bags, a dry container, and dry protective materials. Desiccants cannot correct wet cargo or a leaking unit. Review the final lot moisture record against the contract and destination requirement, then record ambient conditions and any packaging checks required by the shipping procedure.
      </p>
      <p className='my-4'>
        The Codex <a href='https://www.fao.org/fao-who-codexalimentarius/codex-texts/codes-of-practice/en/' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline font-bold'>Code of Practice for the Prevention and Reduction of Ochratoxin A Contamination in Coffee</a> calls for coffee lots to be uniformly dried and below 12.5% moisture before loading, containers to be clean, dry, and free of water-entry damage, and bags to be stacked and protected against condensed water. A buyer&apos;s contract may set a tighter moisture range. Follow the tighter applicable requirement and the <Link href='/insights/green-coffee-moisture-content-water-activity-guide' className='text-amber-700 hover:underline font-bold'>moisture and water activity control plan</Link>.
      </p>

      <div className='bg-amber-50 border border-amber-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3'>Moisture-Control Release Checks</h4>
        <ul className='space-y-2 text-sm text-gray-700'>
          <li><strong>Coffee:</strong> representative lot result meets the written specification; no wet or stained bags enter the load.</li>
          <li><strong>Packaging:</strong> inner liners are sealed as specified, outer bags are dry, and sharp surfaces cannot puncture the barrier.</li>
          <li><strong>Container:</strong> floor, walls, roof, and door seals pass inspection; previous cleaning is fully dry and odor-free.</li>
          <li><strong>Protection:</strong> paper, cardboard, floor sheets, timber, dunnage, and absorbent materials are dry before placement.</li>
          <li><strong>Desiccants:</strong> product, quantity, placement, and containment follow the approved route and packaging plan; units cannot touch or leak onto coffee.</li>
          <li><strong>Stowage instruction:</strong> freight forwarder passes any contract requirement for protected stowage and heat avoidance to the carrier.</li>
        </ul>
      </div>

      <p className='my-4'>
        Do not invent a universal number of desiccant bags. Required capacity depends on voyage duration, climatic transitions, container condition, packaging barrier, cargo mass, product specification, and the desiccant manufacturer&apos;s design method. Record what was specified and what was installed. If a humidity or temperature logger is contracted, photograph its serial number and location before it disappears behind the final bags.
      </p>

      <h3 id='load-secure' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineArchiveBox className='w-8 h-8 text-amber-600' />
        6. Load, Count, and Secure the Green Coffee Bags
      </h3>
      <p className='my-4'>
        Brief the crew on the lot sequence, count method, manual-handling rules, stop signal, photograph milestones, and door-end securing plan. Keep the loading area covered. Pause if rain, dust, vehicle exhaust, pests, or another contamination source reaches the open unit or staged coffee.
      </p>

      <div className='space-y-4 my-6'>
        <div className='flex gap-4 border border-gray-200 rounded-lg p-5'>
          <span className='bg-amber-600 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0'>1</span>
          <div>
            <h4 className='font-bold mb-1'>Start with an empty-unit photograph</h4>
            <p className='text-sm text-gray-700'>Capture the installed floor, wall, roof, liner, absorbent, desiccant, and logger controls before any bag covers them.</p>
          </div>
        </div>
        <div className='flex gap-4 border border-gray-200 rounded-lg p-5'>
          <span className='bg-amber-600 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0'>2</span>
          <div>
            <h4 className='font-bold mb-1'>Count at the threshold</h4>
            <p className='text-sm text-gray-700'>One checker calls or scans each bag as it crosses the container threshold. A second checker reconciles completed rows or blocks against the load map.</p>
          </div>
        </div>
        <div className='flex gap-4 border border-gray-200 rounded-lg p-5'>
          <span className='bg-amber-600 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0'>3</span>
          <div>
            <h4 className='font-bold mb-1'>Build stable, supported tiers</h4>
            <p className='text-sm text-gray-700'>Follow the approved stow plan, distribute mass evenly, cross-stack bags for mutual support where specified, protect liners from abrasion, and keep doors free to close without compressing cargo.</p>
          </div>
        </div>
        <div className='flex gap-4 border border-gray-200 rounded-lg p-5'>
          <span className='bg-amber-600 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0'>4</span>
          <div>
            <h4 className='font-bold mb-1'>Separate lots on the load map</h4>
            <p className='text-sm text-gray-700'>Record the position and bag range of each lot. Use approved physical separation or visible lot markers that cannot contaminate or damage the coffee.</p>
          </div>
        </div>
        <div className='flex gap-4 border border-gray-200 rounded-lg p-5'>
          <span className='bg-amber-600 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0'>5</span>
          <div>
            <h4 className='font-bold mb-1'>Secure the door end</h4>
            <p className='text-sm text-gray-700'>Install the approved barrier, net, straps, dunnage, or bracing so bags cannot fall against the doors. The receiving team must be able to open the unit without an unstable stack releasing into the doorway.</p>
          </div>
        </div>
      </div>

      <p className='my-4'>
        Photograph the empty unit, first completed tier, each lot transition, approximately one-quarter, one-half, three-quarter, and full load, installed door-end restraint, and both doors before closure. Percentages are evidence milestones, not a substitute for the running count. The count sheet, bag map, and photographs must tell the same story.
      </p>

      <h3 id='vgm-documents' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineScale className='w-8 h-8 text-amber-600' />
        7. Reconcile Verified Gross Mass and Shipping Documents
      </h3>
      <p className='my-4'>
        Calculate the planned net mass from the loaded bag count and verified bagging data. Add packaging, pallets where used, dunnage, securing material, moisture controls, and the container tare only through the certified method approved for the packing jurisdiction. Keep the weight ticket, equipment identity, date, and responsible person with the loading file.
      </p>
      <p className='my-4'>
        The <a href='https://www.imo.org/en/ourwork/safety/pages/verification-of-the-gross-mass.aspx' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline font-bold'>International Maritime Organization&apos;s SOLAS VGM guidance</a> makes the shipper responsible for providing the verified gross mass in time for the vessel stow plan. VGM is a condition of loading the packed container onto the ship. It can be obtained by weighing the packed container or through an approved certified method that sums all cargo, packaging, securing material, and container tare.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left'>Field</th>
              <th className='p-3 text-left'>Must Agree Across</th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-200'>
            <tr>
              <td className='p-3 font-semibold'>Container number</td>
              <td className='p-3'>Inspection, loading report, VGM, packing list, shipping instruction, bill of lading draft</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='p-3 font-semibold'>Seal number</td>
              <td className='p-3'>Seal photograph, loading report, packing list where used, shipping instruction, bill of lading draft</td>
            </tr>
            <tr>
              <td className='p-3 font-semibold'>Bag count and net mass</td>
              <td className='p-3'>Count sheet, bag map, packing list, invoice quantity, weight certificate, quality documents</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='p-3 font-semibold'>Lot and description</td>
              <td className='p-3'>Load plan, bag marks, packing list, invoice, origin and quality certificates, buyer record</td>
            </tr>
            <tr>
              <td className='p-3 font-semibold'>VGM</td>
              <td className='p-3'>Certified weight evidence, signed VGM submission, carrier or terminal acknowledgement</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        Resolve differences before submitting the shipping instruction. Changing a bill of lading draft does not correct the warehouse source record, and changing the packing list does not correct an inaccurate VGM. Trace the error to its source, document the revision, and reissue every affected record under version control.
      </p>

      <h3 id='seal-release' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineLockClosed className='w-8 h-8 text-amber-600' />
        8. Seal and Release the Container
      </h3>
      <p className='my-4'>
        Sweep the visible door area for loose material, confirm the final count, verify the restraint, and close both doors in the correct sequence. Apply the contract- and carrier-approved seal to the designated locking point. Read the seal number aloud while a second person checks the written record character by character.
      </p>

      <div className='bg-green-50 border border-green-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3 flex items-center gap-2'>
          <HiOutlineCheckCircle className='text-green-600' /> Final Release Pack
        </h4>
        <ul className='space-y-2 text-sm text-gray-700'>
          <li>Signed empty-container inspection with reject or correction history</li>
          <li>Approved load plan and final bag map by lot</li>
          <li>Running count sheet and final count reconciliation</li>
          <li>Moisture, packaging, quality release, and sample references</li>
          <li>Time-stamped loading photographs and any survey report</li>
          <li>Container and seal photographs after closure</li>
          <li>Certified weight evidence and submitted VGM</li>
          <li>Final packing list and shipping-instruction reconciliation</li>
          <li>Deviation log, corrective actions, and release signature</li>
        </ul>
      </div>

      <p className='my-4'>
        Release the truck or container only after the supervisor signs the pack. Send the buyer-facing report through the agreed channel and retain the complete internal file through the contract, insurance, and claim-retention periods. If the seal changes at a terminal or inspection point, obtain the authority, old seal, new seal, reason, time, location, and supporting evidence.
      </p>

      <h3 id='photo-report' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineCamera className='w-8 h-8 text-amber-600' />
        9. Build a Buyer-Ready Container Loading Report
      </h3>
      <p className='my-4'>
        Buyers do not need hundreds of unlabeled photographs. They need a compact sequence tied to the shipment record. Use a report cover with the contract, booking, container, date, loading location, coffee lots, bag count, net mass, supervisor, and seal. Number every photograph and add a short caption that states what the image proves.
      </p>

      <div className='grid md:grid-cols-2 gap-4 my-6'>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Identity Evidence</h4>
          <p className='text-sm text-gray-700'>Container number, equipment type, approval plate, bag marks, lot labels, certification marks, seal and booking reference.</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Condition Evidence</h4>
          <p className='text-sm text-gray-700'>Empty floor, walls, roof, doors, dry protective materials, sound bags, liners, and absence of visible contamination.</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Quantity Evidence</h4>
          <p className='text-sm text-gray-700'>Staged lots, completed rows, load milestones, lot transitions, count sheet, bag map, weight ticket, and VGM record.</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Closure Evidence</h4>
          <p className='text-sm text-gray-700'>Full load, door-end restraint, closed doors, seal placement, legible seal number, and final signed release.</p>
        </div>
      </div>

      <p className='my-4'>
        Preserve original files with timestamps and metadata under the shipment reference. A compressed buyer PDF is useful for communication, but it should not be the only evidence retained. If an exception occurred, include the failed condition, correction, reinspection, and approver rather than showing only the corrected image.
      </p>

      <h3 id='stop-rules' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineExclamationTriangle className='w-8 h-8 text-amber-600' />
        10. Apply Stop, Rework, and Release Rules
      </h3>
      <p className='my-4'>
        A checklist works only when failures produce defined actions. Classify conditions before the loading date so commercial pressure does not rewrite the rules at the container door.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left'>Decision</th>
              <th className='p-3 text-left'>Typical Conditions</th>
              <th className='p-3 text-left'>Required Record</th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-200'>
            <tr>
              <td className='p-3 font-semibold text-red-700'>Stop and reject</td>
              <td className='p-3'>Wet or tainted unit, leak, structural or security defect, pest evidence, wrong equipment, unresolved lot identity</td>
              <td className='p-3'>Reject report, photographs, supplier or carrier notice, replacement reference</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='p-3 font-semibold text-amber-700'>Stop and rework</td>
              <td className='p-3'>Damaged bag, count variance, missing mark, misplaced logger, dry removable residue, incomplete restraint</td>
              <td className='p-3'>Deviation, correction, reinspection result, approver and time</td>
            </tr>
            <tr>
              <td className='p-3 font-semibold text-green-700'>Release</td>
              <td className='p-3'>Plan, identity, condition, count, protection, stow, weight, documents, and seal all reconcile</td>
              <td className='p-3'>Signed loading report and controlled release pack</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        A supervisor may correct a minor issue only within written authority. Buyer approval is required for changes that affect coffee identity, grade, certification, quantity, packaging, shipment timing, or another contract term. Link any arrival problem back to the origin file through the <Link href='/insights/green-coffee-quality-claims-guide' className='text-amber-700 hover:underline font-bold'>green coffee quality claims procedure</Link>.
      </p>

      <h3 id='worked-example' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineClipboardDocumentCheck className='w-8 h-8 text-amber-600' />
        11. Worked Ethiopian Coffee Container Load
      </h3>
      <p className='my-4'>
        An Ethiopian exporter plans 320 bags at a nominal 60 kg each, giving a planned coffee net mass of 19,200 kg. This is an example, not a universal container capacity. The actual legal and operational load must remain within the container rating, carrier booking, road limits, terminal rules, stow plan, and certified VGM procedure.
      </p>

      <div className='bg-gray-50 border border-gray-200 rounded-lg p-6 my-6'>
        <ol className='space-y-3 text-sm text-gray-700 list-decimal pl-5'>
          <li>The export lead freezes one buyer lot, 320 bags, packaging specification, approved sample ID, loading location, booking, cutoffs, and evidence requirements.</li>
          <li>The warehouse stages 320 released bags and a second checker reconciles the lot marks, bag condition, count, moisture record, and bagging weights.</li>
          <li>The assigned container arrives. The supervisor records its number and tare, completes the structural, dryness, odor, cleanliness, pest, door, and security inspection, then photographs the empty unit.</li>
          <li>The crew installs the approved dry protection and moisture-control materials. Serial numbers and positions are recorded for any logger.</li>
          <li>Each bag is counted at the threshold. The checker reconciles each completed block, while photographs document milestones and the bag map.</li>
          <li>After bag 320, the supervisor confirms the full load, door-end restraint, count, and packaging condition. The certified mass procedure produces the VGM evidence.</li>
          <li>The document controller reconciles 320 bags, 19,200 kg net, the container number, VGM, lot, and description across the packing list and shipping instruction.</li>
          <li>The doors close, the approved seal is applied and photographed, and the supervisor signs release. The buyer receives the concise report; the exporter retains the full evidence file.</li>
        </ol>
      </div>

      <p className='my-4'>
        Coffee moving from an Ethiopian export warehouse toward Djibouti may pass through truck, dry-port, terminal, customs, inspection, and carrier handoffs. The exact route and point of stuffing depend on the booking. Keep the same shipment identifiers through every handoff, and record any authorized opening or seal replacement. Ethio Coffee Import and Export PLC coordinates these records through its Addis Ababa office and trusted logistics network without implying control over carrier or government actions.
      </p>

      <section id='faq' className='mb-12 bg-gray-50 rounded-xl p-8 border border-gray-200 mt-12'>
        <h3 className='text-2xl font-bold mb-6 text-gray-900'>Frequently Asked Questions About Green Coffee Container Loading</h3>
        <div className='space-y-5'>
          <div className='border border-gray-200 rounded-lg p-5 bg-white'>
            <h4 className='font-bold text-gray-800 mb-2'>What should a green coffee container loading checklist include?</h4>
            <p className='text-sm text-gray-600'>It should connect the booking and contract to the released coffee, empty-container inspection, moisture protection, bag count, stow and securing, photo milestones, verified gross mass, shipping documents, seal, deviations, and final authorization. Each control needs an owner, evidence field, and stop rule so completion can be audited later.</p>
          </div>
          <div className='border border-gray-200 rounded-lg p-5 bg-white'>
            <h4 className='font-bold text-gray-800 mb-2'>How many 60 kg coffee bags fit in a 20-foot container?</h4>
            <p className='text-sm text-gray-600'>There is no universal count. A common planning example is 320 bags, equal to 19,200 kg net coffee, but the approved quantity depends on the container&apos;s rated payload, carrier booking, road and terminal limits, packaging, securing materials, stow plan, and certified verified gross mass procedure.</p>
          </div>
          <div className='border border-gray-200 rounded-lg p-5 bg-white'>
            <h4 className='font-bold text-gray-800 mb-2'>How should an empty container be inspected before loading coffee?</h4>
            <p className='text-sm text-gray-600'>Verify the container identity, type, tare, and approval markings; then inspect the roof, walls, floor, corner posts, doors, gaskets, locks, and interior. Reject holes, leaks, wet surfaces, chemical residue, pests, unsafe damage, persistent odor, or compromised sealing points. Photograph the empty unit and any correction.</p>
          </div>
          <div className='border border-gray-200 rounded-lg p-5 bg-white'>
            <h4 className='font-bold text-gray-800 mb-2'>Are container desiccants enough to protect green coffee?</h4>
            <p className='text-sm text-gray-600'>No. Protection begins with uniformly dried coffee, sound barrier packaging, a clean and dry weather-tight container, dry dunnage, stable stowage, and suitable carrier instructions. Desiccant type and capacity should follow a route-specific plan. It cannot repair a leaking unit, wet bags, or punctured liners.</p>
          </div>
          <div className='border border-gray-200 rounded-lg p-5 bg-white'>
            <h4 className='font-bold text-gray-800 mb-2'>Which photographs belong in a coffee container loading report?</h4>
            <p className='text-sm text-gray-600'>Include container identity and approval markings, every empty interior surface, installed moisture controls, representative bag marks, staged lots, loading milestones, lot transitions, full stow, door-end restraint, closed doors, and a legible seal. Caption each photograph with the shipment reference, time, location, and control it proves.</p>
          </div>
        </div>
      </section>

      <h3 className='text-2xl font-extrabold mt-12 mb-4'>Conclusion: Release the Evidence with the Coffee</h3>
      <p className='my-4'>
        The best green coffee container loading checklist does more than confirm that bags entered a steel box. It proves the approved coffee, suitable container, moisture controls, count, stow, weight, documents, and seal agreed at the moment of release. Build one record from booking to closed doors, give the supervisor real stop authority, and make every correction visible. That discipline protects cup quality, claim evidence, and buyer trust through the longest hidden stage of the shipment.
      </p>

      <div className='bg-amber-100 border border-amber-300 rounded-xl p-8 my-10'>
        <h3 className='text-2xl font-extrabold mb-3'>Ship Ethiopian Coffee with Clear Origin Records</h3>
        <p className='text-gray-700 mb-6'>
          Review current lots, request representative samples, and discuss packaging, shipment records, and loading-report requirements with an origin-connected exporter backed by three decades of Ethiopian sourcing heritage.
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
            <h4 className='font-bold text-lg mb-3 text-amber-800'>Shipping Control</h4>
            <ul className='space-y-2 list-disc pl-5'>
              <li><Link href='/insights/green-coffee-shipping-documents-checklist' className='text-amber-700 hover:underline'>Green Coffee Shipping Documents Checklist</Link></li>
              <li><Link href='/insights/specialty-coffee-storage-freight-logistics' className='text-amber-700 hover:underline'>Specialty Coffee Freight and Logistics</Link></li>
              <li><Link href='/insights/green-coffee-cargo-insurance-guide' className='text-amber-700 hover:underline'>Green Coffee Cargo Insurance</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-bold text-lg mb-3 text-amber-800'>Quality and Packaging</h4>
            <ul className='space-y-2 list-disc pl-5'>
              <li><Link href='/insights/green-coffee-packaging-bag-types-guide' className='text-amber-700 hover:underline'>Green Coffee Packaging and Bag Types</Link></li>
              <li><Link href='/insights/green-coffee-moisture-content-water-activity-guide' className='text-amber-700 hover:underline'>Moisture Content and Water Activity</Link></li>
              <li><Link href='/insights/green-coffee-mycotoxin-testing-guide' className='text-amber-700 hover:underline'>Green Coffee Mycotoxin Testing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-bold text-lg mb-3 text-amber-800'>Samples and Receiving</h4>
            <ul className='space-y-2 list-disc pl-5'>
              <li><Link href='/insights/ethiopian-coffee-sample-approval-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Sample Approval</Link></li>
              <li><Link href='/insights/green-coffee-receiving-inspection-checklist' className='text-amber-700 hover:underline'>Green Coffee Receiving Inspection</Link></li>
              <li><Link href='/insights/green-coffee-quality-claims-guide' className='text-amber-700 hover:underline'>Green Coffee Quality Claims</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-bold text-lg mb-3 text-amber-800'>Contracts and Export</h4>
            <ul className='space-y-2 list-disc pl-5'>
              <li><Link href='/insights/ethiopian-coffee-contracts-payment-terms-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Contracts and Payment Terms</Link></li>
              <li><Link href='/insights/ethiopian-coffee-export-process-buyers-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Export Process</Link></li>
              <li><Link href='/insights/ethiopian-coffee-incoterms-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Incoterms</Link></li>
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
          <span className='font-bold'>About This Insight:</span> This green coffee container loading checklist was prepared by Ethio Coffee Import and Export PLC on {date} for exporters, importers, roasters, freight coordinators, and quality teams. Container acceptance, packing, VGM, sealing, food safety, and documentation requirements vary by contract, carrier, route, jurisdiction, and cargo. Contact us for current lot information and shipment-specific coordination.
        </div>
      </div>
    </>
  )
}
