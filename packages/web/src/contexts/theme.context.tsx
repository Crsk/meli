import React, { MouseEventHandler, createContext, useCallback, useEffect, useMemo, useState } from 'react'
import { Theme } from 'shared/src/types/theme.type'

const ThemeContext = createContext<{ theme: Theme; toggleTheme: MouseEventHandler<HTMLButtonElement> }>({
  theme: 'light',
  toggleTheme: () => {},
})

const ThemeProvider = ({ children }: any) => {
  const [theme, setTheme] = useState(() => {
    const localTheme = localStorage.getItem('theme')

    return localTheme ? JSON.parse(localTheme) : 'light'
  })

  useEffect(() => localStorage.setItem('theme', JSON.stringify(theme)), [theme])

  const toggleTheme = useCallback(() => setTheme((prevTheme: Theme) => (prevTheme === 'light' ? 'dark' : 'light')), [])
  const darkModeValue = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme])

  return <ThemeContext.Provider value={darkModeValue}>{children}</ThemeContext.Provider>
}

export { ThemeContext, ThemeProvider }
