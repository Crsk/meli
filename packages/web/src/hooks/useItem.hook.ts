import { Dispatch, useEffect, useState } from 'react'
import { ItemDetails } from 'shared/src/models'
import { getItem } from '../api/item'

const useItem = (
  id: string | undefined
): [ItemDetails | undefined, Dispatch<React.SetStateAction<ItemDetails | undefined>>] => {
  const [item, setItem] = useState<ItemDetails>()

  useEffect(() => {
    const fetchItem = async (itemId: string) => {
      const data = await getItem(itemId)
      setItem(data)
    }
    if (id) fetchItem(id)
  }, [id])

  return [item, setItem]
}

export { useItem }
