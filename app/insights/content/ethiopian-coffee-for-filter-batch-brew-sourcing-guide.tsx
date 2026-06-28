import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import {
  HiOutlineLightBulb,
  HiOutlineClipboardDocumentList,
  HiOutlineBeaker,
  HiOutlineMapPin,
  HiOutlineFire,
  HiOutlineAdjustmentsHorizontal,
  HiOutlineCalculator,
  HiOutlineArrowPath,
  HiOutlineTruck,
} from 'react-icons/hi2'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function EthiopianCoffeeForFilterBatchBrewSourcingGuide({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      {/* H1 + H2 */}
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        Which origins, grades, and roasts suit single-origin pour-over and high-volume batch brew, with extraction targets and café cost math.
      </h2>

      {/* HERO IMAGE */}
      <figure>
        <figcaption className='font-inconsolata my-2'>{title}</figcaption>
        <div className='w-full aspect-[5/3] overflow-hidden rounded-md bg-gray-200 flex items-center justify-center'>
          {/* TODO: Replace placeholder with actual hero image */}
          {/* Expected path: /images/insights/ethiopian-coffee-for-filter-batch-brew-sourcing-guide.webp */}
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Ethiopian coffee for filter brew: washed Yirgacheffe and Sidamo green beans beside a pour-over and a batch brewer'
            fill
            objectFit='cover'
            className='w-full h-full'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>
      </figure>

      {/* CATEGORY */}
      <div className='my-4 text-sm bg-amber-50 p-4 rounded-lg border border-amber-200'>
        <span className='font-semibold'>Category:</span>
        <span className='ml-2'>Filter &amp; Batch Brew / Sourcing Guide / Green Coffee Buying / Roaster &amp; Café Resources</span>
      </div>

      {/* KEY TAKEAWAY */}
      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-8 border border-amber-200'>
        <h3 className='font-bold text-xl mb-3 flex items-center gap-2'>
          <HiOutlineLightBulb className='text-amber-400 flex-shrink-0' />Key Takeaway
        </h3>
        <p className='text-sm leading-relaxed'>
          Filter brewing rewards clarity, and Ethiopian coffee is the origin that delivers it. For pour-over and single-cup filter, washed Yirgacheffe and washed Sidamo (Grade 1) carry tea-like florals and citrus that define a specialty filter menu. For batch brew, where coffee sits in an airpot or on a warmer, a clean washed Sidamo or Limu Grade 2 holds its profile longer and forgives wider extraction swings. Naturals from Guji and Yirgacheffe work as rotating fruit-forward features. Source by brew method, not just region name: the holding behavior, roast tolerance, and cost per cup differ enough that the wrong lot quietly costs a café both quality and margin.
        </p>
      </div>

      {/* TABLE OF CONTENTS */}
      <div className='my-8 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <HiOutlineClipboardDocumentList className='text-amber-600' /> In This Guide
        </h3>
        <ol className='space-y-2 text-sm'>
          <li><a href='#why-filter' className='text-amber-700 hover:underline'>1. Why Ethiopian Coffee Owns the Filter Cup</a></li>
          <li><a href='#batch-vs-pourover' className='text-amber-700 hover:underline'>2. Batch Brew vs Pour-Over: Different Lots, Different Demands</a></li>
          <li><a href='#origins' className='text-amber-700 hover:underline'>3. Best Ethiopian Origins by Filter Role</a></li>
          <li><a href='#grade-process' className='text-amber-700 hover:underline'>4. Grade and Process Selection for Filter</a></li>
          <li><a href='#roast-extraction' className='text-amber-700 hover:underline'>5. Roast and Extraction Targets</a></li>
          <li><a href='#economics' className='text-amber-700 hover:underline'>6. Café Economics: Green Cost Per Filter Cup</a></li>
          <li><a href='#rotation' className='text-amber-700 hover:underline'>7. Building a Single-Origin Rotation</a></li>
          <li><a href='#sampling' className='text-amber-700 hover:underline'>8. Sampling and Booking Workflow</a></li>
          <li><a href='#faq' className='text-amber-700 hover:underline'>9. Frequently Asked Questions</a></li>
        </ol>
      </div>

      {/* INTRODUCTION */}
      <p className='text-lg leading-relaxed my-4'>
        Sourcing <strong>Ethiopian coffee for filter brew</strong> is a different exercise from sourcing for espresso or single-serve formats. Filter, whether a hand pour-over or a 12-liter batch brewer, strips away crema and pressure and presents the cup almost unedited. Acidity, aromatic lift, and texture sit fully exposed. That transparency is exactly why Ethiopian washed lots have become the reference point for specialty filter menus worldwide, and it is also why a small sourcing mistake shows up immediately in the cup.
      </p>
      <p className='my-4'>
        This guide is written for roasters and café operators choosing green coffee for filter and batch programs. It maps origins to brew roles, sets out roast and extraction targets, and works through the cost per cup that decides whether a single-origin filter offer is sustainable on a busy bar. If you are sourcing for a sealed short shot instead, the same green behaves differently; see the <Link href='/insights/ethiopian-coffee-espresso-blend-sourcing-guide' className='text-amber-700 hover:underline font-bold'>espresso blend sourcing guide</Link> and the <Link href='/insights/ethiopian-coffee-for-drip-bags-sourcing-guide' className='text-amber-700 hover:underline font-bold'>drip bag sourcing guide</Link>.
      </p>

      {/* SECTION 1 */}
      <h3 id='why-filter' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineBeaker className='w-8 h-8 text-amber-600' />
        1. Why Ethiopian Coffee Owns the Filter Cup
      </h3>
      <p className='my-4'>
        Filter brewing extracts at atmospheric pressure with a long, gentle contact time and a paper or cloth filter that removes most oils and fines. The result is a clear, layered cup that exposes the high, volatile aromatics first. Ethiopian washed coffees are built around precisely those aromatics: jasmine, bergamot, stone fruit, and citrus that a paper filter renders cleanly rather than muddying.
      </p>
      <p className='my-4'>
        Two structural traits give Ethiopian lots an advantage in filter that they do not always hold in other formats. The first is delicate, high-toned acidity that espresso can concentrate into sharpness but filter presents as brightness and length. The second is the wide aromatic range of Ethiopia&apos;s local <Link href='/insights/ethiopian-heirloom-coffee-varieties-landraces' className='text-amber-700 hover:underline'>landrace varieties</Link>, which gives a single farm or washing station a complexity most cultivars cannot match. For a café, that means one Ethiopian lot can anchor a filter menu that tastes distinct from everything next door.
      </p>
      <p className='my-4'>
        The flip side matters for buyers. Filter hides nothing, so an underdeveloped roast, a transit-faded lot, or a defect-heavy Grade 4 batch is obvious in the cup. Filter sourcing therefore puts more weight on green quality and freshness than espresso blending, where a base coffee can absorb a weaker component.
      </p>

      {/* SECTION 2 */}
      <h3 id='batch-vs-pourover' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineAdjustmentsHorizontal className='w-8 h-8 text-amber-600' />
        2. Batch Brew vs Pour-Over: Different Lots, Different Demands
      </h3>
      <p className='my-4'>
        &quot;Filter&quot; covers two operationally different jobs. Pour-over is a made-to-order, single-cup method where the barista controls every variable and the coffee is consumed within a minute of brewing. Batch brew runs litres at a time and the coffee then waits, sometimes for an hour, in an airpot or on a heated plate. The waiting changes which lot you should buy.
      </p>
      <p className='my-4'>
        Heat and time after brewing flatten acidity and push delicate florals toward a duller, cooked character. A jasmine-forward washed Yirgacheffe that sings in a fresh V60 can taste tired in a batch airpot held 45 minutes. The practical rule: reserve your most delicate, aromatic lots for pour-over, and choose structurally sweeter, more stable lots for batch.
      </p>
      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Variable</th>
              <th className='p-3 text-left font-bold'>Pour-Over (single cup)</th>
              <th className='p-3 text-left font-bold'>Batch Brew (volume)</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Brew ratio</td>
              <td className='p-3'>1:16 to 1:17 (about 60 g/L)</td>
              <td className='p-3'>1:15 to 1:17 (55 to 65 g/L)</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Water temperature</td>
              <td className='p-3'>94 to 96 &deg;C</td>
              <td className='p-3'>93 to 95 &deg;C</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Target extraction yield</td>
              <td className='p-3'>20 to 22%</td>
              <td className='p-3'>19 to 21%</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Target strength (TDS)</td>
              <td className='p-3'>1.35 to 1.45%</td>
              <td className='p-3'>1.30 to 1.40%</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Holding window before quality drops</td>
              <td className='p-3'>Serve immediately</td>
              <td className='p-3'>30 to 45 min washed; under 30 min naturals</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Best Ethiopian fit</td>
              <td className='p-3'>Delicate washed G1; fruit-forward naturals as features</td>
              <td className='p-3'>Clean, sweet washed G1/G2; stable across the pot</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className='my-4'>
        Two operational habits protect batch quality regardless of the lot: brew to a thermal server rather than a glass carafe on a hot plate, and discard or re-brew after the holding window rather than serving a flat pot. The holding window is shorter than most bars assume, which is the single most common reason a well-sourced Ethiopian lot underwhelms guests.
      </p>

      {/* SECTION 3 */}
      <h3 id='origins' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineMapPin className='w-8 h-8 text-amber-600' />
        3. Best Ethiopian Origins by Filter Role
      </h3>
      <p className='my-4'>
        Origin and process together decide whether a lot belongs on the pour-over bar as a feature or in the batch brewer as a daily workhorse. The table assigns each major region the filter role it fills best.
      </p>
      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Origin &amp; Process</th>
              <th className='p-3 text-left font-bold'>Filter Character</th>
              <th className='p-3 text-left font-bold'>Best Role</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'><Link href='/insights/yirgacheffe-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Yirgacheffe</Link> washed</td>
              <td className='p-3'>Jasmine, bergamot, lemon, tea-like body</td>
              <td className='p-3'>Pour-over flagship</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'><Link href='/insights/yirgacheffe-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Yirgacheffe</Link> natural (Aricha, Idido)</td>
              <td className='p-3'>Blueberry, strawberry, sweet and aromatic</td>
              <td className='p-3'>Rotating fruit-forward feature</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'><Link href='/insights/sidamo-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Sidamo / Sidama</Link> washed</td>
              <td className='p-3'>Lemon, peach, floral, balanced and clean</td>
              <td className='p-3'>Batch-brew workhorse and pour-over</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'><Link href='/insights/guji-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Guji</Link> natural</td>
              <td className='p-3'>Ripe berry, wine, syrupy sweetness</td>
              <td className='p-3'>Premium single-origin filter feature</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'><Link href='/insights/limu-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Limu</Link> washed</td>
              <td className='p-3'>Gentle acidity, soft sweetness, approachable</td>
              <td className='p-3'>Crowd-pleasing batch for broad audiences</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'><Link href='/insights/jimma-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Jimma</Link> natural</td>
              <td className='p-3'>Heavier body, cocoa, earthy sweetness</td>
              <td className='p-3'>Commercial batch and filter blends</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className='my-4'>
        A washed Sidamo is the most flexible single purchase for a café that wants one lot to cover both the batch brewer and the pour-over bar. It carries enough clarity to feature by the cup and enough structural sweetness to survive a batch holding window. For a head-to-head on the three regions most often shortlisted for filter, see <Link href='/insights/yirgacheffe-vs-sidamo-vs-guji-comparison' className='text-amber-700 hover:underline'>Yirgacheffe vs Sidamo vs Guji</Link>.
      </p>

      {/* SECTION 4 */}
      <h3 id='grade-process' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineClipboardDocumentList className='w-8 h-8 text-amber-600' />
        4. Grade and Process Selection for Filter
      </h3>
      <p className='my-4'>
        Because filter exposes defects, grade discipline matters more here than in any blended format. A single ferment or phenolic bean that a milk drink would mask is plainly tasted in a clear cup. Grade 1 washed lots, with the lowest defect counts, are the safe default for any coffee you intend to feature by the cup. Grade 2 washed lots are well suited to batch programs where a touch more body and a lower price help the per-cup math, provided the cup is clean.
      </p>
      <p className='my-4'>
        Process selection follows the brew job. Washed lots give the transparency and acidity that define the specialty filter category, and they hold up better through a batch holding window. Naturals bring concentrated fruit that delights guests as a rotating feature but fades faster after brewing and is less forgiving of a long hold. For the full defect-and-grade framework behind these choices, see the <Link href='/coffee-grading-ethiopia' className='text-amber-700 hover:underline'>Ethiopian coffee grading system</Link> and the broader <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='text-amber-700 hover:underline'>washed vs natural processing</Link> guide.
      </p>
      <div className='bg-blue-50 border border-blue-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3'>Buyer scenario: a four-site specialty café group</h4>
        <p className='text-sm text-gray-700'>
          A group running four bars, each with two batch brewers and a pour-over station, typically anchors the daily batch on a washed Sidamo G2 booked by the pallet, then rotates a G1 washed Yirgacheffe and a Guji natural through the pour-over menu in six to eight week blocks. The G2 batch coffee controls cost on the high-volume drinks; the G1 features carry the brand story and the higher price point. Booking the batch anchor early in the season locks the backbone of the program before the best washed lots sell out.
        </p>
      </div>

      {/* SECTION 5 */}
      <h3 id='roast-extraction' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineFire className='w-8 h-8 text-amber-600' />
        5. Roast and Extraction Targets
      </h3>
      <p className='my-4'>
        Filter roasts for Ethiopian coffee run lighter than espresso roasts, because the goal is to preserve the aromatic high notes rather than build solubility and body for pressure extraction. The small screen size and high density of many Ethiopian lots, often screen 14 to 16, still demand care: too fast a roast leaves the centre underdeveloped and the cup grassy, while too long a development dulls the florals that justified the purchase.
      </p>
      <div className='bg-green-50 border border-green-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3'>Filter roast guidelines for Ethiopian lots</h4>
        <ul className='space-y-2 text-sm text-gray-700'>
          <li><strong>End colour:</strong> light to light-medium, roughly Agtron 62 to 70 whole bean, stopping before second crack.</li>
          <li><strong>Development time ratio:</strong> 16 to 20% for washed lots to protect acidity; 18 to 22% for naturals to settle ferment and integrate sweetness.</li>
          <li><strong>Charge temperature:</strong> moderate, with a steady declining rate of rise; avoid stalling, which mutes the cup.</li>
          <li><strong>Rest:</strong> washed Ethiopian filter lots show best from roughly 5 to 14 days off roast; naturals often need a few extra days to settle.</li>
          <li><strong>Batch vs feature:</strong> a slightly fuller filter roast suits batch coffees that must read clearly through a holding window; keep pour-over features lighter.</li>
        </ul>
      </div>
      <p className='my-4'>
        On the bar, dial extraction with a refractometer where possible and trust the target ranges in the brew table above. Ethiopian washed lots reward slightly higher extraction than many origins because their acidity stays pleasant deep into the 20 to 22% band, where other coffees turn drying. For complete profiles by region and roast level, see the <Link href='/insights/roasting-ethiopian-coffee-beans-guide' className='text-amber-700 hover:underline'>guide to roasting Ethiopian coffee</Link>, and for sensory calibration of incoming lots, the <Link href='/insights/how-to-cup-evaluate-ethiopian-coffee-samples' className='text-amber-700 hover:underline'>cupping and evaluation guide</Link>.
      </p>

      {/* SECTION 6 */}
      <h3 id='economics' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineCalculator className='w-8 h-8 text-amber-600' />
        6. Café Economics: Green Cost Per Filter Cup
      </h3>
      <p className='my-4'>
        Filter sells at a lower ticket than milk drinks, so green cost per cup decides whether a single-origin program survives contact with a busy bar. The math is simple once you account for roast loss. A 12 oz (about 350 ml) batch cup at 60 g/L uses roughly 21 g of roasted coffee. Ethiopian lots lose about 15 to 17% of their weight in roasting, so 21 g roasted comes from roughly 25 g of green. The table converts FOB green price into green cost per 12 oz cup at that dose.
      </p>
      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Green FOB price (USD/kg)</th>
              <th className='p-3 text-left font-bold'>Green cost per 12 oz cup (25 g green)</th>
              <th className='p-3 text-left font-bold'>Typical use</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>$4.50</td>
              <td className='p-3'>about $0.11</td>
              <td className='p-3'>G2 washed batch workhorse</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>$5.50</td>
              <td className='p-3'>about $0.14</td>
              <td className='p-3'>Clean G1/G2 washed, everyday filter</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>$6.50</td>
              <td className='p-3'>about $0.16</td>
              <td className='p-3'>G1 washed pour-over flagship</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>$7.50</td>
              <td className='p-3'>about $0.19</td>
              <td className='p-3'>G1 natural or micro-lot feature</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className='my-4'>
        Two adjustments make this realistic. Landed cost adds roughly 15 to 25% to the FOB figure once freight, duty, and finance are counted, so model your true green cost at destination rather than FOB; the <Link href='/insights/ethiopian-coffee-landed-cost-guide' className='text-amber-700 hover:underline'>landed cost guide</Link> breaks down each line. And batch brewing carries waste: pots discarded at the end of a holding window add 5 to 15% to effective cost, which is why holding discipline is a margin lever, not just a quality one. Even at the top of the range, green remains a small share of a filter cup&apos;s retail price, which is what lets a café feature a premium single-origin Ethiopian by the cup without breaking the menu. For current price ranges by origin and grade, see the <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='text-amber-700 hover:underline'>FOB pricing guide</Link>.
      </p>

      {/* SECTION 7 */}
      <h3 id='rotation' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineArrowPath className='w-8 h-8 text-amber-600' />
        7. Building a Single-Origin Rotation
      </h3>
      <p className='my-4'>
        A filter program is a calendar, not a one-time purchase. Ethiopian coffee ships from a single main harvest, so freshness and availability shift through the year. A rotation keeps the batch anchor stable while refreshing the pour-over feature, giving guests a reason to return without forcing the bar to chase scarce lots.
      </p>
      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Program block</th>
              <th className='p-3 text-left font-bold'>Batch anchor</th>
              <th className='p-3 text-left font-bold'>Pour-over feature</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>New-crop arrival</td>
              <td className='p-3'>Washed Sidamo G2</td>
              <td className='p-3'>Washed Yirgacheffe G1 (fresh, floral peak)</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Mid-season</td>
              <td className='p-3'>Washed Sidamo G2</td>
              <td className='p-3'>Guji natural G1 (fruit-forward)</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Late-season</td>
              <td className='p-3'>Washed Limu G2 (approachable, stable)</td>
              <td className='p-3'>Yirgacheffe natural (Aricha/Idido)</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Between crops</td>
              <td className='p-3'>Carry-forward GrainPro-stored washed lot</td>
              <td className='p-3'>Reserved micro-lot or competition feature</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className='my-4'>
        The rotation depends on buying ahead of need. Aligning bookings with the <Link href='/insights/ethiopian-coffee-harvest-calendar-buying-guide' className='text-amber-700 hover:underline'>Ethiopian coffee harvest calendar</Link> lets you reserve the freshest washed lots for the peak floral window and arrange carry-forward stock, held in hermetic packaging, to bridge the between-crop gap. Cafés running multi-site programs should also read the <Link href='/insights/ethiopian-coffee-horeca-cafe-chain-buyers-guide' className='text-amber-700 hover:underline'>HORECA and café-chain buyer&apos;s guide</Link> for volume planning across locations.
      </p>

      {/* SECTION 8 */}
      <h3 id='sampling' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineTruck className='w-8 h-8 text-amber-600' />
        8. Sampling and Booking Workflow
      </h3>
      <p className='my-4'>
        Filter lots should be approved on the brewer you actually use, not only on the cupping table. A coffee can score beautifully in a calibrated cupping and still fall short in a 12-liter batch held 40 minutes. Build that reality into your sample request.
      </p>
      <ul className='space-y-2 my-4 text-sm'>
        <li><strong>State the brew method:</strong> tell your exporter whether the lot is destined for pour-over feature, batch workhorse, or both, so lot selection matches the holding demands.</li>
        <li><strong>Request 200 to 500 g green samples</strong> per candidate lot, enough to sample roast and run a real batch test, not just a single pour-over.</li>
        <li><strong>Test the holding window:</strong> brew a batch, then taste at 0, 30, and 60 minutes to confirm the lot survives your service pattern.</li>
        <li><strong>Confirm grade and process</strong> against your filter role, and ask for cupping notes and defect counts with each sample.</li>
        <li><strong>Share annual volume</strong> so the exporter can reserve enough of a single lot to cover a full rotation block without a mid-block coffee change.</li>
      </ul>
      <div className='border-l-4 border-amber-500 pl-6 bg-gray-50 p-4 my-6'>
        <p className='text-sm text-gray-700'>
          <strong>From our sourcing team:</strong> for filter programs we put together sample sets that pair a stable washed batch candidate with one or two rotating feature lots, each with traceability data and a suggested filter roast window. <Link href='/contact-us' className='text-amber-700 hover:underline font-bold'>Contact us</Link> to start, and see the <Link href='/insights/minimum-order-quantities-ethiopian-coffee-moq' className='text-amber-700 hover:underline'>MOQ guide</Link> for sample and order minimums.
        </p>
      </div>

      {/* CTA BLOCK */}
      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Source Ethiopian Filter Lots Direct from Origin</h4>
        <p className='my-2'>
          Request a filter-focused sample set matched to your brewers: a clean washed batch anchor plus rotating pour-over features, with traceability from washing station to your roastery. Our team selects by brew method, grade, and volume.
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

      {/* FAQ */}
      <section id='faq' className='mb-12 bg-gray-50 rounded-xl p-8 border border-gray-200'>
        <h3 className='text-2xl font-bold mb-6 text-gray-900'>Frequently Asked Questions</h3>
        <div className='space-y-6'>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>What is the best Ethiopian coffee for batch brew?</h4>
            <p className='text-sm text-gray-600'>
              A clean washed Sidamo or Limu, Grade 1 or Grade 2, is the best batch-brew choice. Both hold their profile through a 30 to 45 minute holding window and forgive wider extraction swings, while still showing the citrus and floral clarity that defines Ethiopian filter. Reserve delicate Yirgacheffe and naturals for fresh pour-over.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Should I use washed or natural Ethiopian coffee for filter?</h4>
            <p className='text-sm text-gray-600'>
              Washed lots are the backbone of a filter program because they deliver clean acidity and aromatic clarity and hold up better after brewing. Naturals give concentrated berry and tropical fruit that works well as a rotating pour-over feature, but they fade faster on a batch warmer, so they suit made-to-order service rather than high-volume holding.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>How long can a batch of Ethiopian filter coffee hold before it tastes flat?</h4>
            <p className='text-sm text-gray-600'>
              Plan to serve washed Ethiopian batch coffee within 30 to 45 minutes and naturals within 30 minutes. Heat and time mute delicate florals and flatten acidity, which Ethiopian lots show quickly. Brewing to an insulated thermal server rather than a glass carafe on a hot plate, then re-brewing after the window, protects both quality and margin.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>What grade should I buy for a single-origin filter menu?</h4>
            <p className='text-sm text-gray-600'>
              Use Grade 1 washed lots for coffees you feature by the cup, since filter exposes every defect that a milk drink would hide. Grade 2 washed lots work well for daily batch brew where a slightly fuller body and lower price help per-cup economics, as long as the cup is clean. Avoid lower commercial grades for clarity-driven filter.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>What brew ratio works best for Ethiopian filter coffee?</h4>
            <p className='text-sm text-gray-600'>
              Start at 1:16 to 1:17 (about 60 g/L) with water at 94 to 96 &deg;C for pour-over, and 55 to 65 g/L at 93 to 95 &deg;C for batch. Ethiopian washed lots take higher extraction comfortably, so target 20 to 22% yield; the acidity stays pleasant where other origins would turn drying. Adjust grind to land in that band.
            </p>
          </div>
        </div>
      </section>

      {/* RELATED ARTICLES */}
      <div className='my-10 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4'>Related Articles</h3>
        <div className='grid md:grid-cols-2 gap-4'>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Format Sourcing Guides</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/ethiopian-coffee-espresso-blend-sourcing-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee for Espresso Blends</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-for-drip-bags-sourcing-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee for Drip Bags</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-cold-brew-rtd-sourcing-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee for Cold Brew &amp; RTD</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-for-capsules-pods-sourcing-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee for Capsules &amp; Pods</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Origins &amp; Processing</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/yirgacheffe-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Yirgacheffe Coffee: Buyer&apos;s Sourcing Guide</Link></li>
              <li>&bull; <Link href='/insights/sidamo-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Sidamo Coffee: Buyer&apos;s Sourcing Guide</Link></li>
              <li>&bull; <Link href='/insights/yirgacheffe-vs-sidamo-vs-guji-comparison' className='text-amber-700 hover:underline'>Yirgacheffe vs Sidamo vs Guji</Link></li>
              <li>&bull; <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='text-amber-700 hover:underline'>Washed vs Natural Ethiopian Coffee</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Roasting &amp; Quality</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/roasting-ethiopian-coffee-beans-guide' className='text-amber-700 hover:underline'>How to Roast Ethiopian Coffee Beans</Link></li>
              <li>&bull; <Link href='/insights/how-to-cup-evaluate-ethiopian-coffee-samples' className='text-amber-700 hover:underline'>Cup and Evaluate Ethiopian Coffee Samples</Link></li>
              <li>&bull; <Link href='/coffee-grading-ethiopia' className='text-amber-700 hover:underline'>Ethiopian Coffee Grading System</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Buying &amp; Programs</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/ethiopian-coffee-horeca-cafe-chain-buyers-guide' className='text-amber-700 hover:underline'>HORECA &amp; Café-Chain Buyer&apos;s Guide</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-harvest-calendar-buying-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Harvest Calendar</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee FOB Pricing Guide</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* FOOTER */}
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
