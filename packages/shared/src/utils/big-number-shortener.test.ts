import { bigNumberShortener } from './big-number-shortener.util'

describe('bigNumberShortener', () => {
  test.each`
    value     | appendText    | expected
    ${100001} | ${'vendidos'} | ${'+100 MIL VENDIDOS'}
    ${100000} | ${'vendidos'} | ${'+100 MIL VENDIDOS'}
    ${90000}  | ${'vendidos'} | ${'+90 MIL VENDIDOS'}
    ${80000}  | ${'vendidos'} | ${'+80 MIL VENDIDOS'}
    ${70000}  | ${'vendidos'} | ${'+70 MIL VENDIDOS'}
    ${60000}  | ${'vendidos'} | ${'+60 MIL VENDIDOS'}
    ${50000}  | ${'vendidos'} | ${'+50 MIL VENDIDOS'}
    ${40000}  | ${'vendidos'} | ${'+40 MIL VENDIDOS'}
    ${30000}  | ${'vendidos'} | ${'+30 MIL VENDIDOS'}
    ${20000}  | ${'vendidos'} | ${'+20 MIL VENDIDOS'}
    ${10500}  | ${'vendidos'} | ${'+10 MIL VENDIDOS'}
    ${10000}  | ${'vendidos'} | ${'+10 MIL VENDIDOS'}
    ${9000}   | ${'vendidos'} | ${'+9 MIL VENDIDOS'}
    ${8000}   | ${'vendidos'} | ${'+8 MIL VENDIDOS'}
    ${7000}   | ${'vendidos'} | ${'+7 MIL VENDIDOS'}
    ${6000}   | ${'vendidos'} | ${'+6 MIL VENDIDOS'}
    ${5000}   | ${'vendidos'} | ${'+5 MIL VENDIDOS'}
    ${4000}   | ${'vendidos'} | ${'+4 MIL VENDIDOS'}
    ${3000}   | ${'vendidos'} | ${'+3 MIL VENDIDOS'}
    ${2000}   | ${'vendidos'} | ${'+2 MIL VENDIDOS'}
    ${1000}   | ${'vendidos'} | ${'+1 MIL VENDIDOS'}
    ${1001}   | ${'vendidos'} | ${'+1 MIL VENDIDOS'}
    ${999}    | ${'vendidos'} | ${'999 VENDIDOS'}
    ${100}    | ${'vendidos'} | ${'100 VENDIDOS'}
    ${1}      | ${'vendido'}  | ${'1 VENDIDO'}
    ${0}      | ${'vendidos'} | ${'0 VENDIDOS'}
  `(
    'should return $expected if the value is $value and appendText is $appendText',
    ({ value, appendText, expected }) => {
      expect(bigNumberShortener(value, appendText)).toBe(expected)
    }
  )
})
