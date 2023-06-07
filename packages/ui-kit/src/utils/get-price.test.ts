import { getPrice } from './get-price.util'

describe('getPrice', () => {
  test.each`
    currency     | amount       | decimals     | formattedPrice
    ${'CLP'}     | ${10900}     | ${0}         | ${'$10.900'}
    ${'CLP'}     | ${10}        | ${undefined} | ${'$10'}
    ${'batman'}  | ${10900}     | ${0}         | ${undefined}
    ${'CLP'}     | ${undefined} | ${undefined} | ${undefined}
    ${undefined} | ${undefined} | ${undefined} | ${undefined}
  `(
    'formats the price correctly for currency: $currency, amount: $amount, and decimals: $decimals',
    ({ currency, amount, decimals, formattedPrice }) => {
      expect(getPrice({ currency, amount, decimals })).toEqual(formattedPrice)
    }
  )
})
