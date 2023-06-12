import { ItemDescriptionResult, SourceItem, SourceItemDescription, createItemDescriptionResult } from 'shared/src/item'
import { SourceCategory } from 'shared/src/category'
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

const _getCategory = async (categoryId: string): Promise<SourceCategory | undefined> => {
  const { data: categorySnakeCase, status } = await get<SnakeCase<SourceCategory>>(`/categories/${categoryId}`)
  if (status !== 200) throw new Error(`Failed to fetch category with ID ${categoryId}`)

  const sourceCategory: SourceCategory = toCamelCase(categorySnakeCase)

  return sourceCategory
}

const getItem = async (itemId: string): Promise<ItemDescriptionResult | undefined> => {
  const sourceItem = await _getSourceItem(itemId)
  const sourceItemDescription = await _getSourceItemDescription(itemId)
  const sourceCategory: SourceCategory | null =
    (await (sourceItem?.categoryId ? _getCategory(sourceItem.categoryId) : null)) || null

  if (sourceItem && sourceItemDescription && sourceCategory)
    return createItemDescriptionResult(sourceItem, sourceItemDescription, sourceCategory)

  return undefined
}

export { getItem }
