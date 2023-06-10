export const errorHandler = (fn: any) => (_: any, res: any, next: any) =>
  fn(_, res, next).catch((e: any) => {
    res.status(500).json({ message: `${e}` || 'Internal Server Error', success: false, payload: {} })
    next()
  })
