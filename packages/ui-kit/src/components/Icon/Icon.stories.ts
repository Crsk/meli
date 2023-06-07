import type { Meta, StoryObj } from '@storybook/react'
import { Icon } from './Icon'

const meta: Meta<typeof Icon> = {
  title: 'Atoms/Icon',
  tags: ['autodocs'],
  component: Icon,
}

export default meta

type Story = StoryObj<typeof meta>

export const ArrowRightDark: Story = {
  args: {
    type: 'arrow-right',
    theme: 'dark',
  },
}

export const ArrowRightLight: Story = {
  args: {
    type: 'arrow-right',
    theme: 'light',
  },
}

export const SortDark: Story = {
  args: {
    type: 'sort',
    theme: 'dark',
  },
}

export const SortLight: Story = {
  args: {
    type: 'sort',
    theme: 'light',
  },
}

export const SortAscDark: Story = {
  args: {
    type: 'sort-asc',
    theme: 'dark',
  },
}

export const SortAscLight: Story = {
  args: {
    type: 'sort-asc',
    theme: 'light',
  },
}

export const SortDescDark: Story = {
  args: {
    type: 'sort-desc',
    theme: 'dark',
  },
}

export const SortDescLight: Story = {
  args: {
    type: 'sort-desc',
    theme: 'light',
  },
}

export const SearchDark: Story = {
  args: {
    type: 'search',
    theme: 'dark',
  },
}

export const SearchLight: Story = {
  args: {
    type: 'search',
    theme: 'light',
  },
}

export const RayDark: Story = {
  args: {
    type: 'ray',
    theme: 'dark',
  },
}

export const RayLight: Story = {
  args: {
    type: 'ray',
    theme: 'light',
  },
}

export const StarDark: Story = {
  args: {
    type: 'star',
    theme: 'dark',
  },
}

export const StarLight: Story = {
  args: {
    type: 'star',
    theme: 'light',
  },
}
