import { ItemDescription } from 'shared/src/item'

export type GetItemService = (itemId: string) => Promise<ItemDescription | undefined>
