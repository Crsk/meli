import { ItemDescription, SourceItem, SourceItemDescription, createItemDescription } from 'shared/src/item'
import axios from 'axios'
import { fetchBaseUrl } from '..'
import { SnakeCase } from '../../types'
import { toCamelCase } from '../../utils'

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
  const endpoint = `${fetchBaseUrl}/items/${itemId}/description`
  const response = await axios.get<ResponseItemDescription>(endpoint)
  if (response.status !== 200) throw new Error(`Failed to fetch item with ID ${itemId}`)

  const sourceItemDescriptionSnakeCase: SnakeCase<SourceItemDescription> = response.data
  const sourceItemDescription: SourceItemDescription = toCamelCase(sourceItemDescriptionSnakeCase)

  return sourceItemDescription
}

const _getSourceItem = async (itemId: string): Promise<SourceItem | undefined> => {
  const endpoint = `${fetchBaseUrl}/items/${itemId}`
  const response = await axios.get<SnakeCase<SourceItem>>(endpoint)
  if (response.status !== 200) throw new Error(`Failed to fetch item with ID ${itemId}`)

  const sourceItemSnakeCase: SnakeCase<SourceItem> = response.data
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
