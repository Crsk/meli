import { SearchResult } from 'shared/src/item'

export type GetItemsService = (query: string) => Promise<{ searchResult: SearchResult; totalCount: string }>
