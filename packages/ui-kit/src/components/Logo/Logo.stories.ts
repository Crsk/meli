import type { Meta, StoryObj } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Logo } from './Logo'

const meta: Meta<typeof Logo> = {
  title: 'Atoms/Logo',
  tags: ['autodocs'],
  component: Logo,
  args: {
    onClick: action('onSearch'),
  },
  argTypes: {
    theme: {
      control: {
        type: 'radio',
        options: ['dark', 'light'],
      },
    },
    size: {
      control: {
        type: 'radio',
      },
      options: ['S', 'M', 'L'],
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const LogoSmallDark: Story = {
  args: {
    theme: 'dark',
    size: 'S',
  },
}

export const LogoMediumDark: Story = {
  args: {
    theme: 'dark',
    size: 'M',
  },
}

export const LogoLargeDark: Story = {
  args: {
    theme: 'dark',
    size: 'L',
  },
}

export const LogoSmallLight: Story = {
  args: {
    theme: 'light',
    size: 'S',
  },
}

export const LogoMediumLight: Story = {
  args: {
    theme: 'light',
    size: 'M',
  },
}

export const LogoLargeLight: Story = {
  args: {
    theme: 'light',
    size: 'L',
  },
}
