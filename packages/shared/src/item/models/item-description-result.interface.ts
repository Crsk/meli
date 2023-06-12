import { Category } from '../../category/models/category.interface'
import { Author } from './author.interface'
import { ItemDescription } from './item-description.interface'
import { Item } from './item.interface'

interface ItemDescriptionResult extends Item, ItemDescription {
  author: Author
  category: Category
}

export { Category, ItemDescriptionResult }
