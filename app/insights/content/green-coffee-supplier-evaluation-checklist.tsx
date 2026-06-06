import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import {
  HiOutlineCheckCircle,
  HiOutlineClipboardDocumentList,
  HiOutlineClock,
  HiOutlineCurrencyDollar,
  HiOutlineDocumentText,
  HiOutlineExclamationTriangle,
  HiOutlineLightBulb,
  HiOutlineMagnifyingGlass,
  HiOutlineQuestionMarkCircle,
  HiOutlineScale,
  HiOutlineShieldCheck,
} from 'react-icons/hi2'

type InsightContentProps = { title: string; date: string; large_image_url: string }

export default function GreenCoffeeSupplierEvaluationChecklist({
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
        A green coffee supplier evaluation checklist for scoring Ethiopian suppliers before samples, contracts, and container risk stack up
      </h2>

      <figure>
        <figcaption className='font-inconsolata my-2'>{title}</figcaption>
        <div className='w-full aspect-[5/3] overflow-hidden rounded-md bg-gray-200 flex items-center justify-center'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Green coffee supplier evaluation checklist for Ethiopian coffee buyers reviewing lot documents and samples'
            fill
            objectFit='cover'
            className='w-full h-full'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>
      </figure>

      <div className='my-4 text-sm bg-amber-50 p-4 rounded-lg border border-amber-200'>
        <span className='font-semibold'>Category:</span>
        <span className='ml-2'>Trade Guidance / Supplier Due Diligence / Green Coffee Buying / Importer Resources</span>
      </div>

      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-8 border border-amber-200'>
        <h3 className='font-bold text-xl mb-3 flex items-center gap-2'>
          <HiOutlineLightBulb className='text-amber-400 flex-shrink-0' /> Key Takeaway
        </h3>
        <p className='text-sm leading-relaxed'>
          A green coffee supplier evaluation checklist should do two things quickly: eliminate suppliers that cannot support your buying process, and rank the ones that can. For Ethiopian sourcing, that means combining hard gates such as lot identity, sample discipline, and documentation readiness with a weighted scorecard that measures quality control, compliance support, commercial clarity, and delivery reliability. Buyers who separate these stages waste less sample budget, sign fewer weak contracts, and replace fewer shipments at higher emergency cost.
        </p>
      </div>

      <div className='my-8 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <HiOutlineClipboardDocumentList className='text-amber-600' /> In This Guide
        </h3>
        <ol className='space-y-2 text-sm'>
          <li><a href='#why-checklist' className='text-amber-700 hover:underline'>1. Why a green coffee supplier evaluation checklist matters in 2026</a></li>
          <li><a href='#hard-gates' className='text-amber-700 hover:underline'>2. The four hard gates before you request samples</a></li>
          <li><a href='#scorecard' className='text-amber-700 hover:underline'>3. A 100-point supplier scorecard for Ethiopian buying</a></li>
          <li><a href='#documents' className='text-amber-700 hover:underline'>4. The document pack buyers should demand</a></li>
          <li><a href='#consistency' className='text-amber-700 hover:underline'>5. How to control sample-to-bulk drift</a></li>
          <li><a href='#personas' className='text-amber-700 hover:underline'>6. How different buyer types should weight the checklist</a></li>
          <li><a href='#workflow' className='text-amber-700 hover:underline'>7. A 30-day supplier onboarding workflow</a></li>
          <li><a href='#red-flags' className='text-amber-700 hover:underline'>8. Red flags that should stop the deal</a></li>
          <li><a href='#faq' className='text-amber-700 hover:underline'>9. FAQ</a></li>
        </ol>
      </div>

      <p className='text-lg leading-relaxed my-4'>
        A <span className='font-bold'>green coffee supplier evaluation checklist</span> should help a buyer reject weak suppliers before they absorb lab time, legal review, and freight exposure. Many articles about buying coffee tell you to ask better questions. Very few tell you which answers should end the conversation, which answers deserve a second sample round, and which answers justify moving a supplier into contract review.
      </p>
      <p className='my-4'>
        That gap matters more in 2026 than it did two years ago. The <a href='https://www.ico.org/' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline font-semibold'>International Coffee Organization&apos;s March 2026 Coffee Market Report</a> showed its Composite Indicator Price averaging 273.70 US cents per pound, while exports in the first six months of coffee year 2025/26 rose 3.3% to 70.91 million bags. In practical terms, coffee is available, but supplier failure still costs buyers real money because paperwork, timing, and quality mismatches are harder to fix than the price gap that triggered the bad decision in the first place.
      </p>
      <p className='my-4'>
        Competitor pages usually stop at broad advice such as origin, price, logistics, and certifications. They rarely turn due diligence into a procurement tool. This article is designed for importers, roasters, and sourcing teams buying Ethiopian coffee professionally. It assumes you already know what profile you want. The missing question is whether the supplier can deliver that profile repeatedly, support your documentation needs, and hold up when the workflow becomes operational instead of aspirational.
      </p>

      <h3 id='why-checklist' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineScale className='w-8 h-8 text-amber-600' />
        1. Why a Green Coffee Supplier Evaluation Checklist Matters in 2026
      </h3>
      <p className='my-4'>
        The most expensive supplier mistakes are no longer purely sensory. A weak supplier can still send a pleasant offer sample. The real losses tend to show up later: the bulk lot does not match the sample, moisture data are outdated, the shipment window slips, the contract language is vague, or the supplier cannot produce traceability records when an EU buyer asks for them. Those failures hit margin in three places at once: replacement cost, production disruption, and staff time.
      </p>
      <p className='my-4'>
        Ethiopian sourcing magnifies this because buyers often balance several variables at once: regional fit, process type, sample timing, export documentation, and destination-market compliance. If you are comparing a washed Limu lot for a private-label espresso line against a natural Guji for a seasonal single origin, you are not merely buying flavor. You are buying a workflow, and the supplier is either strong enough to support that workflow or not.
      </p>
      <div className='bg-blue-50 border border-blue-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3'>Original market view</h4>
        <p className='text-sm text-gray-700'>
          In a high-volatility market, buyers should often value execution quality more than a small origin-side discount. Saving $0.15 to $0.25 per kilogram on a weak supplier can disappear quickly if a missed shipment window forces replacement buying, duplicated sample rounds, or extra warehouse and financing costs at destination. That is why a checklist is not bureaucracy. It is price protection.
        </p>
      </div>
      <p className='my-4'>
        This checklist also fills a site-level gap. We already cover <Link href='/insights/ethiopian-coffee-offer-sheet-guide' className='text-amber-700 hover:underline font-semibold'>offer sheets</Link>, <Link href='/insights/ethiopian-coffee-sample-approval-guide' className='text-amber-700 hover:underline font-semibold'>sample approval</Link>, <Link href='/insights/ethiopian-coffee-traceability-guide' className='text-amber-700 hover:underline font-semibold'>traceability</Link>, and <Link href='/insights/how-to-choose-ethiopian-coffee-export-company' className='text-amber-700 hover:underline font-semibold'>how to choose an Ethiopian coffee export company</Link>. What buyers still need is a single scoreable framework that pulls those workflows together before supplier selection becomes a contract commitment.
      </p>

      <h3 id='hard-gates' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineShieldCheck className='w-8 h-8 text-amber-600' />
        2. Build Your Green Coffee Supplier Evaluation Checklist Around Four Hard Gates
      </h3>
      <p className='my-4'>
        Start with pass or fail gates. If a supplier fails here, do not move them into scorecard ranking. This step protects your team from spending time on suppliers that cannot even support basic commercial evaluation.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Gate</th>
              <th className='p-3 text-left font-bold'>What you ask for</th>
              <th className='p-3 text-left font-bold'>Pass standard</th>
              <th className='p-3 text-left font-bold'>Stop signal</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>1. Commercial identity</td>
              <td className='p-3'>Registered company details, named contact, product scope, destination markets served</td>
              <td className='p-3'>Clear company identity, consistent email signature, coherent explanation of what they sell and where</td>
              <td className='p-3'>Different names across emails, invoices, and sample labels, or vague role in the supply chain</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>2. Lot transparency</td>
              <td className='p-3'>Lot code, origin, process, crop timing, bag count, sample stage</td>
              <td className='p-3'>Lot-specific answers with traceable identifiers</td>
              <td className='p-3'>Generic claims such as “Ethiopian natural available now” with no supporting lot data</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>3. Document readiness</td>
              <td className='p-3'>Offer sheet, physical data, price basis, sample workflow, contract format</td>
              <td className='p-3'>Documents arrive cleanly and quickly enough to support internal review</td>
              <td className='p-3'>Repeated clarification loops, missing price basis, or no sample pathway defined</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>4. Communication discipline</td>
              <td className='p-3'>Response time, specificity, willingness to answer technical questions, revision control</td>
              <td className='p-3'>Answers are specific, dated, and internally consistent</td>
              <td className='p-3'>Urgent pressure to commit before questions are answered, or answers change without explanation</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        Gate one is about legitimacy, but also about operational clarity. A supplier may be a real business and still be the wrong fit if they cannot explain whether they are offering exporter-held stock, warehoused parchment awaiting milling, or a forward allocation from a washing station cluster. Buyers should know exactly what stage of the chain they are entering.
      </p>
      <p className='my-4'>
        Gate two matters because unlabeled or weakly labeled samples are a future dispute waiting to happen. If you cannot connect an offer sample to a lot code, sample date, and shipment path, you cannot govern the transaction later. This is where the new article deliberately differs from broader sourcing guides. The question is not “can this supplier talk about origin.” The question is “can this supplier preserve lot identity under commercial pressure.”
      </p>
      <p className='my-4'>
        Gate three and four separate polished sales language from usable operational support. Buyers do not need perfect prose. They need timestamps, lot references, clear Incoterms, sample labels, and coherent revisions. A supplier who cannot manage those basics during the courtship phase will not become more organized once cash, freight, and timing are in play.
      </p>

      <h3 id='scorecard' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineCurrencyDollar className='w-8 h-8 text-amber-600' />
        3. Use a 100-Point Scorecard After the Gates
      </h3>
      <p className='my-4'>
        After a supplier passes the gates, score them. This keeps first impressions from dominating the decision and gives procurement, quality, and commercial teams a shared language.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Pillar</th>
              <th className='p-3 text-left font-bold'>Weight</th>
              <th className='p-3 text-left font-bold'>What strong suppliers show</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Lot fit and origin knowledge</td>
              <td className='p-3'>15</td>
              <td className='p-3'>Can match regions, grades, and processes to your use case without overselling every lot as premium</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>QC and sample integrity</td>
              <td className='p-3'>20</td>
              <td className='p-3'>Current moisture and water activity data, defensible sample labels, and a disciplined pre-shipment sample workflow</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Documentation and compliance support</td>
              <td className='p-3'>20</td>
              <td className='p-3'>Offer sheets, contract drafts, shipment documentation logic, and traceability evidence aligned to the destination market</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Logistics and execution</td>
              <td className='p-3'>15</td>
              <td className='p-3'>Clear shipment windows, realistic readiness statements, and a history of handling delays without going silent</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Commercial clarity</td>
              <td className='p-3'>15</td>
              <td className='p-3'>Transparent price basis, payment expectations, approval milestones, and change-control language</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Relationship resilience</td>
              <td className='p-3'>15</td>
              <td className='p-3'>Consistent communication, willingness to escalate issues early, and evidence of repeat buying relationships</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='bg-green-50 border border-green-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3'>How to interpret totals</h4>
        <p className='text-sm text-gray-700'>
          85 to 100 suggests a supplier ready for commercial onboarding. 70 to 84 usually means usable, but only with written controls around samples, documents, or shipment timing. Below 70 is often acceptable only for exploratory sampling, not for a meaningful buying program. A single automatic-fail condition should still override the total.
        </p>
      </div>

      <div className='bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-r-lg my-6'>
        <h4 className='font-bold text-lg mb-3'>Automatic fail conditions</h4>
        <ul className='space-y-2 text-sm text-gray-700'>
          <li>Sample labels do not match the offer sheet or lot references.</li>
          <li>Price is quoted without a clear basis such as FOB or FCA.</li>
          <li>The supplier refuses pre-shipment sampling on commercial lots.</li>
          <li>The supplier cannot explain how traceability claims are created and maintained.</li>
          <li>Contract language is missing quality tolerances, shipment windows, or approval steps.</li>
        </ul>
      </div>

      <p className='my-4'>
        A useful refinement is to score with two people from different functions. A green buyer may overweight cup quality, while an operations or compliance lead may spot a documentation weakness that later becomes the real source of loss. If the scores differ by more than 10 points, the disagreement itself is actionable and deserves a structured follow-up call with the supplier.
      </p>

      <h3 id='documents' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineDocumentText className='w-8 h-8 text-amber-600' />
        4. The Document Pack Buyers Should Demand
      </h3>
      <p className='my-4'>
        Buyers should not request everything at once. They should request the right documents at the right stage. The first-pass pack should be strong enough to support a go or no-go decision on sampling and supplier progression.
      </p>

      <div className='grid md:grid-cols-2 gap-4 my-6'>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Before first sample approval</h4>
          <ul className='space-y-2 text-sm text-gray-700'>
            <li>Offer sheet with lot code, region, process, grade, bag count, and shipment window.</li>
            <li>Physical data, ideally moisture, water activity, and defect or prep notes.</li>
            <li>Clear price basis and payment expectation.</li>
            <li>Sample stage definition, offer sample, stock lot, or pre-shipment sample.</li>
          </ul>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Before contract signature</h4>
          <ul className='space-y-2 text-sm text-gray-700'>
            <li>Contract draft with quality tolerances and sample approval milestones.</li>
            <li>Packaging specification and liner format.</li>
            <li>Shipment responsibility by Incoterm.</li>
            <li>Document list covering invoice, packing list, bill of lading path, and origin support records.</li>
          </ul>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>For EU-bound coffee</h4>
          <ul className='space-y-2 text-sm text-gray-700'>
            <li>Traceability plan showing how lot identifiers connect farm, station, mill, and export lot.</li>
            <li>Geolocation support for relevant plots if the importer needs EUDR-ready records.</li>
            <li>Evidence that the supplier can separate lots and prevent mixing after sample approval.</li>
            <li>Named contact responsible for compliance responses, not only sales.</li>
          </ul>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>For quality assurance teams</h4>
          <ul className='space-y-2 text-sm text-gray-700'>
            <li>Sample roast guidance or at least consistent sample condition notes.</li>
            <li>Test dates for physical data, not just values.</li>
            <li>Statement of which sample should govern approval.</li>
            <li>Claim-handling path if arrival quality diverges from the approved reference.</li>
          </ul>
        </div>
      </div>

      <p className='my-4'>
        This document discipline aligns with what EU buyers increasingly expect. The <a href='https://www.cbi.eu/market-information/coffee/buyer-requirements' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline font-semibold'>CBI coffee buyer requirements guide</a> notes that European buyers commonly evaluate screen size, defects, bean appearance, smell, moisture, water activity, and sample roasting before approving green coffee. That does not mean every supplier must provide a laboratory dossier on first contact. It does mean a serious supplier should be able to show where the data come from and when they were last updated.
      </p>
      <div className='bg-blue-50 border border-blue-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3'>EUDR support is now a supplier-evaluation issue</h4>
        <p className='text-sm text-gray-700'>
          Coffee is explicitly covered by <a href='https://eur-lex.europa.eu/eli/reg/2023/1115/oj/eng' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline font-semibold'>Regulation (EU) 2023/1115</a>. The legal duty sits with the operator placing coffee on the EU market, not with the Ethiopian exporter alone. But buyers should still test whether a supplier can support that duty with plot-level geolocation data, supplier identity, and traceable lot movement. If the supplier cannot explain how those records are assembled, the importer is inheriting preventable risk.
        </p>
      </div>
      <p className='my-4'>
        For practical documentation templates already on this site, use our <Link href='/insights/ethiopian-coffee-offer-sheet-guide' className='text-amber-700 hover:underline font-semibold'>offer sheet guide</Link> and <Link href='/insights/ethiopian-coffee-contracts-payment-terms-guide' className='text-amber-700 hover:underline font-semibold'>contracts and payment terms guide</Link>. This article is not repeating those fields line by line. It is telling you what to demand, when to demand it, and how much missing information is too much missing information.
      </p>

      <h3 id='consistency' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineMagnifyingGlass className='w-8 h-8 text-amber-600' />
        5. How to Control Sample-to-Bulk Drift Before It Becomes a Claim
      </h3>
      <p className='my-4'>
        Supplier evaluation is incomplete if it stops at the first sample. Strong suppliers prove reliability by preserving identity between offer sample, pre-shipment sample, and bulk lot. Weak suppliers let those stages blur together.
      </p>
      <ol className='font-inconsolata my-4 list-decimal ml-5'>
        <li className='my-3'>
          <span className='font-bold'>Tie every sample to a lot code.</span> If the sample bag says one thing and the offer sheet says another, treat that as a process failure, not a cosmetic mistake.
        </li>
        <li className='my-3'>
          <span className='font-bold'>Write down the governing sample stage.</span> Many disputes come from buyers approving an early offer sample while the supplier treats a later milled lot as commercially equivalent.
        </li>
        <li className='my-3'>
          <span className='font-bold'>Retain a sealed reference split.</span> If you approve a pre-shipment sample, keep a dated internal control sample to benchmark arrival performance.
        </li>
        <li className='my-3'>
          <span className='font-bold'>Define response windows.</span> If your team needs 10 days to approve a sample but the supplier says the lot is moving in 72 hours, you do not have a workable buying process yet.
        </li>
        <li className='my-3'>
          <span className='font-bold'>Match bulk release to written tolerances.</span> Moisture drift, delayed milling, packaging substitutions, or a changed shipment month should trigger a review before loading, not an apology after arrival.
        </li>
      </ol>

      <div className='border-l-4 border-amber-500 pl-6 bg-gray-50 p-4 my-6'>
        <p className='text-sm text-gray-700'>
          Case example: a Hamburg importer sourcing four containers of washed Grade 2 coffee for a private-label espresso line should usually accept a slightly lower cup score from a supplier with disciplined pre-shipment sampling, dated moisture data, and stable shipment windows, rather than a flashier sample from a supplier whose sample labels and volume claims keep changing. In repeat programs, consistency often beats excitement.
        </p>
      </div>
      <p className='my-4'>
        If your approval gate also includes contamination screening, pair this checklist with our <Link href='/insights/green-coffee-mycotoxin-testing-guide' className='text-amber-700 hover:underline font-semibold'>green coffee mycotoxin testing guide</Link> so the sample logic, retained split, and lab brief stay aligned before a supplier moves into contract review.
      </p>
      <p className='my-4'>
        If you need a detailed operating procedure for these checkpoints, use our <Link href='/insights/ethiopian-coffee-sample-approval-guide' className='text-amber-700 hover:underline font-semibold'>sample approval guide</Link>. If the bulk lot still fails after approval, the next workflow is in our <Link href='/insights/green-coffee-quality-claims-guide' className='text-amber-700 hover:underline font-semibold'>quality claims guide</Link>. The point here is that supplier evaluation should predict whether you will need those tools often or rarely.
      </p>

      <h3 id='personas' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineCheckCircle className='w-8 h-8 text-amber-600' />
        6. How Different Buyer Types Should Weight the Checklist
      </h3>
      <p className='my-4'>
        Not every buyer should score suppliers the same way. The right weighting depends on what failure hurts your business most.
      </p>
      <div className='grid md:grid-cols-2 gap-4 my-6'>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>EU importer under due diligence pressure</h4>
          <p className='text-sm text-gray-700'>
            Weight documentation and compliance support highest. A supplier with good cup quality but weak lot traceability will create internal friction every time the importer needs to prove origin, geolocation, or lot continuity.
          </p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Specialty roaster building a seasonal menu</h4>
          <p className='text-sm text-gray-700'>
            Weight sample integrity and QC highest. If the supplier cannot hold profile continuity from sample through shipment, the roaster will burn time recalibrating roast plans and rewriting sales promises.
          </p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>HoReCa or private-label program buyer</h4>
          <p className='text-sm text-gray-700'>
            Weight logistics and change control highest. A café chain or hotel group can absorb small sensory variation more easily than stockouts, rushed reformulation, or repeated shipment-date surprises.
          </p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>First-time Ethiopian origin buyer</h4>
          <p className='text-sm text-gray-700'>
            Weight commercial clarity highest. A first-time buyer needs a supplier who explains sample stages, contract mechanics, packaging, and shipping responsibility in plain language without forcing the buyer to infer critical terms.
          </p>
        </div>
      </div>
      <p className='my-4'>
        This is where the checklist becomes commercially useful instead of merely descriptive. A buyer sourcing Ethiopian coffee for a 40-location café chain should not rank suppliers the same way as a boutique roaster hunting one spectacular natural lot. Using the same weighting for both often produces the wrong winner.
      </p>

      <h3 id='workflow' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineClock className='w-8 h-8 text-amber-600' />
        7. A 30-Day Supplier Onboarding Workflow
      </h3>
      <p className='my-4'>
        Buyers do not need a six-month sourcing project to use this framework. A disciplined 30-day cycle is usually enough to shortlist, score, sample, and advance one or two suppliers.
      </p>
      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Timing</th>
              <th className='p-3 text-left font-bold'>Buyer action</th>
              <th className='p-3 text-left font-bold'>Decision output</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Days 1 to 3</td>
              <td className='p-3'>Send a structured enquiry with target profiles, volume, timeline, and destination-market needs</td>
              <td className='p-3'>Shortlist suppliers that pass gate one and gate four</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Days 4 to 7</td>
              <td className='p-3'>Collect offer sheets, physical data, price basis, and sample details</td>
              <td className='p-3'>Reject weak suppliers before sample shipping cost is incurred</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Days 8 to 15</td>
              <td className='p-3'>Cup samples, apply the scorecard, and document follow-up questions</td>
              <td className='p-3'>Advance top suppliers into contract and compliance review</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Days 16 to 22</td>
              <td className='p-3'>Review contract logic, packaging, shipment windows, and traceability support</td>
              <td className='p-3'>Decide whether supplier is trial-order ready</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Days 23 to 30</td>
              <td className='p-3'>Confirm the governing sample stage and pre-shipment approval path</td>
              <td className='p-3'>Approve trial order or hold for another sample cycle</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className='my-4'>
        Suppliers that cannot move through this sequence with clarity are telling you something useful. They may still be capable of selling coffee, but they are not yet capable of supporting your procurement process at the level your business needs.
      </p>

      <h3 id='red-flags' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineExclamationTriangle className='w-8 h-8 text-amber-600' />
        8. Red Flags That Should Stop the Deal
      </h3>
      <div className='bg-red-50 p-6 rounded-lg my-6 border border-red-200'>
        <h4 className='font-bold text-lg mb-3 text-red-800'>Pause or walk away if you see these patterns</h4>
        <ul className='list-disc ml-5 space-y-2 text-sm text-gray-700'>
          <li>The supplier changes lot identifiers or sample descriptions without preserving revision history.</li>
          <li>Price moves faster than the supporting data, or the supplier pushes commitment before sample review is complete.</li>
          <li>Questions about moisture, packaging, or shipment timing are answered with generic reassurance instead of current data.</li>
          <li>Traceability claims sound strong in marketing language but collapse when you ask what level is actually available.</li>
          <li>Pre-shipment approval is treated as optional for commercial lots.</li>
          <li>Different departments within the supplier organization tell different stories about payment, lead time, or available volume.</li>
          <li>The supplier can describe the coffee but not the operational path from sample to container.</li>
          <li>The supplier becomes difficult to reach once the conversation turns from discovery to evidence.</li>
        </ul>
      </div>
      <p className='my-4'>
        A useful discipline is to distinguish between inexperience and opacity. Newer suppliers can sometimes become good partners if they are honest, responsive, and willing to document the workflow properly. Opaque suppliers are different. They hide uncertainty until it becomes your problem.
      </p>
      <p className='my-4'>
        That is the real conclusion of this article. The best green coffee supplier evaluation checklist is not designed to reward the most impressive story. It is designed to surface the supplier whose process is sturdy enough for repeat business.
      </p>

      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Build a More Reliable Ethiopian Buying Program</h4>
        <p className='my-2'>
          If you need Ethiopian lots that fit a written buying spec, supported by current sample data and a clear export workflow, we can help you shortlist the right options from origin.
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
            <h4 className='font-bold text-gray-800 mb-2'>What score should a new supplier reach before I place a trial order?</h4>
            <p className='text-sm text-gray-600'>
              A useful threshold is 85 out of 100, provided there are no automatic-fail conditions. Buyers can still place a controlled trial order with scores in the 70s, but only if the missing points are documented and contained, for example a limited shipment window or extra pre-shipment approval conditions.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Which documents matter most before I approve samples?</h4>
            <p className='text-sm text-gray-600'>
              The essentials are a lot-specific offer sheet, price basis, current physical data, and a clearly defined sample stage. Without those, cupping alone is not enough because you still cannot tell whether the sample can be tied to a shippable lot under workable commercial terms.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>How does EUDR change green coffee supplier evaluation?</h4>
            <p className='text-sm text-gray-600'>
              It shifts more weight toward traceability support and record discipline. The importer remains legally responsible when placing coffee on the EU market, but the supplier still needs to provide usable origin, plot, lot, and movement data quickly enough for the importer to complete due diligence without slowing the shipment.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Should I choose the lowest FOB offer if the samples cup similarly?</h4>
            <p className='text-sm text-gray-600'>
              Not automatically. Similar cups can still conceal different levels of documentation quality, shipment reliability, packaging protection, and sample integrity. If the lower-price supplier is weaker operationally, the apparent saving can disappear fast once replacement buying, delays, or claim handling costs start to accumulate.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>How many suppliers should I evaluate at one time?</h4>
            <p className='text-sm text-gray-600'>
              Three to five is usually the right working range. Fewer than three limits comparison. More than five often dilutes sample focus and increases decision fatigue, especially if your team is also reviewing contracts, compliance details, and shipment timing at the same time.
            </p>
          </div>
        </div>
      </section>

      <div className='my-10 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4'>Related Articles</h3>
        <div className='grid md:grid-cols-2 gap-4'>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Supplier Screening</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/how-to-choose-ethiopian-coffee-export-company' className='text-amber-700 hover:underline'>How to Choose an Ethiopian Coffee Export Company</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-offer-sheet-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Offer Sheet Guide</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-contracts-payment-terms-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Contracts &amp; Payment Terms Guide</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Quality Control</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/ethiopian-coffee-sample-approval-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Sample Approval Guide</Link></li>
              <li>&bull; <Link href='/insights/green-coffee-quality-claims-guide' className='text-amber-700 hover:underline'>Green Coffee Quality Claims Guide</Link></li>
              <li>&bull; <Link href='/insights/green-coffee-moisture-content-water-activity-guide' className='text-amber-700 hover:underline'>Green Coffee Moisture Content and Water Activity Guide</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Traceability and Compliance</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/ethiopian-coffee-traceability-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Traceability: Buyer&apos;s Guide</Link></li>
              <li>&bull; <Link href='/insights/ecx-and-ethiopian-coffee-export' className='text-amber-700 hover:underline'>ECX and Ethiopian Coffee Export</Link></li>
              <li>&bull; <Link href='/insights/private-vs-cooperative-ethiopian-coffee-exporters' className='text-amber-700 hover:underline'>Private vs. Cooperative Ethiopian Coffee Exporters</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Buying Workflow</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='text-amber-700 hover:underline'>How to Source Green Coffee from Ethiopia</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Pricing for Importers</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-export-process-buyers-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Export Process: A Buyer&apos;s Guide</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> Published on {date} by Ethio Coffee Import and Export PLC, an origin-connected Ethiopian coffee exporter working with trusted cooperatives, washing stations, and supplier relationships across Ethiopia&apos;s major coffee regions.
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