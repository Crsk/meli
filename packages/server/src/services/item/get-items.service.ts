import { SearchResult, SourceSearchResult, createSearchResult } from 'shared/src/item'
import { SnakeCase } from '../../types'
import { toCamelCase } from '../../utils'
import { get } from '../api'

const getItems = async (query: string): Promise<{ searchResult: SearchResult; totalCount: string }> => {
  const { data: sourceSearchResult, status } = await get<SnakeCase<SourceSearchResult>>(`/sites/MLC/search?q=${query}`)
  if (status !== 200) throw new Error(`Failed to query "${query}"`)

  const searchResult: SearchResult = createSearchResult(toCamelCase(sourceSearchResult))
  searchResult.items = searchResult.items?.slice(0, 4)

  return { searchResult, totalCount: sourceSearchResult.paging.total.toString() }
}

export { getItems }
