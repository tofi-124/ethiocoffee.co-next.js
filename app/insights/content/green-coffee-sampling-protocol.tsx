import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import {
  HiOutlineArchiveBox,
  HiOutlineBeaker,
  HiOutlineCheckCircle,
  HiOutlineClipboardDocumentList,
  HiOutlineExclamationTriangle,
  HiOutlineLightBulb,
  HiOutlineMap,
  HiOutlineQuestionMarkCircle,
  HiOutlineScale,
  HiOutlineShieldCheck,
  HiOutlineTag,
} from 'react-icons/hi2'

type InsightContentProps = { title: string; date: string; large_image_url: string }

export default function GreenCoffeeSamplingProtocol({
  title,
  date,
  large_image_url,
}: InsightContentProps) {
  return (
    <>
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>{title}</h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        A practical protocol for drawing, combining, dividing, sealing, and tracing representative samples from bagged green coffee lots
      </h2>

      <figure>
        <figcaption className='font-inconsolata my-2'>{title}</figcaption>
        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Green coffee sampling protocol with unroasted coffee beans prepared for buyer quality control'
            fill
            objectFit='cover'
            className='w-full h-full'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>
        <figcaption className='font-inconsolata text-xs my-1 text-gray-600'>
          Photo by Sara Gomes on Unsplash.
        </figcaption>
      </figure>

      <div className='my-4 text-sm bg-amber-50 p-4 rounded-lg border border-amber-200'>
        <span className='font-semibold'>Category:</span>
        <span className='ml-2'>Quality Control / Green Coffee Sampling / Procurement / Roaster Resources</span>
      </div>

      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-8 border border-amber-200'>
        <h3 className='font-bold text-xl mb-3 flex items-center gap-2'>
          <HiOutlineLightBulb className='text-amber-400 flex-shrink-0' /> Key Takeaway
        </h3>
        <p className='text-sm leading-relaxed'>
          A green coffee sampling protocol is valid only when the sample represents a defined lot. Freeze the lot before sampling, select bags across its full layout, draw comparable increments, combine and mix them completely, divide the aggregate without choosing attractive beans, then seal and label every final sample. Record who sampled, where, when, how, and for which test. Cupping skill cannot rescue a biased sample.
        </p>
      </div>

      <div className='my-8 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <HiOutlineClipboardDocumentList className='text-amber-600' /> In This Guide
        </h3>
        <ol className='space-y-2 text-sm'>
          <li><a href='#purpose' className='text-amber-700 hover:underline'>1. What a sampling protocol must prove</a></li>
          <li><a href='#lot-plan' className='text-amber-700 hover:underline'>2. Define the lot and sampling plan</a></li>
          <li><a href='#equipment' className='text-amber-700 hover:underline'>3. Prepare equipment and records</a></li>
          <li><a href='#procedure' className='text-amber-700 hover:underline'>4. Follow the nine-step sampling procedure</a></li>
          <li><a href='#quantity' className='text-amber-700 hover:underline'>5. Set sample quantity by intended test</a></li>
          <li><a href='#stages' className='text-amber-700 hover:underline'>6. Control offer, pre-shipment, and arrival samples</a></li>
          <li><a href='#ethiopian-lots' className='text-amber-700 hover:underline'>7. Apply the protocol to Ethiopian lots</a></li>
          <li><a href='#record' className='text-amber-700 hover:underline'>8. Use the sampling record and release gate</a></li>
          <li><a href='#faq' className='text-amber-700 hover:underline'>9. FAQ</a></li>
        </ol>
      </div>

      <p className='text-lg leading-relaxed my-4'>
        A <strong>green coffee sampling protocol</strong> protects the decision before the laboratory or cupping room ever sees a bean. If a warehouse employee scoops coffee from the easiest open bag, the moisture reading, defect count, pesticide result, and cup score describe that scoop. They do not necessarily describe the contracted lot.
      </p>
      <p className='my-4'>
        Buyers often standardize roasting and cupping while leaving field sampling to habit. That reverses the risk. A repeatable evaluation applied to an unrepresentative sample produces a precise but weak conclusion. The correct workflow starts with lot identity and ends with a sealed record that another party could audit.
      </p>
      <p className='my-4'>
        This guide gives importers, roasters, exporters, and independent inspectors a usable control plan for bagged green coffee. It complements our <Link href='/insights/green-coffee-sample-roasting-protocol' className='text-amber-700 hover:underline font-semibold'>green coffee sample roasting protocol</Link> and <Link href='/insights/ethiopian-coffee-sample-approval-guide' className='text-amber-700 hover:underline font-semibold'>sample approval guide</Link>. Those articles govern what happens after a representative sample exists.
      </p>

      <h3 id='purpose' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineShieldCheck className='w-8 h-8 text-amber-600' />
        1. What a Green Coffee Sampling Protocol Must Prove
      </h3>
      <p className='my-4'>
        Sampling is the controlled reduction of a large lot into a smaller quantity that preserves the lot&apos;s relevant characteristics closely enough for a stated decision. The decision may be offer screening, pre-shipment release, arrival acceptance, food-safety testing, or claim investigation. Each purpose can require a different plan and quantity.
      </p>
      <p className='my-4'>
        <a href='https://www.iso.org/standard/9786.html' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline font-semibold'>ISO 4072:1982</a> remains the current international standard for sampling green coffee shipped in ten bags or more. Its scope includes contract verification, sale offers, quality inspection, technical analysis, arbitration, and retained reference samples. The standard addresses increments, aggregate and laboratory samples, packing, marking, storage, and transport. Buyers should obtain the full standard when their contract requires ISO conformity.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Evidence question</th>
              <th className='p-3 text-left font-bold'>The record should show</th>
              <th className='p-3 text-left font-bold'>Weak practice</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>What did it represent?</td>
              <td className='p-3'>One identified, physically separated lot and its represented bag count or mass</td>
              <td className='p-3'>“Current Ethiopian stock” with no lot boundary</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>How was it selected?</td>
              <td className='p-3'>A planned random or systematic selection across the accessible layout</td>
              <td className='p-3'>Front bags chosen because they were convenient</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>How was it reduced?</td>
              <td className='p-3'>All increments combined, mixed, and divided by a controlled method</td>
              <td className='p-3'>Final sample scooped from the top of an unmixed bucket</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Can it be challenged?</td>
              <td className='p-3'>Sealed buyer, seller, and retention samples with matching IDs</td>
              <td className='p-3'>One unsealed pouch with an informal label</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 id='lot-plan' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineMap className='w-8 h-8 text-amber-600' />
        2. Define the Lot Before You Select Bags
      </h3>
      <p className='my-4'>
        Do not begin with a sample size. Begin with the lot. Record its code, crop, origin, process, grade or preparation, warehouse location, bag count, net weight, packaging, and production status. Coffee from different mills, processing runs, grades, crop periods, or moisture histories should not be silently combined under one sampling identity.
      </p>
      <p className='my-4'>
        Freeze the lot for the duration of sampling. No bags should enter, leave, or be replaced while increments are being drawn. If the warehouse must move coffee, capture the before-and-after map and reconcile every selected bag. Sampling a moving target breaks traceability even when the physical technique is sound.
      </p>

      <div className='bg-blue-50 border border-blue-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3'>Write the plan as a decision rule</h4>
        <p className='text-sm text-gray-700'>
          Example: “Sample lot GUJ-W-082 after final milling and bagging. Select numbered bags by a recorded random list across every stack and height band. Draw one comparable increment per selected bag, create one aggregate sample, mix, divide, and seal four final samples for sensory and physical review, buyer retention, seller retention, and referee testing.” The contract or competent authority should set the required selection scale.
        </p>
      </div>

      <p className='my-4'>
        A bag plan must cover the lot&apos;s geography. Include different stacks, pallet positions, rows, depths, and height bands. If the lot is accessible only from the front, pause and restack or document the limitation. Convenience sampling can miss moisture gradients, screen segregation, a localized taint, or a different preparation hidden deeper in the stack.
      </p>
      <p className='my-4'>
        For regulatory sampling, follow the responsible authority&apos;s method. The <a href='https://sampling-manual-customs-taxation.ec.europa.eu/sampling-procedures-cards/food/coffee-tea-spices-beans-nuts-and-dried-fruit_en' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline font-semibold'>European Commission SAMANCTA guidance</a> calls for incremental samples selected randomly or systematically throughout a consignment, thorough mixing before division, food-safe containers, and protection from light, humidity, and contamination. A commercial buyer plan does not replace an official sampling instruction.
      </p>

      <h3 id='equipment' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineArchiveBox className='w-8 h-8 text-amber-600' />
        3. Prepare Clean Equipment and Controlled Records
      </h3>
      <p className='my-4'>
        Stage equipment before opening a bag. Use a green coffee trier or another agreed food-safe sampling tool, a clean collection container large enough for the aggregate, a riffle or cross-divider where available, a calibrated scale, tamper-evident seals, barrier pouches, labels, a camera, and the approved sampling form. Keep spare closure materials for jute and hermetic liners.
      </p>
      <ul className='list-disc ml-5 my-4 space-y-3'>
        <li><strong>Clean between lots:</strong> remove beans, dust, and odor from the trier, divider, tray, and container. Record any cleaning agent and ensure no residue contacts the coffee.</li>
        <li><strong>Control carryover:</strong> finish, seal, and clear one lot before exposing the next. A few beans from another lot can distort a micro-lot defect count or residue result.</li>
        <li><strong>Protect packaging:</strong> use a planned entry point and approved repair method. Do not leave punctured jute, torn liners, or exposed coffee after sampling.</li>
        <li><strong>Separate tools by purpose:</strong> food-safety laboratories may supply their own containers or require untouched seals. Follow the laboratory brief before collection.</li>
        <li><strong>Manage safety:</strong> assess stack stability, dust exposure, lifting, trier use, and access. Sampling does not justify entering an unsafe stack or working beneath moving equipment.</li>
      </ul>

      <h3 id='procedure' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineBeaker className='w-8 h-8 text-amber-600' />
        4. The Nine-Step Green Coffee Sampling Procedure
      </h3>

      <div className='space-y-5 my-6'>
        <div className='border-l-4 border-amber-500 pl-5'>
          <h4 className='font-bold text-lg'>Step 1: Authorize the sample event</h4>
          <p className='text-sm text-gray-700 mt-1'>Name the sampler, witnesses, lot, purpose, governing contract or method, planned final samples, and release authority. Confirm that the coffee has reached the stage the sample claims to represent.</p>
        </div>
        <div className='border-l-4 border-amber-500 pl-5'>
          <h4 className='font-bold text-lg'>Step 2: Reconcile and map the lot</h4>
          <p className='text-sm text-gray-700 mt-1'>Count bags or verify warehouse records. Photograph marks and the overall layout. Record broken bags, wet areas, odors, pests, mixed markings, or packaging differences before disturbing the stock.</p>
        </div>
        <div className='border-l-4 border-amber-500 pl-5'>
          <h4 className='font-bold text-lg'>Step 3: Select sampling units</h4>
          <p className='text-sm text-gray-700 mt-1'>Generate or document the selection before drawing coffee. Spread selections through all accessible positions. Increase scrutiny or isolate a sublot when visible variability suggests the declared lot is not homogeneous.</p>
        </div>
        <div className='border-l-4 border-amber-500 pl-5'>
          <h4 className='font-bold text-lg'>Step 4: Draw comparable increments</h4>
          <p className='text-sm text-gray-700 mt-1'>Use the same tool, approximate depth, and amount for each selected unit unless the written method says otherwise. Capture material across the bag rather than skimming beans beside the opening. Record any unit that cannot be sampled as planned.</p>
        </div>
        <div className='border-l-4 border-amber-500 pl-5'>
          <h4 className='font-bold text-lg'>Step 5: Repair and account for every bag</h4>
          <p className='text-sm text-gray-700 mt-1'>Close punctures and reseal liners immediately. Mark the bag as sampled when the protocol allows it. Match every increment to the bag plan so substitutions and omissions remain visible.</p>
        </div>
        <div className='border-l-4 border-amber-500 pl-5'>
          <h4 className='font-bold text-lg'>Step 6: Build and inspect the aggregate</h4>
          <p className='text-sm text-gray-700 mt-1'>Combine every increment in the clean collection container. Note unusual differences without removing them. A moldy, black, broken, or small bean belongs in the aggregate if it was legitimately drawn.</p>
        </div>
        <div className='border-l-4 border-amber-500 pl-5'>
          <h4 className='font-bold text-lg'>Step 7: Mix and divide</h4>
          <p className='text-sm text-gray-700 mt-1'>Mix completely, then reduce with a riffle divider or a documented quartering method. Do not hand-pick or scoop the most uniform portion. Bean size and density can segregate during pouring, so remix before each division.</p>
        </div>
        <div className='border-l-4 border-amber-500 pl-5'>
          <h4 className='font-bold text-lg'>Step 8: Allocate final samples</h4>
          <p className='text-sm text-gray-700 mt-1'>Weigh the quantities required for physical, sensory, chemical, buyer-retention, seller-retention, and referee purposes. Create separate sealed units when opening one pouch would compromise another test or the custody record.</p>
        </div>
        <div className='border-l-4 border-amber-500 pl-5'>
          <h4 className='font-bold text-lg'>Step 9: Seal, label, and transfer custody</h4>
          <p className='text-sm text-gray-700 mt-1'>Apply unique IDs and tamper-evident seals. Record seal numbers, weights, recipients, date, time, condition, and each handoff. Ship promptly in odor-free, moisture-protective packaging and retain tracking evidence.</p>
        </div>
      </div>

      <h3 id='quantity' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineScale className='w-8 h-8 text-amber-600' />
        5. Set Sample Quantity From the Tests, Not Habit
      </h3>
      <p className='my-4'>
        There is no single parcel weight that satisfies every buyer, laboratory, and legal purpose. Work backward from the receiving methods, repeat tests, retention needs, and the number of parties. Ask the laboratory for its minimum quantity and packaging instructions before sampling, especially for pesticide residues, mycotoxins, microbiology, or dispute work.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Purpose</th>
              <th className='p-3 text-left font-bold'>Quantity planning question</th>
              <th className='p-3 text-left font-bold'>Packaging control</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Cupping and repeat roasts</td>
              <td className='p-3'>How many roast repetitions, cups, and reviewers are required?</td>
              <td className='p-3'>Barrier pouch, lot ID, sample stage, and seal</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Physical grading</td>
              <td className='p-3'>What sample mass does the named grading method require, plus a repeat?</td>
              <td className='p-3'>Separate pouch if grading will consume or alter the sample</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Moisture and water activity</td>
              <td className='p-3'>How many instruments, replicates, and reference checks are planned?</td>
              <td className='p-3'>Low-permeability seal opened only at measurement</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Chemical or food-safety testing</td>
              <td className='p-3'>What minimum, counter-sample, and chain-of-custody rules does the lab require?</td>
              <td className='p-3'>Laboratory-approved container and tamper seal</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Retention or referee sample</td>
              <td className='p-3'>What tests may need repeating, by whom, and before what expiry?</td>
              <td className='p-3'>Independent sealed unit stored under recorded conditions</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        Current buyer requirements show why contracts must be explicit. <a href='https://www.jdepeets.com/siteassets/home/about-us/policies/jde-peets-kde-green-coffee-sourcing-terms.pdf' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline font-semibold'>JDE Peet&apos;s green coffee sourcing terms</a>, for example, request 300 grams per purchase order for a pre-shipment sample and 1 kilogram for certified organic coffee when additional testing may be required. Those figures are one buyer&apos;s requirements, not universal standards.
      </p>

      <h3 id='stages' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineCheckCircle className='w-8 h-8 text-amber-600' />
        6. Make Each Sample Stage Answer One Question
      </h3>
      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Stage</th>
              <th className='p-3 text-left font-bold'>Decision</th>
              <th className='p-3 text-left font-bold'>Required identity</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Type sample</td>
              <td className='p-3'>Does this general quality direction interest the buyer?</td>
              <td className='p-3'>Clearly marked non-representative; never presented as a finished lot</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Offer sample</td>
              <td className='p-3'>Should the buyer contract the identified available lot?</td>
              <td className='p-3'>Lot, available quantity, location, preparation status, and sampling date</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Pre-shipment sample</td>
              <td className='p-3'>Does the final prepared lot meet the contract before release?</td>
              <td className='p-3'>Contract, final bagged lot, represented volume, mill date, and seal</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Shipment sample</td>
              <td className='p-3'>What quality was loaded into the named container?</td>
              <td className='p-3'>Container, seal, load date, bag range, and bill of lading reference</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Arrival sample</td>
              <td className='p-3'>Did received coffee remain within the contract and approved reference?</td>
              <td className='p-3'>Receiving event, container seal, warehouse lot, condition, and sampling map</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className='my-4'>
        Never compare two stages as if agricultural material must be sensory-identical after weeks of transport. Compare each against written tolerances, disqualifying defects, and the approved reference. Our <Link href='/insights/green-coffee-specification-sheet-template' className='text-amber-700 hover:underline font-semibold'>green coffee specification sheet</Link> explains how to define those limits, while the <Link href='/insights/green-coffee-receiving-inspection-checklist' className='text-amber-700 hover:underline font-semibold'>receiving inspection checklist</Link> governs the arrival event.
      </p>

      <h3 id='ethiopian-lots' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineTag className='w-8 h-8 text-amber-600' />
        7. Apply the Protocol to Ethiopian Green Coffee Lots
      </h3>
      <p className='my-4'>
        Ethiopian coffee can move from many smallholders through a cooperative, washing station, dry mill, and export warehouse. That history does not make a finished export lot impossible to sample. It makes the final lot boundary and preparation stage especially important. The sampler should identify the export lot that actually exists after cleaning, grading, sorting, and bagging.
      </p>
      <ul className='list-disc ml-5 my-4 space-y-3'>
        <li><strong>Community and washing-station lots:</strong> record the station or cooperative, collection area, crop, process, dry-mill run, grade, and export lot code. Do not imply that one increment represents each contributing farm.</li>
        <li><strong>Natural coffees:</strong> inspect mixing carefully because bean density, screen, and visible preparation can segregate during handling. Remix the aggregate before dividing.</li>
        <li><strong>Small micro-lots:</strong> sampling every bag may be practical and commercially sensible, but the contract should still define increments, mixing, division, and retention.</li>
        <li><strong>Rebagged or reworked lots:</strong> treat a material change in preparation as a new sampling event. An earlier offer sample cannot prove the state of a later color-sorted or blended lot.</li>
        <li><strong>Hermetic liners:</strong> agree on opening and repair procedures before sampling. Record damaged seals and avoid leaving punctures that change moisture protection.</li>
      </ul>
      <p className='my-4'>
        Buyers evaluating Ethiopian coffees should connect the sample ID to the same fields used in the <Link href='/insights/ethiopian-coffee-traceability-guide' className='text-amber-700 hover:underline font-semibold'>Ethiopian coffee traceability record</Link>. Origin descriptions are useful, but bag marks, lot codes, dates, and represented volume are what preserve commercial identity.
      </p>

      <h3 id='record' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineClipboardDocumentList className='w-8 h-8 text-amber-600' />
        8. Use One Sampling Record and a Clear Release Gate
      </h3>
      <p className='my-4'>
        The final record should travel with the sample results. At minimum, capture the unique sample ID, contract and lot references, purpose, represented quantity, bag count, selection method, selected bag numbers or positions, increment method, aggregate weight, division method, final sample weights, seal numbers, date, time, place, sampler, witnesses, anomalies, photographs, storage conditions, and custody transfers.
      </p>

      <div className='bg-red-50 border border-red-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3 flex items-center gap-2'>
          <HiOutlineExclamationTriangle className='text-red-600' /> Stop and investigate when
        </h4>
        <ul className='list-disc ml-5 space-y-2 text-sm text-gray-700'>
          <li>bag marks, counts, or preparation differ from the declared lot;</li>
          <li>selected bags are inaccessible and replacements are chosen informally;</li>
          <li>wet bags, odors, pests, visible mold, or large appearance differences suggest a sublot;</li>
          <li>the aggregate is too small for the required tests and retained samples;</li>
          <li>a seal breaks, a label changes, or custody cannot be reconstructed; or</li>
          <li>sampling occurs before final milling even though the sample is labeled pre-shipment.</li>
        </ul>
      </div>

      <p className='my-4'>
        Release authority should be separate from sample collection when practical. The sampler records what happened; the quality or commercial owner compares valid results with the contract and approves, holds, resamples, or rejects. A resample is justified by a documented sampling failure or agreed confirmation rule, not by disappointment with a valid result.
      </p>

      <h3 id='faq' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineQuestionMarkCircle className='w-8 h-8 text-amber-600' />
        9. Green Coffee Sampling Protocol FAQ
      </h3>
      <div className='space-y-4 my-6'>
        <div className='bg-gray-50 border border-gray-200 rounded-lg p-5'>
          <h4 className='font-bold'>How many green coffee bags should be sampled?</h4>
          <p className='text-sm text-gray-700 mt-2'>The governing contract, standard, laboratory, or authority should set the selection scale. Do not invent a universal percentage. The plan must still distribute selected bags across the full lot layout. When visible variability, reworking, mixed marks, or poor access threatens representation, isolate sublots or expand the plan before release.</p>
        </div>
        <div className='bg-gray-50 border border-gray-200 rounded-lg p-5'>
          <h4 className='font-bold'>What is a composite sample of green coffee?</h4>
          <p className='text-sm text-gray-700 mt-2'>A composite, or aggregate, sample is the combined material from all increments drawn under one lot plan. It must be mixed thoroughly before division into laboratory, buyer, seller, or retention samples. Combining increments without mixing them does not remove segregation and can make each final pouch materially different.</p>
        </div>
        <div className='bg-gray-50 border border-gray-200 rounded-lg p-5'>
          <h4 className='font-bold'>How much green coffee is needed for a sample?</h4>
          <p className='text-sm text-gray-700 mt-2'>Quantity depends on the intended tests, repetitions, recipients, and retention period. Obtain written requirements from the buyer and laboratory first, then make the aggregate large enough for every sealed final sample. Sensory review, physical grading, moisture measurement, chemical analysis, and referee testing may each need separate quantities.</p>
        </div>
        <div className='bg-gray-50 border border-gray-200 rounded-lg p-5'>
          <h4 className='font-bold'>Can an offer sample also be a pre-shipment sample?</h4>
          <p className='text-sm text-gray-700 mt-2'>Yes, but only when it was drawn from the same final prepared lot and the contract permits that dual role. If coffee is later milled, blended, sorted, rebagged, or materially delayed, draw a new pre-shipment sample. Labels must state the stage honestly so approval attaches to the correct coffee.</p>
        </div>
        <div className='bg-gray-50 border border-gray-200 rounded-lg p-5'>
          <h4 className='font-bold'>How long should a green coffee retention sample be kept?</h4>
          <p className='text-sm text-gray-700 mt-2'>Set the retention period in the contract or quality procedure. It should cover the relevant approval, arrival, notice, claim, and dispute windows, plus enough time for agreed retesting. Store the sealed sample in stable, dry, odor-free conditions and record disposal after the authorized period ends.</p>
        </div>
      </div>

      <h3 className='text-2xl font-extrabold mt-12 mb-4'>Build Decisions on Representative Coffee</h3>
      <p className='my-4'>
        A reliable <strong>green coffee sampling protocol</strong> makes the link between a commercial lot and every result used to accept it. Define the lot, select across the whole layout, preserve every legitimate increment, divide without bias, and protect the custody record. When those controls are visible, buyers and exporters can discuss quality from shared evidence instead of arguing over whose pouch was “more representative.”
      </p>

      <div className='bg-amber-100 border border-amber-300 rounded-xl p-8 my-10'>
        <h3 className='text-2xl font-extrabold mb-3'>Evaluate Ethiopian Lots With Clear Sample Control</h3>
        <p className='text-gray-800 mb-6'>
          Review current Ethiopian coffee offerings, request samples tied to active lots, and align specifications, sample stages, and shipment timing with our origin-connected export team.
        </p>
        <div className='flex flex-wrap gap-3'>
          <Link href='/offerings' className='bg-dark text-primary px-5 py-3 rounded-md font-bold hover:opacity-90'>View Offerings</Link>
          <Link href='/contact-us' className='bg-amber-600 text-white px-5 py-3 rounded-md font-bold hover:bg-amber-700'>Request Samples</Link>
          <Link href='/ordering-info' className='border border-dark text-dark px-5 py-3 rounded-md font-bold hover:bg-amber-50'>How to Order</Link>
        </div>
      </div>

      <div className='my-10'>
        <h3 className='text-2xl font-extrabold mb-6'>Related Articles</h3>
        <div className='grid md:grid-cols-2 gap-8'>
          <div>
            <h4 className='font-bold text-lg mb-3'>Samples &amp; Evaluation</h4>
            <ul className='space-y-2 text-sm'>
              <li>&bull; <Link href='/insights/ethiopian-coffee-sample-approval-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Sample Approval Guide</Link></li>
              <li>&bull; <Link href='/insights/green-coffee-sample-roasting-protocol' className='text-amber-700 hover:underline'>Green Coffee Sample Roasting Protocol</Link></li>
              <li>&bull; <Link href='/insights/how-to-cup-evaluate-ethiopian-coffee-samples' className='text-amber-700 hover:underline'>How to Cup Ethiopian Coffee Samples</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-bold text-lg mb-3'>Specifications &amp; Claims</h4>
            <ul className='space-y-2 text-sm'>
              <li>&bull; <Link href='/insights/green-coffee-specification-sheet-template' className='text-amber-700 hover:underline'>Green Coffee Specification Sheet</Link></li>
              <li>&bull; <Link href='/insights/green-coffee-quality-claims-guide' className='text-amber-700 hover:underline'>Green Coffee Quality Claims Guide</Link></li>
              <li>&bull; <Link href='/insights/green-coffee-quality-control-defects-grading' className='text-amber-700 hover:underline'>Green Coffee Defects and Grading</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-bold text-lg mb-3'>Laboratory Controls</h4>
            <ul className='space-y-2 text-sm'>
              <li>&bull; <Link href='/insights/green-coffee-moisture-content-water-activity-guide' className='text-amber-700 hover:underline'>Moisture Content and Water Activity</Link></li>
              <li>&bull; <Link href='/insights/green-coffee-pesticide-residue-testing-guide' className='text-amber-700 hover:underline'>Pesticide Residue Testing</Link></li>
              <li>&bull; <Link href='/insights/green-coffee-mycotoxin-testing-guide' className='text-amber-700 hover:underline'>Mycotoxin Testing for Green Coffee</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-bold text-lg mb-3'>Arrival &amp; Supplier Control</h4>
            <ul className='space-y-2 text-sm'>
              <li>&bull; <Link href='/insights/green-coffee-receiving-inspection-checklist' className='text-amber-700 hover:underline'>Green Coffee Receiving Inspection</Link></li>
              <li>&bull; <Link href='/insights/green-coffee-supplier-evaluation-checklist' className='text-amber-700 hover:underline'>Green Coffee Supplier Evaluation</Link></li>
              <li>&bull; <Link href='/insights/green-coffee-container-loading-checklist' className='text-amber-700 hover:underline'>Green Coffee Container Loading</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> Published on {date} by Ethio Coffee Import and Export PLC, an origin-connected Ethiopian coffee exporter with three decades of sourcing heritage. Sampling requirements vary by contract, test, and destination; contact us for current lot and sample information.
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
