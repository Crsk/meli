import express, { Application } from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
import morgan from 'morgan'
import { itemRoutes } from './routes/item'
import signMiddleware from './middlewares/sign.middleware'

dotenv.config()

const server: Application = express()

server.all('/*', (_req, res, next) => {
  res.header('Access-Control-Expose-Headers', '*')
  next()
})
server.use(express.json())
server.use(express.urlencoded({ extended: false }))
server.use(morgan('dev'))
server.use(cors())
server.use(signMiddleware)
itemRoutes(server)

export default server
