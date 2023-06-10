import { ItemDescription, SourceItem, SourceItemDescription, createItemDescription } from 'shared/src/item'
import { SnakeCase } from '../../types'
import { toCamelCase } from '../../utils'
import { get } from '../api'

type ResponseItemDescription = {
  text: string
  plain_text: string
  last_updated: string
  date_created: string
  snapshot: {
    url: string
    width: number
    height: number
    status: string
  }
}

const _getSourceItemDescription = async (itemId: string): Promise<SourceItemDescription | undefined> => {
  const { data, status } = await get<ResponseItemDescription>(`/items/${itemId}/description`)
  if (status !== 200) throw new Error(`Failed to fetch item with ID ${itemId}`)

  const sourceItemDescriptionSnakeCase: SnakeCase<SourceItemDescription> = data
  const sourceItemDescription: SourceItemDescription = toCamelCase(sourceItemDescriptionSnakeCase)

  return sourceItemDescription
}

const _getSourceItem = async (itemId: string): Promise<SourceItem | undefined> => {
  const { data: sourceItemSnakeCase, status } = await get<SnakeCase<SourceItem>>(`/items/${itemId}`)
  if (status !== 200) throw new Error(`Failed to fetch item with ID ${itemId}`)

  const sourceItem: SourceItem = toCamelCase(sourceItemSnakeCase)

  return sourceItem
}

const getItem = async (itemId: string): Promise<ItemDescription | undefined> => {
  const sourceItem = await _getSourceItem(itemId)
  const sourceItemDescription = await _getSourceItemDescription(itemId)
  if (sourceItem && sourceItemDescription) return createItemDescription(sourceItem, sourceItemDescription)

  return undefined
}

export { getItem }
