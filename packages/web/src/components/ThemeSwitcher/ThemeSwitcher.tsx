import React, { useContext } from 'react'
import styles from './ThemeSwitcher.module.scss'
import { ThemeContext } from '../../contexts'

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <div className={styles.theme}>
      <button onClick={toggleTheme}>{theme === 'light' ? '🌝' : '🌚'}</button>
    </div>
  )
}

export { ThemeSwitcher }
