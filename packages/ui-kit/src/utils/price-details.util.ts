import { getDiscount } from './get-discount.util'
import { getPrice } from './get-price.util'

/**
 * Returns the price formatted to human readable format, the price as a number and the discount
 * @param currency The currency of the item
 * @param amount The selling price
 * @param decimals The decimals of the selling price
 * @param originalAmount The original selling price (without discount)
 * @param originalDecimals The decimals of the original selling price
 */
const priceDetails = (
  currency: string,
  amount: number,
  decimals: number,
  originalAmount: number,
  originalDecimals: number
) => {
  const formattedOriginalPrice = getPrice({
    currency,
    amount: originalAmount,
    decimals: originalDecimals,
  })
  const formattedPrice = getPrice({ currency, amount, decimals })
  const { discountPct } = getDiscount(amount, originalAmount)

  if (!originalAmount) return { formattedPrice, formattedOriginalPrice: undefined, discountPct: NaN }

  return { formattedPrice, formattedOriginalPrice, discountPct }
}

export { priceDetails }
