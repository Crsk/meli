const getPrice = ({ currency = '', amount = 0, decimals = 0 }) => {
  if (!currency || !amount) return undefined
  let formattedPrice

  try {
    const formattedAmount = new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
    formattedPrice = decimals > 0 ? `${formattedAmount}.${decimals}` : formattedAmount
  } catch (e) {
    console.error(`Error: probably the currency "${currency}" is badly formatted`)
  }

  return formattedPrice
}

export { getPrice }
