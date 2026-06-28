import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import {
  HiOutlineLightBulb,
  HiOutlineClipboardDocumentList,
  HiOutlineBuildingOffice2,
  HiOutlineScale,
  HiOutlineMapPin,
  HiOutlineDocumentText,
  HiOutlineArrowPath,
  HiOutlineShieldCheck,
  HiOutlineCheckCircle,
  HiOutlineQuestionMarkCircle,
} from 'react-icons/hi2'

type InsightContentProps = { title: string; date: string; large_image_url: string }

export default function EthiopianCoffeeHorecaCafeChainBuyersGuide({
  title,
  date,
  large_image_url,
}: InsightContentProps) {
  return (
    <>
      {/* H1 + H2 */}
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        How hotel groups, restaurant chains, and multi-location cafés source, specify, and manage Ethiopian coffee at scale
      </h2>

      {/* Hero image */}
      <figure>
        <figcaption className='font-inconsolata my-2'>
          Ethiopian coffee procurement for café chains and hotel groups requires different sourcing logic than individual specialty roaster buying.
        </figcaption>
        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Ethiopian coffee procurement for café chains and HoReCa buyers'
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
        <span className='ml-2'>Sourcing Guide / HoReCa Coffee Procurement / Café Chain Buying / B2B Intelligence</span>
      </div>

      {/* Further Reading */}
      <div className='my-4 text-sm text-gray-700'>
        <p className='font-semibold mb-1'>Further reading:</p>
        <ul className='list-disc ml-5 space-y-1'>
          <li>
            <a href='https://www.ico.org' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>International Coffee Organization (ICO)</a> - global coffee trade statistics, market reports, and composite indicator prices.
          </li>
          <li>
            <a href='https://www.thecoffeeguide.org' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>The Coffee Guide (ITC)</a> - International Trade Centre reference for procurement frameworks, contracts, and food service sourcing.
          </li>
          <li>
            <a href='https://www.sca.coffee' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>Specialty Coffee Association (SCA)</a> - cupping protocols, green coffee classification standards, and barista training resources.
          </li>
        </ul>
      </div>

      {/* Key Takeaway */}
      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-8 border border-amber-200'>
        <h3 className='font-bold text-xl mb-3 flex items-center gap-2'>
          <HiOutlineLightBulb className='text-amber-400 flex-shrink-0' /> Key Takeaway
        </h3>
        <p className='text-sm leading-relaxed'>
          HoReCa buyers need consistent supply, clear specification depth, and Ethiopian lots that perform across multiple coffee applications. Regions like Jimma and Limu anchor espresso blends with reliable body and cost-effective yield, while Yirgacheffe and Guji provide premium single-origin rotation slots. Pre-booking 60 to 70 percent of seasonal requirements before harvest, requesting pre-shipment samples for every lot, and establishing a written specification template are the three practices that separate successful café chain Ethiopian programs from those prone to supply disruption.
        </p>
      </div>

      {/* Table of Contents */}
      <div className='my-8 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <HiOutlineClipboardDocumentList className='text-amber-600' /> In This Guide
        </h3>
        <ol className='space-y-2 text-sm'>
          <li><a href='#why-ethiopian-horeca' className='text-amber-700 hover:underline'>1. Why Ethiopian Coffee Fits HoReCa Programs</a></li>
          <li><a href='#horeca-vs-roaster' className='text-amber-700 hover:underline'>2. How HoReCa Buying Differs from Specialty Roaster Buying</a></li>
          <li><a href='#origins-by-application' className='text-amber-700 hover:underline'>3. Ethiopian Origins by HoReCa Application</a></li>
          <li><a href='#specification-template' className='text-amber-700 hover:underline'>4. Writing an Ethiopian Coffee Specification for Institutional Buyers</a></li>
          <li><a href='#supply-reliability' className='text-amber-700 hover:underline'>5. Supply Reliability: Managing Seasonality at Scale</a></li>
          <li><a href='#certifications' className='text-amber-700 hover:underline'>6. Certifications and Sustainability for Hotel and Restaurant Chains</a></li>
          <li><a href='#supplier-evaluation' className='text-amber-700 hover:underline'>7. Evaluating an Ethiopian Coffee Supplier for a HoReCa Program</a></li>
          <li><a href='#faq' className='text-amber-700 hover:underline'>8. FAQ</a></li>
        </ol>
      </div>

      {/* Introduction */}
      <p className='text-lg leading-relaxed my-4'>
        Hotels, restaurant chains, and café groups now face the same consumer expectation that specialty coffee shops have navigated for years: guests want to know where their coffee comes from. A breakfast menu that lists "Ethiopia Yirgacheffe" commands more attention than one that says "house blend." An airport lounge featuring a rotating East African single origin communicates quality without requiring barista explanation. For procurement managers and F&amp;B directors sourcing at volume, Ethiopian green coffee is one of the most commercially compelling origin choices available.
      </p>
      <p className='my-4'>
        But HoReCa procurement operates under different constraints than specialty roaster buying. This guide covers the origin selection logic, specification frameworks, supply reliability strategies, and supplier evaluation criteria that institutional buyers need to build and maintain an Ethiopian coffee program at scale.
      </p>

      {/* Section 1: Why Ethiopian Coffee Fits HoReCa */}
      <h3 id='why-ethiopian-horeca' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineBuildingOffice2 className='w-8 h-8 text-amber-600' />
        1. Why Ethiopian Coffee Fits HoReCa Programs
      </h3>
      <p className='my-4'>
        HoReCa operators consume approximately 60 percent of the world's roasted coffee by volume, according to industry estimates from the International Coffee Organization. Within that segment, the premium tier, specifically hotels with 4-star-plus ratings, restaurant groups with branded concepts, and specialty café chains, has shifted measurably toward named origins and process-differentiated lots over the past five years.
      </p>
      <p className='my-4'>
        Ethiopian coffee serves this shift well for four reasons:
      </p>
      <div className='grid md:grid-cols-2 gap-4 my-6'>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Name Recognition</h4>
          <p className='text-sm text-gray-700'>Yirgacheffe and Sidamo are two of the most recognizable coffee origin names among specialty consumers globally. An F&amp;B director at a hotel group can feature either on a breakfast menu card and rely on guest recognition rather than extensive origin education. No other African origin matches this consumer name awareness at scale.</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Profile Diversity Across Applications</h4>
          <p className='text-sm text-gray-700'>Ethiopia supplies coffees suited to every service format within a hotel or restaurant: washed G1 for premium filter and pour-over, natural G2 for espresso-based drinks, Grade 3 commercial washed for banquet volume, and high-body natural lots for cold brew programs. Few origins offer the same range within a single supply relationship.</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Price-to-Quality at Volume</h4>
          <p className='text-sm text-gray-700'>Grade 2 washed Ethiopian from Jimma or Limu typically trades at $3.80 to $4.60 per kilogram FOB Djibouti, depending on season and C-market position. That price bracket delivers consistent 82 to 84 SCA cup scores, comparable to Colombian supremo or Guatemalan SHB but with stronger consumer narrative value per dollar spent.</p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>Traceable Supply Chain for ESG</h4>
          <p className='text-sm text-gray-700'>Ethiopian cooperatives and washing stations issue traceable lot documentation to washing station level. Hotel groups and restaurant chains with sustainability reporting requirements can integrate Ethiopian cooperative data, including number of smallholder farmers served and fair trade premium distribution, into their annual CSR reports without additional data collection infrastructure.</p>
        </div>
      </div>

      {/* Section 2: HoReCa vs Specialty Roaster Buying */}
      <h3 id='horeca-vs-roaster' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineScale className='w-8 h-8 text-amber-600' />
        2. How HoReCa Buying Differs from Specialty Roaster Buying
      </h3>
      <p className='my-4'>
        Most Ethiopian coffee sourcing guides are written for specialty roasters buying 1 to 3 full containers (18 to 20 metric tons) per season. HoReCa procurement operates at fundamentally different scale, with different lead times, consistency requirements, and documentation expectations. Understanding these differences is the starting point for building an Ethiopian coffee program that works operationally.
      </p>
      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Factor</th>
              <th className='p-3 text-left font-bold'>Specialty Roaster</th>
              <th className='p-3 text-left font-bold'>HoReCa Buyer</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Annual green coffee volume</td>
              <td className='p-3'>5 to 60 MT</td>
              <td className='p-3'>30 to 500+ MT</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Sourcing lead time</td>
              <td className='p-3'>2 to 4 months</td>
              <td className='p-3'>6 to 9 months (forward allocation)</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Lot size per order</td>
              <td className='p-3'>1 to 3 FCL (18 to 60 MT)</td>
              <td className='p-3'>5 to 50+ FCL per season</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Specification depth</td>
              <td className='p-3'>SCA score + flavor notes</td>
              <td className='p-3'>Grade + defects + moisture + sensory range + certifications</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Certification priority</td>
              <td className='p-3'>Often optional</td>
              <td className='p-3'>Frequently required (organic, fair trade, Rainforest Alliance)</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Consistency requirement</td>
              <td className='p-3'>Lot-specific variation acceptable</td>
              <td className='p-3'>Same sensory profile across 50 to 200 locations</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Payment terms</td>
              <td className='p-3'>30 to 60 days or advance</td>
              <td className='p-3'>Net 60 to 90, irrevocable LC, or open account</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Vendor qualification</td>
              <td className='p-3'>Informal or direct outreach</td>
              <td className='p-3'>Approved supplier list, food safety audit, insurance certificates</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className='my-4'>
        The consistency requirement is the factor that most shapes HoReCa Ethiopian sourcing strategy. A specialty roaster can celebrate lot-to-lot variation as a feature. A café chain with 80 locations cannot: the Yirgacheffe on the menu board in London must taste close to the Yirgacheffe in Dubai. This means institutional buyers need to work with exporters who can maintain profile consistency across multiple containers from the same washing station cluster, and who can provide pre-shipment samples before each container is released.
      </p>

      {/* Section 3: Origins by Application */}
      <h3 id='origins-by-application' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineMapPin className='w-8 h-8 text-amber-600' />
        3. Ethiopian Origins by HoReCa Application
      </h3>
      <p className='my-4'>
        Not every Ethiopian origin is equally suited to every HoReCa application. The table below maps Ethiopian regions to their most effective institutional use cases, based on profile characteristics, supply volume, and price bracket.
      </p>
      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>HoReCa Application</th>
              <th className='p-3 text-left font-bold'>Recommended Origin</th>
              <th className='p-3 text-left font-bold'>Grade / Process</th>
              <th className='p-3 text-left font-bold'>Why It Works</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>House espresso anchor</td>
              <td className='p-3'><Link href='/ethiopian-coffee-jimma' className='text-amber-700 hover:underline'>Jimma</Link>, <Link href='/ethiopian-coffee-limu' className='text-amber-700 hover:underline'>Limu</Link></td>
              <td className='p-3'>G2 to G3, Washed</td>
              <td className='p-3'>Consistent body, low-to-medium acidity, reliable volume availability, best FOB cost-per-cup ratio in Ethiopian range</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Featured single origin (menu card)</td>
              <td className='p-3'><Link href='/ethiopian-coffee-yirgacheffe' className='text-amber-700 hover:underline'>Yirgacheffe</Link></td>
              <td className='p-3'>G1, Washed</td>
              <td className='p-3'>Strongest consumer name recognition, floral and citrus character, distinctive enough to justify menu prominence at moderate premium</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Premium seasonal rotation</td>
              <td className='p-3'><Link href='/ethiopian-coffee-sidamo' className='text-amber-700 hover:underline'>Sidamo</Link>, <Link href='/ethiopian-coffee-guji' className='text-amber-700 hover:underline'>Guji</Link></td>
              <td className='p-3'>G1, Natural</td>
              <td className='p-3'>Fruit-forward dessert notes drive high guest engagement; natural G1 commands premium positioning and supports seasonal menu marketing</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Cold brew and iced coffee program</td>
              <td className='p-3'><Link href='/insights/ethiopian-coffee-cold-brew-rtd-sourcing-guide' className='text-amber-700 hover:underline'>Guji, Sidamo</Link></td>
              <td className='p-3'>G2, Natural</td>
              <td className='p-3'>Heavy body and berry intensity survive cold extraction and dilution to RTD strength; G2 natural delivers the best extraction yield per kilogram for cold brew concentrate</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>High-volume breakfast service</td>
              <td className='p-3'>Jimma, <Link href='/ethiopian-coffee-harar' className='text-amber-700 hover:underline'>Harar</Link></td>
              <td className='p-3'>G3, Washed or Natural</td>
              <td className='p-3'>Commercial-grade lots at 80 to 82 SCA cup score support high throughput without the cost premium of specialty lots; Harar natural adds distinctive chocolate-wine notes even at G3</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Specialty filter bar or pour-over station</td>
              <td className='p-3'>Yirgacheffe, <Link href='/insights/bombe-sidama-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Bombe Sidama</Link></td>
              <td className='p-3'>G1, Washed</td>
              <td className='p-3'>Tea-like clarity and stone fruit complexity justify the premium pour-over price point; both origins produce consistent 86+ SCA lots for discerning guests</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className='my-4'>
        For most multi-location café chains, the practical starting point is a two-origin program: a Jimma or Limu G2 washed lot as the house espresso foundation (blended or single origin depending on roaster specification), and a Yirgacheffe G1 as the named premium option. This structure balances menu clarity, supply reliability, and cost management while still leveraging Ethiopian origin storytelling.
      </p>

      {/* Section 4: Specification Template */}
      <h3 id='specification-template' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineDocumentText className='w-8 h-8 text-amber-600' />
        4. Writing an Ethiopian Coffee Specification for Institutional Buyers
      </h3>
      <p className='my-4'>
        A specification brief protects both parties. For the buyer, it establishes measurable acceptance criteria for pre-shipment sample approval. For the supplier, it eliminates ambiguity about what will constitute a contract-compliant lot. HoReCa buyers who skip written specifications and source on general descriptions ("Grade 1, Yirgacheffe, washed") face the highest risk of receiving lots that are technically correct but sensory mismatches.
      </p>
      <p className='my-4'>
        A complete institutional specification for Ethiopian green coffee should include:
      </p>
      <ul className='list-disc list-inside space-y-2 my-4 text-sm text-gray-800'>
        <li><span className='font-semibold'>Origin region:</span> Specific zone or woreda where possible (e.g., Kochere washing station cluster, Yirgacheffe zone)</li>
        <li><span className='font-semibold'>Export grade:</span> G1, G2, or G3 as defined by the Ethiopian Coffee and Tea Authority</li>
        <li><span className='font-semibold'>Processing method:</span> Washed, natural, or honey with fermentation parameters if relevant for specialty lots</li>
        <li><span className='font-semibold'>Screen size:</span> Minimum screen 15 for premium filter applications; screen 14/15 acceptable for espresso blends</li>
        <li><span className='font-semibold'>Moisture content:</span> 10.5 to 12 percent at origin; see our <Link href='/insights/green-coffee-moisture-content-water-activity-guide' className='text-amber-700 hover:underline'>moisture content guide</Link> for transit tolerance ranges</li>
        <li><span className='font-semibold'>Defect count:</span> 0 to 3 primary defects per 300 gram reference sample for G1; up to 8 for G2</li>
        <li><span className='font-semibold'>Minimum cup score:</span> 82+ SCA for commercial use; 84+ for specialty featured lots</li>
        <li><span className='font-semibold'>Sensory range description:</span> A written range rather than a single note, e.g., "clean cup, chocolate to mild citrus, medium body, balanced acidity, no ferment or earthy defect notes"</li>
        <li><span className='font-semibold'>Packaging:</span> 60 kg GrainPro-lined jute bags; see our <Link href='/insights/green-coffee-packaging-bag-types-guide' className='text-amber-700 hover:underline'>packaging guide</Link> for liner options and moisture risk</li>
        <li><span className='font-semibold'>Pre-shipment sample approval:</span> Contractual right to approve a 500 gram pre-shipment sample before each container is sealed</li>
      </ul>
      <p className='my-4'>
        For café chains operating across multiple roasting relationships, the sensory range description is particularly important. It allows each roasting partner to calibrate their roast profile to the same target window, reducing guest-facing variation even when roasting and logistics are handled by different parties.
      </p>

      {/* Section 5: Supply Reliability */}
      <h3 id='supply-reliability' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineArrowPath className='w-8 h-8 text-amber-600' />
        5. Supply Reliability: Managing Seasonality at Scale
      </h3>
      <p className='my-4'>
        Ethiopian coffee has a single primary harvest window. Coffee cherries are picked between October and January, processed through February, dry-milled and graded through March and April, and exported as early as January through approximately July of the following year for premium washed lots. After July, available-for-purchase inventory from the current crop tightens significantly, and spot purchasing becomes high-risk for institutional buyers who need consistency.
      </p>
      <p className='my-4'>
        The practical implication: HoReCa buyers cannot source Ethiopian coffee reactively. A café chain that contacts an exporter in September looking for a full season's supply of Yirgacheffe G1 will face either price premiums, limited lot selection, or both. The Ethiopian green coffee market rewards buyers who plan ahead. For a reference timeline, see our <Link href='/insights/ethiopian-coffee-harvest-calendar-buying-guide' className='text-amber-700 hover:underline'>Ethiopian harvest calendar and buying guide</Link>.
      </p>
      <p className='my-4 font-semibold'>Recommended supply management framework for HoReCa programs:</p>
      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Action</th>
              <th className='p-3 text-left font-bold'>Timing</th>
              <th className='p-3 text-left font-bold'>Why It Matters</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Pre-book forward allocation</td>
              <td className='p-3'>November to December (before harvest closes)</td>
              <td className='p-3'>Locks 60 to 70% of annual requirement at pre-harvest price; ensures lot priority access before premium grades sell out</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Request arrival samples</td>
              <td className='p-3'>January to March (as export lots are confirmed)</td>
              <td className='p-3'>Pre-shipment sample approval before each container is sealed; catch quality issues before 20 MT of coffee is in transit</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Schedule container arrivals</td>
              <td className='p-3'>February to June (main export window)</td>
              <td className='p-3'>Space 3 to 4 container arrivals across the season to maintain buffer stock of 90 to 120 days at destination warehouse</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Agree replacement lot protocol</td>
              <td className='p-3'>At contract stage</td>
              <td className='p-3'>Written SLA: if primary lot fails pre-shipment sample, exporter commits to providing an equivalent replacement within 30 days</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Spot purchase remaining 30%</td>
              <td className='p-3'>March to May</td>
              <td className='p-3'>Reserves flexibility for new crop surprises and micro-lot upgrades while protecting core supply through forward booking</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className='my-4'>
        For institutional buyers managing multiple regional sourcing programs, the 60 to 70 percent forward allocation model is standard practice in Ethiopian procurement. It mirrors how large importers like Volcafe, Sucafina, and Ecom structure their forward books for seasonal origins. Smaller HoReCa operators who are new to direct Ethiopian sourcing often underestimate how quickly G1 allocation sells out in a strong harvest year.
      </p>

      {/* Section 6: Certifications */}
      <h3 id='certifications' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineShieldCheck className='w-8 h-8 text-amber-600' />
        6. Certifications and Sustainability for Hotel and Restaurant Chains
      </h3>
      <p className='my-4'>
        Corporate procurement policies for hotel groups and restaurant chains increasingly require supplier-level certifications that individual specialty roasters rarely need. Before finalizing an Ethiopian supplier relationship for a HoReCa program, procurement managers should confirm certification availability for the specific lots they plan to buy.
      </p>
      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Certification</th>
              <th className='p-3 text-left font-bold'>Who Typically Requires It</th>
              <th className='p-3 text-left font-bold'>Ethiopian Availability</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>USDA Organic / EU Organic</td>
              <td className='p-3'>Premium hotel groups, restaurant chains with sustainability claims, retail-facing café brands</td>
              <td className='p-3'>Available from certified cooperatives including YCFCU and OCFCU; Yirgacheffe and Sidamo lots most common; volume has tightened in 2025/26. See our <Link href='/insights/ethiopian-coffee-certifications-organic-fairtrade-rainforest' className='text-amber-700 hover:underline'>certifications guide</Link></td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Fairtrade International</td>
              <td className='p-3'>Hotel chains with Fairtrade hospitality commitments; CSR-reporting companies</td>
              <td className='p-3'>Strong availability through cooperative unions; Fairtrade premium data from YCFCU and Sidama CFU available for annual reports</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Rainforest Alliance / UTZ</td>
              <td className='p-3'>European hotel and restaurant groups; companies with forest-positive sourcing commitments</td>
              <td className='p-3'>Available from select certified washing stations; confirm availability with exporter at sourcing stage</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>EUDR Compliance (EU Operators)</td>
              <td className='p-3'>Any EU-based hotel, restaurant, or café chain importing green coffee after December 30, 2026</td>
              <td className='p-3'>Ethiopia holds standard-risk classification; exporters with GPS polygon data and chain-of-custody documentation can supply EUDR-compliant lots. See our <Link href='/insights/eu-deforestation-regulation-ethiopian-coffee-compliance' className='text-amber-700 hover:underline'>EUDR compliance guide</Link></td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Pre-Shipment Food Safety Inspection</td>
              <td className='p-3'>All institutional buyers; required by food safety regulations in most import markets</td>
              <td className='p-3'>Available through SGS, Intertek, or Bureau Veritas at Djibouti; standard practice for commercial-grade lots</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className='my-4'>
        Beyond certification, hotel and restaurant chains with scope 3 GHG reporting requirements can obtain emissions intensity data from cooperative suppliers: estimated field-to-export CO2e per kilogram of green coffee, based on transport distance from washing station to Djibouti port and container shipping emissions factors. This data is available on request and does not require third-party verification for internal ESG reporting purposes.
      </p>

      {/* Section 7: Supplier Evaluation */}
      <h3 id='supplier-evaluation' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineCheckCircle className='w-8 h-8 text-amber-600' />
        7. Evaluating an Ethiopian Coffee Supplier for a HoReCa Program
      </h3>
      <p className='my-4'>
        Procurement managers conducting a vendor qualification process for an Ethiopian coffee supplier should use a structured evaluation framework. The eight criteria below cover the operational, quality, and compliance factors relevant to institutional buyers. For general exporter evaluation criteria, see our guide on <Link href='/insights/how-to-choose-ethiopian-coffee-export-company' className='text-amber-700 hover:underline'>how to choose an Ethiopian coffee export company</Link>.
      </p>
      <p className='my-4'>
        For a broader buyer-side framework that scores documentation, sample control, and delivery risk across any Ethiopian sourcing program, use our <Link href='/insights/green-coffee-supplier-evaluation-checklist' className='text-amber-700 hover:underline'>green coffee supplier evaluation checklist</Link> alongside the HoReCa-specific criteria below.
      </p>
      <div className='space-y-4 my-6'>
        {[
          { num: '01', title: 'ECTA Export License', desc: 'Confirm the exporter is licensed with the Ethiopian Coffee and Tea Authority and actively registered for the current export season. Request license number and cross-reference with ECTA registry.' },
          { num: '02', title: 'Container Volume History', desc: 'Request a verified list of containers shipped to your target market in the last two to three seasons. Exporters who regularly ship 20+ FCL per season to Europe, North America, or Asia demonstrate the logistics infrastructure needed for institutional programs.' },
          { num: '03', title: 'Quality Lab Access', desc: 'Confirm the exporter has access to an accredited cupping lab (in-house or third-party ECTA-certified). Ask for sample cup score sheets from lots similar to your specification.' },
          { num: '04', title: 'EUDR Documentation Readiness', desc: 'For EU-based buyers: ask whether the exporter has GPS polygon data at farm or cooperative level, a Due Diligence Statement workflow, and a DDS reference number process. This is mandatory from December 2026.' },
          { num: '05', title: 'Certification Portfolio Match', desc: 'Verify the exporter can supply certified lots that match your program requirements (organic, fair trade, Rainforest Alliance). Certification coverage is not universal across lots or seasons; confirm for each specific origin and grade.' },
          { num: '06', title: 'Logistics Options', desc: 'Confirm the exporter can work with your preferred Incoterm (FOB Djibouti, CIF destination, or DDP). Institutional buyers increasingly need DDP or DDP-equivalent service for multi-site delivery into bonded warehouses.' },
          { num: '07', title: 'Pre-Shipment Sample Protocol', desc: 'Request a written commitment on pre-shipment sample turnaround (typically 7 to 14 days from lot sealing), sample weight (minimum 500 g green), and replacement lot SLA if the primary lot fails your cupping approval.' },
          { num: '08', title: 'Payment Terms Compatibility', desc: 'Confirm the exporter\'s flexibility on payment terms. Small or new-to-export companies may not be able to extend net 60 to 90 terms. Established exporters with bank relationships can often accommodate irrevocable documentary LCs or confirmed credit lines for institutional buyers.' },
        ].map(item => (
          <div key={item.num} className='flex gap-4 border border-gray-200 rounded-lg p-5'>
            <div className='text-2xl font-extrabold text-amber-600 font-inconsolata flex-shrink-0 w-10'>{item.num}</div>
            <div>
              <h4 className='font-bold mb-1'>{item.title}</h4>
              <p className='text-sm text-gray-700'>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className='bg-amber-50 border border-amber-200 rounded-xl p-8 my-12'>
        <h3 className='text-2xl font-extrabold mb-3'>Source Ethiopian Coffee for Your HoReCa Program</h3>
        <p className='text-gray-700 mb-4'>
          Ethio Coffee Import and Export PLC works with hotel groups, café chains, and food service distributors across Europe, the Middle East, and Asia Pacific. Our sourcing network covers all major Ethiopian regions, and we can supply washed and natural lots from certified cooperatives with full EUDR documentation and pre-shipment inspection.
        </p>
        <div className='flex flex-wrap gap-3'>
          <Link href='/buy-ethiopian-coffee-wholesale' className='bg-dark text-primary px-5 py-2 rounded font-semibold hover:bg-gray-800 transition-colors'>
            View Offerings
          </Link>
          <Link href='/contact-us' className='border border-dark text-dark px-5 py-2 rounded font-semibold hover:bg-gray-100 transition-colors'>
            Request Samples
          </Link>
          <Link href='/ordering-info' className='border border-amber-600 text-amber-700 px-5 py-2 rounded font-semibold hover:bg-amber-50 transition-colors'>
            How to Order
          </Link>
        </div>
      </div>

      {/* FAQ */}
      <h3 id='faq' className='text-2xl font-extrabold mt-12 mb-6 flex items-center gap-3'>
        <HiOutlineQuestionMarkCircle className='w-8 h-8 text-amber-600' />
        Frequently Asked Questions
      </h3>
      <div className='bg-gray-50 rounded-xl p-8 border border-gray-200 space-y-6'>
        {[
          {
            q: 'What is the minimum order quantity for a café chain sourcing Ethiopian coffee directly?',
            a: 'Most Ethiopian exporters require a minimum of one full container per order. For café chains sourcing below that threshold, purchasing through a specialty importer in your destination market provides access to Ethiopian lots in smaller pallet quantities. See our Ethiopian coffee MOQ guide for detailed quantity tiers and alternative structures by buyer type.'
          },
          {
            q: 'Can I get Ethiopian coffee with organic certification for a hotel sustainability program?',
            a: 'Yes. Certified organic Ethiopian coffee is available from cooperatives including the Yirgacheffe Coffee Farmers Cooperative Union (YCFCU) and the Oromia Coffee Farmers Cooperative Union (OCFCU). Both USDA and EU organic certification are available. Volume of certified organic lots tightened in the 2025/26 season, so buyers who need certified organic should pre-book at least six months before their planned delivery date.'
          },
          {
            q: 'How do I maintain consistent flavor across 50 or more café locations using Ethiopian coffee?',
            a: 'Consistency across locations depends on three factors: a written sensory specification with an acceptable range (not a single flavor note), pre-shipment sample approval for every container, and alignment between supplier and roasting partner on roast profile targets. For multi-roaster supply chains, the sensory specification serves as the shared reference that prevents divergence between locations.'
          },
          {
            q: 'What does an EU hotel group need from an Ethiopian exporter for EUDR compliance?',
            a: 'EU operators importing green coffee after December 30, 2026 require GPS polygon coordinates for each plot in the shipment, a Due Diligence Statement (DDS), and deforestation-free evidence for land used after December 2020. Ethiopian exporters with cooperative mapping programs can supply this documentation. Confirm EUDR readiness at the supplier qualification stage, before signing a supply contract.'
          },
          {
            q: 'Is Ethiopian green coffee suitable for automatic espresso machines commonly used in HoReCa?',
            a: 'Yes. Grade 2 and Grade 3 washed lots from Jimma and Limu perform reliably in commercial automatic espresso machines and bean-to-cup systems. Lower acidity and consistent body produce predictable extraction across varying water temperatures and machine calibrations. Grade 1 natural-processed lots from Guji and Sidamo are better reserved for barista-served specialty applications where the quality premium is justified.'
          },
        ].map((item, idx) => (
          <div key={idx}>
            <p className='font-bold mb-2 text-gray-900'>{item.q}</p>
            <p className='text-sm text-gray-700 leading-relaxed'>{item.a}</p>
          </div>
        ))}
      </div>

      {/* Related Articles */}
      <div className='my-10 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4'>Related Articles</h3>
        <div className='grid md:grid-cols-2 gap-6'>
          <div>
            <h4 className='font-semibold mb-2 text-sm text-gray-500 uppercase tracking-wide'>Procurement &amp; Buying Guides</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='text-amber-700 hover:underline'>How to Source Green Coffee from Ethiopia</Link></li>
              <li>&bull; <Link href='/insights/minimum-order-quantities-ethiopian-coffee-moq' className='text-amber-700 hover:underline'>Ethiopian Coffee MOQ: Minimum Order Quantities</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-contracts-payment-terms-guide' className='text-amber-700 hover:underline'>Contracts and Payment Terms Guide</Link></li>
              <li>&bull; <Link href='/insights/how-to-choose-ethiopian-coffee-export-company' className='text-amber-700 hover:underline'>How to Choose an Ethiopian Coffee Export Company</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm text-gray-500 uppercase tracking-wide'>Origins &amp; Profiles</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/bombe-sidama-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Bombe Sidama Coffee Sourcing Guide</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-cold-brew-rtd-sourcing-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee for Cold Brew and RTD Programs</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-for-filter-batch-brew-sourcing-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee for Filter and Batch Brew</Link></li>
              <li>&bull; <Link href='/ethiopian-coffee-yirgacheffe' className='text-amber-700 hover:underline'>Ethiopia Yirgacheffe Green Coffee</Link></li>
              <li>&bull; <Link href='/ethiopian-coffee-jimma' className='text-amber-700 hover:underline'>Jimma Green Coffee</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm text-gray-500 uppercase tracking-wide'>Quality &amp; Specifications</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/green-coffee-quality-control-defects-grading' className='text-amber-700 hover:underline'>Green Coffee Defects and Quality Control</Link></li>
              <li>&bull; <Link href='/insights/green-coffee-moisture-content-water-activity-guide' className='text-amber-700 hover:underline'>Green Coffee Moisture Content Guide</Link></li>
              <li>&bull; <Link href='/insights/green-coffee-packaging-bag-types-guide' className='text-amber-700 hover:underline'>Green Coffee Packaging: Bag Types Guide</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm text-gray-500 uppercase tracking-wide'>Compliance &amp; Certifications</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/ethiopian-coffee-certifications-organic-fairtrade-rainforest' className='text-amber-700 hover:underline'>Ethiopian Coffee Certifications Guide</Link></li>
              <li>&bull; <Link href='/insights/eu-deforestation-regulation-ethiopian-coffee-compliance' className='text-amber-700 hover:underline'>EUDR Compliance Guide for Ethiopian Coffee</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-harvest-calendar-buying-guide' className='text-amber-700 hover:underline'>Harvest Calendar and Seasonal Buying Guide</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className='border-t border-gray-300 mt-10 pt-6'>
        <p className='text-sm text-gray-600 font-inconsolata'>
          <span className='font-bold'>About This Insight:</span> Published by Ethio Coffee Import and Export PLC, an origin-connected Ethiopian green coffee exporter with active supply relationships covering Yirgacheffe, Sidamo, Guji, Jimma, Limu, and Harar. Pricing, certification availability, and export timelines reflect market conditions as of the 2025/26 Ethiopian coffee season. For current lot availability and HoReCa procurement support, <Link href='/contact-us' className='underline'>contact our team directly</Link>.
        </p>
        <p className='text-sm text-gray-600 font-inconsolata mt-2'>
          <Link href='/insights' className='underline'>All Insights</Link>{' · '}
          <Link href='/ethiopian-coffee-exporter' className='underline'>Export Services</Link>{' · '}
          <Link href='/about' className='underline'>About Ethio Coffee</Link>{' · '}
          <Link href='/contact-us' className='underline'>Contact</Link>
        </p>
      </div>
    </>
  )
}
