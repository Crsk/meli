import { Dispatch, useEffect, useState } from 'react'
import { ItemDescription } from 'shared/src/item'
import { getItem } from '../api/item'

const useItem = (
  id: string | undefined
): [ItemDescription | undefined, Dispatch<React.SetStateAction<ItemDescription | undefined>>] => {
  const [item, setItem] = useState<ItemDescription>()

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
