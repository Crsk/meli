import { priceDetails } from './price-details.util'

describe('priceDetails', () => {
  test.each`
    currency    | amount   | decimals | originalAmount | originalDecimals | formattedPrice | formattedOriginalPrice | discountPct
    ${'CLP'}    | ${50000} | ${0}     | ${100000}      | ${0}             | ${'$50.000'}   | ${'$100.000'}          | ${50}
    ${'batman'} | ${50000} | ${0}     | ${100000}      | ${0}             | ${undefined}   | ${undefined}           | ${50}
    ${'CLP'}    | ${50000} | ${0}     | ${undefined}   | ${0}             | ${'$50.000'}   | ${undefined}           | ${NaN}
    ${'CLP'}    | ${50000} | ${0}     | ${0}           | ${0}             | ${'$50.000'}   | ${undefined}           | ${NaN}
  `(
    'formats the price correctly for currency: $currency, amount: $amount, decimals: $decimals, originalAmount: $originalAmount, originalDecimals: $originalDecimals',
    ({
      currency,
      amount,
      decimals,
      originalAmount,
      originalDecimals,
      formattedPrice,
      formattedOriginalPrice,
      discountPct,
    }) => {
      expect(priceDetails(currency, amount, decimals, originalAmount, originalDecimals)).toEqual({
        formattedPrice,
        formattedOriginalPrice,
        discountPct,
      })
    }
  )
})
