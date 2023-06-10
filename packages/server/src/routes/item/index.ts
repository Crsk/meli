import { Application } from 'express'
import { getItemController, getItemsController } from '../../controllers/item'
import { getItem, getItems } from '../../services/item'
import { errorHandler } from '../../middlewares'

const itemRoutes = (app: Application) => {
  app.get('/api/items/:id', errorHandler(getItemController(getItem)))
  app.get('/api/items', errorHandler(getItemsController(getItems)))
}

export { itemRoutes }
