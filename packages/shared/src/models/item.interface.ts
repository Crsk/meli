import { Price } from '../types'

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
}

export type { Item }
