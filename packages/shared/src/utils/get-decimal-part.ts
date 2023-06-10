// JavaScript drops the leading zero, if any, as it's insignificant in numeric representation
// append 0. to the two digits to get the correct value
const getDecimalPart = (value: number) => {
  if (!value) return 0

  return +`0.${value.toString().split('.')[1] || 0}`
}

export { getDecimalPart }
