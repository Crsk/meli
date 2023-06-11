import { AppliedFilter, AvailableFilter, SourceSearchResult } from '../../models/source/source-search-result.interface'
import { categories } from './categories'

interface ExampleResult {
  results: { categoryId: string }[]
  filters: AppliedFilter[]
  availableFilters: AvailableFilter[]
}

const categoriesFromApliedFilter: ExampleResult = {
  filters: [
    {
      id: 'category',
      name: 'Categorías',
      type: '',
      values: [
        {
          id: 'MLA1055',
          name: 'Cat 2',
          pathFromRoot: [
            {
              id: 'MLA1051',
              name: 'Cat 1',
            },
            {
              id: 'MLA1055',
              name: 'Cat 2',
            },
          ],
        },
      ],
    },
  ],
  availableFilters: [],
  results: [],
}

const categoriesFromAvailableFilters: ExampleResult = {
  filters: [],
  availableFilters: [
    {
      id: 'category',
      name: 'Categorías',
      type: '',
      values: [
        {
          id: 'cat1',
          name: 'Cat 1',
          results: 10,
        },
        {
          id: 'cat2',
          name: 'Cat 2',
          results: 10,
        },
        {
          id: 'cat3',
          name: 'Cat 3',
          results: 10,
        },
        {
          id: 'cat4',
          name: 'Cat 4',
          results: 10,
        },
      ],
    },
  ],
  results: [],
}

const categoriesFromItems: ExampleResult = {
  filters: [],
  availableFilters: [],
  results: [
    {
      categoryId: 'cat1',
    },
    {
      categoryId: 'cat1',
    },
    {
      categoryId: 'cat2',
    },
    {
      categoryId: 'cat2',
    },
    {
      categoryId: 'cat2',
    },
  ],
}

describe('Categories', () => {
  it('should return categories if filter applied', () => {
    const searchCategories = categories(categoriesFromApliedFilter as SourceSearchResult)
    expect(searchCategories).toEqual({
      categories: ['Cat 1', 'Cat 2'],
      popularCategory: {
        name: 'Cat 2',
        pathFromRoot: [
          { id: 'MLA1051', name: 'Cat 1' },
          { id: 'MLA1055', name: 'Cat 2' },
        ],
      },
    })
  })

  it('should return categories if no filter applied', () => {
    const searchCategories = categories(categoriesFromAvailableFilters as SourceSearchResult)
    expect(searchCategories).toEqual({
      categories: ['Cat 1', 'Cat 2', 'Cat 3', 'Cat 4'],
      popularCategory: { name: 'Cat 1', pathFromRoot: null },
    })
  })

  it('should return category ids if any filter available', () => {
    const searchCategories = categories(categoriesFromItems as SourceSearchResult)
    expect(searchCategories).toEqual({
      categories: ['cat1', 'cat2'],
      popularCategory: { name: 'cat2', pathFromRoot: null },
    })
  })

  it('should return empty array if no categories', () => {
    const searchCategories = categories({} as SourceSearchResult)
    expect(searchCategories).toEqual({ categories: [], popularCategory: null })
  })
})
