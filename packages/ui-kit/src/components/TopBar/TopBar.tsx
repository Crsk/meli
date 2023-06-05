import React from 'react'
import styles from './top-bar.module.scss'
import { Logo } from '../Logo/Logo'
import { SearchBar } from '../SearchBar/SearchBar'
import { Theme } from '../../types/theme.type'
import { backgroundColorMap } from './properties/background-color.map'

type TopBarProps = {
  theme?: Theme
}

const TopBar = ({ theme = 'dark' }: TopBarProps) => {
  const handleOnSearch = (value: string) => {
    console.log(value)
  }

  return (
    <div className={`${styles['top-bar']} ${styles[`top-bar--${theme}`]}`}>
      <div className={styles['logo--container']}>
        <Logo theme={theme} size="S" />
      </div>
      <div className={styles['search-bar--container']}>
        <SearchBar theme={theme} placeholder="Nunca pares de buscar" onSearch={handleOnSearch} />
      </div>
      <div className={styles['search-bar--banner']}>
        <svg width="100%" height="29">
          <rect width="100%" height="29" style={{ fill: backgroundColorMap[theme] }} />
        </svg>
      </div>
    </div>
  )
}

export { TopBar }
