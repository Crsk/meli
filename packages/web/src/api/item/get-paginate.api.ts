import axios from 'axios'
import { Item } from 'shared/src/item'
import { baseUrl } from '../base-url.api'

/**
 * Get items for the current page
 * @returns data: the items for the current page, totalCount: the total number of items (not just the current page)
 */
const getPaginate = async (
  query: string,
  currentPage: number,
  itemsPerPage: number
): Promise<{ data: Item[]; totalCount: number }> => {
  const response = await axios.get(`${baseUrl}/items`, {
    params: { q: query, _page: currentPage, _limit: itemsPerPage },
  })
  if (response.status !== 200) throw new Error('Network response was not ok')

  const totalCount = +(response.headers['x-total-count'] || 0)
  const { data } = response

  return { data, totalCount }
}

export { getPaginate }
