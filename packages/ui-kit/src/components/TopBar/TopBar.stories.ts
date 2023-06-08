import type { Meta, StoryObj } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { TopBar } from './TopBar'

const meta: Meta<typeof TopBar> = {
  title: 'Molecules/TopBar',
  tags: ['autodocs'],
  component: TopBar,
  args: {
    onLogoClick: action('onLogoClick'),
  },
  argTypes: {
    theme: {
      control: {
        type: 'radio',
        options: ['dark', 'light'],
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const TopBarDark: Story = {
  args: {
    theme: 'dark',
  },
}

export const TopBarLight: Story = {
  args: {
    theme: 'light',
  },
}

export const TopBarDarkWithValue: Story = {
  args: {
    theme: 'dark',
    value: 'iPhone',
  },
}

export const TopBarLightWithValue: Story = {
  args: {
    theme: 'light',
    value: 'iPhone',
  },
}
