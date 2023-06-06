import type { Meta, StoryObj } from '@storybook/react'
import { Rating } from './Rating'

const meta = {
  title: 'Cells/Rating',
  component: Rating,
  tags: ['autodocs'],
  argTypes: {
    theme: {
      control: {
        type: 'radio',
        options: ['dark', 'light'],
      },
    },
  },
} satisfies Meta<typeof Rating>

export default meta
type Story = StoryObj<typeof meta>

export const RatingDark: Story = {
  args: {
    theme: 'dark',
    reviewCount: 9999,
  },
}

export const RatingLight: Story = {
  args: {
    theme: 'light',
    reviewCount: 9999,
  },
}
