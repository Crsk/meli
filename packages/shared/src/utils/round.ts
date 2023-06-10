/**
 * Ensure things like 1.005 round correctly
 * http://www.jacklmoore.com/notes/rounding-in-javascript/
 */
const round = (value: number, decimals: number) => {
  const factor = 10 ** decimals

  return Math.round(value * factor) / factor
}

export { round }
