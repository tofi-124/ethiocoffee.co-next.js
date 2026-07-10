import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import {
  HiOutlineLightBulb,
  HiOutlineClipboardDocumentList,
  HiOutlineShieldCheck,
  HiOutlineBeaker,
  HiOutlineScale,
  HiOutlineBuildingLibrary,
  HiOutlineExclamationTriangle,
  HiOutlineQuestionMarkCircle,
} from 'react-icons/hi2'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function GreenCoffeeMycotoxinTestingGuide({
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
        Green coffee mycotoxin testing gives buyers a workflow for screening OTA risk, writing usable lab briefs, and deciding when an Ethiopian lot should be released, held, or rejected.
      </h2>

      <figure>
        <figcaption className='font-inconsolata my-2'>{title}</figcaption>
        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Green coffee mycotoxin testing guide with sealed sample bags, lab reports, and Ethiopian export lots prepared for shipment'
            fill
            objectFit='cover'
            className='w-full h-full'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>
      </figure>

      <div className='my-4 text-sm bg-amber-50 p-4 rounded-lg border border-amber-200'>
        <span className='font-semibold'>Category:</span>
        <span className='ml-2'>Food Safety / Quality Assurance / Green Coffee Buying / Importer Resources</span>
      </div>

      <div className='my-4 text-sm text-gray-700'>
        <p className='font-semibold mb-1'>Reference frameworks:</p>
        <ul className='list-disc ml-5 space-y-1'>
          <li>
            <a
              href='https://www.fda.gov/food/natural-toxins-food/mycotoxins'
              target='_blank'
              rel='noopener noreferrer'
              className='text-amber-700 hover:underline'
            >
              U.S. FDA mycotoxins overview
            </a>
          </li>
          <li>
            <a
              href='https://food.ec.europa.eu/food-safety/chemical-safety/contaminants/catalogue/mycotoxins_en'
              target='_blank'
              rel='noopener noreferrer'
              className='text-amber-700 hover:underline'
            >
              European Commission mycotoxins catalogue
            </a>
          </li>
          <li>
            <a
              href='https://www.fao.org/fao-who-codexalimentarius/codex-texts/codes-of-practice/en/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-amber-700 hover:underline'
            >
              Codex codes of practice, including CXC 69-2009 for coffee
            </a>
          </li>
        </ul>
      </div>

      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-8 border border-amber-200'>
        <h3 className='font-bold text-xl mb-3 flex items-center gap-2'>
          <HiOutlineLightBulb className='text-amber-400 flex-shrink-0' />Key Takeaway
        </h3>
        <p className='text-sm leading-relaxed'>
          Green coffee mycotoxin testing works best when buyers treat it as a release gate, not a last-minute compliance add-on. The practical order is simple: identify the trigger, take a representative composite sample, send a lab brief that names the target analyte and reporting limit, retain a sealed duplicate, and tie the result to a pre-agreed commercial decision. Most costly disputes happen when one of those five steps is missing.
        </p>
      </div>

      <div className='my-8 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <HiOutlineClipboardDocumentList className='text-amber-600' /> In This Guide
        </h3>
        <ol className='space-y-2 text-sm'>
          <li><a href='#procurement-gate' className='text-amber-700 hover:underline'>1. Why Green Coffee Mycotoxin Testing Belongs in Procurement</a></li>
          <li><a href='#what-to-test' className='text-amber-700 hover:underline'>2. What to Test, and What Actually Triggers It</a></li>
          <li><a href='#sampling-discipline' className='text-amber-700 hover:underline'>3. Sampling Discipline Before You Pay the Lab</a></li>
          <li><a href='#lab-brief' className='text-amber-700 hover:underline'>4. How to Write a Lab Brief That Produces a Decision</a></li>
          <li><a href='#decision-matrix' className='text-amber-700 hover:underline'>5. Release, Hold, Retest, or Reject</a></li>
          <li><a href='#commercial-control' className='text-amber-700 hover:underline'>6. Contract Control, Buyer Personas, and Cost Sharing</a></li>
          <li><a href='#faq' className='text-amber-700 hover:underline'>7. FAQ</a></li>
        </ol>
      </div>

      <p className='text-lg leading-relaxed my-4'>
        <span className='font-bold'>Green coffee mycotoxin testing</span> is not the same topic as general grading, moisture control, or a post-arrival claim. It sits one level above them. Buyers use it when physical signals, destination-market rules, or supplier risk tell them that a lot needs a documented safety decision before cargo is cleared to ship or cleared to roast. That is why the strongest testing workflow starts in procurement, not in the quality lab after a problem appears.
      </p>
      <p className='my-4'>
        The broader market still leaves a gap here. Regulatory pages explain contaminants, official methods, and legal frameworks. Industry associations publish standards, contracts, and guidance. Lab providers describe what they can analyze. Very few pages translate those inputs into a buyer workflow for Ethiopian coffee: when to screen for ochratoxin A, when to add aflatoxins or pesticide residues, how to sample a commercial lot without fooling yourself, and how to tie the result to a release decision that both buyer and exporter understand.
      </p>
      <p className='my-4'>
        This article fills that gap without repeating other site pages. For moisture and water activity science, use our <Link href='/insights/green-coffee-moisture-content-water-activity-guide' className='text-amber-700 hover:underline font-semibold'>green coffee moisture content and water activity guide</Link>. For supplier scoring, use the <Link href='/insights/green-coffee-supplier-evaluation-checklist' className='text-amber-700 hover:underline font-semibold'>supplier evaluation checklist</Link>. For post-arrival disputes, see the <Link href='/insights/green-coffee-quality-claims-guide' className='text-amber-700 hover:underline font-semibold'>quality claims guide</Link>. Here the focus is narrower: pre-shipment and pre-release testing discipline for commercial buyers.
      </p>

      <h3 id='procurement-gate' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineShieldCheck className='w-8 h-8 text-amber-600' />
        1. Why Green Coffee Mycotoxin Testing Belongs in Procurement
      </h3>

      <p className='my-4'>
        The FDA notes that coffee is one of the foods susceptible to mycotoxins and specifically names ochratoxin A as a contaminant associated with poor drying and storage conditions. That matters because most importers do not buy a sterile laboratory sample. They buy a moving commercial lot that has passed through drying, warehousing, bagging, inland transport, and often sea freight staging before the container is booked. By the time a roaster smells a musty cup at destination, the commercial leverage is already weaker.
      </p>
      <p className='my-4'>
        Procurement is the right control point because it decides whether the lot moves, whether the exporter gets paid, and whether the buyer accepts the risk profile. In commercial practice, mycotoxin testing is not something you run on every bag the same way. It is a risk-tiered tool. Buyers use it when process conditions, storage exposure, destination regulation, or supplier history make sensory approval alone too weak a gate.
      </p>

      <div className='bg-blue-50 border border-blue-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3'>Where the market still underperforms</h4>
        <p className='text-sm text-gray-700'>
          Most pages about coffee contamination stop at the phrase “test before shipment.” That advice is incomplete. A useful buyer workflow must answer four operational questions: what analyte is being screened, what sampling method produced the lab sample, what reporting limit makes the result commercially useful, and what action follows the number. Without those four answers, the certificate creates paperwork, not control.
        </p>
      </div>

      <p className='my-4'>
        This also explains why food safety testing should not be outsourced mentally to the exporter. A strong exporter can coordinate accredited labs and documentation, but the buyer still decides the decision point. If the lot is being bought for an EU roast program, a private-label grocery blend, or a first shipment from a new network partner, the buyer must know which result would trigger release, conditional release, retesting, or rejection. Otherwise the test happens after the commercial commitment, not before it.
      </p>

      <h3 id='what-to-test' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineBeaker className='w-8 h-8 text-amber-600' />
        2. What to Test, and What Actually Triggers It
      </h3>

      <p className='my-4'>
        In Ethiopian coffee trade, the first contaminant question is usually ochratoxin A, not because it is the only risk, but because it is the contaminant most often discussed in coffee-specific regulation, trade guidance, and border screening. Codex maintains a coffee-specific code of practice for preventing and reducing OTA contamination, and the European Commission maintains formal sampling and analytical rules for mycotoxin control in foodstuffs. Buyers should treat OTA as the default mycotoxin screen when a coffee-specific concern exists.
      </p>
      <p className='my-4'>
        Aflatoxins still matter, but not every Ethiopian lot needs an aflatoxin panel as the default first step. The FDA treats aflatoxins as a serious health risk across foods in general, and some destination markets or random inspections may include them in imported coffee controls. In coffee buying, the practical pattern is this: use OTA as the coffee-first analyte, then add aflatoxins, pesticide residues, or a broader panel when the destination rulebook, product channel, or visible process risk justifies it.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Trigger</th>
              <th className='p-3 text-left font-bold'>Priority test</th>
              <th className='p-3 text-left font-bold'>Why it matters</th>
              <th className='p-3 text-left font-bold'>Buyer action</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>High moisture or water activity at pre-shipment</td>
              <td className='p-3'>OTA screen</td>
              <td className='p-3'>Elevated available water increases mold pressure and makes sensory approval less reliable as a sole gate</td>
              <td className='p-3'>Hold release until lab result and retain duplicate sample</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Musty odor, visible mold, stained bags, or liner damage</td>
              <td className='p-3'>OTA plus confirmatory follow-up if suspect</td>
              <td className='p-3'>Physical warning signs suggest the problem is already operational, not theoretical</td>
              <td className='p-3'>Escalate to exporter immediately and preserve chain of custody</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>First shipment from a new supplier or new warehouse route</td>
              <td className='p-3'>Baseline multi-panel, usually OTA plus residues as needed by market</td>
              <td className='p-3'>You are testing the workflow as much as the lot</td>
              <td className='p-3'>Use the result to set the supplier’s future testing tier</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>EU or similarly strict destination compliance program</td>
              <td className='p-3'>OTA with any additional destination-specific residues or contaminants</td>
              <td className='p-3'>Regulatory exposure and border delay cost can exceed the test cost quickly</td>
              <td className='p-3'>Make the panel part of pre-shipment documentation</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Aged stock, re-bagged stock, or mixed warehouse history</td>
              <td className='p-3'>OTA screen with stronger sample retention</td>
              <td className='p-3'>Lot identity and storage history are weaker, so the sample must work harder</td>
              <td className='p-3'>Tighten commercial release terms and inspect more bags physically</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='bg-green-50 border border-green-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3'>Operational rule</h4>
        <p className='text-sm text-gray-700'>
          Testing should answer a real business question. If no threshold changes the commercial action, the panel is poorly designed. Good testing does not mean “test everything.” It means “test the smallest set of analytes that meaningfully changes the release decision for this lot, this market, and this supplier relationship.”
        </p>
      </div>

      <h3 id='sampling-discipline' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineScale className='w-8 h-8 text-amber-600' />
        3. Sampling Discipline Before You Pay the Lab
      </h3>

      <p className='my-4'>
        The weakest part of many commercial testing programs is not the lab. It is the sample. Mycotoxins are not always distributed evenly, which is why official control rules in the EU use large composite sampling and strict homogenisation methods for foodstuffs. In Commission Regulation 401/2006, the coffee-product sections use multiple incremental samples and aggregate sample logic because one convenient grab sample is not a reliable representation of a commercial lot.
      </p>
      <p className='my-4'>
        A buyer does not need to copy an official enforcement program bag for bag, but the principle is non-negotiable: do not ship a certificate built from the prettiest bag in the stack. Pull incremental samples from different positions, combine them, homogenise the composite, and split it into a lab portion plus a sealed retained portion. That single habit prevents a large share of avoidable disputes.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Commercial lot size</th>
              <th className='p-3 text-left font-bold'>Suggested incremental pulls</th>
              <th className='p-3 text-left font-bold'>Composite target</th>
              <th className='p-3 text-left font-bold'>What to retain</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Trial lot under 50 bags</td>
              <td className='p-3'>5 to 8 bag positions</td>
              <td className='p-3'>1 kg mixed sample</td>
              <td className='p-3'>Two sealed 250 g retainers plus photos of bag marks</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Half container or 50 to 160 bags</td>
              <td className='p-3'>8 to 12 bag positions across top, middle, and back rows</td>
              <td className='p-3'>1 to 2 kg mixed sample</td>
              <td className='p-3'>One lab sample and one duplicate held by buyer or agreed third party</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Full container or larger</td>
              <td className='p-3'>10 to 16 bag positions with documented spread</td>
              <td className='p-3'>2 kg mixed sample</td>
              <td className='p-3'>Duplicate retain sample, chain-of-custody note, and container loading record</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-r-lg my-6'>
        <h4 className='font-bold text-lg mb-3'>A fast warning sign</h4>
        <p className='text-sm text-gray-700'>
          If the exporter offers a lab report but cannot explain where the sample was pulled from, whether it was a composite, or whether a duplicate was retained, treat the document as informative only. It may still be useful, but it is not yet strong enough to control the commercial decision on its own.
        </p>
      </div>

      <p className='my-4'>
        Sampling discipline also protects the exporter. If a buyer later claims that a lot failed at destination, both parties need a reference sample they trust. That is where the <Link href='/insights/green-coffee-quality-claims-guide' className='text-amber-700 hover:underline font-semibold'>quality claims workflow</Link> starts. The dispute is much easier to settle when both sides agreed on the composite sample logic before cargo moved.
      </p>

      <h3 id='lab-brief' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineBuildingLibrary className='w-8 h-8 text-amber-600' />
        4. How to Write a Lab Brief That Produces a Decision
      </h3>

      <p className='my-4'>
        Buyers often ask for “an OTA test” as if that alone solves the problem. It does not. The lab still needs a matrix, target analyte, reporting unit, and practical reporting threshold. The FDA now uses multi-mycotoxin LC-MS/MS methods in its own monitoring work, and most capable commercial labs use similarly strong analytical platforms for coffee panels. The buyer’s task is to make sure the lab result is commercially interpretable, not just scientifically valid.
      </p>

      <div className='grid md:grid-cols-2 gap-4 my-6'>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Every lab brief should name</h4>
          <ul className='space-y-2 text-sm text-gray-700'>
            <li>Analyte or panel requested, for example OTA only or OTA plus aflatoxins.</li>
            <li>Matrix, usually green coffee beans, not roasted coffee.</li>
            <li>Reporting unit, typically µg/kg or ppb.</li>
            <li>Desired reporting limit that fits your destination market or contract threshold.</li>
            <li>Sample ID, lot code, and bag-mark reference.</li>
            <li>Turnaround target and whether a suspect result should trigger confirmatory analysis.</li>
          </ul>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Every usable report should show</h4>
          <ul className='space-y-2 text-sm text-gray-700'>
            <li>Method used, ideally LC-MS/MS or equivalent validated confirmatory method.</li>
            <li>Result value, not just pass or fail language.</li>
            <li>Limit of quantification or detection.</li>
            <li>Sample receipt date and report date.</li>
            <li>Laboratory accreditation details or clear quality-system reference.</li>
            <li>Exact sample identification that matches the commercial lot.</li>
          </ul>
        </div>
      </div>

      <p className='my-4'>
        The question of screening versus confirmatory testing matters as well. If the program is being used as a quick pre-shipment gate, a screening method may be enough for routine negative decisions, provided suspect samples move immediately into confirmatory analysis. If the shipment is high value, first of season, or contract-sensitive, many buyers skip straight to confirmatory work to avoid a second delay loop.
      </p>

      <div className='bg-amber-50 border border-amber-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3'>Buyer persona example</h4>
        <p className='text-sm text-gray-700'>
          A mid-size German importer booking three Ethiopian containers per quarter usually gains more from a documented onboarding protocol than from testing every repeat lot forever. Their best model is a baseline onboarding panel, then risk-triggered retesting tied to moisture drift, bag damage, or route changes. A small U.S. specialty roaster importing one container from a new network partner may prefer to test the first commercial lot and then rely on retained samples plus stronger <Link href='/insights/green-coffee-supplier-evaluation-checklist' className='text-amber-700 hover:underline font-semibold'>supplier controls</Link> if the relationship stabilizes.
        </p>
      </div>

      <h3 id='decision-matrix' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineExclamationTriangle className='w-8 h-8 text-amber-600' />
        5. Release, Hold, Retest, or Reject
      </h3>

      <p className='my-4'>
        A test result matters only when it changes the lot status. Buyers should pre-define those statuses before the sample is sent. This removes improvisation, protects the relationship, and shortens the time between report and action.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Status</th>
              <th className='p-3 text-left font-bold'>Typical trigger</th>
              <th className='p-3 text-left font-bold'>What buyer does next</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Release</td>
              <td className='p-3'>Result is compliant, physical sample is clean, and sample identity is secure</td>
              <td className='p-3'>Approve shipment, archive report, and keep duplicate retainer until arrival</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Conditional release</td>
              <td className='p-3'>Result is acceptable but physical risk remains, such as route humidity exposure or re-bagged stock</td>
              <td className='p-3'>Ship only with extra arrival checks, stronger packaging instructions, or agreed destination testing</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Hold</td>
              <td className='p-3'>Suspect result, inconsistent sample identity, or physical evidence that conflicts with the report</td>
              <td className='p-3'>Freeze shipment, notify exporter, and send retained or duplicate sample for confirmatory work</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Reject</td>
              <td className='p-3'>Confirmed non-compliance or documented condition that makes the lot commercially unsafe</td>
              <td className='p-3'>Invoke contract remedy, agree disposal or reconditioning path if applicable, and document chain fully</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        The most expensive mistake is the ambiguous middle. Buyers receive a weak report, feel uneasy, but allow the lot to move “for schedule reasons.” That turns a manageable hold into an arrival dispute. If the lot genuinely deserves movement, label it conditional release and define the added controls. If it does not, hold it. Commercial ambiguity is often more expensive than the testing itself.
      </p>

      <div className='bg-red-50 border border-red-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3'>What should force a hold immediately</h4>
        <ul className='space-y-2 text-sm text-gray-700'>
          <li>The sample ID on the report does not match the lot code or bag marks.</li>
          <li>The sample shows musty odor or visible mold while the report appears unusually clean.</li>
          <li>The exporter cannot confirm whether a retained duplicate exists.</li>
          <li>The lab result is reported without a quantifiable value or method reference.</li>
          <li>The buyer learns the lot was re-bagged or warehoused differently after the sample was taken.</li>
        </ul>
      </div>

      <h3 id='commercial-control' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineBuildingLibrary className='w-8 h-8 text-amber-600' />
        6. Contract Control, Buyer Personas, and Cost Sharing
      </h3>

      <p className='my-4'>
        Associations such as the Green Coffee Association and the European Coffee Federation exist for a reason: coffee disputes are easier to resolve when contract language is standard and evidence is preserved early. Mycotoxin control does not need a separate legal system, but it does need a few explicit clauses.
      </p>

      <div className='grid md:grid-cols-2 gap-4 my-6'>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Clauses worth adding</h4>
          <ul className='space-y-2 text-sm text-gray-700'>
            <li>Who instructs the lab and who approves the panel.</li>
            <li>Which sample is binding for pre-shipment testing.</li>
            <li>Who holds the duplicate retained sample.</li>
            <li>What lot status follows a suspect result.</li>
            <li>How confirmatory testing is commissioned and who pays first.</li>
            <li>What remedy applies if a confirmed result fails the agreed threshold.</li>
          </ul>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Cost-sharing logic that usually works</h4>
          <ul className='space-y-2 text-sm text-gray-700'>
            <li>Buyer pays baseline onboarding tests for new suppliers.</li>
            <li>Exporter pays when a lot-specific risk is origin-side and already visible before loading.</li>
            <li>Buyer and exporter split costs when a result is part of a recurring compliance program.</li>
            <li>Party proven responsible by confirmatory evidence absorbs retest and remedy costs.</li>
          </ul>
        </div>
      </div>

      <p className='my-4'>
        The right structure depends on buyer type. A private-label importer supplying supermarkets usually wants tighter pre-shipment paperwork, lower tolerance for undocumented risk, and a direct path from suspect result to shipment hold. A specialty roaster with deep supplier trust may accept more conditional releases, provided retained samples, packaging controls, and arrival checks are strong. Neither model is universally better. The mistake is mixing them, using loose specialty-trade habits in a compliance-heavy retail channel or overly rigid retail paperwork for every small seasonal lot.
      </p>
      <p className='my-4'>
        This is where <Link href='/insights/ethiopian-coffee-contracts-payment-terms-guide' className='text-amber-700 hover:underline font-semibold'>contract structure</Link>, <Link href='/insights/green-coffee-shipping-documents-checklist' className='text-amber-700 hover:underline font-semibold'>document control</Link>, and <Link href='/insights/green-coffee-quality-claims-guide' className='text-amber-700 hover:underline font-semibold'>claims readiness</Link> come together. Green coffee mycotoxin testing is not a standalone box to tick. It is one control inside a broader commercial system. When that system is well built, the testing budget feels small. When it is weak, even a clean result does not remove the underlying risk.
      </p>

      <p className='my-4'>
        Green coffee mycotoxin testing should therefore appear in the buyer workflow before release, in the contract before shipment, and in the dispute file before an argument starts. That is the practical standard importers should apply when sourcing Ethiopian coffee through an origin-connected exporter and a multi-step logistics chain.
      </p>

      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Build a Safer Ethiopian Coffee Buying Workflow</h4>
        <p className='my-2'>
          If your buying team needs Ethiopian lots backed by clear sample discipline, origin-side coordination, and commercial documentation that stands up under review, we can structure the workflow before cargo is booked.
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
            <h4 className='font-bold text-gray-800 mb-2 flex items-center gap-2'>
              <HiOutlineQuestionMarkCircle className='text-amber-600' />
              Do I need OTA testing on every Ethiopian lot?
            </h4>
            <p className='text-sm text-gray-600'>
              Not always. Most professional buyers use a risk-tiered approach. Test every lot only when the market channel, compliance program, or supplier history requires it. For repeat suppliers, many teams move to trigger-based testing tied to moisture drift, bag damage, route changes, or first lots of season.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2 flex items-center gap-2'>
              <HiOutlineQuestionMarkCircle className='text-amber-600' />
              Who should pay for pre-shipment mycotoxin testing?
            </h4>
            <p className='text-sm text-gray-600'>
              The cleanest answer is to decide that before the sample is sent. Buyers often fund onboarding panels, while exporters may fund lot-specific tests when the risk is origin-side and visible before loading. Shared compliance programs usually work best with shared cost language and a clear remedy if a confirmatory failure appears.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2 flex items-center gap-2'>
              <HiOutlineQuestionMarkCircle className='text-amber-600' />
              Can roasting fix an OTA problem in green coffee?
            </h4>
            <p className='text-sm text-gray-600'>
              Buyers should not plan on roasting as the commercial solution. OTA control is fundamentally a prevention issue tied to drying, storage, and lot handling. Once contamination risk is real, the correct response is documented testing and a release decision, not an assumption that roasting will reliably remove the problem.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2 flex items-center gap-2'>
              <HiOutlineQuestionMarkCircle className='text-amber-600' />
              What sample should be retained for a dispute?
            </h4>
            <p className='text-sm text-gray-600'>
              Retain a sealed duplicate from the same homogenised composite used for the lab submission, labeled with lot code, date, sampler, and bag-mark references. A retained sample from some other bag or from a later pull is weak evidence and often turns a solvable quality discussion into a procedural argument.
            </p>
          </div>
        </div>
      </section>

      <div className='my-10 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4'>Related Articles</h3>
        <div className='grid md:grid-cols-2 gap-4'>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Quality and Stability</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/green-coffee-moisture-content-water-activity-guide' className='text-amber-700 hover:underline'>Green Coffee Moisture Content and Water Activity Guide</Link></li>
              <li>&bull; <Link href='/insights/green-coffee-quality-control-defects-grading' className='text-amber-700 hover:underline'>Green Coffee Quality Control, Defects and Grading</Link></li>
              <li>&bull; <Link href='/insights/green-coffee-shelf-life-storage-guide' className='text-amber-700 hover:underline'>Green Coffee Shelf Life and Storage Guide</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Risk Control</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/green-coffee-supplier-evaluation-checklist' className='text-amber-700 hover:underline'>Green Coffee Supplier Evaluation Checklist</Link></li>
              <li>&bull; <Link href='/insights/green-coffee-quality-claims-guide' className='text-amber-700 hover:underline'>Green Coffee Quality Claims Guide</Link></li>
              <li>&bull; <Link href='/insights/green-coffee-shipping-documents-checklist' className='text-amber-700 hover:underline'>Green Coffee Shipping Documents Checklist</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Trade Execution</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/ethiopian-coffee-contracts-payment-terms-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Contracts and Payment Terms Guide</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-offer-sheet-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Offer Sheet Guide</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-export-process-buyers-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Export Process Buyer’s Guide</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Logistics and Handling</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/specialty-coffee-storage-freight-logistics' className='text-amber-700 hover:underline'>Specialty Coffee Storage in Sea Freight</Link></li>
              <li>&bull; <Link href='/insights/green-coffee-packaging-bag-types-guide' className='text-amber-700 hover:underline'>Green Coffee Packaging, Bag Types and Buyer’s Guide</Link></li>
              <li>&bull; <Link href='/insights/importing-ethiopian-coffee-to-germany' className='text-amber-700 hover:underline'>Importing Ethiopian Coffee to Germany</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> Written by Ethio Coffee Import and Export PLC, an origin-connected Ethiopian coffee exporter with three decades of sourcing relationships across Yirgacheffe, Sidamo, Guji, Harar, Limu, and Jimma.
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