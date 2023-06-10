interface Shipping {
  storePickUp: boolean
  freeShipping: boolean
  logisticType: string
  mode: string
  tags: string[]
  promise: any
}

interface Seller {
  id: number
  nickname: string
  carDealer: boolean
  realEstateAgency: boolean
  _: boolean
  registrationDate: string
  tags: string[]
  carDealerLogo: string
  permalink: string
  sellerReputation: {
    levelId: string
    powerSellerStatus: string
    transactions: {
      canceled: number
      completed: number
      period: string
      ratings: {
        negative: number
        neutral: number
        positive: number
      }
      total: number
    }
    metrics: {
      sales: {
        period: string
        completed: number
      }
      claims: {
        period: string
        rate: number
        value: number
      }
      delayedHandlingTime: {
        period: string
        rate: number
        value: number
      }
      cancellations: {
        period: string
        rate: number
        value: number
      }
    }
  }
}

interface SellerAddress {
  comment: string
  addressLine: string
  id: any
  latitude: any
  longitude: any
  country: {
    id: string
    name: string
  }
  state: {
    id: string
    name: string
  }
  city: {
    id: string
    name: string
  }
}

interface Address {
  stateId: string
  stateName: string
  cityId: string
  cityName: string
}

interface Attributes {
  id: string
  name: string
  valueId: string
  valueName: string
  attributeGroupId: string
  attributeGroupName: string
  valueStruct: any
  values: {
    id: string
    name: string
    struct: any
    source: number
  }[]
  source: number
  valueType: string
}

interface VariationData {
  [key: string]: {
    thumbnail: string
    ratio: string
    name: string
    picturesQty: number
    inventoryId: string
  }
}

interface Installments {
  quantity: number
  amount: number
  rate: number
  currencyId: string
}

interface DifferentialPricing {
  id: number
}

interface SourceItem {
  id: string
  title: string
  condition: string
  thumbnailId: string
  catalogProductId: string
  listingTypeId: string
  permalink: string
  buyingMode: string
  siteId: string
  categoryId: string
  domainId: string
  variationId: string
  thumbnail: string
  currencyId: string
  orderBackend: number
  price: number
  originalPrice: number
  salePrice: number | null
  soldQuantity: number
  availableQuantity: number
  officialStoreId: number
  officialStoreName: string
  useThumbnailId: boolean
  acceptsMercadopago: boolean
  tags: string[]
  variationFilters: string[]
  shipping: Shipping
  stopTime: string
  seller: Seller
  sellerAddress: SellerAddress
  address: Address
  attributes: Attributes[]
  variationsData: VariationData
  installments: Installments
  winnerItemId: any
  discounts: any
  promotions: any[]
  differentialPricing: DifferentialPricing
  inventoryId: any
}

export { SourceItem }
