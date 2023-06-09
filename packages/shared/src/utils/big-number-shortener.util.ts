const bigNumberShortener = (value: number, appendText: string = ''): string => {
  appendText = appendText.toUpperCase()
  if (value >= 100000) return `+100 MIL ${appendText}`
  if (value >= 90000) return `+90 MIL ${appendText}`
  if (value >= 80000) return `+80 MIL ${appendText}`
  if (value >= 70000) return `+70 MIL ${appendText}`
  if (value >= 60000) return `+60 MIL ${appendText}`
  if (value >= 50000) return `+50 MIL ${appendText}`
  if (value >= 40000) return `+40 MIL ${appendText}`
  if (value >= 30000) return `+30 MIL ${appendText}`
  if (value >= 20000) return `+20 MIL ${appendText}`
  if (value >= 10000) return `+10 MIL ${appendText}`
  if (value >= 9000) return `+9 MIL ${appendText}`
  if (value >= 8000) return `+8 MIL ${appendText}`
  if (value >= 7000) return `+7 MIL ${appendText}`
  if (value >= 6000) return `+6 MIL ${appendText}`
  if (value >= 5000) return `+5 MIL ${appendText}`
  if (value >= 4000) return `+4 MIL ${appendText}`
  if (value >= 3000) return `+3 MIL ${appendText}`
  if (value >= 2000) return `+2 MIL ${appendText}`
  if (value >= 1000) return `+1 MIL ${appendText}`

  return `${value} ${appendText}`
}

export { bigNumberShortener }
