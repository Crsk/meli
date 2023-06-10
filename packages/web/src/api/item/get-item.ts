import axios from 'axios'
import { ItemDescription } from 'shared/src/item'
import { baseUrl } from '../base-url.api'

const getItem = async (id: string): Promise<ItemDescription> => {
  const response = await axios.get<ItemDescription>(`${baseUrl}/items/${id}`)
  if (response.status !== 200) throw new Error(`Failed to fetch item with ID ${id}`)
  const { data } = response

  return data
}

export { getItem }
