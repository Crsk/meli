export default (_req: any, res: any, next: any) => {
  const oldSend = res.send

  res.send = (data: any) => {
    try {
      const parsedData = JSON.parse(data)
      if (parsedData) {
        data = {
          message: parsedData.message,
          payload: { ...parsedData.payload, author: { name: 'Christopher', lastName: 'kiessling' } },
          success: parsedData.success,
        }

        oldSend.apply(res, [JSON.stringify(data)])
      }
    } catch (e) {
      console.log('ERROR', e)
    }
  }

  next()
}
