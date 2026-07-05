import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import {
  HiOutlineLightBulb,
  HiOutlineClipboardDocumentList,
  HiOutlineGlobeAlt,
  HiOutlineSun,
  HiOutlineChartBarSquare,
  HiOutlineDocumentCheck,
  HiOutlineTruck,
  HiOutlineUserGroup,
  HiOutlineQuestionMarkCircle,
  HiOutlineScale
} from 'react-icons/hi2'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function EthiopianCoffeeCarbonFootprint({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        A data-first look at the Ethiopian coffee carbon footprint for roasters and importers who now report Scope 3 emissions: where the numbers come from, why origin structure changes them, and what primary data an exporter can hand you.
      </h2>

      <figure>
        <figcaption className='font-inconsolata my-2'>
          {title}
        </figcaption>
        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Ethiopian coffee carbon footprint: shade-grown coffee under an agroforestry canopy that lowers farm-stage emissions'
            fill
            objectFit='cover'
            className='w-full h-full'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>
        <figcaption className='text-xs text-gray-500 mt-1 font-inconsolata'>
          Shade-grown coffee under a traditional agroforestry canopy. Photo: Anand Osuri, <a href='https://commons.wikimedia.org/wiki/File:Traditional_shade_coffee_plantation_Chikmagalur_1.jpg' target='_blank' rel='noopener noreferrer' className='underline'>Wikimedia Commons</a>, <a href='https://creativecommons.org/licenses/by-sa/4.0' target='_blank' rel='noopener noreferrer' className='underline'>CC BY-SA 4.0</a>.
        </figcaption>
      </figure>

      <div className='my-4 text-sm bg-amber-50 p-4 rounded-lg border border-amber-200'>
        <span className='font-semibold'>Category:</span>
        <span className='ml-2'>Sustainability &amp; Reporting / Green Coffee Buying / Scope 3 Data / Importer Resources</span>
      </div>

      {/* KEY TAKEAWAY */}
      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-8 border border-amber-200'>
        <h3 className='font-bold text-xl mb-3 flex items-center gap-2'>
          <HiOutlineLightBulb className='text-amber-400 flex-shrink-0' />Key Takeaway
        </h3>
        <p className='text-sm leading-relaxed'>
          The Ethiopian coffee carbon footprint is dominated by the farm stage, like every origin, but Ethiopia&apos;s structure pulls that stage down: roughly 95% of the crop comes from smallholders using little or no synthetic fertilizer, most coffee grows under shade in forest, semi-forest, and garden systems, and drying is largely sun-powered. Published life-cycle work puts conventional Arabica at about 15.33 kg CO2e per kg of green coffee versus 3.51 kg for low-input, sea-freighted production (Nab &amp; Maslin, 2020). For a buyer building Scope 3 inventory, the practical value of an Ethiopian lot is not a marketing claim but the primary data behind it: production system, fertilizer use, drying method, and sea-freight routing an origin exporter can document at the lot level.
        </p>
      </div>

      {/* TABLE OF CONTENTS */}
      <div className='my-8 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <HiOutlineClipboardDocumentList className='text-amber-600' />
          In This Guide
        </h3>
        <ol className='space-y-2 text-sm'>
          <li><a href='#where-emissions-come-from' className='text-amber-700 hover:underline'>1. Where a Green Coffee&apos;s Emissions Actually Come From</a></li>
          <li><a href='#ethiopia-structure' className='text-amber-700 hover:underline'>2. Why Ethiopia&apos;s Production Structure Lowers the Number</a></li>
          <li><a href='#the-numbers' className='text-amber-700 hover:underline'>3. The Numbers: Per-Kilo Estimates and What They Mean</a></li>
          <li><a href='#scope-3-reporting' className='text-amber-700 hover:underline'>4. How Ethiopian Coffee Fits Your Scope 3 and CSRD Reporting</a></li>
          <li><a href='#primary-data' className='text-amber-700 hover:underline'>5. What Primary Emissions Data an Origin Exporter Can Provide</a></li>
          <li><a href='#buyer-scenario' className='text-amber-700 hover:underline'>6. A Buyer Scenario: Sourcing for a Lower-Carbon Program</a></li>
          <li><a href='#faq' className='text-amber-700 hover:underline'>7. Frequently Asked Questions</a></li>
        </ol>
      </div>

      {/* INTRODUCTION */}
      <p className='text-lg leading-relaxed my-4'>
        The <span className='font-bold'>Ethiopian coffee carbon footprint</span> has moved from a sustainability talking point to a line item in procurement. Roasters and importers inside the EU&apos;s reporting perimeter, and their suppliers further down the chain, now have to put a number on the emissions embedded in every kilo of green coffee they buy. That number lives in Scope 3, the indirect emissions category that for most coffee businesses is the largest and hardest part of the inventory. Green coffee sourcing sits right at its center.
      </p>

      <p className='my-4'>
        This guide is written for the people signing those purchase orders, not for consumers counting the carbon in a single cup. It explains where a green coffee&apos;s footprint comes from, why Ethiopia&apos;s smallholder-and-shade production structure produces a genuinely different profile from intensively farmed origins, what the published per-kilo figures do and do not tell you, and how an <Link href='/ethiopian-coffee-exporter' className='underline font-bold'>origin-connected exporter</Link> can supply the lot-level primary data that a credible Scope 3 entry requires. Where a topic has its own dedicated resource, such as certifications or deforestation compliance, we link rather than repeat.
      </p>

      {/* SECTION 1 */}
      <h3 id='where-emissions-come-from' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineGlobeAlt className='w-8 h-8 text-amber-600' />
        1. Where a Green Coffee&apos;s Emissions Actually Come From
      </h3>

      <p className='my-4'>
        Most of a green coffee&apos;s carbon footprint is created before the beans ever leave the country. Life-cycle assessments consistently attribute the largest share of pre-roast emissions to the farm stage, driven by synthetic nitrogen fertilizer and the nitrous oxide it releases, followed by post-harvest processing and then transport. International shipping, the stage buyers instinctively worry about, is usually a small slice when coffee travels by sea rather than by air.
      </p>

      <p className='my-4'>
        The clearest illustration comes from corporate inventories. The UK green trader DR Wakefield, in its 2021 carbon footprint disclosure, found that purchased goods, essentially coffee production at origin, accounted for about 54.8% of its total emissions, while all transportation combined came to just 1.33%. The lesson for a buyer is blunt: you cannot meaningfully cut a coffee program&apos;s footprint by optimizing freight. The decisive variables are set on the farm and at the mill, which is exactly where origin choice matters.
      </p>

      <div className='bg-blue-50 border border-blue-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3'>Quick definition: Scope 3</h4>
        <p className='text-sm text-gray-700'>
          Scope 3 covers indirect emissions across a company&apos;s value chain that it does not own or directly control, including purchased goods like green coffee. For roasters it typically dwarfs Scope 1 (direct, such as roaster gas) and Scope 2 (purchased electricity), and green coffee is usually the single biggest Scope 3 category.
        </p>
      </div>

      <p className='my-4'>
        Three stages therefore decide most of the outcome. First, farm inputs, above all synthetic fertilizer, which generate field nitrous oxide emissions many times more potent than CO2. Second, processing and drying, where mechanical dryers and pumped water at industrial wet mills add energy load that sun-dried, gravity-fed stations avoid. Third, transport mode, where the gap between ocean freight and airfreight is enormous. An origin that farms with low inputs, dries in the sun, and ships by sea starts from a structurally lower base than one that does the opposite.
      </p>

      {/* SECTION 2 */}
      <h3 id='ethiopia-structure' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineSun className='w-8 h-8 text-amber-600' />
        2. Why Ethiopia&apos;s Production Structure Lowers the Number
      </h3>

      <p className='my-4'>
        Ethiopia&apos;s coffee is produced in a way that happens to align with almost every low-carbon lever. Around 95% of the national crop comes from smallholders farming traditionally, with limited use of synthetic fertilizer and pesticide (USDA FAS and Ethiopian sector reporting). Most coffee grows under a tree canopy rather than in full-sun monoculture, spread across forest, semi-forest, garden, and a smaller share of plantation systems. And the overwhelming majority of the harvest is sun-dried on raised beds or patios, not machine-dried. None of this was engineered for a carbon report; it is how Ethiopian coffee has always been grown.
      </p>

      <p className='my-4'>
        The single biggest structural advantage is low fertilizer intensity. Because farm-stage nitrous oxide from synthetic nitrogen is the largest driver of coffee&apos;s footprint, an origin where most farmers apply little or none avoids the emissions hotspot at its source. This is why so much Ethiopian coffee qualifies as organic-by-default, a point we cover in our <Link href='/insights/ethiopian-coffee-certifications-organic-fairtrade-rainforest' className='underline font-bold'>guide to organic and Fairtrade certification</Link>. Industry analyses suggest switching a supply chain to organic can cut its Scope 3 footprint by up to roughly 75%, and Ethiopia&apos;s baseline already sits close to that low-input end.
      </p>

      <p className='my-4'>
        Shade systems add a second, less obvious effect: carbon held in the trees and soil around the coffee. A 2024 study of coffee-based agroforestry in the Nono Sale Forest of southwestern Ethiopia measured total carbon storage of roughly 189 to 232 Mg per hectare across different shade strata, with Albizia-shaded plots holding the most (Ararsa &amp; Endalamaw, 2024, International Journal of Environmental Protection and Policy). Standing carbon on the farm is not the same as a deduction from a green coffee&apos;s footprint, and buyers should not treat it as one, but it is real evidence that these systems function as carbon reservoirs rather than carbon sources, and it is the biodiversity story behind Ethiopia&apos;s <Link href='/insights/eu-deforestation-regulation-ethiopian-coffee-compliance' className='underline font-bold'>EUDR compliance position</Link>.
      </p>

      <div className='border-l-4 border-amber-500 pl-6 bg-gray-50 p-4 my-6'>
        <p className='text-sm text-gray-700'>
          <span className='font-bold'>From the exporter&apos;s side:</span> when buyers ask us for emissions data, the first thing we can confirm is what is <span className='italic'>absent</span>. At most of the washing stations and cooperatives we source from, farmers are not applying synthetic fertilizer at meaningful rates, and drying is done by sun on raised beds. The low number is not a program we sell; it is the default we can document.
        </p>
      </div>

      {/* SECTION 3 */}
      <h3 id='the-numbers' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineChartBarSquare className='w-8 h-8 text-amber-600' />
        3. The Numbers: Per-Kilo Estimates and What They Mean
      </h3>

      <p className='my-4'>
        There is no single official carbon number for Ethiopian green coffee, and any buyer told otherwise should be skeptical. What exists is a range from life-cycle studies, and the range itself is the useful part because it shows how much production method, not origin label, moves the result. The most cited comparison is Nab and Maslin&apos;s 2020 synthesis, which put conventional Arabica at about 15.33 kg CO2e per kg of exported green coffee against 3.51 kg for a low-input, sea-freighted, efficiently milled system, a reduction of roughly 77% (Nab &amp; Maslin, 2020, Geo: Geography and Environment, UCL).
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Factor</th>
              <th className='p-3 text-left font-bold'>Higher-footprint profile</th>
              <th className='p-3 text-left font-bold'>Lower-footprint profile</th>
              <th className='p-3 text-left font-bold'>Where most Ethiopian coffee sits</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Fertilizer</td>
              <td className='p-3'>Heavy synthetic nitrogen</td>
              <td className='p-3'>Little to none / organic inputs</td>
              <td className='p-3'>Low-input, often none</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Farm system</td>
              <td className='p-3'>Full-sun monoculture</td>
              <td className='p-3'>Shade / agroforestry</td>
              <td className='p-3'>Mostly shade-grown</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Drying</td>
              <td className='p-3'>Mechanical dryers</td>
              <td className='p-3'>Sun on beds / patios</td>
              <td className='p-3'>Predominantly sun-dried</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Export transport</td>
              <td className='p-3'>Airfreight</td>
              <td className='p-3'>Ocean freight</td>
              <td className='p-3'>Sea via Djibouti</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        Read the table as a scorecard rather than a calculator. Ethiopian coffee lands on the low-footprint side of every row that a buyer actually cares about, which is why credible estimates for typical Ethiopian lots cluster toward the lower end of the published Arabica range rather than the conventional high figure. It also explains why the production stage, not shipping, is where the difference is won or lost. Broader syntheses attribute somewhere between roughly 75% and 91% of coffee&apos;s footprint to the production phase, so an origin that is structurally low-input at that phase carries the advantage through the whole chain.
      </p>

      <div className='bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-r-lg my-6'>
        <h4 className='font-bold text-lg mb-2'>A caution on numbers</h4>
        <p className='text-sm text-gray-700'>
          Published per-kilo figures are averages from specific studies and geographies, not certified values for any given Ethiopian lot. Use them to understand the shape of the footprint and to prioritize data collection, not as a substitute for it. For a reportable Scope 3 entry, pair a defensible emission factor with lot-specific primary data on inputs, processing, and freight.
        </p>
      </div>

      {/* SECTION 4 */}
      <h3 id='scope-3-reporting' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineDocumentCheck className='w-8 h-8 text-amber-600' />
        4. How Ethiopian Coffee Fits Your Scope 3 and CSRD Reporting
      </h3>

      <p className='my-4'>
        For companies in scope of EU sustainability reporting, green coffee emissions are not optional to disclose. Under the Corporate Sustainability Reporting Directive as revised by the 2025 Omnibus package, mandatory reporting now applies to companies with more than 1,000 employees and turnover above 450 million euros, and in-scope companies must still disclose total gross Scope 3 emissions broken down by significant category under the ESRS E1 climate standard (European Commission Omnibus package, 2025). The Omnibus trimmed the number of data points but kept Scope 3 in place. Larger roasters and importers are directly affected; their suppliers feel it through data requests flowing down the chain.
      </p>

      <p className='my-4'>
        Reporting timelines shifted with the Omnibus &quot;stop-the-clock&quot; measure, moving many second-wave companies&apos; first reports to 2028 covering financial year 2027. That is not a reason to wait. Building a reliable green coffee emissions inventory takes seasons of supplier data, and the companies that start collecting lot-level information from origin now will have primary data when reporting bites, rather than falling back on generic secondary averages that overstate a low-input origin like Ethiopia.
      </p>

      <div className='bg-green-50 border border-green-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3'>Why generic factors penalize Ethiopian coffee</h4>
        <p className='text-sm text-gray-700'>
          Default emission factors are often built on intensive, fertilizer-heavy production. Applied to an Ethiopian lot from a low-input smallholder system, they can materially overstate its true footprint. Primary data from origin, showing minimal synthetic inputs and sun drying, lets a buyer report a lower, more accurate figure and defend it. Under-counting is a compliance risk; over-counting is a competitiveness one.
        </p>
      </div>

      <p className='my-4'>
        This connects directly to work many buyers are already doing for deforestation rules. The geolocation and traceability records assembled for EUDR compliance, covered in our <Link href='/insights/ethiopian-coffee-traceability-guide' className='underline font-bold'>Ethiopian coffee traceability guide</Link>, are the same backbone that supports emissions accounting. A lot you can trace to a cooperative and a washing station is a lot whose production method, and therefore its footprint, you can actually characterize.
      </p>

      {/* SECTION 5 */}
      <h3 id='primary-data' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineTruck className='w-8 h-8 text-amber-600' />
        5. What Primary Emissions Data an Origin Exporter Can Provide
      </h3>

      <p className='my-4'>
        The most useful thing an exporter can give a carbon-conscious buyer is not a headline number but the underlying facts that feed one. A green coffee&apos;s emission profile is built from a handful of lot-level attributes, and each of them is something an origin-connected exporter observes directly rather than estimates from a desk. When a buyer asks us for Scope 3 support, this is the data we work from.
      </p>

      <div className='grid md:grid-cols-2 gap-4 my-6'>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Production system and inputs</h4>
          <p className='text-sm text-gray-700'>Whether a lot comes from forest, semi-forest, garden, or plantation coffee, and what fertilizer, if any, was applied. This drives the largest emissions category, the farm stage.</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Processing and drying method</h4>
          <p className='text-sm text-gray-700'>Washed, natural, or honey, and critically whether drying was sun-powered on raised beds or mechanical. Energy at the mill is a real, and reducible, contributor.</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Traceability depth</h4>
          <p className='text-sm text-gray-700'>Cooperative, washing station, or farm-group identity, so the reported method is verifiable and tied to a specific lot rather than a national average.</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Freight routing</h4>
          <p className='text-sm text-gray-700'>Ocean routing from Djibouti and container details, so transport is modeled as sea freight, the correct low-impact assumption, not a generic blended factor.</p>
        </div>
      </div>

      <p className='my-4'>
        None of this requires an exporter to claim farm ownership or to sell a carbon offset. It is documentation of how a specific lot was grown, processed, and shipped, handed to the buyer who needs it for their own inventory. Paired with an emission factor the buyer&apos;s sustainability team trusts, lot-level facts turn a vague &quot;Ethiopian coffee is low-carbon&quot; into a reportable, defensible entry. That is the difference between a marketing line and usable Scope 3 data.
      </p>

      {/* SECTION 6 */}
      <h3 id='buyer-scenario' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineUserGroup className='w-8 h-8 text-amber-600' />
        6. A Buyer Scenario: Sourcing for a Lower-Carbon Program
      </h3>

      <p className='my-4'>
        Consider a mid-size German roaster processing about 400 tonnes of green coffee a year, large enough to sit inside CSRD scope and to face annual Scope 3 disclosure. Their sustainability lead has flagged that generic emission factors are inflating the reported footprint of their African coffees, and their largest customers, regional grocery chains, are starting to ask for supplier-level carbon data in tenders. The roaster does not need a carbon-neutral label; it needs accurate, lower numbers it can stand behind.
      </p>

      <p className='my-4'>
        For this buyer, Ethiopian coffee is a practical lever rather than a slogan. Sourcing traceable lots from low-input smallholder cooperatives, with sun drying and documented sea freight, lets the sustainability team replace a punitive default factor with primary data that reflects the real production method. The same traceability file already built for EUDR does double duty for emissions. The commercial logic is clean: the roaster buys coffee it wanted anyway, for cup quality, and the sourcing decision also improves the Scope 3 line rather than worsening it.
      </p>

      <p className='my-4'>
        A Japanese specialty importer buying five-container lots would approach the same origin differently, prioritizing micro-lot traceability over volume, but the underlying mechanism is identical: the lower footprint is unlocked by data, not by the country name on the bag. In both cases the exporter&apos;s job is to make the production method legible at the lot level. To see how those lots are documented from farm to vessel, our <Link href='/insights/ethiopian-coffee-export-process-buyers-guide' className='underline font-bold'>export process guide</Link> walks through the paperwork trail.
      </p>

      {/* CTA */}
      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Source Traceable, Low-Input Ethiopian Coffee with Data You Can Report</h4>
        <p className='my-2'>
          <span className='font-bold'>Ethio Coffee Import and Export PLC</span> supplies traceable green coffee from Yirgacheffe, Sidamo, Guji, Harrar, Limu, and Jimma, with lot-level records of production system, processing, drying method, and sea-freight routing to support your Scope 3 and sustainability reporting. Request samples and the documentation behind them.
        </p>
        <div className='flex flex-wrap gap-4 mt-4'>
          <Link href='/offerings' className='bg-dark text-primary px-6 py-3 rounded font-bold hover:bg-gray-800 transition'>View Our Offerings</Link>
          <Link href='/contact-us' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>Request Samples</Link>
          <Link href='/ordering-info' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>How to Order</Link>
        </div>
      </div>

      {/* FAQ */}
      <h3 id='faq' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineQuestionMarkCircle className='w-8 h-8 text-amber-600' />
        7. Frequently Asked Questions
      </h3>

      <section className='mb-12 bg-gray-50 rounded-xl p-8 border border-gray-200'>
        <div className='space-y-6'>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>What is the carbon footprint of Ethiopian green coffee per kilogram?</h4>
            <p className='text-sm text-gray-600'>There is no single certified figure, but published Arabica life-cycle studies range from about 3.51 kg CO2e per kg for low-input, sea-freighted coffee to 15.33 kg for conventional intensive production (Nab &amp; Maslin, 2020). Because most Ethiopian coffee is low-input, shade-grown, and sun-dried, typical lots sit toward the lower end. Use these as ranges, then pair them with lot-level primary data.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Does Ethiopian coffee have a lower carbon footprint than other origins?</h4>
            <p className='text-sm text-gray-600'>Structurally, it tends to. Roughly 95% of Ethiopia&apos;s crop comes from smallholders using little or no synthetic fertilizer, most grows under shade, and drying is largely sun-powered. Since farm-stage fertilizer is the biggest driver of coffee emissions, an origin that avoids it starts from a lower base than intensively farmed, full-sun, machine-dried coffee. The footprint still depends on the specific lot and method.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Can sourcing Ethiopian coffee help our Scope 3 or CSRD reporting?</h4>
            <p className='text-sm text-gray-600'>Yes, when backed by data. Green coffee is usually a roaster&apos;s largest Scope 3 category, and generic emission factors overstate low-input origins. Sourcing traceable Ethiopian lots with documented production system, drying method, and sea freight lets you replace a punitive default with accurate primary data, producing a lower, defensible figure under ESRS E1.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Is shade-grown Ethiopian coffee carbon negative?</h4>
            <p className='text-sm text-gray-600'>No, and buyers should avoid that claim. Ethiopian agroforestry stores substantial carbon, roughly 189 to 232 Mg per hectare in one 2024 southwestern Ethiopia study, and functions as a reservoir rather than a source. But standing farm carbon is not a direct deduction from a green coffee&apos;s product footprint, and treating it as an offset without a proper accounting method is not defensible in a Scope 3 inventory.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>What emissions data can an Ethiopian exporter actually provide?</h4>
            <p className='text-sm text-gray-600'>An origin-connected exporter can document the lot-level facts that feed an emission calculation: production system (forest, semi-forest, garden, plantation), fertilizer use, processing and drying method, traceability to cooperative or washing station, and ocean-freight routing. It supplies the inputs to your model rather than a finished carbon number, which is what a credible inventory needs.</p>
          </div>
        </div>
      </section>

      {/* RELATED ARTICLES */}
      <div className='my-10 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4'>Related Articles</h3>
        <div className='grid md:grid-cols-2 gap-4'>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Sustainability &amp; Compliance</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/eu-deforestation-regulation-ethiopian-coffee-compliance' className='text-amber-700 hover:underline'>EUDR Compliance for Ethiopian Coffee</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-certifications-organic-fairtrade-rainforest' className='text-amber-700 hover:underline'>Organic, Fairtrade &amp; Rainforest Certifications</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-climate-change-impact' className='text-amber-700 hover:underline'>Climate Change Impact on Ethiopian Coffee</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Traceability &amp; Sourcing</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/ethiopian-coffee-traceability-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Traceability Guide</Link></li>
              <li>&bull; <Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='text-amber-700 hover:underline'>How to Source Green Coffee from Ethiopia</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-washing-stations-buyers-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Washing Stations</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Processing &amp; Production</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='text-amber-700 hover:underline'>Washed vs Natural Processing</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-export-process-buyers-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Export Process</Link></li>
              <li>&bull; <Link href='/insights/direct-trade-ethiopian-farmers' className='text-amber-700 hover:underline'>Direct Trade with Ethiopian Farmers</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Trade &amp; Logistics</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/specialty-coffee-storage-freight-logistics' className='text-amber-700 hover:underline'>Storage &amp; Freight Logistics</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-landed-cost-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Landed Cost Guide</Link></li>
              <li>&bull; <Link href='/insights/green-coffee-supplier-evaluation-checklist' className='text-amber-700 hover:underline'>Green Coffee Supplier Evaluation Checklist</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> Written by Ethio Coffee Import and Export PLC, an origin-connected Ethiopian coffee exporter with three decades of sourcing relationships across Yirgacheffe, Sidamo, Guji, Harar, Limu, and Jimma. Emissions figures draw on published life-cycle work by <a href='https://theconversation.com/coffee-heres-the-carbon-cost-of-your-daily-cup-and-how-to-make-it-climate-friendly-152629' target='_blank' rel='noopener noreferrer' className='underline'>Nab &amp; Maslin (UCL)</a>, agroforestry carbon research (<a href='https://www.sciencepublishinggroup.com/article/10.11648/j.ijepp.20241202.12' target='_blank' rel='noopener noreferrer' className='underline'>Ararsa &amp; Endalamaw, 2024</a>), and sector data from the <a href='https://www.ico.org/' target='_blank' rel='noopener noreferrer' className='underline'>International Coffee Organization</a>. Figures are study averages, not certified lot values; contact us for lot-level primary data.
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
