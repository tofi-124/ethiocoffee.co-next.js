import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import {
  HiOutlineBeaker,
  HiOutlineChartBar,
  HiOutlineClipboardDocumentCheck,
  HiOutlineClipboardDocumentList,
  HiOutlineCube,
  HiOutlineExclamationTriangle,
  HiOutlineFire,
  HiOutlineLightBulb,
  HiOutlineQuestionMarkCircle,
  HiOutlineScale,
} from 'react-icons/hi2'

type InsightContentProps = { title: string; date: string; large_image_url: string }

export default function GreenCoffeeDensityQualityControlProtocol({
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
        How buyers and roasters can measure green coffee density, control method variation, and turn one physical reading into a useful lot decision
      </h2>

      <figure>
        <figcaption className='font-inconsolata my-2'>{title}</figcaption>
        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Green coffee density quality control inspection of unroasted beans through a magnifying glass'
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
        <span className='ml-2'>Quality Control / Green Coffee Density / Lot Specifications / Roaster Resources</span>
      </div>

      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-8 border border-amber-200'>
        <h3 className='font-bold text-xl mb-3 flex items-center gap-2'>
          <HiOutlineLightBulb className='text-amber-400 flex-shrink-0' />
          Key Takeaway
        </h3>
        <p className='text-sm leading-relaxed'>
          Green coffee density is useful only when the measurement method travels with the number. Record free-flow bulk density in grams per litre, use the same vessel and filling technique, take three readings, and report the median with moisture, sample stage, lot code, and measurement date. Buyers should use density as a trend and consistency signal, not as a universal quality grade. A result that shifts between an approved pre-shipment sample and arrival deserves investigation, while a stable result gives the roasting team a stronger starting point for production trials.
        </p>
      </div>

      <div className='my-8 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <HiOutlineClipboardDocumentList className='text-amber-600' /> In This Guide
        </h3>
        <ol className='space-y-2 text-sm'>
          <li><a href='#definition' className='text-amber-700 hover:underline'>1. Define the density number before using it</a></li>
          <li><a href='#measurement' className='text-amber-700 hover:underline'>2. Run a repeatable three-reading test</a></li>
          <li><a href='#interpretation' className='text-amber-700 hover:underline'>3. Interpret density without inventing a quality grade</a></li>
          <li><a href='#ethiopian-lots' className='text-amber-700 hover:underline'>4. Read Ethiopian lot density in context</a></li>
          <li><a href='#specification' className='text-amber-700 hover:underline'>5. Put density into a usable buying specification</a></li>
          <li><a href='#case' className='text-amber-700 hover:underline'>6. Apply the protocol in a roaster case</a></li>
          <li><a href='#handoff' className='text-amber-700 hover:underline'>7. Hand the result to production</a></li>
          <li><a href='#red-flags' className='text-amber-700 hover:underline'>8. Investigate the right density red flags</a></li>
          <li><a href='#faq' className='text-amber-700 hover:underline'>9. Frequently asked questions</a></li>
        </ol>
      </div>

      <p className='text-lg leading-relaxed my-4'>
        <span className='font-bold'>Green coffee density</span> often appears on a lot sheet as a confident three-digit number, then disappears from the buying decision because nobody knows how it was produced. That wastes a valuable quality-control signal. Density can help an importer detect lot inconsistency, give a roaster a better production starting point, and document physical change after shipment, but only when origin and destination teams use a shared protocol.
      </p>
      <p className='my-4'>
        The central problem is method variation. Scooping, pouring, tapping, vessel shape, sample temperature, bean moisture, and even the way an operator levels the top can change the reading. A supplier may report 720 g/L and a buyer may record 695 g/L without either instrument being faulty. Treating those results as directly equivalent creates false alarms. Ignoring them entirely throws away evidence.
      </p>
      <p className='my-4'>
        This protocol gives green buyers, importer quality teams, and production roasters one controlled workflow. It does not replace cupping, physical grading, or the <Link href='/insights/green-coffee-moisture-content-water-activity-guide' className='text-amber-700 hover:underline font-semibold'>moisture and water activity checks</Link> that establish storage risk. It adds a repeatable structural measure that connects the offer, approval, arrival, and roast-planning stages.
      </p>

      <h3 id='definition' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineCube className='w-8 h-8 text-amber-600' />
        1. Define the Green Coffee Density Number Before Using It
      </h3>
      <p className='my-4'>
        Green coffee bulk density is the mass of whole beans occupying a known volume, including the air spaces between them. In commercial quality control it is normally expressed in grams per litre (g/L). The number describes the sample and the way it packed into the vessel, not the solid material density of an individual bean.
      </p>
      <p className='my-4'>
        The distinction matters because bean shape and size affect how much open space remains in a filled container. The <a href='https://www.iso.org/standard/13098.html' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline font-semibold'>ISO 6669:1995 standard</a>, last confirmed by ISO in 2018 and under review in 2026, defines a routine free-flow method for whole green and roasted coffee. “Free-flow” means the sample moves from one container into another without intentional compaction.
      </p>
      <div className='bg-blue-50 border border-blue-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3'>Use one clear label</h4>
        <p className='text-sm text-gray-700'>
          Write “free-flow bulk density, g/L” in the lot record. Do not shorten it to “hardness,” “specific gravity,” or “bean density” if the test used a volume vessel and a scale. Those labels can refer to different physical properties and make supplier data impossible to reproduce.
        </p>
      </div>
      <p className='my-4'>
        Density belongs beside moisture, not in place of it. Water contributes mass, so a wetter sample can produce a higher g/L result even if its cellular structure has not changed. Screen distribution also affects packing behavior. Buyers should link to the full <Link href='/insights/ethiopian-coffee-screen-size-guide' className='text-amber-700 hover:underline font-semibold'>Ethiopian coffee screen size guide</Link> rather than trying to infer size from density alone.
      </p>

      <h3 id='measurement' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineBeaker className='w-8 h-8 text-amber-600' />
        2. Run a Repeatable Three-Reading Density Test
      </h3>
      <p className='my-4'>
        A production-ready density test needs a representative sample, a known-volume vessel, a scale readable to at least 0.1 gram, and a written filling method. The test itself takes minutes. Repeatability depends on doing the small actions the same way every time.
      </p>
      <ol className='font-inconsolata my-6 list-decimal ml-5 space-y-4'>
        <li>
          <span className='font-bold'>Condition and identify the sample.</span> Keep it sealed in the QC room until its temperature stabilizes. Record lot code, sample stage, crop, process, date, room temperature, and current moisture reading.
        </li>
        <li>
          <span className='font-bold'>Verify the vessel volume.</span> Use a rigid 250 mL, 500 mL, or 1 L vessel with a level rim. Mark one vessel as the lab standard and do not substitute a cup with a different shape halfway through the season.
        </li>
        <li>
          <span className='font-bold'>Tare the vessel.</span> Place the clean, empty vessel on the scale and zero it. Confirm the display returns to zero before each repeat.
        </li>
        <li>
          <span className='font-bold'>Pour from a fixed height.</span> Let beans flow freely into the center until the vessel is slightly overfilled. Do not shake, press, or tap the sides because compaction changes the result.
        </li>
        <li>
          <span className='font-bold'>Level once.</span> Draw a straight edge across the rim without pushing beans downward. Remove loose beans from the outside and weigh the filled vessel.
        </li>
        <li>
          <span className='font-bold'>Calculate g/L.</span> Divide coffee mass in grams by vessel volume in litres. A 250 mL vessel containing 178.5 g produces 714 g/L because 178.5 ÷ 0.25 = 714.
        </li>
        <li>
          <span className='font-bold'>Empty and repeat twice.</span> Remix the composite sample gently before each fill. Report all three readings and use the median, which is less affected by one poor fill.
        </li>
      </ol>
      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Field</th>
              <th className='p-3 text-left font-bold'>Example record</th>
              <th className='p-3 text-left font-bold'>Why it matters</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Sample identity</td>
              <td className='p-3'>GUJ-NAT-26-041, PSS</td>
              <td className='p-3'>Ties the number to the approved export lot</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Method</td>
              <td className='p-3'>Free-flow, 250 mL vessel</td>
              <td className='p-3'>Makes destination replication possible</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Readings</td>
              <td className='p-3'>712, 716, 714 g/L</td>
              <td className='p-3'>Shows operator and sample variation</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Reported result</td>
              <td className='p-3'>Median 714 g/L</td>
              <td className='p-3'>Creates one controlled reference value</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Moisture and date</td>
              <td className='p-3'>11.1%, Jul 21, 2026</td>
              <td className='p-3'>Provides the condition behind the mass reading</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className='my-4'>
        The <a href='https://wcc.coffee/rules-regulations' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline font-semibold'>2026 World Coffee Roasting Championship materials</a> include green evaluation documents alongside the roast plan and scoresheets. That professional context is useful: density is not trivia. It is one recorded input in a broader green evaluation and roasting workflow.
      </p>

      <h3 id='interpretation' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineChartBar className='w-8 h-8 text-amber-600' />
        3. Interpret Density Without Inventing a Quality Grade
      </h3>
      <p className='my-4'>
        A density result becomes useful when it is evaluated against the same lot, the same program, or a method-controlled historical baseline. No universal g/L threshold proves that a coffee is specialty grade, high altitude, clean in the cup, or suitable for a specific roast. Density supports a decision; it does not make the decision by itself.
      </p>
      <div className='grid md:grid-cols-2 gap-4 my-6'>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Strong use of the number</h4>
          <p className='text-sm text-gray-700'>
            Track a named lot across offer, pre-shipment, and arrival samples. Flag a change only after checking method, moisture, screen distribution, and sampling. Add the confirmed reading to the roast brief and retain it with cupping results.
          </p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Weak use of the number</h4>
          <p className='text-sm text-gray-700'>
            Reject a lot because its density sits below an internet benchmark, assume a dense coffee must cup well, or transfer a roast profile solely because two lots share one g/L value.
          </p>
        </div>
      </div>
      <p className='my-4'>
        Start with the spread among the three repeats. If the readings are tightly grouped, the operator and sample are behaving consistently. If one repeat is far from the other two, run the set again before contacting the supplier. A wide spread often signals an inconsistent pour, an irregular sample, or a vessel-leveling problem rather than a commercial defect.
      </p>
      <p className='my-4'>
        Next, establish a lab control limit. During the first season, measure ten to twenty accepted lots with the same procedure and calculate the normal repeat spread for your operators. Use that evidence to set an internal retest trigger. A fixed five or ten g/L rule copied from another lab may be too tight for a small hand-filled vessel or too loose for an automated instrument.
      </p>
      <div className='border-l-4 border-amber-500 pl-6 bg-gray-50 p-4 my-6'>
        <p className='text-sm text-gray-700'>
          Origin observation: when our Addis Ababa team and a buyer report different density numbers, the first productive question is “how did each lab fill the vessel?” Changing from a scoop-and-tap method to a shared free-flow pour often explains more of the gap than storage or shipment does. Method reconciliation should happen before a claim conversation.
        </p>
      </div>

      <h3 id='ethiopian-lots' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineScale className='w-8 h-8 text-amber-600' />
        4. Read Ethiopian Lot Density in Context
      </h3>
      <p className='my-4'>
        Ethiopian coffee density reflects several interacting factors, including variety mix, growing conditions, cherry maturity, processing, drying, screen distribution, and storage condition. An origin name is not a density specification. Buyers need a current, lot-specific reading tied to the actual sample under review.
      </p>
      <p className='my-4'>
        A 2024 peer-reviewed Ethiopian storage study published in <em>Heliyon</em> reported initial bulk densities of 0.64 g/mL for Limu, 0.65 g/mL for Sidama, and 0.66 g/mL for Yirgacheffe samples. The <a href='https://pmc.ncbi.nlm.nih.gov/articles/PMC11031754/' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline font-semibold'>study tracked selected coffees and packaging over twelve months</a>. Those values describe the study samples and method; they are not buying grades for every lot from those regions.
      </p>
      <p className='my-4'>
        That limitation is commercially important. A buyer who turns three research observations into fixed regional thresholds will reject sound coffee and approve weak coffee for the wrong reason. Use published figures to understand plausible scale, then build acceptance around the approved lot and your own method-controlled records.
      </p>
      <p className='my-4'>
        Across the washing stations and milling relationships we work with, lot uniformity usually matters more than the isolated headline value. A stable set of density, moisture, physical prep, and cup results gives a buyer a defensible picture. One impressive density number paired with mixed sample labels or a broad repeat spread does not.
      </p>
      <p className='my-4'>
        Natural Ethiopian lots also make filling discipline visible because bean shape and size distribution can create different packing patterns between operators. That does not make the lot defective. It means the lab should preserve the pour height, vessel, and leveling method, then evaluate density beside the <Link href='/insights/green-coffee-quality-control-defects-grading' className='text-amber-700 hover:underline font-semibold'>physical defect assessment</Link> and cup result.
      </p>

      <h3 id='specification' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineClipboardDocumentCheck className='w-8 h-8 text-amber-600' />
        5. Put Density Into a Usable Buying Specification
      </h3>
      <p className='my-4'>
        A useful buying specification defines the method, reference sample, checkpoints, records, and response to a material change. It does not promise that every Ethiopian coffee must exceed one global density number. The approved pre-shipment sample should establish the lot reference after final milling and preparation.
      </p>
      <div className='bg-green-50 border border-green-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3'>Sample specification language</h4>
        <p className='text-sm text-gray-700 font-inconsolata'>
          Supplier will report free-flow bulk density in g/L using a stated vessel volume and three independent fills. The report will include all readings, the median, moisture percentage, lot code, sample stage, method, and measurement date. The approved pre-shipment sample is the reference. A destination result outside the buyer&apos;s validated method tolerance triggers retesting from a representative composite sample and joint review; it does not create automatic rejection without physical and sensory evidence.
        </p>
      </div>
      <p className='my-4'>
        This language does three jobs. It prevents a bare number from entering the contract, establishes which sample governs the transaction, and keeps a density deviation from becoming an automatic claim without supporting evidence. The full <Link href='/insights/ethiopian-coffee-sample-approval-guide' className='text-amber-700 hover:underline font-semibold'>sample approval workflow</Link> should still control sample identity, retention, and authorization.
      </p>
      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Checkpoint</th>
              <th className='p-3 text-left font-bold'>Density action</th>
              <th className='p-3 text-left font-bold'>Commercial decision</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Offer sample</td>
              <td className='p-3'>Record baseline if the sample represents a named lot</td>
              <td className='p-3'>Decide whether the physical profile supports further evaluation</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Pre-shipment sample</td>
              <td className='p-3'>Run the controlled three-reading method after final preparation</td>
              <td className='p-3'>Approve the lot reference and retain a sealed split</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Arrival sample</td>
              <td className='p-3'>Repeat the same method on a representative composite</td>
              <td className='p-3'>Release, retest, or hold with moisture and cup evidence</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Production intake</td>
              <td className='p-3'>Pass confirmed density and condition data to roasting</td>
              <td className='p-3'>Plan the first production trial and monitor performance</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 id='case' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineChartBar className='w-8 h-8 text-amber-600' />
        6. Apply the Protocol in a 150-Tonne Roaster Case
      </h3>
      <p className='my-4'>
        Consider a specialty roaster using 150 tonnes of green coffee each year and contracting one container of washed Ethiopian coffee for a seasonal filter program. The offer sample records 708, 711, and 710 g/L. After final milling, the pre-shipment sample records 716, 713, and 714 g/L, with median 714 g/L. The cup is approved and both parties retain sealed samples.
      </p>
      <p className='my-4'>
        At arrival, the roaster records 693, 716, and 712 g/L. The first reading looks alarming, but the repeat spread is the real signal. The technician finds that the first fill was scooped and tapped while the next two were free-poured. A clean rerun produces 711, 713, and 712 g/L. Moisture and cupping remain aligned with the approved sample, so the lot is released.
      </p>
      <p className='my-4'>
        The protocol prevents two expensive errors. Procurement does not open a weak quality claim based on one poor fill, and production does not discard useful physical data because the first set looked inconsistent. The final QC record gives the roasting team a 712 g/L arrival baseline plus moisture, screen distribution, process, and sensory target.
      </p>
      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-6 border border-amber-200'>
        <h4 className='font-bold text-lg mb-3'>Original market intelligence</h4>
        <p className='text-sm'>
          Density creates the most value at the handoff between departments. Procurement sees a contract-control field, QC sees a repeatable physical measure, and roasting sees a profile-planning input. Companies that leave the number on the supplier PDF force each department to rediscover the same lot. A shared record reduces duplicate sample roasting and makes seasonal lot changes easier to explain.
        </p>
      </div>

      <h3 id='handoff' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineFire className='w-8 h-8 text-amber-600' />
        7. Hand the Density Result to Production
      </h3>
      <p className='my-4'>
        The production team needs a concise green-data brief, not a density-based roast recipe. Density affects how a coffee may accept and transfer heat, but machine design, batch size, moisture, process, screen distribution, and target flavor still control the production trial. Use the result to choose a sensible first test and to explain behavior, never to bypass tasting.
      </p>
      <p className='my-4'>
        Carry the same lot identity into the <Link href='/insights/coffee-roasting-weight-loss-yield-cost-guide' className='text-amber-700 hover:underline font-semibold'>coffee roasting weight loss record</Link>. Tracking density, moisture, green charge, and cooled output together helps the team distinguish a change in green condition from a scale, recovery, or roast-execution issue.
      </p>
      <ul className='list-disc ml-5 my-4 space-y-3'>
        <li><span className='font-bold'>Send the median and method.</span> “712 g/L, free-flow, 250 mL, three fills” is usable. “High density” is not.</li>
        <li><span className='font-bold'>Attach condition data.</span> Include moisture, water activity when available, crop, process, screen distribution, and days since arrival.</li>
        <li><span className='font-bold'>Name the reference roast.</span> Identify the sample roast or prior seasonal lot used to create the first production plan.</li>
        <li><span className='font-bold'>Record outcomes.</span> Add turning point, color milestones, weight loss, cup results, and operator notes to the lot record after each trial.</li>
        <li><span className='font-bold'>Recheck when behavior changes.</span> If the same stored lot begins reacting differently, measure current density and moisture before editing the profile blindly.</li>
      </ul>
      <p className='my-4'>
        The site&apos;s <Link href='/insights/roasting-ethiopian-coffee-beans-guide' className='text-amber-700 hover:underline font-semibold'>Ethiopian coffee roasting guide</Link> covers roast development in depth. The density protocol ends where that work begins: with a trustworthy physical brief, a retained sample, and an explicit sensory target.
      </p>
      <div className='border-l-4 border-amber-500 pl-6 bg-gray-50 p-4 my-6'>
        <p className='text-sm text-gray-700'>
          Origin observation: buyers often ask whether a coffee is “dense enough” before they state the roaster, batch size, or product target. A better request is for the lot&apos;s method-controlled density, current moisture, sample, and cup profile. That evidence lets the production team decide what “enough” means for its own equipment.
        </p>
      </div>

      <h3 id='red-flags' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineExclamationTriangle className='w-8 h-8 text-amber-600' />
        8. Investigate the Right Density Red Flags
      </h3>
      <p className='my-4'>
        Density should trigger investigation when the evidence changes materially and the method is controlled. A single low result, an unlabeled spreadsheet field, or a reading from a different vessel is not enough. Start with repeatability and identity, then move outward to lot condition.
      </p>
      <div className='grid md:grid-cols-2 gap-4 my-6'>
        <div className='border border-red-200 rounded-lg p-5 bg-red-50'>
          <h4 className='font-bold mb-2 text-red-800'>Hold and investigate</h4>
          <ul className='list-disc ml-5 space-y-2 text-sm text-gray-700'>
            <li>Three repeats remain widely dispersed after operator correction.</li>
            <li>The lot code or sample stage does not match the approval record.</li>
            <li>Arrival density moves with a material moisture or cup change.</li>
            <li>Bag-to-bag composite samples produce separate clusters.</li>
            <li>The supplier cannot explain the vessel, fill method, or test date.</li>
          </ul>
        </div>
        <div className='border border-green-200 rounded-lg p-5 bg-green-50'>
          <h4 className='font-bold mb-2 text-green-800'>Document and proceed</h4>
          <ul className='list-disc ml-5 space-y-2 text-sm text-gray-700'>
            <li>A rerun resolves one obvious filling error.</li>
            <li>The median remains within the lab&apos;s validated control limit.</li>
            <li>Moisture, physical prep, and cup remain aligned.</li>
            <li>A small shift has a documented method or condition explanation.</li>
            <li>Production trials confirm expected performance.</li>
          </ul>
        </div>
      </div>
      <p className='my-4'>
        If the controlled arrival sample still diverges, preserve the evidence and follow the <Link href='/insights/green-coffee-quality-claims-guide' className='text-amber-700 hover:underline font-semibold'>green coffee quality claims workflow</Link>. Density can support a case, but the strongest file combines representative sampling, instrument records, moisture, physical grading, photographs, retained-sample cupping, and timely notice.
      </p>
      <p className='my-4'>
        Green coffee density earns its place in quality control when every result can be reproduced and acted upon. Define the method, retain the raw readings, interpret the number in lot context, and carry it from approval into production. That is how buyers turn one simple measurement into stronger Ethiopian coffee purchasing and more controlled roasting.
      </p>

      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Request Ethiopian Lots With Usable QC Data</h4>
        <p className='my-2'>
          Tell us your cup target, production format, and quality-control fields. We can prepare current Ethiopian lot options and samples with the physical data your buying and roasting teams need.
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
        <h3 className='text-2xl font-bold mb-6 text-gray-900 flex items-center gap-2'>
          <HiOutlineQuestionMarkCircle className='text-amber-600' /> Frequently Asked Questions
        </h3>
        <div className='space-y-6'>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>What is green coffee density?</h4>
            <p className='text-sm text-gray-600'>
              Green coffee bulk density is the mass of whole green beans occupying a known volume, including air spaces between beans. Quality-control teams usually report it in grams per litre. The result describes both the sample and its filling method, so a density number should always include vessel size and procedure.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>How do you measure green coffee density?</h4>
            <p className='text-sm text-gray-600'>
              Tare a known-volume vessel, free-pour coffee from a fixed height, level the rim without compacting the beans, and weigh the contents. Divide grams by vessel volume in litres. Empty, remix, and repeat twice, then report all three readings and the median with moisture, lot code, and test date.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>What is a good density for green coffee?</h4>
            <p className='text-sm text-gray-600'>
              No single density proves quality across every origin, process, screen distribution, and measurement method. A good result is repeatable, plausible for the named lot, and aligned with physical grading and cup performance. Buyers should build method-controlled baselines for their programs rather than enforce an unsupported universal g/L cutoff.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Does higher green coffee density guarantee better cup quality?</h4>
            <p className='text-sm text-gray-600'>
              No. Density can reflect bean development and help explain roast behavior, but it cannot reveal cleanliness, sweetness, defects, or flavor on its own. A dense lot can cup poorly, while a lower reading may be normal for a sound lot. Use density with representative cupping and physical evaluation.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Should green coffee density appear in a purchase contract?</h4>
            <p className='text-sm text-gray-600'>
              Include density when it changes acceptance, consistency control, or roast planning. State the free-flow method, vessel volume, three-reading rule, sample stage, and review process. The approved pre-shipment sample should be the reference, while a destination deviation should trigger controlled retesting before rejection or a quality claim.
            </p>
          </div>
        </div>
      </section>

      <div className='my-10 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4'>Related Articles</h3>
        <div className='grid md:grid-cols-2 gap-4'>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Physical Quality Control</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/green-coffee-moisture-content-water-activity-guide' className='text-amber-700 hover:underline'>Green Coffee Moisture and Water Activity</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-screen-size-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Screen Size Guide</Link></li>
              <li>&bull; <Link href='/insights/green-coffee-quality-control-defects-grading' className='text-amber-700 hover:underline'>Green Coffee Defects and Grading</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Sample and Arrival Controls</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/ethiopian-coffee-sample-approval-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Sample Approval</Link></li>
              <li>&bull; <Link href='/insights/green-coffee-receiving-inspection-checklist' className='text-amber-700 hover:underline'>Green Coffee Receiving Inspection</Link></li>
              <li>&bull; <Link href='/insights/green-coffee-quality-claims-guide' className='text-amber-700 hover:underline'>Green Coffee Quality Claims</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Roaster Systems</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/green-coffee-quality-control-lab-setup-guide' className='text-amber-700 hover:underline'>Green Coffee QC Lab Setup</Link></li>
              <li>&bull; <Link href='/insights/roasting-ethiopian-coffee-beans-guide' className='text-amber-700 hover:underline'>Roasting Ethiopian Coffee Beans</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Buying Specifications</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/ethiopian-coffee-offer-sheet-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Offer Sheet Guide</Link></li>
              <li>&bull; <Link href='/insights/green-coffee-supplier-evaluation-checklist' className='text-amber-700 hover:underline'>Green Coffee Supplier Evaluation Checklist</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> Published on {date} by Ethio Coffee Import and Export PLC, an origin-connected Ethiopian coffee exporter working with trusted cooperatives, washing stations, and sourcing relationships across Ethiopia&apos;s coffee regions.
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
