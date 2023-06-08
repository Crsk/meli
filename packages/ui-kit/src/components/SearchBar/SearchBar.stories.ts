import type { Meta, StoryObj } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { SearchBar } from './SearchBar'

const meta = {
  title: 'Cells/SearchBar',
  component: SearchBar,
  args: {
    onSearch: action('onSearch'),
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SearchBar>

export default meta
type Story = StoryObj<typeof meta>

export const SearchBarDark: Story = {
  args: {
    placeholder: 'Nunca dejes de buscar',
    onSearch: (searchValue: string) => {
      action('onSearch')(searchValue)
    },
    theme: 'dark',
  },
}

export const SearchBarLight: Story = {
  args: {
    placeholder: 'Nunca dejes de buscar',
    onSearch: (searchValue: string) => {
      action('onSearch')(searchValue)
    },
    theme: 'light',
  },
}

export const SearchBarDarkWithValue: Story = {
  args: {
    placeholder: 'Nunca dejes de buscar',
    onSearch: (searchValue: string) => {
      action('onSearch')(searchValue)
    },
    theme: 'dark',
    value: 'iPhone',
  },
}

export const SearchBarLightWithValue: Story = {
  args: {
    placeholder: 'Nunca dejes de buscar',
    onSearch: (searchValue: string) => {
      action('onSearch')(searchValue)
    },
    theme: 'light',
    value: 'iPhone',
  },
}
