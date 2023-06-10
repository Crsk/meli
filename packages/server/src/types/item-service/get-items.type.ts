import { Item } from 'shared/src/item'

export type GetItemsService = (query: string) => Promise<{ items: Item[]; totalCount: string }>
