import { SourceCategory } from '../../models/source/source-category.interface'

const category = (_category: SourceCategory) => ({
  category: {
    id: _category.id,
    name: _category.name,
    pathFromRoot: _category.pathFromRoot,
  },
})

export { category }
