import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import {
  HiOutlineArchiveBox,
  HiOutlineBugAnt,
  HiOutlineChartBar,
  HiOutlineCheckCircle,
  HiOutlineClipboardDocumentCheck,
  HiOutlineClipboardDocumentList,
  HiOutlineExclamationTriangle,
  HiOutlineLightBulb,
  HiOutlineMagnifyingGlass,
  HiOutlineShieldCheck,
} from 'react-icons/hi2'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function GreenCoffeeWarehousePestControlGuide({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        Green Coffee Warehouse Pest Control for Prevention, Monitoring, Lot Isolation, Corrective Action, and Audit Records
      </h2>

      <figure>
        <figcaption className='font-inconsolata my-2'>{title}</figcaption>
        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Green coffee warehouse pest control inspection around stacked coffee bags'
            fill
            objectFit='cover'
            className='w-full h-full'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>
        <p className='text-xs text-gray-500 mt-2'>Photo: Wonderlane, Unsplash.</p>
      </figure>

      <div className='my-4 text-sm bg-amber-50 p-4 rounded-lg border border-amber-200'>
        <span className='font-semibold'>Category:</span>
        <span className='ml-2'>Warehouse Operations / Pest Control / Green Coffee Quality Assurance / Roaster Resources</span>
      </div>

      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-8 border border-amber-200'>
        <h3 className='font-bold text-xl mb-3 flex items-center gap-2'>
          <HiOutlineLightBulb className='text-amber-500 flex-shrink-0' /> Key Takeaway
        </h3>
        <p className='text-sm leading-relaxed'>
          Effective green coffee warehouse pest control is a documented system, not a scheduled spray. Prevent entry, remove food and shelter, inspect every inbound lot, map and check monitoring devices, isolate suspicious coffee, investigate the source, and release affected stock only through an authorized food-safety decision. Trend findings by location and date so the team acts on rising activity before insects, rodents, birds, or contaminated materials compromise multiple lots.
        </p>
      </div>

      <div className='my-8 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <HiOutlineClipboardDocumentList className='text-amber-600' /> In This Guide
        </h3>
        <ol className='space-y-2 text-sm'>
          <li><a href='#control-objective' className='text-amber-700 hover:underline'>1. Define the Control Objective</a></li>
          <li><a href='#damage-or-infestation' className='text-amber-700 hover:underline'>2. Separate Bean Damage from Active Infestation</a></li>
          <li><a href='#ipm-plan' className='text-amber-700 hover:underline'>3. Build the Warehouse IPM Plan</a></li>
          <li><a href='#prevention' className='text-amber-700 hover:underline'>4. Remove Entry, Food, Water, and Shelter</a></li>
          <li><a href='#monitoring' className='text-amber-700 hover:underline'>5. Monitor and Trend Pest Activity</a></li>
          <li><a href='#receiving' className='text-amber-700 hover:underline'>6. Control Incoming Green Coffee</a></li>
          <li><a href='#response' className='text-amber-700 hover:underline'>7. Respond to a Pest Finding</a></li>
          <li><a href='#records' className='text-amber-700 hover:underline'>8. Keep Audit-Ready Records</a></li>
          <li><a href='#buyer-review' className='text-amber-700 hover:underline'>9. Evaluate a Third-Party Warehouse</a></li>
          <li><a href='#implementation' className='text-amber-700 hover:underline'>10. Use the 30-Day Implementation Plan</a></li>
          <li><a href='#faq' className='text-amber-700 hover:underline'>11. Frequently Asked Questions</a></li>
        </ol>
      </div>

      <p className='text-lg leading-relaxed my-4'>
        One live beetle beside a green coffee stack can force a buyer to answer expensive questions quickly. Which lot is affected? Did the insect arrive inside a bag or move from another product? Can the coffee ship, roast, or remain on sale? Is treatment legal, effective, and safe for food? Without records, every answer becomes a guess while inventory sits on hold.
      </p>
      <p className='my-4'>
        A green coffee warehouse pest control program prevents that uncertainty. This guide gives exporters, importers, warehouse operators, and production roasters a practical integrated pest management framework. It covers the warehouse and stored green coffee after milling or receipt. Field control on coffee trees is outside its scope.
      </p>

      <h3 id='control-objective' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineShieldCheck className='w-8 h-8 text-amber-600' />
        1. Define the Green Coffee Warehouse Pest Control Objective
      </h3>
      <p className='my-4'>
        The objective is to keep pests and their evidence out of stored coffee while avoiding chemical, physical, or odor contamination from the control program itself. That requires prevention, detection, identification, containment, correction, and verification. A calendar showing that a contractor visited twice each month proves service occurred; it does not prove risk is controlled.
      </p>
      <p className='my-4'>
        The <a href='https://greencoffeeassociation.org/wp-content/uploads/2021/03/GCA-Recommended-Warehouse-Storage-Guidelines.pdf' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline font-bold'>Green Coffee Association warehouse guidelines</a> call for a written pest control program, a named warehouse contact, service details, findings, provider comments, and fumigation records. They also state that pest-control materials must not contaminate coffee. Convert those principles into three release conditions:
      </p>
      <ul className='space-y-2 my-4 ml-5 list-disc'>
        <li><strong>Facility release:</strong> the building envelope, sanitation, drainage, doors, and monitoring system are under control.</li>
        <li><strong>Lot release:</strong> the coffee has no unresolved evidence of active infestation or contamination.</li>
        <li><strong>Action release:</strong> any treatment, cleaning, repair, or stock movement is completed, documented, and verified before the hold closes.</li>
      </ul>
      <p className='my-4'>
        Local food law, pesticide labels, organic rules, customer standards, lease terms, and third-party certification requirements remain controlling. Use a licensed pest-management professional where required. Never improvise a chemical treatment around exposed coffee.
      </p>

      <h3 id='damage-or-infestation' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineMagnifyingGlass className='w-8 h-8 text-amber-600' />
        2. Separate Bean Damage from Active Warehouse Infestation
      </h3>
      <p className='my-4'>
        Insect-damaged beans do not automatically prove that insects are reproducing in the warehouse. Coffee berry borer damage begins in the fruit at origin. A storage pest may instead attack dried coffee under favorable conditions. The <a href='https://www.fda.gov/food/laboratory-methods-food/mpm-v-1-beverages-and-beverage-materials' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline font-bold'>FDA coffee-bean examination method</a> distinguishes coffee berry borer damage from the larger, less regular holes associated with coffee bean weevil and notes that the weevil can be a storage pest in warm, damp climates.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left'>Evidence</th>
              <th className='p-3 text-left'>What It May Mean</th>
              <th className='p-3 text-left'>Immediate Control</th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-200'>
            <tr>
              <td className='p-3 font-semibold'>Old holes, no live stages or fresh dust</td>
              <td className='p-3'>Pre-existing field or storage damage</td>
              <td className='p-3'>Hold if outside specification; sample and grade the defined lot</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='p-3 font-semibold'>Live insects inside bags</td>
              <td className='p-3'>Active lot infestation or contaminated packaging</td>
              <td className='p-3'>Stop movement, isolate the lot, preserve specimens, inspect adjacent stock</td>
            </tr>
            <tr>
              <td className='p-3 font-semibold'>Rising trap counts near one stack</td>
              <td className='p-3'>Localized source or entry route</td>
              <td className='p-3'>Investigate the zone and surrounding products before activity spreads</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='p-3 font-semibold'>Droppings, gnawing, feathers, or nesting</td>
              <td className='p-3'>Rodent or bird access and possible contamination</td>
              <td className='p-3'>Create a food-safety hold and assess affected packaging and surfaces</td>
            </tr>
            <tr>
              <td className='p-3 font-semibold'>Mold odor plus insect activity</td>
              <td className='p-3'>A moisture excursion may be supporting both hazards</td>
              <td className='p-3'>Map moisture, inspect packaging, and extend the hold beyond visible insects</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        Species identification matters because different pests have different food sources, movement patterns, and treatments. Photograph the finding, collect intact specimens in a labeled container, and ask the pest professional or qualified laboratory to identify them. Do not base a lot disposition on an insect name guessed from a phone photograph.
      </p>

      <h3 id='ipm-plan' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineClipboardDocumentCheck className='w-8 h-8 text-amber-600' />
        3. Build the Warehouse IPM Plan Around Zones and Owners
      </h3>
      <p className='my-4'>
        Start with a scaled or clearly labeled site map. Number every exterior bait station, interior monitoring device, insect light trap, door, drain, waste area, staff food area, receiving bay, coffee-storage zone, and high-risk neighboring activity. The device number on the wall, the map, and the service report must match.
      </p>

      <div className='grid md:grid-cols-2 gap-4 my-6'>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Program Owner</h4>
          <p className='text-sm text-gray-700'>Maintains the plan, approves changes, reviews trends, coordinates holds, and confirms corrective actions are closed.</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Warehouse Team</h4>
          <p className='text-sm text-gray-700'>Performs daily observations, sanitation, door control, spill response, stock spacing, and immediate reporting.</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Pest Professional</h4>
          <p className='text-sm text-gray-700'>Identifies pests, services devices, recommends legal controls, documents applications, and verifies treatment results.</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Quality Authority</h4>
          <p className='text-sm text-gray-700'>Defines sampling and release criteria, assesses product impact, approves disposition, and manages buyer notification.</p>
        </div>
      </div>

      <p className='my-4'>
        Set the inspection frequency from risk. Warm zones, loading doors, floor-wall junctions, spill points, returned goods, and areas beside food ingredients deserve closer attention than sealed offices. Review the map after construction, a recurring catch, a new neighboring tenant, a change in waste handling, or a major stock-layout change.
      </p>

      <h3 id='prevention' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineArchiveBox className='w-8 h-8 text-amber-600' />
        4. Remove Entry, Food, Water, and Shelter
      </h3>
      <p className='my-4'>
        Prevention should carry most of the program. Chemicals cannot compensate for open doors, spilled beans, wet packaging, unmanaged waste, or unused materials along walls. A clean perimeter also makes new evidence easier to see.
      </p>

      <div className='bg-blue-50 border border-blue-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3'>Weekly Prevention Checklist</h4>
        <ul className='space-y-2 text-sm text-gray-700'>
          <li><strong>Envelope:</strong> doors close fully; screens, seals, flashing, roof, walls, and pipe penetrations have no unexplained gaps.</li>
          <li><strong>Perimeter:</strong> vegetation, standing water, waste, unused pallets, and spilled food do not provide cover or attraction.</li>
          <li><strong>Housekeeping:</strong> bean spills, chaff, dust, torn jute, and waste are removed with tools that do not scatter contamination.</li>
          <li><strong>Stock layout:</strong> coffee remains on sound pallets with inspection access around stacks and no hidden slack bags.</li>
          <li><strong>Other goods:</strong> staff food, bird seed, grain, returned products, chemicals, and odorous materials are segregated from coffee.</li>
          <li><strong>Moisture:</strong> leaks, condensation, damp walls, wet pallets, stained bags, and abnormal humidity readings trigger investigation.</li>
          <li><strong>Packaging:</strong> hermetic liners remain sealed; damaged outer bags are controlled, relabeled, and reconciled to the lot.</li>
        </ul>
      </div>

      <p className='my-4'>
        Moisture is both a quality signal and a pest-control signal. The FAO and Codex <a href='https://www.fao.org/fileadmin/user_upload/agns/pdf/coffee/FTR2006.pdf' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline font-bold'>guidelines for preventing mold in coffee</a> connect storage insect activity with coffee that is too wet for suitable storage. When activity appears, investigate the humidity history, water entry, bag moisture, and <Link href='/insights/green-coffee-moisture-content-water-activity-guide' className='text-amber-700 hover:underline font-bold'>green coffee moisture and water activity</Link> results instead of treating insects as an isolated event.
      </p>

      <h3 id='monitoring' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineChartBar className='w-8 h-8 text-amber-600' />
        5. Monitor Activity, Then Trend It by Zone
      </h3>
      <p className='my-4'>
        Monitoring devices show where and when activity changes. They do not protect coffee unless someone checks them consistently, records the result, and responds. Place devices according to the target pest, facility risk assessment, manufacturer instructions, local law, and pest professional&apos;s plan. Keep them away from positions where they can contaminate or obstruct coffee handling.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left'>Record</th>
              <th className='p-3 text-left'>Minimum Fields</th>
              <th className='p-3 text-left'>Decision Value</th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-200'>
            <tr>
              <td className='p-3 font-semibold'>Device check</td>
              <td className='p-3'>Device ID, date, pest or evidence, count, condition, inspector</td>
              <td className='p-3'>Shows location and change over time</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='p-3 font-semibold'>Facility inspection</td>
              <td className='p-3'>Zone, access point, sanitation, moisture, damage, photographs</td>
              <td className='p-3'>Connects catches to a likely cause</td>
            </tr>
            <tr>
              <td className='p-3 font-semibold'>Lot observation</td>
              <td className='p-3'>Lot, stack, bag, evidence type, sample ID, hold status</td>
              <td className='p-3'>Defines product scope and traceability</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='p-3 font-semibold'>Trend review</td>
              <td className='p-3'>Current count, prior periods, seasonal baseline, action taken</td>
              <td className='p-3'>Finds deterioration before a widespread event</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        Avoid a universal numeric action limit copied from another warehouse. A single rodent dropping on a coffee bag warrants immediate product assessment, while one insect in an exterior device may call for inspection rather than a stock hold. Set thresholds by pest, zone, product proximity, season, customer requirement, and regulatory consequence. Include qualitative triggers such as any evidence on packaging, any live pest inside a sealed liner, repeated activity at one device, or a sharp increase from baseline.
      </p>

      <h3 id='receiving' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineMagnifyingGlass className='w-8 h-8 text-amber-600' />
        6. Control Incoming Green Coffee Before Put-Away
      </h3>
      <p className='my-4'>
        Receiving is the cleanest point to stop an incoming problem from entering general storage. Inspect the vehicle or container, pallet, outer bags, seams, liners, and the floor beneath the load before stock disperses. Look for live or dead insects, webbing, frass, fresh boring dust, gnawing, droppings, wet stains, unusual odor, torn closures, and mixed cargo residue.
      </p>
      <p className='my-4'>
        Assign a visible quarantine status to any suspicious lot and move it only to a defined hold area. Record the container and seal, purchase order, supplier lot, buyer lot, bag count, photographs, finding location, and nearby goods. Draw a representative sample through the site&apos;s <Link href='/insights/green-coffee-sampling-protocol' className='text-amber-700 hover:underline font-bold'>green coffee sampling protocol</Link>. A surface inspection alone cannot establish the condition of a full lot.
      </p>
      <p className='my-4'>
        The receiving team should then complete the broader <Link href='/insights/green-coffee-receiving-inspection-checklist' className='text-amber-700 hover:underline font-bold'>green coffee receiving inspection</Link>. Pest evidence may be part of a larger moisture, packaging, contamination, or transit failure. Keeping those observations in one receiving record prevents separate departments from releasing the same stock under different assumptions.
      </p>

      <h3 id='response' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineExclamationTriangle className='w-8 h-8 text-red-600' />
        7. Respond to a Pest Finding Without Losing Traceability
      </h3>
      <p className='my-4'>
        Stop first, define scope second, and choose treatment or disposition only after the evidence is understood. Moving bags, sweeping the area, or spraying before documentation can spread pests and erase the facts needed for a supplier claim, insurance file, customer notification, or regulatory decision.
      </p>

      <div className='border-l-4 border-red-500 pl-6 bg-red-50 p-5 my-6'>
        <h4 className='font-bold mb-2'>Immediate Response Sequence</h4>
        <ol className='space-y-2 text-sm text-gray-700 list-decimal ml-5'>
          <li>Stop picking, loading, sampling, and cleaning in the affected zone.</li>
          <li>Place the suspected lot and exposed adjacent stock on electronic and physical hold.</li>
          <li>Photograph the evidence in place and preserve specimens with date, time, and location.</li>
          <li>Identify affected lots, equipment, pallets, packaging, waste, and recent stock movements.</li>
          <li>Inspect outward from the finding and review monitoring and climate records.</li>
          <li>Notify the quality authority and pest professional; notify supplier, buyer, insurer, or regulator when required.</li>
          <li>Approve a legal corrective action and protect unaffected coffee during the work.</li>
          <li>Verify effectiveness, assess product fitness, document disposition, and authorize release in writing.</li>
        </ol>
      </div>

      <p className='my-4'>
        Possible dispositions include release after investigation, additional sampling, segregation, return, reconditioning where lawful and contractually accepted, diversion, or destruction. The decision must consider pest species, life stage, evidence inside or outside packaging, contamination, contract terms, destination law, certification status, and whether the lot still meets specification. Roasting is not a substitute for a food-safety disposition.
      </p>
      <p className='my-4'>
        If treatment is proposed, obtain the product label, applicator authority, target pest, exposure controls, treated area, affected lots, ventilation or re-entry requirements, residue implications, organic restrictions, and verification method before approval. Keep odor-sensitive green coffee protected from treatment materials and solvents. Record the decision even when no pesticide is used.
      </p>

      <h3 id='records' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineClipboardDocumentCheck className='w-8 h-8 text-amber-600' />
        8. Keep One Audit Trail from Finding to Release
      </h3>
      <p className='my-4'>
        A defensible pest file lets another person reconstruct what happened without relying on memory. Maintain the current program, site map, service agreement, provider credentials where applicable, approved materials, safety information, device inspections, trend reports, facility findings, staff training, corrective actions, treatment records, product holds, release decisions, and verification evidence.
      </p>
      <p className='my-4'>
        Track performance with measures that show control rather than activity volume. Useful indicators include repeat findings at the same device, overdue corrective actions, damaged door-seal recurrence, sanitation inspection completion, time from finding to hold, time from action to verification, lots affected per incident, and unexplained gaps in device records. A low trap count with missing checks is not good performance.
      </p>

      <div className='bg-amber-50 border border-amber-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3'>Minimum Incident File</h4>
        <ul className='space-y-2 text-sm text-gray-700'>
          <li>Incident number, date, reporter, exact zone, and device or stack reference</li>
          <li>Pest evidence, identification status, photographs, specimens, and count</li>
          <li>All affected and potentially exposed coffee lot codes and quantities</li>
          <li>Hold time, stock movements stopped, samples drawn, and test results</li>
          <li>Root cause, correction, preventive action, owner, and due date</li>
          <li>Product disposition, approver, customer or authority communication, and release date</li>
          <li>Effectiveness check showing that the source and recurrence risk were addressed</li>
        </ul>
      </div>

      <h3 id='buyer-review' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineCheckCircle className='w-8 h-8 text-amber-600' />
        9. Evaluate a Warehouse Before Placing Green Coffee
      </h3>
      <p className='my-4'>
        Buyers using an origin, port, bonded, or destination warehouse should review more than a pest-control certificate. Ask for the current site map, recent service and trend reports with client information redacted, open corrective actions, treatment policy, approved-material controls, quarantine capacity, stock-spacing rules, and a sample incident record. Walk the coffee zone during an audit if access is available.
      </p>

      <div className='grid md:grid-cols-2 gap-4 my-6'>
        <div className='border border-green-200 rounded-lg p-5 bg-green-50'>
          <h4 className='font-bold text-green-900 mb-2'>Strong Evidence</h4>
          <ul className='space-y-2 text-sm text-green-900 list-disc ml-5'>
            <li>Device IDs match a current map and complete records</li>
            <li>Findings are trended and linked to corrective action</li>
            <li>Held lots are visibly separated and blocked in inventory</li>
            <li>Doors, waste, spills, and moisture defects have named owners</li>
            <li>Release requires quality authorization</li>
          </ul>
        </div>
        <div className='border border-red-200 rounded-lg p-5 bg-red-50'>
          <h4 className='font-bold text-red-900 mb-2'>Warning Signs</h4>
          <ul className='space-y-2 text-sm text-red-900 list-disc ml-5'>
            <li>Contractor reports show only “serviced” with no findings</li>
            <li>Unnumbered traps move between visits</li>
            <li>Food, waste, chemicals, or old pallets share coffee zones</li>
            <li>Suspicious bags remain available for picking</li>
            <li>No one can explain who releases treated stock</li>
          </ul>
        </div>
      </div>

      <p className='my-4'>
        Include pest and sanitation controls in the broader <Link href='/insights/green-coffee-supplier-evaluation-checklist' className='text-amber-700 hover:underline font-bold'>green coffee supplier evaluation</Link>. For Ethiopian coffee, ask how the exporter preserves lot identity across dry milling, warehouse storage, bagging, and loading. Ethio Coffee Import and Export PLC works through a trusted sourcing network of cooperatives, washing stations, and farming communities, then coordinates export preparation through its Addis Ababa warehouse and office. Buyers should still define their own contract, sampling, storage, and release requirements.
      </p>

      <h3 id='implementation' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineBugAnt className='w-8 h-8 text-amber-600' />
        10. Put the Program in Place in 30 Days
      </h3>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left'>Timing</th>
              <th className='p-3 text-left'>Work</th>
              <th className='p-3 text-left'>Required Output</th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-200'>
            <tr>
              <td className='p-3 font-semibold'>Days 1 to 5</td>
              <td className='p-3'>Assign owners, inspect the site, list requirements, and identify vulnerable stock</td>
              <td className='p-3'>Risk assessment and immediate-action list</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='p-3 font-semibold'>Days 6 to 12</td>
              <td className='p-3'>Create the map, number devices, define zones, and correct sanitation or exclusion defects</td>
              <td className='p-3'>Controlled site map and corrective-action log</td>
            </tr>
            <tr>
              <td className='p-3 font-semibold'>Days 13 to 20</td>
              <td className='p-3'>Write receiving, hold, escalation, treatment approval, disposition, and release procedures</td>
              <td className='p-3'>Approved IPM procedure and incident form</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='p-3 font-semibold'>Days 21 to 25</td>
              <td className='p-3'>Train warehouse, quality, maintenance, cleaning, and purchasing teams</td>
              <td className='p-3'>Training record and competency check</td>
            </tr>
            <tr>
              <td className='p-3 font-semibold'>Days 26 to 30</td>
              <td className='p-3'>Run a mock finding from discovery through product release and review the evidence</td>
              <td className='p-3'>Completed drill, gaps, owners, and deadlines</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        Finish by scheduling a monthly internal trend review and a periodic program verification at a frequency justified by risk. The best green coffee warehouse pest control system makes the correct response routine: staff recognize evidence, protect traceability, hold product quickly, and close the cause before another lot is exposed.
      </p>

      <section id='faq' className='mb-12 bg-gray-50 rounded-xl p-8 border border-gray-200 mt-10'>
        <h3 className='text-2xl font-bold mb-6 text-gray-900 flex items-center gap-2'>
          <HiOutlineBugAnt className='text-amber-600' />
          Frequently Asked Questions About Green Coffee Warehouse Pest Control
        </h3>
        <div className='space-y-6'>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>What pests can infest stored green coffee?</h4>
            <p className='text-sm text-gray-600'>Coffee bean weevils and other stored-product insects can affect dried coffee, while rodents, birds, and general warehouse pests can damage bags or contaminate surfaces. Coffee berry borer damage may already be present from the field. Identification by a qualified professional helps distinguish incoming damage from active warehouse infestation.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Does one insect mean the whole green coffee lot is infested?</h4>
            <p className='text-sm text-gray-600'>Not necessarily. One finding requires containment and investigation, but disposition depends on species, life stage, location, packaging, lot evidence, nearby activity, and applicable rules. Hold the suspected stock, preserve the evidence, inspect outward, sample representatively, and let the authorized quality lead decide the lot&apos;s status.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Can a warehouse spray pesticide near green coffee bags?</h4>
            <p className='text-sm text-gray-600'>Only a legally permitted application that follows the product label, site procedure, food-safety controls, and any applicator requirements should occur. Protect coffee from residues and odors, consider organic restrictions, record affected lots, and verify re-entry and release conditions. Never apply an improvised household treatment around commercial food inventory.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>How often should coffee warehouse pest devices be checked?</h4>
            <p className='text-sm text-gray-600'>Set frequency through the site risk assessment, pest biology, season, zone, legal requirements, and provider guidance. High-risk doors, receiving bays, spill areas, and zones with prior activity need closer review. The schedule must be frequent enough to detect a change before it spreads, with every check recorded.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Do hermetic liners prevent green coffee infestation?</h4>
            <p className='text-sm text-gray-600'>An intact, correctly sealed hermetic liner reduces exposure to outside insects and moisture, but it does not replace warehouse controls. Pests may arrive inside coffee, damage outer packaging, or affect surrounding materials. Inspect liners at receipt and during storage, and quarantine any bag showing holes, failed seals, webbing, or live activity.</p>
          </div>
        </div>
      </section>

      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h3 className='font-bold text-xl mb-3'>Protect Ethiopian Coffee Quality from Origin to Release</h3>
        <p className='my-2'>
          Request current Ethiopian green coffee samples, lot specifications, packaging options, and export documentation from our Addis Ababa team. We help buyers connect approved quality to a clearly identified shipment through an origin-based sourcing and export process.
        </p>
        <div className='flex flex-wrap gap-4 mt-4'>
          <Link href='/offerings' className='bg-dark text-primary px-6 py-3 rounded font-bold hover:bg-gray-800 transition'>View Offerings</Link>
          <Link href='/contact-us' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>Request Samples</Link>
          <Link href='/ordering-info' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>How to Order</Link>
        </div>
      </div>

      <div className='my-10 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4'>Related Articles</h3>
        <div className='grid md:grid-cols-2 gap-4'>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Warehouse &amp; Inventory</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/green-coffee-shelf-life-storage-guide' className='text-amber-700 hover:underline'>Green Coffee Shelf Life and Storage</Link></li>
              <li>&bull; <Link href='/insights/green-coffee-inventory-management-roasters' className='text-amber-700 hover:underline'>Green Coffee Inventory Management</Link></li>
              <li>&bull; <Link href='/insights/green-coffee-receiving-inspection-checklist' className='text-amber-700 hover:underline'>Green Coffee Receiving Inspection</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Quality &amp; Food Safety</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/green-coffee-moisture-content-water-activity-guide' className='text-amber-700 hover:underline'>Moisture Content and Water Activity</Link></li>
              <li>&bull; <Link href='/insights/green-coffee-mycotoxin-testing-guide' className='text-amber-700 hover:underline'>Green Coffee Mycotoxin Testing</Link></li>
              <li>&bull; <Link href='/insights/green-coffee-pesticide-residue-testing-guide' className='text-amber-700 hover:underline'>Green Coffee Pesticide Residue Testing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Buying &amp; Traceability</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/green-coffee-supplier-evaluation-checklist' className='text-amber-700 hover:underline'>Green Coffee Supplier Evaluation</Link></li>
              <li>&bull; <Link href='/insights/green-coffee-sampling-protocol' className='text-amber-700 hover:underline'>Green Coffee Sampling Protocol</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-traceability-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Traceability</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Shipping &amp; Claims</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/green-coffee-container-loading-checklist' className='text-amber-700 hover:underline'>Green Coffee Container Loading</Link></li>
              <li>&bull; <Link href='/insights/green-coffee-quality-claims-guide' className='text-amber-700 hover:underline'>Green Coffee Quality Claims</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> Published by Ethio Coffee Import and Export PLC on {date}. This operational guide is educational and does not replace local food law, pesticide labels, professional pest identification, buyer specifications, or certification rules. Contact our team for current lot, packaging, sample, and shipment information.
        </p>
        <p className='text-sm text-gray-600 font-inconsolata mt-2'>
          <Link href='/insights' className='underline'>All Insights</Link> &middot; <Link href='/ethiopian-coffee-exporter' className='underline'>Export Services</Link> &middot; <Link href='/about' className='underline'>About</Link> &middot; <Link href='/contact-us' className='underline'>Contact</Link>
        </p>
      </div>
    </>
  )
}
