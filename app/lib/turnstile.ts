const SITEVERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify'
const TOKEN_MAX_LENGTH = 2048

type TurnstileResult = {
  success: boolean
  'error-codes'?: string[]
}

type VerifyTurnstileOptions = {
  token: unknown
  remoteIp: string
}

export async function verifyTurnstile({
  token,
  remoteIp,
}: VerifyTurnstileOptions): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET

  if (!secret || typeof token !== 'string' || !token || token.length > TOKEN_MAX_LENGTH) {
    return false
  }

  const formData = new URLSearchParams({
    secret,
    response: token,
    remoteip: remoteIp,
  })
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 5_000)

  try {
    const response = await fetch(SITEVERIFY_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: formData,
      signal: controller.signal,
      cache: 'no-store',
    })

    if (!response.ok) return false

    const result = await response.json() as TurnstileResult
    return result.success === true
  } catch (error) {
    console.error('Turnstile verification failed:', error)
    return false
  } finally {
    clearTimeout(timeout)
  }
}
