import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import {
  HiOutlineLightBulb,
  HiOutlineClipboardDocumentList,
  HiOutlineScale,
  HiOutlineBeaker,
  HiOutlineExclamationTriangle,
  HiOutlineBuildingStorefront,
  HiOutlineCalendarDays,
  HiOutlineCurrencyDollar,
  HiOutlineUserGroup,
  HiOutlineQuestionMarkCircle,
  HiOutlineSparkles,
  HiOutlineMapPin
} from 'react-icons/hi2'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function EthiopianCoffeeVsRwandanCoffee({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        A trade-level comparison of two East African origins for importers and roasters: heirloom diversity versus Red Bourbon, the potato taste defect, harvest timing, pricing, and how to run both in one program.
      </h2>

      <figure>
        <figcaption className='font-inconsolata my-2'>
          Ethiopian and Rwandan green coffee answer different problems in a buyer&apos;s lineup, and their harvest calendars barely overlap.
        </figcaption>
        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Ethiopian coffee vs Rwandan coffee comparison of East African specialty green coffee beans'
            fill
            objectFit='cover'
            className='w-full h-full'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>
        <figcaption className='text-xs text-gray-500 mt-1 font-inconsolata'>
          Photo: Ella Marie, <a href='https://commons.wikimedia.org/wiki/File:Papua_New_Guinea_raw_arabica_coffee_beans.jpg' target='_blank' rel='noopener noreferrer' className='underline'>Wikimedia Commons</a>, <a href='https://creativecommons.org/licenses/by/2.0' target='_blank' rel='noopener noreferrer' className='underline'>CC BY 2.0</a>.
        </figcaption>
      </figure>

      <div className='my-4 text-sm bg-amber-50 p-4 rounded-lg border border-amber-200'>
        <span className='font-semibold'>Category:</span>
        <span className='ml-2'>Origin Comparison / Sourcing Strategy / Green Coffee Buying / Importer Resources</span>
      </div>

      {/* KEY TAKEAWAY */}
      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-6 border border-amber-200'>
        <p className='font-medium flex items-start gap-2'>
          <HiOutlineLightBulb className='text-2xl flex-shrink-0 mt-1' />
          <span><span className='font-bold'>Key Takeaway:</span> Ethiopian coffee vs Rwandan coffee is not a quality contest; both produce 86+ specialty lots. It is a structural comparison. Ethiopia offers thousands of heirloom landraces, natural and washed processing, and roughly 4 million bags of exportable supply. Rwanda offers a near-monoculture of Red Bourbon, an almost entirely washed profile, about 21,000 tonnes of production, and a real potato taste defect risk that Ethiopia does not carry. Their harvest windows sit on opposite halves of the year, which is the single most useful fact for a buyer who wants fresh African coffee twelve months out of twelve.</span>
        </p>
      </div>

      {/* TABLE OF CONTENTS */}
      <div className='my-8 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <HiOutlineClipboardDocumentList className='text-amber-600' />
          In This Guide
        </h3>
        <ol className='space-y-2 text-sm'>
          <li><a href="#snapshot" className='text-amber-700 hover:underline'>1. Snapshot: The Numbers That Matter</a></li>
          <li><a href="#genetics" className='text-amber-700 hover:underline'>2. Two Genetic Philosophies: Landrace vs Red Bourbon</a></li>
          <li><a href="#cup" className='text-amber-700 hover:underline'>3. What They Taste Like, and Where Each Belongs on a Menu</a></li>
          <li><a href="#potato" className='text-amber-700 hover:underline'>4. The Potato Taste Defect: Rwanda&apos;s Risk Ethiopia Avoids</a></li>
          <li><a href="#trade" className='text-amber-700 hover:underline'>5. Trade Structure: How Each Coffee Reaches You</a></li>
          <li><a href="#seasonality" className='text-amber-700 hover:underline'>6. Counter-Seasonal Sourcing: A Year-Round African Shelf</a></li>
          <li><a href="#pricing" className='text-amber-700 hover:underline'>7. Pricing, Volume, and Supply Security</a></li>
          <li><a href="#decision" className='text-amber-700 hover:underline'>8. Three Buyer Scenarios</a></li>
          <li><a href="#faq" className='text-amber-700 hover:underline'>9. Frequently Asked Questions</a></li>
        </ol>
      </div>

      {/* INTRODUCTION */}
      <p className='my-4'>
        <span className='font-bold'>Ethiopian coffee vs Rwandan coffee</span> is a comparison most green buyers eventually have to make when they build out an East African section. Both origins deliver clean, high-scoring, aromatic washed coffees that sell well as single origins and anchor African blends. But they are structurally opposite in almost every way that affects a purchase order: genetic base, processing mix, supply scale, price behavior, quality risk, and harvest timing. Understanding those differences tells you not just which coffee to buy, but when to buy it and what job it should do in your lineup.
      </p>

      <p className='my-4'>
        Most published comparisons of these two origins are written for home brewers deciding what to put in a pour-over. This guide is written for importers, roasters, and green traders who write contracts. It covers the potato taste defect that shapes Rwandan risk management, the auction and washing-station systems behind each origin, current-season pricing and volume, and a counter-seasonal sourcing strategy that treats the two origins as complementary rather than competing. As an <Link href='/ethiopian-coffee-exporter' className='underline font-bold'>origin-connected Ethiopian exporter</Link>, our angle is straightforward: we know where Ethiopian coffee has the edge, and we are honest about where a Rwandan lot earns its place alongside it.
      </p>

      {/* SECTION 1: SNAPSHOT */}
      <h2 id="snapshot" className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineScale className='text-amber-600' />
        1. Snapshot: The Numbers That Matter
      </h2>

      <p className='my-4'>
        The fastest way to see the difference is scale and structure side by side. Ethiopia is a genetic-diversity giant that keeps half its crop at home; Rwanda is a small, tightly organized washed-coffee origin that exports nearly everything it grows.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full text-sm border-collapse'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Attribute</th>
              <th className='p-3 text-left font-bold'>Ethiopia</th>
              <th className='p-3 text-left font-bold'>Rwanda</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Dominant genetics</td>
              <td className='p-3'>Thousands of heirloom landraces + JARC selections</td>
              <td className='p-3'>~95% Red Bourbon (near-monoculture)</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Processing mix</td>
              <td className='p-3'>Natural (~60%), washed (~40%), honey emerging</td>
              <td className='p-3'>Fully washed (~62% of exports), some naturals and honeys</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Altitude</td>
              <td className='p-3'>1,500 to 2,200 m</td>
              <td className='p-3'>1,700 to 2,100 m</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Signature cup</td>
              <td className='p-3'>Floral, citrus, berry, tea-like to syrupy</td>
              <td className='p-3'>Red apple, orange, brown sugar, silky, clean</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Grading</td>
              <td className='p-3'>ECX G1 to G5 (defects + cup score)</td>
              <td className='p-3'>Screen grade + fully washed / A grade designations</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Annual production</td>
              <td className='p-3'>~7.8 million 60-kg bags</td>
              <td className='p-3'>~21,000 tonnes (~350,000 bags), 2024/25</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Main harvest</td>
              <td className='p-3'>October to February</td>
              <td className='p-3'>March to July</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Export port</td>
              <td className='p-3'>Djibouti</td>
              <td className='p-3'>Mombasa or Dar es Salaam (landlocked transit)</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Quality risk to manage</td>
              <td className='p-3'>Lot-to-lot variability from mixed landraces</td>
              <td className='p-3'>Potato taste defect (PTD)</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='p-3 font-semibold'>Typical specialty FOB</td>
              <td className='p-3'>$3.50 to $7.00+ per lb</td>
              <td className='p-3'>~$6.20 per kg average export price (2025); specialty higher</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        Two figures anchor the scale gap. Ethiopia exports roughly 4 million bags after domestic consumption, while Rwanda exported about 23,860 tonnes of green coffee in 2025 for around $148.6 million, at an average price of $6.2 per kilogram (<a href="https://www.naeb.gov.rw/rwanda-coffee/about-rwanda-coffee" target="_blank" rel="noopener noreferrer" className='text-amber-700 hover:underline'>National Agricultural Export Development Board</a>, 2025). Rwanda is a boutique origin by volume. That shapes everything from lot availability to how much a single bad harvest can move the market.
      </p>

      {/* SECTION 2: GENETICS */}
      <h2 id="genetics" className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineBeaker className='text-amber-600' />
        2. Two Genetic Philosophies: Landrace vs Red Bourbon
      </h2>

      <p className='my-4'>
        The genetic story is the root of every other difference. Ethiopia is the center of origin for Coffea arabica and grows a genetically diverse population no other country can match; Rwanda grows one variety, extremely well. If you understand this contrast, the cup, the pricing, and the consistency profile all follow logically.
      </p>

      <h3 className='text-xl font-bold mt-6'>Ethiopia: diversity as the product</h3>

      <p className='my-4'>
        Ethiopian export contracts almost always read &quot;heirloom,&quot; a catch-all for the thousands of indigenous <Link href='/insights/ethiopian-heirloom-coffee-varieties-landraces' className='underline font-bold'>landrace varieties</Link> native to the country, alongside named Jimma Agricultural Research Center (JARC) selections such as 74110 and 74158. A single Ethiopian lot is usually a blend of multiple genotypes grown side by side on smallholder plots. That is why Ethiopian coffee is famous for layered complexity, and also why one Yirgacheffe washing station can cup noticeably different from its neighbor. Diversity is the asset and the variable to manage.
      </p>

      <h3 className='text-xl font-bold mt-6'>Rwanda: one variety, tightly controlled</h3>

      <p className='my-4'>
        About 95% of Rwandan Arabica is Red Bourbon, a heritage variety introduced by German missionaries in the early 1900s and prized for sweetness and cup clarity (<a href="https://worldcoffeeresearch.org/countries/rwanda" target="_blank" rel="noopener noreferrer" className='text-amber-700 hover:underline'>World Coffee Research</a>). Roughly 400,000 smallholder families farm very small plots, often around 600 trees each, and deliver cherry to central washing stations for fully washed processing. A disease-resistant selection called RAB C15 was released in 2015 but has seen limited farmer adoption, so the Bourbon character remains dominant. For a buyer, single-variety production means Rwandan lots are more predictable in profile than Ethiopian lots; you are tasting terroir and processing rather than a shifting mix of genetics.
      </p>

      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-6 border border-amber-200'>
        <p className='font-medium'>
          <span className='font-bold'>Origin note:</span> A practical tell in our cupping room is aftertaste architecture. Ethiopian washed lots tend to finish with a lifting floral-citrus signature that keeps evolving in the cup, while quality Rwandan Bourbon finishes rounder and sweeter, with a red-apple and brown-sugar close that stays stable from hot through cold. Neither is better; they suit different roast and menu goals.
        </p>
      </div>

      {/* SECTION 3: CUP */}
      <h2 id="cup" className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineSparkles className='text-amber-600' />
        3. What They Taste Like, and Where Each Belongs on a Menu
      </h2>

      <p className='my-4'>
        Ethiopian coffee delivers aromatic intensity and range; Rwandan coffee delivers polished, balanced sweetness with a clean citrus lift. Both cup in the 86 to 90+ band at the specialty top end, so the menu question is about character and roast direction, not quality tier.
      </p>

      <div className='grid md:grid-cols-2 gap-6 my-8'>
        <div className='bg-green-50 p-5 rounded-lg border border-green-200'>
          <h4 className='font-bold text-lg mb-3 flex items-center gap-2'>
            <HiOutlineMapPin className='text-green-600' /> Ethiopian character
          </h4>
          <ul className='space-y-2 text-sm'>
            <li>&bull; Washed <Link href='/insights/yirgacheffe-coffee-sourcing-guide' className='underline'>Yirgacheffe</Link>: jasmine, bergamot, lemon, tea-like body</li>
            <li>&bull; Natural <Link href='/insights/guji-coffee-sourcing-guide' className='underline'>Guji</Link> and Sidama: blueberry, tropical fruit, syrupy sweetness</li>
            <li>&bull; Acidity: bright, sparkling, malic and citric</li>
            <li>&bull; Best menu roles: hero single origins, aromatic filter, floral competition lots</li>
            <li>&bull; Roast direction: light to light-medium to protect aromatics</li>
          </ul>
        </div>
        <div className='bg-blue-50 p-5 rounded-lg border border-blue-200'>
          <h4 className='font-bold text-lg mb-3 flex items-center gap-2'>
            <HiOutlineMapPin className='text-blue-600' /> Rwandan character
          </h4>
          <ul className='space-y-2 text-sm'>
            <li>&bull; Washed Bourbon: red apple, orange, black tea, brown sugar</li>
            <li>&bull; Body: silky, medium, notably clean</li>
            <li>&bull; Acidity: bright but rounder and less wild than Ethiopian washed</li>
            <li>&bull; Best menu roles: approachable single origin, blend sweetener, milk-friendly filter</li>
            <li>&bull; Roast direction: light-medium to medium, tolerates a touch more development</li>
          </ul>
        </div>
      </div>

      <p className='my-4'>
        The practical distinction for a roaster: Ethiopian washed coffee is the more polarizing, high-aromatic option that excites experienced palates and wins on a competition table. Rwandan Bourbon is the crowd-pleaser that reads as &quot;clean and sweet&quot; to a broad customer base and holds up better with milk. If your Ethiopian offering is a delicate floral Yirgacheffe, a Rwandan lot can sit beside it as the rounder, more forgiving option on the same shelf without cannibalizing it.
      </p>

      {/* SECTION 4: POTATO DEFECT */}
      <h2 id="potato" className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineExclamationTriangle className='text-amber-600' />
        4. The Potato Taste Defect: Rwanda&apos;s Risk Ethiopia Avoids
      </h2>

      <p className='my-4'>
        The potato taste defect (PTD) is the most important quality-risk difference between these origins, and it is one Ethiopian coffee essentially does not have. PTD makes an affected bean smell like freshly peeled raw potato when roasted and ground, and a single defective bean can taint an entire brew. It is a Great Lakes region problem, encountered mainly in Rwanda, Burundi, Congo, and Uganda, and only rarely elsewhere (<a href="https://worldcoffeeresearch.org/resources/potato-taste-defect" target="_blank" rel="noopener noreferrer" className='text-amber-700 hover:underline'>World Coffee Research</a>). Any buyer sourcing Rwandan coffee needs a plan for it.
      </p>

      <p className='my-4'>
        The mechanism is well documented. Damage from the antestia bug (genus Antestiopsis) opens the cherry, bacteria enter, and the bean develops pyrazine compounds responsible for the potato aroma (World Coffee Research). It is a flavor defect only, with no food-safety risk, but it is commercially serious because it is invisible; you cannot see PTD in a green bean, only taste it after roasting.
      </p>

      <div className='bg-red-50 p-6 rounded-lg my-6 border border-red-200'>
        <h4 className='font-bold mb-3 flex items-center gap-2'>
          <HiOutlineExclamationTriangle className='text-red-600' />
          How reputable Rwandan supply chains manage PTD
        </h4>
        <ul className='space-y-2 text-sm'>
          <li>&bull; <span className='font-bold'>Field control:</span> antestia bug monitoring and targeted pest management at farm level</li>
          <li>&bull; <span className='font-bold'>Cherry floating:</span> low-density damaged cherries are floated off before pulping</li>
          <li>&bull; <span className='font-bold'>Density and optical sorting:</span> multiple mechanical passes remove suspect beans</li>
          <li>&bull; <span className='font-bold'>Hand sorting and cupping segregation:</span> final human sort plus intensive cupping to isolate affected lots</li>
        </ul>
        <p className='text-xs mt-3 italic'>Even with all of these, PTD has not been fully eradicated. Manage it in the contract, not just at the farm.</p>
      </div>

      <p className='my-4'>
        For buyers, the practical takeaway is procedural. When you contract Rwandan coffee, specify PTD handling: request roasted (not just green) pre-shipment samples, roast and cup arrival samples before release where terms allow, and favor washing stations and exporters with a documented sorting protocol and a track record. This is a real cost-of-quality difference. Ethiopian coffee carries its own variability from mixed landraces, but it does not require you to build a defect-screening step into your standard operating procedure. That reduced overhead is a genuine, and rarely quantified, advantage of Ethiopian sourcing.
      </p>

      {/* SECTION 5: TRADE STRUCTURE */}
      <h2 id="trade" className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineBuildingStorefront className='text-amber-600' />
        5. Trade Structure: How Each Coffee Reaches You
      </h2>

      <p className='my-4'>
        The two origins are bought through different systems, and the difference affects traceability, lead time, and how you negotiate. Ethiopia routes most coffee through a commodity exchange with a growing direct-specialty channel; Rwanda runs on washing stations, private exporters, and a smaller, more relationship-driven export sector overseen by a national board.
      </p>

      <h3 className='text-xl font-bold mt-6'>Ethiopia: exchange plus direct specialty</h3>

      <p className='my-4'>
        Most Ethiopian coffee has passed through the <Link href='/insights/ecx-and-ethiopian-coffee-export' className='underline font-bold'>Ethiopia Commodity Exchange (ECX)</Link>, where daily reference prices are set by grade and region. Post-2017 reforms restored lot-level traceability and let qualifying exporters and cooperative unions sell directly to overseas roasters. In practice, growing volumes of specialty Ethiopian coffee now move through <Link href='/insights/private-vs-cooperative-ethiopian-coffee-exporters' className='underline font-bold'>private exporters and cooperatives</Link> with direct washing-station relationships. Grading follows the ECX G1 to G5 scale, combining defect count with cup score; see our <Link href='/insights/green-coffee-quality-control-defects-grading' className='underline font-bold'>grading and defects guide</Link> for the full framework.
      </p>

      <h3 className='text-xl font-bold mt-6'>Rwanda: washing stations and the NAEB</h3>

      <p className='my-4'>
        Rwanda&apos;s specialty sector was built on coffee washing stations (CWS). The first was constructed in 2004 with USAID support, the same year Rwanda hosted its first Cup of Excellence, which put the &quot;Land of a Thousand Hills&quot; on the specialty map. Today, cherry from smallholders is centrally processed at these stations, and coffee is exported by private companies and cooperatives under the oversight of the National Agricultural Export Development Board (NAEB), which sets policy, provides planting material, and reports sector data. There is no ECX-style daily auction for the whole crop; specialty lots are typically sold through direct relationships and competition channels. For buyers, that means Rwandan traceability to a single washing station is often straightforward, but the pool of available lots is much smaller than Ethiopia&apos;s.
      </p>

      {/* SECTION 6: SEASONALITY */}
      <h2 id="seasonality" className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineCalendarDays className='text-amber-600' />
        6. Counter-Seasonal Sourcing: A Year-Round African Shelf
      </h2>

      <p className='my-4'>
        Here is the fact that turns this from a either/or comparison into a portfolio strategy: Ethiopia and Rwanda harvest on opposite halves of the year. Ethiopia&apos;s main crop runs October to February, with fresh green landing at destination roughly February to June. Rwanda&apos;s harvest runs March to July, with fresh arrivals landing roughly August to November. Read together, the two origins cover the calendar.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full text-sm border-collapse'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Phase</th>
              <th className='p-3 text-left font-bold'>Ethiopia</th>
              <th className='p-3 text-left font-bold'>Rwanda</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Harvest</td>
              <td className='p-3'>October to February</td>
              <td className='p-3'>March to July</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Milling and prep</td>
              <td className='p-3'>December to April</td>
              <td className='p-3'>May to August</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Fresh crop at destination</td>
              <td className='p-3'>February to June</td>
              <td className='p-3'>August to November</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='p-3 font-semibold'>Role in a rotating shelf</td>
              <td className='p-3'>Freshest for the first half of the year</td>
              <td className='p-3'>Freshest for the second half of the year</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        For a roaster who markets an &quot;African filter&quot; or a seasonal single-origin slot, this is a practical scheduling tool. Feature fresh-crop Ethiopian lots in the first half of the year, rotate to fresh-crop Rwandan Bourbon in the second half, and you keep a current-crop African coffee on the bar without holding either origin so long that it fades. Green coffee quality degrades even in good <Link href='/insights/green-coffee-shelf-life-storage-guide' className='underline font-bold'>storage</Link>, so buying each origin near its arrival window and rotating between them is a freshness advantage, not just a marketing story. Plan the Ethiopian side of that calendar with our <Link href='/insights/ethiopian-coffee-harvest-calendar-buying-guide' className='underline font-bold'>Ethiopian harvest calendar and buying guide</Link>.
      </p>

      {/* SECTION 7: PRICING */}
      <h2 id="pricing" className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineCurrencyDollar className='text-amber-600' />
        7. Pricing, Volume, and Supply Security
      </h2>

      <p className='my-4'>
        Both origins trade at premiums to the ICE New York C-market, but their price behavior differs because their supply scale differs. Rwanda&apos;s small crop means a single poor season or a PTD scare can tighten availability quickly; Ethiopia&apos;s larger export base absorbs shocks with more depth of stock.
      </p>

      <p className='my-4'>
        Rwanda&apos;s average green export price reached about $6.2 per kilogram in 2025, up 19% year on year, on roughly 23,860 tonnes exported (NAEB). That average spans commercial and specialty; standout Cup of Excellence and micro-lot Bourbon sell well above it. Ethiopian specialty typically ranges from $3.50 to $7.00+ per pound FOB Djibouti depending on region, grade, and season, with competition-grade lots higher; our <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='underline font-bold'>Ethiopian FOB pricing guide</Link> breaks down the drivers. Because Rwanda is landlocked, its coffee transits to sea via Mombasa or Dar es Salaam, adding inland logistics that factor into landed cost; Ethiopian coffee ships through Djibouti.
      </p>

      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-6 border border-amber-200'>
        <p className='font-medium'>
          <span className='font-bold'>Supply-security read:</span> If you need reliable container volume, repeatable specifications, and flexible <Link href='/insights/minimum-order-quantities-ethiopian-coffee-moq' className='underline font-bold'>minimum order quantities</Link>, Ethiopia&apos;s scale is the safer base layer. Rwanda is best treated as a targeted, seasonal addition, contracted early because the best washing-station lots are limited and move fast.
        </p>
      </div>

      {/* SECTION 8: DECISION SCENARIOS */}
      <h2 id="decision" className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineUserGroup className='text-amber-600' />
        8. Three Buyer Scenarios
      </h2>

      <p className='my-4'>
        Abstract comparisons only go so far. Here is how the choice tends to resolve for three common buyer types.
      </p>

      <div className='space-y-6 my-6'>
        <div className='border-l-4 border-green-500 pl-4'>
          <h4 className='font-bold'>The mid-size European roaster building an African blend</h4>
          <p className='text-sm my-2'>A German roaster processing 150 to 250 tonnes a year wants a stable house African filter. Best move: an Ethiopian washed lot (Yirgacheffe or Sidama) as the aromatic top note plus a Rwandan Bourbon as the clean, sweet base, rotated by season. Ethiopia carries the volume and the story; Rwanda adds body balance and covers the second-half-year freshness gap. Screen the Rwandan component for PTD with roasted arrival samples.</p>
        </div>
        <div className='border-l-4 border-amber-500 pl-4'>
          <h4 className='font-bold'>The specialty micro-roaster chasing a competition table</h4>
          <p className='text-sm my-2'>A small roaster wants a headline single origin. Ethiopia is usually the stronger bet for aromatic ceiling, with natural Guji or a washed floral Yirgacheffe delivering the wow factor. A standout Rwandan Cup of Excellence Bourbon can compete, but the pool is small and priced accordingly. Buy Ethiopian for range and repeatability, Rwandan for a limited seasonal drop.</p>
        </div>
        <div className='border-l-4 border-blue-500 pl-4'>
          <h4 className='font-bold'>The importer managing risk across a book</h4>
          <p className='text-sm my-2'>An importer selling to many small roasters prioritizes supply security and defect-free consistency. Ethiopia is the dependable core because of its volume and the absence of a PTD screening burden. Rwanda is a valuable diversifier that spreads harvest-timing and origin risk, provided the importer vets washing-station sorting protocols and prices in the cost of quality control.</p>
        </div>
      </div>

      <p className='my-4'>
        Across all three, the pattern holds: Ethiopia as the scalable, lower-overhead core, Rwanda as the seasonal, character-adding complement. Very few professional buyers who work in East Africa choose only one. For help vetting an Ethiopian partner, see <Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='underline font-bold'>how to source green coffee from Ethiopia</Link> and <Link href='/insights/how-to-choose-ethiopian-coffee-export-company' className='underline font-bold'>how to choose an Ethiopian export company</Link>.
      </p>

      {/* SECTION 9: FAQ */}
      <h2 id="faq" className='text-3xl font-extrabold mt-10 flex items-center gap-2'>
        <HiOutlineQuestionMarkCircle className='text-amber-600' />
        9. Frequently Asked Questions
      </h2>

      <section className='my-6 space-y-6'>
        <div>
          <h4 className="font-bold text-gray-800 mb-2">Is Rwandan coffee affected by the potato taste defect and Ethiopian coffee is not?</h4>
          <p className="text-sm text-gray-600">Largely, yes. The potato taste defect is a Great Lakes region issue found mainly in Rwanda, Burundi, Congo, and Uganda, caused by antestia bug damage and subsequent bacterial pyrazine production. Ethiopian coffee sits outside that zone and rarely shows PTD, so Ethiopian buyers do not build defect screening into their standard process the way Rwandan buyers should.</p>
        </div>
        <div>
          <h4 className="font-bold text-gray-800 mb-2">Why does Rwanda grow mostly one variety while Ethiopia grows thousands?</h4>
          <p className="text-sm text-gray-600">Rwanda&apos;s coffee sector was established with introduced Bourbon in the early 1900s, so about 95% of its Arabica is Red Bourbon. Ethiopia is the biological origin of Arabica, where the plant evolved and diversified over millennia into thousands of indigenous landraces. One country inherited a broad gene pool; the other built an industry on a single proven variety.</p>
        </div>
        <div>
          <h4 className="font-bold text-gray-800 mb-2">Can I run Ethiopian and Rwandan coffee in the same program without them competing?</h4>
          <p className="text-sm text-gray-600">Yes, and their harvest calendars make it easy. Ethiopia harvests October to February and lands fresh February to June; Rwanda harvests March to July and lands fresh August to November. Feature Ethiopian lots in the first half of the year and Rwandan lots in the second half to keep a current-crop African coffee on the bar year-round.</p>
        </div>
        <div>
          <h4 className="font-bold text-gray-800 mb-2">Which origin is cheaper for a green buyer?</h4>
          <p className="text-sm text-gray-600">It depends on grade, but Ethiopia generally offers more competitive pricing at volume because of its far larger export base. Rwanda&apos;s 2025 average export price was about $6.2 per kg, and its small crop plus landlocked transit via Mombasa or Dar es Salaam can raise landed cost. Ethiopian specialty spans roughly $3.50 to $7.00+ per lb FOB depending on region and season.</p>
        </div>
        <div>
          <h4 className="font-bold text-gray-800 mb-2">Which tastes better with milk, Ethiopian or Rwandan?</h4>
          <p className="text-sm text-gray-600">Rwandan Bourbon usually holds up better in milk drinks. Its rounder, brown-sugar-and-red-apple sweetness and silky body cut through dairy, while delicate Ethiopian washed lots (jasmine, bergamot, tea-like) can get lost. For a milk-forward menu, Rwanda or an Ethiopian natural with heavier fruit is the safer pick than a floral washed Yirgacheffe.</p>
        </div>
      </section>

      {/* CTA */}
      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Anchor Your East African Program with Traceable Ethiopian Coffee</h4>
        <p className='my-2'>
          <span className='font-bold'>Ethio Coffee Import and Export PLC</span> supplies traceable green coffee from Yirgacheffe, Sidamo, Guji, Harrar, Limu, and Jimma, with pre-shipment samples, professional cupping scores, and full lot documentation. Whether Ethiopian coffee is your core supply or the aromatic half of a rotation that includes Rwandan Bourbon, we help you build a program around fresh, current-crop lots.
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
              <li>&bull; <Link href='/insights/ethiopian-coffee-vs-kenyan-coffee' className='text-amber-700 hover:underline'>Ethiopian Coffee vs Kenyan Coffee</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-vs-sumatran-coffee' className='text-amber-700 hover:underline'>Ethiopian Coffee vs Sumatran Coffee</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-vs-colombian-coffee' className='text-amber-700 hover:underline'>Ethiopian Coffee vs Colombian Coffee</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-vs-brazilian-coffee' className='text-amber-700 hover:underline'>Ethiopian Coffee vs Brazilian Coffee</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-vs-yemeni-coffee' className='text-amber-700 hover:underline'>Ethiopian Coffee vs Yemeni Coffee</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Varieties &amp; Processing</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/ethiopian-heirloom-coffee-varieties-landraces' className='text-amber-700 hover:underline'>Ethiopian Heirloom Varieties &amp; Landraces</Link></li>
              <li>&bull; <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='text-amber-700 hover:underline'>Washed vs Natural Ethiopian Processing</Link></li>
              <li>&bull; <Link href='/insights/green-coffee-quality-control-defects-grading' className='text-amber-700 hover:underline'>Green Coffee Quality: Defects &amp; Grading</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Sourcing &amp; Trade</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='text-amber-700 hover:underline'>How to Source Green Coffee from Ethiopia</Link></li>
              <li>&bull; <Link href='/insights/ecx-and-ethiopian-coffee-export' className='text-amber-700 hover:underline'>ECX and Ethiopian Coffee Export</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-harvest-calendar-buying-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Harvest Calendar</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Pricing &amp; Storage</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee FOB Pricing Guide</Link></li>
              <li>&bull; <Link href='/insights/green-coffee-shelf-life-storage-guide' className='text-amber-700 hover:underline'>Green Coffee Shelf Life &amp; Storage</Link></li>
              <li>&bull; <Link href='/insights/minimum-order-quantities-ethiopian-coffee-moq' className='text-amber-700 hover:underline'>Minimum Order Quantities (MOQ)</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> Published by Ethio Coffee Import and Export PLC. This comparison draws on data from World Coffee Research, Rwanda&apos;s National Agricultural Export Development Board (NAEB), the International Coffee Organization (ICO), the Ethiopia Commodity Exchange (ECX), and our direct experience as Ethiopian green coffee exporters. Production figures and prices fluctuate by season; contact us for current sourcing options.
        </p>
        <p className='text-sm text-gray-600 font-inconsolata mt-2'>
          <Link href='/insights' className='underline'>All Insights</Link> &middot; <Link href='/ethiopian-coffee-exporter' className='underline'>Our Export Services</Link> &middot; <Link href='/about' className='underline'>About Ethio Coffee</Link> &middot; <Link href='/contact-us' className='underline'>Contact</Link>
        </p>
      </div>
    </>
  )
}
