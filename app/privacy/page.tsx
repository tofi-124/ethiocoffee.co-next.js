import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | Ethio Coffee',
  description: 'How Ethio Coffee collects, uses, and protects information submitted through this website.',
  alternates: { canonical: 'https://www.ethiocoffee.co/privacy' },
  openGraph: {
    title: 'Privacy Policy | Ethio Coffee',
    description: 'How Ethio Coffee handles website and inquiry information.',
    url: 'https://www.ethiocoffee.co/privacy',
    type: 'website',
  },
}

export default function PrivacyPage() {
  return (
    <main className='bg-primary px-6 py-20 text-dark'>
      <article className='mx-auto max-w-3xl'>
        <h1 className='text-4xl font-extrabold md:text-5xl'>Privacy Policy</h1>
        <p className='mt-3 text-sm text-dark/60'>Effective date: July 10, 2026</p>

        <div className='mt-10 space-y-8 leading-relaxed text-dark/80'>
          <section>
            <h2 className='mb-3 text-2xl font-bold text-dark'>Information we collect</h2>
            <p>We collect information you choose to provide through contact, quote, sample-order, and checkout forms, such as your name, business details, email, phone number, shipping address, and message. Payment details are processed by PayPal and are not stored by this website.</p>
          </section>
          <section>
            <h2 className='mb-3 text-2xl font-bold text-dark'>How we use information</h2>
            <p>We use this information to answer inquiries, prepare quotes, process and fulfill sample orders, calculate shipping, provide customer service, prevent abuse, and maintain business records.</p>
          </section>
          <section>
            <h2 className='mb-3 text-2xl font-bold text-dark'>Analytics and local storage</h2>
            <p>This site uses Vercel Analytics and Speed Insights, which are cookieless and collect anonymous, aggregated performance and traffic data. Google Analytics and Microsoft Clarity load only after you accept optional analytics. Your choice and shopping cart are stored in your browser. You may decline analytics without losing access to the site.</p>
          </section>
          <section>
            <h2 className='mb-3 text-2xl font-bold text-dark'>Service providers and transfers</h2>
            <p>We share information only as needed with providers that support email delivery, payments, shipping, hosting, analytics, and fraud prevention. Because we serve international customers, information may be processed in countries other than your own.</p>
          </section>
          <section>
            <h2 className='mb-3 text-2xl font-bold text-dark'>Retention and your choices</h2>
            <p>We retain information only as long as reasonably required for the purposes above and applicable legal obligations. You may request access, correction, or deletion, subject to legal and business-record requirements.</p>
          </section>
          <section>
            <h2 className='mb-3 text-2xl font-bold text-dark'>Contact</h2>
            <p>Email <a href='mailto:coffee@ethiocoffee.co' className='font-bold underline'>coffee@ethiocoffee.co</a> with privacy questions or requests. You can also use our <Link href='/contact-us' className='font-bold underline'>contact page</Link>.</p>
          </section>
        </div>
      </article>
    </main>
  )
}
