import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { escapeHtml, isValidEmail, truncate } from '../../lib/sanitize'
import { rateLimit, getClientIp } from '../../lib/rate-limit'

const resend = new Resend(process.env.RESEND_API_KEY)

// Your email address to receive form submissions
const TO_EMAIL = process.env.CONTACT_EMAIL || 'coffee@ethiocoffee.co'
const FROM_EMAIL = process.env.FROM_EMAIL || 'noreply@ethiocoffee.co'

// Max lengths for input fields
const MAX_FIELD_LENGTH = 500
const MAX_MESSAGE_LENGTH = 5000

export async function POST(request: NextRequest) {
  // Rate limit: 5 contact submissions per IP per minute
  const ip = getClientIp(request)
  const { allowed } = rateLimit(`contact:${ip}`, 5, 60_000)
  if (!allowed) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again in a minute.' },
      { status: 429 }
    )
  }

  try {
    const body = await request.json()
    
    const {
      formType,
      businessName,
      contactName,
      email,
      phone,
      country,
      businessType,
      referralSource,
      message,
      productName,
      orderDate,
      _subject
    } = body

    // Validate required fields
    if (!email || !contactName) {
      return NextResponse.json(
        { error: 'Email and contact name are required' },
        { status: 400 }
      )
    }

    // Validate email format
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Invalid email address format' },
        { status: 400 }
      )
    }

    // Truncate all inputs to prevent oversized payloads
    const safeBusinessName = truncate(String(businessName || ''), MAX_FIELD_LENGTH)
    const safeContactName = truncate(String(contactName), MAX_FIELD_LENGTH)
    const safeEmail = truncate(String(email), MAX_FIELD_LENGTH)
    const safePhone = truncate(String(phone || ''), MAX_FIELD_LENGTH)
    const safeCountry = truncate(String(country || ''), MAX_FIELD_LENGTH)
    const safeBusinessType = truncate(String(businessType || ''), MAX_FIELD_LENGTH)
    const safeReferralSource = truncate(String(referralSource || ''), MAX_FIELD_LENGTH)
    const safeMessage = truncate(String(message || ''), MAX_MESSAGE_LENGTH)
    const safeProductName = truncate(String(productName || ''), MAX_FIELD_LENGTH)

    // Build email subject — sanitize user-provided _subject to prevent header injection
    const rawSubject = _subject
      ? truncate(String(_subject), 200).replace(/[\r\n]/g, '')
      : ''
    const subject = rawSubject || (formType === 'quote' 
      ? `New Quote Request: ${safeProductName || 'Product'}`
      : `New Contact Inquiry from ${safeBusinessName || safeContactName}`)

    // Build email content — all user input is HTML-escaped
    let emailHtml = ''
    
    if (formType === 'quote') {
      emailHtml = `
        <h2>New Quote Request</h2>
        <p><strong>Product:</strong> ${escapeHtml(safeProductName) || 'N/A'}</p>
        <p><strong>Date:</strong> ${orderDate ? new Date(orderDate).toLocaleString() : new Date().toLocaleString()}</p>
        <hr />
        <h3>Contact Information</h3>
        <p><strong>Business Name:</strong> ${escapeHtml(safeBusinessName) || 'N/A'}</p>
        <p><strong>Contact Name:</strong> ${escapeHtml(safeContactName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(safeEmail)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(safePhone) || 'N/A'}</p>
        <hr />
        <h3>Message</h3>
        <p>${escapeHtml(safeMessage) || 'No message provided'}</p>
      `
    } else {
      emailHtml = `
        <h2>New Contact Inquiry</h2>
        <h3>Business Information</h3>
        <p><strong>Business Name:</strong> ${escapeHtml(safeBusinessName) || 'N/A'}</p>
        <p><strong>Contact Name:</strong> ${escapeHtml(safeContactName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(safeEmail)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(safePhone) || 'N/A'}</p>
        <p><strong>Country:</strong> ${escapeHtml(safeCountry) || 'N/A'}</p>
        <p><strong>Business Type:</strong> ${escapeHtml(safeBusinessType) || 'N/A'}</p>
        <p><strong>How did they hear about us:</strong> ${escapeHtml(safeReferralSource) || 'N/A'}</p>
        <hr />
        <h3>Message</h3>
        <p>${escapeHtml(safeMessage) || 'No message provided'}</p>
      `
    }

    const isQuote = formType === 'quote'

    const autoReplySubject = isQuote
      ? 'We received your quote request - Ethio Coffee'
      : 'We received your message - Ethio Coffee'

    const heroHeadline = isQuote ? 'YOUR QUOTE REQUEST IS IN' : 'THANKS FOR REACHING OUT'

    const autoReplyHtml = `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /></head>
<body style="margin:0;padding:0;background-color:#FFF9F5;font-family:Arial,Helvetica,sans-serif;-webkit-font-smoothing:antialiased;">

  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#FFF9F5;padding:32px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;border-radius:10px;overflow:hidden;border:1px solid #1B3A4B14;">

          <!-- LOGO STRIP (cream — logo is a dark mark) -->
          <tr>
            <td align="center" style="background-color:#FFF9F5;padding:26px 24px 22px;">
              <img src="https://www.ethiocoffee.co/images/new-logo.png" alt="Ethio Coffee" width="176" style="display:block;width:176px;max-width:60%;height:auto;border:0;" />
            </td>
          </tr>

          <!-- HERO BAND (mirrors the site hero: dark, bold uppercase, tracking tagline, accent bar) -->
          <tr>
            <td align="center" style="background-color:#1B3A4B;padding:44px 32px 48px;">
              <p style="margin:0 0 14px;font-family:Arial,Helvetica,sans-serif;font-size:11px;letter-spacing:3px;text-transform:uppercase;color:#4A9B9B;">Green Coffee Export &middot; 30+ Years in Coffee</p>
              <h1 style="margin:0;font-family:'Arial Black',Arial,Helvetica,sans-serif;font-size:34px;line-height:1.15;font-weight:800;letter-spacing:0.5px;text-transform:uppercase;color:#FFF9F5;">${heroHeadline}</h1>
              <div style="margin:22px auto 0;width:64px;height:3px;background-color:#B45D38;font-size:0;line-height:0;">&nbsp;</div>
            </td>
          </tr>

          <!-- MESSAGE -->
          <tr>
            <td style="background-color:#ffffff;padding:40px 44px 36px;font-size:15px;line-height:1.75;color:#3a4a52;">

              <p style="margin:0 0 18px;">Hi ${escapeHtml(safeContactName)},</p>

              <p style="margin:0 0 18px;">Thanks for reaching out to Ethio Coffee.</p>

              <p style="margin:0 0 18px;">Whether you are exploring Ethiopian green coffee for the first time or looking to add new lots to your current program, we are glad you found us.</p>

              <p style="margin:0 0 18px;">For details on logistics, packaging, and minimum order quantities, please visit our <a href="https://www.ethiocoffee.co/ordering-info" style="color:#B45D38;font-weight:700;text-decoration:underline;">Ordering Info Page</a>.</p>

              <p style="margin:0 0 18px;">A quick heads-up on availability: every lot from our current offering is now fully <strong style="color:#1B3A4B;">Contracted</strong>. We operate as a quality-focused exporter with a curated selection, and our lots move quickly. You can still view the full list on our <a href="https://www.ethiocoffee.co/offerings" style="color:#B45D38;font-weight:700;text-decoration:underline;">Offerings Page</a>, where each lot is marked <strong style="color:#1B3A4B;">Contracted</strong>.</p>

              <p style="margin:0 0 18px;">We would be glad to keep you on our priority list for the next harvest and upcoming lots. Just reply and let us know the profiles, grades, and volumes you are after, and we will reach out as soon as new coffee is allocated.</p>

              <p style="margin:0 0 32px;">We typically respond within <strong style="color:#1B3A4B;">3 business days</strong>.</p>

              <!-- accent pill CTA (matches hero button) -->
              <table cellpadding="0" cellspacing="0" border="0" align="center" style="margin:0 auto 8px;">
                <tr>
                  <td align="center" style="background-color:#B45D38;border-radius:999px;">
                    <a href="https://www.ethiocoffee.co/offerings" style="display:inline-block;padding:15px 36px;font-family:Arial,Helvetica,sans-serif;font-size:14px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:#ffffff;text-decoration:none;">View Our Offerings</a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- SIGN-OFF -->
          <tr>
            <td style="background-color:#ffffff;padding:0 44px 40px;font-size:15px;line-height:1.6;color:#3a4a52;border-bottom:1px solid #1B3A4B12;">
              <p style="margin:0 0 4px;">Best regards,</p>
              <p style="margin:0;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:#1B3A4B;">The Team at Ethio Coffee</p>
            </td>
          </tr>

          <!-- FOOTER BAND (dark, mirrors site footer) -->
          <tr>
            <td align="center" style="background-color:#1B3A4B;padding:30px 32px;">
              <p style="margin:0 0 14px;font-family:'Arial Black',Arial,Helvetica,sans-serif;font-size:15px;font-weight:800;letter-spacing:2px;text-transform:uppercase;color:#FFF9F5;">Ethio Coffee</p>
              <p style="margin:0 0 16px;">
                <a href="https://www.ethiocoffee.co/offerings" style="font-family:Arial,Helvetica,sans-serif;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#4A9B9B;text-decoration:none;padding:0 10px;">Offerings</a>
                <a href="https://www.ethiocoffee.co/ordering-info" style="font-family:Arial,Helvetica,sans-serif;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#4A9B9B;text-decoration:none;padding:0 10px;">How to Order</a>
                <a href="https://www.ethiocoffee.co/contact-us" style="font-family:Arial,Helvetica,sans-serif;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#4A9B9B;text-decoration:none;padding:0 10px;">Contact</a>
              </p>
              <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:11px;line-height:1.6;color:#FFF9F559;">
                Ethiopian Green Coffee Exporter &middot; <a href="https://www.ethiocoffee.co" style="color:#FFF9F559;text-decoration:underline;">ethiocoffee.co</a><br />
                You received this email because you contacted us through our website.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>`

    // Send both emails in a single batch call
    const { error } = await resend.batch.send([
      {
        from: `Ethio Coffee <${FROM_EMAIL}>`,
        to: [TO_EMAIL],
        replyTo: safeEmail,
        subject: subject,
        html: emailHtml,
      },
      {
        from: `Ethio Coffee <${FROM_EMAIL}>`,
        to: [safeEmail],
        bcc: [TO_EMAIL],
        replyTo: TO_EMAIL,
        subject: autoReplySubject,
        html: autoReplyHtml,
      },
    ])

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    )

  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
