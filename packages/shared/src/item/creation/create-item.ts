import { SourceItem } from '../models/source/source-item.interface'
import { item } from './entities/item'
import { Item } from '../models/item.interface'
import { author } from './entities/author'

const createItem = (sourceItem: SourceItem): Item => ({
  ...author('Christopher', 'Kiessling'),
  ...item(sourceItem),
})

export { createItem }
