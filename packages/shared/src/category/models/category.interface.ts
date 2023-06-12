import { PathFromRoot } from '../../item/models/source/source-search-result.interface'

interface Category {
  id: string
  name: string
  pathFromRoot: PathFromRoot[]
}

export { Category }
