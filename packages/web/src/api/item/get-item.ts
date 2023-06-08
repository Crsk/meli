import axios from 'axios'
import { Item } from 'shared/src/models'
import { baseUrl } from '../base-url.api'

const getItem = async (id: number): Promise<Item> => {
  const response = await axios.get<Item>(`${baseUrl}/items/${id}`)
  if (response.status !== 200) throw new Error(`Failed to fetch item with ID ${id}`)
  const { data } = response

  return data
}

export { getItem }
