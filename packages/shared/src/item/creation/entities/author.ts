import { Author } from '../../models/author.interface'

const author = (name: string, lastname: string): { author: Author } => ({
  author: { name, lastname },
})

export { author }
