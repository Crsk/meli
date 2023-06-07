const getDiscount = (price: number, originalPrice: number) => {
  const pricePctWithDiscount = Math.round((price * 100) / originalPrice)
  const discountPct = 100 - pricePctWithDiscount
  const discount = Math.round(originalPrice - price)

  return { discount, discountPct, pricePctWithDiscount }
}

export { getDiscount }
