import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import {
  HiOutlineLightBulb,
  HiOutlineClipboardDocumentList,
  HiOutlineCube,
  HiOutlineChartBar,
  HiOutlineMapPin,
  HiOutlineSparkles,
  HiOutlineClock,
  HiOutlineScale,
  HiOutlineTag,
  HiOutlineShieldCheck,
  HiOutlineUserGroup,
  HiOutlineArrowPath,
  HiOutlineQuestionMarkCircle,
} from 'react-icons/hi2'

type InsightContentProps = { title: string; date: string; large_image_url: string }

export default function EthiopianCoffeeForCapsulesPodsSourcingGuide({
  title,
  date,
  large_image_url,
}: InsightContentProps) {
  return (
    <>
      {/* H1 + H2 */}
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        Ethiopian Coffee for Capsules &amp; Pods: Sourcing Guide
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        How to source Ethiopian green coffee for single-serve capsule and pod production: origins, processing, grades, crema, and the freshness discipline the format demands.
      </h2>

      {/* Hero image */}
      <figure>
        <figcaption className='font-inconsolata my-2'>{title}</figcaption>
        <div className='w-full aspect-[5/3] overflow-hidden rounded-md bg-gray-200 flex items-center justify-center'>
          {/* TODO: Replace placeholder with actual hero image */}
          {/* Expected path: /images/insights/ethiopian-coffee-for-capsules-pods-sourcing-guide.webp */}
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Ethiopian green coffee being filled into single-serve capsules and pods on a co-packing line'
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
        <span className='ml-2'>Capsules &amp; Pods / Sourcing Guide / Green Coffee Buying / Roaster Resources</span>
      </div>

      {/* Key Takeaway box */}
      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-8 border border-amber-200'>
        <h3 className='font-bold text-xl mb-3 flex items-center gap-2'>
          <HiOutlineLightBulb className='text-amber-400 flex-shrink-0' />Key Takeaway
        </h3>
        <p className='text-sm leading-relaxed'>
          Sourcing Ethiopian coffee for capsules and pods is a different problem from sourcing for bag or espresso-machine programs. The format fixes the dose (roughly 5 to 6 grams) and the extraction, rewards crema and body, and seals the coffee for months, so freshness and grind uniformity matter more than they do anywhere else. The strongest approach pairs a body-and-crema base from Jimma or Limu with a fragrant Yirgacheffe or Guji top note, or runs a single-origin natural Guji or Sidamo for a premium line. Specify uniform screen size for even extraction, lock in roast-date and degassing discipline before filling, and plan year-round supply consistency rather than chasing one-off lots.
        </p>
      </div>

      {/* Table of Contents */}
      <div className='my-8 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <HiOutlineClipboardDocumentList className='text-amber-600' /> In This Guide
        </h3>
        <ol className='space-y-2 text-sm'>
          <li><a href='#format' className='text-amber-700 hover:underline'>1. Why the Capsule Format Changes Sourcing</a></li>
          <li><a href='#market' className='text-amber-700 hover:underline'>2. The Single-Serve Market Opportunity</a></li>
          <li><a href='#origins' className='text-amber-700 hover:underline'>3. Best Ethiopian Origins for Capsules and Pods</a></li>
          <li><a href='#crema' className='text-amber-700 hover:underline'>4. Crema, Body, and the Short-Shot Problem</a></li>
          <li><a href='#freshness' className='text-amber-700 hover:underline'>5. Freshness and Degassing: The Capsule QC Challenge</a></li>
          <li><a href='#grade-prep' className='text-amber-700 hover:underline'>6. Grade and Prep for Even Capsule Extraction</a></li>
          <li><a href='#single-vs-blend' className='text-amber-700 hover:underline'>7. Single-Origin vs Blend Capsule Strategy</a></li>
          <li><a href='#decaf-organic' className='text-amber-700 hover:underline'>8. Decaf, Organic, and Compostable Demand</a></li>
          <li><a href='#buyer-scenario' className='text-amber-700 hover:underline'>9. Buyer Scenario: Launching a Private-Label Line</a></li>
          <li><a href='#workflow' className='text-amber-700 hover:underline'>10. Sourcing Workflow and Volume Planning</a></li>
          <li><a href='#faq' className='text-amber-700 hover:underline'>11. Frequently Asked Questions</a></li>
        </ol>
      </div>

      {/* Introduction */}
      <p className='text-lg leading-relaxed my-4'>
        Sourcing <span className='font-bold'>Ethiopian coffee for capsules</span> and pods looks simple from the outside and trips up buyers in practice. The capsule fixes almost everything the roaster usually controls: the dose is set by the cup size, the water temperature and pressure are set by the machine, and the coffee is sealed within minutes of roasting and may not be brewed for six months. That combination puts a premium on traits a bag program can be relaxed about, and it changes which Ethiopian lots actually perform.
      </p>
      <p className='my-4'>
        This guide covers the sourcing side specifically for single-serve formats: which Ethiopian origins, processing methods, and grades suit capsule and pod production, how to handle the crema and freshness demands the format imposes, and how to plan volume for a line that runs all year. For traditional machine-pulled espresso blends, the companion <Link href='/insights/ethiopian-coffee-espresso-blend-sourcing-guide' className='text-amber-700 hover:underline'>espresso blend sourcing guide</Link> covers blend architecture in depth, and the <Link href='/insights/ethiopian-coffee-cold-brew-rtd-sourcing-guide' className='text-amber-700 hover:underline'>cold brew and RTD guide</Link> covers the other major packaged-format opportunity.
      </p>

      {/* Section 1: Format */}
      <h3 id='format' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineCube className='w-8 h-8 text-amber-600' />
        1. Why the Capsule Format Changes Sourcing
      </h3>
      <p className='my-4'>
        A capsule holds a small, fixed charge of coffee, typically around 5 to 6 grams for an espresso-style aluminum or plastic capsule. The brewing machine then drives hot water through that charge under high pressure (the common OriginalLine-style systems run a pressurized short shot; centrifugal systems spin the capsule instead). The roaster cannot change the dose, the pressure, or the contact time. The only levers left are the green coffee itself, the roast, and the grind set at the fill line.
      </p>
      <p className='my-4'>
        Three consequences follow, and each one shapes sourcing:
      </p>
      <div className='grid md:grid-cols-3 gap-4 my-6'>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Small Mass, Big Exposure</h4>
          <p className='text-sm text-gray-700'>Five grams of ground coffee has an enormous surface-area-to-mass ratio and stales fast once ground. The capsule seal protects it, but only if the coffee was fresh and properly degassed before filling. Green coffee that arrives tired or poorly stored gives you no margin.</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Fixed Extraction</h4>
          <p className='text-sm text-gray-700'>You cannot dial in a capsule the way a barista dials in a grinder. The lot has to taste right at the machine&apos;s fixed parameters, which rewards consistency and predictable density over lot-to-lot drama.</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Crema Is Expected</h4>
          <p className='text-sm text-gray-700'>Single-serve consumers read crema as quality. A short pressurized shot needs coffee that produces a stable crema, which favors a degree of body and roast development that a light filter lot will not deliver on its own.</p>
        </div>
      </div>

      {/* Section 2: Market */}
      <h3 id='market' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineChartBar className='w-8 h-8 text-amber-600' />
        2. The Single-Serve Market Opportunity
      </h3>
      <p className='my-4'>
        Single-serve is one of the largest packaged-coffee formats in the world. Multiple market-research firms put the global pods and capsules market in the region of 33 billion US dollars in 2025, growing at roughly 6 to 7% per year. Within that, the specialty slice matters most to an Ethiopian sourcing strategy: single-origin and organic capsules are estimated at close to a fifth of capsule purchases, and the compostable segment is the fastest-growing part of the category as buyers trade up to sustainably positioned products. Treat these as industry estimates rather than audited figures; the direction of travel is what should inform your sourcing.
      </p>
      <p className='my-4'>
        The strategic read for an origin-connected exporter and its buyers is straightforward. The commodity capsule market is crowded and price-driven, but the premium single-origin and certified-sustainable capsule segments are exactly where Ethiopian coffee has a credible, hard-to-copy story. A fragrant Yirgacheffe or a fruit-forward natural Guji in a recyclable or compostable capsule is a product the volume players cannot easily match. For global production and trade context, see the <a href='https://www.ico.org/' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>International Coffee Organization</a>.
      </p>

      {/* Section 3: Origins */}
      <h3 id='origins' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineMapPin className='w-8 h-8 text-amber-600' />
        3. Best Ethiopian Origins for Capsules and Pods
      </h3>
      <p className='my-4'>
        The right origin depends on whether the lot is the backbone of the cup or the aromatic signature on top. Ethiopian regions split cleanly along that line.
      </p>
      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Origin</th>
              <th className='p-3 text-left font-bold'>Role in a Capsule</th>
              <th className='p-3 text-left font-bold'>What It Brings</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'><Link href='/ethiopian-coffee-jimma' className='text-amber-700 hover:underline'>Jimma</Link></td>
              <td className='p-3'>Base / body</td>
              <td className='p-3'>Full body, low acidity, chocolate and earthy depth; clean extraction that holds crema in a short shot</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'><Link href='/ethiopian-coffee-limu' className='text-amber-700 hover:underline'>Limu</Link></td>
              <td className='p-3'>Base / bridge</td>
              <td className='p-3'>Balanced washed sweetness, rounded body, gentle winey acidity; a cleaner base than Jimma</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'><Link href='/ethiopian-coffee-sidamo' className='text-amber-700 hover:underline'>Sidamo</Link></td>
              <td className='p-3'>Single-origin / body</td>
              <td className='p-3'>Natural lots add stone fruit and syrupy body; works as a standalone fruit-forward capsule</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'><Link href='/ethiopian-coffee-guji' className='text-amber-700 hover:underline'>Guji</Link></td>
              <td className='p-3'>Single-origin / highlight</td>
              <td className='p-3'>Natural Guji brings red fruit and floral intensity; a premium single-origin or a top note in a blend</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'><Link href='/ethiopian-coffee-yirgacheffe' className='text-amber-700 hover:underline'>Yirgacheffe</Link></td>
              <td className='p-3'>Highlight</td>
              <td className='p-3'>Jasmine, citrus, and bergamot aromatics; small inclusion lifts an otherwise flat capsule blend</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className='my-4'>
        Natural-processed lots earn their place in capsules because the format and the short shot can flatten subtlety; the extra fruit and sweetness of a natural survives the trip better than a delicate washed profile. That said, a small washed Yirgacheffe inclusion is the most cost-effective way to add a recognizable Ethiopian signature to a base blend. For the underlying flavor logic, see <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='text-amber-700 hover:underline'>washed vs natural processing</Link>.
      </p>

      {/* Section 4: Crema */}
      <h3 id='crema' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineSparkles className='w-8 h-8 text-amber-600' />
        4. Crema, Body, and the Short-Shot Problem
      </h3>
      <p className='my-4'>
        Ethiopian coffee&apos;s reputation is built on aromatics and acidity, not body and crema. In a pour-over that is the whole point. In a pressurized single-serve shot it is a gap to manage. A bright washed Yirgacheffe run as a solo capsule can read thin and sharp, with little crema, which single-serve buyers interpret as a defect even when the coffee is excellent.
      </p>
      <p className='my-4'>
        Three sourcing and production moves close the gap:
      </p>
      <ul className='list-disc pl-6 my-4 space-y-3'>
        <li><span className='font-bold'>Build body into the green selection.</span> Anchor the cup with a denser, fuller-bodied base (Jimma or Limu, or a natural Sidamo) and treat the high-floral washed lots as inclusions rather than the whole charge.</li>
        <li><span className='font-bold'>Roast for the format, not for filter.</span> Single-serve espresso capsules generally want a medium to medium-dark development to build crema and round off acidity in the short shot. Roasting too light leaves the capsule sour and crema-poor; see the <Link href='/insights/roasting-ethiopian-coffee-beans-guide' className='text-amber-700 hover:underline'>Ethiopian roasting guide</Link> for development targets by origin.</li>
        <li><span className='font-bold'>Match the machine system.</span> Pressurized OriginalLine-style capsules generate crema mechanically, which is forgiving; centrifugal systems behave differently and reward a coarser, more uniform grind. Confirm which system your line fills for before finalizing roast and grind, because it changes how much the green has to carry on its own.</li>
      </ul>

      {/* Section 5: Freshness */}
      <h3 id='freshness' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineClock className='w-8 h-8 text-amber-600' />
        5. Freshness and Degassing: The Capsule QC Challenge
      </h3>
      <p className='my-4'>
        Freshness is where single-serve programs quietly fail. A sealed capsule can sit on a shelf for many months, so the coffee tastes only as fresh as it was on the day it was filled. Fill too soon after roasting and trapped carbon dioxide can pressurize the capsule, disturb extraction, or deform the seal. Fill too late and you lock in stale coffee for the entire shelf life. The window is real and it starts with the green.
      </p>
      <div className='bg-blue-50 border border-blue-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3'>What This Means for Green Coffee Buyers</h4>
        <ul className='space-y-2 text-sm text-gray-700'>
          <li><span className='font-semibold'>Buy current-crop, well-stored green.</span> Capsules amplify any staleness already present in the green. Confirm crop year and storage conditions, and plan to run lots while they are fresh. The <Link href='/insights/green-coffee-shelf-life-storage-guide' className='text-amber-700 hover:underline'>green coffee shelf life and storage guide</Link> covers how long lots hold and under what conditions.</li>
          <li className='mt-2'><span className='font-semibold'>Plan a roast-to-fill window.</span> Coordinate with your co-packer so roasted coffee rests long enough to release the bulk of its CO&#8322; but is filled while still fresh. Nitrogen flushing and one-way valving on the fill line manage the rest.</li>
          <li className='mt-2'><span className='font-semibold'>Prioritize consistent density.</span> Lot-to-lot density swings change both grind behavior and degassing rate, which a fixed fill line cannot absorb. Consistency across shipments is worth more here than a single spectacular lot.</li>
        </ul>
      </div>

      {/* Section 6: Grade and prep */}
      <h3 id='grade-prep' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineScale className='w-8 h-8 text-amber-600' />
        6. Grade and Prep for Even Capsule Extraction
      </h3>
      <p className='my-4'>
        A capsule line grinds to a fixed setting and meters by weight or volume. Uneven green coffee produces uneven grind and uneven extraction, which shows up immediately in a format with no barista to compensate. Two preparation details carry most of the weight.
      </p>
      <p className='my-4'>
        First, screen-size uniformity. Mixed bean sizes grind unevenly and extract unevenly. Specify a tight screen distribution on capsule lots even if you accept wider tolerances elsewhere; the <Link href='/insights/ethiopian-coffee-screen-size-guide' className='text-amber-700 hover:underline'>screen size guide</Link> explains how to write the tolerance into a contract. Second, grade selection by tier. Premium single-origin capsules justify Grade 1 or Grade 2 lots, while everyday blend capsules are usually built on dependable Grade 3 to Grade 4 commercial lots where consistency and price beat headline cup scores. For how Ethiopian grades map to use and price, see the <Link href='/coffee-grading-ethiopia' className='text-amber-700 hover:underline'>Ethiopian coffee grading system</Link> reference.
      </p>

      {/* Section 7: Single vs blend */}
      <h3 id='single-vs-blend' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineTag className='w-8 h-8 text-amber-600' />
        7. Single-Origin vs Blend Capsule Strategy
      </h3>
      <p className='my-4'>
        The format supports two distinct product strategies, and the sourcing differs for each.
      </p>
      <div className='grid md:grid-cols-2 gap-4 my-6'>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Single-Origin Ethiopian Capsule</h4>
          <p className='text-sm text-gray-700'>A premium play. Choose a natural Guji or Sidamo for body and fruit that survive the short shot, or a washed Yirgacheffe for a clean, aromatic, lighter-bodied capsule positioned as a connoisseur option. Lean on traceability and origin story; this is where margin lives. Expect to manage crema expectations and to communicate the lighter body as a feature.</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Ethiopian-Forward Blend Capsule</h4>
          <p className='text-sm text-gray-700'>An everyday play. Build a body-and-crema base (Jimma or Limu, optionally with a non-Ethiopian component for crema if your brand allows it) and lift it with 15 to 30% washed Yirgacheffe or natural Guji for the recognizable Ethiopian note. More forgiving on cost, easier to keep consistent shipment to shipment.</p>
        </div>
      </div>
      <p className='my-4'>
        Blend architecture (base, bridge, highlight) follows the same logic as machine espresso, so rather than repeat it here, see the <Link href='/insights/ethiopian-coffee-espresso-blend-sourcing-guide' className='text-amber-700 hover:underline'>espresso blend sourcing guide</Link> and apply it with the capsule constraints from sections 4 and 5 in mind.
      </p>

      {/* Section 8: Decaf, organic, compostable */}
      <h3 id='decaf-organic' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineShieldCheck className='w-8 h-8 text-amber-600' />
        8. Decaf, Organic, and Compostable Demand
      </h3>
      <p className='my-4'>
        Two adjacent demands punch above their weight in single-serve. Decaf sells disproportionately well in capsule format, because the convenience buyer often wants an evening option from the same machine. A water-process decaf Ethiopian lot keeps origin character while meeting the clean-label expectation; the <Link href='/insights/decaf-green-coffee-processing-sourcing-guide' className='text-amber-700 hover:underline'>decaf processing and sourcing guide</Link> covers the methods and trade-offs.
      </p>
      <p className='my-4'>
        Sustainability is the other. The fastest-growing capsule sub-segment is compostable and recyclable formats, and buyers in that segment frequently want certified green coffee to match the sustainable packaging promise. Organic or Fairtrade Ethiopian lots align the inside of the capsule with the outside; the <Link href='/insights/ethiopian-coffee-certifications-organic-fairtrade-rainforest' className='text-amber-700 hover:underline'>certifications guide</Link> explains what each scheme requires and what it signals to buyers.
      </p>

      {/* Section 9: Buyer scenario */}
      <h3 id='buyer-scenario' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineUserGroup className='w-8 h-8 text-amber-600' />
        9. Buyer Scenario: Launching a Private-Label Line
      </h3>
      <p className='my-4'>
        Consider a European private-label co-packer launching a single-origin Ethiopian capsule for a supermarket chain. The brief is a recyclable OriginalLine-compatible capsule, a recognizable Ethiopian identity, and twelve months of consistent supply at roughly two containers per quarter.
      </p>
      <p className='my-4'>
        A sound sourcing plan looks like this. Choose a natural Guji Grade 2 for fruit and body that read clearly through the pressurized shot, rather than a delicate washed lot that would arrive thin and crema-poor. Specify a tight screen size so the fill line grinds evenly. Contract the volume forward across the crop year to hold the cup consistent shipment to shipment, instead of buying spot lots that drift in profile. Align the roast at medium development for crema and lock a roast-to-fill window with the co-packer. The result is a capsule that tastes the same in month one and month eleven, which is the real deliverable in single-serve. For the everyday tier, the same co-packer would swap to a Limu or Jimma base with a Yirgacheffe lift and move down a grade to protect margin.
      </p>

      {/* Section 10: Workflow */}
      <h3 id='workflow' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineArrowPath className='w-8 h-8 text-amber-600' />
        10. Sourcing Workflow and Volume Planning
      </h3>
      <ol className='list-decimal pl-6 my-4 space-y-3'>
        <li><span className='font-bold'>Define the format and machine system first.</span> OriginalLine-style pressurized versus centrifugal changes grind and how much crema the green must carry. Settle this before you cup.</li>
        <li><span className='font-bold'>Request samples against the real constraint.</span> Evaluate roasted samples at your capsule&apos;s dose and on the target machine, not as a filter brew. A lot that shines in a pour-over can disappoint in a 5-gram shot.</li>
        <li><span className='font-bold'>Lock consistency, then volume.</span> Single-serve lines run continuously, so contract forward across the crop year for a stable profile. For order sizing and container math, see the <Link href='/insights/minimum-order-quantities-ethiopian-coffee-moq' className='text-amber-700 hover:underline'>minimum order quantities guide</Link>.</li>
        <li><span className='font-bold'>Budget landed cost, not just FOB.</span> Capsule margins are set at retail price points, so model the full cost; the <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='text-amber-700 hover:underline'>FOB pricing guide</Link> is the starting point.</li>
        <li><span className='font-bold'>Coordinate roast-to-fill.</span> Confirm rest and degassing timing with the co-packer so the capsule is filled fresh and stable.</li>
      </ol>
      <p className='my-4'>
        Buyers supplying cafe chains and hospitality groups alongside a capsule line will also find the <Link href='/insights/ethiopian-coffee-horeca-cafe-chain-buyers-guide' className='text-amber-700 hover:underline'>HoReCa and cafe-chain buyer&apos;s guide</Link> useful for aligning a single-serve product with a wider Ethiopian range.
      </p>

      {/* FAQ */}
      <h3 id='faq' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineQuestionMarkCircle className='w-8 h-8 text-amber-600' />
        11. Frequently Asked Questions
      </h3>
      <section className='my-6 space-y-6'>
        <div>
          <h4 className='font-bold text-gray-800 mb-2'>Which Ethiopian coffee is best for capsules and pods?</h4>
          <p className='text-sm text-gray-600'>For body and crema, a Jimma or Limu base works well; for fruit-forward single-origin capsules, a natural Guji or Sidamo holds up in the short shot. Washed Yirgacheffe is best used as a 15 to 30% aromatic top note rather than a solo capsule, because it can read thin and crema-poor on its own.</p>
        </div>
        <div>
          <h4 className='font-bold text-gray-800 mb-2'>Should capsule coffee be washed or natural?</h4>
          <p className='text-sm text-gray-600'>Natural lots usually translate better to capsules because the pressurized short shot can flatten subtle washed profiles, while a natural&apos;s extra fruit and sweetness survive. Washed lots still earn a place as a clean aromatic inclusion in a blend, or as a deliberately lighter, connoisseur-positioned single-origin capsule.</p>
        </div>
        <div>
          <h4 className='font-bold text-gray-800 mb-2'>Why does freshness matter more for capsules?</h4>
          <p className='text-sm text-gray-600'>A capsule seals about 5 to 6 grams of coffee for months, so the cup tastes only as fresh as the coffee was when filled. Tired green or a poorly timed roast-to-fill window locks in staleness for the whole shelf life. Buy current-crop, well-stored green and coordinate degassing with your co-packer.</p>
        </div>
        <div>
          <h4 className='font-bold text-gray-800 mb-2'>What grade should I use for capsule production?</h4>
          <p className='text-sm text-gray-600'>Premium single-origin capsules justify Grade 1 or Grade 2 lots; everyday blend capsules are usually built on consistent Grade 3 to Grade 4 commercial lots where price and uniformity matter more than headline cup scores. In every case, specify a tight screen size so the fill line grinds and extracts evenly.</p>
        </div>
        <div>
          <h4 className='font-bold text-gray-800 mb-2'>Can I sell a single-origin Ethiopian capsule at a premium?</h4>
          <p className='text-sm text-gray-600'>Yes. Single-origin and certified-sustainable capsules are among the fastest-growing, highest-margin parts of the single-serve market. A traceable natural Guji or fragrant Yirgacheffe in a recyclable or compostable capsule is difficult for commodity players to copy and supports a premium retail position.</p>
        </div>
      </section>

      {/* CTA */}
      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Source Ethiopian Green Coffee for Your Capsule or Pod Line</h4>
        <p className='my-2'>
          As an origin-connected Ethiopian coffee exporter, <span className='font-bold'>Ethio Coffee Import and Export PLC</span> supplies the body-and-crema bases (Jimma, Limu) and the fragrant single-origin lots (Yirgacheffe, Guji, Sidamo) that single-serve programs are built on, with the consistent, current-crop supply a capsule line depends on. We provide samples, screen-size and grade specifications, and forward-contracted volume across the crop year so your capsule tastes the same from first fill to last. Contact us to discuss origins, grades, and a supply plan for your capsule or pod program.
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
              <li>&bull; <Link href='/insights/ethiopian-coffee-espresso-blend-sourcing-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee for Espresso Blends</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-cold-brew-rtd-sourcing-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee for Cold Brew &amp; RTD</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-for-instant-soluble-sourcing-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee for Instant &amp; Soluble</Link></li>
              <li>&bull; <Link href='/insights/decaf-green-coffee-processing-sourcing-guide' className='text-amber-700 hover:underline'>Decaf Green Coffee: Processing &amp; Sourcing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Quality &amp; Processing</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='text-amber-700 hover:underline'>Washed vs Natural Ethiopian Coffee Processing</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-screen-size-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Screen Size Guide</Link></li>
              <li>&bull; <Link href='/insights/green-coffee-shelf-life-storage-guide' className='text-amber-700 hover:underline'>Green Coffee Shelf Life &amp; Storage Guide</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Roasting &amp; Certification</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/roasting-ethiopian-coffee-beans-guide' className='text-amber-700 hover:underline'>Roasting Ethiopian Coffee Beans Guide</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-certifications-organic-fairtrade-rainforest' className='text-amber-700 hover:underline'>Ethiopian Coffee Certifications</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Buying &amp; Planning</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/minimum-order-quantities-ethiopian-coffee-moq' className='text-amber-700 hover:underline'>Minimum Order Quantities for Ethiopian Coffee</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-horeca-cafe-chain-buyers-guide' className='text-amber-700 hover:underline'>HoReCa &amp; Cafe Chain Buyer&apos;s Guide</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> Published by Ethio Coffee Import and Export PLC, an origin-connected Ethiopian coffee exporter with three decades of sourcing relationships across Yirgacheffe, Sidamo, Guji, Harar, Limu, and Jimma. This guide draws on direct sourcing experience supplying green coffee for packaged-format programs, alongside International Coffee Organization market data and published single-serve market research. Market figures are industry estimates; capsule machine specifications vary by system, so confirm format details with your co-packer before finalizing roast and grind.
        </p>
        <p className='text-sm text-gray-600 font-inconsolata mt-2'>
          <Link href='/insights' className='underline'>All Insights</Link> &middot; <Link href='/ethiopian-coffee-exporter' className='underline'>Our Export Services</Link> &middot; <Link href='/about' className='underline'>About Ethio Coffee</Link> &middot; <Link href='/contact-us' className='underline'>Contact</Link>
        </p>
      </div>
    </>
  )
}
