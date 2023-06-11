import { item } from './entities/item'
import { itemDescription } from './entities/item-description'
import { ItemDescription } from '../models/item-description.interface'
import { SourceItemDescription } from '../models/source/source-item-description.interface'
import { SourceItem } from '../models/source/source-item.interface'

const createItemDescription = (
  sourceItem: SourceItem,
  sourceItemDescription: SourceItemDescription
): ItemDescription => ({
  ...item(sourceItem),
  ...itemDescription(sourceItemDescription),
})

export { createItemDescription }
