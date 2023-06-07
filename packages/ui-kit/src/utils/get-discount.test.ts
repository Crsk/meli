import { getDiscount } from './get-discount.util'

describe('getDiscount', () => {
  test.each`
    price        | originalPrice | discount | discountPct | pricePctWithDiscount
    ${50}        | ${100}        | ${50}    | ${50}       | ${50}
    ${20}        | ${50}         | ${30}    | ${60}       | ${40}
    ${10}        | ${10}         | ${0}     | ${0}        | ${100}
    ${0}         | ${100}        | ${100}   | ${100}      | ${0}
    ${0}         | ${undefined}  | ${NaN}   | ${NaN}      | ${NaN}
    ${undefined} | ${0}          | ${NaN}   | ${NaN}      | ${NaN}
  `(
    'calculates discount correctly for price: $price, original price: $originalPrice',
    ({ price, originalPrice, discount, discountPct, pricePctWithDiscount }) => {
      expect(getDiscount(price, originalPrice)).toEqual({ discount, discountPct, pricePctWithDiscount })
    }
  )
})
