import type { Meta, StoryObj } from '@storybook/react'
import Icon from './Icon'

const meta: Meta<typeof Icon> = {
  title: 'Atoms/Icon',
  tags: ['autodocs'],
  component: Icon,
}

export default meta

type Story = StoryObj<typeof meta>

export const ArrowRight: Story = {
  args: {
    type: 'arrow-right',
  },
}

export const Sort: Story = {
  args: {
    type: 'sort',
  },
}

export const SortAsc: Story = {
  args: {
    type: 'sort-asc',
  },
}

export const SortDesc: Story = {
  args: {
    type: 'sort-desc',
  },
}
