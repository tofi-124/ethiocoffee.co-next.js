import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import {
  HiOutlineBeaker,
  HiOutlineChartBar,
  HiOutlineCheckCircle,
  HiOutlineClipboardDocumentList,
  HiOutlineExclamationTriangle,
  HiOutlineLightBulb,
  HiOutlineScale,
  HiOutlineUserGroup,
} from 'react-icons/hi2'

type InsightContentProps = { title: string; date: string; large_image_url: string }

export default function CoffeeCuppingCalibrationTeamProtocol({
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
        Coffee cupping calibration for reliable green buying, quality control, and supplier feedback
      </h2>

      <figure>
        <figcaption className='font-inconsolata my-2'>{title}</figcaption>
        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Coffee cupping calibration session with tasting bowls, spoon, timer, and score records'
            fill
            objectFit='cover'
            className='w-full h-full'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>
        <figcaption className='font-inconsolata text-xs my-1 text-gray-600'>
          Photo by <a href='https://www.pexels.com/photo/professional-coffee-tasting-process-in-action-34933330/' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>Alina Skazka on Pexels</a>.
        </figcaption>
      </figure>

      <div className='my-4 text-sm bg-amber-50 p-4 rounded-lg border border-amber-200'>
        <span className='font-semibold'>Category:</span>
        <span className='ml-2'>Quality Control / Cupping Calibration / Green Coffee Buying / Roaster Resources</span>
      </div>

      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-8 border border-amber-200'>
        <h3 className='font-bold text-xl mb-3 flex items-center gap-2'>
          <HiOutlineLightBulb className='text-amber-500 flex-shrink-0' />
          Key Takeaway
        </h3>
        <p className='text-sm leading-relaxed'>
          Coffee cupping calibration turns several individual opinions into one dependable buying system. Run blind sessions with controlled preparation, one stable reference coffee, one duplicate cup code, independent scoring, and a structured discussion only after forms are locked. Track score spread, duplicate repeatability, descriptor alignment, and defect detection. Investigate drift before the panel approves a pre-shipment sample or rejects an arrival lot.
        </p>
      </div>

      <div className='my-8 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <HiOutlineClipboardDocumentList className='text-amber-600' /> In This Protocol
        </h3>
        <ol className='space-y-2 text-sm'>
          <li><a href='#business-case' className='text-amber-700 hover:underline'>1. Define what calibration protects</a></li>
          <li><a href='#framework' className='text-amber-700 hover:underline'>2. Set one assessment framework</a></li>
          <li><a href='#session-design' className='text-amber-700 hover:underline'>3. Build the calibration flight</a></li>
          <li><a href='#run-session' className='text-amber-700 hover:underline'>4. Run the session without anchoring</a></li>
          <li><a href='#metrics' className='text-amber-700 hover:underline'>5. Measure panel performance</a></li>
          <li><a href='#drift' className='text-amber-700 hover:underline'>6. Diagnose and correct drift</a></li>
          <li><a href='#origin-destination' className='text-amber-700 hover:underline'>7. Calibrate with an origin supplier</a></li>
          <li><a href='#cadence' className='text-amber-700 hover:underline'>8. Set a practical operating cadence</a></li>
          <li><a href='#worksheet' className='text-amber-700 hover:underline'>9. Copy the calibration worksheet</a></li>
          <li><a href='#faq' className='text-amber-700 hover:underline'>10. Frequently asked questions</a></li>
        </ol>
      </div>

      <p className='my-4 text-lg leading-relaxed'>
        A buying team can follow the same brew recipe and still disagree enough to approve the wrong coffee. One cupper scores acidity intensity while another scores how much they like it. A third knows the supplier&apos;s score before tasting and unconsciously moves toward it. <span className='font-bold'>Coffee cupping calibration</span> is the control that exposes those differences before they affect a contract, product launch, or quality claim.
      </p>
      <p className='my-4'>
        This protocol is for importers, roaster buying teams, exporter labs, and quality managers. It assumes the team already knows basic cupping mechanics. If not, begin with the <Link href='/insights/how-to-cup-evaluate-ethiopian-coffee-samples' className='text-amber-700 hover:underline font-semibold'>Ethiopian coffee cupping guide</Link> and standardize sample roasting with the <Link href='/insights/green-coffee-sample-roasting-protocol' className='text-amber-700 hover:underline font-semibold'>green coffee sample roasting protocol</Link>. The work here starts after the bowls are prepared correctly.
      </p>

      <h3 id='business-case' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineScale className='w-8 h-8 text-amber-600' />
        1. Define What Calibration Protects
      </h3>
      <p className='my-4'>
        Calibration does not force every cupper to have the same preferences. It makes the panel consistent about the question being answered, the language being used, and the evidence needed for a decision. A green buyer may personally prefer a fruit-forward natural while accurately describing a washed lot that better fits the company&apos;s filter program. Preference and description can coexist when the form keeps them separate.
      </p>
      <p className='my-4'>
        The commercial risk appears at three gates. Offer cuppings decide where sample and negotiation time goes. Pre-shipment cuppings authorize a specific lot to move. Arrival cuppings help determine whether the landed coffee remains within the agreed sensory range. A panel that drifts by two points or uses descriptors inconsistently can turn normal variation into a rejection, or let a material change pass unnoticed.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Buying gate</th>
              <th className='p-3 text-left font-bold'>Calibration question</th>
              <th className='p-3 text-left font-bold'>Failure if the panel drifts</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Offer sample</td>
              <td className='p-3'>Can the team describe fit and quality consistently?</td>
              <td className='p-3'>Good lots are missed or weak lots consume buying time</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Pre-shipment sample</td>
              <td className='p-3'>Does the final lot meet the written approval rule?</td>
              <td className='p-3'>Shipment is released on unstable evidence</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Arrival sample</td>
              <td className='p-3'>Is the change real, repeatable, and commercially material?</td>
              <td className='p-3'>A valid claim is weakened or a false claim is raised</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 id='framework' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineBeaker className='w-8 h-8 text-amber-600' />
        2. Set One Assessment Framework Before Scoring
      </h3>
      <p className='my-4'>
        Write the session purpose at the top of every form. Selection, descriptive profiling, quality impression, defect screening, and contract acceptance are different tasks. Combining them into one vague instruction such as &quot;score these coffees&quot; guarantees disagreement that discussion cannot repair.
      </p>
      <p className='my-4'>
        The Specialty Coffee Association now organizes Coffee Value Assessment around physical, descriptive, affective, and extrinsic assessments. The <a href='https://sca.coffee/value-assessment' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline font-semibold'>SCA Coffee Value Assessment resources</a> explain that descriptive assessment records sensory attributes, while affective assessment records an evaluator&apos;s impression of quality. SCA-102, SCA-103, and SCA-104 replaced the 2004 form and protocol as the official cupping standards in November 2024. Record which standard and form version your team uses.
      </p>
      <p className='my-4'>
        A practical buying session can use both assessments, but the team should finish its descriptive observations before discussing preferences or commercial fit. Use the <a href='https://worldcoffeeresearch.org/resources/sensory-lexicon' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline font-semibold'>World Coffee Research Sensory Lexicon</a> when a descriptor needs a defined reference. Its 110 aroma, flavor, and texture attributes give the team a common vocabulary without declaring that one attribute is better than another.
      </p>

      <div className='bg-blue-50 border border-blue-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3'>Calibration rule</h4>
        <p className='text-sm text-blue-950'>
          Calibrate to a documented method and business decision, not to the most senior person&apos;s palate. The panel lead protects the process, reveals codes, and facilitates evidence review. The lead&apos;s score is another observation, not the answer key.
        </p>
      </div>

      <h3 id='session-design' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineClipboardDocumentList className='w-8 h-8 text-amber-600' />
        3. Build a Calibration Flight That Reveals Weaknesses
      </h3>
      <p className='my-4'>
        Use four to six coded coffees. A table of only excellent, similar lots may feel productive while revealing little. The flight should span the decisions your team actually makes: a clear pass, a boundary coffee near the buying threshold, a profile mismatch, and a coffee with a known sensory concern. For Ethiopian buying, include washed and natural lots only when the session brief defines the expected profile for each.
      </p>
      <p className='my-4'>
        Add one duplicate by splitting the same roasted sample under two codes. No participant should know which codes repeat. The duplicate tests repeatability inside one session. Keep one stable reference coffee in frozen, sealed portions or another validated storage format and use it across sessions while its condition remains suitable. The reference helps reveal movement over time; it is not a universal score standard.
      </p>

      <div className='grid md:grid-cols-2 gap-5 my-6'>
        <div className='bg-green-50 p-5 rounded-lg border border-green-200'>
          <p className='font-bold text-green-900 mb-2'>Control before tasting</p>
          <ul className='list-disc ml-5 space-y-2 text-sm text-green-900'>
            <li>One sample-roast protocol and recorded roast date</li>
            <li>Random three-digit codes and randomized positions</li>
            <li>Matched dose, grind, water, vessels, and timing</li>
            <li>Identical information available to every cupper</li>
            <li>Independent forms with no visible supplier score</li>
          </ul>
        </div>
        <div className='bg-red-50 p-5 rounded-lg border border-red-200'>
          <p className='font-bold text-red-900 mb-2'>Do not use as an answer key</p>
          <ul className='list-disc ml-5 space-y-2 text-sm text-red-900'>
            <li>The exporter&apos;s headline cup score</li>
            <li>The buyer&apos;s preferred origin or process</li>
            <li>A group average calculated before review</li>
            <li>One certified cupper&apos;s unsupported conclusion</li>
            <li>Flavor notes copied from the offer sheet</li>
          </ul>
        </div>
      </div>

      <p className='my-4'>
        Record the sample codes, roast code, days off roast, grinder setting, water identifier, water temperature, dose, vessel volume, pour time, break time, room conditions, form version, and panel roster. These variables belong in the same controlled record used for <Link href='/insights/ethiopian-coffee-sample-approval-guide' className='text-amber-700 hover:underline font-semibold'>offer, pre-shipment, and arrival sample approval</Link>.
      </p>

      <h3 id='run-session' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineUserGroup className='w-8 h-8 text-amber-600' />
        4. Run the Session Without Anchoring the Panel
      </h3>
      <ol className='list-decimal ml-5 my-4 space-y-3'>
        <li><strong>Brief the decision.</strong> State whether the flight tests description, quality impression, defect recognition, or a release rule. Do not reveal supplier, price, region, processing story, or previous scores.</li>
        <li><strong>Work silently.</strong> Cuppers record observations independently through the full temperature sequence. Facial reactions and whispered descriptors influence the table as surely as spoken scores.</li>
        <li><strong>Lock the forms.</strong> Photograph, submit, or otherwise freeze individual results before discussion. Corrections to clerical errors should remain visible in the audit trail.</li>
        <li><strong>Reveal the duplicate first.</strong> Let each cupper examine personal repeatability before seeing the group average. A large duplicate gap points to an individual or preparation issue.</li>
        <li><strong>Review evidence, not status.</strong> Ask which sensory cue drove a score or descriptor. Where possible, return to the bowl or a prepared reference rather than debating vocabulary from memory.</li>
        <li><strong>Assign corrective work.</strong> Record the reference exercise, paired tasting, or preparation check needed before the next commercial decision.</li>
      </ol>
      <p className='my-4'>
        Discussion is part of calibration, but timing matters. Early discussion creates agreement without proving independent alignment. Silent scoring first preserves the information needed to tell whether the team already agrees, learns from evidence, or merely follows a confident speaker.
      </p>

      <h3 id='metrics' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineChartBar className='w-8 h-8 text-amber-600' />
        5. Measure Four Parts of Panel Performance
      </h3>
      <p className='my-4'>
        Calibration needs a trend, not a pass badge. Track the measures below by cupper, coffee, attribute, and session. Use the median when one extreme score would distort a small panel. Keep the raw data so a quality manager can separate a difficult sample from a drifting evaluator.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Measure</th>
              <th className='p-3 text-left font-bold'>Simple calculation</th>
              <th className='p-3 text-left font-bold'>What it reveals</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Panel spread</td>
              <td className='p-3'>Highest score minus lowest score for one coffee</td>
              <td className='p-3'>How far the panel&apos;s quality judgments separate</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Cupper bias</td>
              <td className='p-3'>Cupper score minus panel median across the flight</td>
              <td className='p-3'>A stable tendency to score high or low</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Duplicate gap</td>
              <td className='p-3'>Absolute difference between hidden duplicate scores</td>
              <td className='p-3'>Within-session repeatability</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Descriptor agreement</td>
              <td className='p-3'>Share of cuppers selecting the same primary category</td>
              <td className='p-3'>Whether the team speaks at a useful category level</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Defect detection</td>
              <td className='p-3'>Correct detections and misses for seeded or known samples</td>
              <td className='p-3'>Readiness for rejection and claim decisions</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='bg-amber-50 p-6 rounded-lg border border-amber-200 my-6'>
        <p className='font-bold mb-2'>Suggested internal alert limits, not SCA requirements</p>
        <p className='text-sm'>
          A buying team can begin by reviewing any coffee with more than a 1.5-point total-score spread, any cupper whose average bias exceeds 1 point across a flight, or any hidden duplicate gap above 1 point. Treat these as investigation triggers, not automatic failures. Adjust them after enough sessions show the normal variation of your panel and form.
        </p>
      </div>

      <h3 id='drift' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineExclamationTriangle className='w-8 h-8 text-amber-600' />
        6. Diagnose the Cause Before Retraining the Cupper
      </h3>
      <p className='my-4'>
        A score gap is a symptom. Start with preparation. Check sample identity, roast uniformity, cup placement, dose, grinder purge, water, pour sequence, broken crust, and transcription. If only one bowl is inconsistent, investigate the bowl before the person. If every cupper scores one table unusually, the reference coffee or preparation may have changed.
      </p>
      <p className='my-4'>
        Next, isolate the sensory task. A descriptor problem calls for aroma or taste references. A quality-impression gap calls for blind boundary coffees and a clear market brief. Missed defects call for controlled defect training and confirmation that the suspected taint appears across enough bowls. Persistent high or low scoring may require an external calibration sample rather than more internal discussion.
      </p>
      <p className='my-4'>
        Health, fatigue, recent food, medication, and strong ambient odors can temporarily change performance. Allow a cupper to declare themselves unavailable without penalty. Removing one unreliable result is cheaper than forcing consensus into a shipment decision.
      </p>

      <h3 id='origin-destination' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineUserGroup className='w-8 h-8 text-amber-600' />
        7. Calibrate With an Origin Supplier
      </h3>
      <p className='my-4'>
        Cross-lab calibration begins with shared coffee, shared sample identity, and a shared question. Ask the exporter to split one homogenized sample, seal both portions, and record the lot and sample stage. Each lab roasts and cups independently, then exchanges the preparation record, descriptive results, quality impressions, and defect observations. Do not exchange only a total score.
      </p>
      <p className='my-4'>
        Lab conditions will not be identical. Water chemistry, grinder geometry, sample roaster, roast development, elevation, rest time, and panel preference can create a stable offset. The objective is to understand that offset and detect when it changes. Three shared flights across a season are more informative than one large meeting because they reveal repeatability over time.
      </p>
      <p className='my-4'>
        For Ethiopian lots, send origin and buyer feedback at the same descriptor level. &quot;Floral&quot; is more reproducible than an unsupported list of specific flowers; &quot;fermented, high intensity, present in four of five bowls&quot; is more actionable than &quot;funky.&quot; Connect all feedback to the lot code and sample stage already defined in the <Link href='/insights/green-coffee-specification-sheet-template' className='text-amber-700 hover:underline font-semibold'>green coffee specification sheet</Link>.
      </p>

      <h3 id='cadence' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineCheckCircle className='w-8 h-8 text-amber-600' />
        8. Set a Cadence That Matches Buying Risk
      </h3>
      <ul className='list-disc ml-5 my-4 space-y-3'>
        <li><strong>Weekly:</strong> place a hidden duplicate in a normal production or buying table and log individual repeatability.</li>
        <li><strong>Monthly:</strong> run a dedicated four-to-six-coffee internal calibration flight with a stable reference and one boundary coffee.</li>
        <li><strong>Quarterly:</strong> review trends by cupper and attribute, refresh sensory references, and close corrective actions.</li>
        <li><strong>Each buying season:</strong> exchange shared samples with key exporters or importing partners before high-value approvals begin.</li>
        <li><strong>Before a claim:</strong> confirm panel readiness, re-cup blind with a retained reference, and follow the documented <Link href='/insights/green-coffee-quality-claims-guide' className='text-amber-700 hover:underline font-semibold'>green coffee quality claims process</Link>.</li>
      </ul>
      <p className='my-4'>
        Small teams can use the same cadence. Two cuppers, a hidden duplicate, and periodic third-party shared samples produce better evidence than a larger table with no records. When one person makes the final buying decision, preserve an independent second result for boundary lots and arrival disputes.
      </p>

      <h3 id='worksheet' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineClipboardDocumentList className='w-8 h-8 text-amber-600' />
        9. Coffee Cupping Calibration Worksheet
      </h3>
      <p className='my-4'>
        Use one row per cupper and coded coffee. Keep the identity key on a separate page until forms are locked. A spreadsheet can calculate the panel median, spread, cupper bias, and duplicate gap automatically.
      </p>
      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Field</th>
              <th className='p-3 text-left font-bold'>Record</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Session control', 'Date, purpose, lead, form and version, room, water, grinder, roast code'],
              ['Sample control', 'Blind code, lot code in separate key, sample stage, duplicate pair, reference status'],
              ['Individual result', 'Cupper, descriptors, intensities, affective scores, defects, decision, confidence'],
              ['Panel result', 'Median, score spread, primary descriptor agreement, defect detection'],
              ['Cupper result', 'Bias across flight, duplicate gap, missed reference, prior trend'],
              ['Action', 'Preparation check, reference training, shared sample, owner, due date, closure evidence'],
            ].map(([field, record], index) => (
              <tr key={field} className={`border-b border-gray-200 ${index % 2 ? 'bg-gray-50' : ''}`}>
                <td className='p-3 font-semibold'>{field}</td>
                <td className='p-3'>{record}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className='bg-green-50 border border-green-200 rounded-lg p-6 my-8'>
        <h4 className='font-bold text-green-900 mb-3'>Release decision rule</h4>
        <p className='text-sm text-green-900'>
          Make the commercial decision only after confirming sample identity, preparation validity, panel readiness, and the contract criterion. If the panel exceeds its alert limit, repeat the controlled test or obtain an independent result. Never average an obvious preparation error into a pass.
        </p>
      </div>

      <h3 id='faq' className='text-2xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineLightBulb className='w-8 h-8 text-amber-600' />
        Frequently Asked Questions
      </h3>
      <div className='space-y-5'>
        <div className='border border-gray-200 rounded-lg p-5'>
          <h4 className='font-bold text-gray-800 mb-2'>What is coffee cupping calibration?</h4>
          <p className='text-sm text-gray-700'>Coffee cupping calibration is a controlled process for checking whether evaluators apply the same method, understand sensory terms consistently, repeat their own results, and make dependable quality decisions. It uses blind samples, references, duplicate codes, independent forms, performance measures, and corrective practice rather than simply discussing scores around a table.</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5'>
          <h4 className='font-bold text-gray-800 mb-2'>How often should a coffee buying team calibrate?</h4>
          <p className='text-sm text-gray-700'>Place a hidden duplicate in routine cuppings weekly, run a dedicated internal flight monthly, and review performance trends quarterly. Calibrate with important suppliers at least once each buying season. Increase the frequency after staff changes, equipment changes, persistent score drift, or before decisions involving a high-value shipment or quality claim.</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5'>
          <h4 className='font-bold text-gray-800 mb-2'>Do calibrated cuppers need identical scores?</h4>
          <p className='text-sm text-gray-700'>No. Sensory judgments contain normal human variation, and quality impressions may reflect different market preferences. A calibrated panel shows controlled, explainable variation, repeats results within its established limits, agrees on important descriptor categories and defects, and reaches the same commercial decision when applying a written acceptance rule.</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5'>
          <h4 className='font-bold text-gray-800 mb-2'>What is a hidden duplicate in coffee cupping?</h4>
          <p className='text-sm text-gray-700'>A hidden duplicate is one roasted coffee divided and presented under two unrelated blind codes in the same flight. The absolute difference between each cupper&apos;s two results measures within-session repeatability. A large gap triggers a preparation, attention, or sensory review; it should not be concealed by the panel average.</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5'>
          <h4 className='font-bold text-gray-800 mb-2'>How do origin and destination labs calibrate?</h4>
          <p className='text-sm text-gray-700'>Both labs receive sealed portions of one homogenized, identified sample and assess it independently under documented conditions. They then exchange preparation records, descriptors, quality impressions, and defect findings. Repeating shared flights across a season reveals a stable laboratory offset and makes unusual divergence easier to investigate.</p>
        </div>
      </div>

      <h2 className='text-2xl font-extrabold mt-12 mb-4'>Coffee Cupping Calibration for Procurement</h2>
      <p className='my-4'>
        A disciplined <span className='font-bold'>coffee cupping calibration</span> program does not eliminate judgment. It makes judgment traceable. Blind work protects independence, duplicate codes expose repeatability, shared references strengthen language, and trend data tells the quality manager when a result needs investigation. That is the level of evidence a buying team needs before a score becomes a purchase, release, or claim decision.
      </p>

      <div className='bg-amber-100 p-7 rounded-lg border border-amber-300 my-10'>
        <h4 className='font-bold text-xl mb-3'>Calibrate With Current Ethiopian Coffee Samples</h4>
        <p className='my-2'>
          Request traceable offer samples with lot details and origin-side cupping records. Ethio Coffee can support shared-sample calibration so your buying team understands the profile before contract and shipment approval.
        </p>
        <div className='flex flex-wrap gap-3 mt-5'>
          <Link href='/offerings' className='bg-dark text-primary px-5 py-3 rounded font-bold hover:opacity-90'>View Offerings</Link>
          <Link href='/contact-us' className='bg-amber-600 text-white px-5 py-3 rounded font-bold hover:bg-amber-700'>Request Samples</Link>
          <Link href='/ordering-info' className='border border-dark px-5 py-3 rounded font-bold hover:bg-white'>How to Order</Link>
        </div>
      </div>

      <div className='bg-gray-50 border border-gray-200 rounded-lg p-6 my-10'>
        <h3 className='text-xl font-bold mb-5'>Related Articles</h3>
        <div className='grid md:grid-cols-2 gap-8'>
          <div>
            <p className='font-bold text-sm uppercase tracking-wide text-gray-700 mb-3'>Cupping and Sample Control</p>
            <ul className='list-disc ml-5 space-y-2 text-sm'>
              <li><Link href='/insights/how-to-cup-evaluate-ethiopian-coffee-samples' className='text-amber-700 hover:underline font-semibold'>Cup and Evaluate Ethiopian Coffee Samples</Link></li>
              <li><Link href='/insights/green-coffee-sample-roasting-protocol' className='text-amber-700 hover:underline font-semibold'>Green Coffee Sample Roasting Protocol</Link></li>
              <li><Link href='/insights/ethiopian-coffee-sample-approval-guide' className='text-amber-700 hover:underline font-semibold'>Ethiopian Coffee Sample Approval</Link></li>
              <li><Link href='/insights/green-coffee-sampling-protocol' className='text-amber-700 hover:underline font-semibold'>Green Coffee Sampling Protocol</Link></li>
              <li><Link href='/insights/new-sca-coffee-value-assessment' className='text-amber-700 hover:underline font-semibold'>New SCA Coffee Value Assessment</Link></li>
            </ul>
          </div>
          <div>
            <p className='font-bold text-sm uppercase tracking-wide text-gray-700 mb-3'>Quality Systems and Buying</p>
            <ul className='list-disc ml-5 space-y-2 text-sm'>
              <li><Link href='/insights/green-coffee-quality-control-lab-setup-guide' className='text-amber-700 hover:underline font-semibold'>Green Coffee Quality Control Lab Setup</Link></li>
              <li><Link href='/insights/green-coffee-specification-sheet-template' className='text-amber-700 hover:underline font-semibold'>Green Coffee Specification Sheet</Link></li>
              <li><Link href='/insights/green-coffee-receiving-inspection-checklist' className='text-amber-700 hover:underline font-semibold'>Green Coffee Receiving Inspection</Link></li>
              <li><Link href='/insights/green-coffee-quality-claims-guide' className='text-amber-700 hover:underline font-semibold'>Green Coffee Quality Claims</Link></li>
              <li><Link href='/insights/green-coffee-supplier-evaluation-checklist' className='text-amber-700 hover:underline font-semibold'>Green Coffee Supplier Evaluation</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> Published on {date} by Ethio Coffee Import and Export PLC, an origin-connected Ethiopian coffee exporter. Suggested alert limits are internal starting points, not SCA standards or contract terms. Validate the method and limits for your panel before commercial use.
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
