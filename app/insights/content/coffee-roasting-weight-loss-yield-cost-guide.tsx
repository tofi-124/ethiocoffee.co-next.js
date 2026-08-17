import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import {
  HiOutlineArrowTrendingUp,
  HiOutlineChartBar,
  HiOutlineClipboardDocumentList,
  HiOutlineCurrencyDollar,
  HiOutlineExclamationTriangle,
  HiOutlineFire,
  HiOutlineLightBulb,
  HiOutlineQuestionMarkCircle,
  HiOutlineScale,
} from 'react-icons/hi2'

type InsightContentProps = { title: string; date: string; large_image_url: string }

export default function CoffeeRoastingWeightLossYieldCostGuide({
  title,
  date,
  large_image_url,
}: InsightContentProps) {
  return (
    <>
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>{title}</h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        Coffee roasting weight loss explained for production yield, finished coffee cost, purchasing, and batch control
      </h2>

      <figure>
        <figcaption className='font-inconsolata my-2'>{title}</figcaption>
        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Production coffee roaster monitored during a coffee roasting weight loss and yield run'
            fill
            objectFit='cover'
            className='w-full h-full'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>
        <figcaption className='font-inconsolata text-xs my-1 text-gray-600'>
          Production roasting on a Loring S70. Photograph by <a href='https://commons.wikimedia.org/wiki/File:Tasty_Coffee_Loring_S70_roast_Izhevsk_2025.jpg' target='_blank' rel='noopener noreferrer' className='underline'>Indigo.udm via Wikimedia Commons</a>, <a href='https://creativecommons.org/licenses/by/4.0/' target='_blank' rel='noopener noreferrer' className='underline'>CC BY 4.0</a>. Cropped and converted to WebP.
        </figcaption>
      </figure>

      <div className='my-4 text-sm bg-amber-50 p-4 rounded-lg border border-amber-200'>
        <span className='font-semibold'>Category:</span>
        <span className='ml-2'>Roaster Operations / Roast Yield / Cost Control / Green Coffee Buying</span>
      </div>

      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-8 border border-amber-200'>
        <h3 className='font-bold text-xl mb-3 flex items-center gap-2'>
          <HiOutlineLightBulb className='text-amber-400 flex-shrink-0' /> Key Takeaway
        </h3>
        <p className='text-sm leading-relaxed'>
          Coffee roasting weight loss is the green charge minus the cooled roasted output, divided by the green charge. Treat it as two connected controls: roast yield measures what leaves the roaster, while saleable yield subtracts QC pulls, handling loss, and packaging waste. Measure each profile consistently, build a baseline from repeated batches, and use actual yield to calculate finished cost and green-coffee purchasing needs.
        </p>
      </div>

      <div className='my-8 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <HiOutlineClipboardDocumentList className='text-amber-600' /> In This Guide
        </h3>
        <ol className='space-y-2 text-sm'>
          <li><a href='#definition' className='text-amber-700 hover:underline'>1. Define roast loss and roast yield</a></li>
          <li><a href='#measurement' className='text-amber-700 hover:underline'>2. Measure coffee roasting weight loss consistently</a></li>
          <li><a href='#benchmarks' className='text-amber-700 hover:underline'>3. Build a useful benchmark</a></li>
          <li><a href='#saleable-yield' className='text-amber-700 hover:underline'>4. Calculate saleable yield</a></li>
          <li><a href='#cost' className='text-amber-700 hover:underline'>5. Convert yield into finished coffee cost</a></li>
          <li><a href='#planning' className='text-amber-700 hover:underline'>6. Plan green-coffee purchases and production</a></li>
          <li><a href='#diagnosis' className='text-amber-700 hover:underline'>7. Diagnose an unexpected change</a></li>
          <li><a href='#control-plan' className='text-amber-700 hover:underline'>8. Install a weekly control plan</a></li>
          <li><a href='#faq' className='text-amber-700 hover:underline'>9. Frequently asked questions</a></li>
        </ol>
      </div>

      <p className='text-lg leading-relaxed my-4'>
        <strong>Coffee roasting weight loss</strong> changes the cost of every finished bag. Pay for 1,000 kilograms of green coffee, lose 15 percent in roasting, and only 850 kilograms remain before cupping pulls, transfer spills, destoning, and packing loss. A cost model based only on the green purchase price understates the coffee cost of each saleable kilogram.
      </p>
      <p className='my-4'>
        The percentage also helps production teams spot drift. A profile that normally returns 84.8 percent yield but suddenly returns 82.9 percent may have changed at the roaster, scale, lot, cooling tray, or measurement point. The number does not explain the cause by itself. It tells the team where to investigate.
      </p>
      <p className='my-4'>
        Most online explanations stop after one formula. Commercial roasters need the next layer: a measurement standard, profile-specific baselines, a saleable-yield calculation, purchasing math, cost allocation, and an escalation rule. This guide puts those controls into one operating model.
      </p>

      <h3 id='definition' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineScale className='w-8 h-8 text-amber-600' />
        1. What Is Coffee Roasting Weight Loss?
      </h3>
      <p className='my-4'>
        Roast loss is the mass that leaves a green coffee batch during roasting. Water accounts for much of it, while chaff, carbon dioxide, and other volatile compounds contribute as the bean changes chemically. Roast yield describes the same batch from the opposite direction: it is the percentage of the green charge that remains as roasted coffee.
      </p>
      <div className='grid md:grid-cols-2 gap-4 my-6'>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Roast loss formula</h4>
          <p className='text-sm text-gray-700 font-inconsolata'>
            Roast loss % = (green charge - roasted output) / green charge × 100
          </p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Roast yield formula</h4>
          <p className='text-sm text-gray-700 font-inconsolata'>
            Roast yield % = roasted output / green charge × 100
          </p>
        </div>
      </div>
      <p className='my-4'>
        Suppose a roaster charges 60.00 kg and records 50.70 kg after cooling. The batch lost 9.30 kg. Roast loss is 15.50 percent, while roast yield is 84.50 percent. Both figures are correct; choose one reporting convention and use it across profiles, shifts, and reports.
      </p>
      <p className='my-4'>
        Do not confuse roast yield with extraction yield. Roast yield is a production mass balance from green to roasted coffee. Extraction yield describes soluble material removed during brewing. They answer different questions and belong in separate records.
      </p>
      <p className='my-4'>
        Controlled research supports the basic relationship between roast severity and mass loss. A 2025 study in the <a href='https://academic.oup.com/ijfst/article/60/2/vvaf189/8262800' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline font-semibold'>International Journal of Food Science and Technology</a> reported progressively higher mass loss across its light, medium, city, French, and Italian roast conditions. Its exact results describe the tested coffee and protocol, not universal targets for every production roaster.
      </p>

      <h3 id='measurement' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineClipboardDocumentList className='w-8 h-8 text-amber-600' />
        2. How Should a Roastery Measure Roast Loss?
      </h3>
      <p className='my-4'>
        A useful percentage depends on two trustworthy weights. The arithmetic is simple; the operating discipline is not. A changing tote, incomplete cooling cycle, forgotten QC scoop, or inconsistent scale tare can create more apparent variation than the roast itself.
      </p>
      <ol className='list-decimal ml-5 my-4 space-y-3'>
        <li><span className='font-bold'>Verify the green charge.</span> Weigh the actual coffee entering the roaster. Do not rely on the nominal batch size or the production schedule.</li>
        <li><span className='font-bold'>Tare the receiving container.</span> Use the same container configuration, including lid or liner, and confirm zero before every measurement.</li>
        <li><span className='font-bold'>Complete the normal cooling cycle.</span> Define the operational endpoint, such as cooling tray discharge, and use it every time.</li>
        <li><span className='font-bold'>Recover the full roasted batch.</span> Account for beans retained in the drum, cooling tray, duct, destoner, or transfer path.</li>
        <li><span className='font-bold'>Weigh before downstream pulls.</span> Record roasted output before taking color, cupping, retention, or packaging samples.</li>
        <li><span className='font-bold'>Log the context.</span> Capture lot, profile, roaster, operator, green moisture, charge weight, output weight, date, and any exception.</li>
      </ol>
      <p className='my-4'>
        Cropster recommends collecting manual end weights for at least ten roasts of a profile before using the calculated average as expected loss. That is a practical starting rule for a new baseline. The <a href='https://help.cropster.com/en_US/using-roasting-intelligence/how-to-track-weight-loss' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline font-semibold'>Cropster weight-loss workflow</a> then uses the expected percentage to estimate future end weight.
      </p>
      <div className='border-l-4 border-amber-500 pl-6 bg-gray-50 p-4 my-6'>
        <p className='text-sm text-gray-700'>
          Measurement rule: record the roast output first, then remove QC samples. If a 500 g cupping pull is taken from one batch before weighing and after weighing from another, the roast-loss trend is no longer comparable.
        </p>
      </div>

      <h3 id='benchmarks' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineChartBar className='w-8 h-8 text-amber-600' />
        3. What Is a Normal Roast Loss Percentage?
      </h3>
      <p className='my-4'>
        There is no single normal percentage for every coffee and roast system. Barista Hustle describes an 11 to 24 percent broad range and notes that many light-to-medium specialty roasts fall between 11 and 16 percent. Its <a href='https://www.baristahustle.com/lesson/htr-2-02-calculating-yield/' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline font-semibold'>commercial roasting lesson on yield</a> also explains why initial green moisture can shift weight loss even when roast degree is similar.
      </p>
      <p className='my-4'>
        Treat published bands as orientation, not specifications. A measured baseline for the same lot, profile, roaster, batch size, and weighing method is more useful than a generic label such as light or medium. Roast color and sensory results still govern product acceptance.
      </p>
      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Factor</th>
              <th className='p-3 text-left font-bold'>How it can move measured loss</th>
              <th className='p-3 text-left font-bold'>Control to record</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Green moisture</td>
              <td className='p-3'>More starting water can increase mass removed at a similar endpoint</td>
              <td className='p-3'>Lot moisture, method, and test date</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Roast endpoint</td>
              <td className='p-3'>Greater roast severity generally removes more water and dry matter</td>
              <td className='p-3'>Color, drop conditions, time, and sensory target</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Batch and machine</td>
              <td className='p-3'>Heat transfer, airflow, and residence time change with equipment and loading</td>
              <td className='p-3'>Roaster ID, charge mass, and profile version</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Recovery and weighing</td>
              <td className='p-3'>Retained beans, hot weighing, spills, and tare errors distort the result</td>
              <td className='p-3'>Scale ID, container, cooling endpoint, and exception note</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className='my-4'>
        Buyers can reduce one source of uncertainty by sending current condition data with each lot. Pair production records with a controlled <Link href='/insights/green-coffee-moisture-content-water-activity-guide' className='text-amber-700 hover:underline font-semibold'>green coffee moisture and water activity check</Link>. Density, screen distribution, and processing information can help explain behavior, but none should be converted into a roast-loss promise before production trials.
      </p>

      <h3 id='saleable-yield' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineArrowTrendingUp className='w-8 h-8 text-amber-600' />
        4. Use a Two-Yield Model for Saleable Output
      </h3>
      <p className='my-4'>
        Roast yield ends at the scale after cooling. Saleable yield continues to the sealed finished product. The distinction prevents production teams from blaming the roast for losses that occur during destoning, transfer, QC, blending, grinding, or packing.
      </p>
      <div className='bg-blue-50 border border-blue-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3'>The two-yield model</h4>
        <p className='text-sm text-gray-700 mb-2 font-inconsolata'>Roast yield = cooled roasted output / green charge</p>
        <p className='text-sm text-gray-700 font-inconsolata'>Saleable yield = packed conforming coffee / green charge</p>
      </div>
      <p className='my-4'>
        Consider a 60.00 kg charge that returns 50.70 kg roasted. The team takes 0.30 kg for QC and retention, loses 0.15 kg in transfer and destoning, and records 0.25 kg of packing overfill and residue. Packed conforming output is 50.00 kg. Roast yield is 84.50 percent, while saleable yield is 83.33 percent.
      </p>
      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Mass balance</th>
              <th className='p-3 text-left font-bold'>Kilograms</th>
              <th className='p-3 text-left font-bold'>Owner</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'><td className='p-3 font-semibold'>Green charge</td><td className='p-3'>60.00</td><td className='p-3'>Roasting</td></tr>
            <tr className='border-b border-gray-200 bg-gray-50'><td className='p-3 font-semibold'>Cooled roasted output</td><td className='p-3'>50.70</td><td className='p-3'>Roasting</td></tr>
            <tr className='border-b border-gray-200'><td className='p-3 font-semibold'>QC and retention pulls</td><td className='p-3'>0.30</td><td className='p-3'>Quality</td></tr>
            <tr className='border-b border-gray-200 bg-gray-50'><td className='p-3 font-semibold'>Transfer and destoning loss</td><td className='p-3'>0.15</td><td className='p-3'>Production</td></tr>
            <tr className='border-b border-gray-200'><td className='p-3 font-semibold'>Packing variance</td><td className='p-3'>0.25</td><td className='p-3'>Packaging</td></tr>
            <tr className='border-b border-gray-200 bg-gray-50'><td className='p-3 font-semibold'>Packed conforming coffee</td><td className='p-3'>50.00</td><td className='p-3'>Finished goods</td></tr>
          </tbody>
        </table>
      </div>
      <p className='my-4'>
        This mass balance gives each team a controllable measure. Roasting owns green-to-cooled yield. Quality owns planned sample quantities. Production owns recovery. Packaging owns fill control and finished count. Finance receives one saleable output number that reconciles to physical inventory.
      </p>

      <h3 id='cost' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineCurrencyDollar className='w-8 h-8 text-amber-600' />
        5. Calculate Green Coffee Cost per Roasted Kilogram
      </h3>
      <p className='my-4'>
        Divide the landed green cost by the yield expressed as a decimal. If green coffee lands at CAD 10.00 per kilogram and roast yield is 84.5 percent, the green input cost is CAD 11.83 per roasted kilogram. Using the 83.33 percent saleable yield raises green input cost to CAD 12.00 per packed kilogram.
      </p>
      <div className='bg-green-50 border border-green-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3'>Cost formulas</h4>
        <p className='text-sm text-gray-700 mb-2 font-inconsolata'>Green cost per roasted kg = landed green cost per kg / roast yield</p>
        <p className='text-sm text-gray-700 font-inconsolata'>Green cost per saleable kg = landed green cost per kg / saleable yield</p>
      </div>
      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Saleable yield</th>
              <th className='p-3 text-left font-bold'>Green cost at CAD 10/kg</th>
              <th className='p-3 text-left font-bold'>Green needed for 1,000 saleable kg</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'><td className='p-3 font-semibold'>86%</td><td className='p-3'>CAD 11.63/kg</td><td className='p-3'>1,162.8 kg</td></tr>
            <tr className='border-b border-gray-200 bg-gray-50'><td className='p-3 font-semibold'>84%</td><td className='p-3'>CAD 11.90/kg</td><td className='p-3'>1,190.5 kg</td></tr>
            <tr className='border-b border-gray-200'><td className='p-3 font-semibold'>82%</td><td className='p-3'>CAD 12.20/kg</td><td className='p-3'>1,219.5 kg</td></tr>
            <tr className='border-b border-gray-200 bg-gray-50'><td className='p-3 font-semibold'>80%</td><td className='p-3'>CAD 12.50/kg</td><td className='p-3'>1,250.0 kg</td></tr>
          </tbody>
        </table>
      </div>
      <p className='my-4'>
        The table isolates green coffee only. A full finished-goods cost still adds roasting labor, energy, maintenance, quality control, packaging, freight to the customer, and any allocated overhead. Use the <Link href='/insights/ethiopian-coffee-landed-cost-guide' className='text-amber-700 hover:underline font-semibold'>Ethiopian coffee landed cost framework</Link> to establish the correct starting cost before applying yield.
      </p>
      <p className='my-4'>
        One percentage point matters at scale. At 100,000 saleable kilograms and CAD 10 per green kilogram, an 84 percent model requires about 1,191 tonnes of green coffee. An 83 percent realized yield requires about 1,205 tonnes, roughly 14 additional tonnes. The business should not force roasting darker or lighter to chase yield; it should price, purchase, and schedule from the product&apos;s approved sensory profile and measured output.
      </p>

      <h3 id='planning' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineFire className='w-8 h-8 text-amber-600' />
        6. Use Roast Yield in Purchasing and Production Planning
      </h3>
      <p className='my-4'>
        Production planning works backward from required saleable output. Divide the finished requirement by expected saleable yield, then divide the green requirement by the validated charge size. Round batches up and carry the expected remainder into the next schedule rather than hiding it as waste.
      </p>
      <p className='my-4'>
        A wholesale order needs 2,000 kg packed. The profile&apos;s rolling saleable yield is 83.6 percent. Green requirement is 2,392.3 kg. On a validated 60 kg charge, the schedule needs 40 batches, providing 2,400 kg green input and approximately 2,006 kg expected packed output. The six-kilogram buffer is visible and intentional.
      </p>
      <ul className='list-disc ml-5 my-4 space-y-3'>
        <li><span className='font-bold'>Procurement:</span> convert the sales forecast into green demand by SKU or profile, then add the approved safety stock.</li>
        <li><span className='font-bold'>Roasting:</span> schedule batches from profile-specific yield rather than one company-wide percentage.</li>
        <li><span className='font-bold'>Quality:</span> budget standard pulls so saleable output is predictable instead of treating every sample as unexplained shrinkage.</li>
        <li><span className='font-bold'>Finance:</span> update standard cost when the rolling yield moves beyond the validated control limit.</li>
        <li><span className='font-bold'>Sales:</span> confirm large wholesale commitments against green stock converted to finished output.</li>
      </ul>
      <p className='my-4'>
        Keep yield connected to the lot record. The <Link href='/insights/green-coffee-inventory-management-roasters' className='text-amber-700 hover:underline font-semibold'>green coffee inventory management workflow</Link> explains how to track coverage, allocation, and run-out dates. Adding actual saleable yield turns a nominal stock position into a more reliable finished-goods forecast.
      </p>

      <h3 id='diagnosis' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineExclamationTriangle className='w-8 h-8 text-amber-600' />
        7. Diagnose Unexpected Roast-Loss Variance
      </h3>
      <p className='my-4'>
        Investigate a change in a fixed order. Confirm the measurement system first, then the green coffee, roast execution, and downstream recovery. Editing a profile before checking the scale can create a real roast problem in response to a false signal.
      </p>
      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Check</th>
              <th className='p-3 text-left font-bold'>Evidence to review</th>
              <th className='p-3 text-left font-bold'>Possible response</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'><td className='p-3 font-semibold'>1. Weighing</td><td className='p-3'>Tare, calibration check, container, timing, missing beans</td><td className='p-3'>Correct and remeasure the workflow</td></tr>
            <tr className='border-b border-gray-200 bg-gray-50'><td className='p-3 font-semibold'>2. Identity</td><td className='p-3'>Lot, profile version, roaster, batch size, operator</td><td className='p-3'>Reclassify the record or isolate the wrong input</td></tr>
            <tr className='border-b border-gray-200'><td className='p-3 font-semibold'>3. Green condition</td><td className='p-3'>Moisture, storage history, density, screen distribution</td><td className='p-3'>Retest the lot and brief production</td></tr>
            <tr className='border-b border-gray-200 bg-gray-50'><td className='p-3 font-semibold'>4. Roast execution</td><td className='p-3'>Color, drop point, time, airflow, gas, curve deviation</td><td className='p-3'>Review execution against sensory results</td></tr>
            <tr className='border-b border-gray-200'><td className='p-3 font-semibold'>5. Recovery</td><td className='p-3'>Cooling tray, cyclone, destoner, transfer, QC pulls</td><td className='p-3'>Repair leakage or correct the mass balance</td></tr>
          </tbody>
        </table>
      </div>
      <p className='my-4'>
        Set an internal investigation limit from historical process variation. Start with ten or more comparable batches, then review the mean, range, and sensory acceptance. A team can flag values outside its normal band without declaring them defective. The final decision must still consider roast color, cup result, and whether the measurement was valid.
      </p>
      <p className='my-4'>
        Ethiopian lots can change between crop years even when the origin and product name stay the same. Pass current moisture and physical data from QC to roasting, then validate the first production batches. The <Link href='/insights/green-coffee-density-quality-control-protocol' className='text-amber-700 hover:underline font-semibold'>green coffee density protocol</Link> shows how to create a method-controlled physical record without turning density into an unsupported quality grade.
      </p>

      <h3 id='control-plan' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineChartBar className='w-8 h-8 text-amber-600' />
        8. Install a Weekly Roast-Yield Control Plan
      </h3>
      <p className='my-4'>
        A weekly review should be short enough to continue when production is busy. Use one report by lot and profile, with both roast yield and saleable yield. Separate planned QC pulls from unplanned loss, and retain the raw weights so the percentage can be audited.
      </p>
      <div className='grid md:grid-cols-2 gap-4 my-6'>
        <div className='border border-green-200 rounded-lg p-5 bg-green-50'>
          <h4 className='font-bold mb-2 text-green-800'>Review every week</h4>
          <ul className='list-disc ml-5 space-y-2 text-sm text-gray-700'>
            <li>Actual and expected yield by profile</li>
            <li>Outliers with scale and operator checks</li>
            <li>QC pulls and unplanned downstream loss</li>
            <li>Green stock converted to saleable output</li>
            <li>Standard cost impact for material variance</li>
          </ul>
        </div>
        <div className='border border-red-200 rounded-lg p-5 bg-red-50'>
          <h4 className='font-bold mb-2 text-red-800'>Avoid these controls</h4>
          <ul className='list-disc ml-5 space-y-2 text-sm text-gray-700'>
            <li>One target percentage for every SKU</li>
            <li>Hot and cooled weights in the same trend</li>
            <li>QC pulls hidden inside roast loss</li>
            <li>Profile changes made from yield alone</li>
            <li>Costs based on green purchase weight only</li>
          </ul>
        </div>
      </div>
      <p className='my-4'>
        Add a monthly reconciliation between green inventory issued, roasted output, packed finished goods, samples, and documented waste. That review catches scale offsets, unrecorded transfers, overfill, and master-data errors that a roast report cannot see. It also gives procurement a better demand signal for the next Ethiopian allocation.
      </p>
      <p className='my-4'>
        Coffee roasting weight loss becomes commercially useful when it connects sensory approval to physical output. Measure the green charge and cooled batch consistently, build profile-level baselines, separate roast yield from saleable yield, and apply the realized percentage to cost and purchasing. The result is better production control without asking the roast team to compromise flavor for a headline yield number.
      </p>

      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Build a More Predictable Ethiopian Coffee Program</h4>
        <p className='my-2'>
          Share your cup target, product format, annual volume, and production needs. We can prepare current Ethiopian lot options, samples, pricing, and physical data for your buying and roasting teams.
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
            <h4 className='font-bold text-gray-800 mb-2'>How do you calculate coffee roasting weight loss?</h4>
            <p className='text-sm text-gray-600'>
              Subtract the cooled roasted output from the actual green charge. Divide that difference by the green charge, then multiply by 100. A 60 kg charge that returns 50.7 kg lost 9.3 kg, so roast loss is 15.5 percent. Record both weights before removing any QC samples.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>What percentage of weight does coffee lose during roasting?</h4>
            <p className='text-sm text-gray-600'>
              Published guidance places coffee roasting weight loss in a broad range, with many light-to-medium specialty profiles around 11 to 16 percent. Darker conditions can lose more. Green moisture, roast endpoint, batch size, equipment, and weighing method all matter, so a profile&apos;s measured history is the better operating benchmark.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>How much green coffee is needed for 1 kg roasted?</h4>
            <p className='text-sm text-gray-600'>
              Divide one kilogram by the expected yield. At 85 percent roast yield, 1 kg of roasted coffee requires about 1.176 kg of green coffee. For production and purchasing, use saleable yield instead. An 83 percent saleable yield requires about 1.205 kg green for each packed kilogram.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Does green coffee moisture affect roast loss?</h4>
            <p className='text-sm text-gray-600'>
              Yes. Higher initial moisture can increase the mass removed before a similar roast endpoint. Moisture is not the only driver; heat transfer, profile, batch size, and recovery also affect the result. Record current lot moisture beside weight loss so teams do not interpret every change as a roast execution problem.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Should roast loss determine roast quality?</h4>
            <p className='text-sm text-gray-600'>
              No. Roast loss is a consistency and mass-balance signal, not a stand-alone quality score. Use it with roast color, curve data, physical observations, and sensory evaluation. A batch can hit the expected percentage and still taste wrong, while a valid lot change may shift weight loss without reducing cup quality.
            </p>
          </div>
        </div>
      </section>

      <div className='my-10 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4'>Related Articles</h3>
        <div className='grid md:grid-cols-2 gap-4'>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Roasting and Production</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/roasting-ethiopian-coffee-beans-guide' className='text-amber-700 hover:underline'>Roasting Ethiopian Coffee Beans</Link></li>
              <li>&bull; <Link href='/insights/green-coffee-inventory-management-roasters' className='text-amber-700 hover:underline'>Green Coffee Inventory Management</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-espresso-blend-sourcing-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee for Espresso Blends</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Green Coffee Quality</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/green-coffee-moisture-content-water-activity-guide' className='text-amber-700 hover:underline'>Green Coffee Moisture and Water Activity</Link></li>
              <li>&bull; <Link href='/insights/green-coffee-density-quality-control-protocol' className='text-amber-700 hover:underline'>Green Coffee Density QC Protocol</Link></li>
              <li>&bull; <Link href='/insights/green-coffee-receiving-inspection-checklist' className='text-amber-700 hover:underline'>Green Coffee Receiving Inspection</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Cost and Purchasing</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/ethiopian-coffee-landed-cost-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Landed Cost</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee FOB Pricing</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-offer-sheet-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Offer Sheets</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Buyer Systems</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/green-coffee-specification-sheet-template' className='text-amber-700 hover:underline'>Green Coffee Specification Sheet</Link></li>
              <li>&bull; <Link href='/insights/green-coffee-supplier-evaluation-checklist' className='text-amber-700 hover:underline'>Green Coffee Supplier Evaluation</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> Published on {date} by Ethio Coffee Import and Export PLC, an origin-connected Ethiopian coffee exporter with three decades of sourcing heritage across trusted cooperatives, washing stations, and farming communities. Contact us for current lot information and production-specific data.
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
