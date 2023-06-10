import axios from 'axios'

const { get } = axios.create({
  baseURL: 'https://api.mercadolibre.com',
})

export { get }
