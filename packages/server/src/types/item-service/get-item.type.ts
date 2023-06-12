import { ItemDescriptionResult } from 'shared/src/item'

export type GetItemService = (itemId: string) => Promise<ItemDescriptionResult | undefined>
