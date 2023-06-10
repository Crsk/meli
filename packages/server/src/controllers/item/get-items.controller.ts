import { Request } from 'express'
import { Item } from 'shared/src/item'
import { GetItemsService } from '../../types/item-service'
import { StatusCodes, TypedResponse } from '../../types'

const getItemsController =
  (getItemsService: GetItemsService) =>
  async (req: Request, res: TypedResponse<Item[]>): Promise<TypedResponse<Item[]>> => {
    const query = req.query.q as string
    const items = await getItemsService(query)
    if (!items)
      return res.status(StatusCodes.NOT_FOUND).json({ message: `No Items found for "${query}"`, success: false })

    return res
      .status(StatusCodes.OK)
      .json({ message: `${items.length} Items retrieved`, payload: items, success: true })
  }

export { getItemsController }
