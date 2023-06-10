import { Request } from 'express'
import { Item } from 'shared/src/item'
import { GetItemService } from '../../types/item-service'
import { StatusCodes, TypedResponse } from '../../types'

const getItemController =
  (getItemService: GetItemService) =>
  async (req: Request, res: TypedResponse<Item>): Promise<TypedResponse<Item>> => {
    const { id } = req.params as { id: string }
    if (!id) return res.status(StatusCodes.BAD_REQUEST).json({ message: 'Bad Request: Missing id', success: false })

    const item = await getItemService(id)
    if (!item) return res.status(StatusCodes.NOT_FOUND).json({ message: 'Not Found', success: false })

    return res.status(StatusCodes.OK).json({ message: 'Success', payload: item, success: true })
  }

export { getItemController }
