import type { Meta, StoryObj } from '@storybook/react'
import { TopBar } from './TopBar'

const meta: Meta<typeof TopBar> = {
  title: 'Molecules/TopBar',
  tags: ['autodocs'],
  component: TopBar,
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
