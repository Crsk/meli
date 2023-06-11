import { SourceItem } from './source-item.interface'

interface Sort {
  id: string
  name: string
}

interface AvailableFilterValue {
  id: string
  name: string
  results: number
}

interface AvailableFilter {
  id: string
  name: string
  type: string
  values: AvailableFilterValue[]
}

interface AvailableSort {
  id: string
  name: string
}

interface Paging {
  total: number
  primaryResults: number
  offset: number
  limit: number
}

interface PathFromRoot {
  id: string // MLA1051
  name: string // Celulares y Teléfonos
}

interface AppliedFilterValue {
  id: string // MLA1055,
  name: string // "Celulares y Smartphones",
  pathFromRoot: PathFromRoot[] // [{ id: 'MLA1051', name: '...' }, { id: 'MLA1055', name: '...' }]
}

interface AppliedFilter {
  id: string // category
  name: string // Categorías
  type: string // text
  values: AppliedFilterValue[]
}

interface SourceSearchResult {
  siteId: string
  countryDefaultTimeZone: string
  query: string
  paging: Paging
  results: SourceItem[]
  sort: Sort
  availableSorts: AvailableSort[]
  filters: AppliedFilter[]
  availableFilters: AvailableFilter[]
}

export { AvailableFilter, AppliedFilter, SourceSearchResult, PathFromRoot }
