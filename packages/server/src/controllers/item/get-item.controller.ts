import { Request } from 'express'
import { ItemDescriptionResult } from 'shared/src/item'
import { GetItemService } from '../../types/item-service'
import { StatusCodes, TypedResponse } from '../../types'

const getItemController =
  (getItemService: GetItemService) =>
  async (req: Request, res: TypedResponse<ItemDescriptionResult>): Promise<TypedResponse<ItemDescriptionResult>> => {
    const { id } = req.params as { id: string }
    if (!id) return res.status(StatusCodes.BAD_REQUEST).json({ message: 'Bad Request: Missing id', success: false })

    const response = await getItemService(id)
    if (!response) return res.status(StatusCodes.NOT_FOUND).json({ message: 'Not Found', success: false })

    return res.status(StatusCodes.OK).json({ message: 'Success', payload: response, success: true })
  }

export { getItemController }
