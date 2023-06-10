type Price = {
  currency: string
  amount: number
  decimals: number
}

interface Item {
  id: string
  title: string
  price: Price
  originalPrice: Omit<Price, 'currency'>
  picture: string | null
  condition: string
  freeShipping: boolean
  seller: string
  reviewCount: number
  colorCount: number
  soldQuantity: number
}

export type { Item }
