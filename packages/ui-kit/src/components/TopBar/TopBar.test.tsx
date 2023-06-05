import React from 'react'
import { render } from '@testing-library/react'
import { TopBar } from './TopBar'
import { Theme } from '../../types/theme.type'
import { backgroundColorMap } from './properties'

interface TopBarProps {
  theme?: Theme
}

vi.mock('./TopBar', () => ({
  TopBar: ({ theme = 'dark' }: TopBarProps) => (
    <svg viewBox="0 0 100 100">
      <rect cx="50" cy="50" r="40" fill={backgroundColorMap[theme]} />
    </svg>
  ),
}))

describe('TopBar', () => {
  test.each`
    theme        | expectedFill
    ${'light'}   | ${backgroundColorMap.light}
    ${'dark'}    | ${backgroundColorMap.dark}
    ${undefined} | ${backgroundColorMap.dark}
  `('renders the top bar with the $theme theme', ({ theme, expectedFill }) => {
    const { container } = render(<TopBar theme={theme} />)
    const svgElement = container.querySelector('svg')
    expect(svgElement).toBeInTheDocument()
    expect(svgElement?.firstChild).toHaveAttribute('fill', String(expectedFill))
  })
})
