import { getTwoDecimalDigits } from './get-two-decimal-digits'

describe('getTwoDecimalDigits', () => {
  test.each`
    value       | expected
    ${9876.04}  | ${0.04}
    ${785207.5} | ${0.5}
    ${12.345}   | ${0.35}
    ${7.8}      | ${0.8}
    ${42}       | ${0.0}
    ${9876.54}  | ${0.54}
  `('returns the correct two decimal digits', ({ value, expected }) => {
    expect(getTwoDecimalDigits(value)).toBe(expected)
  })
})
