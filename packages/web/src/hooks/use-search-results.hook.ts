import { useEffect, useState } from 'react'
import { Item } from 'shared/src/models'
import { getPaginate } from '../api/item'

const useSearchResults = (searchQuery: string): [Item[], number] => {
  const [items, setItems] = useState<Item[]>([])
  const [resultCount, setResultCount] = useState(0)

  useEffect(() => {
    const fetchItems = async () => {
      const { data, totalCount } = await getPaginate(searchQuery, 1, 4)
      setResultCount(totalCount)
      setItems(data)
    }

    fetchItems()
  }, [searchQuery])

  return [items, resultCount]
}

export { useSearchResults }
