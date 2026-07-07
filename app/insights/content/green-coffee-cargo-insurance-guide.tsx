import Link from 'next/link'
import ResponsiveImage from '@/app/components/ResponsiveImage'
import {
  HiOutlineLightBulb,
  HiOutlineClipboardDocumentList,
  HiOutlineShieldCheck,
  HiOutlineScale,
  HiOutlineArrowsRightLeft,
  HiOutlineExclamationTriangle,
  HiOutlineGlobeEuropeAfrica,
  HiOutlineLifebuoy,
  HiOutlineDocumentCheck,
  HiOutlineClipboardDocumentCheck
} from 'react-icons/hi2'

type InsightContentProps = {
  title: string
  date: string
  large_image_url: string
}

export default function GreenCoffeeCargoInsuranceGuide({ title, date, large_image_url }: InsightContentProps) {
  return (
    <>
      <h1 className='text-5xl font-extrabold text-dark leading-tight mb-4'>
        {title}
      </h1>
      <h2 className='text-2xl font-medium text-gray-700 mb-6'>
        What green coffee cargo insurance actually covers, where the standard CIF policy falls short, and how to protect a container of Ethiopian coffee from Djibouti to your warehouse door.
      </h2>

      <figure>
        <figcaption className='font-inconsolata my-2'>
          {title}
        </figcaption>
        <div className='w-full aspect-[5/3] overflow-hidden rounded-md'>
          <ResponsiveImage
            src={`/images/${large_image_url}`}
            alt='Green coffee cargo insurance: container terminal at the Port of Djibouti where Ethiopian coffee shipments load'
            fill
            objectFit='cover'
            className='w-full h-full'
            sizes='(max-width: 768px) 100vw, 768px'
          />
        </div>
        <figcaption className='text-xs text-gray-500 mt-1 font-inconsolata'>
          The container terminal at the Port of Djibouti, where Ethiopian coffee begins its ocean voyage. Photo: Skilla1st, <a href='https://commons.wikimedia.org/wiki/File:The_container_terminal_at_the_Port_of_Djibouti.jpg' target='_blank' rel='noopener noreferrer' className='underline'>Wikimedia Commons</a>, <a href='https://creativecommons.org/licenses/by-sa/4.0' target='_blank' rel='noopener noreferrer' className='underline'>CC BY-SA 4.0</a>.
        </figcaption>
      </figure>

      <div className='my-4 text-sm bg-amber-50 p-4 rounded-lg border border-amber-200'>
        <span className='font-semibold'>Category:</span>
        <span className='ml-2'>Importer Resources / Logistics &amp; Risk / Green Coffee Buying</span>
      </div>

      {/* KEY TAKEAWAY */}
      <div className='bg-amber-50 text-gray-800 p-6 rounded-lg my-8 border border-amber-200'>
        <h3 className='font-bold text-xl mb-3 flex items-center gap-2'>
          <HiOutlineLightBulb className='text-amber-400 flex-shrink-0' />Key Takeaway
        </h3>
        <p className='text-sm leading-relaxed'>
          Green coffee cargo insurance is priced at roughly 0.3% to 0.5% of insured value, which makes it the cheapest line item on a container worth $80,000 to $150,000, yet it is the one first-time importers most often get wrong. A CIF contract only obligates the exporter to buy minimum Institute Cargo Clauses (C) cover, which excludes theft, seawater entry, and wet damage; specialty buyers should hold ICC (A) all-risks cover instead. Insure at 110% of the CIF value, add war and strikes endorsements for Red Sea and Gulf of Aden transits, and confirm claims are payable at destination. Under FOB, nothing is insured unless you arrange it yourself.
        </p>
      </div>

      {/* TABLE OF CONTENTS */}
      <div className='my-8 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <HiOutlineClipboardDocumentList className='text-amber-600' />
          In This Guide
        </h3>
        <ol className='space-y-2 text-sm'>
          <li><a href='#what-cargo-insurance-covers' className='text-amber-700 hover:underline'>1. What Marine Cargo Insurance Covers on a Coffee Shipment</a></li>
          <li><a href='#icc-clauses' className='text-amber-700 hover:underline'>2. ICC (A), (B), (C): Which Clause Level Fits Green Coffee?</a></li>
          <li><a href='#incoterms-insurance' className='text-amber-700 hover:underline'>3. Who Insures the Shipment Under Each Incoterm?</a></li>
          <li><a href='#cif-gap' className='text-amber-700 hover:underline'>4. The CIF Insurance Gap on Specialty Lots</a></li>
          <li><a href='#war-risk-red-sea' className='text-amber-700 hover:underline'>5. War Risk Cover and the Red Sea in 2026</a></li>
          <li><a href='#general-average' className='text-amber-700 hover:underline'>6. General Average: The Risk Buyers Learn About Too Late</a></li>
          <li><a href='#open-policy' className='text-amber-700 hover:underline'>7. Open Policies vs Single-Shipment Certificates</a></li>
          <li><a href='#claims' className='text-amber-700 hover:underline'>8. Filing a Transit Damage Claim: A Step-by-Step Playbook</a></li>
          <li><a href='#faq' className='text-amber-700 hover:underline'>9. Frequently Asked Questions</a></li>
        </ol>
      </div>

      {/* INTRODUCTION */}
      <p className='text-lg leading-relaxed my-4'>
        <span className='font-bold'>Green coffee cargo insurance</span> sits at the bottom of most import checklists, somewhere after freight booking and before the customs broker&apos;s invoice. That ordering is backwards. A single 20ft container of specialty Ethiopian coffee represents $80,000 to $150,000 in cargo value, spends six to ten weeks in transit, and since 2023 has been loading at Djibouti, a port that sits directly on the Bab el-Mandeb strait at the center of the Red Sea shipping crisis. The premium to protect that container properly is a few hundred dollars. The cost of getting it wrong is the full value of the coffee, plus, in a general average event, a cash bond to release cargo that was never damaged at all.
      </p>

      <p className='my-4'>
        This guide explains cargo insurance the way a coffee buyer needs it: which perils each Institute Cargo Clauses level actually covers, why the minimum insurance bundled into a CIF quote is not enough for specialty lots, what war risk cover means for Djibouti-loaded containers in 2026, and exactly what to do in the first 72 hours after a damaged container lands. It covers the insurance side of risk; for commercial disputes with your seller over quality, see our <Link href='/insights/green-coffee-quality-claims-guide' className='underline font-bold'>green coffee quality claims guide</Link>, which handles a different problem with different rules.
      </p>

      {/* SECTION 1 */}
      <h3 id='what-cargo-insurance-covers' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineShieldCheck className='w-8 h-8 text-amber-600' />
        1. What Marine Cargo Insurance Covers on a Coffee Shipment
      </h3>

      <p className='my-4'>
        Marine cargo insurance indemnifies the owner of goods for physical loss or damage during transit, from fire and vessel sinking down to theft and water damage, depending on the clause level purchased. It is a separate contract from the ocean freight booking: the carrier&apos;s liability to you under the bill of lading is limited by international convention to amounts that rarely approach the real value of specialty coffee, which is why cargo owners buy their own cover rather than relying on carrier liability.
      </p>

      <p className='my-4'>
        Three features of the standard policy matter most for coffee. First, cover normally runs warehouse to warehouse under the ICC transit clause, not just port to port, so a properly written policy also protects the truck leg from the destination terminal to your roastery. Second, the insured value is conventionally set at 110% of the CIF value, the extra 10% representing the buyer&apos;s anticipated margin and incidental costs. Third, every policy carries exclusions that no clause level removes: ordinary loss of weight in transit, insufficient packing, delay, and inherent vice, the exclusion that matters most for an agricultural product that carries its own moisture. Each of these exclusions shapes how coffee claims play out, and we return to them in the claims section.
      </p>

      <div className='bg-blue-50 border border-blue-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3'>Quick definition: inherent vice</h4>
        <p className='text-sm text-gray-700'>
          Inherent vice is loss caused by the nature of the cargo itself rather than an external event. Green coffee shipped with excess internal moisture that later molds in the container is the classic coffee example. Insurers use this exclusion to contest condensation claims, which is why pre-shipment moisture documentation matters as much as the policy itself.
        </p>
      </div>

      {/* SECTION 2 */}
      <h3 id='icc-clauses' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineScale className='w-8 h-8 text-amber-600' />
        2. ICC (A), (B), (C): Which Clause Level Fits Green Coffee?
      </h3>

      <p className='my-4'>
        The Institute Cargo Clauses, standardized by the London market and last revised in 2009, define three levels of cover. ICC (C) insures only major casualties: fire, explosion, vessel grounding or sinking, collision, and general average events. ICC (B) adds named water perils, including seawater entering the container and packages lost overboard. ICC (A) is all-risks cover: everything is insured unless specifically excluded. For green coffee, the differences land exactly on the risks buyers actually face.
      </p>

      <div className='overflow-x-auto my-6'>
        <table className='w-full border-collapse text-sm'>
          <thead>
            <tr className='bg-dark text-primary'>
              <th className='p-3 text-left font-bold'>Peril on a coffee shipment</th>
              <th className='p-3 text-left font-bold'>ICC (C)</th>
              <th className='p-3 text-left font-bold'>ICC (B)</th>
              <th className='p-3 text-left font-bold'>ICC (A)</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Fire, explosion, vessel sinking or grounding</td>
              <td className='p-3'>Covered</td>
              <td className='p-3'>Covered</td>
              <td className='p-3'>Covered</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>General average contribution and jettison</td>
              <td className='p-3'>Covered</td>
              <td className='p-3'>Covered</td>
              <td className='p-3'>Covered</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Seawater or river water entering the container</td>
              <td className='p-3'>Excluded</td>
              <td className='p-3'>Covered</td>
              <td className='p-3'>Covered</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Package lost overboard or dropped during loading</td>
              <td className='p-3'>Excluded</td>
              <td className='p-3'>Covered</td>
              <td className='p-3'>Covered</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>Theft, pilferage, non-delivery of bags</td>
              <td className='p-3'>Excluded</td>
              <td className='p-3'>Excluded</td>
              <td className='p-3'>Covered</td>
            </tr>
            <tr className='border-b border-gray-200 bg-gray-50'>
              <td className='p-3 font-semibold'>Condensation and sweat damage</td>
              <td className='p-3'>Excluded</td>
              <td className='p-3'>Excluded</td>
              <td className='p-3'>Covered in principle, contested in practice</td>
            </tr>
            <tr className='border-b border-gray-200'>
              <td className='p-3 font-semibold'>War, strikes, piracy-related loss</td>
              <td className='p-3'>Separate clauses</td>
              <td className='p-3'>Separate clauses</td>
              <td className='p-3'>Separate clauses</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className='my-4'>
        The practical reading of that table: the two loss scenarios coffee importers most commonly experience, wet damage and missing bags, are only insured under ICC (A). ICC (C) exists because commodity contracts need a legal minimum, not because it reflects how coffee actually gets damaged. Specialty green coffee should travel under ICC (A) with war and strikes endorsements attached. The premium difference between (C) and (A) on a coffee container is typically measured in tens of dollars.
      </p>

      {/* SECTION 3 */}
      <h3 id='incoterms-insurance' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineArrowsRightLeft className='w-8 h-8 text-amber-600' />
        3. Who Insures the Shipment Under Each Incoterm?
      </h3>

      <p className='my-4'>
        Only two of the eleven Incoterms 2020 rules oblige anyone to buy insurance: CIF, where the seller must provide at least ICC (C) cover at 110% of the contract value, and CIP, which since the 2020 revision requires the seller to provide ICC (A), per the <a href='https://iccwbo.org/business-solutions/incoterms-rules/incoterms-2020/' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:text-amber-900 underline'>International Chamber of Commerce</a>. Under FOB, CFR, FCA, and every other term, insurance is nobody&apos;s obligation; the buyer carries the risk from the transfer point and insures voluntarily or not at all.
      </p>

      <p className='my-4'>
        Since most Ethiopian coffee is quoted FOB Djibouti, the default position for most buyers reading this is: your coffee is uninsured from the moment it crosses the ship&apos;s rail unless you have arranged cover. The inland leg from the mill to Djibouti is the exporter&apos;s risk and the exporter&apos;s insurance problem, not yours. For the full risk-transfer mechanics of each term and a decision matrix for choosing between them, see our <Link href='/insights/ethiopian-coffee-incoterms-guide' className='underline font-bold'>Ethiopian coffee Incoterms guide</Link>; this article stays on the insurance side.
      </p>

      <p className='my-4'>
        Consider a Portland roaster buying its first full container, FOB Djibouti, worth $85,000. The freight forwarder&apos;s booking form has an insurance checkbox with a quote of roughly $400; the roaster, watching costs, declines it, assuming the carrier is responsible for the cargo it carries. The carrier&apos;s actual liability under US COGSA is capped at $500 per package unless a higher value is declared, and a jute bag is a package. Sixty days of exposure across the Gulf of Aden, a transshipment port, an Atlantic crossing, and a rail leg, on a cargo the carrier owes almost nothing for, to save $400. Every experienced importer insures; the only question is at what clause level and price.
      </p>

      {/* SECTION 4 */}
      <h3 id='cif-gap' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineExclamationTriangle className='w-8 h-8 text-amber-600' />
        4. The CIF Insurance Gap on Specialty Lots
      </h3>

      <p className='my-4'>
        A CIF quote sounds like the insured option, and that assumption is exactly the trap. CIF obliges the exporter to insure only to the ICC (C) minimum unless the contract says otherwise. Look again at the table in section 2: under ICC (C), a container that arrives with 40 water-stained bags, or 30 bags short, generates no claim at all. The policy responds if the ship burns or sinks, and to general average, and to little else that happens to coffee in the real world.
      </p>

      <div className='border-l-4 border-amber-500 pl-6 bg-gray-50 p-4 my-6'>
        <p className='text-sm text-gray-700'>
          <span className='font-bold'>From the exporter&apos;s side:</span> when we quote CIF, we arrange the certificate through marine underwriters in Addis Ababa, and the clause level is printed on its face. In our experience fewer than half of first-time CIF buyers ever ask which clauses apply before the shipment sails; the ones who have imported through a damage season ask before they ask the price. Requesting ICC (A) cover in the contract, and paying the small premium difference, is a routine amendment any exporter can accommodate.
        </p>
      </div>

      <p className='my-4'>
        There is a second, quieter gap: the CIF policy is written by an insurer of the seller&apos;s choosing, in the seller&apos;s market. If a claim arises, you are dealing with an underwriter you did not select, possibly under a legal system you do not know, with claims payable in a place that may not be your destination. The certificate should state that claims are payable at destination, in a currency you can use, with a named survey agent at your port. If those lines are missing, ask for them before the coffee ships. Many established importers sidestep the whole issue by buying CFR instead, taking the seller&apos;s freight arrangement but placing their own ICC (A) cover with their own insurer.
      </p>

      {/* SECTION 5 */}
      <h3 id='war-risk-red-sea' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineGlobeEuropeAfrica className='w-8 h-8 text-amber-600' />
        5. War Risk Cover and the Red Sea in 2026
      </h3>

      <p className='my-4'>
        War risk is excluded from every standard ICC level and must be added back through the Institute War Clauses and Institute Strikes Clauses. Until November 2023 this was boilerplate nobody priced seriously. It is not boilerplate for Ethiopian coffee, because every container loaded at Djibouti begins its voyage inside the listed high-risk area: the port faces the Bab el-Mandeb strait, and vessels calling there transit the Gulf of Aden whether they continue north through the Suez Canal or south around the Cape of Good Hope. Rerouting changes the transit time; it does not take a Djibouti loading out of the risk zone.
      </p>

      <p className='my-4'>
        The market has moved with the conflict. Industry reporting in July 2025 put quoted war risk rates near 1% of vessel value during active attack periods, easing to 0.2% to 0.3% in lulls (Bloomberg, 2025). The ceasefire that began in late 2025 brought several months of calm, but by March 2026 Houthi officials had signaled a resumption of attacks and carriers including Maersk reversed planned Red Sea returns, keeping Cape of Good Hope routings as the default for Europe-bound services (<a href='https://gcaptain.com/red-sea-corridor-slips-back-into-crisis-as-houthi-threats-resurface/' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:text-amber-900 underline'>gCaptain, March 2026</a>). Marine insurance analysts expect elevated pricing and scenario-based underwriting to persist even through quiet periods, with normalization measured in quarters, not weeks (<a href='https://www.kpler.com/blog/red-sea-risk-maritime-insurance' target='_blank' rel='noopener noreferrer' className='text-amber-700 hover:text-amber-900 underline'>Kpler, November 2025</a>).
      </p>

      <p className='my-4'>
        For a coffee buyer the practical consequences are three. First, always attach war and strikes clauses on Djibouti-loaded cargo; the endorsement typically costs a small fraction of the base premium and is the difference between a paid claim and a denied one if a vessel is attacked or diverted under threat. Second, expect the war risk element of your premium to move between renewal and shipment date; underwriters reprice the listed area on short notice, sometimes with seven-day cancellation clauses. Third, budget transit time realistically: Cape routings add roughly 10 to 14 days to Europe against the pre-2024 Suez schedule, which lengthens your exposure window and your financing cost, a knock-on we cover in the <Link href='/insights/ethiopian-coffee-landed-cost-guide' className='underline font-bold'>Ethiopian coffee landed cost guide</Link>.
      </p>

      <div className='border-l-4 border-amber-500 pl-6 bg-gray-50 p-4 my-6'>
        <p className='text-sm text-gray-700'>
          <span className='font-bold'>From the exporter&apos;s side:</span> the clearest shift we have seen in buyer behavior since 2024 is in the RFQs. Buyers who used to ask for CIF now ask for CFR or FOB specifically so they can control their own war risk endorsement and know exactly what their cover says, rather than discovering the seller&apos;s policy terms after an incident. We consider that a sensible trade and quote accordingly.
        </p>
      </div>

      {/* SECTION 6 */}
      <h3 id='general-average' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineLifebuoy className='w-8 h-8 text-amber-600' />
        6. General Average: The Risk Buyers Learn About Too Late
      </h3>

      <p className='my-4'>
        General average is a centuries-old rule of maritime law, codified in the York-Antwerp Rules, under which every cargo owner on a voyage shares the cost of a sacrifice made to save the whole venture. If the crew jettisons containers to stabilize the ship, fights a fire, or the owner hires salvors after a grounding, all cargo interests contribute in proportion to their cargo&apos;s value, whether or not their own goods were touched.
      </p>

      <p className='my-4'>
        The part that surprises coffee buyers: after a general average declaration, the shipowner holds a lien over all cargo, and your undamaged container will not be released until security is posted. If you are insured, your insurer issues the general average guarantee and the container moves; the cost of the eventual contribution falls on the policy. If you are uninsured, you post a cash deposit, historically a meaningful percentage of your cargo value, and wait for an adjustment process that can run for years. When the Ever Given grounded in the Suez Canal in March 2021 and general average was declared, uninsured shippers faced exactly this: cash security demands to retrieve cargo that had suffered no damage at all. Every ICC level, including minimum (C), covers general average contributions, which is the strongest single argument that even a bulk commercial-grade shipment should never sail bare.
      </p>

      {/* SECTION 7 */}
      <h3 id='open-policy' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineDocumentCheck className='w-8 h-8 text-amber-600' />
        7. Open Policies vs Single-Shipment Certificates
      </h3>

      <p className='my-4'>
        Cargo insurance is bought in two forms. A single-shipment certificate covers one voyage and is usually purchased through the freight forwarder at booking; it is the right tool for a first container or an occasional buyer. An open policy (or annual cover) is a standing contract with a marine insurer that automatically attaches to every shipment you make in the year, declared monthly or quarterly, with pre-agreed rates, clause levels, and destinations. From roughly three to five containers a year, the open policy wins on price, on admin, and on certainty: no shipment can sail accidentally uninsured because someone forgot a checkbox.
      </p>

      <p className='my-4'>
        The arithmetic is straightforward. A Hamburg importer moving 25 containers of Ethiopian coffee a year, average insured value $110,000 (110% of a $100,000 CIF value), declares about $2.75 million of turnover to its open policy. At a 0.35% rate the annual premium is roughly $9,600, with ICC (A), war and strikes endorsements, and warehouse-to-warehouse transit built into the wording once, negotiated once, and audited once. The same importer buying 25 forwarder certificates would pay more per shipment, face inconsistent wordings, and hold 25 different claims procedures. Buyers at this scale should also ask their insurer about storage extensions covering goods at destination warehouse, which bridges the gap until their stock policy takes over; where that matters is covered in our <Link href='/insights/green-coffee-shelf-life-storage-guide' className='underline font-bold'>green coffee storage guide</Link>.
      </p>

      <div className='bg-green-50 border border-green-200 rounded-lg p-6 my-6'>
        <h4 className='font-bold text-lg mb-3'>What to check on any insurance certificate before the vessel sails</h4>
        <ul className='text-sm text-gray-700 space-y-2 list-disc pl-5'>
          <li>Clause level states ICC (A), not ICC (C), with Institute War Clauses and Institute Strikes Clauses attached</li>
          <li>Insured value equals 110% of the CIF value of the shipment</li>
          <li>The assured party is you (or the certificate is endorsed to your order), so you can claim directly</li>
          <li>Claims payable at destination, in your currency, with a named settling or survey agent at your port</li>
          <li>Transit clause runs warehouse to warehouse, not port to port</li>
          <li>Voyage description matches the bill of lading, including transshipment if any</li>
        </ul>
      </div>

      {/* SECTION 8 */}
      <h3 id='claims' className='text-2xl font-extrabold mt-12 mb-4 flex items-center gap-3'>
        <HiOutlineClipboardDocumentCheck className='w-8 h-8 text-amber-600' />
        8. Filing a Transit Damage Claim: A Step-by-Step Playbook
      </h3>

      <p className='my-4'>
        A cargo claim is won or lost in the first 72 hours after delivery, mostly on documentation. The sequence below reflects how marine claims actually process; skipping the early steps is the most common reason otherwise valid coffee claims fail.
      </p>

      <ol className='list-decimal pl-6 my-4 space-y-3'>
        <li>
          <span className='font-semibold'>Note visible damage before signing anything.</span> If the container arrives with a broken seal, holed walls, or water staining visible at the doors, write it on the delivery interchange or receipt. A clean signature is evidence the cargo arrived sound.
        </li>
        <li>
          <span className='font-semibold'>Give written notice of concealed damage within three days.</span> Under US COGSA and the Hague-Visby Rules, damage discovered after delivery must be notified to the carrier in writing within three days to preserve the presumption in your favor. Email counts; silence costs.
        </li>
        <li>
          <span className='font-semibold'>Notify your insurer immediately and request a survey.</span> Do not sort, dump, sell, or roast affected bags before the surveyor attends or explicitly waives attendance. Moving cargo first is the second most common claim-killer.
        </li>
        <li>
          <span className='font-semibold'>Photograph everything in sequence.</span> Seal number intact on arrival, doors opening, liner condition, stow pattern, stain patterns on bags, and any data logger readouts. Condensation claims in particular turn on whether water came from outside the cargo or inside it.
        </li>
        <li>
          <span className='font-semibold'>Mitigate.</span> Segregate wet or smelly bags from sound ones and protect the remainder; policies require reasonable steps to prevent the loss growing, and insurers pay the mitigation costs.
        </li>
        <li>
          <span className='font-semibold'>Assemble the documentation pack.</span> Bill of lading, insurance certificate, commercial invoice, packing list, survey report, delivery receipts with your notations, and the pre-shipment quality and moisture certificates. That last item is your answer to an inherent vice defense: a lot documented at safe moisture on departure, arriving wet, points to a transit cause. Our <Link href='/insights/green-coffee-moisture-content-water-activity-guide' className='underline font-bold'>moisture content and water activity guide</Link> explains what those certificates should show, and the <Link href='/insights/green-coffee-shipping-documents-checklist' className='underline font-bold'>shipping documents checklist</Link> covers the rest of the file.
        </li>
        <li>
          <span className='font-semibold'>Watch the time bar.</span> Suits against ocean carriers are barred one year from delivery under COGSA and Hague-Visby. Your insurer pays your claim and pursues the carrier itself by subrogation, one more service the premium buys.
        </li>
      </ol>

      <div className='border-l-4 border-amber-500 pl-6 bg-gray-50 p-4 my-6'>
        <p className='text-sm text-gray-700'>
          <span className='font-bold'>From the exporter&apos;s side:</span> the condensation disputes we see cluster in one pattern: containers loaded in Djibouti&apos;s heat arriving into northern European winters, where the temperature swing across the voyage is largest. For November through February departures we specify under-deck stowage away from the container doors in our shipping instructions, and we photograph liner and bag condition at stuffing so the buyer&apos;s claim file starts at our warehouse, not at their port. Buyers should ask their exporter for those loading photos as a standard document.
        </p>
      </div>

      <p className='my-4'>
        Keep the two claim tracks separate in your head and your correspondence. Cargo insurance responds to physical transit loss and damage. Cupping defects, taints that trace to processing, or grade discrepancies are commercial quality claims against your contract with the seller, on contract timelines, with arbitration rules of their own. Filing a quality problem as a cargo claim, or vice versa, wastes weeks on the wrong desk. Well-run programs decide which track a problem belongs to within days of landing, and the <Link href='/insights/ethiopian-coffee-contracts-payment-terms-guide' className='underline font-bold'>contract terms you negotiated</Link> determine the quality track&apos;s rules.
      </p>

      <p className='my-4'>
        Green coffee cargo insurance is, in the end, a cheap answer to an expensive question. For 0.3% to 0.5% of a container&apos;s value, an ICC (A) policy with war cover converts the six-week, ten-thousand-mile journey from Djibouti into a documented, recoverable risk. Buy it at the right clause level, check the certificate before the vessel sails, and know the 72-hour playbook before you ever need it.
      </p>

      {/* CTA BLOCK */}
      <div className='bg-amber-50 p-6 rounded-lg my-8 border border-amber-200'>
        <h4 className='font-bold text-xl mb-3'>Ship Ethiopian Coffee with a Complete Document File</h4>
        <p className='my-2'>
          We quote FOB, CFR, or CIF to match how you manage risk, state clause levels on every CIF certificate, and provide pre-shipment moisture certificates and loading photos as standard documents. Request current offers or samples and see how an origin-connected exporter prepares a shipment.
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
      <h3 id='faq' className='text-2xl font-extrabold mt-12 mb-4'>
        9. Frequently Asked Questions
      </h3>

      <section className='mb-12 bg-gray-50 rounded-xl p-8 border border-gray-200'>
        <div className='space-y-6'>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Does a CIF contract include enough insurance for specialty green coffee?</h4>
            <p className='text-sm text-gray-600'>Usually not. CIF only obliges the seller to provide minimum ICC (C) cover, which excludes theft, seawater entry, and wet damage, the losses coffee shipments most often suffer. Either amend the contract to require ICC (A) cover with war clauses, or buy CFR and place your own all-risks policy.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>How much does green coffee cargo insurance cost in 2026?</h4>
            <p className='text-sm text-gray-600'>Base ICC (A) cover typically runs 0.3% to 0.5% of insured value, so roughly $300 to $600 on a $110,000 insured container. War risk endorsements for Red Sea and Gulf of Aden transits add a variable surcharge that has moved with the Houthi threat level since 2023. Annual open policies price lower per shipment than single certificates.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Does cargo insurance cover condensation damage to green coffee?</h4>
            <p className='text-sm text-gray-600'>Only ICC (A) all-risks cover responds to condensation, and insurers often contest these claims under the inherent vice exclusion, arguing the moisture came from the beans themselves. Pre-shipment moisture certificates, loading photos, and a prompt independent survey at destination are what turn a contested condensation claim into a paid one.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>What is general average, and what happens if my coffee is uninsured?</h4>
            <p className='text-sm text-gray-600'>General average makes every cargo owner on a voyage share the cost of sacrifices made to save the ship, such as jettisoned containers or salvage after a grounding. Insured buyers have their insurer post the release guarantee; uninsured buyers must post cash security to retrieve even undamaged containers, as happened after the Ever Given grounding in 2021.</p>
          </div>
          <div>
            <h4 className='font-bold text-gray-800 mb-2'>Do Ethiopian coffee shipments need war risk cover in 2026?</h4>
            <p className='text-sm text-gray-600'>Yes. Djibouti sits on the Bab el-Mandeb strait, so every vessel calling there transits the listed high-risk area whether it routes via Suez or the Cape of Good Hope. War and strikes clauses are excluded from standard ICC cover and must be attached separately; the endorsement is inexpensive relative to the exposure.</p>
          </div>
        </div>
      </section>

      {/* RELATED ARTICLES */}
      <div className='my-10 bg-gray-50 p-6 rounded-lg border border-gray-200'>
        <h3 className='text-xl font-bold mb-4'>Related Articles</h3>
        <div className='grid md:grid-cols-2 gap-4'>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Logistics &amp; Risk</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/ethiopian-coffee-incoterms-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Incoterms: FOB, FCA, CIF &amp; DAP Explained</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-landed-cost-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Landed Cost: Import Cost Guide</Link></li>
              <li>&bull; <Link href='/insights/green-coffee-shipping-documents-checklist' className='text-amber-700 hover:underline'>Green Coffee Shipping Documents Checklist</Link></li>
              <li>&bull; <Link href='/insights/specialty-coffee-storage-freight-logistics' className='text-amber-700 hover:underline'>Specialty Coffee Storage in Sea Freight</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Quality &amp; Claims</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/green-coffee-quality-claims-guide' className='text-amber-700 hover:underline'>Green Coffee Quality Claims Guide</Link></li>
              <li>&bull; <Link href='/insights/green-coffee-moisture-content-water-activity-guide' className='text-amber-700 hover:underline'>Green Coffee Moisture Content and Water Activity Guide</Link></li>
              <li>&bull; <Link href='/insights/green-coffee-packaging-bag-types-guide' className='text-amber-700 hover:underline'>Green Coffee Packaging: Bag Types &amp; Buyer&apos;s Guide</Link></li>
              <li>&bull; <Link href='/insights/green-coffee-shelf-life-storage-guide' className='text-amber-700 hover:underline'>Green Coffee Shelf Life: Storage Guide for Buyers</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Buying from Ethiopia</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/ethiopian-coffee-export-process-buyers-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Export Process: A Buyer&apos;s Guide</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-contracts-payment-terms-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Contracts &amp; Payment Terms Guide</Link></li>
              <li>&bull; <Link href='/insights/ethiopian-coffee-pricing-fob-guide' className='text-amber-700 hover:underline'>Ethiopian Coffee Pricing for Importers</Link></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-2 text-sm'>Market Intelligence</h4>
            <ul className='space-y-1 text-sm'>
              <li>&bull; <Link href='/insights/coffee-c-market-explained-for-ethiopian-coffee-buyers' className='text-amber-700 hover:underline'>Coffee C Market Explained for Ethiopian Coffee Buyers</Link></li>
              <li>&bull; <Link href='/insights/green-coffee-financing-hedging-importers-guide' className='text-amber-700 hover:underline'>Green Coffee Price Hedging: A Practical Importer&apos;s Guide</Link></li>
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
