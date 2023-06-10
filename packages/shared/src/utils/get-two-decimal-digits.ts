import { getDecimalPart } from './get-decimal-part'
import { round } from './round'

const getTwoDecimalDigits = (value: number) => {
  const decimal = round(getDecimalPart(value), 2)
  const twoDigits = Math.floor(decimal * 100)
    .toString()
    .padStart(2, '0')

  // JavaScript drops the leading zero, if any, as it's insignificant in numeric representation
  // append 0. to the two digits to get the correct value
  const twoDecimals = +`0.${twoDigits}`

  return twoDigits === '00' ? 0 : twoDecimals
}

export { getTwoDecimalDigits }
