/* eslint-disable no-restricted-syntax */
import { CamelCase, SnakeCase } from '../types'

function camelToSnakeCase<T>(obj: CamelCase<T>): SnakeCase<T> {
  const newObj: any = {}

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const newKey = key.replace(/([A-Z])/g, group => `_${group.toLowerCase()}`)

      if (obj[key] !== null && typeof obj[key] === 'object') {
        newObj[newKey] = Array.isArray(obj[key])
          ? (obj[key] as any[]).map(item => camelToSnakeCase(item))
          : camelToSnakeCase(obj[key] as any)
      } else {
        newObj[newKey] = obj[key]
      }
    }
  }

  return newObj as SnakeCase<T>
}

function snakeToCamelCase<T>(obj: SnakeCase<T>): CamelCase<T> {
  const newObj: any = {}

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const newKey = key.replace(/([-_][a-z])/g, group => group.toUpperCase().replace('-', '').replace('_', ''))

      if (obj[key] !== null && typeof obj[key] === 'object') {
        newObj[newKey] = Array.isArray(obj[key])
          ? (obj[key] as any[]).map(item => snakeToCamelCase(item))
          : snakeToCamelCase(obj[key] as any)
      } else {
        newObj[newKey] = obj[key]
      }
    }
  }

  return newObj as CamelCase<T>
}

export const toCamelCase = <T>(data: SnakeCase<T>) => snakeToCamelCase<T>(data)
export const toSnakeCase = <T>(data: CamelCase<T>) => camelToSnakeCase<T>(data)
