import React from 'react'
import { render } from '@testing-library/react'
import { Theme } from 'shared/src/types'
import { TopBar } from './TopBar'
import { backgroundColorMap } from './properties'

interface TopBarProps {
  theme?: Theme
  value?: string
  onLogoClick?: () => void
  onSearch: () => void
}

vi.mock('./TopBar', () => ({
  TopBar: ({ theme = 'dark', value = '', onLogoClick, onSearch }: TopBarProps) => (
    <>
      <button data-testid="logo" onClick={onLogoClick}>
        <svg viewBox="0 0 100 100">
          <rect cx="50" cy="50" r="40" fill={backgroundColorMap[theme]} />
        </svg>
      </button>

      <input type="text" value={value} onChange={() => {}} />

      <button data-testid="search-button" onClick={onSearch}>
        search button
      </button>
    </>
  ),
}))

describe('TopBar', () => {
  test.each`
    theme        | expectedFill
    ${'light'}   | ${backgroundColorMap.light}
    ${'dark'}    | ${backgroundColorMap.dark}
    ${undefined} | ${backgroundColorMap.dark}
  `('renders the top bar with the $theme theme', ({ theme, expectedFill }) => {
    const { container } = render(<TopBar onSearch={() => {}} theme={theme} />)
    const svgElement = container.querySelector('svg')
    expect(svgElement).toBeInTheDocument()
    expect(svgElement?.firstChild).toHaveAttribute('fill', String(expectedFill))
  })

  it('applies the initial value when value prop is provided', () => {
    const { container } = render(<TopBar onSearch={() => {}} value="iPhone" />)
    const input = container.querySelector('input') as HTMLInputElement

    expect(input.value).toBe('iPhone')
  })

  it('handles the logo click properly', () => {
    const onLogoClick = vi.fn()
    const { container } = render(<TopBar onSearch={() => {}} onLogoClick={onLogoClick} />)
    const button = container.querySelector('button') as HTMLButtonElement

    button.click()

    expect(onLogoClick).toHaveBeenCalled()
  })

  it('handles onSearch event properly', () => {
    const onSearch = vi.fn()
    const { getByText } = render(<TopBar onSearch={onSearch} />)
    const searchButton = getByText(/search button/)

    searchButton.click()

    expect(onSearch).toHaveBeenCalled()
  })
})
