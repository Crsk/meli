import { FetchBaseQueryMeta, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Item } from 'shared/src/item'
import { Response } from 'shared/src/types'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api' }),
  endpoints: builder => ({
    getItems: builder.query<{ items: Item[]; totalCount: string | undefined }, string>({
      query: searchQuery => `items?q=${searchQuery}`,
      transformResponse: (response: Response<Item[]>, meta: FetchBaseQueryMeta) => ({
        items: response.payload || [],
        totalCount: meta.response?.headers.get('X-Total-Count') || undefined,
      }),
    }),
  }),
})

export const { useGetItemsQuery } = apiSlice
