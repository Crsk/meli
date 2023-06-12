import { PathFromRoot } from '../../../item/models/source/source-search-result.interface'

interface Setting {
  adultContent: boolean
  buyingAllowed: boolean
  buyingModes: string[]
  catalogDomain: string
  coverageAreas: string
  currencies: string[]
  fragile: boolean
  immediatePayment: string
  itemConditions: string[]
  itemsReviewsAllowed: boolean
  listingAllowed: boolean
  maxDescriptionLength: number
  maxPicturesPerItem: number
  maxPicturesPerItemVar: number
  maxSubTitleLength: number
  maxTitleLength: number
  maxVariationsAllowed: number
  maximumPrice?: any
  maximumPriceCurrency: string
  minimumPrice: number
  minimumPriceCurrency: string
  mirrorCategory?: any
  mirrorMasterCategory?: any
  mirrorSlaveCategories: any[]
  price: string
  reservationAllowed: string
  restrictions: any[]
  roundedAddress: boolean
  sellerContact: string
  shippingOptions: string[]
  shippingProfile: string
  showContactInformation: boolean
  simpleShipping: string
  stock: string
  subVertical: string
  subscribable: boolean
  tags: any[]
  vertical: string
  vipSubdomain: string
  buyerProtectionPrograms: string[]
  status: string
}

interface ChannelSetting {
  channel: string
  settings: {
    buyingModes?: string[]
    immediatePayment?: string
    minimumPrice: number
    status: string
  }
}

interface SourceCategory {
  id: string
  name: string
  picture: string
  permalink?: any
  totalItemsInThisCategory: number
  pathFromRoot: PathFromRoot[]
  childrenCategories: any[]
  attributeTypes: string
  settings: Setting
  channelsSettings: ChannelSetting[]
  metaCategId?: any
  attributable: boolean
  dateCreated: string
}

export { SourceCategory }
