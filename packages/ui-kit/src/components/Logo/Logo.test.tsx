import React from 'react'
import { render } from '@testing-library/react'
import { Theme } from 'shared/src/types'
import { Logo } from './Logo'
import { LogoSize, fontColorMap, sizeMap } from './properties'

interface LogoProps {
  theme?: Theme
  size?: LogoSize
}

vi.mock('./Logo', () => ({
  Logo: ({ theme = 'dark', size = 'S' }: LogoProps) => (
    <svg width={sizeMap[size]} viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="40" fill={fontColorMap[theme]} />
    </svg>
  ),
}))

describe('Logo', () => {
  test.each`
    theme        | size         | expectedWidth | expectedFill
    ${'light'}   | ${'S'}       | ${sizeMap.S}  | ${fontColorMap.light}
    ${'light'}   | ${'M'}       | ${sizeMap.M}  | ${fontColorMap.light}
    ${'light'}   | ${'L'}       | ${sizeMap.L}  | ${fontColorMap.light}
    ${'dark'}    | ${'S'}       | ${sizeMap.S}  | ${fontColorMap.dark}
    ${'dark'}    | ${'M'}       | ${sizeMap.M}  | ${fontColorMap.dark}
    ${'dark'}    | ${'L'}       | ${sizeMap.L}  | ${fontColorMap.dark}
    ${'light'}   | ${undefined} | ${sizeMap.S}  | ${fontColorMap.light}
    ${'light'}   | ${undefined} | ${sizeMap.S}  | ${fontColorMap.light}
    ${'light'}   | ${undefined} | ${sizeMap.S}  | ${fontColorMap.light}
    ${'dark'}    | ${undefined} | ${sizeMap.S}  | ${fontColorMap.dark}
    ${'dark'}    | ${undefined} | ${sizeMap.S}  | ${fontColorMap.dark}
    ${'dark'}    | ${undefined} | ${sizeMap.S}  | ${fontColorMap.dark}
    ${undefined} | ${'S'}       | ${sizeMap.S}  | ${fontColorMap.dark}
    ${undefined} | ${'M'}       | ${sizeMap.M}  | ${fontColorMap.dark}
    ${undefined} | ${'L'}       | ${sizeMap.L}  | ${fontColorMap.dark}
  `('renders the logo with the $theme theme and $size size', ({ theme, size, expectedWidth, expectedFill }) => {
    const { container } = render(<Logo theme={theme} size={size} />)
    const svgElement = container.querySelector('svg')
    expect(svgElement).toBeInTheDocument()
    expect(svgElement).toHaveAttribute('width', String(expectedWidth))
    expect(svgElement?.firstChild).toHaveAttribute('fill', String(expectedFill))
  })
})
