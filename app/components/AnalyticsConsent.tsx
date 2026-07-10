'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Script from 'next/script'

type Consent = 'accepted' | 'declined' | null

const STORAGE_KEY = 'ethio-coffee-analytics-consent'

export default function AnalyticsConsent() {
  const [consent, setConsent] = useState<Consent>(null)
  const [ready, setReady] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    setConsent(saved === 'accepted' || saved === 'declined' ? saved : null)
    setReady(true)
  }, [])

  // Slide the card in after mount so it doesn't pop into view mid-paint
  useEffect(() => {
    if (!ready || consent !== null) return
    const t = setTimeout(() => setVisible(true), 600)
    return () => clearTimeout(t)
  }, [ready, consent])

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
          className={`fixed inset-x-0 bottom-0 z-[100] transition-all duration-500 ease-out md:inset-x-auto md:bottom-6 md:left-6 md:w-full md:max-w-sm ${
            visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-8 opacity-0'
          }`}
        >
          <div className='border-t border-white/15 bg-dark px-5 pt-5 text-primary shadow-[0_-12px_40px_rgba(27,58,75,0.35)] pb-[calc(1.25rem+env(safe-area-inset-bottom))] md:rounded-2xl md:border md:p-6 md:shadow-2xl'>
            <p className='font-inconsolata text-xsm font-bold uppercase tracking-[0.25em] text-secondary'>
              Privacy choice
            </p>
            <p className='mt-2 text-sm leading-relaxed text-primary/90'>
              We use optional analytics to understand how the site performs. Decline and everything
              still works. Details in our{' '}
              <Link
                href='/privacy'
                className='font-bold text-primary underline decoration-accent decoration-2 underline-offset-4 hover:text-white'
              >
                privacy policy
              </Link>
              .
            </p>
            <div className='mt-4 grid grid-cols-2 gap-3'>
              <button
                type='button'
                onClick={() => choose('declined')}
                className='min-h-[44px] rounded-lg border border-primary/40 px-4 text-sm font-bold text-primary/90 transition-colors hover:border-primary hover:bg-primary/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary'
              >
                Decline
              </button>
              <button
                type='button'
                onClick={() => choose('accepted')}
                className='min-h-[44px] rounded-lg bg-accent px-4 text-sm font-bold text-white transition-colors hover:bg-accent/85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary'
              >
                Accept
              </button>
            </div>
          </div>
        </section>
      )}
    </>
  )
}
