import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import {
  HiOutlineLightBulb,
  HiOutlineClipboardDocumentList,
  HiOutlineBeaker,
  HiOutlineChartBar,
  HiOutlineMapPin,
  HiOutlineFire,
  HiOutlineSparkles,
  HiOutlineBolt,
  HiOutlineCurrencyDollar,
  HiOutlineShieldCheck,
  HiOutlineUserGroup,
  HiOutlineArrowPath,
  HiOutlineQuestionMarkCircle,
} from 'react-icons/hi2'

type InsightContentProps = { title: string; date: string; large_image_url: string }

export default function EthiopianCoffeeForInstantSolubleSourcingGuide({
  title,
  date,
  large_image_url,
}: InsightContentProps) {
  return (
    <>
      {/* H1 + H2 */}
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        Ethiopian Coffee for Instant &amp; Soluble: Sourcing Guide
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        How to source Ethiopian green coffee for instant and soluble manufacturing: extraction yield, spray-dried versus freeze-dried, aroma retention, and the premiumization play that fits an arabica origin.
      </h2>

      {/* Hero image */}
      <figure>
        <figcaption className='font-inconsolata my-2'>{title}</figcaption>
        <div className='w-full aspect-[5/3] overflow-hidden rounded-md bg-gray-200 flex items-center justify-center'>
          {/* TODO: Replace placeholder with actual hero image */}
          {/* Expected path: /images/insights/ethiopian-coffee-for-instant-soluble-sourcing-guide.webp */}
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Ethiopian green coffee feeding a freeze-dried instant coffee manufacturing line'
            fill
            objectFit='cover'
            className='w-full h-full'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>
      </figure>

      {/* Category tag */}
      <div className='my-4 text-sm bg-amber-50 p-4 rounded-lg border border-amber-200'>
        <span className='font-semibold'>Category:</span>
        <span className='ml-2'>Instant &amp; Soluble / Sourcing Guide / Green Coffee Buying / Manufacturer Resources</span>
      </div>

      {/* Key Takeaway box */}
      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-8 border border-amber-200'>
        <h3 className='font-bold text-xl mb-3 flex items-center gap-2'>
          <HiOutlineLightBulb className='text-amber-400 flex-shrink-0' />Key Takeaway
        </h3>
        <p className='text-sm leading-relaxed'>
          Ethiopia is an arabica origin, so it does not compete in commodity soluble, where cheap, high-yield robusta wins on cost per kilo of powder. The real opportunity is premium single-origin instant, the fastest-growing slice of a roughly 38 billion US dollar category. Two rules drive the green selection. First, the process strips aroma, so you buy &quot;louder&quot; coffee than you would for filter: aromatic naturals from Guji, Sidamo, or Limu give freeze-drying something to preserve. Second, match the green to the dryer; freeze-drying rewards expensive aromatic lots, while spray-drying flattens them, so reserve your best coffee for freeze-dried SKUs. Cost the green per kilo of finished soluble (green price divided by extraction yield), and screen every lot for ochratoxin A, because soluble concentrates whatever the green carries.
        </p>
      </div>

      {/* Table of Contents */}
      <div className='my-8 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <HiOutlineClipboardDocumentList className='text-amber-600' /> In This Guide
        </h3>
        <ol className='space-y-2 text-sm'>
          <li><a href='#yield' className='text-amber-700 hover:underline'>1. Why Instant Is a Different Sourcing Problem</a></li>
          <li><a href='#market' className='text-amber-700 hover:underline'>2. The Commodity Floor and the Premium Surge</a></li>
          <li><a href='#ethiopia-fit' className='text-amber-700 hover:underline'>3. Where an Arabica Origin Actually Fits</a></li>
          <li><a href='#process' className='text-amber-700 hover:underline'>4. Spray-Dried vs Freeze-Dried: Matching Green to Dryer</a></li>
          <li><a href='#origins' className='text-amber-700 hover:underline'>5. Best Ethiopian Origins, Processing, and Grades</a></li>
          <li><a href='#aroma' className='text-amber-700 hover:underline'>6. Why You Buy &quot;Louder&quot; Coffee for Instant</a></li>
          <li><a href='#economics' className='text-amber-700 hover:underline'>7. Yield Economics: Costing Green per Kilo of Soluble</a></li>
          <li><a href='#safety' className='text-amber-700 hover:underline'>8. The Mycotoxin Concentration Problem</a></li>
          <li><a href='#buyer-scenario' className='text-amber-700 hover:underline'>9. Buyer Scenario: A Premium Freeze-Dried Launch</a></li>
          <li><a href='#workflow' className='text-amber-700 hover:underline'>10. Sourcing Workflow and Volume Planning</a></li>
          <li><a href='#faq' className='text-amber-700 hover:underline'>11. Frequently Asked Questions</a></li>
        </ol>
      </div>

      {/* Introduction */}
      <p className='text-lg leading-relaxed my-4'>
        Sourcing <span className='font-bold'>Ethiopian coffee for instant coffee</span> and soluble manufacturing inverts most of the instincts a green buyer brings from bag or espresso programs. The roaster who normally chases clarity and acidity now has to think about extraction yield, soluble solids, and how much of a coffee&apos;s aroma will survive being brewed industrially, concentrated, and dried back into powder. The cup the consumer tastes is several steps removed from the green, and every step throws something away. That changes which Ethiopian lots are worth buying and, more importantly, which ones are a waste of money in this format.
      </p>
      <p className='my-4'>
        This guide covers the instant and soluble side specifically: how yield economics shape the buy, where an arabica origin like Ethiopia genuinely competes, how spray-drying and freeze-drying demand different green coffee, and the food-safety detail that matters far more here than in any other format. For the other packaged formats, see the companion guides on <Link href='/insights/ethiopian-coffee-for-capsules-pods-sourcing-guide' className='text-amber-700 hover:underline'>capsules and pods</Link> and <Link href='/insights/ethiopian-coffee-cold-brew-rtd-sourcing-guide' className='text-amber-700 hover:underline'>cold brew and RTD</Link>.
      </p>

      {/* Section 1: Yield */}
      <h3 id='yield' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineBeaker className='w-8 h-8 text-amber-600' />
        1. Why Instant Is a Different Sourcing Problem
      </h3>
      <p className='my-4'>
        Instant coffee is brewed coffee with the water removed. A manufacturer grinds and roasts green coffee, extracts it under heat and pressure in percolation columns, concentrates the liquor, and dries it into soluble crystals or powder. The single number that governs the economics is extraction yield: the share of the roasted coffee&apos;s mass that ends up as soluble solids in the final product. Published figures put soluble yields for instant manufacturing in the range of roughly 40 to 55% on a dry basis, well above the 18 to 22% a barista pulls in a cup, because the industrial process extracts far more aggressively.
      </p>
      <p className='my-4'>
        That yield number is why the commodity instant industry runs on robusta. Robusta carries more total soluble solids than arabica and costs less per kilo of green, so it delivers more powder per dollar. An arabica origin cannot win that math. The implication for an Ethiopian buyer is immediate: do not try to sell Ethiopian coffee as a cheap soluble feedstock, because it will always lose on cost per kilo of crystal. The entire case for Ethiopian coffee in this category rests on the small but fast-growing segment where buyers will pay for flavor, not yield.
      </p>
      <div className='bg-blue-50 border border-blue-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3'>The Three Numbers That Decide an Instant Buy</h4>
        <ul className='space-y-2 text-sm text-gray-700'>
          <li><span className='font-semibold'>Extraction yield (40 to 55%):</span> how much soluble you get per kilo of roasted coffee. It sets your raw-material cost per kilo of powder.</li>
          <li className='mt-2'><span className='font-semibold'>Aroma retention:</span> how much of the cup survives extraction, concentration, and drying. Freeze-drying keeps more; spray-drying keeps less.</li>
          <li className='mt-2'><span className='font-semibold'>Contaminant load:</span> ochratoxin A and other residues concentrate as water is removed, so the green&apos;s safety profile is magnified in the finished product.</li>
        </ul>
      </div>

      {/* Section 2: Market */}
      <h3 id='market' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineChartBar className='w-8 h-8 text-amber-600' />
        2. The Commodity Floor and the Premium Surge
      </h3>
      <p className='my-4'>
        Soluble is not a niche. Soluble coffee&apos;s share of total world coffee exports across all forms climbed to roughly 12% in coffee year 2024/25, up from about 11.5% the year before, with Vietnam and Brazil dominating the supply side, according to <a href='https://www.ico.org/' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>International Coffee Organization</a> trade data. Market-research firms size the broader instant coffee market near 38 billion US dollars in 2026. Treat these as industry estimates rather than audited figures; the structure they reveal is what matters for sourcing.
      </p>
      <p className='my-4'>
        That structure is a two-tier market. Mass-priced instant accounts for the large majority of volume, roughly four-fifths by value, and runs almost entirely on low-cost robusta. Sitting on top is a premium tier growing several points faster than the mass tier, pulled by single-origin freeze-dried products and traceability claims that buyers will pay a 30 to 50% premium to put on a label. Freeze-dried formats specifically are growing faster than spray-dried. The commodity floor is closed to Ethiopia. The premium surge is wide open, and it is exactly the part of the category that needs a credible, named origin.
      </p>

      {/* Section 3: Ethiopia fit */}
      <h3 id='ethiopia-fit' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineMapPin className='w-8 h-8 text-amber-600' />
        3. Where an Arabica Origin Actually Fits
      </h3>
      <p className='my-4'>
        Ethiopia&apos;s value in this category is its name and its aromatics, not its cost or its yield. Three product positions make commercial sense for Ethiopian green coffee in instant manufacturing, and each one targets the premium tier rather than the commodity floor.
      </p>
      <div className='grid md:grid-cols-3 gap-4 my-6'>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Single-Origin Freeze-Dried</h4>
          <p className='text-sm text-gray-700'>A named Yirgacheffe, Guji, or Sidamo freeze-dried instant sold as a connoisseur convenience product. Highest margin, smallest volume, and the position where Ethiopia is hardest to copy.</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Microground Hybrid</h4>
          <p className='text-sm text-gray-700'>Barista-style products blend freeze-dried soluble with finely milled roasted coffee for a fresher cup. An aromatic Ethiopian lot in the microground fraction adds a recognizable signature.</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Aromatic Top-Up</h4>
          <p className='text-sm text-gray-700'>A modest Ethiopian inclusion in a premium arabica soluble blend, used to lift florals and fruit. The lowest-cost way to claim Ethiopian character on a multi-origin product.</p>
        </div>
      </div>
      <p className='my-4'>
        None of these is a volume game on the scale of commodity soluble, and that is the point. The commercial logic mirrors the premium end of single-serve: the value is in a traceable, named origin that the powder giants cannot easily replicate. Buyers weighing this against a capsule or RTD launch will find the trade-offs laid out in the <Link href='/insights/ethiopian-coffee-cold-brew-rtd-sourcing-guide' className='text-amber-700 hover:underline'>cold brew and RTD guide</Link> useful for comparison.
      </p>

      {/* Section 4: Spray vs freeze */}
      <h3 id='process' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineFire className='w-8 h-8 text-amber-600' />
        4. Spray-Dried vs Freeze-Dried: Matching Green to Dryer
      </h3>
      <p className='my-4'>
        The drying method is the most important fact about an instant program from a sourcing standpoint, because it decides how much of your green coffee&apos;s flavor reaches the cup. Buy the wrong coffee for the wrong dryer and you either waste money or undersell the product.
      </p>
      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Factor</th>
              <th className='p-3 text-left font-bold'>Spray-Dried</th>
              <th className='p-3 text-left font-bold'>Freeze-Dried</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>How it works</td>
              <td className='p-3'>Liquor sprayed into hot air; water flashes off, leaving powder</td>
              <td className='p-3'>Liquor frozen, then water removed under vacuum by sublimation</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Aroma retention</td>
              <td className='p-3'>Lower; high heat drives off volatiles</td>
              <td className='p-3'>Higher; low temperature preserves delicate compounds</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Cost to run</td>
              <td className='p-3'>Lower; the commodity standard</td>
              <td className='p-3'>Higher; the premium standard</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Right Ethiopian green</td>
              <td className='p-3'>Solid, clean lots; do not waste top micro-lots here</td>
              <td className='p-3'>Aromatic naturals and washed specialty lots that justify the process</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className='my-4'>
        The sourcing rule writes itself. Freeze-drying is the only process that preserves enough of a fragrant Ethiopian lot to make its premium worth paying, so reserve your expensive aromatic coffee for freeze-dried SKUs. Spray-drying loses much of what you paid for, so feed it clean, dependable lots and spend your quality budget elsewhere. A buyer running both should split the green selection accordingly rather than buying one grade for the whole line.
      </p>

      {/* Section 5: Origins */}
      <h3 id='origins' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineSparkles className='w-8 h-8 text-amber-600' />
        5. Best Ethiopian Origins, Processing, and Grades
      </h3>
      <p className='my-4'>
        Because the process strips subtlety, the origins that win in instant are the ones with intense, robust character that survives the trip rather than the most delicate, nuanced lots. Natural processing has a clear edge here for the same reason it suits capsules: the extra fruit and sweetness give the dryer more to keep.
      </p>
      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Origin</th>
              <th className='p-3 text-left font-bold'>Best Use in Instant</th>
              <th className='p-3 text-left font-bold'>What Survives the Process</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'><Link href='/ethiopian-coffee-guji' className='text-amber-700 hover:underline'>Guji</Link></td>
              <td className='p-3'>Premium freeze-dried single-origin</td>
              <td className='p-3'>Natural lots keep red fruit and floral intensity loud enough to read after drying</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'><Link href='/ethiopian-coffee-sidamo' className='text-amber-700 hover:underline'>Sidamo</Link></td>
              <td className='p-3'>Freeze-dried single-origin / aromatic top-up</td>
              <td className='p-3'>Stone fruit and syrupy body translate well; a dependable freeze-dried base</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Yirgacheffe</td>
              <td className='p-3'>Microground hybrid / aromatic top-up</td>
              <td className='p-3'>Jasmine and citrus are delicate; best added as microground or a small soluble inclusion</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'><Link href='/ethiopian-coffee-limu' className='text-amber-700 hover:underline'>Limu</Link></td>
              <td className='p-3'>Premium spray-dried base</td>
              <td className='p-3'>Rounded body and gentle acidity hold up; a clean, cost-effective premium base</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'><Link href='/ethiopian-coffee-jimma' className='text-amber-700 hover:underline'>Jimma</Link> / <Link href='/insights/nekemte-wellega-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Nekemte</Link></td>
              <td className='p-3'>Volume body / spray-dried workhorse</td>
              <td className='p-3'>Full body, low acidity, chocolate depth; the commercial-grade backbone of a blend</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className='my-4'>
        On grade, instant flips the usual hierarchy. Cup-defect tolerance is looser, because aggressive extraction and drying blur the fine distinctions that a cupper scores in a filter brew, so paying for a Grade 1 micro-lot to spray-dry is money lost. Premium freeze-dried single-origin SKUs justify Grade 1 to Grade 2 lots; everything else is usually built on consistent Grade 3 to Grade 5 commercial coffee where body, cleanliness, and price beat headline scores. See the <Link href='/coffee-grading-ethiopia' className='text-amber-700 hover:underline'>Ethiopian coffee grading system</Link> for how grades map to use, the deeper logic in <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='text-amber-700 hover:underline'>washed vs natural processing</Link>, and <Link href='/insights/green-coffee-quality-control-defects-grading' className='text-amber-700 hover:underline'>defects and grading</Link> for what those defect counts actually mean.
      </p>

      {/* Section 6: Aroma */}
      <h3 id='aroma' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineBolt className='w-8 h-8 text-amber-600' />
        6. Why You Buy &quot;Louder&quot; Coffee for Instant
      </h3>
      <p className='my-4'>
        Every stage of instant manufacturing is a filter that removes aroma. Industrial extraction pulls heavily on solubles but drives off volatile aromatics with the heat. Concentration removes more. Drying removes more again, which is why some plants capture and reinject aroma fractions to claw back what the process loses. The practical consequence for a green buyer is counterintuitive: the coffee has to start louder than you would ever want it in a pour-over, because the cup the consumer tastes is a faded copy of the green.
      </p>
      <p className='my-4'>
        This is the single biggest mental shift from specialty filter sourcing. A delicate, ethereal washed Yirgacheffe that scores beautifully on the cupping table can arrive in the finished instant as a thin shadow of itself, its signature florals largely gone. A punchy natural Guji, all red fruit and fermented sweetness, lands with enough left over to still read as distinctive. So you deliberately over-index on intensity: pronounced fruit, heavier body, strong sweetness. Freeze-drying then preserves more of that surplus than spray-drying does, which is why the loudest lots and the gentlest dryer belong together.
      </p>
      <div className='border-l-4 border-amber-500 pl-6 bg-gray-50 p-4 my-6'>
        <p className='text-sm text-gray-700'>
          Rule of thumb: cup a candidate lot, then imagine turning its aroma volume down by half. If what remains is still recognizably Ethiopian and pleasant, it will work in instant. If it goes flat and generic, it was the wrong lot for this format, however well it scored.
        </p>
      </div>

      {/* Section 7: Economics */}
      <h3 id='economics' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineCurrencyDollar className='w-8 h-8 text-amber-600' />
        7. Yield Economics: Costing Green per Kilo of Soluble
      </h3>
      <p className='my-4'>
        Instant buyers must cost green coffee differently from roasters, because the relevant unit is not the kilo of green but the kilo of finished soluble. A rough working model: a kilo of green loses mass in roasting, then yields 40 to 55% of the roasted weight as soluble solids. The illustrative figures below show why an arabica origin only makes sense at the premium end, where the retail price absorbs the raw-material cost rather than competing on it.
      </p>
      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Step</th>
              <th className='p-3 text-left font-bold'>Commodity Robusta (illustrative)</th>
              <th className='p-3 text-left font-bold'>Premium Ethiopian (illustrative)</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Green cost basis</td>
              <td className='p-3'>Low</td>
              <td className='p-3'>Several times higher</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Soluble yield</td>
              <td className='p-3'>Higher (more TTS)</td>
              <td className='p-3'>Lower (arabica)</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Raw cost per kg soluble</td>
              <td className='p-3'>Lowest in the market</td>
              <td className='p-3'>Materially higher</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Where it sells</td>
              <td className='p-3'>Mass-priced jars and sachets</td>
              <td className='p-3'>Premium freeze-dried, named origin</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className='my-4'>
        The takeaway is not the exact numbers, which move with the market, but the shape: there is no version of this calculation where Ethiopian green undercuts robusta on cost per kilo of powder, and every version where a named Ethiopian freeze-dried product can command a retail premium that makes the higher raw cost irrelevant. Build the business case on the shelf price, not the input price. For the green-side benchmarks that feed this model, see the <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='text-amber-700 hover:underline'>FOB pricing guide</Link>.
      </p>

      {/* Section 8: Safety */}
      <h3 id='safety' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineShieldCheck className='w-8 h-8 text-amber-600' />
        8. The Mycotoxin Concentration Problem
      </h3>
      <p className='my-4'>
        Food safety carries more weight in instant than in any roasted format, and the reason is mechanical. Manufacturing concentrates the green coffee by removing water, and heat-stable contaminants such as ochratoxin A do not break down fully in the process. Whatever the green carries can be magnified in the finished soluble, and several markets set tighter regulatory limits for ochratoxin A in soluble coffee than in roasted, precisely because consumers ingest a concentrated product.
      </p>
      <p className='my-4'>
        The sourcing response is to push food-safety screening upstream, before the green ever reaches the extraction columns. Confirm proper drying and storage at origin, since ochratoxin A risk is tied to moisture and mold during processing and warehousing, and screen lots for ochratoxin A before shipment rather than discovering a problem in the finished batch, when an entire production run is at stake. The <Link href='/insights/green-coffee-mycotoxin-testing-guide' className='text-amber-700 hover:underline'>green coffee mycotoxin testing guide</Link> covers sampling and laboratory workflow in detail, and clean drying practice is part of why <Link href='/insights/ethiopian-coffee-traceability-guide' className='text-amber-700 hover:underline'>traceability</Link> to a known washing station matters more here than the marketing alone suggests.
      </p>

      {/* Section 9: Buyer scenario */}
      <h3 id='buyer-scenario' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineUserGroup className='w-8 h-8 text-amber-600' />
        9. Buyer Scenario: A Premium Freeze-Dried Launch
      </h3>
      <p className='my-4'>
        Consider a specialty roaster partnering with a contract soluble manufacturer to launch a direct-to-consumer single-origin freeze-dried instant for the travel and outdoor market. The brief is a recognizable Ethiopian identity, a freeze-dried format that justifies a premium sachet price, and enough supply consistency to keep the SKU on the shelf for at least a year.
      </p>
      <p className='my-4'>
        A sound plan looks like this. Choose a natural Guji Grade 2 rather than a delicate washed micro-lot, so the fruit and sweetness still read clearly after the process strips half the aroma. Direct it to the freeze-dryer, never the spray-dryer, because the whole premium rests on aroma the spray process would destroy. Screen the lot for ochratoxin A before shipment, since the finished product concentrates contaminants and a failed batch is far more expensive than a pre-shipment lab fee. Contract the volume forward across the crop year so the cup stays consistent jar to jar, and lean on traceability to a named washing station as the marketing spine of the product. The result is a sachet that tastes distinctly of Guji and survives a price point a commodity instant cannot reach. For a value tier, the same manufacturer would move to a Limu or Jimma base on a spray-dryer and reserve the Guji for the flagship.
      </p>

      {/* Section 10: Workflow */}
      <h3 id='workflow' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineArrowPath className='w-8 h-8 text-amber-600' />
        10. Sourcing Workflow and Volume Planning
      </h3>
      <ol className='list-decimal pl-6 my-4 space-y-3'>
        <li><span className='font-bold'>Confirm the dryer first.</span> Spray-dried versus freeze-dried decides the entire green selection. Settle it with your co-manufacturer before you cup a single sample.</li>
        <li><span className='font-bold'>Cup for survival, not for the table.</span> Evaluate candidate lots by imagining the aroma cut in half, and favor loud, intense naturals over delicate washed lots that will fade in the process.</li>
        <li><span className='font-bold'>Screen for ochratoxin A before shipment.</span> Make a clean ochratoxin A result a contractual condition; the concentration effect makes this non-negotiable for soluble. See the <Link href='/insights/green-coffee-mycotoxin-testing-guide' className='text-amber-700 hover:underline'>mycotoxin testing guide</Link>.</li>
        <li><span className='font-bold'>Cost per kilo of soluble, not per kilo of green.</span> Build the business case on the retail premium the named origin earns, using the <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='text-amber-700 hover:underline'>FOB pricing guide</Link> as the green-side input.</li>
        <li><span className='font-bold'>Lock consistency, then volume.</span> Soluble lines run continuously, so contract forward across the crop year for a stable profile. For order sizing and container math, see the <Link href='/insights/minimum-order-quantities-ethiopian-coffee-moq' className='text-amber-700 hover:underline'>minimum order quantities guide</Link>.</li>
      </ol>
      <p className='my-4'>
        Manufacturers running a decaffeinated instant line, a sizeable sub-segment in the convenience market, should also read the <Link href='/insights/decaf-green-coffee-processing-sourcing-guide' className='text-amber-700 hover:underline'>decaf processing and sourcing guide</Link>, and those building a certified-sustainable product will want the <Link href='/insights/ethiopian-coffee-certifications-organic-fairtrade-rainforest' className='text-amber-700 hover:underline'>certifications guide</Link> to align the green with the on-pack claim.
      </p>

      {/* FAQ */}
      <h3 id='faq' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineQuestionMarkCircle className='w-8 h-8 text-amber-600' />
        11. Frequently Asked Questions
      </h3>
      <section className='my-6 space-y-6'>
        <div>
          <h4 className='font-bold text-gray-800 mb-2'>Is Ethiopian coffee suitable for instant coffee manufacturing?</h4>
          <p className='text-sm text-gray-600'>Yes, but only for the premium tier. Ethiopia is an arabica origin and cannot match robusta on yield or cost per kilo of soluble, so it does not fit commodity instant. It excels in premium single-origin freeze-dried products and aromatic blend top-ups, where a named origin commands a price the input cost cannot.</p>
        </div>
        <div>
          <h4 className='font-bold text-gray-800 mb-2'>Should instant coffee use spray-dried or freeze-dried Ethiopian coffee?</h4>
          <p className='text-sm text-gray-600'>Reserve aromatic Ethiopian lots for freeze-drying, which preserves the delicate compounds that justify their premium. Spray-drying runs hot and drives off volatiles, so feeding it expensive specialty coffee wastes money. Use clean, dependable lots for spray-dried products and save your best green for the freeze-dryer.</p>
        </div>
        <div>
          <h4 className='font-bold text-gray-800 mb-2'>Which Ethiopian origin is best for premium instant coffee?</h4>
          <p className='text-sm text-gray-600'>Natural Guji and Sidamo lead for freeze-dried single-origin instant, because their loud fruit and sweetness survive the aroma losses of processing. Yirgacheffe works best as a microground hybrid or small inclusion since its florals are delicate. Limu and Jimma serve as clean, cost-effective bases for spray-dried premium blends.</p>
        </div>
        <div>
          <h4 className='font-bold text-gray-800 mb-2'>What grade of green coffee do I need for instant production?</h4>
          <p className='text-sm text-gray-600'>Lower than you might expect. Aggressive extraction and drying blur fine cup distinctions, so paying for a Grade 1 micro-lot to spray-dry is wasted. Premium freeze-dried single-origin SKUs justify Grade 1 to Grade 2; most instant runs on consistent Grade 3 to Grade 5 commercial coffee where body and price matter more than scores.</p>
        </div>
        <div>
          <h4 className='font-bold text-gray-800 mb-2'>Why does mycotoxin testing matter more for soluble coffee?</h4>
          <p className='text-sm text-gray-600'>Manufacturing removes water and concentrates the green coffee, so heat-stable contaminants like ochratoxin A can be magnified in the finished soluble. Several markets set tighter limits for soluble than for roasted coffee. Screen lots for ochratoxin A before shipment rather than risking an entire production run on contaminated green.</p>
        </div>
      </section>

      {/* CTA */}
      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Source Ethiopian Green Coffee for Your Instant or Soluble Line</h4>
        <p className='my-2'>
          As an origin-connected Ethiopian coffee exporter, <span className='font-bold'>Ethio Coffee Import and Export PLC</span> supplies both the aromatic single-origin naturals (Guji, Sidamo, Yirgacheffe) that premium freeze-dried products are built on and the dependable commercial-grade bases (Limu, Jimma, Nekemte) that spray-dried and blend programs need, with the consistent, current-crop supply and pre-shipment screening a soluble line depends on. We provide samples, grade and screen specifications, ochratoxin A testing support, and forward-contracted volume across the crop year. Contact us to discuss origins, grades, and a supply plan for your instant or soluble program.
        </p>
        <div className='flex flex-wrap gap-4 mt-4'>
          <Link href='/offerings' className='bg-dark text-primary px-6 py-3 rounded font-bold hover:bg-gray-800 transition'>
            View Our Offerings
          </Link>
          <Link href='/contact-us' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>
            Request Samples
          </Link>
          <Link href='/ordering-info' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>
            How to Order
          </Link>
        </div>
      </div>

      {/* RELATED ARTICLES */}
      <div className='my-10 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4'>Related Articles</h3>
        <div className='grid md:grid-cols-2 gap-4'>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Product &amp; Format Sourcing</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/ethiopian-coffee-for-capsules-pods-sourcing-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee for Capsules &amp; Pods</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-cold-brew-rtd-sourcing-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee for Cold Brew &amp; RTD</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-espresso-blend-sourcing-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee for Espresso Blends</Link></li>
              <li>&bull; <Link href='/insights/decaf-green-coffee-processing-sourcing-guide' className='text-amber-700 hover:underline'>Decaf Green Coffee: Processing &amp; Sourcing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Quality &amp; Food Safety</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/green-coffee-mycotoxin-testing-guide' className='text-amber-700 hover:underline'>Green Coffee Mycotoxin Testing Guide</Link></li>
              <li>&bull; <Link href='/insights/green-coffee-quality-control-defects-grading' className='text-amber-700 hover:underline'>Green Coffee Quality Control &amp; Grading</Link></li>
              <li>&bull; <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='text-amber-700 hover:underline'>Washed vs Natural Ethiopian Processing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Origins &amp; Grading</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/guji-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Guji Coffee: Buyer&apos;s Sourcing Guide</Link></li>
              <li>&bull; <Link href='/insights/sidamo-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Sidamo Coffee: Buyer&apos;s Sourcing Guide</Link></li>
              <li>&bull; <Link href='/coffee-grading-ethiopia' className='text-amber-700 hover:underline'>Ethiopian Coffee Grading System</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Buying &amp; Planning</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee FOB Pricing Guide</Link></li>
              <li>&bull; <Link href='/insights/minimum-order-quantities-ethiopian-coffee-moq' className='text-amber-700 hover:underline'>Minimum Order Quantities for Ethiopian Coffee</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-traceability-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Traceability Guide</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> Published by Ethio Coffee Import and Export PLC, an origin-connected Ethiopian coffee exporter with three decades of sourcing relationships across Yirgacheffe, Sidamo, Guji, Harar, Limu, and Jimma. This guide draws on direct sourcing experience supplying green coffee for packaged-format programs, alongside International Coffee Organization trade data and published instant coffee market research. Market figures and yield ranges are industry estimates; extraction yields and drying specifications vary by plant, so confirm details with your manufacturer before finalizing green selection.
        </p>
        <p className='text-sm text-gray-600 font-inconsolata mt-2'>
          <Link href='/insights' className='underline'>All Insights</Link> &middot; <Link href='/ethiopian-coffee-exporter' className='underline'>Our Export Services</Link> &middot; <Link href='/about' className='underline'>About Ethio Coffee</Link> &middot; <Link href='/contact-us' className='underline'>Contact</Link>
        </p>
      </div>
    </>
  )
}
