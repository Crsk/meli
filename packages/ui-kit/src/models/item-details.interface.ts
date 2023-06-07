import { Item } from './item.interface'

interface ItemDetails extends Item {
  soldQuantity: number
  description: string
}

export type { ItemDetails }
