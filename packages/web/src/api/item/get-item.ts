import axios from 'axios'
import { ItemDetails } from 'shared/src/models'
import { baseUrl } from '../base-url.api'

const getItem = async (id: string): Promise<ItemDetails> => {
  const response = await axios.get<ItemDetails>(`${baseUrl}/items/${id}`)
  if (response.status !== 200) throw new Error(`Failed to fetch item with ID ${id}`)
  const { data } = response

  return data
}

export { getItem }
