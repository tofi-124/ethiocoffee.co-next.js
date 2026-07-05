import type { Offering } from '../data/offerings'
import { COMPANY_LEGAL_NAME } from './constants'

const SELLER_SCHEMA = {
  '@type': 'Organization',
  name: COMPANY_LEGAL_NAME,
}

export function getOfferingSchemaAvailability(product: Pick<Offering, 'isSoldOut' | 'isContracted'>) {
  if (product.isContracted) return 'https://schema.org/SoldOut'
  if (product.isSoldOut) return 'https://schema.org/OutOfStock'
  return 'https://schema.org/InStock'
}

function getOfferDescription(product: Offering) {
  if (product.isContracted) {
    return 'This lot is contracted and not currently available. Contact Ethio Coffee for upcoming allocations.'
  }

  if (product.isSoldOut) {
    return 'This lot is not currently available. Contact Ethio Coffee for upcoming allocations.'
  }

  return product.pricing.priceNote || 'Contact Ethio Coffee for current FOB pricing and availability.'
}

export function buildOfferingSchemaOffer(product: Offering, url: string) {
  const isAvailable = !product.isSoldOut && !product.isContracted

  return {
    '@type': 'Offer',
    availability: getOfferingSchemaAvailability(product),
    url,
    seller: SELLER_SCHEMA,
    description: getOfferDescription(product),
    hasMerchantReturnPolicy: {
      '@type': 'MerchantReturnPolicy',
      applicableCountry: 'ET',
      returnPolicyCategory: 'https://schema.org/MerchantReturnNotPermitted',
      merchantReturnDays: 0,
    },
    ...(isAvailable
      ? {
          price: product.pricing.fobPricePerKg,
          priceCurrency: 'USD',
          priceValidUntil: '2026-12-31',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: product.pricing.fobPricePerKg,
            priceCurrency: 'USD',
            unitText: 'kg',
            description: product.pricing.priceNote || `${product.pricing.priceYear} crop FOB price per kilogram`,
          },
        }
      : {}),
  }
}
