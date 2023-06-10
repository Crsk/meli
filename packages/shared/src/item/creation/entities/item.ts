import { getTwoDecimalDigits } from '../../../utils/get-two-decimal-digits'
import { Item } from '../../models/item.interface'
import { SourceItem } from '../../models/source/source-item.interface'

const item = (sourceItem: SourceItem): Item => ({
  id: sourceItem.id,
  title: sourceItem.title,
  price: {
    currency: sourceItem.currencyId,
    amount: sourceItem.price,
    decimals: getTwoDecimalDigits(sourceItem.price),
  },
  originalPrice: {
    amount: sourceItem.originalPrice,
    decimals: getTwoDecimalDigits(sourceItem.originalPrice),
  },
  picture: sourceItem.thumbnail,
  condition: sourceItem.condition,
  freeShipping: sourceItem.shipping?.freeShipping,
  seller: sourceItem.seller?.nickname,
  reviewCount: sourceItem.seller?.sellerReputation.transactions.completed,
  colorCount: sourceItem.variationFilters?.length,
  soldQuantity: sourceItem.soldQuantity,
})

export { item }
