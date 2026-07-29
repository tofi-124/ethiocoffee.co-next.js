'use client'

import Script from 'next/script'
import { useEffect, useRef, useState } from 'react'

const TURNSTILE_SITE_KEY = '0x4AAAAAAEAeNX_lWUL-ykI1'
const TURNSTILE_ACTION = 'turnstile-spin-v2'

type TurnstileOptions = {
  sitekey: string
  action: string
  theme: 'auto'
  size: 'flexible'
  callback: (token: string) => void
  'expired-callback': () => void
  'error-callback': () => void
}

type TurnstileApi = {
  render: (container: HTMLElement, options: TurnstileOptions) => string
  reset: (widgetId: string) => void
  remove: (widgetId: string) => void
}

declare global {
  interface Window {
    turnstile?: TurnstileApi
  }
}

type TurnstileProps = {
  onVerify: (token: string) => void
  onError: () => void
  resetKey: number
}

const Turnstile = ({ onVerify, onError, resetKey }: TurnstileProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const widgetIdRef = useRef<string | null>(null)
  const onVerifyRef = useRef(onVerify)
  const onErrorRef = useRef(onError)
  const [scriptReady, setScriptReady] = useState(false)

  useEffect(() => {
    onVerifyRef.current = onVerify
    onErrorRef.current = onError
  }, [onVerify, onError])

  useEffect(() => {
    if (window.turnstile) setScriptReady(true)
  }, [])

  useEffect(() => {
    if (!scriptReady || !containerRef.current || !window.turnstile || widgetIdRef.current) {
      return
    }

    widgetIdRef.current = window.turnstile.render(containerRef.current, {
      sitekey: TURNSTILE_SITE_KEY,
      action: TURNSTILE_ACTION,
      theme: 'auto',
      size: 'flexible',
      callback: (token) => onVerifyRef.current(token),
      'expired-callback': () => onVerifyRef.current(''),
      'error-callback': () => {
        onVerifyRef.current('')
        onErrorRef.current()
      },
    })

    return () => {
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current)
        widgetIdRef.current = null
      }
    }
  }, [scriptReady])

  useEffect(() => {
    if (resetKey > 0 && widgetIdRef.current && window.turnstile) {
      window.turnstile.reset(widgetIdRef.current)
    }
  }, [resetKey])

  return (
    <>
      <Script
        id='cloudflare-turnstile'
        src='https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit'
        strategy='afterInteractive'
        onReady={() => setScriptReady(true)}
      />
      <div
        ref={containerRef}
        className='cf-turnstile min-h-[65px] w-full'
        data-sitekey={TURNSTILE_SITE_KEY}
        data-action={TURNSTILE_ACTION}
      />
    </>
  )
}

export default Turnstile
