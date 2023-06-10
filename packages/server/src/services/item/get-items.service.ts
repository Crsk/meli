import { Item, SourceItem, createItem } from 'shared/src/item'
import axios from 'axios'
import { SnakeCase } from '../../types'
import { toCamelCase } from '../../utils'
import { fetchBaseUrl } from '../fetch-base-url'

type Response = {
  site_id: string
  country_default_time_zone: string
  query: string
  paging: {
    total: number
    primary_results: number
    offset: number
    limit: number
  }
  results: SnakeCase<SourceItem>[]
}

const getItems = async (query: string): Promise<Item[] | undefined> => {
  const endpoint = `${fetchBaseUrl}/sites/MLA/search?q=${query}`
  const response = await axios.get<Response>(endpoint)
  if (response.status !== 200) throw new Error(`Failed to query "${query}"`)

  const itemsSnakeCase: SnakeCase<SourceItem>[] = response.data.results
  const items: Item[] = itemsSnakeCase.map(sourceItem => createItem(toCamelCase(sourceItem)))

  return items
}

export { getItems }
