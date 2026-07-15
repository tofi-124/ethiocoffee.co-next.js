import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import {
  HiOutlineAdjustmentsHorizontal,
  HiOutlineArchiveBox,
  HiOutlineBeaker,
  HiOutlineClipboardDocumentCheck,
  HiOutlineClipboardDocumentList,
  HiOutlineExclamationTriangle,
  HiOutlineGlobeAlt,
  HiOutlineHomeModern,
  HiOutlineLightBulb,
  HiOutlineScale,
  HiOutlineUserGroup,
} from 'react-icons/hi2'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function GreenCoffeeQualityControlLabSetupGuide({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        Room Specifications, Equipment Budget Tiers, and a Working QC Workflow for Roasters and Importers
      </h2>

      <figure>
        <figcaption className='font-inconsolata my-2'>{title}</figcaption>
        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Evaluator smelling coffee samples in cupping bowls in a green coffee quality control lab'
            fill
            objectFit='cover'
            className='w-full h-full'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>
        <p className='text-xs text-gray-500 mt-2'>Photo: Lena Bochanova, Unsplash.</p>
      </figure>

      <div className='my-4 text-sm bg-amber-50 p-4 rounded-lg border border-amber-200'>
        <span className='font-semibold'>Category:</span>
        <span className='ml-2'>Quality Control / Lab Setup / Green Coffee Buying / Procurement Resources</span>
      </div>

      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-8 border border-amber-200'>
        <h3 className='font-bold text-xl mb-3 flex items-center gap-2'>
          <HiOutlineLightBulb className='text-amber-400 flex-shrink-0' />Key Takeaway
        </h3>
        <p className='text-sm leading-relaxed'>
          A green coffee quality control lab needs four things before it needs expensive instruments: a stable, odor-free room with neutral light of roughly 4000 K, a precision scale, a moisture meter, and a repeatable cupping setup. That starter bench costs roughly USD 2,500 to 4,500 at 2026 list prices and already catches the defects and moisture problems that cause most quality claims. Add a dedicated sample roaster when offer-sample volume justifies it, and a water activity meter and QC software when you hold inventory across seasons. Match every instrument to a specific buying decision, and calibrate the lab against your supplier&apos;s origin lab in the first season, or the numbers will disagree when it matters most.
        </p>
      </div>

      <div className='my-8 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <HiOutlineClipboardDocumentList className='text-amber-600' /> In This Guide
        </h3>
        <ol className='space-y-2 text-sm'>
          <li><a href='#why-build' className='text-amber-700 hover:underline'>1. Why Build a Green Coffee Quality Control Lab</a></li>
          <li><a href='#the-room' className='text-amber-700 hover:underline'>2. The Room: Space, Light, Water, and Air</a></li>
          <li><a href='#equipment-tiers' className='text-amber-700 hover:underline'>3. Equipment by Budget Tier</a></li>
          <li><a href='#test-mapping' className='text-amber-700 hover:underline'>4. Match Each Test to a Buying Stage</a></li>
          <li><a href='#calibration' className='text-amber-700 hover:underline'>5. Calibrate Instruments and Palates</a></li>
          <li><a href='#records' className='text-amber-700 hover:underline'>6. Build the Sample Library and Records System</a></li>
          <li><a href='#origin-lab' className='text-amber-700 hover:underline'>7. Inside an Origin QC Lab in Addis Ababa</a></li>
          <li><a href='#worked-case' className='text-amber-700 hover:underline'>8. Worked Case: A 120-Tonne Roaster Builds in Three Stages</a></li>
          <li><a href='#mistakes' className='text-amber-700 hover:underline'>9. Six Mistakes That Undermine a New QC Lab</a></li>
          <li><a href='#faq' className='text-amber-700 hover:underline'>10. Frequently Asked Questions</a></li>
        </ol>
      </div>

      <p className='text-lg leading-relaxed my-4'>
        A green coffee quality control lab is the difference between buying coffee on evidence and buying it on trust. Every serious importer and a growing share of mid-size roasters now run some version of one: a controlled space where offer samples, pre-shipment samples, and arrival lots are weighed, measured, roasted, and cupped under repeatable conditions. The equipment list is not the hard part. The hard part is knowing which instruments actually change a buying decision, what they cost in 2026, and how to make your numbers agree with the exporter&apos;s numbers 10,000 kilometers away.
      </p>
      <p className='my-4'>
        This guide covers the physical room, three equipment budget tiers, the mapping between tests and buying stages, and the calibration work that makes a lab trustworthy. It does not re-teach the individual protocols; the site already has dedicated guides to <Link href='/insights/how-to-cup-evaluate-ethiopian-coffee-samples' className='text-amber-700 hover:underline'>cupping Ethiopian samples</Link>, <Link href='/insights/green-coffee-moisture-content-water-activity-guide' className='text-amber-700 hover:underline'>moisture and water activity</Link>, and <Link href='/insights/green-coffee-quality-control-defects-grading' className='text-amber-700 hover:underline'>defect grading</Link>. This article is about building the room where those protocols run.
      </p>

      <h3 id='why-build' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineBeaker className='w-8 h-8 text-amber-600' />
        1. Why Build a Green Coffee Quality Control Lab
      </h3>
      <p className='my-4'>
        A QC lab exists to answer three commercial questions: should we buy this coffee, did the shipped coffee match what we approved, and is our stored coffee still the coffee we bought. Each question protects a different sum of money, and together they justify the lab many times over. A single 20-foot container of specialty Ethiopian coffee holds around 19,200 kg; at a 2026 contract price of USD 5.50 per kg FOB, that is roughly USD 105,600 committed before freight, duty, and financing. A starter lab costing under USD 5,000 pays for itself the first time it stops one bad container or documents one successful claim.
      </p>
      <p className='my-4'>
        The lab also changes the relationship with suppliers. When a buyer sends structured cupping scores and physical measurements back to an exporter, sample quality conversations move from opinion to data. Buyers who reject a lot with a defect count and a roast photo get faster, more constructive responses than buyers who write &quot;the coffee tastes off.&quot; If a dispute does escalate, lab records are the backbone of a <Link href='/insights/green-coffee-quality-claims-guide' className='text-amber-700 hover:underline'>green coffee quality claim</Link>.
      </p>

      <h3 id='the-room' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineHomeModern className='w-8 h-8 text-amber-600' />
        2. The Room: Space, Light, Water, and Air
      </h3>
      <p className='my-4'>
        The minimum viable QC space is 10 to 15 square meters: enough for a grading bench, a cupping table, and sample storage that does not share air with production roasting. The room matters more than most equipment because every sensory evaluation inherits its conditions. Grading green color under warm yellow light, or cupping next to a roaster exhaust, quietly biases every decision made in the room.
      </p>

      <div className='bg-blue-50 border border-blue-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3'>Room Specification Checklist</h4>
        <ul className='space-y-2 text-sm text-gray-700'>
          <li><strong>Light:</strong> neutral white light around 4000 K at roughly 1,200 lux on the grading bench, the condition cited in SCA-aligned <a href='https://www.cropster.com/blog-post/green-grading-coffee/' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>green grading guidance</a> (Cropster, 2024). Avoid direct sunlight, which shifts through the day.</li>
          <li><strong>Air:</strong> no roast exhaust, kitchen, or chemical odors; a closed door between the lab and production; modest ventilation so aromas clear between sessions.</li>
          <li><strong>Temperature and humidity:</strong> a stable 20 to 25&deg;C; keep relative humidity in the 50 to 65 percent band so open samples neither dry out nor reabsorb moisture during evaluation.</li>
          <li><strong>Water:</strong> filtered cupping water in the range the SCA water recommendations target, roughly 75 to 250 mg/L total dissolved solids; record what your lab uses, because water chemistry moves cup scores.</li>
          <li><strong>Surfaces:</strong> a matte, neutral gray or black grading surface; washable bench tops; no scented cleaning products stored in the room.</li>
        </ul>
      </div>

      <p className='my-4'>
        None of this requires construction. A spare office, painted neutral and fitted with two daylight-balanced LED panels and a carbon-filtered water source, meets the specification. What it cannot be is a corner of the roastery floor; airborne chaff and roast smoke make consistent sensory work impossible.
      </p>

      <h3 id='equipment-tiers' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineScale className='w-8 h-8 text-amber-600' />
        3. Equipment by Budget Tier
      </h3>
      <p className='my-4'>
        Buy equipment in the order that buying decisions demand it, not in the order catalogs present it. The tiers below reflect indicative 2026 list prices from lab equipment vendors, rounded; confirm current quotes before budgeting. Tier 1 makes physical intake checks and basic cupping possible. Tier 2 makes evaluation independent of the production floor. Tier 3 supports importers and multi-site roasters holding inventory across seasons.
      </p>

      <h4 className='text-xl font-bold mt-8 mb-4'>Tier 1: The Starter Bench (USD 2,500 to 4,500)</h4>
      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Item</th>
              <th className='p-3 text-left font-bold'>Indicative 2026 Price (USD)</th>
              <th className='p-3 text-left font-bold'>Decision It Supports</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Precision scale (0.1 g)</td>
              <td className='p-3'>100 - 300</td>
              <td className='p-3'>Defect counts per 350 g, cupping doses, roast loss</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Capacitance moisture meter</td>
              <td className='p-3'>1,100 - 1,500</td>
              <td className='p-3'>Accept or query moisture at intake and arrival</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Grading sieves (screens 8 - 20)</td>
              <td className='p-3'>300 - 500</td>
              <td className='p-3'>Verify screen size against the contract spec</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Grading trays, matte placemat, defect reference</td>
              <td className='p-3'>150 - 350</td>
              <td className='p-3'>Structured physical inspection and defect classing</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Cupping bowls, spoons, kettle, timer, spittoon</td>
              <td className='p-3'>250 - 500</td>
              <td className='p-3'>Repeatable sensory evaluation</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Burr grinder (lab-reserved settings)</td>
              <td className='p-3'>300 - 800</td>
              <td className='p-3'>Consistent grind for cupping</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Daylight-balanced lighting retrofit</td>
              <td className='p-3'>100 - 300</td>
              <td className='p-3'>Accurate green and roast color judgment</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className='my-4'>
        At Tier 1 the sample roast still happens on the production machine or a small home-scale roaster, which is workable if the roast is logged and repeated. The SCA and CQI green grading protocols call for at least 350 g of green coffee per graded sample (Cropster, 2024), so ask exporters for sample sizes that allow a full physical workup plus a roast.
      </p>

      <h4 className='text-xl font-bold mt-8 mb-4'>Tier 2: The Dedicated Lab (adds USD 8,000 to 15,000)</h4>
      <p className='my-4'>
        Tier 2 exists to remove the production floor from the evaluation loop. Its core purchase is a dedicated electric sample roaster, typically USD 3,000 to 9,000 at 2026 list prices depending on barrel count, so offer samples no longer wait for a gap in the production schedule. Add a lab-only grinder (USD 800 to 1,500), a roast color analyzer (around USD 1,400 to 2,500) to standardize sample roast development, a bulk density measure, filtered water plumbed to the cupping bench, and sealed cabinets for a retention sample library. A roaster at this tier can turn an offer sample around in 48 hours, which matters when fresh-crop Ethiopian lots sell on allocation.
      </p>

      <h4 className='text-xl font-bold mt-8 mb-4'>Tier 3: The Importer Grade Lab (adds USD 15,000 to 40,000)</h4>
      <p className='my-4'>
        Tier 3 instruments protect inventory value across time rather than single purchases. A water activity meter (roughly USD 3,000 to 6,000 in 2026) predicts how coffee will age in storage, which is why importers holding lots across seasons buy one before roasters do; the reasoning is covered in the <Link href='/insights/green-coffee-moisture-content-water-activity-guide' className='text-amber-700 hover:underline'>moisture and water activity guide</Link>. Multi-barrel gas sample roasters (USD 10,000 to 25,000) let a lab roast four to eight samples in parallel during arrival season. QC software platforms that link green measurements, roast curves, and cupping scores typically run USD 1,000 to 3,000 per year. Climate control for the green sample store completes the tier.
      </p>

      <div className='border-l-4 border-amber-500 pl-6 bg-gray-50 p-4 my-6'>
        <p className='text-sm text-gray-700'>
          <strong>Buying rule:</strong> every instrument must name the decision it changes. A refractometer is popular, but if no buying decision in your workflow turns on extraction percentage, it is decor. A second moisture meter for cross-checking drift, unglamorous as it is, changes accept-or-claim decisions and earns its bench space first.
        </p>
      </div>

      <h3 id='test-mapping' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineClipboardDocumentCheck className='w-8 h-8 text-amber-600' />
        4. Match Each Test to a Buying Stage
      </h3>
      <p className='my-4'>
        A lab earns its cost only when each test runs at the stage where its result can still change an outcome. The three-gate structure of offer sample, pre-shipment sample, and arrival sample is described in the <Link href='/insights/ethiopian-coffee-sample-approval-guide' className='text-amber-700 hover:underline'>sample approval guide</Link>; the table below shows what the lab runs at each gate and why.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Buying Stage</th>
              <th className='p-3 text-left font-bold'>Lab Work</th>
              <th className='p-3 text-left font-bold'>Decision on the Table</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Offer sample</td>
              <td className='p-3'>Full physical workup, sample roast, cupping; screen check against spec</td>
              <td className='p-3'>Contract or pass; price versus quality</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Pre-shipment sample</td>
              <td className='p-3'>Cup against the approved offer sample; moisture; defect recount</td>
              <td className='p-3'>Release the shipment or hold it at origin</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Arrival</td>
              <td className='p-3'>Moisture and water activity versus PSS record; cup against retained PSS</td>
              <td className='p-3'>Accept, negotiate, or open a documented claim</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Storage (quarterly)</td>
              <td className='p-3'>Re-cup held lots; spot moisture checks</td>
              <td className='p-3'>Roast now, blend down, or hold</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Pre-production</td>
              <td className='p-3'>Confirm the production lot matches the approved arrival profile</td>
              <td className='p-3'>Schedule the roast or flag substitution</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        Specialized food-safety testing stays external. Mycotoxin screening, pesticide residue panels, and similar analyses belong with accredited third-party laboratories, not on your bench; the <Link href='/insights/green-coffee-mycotoxin-testing-guide' className='text-amber-700 hover:underline'>mycotoxin testing guide</Link> covers when those tests are worth commissioning. The in-house lab&apos;s job is to know when to send something out.
      </p>

      <h3 id='calibration' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineAdjustmentsHorizontal className='w-8 h-8 text-amber-600' />
        5. Calibrate Instruments and Palates
      </h3>
      <p className='my-4'>
        An uncalibrated lab produces confident numbers that cannot be compared with anyone else&apos;s. Calibration has two halves: instruments and people. Instruments drift; moisture meters in particular should be checked monthly against a reference sample or a second meter, and scales verified with a calibration weight. Log every check. The log is what makes your arrival measurement credible in a dispute.
      </p>
      <p className='my-4'>
        Palate calibration is harder and more valuable. The SCA&apos;s Coffee Value Assessment standards (SCA-102 through SCA-104, adopted as the official cupping standards in 2025) superseded the 2004 cupping protocol, and labs mixing the two systems will produce scores that do not reconcile; the <Link href='/insights/new-sca-coffee-value-assessment' className='text-amber-700 hover:underline'>SCA Coffee Value Assessment guide</Link> explains the transition. Pick one system, train every cupper in it, and hold a monthly internal calibration cupping where the team scores the same coffees blind and discusses divergence. Published SCA standards are available from the <a href='https://sca.coffee/research/coffee-standards' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>Specialty Coffee Association standards library</a>.
      </p>
      <p className='my-4'>
        Then calibrate outward. In the first season with a new exporter, cup the same lots they cup and exchange scores. Expect a spread of one to two points from water chemistry, roaster type, and days off roast alone; the goal is not identical numbers but a known, stable offset. Once you know your lab scores a typical washed Yirgacheffe about one point under the origin lab, a three-point gap on a future sample becomes a real signal instead of noise.
      </p>

      <h3 id='records' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineArchiveBox className='w-8 h-8 text-amber-600' />
        6. Build the Sample Library and Records System
      </h3>
      <p className='my-4'>
        Every sample that enters the lab should leave a record and, where a purchase followed, a physical twin. Keep 100 to 200 g of every approved pre-shipment sample sealed, labeled, and stored in the lab until the lot is fully roasted or the claim window has closed. That retained sample is the only physical evidence of what was approved if the arrival cup diverges.
      </p>
      <p className='my-4'>
        The record itself can start as a spreadsheet: sample ID, lot reference, receipt date, moisture, screen distribution, defect count, roast log, cupping score, decision, and evaluator. What matters is that the same fields are captured every time, that records link back to the contract, and that the buying team can query them a season later. Move to dedicated QC software when volume makes the spreadsheet the bottleneck, not before. Labs that skip record discipline end up re-cupping from memory, and memory always flatters the coffee you already bought; the same failure mode that undermines <Link href='/insights/green-coffee-inventory-management-roasters' className='text-amber-700 hover:underline'>green coffee inventory management</Link> when lot data lives in someone&apos;s head.
      </p>

      <h3 id='origin-lab' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineGlobeAlt className='w-8 h-8 text-amber-600' />
        7. Inside an Origin QC Lab in Addis Ababa
      </h3>
      <p className='my-4'>
        Your lab is one end of a paired system; the exporter&apos;s lab is the other. Knowing what happens at origin tells you what your own bench must verify versus what it can trust. In our Addis Ababa lab, every pre-shipment sample is drawn after dry milling, cupped against the approved offer sample, and only then couriered; a sealed twin of that PSS stays on the shelf in Addis so that both sides can re-cup the identical coffee if an arrival dispute opens months later.
      </p>
      <p className='my-4'>
        Two origin-side realities are worth designing your lab around. First, altitude: Addis Ababa sits at roughly 2,355 meters, where water boils near 92&deg;C, so sample roasts and cupping brews behave differently than they will in a sea-level lab in Hamburg or Osaka. This is one reason origin and destination scores rarely match exactly, and why we encourage first-season buyers to run shared calibration cuppings rather than assume one lab is wrong. Second, naturals hide their defects from green inspection: quakers barely show in unroasted coffee and only reveal themselves as pale beans after the sample roast. Origin labs roast-check natural lots before release for exactly this reason, and a buyer&apos;s lab should never grade a natural on green inspection alone.
      </p>
      <p className='my-4'>
        A useful habit: ask any exporter you evaluate what their lab measures before dispatching a PSS, and compare it against the checks in the <Link href='/insights/green-coffee-supplier-evaluation-checklist' className='text-amber-700 hover:underline'>supplier evaluation checklist</Link>. An exporter who can answer precisely is an exporter whose numbers your lab can calibrate against.
      </p>

      <h3 id='worked-case' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineUserGroup className='w-8 h-8 text-amber-600' />
        8. Worked Case: A 120-Tonne Roaster Builds in Three Stages
      </h3>
      <p className='my-4'>
        Consider a Rotterdam roaster processing 120 tonnes of green coffee per year, buying eight to ten Ethiopian and Latin American lots annually, who until now has cupped on the production roaster and trusted supplier certificates for physical specs. Built in one step, a full lab is a USD 40,000 capital request that finance will question. Staged against decisions, it funds itself.
      </p>
      <div className='grid md:grid-cols-2 gap-4 my-6'>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Stage 1 (month 0, ~USD 4,000)</h4>
          <p className='text-sm text-gray-700'>Starter bench in a converted office: scale, moisture meter, sieves, cupping kit, lighting. Every arrival now gets a moisture reading and a defect count against the contract. In the first year this documents one moisture discrepancy on a 19,200 kg container, recovering more than the bench cost in a negotiated settlement.</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Stage 2 (month 8, ~USD 12,000)</h4>
          <p className='text-sm text-gray-700'>Dedicated two-barrel sample roaster, lab grinder, roast color analyzer, retention cabinets. Offer samples turn around in two days instead of two weeks, and the roaster stops losing allocation-season Ethiopian lots to slower evaluation. PSS approvals now cup against the retained offer sample.</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Stage 3 (month 18, ~USD 9,000)</h4>
          <p className='text-sm text-gray-700'>Water activity meter and QC software as the roaster starts holding fresh-crop volume across two quarters. Quarterly re-cups plus water activity trends decide which held lots roast first, protecting inventory the finance team already paid for.</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>The trigger logic</h4>
          <p className='text-sm text-gray-700'>Each stage was approved because a named, recurring decision lacked data: arrival acceptance, offer turnaround, storage sequencing. No instrument was bought for completeness. This is the pattern that keeps a QC lab a profit protector rather than a cost center.</p>
        </div>
      </div>

      <h3 id='mistakes' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineExclamationTriangle className='w-8 h-8 text-amber-600' />
        9. Six Mistakes That Undermine a New QC Lab
      </h3>
      <p className='my-4'>
        Most new labs fail through process gaps rather than equipment gaps. These six recur across the buyers we work with.
      </p>
      <ol className='list-decimal pl-6 space-y-3 my-4 text-gray-800'>
        <li><strong>Cupping in production air.</strong> Roast exhaust and chaff dust flatten aroma discrimination; sensory work needs its own air.</li>
        <li><strong>Unlogged sample roasts.</strong> A cupping score without its roast record cannot be compared to anything, including your own past scores.</li>
        <li><strong>One person owns the palate.</strong> If a single cupper approves everything, the lab inherits their biases and stops when they take a holiday. Two trained evaluators and a monthly blind calibration are the minimum.</li>
        <li><strong>No retained samples.</strong> Without a sealed twin of the approved PSS, an arrival dispute becomes your memory against the exporter&apos;s records.</li>
        <li><strong>Instruments never re-checked.</strong> A moisture meter that drifted half a point will misjudge every arrival until someone notices, usually during a claim, when it is too late for the number to be trusted.</li>
        <li><strong>Testing after the decision.</strong> Measurements that arrive after the contract is signed or the shipment released are documentation, not control. Schedule lab work ahead of each buying gate, not behind it.</li>
      </ol>
      <p className='my-4'>
        Avoid those six and even a modest green coffee quality control lab becomes what it should be: the cheapest insurance a coffee buyer can own, and the fastest way to make supplier relationships more honest in both directions.
      </p>

      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Put Your New Lab to Work on Real Ethiopian Samples</h4>
        <p className='my-2'>Request current-crop Ethiopian offer samples with full lot documentation, cup them against our Addis Ababa lab&apos;s scores, and calibrate your bench against origin from the first contract.</p>
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

      <h3 id='faq' className='text-2xl font-extrabold mt-12 mb-4'>
        10. Frequently Asked Questions
      </h3>
      <section className='mb-12 bg-gray-50 rounded-xl p-8 border border-gray-200'>
        <div className='space-y-6'>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>How much does it cost to set up a green coffee quality control lab?</h4>
            <p className='text-sm text-gray-600'>A functional starter lab costs roughly USD 2,500 to 4,500 at 2026 list prices: precision scale, capacitance moisture meter, grading sieves, cupping kit, and daylight-balanced lighting. A dedicated lab with its own sample roaster adds USD 8,000 to 15,000, and importer-grade instruments such as water activity meters add USD 15,000 to 40,000 more.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>What equipment should a coffee QC lab buy first?</h4>
            <p className='text-sm text-gray-600'>Buy the instruments that gate arrival acceptance first: a 0.1 g precision scale, a moisture meter, grading sieves, and a repeatable cupping setup. These catch the moisture, screen size, and defect discrepancies behind most quality claims. A dedicated sample roaster comes next, once offer-sample volume justifies removing production from the loop.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Can a roaster evaluate green coffee without a sample roaster?</h4>
            <p className='text-sm text-gray-600'>Yes, at low volume. Physical intake checks need no roaster at all, and cupping roasts can run on a logged, repeated profile on the production machine or a small home-scale roaster. The compromise is turnaround and consistency, so buy a dedicated sample roaster when offer samples start waiting on the production schedule.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>How much space does a green coffee quality control lab need?</h4>
            <p className='text-sm text-gray-600'>Plan 10 to 15 square meters for a grading bench, cupping table, and sealed sample storage. The binding constraints are environmental rather than spatial: neutral light near 4000 K, air free of roast exhaust and odors, stable temperature of 20 to 25 degrees Celsius, and moderate humidity around 50 to 65 percent.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>How do you calibrate a buyer&apos;s lab against an exporter&apos;s origin lab?</h4>
            <p className='text-sm text-gray-600'>Cup the same lots in the same season and exchange scores, roast logs, and physical measurements. Expect a stable offset of one to two points from water chemistry, altitude, roaster type, and sample age rather than identical numbers. Once that offset is known, larger gaps on future samples become genuine quality signals.</p>
          </div>
        </div>
      </section>

      <div className='my-10 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4'>Related Articles</h3>
        <div className='grid md:grid-cols-2 gap-4'>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Quality Evaluation</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/how-to-cup-evaluate-ethiopian-coffee-samples' className='text-amber-700 hover:underline'>Cup &amp; Evaluate Ethiopian Coffee Samples</Link></li>
              <li>&bull; <Link href='/insights/green-coffee-quality-control-defects-grading' className='text-amber-700 hover:underline'>Green Coffee Defects: Buyer&apos;s Guide</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-screen-size-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Screen Size Guide</Link></li>
              <li>&bull; <Link href='/insights/new-sca-coffee-value-assessment' className='text-amber-700 hover:underline'>SCA Coffee Value Assessment: Buyer&apos;s Guide</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Testing &amp; Measurement</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/green-coffee-moisture-content-water-activity-guide' className='text-amber-700 hover:underline'>Moisture Content and Water Activity Guide</Link></li>
              <li>&bull; <Link href='/insights/green-coffee-mycotoxin-testing-guide' className='text-amber-700 hover:underline'>Green Coffee Mycotoxin Testing Guide</Link></li>
              <li>&bull; <Link href='/insights/green-coffee-shelf-life-storage-guide' className='text-amber-700 hover:underline'>Green Coffee Shelf Life and Storage</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Buying Workflow</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/ethiopian-coffee-sample-approval-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Sample Approval Guide</Link></li>
              <li>&bull; <Link href='/insights/green-coffee-quality-claims-guide' className='text-amber-700 hover:underline'>Green Coffee Quality Claims Guide</Link></li>
              <li>&bull; <Link href='/insights/green-coffee-supplier-evaluation-checklist' className='text-amber-700 hover:underline'>Green Coffee Supplier Evaluation Checklist</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Operations</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/green-coffee-inventory-management-roasters' className='text-amber-700 hover:underline'>Green Coffee Inventory Management for Roasters</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-harvest-calendar-buying-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Harvest Calendar for Buyers</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> Written by Ethio Coffee Import and Export PLC, an origin-connected Ethiopian coffee exporter with three decades of sourcing relationships across Yirgacheffe, Sidamo, Guji, Harar, Limu, and Jimma. Published {date}.
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
