import React from 'react'
import { Theme } from 'shared/src/types'
import { Logo, SearchBar } from 'ui-kit/src/components'
import styles from './Home.module.scss'

interface HomePageProps {
  theme?: Theme
}

const Home = ({ theme = 'light' }: HomePageProps) => {
  const handleSearch = (value: string) => {
    console.log(value)
  }

  return (
    <main>
      <div className={[styles.container, styles[`container--${theme}`]].join(' ')}>
        <div className={styles.logo}>
          <Logo size="L" theme={theme} />
        </div>
        <div className={styles['search-bar']}>
          <SearchBar onSearch={handleSearch} placeholder="Nunca dejes de buscar" theme={theme} />
        </div>
      </div>
    </main>
  )
}

export { Home }
