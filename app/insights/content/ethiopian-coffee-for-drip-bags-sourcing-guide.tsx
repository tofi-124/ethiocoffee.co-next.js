import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import {
  HiOutlineLightBulb,
  HiOutlineClipboardDocumentList,
  HiOutlineSparkles,
  HiOutlineFunnel,
  HiOutlineArrowsRightLeft,
  HiOutlineGlobeAsiaAustralia,
  HiOutlineMapPin,
  HiOutlineScale,
  HiOutlineNoSymbol,
  HiOutlineFire,
  HiOutlineUserGroup,
  HiOutlineArrowPath,
  HiOutlineQuestionMarkCircle,
} from 'react-icons/hi2'

type InsightContentProps = { title: string; date: string; large_image_url: string }

export default function EthiopianCoffeeForDripBagsSourcingGuide({
  title,
  date,
  large_image_url,
}: InsightContentProps) {
  return (
    <>
      {/* H1 + H2 */}
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        Ethiopian Coffee for Drip Bags: Sourcing Guide
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        How to source Ethiopian green coffee for single-serve drip bags: which washed and natural origins, grind, dose, and oxygen control make the hanging-ear format work.
      </h2>

      {/* Hero image */}
      <figure>
        <figcaption className='font-inconsolata my-2'>{title}</figcaption>
        <div className='w-full aspect-[5/3] overflow-hidden rounded-md bg-gray-200 flex items-center justify-center'>
          {/* TODO: Replace placeholder with actual hero image */}
          {/* Expected path: /images/insights/ethiopian-coffee-for-drip-bags-sourcing-guide.webp */}
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Ethiopian coffee for drip bags: a single-serve hanging-ear sachet brewing a pour-over cup'
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
        <span className='ml-2'>Drip Bags / Sourcing Guide / Green Coffee Buying / Manufacturer Resources</span>
      </div>

      {/* Key Takeaway box */}
      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-8 border border-amber-200'>
        <h3 className='font-bold text-xl mb-3 flex items-center gap-2'>
          <HiOutlineLightBulb className='text-amber-400 flex-shrink-0' />Key Takeaway
        </h3>
        <p className='text-sm leading-relaxed'>
          Sourcing Ethiopian coffee for drip bags is the opposite problem from sourcing for capsules. A drip bag is an unpressurized gravity pour-over, so there is no crema to chase and no short-shot to flatten the cup. That makes Ethiopia&apos;s aromatic, high-acidity washed lots a strength rather than a liability: a clean washed Yirgacheffe or Sidamo that reads thin in a capsule presents as the floral, tea-like signature the hanging-ear category sells on. The work moves to three places instead. Protect aromatics with current-crop green and sub-1% residual oxygen at fill, specify a medium to medium-coarse grind and a tight screen size so a single 8 to 12 gram bag drains without clogging or running fast, and roast lighter than you would for any pressurized format so the origin character survives in the cup the consumer actually pours.
        </p>
      </div>

      {/* Table of Contents */}
      <div className='my-8 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <HiOutlineClipboardDocumentList className='text-amber-600' /> In This Guide
        </h3>
        <ol className='space-y-2 text-sm'>
          <li><a href='#why-ethiopia-wins' className='text-amber-700 hover:underline'>1. Why Drip Bags Reward Ethiopian Coffee</a></li>
          <li><a href='#format' className='text-amber-700 hover:underline'>2. The Drip Bag, Mechanically</a></li>
          <li><a href='#format-comparison' className='text-amber-700 hover:underline'>3. Drip Bag vs Capsule vs Instant: Where It Fits</a></li>
          <li><a href='#market' className='text-amber-700 hover:underline'>4. The Hanging-Ear Market and Where Ethiopia Sells</a></li>
          <li><a href='#origins' className='text-amber-700 hover:underline'>5. Best Ethiopian Origins for Drip Bags</a></li>
          <li><a href='#grind-dose' className='text-amber-700 hover:underline'>6. Grind, Dose, and the Single-Bag Brew Ratio</a></li>
          <li><a href='#freshness' className='text-amber-700 hover:underline'>7. Oxygen Is the Enemy: Aroma Retention at the Fill Line</a></li>
          <li><a href='#roast' className='text-amber-700 hover:underline'>8. Roast Strategy: Lighter Than You Think</a></li>
          <li><a href='#buyer-scenario' className='text-amber-700 hover:underline'>9. Buyer Scenario: A Private-Label Hanging-Ear Line</a></li>
          <li><a href='#workflow' className='text-amber-700 hover:underline'>10. Sourcing Workflow and Volume Planning</a></li>
          <li><a href='#faq' className='text-amber-700 hover:underline'>11. Frequently Asked Questions</a></li>
        </ol>
      </div>

      {/* Introduction */}
      <p className='text-lg leading-relaxed my-4'>
        Sourcing <span className='font-bold'>Ethiopian coffee for drip bags</span> is one of the few packaged-format briefs where the origin&apos;s reputation works entirely in your favor. A hanging-ear drip bag is a small paper filter with fold-out arms that rests on a cup while the drinker pours hot water through 8 to 12 grams of ground coffee. There is no pump, no pressure, and no machine deciding the extraction. The result is a clean, filter-style cup, which means the floral aromatics and bright acidity that make Ethiopian washed coffee famous are exactly what the format is built to showcase.
      </p>
      <p className='my-4'>
        That single mechanical fact reverses much of the sourcing logic that applies to pressurized single-serve. In the companion <Link href='/insights/ethiopian-coffee-for-capsules-pods-sourcing-guide' className='text-amber-700 hover:underline'>capsules and pods sourcing guide</Link>, the constant problem is that a delicate washed Yirgacheffe reads thin and crema-poor under pressure, so the buyer leans on body and natural processing. In a drip bag, that same Yirgacheffe is the product. This guide covers the sourcing side specifically for the drip-bag format: which Ethiopian origins and processes suit it, how grind and dose change for a gravity brew, and why oxygen control at the fill line matters more than almost anything else you specify.
      </p>

      {/* Section 1 */}
      <h3 id='why-ethiopia-wins' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineSparkles className='w-8 h-8 text-amber-600' />
        1. Why Drip Bags Reward Ethiopian Coffee
      </h3>
      <p className='my-4'>
        Most packaged formats ask Ethiopian coffee to do something it is not naturally built for. Espresso blends want body and crema. Capsules want a profile that survives a pressurized short shot. Instant and soluble want extraction yield and a forgiving cup at low solubles. The drip bag asks for the one thing Ethiopian highland coffee delivers best: a transparent, aromatic filter cup.
      </p>
      <div className='grid md:grid-cols-3 gap-4 my-6'>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Aromatics Are the Product</h4>
          <p className='text-sm text-gray-700'>The hanging-ear category is sold on smell and clarity, not strength. Jasmine, bergamot, citrus, and stone fruit are the selling points, and a clean gravity brew carries them straight to the cup with no pressure or roast development burying them.</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Filter Forgives Body</h4>
          <p className='text-sm text-gray-700'>Lighter body is a defect in a capsule and a feature in a drip bag. The format expects a tea-like, articulate cup, so the washed highland lots that struggle elsewhere become the obvious first choice here.</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Single-Origin Story Sells</h4>
          <p className='text-sm text-gray-700'>Drip bags are a premium-at-home product, and consumers buy them to taste a specific origin. A traceable Yirgacheffe or Guji on the sachet is a stronger claim in this format than in any other single-serve category.</p>
        </div>
      </div>
      <p className='my-4'>
        The practical conclusion is that buyers should not water down an Ethiopian drip-bag program with heavy commodity bases the way they might for a crema-driven capsule. The format rewards keeping the origin character front and center. For the underlying flavor logic by process, see <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='text-amber-700 hover:underline'>washed vs natural Ethiopian processing</Link>.
      </p>

      {/* Section 2 */}
      <h3 id='format' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineFunnel className='w-8 h-8 text-amber-600' />
        2. The Drip Bag, Mechanically
      </h3>
      <p className='my-4'>
        A drip bag is a flat filter sachet, typically around 70mm by 90mm internally, with cardboard or paper arms that hook over the rim of a cup. The drinker tears the top, hangs the bag, and pours hot water in two or three additions. Water saturates the bed, blooms, and drains by gravity through the filter walls into the cup below. The brew is a hybrid: a short immersion as the bed fills, then a percolation as it drains. It behaves far more like a manual pour-over than like any pump-driven system.
      </p>
      <p className='my-4'>
        Because nothing forces water through the bed, three variables the manufacturer controls decide whether the cup is good: the grind, the dose, and the freshness of the coffee at the moment of filling. Get the grind too fine and the bed clogs, the water backs up over the filter arms, and the cup over-extracts and turns bitter. Get it too coarse and the water sheets through in seconds, leaving a weak, sour cup. Unlike a barista or a capsule machine, the consumer pouring at a kitchen counter cannot correct any of this. The lot has to be right before it is sealed.
      </p>
      <div className='bg-blue-50 border border-blue-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3'>The brew you are actually designing</h4>
        <p className='text-sm text-gray-700'>
          A standard hanging-ear bag holds 8 to 12 grams and is brewed with roughly 120 to 180ml of water, a ratio in the region of 1:15. That is a deliberately light filter cup, not a concentrate. Design the green selection, grind, and roast around that target rather than around an espresso-strength reference, or the product will taste nothing like the sample you approved.
        </p>
      </div>

      {/* Section 3 */}
      <h3 id='format-comparison' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineArrowsRightLeft className='w-8 h-8 text-amber-600' />
        3. Drip Bag vs Capsule vs Instant: Where It Fits
      </h3>
      <p className='my-4'>
        Buyers often run more than one single-serve line, and the formats are easy to conflate. They are not interchangeable, and the green coffee that suits one can be a poor fit for another. The table below sets the drip bag against the two formats it is most often confused with.
      </p>
      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Factor</th>
              <th className='p-3 text-left font-bold'>Drip Bag (hanging-ear)</th>
              <th className='p-3 text-left font-bold'>Capsule / Pod</th>
              <th className='p-3 text-left font-bold'>Instant / Soluble</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Brew mechanism</td>
              <td className='p-3'>Gravity pour-over, no pressure</td>
              <td className='p-3'>High-pressure short shot</td>
              <td className='p-3'>Factory extraction, then dried</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Cup style</td>
              <td className='p-3'>Clean, light-bodied filter</td>
              <td className='p-3'>Concentrated, crema-topped</td>
              <td className='p-3'>Reconstituted, body varies</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>What it rewards</td>
              <td className='p-3'>Aromatics, acidity, clarity</td>
              <td className='p-3'>Body, crema, consistency</td>
              <td className='p-3'>Extraction yield, value</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Ideal Ethiopian lot</td>
              <td className='p-3'>Washed Yirgacheffe, Sidamo; fruit-forward natural Guji</td>
              <td className='p-3'>Jimma or Limu base, natural Guji highlight</td>
              <td className='p-3'>Dependable commercial grades</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Grind</td>
              <td className='p-3'>Medium to medium-coarse</td>
              <td className='p-3'>Fine, machine-matched</td>
              <td className='p-3'>Set by the extraction plant</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Roast level</td>
              <td className='p-3'>Light to medium</td>
              <td className='p-3'>Medium to medium-dark</td>
              <td className='p-3'>Medium, yield-driven</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className='my-4'>
        Read across the &quot;ideal Ethiopian lot&quot; row and the strategy becomes clear: the drip bag is the only one of the three formats where a delicate washed highland coffee is the hero rather than a supporting note. For the other two, see the <Link href='/insights/ethiopian-coffee-for-instant-soluble-sourcing-guide' className='text-amber-700 hover:underline'>instant and soluble guide</Link> and the <Link href='/insights/ethiopian-coffee-cold-brew-rtd-sourcing-guide' className='text-amber-700 hover:underline'>cold brew and RTD guide</Link>; the <Link href='/insights/ethiopian-coffee-espresso-blend-sourcing-guide' className='text-amber-700 hover:underline'>espresso blend guide</Link> covers blend architecture for the pressurized side.
      </p>

      {/* Section 4 */}
      <h3 id='market' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineGlobeAsiaAustralia className='w-8 h-8 text-amber-600' />
        4. The Hanging-Ear Market and Where Ethiopia Sells
      </h3>
      <p className='my-4'>
        Drip bags are not a niche. Industry estimates put the global drip-bag coffee market in the region of 2.8 billion US dollars in 2025, growing at roughly 6 to 10% per year depending on the research firm, with the single-serve hanging-ear subsegment holding the majority share of that volume. Treat the exact figure as directional rather than audited; what matters for a sourcing plan is the trajectory and the geography.
      </p>
      <p className='my-4'>
        The geography is where Ethiopia&apos;s advantage concentrates. The format was popularized in East Asia, and the deepest premium demand still sits there. South Korea, Japan, and increasingly China and Vietnam treat single-origin hanging-ear bags as an everyday premium product, and Ethiopian washed lots are a recognized hero origin in those markets. For buyers building toward those destinations, the destination-specific logistics matter as much as the green: see <Link href='/insights/importing-ethiopian-coffee-to-south-korea' className='text-amber-700 hover:underline'>importing Ethiopian coffee to South Korea</Link> and <Link href='/insights/importing-ethiopian-coffee-to-japan' className='text-amber-700 hover:underline'>importing Ethiopian coffee to Japan</Link>.
      </p>
      <div className='border-l-4 border-amber-500 pl-6 bg-gray-50 p-4 my-6'>
        <p className='text-sm text-gray-700'>
          <span className='font-semibold'>Market intelligence:</span> the strategic read for an origin-connected exporter is that the drip-bag premium is paid for identifiable origin character, not for strength or crema. A commodity blend in a hanging-ear bag competes only on price. A traceable single-region Ethiopian washed lot, named on the sachet, is exactly the product the fast-growing premium tier of this category is built to sell. For global production and trade context, see the <a href='https://ico.org/' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>International Coffee Organization</a>.
        </p>
      </div>

      {/* Section 5 */}
      <h3 id='origins' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineMapPin className='w-8 h-8 text-amber-600' />
        5. Best Ethiopian Origins for Drip Bags
      </h3>
      <p className='my-4'>
        Origin selection for drip bags is about which aromatic signature you want the consumer to meet in a clean cup. Washed highland lots lead, with naturals offering a fruit-forward alternative line. The table is a sourcing reference, not a rule; season and lot still decide the cup.
      </p>
      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Origin</th>
              <th className='p-3 text-left font-bold'>Best Process for Drip Bags</th>
              <th className='p-3 text-left font-bold'>What the Cup Delivers</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'><Link href='/ethiopian-coffee-yirgacheffe' className='text-amber-700 hover:underline'>Yirgacheffe</Link></td>
              <td className='p-3'>Washed</td>
              <td className='p-3'>Jasmine, bergamot, lemon-lime; the flagship floral drip-bag profile</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'><Link href='/ethiopian-coffee-sidamo' className='text-amber-700 hover:underline'>Sidamo</Link></td>
              <td className='p-3'>Washed or natural</td>
              <td className='p-3'>Washed gives clean citrus and florals; natural adds berry and stone fruit for a sweeter line</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'><Link href='/ethiopian-coffee-guji' className='text-amber-700 hover:underline'>Guji</Link></td>
              <td className='p-3'>Natural</td>
              <td className='p-3'>Red fruit, floral intensity, syrupy sweetness; the premium fruit-forward single-origin bag</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'><Link href='/ethiopian-coffee-limu' className='text-amber-700 hover:underline'>Limu</Link></td>
              <td className='p-3'>Washed</td>
              <td className='p-3'>Balanced, rounded, gently winey; a softer, more approachable drip-bag option</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'><Link href='/ethiopian-coffee-jimma' className='text-amber-700 hover:underline'>Jimma</Link></td>
              <td className='p-3'>Washed or natural</td>
              <td className='p-3'>Fuller body, chocolate depth; an everyday or comfort-profile bag for less acid-forward markets</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'><Link href='/ethiopian-coffee-harar' className='text-amber-700 hover:underline'>Harar</Link></td>
              <td className='p-3'>Natural</td>
              <td className='p-3'>Blueberry and winey fruit; a distinctive niche bag, though broad screen spread needs tighter prep</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className='my-4'>
        A useful product-line logic is to run two tiers. A washed Yirgacheffe or Sidamo carries the floral, acidity-forward flagship that defines the category, while a natural Guji or Sidamo gives a sweeter, fruit-driven line for drinkers who find bright acidity sharp. Jimma covers a comfort-roast or value position for markets that prefer a fuller, less acidic cup. Most buyers do not need a non-Ethiopian base in a drip bag the way they might in a capsule, because there is no crema gap to fill.
      </p>

      {/* Section 6 */}
      <h3 id='grind-dose' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineScale className='w-8 h-8 text-amber-600' />
        6. Grind, Dose, and the Single-Bag Brew Ratio
      </h3>
      <p className='my-4'>
        The drip bag lives and dies on flow rate. The filter walls and the small bed mean the grind window is narrower than a manual pour-over, where the drinker can adjust the pour. Two green-side specifications carry most of the risk.
      </p>
      <p className='my-4'>
        First, screen-size uniformity. Mixed bean sizes grind unevenly, and uneven grind produces both fines that clog the filter and boulders that under-extract. Specify a tight screen distribution on drip-bag lots even if you accept wider tolerances on other programs; the <Link href='/insights/ethiopian-coffee-screen-size-guide' className='text-amber-700 hover:underline'>screen size guide</Link> explains how to write the tolerance into a contract. Many Ethiopian washed lots run smaller than Latin American buyers expect, which is fine here as long as the distribution is tight and consistent shipment to shipment.
      </p>
      <p className='my-4'>
        Second, grade selection for a clean cup. A drip bag hides nothing: there is no crema, no high pressure, and no dilution to mask a defect, so a single phenolic or fermenty bean is tasted directly. Premium single-origin drip bags justify Grade 1 or Grade 2 lots; an everyday Jimma comfort line can sit at Grade 3 to Grade 4 if the cup is clean. For how Ethiopian grades map to use and price, see the <Link href='/coffee-grading-ethiopia' className='text-amber-700 hover:underline'>Ethiopian coffee grading system</Link> reference.
      </p>
      <div className='bg-green-50 border border-green-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3'>Original buyer insight: dial the grind to the bag, not the bean</h4>
        <p className='text-sm text-gray-700'>
          Many co-packers will run a Total Dissolved Solids test on a 500g roasted sample to recommend a filter porosity and grind setting matched to your specific lot. Use that service. A medium to medium-coarse grind is the usual starting point, but the right setting depends on the lot&apos;s density and the filter paper, and a 0.5mm shift in median particle size is the difference between a 90-second drain and a clogged bag. Lock the grind, dose, and filter porosity together as one approved specification, then hold the green consistent so that specification keeps working.
        </p>
      </div>

      {/* Section 7 */}
      <h3 id='freshness' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineNoSymbol className='w-8 h-8 text-amber-600' />
        7. Oxygen Is the Enemy: Aroma Retention at the Fill Line
      </h3>
      <p className='my-4'>
        Here is the format&apos;s quiet failure point. A drip bag is sold on aroma, and aroma is the first thing ground coffee loses. Once roasted coffee is ground, its volatile aromatic compounds begin dissipating within minutes and its oils start oxidizing. A sachet on a shelf for six to twelve months keeps only as much aroma as was sealed in on the day it was filled. The whole reason a buyer chose an aromatic Ethiopian lot can evaporate before the consumer ever opens the bag.
      </p>
      <p className='my-4'>
        The defense is oxygen control, and it has both a sourcing side and a packaging side.
      </p>
      <div className='grid md:grid-cols-2 gap-4 my-6'>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Sourcing side</h4>
          <p className='text-sm text-gray-700'>Buy current-crop, well-stored green and run it while it is fresh. A drip bag amplifies any staleness already present before roasting, because the format has no body or crema to hide behind. Confirm crop year and storage; the <Link href='/insights/green-coffee-shelf-life-storage-guide' className='text-amber-700 hover:underline'>green coffee shelf life and storage guide</Link> covers how long lots hold their aromatics and under what conditions.</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Packaging side</h4>
          <p className='text-sm text-gray-700'>Specify nitrogen-flushed, individually sealed sachets that bring residual oxygen below roughly 1%. Nitrogen flushing displaces the air that drives lipid oxidation and aroma loss, and individual over-wrapping protects each bag until the moment of use. This is a co-packer specification, so confirm it before committing volume.</p>
        </div>
      </div>
      <p className='my-4'>
        The roast-to-fill timing also matters. Ground coffee filled too soon after roasting can off-gas carbon dioxide inside a sealed sachet; filled too late, it locks in staleness for the whole shelf life. Coordinate the rest window with your co-packer so the bag is filled fresh but stable.
      </p>

      {/* Section 8 */}
      <h3 id='roast' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineFire className='w-8 h-8 text-amber-600' />
        8. Roast Strategy: Lighter Than You Think
      </h3>
      <p className='my-4'>
        The single most common mistake in Ethiopian drip-bag development is roasting for an espresso reference. Because the cup is a clean gravity filter, a medium-dark roast that would build crema and round acidity in a capsule instead flattens the florals and muddies the cup that the drip bag exists to show off. The format wants a light to medium roast that preserves aromatic complexity and lets the acidity read as sweetness rather than sourness.
      </p>
      <p className='my-4'>
        The practical targets shift by line. A flagship washed Yirgacheffe or Sidamo should sit light to light-medium, developed enough to avoid grassy or underbaked notes but well short of second crack. A fruit-forward natural Guji can take a touch more development to round the sweetness without losing the fruit. A Jimma comfort line for less acid-forward markets is the only case that justifies a medium roast for body and familiarity. For development targets by origin and process, see the <Link href='/insights/roasting-ethiopian-coffee-beans-guide' className='text-amber-700 hover:underline'>Ethiopian roasting guide</Link>.
      </p>

      {/* Section 9 */}
      <h3 id='buyer-scenario' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineUserGroup className='w-8 h-8 text-amber-600' />
        9. Buyer Scenario: A Private-Label Hanging-Ear Line
      </h3>
      <p className='my-4'>
        Consider a South Korean private-label brand launching a single-origin Ethiopian drip-bag range for a convenience-retail chain. The brief is a recognizable Ethiopian identity, individually nitrogen-flushed sachets with a twelve-month shelf life, and consistent supply at roughly one container per quarter across two profiles: a floral flagship and a sweeter fruit line.
      </p>
      <p className='my-4'>
        A sound sourcing plan looks like this. Choose a washed Yirgacheffe Grade 1 or 2 for the flagship, because the format showcases its jasmine-and-citrus aromatics with nothing to get in the way, and a natural Guji Grade 2 for the fruit line. Specify a tight screen size on both so the fill line grinds to a uniform medium-coarse and every bag drains in a similar window. Contract the two lots forward across the crop year so the cup holds steady shipment to shipment rather than drifting with spot buys. Set the roast light to light-medium to protect the florals, lock the grind and filter porosity against an approved TDS test, and confirm sub-1% residual oxygen and individual over-wrapping with the co-packer. The deliverable is a bag that smells and tastes like Yirgacheffe in month one and month eleven, which is the entire promise of a premium drip-bag line. If the same brand later wants a value tier, a clean Jimma at a lower grade and a slightly fuller roast covers it without diluting the premium range.
      </p>

      {/* Section 10 */}
      <h3 id='workflow' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineArrowPath className='w-8 h-8 text-amber-600' />
        10. Sourcing Workflow and Volume Planning
      </h3>
      <ol className='list-decimal pl-6 my-4 space-y-3'>
        <li><span className='font-bold'>Fix the cup target first.</span> Decide whether each line is a floral washed flagship, a fruit-forward natural, or a comfort roast. The whole green selection follows from that, not the other way around.</li>
        <li><span className='font-bold'>Sample as a drip bag, not as a cupping bowl.</span> Evaluate roasted samples brewed at the real 8 to 12 gram dose through an actual sachet, not only on a cupping table. A lot that scores well at the bench can drain badly or read differently in the bag.</li>
        <li><span className='font-bold'>Specify screen size and grade for clarity.</span> Tight screen distribution and a clean grade protect both flow rate and the defect-free cup the format exposes. Use the <Link href='/insights/ethiopian-coffee-screen-size-guide' className='text-amber-700 hover:underline'>screen size guide</Link> to write the tolerance.</li>
        <li><span className='font-bold'>Lock freshness and packaging.</span> Confirm current-crop green, a roast-to-fill window, nitrogen flushing to sub-1% oxygen, and individual sachet wrapping before you commit volume.</li>
        <li><span className='font-bold'>Contract consistency, then volume.</span> Drip-bag lines run continuously, so forward-contract across the crop year for a stable profile. For order sizing and container math, see the <Link href='/insights/minimum-order-quantities-ethiopian-coffee-moq' className='text-amber-700 hover:underline'>minimum order quantities guide</Link>, and model full landed cost from the <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='text-amber-700 hover:underline'>FOB pricing guide</Link>.</li>
      </ol>
      <p className='my-4'>
        Buyers pairing a drip-bag range with cafe or hospitality supply will also find the <Link href='/insights/ethiopian-coffee-horeca-cafe-chain-buyers-guide' className='text-amber-700 hover:underline'>HoReCa and cafe-chain buyer&apos;s guide</Link> useful, and those adding a caffeine-free option should review the <Link href='/insights/decaf-green-coffee-processing-sourcing-guide' className='text-amber-700 hover:underline'>decaf processing and sourcing guide</Link>, since a water-process decaf Ethiopian lot keeps origin character in a clean filter cup.
      </p>

      {/* FAQ */}
      <h3 id='faq' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineQuestionMarkCircle className='w-8 h-8 text-amber-600' />
        11. Frequently Asked Questions
      </h3>
      <section className='my-6 space-y-6'>
        <div>
          <h4 className='font-bold text-gray-800 mb-2'>Which Ethiopian coffee is best for drip bags?</h4>
          <p className='text-sm text-gray-600'>A washed Yirgacheffe or Sidamo is the natural first choice, because the unpressurized filter brew showcases their floral, citrus aromatics. For a sweeter, fruit-forward line, a natural Guji or Sidamo works well. A washed Limu or a Jimma covers softer or fuller-bodied positions for markets that prefer less bright acidity.</p>
        </div>
        <div>
          <h4 className='font-bold text-gray-800 mb-2'>Should drip-bag coffee be washed or natural?</h4>
          <p className='text-sm text-gray-600'>Either works, and that is the format&apos;s advantage over capsules. Washed lots deliver the clean, floral, tea-like flagship the category is known for, while naturals add berry and stone-fruit sweetness for a second line. Because there is no pressure to flatten subtlety, delicate washed profiles survive a drip bag far better than a capsule.</p>
        </div>
        <div>
          <h4 className='font-bold text-gray-800 mb-2'>What grind size is used in a drip bag?</h4>
          <p className='text-sm text-gray-600'>A medium to medium-coarse grind is the usual starting point, because the small filter bed clogs if the grind is too fine and runs through too fast if it is too coarse. The exact setting depends on lot density and filter porosity, so most co-packers run a TDS test on a roasted sample to dial the grind to your specific coffee.</p>
        </div>
        <div>
          <h4 className='font-bold text-gray-800 mb-2'>Why does freshness and packaging matter so much for drip bags?</h4>
          <p className='text-sm text-gray-600'>Drip bags are sold on aroma, and ground coffee loses aromatics and oxidizes quickly. A sachet can sit on a shelf for up to a year, so the cup tastes only as fresh as the coffee was when filled. Current-crop green, a controlled roast-to-fill window, and nitrogen flushing to below 1% residual oxygen protect that aroma to the consumer.</p>
        </div>
        <div>
          <h4 className='font-bold text-gray-800 mb-2'>How much coffee is in a single drip bag?</h4>
          <p className='text-sm text-gray-600'>A standard hanging-ear bag holds 8 to 12 grams of ground coffee, brewed with roughly 120 to 180ml of water for about a 1:15 ratio. That makes a deliberately light, clean filter cup, so the green selection, grind, and roast should be designed around that target rather than an espresso-strength reference.</p>
        </div>
      </section>

      {/* CTA */}
      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Source Ethiopian Green Coffee for Your Drip-Bag Line</h4>
        <p className='my-2'>
          As an origin-connected Ethiopian coffee exporter, <span className='font-bold'>Ethio Coffee Import and Export PLC</span> supplies the floral washed Yirgacheffe and Sidamo lots and the fruit-forward natural Guji that single-serve drip-bag programs are built on, with the tight screen-size prep, clean grades, and consistent current-crop supply the format demands. We provide samples evaluated against the real format, grade and screen specifications, and forward-contracted volume across the crop year so your drip bag smells and tastes the same from first fill to last. Contact us to discuss origins, grades, and a supply plan for your hanging-ear program.
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
              <li>&bull; <Link href='/insights/ethiopian-coffee-for-instant-soluble-sourcing-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee for Instant &amp; Soluble</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-cold-brew-rtd-sourcing-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee for Cold Brew &amp; RTD</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-espresso-blend-sourcing-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee for Espresso Blends</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Quality &amp; Roasting</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='text-amber-700 hover:underline'>Washed vs Natural Ethiopian Coffee Processing</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-screen-size-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Screen Size Guide</Link></li>
              <li>&bull; <Link href='/insights/roasting-ethiopian-coffee-beans-guide' className='text-amber-700 hover:underline'>Roasting Ethiopian Coffee Beans Guide</Link></li>
              <li>&bull; <Link href='/insights/green-coffee-shelf-life-storage-guide' className='text-amber-700 hover:underline'>Green Coffee Shelf Life &amp; Storage Guide</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Origins for Drip Bags</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/yirgacheffe-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Yirgacheffe Coffee Sourcing Guide</Link></li>
              <li>&bull; <Link href='/insights/sidamo-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Sidamo Coffee Sourcing Guide</Link></li>
              <li>&bull; <Link href='/insights/guji-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Guji Coffee Sourcing Guide</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Buying &amp; Planning</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/minimum-order-quantities-ethiopian-coffee-moq' className='text-amber-700 hover:underline'>Minimum Order Quantities for Ethiopian Coffee</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee FOB Pricing Guide</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-horeca-cafe-chain-buyers-guide' className='text-amber-700 hover:underline'>HoReCa &amp; Cafe Chain Buyer&apos;s Guide</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> Published by Ethio Coffee Import and Export PLC, an origin-connected Ethiopian coffee exporter with three decades of sourcing relationships across Yirgacheffe, Sidamo, Guji, Harar, Limu, and Jimma. This guide draws on direct sourcing experience supplying green coffee for packaged-format programs, alongside International Coffee Organization market data and published drip-bag market research. Market figures are industry estimates; drip-bag and sachet specifications vary by co-packer, so confirm grind, filter porosity, and nitrogen-flush details with your manufacturer before finalizing a program.
        </p>
        <p className='text-sm text-gray-600 font-inconsolata mt-2'>
          <Link href='/insights' className='underline'>All Insights</Link> &middot; <Link href='/ethiopian-coffee-exporter' className='underline'>Our Export Services</Link> &middot; <Link href='/about' className='underline'>About Ethio Coffee</Link> &middot; <Link href='/contact-us' className='underline'>Contact</Link>
        </p>
      </div>
    </>
  )
}
