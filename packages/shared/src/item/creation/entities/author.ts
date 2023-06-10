import { Author } from '../../models/author.interface'

const author = (name: string, lastname: string): Author => ({
  name,
  lastname,
})

export { author }
