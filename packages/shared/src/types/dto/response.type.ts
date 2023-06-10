// The response the client receives from the API calls
export type Response<T = any> = { message: string; payload?: T; success: boolean }
