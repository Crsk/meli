import express, { Application } from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
import morgan from 'morgan'

dotenv.config()

const server: Application = express()

server.use(express.json())
server.use(express.urlencoded({ extended: false }))
server.use(morgan('dev'))
server.use(cors())

export default server
