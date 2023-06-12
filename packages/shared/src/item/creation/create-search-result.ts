import { Item } from '../models/item.interface'
import { author } from './entities/author'
import { SourceSearchResult } from '../models/source/source-search-result.interface'
import { categories } from './entities/categories'
import { createItem } from './create-item'
import { SearchResult } from '../models/search-result.interface'

const createSearchResult = (searchResult: SourceSearchResult): SearchResult => {
  const items: Item[] = searchResult.results.map(sourceItem => createItem(sourceItem))

  return {
    ...author('', ''), // signing from middleware
    ...categories(searchResult),
    ...{ items },
  }
}

export { createSearchResult }
