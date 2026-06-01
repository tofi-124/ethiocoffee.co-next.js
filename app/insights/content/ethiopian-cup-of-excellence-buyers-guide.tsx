import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import {
  HiOutlineLightBulb,
  HiOutlineClipboardDocumentList,
  HiOutlineTrophy,
  HiOutlineBeaker,
  HiOutlineChartBar,
  HiOutlineCurrencyDollar,
  HiOutlineDocumentCheck,
  HiOutlineScale,
  HiOutlineArrowTrendingUp,
  HiOutlineGlobeAlt,
  HiOutlineUserGroup,
} from 'react-icons/hi2'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function EthiopianCupOfExcellenceBuyersGuide({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      {/* H1 + H2 */}
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        How the Ethiopian Cup of Excellence (ACE) competition works, what 2020–2024 auction data tells buyers, how to register and bid, lot sizes, packaging specs, and a decision matrix for when CoE lots are worth the premium.
      </h2>

      {/* HERO IMAGE */}
      <figure>
        <figcaption className='font-inconsolata my-2'>{title}</figcaption>
        <div className='w-full aspect-[5/3] overflow-hidden rounded-md bg-gray-200 flex items-center justify-center'>
          {/* TODO: Replace placeholder with actual hero image */}
          {/* Expected path: /images/insights/ethiopian-cup-of-excellence-buyers-guide.webp */}
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Ethiopian Cup of Excellence winning coffee lot drying on raised beds, high-altitude smallholder farm in Sidama'
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
        <span className='ml-2'>Competition Coffee / Premium Lot Sourcing / Green Coffee Buying / Importer Resources</span>
      </div>

      {/* KEY TAKEAWAY */}
      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-8 border border-amber-200'>
        <h3 className='font-bold text-xl mb-3 flex items-center gap-2'>
          <HiOutlineLightBulb className='text-amber-400 flex-shrink-0' />Key Takeaway
        </h3>
        <p className='text-sm leading-relaxed'>
          Ethiopian Cup of Excellence lots represent the top tier of specialty green coffee, scoring 87+ after five blind cuppings by an international jury of 20–25 experts. Ethiopia joined the Alliance for Coffee Excellence (ACE) program in 2020, becoming the first African country in the CoE program. In 2020, auction prices averaged $28.44/lb ($62.70/kg), with the top lot reaching $185.10/lb ($408/kg). By 2024, Sidama natural-process lots dominated, with top scores reaching 90.50. Buying CoE lots requires ACE auction registration, sample ordering, and online bidding; a distinct procurement path from direct exporter sourcing. For roasters targeting competition-grade coffee or premium retail positioning, Ethiopian CoE offers the highest documented traceability and quality verification in the Ethiopian specialty market.
        </p>
      </div>

      {/* TABLE OF CONTENTS */}
      <div className='my-8 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <HiOutlineClipboardDocumentList className='text-amber-600' /> In This Guide
        </h3>
        <ol className='space-y-2 text-sm'>
          <li><a href='#what-is-coe' className='text-amber-700 hover:underline'>1. What Is the Cup of Excellence?</a></li>
          <li><a href='#ethiopia-program' className='text-amber-700 hover:underline'>2. Ethiopia&apos;s CoE Program: Africa&apos;s First 87+ Standard</a></li>
          <li><a href='#competition-process' className='text-amber-700 hover:underline'>3. How the Three-Phase Competition Works</a></li>
          <li><a href='#results-data' className='text-amber-700 hover:underline'>4. Five Years of Ethiopia CoE Data: Scores, Prices, and Regional Trends</a></li>
          <li><a href='#what-you-receive' className='text-amber-700 hover:underline'>5. Lot Sizes, Packaging, and What Buyers Receive</a></li>
          <li><a href='#how-to-buy' className='text-amber-700 hover:underline'>6. How to Register and Bid as an International Buyer</a></li>
          <li><a href='#decision-matrix' className='text-amber-700 hover:underline'>7. CoE vs Micro-Lot vs Standard Specialty: A Decision Matrix</a></li>
          <li><a href='#exporter-integration' className='text-amber-700 hover:underline'>8. Working with an Origin Exporter Alongside CoE</a></li>
          <li><a href='#faq' className='text-amber-700 hover:underline'>9. Frequently Asked Questions</a></li>
        </ol>
      </div>

      {/* INTRODUCTION */}
      <p className='text-lg leading-relaxed my-4'>
        The Ethiopian Cup of Excellence is the most rigorous quality verification system available for Ethiopian green coffee. Every lot passes three rounds of blind cupping, with winning coffees scoring above 87 on the SCA scale, a threshold only a fraction of all specialty submissions clear. For importers and roasters, CoE lots offer something unique: documented scores, named producers, exact regional traceability, and auction prices that reflect genuine market demand rather than negotiated offers.
      </p>
      <p className='my-4'>
        This guide covers everything buyers need to know to participate in Ethiopian CoE auctions intelligently. It is not a general guide to Ethiopian coffee sourcing (for that, see our <Link href='/insights/how-to-source-green-coffee-from-ethiopia' className='text-amber-700 hover:underline'>direct sourcing guide</Link> or the <Link href='/insights/micro-lot-ethiopian-coffee-sourcing-guide' className='text-amber-700 hover:underline'>micro-lot sourcing guide</Link>). This guide focuses specifically on the CoE program structure, historical auction data, the buying process, and when CoE fits into a broader sourcing strategy.
      </p>

      {/* SECTION 1: WHAT IS COE */}
      <h3 id='what-is-coe' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineTrophy className='w-8 h-8 text-amber-600' />
        1. What Is the Cup of Excellence?
      </h3>
      <p className='my-4'>
        The Cup of Excellence (CoE) is a competition and auction program run by the <a href='https://allianceforcoffeeexcellence.org/' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>Alliance for Coffee Excellence (ACE)</a>, a U.S.-based nonprofit founded in 1999. The program operates in 17+ producing countries, including Ethiopia, Brazil, Colombia, Rwanda, and Indonesia.
      </p>
      <p className='my-4'>
        The defining feature of CoE is its scoring threshold. Only coffees that score 87 or above by an international jury of 20–25 qualified jurors earn the Cup of Excellence designation. Coffees scoring 85–86.99 by the international jury earn the &quot;National Winner&quot; title. Everything below goes home without a CoE label, regardless of how it performed in earlier rounds.
      </p>
      <p className='my-4'>
        CoE winning lots are sold through global online auctions, with prices set by competitive bidding. Buyers from any country can register, order pre-auction sample sets, and bid. The vast majority of auction proceeds go directly to the producing farmers or cooperatives, making CoE one of the most direct premium-transfer mechanisms in specialty coffee.
      </p>
      <p className='my-4'>
        CoE is not a certification program. It does not verify organic status, fair trade premiums, or gender equity practices. It verifies one thing: cup quality, judged blind, at a very high standard.
      </p>

      {/* SECTION 2: ETHIOPIA PROGRAM */}
      <h3 id='ethiopia-program' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineGlobeAlt className='w-8 h-8 text-amber-600' />
        2. Ethiopia&apos;s CoE Program: Africa&apos;s First 87+ Standard
      </h3>
      <p className='my-4'>
        Ethiopia launched its Cup of Excellence program in 2020, becoming the first country in Africa to join the ACE competition network. The timing was notable: the inaugural competition ran despite COVID-19 disruptions, with the preselection stage held in Addis Ababa in February 2020 and the national judging stage conducted remotely in Portland, Oregon in April 2020.
      </p>
      <p className='my-4'>
        For the global specialty community, Ethiopia&apos;s entry into CoE was significant. Ethiopia produces more Arabica genetic diversity than any other origin on earth. Its coffees had long earned top prices at origin auctions and specialty brokers, but the CoE program introduced a standardized, independently verified scoring framework applied for the first time to Ethiopian lots at scale.
      </p>
      <p className='my-4'>
        By 2024, the program had run five consecutive years, refining its submission pipeline and jury composition. Producers who entered the 2024 competition submitted lots from Sidama, Oromiya, and South Ethiopian regions, with Sidama farms capturing 26 of the 27 CoE-tier placements that year.
      </p>

      <div className='bg-blue-50 border border-blue-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3'>Notable: Ethiopia Was Not in the 2026 ACE Auction Calendar</h4>
        <p className='text-sm text-gray-700'>
          As of mid-2026, ACE has not announced an Ethiopia CoE auction in the 2026 schedule, which lists Nicaragua, El Salvador, Costa Rica, Honduras, Guatemala, Mexico, Thailand, Indonesia, Brazil, and Peru. Ethiopia&apos;s program may run on a different annual cycle, or the 2026 announcement may be pending. Buyers should monitor the <a href='https://allianceforcoffeeexcellence.org/upcoming-auctions/' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>ACE auction calendar</a> for updates.
        </p>
      </div>

      {/* SECTION 3: COMPETITION PROCESS */}
      <h3 id='competition-process' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineBeaker className='w-8 h-8 text-amber-600' />
        3. How the Three-Phase Competition Works
      </h3>
      <p className='my-4'>
        The CoE competition in Ethiopia follows a three-stage elimination process. Understanding each stage clarifies why CoE scores carry more weight than a standard cupping report from an exporter or trader.
      </p>

      <h4 className='text-xl font-bold mt-8 mb-4'>Phase 1: Preselection (National Judges, In-Country)</h4>
      <p className='my-4'>
        Producers submit samples to the competition organizers in-country. A panel of approximately 12 national judges cups all submissions blind, eliminating coffees that do not meet a minimum quality threshold. Only coffees that advance through preselection move to Phase 2. This filters out technically defective or below-threshold lots before international judges invest time evaluating them.
      </p>

      <h4 className='text-xl font-bold mt-8 mb-4'>Phase 2: National Jury (In-Country)</h4>
      <p className='my-4'>
        The national jury re-cups all advancing lots, blind. Scores from Phase 2 determine which coffees continue to the international stage. Lots that score below the threshold for international consideration exit the competition at this stage. Notably, lots scoring 85–86.99 in the final international phase earn the National Winner designation, while only those scoring 87+ earn the Cup of Excellence title.
      </p>

      <h4 className='text-xl font-bold mt-8 mb-4'>Phase 3: International Jury (Qualified Industry Experts)</h4>
      <p className='my-4'>
        The international jury consists of 20–25 experienced tasters from around the world: roasters, buyers, and certified Q-graders. They cup all remaining lots blind, multiple times. According to ACE, a competition with 300 entries yields approximately 9,000 analyzed cups, with each &quot;Top 10&quot; lot cupped at least 120 times by the international jury alone. The final published scores are averages of all international jury evaluations.
      </p>
      <p className='my-4'>
        The result is a score with a much stronger statistical foundation than a single roaster&apos;s cupping report or even a standard green coffee grading session. When a lot scores 90.50 in the Ethiopia CoE, that figure reflects a consensus across dozens of expert evaluations.
      </p>

      <div className='bg-amber-50 border border-amber-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3'>How CoE Scoring Compares to Standard Specialty Cupping</h4>
        <div className='overflow-x-auto'>
          <table className='w-full border-collapse text-sm mt-2'>
            <thead>
              <tr className='bg-dark text-primary'>
                <th className='p-3 text-left font-bold'>Metric</th>
                <th className='p-3 text-left font-bold'>Standard Specialty Cupping</th>
                <th className='p-3 text-left font-bold'>CoE International Jury</th>
              </tr>
            </thead>
            <tbody>
              <tr className='border-b border-gray-200'>
                <td className='p-3 font-semibold'>Blind cupping</td>
                <td className='p-3'>Sometimes (varies by lab)</td>
                <td className='p-3'>Always, strict protocol</td>
              </tr>
              <tr className='border-b border-gray-200 bg-gray-50'>
                <td className='p-3 font-semibold'>Number of evaluators</td>
                <td className='p-3'>1–3 Q-graders</td>
                <td className='p-3'>20–25 international jurors</td>
              </tr>
              <tr className='border-b border-gray-200'>
                <td className='p-3 font-semibold'>Times cupped</td>
                <td className='p-3'>1–3</td>
                <td className='p-3'>Minimum 5 (Top 10: 120+)</td>
              </tr>
              <tr className='border-b border-gray-200 bg-gray-50'>
                <td className='p-3 font-semibold'>Score independence</td>
                <td className='p-3'>Evaluator may know origin or producer</td>
                <td className='p-3'>Identity unknown until awards ceremony</td>
              </tr>
              <tr className='border-b border-gray-200'>
                <td className='p-3 font-semibold'>Score validation</td>
                <td className='p-3'>Single lab report</td>
                <td className='p-3'>Statistical average of all jury scores</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* SECTION 4: RESULTS DATA */}
      <h3 id='results-data' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineChartBar className='w-8 h-8 text-amber-600' />
        4. Five Years of Ethiopia CoE Data: Scores, Prices, and Regional Trends
      </h3>
      <p className='my-4'>
        The following analysis draws on the 2020 inaugural auction results and 2024 competition data from the ACE website. Prices for intervening years (2021–2023) are not included because verified public auction data was not available at time of writing and is flagged below as [NEEDS VERIFICATION].
      </p>

      <h4 className='text-xl font-bold mt-8 mb-4'>2020: The Inaugural Auction</h4>
      <p className='my-4'>
        Ethiopia&apos;s first CoE auction, held June 25, 2020, sold 28 CoE lots totaling 47,421 lbs for a combined value of $1,348,690. The average price was $28.44/lb ($62.70/kg). The top two lots (both from Niguse Gemeda Mude) sold at $185.10/lb ($408/kg), purchased by a consortium including Maruyama Coffee (Japan), Saza Coffee, Cometeer, Harrods, and others.
      </p>
      <p className='my-4'>
        The 2020 winner pool showed geographic diversity: lots came from small individual farms and cooperatives in Guji, Oromiya, and southern Ethiopia. Processing methods included natural and washed, with natural-process lots commanding the highest premiums. Buyers spanned Japan (dominant), the United States, the UK, Denmark, Australia, Taiwan, South Korea, and China.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>2020 CoE Rank</th>
              <th className='p-3 text-left font-bold'>Producer</th>
              <th className='p-3 text-left font-bold'>High Bid ($/lb)</th>
              <th className='p-3 text-left font-bold'>Total Value</th>
              <th className='p-3 text-left font-bold'>Key Buyers</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>#1 (A+B)</td>
              <td className='p-3'>Niguse Gemeda Mude</td>
              <td className='p-3'>$185.10</td>
              <td className='p-3'>$220,361</td>
              <td className='p-3'>Maruyama, Harrods, Cometeer</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>#2 (A+B)</td>
              <td className='p-3'>Rumudamo Coffee Industry Trade PLC</td>
              <td className='p-3'>$107–$108</td>
              <td className='p-3'>$202,741</td>
              <td className='p-3'>Intelligentsia, Coffee Collective (DK), Single O (AU)</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>#5</td>
              <td className='p-3'>Gare Ware Jilo</td>
              <td className='p-3'>$21.00</td>
              <td className='p-3'>$45,834</td>
              <td className='p-3'>ONYX Coffee Lab (USA)</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>#19</td>
              <td className='p-3'>Gemeda Elias Dube</td>
              <td className='p-3'>$12.60</td>
              <td className='p-3'>$28,750</td>
              <td className='p-3'>Mercanta (UK/Singapore) with 12 UK specialty roasters</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Auction average</td>
              <td className='p-3'>28 lots</td>
              <td className='p-3'>$28.44</td>
              <td className='p-3'>$1,348,690</td>
              <td className='p-3'>17 buyer companies across 8 countries</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className='text-sm text-gray-600 my-2 font-inconsolata'>Source: Alliance for Coffee Excellence, Ethiopia 2020 CoE Auction Results</p>

      <h4 className='text-xl font-bold mt-8 mb-4'>2024: Sidama&apos;s Dominance and the JARC Varieties</h4>
      <p className='my-4'>
        The 2024 competition ran with its international jury week July 8–12, and the auction on August 27. Of the 27 CoE lots, 26 came from Sidama and one from Oromiya. Every winning lot used natural processing. All lots used JARC-registered varieties: 74158, 74112, and 74110, Ethiopian cultivars developed and registered by the Jimma Agricultural Research Centre.
      </p>
      <p className='my-4'>
        The top score was 90.50, achieved by Basha Bekele Butusha from Sidama. Lots were split into A and B sub-lots at the highest ranks (1A/1B, 2A/2B) to allow multiple buyers to access the same coffee. Lot sizes ranged from 90 kg (Rank 1A) to 1,335 kg (Rank 14), giving buyers options from micro-allocation quantities to more substantial volumes.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>2024 Score Range</th>
              <th className='p-3 text-left font-bold'>Region</th>
              <th className='p-3 text-left font-bold'>Process</th>
              <th className='p-3 text-left font-bold'>Varieties Used</th>
              <th className='p-3 text-left font-bold'>Lot Count</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>90.00–90.50 (Ranks 1–2)</td>
              <td className='p-3'>Sidama</td>
              <td className='p-3'>Natural</td>
              <td className='p-3'>74158</td>
              <td className='p-3'>4 sub-lots</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>89.00–89.70 (Ranks 3–9)</td>
              <td className='p-3'>Sidama</td>
              <td className='p-3'>Natural</td>
              <td className='p-3'>74158, 74112, 74110</td>
              <td className='p-3'>7 lots</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>88.00–88.99 (Rank 10)</td>
              <td className='p-3'>Oromiya</td>
              <td className='p-3'>Natural</td>
              <td className='p-3'>74112</td>
              <td className='p-3'>1 lot</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>87.00–87.99 (Ranks 11–27)</td>
              <td className='p-3'>Sidama (25), S. Ethiopia (1)</td>
              <td className='p-3'>Natural</td>
              <td className='p-3'>74158, 74112, 74110</td>
              <td className='p-3'>17 lots</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className='text-sm text-gray-600 my-2 font-inconsolata'>Source: Alliance for Coffee Excellence, Ethiopia 2024 CoE Competition Results</p>

      <h4 className='text-xl font-bold mt-8 mb-4'>What the Data Tells Buyers: Three Trends</h4>
      <div className='grid md:grid-cols-3 gap-4 my-6'>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>1. Sidama Has Pulled Ahead</h4>
          <p className='text-sm text-gray-700'>
            The 2020 field was geographically diverse. By 2024, Sidama producers captured 26 of 27 CoE spots. This reflects both producer participation levels and consistent quality at altitude in the Bensa, Dale, and surrounding sub-districts.
          </p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>2. Natural Processing Dominates</h4>
          <p className='text-sm text-gray-700'>
            All 27 CoE lots in 2024 were natural-processed. Ethiopian natural coffees from Sidama tend to develop intense fruit characteristics that score well on AFCA/CoE rubrics. Washed lots and experimental process coffees are not excluded but have not broken into the 2024 CoE tier.
          </p>
        </div>
        <div className='border border-gray-200 rounded-lg p-5 bg-gray-50'>
          <h4 className='font-bold mb-2'>3. JARC Varieties are CoE-Consistent</h4>
          <p className='text-sm text-gray-700'>
            Varieties 74158, 74112, and 74110, developed by the Jimma Agricultural Research Centre, appear in every 2024 CoE lot. These are not heirloom landraces; they are formally registered cultivars known for cup quality and disease resistance. <Link href='/insights/ethiopian-heirloom-coffee-varieties-landraces' className='text-amber-700 hover:underline'>See our heirloom varieties guide</Link> for context on JARC vs landrace distinctions.
          </p>
        </div>
      </div>

      {/* SECTION 5: WHAT YOU RECEIVE */}
      <h3 id='what-you-receive' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineDocumentCheck className='w-8 h-8 text-amber-600' />
        5. Lot Sizes, Packaging, and What Buyers Receive
      </h3>
      <p className='my-4'>
        CoE lots are packaged differently from standard specialty green coffee. Understanding the packaging and lot structure is important before placing a bid.
      </p>

      <h4 className='text-xl font-bold mt-8 mb-4'>CoE Tier Lots (87+ score)</h4>
      <p className='my-4'>
        Cup of Excellence lots are packaged in 30 kg boxes, each containing two 15 kg vacuum-sealed bags. This format prioritizes freshness over shipping efficiency. A single lot may consist of several boxes, depending on the producer&apos;s total eligible harvest weight.
      </p>
      <p className='my-4'>
        In 2024, lot sizes ranged from 90 kg (Rank 1A, split sub-lot) to 1,335 kg (Rank 14). The smallest lots are priced at extremely high per-kg rates ($40–$400+/kg based on 2020 comparable data), which makes air freight cost-effective for priority delivery. The larger lots (700–1,335 kg) can move via LCL ocean freight with the buyer managing cold-chain considerations at arrival.
      </p>

      <h4 className='text-xl font-bold mt-8 mb-4'>National Winner Lots (85–86.99)</h4>
      <p className='my-4'>
        National Winner lots are packaged in 69 kg hermetic bags, the same format used for premium specialty exports from Ethiopia through direct export channels. NW lot sizes tend to be larger than top CoE lots, offering more accessible quantities for roasters who want auction-verified quality without the extreme premiums of the top 10 CoE positions.
      </p>

      <h4 className='text-xl font-bold mt-8 mb-4'>What Else Comes with a CoE Lot</h4>
      <p className='my-4'>
        Along with the physical coffee, buyers receive the competition documentation: the scoring sheet with the international jury&apos;s average score, the producer name and farm information (released at the awards ceremony after blind cupping concludes), the variety, region, and processing method. ACE emphasizes that all farm information is submitted by the producers themselves and is not independently verified beyond what the auditor collects. Buyers are advised to assess value based on cup quality, not farm story alone.
      </p>
      <p className='my-4'>
        For importers building EUDR-compliant documentation, the CoE&apos;s farm-level traceability data (region, farmer name, lot identity) supports the due diligence requirement. A dedicated <Link href='/insights/eu-deforestation-regulation-ethiopian-coffee-compliance' className='text-amber-700 hover:underline'>EUDR compliance article</Link> covers how to use origin documentation within your due diligence system.
      </p>

      {/* SECTION 6: HOW TO BUY */}
      <h3 id='how-to-buy' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineCurrencyDollar className='w-8 h-8 text-amber-600' />
        6. How to Register and Bid as an International Buyer
      </h3>
      <p className='my-4'>
        Buying CoE lots requires advance preparation. The auction runs on a fixed date and sample evaluation takes 2–4 weeks, so buyers who wait until close to the auction date will not have time to evaluate the coffee before bidding.
      </p>

      <h4 className='text-xl font-bold mt-8 mb-4'>Step 1: Register with ACE (Optional but Recommended)</h4>
      <p className='my-4'>
        ACE offers membership tiers: Benefactor, Allied, Community, and Non-Member. Member status reduces both auction registration fees and sample set costs significantly. For roasters planning to participate in multiple CoE auctions per year across different origins, membership pays for itself quickly. Non-member auction access: $250/auction. ACE Allied Member: $25/auction.
      </p>

      <h4 className='text-xl font-bold mt-8 mb-4'>Step 2: Order the Sample Set</h4>
      <p className='my-4'>
        Before the auction, ACE ships a sample set containing 150 g of each competing lot. ACE limits sample set purchases to one set per company to ensure access is distributed. The cost is $850 for non-members and $395 for members. Samples must be ordered before a published deadline, typically 4–6 weeks before the auction. ACE ships samples internationally; buyers in mainland China have a separate shipping process.
      </p>

      <h4 className='text-xl font-bold mt-8 mb-4'>Step 3: Cup and Score Samples Internally</h4>
      <p className='my-4'>
        This is where the buying decision happens. Cup each lot against your program requirements. For a specialty roaster building a competition menu, the top 3–5 lots by score and flavor profile will be priority targets. For a roaster buying for a premium single-origin retail line, the lower CoE-tier lots (Rank 15–27 in 2024) may offer the best value: verified 87+ quality with more modest auction prices than the top-ranked lots.
      </p>

      <h4 className='text-xl font-bold mt-8 mb-4'>Step 4: Register for the Auction and Bid</h4>
      <p className='my-4'>
        The online auction runs on a specific date. Lots are auctioned one at a time. Bidding is competitive and prices escalate based on buyer demand. High-profile lots (top 5 scores) typically see aggressive bidding from Japanese specialty roasters, U.S. competition programs, and premium subscription services. Lots ranked 10–27 tend to clear at lower multiples of commodity prices and offer more predictable acquisition costs.
      </p>
      <p className='my-4'>
        Set a maximum bid for each target lot before the auction starts. Emotional bidding at live auctions inflates costs above value. A pre-established ceiling per lot (based on your landed cost calculation and retail price targets) protects your margins.
      </p>

      <h4 className='text-xl font-bold mt-8 mb-4'>Step 5: Export and Shipping via ACE-Authorized Exporters</h4>
      <p className='my-4'>
        ACE maintains a list of authorized CoE exporters in each origin country. These exporters handle the export documentation, inspection, and logistics specific to CoE lots. Buyers work with an ACE exporter in Ethiopia who understands the CoE documentation requirements and can coordinate with the producer for final export. ACE publishes the <a href='https://allianceforcoffeeexcellence.org/coe-exporters/' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:underline'>list of CoE exporters by country</a> on their website.
      </p>

      {/* SECTION 7: DECISION MATRIX */}
      <h3 id='decision-matrix' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineScale className='w-8 h-8 text-amber-600' />
        7. CoE vs Micro-Lot vs Standard Specialty: A Decision Matrix
      </h3>
      <p className='my-4'>
        Not every roaster should buy Ethiopian CoE lots. The decision depends on your volume, customer base, and use case. The table below sets out the key differentiators:
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Factor</th>
              <th className='p-3 text-left font-bold'>Standard Specialty (G1)</th>
              <th className='p-3 text-left font-bold'>Direct Micro-Lot (86–89+)</th>
              <th className='p-3 text-left font-bold'>CoE Lot (87–90.50)</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Score verification</td>
              <td className='p-3'>1–3 Q-graders, exporter lab</td>
              <td className='p-3'>1–3 Q-graders, buyer verification</td>
              <td className='p-3'>20–25 international jurors, blind, 5+ times</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Typical FOB/lb (2025 estimates)</td>
              <td className='p-3'>$3–$6</td>
              <td className='p-3'>$6–$13+</td>
              <td className='p-3'>$12–$185+ (auction-determined)</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Minimum lot size</td>
              <td className='p-3'>1+ bags (60 kg each)</td>
              <td className='p-3'>5–50 bags (300–3,000 kg)</td>
              <td className='p-3'>90–1,335 kg per lot (auction)</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Advance booking possible</td>
              <td className='p-3'>Yes (new crop forward)</td>
              <td className='p-3'>Yes (relationship-based)</td>
              <td className='p-3'>No (auction only)</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Traceability level</td>
              <td className='p-3'>Region + washing station</td>
              <td className='p-3'>Washing station or farm</td>
              <td className='p-3'>Named farmer + JARC variety + exact lot</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Lead time from origin</td>
              <td className='p-3'>6–10 weeks (ocean)</td>
              <td className='p-3'>6–10 weeks (ocean); 1–2 weeks (air)</td>
              <td className='p-3'>1–4 weeks (air for small lots); 8–12 weeks (ocean for larger)</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Marketing story</td>
              <td className='p-3'>Origin + grade</td>
              <td className='p-3'>Producer story + score</td>
              <td className='p-3'>Internationally verified award; globally recognized certification</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Best for</td>
              <td className='p-3'>Volume, blends, espresso base</td>
              <td className='p-3'>Single origin retail, filter programs</td>
              <td className='p-3'>Competition prep, ultra-premium retail, subscription highlights</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='border-l-4 border-amber-500 pl-6 bg-gray-50 p-4 my-6'>
        <h4 className='font-bold text-lg mb-2'>Buyer Scenario: When CoE Makes Sense</h4>
        <p className='text-sm text-gray-700'>
          A U.S. specialty roaster processing 200 bags per month runs a quarterly &quot;featured single origin&quot; program. They want one exceptional Ethiopian lot (something defensibly &quot;the best in class&quot;) to headline their Q3 offering and build an editorial story. A CoE lot (Rank 10–20 in the 2024 field, scoring 87.5–88.7) at an estimated auction price of $15–$25/lb satisfies this. The roaster buys 270–540 kg (3–6 sub-lots), uses air freight, and prices the retail coffee at a premium that reflects the documented award status. This scenario works; the math closes at $30–$50/100g retail.
        </p>
        <p className='text-sm text-gray-700 mt-2'>
          The same roaster buying a top-5 CoE lot at $80–$185/lb for volume production would not close financially. CoE lots at extreme prices serve collectors, competition programs, and high-net-worth subscription services. They are not suited to production roasting programs.
        </p>
      </div>

      {/* SECTION 8: EXPORTER INTEGRATION */}
      <h3 id='exporter-integration' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineArrowTrendingUp className='w-8 h-8 text-amber-600' />
        8. Working with an Origin Exporter Alongside CoE
      </h3>
      <p className='my-4'>
        CoE buying and direct exporter sourcing are not mutually exclusive; they serve different parts of a roaster&apos;s sourcing program. Many roasters who buy Ethiopian CoE lots for limited-edition releases also maintain ongoing relationships with origin exporters for their standard specialty Ethiopian supply.
      </p>
      <p className='my-4'>
        There are practical reasons to maintain both channels. CoE auctions run once per year per country. A roaster whose Ethiopia allocation runs out mid-year cannot return to the auction for more. Direct exporter relationships fill that gap with consistent, available supply. Ethiopian green coffee from Yirgacheffe, Guji, Sidamo, and Harar at 84–87+ SCA scores is available through direct channels year-round without auction competition.
      </p>
      <p className='my-4'>
        An exporter with active relationships at washing stations in Sidama (the region producing 26 of 27 CoE lots in 2024) can often supply lots from the same village-level communities that enter the CoE competition, at direct-market prices rather than auction premiums. These lots may not carry the CoE label, but the underlying terroir and processing approach are comparable. For roasters managing cost-per-bag while maintaining quality, this sourcing mix balances prestige and practicality.
      </p>
      <p className='my-4'>
        Our <Link href='/insights/micro-lot-ethiopian-coffee-sourcing-guide' className='text-amber-700 hover:underline'>micro-lot sourcing guide</Link> covers how to establish direct relationships for pre-competition quality levels. For pricing benchmarks and contract structures, see our <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='text-amber-700 hover:underline'>FOB pricing guide</Link> and <Link href='/insights/ethiopian-coffee-contracts-payment-terms-guide' className='text-amber-700 hover:underline'>contracts and payment terms guide</Link>.
      </p>

      <div className='bg-green-50 border border-green-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3 flex items-center gap-2'>
          <HiOutlineUserGroup className='text-green-600' />
          What Origin-Connected Exporters Bring to CoE Buyers
        </h4>
        <ul className='text-sm text-gray-700 space-y-2'>
          <li><span className='font-semibold'>Regional context:</span> An exporter with active Sidama sourcing relationships understands which washing stations and sub-districts produced 2024 CoE lots, and can help buyers source from adjacent communities at pre-auction prices.</li>
          <li><span className='font-semibold'>Ongoing supply continuity:</span> CoE lots run out. A direct exporter relationship provides the same-region, comparable-quality supply between auction cycles.</li>
          <li><span className='font-semibold'>Export logistics for CoE winners:</span> If you win a CoE auction, an ACE-authorized exporter in Ethiopia handles the documentation and export. Establishing that relationship early, before the auction, prevents post-auction delays.</li>
          <li><span className='font-semibold'>Sample access before CoE submission window:</span> Exporters who work with Sidama producers can send pre-competition samples from the same harvest before lots are submitted to CoE, giving buyers early access to likely competition-caliber coffees.</li>
        </ul>
      </div>

      {/* CTA */}
      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Source Ethiopian Coffee at Every Quality Level</h4>
        <p className='my-2'>
          Whether you are preparing to bid at the next Ethiopian CoE auction or building a standard specialty Ethiopian program, Ethio Coffee Import and Export PLC can support both channels. We maintain active sourcing relationships in Sidama, Guji, Yirgacheffe, Sidamo, Harar, Limu, and Jimma (including regions that produce CoE-entered lots) and can supply micro-lots, standard specialty, and organic-certified Ethiopian green coffee year-round.
        </p>
        <div className='flex flex-wrap gap-4 mt-4'>
          <Link href='/offerings' className='bg-dark text-primary px-6 py-3 rounded font-bold hover:bg-gray-800 transition'>
            View Current Offerings
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
            <h4 className='font-bold text-gray-800 mb-2'>What is the difference between a Cup of Excellence lot and a National Winner lot in Ethiopia?</h4>
            <p className='text-sm text-gray-600'>
              CoE lots score 87+ after international jury evaluation; National Winner lots score 85–86.99. Both are verified blind by an international panel of 20–25 jurors, but CoE lots represent the top tier. CoE lots are packaged in 30 kg vacuum-sealed boxes; NW lots in 69 kg hermetic bags. CoE lots typically command higher auction premiums.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Can any international buyer participate in the Ethiopian CoE auction, or is it restricted to large importers?</h4>
            <p className='text-sm text-gray-600'>
              Any buyer can register for an ACE auction by paying the per-auction fee ($250 for non-members, $25 for ACE members). There is no minimum volume requirement to bid. Small roasters have purchased single Ethiopian CoE lots alongside large trading companies in the same auction. The limiting factor is typically the sample set cost ($395–$850) and the lot minimum size (90–1,335 kg in 2024).
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Why did all 27 CoE lots in the 2024 Ethiopia competition use natural processing?</h4>
            <p className='text-sm text-gray-600'>
              Natural-processed Ethiopian coffees from Sidama tend to develop concentrated fruit intensity and sweetness that score well on the SCA rubric used by CoE judges, particularly in the fragrance, aroma, and flavor descriptors. Washed lots can score 87+ but require exceptional fermentation control and very high elevation. The 2024 field may also reflect self-selection: Sidama producers who have previously won CoE spots know natural processing aligns with competition scoring, so they submit those lots preferentially.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>How do I ship a small Ethiopian CoE lot (90–300 kg) to my roastery?</h4>
            <p className='text-sm text-gray-600'>
              Lots under 300 kg are most economically shipped by air freight. Air freight from Addis Ababa to major European or U.S. hubs runs 2–6 USD/kg, making the total shipping cost per 150 kg lot approximately $300–$900, manageable when the coffee itself is $30–$100+/kg. Larger lots (600–1,335 kg) can use LCL ocean freight, but transit time (5–8 weeks) should factor into your freshness planning. The ACE-authorized Ethiopian exporter coordinates logistics after the auction.
            </p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>How does Ethiopian CoE compare to the AFCA Taste of Harvest competition for buyers?</h4>
            <p className='text-sm text-gray-600'>
              CoE (run by ACE) and AFCA Taste of Harvest (run by the African Fine Coffees Association) are separate programs with different structures. CoE uses an international jury scoring system with a strict 87+ threshold for winning lots, and sells through ACE&apos;s global online auction. AFCA ToH uses national qualification rounds with continental finals, certifies winners for one year with AFCA certification numbers, and sells through the M-Cultivo auction platform. Both recognize Ethiopian quality but operate independently. Some Ethiopian lots have competed in both programs in the same year.
            </p>
          </div>
        </div>
      </section>

      {/* RELATED ARTICLES */}
      <div className='my-10 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4'>Related Articles</h3>
        <div className='grid md:grid-cols-2 gap-4'>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Premium Lot Sourcing</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/micro-lot-ethiopian-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Micro-Lot Ethiopian Coffee: Sourcing &amp; Pricing Guide</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-gesha-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Ethiopian Gesha Coffee: Buyer&apos;s Sourcing Guide</Link></li>
              <li>&bull; <Link href='/insights/afca-taste-of-harvest-ethiopian-coffee-competition' className='text-amber-700 hover:underline'>AFCA Taste of Harvest: Ethiopian Coffee Competition</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Quality Evaluation</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/how-to-cup-evaluate-ethiopian-coffee-samples' className='text-amber-700 hover:underline'>How to Cup &amp; Evaluate Ethiopian Coffee Samples</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-sample-approval-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Sample Approval Guide</Link></li>
              <li>&bull; <Link href='/insights/green-coffee-quality-control-defects-grading' className='text-amber-700 hover:underline'>Green Coffee Quality Control: Defects &amp; Grading</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Origin Guides (Winning Regions)</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/sidamo-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Sidamo Coffee: Buyer&apos;s Sourcing Guide</Link></li>
              <li>&bull; <Link href='/insights/bombe-sidama-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Bombe Sidama Coffee: Ethiopia&apos;s Specialty Micro-Region</Link></li>
              <li>&bull; <Link href='/insights/guji-coffee-sourcing-guide' className='text-amber-700 hover:underline'>Guji Coffee: Buyer&apos;s Sourcing Guide</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Buying Process &amp; Trade Logistics</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Pricing for Importers</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-contracts-payment-terms-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Contracts &amp; Payment Terms</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-traceability-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Traceability: Buyer&apos;s Guide</Link></li>
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
