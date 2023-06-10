import { Send } from 'express-serve-static-core'
import { Response } from 'shared/src/types'

export type TypedResponse<T = any> = {
  json: Send<Response<T>, TypedResponse<T>>
  status: (code: number) => TypedResponse<T>
  set: (name: string, value: string) => void
} & Express.Response
