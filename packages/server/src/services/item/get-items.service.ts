import { Item, SourceItem, createItem } from 'shared/src/item'
import { SnakeCase } from '../../types'
import { toCamelCase } from '../../utils'
import { get } from '../api'

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
  const { data, status } = await get<Response>(`/sites/MLA/search?q=${query}`)
  if (status !== 200) throw new Error(`Failed to query "${query}"`)

  const itemsSnakeCase: SnakeCase<SourceItem>[] = data.results
  const items: Item[] = itemsSnakeCase.map(sourceItem => createItem(toCamelCase(sourceItem)))

  return items
}

export { getItems }
