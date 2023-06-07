import type { Meta, StoryObj } from '@storybook/react'
import { ProductCard } from './ProductCard'

const meta = {
  title: 'Organisms/ProductCard',
  component: ProductCard,
  tags: ['autodocs'],
} satisfies Meta<typeof ProductCard>

export default meta
type Story = StoryObj<typeof meta>

export const ProductCardDarkBestSeller: Story = {
  args: {
    theme: 'dark',
    bestSeller: true,
    product: {
      id: 'MLA123456789',
      title: 'Apple iPhone 11 (64 GB) - Negro',
      price: {
        currency: 'CLP',
        amount: 399,
        decimals: 990,
      },
      originalPrice: {
        amount: 669,
        decimals: 990,
      },
      picture: null,
      condition: '12x $33.332 sin interés',
      freeShipping: true,
      seller: 'Apple',
      reviewCount: 2089,
      colorCount: 5,
    },
  },
}

export const ProductCardDarkNoBestSeller: Story = {
  args: {
    theme: 'dark',
    bestSeller: false,
    product: {
      id: 'MLA123456789',
      title: 'Apple iPhone 11 (64 GB) - Negro',
      price: {
        currency: 'CLP',
        amount: 399,
        decimals: 990,
      },
      originalPrice: {
        amount: 669,
        decimals: 990,
      },
      picture: null,
      condition: '12x $33.332 sin interés',
      freeShipping: true,
      seller: 'Apple',
      reviewCount: 2089,
      colorCount: 5,
    },
  },
}

export const ProductCardLightBestSeller: Story = {
  args: {
    theme: 'light',
    bestSeller: true,
    product: {
      id: 'MLA123456789',
      title: 'Apple iPhone 11 (64 GB) - Negro',
      price: {
        currency: 'CLP',
        amount: 399,
        decimals: 990,
      },
      originalPrice: {
        amount: 669,
        decimals: 990,
      },
      picture: null,
      condition: '12x $33.332 sin interés',
      freeShipping: true,
      seller: 'Apple',
      reviewCount: 1089,
      colorCount: 5,
    },
  },
}

export const ProductCardLightNoBestSeller: Story = {
  args: {
    theme: 'light',
    bestSeller: false,
    product: {
      id: 'MLA123456789',
      title: 'Apple iPhone 11 (64 GB) - Negro',
      price: {
        currency: 'CLP',
        amount: 399,
        decimals: 990,
      },
      originalPrice: {
        amount: 669,
        decimals: 990,
      },
      picture: null,
      condition: '12x $33.332 sin interés',
      freeShipping: true,
      seller: 'Apple',
      reviewCount: 1089,
      colorCount: 5,
    },
  },
}
