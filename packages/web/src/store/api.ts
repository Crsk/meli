import { FetchBaseQueryMeta, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ItemDescription, SearchResult } from 'shared/src/item'
import { Response } from 'shared/src/types'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api' }),
  endpoints: builder => ({
    getItems: builder.query<{ searchResult: SearchResult; totalCount: string | undefined }, string>({
      query: searchQuery => `items?q=${searchQuery}`,
      transformResponse: (response: Response<SearchResult>, meta: FetchBaseQueryMeta) => {
        const searchResult: SearchResult = {
          author: response.payload?.author!,
          items: response.payload?.items || [],
          categories: response.payload?.categories!,
          popularCategory: response.payload?.popularCategory || null,
        }

        return {
          searchResult,
          totalCount: meta.response?.headers.get('X-Total-Count') || undefined,
        }
      },
    }),
    getItem: builder.query<ItemDescription | undefined, string>({
      query: itemId => `items/${itemId}`,
      transformResponse: (response: Response<ItemDescription>) => response?.payload,
    }),
  }),
})

export const { useGetItemsQuery, useGetItemQuery } = apiSlice
