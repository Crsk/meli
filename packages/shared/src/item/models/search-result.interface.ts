import { Author } from './author.interface'
import { Item } from './item.interface'
import { PathFromRoot } from './source/source-search-result.interface'

type PopularCategory = {
  name: string // most popular category from available categories or applied category filter
  pathFromRoot: PathFromRoot[] | null // most popular categories path from applied category filter. null if no filter applied
}

interface SearchResult {
  author: Author
  popularCategory: PopularCategory | null
  categories: string[]
  items: Item[]
}

export { SearchResult, PopularCategory }
