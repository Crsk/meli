import { getDecimalPart } from './get-decimal-part'

describe('getDecimalPart', () => {
  test.each`
    value                | expected
    ${null}              | ${0}
    ${24385234.12368235} | ${0.12368235}
    ${9876.04}           | ${0.04}
    ${785207.5}          | ${0.5}
    ${12.345}            | ${0.345}
    ${7.8}               | ${0.8}
    ${42}                | ${0}
    ${9876.54}           | ${0.54}
  `('returns the correct decimal part', ({ value, expected }) => {
    expect(getDecimalPart(value)).toBe(expected)
  })
})
