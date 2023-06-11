import { Author } from './author.interface'
import { Item } from './item.interface'

interface ItemDescription extends Item {
  author?: Author
  description: string
}

export { ItemDescription }
