import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import {
  HiOutlineBeaker,
  HiOutlineCheckCircle,
  HiOutlineClipboardDocumentList,
  HiOutlineDocumentMagnifyingGlass,
  HiOutlineExclamationTriangle,
  HiOutlineLightBulb,
  HiOutlineScale,
  HiOutlineShieldCheck,
} from 'react-icons/hi2'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function GreenCoffeePesticideResidueTestingGuide({
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
        Green coffee pesticide residue testing for MRL mapping, representative sampling, laboratory briefs, result review, and shipment release
      </h2>

      <figure>
        <figcaption className='font-inconsolata my-2'>{title}</figcaption>
        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Unroasted green coffee beans prepared for pesticide residue sampling and laboratory testing'
            fill
            objectFit='cover'
            className='w-full h-full'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>
        <figcaption className='font-inconsolata text-xs my-1 text-gray-600'>
          Photo by Maksim Goncharenok on Pexels.
        </figcaption>
      </figure>

      <div className='my-4 text-sm bg-amber-50 p-4 rounded-lg border border-amber-200'>
        <span className='font-semibold'>Category:</span>
        <span className='ml-2'>Food Safety / Pesticide Residues / Green Coffee Buying / Quality Assurance</span>
      </div>

      <div className='my-4 text-sm text-gray-700'>
        <p className='font-semibold mb-1'>Reference frameworks:</p>
        <ul className='list-disc ml-5 space-y-1'>
          <li>
            <a href='https://food.ec.europa.eu/plants/pesticides/maximum-residue-levels/eu-legislation-mrls_en' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>
              European Commission legislation on pesticide maximum residue levels
            </a>
          </li>
          <li>
            <a href='https://www.eurl-pesticides.eu/docs/public/tmplt_article.asp?CntID=1254&amp;LabID=500&amp;Lang=EN&amp;Pdf=False&amp;Theme_ID=1' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>
              EU Reference Laboratory green coffee proficiency-test notice
            </a>
          </li>
          <li>
            <a href='https://doi.org/10.5614/j.math.fund.sci.2015.47.3.7' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>
              Published green coffee multiresidue method study
            </a>
          </li>
        </ul>
      </div>

      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-8 border border-amber-200'>
        <h3 className='font-bold text-xl mb-3 flex items-center gap-2'>
          <HiOutlineLightBulb className='text-amber-400 flex-shrink-0' />
          Key Takeaway
        </h3>
        <p className='text-sm leading-relaxed'>
          Green coffee pesticide residue testing should answer a purchase decision, not merely produce a certificate. Before sampling, identify every destination and customer limit, build one substance-by-substance MRL matrix, and require a laboratory scope whose reporting limits are low enough for the strictest applicable threshold. Test a representative, traceable sample of the shipment lot; retain a sealed duplicate; then apply written release, investigation, or rejection rules. Never treat organic certification, a supplier assurance, or a broad “pass” statement as a substitute for lot-specific evidence when the risk plan requires analysis.
        </p>
      </div>

      <div className='my-8 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <HiOutlineClipboardDocumentList className='text-amber-600' /> In This Guide
        </h3>
        <ol className='space-y-2 text-sm'>
          <li><a href='#buyer-risk' className='text-amber-700 hover:underline'>1. Why Residue Control Starts Before the Contract</a></li>
          <li><a href='#mrl-matrix' className='text-amber-700 hover:underline'>2. Build the MRL Matrix for the Intended Sale</a></li>
          <li><a href='#testing-plan' className='text-amber-700 hover:underline'>3. Choose a Risk-Based Testing Plan</a></li>
          <li><a href='#sampling' className='text-amber-700 hover:underline'>4. Take a Representative and Defensible Sample</a></li>
          <li><a href='#lab-brief' className='text-amber-700 hover:underline'>5. Write a Laboratory Brief That Can Prove Compliance</a></li>
          <li><a href='#results' className='text-amber-700 hover:underline'>6. Read the Report and Make the Release Decision</a></li>
          <li><a href='#contract' className='text-amber-700 hover:underline'>7. Put Residue Control into the Purchase Workflow</a></li>
          <li><a href='#ethiopian-lots' className='text-amber-700 hover:underline'>8. Apply the Plan to Ethiopian Coffee Lots</a></li>
          <li><a href='#faq' className='text-amber-700 hover:underline'>9. Frequently Asked Questions</a></li>
        </ol>
      </div>

      <p className='text-lg leading-relaxed my-4'>
        <span className='font-bold'>Green coffee pesticide residue testing</span> can fail long before a laboratory makes a measurement. A buyer may check the wrong market limit, send an offer sample instead of the shipment lot, order a panel that omits a relevant substance, or accept an analytical reporting limit above the legal threshold. The final report may look professional while proving very little about the coffee being released.
      </p>
      <p className='my-4'>
        The better approach connects regulation, traceability, sampling, analytical scope, and commercial action. This guide is written for importers, roasters, traders, private-label buyers, and exporters who need that complete control chain. It is not a country import guide, and it does not provide a static table of legal limits. MRLs can change by substance, commodity, destination, and effective date, so the buyer must verify the current official rule for each planned sale.
      </p>

      <h3 id='buyer-risk' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineShieldCheck className='w-8 h-8 text-amber-600' />
        1. Why Residue Control Starts Before the Contract
      </h3>
      <p className='my-4'>
        A maximum residue level, or MRL, is a legal limit for a pesticide residue in or on a food commodity. It is defined for a specific substance and product under a particular regulatory system. That last point changes the buying workflow: coffee that meets one market&apos;s limit does not automatically meet another market&apos;s rule, and a generic “compliant” certificate is incomplete unless it names the reference market and applicable limits.
      </p>
      <p className='my-4'>
        The European Commission states that a general default MRL of 0.01 mg/kg applies when a pesticide is not specifically listed, while specific substance-product limits and amendments can set other values. The same official page shows why a saved spreadsheet cannot be treated as permanent: regulations are amended repeatedly. Buyers should therefore date the regulatory lookup and preserve the source used for each shipment decision.
      </p>

      <div className='bg-blue-50 border border-blue-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3'>MRL compliance is not a marketing claim</h4>
        <p className='text-sm text-gray-700'>
          “Organic,” “low input,” “chemical free,” and “pesticide tested” do not mean the same thing. Certification controls an audited production system. Residue analysis measures named substances in a named sample at stated reporting limits. A buyer may require both, either, or neither based on law, customer specification, supplier history, and risk. Keep those decisions separate.
        </p>
      </div>

      <p className='my-4'>
        Early control also prevents a costly timing error. If the first meaningful residue test occurs after a container arrives, the buyer has fewer options and weaker evidence about when contamination occurred. Set the testing trigger, sample stage, responsible party, laboratory, decision rule, and cost allocation while negotiating the <Link href='/insights/ethiopian-coffee-contracts-payment-terms-guide' className='text-amber-700 hover:underline font-semibold'>green coffee contract and payment terms</Link>.
      </p>

      <h3 id='mrl-matrix' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineScale className='w-8 h-8 text-amber-600' />
        2. Build the MRL Matrix for the Intended Sale
      </h3>
      <p className='my-4'>
        Start with the finished commercial route, not the laboratory&apos;s standard package. List the countries where the green or roasted coffee may be sold, the food-business customer specifications, certification rules, and any retailer restricted-substance list. Then map each named residue definition and threshold. If one lot may serve several markets, the purchase specification normally needs the strictest applicable limit that the chosen method can reliably quantify.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>MRL matrix field</th>
              <th className='p-3 text-left font-bold'>What to record</th>
              <th className='p-3 text-left font-bold'>Why it prevents errors</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Destination and channel</td>
              <td className='p-3'>Country, customer, certification, and intended product</td>
              <td className='p-3'>Stops a pass for one sale from being reused for another</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Commodity definition</td>
              <td className='p-3'>Official database term and product code for green coffee</td>
              <td className='p-3'>Avoids checking roasted coffee, extract, or a broader crop group by mistake</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Residue definition</td>
              <td className='p-3'>Parent compound plus any metabolites or sums required by the rule</td>
              <td className='p-3'>Aligns the regulation with what the laboratory reports</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Limit and effective date</td>
              <td className='p-3'>mg/kg, source URL, lookup date, and transition date</td>
              <td className='p-3'>Preserves the rule actually used for the release decision</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Customer action level</td>
              <td className='p-3'>Private limit or internal warning threshold, if stricter</td>
              <td className='p-3'>Separates legal compliance from the buyer&apos;s commercial specification</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        Do not copy limits from a blog, an old certificate, or a supplier&apos;s prior shipment. Use the competent authority&apos;s live database or legislation, and ask a regulatory specialist or accredited laboratory to resolve ambiguous commodity codes and residue definitions. The matrix should identify who verified it and when. That record belongs with the lot specification, not in one employee&apos;s browser history.
      </p>

      <h3 id='testing-plan' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineDocumentMagnifyingGlass className='w-8 h-8 text-amber-600' />
        3. Choose a Risk-Based Testing Plan
      </h3>
      <p className='my-4'>
        “Test for pesticides” is not a laboratory scope. Multiresidue packages cover many compounds efficiently, but no single panel proves the absence of every possible substance. Some polar pesticides, dithiocarbamates, fumigants, or metabolites may need separate methods. Build the requested analyte list from the MRL matrix, farm and washing-station records, post-harvest controls, warehouse treatments, prior results, and customer requirements.
      </p>

      <div className='grid md:grid-cols-3 gap-4 my-6'>
        <div className='border border-gray-200 rounded-lg p-5'>
          <h4 className='font-bold text-amber-800 mb-2'>Baseline verification</h4>
          <p className='text-sm text-gray-700'>Use for an established supplier and stable route. Verify the agreed multiresidue scope on a defined frequency, rotate supplementary analytes based on risk, and review the plan at least each crop year.</p>
        </div>
        <div className='border border-amber-300 bg-amber-50 rounded-lg p-5'>
          <h4 className='font-bold text-amber-800 mb-2'>Enhanced verification</h4>
          <p className='text-sm text-gray-700'>Use for a new supplier, new region, new customer specification, incomplete treatment records, or changed warehouse practice. Test the shipment lot before release and expand the scope around known exposures.</p>
        </div>
        <div className='border border-red-200 bg-red-50 rounded-lg p-5'>
          <h4 className='font-bold text-red-800 mb-2'>Investigative hold</h4>
          <p className='text-sm text-gray-700'>Use after a detection trend, unexpected treatment disclosure, complaint, or suspected commingling. Freeze movement, preserve samples, confirm identity, and agree the investigation before commissioning selective retests.</p>
        </div>
      </div>

      <p className='my-4'>
        Frequency should follow evidence, not habit. A defensible plan can reduce routine testing after repeated conforming lots only if traceability, exposure records, supplier performance, and customer rules support that decision. Conversely, a changed source, blended lot, new fumigation practice, or stricter destination may return the program to shipment-by-shipment testing.
      </p>

      <h3 id='sampling' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineClipboardDocumentList className='w-8 h-8 text-amber-600' />
        4. Take a Representative and Defensible Sample
      </h3>
      <p className='my-4'>
        Laboratory precision cannot repair a biased sample. The submitted portion must represent the named commercial lot, not one convenient bag or an earlier type sample. Define the lot boundaries first. Keep different washing stations, crop years, grades, process types, storage histories, and treatment histories separate unless the contract deliberately combines them.
      </p>
      <p className='my-4'>
        Use a written sampling plan that distributes increments across the lot, combines them into a homogeneous aggregate, and divides the prepared sample without choosing “clean-looking” beans. Record bag numbers or sampling positions, date, location, sampler, lot code, method, seal numbers, and any deviation. The lab portion and retained duplicate should come from the same prepared aggregate. Follow our complete <Link href='/insights/green-coffee-sampling-protocol' className='text-amber-700 hover:underline font-semibold'>green coffee sampling protocol</Link> for bag selection, mixing, subdivision, labeling, and chain of custody.
      </p>

      <div className='bg-gray-50 border border-gray-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3'>Minimum chain-of-custody pack</h4>
        <ul className='grid md:grid-cols-2 gap-x-6 gap-y-2 text-sm list-disc pl-5'>
          <li>Contract, offer, and exporter lot identifiers</li>
          <li>Origin, crop year, process, grade, and bag count</li>
          <li>Sampling plan, increments, aggregate, and division method</li>
          <li>Sampler name, date, place, and photographs</li>
          <li>Tamper-evident seal numbers for lab and reserve portions</li>
          <li>Courier tracking, receipt condition, and laboratory sample ID</li>
        </ul>
      </div>

      <p className='my-4'>
        Coordinate residue sampling with the <Link href='/insights/ethiopian-coffee-sample-approval-guide' className='text-amber-700 hover:underline font-semibold'>Ethiopian coffee sample approval workflow</Link>, but do not confuse sensory approval with chemical analysis. The same shipment lot can support both controls, while each test retains its own preparation, sample quantity, storage, and decision rules.
      </p>

      <h3 id='lab-brief' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineBeaker className='w-8 h-8 text-amber-600' />
        5. Write a Laboratory Brief That Can Prove Compliance
      </h3>
      <p className='my-4'>
        Select a laboratory accredited for relevant food-testing work and confirm that green coffee is within the validated matrix or method scope. The EU Reference Laboratory has used ground green coffee beans for a pesticide-residue proficiency test, which underlines a practical point: coffee is a real analytical matrix, not a generic substitute for fruit or grain. Ask the laboratory to state how its method performs on green coffee.
      </p>
      <p className='my-4'>
        Published research has demonstrated QuEChERS preparation with liquid chromatography tandem mass spectrometry for green coffee residues. Commercial laboratories may combine LC-MS/MS and GC-MS/MS multiresidue methods with separate tests for compounds outside those screens. Buyers do not need to prescribe an instrument blindly. They need the lab to confirm that every required residue definition is covered at a suitable limit of quantification, or LOQ.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Lab-brief requirement</th>
              <th className='p-3 text-left font-bold'>Acceptance question</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Sample identity and matrix</td>
              <td className='p-3'>Does the report tie unambiguously to the shipment lot and green coffee?</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Named analyte and residue definition</td>
              <td className='p-3'>Does the scope cover every compound or sum in the applicable rule?</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Method, LOQ, and uncertainty</td>
              <td className='p-3'>Can the method quantify below the decision limit, and is uncertainty reported where relevant?</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Result units</td>
              <td className='p-3'>Are results and limits expressed consistently in mg/kg without conversion ambiguity?</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Compliance statement</td>
              <td className='p-3'>Does it name the regulation, version or lookup date, and decision rule?</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='bg-red-50 border border-red-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-red-800 mb-2 flex items-center gap-2'>
          <HiOutlineExclamationTriangle className='w-6 h-6' /> The most dangerous false pass
        </h4>
        <p className='text-sm text-gray-700'>
          A “not detected” result means below that method&apos;s reporting threshold. If the LOQ is 0.05 mg/kg and the applicable limit is 0.01 mg/kg, the result cannot demonstrate compliance at the lower limit. Compare the LOQ with the MRL before accepting the report, not after a detection appears.
        </p>
      </div>

      <h3 id='results' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineCheckCircle className='w-8 h-8 text-amber-600' />
        6. Read the Report and Make the Release Decision
      </h3>
      <p className='my-4'>
        Review the certificate in two passes. First check identity and analytical fitness: lot code, sample condition, laboratory ID, method, scope, LOQ, units, dates, and accreditation details. Then compare each reported value with the controlled MRL matrix and customer specification. A laboratory&apos;s green “pass” icon does not replace the buyer&apos;s route-specific review.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Finding</th>
              <th className='p-3 text-left font-bold'>Commercial status</th>
              <th className='p-3 text-left font-bold'>Next action</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>All required analytes below adequate LOQs</td>
              <td className='p-3'>Eligible for release</td>
              <td className='p-3'>Approve under the named route and archive the full evidence pack</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Detection below the limit but above an internal warning level</td>
              <td className='p-3'>Hold for review</td>
              <td className='p-3'>Investigate source, trend, customer rule, and future destination before release</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Required analyte omitted or LOQ too high</td>
              <td className='p-3'>Inconclusive</td>
              <td className='p-3'>Commission a fit-for-purpose analysis on the retained representative sample</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Result above the applicable limit</td>
              <td className='p-3'>Nonconforming hold</td>
              <td className='p-3'>Stop shipment or use, notify named parties, preserve evidence, and follow the contract and legal escalation plan</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        Do not solve an adverse result by repeatedly testing small portions until one passes. First verify sample identity, method, uncertainty, laboratory handling, and lot boundaries. Any confirmatory test should follow a written investigation using the sealed duplicate or a new independently representative sample. If the finding becomes a commercial dispute, use the evidence controls in the <Link href='/insights/green-coffee-quality-claims-guide' className='text-amber-700 hover:underline font-semibold'>green coffee quality claims guide</Link>.
      </p>

      <h3 id='contract' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineClipboardDocumentList className='w-8 h-8 text-amber-600' />
        7. Put Residue Control into the Purchase Workflow
      </h3>
      <p className='my-4'>
        The <Link href='/insights/green-coffee-specification-sheet-template' className='text-amber-700 hover:underline font-semibold'>green coffee specification sheet</Link> should state the destination framework, analyte schedule, sample stage, approved laboratory or qualification rule, minimum reporting performance, and commercial action. The contract should identify which party arranges and pays for routine analysis, confirmatory testing, and investigation after a nonconforming result.
      </p>
      <ol className='space-y-3 my-6 list-decimal pl-6'>
        <li><span className='font-semibold'>At supplier approval:</span> review treatment, storage, fumigation, traceability, and prior residue evidence.</li>
        <li><span className='font-semibold'>At offer:</span> identify the intended destinations and customer specifications before quoting a compliant route.</li>
        <li><span className='font-semibold'>At contract:</span> attach the MRL matrix version, testing scope, sample rule, release gate, and remedies.</li>
        <li><span className='font-semibold'>At lot preparation:</span> confirm no unapproved commingling or treatment changed the risk profile.</li>
        <li><span className='font-semibold'>At pre-shipment:</span> sample the final lot, seal a duplicate, test, and release only after authorized review.</li>
        <li><span className='font-semibold'>At receipt:</span> preserve the report with the lot record and investigate any identity, seal, or condition exception.</li>
      </ol>
      <p className='my-4'>
        This sequence makes testing proportionate. It also assigns ownership. Procurement owns the market and customer requirements; quality owns the sampling and analytical fitness review; the exporter owns accurate origin and lot records within its control; and the authorized buyer releases or blocks the coffee. One certificate cannot perform all four roles.
      </p>

      <h3 id='ethiopian-lots' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineShieldCheck className='w-8 h-8 text-amber-600' />
        8. Apply the Plan to Ethiopian Coffee Lots
      </h3>
      <p className='my-4'>
        Ethiopian origin is not a residue specification. Farm scale, agronomy, washing-station aggregation, dry-mill preparation, and warehouse history can differ across lots. Do not infer a result from a romantic origin story or a national average. Request evidence tied to the coffee being purchased: source communities or washing station, crop year, process, lot assembly, storage locations, any known crop-protection inputs, and post-harvest treatments.
      </p>
      <p className='my-4'>
        An origin-connected exporter can coordinate those records and arrange representative pre-shipment sampling, but the buyer still needs to disclose the final market and private specification. Ethio Coffee Import and Export PLC works through a trusted sourcing network of cooperatives, washing stations, and farming communities. We do not treat that sourcing heritage as laboratory proof. When residue analysis is part of the agreed control plan, the result must identify the actual export lot and the limits it is meant to assess.
      </p>

      <div className='bg-amber-50 border border-amber-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3'>Worked buyer decision</h4>
        <p className='text-sm text-gray-700 mb-3'>
          A roaster books a washed Ethiopian lot that may supply two private-label customers. One customer accepts the destination&apos;s legal MRLs; the other maintains a stricter restricted-substance policy. Procurement adds both rule sets to the matrix. The laboratory confirms its multiresidue scope but identifies two required compounds needing a separate method.
        </p>
        <p className='text-sm text-gray-700'>
          The final export lot is sampled after milling and bagging. Results meet the legal limits, but one detection exceeds the stricter customer action level. The buyer holds that allocation from the stricter program while reviewing whether the lot can be released to the first customer under contract. The decision protects both routes without mislabeling a legally compliant result as universally acceptable.
        </p>
      </div>

      <h3 id='faq' className='text-2xl font-extrabold mt-12 mb-4'>
        Frequently Asked Questions
      </h3>
      <div className='space-y-4 my-6'>
        <div className='border border-gray-200 rounded-lg p-5'>
          <h4 className='font-bold text-gray-800 mb-2'>What is an MRL in green coffee?</h4>
          <p className='text-sm text-gray-600'>An MRL is the legally permitted maximum concentration of a defined pesticide residue in or on a specified food commodity. It is usually expressed in mg/kg. The applicable value depends on the substance, residue definition, commodity, destination, and effective date, so buyers must verify the current official source for every planned market.</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5'>
          <h4 className='font-bold text-gray-800 mb-2'>Does organic green coffee still need pesticide residue testing?</h4>
          <p className='text-sm text-gray-600'>Organic certification does not automatically remove the need for residue testing. Certification and analysis answer different questions. A buyer may test certified coffee when required by law, a customer program, the certification body, supplier-risk controls, or an investigation. The testing decision should follow the written risk plan rather than a blanket assumption.</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5'>
          <h4 className='font-bold text-gray-800 mb-2'>Which pesticides should a green coffee buyer test for?</h4>
          <p className='text-sm text-gray-600'>Build the analyte list from destination MRLs, customer restrictions, known farm inputs, storage or fumigation treatments, supplier history, and certification rules. A broad multiresidue panel is a useful base, but some compounds require separate methods. Ask the laboratory to map every required residue definition to its method and reporting limit.</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5'>
          <h4 className='font-bold text-gray-800 mb-2'>What does “not detected” mean on a pesticide report?</h4>
          <p className='text-sm text-gray-600'>“Not detected” means the laboratory did not report the analyte above its stated detection or reporting threshold. It does not prove absolute absence. Check whether the method&apos;s LOQ is below the applicable MRL or customer action level. If the LOQ is higher, the result is inconclusive for that compliance decision.</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5'>
          <h4 className='font-bold text-gray-800 mb-2'>When should green coffee be sampled for residue testing?</h4>
          <p className='text-sm text-gray-600'>For a shipment-release decision, sample the final identifiable lot after relevant processing, storage, and bagging steps, but before dispatch. Use a representative written plan and seal a duplicate. Earlier supplier or offer samples help assess risk, yet they cannot replace a shipment-lot sample when the contract requires lot-specific proof.</p>
        </div>
      </div>

      <p className='my-4'>
        Green coffee pesticide residue testing is reliable only when the market rule, sample, method, and commercial decision refer to the same lot. Build the matrix before contracting, verify laboratory coverage before sending coffee, and preserve a sealed duplicate before release. Those controls turn a lab report into evidence a buyer can actually use.
      </p>

      <div className='bg-amber-100 border border-amber-300 rounded-xl p-8 my-10'>
        <h3 className='text-2xl font-extrabold mb-3'>Source Ethiopian Coffee with Lot-Level Documentation</h3>
        <p className='text-gray-700 mb-6'>
          Review current offerings, request representative samples, and align shipment records with your destination and customer requirements through an origin-connected Ethiopian exporter.
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
            <h4 className='font-bold text-lg mb-3 text-amber-800'>Food Safety and Testing</h4>
            <ul className='space-y-2 list-disc pl-5'>
              <li><Link href='/insights/green-coffee-mycotoxin-testing-guide' className='text-amber-700 hover:underline'>Green Coffee Mycotoxin Testing</Link></li>
              <li><Link href='/insights/green-coffee-moisture-content-water-activity-guide' className='text-amber-700 hover:underline'>Moisture Content and Water Activity</Link></li>
              <li><Link href='/insights/green-coffee-quality-control-lab-setup-guide' className='text-amber-700 hover:underline'>Green Coffee Quality Control Lab Setup</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-bold text-lg mb-3 text-amber-800'>Specifications and Samples</h4>
            <ul className='space-y-2 list-disc pl-5'>
              <li><Link href='/insights/green-coffee-specification-sheet-template' className='text-amber-700 hover:underline'>Green Coffee Specification Sheet Template</Link></li>
              <li><Link href='/insights/ethiopian-coffee-sample-approval-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Sample Approval</Link></li>
              <li><Link href='/insights/green-coffee-supplier-evaluation-checklist' className='text-amber-700 hover:underline'>Green Coffee Supplier Evaluation</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-bold text-lg mb-3 text-amber-800'>Contracts and Claims</h4>
            <ul className='space-y-2 list-disc pl-5'>
              <li><Link href='/insights/ethiopian-coffee-contracts-payment-terms-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Contracts and Payment Terms</Link></li>
              <li><Link href='/insights/green-coffee-quality-claims-guide' className='text-amber-700 hover:underline'>Green Coffee Quality Claims</Link></li>
              <li><Link href='/insights/green-coffee-shipping-documents-checklist' className='text-amber-700 hover:underline'>Green Coffee Shipping Documents</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-bold text-lg mb-3 text-amber-800'>Ethiopian Sourcing</h4>
            <ul className='space-y-2 list-disc pl-5'>
              <li><Link href='/insights/ethiopian-coffee-traceability-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Traceability</Link></li>
              <li><Link href='/insights/how-to-choose-ethiopian-coffee-export-company' className='text-amber-700 hover:underline'>Choosing an Ethiopian Coffee Exporter</Link></li>
              <li><Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='text-amber-700 hover:underline'>How to Source Green Coffee from Ethiopia</Link></li>
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
          <span className='font-bold'>About This Insight:</span> This green coffee pesticide residue testing guide was prepared by Ethio Coffee Import and Export PLC on {date} for importers, roasters, exporters, traders, and quality teams. MRLs, analytical scopes, and customer requirements change. Verify current official rules and obtain qualified laboratory or regulatory advice for each destination and shipment.
        </div>
      </div>
    </>
  )
}
