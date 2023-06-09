import type { Meta, StoryObj } from '@storybook/react'
import { ProductDetailsCard } from './ProductDetailsCard'

const meta = {
  title: 'Organisms/ProductDetailsCard',
  component: ProductDetailsCard,
  tags: ['autodocs'],
} satisfies Meta<typeof ProductDetailsCard>

export default meta
type Story = StoryObj<typeof meta>

export const ProductDetailsCardDark: Story = {
  args: {
    theme: 'dark',
    productDetails: {
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
      soldQuantity: 5674,
      description:
        'Lorem ipsum dolor sit amet. Eum nisi similique et consequatur natus in quod maiores aut voluptatem voluptatem et inventore repellendus et aperiam provident ex officia vitae. Aut dolor officiis aut eveniet dolores et mollitia vero eos aperiam voluptas eum nesciunt veniam qui quis harum aut necessitatibus expedita. Qui maiores voluptatem in doloribus maiores ad praesentium reprehenderit. Aut numquam quae eum internos quaerat hic voluptatem beatae non sunt deserunt aut delectus dolorum aut minus architecto. Nam error veritatis ut excepturi odio sed rerum galisum aut dolor libero. Est explicabo deleniti sit tempore provident in repellendus reprehenderit. Cum iusto nostrum sed illo vero non harum ullam hic culpa quas ut ducimus optio qui facilis tenetur. Est laudantium blanditiis est reprehenderit iste in beatae quaerat et rerum ipsam. Ut minima incidunt est molestiae recusandae cum itaque vitae non autem reiciendis At ipsum accusantium vel dicta eius aut numquam reprehenderit! Vel nulla voluptatem aut ipsa repellendus et quae distinctio est quam iste ut totam dolore aut culpa ratione est itaque quia.',
    },
  },
}

export const ProductDetailsCardLight: Story = {
  args: {
    theme: 'light',
    productDetails: {
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
      soldQuantity: 200,
      description:
        'Lorem ipsum dolor sit amet. Eum nisi similique et consequatur natus in quod maiores aut voluptatem voluptatem et inventore repellendus et aperiam provident ex officia vitae. Aut dolor officiis aut eveniet dolores et mollitia vero eos aperiam voluptas eum nesciunt veniam qui quis harum aut necessitatibus expedita. Qui maiores voluptatem in doloribus maiores ad praesentium reprehenderit. Aut numquam quae eum internos quaerat hic voluptatem beatae non sunt deserunt aut delectus dolorum aut minus architecto. Nam error veritatis ut excepturi odio sed rerum galisum aut dolor libero. Est explicabo deleniti sit tempore provident in repellendus reprehenderit. Cum iusto nostrum sed illo vero non harum ullam hic culpa quas ut ducimus optio qui facilis tenetur. Est laudantium blanditiis est reprehenderit iste in beatae quaerat et rerum ipsam. Ut minima incidunt est molestiae recusandae cum itaque vitae non autem reiciendis At ipsum accusantium vel dicta eius aut numquam reprehenderit! Vel nulla voluptatem aut ipsa repellendus et quae distinctio est quam iste ut totam dolore aut culpa ratione est itaque quia.',
    },
  },
}
