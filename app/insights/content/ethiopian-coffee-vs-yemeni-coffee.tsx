import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import {
  HiOutlineLightBulb,
  HiOutlineClipboardDocumentList,
  HiOutlineScale,
  HiOutlineBuildingLibrary,
  HiOutlineBeaker,
  HiOutlineSparkles,
  HiOutlineCurrencyDollar,
  HiOutlineExclamationTriangle,
  HiOutlineShieldExclamation,
  HiOutlineMap,
  HiOutlineQuestionMarkCircle,
} from 'react-icons/hi2'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function EthiopianCoffeeVsYemeniCoffee({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        Shared Mocha heritage, opposite cup characters, and a 20-to-1 supply gap: how two ancient Red Sea origins actually compare for importers and roasters.
      </h2>

      <figure>
        <figcaption className='font-inconsolata my-2'>
          Ethiopia and Yemen sit on opposite shores of the Red Sea and share coffee&apos;s founding story, yet they reach a buyer&apos;s warehouse on completely different terms.
        </figcaption>
        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Ethiopian coffee vs Yemeni coffee comparison: natural-processed green beans from both Red Sea origins side by side'
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
          <HiOutlineLightBulb className='text-amber-400 flex-shrink-0' /> Key Takeaway
        </h3>
        <p className='text-sm leading-relaxed'>
          Ethiopian coffee vs Yemeni coffee is less a quality contest than a supply-and-access decision. Yemen domesticated the coffee Ethiopia gave the world and built the Mocha trade around it, so the two origins share a dried-fruit, cocoa, and spice character in their natural lots. But Yemen produces roughly 20,000 tonnes a year against Ethiopia&apos;s 460,000-plus, ships through a conflict-affected logistics chain, and sells specialty green at $30 to $60-plus per pound. Ethiopia delivers a comparable Mocha-style natural cup at $4 to $7 FOB, in container volumes, with documented grading and EUDR-ready traceability. For most commercial programs, Ethiopian Harar and natural Guji are the practical way to buy the Mocha profile.
        </p>
      </div>

      {/* TOC */}
      <div className='my-8 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <HiOutlineClipboardDocumentList className='text-amber-600' /> In This Guide
        </h3>
        <ol className='space-y-2 text-sm'>
          <li><a href='#snapshot' className='text-amber-700 hover:underline'>1. Buyer Snapshot: Ethiopia vs Yemen at a Glance</a></li>
          <li><a href='#mocha-heritage' className='text-amber-700 hover:underline'>2. One Bean, Two Countries: The Mocha Connection</a></li>
          <li><a href='#cup-profile' className='text-amber-700 hover:underline'>3. Cup Profiles: Where They Overlap and Diverge</a></li>
          <li><a href='#farming-processing' className='text-amber-700 hover:underline'>4. Ancient Terraces vs Garden Forests</a></li>
          <li><a href='#scarcity-price' className='text-amber-700 hover:underline'>5. The Scarcity Gap: Volume and Pricing</a></li>
          <li><a href='#mocha-naming' className='text-amber-700 hover:underline'>6. The &quot;Mocha&quot; Naming and Mislabeling Trap</a></li>
          <li><a href='#supply-risk' className='text-amber-700 hover:underline'>7. Supply Risk, Grading, and EUDR Readiness</a></li>
          <li><a href='#decision' className='text-amber-700 hover:underline'>8. Which Origin Fits Your Program</a></li>
          <li><a href='#faq' className='text-amber-700 hover:underline'>9. Frequently Asked Questions</a></li>
        </ol>
      </div>

      {/* INTRO */}
      <p className='my-4 text-lg leading-relaxed'>
        <span className='font-bold'>Ethiopian coffee vs Yemeni coffee</span> is the oldest rivalry in the coffee world, and one of the most misunderstood by buyers. These two origins face each other across the southern Red Sea, share the genetics of <em>Coffea arabica</em>, and both trade on a heritage that predates every other producing country. Yet a green coffee buyer who treats them as interchangeable will make expensive mistakes. The volumes, prices, logistics, and documentation behind each origin could hardly be more different.
      </p>
      <p className='my-4'>
        Most published comparisons of these two origins are written for home brewers debating flavor. This guide is written for importers, roasters, and traders who need to decide where to place a purchase order. It covers the shared Mocha history that explains the cup similarity, the supply economics that explain the price gap, the labeling risks that catch new buyers, and a practical substitution map for sourcing the Mocha profile at commercial scale.
      </p>

      {/* SECTION 1: SNAPSHOT */}
      <h2 id='snapshot' className='text-3xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineScale className='w-8 h-8 text-amber-600' />
        1. Buyer Snapshot: Ethiopia vs Yemen at a Glance
      </h2>
      <p className='my-4'>
        The table below frames the comparison the way a sourcing desk sees it: not just flavor, but volume, price, trade structure, and risk. Each row carries a purchasing consequence explored later in the guide.
      </p>
      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Attribute</th>
              <th className='p-3 text-left font-bold'>Ethiopia</th>
              <th className='p-3 text-left font-bold'>Yemen</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Role in coffee history</td>
              <td className='p-3'>Botanical birthplace of Arabica</td>
              <td className='p-3'>First commercial cultivation and export trade</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Annual green production</td>
              <td className='p-3'>~460,000 to 470,000 MT (~7.8M 60kg bags)</td>
              <td className='p-3'>~20,000 MT (FAO, 2019: 20,812 t)</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Dominant processing</td>
              <td className='p-3'>Natural (~60%) and washed (~40%)</td>
              <td className='p-3'>Almost entirely natural (water-scarce)</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Signature natural cup</td>
              <td className='p-3'>Blueberry, stone fruit, florals, wine</td>
              <td className='p-3'>Dried fruit, cocoa, leather, warm spice</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Varieties</td>
              <td className='p-3'>6,000+ heirloom landraces, JARC selections</td>
              <td className='p-3'>Local landraces: Udaini, Tuffahi, Dawairi, Ja&apos;adi</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Grading / quality control</td>
              <td className='p-3'>Centralized ECX grading, CLU certification</td>
              <td className='p-3'>No national system; exporter-by-exporter sorting</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Typical specialty FOB</td>
              <td className='p-3'>$3.50 to $7.00+ per lb</td>
              <td className='p-3'>$30 to $60+ per lb (rare lots far higher)</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Export port</td>
              <td className='p-3'>Djibouti (FOB), Addis dry port</td>
              <td className='p-3'>Aden / Hodeidah, often via Djibouti transshipment</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Container-volume availability</td>
              <td className='p-3'>Reliable, multi-region, repeatable</td>
              <td className='p-3'>Limited; micro-lots, allocation-driven</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='p-3 font-semibold'>EUDR documentation</td>
              <td className='p-3'>Maturing fast via DSL and cooperative records</td>
              <td className='p-3'>Difficult; fragmented smallholder terraces</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className='my-4'>
        The headline is the 20-to-1 production gap. Ethiopia exports more coffee in a single week than Yemen produces in a month. That single fact drives almost every other difference in the table, from price to availability to how each origin can answer a compliance questionnaire.
      </p>

      {/* SECTION 2: MOCHA HERITAGE */}
      <h2 id='mocha-heritage' className='text-3xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineBuildingLibrary className='w-8 h-8 text-amber-600' />
        2. One Bean, Two Countries: The Mocha Connection
      </h2>
      <p className='my-4'>
        The cup similarity between these origins is not a coincidence; it is a family relationship. Arabica evolved in the forests of southwestern Ethiopia. For the deeper origin story, see our background on <Link href='/insights/ethiopia-coffee-origin-birthplace' className='text-amber-700 hover:underline'>Ethiopia as the birthplace of coffee</Link>. What Yemen did, from roughly the 15th century, was take that plant into systematic cultivation on its highland terraces and build the first international coffee trade around it.
      </p>
      <p className='my-4'>
        That trade ran through one port. <a href='https://en.wikipedia.org/wiki/Mocha,_Yemen' target='_blank' rel='noopener noreferrer' className='text-blue-600 hover:underline font-semibold'>Mocha (Mokha)</a> on Yemen&apos;s Red Sea coast was the principal coffee marketplace of the world from the 16th through the 19th centuries, and it gave its name to the &quot;Mocha&quot; coffee that European traders prized. Coffee shipped from Mocha came both from Yemen&apos;s own terraces and from across the strait in Ethiopia. The two origins were commercially fused in the buyer&apos;s mind for three hundred years before either had a modern grading certificate.
      </p>
      <p className='my-4'>
        For a buyer, the takeaway is genetic and sensory. Yemen&apos;s landrace varieties, Udaini, Tuffahi, Dawairi, and Ja&apos;adi, descend from that original Ethiopian material but were selected over centuries for Yemen&apos;s dry, high-altitude terraces. They are not found anywhere else. Ethiopia kept the far larger gene pool: thousands of <Link href='/insights/ethiopian-heirloom-coffee-varieties-landraces' className='text-amber-700 hover:underline'>heirloom landraces</Link> still uncharacterized on export documents. So both origins offer ancient, distinctive genetics, but Ethiopia offers diversity and Yemen offers a narrow, concentrated lineage.
      </p>
      <div className='border-l-4 border-amber-500 pl-6 bg-gray-50 p-4 my-6'>
        <p className='text-sm'>
          <span className='font-bold'>Trade-history note:</span> The classic &quot;Mocha-Java&quot; blend paired Yemeni Mocha with Indonesian Java. Today the word &quot;Mocha&quot; on a menu more often means chocolate than Yemeni origin. That drift matters commercially, and Section 6 covers how it becomes a labeling risk.
        </p>
      </div>

      {/* SECTION 3: CUP PROFILE */}
      <h2 id='cup-profile' className='text-3xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineBeaker className='w-8 h-8 text-amber-600' />
        3. Cup Profiles: Where They Overlap and Diverge
      </h2>
      <p className='my-4'>
        Because both origins lean heavily on natural processing, their cups rhyme. Both can show dried fruit, fermented-fruit complexity, and a syrupy body. The divergence is in emphasis. Ethiopian naturals push brightness, florals, and clean berry; Yemeni coffee pushes weight, earthiness, and savory spice. Put simply, Ethiopia tends toward the high notes and Yemen toward the low notes.
      </p>
      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Sensory dimension</th>
              <th className='p-3 text-left font-bold'>Ethiopian natural</th>
              <th className='p-3 text-left font-bold'>Yemeni natural</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Fruit character</td>
              <td className='p-3'>Fresh berry, blueberry, stone fruit</td>
              <td className='p-3'>Dried fruit: fig, date, raisin, apricot</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Acidity</td>
              <td className='p-3'>High, bright, wine-like</td>
              <td className='p-3'>Lower, rounded, structured</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Body</td>
              <td className='p-3'>Medium to syrupy</td>
              <td className='p-3'>Full, heavy, almost chewy</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Savory / spice</td>
              <td className='p-3'>Floral, herbal lift</td>
              <td className='p-3'>Cocoa, leather, clove, cardamom</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Consistency within origin</td>
              <td className='p-3'>Variable by region and station</td>
              <td className='p-3'>Variable by lot; uneven sorting common</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='p-3 font-semibold'>Closest cross-match</td>
              <td className='p-3'>Harar and natural Guji approach Yemeni weight</td>
              <td className='p-3'>Top lots reach Ethiopian aromatic complexity</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className='my-4'>
        The single most useful fact for a buyer hunting the Mocha profile: Ethiopia&apos;s <Link href='/insights/harar-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Harar</Link> naturals are the closest mainstream cup to Yemeni coffee. Harar shares the dried-blueberry, wine, and chocolate-spice register because it sits in Ethiopia&apos;s dry eastern highlands and is dry-processed in a comparable climate. Natural <Link href='/insights/guji-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Guji</Link> lots add the fruit-bomb intensity. For the processing mechanics behind these profiles, see our guide to <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='text-amber-700 hover:underline'>washed vs natural Ethiopian coffee</Link>.
      </p>

      {/* SECTION 4: FARMING & PROCESSING */}
      <h2 id='farming-processing' className='text-3xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineMap className='w-8 h-8 text-amber-600' />
        4. Ancient Terraces vs Garden Forests
      </h2>
      <p className='my-4'>
        The two origins farm coffee in physically different worlds, and that shapes both quality and supply reliability.
      </p>
      <h3 className='text-xl font-bold mt-8 mb-4'>Yemen: stone terraces and rooftop drying</h3>
      <p className='my-4'>
        Yemeni coffee grows on hand-built stone terraces in the western highlands, often between 1,500 and 2,400 meters, in regions such as Haraz, Bani Matar, Hayma, and Udain. Much of it is rainfed and intensely water-limited, which is precisely why processing is almost universally natural: there is rarely enough water to wash. Cherries are typically dried whole on rooftops and terraces, then hulled. The result is a small, dense, irregular bean with concentrated flavor, but lot consistency suffers because drying conditions and sorting vary household to household. According to the FAO&apos;s <a href='https://yemen.un.org/en/290202-fao-yemen-assessment-report-coffee-value-chain-yemen-export-potential-and-investment' target='_blank' rel='noopener noreferrer' className='text-blue-600 hover:underline font-semibold'>Yemen coffee value-chain assessment</a>, the average grower farms around 0.3 hectares and produces roughly 114 kg of coffee a year. Coffee also competes directly with qat, the cash crop that occupies much of Yemen&apos;s best irrigated land.
      </p>
      <h3 className='text-xl font-bold mt-8 mb-4'>Ethiopia: garden, forest, and washing-station systems</h3>
      <p className='my-4'>
        Ethiopia grows coffee in garden plots, semi-forest, and forest systems across Yirgacheffe, Sidamo, Guji, Harar, Limu, and Jimma, supported by thousands of washing stations and natural drying-bed operations. Smallholders are also tiny, often under half a hectare, but the sheer number of them (over four million farming households) plus organized cooperatives and private exporters creates depth of supply Yemen cannot match. Ethiopia runs both natural and washed lines, so a buyer can choose the Mocha-style natural or pivot to a clean washed Yirgacheffe from the same supplier. The full pipeline from cherry to container is documented in our <Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='text-amber-700 hover:underline'>guide to sourcing green coffee from Ethiopia</Link>.
      </p>
      <div className='grid md:grid-cols-2 gap-4 my-6'>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>What the terrace system gives Yemen</h4>
          <p className='text-sm text-gray-700'>Concentrated, distinctive cup character and a genuine rarity story, at the cost of low yields, variable sorting, and unpredictable volume.</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>What the multi-region system gives Ethiopia</h4>
          <p className='text-sm text-gray-700'>A spectrum from bold naturals to clean washed lots, repeatable season to season, with the processing controls importers expect.</p>
        </div>
      </div>

      {/* SECTION 5: SCARCITY & PRICE */}
      <h2 id='scarcity-price' className='text-3xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineCurrencyDollar className='w-8 h-8 text-amber-600' />
        5. The Scarcity Gap: Volume and Pricing
      </h2>
      <p className='my-4'>
        Yemeni coffee is expensive for reasons that have little to do with cup score and everything to do with economics. Understanding the drivers helps a buyer decide whether the premium is worth it for a given product.
      </p>
      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Price driver</th>
              <th className='p-3 text-left font-bold'>Effect on Yemeni coffee</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Tiny supply</td>
              <td className='p-3'>~20,000 MT total output spread across thousands of micro-producers</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Low yields</td>
              <td className='p-3'>Rainfed terraces and qat competition keep per-farm output minimal</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Costly logistics</td>
              <td className='p-3'>Conflict-era shipping, transshipment, insurance, and banking friction</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Brand cachet</td>
              <td className='p-3'>The &quot;Mocha&quot; name and rarity story support luxury positioning</td>
            </tr>
            <tr className='bg-gray-50'>
              <td className='p-3 font-semibold'>Hand labor</td>
              <td className='p-3'>Manual harvest, drying, and sorting on terrain machines cannot reach</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className='my-4'>
        The practical result: specialty Yemeni green commonly lands in the $30 to $60 per pound range, and standout micro-lots have sold far higher; roasted Yemeni retail has reached well over $100 per pound for trophy lots. By contrast, specialty Ethiopian coffee trades FOB Djibouti at roughly $3.50 to $7.00 per pound, with even competition-grade lots usually staying under $10. For a full breakdown of Ethiopian price formation from ECX benchmark to FOB, see our <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='text-amber-700 hover:underline'>Ethiopian coffee pricing guide</Link>, and for where the world&apos;s priciest coffees sit, our breakdown of the <Link href='/insights/most-expensive-coffee-in-the-world' className='text-amber-700 hover:underline'>most expensive coffee in the world</Link>.
      </p>
      <div className='bg-blue-50 border border-blue-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3'>The cost-per-cup reality</h4>
        <p className='text-sm text-gray-700'>
          A roaster paying $45 per pound for Yemeni green carries roughly a 6 to 12 times higher raw-material cost than the same program built on a $5 to $7 Ethiopian Harar or natural Guji. For a limited-release trophy bag with a story, that can work. For a core menu line or any volume SKU, the math rarely does. This is the central commercial decision the rest of this guide supports.
        </p>
      </div>

      {/* SECTION 6: MOCHA NAMING */}
      <h2 id='mocha-naming' className='text-3xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineExclamationTriangle className='w-8 h-8 text-amber-600' />
        6. The &quot;Mocha&quot; Naming and Mislabeling Trap
      </h2>
      <p className='my-4'>
        No other origin comparison carries this much naming confusion, and it has direct purchasing consequences. The word &quot;Mocha&quot; now means three unrelated things, and a careless contract can blur them.
      </p>
      <ul className='my-4 list-disc ml-5 space-y-2 text-sm'>
        <li><span className='font-bold'>Mocha the chocolate drink:</span> espresso plus chocolate, no connection to origin at all.</li>
        <li><span className='font-bold'>Mocha the historic Yemeni trade name:</span> coffee shipped through the port of Mocha, which could be Yemeni or Ethiopian.</li>
        <li><span className='font-bold'>Mocha / Moka as a variety label:</span> sometimes applied loosely to small-bean Ethiopian Harar or even unrelated lots.</li>
      </ul>
      <div className='bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-r-lg my-6'>
        <h4 className='font-bold text-lg mb-3'>Buyer warning: &quot;Yemeni&quot; that is actually Ethiopian</h4>
        <p className='text-sm text-gray-700'>
          Because genuine Yemeni coffee is scarce and costly, a meaningful share of coffee sold as &quot;Yemen Mocha&quot; or &quot;Mocha&quot; in the market is in fact Ethiopian Harar relabeled, or a blend. The two cup similarly, which makes substitution easy and verification hard. If you are paying a Yemeni premium, demand origin documentation, exporter provenance, and ideally a chain of custody. If you simply want the Mocha cup profile, buy Ethiopian Harar openly and honestly at a fraction of the price rather than paying a premium for an unverifiable &quot;Yemeni&quot; label.
        </p>
      </div>
      <p className='my-4'>
        This is where the comparison turns from academic to operational. The mislabeling risk effectively means that for many buyers, the honest, traceable way to obtain the Mocha profile is to buy Ethiopian and call it Ethiopian.
      </p>

      {/* SECTION 7: SUPPLY RISK & EUDR */}
      <h2 id='supply-risk' className='text-3xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineShieldExclamation className='w-8 h-8 text-amber-600' />
        7. Supply Risk, Grading, and EUDR Readiness
      </h2>
      <p className='my-4'>
        Beyond price, the two origins differ sharply on the operational risks that determine whether a contract actually arrives, on spec and on time.
      </p>
      <h3 className='text-xl font-bold mt-8 mb-4'>Grading and quality control</h3>
      <p className='my-4'>
        Ethiopia runs a centralized grading framework. Every exportable lot is classified by defect count and cup quality and certified before shipment, as covered in our guide to the <Link href='/insights/ecx-and-ethiopian-coffee-export' className='text-amber-700 hover:underline'>ECX and Ethiopian coffee export</Link> system. A buyer ordering &quot;Guji G1 Natural&quot; receives a documented, repeatable quality reference. Yemen has no equivalent national grading authority; quality control rests with individual exporters, so consistency varies and buyers must lean harder on pre-shipment samples and their own cupping.
      </p>
      <h3 className='text-xl font-bold mt-8 mb-4'>Logistics and continuity</h3>
      <p className='my-4'>
        Ethiopian coffee moves on an established FOB Djibouti pipeline with predictable routing and documentation. Yemeni coffee ships through a conflict-affected environment, sometimes transshipped via Djibouti itself, with higher insurance, banking complications, and continuity risk. For a buyer who needs the same coffee next season, Ethiopia offers a far more dependable supply line.
      </p>
      <h3 className='text-xl font-bold mt-8 mb-4'>EUDR and traceability</h3>
      <p className='my-4'>
        The EU Deforestation Regulation requires geolocated, deforestation-free sourcing data. Ethiopia&apos;s direct specialty and cooperative channels are building exactly this kind of farm-level record, as we cover in our <Link href='/insights/ethiopian-coffee-traceability-guide' className='text-amber-700 hover:underline'>Ethiopian coffee traceability guide</Link> and <Link href='/insights/eu-deforestation-regulation-ethiopian-coffee-compliance' className='text-amber-700 hover:underline'>EUDR compliance guide</Link>. Yemen&apos;s fragmented terrace smallholdings and conflict conditions make compiling compliant geolocation data substantially harder, which is a real barrier for buyers selling into the EU.
      </p>

      {/* SECTION 8: DECISION */}
      <h2 id='decision' className='text-3xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineSparkles className='w-8 h-8 text-amber-600' />
        8. Which Origin Fits Your Program
      </h2>
      <p className='my-4'>
        The decision is rarely &quot;which is better.&quot; It is &quot;which fits this specific product and customer.&quot; Three buyer scenarios show how the choice resolves in practice.
      </p>
      <div className='grid md:grid-cols-2 gap-4 my-6'>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>The trophy-lot micro-roaster</h4>
          <p className='text-sm text-gray-700'>Wants a once-a-year, story-driven release and can charge a premium retail price. Genuine, documented Yemeni coffee can justify its cost here as a limited drop, provided provenance is verified. Even then, many such roasters anchor the menu on Ethiopian naturals and run Yemen only as an occasional feature.</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>The Gulf-market importer</h4>
          <p className='text-sm text-gray-700'>Serving Saudi and wider Gulf demand for traditional, spice-forward coffee and qishr. Yemeni coffee carries cultural weight in this market, but Ethiopian Harar delivers a similar profile in volume. See our <Link href='/insights/saudi-arabia-specialty-coffee-market-guide' className='text-amber-700 hover:underline'>Saudi Arabia market guide</Link> and <Link href='/insights/importing-ethiopian-coffee-to-saudi-arabia' className='text-amber-700 hover:underline'>guide to importing to Saudi Arabia</Link>.</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>The volume specialty roaster</h4>
          <p className='text-sm text-gray-700'>Needs a repeatable Mocha-style natural for a core SKU at a workable cost. This is squarely Ethiopian Harar or natural Guji territory: the profile, the price, and the container availability all line up.</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>The EU-facing buyer</h4>
          <p className='text-sm text-gray-700'>Must satisfy EUDR. Ethiopia&apos;s traceability infrastructure makes compliant sourcing realistic; Yemen&apos;s fragmentation makes it a heavy lift. For most EU programs, Ethiopia is the practical choice.</p>
        </div>
      </div>
      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-6 border border-amber-200'>
        <h4 className='font-bold text-lg mb-3'>The Mocha-profile substitution map</h4>
        <ul className='text-sm space-y-2 list-disc ml-5'>
          <li><span className='font-bold'>Want Yemeni weight and dried-fruit body?</span> Source Ethiopian Harar natural.</li>
          <li><span className='font-bold'>Want intense fruit and fermented complexity?</span> Source natural Guji or Sidama.</li>
          <li><span className='font-bold'>Want spice and cocoa depth for a blend base?</span> Pair Harar natural with a washed Yirgacheffe for lift.</li>
          <li><span className='font-bold'>Genuinely need verified Yemeni origin?</span> Buy only with documented provenance and treat it as a limited release, not a volume line.</li>
        </ul>
      </div>
      <p className='my-4'>
        How the two origins compare to the other great coffee origins is worth knowing too. See our companion buyer comparisons of <Link href='/insights/ethiopian-coffee-vs-kenyan-coffee' className='text-amber-700 hover:underline'>Ethiopian vs Kenyan</Link>, <Link href='/insights/ethiopian-coffee-vs-colombian-coffee' className='text-amber-700 hover:underline'>Ethiopian vs Colombian</Link>, and <Link href='/insights/ethiopian-coffee-vs-brazilian-coffee' className='text-amber-700 hover:underline'>Ethiopian vs Brazilian</Link> coffee.
      </p>

      {/* FAQ */}
      <h2 id='faq' className='text-3xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineQuestionMarkCircle className='w-8 h-8 text-amber-600' />
        9. Frequently Asked Questions
      </h2>
      <section className='mb-12 bg-gray-50 rounded-xl p-8 border border-gray-200'>
        <div className='space-y-6'>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Is Yemeni coffee just Ethiopian coffee from across the sea?</h4>
            <p className='text-sm text-gray-600'>No, though they share ancestry. Arabica originated in Ethiopia, and Yemen cultivated it commercially, developing its own landraces (Udaini, Tuffahi, Dawairi) over centuries on dry highland terraces. The genetics are related but distinct, and Yemen&apos;s growing and drying conditions produce a heavier, more spice-driven natural cup than most Ethiopian lots.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Why does Yemeni coffee cost so much more than Ethiopian coffee?</h4>
            <p className='text-sm text-gray-600'>Scarcity and logistics, not just quality. Yemen produces roughly 20,000 tonnes a year against Ethiopia&apos;s 460,000-plus, on low-yield rainfed terraces, shipped through a conflict-affected supply chain. Specialty Yemeni green often runs $30 to $60 per pound; comparable Ethiopian naturals trade FOB at $3.50 to $7.00, delivering a similar profile at a fraction of the cost.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Which Ethiopian coffee tastes most like Yemeni coffee?</h4>
            <p className='text-sm text-gray-600'>Ethiopian Harar natural is the closest mainstream match, sharing the dried-blueberry, wine, and chocolate-spice register because it grows in dry eastern highlands and is dry-processed in a similar climate. Natural Guji and Sidama lots add fruit intensity. These give buyers the Mocha-style cup in container volume at specialty Ethiopian prices.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>How can I tell if &quot;Yemeni Mocha&quot; coffee is genuine?</h4>
            <p className='text-sm text-gray-600'>Demand exporter provenance, origin documentation, and chain-of-custody records, and be skeptical of Yemeni pricing without them. Because genuine Yemeni coffee is rare and pricey, some coffee sold as &quot;Yemen Mocha&quot; is relabeled Ethiopian Harar. If you only want the cup profile, buying Ethiopian Harar openly is the honest, cheaper route.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Can either origin meet EUDR traceability requirements?</h4>
            <p className='text-sm text-gray-600'>Ethiopia is far better positioned. Its direct specialty and cooperative channels are building geolocated, farm-level records suited to EUDR, while Yemen&apos;s fragmented terrace smallholdings and conflict conditions make compliant data collection difficult. EU-facing buyers will generally find Ethiopian sourcing the practical path to compliance.</p>
          </div>
        </div>
      </section>

      {/* CONCLUSION */}
      <h2 className='text-3xl font-extrabold mt-12 mb-4'>Conclusion: Heritage in Common, Trade Worlds Apart</h2>
      <p className='my-4'>
        Ethiopian coffee vs Yemeni coffee is a comparison between two origins that invented coffee culture together and now reach buyers on entirely different terms. Yemen offers a rare, concentrated, spice-driven cup wrapped in genuine history, but at luxury prices, in trace volumes, through a fragile supply chain, and with real labeling risk. Ethiopia offers the same Mocha-profile naturals through Harar and Guji, plus a clean washed spectrum, at commercial prices, in reliable volume, with documented grading and a maturing traceability story.
      </p>
      <p className='my-4'>
        For a once-a-year trophy release with verified provenance, Yemen has a place. For nearly everything else, including the Mocha cup itself, Ethiopia is the origin that lets a buyer build a real program. The smart move for most desks is to source the profile from Ethiopia and reserve genuine, documented Yemeni lots for the rare occasion that truly calls for them.
      </p>

      {/* CTA */}
      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Source the Mocha Profile Direct from Ethiopia</h4>
        <p className='my-2'>
          Ethio Coffee Import and Export PLC supplies traceable Harar and natural Guji lots that deliver the dried-fruit, cocoa, and spice character buyers chase in Yemeni coffee, at workable FOB Djibouti pricing and in container volume. Request pre-shipment samples and cupping data to evaluate the profile against your benchmark.
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

      {/* RELATED ARTICLES */}
      <div className='my-10 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4'>Related Articles</h3>
        <div className='grid md:grid-cols-2 gap-4'>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Origin Comparisons</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/ethiopian-coffee-vs-kenyan-coffee' className='text-amber-700 hover:underline'>Ethiopian Coffee vs Kenyan Coffee</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-vs-colombian-coffee' className='text-amber-700 hover:underline'>Ethiopian Coffee vs Colombian Coffee</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-vs-brazilian-coffee' className='text-amber-700 hover:underline'>Ethiopian Coffee vs Brazilian Coffee</Link></li>
              <li>&bull; <Link href='/insights/yirgacheffe-vs-sidamo-vs-guji-comparison' className='text-amber-700 hover:underline'>Yirgacheffe vs Sidamo vs Guji Compared</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Mocha-Profile Origins</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/harar-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Harar Coffee: Buyer&apos;s Sourcing Guide</Link></li>
              <li>&bull; <Link href='/insights/guji-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Guji Coffee: Buyer&apos;s Sourcing Guide</Link></li>
              <li>&bull; <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='text-amber-700 hover:underline'>Washed vs Natural Ethiopian Coffee</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-heirloom-coffee-varieties-landraces' className='text-amber-700 hover:underline'>Heirloom Ethiopian Coffee Varieties</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Pricing &amp; Market</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Pricing for Importers</Link></li>
              <li>&bull; <Link href='/insights/most-expensive-coffee-in-the-world' className='text-amber-700 hover:underline'>Most Expensive Coffee in the World</Link></li>
              <li>&bull; <Link href='/insights/saudi-arabia-specialty-coffee-market-guide' className='text-amber-700 hover:underline'>Saudi Arabia Coffee Market Guide</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Sourcing &amp; Compliance</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='text-amber-700 hover:underline'>How to Source Green Coffee from Ethiopia</Link></li>
              <li>&bull; <Link href='/insights/ecx-and-ethiopian-coffee-export' className='text-amber-700 hover:underline'>ECX and Ethiopian Coffee Export</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-traceability-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Traceability Guide</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> Written by Ethio Coffee Import and Export PLC, an origin-connected Ethiopian coffee exporter with three decades of sourcing relationships across Yirgacheffe, Sidamo, Guji, Harar, Limu, and Jimma. This comparison draws on FAO Yemen value-chain data, USDA and ECTA production figures, and our direct experience sourcing Ethiopian naturals. Production figures and prices fluctuate by season; contact us for current options.
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
