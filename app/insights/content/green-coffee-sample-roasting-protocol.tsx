import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import {
  HiOutlineArrowPath,
  HiOutlineBeaker,
  HiOutlineCheckCircle,
  HiOutlineClipboardDocumentCheck,
  HiOutlineExclamationTriangle,
  HiOutlineFire,
  HiOutlineLightBulb,
  HiOutlineScale,
  HiOutlineSwatch,
} from 'react-icons/hi2'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function GreenCoffeeSampleRoastingProtocol({
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
        A green coffee sample roasting protocol for repeatable buyer evaluations, roast acceptance, reference checks, and lot decisions
      </h2>

      <figure>
        <figcaption className='font-inconsolata my-2'>{title}</figcaption>
        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Green coffee beans turning in a sample roaster during a buyer quality evaluation'
            fill
            objectFit='cover'
            className='w-full h-full'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>
        <figcaption className='font-inconsolata text-xs my-1 text-gray-600'>
          Photo by Matt Webster on Pexels.
        </figcaption>
      </figure>

      <div className='my-4 text-sm bg-amber-50 p-4 rounded-lg border border-amber-200'>
        <span className='font-semibold'>Category:</span>
        <span className='ml-2'>Quality Control / Sample Roasting / Green Coffee Buying / Roaster Resources</span>
      </div>

      <div className='my-4 text-sm text-gray-700'>
        <p className='font-semibold mb-1'>Reference frameworks:</p>
        <ul className='list-disc ml-5 space-y-1'>
          <li>
            <a href='https://sca.coffee/research/coffee-standards' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>
              Specialty Coffee Association standards, including SCA-102 Sample Preparation and Tasting Mechanics
            </a>
          </li>
          <li>
            <a href='https://www.iso.org/standard/44609.html' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>
              ISO 6668:2008 preparation of green coffee samples for sensory analysis
            </a>
          </li>
          <li>
            <a href='https://www.intracen.org/sites/default/files/uploadedFiles/intracenorg/Content/Publications/ITC_Coffee_4th_Report_20210930_web_pages.pdf' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>
              International Trade Centre Coffee Guide, fourth edition
            </a>
          </li>
        </ul>
      </div>

      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-8 border border-amber-200'>
        <h3 className='font-bold text-xl mb-3 flex items-center gap-2'>
          <HiOutlineLightBulb className='text-amber-500 flex-shrink-0' />
          Key Takeaway
        </h3>
        <p className='text-sm leading-relaxed'>
          A buyer&apos;s sample roast is a measuring instrument, not a miniature production roast. Define one purpose, use a stable machine state and fixed batch size, aim for the same verified roast level, cool and label every batch identically, then reject the roast before judging the coffee if scorching, tipping, uneven development, or a missed endpoint could distort the cup. Roast the offer, pre-shipment, arrival, and control samples under the same written protocol. Record enough data for another operator to reproduce the result and for procurement to explain the final lot decision.
        </p>
      </div>

      <div className='my-8 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <HiOutlineClipboardDocumentCheck className='text-amber-600' /> In This Guide
        </h3>
        <ol className='space-y-2 text-sm'>
          <li><a href='#purpose' className='text-amber-700 hover:underline'>1. Separate evaluation roasting from product profiling</a></li>
          <li><a href='#sample-chain' className='text-amber-700 hover:underline'>2. Build the sample chain before heating the roaster</a></li>
          <li><a href='#standard' className='text-amber-700 hover:underline'>3. Turn SCA guidance into a house standard</a></li>
          <li><a href='#baseline' className='text-amber-700 hover:underline'>4. Establish a reproducible baseline profile</a></li>
          <li><a href='#ethiopian-coffee' className='text-amber-700 hover:underline'>5. Handle Ethiopian lot variation without moving the goalposts</a></li>
          <li><a href='#acceptance-gate' className='text-amber-700 hover:underline'>6. Apply the roast acceptance gate</a></li>
          <li><a href='#cupping' className='text-amber-700 hover:underline'>7. Hand accepted roasts into a controlled cupping</a></li>
          <li><a href='#log' className='text-amber-700 hover:underline'>8. Use a buyer-ready sample roast log</a></li>
          <li><a href='#implementation' className='text-amber-700 hover:underline'>9. Implement and audit the protocol</a></li>
          <li><a href='#faq' className='text-amber-700 hover:underline'>10. Frequently asked questions</a></li>
        </ol>
      </div>

      <p className='text-lg leading-relaxed my-4'>
        A <span className='font-bold'>green coffee sample roasting protocol</span> protects a buyer from a quiet but expensive error: blaming the lot for a bad roast. A scorched offer sample can hide floral clarity. An underdeveloped pre-shipment sample can create false cereal or peanut notes. A darker arrival roast can make a sound shipment appear different from its retained reference. If preparation changes at each checkpoint, the resulting scores cannot support a confident purchase, release, or claim.
      </p>
      <p className='my-4'>
        The remedy is not one universal temperature curve. Sample roasters transfer heat differently, probe readings are not interchangeable, and batch sizes change machine response. A useful protocol controls the conditions that can be repeated in your lab, verifies the final roast, and separates roast failure from coffee failure. The procedure below is designed for importers, roasters, exporters, traders, and quality teams evaluating commercial green coffee lots.
      </p>

      <h3 id='purpose' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineScale className='w-8 h-8 text-amber-600' />
        1. Separate Evaluation Roasting from Product Profiling
      </h3>
      <p className='my-4'>
        Start by writing the decision above the roast log. An evaluation roast asks whether the green coffee&apos;s inherent character, consistency, and defects meet a buying specification. A production-development roast asks how to turn an already selected coffee into a product. Combining those jobs introduces preference before procurement has established baseline quality.
      </p>
      <p className='my-4'>
        The International Trade Centre describes sample roasting as a tool for quality and uniformity assessment, product development, and sales or education, while stressing consistency as the primary goal. Those uses are legitimate, but they should be separate batches with separate labels. Approve or reject the green coffee from a neutral, repeatable evaluation roast. Explore filter, espresso, or blend potential only after that gate.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Roast job</th>
              <th className='p-3 text-left font-bold'>Question it answers</th>
              <th className='p-3 text-left font-bold'>Allowed adjustment</th>
              <th className='p-3 text-left font-bold'>Commercial use</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Evaluation roast</td>
              <td className='p-3'>What quality is present in the green coffee?</td>
              <td className='p-3'>Only the bounded changes needed to hit the house endpoint cleanly</td>
              <td className='p-3'>Selection, PSS approval, arrival release, inventory QC</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Development roast</td>
              <td className='p-3'>How could this coffee perform in a chosen product?</td>
              <td className='p-3'>Profile changes guided by the intended brew, roast style, and customer</td>
              <td className='p-3'>Menu design, blend work, production transfer</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Control roast</td>
              <td className='p-3'>Is the machine and operator reproducing the lab standard today?</td>
              <td className='p-3'>None until the deviation is diagnosed and documented</td>
              <td className='p-3'>Session release and operator calibration</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='bg-blue-50 border border-blue-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-2'>One sample may need more than one roast</h4>
        <p className='text-sm text-gray-700'>
          Do not force a small offer sample to answer every question. Reserve enough green coffee for physical inspection, one evaluation roast, a repeat if that roast fails, and a product-development roast where needed. If quantity is tight, protect the repeatable evaluation first and request more coffee before making a production claim.
        </p>
      </div>

      <h3 id='sample-chain' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineClipboardDocumentCheck className='w-8 h-8 text-amber-600' />
        2. Build the Sample Chain Before Heating the Roaster
      </h3>
      <p className='my-4'>
        A perfect roast of the wrong sample proves nothing. Link every bag or jar to the exporter, contract, lot, crop year, origin, process, grade, sample stage, sampling date, and date received. Assign a blind code for the cupping table without removing the traceable laboratory ID. Photograph the sample and label before splitting it.
      </p>
      <p className='my-4'>
        The buyer&apos;s three commercial checkpoints are the offer sample, pre-shipment sample, and arrival sample. The <Link href='/insights/ethiopian-coffee-sample-approval-guide' className='text-amber-700 hover:underline font-semibold'>Ethiopian coffee sample approval workflow</Link> explains what each checkpoint authorizes. Sample roasting supplies comparable sensory evidence inside that workflow; it does not establish whether a pre-shipment sample was drawn representatively or whether an arrival sample belongs to the shipment.
      </p>

      <ol className='space-y-3 my-6 list-decimal pl-6'>
        <li><span className='font-semibold'>Confirm identity.</span> Match the label, offer sheet, contract, bag marks, and sample stage before opening the package.</li>
        <li><span className='font-semibold'>Inspect condition.</span> Note damaged packaging, foreign odor, condensation, insects, or mixed labels before handling the beans.</li>
        <li><span className='font-semibold'>Homogenize gently.</span> Mix the received sample without hand-picking attractive beans, then divide it with a repeatable method.</li>
        <li><span className='font-semibold'>Measure relevant green data.</span> Record moisture, water activity, density, screen distribution, and physical defects when the buying specification requires them.</li>
        <li><span className='font-semibold'>Allocate the sample.</span> Mark portions for grading, evaluation roast, repeat roast, retained green reference, and any additional analysis.</li>
        <li><span className='font-semibold'>Create the blind code.</span> Keep commercial identity in the lab system while exposing only a neutral code to tasters.</li>
      </ol>

      <p className='my-4'>
        Moisture and density help an operator anticipate heat demand, but they are not permission to give favored lots an easier roast. Use the measurement methods in the <Link href='/insights/green-coffee-moisture-content-water-activity-guide' className='text-amber-700 hover:underline font-semibold'>green coffee moisture and water activity guide</Link> and <Link href='/insights/green-coffee-density-quality-control-protocol' className='text-amber-700 hover:underline font-semibold'>green coffee density QC protocol</Link>, then keep all adjustments inside the written house limits.
      </p>

      <h3 id='standard' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineSwatch className='w-8 h-8 text-amber-600' />
        3. Turn SCA Guidance into a House Standard
      </h3>
      <p className='my-4'>
        Current SCA standards list SCA-102 Coffee Value Assessment: Sample Preparation and Tasting Mechanics as the preparation framework. Its sample-roasting principle is outcome-based: reach the intended roast level, avoid roasting problems, and keep conditions as even as possible across samples. The SCA&apos;s published preparation materials identify an Agtron Gourmet ground reading of 63 as the cupping roast target. Labs using another meter should document the corresponding scale and validation, not assume the displayed numbers are interchangeable.
      </p>
      <p className='my-4'>
        That distinction matters because the familiar eight-to-twelve-minute rule comes from the heritage cupping protocol and remains a useful diagnostic window on many drum machines, but it is not a universal recipe for every current sample-roasting technology. Treat time as a controlled house parameter after calibration. Treat verified endpoint and freedom from roast defects as the acceptance criteria.
      </p>
      <p className='my-4'>
        ISO 6668 takes a broader trade approach. It specifies preparing green coffee for sensory analysis and notes that consistent preparation may support comparative assessment or shipment acceptance when parties agree. A buyer can therefore reference SCA-102 for the lab method, while the contract separately names the approved lab, reference sample, tolerances, response deadline, and commercial remedy.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>House-standard field</th>
              <th className='p-3 text-left font-bold'>What must be fixed or verified</th>
              <th className='p-3 text-left font-bold'>Why it matters</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Machine and batch</td>
              <td className='p-3'>Roaster ID, software or firmware version, batch mass, preheat state</td>
              <td className='p-3'>Defines the thermal system being repeated</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Environment</td>
              <td className='p-3'>Room temperature, significant humidity or pressure change, exhaust condition</td>
              <td className='p-3'>Explains session drift and altitude effects</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Profile controls</td>
              <td className='p-3'>Charge rule, power and airflow steps, target time band, drop rule</td>
              <td className='p-3'>Lets another trained operator repeat the roast</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Endpoint</td>
              <td className='p-3'>Validated color scale, sample preparation, reading window, tolerance</td>
              <td className='p-3'>Stops time or probe temperature from standing in for development</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Cooling and storage</td>
              <td className='p-3'>Cooling method and maximum time, container, roast and cup timestamps</td>
              <td className='p-3'>Prevents continued roasting and unequal post-roast handling</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Acceptance</td>
              <td className='p-3'>Color tolerance, visual faults, control-coffee tolerance, repeat authority</td>
              <td className='p-3'>Keeps a failed roast from becoming a failed lot</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 id='baseline' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineFire className='w-8 h-8 text-amber-600' />
        4. Establish a Reproducible Baseline Profile
      </h3>
      <p className='my-4'>
        Build the baseline with a stable control coffee before evaluating live offers. Choose a clean, well-known lot with enough retained volume to cover several calibration sessions. Bring the roaster to thermal equilibrium, not merely to the displayed charge temperature. On a drum machine, one or more seasoning batches may be necessary. On an electric profile roaster, follow the manufacturer&apos;s warm-up and between-batch recovery procedure.
      </p>

      <div className='grid md:grid-cols-2 gap-4 my-6'>
        <div className='border border-gray-200 rounded-lg p-5'>
          <h4 className='font-bold text-amber-800 mb-2'>Before charge</h4>
          <ul className='text-sm text-gray-700 list-disc pl-5 space-y-2'>
            <li>Clean chaff, drum, tray, and sample containers</li>
            <li>Confirm the roaster and color meter are in service</li>
            <li>Use the fixed batch mass and weigh to the logged precision</li>
            <li>Record sample code and green measurements</li>
            <li>Verify thermal readiness with the house method</li>
          </ul>
        </div>
        <div className='border border-gray-200 rounded-lg p-5'>
          <h4 className='font-bold text-amber-800 mb-2'>During and after roast</h4>
          <ul className='text-sm text-gray-700 list-disc pl-5 space-y-2'>
            <li>Follow the approved power and airflow sequence</li>
            <li>Log yellowing, first crack, drop, and any intervention</li>
            <li>Cool immediately with the same method every time</li>
            <li>Record roasted mass and calculate mass loss</li>
            <li>Inspect, measure color, seal, label, and timestamp</li>
          </ul>
        </div>
      </div>

      <p className='my-4'>
        Do not copy another laboratory&apos;s charge temperature into your SOP. Probe placement, sensor type, drum material, airflow, burner power, and batch-to-capacity ratio can make identical displayed temperatures produce different coffee. Calibrate the profile by repeated control roasts, verified ground color, physical inspection, and blind sensory results. Record the machine-specific settings as your operating method, not as an industry truth.
      </p>
      <p className='my-4'>
        Mass loss can flag drift but should not replace color or tasting. Two coffees with different initial moisture and composition can reach the intended sensory endpoint at different mass-loss percentages. Use it as a trend line within comparable coffees. Investigate a sudden change before judging the lot.
      </p>

      <div className='bg-red-50 border border-red-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-red-800 mb-2 flex items-center gap-2'>
          <HiOutlineExclamationTriangle className='w-6 h-6' /> Never chase the curve at the expense of the sample
        </h4>
        <p className='text-sm text-gray-700'>
          A familiar curve is evidence only on the machine that produced it. If a dense or high-moisture coffee moves differently, the operator may use pre-approved bounded corrections to reach the shared endpoint. Freehand changes that make every coffee follow the same screen trace can introduce scorching, stalling, or excess development while the graph looks tidy.
        </p>
      </div>

      <h3 id='ethiopian-coffee' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineArrowPath className='w-8 h-8 text-amber-600' />
        5. Handle Ethiopian Lot Variation Without Moving the Goalposts
      </h3>
      <p className='my-4'>
        Ethiopian samples can differ in density, screen distribution, moisture, processing style, and physical uniformity even within one region. A washed high-elevation Yirgacheffe may absorb heat differently from a natural Sidama lot. Small screen beans can color externally before larger beans in a mixed sample. Naturals may also reveal quakers only after roasting. The protocol should anticipate those differences without rewarding or penalizing an origin through a different target.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Observed condition</th>
              <th className='p-3 text-left font-bold'>Controlled response</th>
              <th className='p-3 text-left font-bold'>Do not do this</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Higher density or moisture</td>
              <td className='p-3'>Use the validated higher-energy or recovery variant, then verify the same endpoint</td>
              <td className='p-3'>Extend the roast indefinitely until the outside looks dark enough</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Broad screen distribution</td>
              <td className='p-3'>Record the distribution, use the approved airflow strategy, inspect internal and external evenness</td>
              <td className='p-3'>Remove small beans unless the contract sample is specified by screen</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Natural-process lot</td>
              <td className='p-3'>Watch rate near first crack, cool promptly, count pale quakers after roast</td>
              <td className='p-3'>Darken the batch to conceal uneven color or fermentation character</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Low sample quantity</td>
              <td className='p-3'>Use the validated small-batch profile or request more sample</td>
              <td className='p-3'>Run an unvalidated partial charge and treat the score as contractual evidence</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        Limit the house protocol to a few validated profile families, such as standard, higher-energy, and small-batch. Define the objective trigger for each one. The operator chooses from that library before the roast based on measured green properties, not after seeing the supplier name or expected score. The endpoint, cooling rule, roast-fault criteria, and cupping method stay constant.
      </p>
      <p className='my-4'>
        Origin-side and destination labs should exchange more than scores. Share the roaster model, batch size, profile version, ground-color result, roast date, cup date, and green measurements. That data will not erase differences in water, altitude, equipment, or assessors, but it makes a two-point score gap diagnosable instead of personal.
      </p>

      <h3 id='acceptance-gate' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineCheckCircle className='w-8 h-8 text-amber-600' />
        6. Apply the Roast Acceptance Gate Before Cupping
      </h3>
      <p className='my-4'>
        Give the roast its own pass or fail decision. The operator records that decision before cuppers see a score. A roast outside the color tolerance, visibly scorched or tipped, badly uneven without a green explanation, or affected by a machine interruption should be repeated from the reserved sample. Mark both records; never delete the failed batch from the audit trail.
      </p>

      <div className='grid md:grid-cols-3 gap-4 my-6'>
        <div className='border border-green-200 bg-green-50 rounded-lg p-5'>
          <h4 className='font-bold text-green-800 mb-2'>Accept</h4>
          <p className='text-sm text-gray-700'>Target endpoint is within tolerance, development is even enough for the sample type, no material scorch or tip is present, cooling and labeling are correct, and the control coffee is in range.</p>
        </div>
        <div className='border border-amber-300 bg-amber-50 rounded-lg p-5'>
          <h4 className='font-bold text-amber-800 mb-2'>Review</h4>
          <p className='text-sm text-gray-700'>One indicator is unusual but not clearly disqualifying. Hold the batch, inspect ground color and internal development, review the control, and let the authorized quality lead decide whether to repeat.</p>
        </div>
        <div className='border border-red-200 bg-red-50 rounded-lg p-5'>
          <h4 className='font-bold text-red-800 mb-2'>Reject and repeat</h4>
          <p className='text-sm text-gray-700'>Endpoint is missed, roast faults are visible or sensory contamination is likely, the machine alarmed, cooling failed, identity is uncertain, or the control coffee shows that the session is out of calibration.</p>
        </div>
      </div>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Possible roast problem</th>
              <th className='p-3 text-left font-bold'>Physical or cup signal</th>
              <th className='p-3 text-left font-bold'>Buyer action</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Underdevelopment</td>
              <td className='p-3'>Very light interior, cereal, raw nut, grassy sharpness</td>
              <td className='p-3'>Repeat before attributing the note to the green coffee</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Scorching or tipping</td>
              <td className='p-3'>Localized dark marks, smoky bitterness, harsh finish</td>
              <td className='p-3'>Reject the roast and inspect charge energy and agitation</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Stalling or baking</td>
              <td className='p-3'>Muted aroma, flat sweetness, papery or hollow presentation</td>
              <td className='p-3'>Repeat and investigate energy or airflow through the middle and late roast</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Excess development</td>
              <td className='p-3'>Roast flavor, bitterness, loss of origin clarity</td>
              <td className='p-3'>Repeat to the target endpoint; do not lower the coffee score</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Green-coffee nonuniformity</td>
              <td className='p-3'>Pale quakers or mixed development persists across valid repeats</td>
              <td className='p-3'>Record the physical evidence and assess it against the lot specification</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        One repeat answers whether preparation caused the result. Repeatedly roasting until a preferred score appears creates selection bias. The SOP should allow a repeat for a defined roast failure, identity problem, or authorized investigation, while preserving every result and naming which batch supports the commercial decision.
      </p>

      <h3 id='cupping' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineBeaker className='w-8 h-8 text-amber-600' />
        7. Hand Accepted Roasts into a Controlled Cupping
      </h3>
      <p className='my-4'>
        Seal accepted batches in clean, odor-free containers and use the same post-roast interval for all coffees in the session. Record roast and cup times. Grind and brew with the adopted sensory standard, consistent water, dose, vessel volume, grind distribution, and sequence. The <Link href='/insights/how-to-cup-evaluate-ethiopian-coffee-samples' className='text-amber-700 hover:underline font-semibold'>Ethiopian coffee cupping and evaluation guide</Link> covers the sensory stage in detail.
      </p>
      <p className='my-4'>
        Roast the retained reference and candidate sample in the same session whenever the decision depends on a match. Randomize cup positions and use blind codes. Place a stable control coffee in the session. If the control cups outside its established range, investigate water, grinder, roast, and panel calibration before approving or rejecting a commercial lot.
      </p>

      <div className='bg-blue-50 border border-blue-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3'>Recommended evidence stack for a PSS decision</h4>
        <ul className='grid md:grid-cols-2 gap-x-6 gap-y-2 text-sm list-disc pl-5'>
          <li>Retained offer sample and current PSS roasted together</li>
          <li>Blind cup codes with identities revealed after scoring</li>
          <li>Green measurements and physical grading results</li>
          <li>Accepted roast logs and color readings for both samples</li>
          <li>Duplicate cups and a session control coffee</li>
          <li>Written tolerance, decision, owner, and response timestamp</li>
        </ul>
      </div>

      <p className='my-4'>
        Small sensory movement does not automatically mean contract failure. Crop samples are biological materials, and the offer-to-PSS agreement should define tolerances for score, cup profile, defect, moisture, screen, and other material attributes. Where a significant mismatch remains after valid preparation, document it through the <Link href='/insights/green-coffee-quality-claims-guide' className='text-amber-700 hover:underline font-semibold'>green coffee quality claims process</Link> instead of debating roast curves by email.
      </p>

      <h3 id='log' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineClipboardDocumentCheck className='w-8 h-8 text-amber-600' />
        8. Use a Buyer-Ready Sample Roast Log
      </h3>
      <p className='my-4'>
        The log should let a second operator reproduce the roast, a quality manager audit it, and a buyer connect it to the contract decision. Keep raw values as well as pass or fail labels. If software stores the curve, export or back up the record under a stable sample ID rather than relying on a private operator account.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Log group</th>
              <th className='p-3 text-left font-bold'>Required fields</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Identity</td>
              <td className='p-3'>Lab ID, blind code, supplier, lot, contract, sample stage, crop year, origin, process, grade</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Green condition</td>
              <td className='p-3'>Date received, package condition, moisture, water activity, density, screen, defects, green mass</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Roaster state</td>
              <td className='p-3'>Machine ID, profile version, operator, date, ambient notes, preheat and seasoning status</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Roast events</td>
              <td className='p-3'>Charge, turning point if meaningful, yellow, first crack, drop, power and airflow changes, alarms</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Verification</td>
              <td className='p-3'>Roasted mass, mass loss, ground color and scale, cooling time, physical faults, roast acceptance</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Sensory and decision</td>
              <td className='p-3'>Cup time, method, control result, score or assessment, match status, decision, approver, response date</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        Version the profile whenever a meaningful control changes. A replacement probe, software update, exhaust service, different batch size, new color meter, or relocation may require revalidation. Keep the old version attached to historical roasts. Otherwise a future quality investigation may compare results produced by two procedures that happen to share one name.
      </p>

      <h3 id='implementation' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineArrowPath className='w-8 h-8 text-amber-600' />
        9. Implement and Audit the Protocol
      </h3>
      <p className='my-4'>
        A small roastery can implement this system without a multi-barrel lab. The <Link href='/insights/green-coffee-quality-control-lab-setup-guide' className='text-amber-700 hover:underline font-semibold'>green coffee quality control lab setup guide</Link> describes equipment tiers, including a logged small-batch or production-roaster approach at low sample volume. The essential controls are stable batch preparation, a repeatable profile, a verified endpoint, a reference coffee, and documented acceptance.
      </p>

      <ol className='space-y-3 my-6 list-decimal pl-6'>
        <li><span className='font-semibold'>Write version 1.</span> Define purpose, machine, batch, profile, endpoint, cooling, storage, repeat rule, and records.</li>
        <li><span className='font-semibold'>Calibrate with a control.</span> Run several batches across days and operators; verify color and blind sensory consistency.</li>
        <li><span className='font-semibold'>Set tolerances from evidence.</span> Use observed repeatability, not a precision the equipment cannot deliver.</li>
        <li><span className='font-semibold'>Qualify operators.</span> Require them to reproduce accepted control roasts and identify common roast faults.</li>
        <li><span className='font-semibold'>Run a control in live sessions.</span> Hold commercial decisions when the control or equipment check fails.</li>
        <li><span className='font-semibold'>Review exceptions monthly.</span> Track repeat rate, color misses, machine drift, operator drift, and supplier disputes.</li>
        <li><span className='font-semibold'>Recalibrate with origin partners.</span> Exchange roast and cup data before the crop&apos;s main buying window.</li>
      </ol>

      <div className='bg-amber-50 border border-amber-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3'>Three operating metrics worth tracking</h4>
        <ul className='space-y-2 text-sm text-gray-700 list-disc pl-5'>
          <li><span className='font-semibold'>First-pass roast acceptance rate:</span> reveals operator, profile, or machine instability before it affects buying speed.</li>
          <li><span className='font-semibold'>Control-coffee sensory range:</span> shows whether preparation and panel results remain comparable over time.</li>
          <li><span className='font-semibold'>Decision turnaround:</span> measures elapsed time from receipt to communicated approval, hold, or rejection.</li>
        </ul>
      </div>

      <p className='my-4'>
        Audit the process against decisions, not paperwork volume. A complete log that cannot identify which roast was cupped or which lot was approved is still a failed record. Conversely, a concise record that preserves identity, method, endpoint, acceptance, sensory result, and authority can resolve questions months after the coffee enters production.
      </p>

      <h3 id='faq' className='text-2xl font-extrabold mt-12 mb-4'>
        Frequently Asked Questions
      </h3>
      <div className='space-y-4 my-6'>
        <div className='border border-gray-200 rounded-lg p-5'>
          <h4 className='font-bold text-gray-800 mb-2'>What is the purpose of a green coffee sample roast?</h4>
          <p className='text-sm text-gray-600'>A green coffee sample roast prepares a small, representative batch for consistent sensory evaluation. Its purpose is to reveal inherent quality, uniformity, and defects without letting roast character dominate. Buyers use accepted sample roasts to evaluate offers, approve pre-shipment samples, verify arrivals, and monitor stored lots.</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5'>
          <h4 className='font-bold text-gray-800 mb-2'>What roast color should a cupping sample reach?</h4>
          <p className='text-sm text-gray-600'>SCA preparation materials identify a target ground reading of 63 on the Agtron Gourmet scale for the standard cupping roast. Record the meter, scale, sample preparation, measurement timing, and house tolerance. Readings from different instruments are not automatically interchangeable, so validate the corresponding target before use.</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5'>
          <h4 className='font-bold text-gray-800 mb-2'>Does every sample roast have to take 8 to 12 minutes?</h4>
          <p className='text-sm text-gray-600'>No universal time fits every machine. Eight to twelve minutes is a familiar heritage-protocol range and a useful starting diagnostic for many drum roasters. Current SCA guidance emphasizes the intended roast level, absence of roasting problems, and consistent conditions. Validate a machine-specific time band instead of copying temperatures or times.</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5'>
          <h4 className='font-bold text-gray-800 mb-2'>Can a production roaster be used for green coffee samples?</h4>
          <p className='text-sm text-gray-600'>Yes, if the machine can roast the available sample mass repeatably and the lab validates a stable profile and endpoint. Production schedules and low batch-to-capacity ratios often reduce consistency. When sample volume grows, a dedicated sample roaster usually improves turnaround, repeatability, and separation from production contamination.</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5'>
          <h4 className='font-bold text-gray-800 mb-2'>When should a buyer repeat a sample roast?</h4>
          <p className='text-sm text-gray-600'>Repeat when the roast misses its endpoint, shows scorching, tipping, stalling, uneven development beyond the sample&apos;s condition, machine interruption, failed cooling, or uncertain identity. Preserve the failed record and state why a repeat was authorized. Do not keep roasting until a preferred cup score appears.</p>
        </div>
      </div>

      <p className='my-4'>
        A green coffee sample roasting protocol turns roasting from an undocumented influence into controlled buyer evidence. Fix what your lab can repeat, verify the roast before judging the coffee, use retained references and a session control, and preserve the connection from sample identity to commercial decision. That discipline protects good lots from bad roasts and protects buyers from approving results they cannot reproduce.
      </p>

      <div className='bg-amber-100 border border-amber-300 rounded-xl p-8 my-10'>
        <h3 className='text-2xl font-extrabold mb-3'>Evaluate Ethiopian Coffee Before You Commit</h3>
        <p className='text-gray-700 mb-6'>
          Review current lots, request traceable samples, and align offer, pre-shipment, and arrival checks with an origin-connected Ethiopian exporter.
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
            <h4 className='font-bold text-lg mb-3 text-amber-800'>Samples and Sensory Evaluation</h4>
            <ul className='space-y-2 list-disc pl-5'>
              <li><Link href='/insights/ethiopian-coffee-sample-approval-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Sample Approval</Link></li>
              <li><Link href='/insights/how-to-cup-evaluate-ethiopian-coffee-samples' className='text-amber-700 hover:underline'>Cup and Evaluate Ethiopian Coffee Samples</Link></li>
              <li><Link href='/insights/new-sca-coffee-value-assessment' className='text-amber-700 hover:underline'>SCA Coffee Value Assessment Guide</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-bold text-lg mb-3 text-amber-800'>Green Coffee Measurements</h4>
            <ul className='space-y-2 list-disc pl-5'>
              <li><Link href='/insights/green-coffee-density-quality-control-protocol' className='text-amber-700 hover:underline'>Green Coffee Density QC Protocol</Link></li>
              <li><Link href='/insights/green-coffee-moisture-content-water-activity-guide' className='text-amber-700 hover:underline'>Moisture Content and Water Activity</Link></li>
              <li><Link href='/insights/green-coffee-quality-control-defects-grading' className='text-amber-700 hover:underline'>Green Coffee Defects and Grading</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-bold text-lg mb-3 text-amber-800'>Buyer Quality Systems</h4>
            <ul className='space-y-2 list-disc pl-5'>
              <li><Link href='/insights/green-coffee-quality-control-lab-setup-guide' className='text-amber-700 hover:underline'>Green Coffee QC Lab Setup</Link></li>
              <li><Link href='/insights/green-coffee-specification-sheet-template' className='text-amber-700 hover:underline'>Green Coffee Specification Sheet</Link></li>
              <li><Link href='/insights/green-coffee-quality-claims-guide' className='text-amber-700 hover:underline'>Green Coffee Quality Claims</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-bold text-lg mb-3 text-amber-800'>Ethiopian Coffee Sourcing</h4>
            <ul className='space-y-2 list-disc pl-5'>
              <li><Link href='/insights/ethiopian-coffee-offer-sheet-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Offer Sheets</Link></li>
              <li><Link href='/insights/ethiopian-coffee-contracts-payment-terms-guide' className='text-amber-700 hover:underline'>Coffee Contracts and Payment Terms</Link></li>
              <li><Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='text-amber-700 hover:underline'>Source Green Coffee from Ethiopia</Link></li>
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
          <span className='font-bold'>About This Insight:</span> This green coffee sample roasting protocol was prepared by Ethio Coffee Import and Export PLC on {date} for importers, roasters, exporters, traders, and quality teams. Equipment, standards, contracts, and lot conditions differ. Verify the current applicable standard and validate every profile on your own roaster before using it for a purchase or release decision.
        </div>
      </div>
    </>
  )
}
