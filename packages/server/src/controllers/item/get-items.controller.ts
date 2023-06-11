import { Request } from 'express'
import { SearchResult } from 'shared/src/item'
import { GetItemsService } from '../../types/item-service'
import { StatusCodes, TypedResponse } from '../../types'

const getItemsController =
  (getItemsService: GetItemsService) =>
  async (req: Request, res: TypedResponse<SearchResult>): Promise<TypedResponse<SearchResult>> => {
    const query = req.query.q as string
    const { searchResult, totalCount } = await getItemsService(query)

    if (!searchResult)
      return res.status(StatusCodes.NOT_FOUND).json({ message: `No Items found for "${query}"`, success: false })

    res.set('X-Total-Count', Intl.NumberFormat().format(+totalCount))

    return res
      .status(StatusCodes.OK)
      .json({ message: `${searchResult.items?.length} Items retrieved`, payload: searchResult, success: true })
  }

export { getItemsController }
