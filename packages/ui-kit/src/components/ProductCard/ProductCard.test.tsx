import React from 'react'
import { render, screen } from '@testing-library/react'
import { ProductCard } from './ProductCard'
import { Theme } from '../../types/theme.type'
import { Item } from '../../models'

const theme: Theme = 'dark'

vi.mock('../Text/Text', () => ({
  Text: ({ children = '' }) => <div>{children}</div>,
}))
vi.mock('../Icon/Icon', () => ({
  Icon: () => <div />,
}))
vi.mock('../Rating/Rating', () => ({
  Rating: () => <div>Rating</div>,
}))
vi.mock('../Badge/Badge', () => ({
  Badge: () => <div>Badge</div>,
}))
vi.mock('../Image/Image', () => ({
  Image: () => <div>Image</div>,
}))
vi.mock('../../utils', () => ({
  priceDetails: () => ({
    formattedPrice: '$20',
    formattedOriginalPrice: '$25',
    discountPct: 20,
  }),
}))

describe('ProductCard', () => {
  let product: Item

  beforeEach(() => {
    product = {
      id: '1',
      picture: null,
      title: 'Product Title',
      seller: 'Product Seller',
      price: { currency: 'USD', amount: 20, decimals: 2 },
      originalPrice: { amount: 25, decimals: 2 },
      condition: 'new',
      colorCount: 2,
      reviewCount: 5,
      freeShipping: true,
    }
  })

  it('renders correctly', () => {
    render(<ProductCard theme={theme} product={product} />)

    expect(screen.getByText('Product Title')).toBeInTheDocument()
    expect(screen.getByText('Vendido por Product Seller')).toBeInTheDocument()
    expect(screen.getByText('Envío gratis')).toBeInTheDocument()
    expect(screen.getByText('FULL')).toBeInTheDocument()
  })

  it('renders price details correctly', () => {
    render(<ProductCard theme={theme} product={product} />)
    expect(screen.getByText('$20')).toBeInTheDocument()
    expect(screen.getByText('$25')).toBeInTheDocument()
    expect(screen.getByText('20% OFF')).toBeInTheDocument()
  })

  it('does not render the badge if not a best seller', () => {
    render(<ProductCard theme={theme} bestSeller={false} product={product} />)

    expect(screen.queryByText('MÁS VENDIDO')).not.toBeInTheDocument()
  })

  it('does not render the free shipping section if not free shipping', () => {
    product.freeShipping = false
    render(<ProductCard theme={theme} product={product} />)

    expect(screen.queryByText('Envío gratis')).not.toBeInTheDocument()
    expect(screen.queryByText('FULL')).not.toBeInTheDocument()
  })

  it('applies dark theme', () => {
    const { container } = render(<ProductCard theme="dark" product={product} />)

    expect(container.getElementsByClassName('container--dark').length).toBe(1)
  })

  it('applies light theme', () => {
    const { container } = render(<ProductCard theme="light" product={product} />)

    expect(container.getElementsByClassName('container--light').length).toBe(1)
  })
})
