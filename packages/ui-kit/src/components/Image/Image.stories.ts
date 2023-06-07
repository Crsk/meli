import type { Meta, StoryObj } from '@storybook/react'

import { Image } from './Image'

const meta = {
  title: 'Atoms/Image',
  component: Image,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: false, // Storybook doesn't update images properly on changes
    },
  },
} satisfies Meta<typeof Image>

export default meta
type Story = StoryObj<typeof meta>

export const ImageSmall: Story = {
  args: {
    size: 'small',
    src: './placeholder-images/small.png',
  },
}

export const ImageMedium: Story = {
  args: {
    size: 'medium',
    src: './placeholder-images/medium.png',
  },
}

export const ImageLarge: Story = {
  args: {
    size: 'large',
    src: './placeholder-images/large.png',
  },
}
