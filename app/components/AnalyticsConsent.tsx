'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Script from 'next/script'

type Consent = 'accepted' | 'declined' | null

const STORAGE_KEY = 'ethio-coffee-analytics-consent'

export default function AnalyticsConsent() {
  const [consent, setConsent] = useState<Consent>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    setConsent(saved === 'accepted' || saved === 'declined' ? saved : null)
    setReady(true)
  }, [])

  const choose = (value: Exclude<Consent, null>) => {
    window.localStorage.setItem(STORAGE_KEY, value)
    setConsent(value)
  }

  return (
    <>
      {consent === 'accepted' && (
        <>
          <Script
            src='https://www.googletagmanager.com/gtag/js?id=G-7XP6DNBM6J'
            strategy='lazyOnload'
          />
          <Script id='google-analytics' strategy='lazyOnload'>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-7XP6DNBM6J', { anonymize_ip: true });
            `}
          </Script>
          <Script id='microsoft-clarity' strategy='lazyOnload'>
            {`
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i+"?ref=bwt";
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "w6hpgb5sdh");
            `}
          </Script>
        </>
      )}

      {ready && consent === null && (
        <section
          aria-label='Analytics privacy choices'
          className='fixed inset-x-4 bottom-4 z-[100] mx-auto max-w-3xl rounded-lg border border-white/20 bg-dark p-4 text-primary shadow-2xl md:flex md:items-center md:gap-6'
        >
          <p className='flex-1 text-sm leading-relaxed'>
            We use optional analytics to understand site performance. You can accept or decline; the site works either way. Read our{' '}
            <Link href='/privacy' className='font-bold underline underline-offset-4'>privacy policy</Link>.
          </p>
          <div className='mt-4 flex shrink-0 gap-3 md:mt-0'>
            <button
              type='button'
              onClick={() => choose('declined')}
              className='rounded border border-primary/50 px-4 py-2 text-sm font-bold hover:bg-primary/10'
            >
              Decline
            </button>
            <button
              type='button'
              onClick={() => choose('accepted')}
              className='rounded bg-accent px-4 py-2 text-sm font-bold text-white hover:opacity-90'
            >
              Accept analytics
            </button>
          </div>
        </section>
      )}
    </>
  )
}
