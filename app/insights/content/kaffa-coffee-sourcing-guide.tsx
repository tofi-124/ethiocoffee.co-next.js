import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import {
  HiOutlineMapPin,
  HiOutlineBeaker,
  HiOutlineScale,
  HiOutlineTruck,
  HiOutlineCurrencyDollar,
  HiOutlineLightBulb,
  HiOutlineClipboardDocumentList,
  HiOutlineGlobeAlt,
  HiOutlineShieldCheck,
  HiOutlineSparkles,
} from 'react-icons/hi2'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function KaffaCoffeeSourcingGuide({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      {/* H1 + H2 */}
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        Forest and Semi-Forest Lots, Gimbo and Bitta Supply, Grades, EUDR Traceability, and FOB Pricing from Southwest Ethiopia
      </h2>

      {/* HERO IMAGE */}
      <figure>
        <figcaption className='font-inconsolata my-2'>{title}</figcaption>
        <div className='w-full aspect-[5/3] overflow-hidden rounded-md bg-gray-200 flex items-center justify-center'>
          {/* TODO: Replace placeholder with actual hero image */}
          {/* Expected path: /images/insights/kaffa-coffee-sourcing-guide.webp */}
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Wild forest coffee growing under indigenous canopy in the Kaffa zone of southwest Ethiopia, source of specialty Kaffa coffee for export'
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
        <span className='ml-2'>Origin Guide / Kaffa Coffee / Forest Coffee / Sourcing Guide / Importer Resources</span>
      </div>

      {/* KEY TAKEAWAY */}
      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-8 border border-amber-200'>
        <h3 className='font-bold text-xl mb-3 flex items-center gap-2'>
          <HiOutlineLightBulb className='text-amber-400 flex-shrink-0' />Key Takeaway
        </h3>
        <p className='text-sm leading-relaxed'>
          Kaffa coffee comes from the forested highlands of Ethiopia&apos;s Kafa Zone, where more of the crop grows under natural forest canopy than in any other Ethiopian origin. That production structure defines what you buy: earthy, spiced, dried-fruit cups at the commercial end, and clean, sweet, berry-toned washed and natural lots scoring 85 to 87 from managed estates like Bitta at the specialty end. For buyers in 2026, Kaffa&apos;s value lies as much in its EU Deforestation Regulation story as in its cup. Forest and semi-forest lots need geolocation and legality proof rather than deforestation risk, which makes Kaffa a strategic origin for roasters building EUDR-compliant supply. This guide covers the woredas, production systems, grades, traceability, FOB pricing, and the sourcing path.
        </p>
      </div>

      {/* TABLE OF CONTENTS */}
      <div className='my-8 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <HiOutlineClipboardDocumentList className='text-amber-600' /> In This Guide
        </h3>
        <ol className='space-y-2 text-sm'>
          <li><a href='#what-is-kaffa' className='text-amber-700 hover:underline'>1. What Kaffa Coffee Is, and What It Is Not</a></li>
          <li><a href='#woredas' className='text-amber-700 hover:underline'>2. Kaffa Woredas: Gimbo, Gewata, Decha, and Bitta</a></li>
          <li><a href='#systems' className='text-amber-700 hover:underline'>3. How Forest and Semi-Forest Systems Shape the Cup</a></li>
          <li><a href='#flavor' className='text-amber-700 hover:underline'>4. Flavor Profiles by Process</a></li>
          <li><a href='#grading' className='text-amber-700 hover:underline'>5. Grades and Export Specifications</a></li>
          <li><a href='#eudr' className='text-amber-700 hover:underline'>6. Kaffa and the EU Deforestation Regulation</a></li>
          <li><a href='#pricing' className='text-amber-700 hover:underline'>7. FOB Pricing and Market Position</a></li>
          <li><a href='#sourcing' className='text-amber-700 hover:underline'>8. How to Source Kaffa Coffee</a></li>
          <li><a href='#faq' className='text-amber-700 hover:underline'>9. Frequently Asked Questions</a></li>
        </ol>
      </div>

      {/* INTRODUCTION */}
      <p className='text-lg leading-relaxed my-4'>
        Kaffa coffee sourcing guide: what importers, roasters, and green coffee traders need to evaluate, verify, and buy Kaffa lots from southwest Ethiopia. The Kafa Zone carries a reputation most origins would envy, since it lends its name to the drink and shelters the wild Arabica gene pool. But reputation does not fill a container. For a buyer, Kaffa is a specific supply proposition with its own woredas, grade mix, traceability challenges, and price band, and this guide treats it that way.
      </p>
      <p className='my-4'>
        Kaffa sits in Ethiopia&apos;s southwestern cloud forest, roughly 460 kilometers from Addis Ababa around the town of Bonga. For the broader story of how Arabica evolved here, see our <Link href='/insights/ethiopia-coffee-origin-birthplace' className='text-amber-700 hover:underline font-bold'>Ethiopian coffee origin guide</Link>. This article stays practical: it maps the growing areas, explains why the forest structure produces the cups it does, benchmarks grades and pricing, and shows how Kaffa&apos;s deforestation-free profile has become a commercial asset under the <Link href='/insights/eu-deforestation-regulation-ethiopian-coffee-compliance' className='text-amber-700 hover:underline font-bold'>EU Deforestation Regulation</Link>.
      </p>

      {/* SECTION 1: WHAT IS KAFFA */}
      <h3 id='what-is-kaffa' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineGlobeAlt className='w-8 h-8 text-amber-600' />
        1. What Kaffa Coffee Is, and What It Is Not
      </h3>
      <p className='my-4'>
        Kaffa (also spelled Kafa or Keffa) is an origin designation for coffee grown in the Kafa Zone of the South West Ethiopia Peoples&apos; Region. It is not a single farm, a single flavor, or a guaranteed specialty grade. It covers a spectrum from truly wild forest coffee, harvested by pickers moving through the understory, to managed estate lots grown under thinned canopy on defined blocks. Understanding where a given lot sits on that spectrum matters more for Kaffa than for almost any other Ethiopian origin.
      </p>
      <p className='my-4'>
        The Kafa Biosphere Reserve, designated by UNESCO in 2010, covers 760,144 hectares and holds close to 5,000 wild Arabica types, according to the <a href='https://www.unesco.org/en/mab/kafa' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>UNESCO Man and the Biosphere Programme</a>. This genetic depth is why plant scientists treat Kaffa as a seed bank rather than just a supply region. The <a href='https://www.worldbank.org/en/news/feature/2020/06/04/why-biodiversity-matters-to-your-daily-cup-of-coffee' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>World Bank</a> has documented the reserve as a living reservoir of disease- and climate-resistant Arabica lines. For a buyer, the practical read is that Kaffa lots are genetically diverse landrace populations, not uniform named varieties, which is exactly what gives its forest lots their unpredictable, layered character.
      </p>

      <div className='border-l-4 border-amber-500 pl-6 bg-gray-50 p-4 my-6'>
        <p className='text-sm text-gray-700'>
          <strong>From origin:</strong> On offer sheets, &quot;Kaffa,&quot; &quot;Kaffa Forest,&quot; and &quot;Bonga&quot; are used loosely and sometimes interchangeably by exporters. Bonga is the zonal capital and the aggregation and cupping hub, much as Nekemte anchors <Link href='/insights/nekemte-wellega-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Lekempti</Link>. A lot labeled &quot;Bonga&quot; is a Kaffa lot channeled through that town. Always confirm the woreda and, for specialty, the washing station or estate name, because the label alone does not tell you whether you are buying wild forest coffee or a managed-block lot.
        </p>
      </div>

      {/* SECTION 2: WOREDAS */}
      <h3 id='woredas' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineMapPin className='w-8 h-8 text-amber-600' />
        2. Kaffa Woredas: Gimbo, Gewata, Decha, and Bitta
      </h3>
      <p className='my-4'>
        Kaffa coffee reaches export markets primarily through four woredas (districts), each with a different balance of forest, semi-forest, and managed production. Targeting the woreda lets a buyer aim at a cup style and a traceability level rather than accepting undifferentiated zonal coffee.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Woreda / Area</th>
              <th className='p-3 text-left font-bold'>Altitude</th>
              <th className='p-3 text-left font-bold'>Dominant System</th>
              <th className='p-3 text-left font-bold'>Cup Character</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Gimbo (near Bonga)</td>
              <td className='p-3'>1,700 to 2,100 masl</td>
              <td className='p-3'>Semi-forest and washed stations</td>
              <td className='p-3'>Clean, sweet berry, dried fruit, spice finish; strongest washed lots</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Gewata</td>
              <td className='p-3'>1,600 to 2,000 masl</td>
              <td className='p-3'>Forest and semi-forest</td>
              <td className='p-3'>Earthy, herbal, wild fruit; classic foresty Kaffa profile</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Decha</td>
              <td className='p-3'>1,500 to 2,100 masl</td>
              <td className='p-3'>Forest, high wild-coffee share</td>
              <td className='p-3'>Rustic, complex, dried fruit and cocoa; most variable</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Bitta (Gesha Village-adjacent belt)</td>
              <td className='p-3'>1,900 to 2,050 masl</td>
              <td className='p-3'>Managed estate under forest shade</td>
              <td className='p-3'>Clean, structured, sweet; specialty micro-lots at 85 to 87</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        Gimbo, the woreda wrapping around Bonga, hosts most of Kaffa&apos;s organized washing capacity. The Matapa Michiti station near Gimbo, for example, processes JARC selections 74110 and 74112 both washed and natural on raised beds, and its Gimbo washed lots have earned specialty espresso scores in independent cupping reviews. Bitta stands at the opposite end of the spectrum: a managed estate spanning roughly 912 hectares at 1,900 to 2,050 meters under indigenous shade, running hundreds of drying beds and posting consistent 85 to 87 point lots. Between these poles, Gewata and Decha supply the earthy, wild forest coffee that gives the Kaffa name its character in the cup.
      </p>

      {/* SECTION 3: PRODUCTION SYSTEMS */}
      <h3 id='systems' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineSparkles className='w-8 h-8 text-amber-600' />
        3. How Forest and Semi-Forest Systems Shape the Cup
      </h3>
      <p className='my-4'>
        Production system is the single most useful lens for buying Kaffa. Nationally, Ethiopia&apos;s crop breaks down to roughly 50% garden, 35% semi-forest, 10% forest, and 5% plantation, according to Ethiopian Coffee and Tea Authority classifications. Kaffa inverts that national picture: forest and semi-forest coffee make up the majority of its output, which is why its cup profile and its sustainability story both differ from garden-dominated origins like Sidamo or Jimma.
      </p>

      <div className='grid md:grid-cols-2 gap-4 my-6'>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Forest Coffee</h4>
          <p className='text-sm text-gray-700'>Coffee grows wild or semi-wild under closed native canopy with no fertilizer, no pruning, and no irrigation. Pickers harvest from naturally occurring trees. Yields per hectare are low and cherry ripeness is uneven, which produces a rustic, layered, sometimes challenging cup. This is the most genetically diverse and the least controllable material you can buy in Kaffa.</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Semi-Forest Coffee</h4>
          <p className='text-sm text-gray-700'>Farmers thin the canopy, clear undergrowth, and manage naturally regenerating trees while adding minimal inputs. Ripeness and yield improve without losing the forest signature. Semi-forest lots deliver the best balance of the Kaffa character and cup consistency, and they anchor most of the region&apos;s exportable specialty and premium commercial volume.</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Garden Coffee</h4>
          <p className='text-sm text-gray-700'>Smallholder plots around homesteads, intercropped with enset and food crops. A smaller share of Kaffa output than in southern origins, but garden lots offer more predictable ripeness and form part of the general commercial grade pool channeled through Bonga.</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Managed Estate</h4>
          <p className='text-sm text-gray-700'>Defined blocks under thinned forest shade with planted selections, structured harvesting, and dedicated processing, as at Bitta. This is where Kaffa produces its cleanest, highest-scoring, fully traceable lots. Volumes are limited and usually require advance reservation.</p>
        </div>
      </div>

      <div className='bg-green-50 border border-green-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3'>Why Kaffa Forest Lots Are Often Organic by Default</h4>
        <p className='text-sm text-gray-700'>
          Forest and semi-forest coffee receives no synthetic fertilizer or pesticide, which means a large share of Kaffa output is effectively organic before any certificate exists. That lowers the barrier to <Link href='/insights/ethiopian-coffee-certifications-organic-fairtrade-rainforest' className='text-amber-700 hover:underline'>organic and forest-linked certification</Link>, and unions like the Kaffa Forest Coffee Farmers Cooperative Union aggregate certified volume. For buyers, the practical gain is certified organic Kaffa at commercial-adjacent pricing, not the premium a garden origin would charge to convert.
        </p>
      </div>

      {/* SECTION 4: FLAVOR */}
      <h3 id='flavor' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineBeaker className='w-8 h-8 text-amber-600' />
        4. Flavor Profiles by Process
      </h3>
      <p className='my-4'>
        Kaffa coffee is best known for an earthy, spiced, dried-fruit character with cocoa depth, a profile distinct from the citrus-floral brightness of Yirgacheffe or the stone-fruit intensity of Guji. Process choice then pushes that base in two directions: natural amplifies wild fruit and sweetness, while washed clarifies the cup into cleaner berry, black tea, and floral notes. Score ranges below reflect commercial-to-specialty Kaffa; top estate micro-lots sit above them.
      </p>

      <div className='grid md:grid-cols-2 gap-4 my-6'>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Natural Kaffa (Dominant)</h4>
          <ul className='text-sm text-gray-700 space-y-1'>
            <li><strong>Aroma:</strong> Dried fruit, cocoa, forest spice</li>
            <li><strong>Acidity:</strong> Low to medium, rounded</li>
            <li><strong>Body:</strong> Medium to full</li>
            <li><strong>Flavor:</strong> Wild berry, dried fig, cocoa, warm spice</li>
            <li><strong>Finish:</strong> Long, sweet, lightly savory</li>
            <li><strong>SCA Score:</strong> 80 to 86</li>
            <li><strong>Best for:</strong> Distinctive single origins, blend depth, cold brew</li>
          </ul>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Washed Kaffa (Growing)</h4>
          <ul className='text-sm text-gray-700 space-y-1'>
            <li><strong>Aroma:</strong> Floral, sweet berry, black tea</li>
            <li><strong>Acidity:</strong> Medium, bright but soft</li>
            <li><strong>Body:</strong> Medium, silky</li>
            <li><strong>Flavor:</strong> Red berry, bergamot, honey, mild spice</li>
            <li><strong>Finish:</strong> Clean, sweet, spiced tail</li>
            <li><strong>SCA Score:</strong> 82 to 87</li>
            <li><strong>Best for:</strong> Filter single origins, premium washed programs</li>
          </ul>
        </div>
      </div>

      <div className='border-l-4 border-amber-500 pl-6 bg-gray-50 p-4 my-6'>
        <p className='text-sm text-gray-700'>
          <strong>Buyer&apos;s tip:</strong> Kaffa naturals reward roasters who want a recognizably wild, spiced Ethiopian cup that reads differently from the standard fruit-bomb natural. Cup them side by side with a <Link href='/insights/guji-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Guji</Link> natural and the Kaffa will show more savory depth and less candied fruit. For a clean, floral washed lot at a lower entry price than <Link href='/insights/yirgacheffe-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Yirgacheffe</Link>, target Gimbo washed.
        </p>
      </div>

      {/* SECTION 5: GRADING */}
      <h3 id='grading' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineScale className='w-8 h-8 text-amber-600' />
        5. Grades and Export Specifications
      </h3>
      <p className='my-4'>
        Kaffa follows the national <Link href='/coffee-grading-ethiopia' className='text-amber-700 hover:underline font-bold'>Ethiopian coffee grading system</Link>, which combines physical defect evaluation with cup quality across grades 1 (highest) to 9. Most export Kaffa falls in Grades 2 through 5, with grade assigned separately for washed and natural. The forest and wild share of the crop means defect counts and screen uniformity run wider than in garden origins, so physical inspection matters as much as the cup on Kaffa lots.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Grade</th>
              <th className='p-3 text-left font-bold'>Processing</th>
              <th className='p-3 text-left font-bold'>Defects / 300g</th>
              <th className='p-3 text-left font-bold'>Cup Score</th>
              <th className='p-3 text-left font-bold'>Availability</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Grade 1 to 2</td>
              <td className='p-3'>Washed / Estate Natural</td>
              <td className='p-3'>0 to 12</td>
              <td className='p-3'>85 to 87+</td>
              <td className='p-3'>Estate micro-lots (Bitta); advance reservation</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Grade 3</td>
              <td className='p-3'>Washed & Natural</td>
              <td className='p-3'>13 to 25</td>
              <td className='p-3'>82 to 85</td>
              <td className='p-3'>Standard specialty Kaffa; semi-forest lots</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Grade 4</td>
              <td className='p-3'>Washed & Natural</td>
              <td className='p-3'>26 to 45</td>
              <td className='p-3'>80 to 82</td>
              <td className='p-3'>Most common export grade; strong value</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Grade 5</td>
              <td className='p-3'>Natural</td>
              <td className='p-3'>46 to 100</td>
              <td className='p-3'>78 to 80</td>
              <td className='p-3'>Commercial forest lots; blend and volume stock</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Specification</th>
              <th className='p-3 text-left font-bold'>Standard</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Moisture Content</td>
              <td className='p-3'>10.0% to 12.0% (target 11.0%)</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Screen Size</td>
              <td className='p-3'>14 to 16 (forest lots run less uniform)</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Packaging</td>
              <td className='p-3'>60 kg jute; GrainPro-lined for specialty lots</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Certifications</td>
              <td className='p-3'>Organic (USDA/EU), Fair Trade, forest-linked (station dependent)</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Harvest</td>
              <td className='p-3'>November to January (forest picking runs later)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='bg-green-50 border border-green-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3'>Inspect Forest Lots Harder Than You Would a Garden Origin</h4>
        <p className='text-sm text-gray-700'>
          Because forest coffee ripens unevenly, expect wider defect variation between bags of the same Kaffa lot. Request a pre-shipment sample, cup it under <Link href='/insights/how-to-cup-evaluate-ethiopian-coffee-samples' className='text-amber-700 hover:underline'>SCA protocol</Link>, and check <Link href='/insights/green-coffee-moisture-content-water-activity-guide' className='text-amber-700 hover:underline'>moisture and water activity</Link> plus physical defect count per 300g. On natural forest Grade 4 and 5, prioritize consistency and clean drying over chasing the highest cup note in a single cup.
        </p>
      </div>

      {/* SECTION 6: EUDR */}
      <h3 id='eudr' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineShieldCheck className='w-8 h-8 text-amber-600' />
        6. Kaffa and the EU Deforestation Regulation
      </h3>
      <p className='my-4'>
        Kaffa presents a paradox under the EU Deforestation Regulation (EUDR): the origin with the most forest coffee is also one of the better-positioned for deforestation-free sourcing. EUDR requires that coffee placed on the EU market be geolocated to its plot of production and proven free of deforestation after December 31, 2020. Forest and semi-forest coffee grown under standing native canopy is, by definition, not driving forest clearance, which is the opposite of the compliance risk buyers worry about with newly cleared farmland.
      </p>
      <p className='my-4'>
        The catch is documentation, not land-use. Wild and forest lots aggregated from many pickers across a protected reserve are harder to geolocate to discrete plots than a mapped estate block. This is where Kaffa&apos;s supply structure splits sharply for EUDR purposes, and where the woreda and system you choose directly determine your compliance workload.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Kaffa Supply Type</th>
              <th className='p-3 text-left font-bold'>Deforestation Risk</th>
              <th className='p-3 text-left font-bold'>Geolocation Difficulty</th>
              <th className='p-3 text-left font-bold'>EUDR Read for Buyers</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Managed estate (Bitta)</td>
              <td className='p-3'>Very low</td>
              <td className='p-3'>Low; mapped blocks</td>
              <td className='p-3'>Strongest EUDR fit; plot polygons available</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Semi-forest cooperative</td>
              <td className='p-3'>Low</td>
              <td className='p-3'>Moderate; smallholder plot mapping needed</td>
              <td className='p-3'>Viable with union-level geolocation programs</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Wild forest lots</td>
              <td className='p-3'>Very low (protected canopy)</td>
              <td className='p-3'>High; diffuse harvest area</td>
              <td className='p-3'>Requires collection-area documentation and legality proof</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        For a roaster with EU obligations, the practical strategy is to match ambition to supply type: buy mapped estate lots when you need airtight plot-level polygons, and work with cooperative unions that have invested in smallholder geolocation for semi-forest volume. Our <Link href='/insights/eu-deforestation-regulation-ethiopian-coffee-compliance' className='text-amber-700 hover:underline font-bold'>EUDR compliance guide for Ethiopian coffee</Link> covers the due-diligence statement, geolocation data formats, and the current implementation timeline in detail. The point specific to Kaffa is that its forest heritage is a compliance advantage on land-use and a documentation project on traceability, and buyers should price both sides in.
      </p>

      {/* BUYER PERSONA / CASE STUDY */}
      <div className='bg-blue-50 border border-blue-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3'>Buyer Scenario: A UK Roaster Building an EUDR-Ready Forest Line</h4>
        <p className='text-sm text-gray-700'>
          Consider a mid-size UK specialty roaster buying two containers a year who wants a distinctive Ethiopian single origin that also tells a credible sustainability story to its wholesale cafe accounts. Yirgacheffe washed is on every competitor&apos;s menu, and garden-origin EUDR paperwork is a moving target. The roaster splits a Kaffa program: one mapped Bitta-style estate micro-lot at 86 points for the flagship washed single origin with plot polygons attached for EUDR, and one semi-forest natural Grade 3 from a Gimbo-area cooperative for a value forest offering carrying organic certification. The estate lot anchors the brand story and compliance file; the semi-forest lot delivers margin and volume. Both sit under standing forest canopy, giving the roaster a deforestation-free narrative competitors sourcing from cleared farmland cannot match.
        </p>
      </div>

      {/* SECTION 7: PRICING */}
      <h3 id='pricing' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineCurrencyDollar className='w-8 h-8 text-amber-600' />
        7. FOB Pricing and Market Position
      </h3>
      <p className='my-4'>
        Kaffa occupies a wide price band because it spans commercial forest lots and specialty estate micro-lots. Standard Kaffa trades above Jimma commercial coffee but below premium Yirgacheffe and Guji, while top Bitta-tier estate lots reach into specialty pricing on their own merit. Indicative FOB Djibouti ranges for the 2025/26 crop follow; actual prices move with grade, lot size, certification, and the C market. For pricing mechanics, see our <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='text-amber-700 hover:underline font-bold'>Ethiopian coffee FOB pricing guide</Link>.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Grade / Process</th>
              <th className='p-3 text-left font-bold'>FOB Djibouti (USD/kg)</th>
              <th className='p-3 text-left font-bold'>FOB Djibouti (USD/lb)</th>
              <th className='p-3 text-left font-bold'>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Estate Micro-lot (G1-2)</td>
              <td className='p-3'>$6.50 to $9.00+</td>
              <td className='p-3'>$2.95 to $4.08+</td>
              <td className='p-3'>Bitta-tier; 85 to 87; advance reservation</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Washed Grade 3</td>
              <td className='p-3'>$4.40 to $6.00</td>
              <td className='p-3'>$2.00 to $2.72</td>
              <td className='p-3'>Gimbo washed; clean floral berry</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Natural Grade 3</td>
              <td className='p-3'>$4.00 to $5.60</td>
              <td className='p-3'>$1.81 to $2.54</td>
              <td className='p-3'>Best semi-forest naturals; fruity, spiced</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Natural Grade 4</td>
              <td className='p-3'>$3.30 to $4.30</td>
              <td className='p-3'>$1.50 to $1.95</td>
              <td className='p-3'>Volume forest grade; blend depth</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Natural Grade 5</td>
              <td className='p-3'>$2.70 to $3.50</td>
              <td className='p-3'>$1.22 to $1.59</td>
              <td className='p-3'>Commercial forest; blending stock</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='text-xs text-gray-500 my-2'>
        Prices are 2025/26 crop-year estimates based on ECX-linked benchmarks and exporter quotations. Certified organic and forest-linked lots typically carry a premium of $0.20 to $0.50 per kg over the ranges shown.
      </p>

      <div className='border-l-4 border-amber-500 pl-6 bg-gray-50 p-4 my-6'>
        <p className='text-sm text-gray-700'>
          <strong>Market read:</strong> Kaffa&apos;s value case for 2026 is not lowest price; Jimma wins on that. It is the combination of a differentiated forest cup, frequent default-organic status, and a deforestation-free EUDR story in one origin. To convert these FOB numbers into a warehouse-door figure, use our <Link href='/insights/ethiopian-coffee-landed-cost-guide' className='text-amber-700 hover:underline'>landed cost guide</Link>.
        </p>
      </div>

      {/* SECTION 8: SOURCING */}
      <h3 id='sourcing' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineTruck className='w-8 h-8 text-amber-600' />
        8. How to Source Kaffa Coffee
      </h3>
      <p className='my-4'>
        Sourcing Kaffa follows the standard Ethiopian export path, detailed in our <Link href='/insights/ethiopian-coffee-export-process-buyers-guide' className='text-amber-700 hover:underline font-bold'>export process guide</Link>, with Kaffa-specific steps around production system and traceability. The workflow below is written for a first Kaffa order.
      </p>

      <div className='bg-gray-50 border border-gray-200 rounded-lg p-6 my-6'>
        <ol className='space-y-4 text-sm'>
          <li>
            <strong>1. Fix system, woreda, and traceability level first</strong>
            <p className='text-gray-700 mt-1'>Before grade or price, decide whether you want a mapped estate lot, a semi-forest cooperative lot, or commercial forest volume. This choice sets your cup style, your price band, and your EUDR documentation load. Specify Gimbo for washed, Gewata or Decha for foresty naturals, Bitta-tier for specialty.</p>
          </li>
          <li>
            <strong>2. Request type and spot samples</strong>
            <p className='text-gray-700 mt-1'>Ask for 200g to 500g green samples of current-crop Kaffa. Request type samples (grade-representative) and, for specialty, spot samples of the specific estate or station lot you would contract. For forest lots, ask how many bags the sample represents, since consistency across the lot is the main risk.</p>
          </li>
          <li>
            <strong>3. Cup, and inspect physically</strong>
            <p className='text-gray-700 mt-1'>Evaluate under <Link href='/insights/how-to-cup-evaluate-ethiopian-coffee-samples' className='text-amber-700 hover:underline'>SCA protocol</Link> for the spiced, dried-fruit Kaffa signature, and score defect count, screen uniformity, and moisture. Forest lots need a harder physical look than garden origins.</p>
          </li>
          <li>
            <strong>4. Confirm certification and EUDR data</strong>
            <p className='text-gray-700 mt-1'>If you need organic or forest certification, verify the certificate covers the specific lot, not just the union. For EU shipments, request geolocation data appropriate to the supply type and confirm it matches EUDR formats before contracting.</p>
          </li>
          <li>
            <strong>5. Contract and pre-shipment approval</strong>
            <p className='text-gray-700 mt-1'>Agree price, Incoterms (FOB Djibouti or FCA Addis), and <Link href='/insights/ethiopian-coffee-contracts-payment-terms-guide' className='text-amber-700 hover:underline'>payment terms</Link>. Approve the pre-shipment sample before <Link href='/insights/ethiopian-coffee-dry-milling-export-guide' className='text-amber-700 hover:underline'>dry milling and export prep</Link> begins; it must match your contracted grade, moisture, and cup.</p>
          </li>
          <li>
            <strong>6. Ship and plan around forest timing</strong>
            <p className='text-gray-700 mt-1'>Kaffa moves overland to Djibouti, then by sea to destination. Note that forest picking runs later than garden harvest, so fresh Kaffa export windows can lag other origins by weeks; build that into contract dates. Request <Link href='/insights/green-coffee-packaging-bag-types-guide' className='text-amber-700 hover:underline'>GrainPro liners</Link> for specialty lots.</p>
          </li>
        </ol>
      </div>

      {/* CTA BLOCK */}
      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Source Kaffa Forest Coffee Direct from Southwest Ethiopia</h4>
        <p className='my-2'>Ethio Coffee Import and Export PLC sources washed and natural Kaffa lots, including semi-forest and certified organic volume, through our heritage network of cooperatives and washing stations around Bonga. Request samples, current offer sheets, or EUDR-ready traceability documentation for your program.</p>
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
            <h4 className='font-bold text-gray-800 mb-2'>What does Kaffa coffee taste like?</h4>
            <p className='text-sm text-gray-600'>Kaffa coffee is earthy and spiced with dried fruit and cocoa depth. Naturals show wild berry, dried fig, and warm spice with a long sweet finish, while washed lots are cleaner and more floral with red berry, bergamot, and black tea notes. It reads as more savory and rustic than the bright citrus-floral profile of southern Ethiopian origins.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Is Kaffa forest coffee good for EUDR compliance?</h4>
            <p className='text-sm text-gray-600'>Yes on land-use, with a caveat on paperwork. Forest and semi-forest Kaffa grows under standing native canopy, so it does not drive deforestation, which is the core EUDR concern. The challenge is geolocation: mapped estate lots supply plot polygons easily, while diffuse wild-harvest lots need collection-area documentation. Match the supply type to your traceability needs.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>What is the difference between Kaffa and Bonga coffee?</h4>
            <p className='text-sm text-gray-600'>They refer to the same origin. Kaffa is the zone; Bonga is its capital town and the aggregation and cupping hub. A lot labeled &quot;Bonga&quot; is Kaffa coffee channeled through that town, much as Lekempti coffee is named for Nekemte. For traceability, confirm the woreda and washing station rather than relying on the town name.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Can I buy specialty-grade Kaffa coffee?</h4>
            <p className='text-sm text-gray-600'>Yes. Managed estates such as Bitta produce washed and natural micro-lots scoring 85 to 87, and semi-forest Grade 3 lots from the Gimbo area cup 82 to 85. Specialty Kaffa volumes are limited and usually require advance reservation, so contact exporters early in the crop year to secure allocation before it sells out.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Is Kaffa coffee available certified organic?</h4>
            <p className='text-sm text-gray-600'>Frequently, and often at a modest premium. Because forest and semi-forest lots use no synthetic inputs, much of Kaffa&apos;s output is effectively organic before certification, and cooperative unions aggregate USDA and EU Organic volume. Always confirm the certificate covers the specific lot you are contracting, not just the union as a whole.</p>
          </div>
        </div>
      </section>

      {/* RELATED ARTICLES */}
      <div className='my-10 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4'>Related Articles</h3>
        <div className='grid md:grid-cols-2 gap-4'>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Origin Sourcing Guides</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/jimma-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Jimma Coffee: Buyer&apos;s Sourcing Guide</Link></li>
              <li>&bull; <Link href='/insights/limu-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Limu Coffee: Buyer&apos;s Sourcing Guide</Link></li>
              <li>&bull; <Link href='/insights/nekemte-wellega-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Nekemte / Lekempti Sourcing Guide</Link></li>
              <li>&bull; <Link href='/insights/yirgacheffe-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Yirgacheffe Coffee: Buyer&apos;s Sourcing Guide</Link></li>
              <li>&bull; <Link href='/insights/guji-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Guji Coffee: Buyer&apos;s Sourcing Guide</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Sustainability & Compliance</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/eu-deforestation-regulation-ethiopian-coffee-compliance' className='text-amber-700 hover:underline'>EUDR Compliance for Ethiopian Coffee</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-certifications-organic-fairtrade-rainforest' className='text-amber-700 hover:underline'>Organic & Fair Trade Certifications</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-traceability-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Traceability Guide</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Quality & Processing</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/washed-vs-natural-ethiopian-coffee-processing' className='text-amber-700 hover:underline'>Washed vs Natural Ethiopian Coffee</Link></li>
              <li>&bull; <Link href='/insights/how-to-cup-evaluate-ethiopian-coffee-samples' className='text-amber-700 hover:underline'>How to Cup Ethiopian Coffee Samples</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-heirloom-coffee-varieties-landraces' className='text-amber-700 hover:underline'>Ethiopian Heirloom Varieties & Landraces</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Pricing & Trade</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee FOB Pricing Guide</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-landed-cost-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Landed Cost Guide</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-export-process-buyers-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Export Process</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> Written by Ethio Coffee Import and Export PLC, an origin-connected Ethiopian coffee exporter with three decades of sourcing relationships across Yirgacheffe, Sidamo, Guji, Harar, Limu, Jimma, and Kaffa.
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
