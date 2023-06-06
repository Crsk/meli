import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from './Badge'

const meta = {
  title: 'Atoms/Badge',
  component: Badge,
  tags: ['autodocs'],
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const BadeBlueDark: Story = {
  args: {
    theme: 'dark',
    color: 'blue',
    children: 'MÁS VENDIDO',
  },
}

export const BadgeGreenDark: Story = {
  args: {
    theme: 'dark',
    color: 'green',
    children: 'Más Vendido',
  },
}

export const BadgeYellowDark: Story = {
  args: {
    theme: 'dark',
    color: 'yellow',
    children: 'Más Vendido',
  },
}

export const BadgeRedDark: Story = {
  args: {
    theme: 'dark',
    color: 'red',
    children: 'Más Vendido',
  },
}

export const BadeBlueLight: Story = {
  args: {
    theme: 'light',
    color: 'blue',
    children: 'Más Vendido',
  },
}

export const BadgeGreenLight: Story = {
  args: {
    theme: 'light',
    color: 'green',
    children: 'Más Vendido',
  },
}

export const BadgeYellowLight: Story = {
  args: {
    theme: 'light',
    color: 'yellow',
    children: 'Más Vendido',
  },
}

export const BadgeRedLight: Story = {
  args: {
    theme: 'light',
    color: 'red',
    children: 'Más Vendido',
  },
}
