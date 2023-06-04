import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './Button'

const meta = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Comprar ahora',
    icon: 'arrow-right',
  },
}

export const Medium: Story = {
  args: {
    size: 'medium',
    label: 'Comprar ahora',
    icon: 'arrow-right',
  },
}

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Comprar ahora',
    icon: 'arrow-right',
  },
}
