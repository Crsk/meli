import { SourceItemDescription } from '../../models/source/source-item-description.interface'

const itemDescription = ({ plainText }: SourceItemDescription) => ({
  description: plainText,
})

export { itemDescription }
