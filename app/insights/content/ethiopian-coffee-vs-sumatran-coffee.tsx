import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import {
  HiOutlineLightBulb,
  HiOutlineClipboardDocumentList,
  HiOutlineGlobeAlt,
  HiOutlineQuestionMarkCircle,
  HiOutlineChartBar,
  HiOutlineBeaker,
  HiOutlineScale,
  HiOutlineCurrencyDollar,
  HiOutlineCube,
  HiOutlineShoppingCart,
  HiOutlineLink
} from 'react-icons/hi2'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function EthiopianCoffeeVsSumatranCoffee({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        Two opposite poles of the Arabica flavor spectrum compared for importers and roasters: wet-hulling versus washed processing, cup character, grading, traceability, and how each fits a green buying program.
      </h2>

      <figure>
        <figcaption className='font-inconsolata my-2'>
          Bright, floral washed Ethiopian lots and earthy, full-bodied wet-hulled Sumatran lots sit at the two extremes of what Arabica can taste like.
        </figcaption>
        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Ethiopian coffee vs Sumatran coffee comparison showing bluish-green wet-hulled Sumatra beans beside washed Ethiopian green coffee'
            fill
            objectFit='cover'
            className='w-full h-full'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>
      </figure>

      <div className='my-4 text-sm bg-amber-50 p-4 rounded-lg border border-amber-200'>
        <span className='font-semibold'>Category:</span>
        <span className='ml-2'>Origin Comparison / Sourcing Strategy / Green Coffee Buying / Importer Resources</span>
      </div>

      {/* KEY TAKEAWAY */}
      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-8 border border-amber-200'>
        <h3 className='font-bold text-xl mb-3 flex items-center gap-2'>
          <HiOutlineLightBulb className='text-amber-400 flex-shrink-0' />Key Takeaway
        </h3>
        <p className='text-sm leading-relaxed'>
          Ethiopian coffee vs Sumatran coffee is a comparison of contrasts, not rankings. Ethiopian washed and natural lots deliver high-toned florals, citrus, and berry from heirloom genetics at 1,500 to 2,200 m. Sumatran coffee, wet-hulled through the Giling Basah method, delivers heavy body, low acidity, and earthy, herbal, cedar-and-spice notes that no other origin replicates. They are not interchangeable. Buyers chasing brightness and clarity source Ethiopia; buyers building dark-roast espresso, foundation body, or a savory single origin source Sumatra. Many roasters carry both because each does a job the other cannot.
        </p>
      </div>

      {/* TABLE OF CONTENTS */}
      <div className='my-8 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <HiOutlineClipboardDocumentList className='text-amber-600' />
          In This Guide
        </h3>
        <ol className='space-y-2 text-sm'>
          <li><a href='#quick-comparison' className='text-amber-700 hover:underline'>1. Quick Comparison Table</a></li>
          <li><a href='#processing-divide' className='text-amber-700 hover:underline'>2. The Processing Divide: Giling Basah vs Washed</a></li>
          <li><a href='#flavor' className='text-amber-700 hover:underline'>3. Flavor at Opposite Poles</a></li>
          <li><a href='#bean-appearance' className='text-amber-700 hover:underline'>4. Bean Appearance, Defects, and the Triple-Pick</a></li>
          <li><a href='#origins' className='text-amber-700 hover:underline'>5. Origins, Altitude, and Varieties</a></li>
          <li><a href='#supply-chain' className='text-amber-700 hover:underline'>6. Supply Chain, Traceability, and EUDR</a></li>
          <li><a href='#production' className='text-amber-700 hover:underline'>7. Production and Export Data</a></li>
          <li><a href='#pricing' className='text-amber-700 hover:underline'>8. Pricing and Landed Cost</a></li>
          <li><a href='#which-origin' className='text-amber-700 hover:underline'>9. Which Origin for Which Program?</a></li>
          <li><a href='#faq' className='text-amber-700 hover:underline'>10. Frequently Asked Questions</a></li>
        </ol>
      </div>

      {/* INTRODUCTION */}
      <p className='my-4 text-lg leading-relaxed'>
        <span className='font-bold'>Ethiopian coffee vs Sumatran coffee</span> is the comparison buyers reach for when they want to understand the full width of the Arabica flavor spectrum. Put a washed Yirgacheffe next to a wet-hulled Sumatra Mandheling and you are tasting two coffees that share a species and almost nothing else. One is high, floral, and citric. The other is low, earthy, and syrupy. For a green coffee buyer, the practical question is not which origin is superior but which one solves the problem in front of you, whether that is a single-origin filter that sparkles or a dark-roast base with weight that survives milk and a long roast.
      </p>

      <p className='my-4'>
        This guide is written for importers, roasters, and product developers, not home brewers. It focuses on the trade-level differences that change how you contract, sample, and blend: the processing methods that drive the flavor gap, the grading vocabularies, the very different supply chains and traceability realities behind each origin, and where each coffee earns its place in a buying program. Ethiopia is the birthplace of Arabica; for the genetic and historical background, see our <Link href='/insights/guide-ethiopian-coffee-origins' className='underline font-bold'>guide to Ethiopian coffee origins</Link>.
      </p>

      {/* SECTION 1: QUICK COMPARISON TABLE */}
      <h2 id='quick-comparison' className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineScale className='text-amber-600' />
        Quick Comparison Table
      </h2>

      <div className='overflow-x-auto my-6'>
        <table className='w-full text-sm border-collapse'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Attribute</th>
              <th className='p-3 text-left font-bold'>Ethiopia</th>
              <th className='p-3 text-left font-bold'>Sumatra (Indonesia)</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Species (specialty trade)</td>
              <td className='p-3'>100% Arabica</td>
              <td className='p-3'>Arabica (north); Robusta dominates total volume</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Signature processing</td>
              <td className='p-3'>Washed and natural (sun-dried)</td>
              <td className='p-3'>Giling Basah (wet-hulled at high moisture)</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Altitude</td>
              <td className='p-3'>1,500 to 2,200 m</td>
              <td className='p-3'>1,100 to 1,600 m</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Primary flavor character</td>
              <td className='p-3'>Floral, citrus, berry, stone fruit, tea-like</td>
              <td className='p-3'>Earthy, herbal, cedar, tobacco, dark chocolate, spice</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Acidity</td>
              <td className='p-3'>High, bright (malic, citric)</td>
              <td className='p-3'>Low, muted</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Body</td>
              <td className='p-3'>Light to medium, silky or syrupy</td>
              <td className='p-3'>Heavy, viscous, full</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Bean appearance</td>
              <td className='p-3'>Uniform, blue-green to green</td>
              <td className='p-3'>Bluish-green, irregular, open or cracked center</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Grading vocabulary</td>
              <td className='p-3'>Grade 1 to Grade 5 (defect count plus cup)</td>
              <td className='p-3'>Grade 1 by defect count; TP, DP (triple/double picked)</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Arabica production (2024/25)</td>
              <td className='p-3'>~7.6 to 8.4 million 60-kg bags</td>
              <td className='p-3'>~1.4 million arabica bags (of ~10.9M total)</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Main arabica harvest</td>
              <td className='p-3'>October to February (single)</td>
              <td className='p-3'>September to December (plus a smaller April to May pick)</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Export gateway</td>
              <td className='p-3'>Djibouti (landlocked origin)</td>
              <td className='p-3'>Belawan (Medan), Sumatra</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='p-3 font-semibold'>Typical specialty FOB (indicative)</td>
              <td className='p-3'>$3.50 to $7.00+ per lb</td>
              <td className='p-3'>$2.80 to $4.50+ per lb</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className='my-4 text-xs text-gray-500'>
        Production figures: USDA Foreign Agricultural Service and ICO estimates for the 2024/25 crop year. FOB ranges are indicative and move with the C-market and season; request a live offer for current numbers.
      </p>

      {/* SECTION 2: PROCESSING DIVIDE */}
      <h2 id='processing-divide' className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineBeaker className='text-amber-600' />
        The Processing Divide: Giling Basah vs Washed
      </h2>

      <p className='my-4'>
        Processing is the single biggest reason these two origins taste so different, so this guide leads with it rather than treating it as a footnote. Genetics and altitude matter, but the post-harvest method is what stamps the cup.
      </p>

      <h3 className='text-xl font-bold mt-6'>Sumatra: Giling Basah (Wet-Hulling)</h3>

      <p className='my-4'>
        Giling Basah, which translates roughly as &quot;wet grinding,&quot; is unique to Indonesia and most associated with Sumatra. Farmers pulp the cherry, ferment briefly, then dry the parchment only partway before the parchment is hulled off at roughly 30 to 50 percent moisture. Compare that to almost everywhere else, where parchment is removed near 11 to 12 percent moisture. The still-soft, swollen bean is then dried a second time to export moisture. Wet-hulling most likely emerged in Aceh in the late 1970s as a way to move coffee to market fast in a humid climate where slow, single-stage drying invited mold.
      </p>

      <p className='my-4'>
        The consequence is a coffee with enormous body, very low acidity, and the savory, earthy, cedar-and-herb character the trade calls &quot;rustic&quot; or simply &quot;Sumatran.&quot; The same humid, interrupted drying that builds that profile also makes lots harder to keep clean and consistent, which is why hand-sorting matters so much downstream. A growing slice of northern Sumatra now also produces washed and natural lots aimed at the modern specialty market, but wet-hulled coffee remains the regional signature and the reason buyers seek out the origin.
      </p>

      <h3 className='text-xl font-bold mt-6'>Ethiopia: Washed and Natural</h3>

      <p className='my-4'>
        Ethiopia splits between natural (dry) and fully washed processing, with washing stations and drying tables rather than wet-hulling. Washed lots are pulped, fermented, washed, and slowly dried on raised beds to produce clean, transparent cups where floral and citrus notes lead. Naturals dry as whole cherry on the same beds, building the heavy berry and tropical fruit profiles Ethiopia is famous for. Critically, Ethiopian parchment is dried fully and milled dry, the opposite of Giling Basah, which is why Ethiopian beans arrive uniform and bright rather than swollen and savory. For the mechanics and trade implications, see our <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='underline font-bold'>washed vs natural processing guide</Link>.
      </p>

      <div className='bg-blue-50 border border-blue-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3'>The roaster takeaway</h4>
        <p className='text-sm text-gray-700'>
          Wet-hulling front-loads body and mutes acidity before the coffee ever reaches your roaster, which is why Sumatra holds up to dark roasts and milk drinks. Ethiopian washing preserves acidity and aromatics, which is why those lots reward light to medium roasts and filter brewing. You cannot roast a Sumatra into a Yirgacheffe or vice versa; the processing already decided the ceiling.
        </p>
      </div>

      {/* SECTION 3: FLAVOR */}
      <h2 id='flavor' className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineBeaker className='text-amber-600' />
        Flavor at Opposite Poles
      </h2>

      <p className='my-4'>
        If most origin comparisons are about degree, this one is about direction. Ethiopian and Sumatran coffees do not sit close together on a flavor wheel; they sit across from each other.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full text-sm border-collapse'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Attribute</th>
              <th className='p-3 text-left font-bold'>Ethiopian Coffee</th>
              <th className='p-3 text-left font-bold'>Sumatran Coffee</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Dominant flavor</td>
              <td className='p-3'>Jasmine, bergamot, lemon, blueberry, peach</td>
              <td className='p-3'>Cedar, forest floor, tobacco, dark chocolate, baking spice</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Acidity</td>
              <td className='p-3'>High, sparkling, citric and malic</td>
              <td className='p-3'>Low, soft, sometimes almost absent</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Body</td>
              <td className='p-3'>Light to medium, silky</td>
              <td className='p-3'>Heavy, syrupy, mouth-coating</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Aftertaste</td>
              <td className='p-3'>Lingering floral and citrus, tea-like</td>
              <td className='p-3'>Savory, herbal, dark and lingering</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Roast affinity</td>
              <td className='p-3'>Light to medium</td>
              <td className='p-3'>Medium-dark to dark</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='p-3 font-semibold'>Typical cup scores (specialty)</td>
              <td className='p-3'>85 to 92+</td>
              <td className='p-3'>82 to 87 (top lots higher)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        Ethiopian coffees win on aromatic intensity and complexity; a washed Yirgacheffe or natural Guji can read like a different beverage from one lot to the next. Sumatran coffees win on weight and savory depth; their low acidity and full body make them unmistakable and forgiving in the cup, even if they rarely reach the high cup scores of competition Ethiopian lots. Neither set of notes is &quot;better,&quot; but they serve very different palates and products. Lot-to-lot variation runs high in both origins, which is why <Link href='/insights/how-to-cup-evaluate-ethiopian-coffee-samples' className='underline font-bold'>disciplined sample cupping</Link> matters before you commit either way.
      </p>

      {/* SECTION 4: BEAN APPEARANCE */}
      <h2 id='bean-appearance' className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineCube className='text-amber-600' />
        Bean Appearance, Defects, and the Triple-Pick
      </h2>

      <p className='my-4'>
        A green buyer can often tell these two origins apart by eye, and the difference is rooted in processing again. This is one place where a Sumatra lot will fail a standard appearance grading that an Ethiopian lot would pass, without the Sumatra being any worse for its intended use.
      </p>

      <h3 className='text-xl font-bold mt-6'>Why Sumatra Looks the Way It Does</h3>

      <p className='my-4'>
        Because Giling Basah hulls the bean while it is still swollen and soft, Sumatran green coffee tends to be a deep bluish-green with irregular, often open or &quot;cracked&quot; center cuts and bent shapes. The color and shape that would read as a defect in a washed Central American or Ethiopian lot are normal, even expected, in wet-hulled Sumatra. New buyers sometimes reject perfectly good Sumatra lots on appearance alone because they are grading against the wrong reference.
      </p>

      <h3 className='text-xl font-bold mt-6'>Two Grading Vocabularies</h3>

      <p className='my-4'>
        Indonesia grades primarily by counting defects in a 300-gram sample. Grade 1 is the top export grade. On top of the grade, exporters add a picking designation: <span className='font-bold'>TP (triple picked)</span> means the lot was hand-sorted three separate times, and <span className='font-bold'>DP (double picked)</span> twice. A &quot;Sumatra Mandheling G1 TP&quot; spec signals both a low official defect count and extra hand-sorting for uniformity, with importer-tightened TP lots often running under five defects per sample. Hand-sorting carries more weight in Sumatra precisely because wet-hulling produces more odd-looking and imperfect beans to remove.
      </p>

      <p className='my-4'>
        Ethiopia grades on a combination of physical defect count and cup quality, from Grade 1 down to Grade 5, assigned at certified liquoring units and tied to region and process (for example &quot;Sidamo G1 Washed&quot;). The systems are not interchangeable: a Sumatran Grade 1 and an Ethiopian Grade 1 describe different things, and a contract should always spell out defect count, screen, and cup expectations rather than leaning on the grade label alone. For the defect logic behind both, see our <Link href='/insights/green-coffee-quality-control-defects-grading' className='underline font-bold'>green coffee quality and grading guide</Link>.
      </p>

      {/* SECTION 5: ORIGINS */}
      <h2 id='origins' className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineGlobeAlt className='text-amber-600' />
        Origins, Altitude, and Varieties
      </h2>

      <h3 className='text-xl font-bold mt-6'>Sumatra&apos;s Arabica Belt</h3>

      <p className='my-4'>
        Indonesia&apos;s specialty Arabica is concentrated in northern Sumatra. The two anchor regions are the <span className='font-bold'>Gayo Highlands</span> in Aceh (around Takengon and Lake Tawar) and the highlands of <span className='font-bold'>North Sumatra</span> near Lake Toba, home to the Lintong, Mandheling, and Sidikalang names. Altitudes generally sit between 1,100 and 1,600 m, lower than Ethiopia&apos;s top zones, which is one reason Sumatran acidity is naturally softer. Common varieties include Tim Tim (a Timor hybrid), Ateng, Bourbon, Catimor, and the heirloom-tinged Jember and Onan Ganjang selections. Production is overwhelmingly smallholder, sold through village collectors to wet mills.
      </p>

      <h3 className='text-xl font-bold mt-6'>Ethiopia&apos;s Coffee Geography</h3>

      <p className='my-4'>
        Ethiopian Arabica grows across a constellation of regions, each with its own profile: <Link href='/insights/yirgacheffe-coffee-sourcing-guide' className='underline font-bold'>Yirgacheffe</Link> (floral, citrus, tea-like), <Link href='/insights/sidamo-coffee-sourcing-guide' className='underline font-bold'>Sidamo</Link> (berry, stone fruit), <Link href='/insights/guji-coffee-sourcing-guide' className='underline font-bold'>Guji</Link> (tropical fruit, jasmine), <Link href='/insights/harar-coffee-sourcing-guide' className='underline font-bold'>Harar</Link> (blueberry, wine), and <Link href='/insights/limu-coffee-sourcing-guide' className='underline font-bold'>Limu</Link> (balanced, spiced). Rather than a handful of named cultivars, Ethiopia draws on thousands of local landraces, the genetic library described in our <Link href='/insights/ethiopian-heirloom-coffee-varieties-landraces' className='underline font-bold'>heirloom varieties guide</Link>. That diversity, paired with altitudes up to 2,200 m, is the engine behind Ethiopian complexity and the reason its profiles span a far wider range than Sumatra&apos;s.
      </p>

      {/* SECTION 6: SUPPLY CHAIN */}
      <h2 id='supply-chain' className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineLink className='text-amber-600' />
        Supply Chain, Traceability, and EUDR
      </h2>

      <p className='my-4'>
        The route from tree to container looks very different in each origin, and that difference shapes traceability, consistency, and how ready each origin is for the EU Deforestation Regulation (EUDR).
      </p>

      <div className='grid md:grid-cols-2 gap-4 my-6'>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Sumatra: collectors and wet mills</h4>
          <p className='text-sm text-gray-700'>
            Smallholders sell cherry or wet parchment to village collectors (pengumpul), who aggregate and pass it to wet mills and exporters. Lots are typically pooled by region and grade rather than by single farm, so a &quot;Mandheling G1&quot; is usually a regional blend. Single-farm or single-village traceability exists but is the exception and commands a premium.
          </p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Ethiopia: washing stations and direct lots</h4>
          <p className='text-sm text-gray-700'>
            Coffee moves through washing stations and the exchange or vertically integrated supply channels. Reforms have widened access to washing-station and farmer-group level traceability, so single-station and even single-day lots are increasingly available. See our <Link href='/insights/ethiopian-coffee-traceability-guide' className='underline font-bold'>traceability guide</Link>.
          </p>
        </div>
      </div>

      <p className='my-4'>
        Both origins face the same EUDR clock: from its application date, coffee placed on the EU market must carry geolocation data proving it was not grown on land deforested after December 2020. Both Ethiopia and Indonesia are smallholder-dominated origins where mapping millions of tiny plots is the core challenge, but their supply structures differ. Indonesia&apos;s long collector chains can blur the link between a bag and a specific plot, while Ethiopia&apos;s washing-station model gives a natural aggregation point for capturing polygon data. For buyers, the practical message is to confirm EUDR readiness lot by lot from either origin rather than assuming it. Our <Link href='/insights/eu-deforestation-regulation-ethiopian-coffee-compliance' className='underline font-bold'>EUDR compliance guide</Link> covers the documentation in detail.
      </p>

      {/* SECTION 7: PRODUCTION */}
      <h2 id='production' className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineChartBar className='text-amber-600' />
        Production and Export Data
      </h2>

      <p className='my-4'>
        The headline numbers hide a key point: Indonesia is a large coffee producer, but most of that volume is Robusta. On the specialty Arabica that competes with Ethiopia, the two origins are far closer in scale.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full text-sm border-collapse'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Metric</th>
              <th className='p-3 text-left font-bold'>Ethiopia</th>
              <th className='p-3 text-left font-bold'>Indonesia / Sumatra</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Total production (2024/25)</td>
              <td className='p-3'>~8 million 60-kg bags (all Arabica)</td>
              <td className='p-3'>~10.9 million bags (mostly Robusta)</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Arabica share</td>
              <td className='p-3'>100%</td>
              <td className='p-3'>~1.4 million bags (~13%)</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Sumatra&apos;s role</td>
              <td className='p-3'>n/a</td>
              <td className='p-3'>~75% of national output; north = arabica belt</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Green export volume (2024/25)</td>
              <td className='p-3'>~4 million bags</td>
              <td className='p-3'>~6 million bags (all types)</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Domestic consumption</td>
              <td className='p-3'>~50% of production (very high)</td>
              <td className='p-3'>Large and rising domestic market</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='p-3 font-semibold'>Structure</td>
              <td className='p-3'>4+ million smallholders</td>
              <td className='p-3'>Smallholder, village-collector aggregation</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        For an importer, the takeaway is supply depth. Ethiopia offers a deep, single-species Arabica pool but exports only about half of what it grows because domestic demand is so high. Sumatra offers a smaller, specialized Arabica pool with a distinctive profile; when you contract Sumatra Arabica you are buying from a relatively thin slice of a large, Robusta-heavy crop, which makes fresh-crop timing and reliable exporters more important, not less.
      </p>

      {/* SECTION 8: PRICING */}
      <h2 id='pricing' className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineCurrencyDollar className='text-amber-600' />
        Pricing and Landed Cost
      </h2>

      <p className='my-4'>
        Both origins price off the ICE Arabica futures market, but they behave differently around it. Sumatran Arabica typically trades at a more modest differential and a lower entry point than top Ethiopian specialty, while Ethiopia&apos;s ceiling runs much higher for competition and micro-lot quality.
      </p>

      <ul className='list-disc pl-6 space-y-2 my-4'>
        <li><span className='font-bold'>Sumatra Arabica (indicative FOB):</span> roughly $2.80 to $4.50 per lb for Grade 1 TP from Gayo or Mandheling, with certified organic, geographical-indication, and washed micro-lots higher.</li>
        <li><span className='font-bold'>Ethiopian specialty (indicative FOB):</span> roughly $3.50 to $7.00+ per lb depending on region, grade, and process, with competition-grade lots above $8.00. See our <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='underline font-bold'>Ethiopian FOB pricing guide</Link>.</li>
      </ul>

      <p className='my-4'>
        Landed cost diverges on logistics as much as bean price. Ethiopia is landlocked and ships through Djibouti, adding inland trucking before the ocean leg. Sumatra ships from Belawan near Medan, an ocean port, but sits far from Atlantic markets, so transit to Europe and the US East Coast is long. Both are multi-week ocean journeys, so build realistic lead times and freshness planning into either program. Work the full delivered number, not just FOB, using our <Link href='/insights/ethiopian-coffee-landed-cost-guide' className='underline font-bold'>landed cost guide</Link>, and remember that green coffee quality drifts in transit and storage, covered in our <Link href='/insights/green-coffee-shelf-life-storage-guide' className='underline font-bold'>shelf life and storage guide</Link>.
      </p>

      {/* SECTION 9: WHICH ORIGIN */}
      <h2 id='which-origin' className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineShoppingCart className='text-amber-600' />
        Which Origin for Which Program?
      </h2>

      <p className='my-4'>
        Because these coffees do opposite jobs, the right answer is usually defined by the product you are building. Three buyer scenarios make the choice concrete.
      </p>

      <h3 className='text-xl font-bold mt-6'>The dark-roast and espresso house</h3>
      <p className='my-4'>
        A roaster whose flagship is a dark, chocolatey espresso or a classic diner-style drip leans Sumatra. The heavy body and low acidity survive a dark roast and stand up in milk without turning thin or sour. Sumatra is also a proven foundation in heavy blends, adding weight and a savory base note that Central Americans cannot. Ethiopia would fight that roast level; its aromatics burn off and its brightness is the wrong tool for the job.
      </p>

      <h3 className='text-xl font-bold mt-6'>The light-roast filter bar</h3>
      <p className='my-4'>
        A modern roaster selling single-origin filter and pour-over leans Ethiopia. Washed Yirgacheffe and natural Guji deliver the clarity, florals, and fruit that define a light-roast menu and justify premium retail pricing. Sumatra rarely fits this format; its low acidity and earthy register read as flat and muddy at light roast. This buyer might still carry one Sumatra as a deliberate contrast or a winter offering.
      </p>

      <h3 className='text-xl font-bold mt-6'>The blender building depth</h3>
      <p className='my-4'>
        A roaster engineering a signature blend can use both as opposite levers. Sumatra contributes body and a grounding, savory base; Ethiopia contributes top-note lift, aroma, and acidity. A blend can run a Sumatra-forward base with a small Ethiopian natural for fragrance, or the reverse for a brighter cup with weight underneath. For building Ethiopian components into espresso, see our <Link href='/insights/ethiopian-coffee-espresso-blend-sourcing-guide' className='underline font-bold'>Ethiopian espresso blend guide</Link>, and to dial roast levels, our <Link href='/insights/roasting-ethiopian-coffee-beans-guide' className='underline font-bold'>guide to roasting Ethiopian coffee</Link>.
      </p>

      <div className='border-l-4 border-amber-500 pl-6 bg-gray-50 p-4 my-6'>
        <p className='text-sm text-gray-700'>
          <span className='font-bold'>Rule of thumb:</span> in the end, Ethiopian coffee vs Sumatran coffee comes down to the brief. If it contains the words bright, floral, clean, or single-origin filter, start with Ethiopia. If it contains dark, heavy, chocolatey, espresso base, or savory, start with Sumatra. When it contains both, you are looking at a two-origin program, not a single pick.
        </p>
      </div>

      {/* FAQ */}
      <h2 id='faq' className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineQuestionMarkCircle className='text-amber-600' />
        Frequently Asked Questions
      </h2>

      <section className='my-6 space-y-6'>
        <div>
          <h4 className='font-bold text-gray-800 mb-2'>Why does Sumatran coffee taste earthy and Ethiopian coffee taste fruity?</h4>
          <p className='text-sm text-gray-600'>The gap is mostly processing. Sumatra&apos;s Giling Basah wet-hulling, which strips parchment at high moisture, builds heavy body, low acidity, and earthy, herbal notes. Ethiopian washed and natural lots are dried fully on beds, preserving bright acidity and floral, fruit-forward aromatics. Genetics and altitude widen the gap further.</p>
        </div>
        <div>
          <h4 className='font-bold text-gray-800 mb-2'>Why do Sumatran beans look misshapen and bluish-green?</h4>
          <p className='text-sm text-gray-600'>Wet-hulling removes the parchment while the bean is still swollen and soft at 30 to 50 percent moisture, leaving irregular shapes, open center cuts, and a deep bluish-green color. These traits are normal for the process, not defects. Buyers grading Sumatra against washed-coffee appearance standards often reject good lots by mistake.</p>
        </div>
        <div>
          <h4 className='font-bold text-gray-800 mb-2'>What does G1 TP mean on a Sumatra offer?</h4>
          <p className='text-sm text-gray-600'>G1 is Grade 1, the top Indonesian export grade based on a low defect count in a 300-gram sample. TP means triple picked, hand-sorted three separate times for uniformity; DP means double picked. Triple-picked Grade 1 lots from quality exporters often run under five defects per sample.</p>
        </div>
        <div>
          <h4 className='font-bold text-gray-800 mb-2'>Can Sumatran and Ethiopian coffee be blended together?</h4>
          <p className='text-sm text-gray-600'>Yes, and they pair as opposites. Sumatra supplies body and a savory base; Ethiopia adds aroma, florals, and acidity on top. A common approach is a Sumatra-forward base with a small Ethiopian natural for lift. Match roast levels carefully, since Sumatra takes a darker roast than most Ethiopian lots.</p>
        </div>
        <div>
          <h4 className='font-bold text-gray-800 mb-2'>Is Sumatra coffee Arabica or Robusta?</h4>
          <p className='text-sm text-gray-600'>Both. Indonesia&apos;s total crop is mostly Robusta, grown largely in southern Sumatra and elsewhere. The specialty Sumatra coffee buyers compare to Ethiopia is Arabica from the northern highlands, Gayo in Aceh and the Lake Toba area in North Sumatra. Always confirm species and region on the contract.</p>
        </div>
        <div>
          <h4 className='font-bold text-gray-800 mb-2'>Which origin is easier to source consistently?</h4>
          <p className='text-sm text-gray-600'>Each has friction. Ethiopia has a single annual harvest and very high domestic consumption, tightening exportable supply. Sumatra Arabica is a thin slice of a Robusta-heavy crop moving through long collector chains. For both, fresh-crop timing and a reliable exporter matter more than the origin label alone.</p>
        </div>
      </section>

      {/* CTA */}
      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Source Traceable Ethiopian Coffee Direct from Origin</h4>
        <p className='my-2'>
          <span className='font-bold'>Ethio Coffee Import and Export PLC</span> is an origin-connected Ethiopian coffee exporter supplying washed and natural lots from Yirgacheffe, Sidamo, Guji, Harar, and Limu. Whether Ethiopia anchors your filter bar or balances a Sumatra-based blend, we provide pre-shipment samples, cup scores, full lot documentation, and competitive FOB Djibouti pricing.
        </p>
        <div className='flex flex-wrap gap-4 mt-4'>
          <Link href='/offerings' className='bg-dark text-primary px-6 py-3 rounded font-bold hover:bg-gray-800 transition'>View Our Offerings</Link>
          <Link href='/contact-us' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>Request Samples</Link>
          <Link href='/ordering-info' className='border-2 border-dark px-6 py-3 rounded font-bold hover:bg-dark hover:text-primary transition'>How to Order</Link>
        </div>
      </div>

      {/* RELATED ARTICLES */}
      <div className='my-10 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4'>Related Articles</h3>
        <div className='grid md:grid-cols-2 gap-4'>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Origin Comparisons</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/ethiopian-coffee-vs-colombian-coffee' className='text-amber-700 hover:underline'>Ethiopian Coffee vs Colombian Coffee</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-vs-kenyan-coffee' className='text-amber-700 hover:underline'>Ethiopian Coffee vs Kenyan Coffee</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-vs-brazilian-coffee' className='text-amber-700 hover:underline'>Ethiopian Coffee vs Brazilian Coffee</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-vs-yemeni-coffee' className='text-amber-700 hover:underline'>Ethiopian Coffee vs Yemeni Coffee</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Processing &amp; Quality</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='text-amber-700 hover:underline'>Washed vs Natural Ethiopian Coffee</Link></li>
              <li>&bull; <Link href='/insights/green-coffee-quality-control-defects-grading' className='text-amber-700 hover:underline'>Green Coffee Quality: Defects &amp; Grading</Link></li>
              <li>&bull; <Link href='/insights/how-to-cup-evaluate-ethiopian-coffee-samples' className='text-amber-700 hover:underline'>How to Cup and Evaluate Ethiopian Samples</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Roasting &amp; Blending</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/ethiopian-coffee-espresso-blend-sourcing-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee for Espresso Blends</Link></li>
              <li>&bull; <Link href='/insights/roasting-ethiopian-coffee-beans-guide' className='text-amber-700 hover:underline'>Roasting Ethiopian Coffee Beans</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Sourcing &amp; Trade</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='text-amber-700 hover:underline'>How to Source Green Coffee from Ethiopia</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Pricing for Importers</Link></li>
              <li>&bull; <Link href='/insights/eu-deforestation-regulation-ethiopian-coffee-compliance' className='text-amber-700 hover:underline'>EUDR Compliance for Ethiopian Coffee</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> Published by Ethio Coffee Import and Export PLC, an origin-connected Ethiopian coffee exporter with three decades of sourcing relationships across Yirgacheffe, Sidamo, Guji, Harar, Limu, and Jimma. This comparison draws on USDA Foreign Agricultural Service and International Coffee Organization (ICO) data, published Indonesian grading practice, and our direct experience as Ethiopian green coffee exporters. Production estimates and prices move; contact us for current offers.
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
