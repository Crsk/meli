import { PopularCategory } from '../../models/search-result.interface'
import { SourceItem } from '../../models/source/source-item.interface'
import { AppliedFilter, AvailableFilter, SourceSearchResult } from '../../models/source/source-search-result.interface'

const categoryId = 'category'
type InferedCategory = { categories: string[]; popularCategory: PopularCategory | null }

const getCategoriesFromApliedFilters = (filters: AppliedFilter[]): InferedCategory | undefined => {
  if (!filters) return undefined

  const categoryFilter = filters.find(filter => filter.id === categoryId)
  const hasCategoryFilterApplied = !!categoryFilter

  if (hasCategoryFilterApplied) {
    // assuming that the first value has all the categories in the pathFromRoot array
    // TODO: check if above assumption is correct
    const categories = categoryFilter.values[0].pathFromRoot.map(value => value.name).sort((a, b) => a.localeCompare(b))
    const popularCategory = {
      name: categoryFilter.values[0].name,
      pathFromRoot: categoryFilter.values[0].pathFromRoot,
    }

    return { categories, popularCategory }
  }

  return undefined
}

const getCategoriesFromAvailableFilters = (availableFilters: AvailableFilter[]): InferedCategory | undefined => {
  if (!availableFilters) return undefined

  const availableCategoryFilter = availableFilters.find(filter => filter.id === categoryId)
  const hasAvailableCategoryFilter = !!availableCategoryFilter

  if (hasAvailableCategoryFilter) {
    const categories = availableCategoryFilter.values.map(value => value.name).sort((a, b) => a.localeCompare(b))
    const popularCategory = {
      name: availableCategoryFilter.values[0].name,
      pathFromRoot: null,
    }

    return { categories, popularCategory }
  }

  return undefined
}

const getPopularCategoryCategory = (categories: string[]): string | undefined => {
  if (!categories?.length) return undefined

  const categoryCount = categories.reduce((acc, category) => {
    if (acc[category]) {
      acc[category] += 1
    } else {
      acc[category] = 1
    }

    return acc
  }, {} as { [category: string]: number })

  return Object.keys(categoryCount).reduce((a, b) => (categoryCount[a] > categoryCount[b] ? a : b), '')
}

const getCategoryIdsFromItems = (items: SourceItem[]): InferedCategory | undefined => {
  if (!items) return undefined

  const categoryIds = items.map(item => item.categoryId)
  const categoryIdsUnique = [...new Set(categoryIds)].sort((a, b) => a.localeCompare(b))
  const popularCategory = getPopularCategoryCategory(categoryIdsUnique) || ''

  return { categories: categoryIdsUnique, popularCategory: { name: popularCategory, pathFromRoot: null } }
}

/**
 * Gets the categories from the API response
 * If all items have the same category, the endpoint returns the result with a category filter applied
 * If the items have different categories, the endpoint returns the categories into available_filters
 * If none of above, get the most popular categoryId from the items
 * @param sourceSearchResult the API response from the items search endpoint
 */
const getCategories = (sourceSearchResult: SourceSearchResult): InferedCategory => {
  const categoriesFromFilters = getCategoriesFromApliedFilters(sourceSearchResult.filters)
  if (categoriesFromFilters) return categoriesFromFilters

  const categoriesFromAvailableFilters = getCategoriesFromAvailableFilters(sourceSearchResult.availableFilters)
  if (categoriesFromAvailableFilters) return categoriesFromAvailableFilters

  const categoryIdsFromItems = getCategoryIdsFromItems(sourceSearchResult.results)
  if (categoryIdsFromItems) return categoryIdsFromItems

  return { categories: [], popularCategory: null }
}

const categories = (sourceSearchResult: SourceSearchResult): InferedCategory => {
  const { categories: searchCategories, popularCategory } = getCategories(sourceSearchResult)

  return {
    categories: searchCategories,
    popularCategory,
  }
}

export { getCategories, categories }
