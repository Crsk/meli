import { item } from './entities/item'
import { itemDescription } from './entities/item-description'
import { SourceItemDescription } from '../models/source/source-item-description.interface'
import { SourceItem } from '../models/source/source-item.interface'
import { author } from './entities/author'
import { SourceCategory, category } from '../../category'
import { ItemDescriptionResult } from '../models/item-description-result.interface'

const createItemDescriptionResult = (
  sourceItem: SourceItem,
  sourceItemDescription: SourceItemDescription,
  sourceCategory: SourceCategory
): ItemDescriptionResult => ({
  ...author('', ''), // signing from middleware
  ...category(sourceCategory),
  ...item(sourceItem),
  ...itemDescription(sourceItemDescription),
})

export { createItemDescriptionResult }
