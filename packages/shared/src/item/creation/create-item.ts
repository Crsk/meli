import { SourceItem } from '../models/source/source-item.interface'
import { item } from './entities/item'
import { Item } from '../models/item.interface'

const createItem = (sourceItem: SourceItem): Item => item(sourceItem)

export { createItem }
