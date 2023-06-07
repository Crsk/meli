import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import { ThemeContext, ThemeProvider } from './theme.context'

describe('ThemeProvider', () => {
  let realLocalStorage: any

  beforeEach(() => {
    realLocalStorage = global.localStorage

    const localStorageMock = (() => {
      let store: any = {}

      return {
        getItem(key: any) {
          return store[key] || null
        },
        setItem(key: any, value: any) {
          store[key] = value.toString()
        },
        clear() {
          store = {}
        },
      }
    })()

    Object.defineProperty(window, 'localStorage', {
      value: localStorageMock,
    })
  })

  afterEach(() => {
    Object.defineProperty(window, 'localStorage', {
      value: realLocalStorage,
    })
  })

  it('should render the children', () => {
    const { getByText } = render(
      <ThemeProvider>
        <div>Child component</div>
      </ThemeProvider>
    )

    expect(getByText('Child component')).toBeInTheDocument()
  })

  it('should toggle the theme when the button is clicked', () => {
    const { getByText } = render(
      <ThemeProvider>
        <ThemeContext.Consumer>
          {({ theme, toggleTheme }) => <button onClick={toggleTheme}>{theme}</button>}
        </ThemeContext.Consumer>
      </ThemeProvider>
    )

    const button = getByText('light')
    fireEvent.click(button)

    expect(button.textContent).toBe('dark')

    fireEvent.click(button)

    expect(button.textContent).toBe('light')
  })

  it('should persist the theme in localStorage', () => {
    const { getByText } = render(
      <ThemeProvider>
        <ThemeContext.Consumer>
          {({ theme, toggleTheme }) => <button onClick={toggleTheme}>{theme}</button>}
        </ThemeContext.Consumer>
      </ThemeProvider>
    )

    const button = getByText('light')
    fireEvent.click(button)

    expect(window.localStorage.getItem('theme')).toMatch(/dark/)
    fireEvent.click(button)

    expect(window.localStorage.getItem('theme')).toMatch(/light/)
  })
})
